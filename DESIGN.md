---
name: Elite Athletic Performance
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c7c4d7'
  on-secondary: '#2f2f3d'
  secondary-container: '#464555'
  on-secondary-container: '#b5b3c6'
  tertiary: '#f9f5ff'
  on-tertiary: '#2e2e46'
  tertiary-container: '#d9d7f7'
  on-tertiary-container: '#5d5d78'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e3e0f4'
  secondary-fixed-dim: '#c7c4d7'
  on-secondary-fixed: '#1a1a28'
  on-secondary-fixed-variant: '#464555'
  tertiary-fixed: '#e2dfff'
  tertiary-fixed-dim: '#c5c3e3'
  on-tertiary-fixed: '#191930'
  on-tertiary-fixed-variant: '#45445e'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  surface-elevated: '#1a1a35'
  accent-dim: '#b39700'
  text-muted: '#9090b0'
  border-subtle: '#2a2a4a'
  status-success: '#4ade80'
  status-error: '#ef4444'
  status-info: '#60a5fa'
typography:
  display-hero:
    fontFamily: Bebas Neue
    fontSize: 112px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Bebas Neue
    fontSize: 56px
    fontWeight: '400'
    lineHeight: '1.0'
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.1'
  data-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.0'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-v-desktop: 6rem
  section-v-mobile: 4rem
  gutter: 1.5rem
  stack-lg: 3.5rem
  stack-md: 1.5rem
  stack-sm: 0.75rem
  container-max: 960px
---

## Brand & Style

The brand personality is **Professional, Technical, and Athletic**, designed to evoke the high-stakes environment of elite sports under stadium lights. The target audience includes coaches, scouts, and high-performance athletes who require precision and data-driven insights.

The design system employs a **Modern-Corporate** aesthetic with a **Data-First Minimalist** philosophy. It prioritizes information density and clarity through a sophisticated dark mode interface. Visual interest is generated through subtle environmental cues—such as "strike zone" grid watermarks and floating data points—rather than decorative flourishes. The emotional response is one of authority, reliability, and cutting-edge performance.

## Colors

The color palette is built on a high-contrast dark foundation. The primary background (`#0d0d1a`) acts as the "Midnight" base, representing the stadium at night. Hierarchy is established through increasing lightness in surface layers:
- **Base:** The deepest layer for main page backgrounds.
- **Surface:** Used for secondary containers and input fields.
- **Elevated:** Reserved for cards and highlighted features.

The **Gold Accent** is the primary driver of attention, used exclusively for critical CTAs, pricing, and active states. Success and error states use high-vibrancy greens and reds to ensure they "pop" against the dark backgrounds. All text uses a high-legibility off-white to reduce eye strain while maintaining maximum contrast.

## Typography

This design system utilizes a disciplined dual-font strategy. **Bebas Neue** is the "Display" engine—its condensed, vertical nature communicates strength and athletic urgency. It is reserved for headlines and primary data points (like prices or statistics).

**Inter** serves as the functional workhorse for all body content, navigation, and labels. Its neutral, systematic profile ensures readability across dense data sets. 

- **Data Presentation:** Use `data-lg` for primary metrics. 
- **Eyebrows:** Use `label-bold` in all-caps with the primary gold color for section labels.
- **Scaling:** Headlines must use the defined mobile-specific variables on screens smaller than 768px to ensure the condensed display font remains readable and balanced.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centering content within a 960px container to maintain focus and technical precision. The spacing rhythm is strictly based on an **8px linear scale**, ensuring mathematical harmony across the UI.

- **Vertical Rhythm:** Large gaps (96px) separate major narrative sections. Within sections, content blocks are stacked with 24px or 56px intervals depending on their relationship.
- **Mobile Adaptation:** At the 768px breakpoint, horizontal container padding remains at 24px, but vertical section spacing scales down to 64px.
- **Grid:** Use a 12-column grid for desktop layouts, transitioning to a single-column stack on mobile. Elements should utilize `stack-md` for standard vertical rhythm between internal components.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** rather than traditional shadows. By stacking lighter navy shades on top of darker ones, the system creates a sense of "physical" surfaces without visual clutter.

- **Background Blurs:** Navigation bars must use a `12px` backdrop blur with 92% opacity to maintain context while scrolling.
- **Glow Effects:** The primary CTA is the only element permitted to use a shadow—a soft gold glow (`rgba(255,215,0,0.2)`) to simulate a light source.
- **Overlays:** Use subtle radial gradients (Gold at 7% opacity) at the top of the Hero section to create a "spotlight" effect on the main value proposition.

## Shapes

The shape language balances modern approachability with technical structure.
- **Standard Radius (8px - 12px):** Applied to most containers, inputs, and primary buttons.
- **Emphasized Radius (16px):** Specifically for pricing or featured cards to make them feel distinct from secondary content.
- **Pill (Full Round):** Exclusively for status badges, eyebrows, and tag elements. This contrast between the structured cards and pill-shaped labels helps categorize information quickly.

## Components

### Buttons
- **Primary:** High-contrast Gold background with black text. Large 12px padding. Subtle gold outer glow on hover.
- **Secondary:** Ghost style with `border-subtle` and white text.
- **Navigation CTA:** Smaller scale with an 8px radius for a more compact, utility-focused feel.

### Cards
Cards use the `surface-elevated` background. Standard cards feature a 1px `border-subtle`. Featured cards or hover states should transition the border to a 30% opacity Gold.

### Input Fields
Inputs should match the `surface` background color with an 8px radius. Active states are indicated by a 1px Gold border. Labels should use the `text-muted` color and `label-bold` typography style.

### Badges & Eyebrows
Always pill-shaped. Use `label-bold` text. Typically formatted as Gold text on a subtle translucent background or white text on a Gold background for high-priority alerts.

### Strike Zone Grid
A signature layout component. Use 1px `border-subtle` lines to create a 3x3 grid watermark behind data-heavy sections to reinforce the sports-technical theme.