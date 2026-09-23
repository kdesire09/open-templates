---
name: Chronicle Editorial
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5e5d'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfde'
  on-secondary-container: '#626361'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3b0900'
  on-tertiary-container: '#de5932'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e3e2e0'
  secondary-fixed-dim: '#c7c6c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#464746'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#872100'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 13px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.1em
  metadata:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  page-margin-desktop: 80px
  page-margin-mobile: 24px
  gutter: 32px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is anchored in a modern editorial aesthetic, blending the authority of traditional publishing with the sleekness of high-end digital interfaces. It targets a sophisticated audience that values long-form content, intellectual rigor, and visual clarity.

The visual style is **Minimalist-Editorial**, prioritizing heavy whitespace, disciplined grid structures, and a refined typographic hierarchy. The goal is to evoke a sense of focused calm, reducing cognitive load to allow the content to lead the experience. The interface should feel like a premium printed journal—intentional, permanent, and high-quality.

## Colors

This design system utilizes a high-contrast palette to drive readability and brand recognition.

- **Primary (#121212):** A deep charcoal used for headings, primary text, and structural elements. It provides better legibility and a softer feel than pure black.
- **Secondary (#F9F8F6):** A soft, warm off-white used as the primary background. This reduces eye strain compared to stark white and reinforces the paper-like editorial feel.
- **Tertiary (#E05A33):** A vibrant terracotta used exclusively for calls to action, interactive highlights, and signifiers of importance.
- **Neutral (#6B6B6B):** A balanced grey for secondary metadata, captions, and borders.

## Typography

Typography is the core of this design system. We use **Playfair Display** for all headings to provide a high-contrast, literary elegance. Its serif details are sharp and sophisticated.

For the reading experience, **Source Sans 3** provides a neutral, highly legible counterpoint. It is used for body copy, navigation, and labels.

**Implementation Notes:**

- Maintain a line-length for body copy between 65-75 characters for optimal readability.
- Use `label-caps` for categories and section overlines to provide a structural rhythm.
- Vertical rhythm is critical; spacing between paragraphs should be generous (at least 1.5rem).

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a classic editorial feel, transitioning to a fluid model for smaller devices.

- **Desktop (1440px+):** A 12-column grid with a max-width of 1280px. Large margins (80px) ensure the content feels premium and uncrowded.
- **Tablet:** 8-column grid with 40px margins.
- **Mobile:** 4-column grid with 24px margins.

**Rhythm:**
We use a base-8 spacing scale. Section gaps are intentionally large (120px) to clearly demarcate different editorial zones (e.g., Featured Stories vs. Newsletter Signup).

## Elevation & Depth

This design system avoids heavy shadows to maintain a flat, modern "printed" look. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Most elements sit directly on the secondary background color.
- **Borders:** Use subtle, 1px solid lines (#E5E5E5) to separate logical sections or define card boundaries.
- **Interactions:** Use a subtle shift in background color (e.g., from #F9F8F6 to #F2F1EF) or a slight 4px vertical lift with a very soft, high-blur shadow (10% opacity) for hovered cards.

## Shapes

This design system utilizes **Sharp (0)** edges across all components.

The decision for 0px corner radii reinforces the architectural and editorial nature of the system. Buttons, images, and cards should all maintain crisp 90-degree angles to mirror the edges of a physical book or newspaper.

## Components

### Buttons

Primary CTAs use the Terracotta (#E05A33) background with white text. They are rectangular (no radius) and use `label-caps` for the label. Secondary buttons are outlined in Primary Charcoal with no fill.

### Card-Based Previews

Post previews should lead with high-quality imagery. The layout is vertical:

1. Aspect-ratio 3:2 image.
2. Category label (label-caps).
3. Headline (headline-md).
4. Short excerpt (body-md, 2 lines max).
5. Metadata (date/read time).

### Author Modules

Minimalist bio sections at the end of articles. Use a small square headshot (48x48px), the author's name in `label-caps`, and a brief bio in `body-md`.

### Input Fields

Underlined only (bottom border 1px) to maintain a clean, minimal look for newsletter signups. Labels should float or sit above in `label-caps`.

### Navigation

The header should be thin and "sticky" on scroll. Use simple text links in `label-caps` with a 1px underline that appears on hover.
