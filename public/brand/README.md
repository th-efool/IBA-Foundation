# IBA Foundation — Brand Asset Kit (03 / Common Ground)

This directory contains the official vector SVG brand assets, lockups, badges, and icons for the **IBA Foundation** identity based on the **03 / Common Ground** design system.

---

## 🎨 Color Palette Specifications

| Token | Hex | RGB | Usage |
|---|---|---|---|
| **Cobalt Ultramarine** | `#3157BC` | `rgb(49, 87, 188)` | Primary mark left angled arm (45° beam) |
| **Warm Terracotta** | `#CA6141` | `rgb(202, 97, 65)` | Primary mark center vertical pillar |
| **Spruce Slate (Dark Mode)** | `#4E7873` | `rgb(78, 120, 115)` | Common Ground baseline & right arm on dark canvases |
| **Deep Forest Spruce (Light Mode)**| `#223635` | `rgb(34, 54, 53)` | Common Ground baseline, text, and strokes on light canvases |
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Primary text & monochrome white assets on dark surfaces |
| **Ivory Off-White** | `#F7F4ED` | `rgb(247, 244, 237)` | Identity study background and light badges |
| **Obsidian Black** | `#0D0C0A` | `rgb(13, 12, 10)` | Global website dark background & app squircle tiles |
| **Dark Slate Spruce** | `#1C3031` | `rgb(28, 48, 49)` | Identity study dark badge card container |

---

## 📁 Directory Structure & Asset Index

### 1. Isolated Marks (`/public/brand/marks/`)
Isolated geometric mark without typography. Native aspect ratio: `294 × 139` (~2.115 : 1).

* `iba-mark-dark.svg`: For dark backgrounds (Cobalt, Terracotta, Calibrated Spruce `#4E7873`).
* `iba-mark-light.svg`: For light backgrounds (Cobalt, Terracotta, Deep Spruce `#223635`).
* `iba-mark-white.svg`: 100% white monochrome for dark image overlays & photography.
* `iba-mark-black.svg`: 100% black monochrome for single-color print, letterheads, and stamps.

### 2. Horizontal Lockups (`/public/brand/lockups/`)
Mark on the left, `IBA FOUNDATION` stacked on the right. Aspect ratio: `540 × 140` (~3.86 : 1). Ideal for website headers, navigation bars, email signatures, and partner strips.

* `iba-logo-horizontal-dark.svg`: Full color mark + white text (for dark backgrounds).
* `iba-logo-horizontal-light.svg`: Full color mark + deep spruce text (for light backgrounds).
* `iba-logo-horizontal-white.svg`: All-white monochrome.
* `iba-logo-horizontal-black.svg`: All-black monochrome.

### 3. Stacked / Vertical Lockups (`/public/brand/lockups/`)
Mark centered on top, `IBA` and `FOUNDATION` centered below. Aspect ratio: `360 × 300` (1.2 : 1). Ideal for footers, splash screens, posters, social media banners, and presentation title slides.

* `iba-logo-stacked-dark.svg`: Full color mark + white text.
* `iba-logo-stacked-light.svg`: Full color mark + deep spruce text.
* `iba-logo-stacked-white.svg`: All-white monochrome.
* `iba-logo-stacked-black.svg`: All-black monochrome.

### 4. Badges & Cards (`/public/brand/badges/`)
Self-contained badge containers with background fills and borders.

* **Horizontal Rectangular Cards** (`580 × 180`, `rx=20`):
  * `iba-badge-horizontal-dark.svg`: Slate container (`#1C3031`) matching the official identity study bottom card.
  * `iba-badge-horizontal-black.svg`: Deep obsidian container (`#0D0C0A`) matching the website background.
  * `iba-badge-horizontal-light.svg`: Ivory container (`#F7F4ED`) with subtle spruce border.
* **Pill Badges** (`320 × 68`, `rx=34`):
  * `iba-badge-pill-dark.svg`: Pill tag with mark and tracked text. Perfect for GitHub READMEs, package badges, and status pills.
  * `iba-badge-pill-light.svg`: Light theme pill tag.
* **Squircle Avatar Badges** (`256 × 256`, `rx=56`):
  * `iba-badge-square-dark.svg`: App icon / avatar tile with centered mark on obsidian squircle.
  * `iba-badge-square-light.svg`: Avatar tile with centered mark on ivory squircle.

### 5. Browser Favicons & Web Icons
Located at the root of the web bundle:
* `/icon.svg`: Vector SVG favicon with squircle container.
* `/favicon.svg`: Direct static SVG favicon link.
* `/favicon.ico`: Multi-size ICO file (16px, 32px, 48px).
* `/apple-icon.png`: 180×180 Apple touch icon.
* `/images/icon-192.png`: 192×192 PWA manifest icon.
* `/images/icon-512.png`: 512×512 high-resolution app icon.

---

## 💻 Web & React Usage

In React / Next.js code:

```tsx
import { CommonGroundLogo, CommonGroundMark } from "@/src/app/components/brand/CommonGroundLogo";

// Standard horizontal navigation logo
<CommonGroundLogo href="/" size="md" theme="dark" />

// Vertical stacked logo for footers
<CommonGroundLogo href="/" layout="vertical" size="lg" theme="dark" />

// Standalone vector mark only
<CommonGroundMark theme="dark" className="h-8 w-auto" />
```
