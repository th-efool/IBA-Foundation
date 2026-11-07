import os

os.makedirs('public/brand', exist_ok=True)
os.makedirs('public/brand/badges', exist_ok=True)
os.makedirs('public/brand/lockups', exist_ok=True)
os.makedirs('public/brand/marks', exist_ok=True)

# 1. MARKS
def write_mark(filename, base_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 198" fill="none">
  <title>IBA Foundation Mark</title>
  <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
  <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
  <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_mark('public/brand/marks/iba-mark-light.svg', '#080A10')
write_mark('public/brand/marks/iba-mark-dark.svg', '#E9EFF8')
write_mark('public/brand/marks/iba-mark-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_mark('public/brand/marks/iba-mark-black.svg', '#000000', '#000000', '#000000')

# Also keep root public/brand/ mark files
write_mark('public/brand/iba-mark-common-ground.svg', '#080A10')
write_mark('public/brand/iba-mark-common-ground-dark.svg', '#E9EFF8')

# 2. HORIZONTAL LOCKUPS
def write_horizontal_lockup(filename, base_color, text_color, subtext_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 140" fill="none">
  <title>IBA Foundation — Horizontal Logo</title>
  <g transform="translate(8, 16) scale(0.543)">
    <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
    <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
    <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
  </g>
  <text x="260" y="84" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="263" y="116" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-dark.svg', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-light.svg', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-black.svg', '#000000', '#000000', '#000000', '#000000', '#000000')

write_horizontal_lockup('public/brand/iba-logo-horizontal-dark.svg', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_horizontal_lockup('public/brand/iba-logo-horizontal-light.svg', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')

# 3. VERTICAL / STACKED LOCKUPS
def write_stacked_lockup(filename, base_color, text_color, subtext_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" fill="none">
  <title>IBA Foundation — Stacked Logo</title>
  <g transform="translate(55, 20) scale(0.595)">
    <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
    <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
    <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
  </g>
  <text x="180" y="215" text-anchor="middle" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="82" font-weight="900" letter-spacing="0.04em">IBA</text>
  <text x="180" y="254" text-anchor="middle" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_stacked_lockup('public/brand/lockups/iba-logo-stacked-dark.svg', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-light.svg', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-black.svg', '#000000', '#000000', '#000000', '#000000', '#000000')

write_stacked_lockup('public/brand/iba-logo-stacked-dark.svg', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_stacked_lockup('public/brand/iba-logo-stacked-light.svg', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')

# 4. RECTANGULAR BADGES (Exact identity study style)
def write_rect_badge(filename, bg_color, border_color, base_color, text_color, subtext_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 180" fill="none">
  <title>IBA Foundation — Brand Badge</title>
  <!-- Background Card -->
  <rect width="580" height="180" rx="20" fill="{bg_color}"/>
  <rect x="1" y="1" width="578" height="178" rx="19" stroke="{border_color}" stroke-width="2"/>
  <!-- Inner Content -->
  <g transform="translate(36, 36) scale(0.543)">
    <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
    <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
    <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
  </g>
  <text x="295" y="104" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="298" y="136" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_rect_badge('public/brand/badges/iba-badge-horizontal-dark.svg', '#080A10', 'rgba(255,255,255,0.14)', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_rect_badge('public/brand/badges/iba-badge-horizontal-black.svg', '#080A10', 'rgba(255,255,255,0.15)', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_rect_badge('public/brand/badges/iba-badge-horizontal-light.svg', '#F7F4ED', 'rgba(8,10,16,0.15)', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')

# 5. PILL TAG BADGES
def write_pill_badge(filename, bg_color, border_color, base_color, text_color, subtext_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 68" fill="none">
  <title>IBA Foundation — Pill Badge</title>
  <rect width="320" height="68" rx="34" fill="{bg_color}"/>
  <rect x="1" y="1" width="318" height="66" rx="33" stroke="{border_color}" stroke-width="1.5"/>
  <g transform="translate(22, 16.5) scale(0.1764)">
    <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
    <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
    <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
  </g>
  <text x="112" y="41" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="113" y="53" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.3em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_pill_badge('public/brand/badges/iba-badge-pill-dark.svg', '#080A10', 'rgba(255,255,255,0.18)', '#E9EFF8', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_pill_badge('public/brand/badges/iba-badge-pill-light.svg', '#F7F4ED', 'rgba(8,10,16,0.18)', '#080A10', '#080A10', 'rgba(8,10,16,0.85)')

# 6. SQUIRCLE / AVATAR BADGES
def write_squircle_badge(filename, bg_color, border_color, base_color, blue_color='#1645FF', coral_color='#FF5035'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
  <title>IBA Foundation — Squircle Icon Badge</title>
  <rect width="256" height="256" rx="56" fill="{bg_color}"/>
  <rect x="1.5" y="1.5" width="253" height="253" rx="54.5" stroke="{border_color}" stroke-width="3"/>
  <g transform="translate(25, 79) scale(0.49)">
    <path d="M0 0 H54 L154 100 V150 H77 L0 73 Z" fill="{blue_color}"/>
    <path d="M173 42 L252 0 V150 H173 Z" fill="{coral_color}"/>
    <path d="M252 150 L357 25 H420 V72 L342 150 V198 H77 V150 Z" fill="{base_color}"/>
  </g>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_squircle_badge('public/brand/badges/iba-badge-square-dark.svg', '#080A10', 'rgba(255,255,255,0.14)', '#E9EFF8')
write_squircle_badge('public/brand/badges/iba-badge-square-light.svg', '#F7F4ED', 'rgba(8,10,16,0.14)', '#080A10')

print('All 20 brand SVGs generated successfully!')
