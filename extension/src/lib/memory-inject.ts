/**
 * Memory Injection Module for AI Chat Extensions
 *
 * Implements the Native Setter Hack approach (validated by Supermemory source code)
 * for injecting memory context into AI chat input boxes across multiple platforms.
 *
 * Supports: ChatGPT, Claude, Gemini (Quill), Kimi (Lexical), and generic inputs.
 */

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type Platform = 'gemini' | 'kimi' | 'chatgpt' | 'claude' | 'unknown';

export interface InjectionOptions {
  /** Whether to dispatch input/change events after injection (default: true) */
  dispatchEvents?: boolean;
  /** Whether to focus the element before injection (default: true) */
  focusFirst?: boolean;
  /** Whether to clear existing content before injection (default: false) */
  clearFirst?: boolean;
}

interface MemoryCardOptions {
  /** Position: 'top' or 'bottom' relative to input (default: 'top') */
  position?: 'top' | 'bottom';
  /** Maximum number of memories to display (default: 5) */
  maxItems?: number;
  /** Custom CSS class prefix (default: 'aimem') */
  classPrefix?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Platform Detection
// ─────────────────────────────────────────────────────────────────────────────

const PLATFORM_SELECTORS: Record<Exclude<Platform, 'unknown'>, string> = {
  gemini: 'rich-textarea .ql-editor, rich-textarea [contenteditable]',
  kimi: '[data-lexical-editor="true"]',
  chatgpt: '#prompt-textarea.ProseMirror, #prompt-textarea[contenteditable]',
  claude: '.ProseMirror[contenteditable], [contenteditable].ProseMirror',
};

/**
 * Detect which platform's input box we're dealing with.
 */
export function detectPlatform(element: HTMLElement): Platform {
  if (element.closest?.('rich-textarea') || element.classList.contains('ql-editor')) {
    return 'gemini';
  }
  if (element.getAttribute('data-lexical-editor') === 'true') {
    return 'kimi';
  }
  // ChatGPT: #prompt-textarea with ProseMirror
  if (element.id === 'prompt-textarea' || element.closest?.('#prompt-textarea')) {
    return 'chatgpt';
  }
  // Claude: ProseMirror contenteditable without #prompt-textarea
  if (
    element.classList.contains('ProseMirror') &&
    element.getAttribute('contenteditable') === 'true' &&
    element.id !== 'prompt-textarea'
  ) {
    return 'claude';
  }
  return 'unknown';
}

/**
 * Find the primary input element for a given platform on the current page.
 */
export function findInputElement(platform?: Platform): HTMLElement | null {
  if (platform && platform !== 'unknown') {
    const selector = PLATFORM_SELECTORS[platform];
    if (selector) {
      return document.querySelector<HTMLElement>(selector);
    }
  }
  // Try all platforms in priority order
  for (const [, selector] of Object.entries(PLATFORM_SELECTORS)) {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) return el;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Native Setter Hack Utilities
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Native setter for textarea.value — bypasses React/Vue/Svelte controlled component
 * overrides that intercept property assignment.
 */
function nativeTextareaSet(textarea: HTMLTextAreaElement, value: string): void {
  const descriptor = Object.getOwnPropertyDescriptor(
    HTMLTextAreaElement.prototype,
    'value'
  );
  if (descriptor?.set) {
    descriptor.set.call(textarea, value);
  } else {
    textarea.value = value;
  }
  textarea.dispatchEvent(new Event('input', { bubbles: true }));
  textarea.dispatchEvent(new Event('change', { bubbles: true }));
}

/**
 * Dispatch a comprehensive set of events to ensure framework reactivity.
 */
function dispatchSyntheticEvents(element: HTMLElement): void {
  const events: Event[] = [
    new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertText' }),
    new Event('change', { bubbles: true }),
    new Event('blur', { bubbles: true }),
    new Event('focus', { bubbles: true }),
  ];
  for (const event of events) {
    try {
      element.dispatchEvent(event);
    } catch {
      // Some events may not be constructable in all contexts; ignore.
    }
  }
}

/**
 * Set innerHTML of a contenteditable div and dispatch events.
 * Appends text while preserving existing structure.
 */
function setContentEditableContent(
  element: HTMLElement,
  text: string,
  clearFirst: boolean
): boolean {
  try {
    const formatted = escapeHtml(text).replace(/\n/g, '<br>');
    if (clearFirst) {
      element.innerHTML = `<p>${formatted}</p>`;
    } else {
      // Append at the end
      const paragraph = document.createElement('p');
      paragraph.innerHTML = formatted;
      element.appendChild(paragraph);
    }
    dispatchSyntheticEvents(element);
    // Move cursor to end
    placeCaretAtEnd(element);
    return true;
  } catch (err) {
    console.warn('[aimem] setContentEditableContent failed:', err);
    return false;
  }
}

/**
 * Use execCommand to insert text (last-resort fallback for contenteditable).
 */
function execCommandInsert(element: HTMLElement, text: string): boolean {
  try {
    element.focus();
    const success = document.execCommand('insertText', false, text);
    if (success) {
      dispatchSyntheticEvents(element);
      return true;
    }
    return false;
  } catch (err) {
    console.warn('[aimem] execCommandInsert failed:', err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Platform-Specific Injection Strategies
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Gemini: Use Quill API via rich-textarea's __quill instance.
 */
function injectGemini(element: HTMLElement, text: string, clearFirst: boolean): boolean {
  try {
    const richTextarea = element.closest?.('rich-textarea') as HTMLElement & {
      __quill?: { setText: (text: string) => void; insertText: (index: number, text: string) => void; getLength: () => number };
    };

    const quill = richTextarea?.__quill ?? (element as any).__quill;
    if (quill) {
      if (clearFirst) {
        quill.setText(text);
      } else {
        const len = quill.getLength();
        quill.insertText(len - 1, '\n' + text);
      }
      dispatchSyntheticEvents(element);
      return true;
    }
  } catch (err) {
    console.warn('[aimem] Gemini Quill injection failed:', err);
  }
  return false;
}

/**
 * Kimi: Use Lexical API via __lexicalEditor instance.
 */
function injectKimi(element: HTMLElement, text: string, clearFirst: boolean): boolean {
  try {
    const lexicalEditor = (element as any).__lexicalEditor;
    if (lexicalEditor?.update) {
      lexicalEditor.update(() => {
        // Lexical internal imports — these are available on the editor instance
        const root = lexicalEditor.getRootElement?.();
        if (root) {
          if (clearFirst) {
            root.innerHTML = '';
          }
          const p = document.createElement('p');
          p.textContent = text;
          root.appendChild(p);
        }
      });
      dispatchSyntheticEvents(element);
      return true;
    }
  } catch (err) {
    console.warn('[aimem] Kimi Lexical injection failed:', err);
  }
  return false;
}

/**
 * ChatGPT/Claude (ProseMirror contenteditable): innerHTML manipulation with events.
 */
function injectProseMirror(element: HTMLElement, text: string, clearFirst: boolean): boolean {
  return setContentEditableContent(element, text, clearFirst);
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Injection Function
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Inject text into an AI chat input element using the best available strategy.
 *
 * Priority order:
 * 1. Platform-native API (Quill for Gemini, Lexical for Kimi)
 * 2. InnerHTML manipulation for contenteditable divs (ChatGPT/Claude ProseMirror)
 * 3. Native Setter Hack for textarea elements
 * 4. execCommand('insertText') as last resort
 *
 * @param element - The input HTMLElement to inject into
 * @param text - The text to inject
 * @param options - Injection configuration
 * @returns true if injection succeeded, false otherwise
 */
export function injectMemory(
  element: HTMLElement,
  text: string,
  options: InjectionOptions = {}
): boolean {
  const {
    dispatchEvents = true,
    focusFirst = true,
    clearFirst = false,
  } = options;

  if (!element || !text) {
    console.warn('[aimem] injectMemory: missing element or text');
    return false;
  }

  try {
    if (focusFirst) {
      element.focus();
    }

    const platform = detectPlatform(element);

    // Strategy 1: Platform-native APIs
    switch (platform) {
      case 'gemini':
        if (injectGemini(element, text, clearFirst)) return true;
        break;
      case 'kimi':
        if (injectKimi(element, text, clearFirst)) return true;
        break;
      case 'chatgpt':
      case 'claude':
        if (injectProseMirror(element, text, clearFirst)) return true;
        break;
    }

    // Strategy 2: Generic contenteditable
    if (element.getAttribute('contenteditable') === 'true') {
      if (setContentEditableContent(element, text, clearFirst)) return true;
    }

    // Strategy 3: Native Setter Hack for textarea
    if (element instanceof HTMLTextAreaElement) {
      nativeTextareaSet(element, clearFirst ? text : element.value + text);
      if (dispatchEvents) dispatchSyntheticEvents(element);
      return true;
    }

    // Strategy 4: Native Setter Hack for input[type=text]
    if (element instanceof HTMLInputElement) {
      const descriptor = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      );
      if (descriptor?.set) {
        descriptor.set.call(element, clearFirst ? text : element.value + text);
      } else {
        element.value = clearFirst ? text : element.value + text;
      }
      if (dispatchEvents) dispatchSyntheticEvents(element);
      return true;
    }

    // Strategy 5: execCommand as absolute last resort
    if (execCommandInsert(element, text)) return true;

    console.warn('[aimem] All injection strategies failed for element:', element);
    return false;
  } catch (err) {
    console.error('[aimem] injectMemory error:', err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Memory Card (Floating Suggestions UI)
// ─────────────────────────────────────────────────────────────────────────────

const CARD_ID = 'aimem-memory-card';
const CARD_STYLE_ID = 'aimem-card-styles';

let activeCard: HTMLElement | null = null;
let activeCardCleanup: (() => void) | null = null;

function injectCardStyles(prefix: string): void {
  if (document.getElementById(CARD_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = CARD_STYLE_ID;
  style.textContent = `
    .${prefix}-card {
      position: absolute;
      z-index: 999999;
      background: #1a1a2e;
      border: 1px solid #333366;
      border-radius: 12px;
      padding: 8px;
      max-width: 420px;
      min-width: 280px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      color: #e0e0e0;
      animation: ${prefix}-fade-in 0.15s ease-out;
      pointer-events: auto;
    }
    @keyframes ${prefix}-fade-in {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .${prefix}-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 8px 6px;
      border-bottom: 1px solid #333366;
      margin-bottom: 4px;
    }
    .${prefix}-card-title {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #8888aa;
    }
    .${prefix}-card-close {
      background: none;
      border: none;
      color: #8888aa;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 2px 6px;
      border-radius: 4px;
      transition: background 0.1s;
    }
    .${prefix}-card-close:hover {
      background: #333366;
      color: #fff;
    }
    .${prefix}-card-list {
      list-style: none;
      margin: 0;
      padding: 0;
      max-height: 240px;
      overflow-y: auto;
    }
    .${prefix}-card-item {
      padding: 8px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.1s;
      line-height: 1.4;
      color: #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .${prefix}-card-item:hover {
      background: #2a2a4e;
      color: #fff;
    }
    .${prefix}-card-item.${prefix}-selected {
      background: #2d4a7a;
      color: #fff;
      border-left: 3px solid #5b9cf6;
    }
    .${prefix}-card-item.${prefix}-selected::after {
      content: ' ✓';
      color: #5b9cf6;
    }
    .${prefix}-card-empty {
      padding: 12px;
      text-align: center;
      color: #666;
      font-style: italic;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create a floating card above (or below) the input element showing available memories.
 * Each memory is clickable to inject it into the input.
 *
 * @param element - The input element to anchor the card to
 * @param memories - Array of memory strings to display
 * @param options - Card configuration
 * @returns Cleanup function to remove the card
 */
export function injectMemoryCard(
  element: HTMLElement,
  memories: string[],
  options: MemoryCardOptions = {}
): () => void {
  const {
    position = 'top',
    maxItems = 5,
    classPrefix = 'aimem',
  } = options;

  // Remove any existing card
  removeMemoryCard();

  if (!memories.length) return () => {};

  injectCardStyles(classPrefix);

  const displayMemories = memories.slice(0, maxItems);

  // Build card DOM
  const card = document.createElement('div');
  card.id = CARD_ID;
  card.className = `${classPrefix}-card`;

  // Header
  const header = document.createElement('div');
  header.className = `${classPrefix}-card-header`;

  const title = document.createElement('span');
  title.className = `${classPrefix}-card-title`;
  title.textContent = `💡 ${displayMemories.length} memor${displayMemories.length === 1 ? 'y' : 'ies'} found`;

  const closeBtn = document.createElement('button');
  closeBtn.className = `${classPrefix}-card-close`;
  closeBtn.textContent = '×';
  closeBtn.setAttribute('aria-label', 'Close memory suggestions');

  header.appendChild(title);
  header.appendChild(closeBtn);
  card.appendChild(header);

  // Memory list
  const list = document.createElement('ul');
  list.className = `${classPrefix}-card-list`;

  const selectedMemories = new Set<number>();
  const listItems: HTMLLIElement[] = [];

  displayMemories.forEach((memory, index) => {
    const item = document.createElement('li');
    item.className = `${classPrefix}-card-item`;
    item.textContent = memory;
    item.title = memory;
    item.setAttribute('data-index', String(index));

    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (selectedMemories.has(index)) {
        selectedMemories.delete(index);
        item.classList.remove(`${classPrefix}-selected`);
      } else {
        selectedMemories.add(index);
        item.classList.add(`${classPrefix}-selected`);
      }
    });

    list.appendChild(item);
    listItems.push(item);
  });

  card.appendChild(list);

  // Position the card relative to the input element
  const rect = element.getBoundingClientRect();
  const parent = element.offsetParent ?? document.body;
  const parentRect = parent === document.body
    ? { top: 0, left: 0 }
    : (parent as HTMLElement).getBoundingClientRect();

  if (position === 'top') {
    card.style.bottom = `${(parent === document.body ? window.innerHeight - rect.top : rect.top) + 4}px`;
  } else {
    card.style.top = `${(parent === document.body ? rect.bottom : rect.bottom - parentRect.top) + 4}px`;
  }
  card.style.left = `${(parent === document.body ? rect.left : rect.left - parentRect.left)}px`;

  // Append to offset parent or body
  if (parent === document.body) {
    card.style.position = 'fixed';
  } else {
    card.style.position = 'absolute';
  }

  document.body.appendChild(card);
  activeCard = card;

  // Event handlers
  const handleClose = () => removeMemoryCard();

  const handleClickOutside = (e: MouseEvent) => {
    if (activeCard && !activeCard.contains(e.target as Node) && !element.contains(e.target as Node)) {
      removeMemoryCard();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      removeMemoryCard();
    }
  };

  closeBtn.addEventListener('click', handleClose);
  document.addEventListener('mousedown', handleClickOutside, true);
  document.addEventListener('keydown', handleKeyDown, true);

  // Store selected memories on the element for form-submit retrieval
  (element as any).__aimemSelected = () => {
    return Array.from(selectedMemories)
      .sort()
      .map((i) => displayMemories[i]);
  };

  activeCardCleanup = () => {
    document.removeEventListener('mousedown', handleClickOutside, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    closeBtn.removeEventListener('click', handleClose);
    delete (element as any).__aimemSelected;
  };

  return removeMemoryCard;
}

/**
 * Remove the active memory card if present.
 */
export function removeMemoryCard(): void {
  if (activeCardCleanup) {
    activeCardCleanup();
    activeCardCleanup = null;
  }
  if (activeCard?.isConnected) {
    activeCard.remove();
  }
  activeCard = null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Auto-Inject with Debounced Search
// ─────────────────────────────────────────────────────────────────────────────

interface AutoInjectState {
  debounceTimer: ReturnType<typeof setTimeout> | null;
  currentMemories: string[];
  observer: MutationObserver | null;
  inputListener: (() => void) | null;
  submitListener: ((e: Event) => void) | null;
  keydownListener: ((e: KeyboardEvent) => void) | null;
  cleanupCard: (() => void) | null;
  activeElement: HTMLElement | null;
}

const AUTO_INJECT_DEBOUNCE_MS = 400;
const AUTO_INJECT_MIN_LENGTH = 3;

/**
 * Set up automatic memory injection on an input element.
 *
 * Monitors input events with debounce, calls searchFn to find relevant memories,
 * shows them in a floating card, and appends selected memories on form submit.
 *
 * @param element - The input element to monitor
 * @param searchFn - Async function that takes a query string and returns matching memories
 * @returns Cleanup function to tear down all listeners
 */
export function setupAutoInject(
  element: HTMLElement,
  searchFn: (query: string) => Promise<string[]>
): () => void {
  if (!element || typeof searchFn !== 'function') {
    console.warn('[aimem] setupAutoInject: invalid arguments');
    return () => {};
  }

  const state: AutoInjectState = {
    debounceTimer: null,
    currentMemories: [],
    observer: null,
    inputListener: null,
    submitListener: null,
    keydownListener: null,
    cleanupCard: null,
    activeElement: element,
  };

  /**
   * Extract the current text content from the input element.
   */
  function getInputText(): string {
    const el = state.activeElement;
    if (!el) return '';

    // Textarea / input
    if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
      return el.value;
    }
    // Contenteditable
    if (el.getAttribute('contenteditable') === 'true') {
      return el.innerText ?? el.textContent ?? '';
    }
    return '';
  }

  /**
   * Handle debounced input — search for relevant memories.
   */
  function onInput(): void {
    if (state.debounceTimer) {
      clearTimeout(state.debounceTimer);
    }

    state.debounceTimer = setTimeout(async () => {
      const query = getInputText().trim();

      // Remove card if query is too short
      if (query.length < AUTO_INJECT_MIN_LENGTH) {
        removeMemoryCard();
        state.currentMemories = [];
        return;
      }

      try {
        const memories = await searchFn(query);

        if (!memories.length) {
          removeMemoryCard();
          state.currentMemories = [];
          return;
        }

        state.currentMemories = memories;

        // Show or update the card
        if (state.activeElement) {
          state.cleanupCard = injectMemoryCard(state.activeElement, memories);
        }
      } catch (err) {
        console.error('[aimem] auto-inject search failed:', err);
      }
    }, AUTO_INJECT_DEBOUNCE_MS);
  }

  /**
   * Find the closest form ancestor and listen for submit.
   */
  function findAndBindForm(): void {
    const el = state.activeElement;
    if (!el) return;

    const form = el.closest('form');
    if (!form) return;

    // Remove previous listener if form changed
    if (state.submitListener) {
      // We track the form element, but for simplicity just add to this form
    }

    state.submitListener = (e: Event) => {
      onSubmit(e);
    };

    form.addEventListener('submit', state.submitListener, { capture: true });
  }

  /**
   * Handle form submit — append selected memories to the message.
   */
  function onSubmit(e: Event): void {
    const el = state.activeElement;
    if (!el) return;

    // Get selected memories from the card
    const selected: string[] = (el as any).__aimemSelected?.() ?? [];

    // If no memories selected from card, use all current memories
    const memoriesToInject = selected.length > 0 ? selected : state.currentMemories;

    if (memoriesToInject.length === 0) return;

    const currentText = getInputText();
    const memoryBlock = formatMemoryBlock(memoriesToInject);

    // Inject memories into the input (append to existing text)
    injectMemory(el, '\n\n' + memoryBlock, { clearFirst: false, focusFirst: false });

    // Clean up card
    removeMemoryCard();
    state.currentMemories = [];
  }

  /**
   * Handle Enter key — submit detection for platforms without real forms.
   */
  function onKeyDown(e: KeyboardEvent): void {
    // Enter without Shift (plain submit) on most platforms
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      const el = state.activeElement;
      if (!el) return;

      const selected: string[] = (el as any).__aimemSelected?.() ?? [];
      const memoriesToInject = selected.length > 0 ? selected : state.currentMemories;

      if (memoriesToInject.length === 0) return;

      // Don't prevent default — just append before the framework handles submit
      const currentText = getInputText();
      const memoryBlock = formatMemoryBlock(memoriesToInject);
      injectMemory(el, '\n\n' + memoryBlock, { clearFirst: false, focusFirst: false });

      removeMemoryCard();
      state.currentMemories = [];
    }
  }

  // Bind listeners
  element.addEventListener('input', onInput);
  state.inputListener = onInput;

  element.addEventListener('keydown', onKeyDown);
  state.keydownListener = onKeyDown;

  // Try to find and bind to form
  findAndBindForm();

  // Watch for DOM changes that might replace the input element
  state.observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      // If our element was removed from the DOM, try to find the new one
      if (!state.activeElement?.isConnected) {
        const platform = detectPlatform(element);
        const newElement = findInputElement(platform);
        if (newElement) {
          // Re-bind
          cleanup();
          setupAutoInject(newElement, searchFn);
          return;
        }
      }
    }
  });

  state.observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  function cleanup(): void {
    if (state.debounceTimer) clearTimeout(state.debounceTimer);
    if (state.inputListener) element.removeEventListener('input', state.inputListener);
    if (state.keydownListener) element.removeEventListener('keydown', state.keydownListener);
    if (state.submitListener) {
      const form = element.closest('form');
      if (form) form.removeEventListener('submit', state.submitListener, { capture: true });
    }
    if (state.observer) state.observer.disconnect();
    removeMemoryCard();
  }

  return cleanup;
}

// ─────────────────────────────────────────────────────────────────────────────
// Utility Functions
// ─────────────────────────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function placeCaretAtEnd(element: HTMLElement): void {
  try {
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  } catch {
    // Best effort — not critical
  }
}

function formatMemoryBlock(memories: string[]): string {
  const lines = memories.map((m) => `- ${m.trim()}`);
  return `<memory-context>\n${lines.join('\n')}\n</memory-context>`;
}
