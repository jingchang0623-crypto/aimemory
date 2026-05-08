#!/usr/bin/env python3
"""Generate Chrome extension icons for AI Memory."""

from PIL import Image, ImageDraw, ImageFont
import os

sizes = [16, 48, 128]
outdir = 'extension/src/public/icon'
os.makedirs(outdir, exist_ok=True)

for size in sizes:
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background circle (purple/indigo)
    margin = max(1, size // 16)
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(99, 102, 241, 255))
    
    # Inner circle (lighter purple)
    inner_margin = max(2, size // 4)
    draw.ellipse([inner_margin, inner_margin, size - inner_margin, size - inner_margin], fill=(165, 180, 252, 255))
    
    # Center text "AI"
    if size >= 48:
        try:
            font_size = max(8, size // 2)
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
        except Exception:
            font = ImageFont.load_default()
        
        text = "AI"
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        x = (size - tw) // 2
        y = (size - th) // 2 - max(1, size // 16)
        draw.text((x, y), text, fill=(99, 102, 241, 255), font=font)
    elif size == 16:
        # For 16px, just a solid purple circle with white dot
        cx, cy = size // 2, size // 2
        r = max(2, size // 6)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 255, 255, 255))
    
    outpath = os.path.join(outdir, f'{size}.png')
    img.save(outpath, 'PNG')
    print(f'Created {outpath} ({size}x{size})')

print("Done! Icons generated successfully.")
