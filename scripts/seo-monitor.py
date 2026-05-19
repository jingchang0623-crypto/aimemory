#!/usr/bin/env python3
"""SEO Monitor for aimemory.pro - Track search engine crawlers and page access."""
import re
import collections
from datetime import datetime, timedelta

LOG_PATH = "/var/log/nginx/access.log"
OUTPUT_PATH = "/home/agentuser/aimemory/data/seo-report.txt"

def analyze_logs():
    try:
        with open(LOG_PATH, 'r') as f:
            lines = f.readlines()
    except PermissionError:
        print("Need sudo to read nginx logs")
        return
    
    # Last 7 days
    cutoff = datetime.now() - timedelta(days=7)
    bot_pattern = re.compile(r'(Googlebot|bingbot|Baiduspider|YandexBot|Slurp|DuckDuckBot)', re.I)
    page_pattern = re.compile(r'GET\s+(\S+)\s+HTTP', re.I)
    
    bots = collections.Counter()
    pages = collections.Counter()
    bot_pages = collections.defaultdict(collections.Counter)
    
    for line in lines[-5000:]:  # Last 5000 lines
        if 'bot' in line.lower() or 'spider' in line.lower():
            bot_match = bot_pattern.search(line)
            page_match = page_pattern.search(line)
            if bot_match:
                bot = bot_match.group(1)
                bots[bot] += 1
                if page_match:
                    page = page_match.group(1)
                    bot_pages[bot][page] += 1
                    pages[page] += 1
    
    # Generate report
    report = []
    report.append(f"=== SEO Report {datetime.now().strftime('%Y-%m-%d %H:%M')} ===")
    report.append(f"\n--- Search Engine Bots (Last 5000 log lines) ---")
    for bot, count in bots.most_common(10):
        report.append(f"  {bot}: {count} visits")
    
    report.append(f"\n--- Top Pages Crawled ---")
    for page, count in pages.most_common(20):
        report.append(f"  {page}: {count} bot visits")
    
    report.append(f"\n--- Bot vs Pages ---")
    for bot in bot_pages:
        report.append(f"  {bot}:")
        for page, count in bot_pages[bot].most_common(5):
            report.append(f"    {page}: {count}")
    
    return "\n".join(report)

if __name__ == "__main__":
    print(analyze_logs())
