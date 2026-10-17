import os

os.makedirs('public/brand', exist_ok=True)
os.makedirs('public/brand/badges', exist_ok=True)
os.makedirs('public/brand/lockups', exist_ok=True)
os.makedirs('public/brand/marks', exist_ok=True)

# 1. MARKS
def write_mark(filename, spruce_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294 139" fill="none">
  <title>IBA Foundation — Common Ground Mark</title>
  <!-- 01 Blue Angled Arm -->
  <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
  <!-- 02 Terracotta Center Pillar -->
  <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
  <!-- 03 Common Ground Base & Right Arm -->
  <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_mark('public/brand/marks/iba-mark-light.svg', '#223635')
write_mark('public/brand/marks/iba-mark-dark.svg', '#4E7873')
write_mark('public/brand/marks/iba-mark-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_mark('public/brand/marks/iba-mark-black.svg', '#000000', '#000000', '#000000')

# Also keep root public/brand/ mark files
write_mark('public/brand/iba-mark-common-ground.svg', '#223635')
write_mark('public/brand/iba-mark-common-ground-dark.svg', '#4E7873')

# 2. HORIZONTAL LOCKUPS
def write_horizontal_lockup(filename, spruce_color, text_color, subtext_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 140" fill="none">
  <title>IBA Foundation — Horizontal Logo</title>
  <g transform="translate(8, 16) scale(0.7755)">
    <!-- 01 Blue Angled Arm -->
    <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
    <!-- 02 Terracotta Center Pillar -->
    <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
    <!-- 03 Common Ground Base & Right Arm -->
    <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
  </g>
  <text x="260" y="84" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="263" y="116" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-dark.svg', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-light.svg', '#223635', '#223635', 'rgba(34,54,53,0.85)')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_horizontal_lockup('public/brand/lockups/iba-logo-horizontal-black.svg', '#000000', '#000000', '#000000', '#000000', '#000000')

write_horizontal_lockup('public/brand/iba-logo-horizontal-dark.svg', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_horizontal_lockup('public/brand/iba-logo-horizontal-light.svg', '#223635', '#223635', 'rgba(34,54,53,0.85)')

# 3. VERTICAL / STACKED LOCKUPS
def write_stacked_lockup(filename, spruce_color, text_color, subtext_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" fill="none">
  <title>IBA Foundation — Stacked Logo</title>
  <g transform="translate(55, 20) scale(0.85)">
    <!-- 01 Blue Angled Arm -->
    <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
    <!-- 02 Terracotta Center Pillar -->
    <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
    <!-- 03 Common Ground Base & Right Arm -->
    <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
  </g>
  <text x="180" y="215" text-anchor="middle" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="82" font-weight="900" letter-spacing="0.04em">IBA</text>
  <text x="180" y="254" text-anchor="middle" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_stacked_lockup('public/brand/lockups/iba-logo-stacked-dark.svg', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-light.svg', '#223635', '#223635', 'rgba(34,54,53,0.85)')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-white.svg', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF')
write_stacked_lockup('public/brand/lockups/iba-logo-stacked-black.svg', '#000000', '#000000', '#000000', '#000000', '#000000')

write_stacked_lockup('public/brand/iba-logo-stacked-dark.svg', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_stacked_lockup('public/brand/iba-logo-stacked-light.svg', '#223635', '#223635', 'rgba(34,54,53,0.85)')

# 4. RECTANGULAR BADGES (Exact identity study style)
def write_rect_badge(filename, bg_color, border_color, spruce_color, text_color, subtext_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 180" fill="none">
  <title>IBA Foundation — Brand Badge</title>
  <!-- Background Card -->
  <rect width="580" height="180" rx="20" fill="{bg_color}"/>
  <rect x="1" y="1" width="578" height="178" rx="19" stroke="{border_color}" stroke-width="2"/>
  <!-- Inner Content -->
  <g transform="translate(36, 36) scale(0.7755)">
    <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
    <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
    <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
  </g>
  <text x="295" y="104" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="76" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="298" y="136" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="700" letter-spacing="0.34em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_rect_badge('public/brand/badges/iba-badge-horizontal-dark.svg', '#1C3031', 'rgba(255,255,255,0.14)', '#344D4A', '#F7F4ED', 'rgba(247,244,237,0.85)')
write_rect_badge('public/brand/badges/iba-badge-horizontal-black.svg', '#0D0C0A', 'rgba(255,255,255,0.15)', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_rect_badge('public/brand/badges/iba-badge-horizontal-light.svg', '#F7F4ED', 'rgba(34,54,53,0.15)', '#223635', '#223635', 'rgba(34,54,53,0.85)')

# 5. PILL TAG BADGES
def write_pill_badge(filename, bg_color, border_color, spruce_color, text_color, subtext_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 68" fill="none">
  <title>IBA Foundation — Pill Badge</title>
  <rect width="320" height="68" rx="34" fill="{bg_color}"/>
  <rect x="1" y="1" width="318" height="66" rx="33" stroke="{border_color}" stroke-width="1.5"/>
  <g transform="translate(22, 16.5) scale(0.252)">
    <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
    <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
    <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
  </g>
  <text x="112" y="41" fill="{text_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="900" letter-spacing="0.03em">IBA</text>
  <text x="113" y="53" fill="{subtext_color}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="7.5" font-weight="700" letter-spacing="0.3em">FOUNDATION</text>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_pill_badge('public/brand/badges/iba-badge-pill-dark.svg', '#141818', 'rgba(255,255,255,0.18)', '#4E7873', '#FFFFFF', 'rgba(255,255,255,0.85)')
write_pill_badge('public/brand/badges/iba-badge-pill-light.svg', '#F7F4ED', 'rgba(34,54,53,0.18)', '#223635', '#223635', 'rgba(34,54,53,0.85)')

# 6. SQUIRCLE / AVATAR BADGES
def write_squircle_badge(filename, bg_color, border_color, spruce_color, blue_color='#3157BC', terra_color='#CA6141'):
    content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
  <title>IBA Foundation — Squircle Icon Badge</title>
  <rect width="256" height="256" rx="56" fill="{bg_color}"/>
  <rect x="1.5" y="1.5" width="253" height="253" rx="54.5" stroke="{border_color}" stroke-width="3"/>
  <g transform="translate(25, 79) scale(0.70)">
    <path d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z" fill="{blue_color}"/>
    <path d="M121 30 L176 0 V98 L166 105 H121 Z" fill="{terra_color}"/>
    <path d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z" fill="{spruce_color}"/>
  </g>
</svg>'''
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

write_squircle_badge('public/brand/badges/iba-badge-square-dark.svg', '#0D0C0A', 'rgba(255,255,255,0.14)', '#4E7873')
write_squircle_badge('public/brand/badges/iba-badge-square-light.svg', '#F7F4ED', 'rgba(34,54,53,0.14)', '#223635')

print('All 20 brand SVGs generated successfully!')
