---
name: "Trần Ngọc Huy Portfolio"
description: "Precision console design system for enterprise full-stack engineer and AI builder showcase"
colors:
  primary: "#4F9CF9"
  primary-hover: "#3D8EF0"
  secondary: "#F97B4F"
  bg-base: "#09090C"
  bg-surface: "#111116"
  bg-elevated: "#1A1A22"
  text-primary: "#F0F0F5"
  text-secondary: "#7A7E8C"
  text-muted: "#767B8D"
  success: "#4ade80"
  border: "rgba(255, 255, 255, 0.06)"
  border-strong: "rgba(255, 255, 255, 0.10)"
  glow: "rgba(79, 156, 249, 0.15)"
typography:
  display:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Be Vietnam Pro, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.5vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
  label-sm:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  "2xl": "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  card-surface:
    backgroundColor: "{colors.bg-surface}"
    rounded: "{rounded.2xl}"
    padding: "24px 28px"
  skill-badge:
    backgroundColor: "{colors.bg-elevated}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# Design System: Trần Ngọc Huy Portfolio

## Overview

**Creative North Star: "The Precision Console"**

The design system bridges European enterprise software ergonomics with modern high-craft developer portfolio aesthetics. Rooted in dark obsidian depths, the interface functions like a finely tuned developer console: disciplined, dense with signal, and luminous at key points of interaction. Every layout decision prioritizes fast scanning, technical credibility, and immediate proof of competence.

The aesthetic avoids playful SaaS gradients and generic startup pastels in favor of high-contrast editorial typography (Be Vietnam Pro extra-bold), monospace telemetry metadata (JetBrains Mono), and dark ink-and-signal surfaces. Subtle atmospheric elements—such as a persistent 0.022-opacity procedural noise texture and 64px background gridlines—provide physical grounding without distracting from project case studies and code artifacts.

**Key Characteristics:**
- **High Signal-to-Noise Ratio:** Clean data visualization and zero decorative fluff; every visual element communicates role, stack, or achievement.
- **Ink & Signal Luminosity:** Deep onyx and smoked charcoal backgrounds punctuated by electric Signal Azure (#4F9CF9) and warm Ember Coral (#F97B4F).
- **Dual Personality:** Robust and structured for quick technical evaluation, yet fluid and tactile during interactive exploration.

## Colors

The palette pairs a dark ink canvas with precise telemetry signals and warm achievement accents.

### Primary
- **Signal Azure** (#4F9CF9 in dark mode, #3B82F6 in light mode): The primary interactive signal. Used for primary CTAs, active navigation states, section number labels, link hover highlights, and focused borders.
- **Signal Azure Hover** (#3D8EF0): Deepened blue state applied on primary button hover and active interactions.

### Secondary
- **Ember Coral** (#F97B4F): High-tier achievement and warm emphasis accent. Reserved for 1st-prize hackathon honors, gold trophy highlights, and gradient terminal streaks.

### Neutral
- **Obsidian Depth** (#09090C in dark, #FAFAFA in light): Base canvas background. Provides infinite contrast for typography and cards.
- **Smoked Charcoal** (#111116 in dark, #FFFFFF in light): Surface color for cards, modals, and container panels.
- **Graphite Sheet** (#1A1A22 in dark, #F3F4F8 in light): Elevated secondary surface used for skill badges, code tokens, and subtle inset backgrounds.
- **Starlight White** (#F0F0F5 in dark, #0D0D12 in light): Primary high-contrast text color for headings, titles, and active labels.
- **Muted Steel** (#7A7E8C in dark, #4B5563 in light): Secondary text for body paragraphs, narrative descriptions, and list items.
- **Deep Muted** (#3D404E in dark, #9CA3AF in light): Tertiary text for metadata, timestamps, decorative rules, and scroll hints.
- **Hairline Border** (rgba(255, 255, 255, 0.06) in dark, rgba(0, 0, 0, 0.07) in light): Structural divider lines defining card boundaries and nav separation.
- **Glow Atmosphere** (rgba(79, 156, 249, 0.15) in dark, rgba(59, 130, 246, 0.12) in light): Ambient blur shadow projected behind active buttons and hovered surfaces.

### Named Rules
**The Rarity of Signal Rule.** Signal Azure is used on ≤10% of any viewport. When everything glows, nothing is significant.
**The Dual Canvas Rule.** Dark mode is the primary expressive console experience; light mode translates the same contrast and structural ratios into a crisp, high-readability architectural sheet.

## Typography

**Display Font:** Be Vietnam Pro (weights 700, 800) with fallback `ui-sans-serif, system-ui, sans-serif`
**Body Font:** Inter (weights 400, 500) with fallback `ui-sans-serif, system-ui, sans-serif`
**Label/Mono Font:** JetBrains Mono (weight 400) with fallback `ui-monospace, monospace`

**Character:** Bold typographic authority meets technical precision. Heavy geometric letterforms in Be Vietnam Pro anchor major section entrances, while crisp Inter body copy ensures effortless scanning, and JetBrains Mono provides terminal-like metadata telemetry.

### Hierarchy
- **Display** (800 extrabold, clamp(2.75rem, 7vw, 5.5rem), line-height 1.0, tracking -0.03em): Hero display titles and oversized name banner.
- **Headline** (800 extrabold, clamp(2rem, 4.5vw, 3.5rem), line-height 1.1, tracking -0.02em): Major section headings (`SectionHeading`).
- **Title** (700 bold, clamp(1.35rem, 2.5vw, 1.875rem), line-height 1.2, tracking -0.01em): Project card titles, award names, and company titles.
- **Body** (400 regular, 1rem (16px), line-height 1.75): Core narrative paragraphs, project descriptions, experience bullet points. Max line length constrained to 65ch.
- **Label** (400 regular, 0.8125rem (13px), line-height 1.5, uppercase, tracking 0.1em to 0.18em): Monospace tags, section index indicators (`01 /`), technology pills, and timestamps.

### Named Rules
**The Monospace Telemetry Rule.** All metadata—dates, project categories, numerical indexes, roles, and technical badges—must render in JetBrains Mono. Prose and descriptive copy remain strictly in Inter.

## Layout

The spatial model uses an 8px base rhythm with fluid clamped spacing. The primary reading layout is anchored inside an inner container (`.container-inner`) constrained to a maximum width of 1120px with responsive horizontal padding (`clamp(1.25rem, 5vw, 2.5rem)`).

Major sections are spaced generously using vertical section padding of `clamp(5rem, 6vw, 8rem) 0` to create dramatic editorial rhythm and clear transition pauses between topics. Multi-column arrangements leverage CSS Grid:
- **Hero:** Asymmetric split grid (1fr text column and 380px floating telemetry card stack on desktop; single-column stacked on mobile).
- **Projects & Bento Showcase:** Responsive 2-column or 3-column grids with explicit spans (`.bento-wide` for span 2 columns, `.bento-tall` for span 2 rows).
- **Resume Document:** Fixed A4 portrait print layout (`210mm x 297mm`) with strict page-break controls (`break-inside: avoid`).

## Elevation & Depth

The system rejects heavy drop shadows in favor of tonal surface layering and luminescent edge demarcation.

Surfaces rest flat against the background base at z-index 0. Depth is established through three subtle layers:
1. **Tonal Elevation:** Base (`#09090C`) → Surface Card (`#111116`) → Elevated Chip (`#1A1A22`).
2. **Hairline Glass Highlight:** The `.card-surface` utility renders a 1px top-edge border (`--surface-highlight`: rgba(255, 255, 255, 0.04) in dark) simulating light falling on polished glass edge.
3. **Reactive Ambient Glow:** Hover states do not lift cards into physical drop shadows; instead, they project an ambient radial blur (`0 12px 40px rgba(79, 156, 249, 0.12)`) and light up the perimeter border to Signal Azure.

### Shadow Vocabulary
- **Card Rest:** `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)` — Minimal baseline separation.
- **Card Hover:** `box-shadow: 0 12px 40px rgba(79, 156, 249, 0.12), 0 2px 8px rgba(0, 0, 0, 0.2)` — Luminous interactive bloom.
- **Button Glow:** `box-shadow: 0 4px 20px var(--glow)` — Concentrated telemetry aura behind primary CTAs.
- **Gold Award Glow:** `box-shadow: 0 8px 40px rgba(249, 123, 79, 0.18), 0 2px 8px rgba(0, 0, 0, 0.2)` — Warm halo for 1st-prize competition honors.

### Named Rules
**The Flat-At-Rest Rule.** All cards and containers remain completely flat at rest with 1px hairline borders. Elevation and luminous glows appear only as a physical response to cursor proximity and focus.

## Shapes

Form language is characterized by rounded geometry balanced with crisp mechanical precision.

- **Cards and Modals:** Smooth rounded corners with a 16px radius (`rounded-2xl`). This softens dark rectangular containers and frames bento content harmoniously.
- **Interactive Controls (Buttons & Badges):** Pill geometry with a full radius (`rounded-full`, 9999px). Buttons, filter tags, and online indicators always use pill silhouettes.
- **Compact Code Chips & Mini Tags:** Moderate 6px to 8px radius (`rounded-md`, `rounded-lg`) for small technical identifiers (e.g. `01` numerical markers, compact skill badges).
- **Decorative Accent Rules:** 40px wide by 2px tall rounded pills (`rounded-full`) in Signal Azure preceding section headings.

## Components

### Buttons
- **Shape:** Pill silhouette (9999px radius).
- **Primary:** Gradient fill `linear-gradient(135deg, var(--accent-primary) 0%, #3d8ef0 100%)`, white text, internal padding `12px 28px` (`px-7 py-3`), text-sm font-medium.
- **Hover / Focus:** Luminous glow expansion (`box-shadow: 0 4px 20px var(--glow)`), slight physical lift (`-translate-y-0.5`), and brightness increase (110%). Focus-visible provides a 2px offset Signal Azure ring.
- **Secondary / Ghost:** Transparent background with hairline border (`var(--border-strong)`), `var(--text-primary)` label. On hover, border and text shift to Signal Azure accompanied by subtle glow bloom.

### Chips & Badges
- **Style:** Compact pill or rounded-md container with JetBrains Mono typography (11px to 13px). Inset background `var(--bg-elevated)` with 1px `var(--border)`.
- **Icon Integration:** Left-aligned 14px technology icon (Devicon color/monochrome or Lucide icon in Signal Azure).
- **Hover State:** Background lightens to 8% Signal Azure tint (`rgba(79,156,249,0.08)`), text elevates to primary white, and chip shifts 1px upward.

### Cards / Containers
- **Corner Style:** 16px radius (`rounded-2xl`).
- **Background:** Smoked charcoal (`var(--bg-surface)`).
- **Border:** 1px solid hairline (`var(--border)`).
- **Top Rim:** 1px inner glass edge highlight (`::before` pseudo-element with `var(--surface-highlight)`).
- **Internal Padding:** `24px 28px` (`p-6 sm:p-7`) for content cards; `20px` (`p-5`) for floating info cards.
- **Hover State:** 400ms transition with -4px translation lift, border illumination to Signal Azure, and radial gradient beam reveal.

### Navigation
- **Style:** Fixed sticky top bar (`h-16`) with floating blur backdrop (`backdrop-blur-xl`), `color-mix` 80% opacity base, and bottom hairline border.
- **Logo:** High-contrast `TNH` in Be Vietnam Pro 800 with trailing Signal Azure dot (`.`).
- **Nav Links:** Inter font-medium text-sm in muted steel; shifts to high-contrast white with Signal Azure underline indicator on active scroll intersection.
- **Mobile Menu:** Fullscreen animated overlay with body scroll-locking and quick-tap dismiss.

### Drupal & Client Showcase Cards
- **Structure:** 16:10 aspect ratio image showcase with smooth zoom on hover (`scale-105`), dark gradient scrim from bottom, floating category badge, and interactive lightbox trigger.

## Do's and Don'ts

### Do:
- **Do** wrap all metadata (dates, project categories, metrics, tech tags) in JetBrains Mono.
- **Do** preserve the 1px top-edge glass highlight on card surfaces (`.card-surface`).
- **Do** maintain WCAG 2.2 AA contrast standards for both light and dark themes.
- **Do** restrict Ember Coral (#F97B4F) to top-tier honors and designated warm focal points.
- **Do** keep button geometry strictly pill-shaped (`rounded-full`).

### Don't:
- **Don't** apply heavy drop shadows on resting cards; keep resting surfaces flat with hairline borders.
- **Don't** use generic stock gradient backgrounds or neon rainbow palettes.
- **Don't** alter the fixed A4 portrait print layout rules defined for `/resume`.
- **Don't** allow primary accent text or glows to exceed 10% of any viewport.
