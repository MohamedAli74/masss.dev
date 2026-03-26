# MASSS — Brand Design Reference

> This file is the single source of truth for the MASSS brand. All UI, landing pages, components, and copy must follow these guidelines for consistency.

---

## Brand Overview

| Property | Value |
|---|---|
| **Brand name** | MASSS |
| **Full name** | Mohamed Ali Smart Software Solutions |
| **Product type** | SaaS / Web App |
| **Audience** | General consumers |
| **Category** | Productivity & Efficiency |
| **Personality** | Bold & Innovative |
| **Design style** | Modern Glassmorphism |
| **Color direction** | Dark & Electric |

**Tagline:** Get more done.

**Brand description:** Bold productivity software for the modern consumer. Built for speed, designed for clarity — MASSS helps people get more done with less friction.

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|---|---|---|
| Obsidian | `#0a0a0f` | Page background, hero sections |
| Electric Mint | `#00f5a0` | Primary CTA, highlights, active states |
| Neon Violet | `#6366f1` | Secondary accent, hover states |
| Plasma Blue | `#00c9ff` | Gradient endpoint, info states |

### Supporting Neutrals

| Name | Hex | Usage |
|---|---|---|
| Surface | `#111118` | Card backgrounds |
| Card | `#1c1c27` | Elevated surfaces |
| Border | `#2e2e40` | Borders, dividers |
| White | `#ffffff` | Primary text on dark backgrounds |
| Muted | `#8b8ba0` | Secondary text, placeholders |

### Gradients

```css
/* Primary gradient — use on CTAs, progress bars, active borders */
background: linear-gradient(135deg, #00f5a0, #6366f1, #00c9ff);

/* CTA button gradient */
background: linear-gradient(135deg, #00f5a0, #00c9ff);

/* Subtle glow — mint (for hero backgrounds) */
background: radial-gradient(circle, rgba(0,245,160,0.18) 0%, transparent 70%);

/* Subtle glow — violet (for hero backgrounds) */
background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
```

### Color Rules

- **Always** use dark backgrounds (`#0a0a0f`, `#111118`) as the base — never white or light mode layouts
- **Never** place Electric Mint text on a white background
- Use mint (`#00f5a0`) for primary actions, violet (`#6366f1`) for secondary actions
- Glass surfaces use `rgba(255,255,255,0.04–0.08)` backgrounds with `rgba(255,255,255,0.08–0.12)` borders

---

## Typography

**Font family:** System sans-serif stack (Inter preferred if available)

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Type Scale

| Role | Size | Weight | Letter spacing | Line height |
|---|---|---|---|---|
| Hero headline | 36–56px | 700 | -1px | 1.1 |
| H1 | 32px | 700 | -0.5px | 1.15 |
| H2 | 24px | 600 | -0.3px | 1.25 |
| H3 | 18px | 500 | 0 | 1.35 |
| Body | 15–16px | 400 | 0 | 1.7 |
| Small / caption | 13px | 400 | 0 | 1.6 |
| Label / overline | 11px | 500 | 0.08em (uppercase) | 1.4 |

### Typography Rules

- Headlines use tight letter-spacing and high weight — they should feel **punchy**
- Body text is always `#8b8ba0` (muted) or `rgba(255,255,255,0.7)` on dark backgrounds
- Section labels are always **uppercase, 11px, 500 weight, wide letter-spacing**
- Never use font-weight above 700

---

## Spacing System

Base unit: **4px**

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Icon padding, tight gaps |
| sm | 8px | Internal component padding |
| md | 12px | Between related elements |
| base | 16px | Standard padding |
| lg | 24px | Section internal spacing |
| xl | 32px | Between components |
| 2xl | 48px | Section padding |
| 3xl | 64px | Large section gaps |
| 4xl | 96px | Page-level section breaks |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| sm | 4px | Badges, small elements |
| md | 8px | Buttons, inputs, small cards |
| lg | 12px | Cards, modals |
| xl | 16px | Large cards, hero panels |
| pill | 999px | Tags, pills, toggles |

---

## UI Components

### Buttons

```css
/* Primary CTA */
.btn-primary {
  background: linear-gradient(135deg, #00f5a0, #00c9ff);
  border: none;
  color: #0a0a0f;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 0.01em;
}

/* Secondary */
.btn-secondary {
  background: rgba(99, 102, 241, 0.12);
  border: 0.5px solid rgba(99, 102, 241, 0.4);
  color: #818cf8;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 8px;
}

/* Ghost */
.btn-ghost {
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 8px;
}
```

### Glassmorphism Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
```

### Surface Card (elevated)

```css
.surface-card {
  background: #1c1c27;
  border: 0.5px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 20px;
}
```

### Text Input

```css
.input {
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  width: 100%;
  outline: none;
  transition: border-color 0.15s;
}
.input:focus {
  border-color: rgba(0, 245, 160, 0.4);
}
.input::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
```

### Pills / Badges

```css
/* Mint pill */
.pill-mint {
  background: rgba(0, 245, 160, 0.12);
  color: #00f5a0;
  border: 0.5px solid rgba(0, 245, 160, 0.3);
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 500;
}

/* Violet pill */
.pill-violet {
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border: 0.5px solid rgba(99, 102, 241, 0.3);
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 500;
}

/* Neutral pill */
.pill-neutral {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 500;
}
```

### Logo Mark — MASSS

The MASSS logo is a circuit-node M mark paired with the MASSS wordmark. The M is drawn as a circuit trace with glowing nodes at its peaks, encoding "smart software" visually. The double-SS is always highlighted in Electric Mint.

#### Logo anatomy

- **Icon mark** — circuit M with 3 nodes: left peak (mint), valley center (violet), right peak (mint)
- **Wordmark** — `MASSS` in 700 weight, wide letter-spacing. `SS` accented in `#00f5a0`
- **Lockup** — icon left, wordmark right, 16–18px gap

#### Primary logo SVG (dark background)

```svg
<svg width="200" height="52" viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logo-gradient" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00f5a0"/>
      <stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <!-- Icon mark background -->
  <rect width="52" height="52" rx="12" fill="#111118"/>
  <!-- Circuit M path -->
  <path d="M11 43 L11 16 L26 31 L41 16 L41 43"
        stroke="url(#logo-gradient)"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"/>
  <!-- Circuit nodes -->
  <circle cx="11" cy="16" r="3.5" fill="#00f5a0"/>
  <circle cx="26" cy="31" r="3.5" fill="#6366f1"/>
  <circle cx="41" cy="16" r="3.5" fill="#00f5a0"/>
  <!-- Wordmark: MAS in white, SS in mint -->
  <text x="68" y="34"
        font-family="'Inter', -apple-system, sans-serif"
        font-size="28"
        font-weight="700"
        letter-spacing="4"
        fill="#ffffff">MAS</text>
  <text x="122" y="34"
        font-family="'Inter', -apple-system, sans-serif"
        font-size="28"
        font-weight="700"
        letter-spacing="4"
        fill="#00f5a0">SS</text>
</svg>
```

#### Icon mark only SVG (all uses)

```svg
<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="icon-gradient" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00f5a0"/>
      <stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="12" fill="#111118"/>
  <path d="M11 43 L11 16 L26 31 L41 16 L41 43"
        stroke="url(#icon-gradient)"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"/>
  <circle cx="11" cy="16" r="3.5" fill="#00f5a0"/>
  <circle cx="26" cy="31" r="3.5" fill="#6366f1"/>
  <circle cx="41" cy="16" r="3.5" fill="#00f5a0"/>
</svg>
```

#### Light background variant SVG

```svg
<svg width="200" height="52" viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logo-gradient-light" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
      <stop stop-color="#047857"/>
      <stop offset="1" stop-color="#4f46e5"/>
    </linearGradient>
  </defs>
  <rect width="52" height="52" rx="12" fill="#e0e0da"/>
  <path d="M11 43 L11 16 L26 31 L41 16 L41 43"
        stroke="url(#logo-gradient-light)"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"/>
  <circle cx="11" cy="16" r="3.5" fill="#047857"/>
  <circle cx="26" cy="31" r="3.5" fill="#4f46e5"/>
  <circle cx="41" cy="16" r="3.5" fill="#047857"/>
  <text x="68" y="34"
        font-family="'Inter', -apple-system, sans-serif"
        font-size="28"
        font-weight="700"
        letter-spacing="4"
        fill="#0a0a0f">MAS</text>
  <text x="122" y="34"
        font-family="'Inter', -apple-system, sans-serif"
        font-size="28"
        font-weight="700"
        letter-spacing="4"
        fill="#047857">SS</text>
</svg>
```

#### Monochrome white SVG (single-color contexts)

```svg
<svg width="200" height="52" viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="52" height="52" rx="12" fill="#111118"/>
  <path d="M11 43 L11 16 L26 31 L41 16 L41 43"
        stroke="#ffffff"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"/>
  <circle cx="11" cy="16" r="3.5" fill="#ffffff"/>
  <circle cx="26" cy="31" r="3.5" fill="rgba(255,255,255,0.5)"/>
  <circle cx="41" cy="16" r="3.5" fill="#ffffff"/>
  <text x="68" y="34"
        font-family="'Inter', -apple-system, sans-serif"
        font-size="28"
        font-weight="700"
        letter-spacing="4"
        fill="#ffffff">MASSS</text>
</svg>
```

#### Animated logo (CSS — intro sequence)

Use on splash screens, loading states, and page transitions.

```html
<style>
  @keyframes masss-draw {
    from { stroke-dashoffset: 200; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes masss-node-pop {
    0%   { r: 0;   opacity: 0; }
    70%  { r: 5px; opacity: 1; }
    100% { r: 3.5px; opacity: 1; }
  }
  @keyframes masss-word-in {
    from { opacity: 0; transform: translateX(-8px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes masss-node-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.45; }
  }

  .masss-path {
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: masss-draw 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  }
  .masss-node-1 {
    r: 0; opacity: 0;
    animation: masss-node-pop 0.4s ease-out 1s forwards;
  }
  .masss-node-2 {
    r: 0; opacity: 0;
    animation: masss-node-pop 0.4s ease-out 1.15s forwards;
  }
  .masss-node-3 {
    r: 0; opacity: 0;
    animation: masss-node-pop 0.4s ease-out 1.3s forwards;
  }
  .masss-wordmark {
    opacity: 0;
    animation: masss-word-in 0.5s ease-out 1.4s forwards;
  }

  /* Idle pulse — use after intro completes */
  .masss-idle .masss-node-1,
  .masss-idle .masss-node-3 {
    animation: masss-node-pulse 2.5s ease-in-out infinite;
  }
  .masss-idle .masss-node-2 {
    animation: masss-node-pulse 2.5s ease-in-out 0.8s infinite;
  }
</style>

<div style="display:flex; align-items:center; gap:16px;">
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <defs>
      <linearGradient id="anim-grad" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stop-color="#00f5a0"/>
        <stop offset="1" stop-color="#6366f1"/>
      </linearGradient>
    </defs>
    <rect width="52" height="52" rx="12" fill="#111118"/>
    <path class="masss-path"
          d="M11 43 L11 16 L26 31 L41 16 L41 43"
          stroke="url(#anim-grad)"
          stroke-width="2.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"/>
    <circle class="masss-node-1" cx="11" cy="16" fill="#00f5a0"/>
    <circle class="masss-node-2" cx="26" cy="31" fill="#6366f1"/>
    <circle class="masss-node-3" cx="41" cy="16" fill="#00f5a0"/>
  </svg>
  <div class="masss-wordmark"
       style="font-family:'Inter',sans-serif; font-size:28px; font-weight:700; letter-spacing:5px; color:#fff;">
    MAS<span style="color:#00f5a0">SS</span>
  </div>
</div>
```

#### Logo usage rules

| ✅ Do | ❌ Don't |
|---|---|
| Always use the gradient icon on dark backgrounds | Change the icon fill to a solid color |
| Maintain the mint accent on `SS` in the wordmark | Render the full wordmark in a single color (except monochrome version) |
| Keep minimum clearspace = icon height on all 4 sides | Crowd the logo with other elements |
| Scale the icon and wordmark together proportionally | Stretch or distort the mark independently |
| Use the light variant on backgrounds lighter than `#444` | Place the dark variant on light backgrounds |
| Use monochrome white for embossing, watermarks, dark overlays | Use the gradient version on clashing colored backgrounds |

---

## Layout Principles

- **Background is always dark** — `#0a0a0f` as the page root
- **Sections alternate** between `#0a0a0f` and `#111118` for depth without borders
- **Max content width:** 1100px, centered
- **Section padding:** 80–96px top/bottom on desktop, 48px on mobile
- **Grid:** 12-column, 24px gutters
- **No harsh dividers** — use background color shifts or spacing to separate sections

### Glow Effects (Hero sections only)

```css
/* Mint glow — top right */
.glow-mint {
  position: absolute;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(0,245,160,0.15) 0%, transparent 70%);
  top: -80px; right: -60px;
  pointer-events: none;
}

/* Violet glow — bottom left */
.glow-violet {
  position: absolute;
  width: 280px; height: 280px;
  background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
  bottom: -80px; left: -40px;
  pointer-events: none;
}
```

---

## Brand Voice & Copy

### Personality Traits

1. **Direct & energetic** — Lead with action verbs. Cut filler words. "Get it done." not "We help you accomplish more."
2. **Boldly confident** — Make claims with conviction. Avoid hedging ("might", "perhaps", "could help"). Own the value.
3. **Clever, not cute** — Smart wordplay is on-brand. Forced puns are not. Wit comes from insight.
4. **User-first framing** — Center the user's outcome, not the product's features. "You'll finish 2x faster" not "Our engine processes tasks faster."

### Copy Patterns

| ✅ Do | ❌ Don't |
|---|---|
| "Get it done." | "We help you get things done." |
| "Works instantly." | "Our solution provides fast results." |
| "You're in control." | "Users have full control over their experience." |
| "Built for speed." | "Designed with performance in mind." |
| "No friction. Just flow." | "We've simplified the user experience." |

### CTA Copy Examples

- Primary CTA: **"Get started free"**, **"Start building"**, **"Try MASSS free"**
- Secondary CTA: **"See how it works"**, **"Learn more"**, **"Watch demo"**
- Urgency nudge: **"No credit card required"**, **"Set up in 60 seconds"**

---

## Do's and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| Use dark backgrounds exclusively | Use light/white page backgrounds |
| Use Electric Mint for primary actions | Use mint for decorative/non-interactive elements |
| Apply glassmorphism to overlaid cards | Apply blur to page-level backgrounds |
| Keep borders at 0.5px | Use thick 1–2px borders on cards |
| Use gradient only on the primary CTA and logo | Overuse gradient on every element |
| Keep copy short and punchy | Write long descriptive paragraphs in headlines |
| Use uppercase labels for section headers | Use uppercase for body text |

---

## Quick Reference — CSS Variables (recommended setup)

```css
:root {
  --color-bg: #0a0a0f;
  --color-surface: #111118;
  --color-card: #1c1c27;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-strong: rgba(255, 255, 255, 0.15);

  --color-mint: #00f5a0;
  --color-violet: #6366f1;
  --color-blue: #00c9ff;
  --color-violet-light: #818cf8;

  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.7);
  --color-text-muted: #8b8ba0;

  --gradient-primary: linear-gradient(135deg, #00f5a0, #6366f1, #00c9ff);
  --gradient-cta: linear-gradient(135deg, #00f5a0, #00c9ff);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 999px;

  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```
