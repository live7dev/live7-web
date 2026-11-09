---
name: British Wholesale & Retail Fresh Produce
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3f493f'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6f7a6e'
  outline-variant: '#becabc'
  surface-tint: '#006d30'
  primary: '#00652c'
  on-primary: '#ffffff'
  primary-container: '#15803d'
  on-primary-container: '#d3ffd5'
  inverse-primary: '#79db8d'
  secondary: '#bb0112'
  on-secondary: '#ffffff'
  secondary-container: '#e02928'
  on-secondary-container: '#fffbff'
  tertiary: '#006347'
  on-tertiary: '#ffffff'
  tertiary-container: '#147e5d'
  on-tertiary-container: '#cbffe5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#95f8a7'
  primary-fixed-dim: '#79db8d'
  on-primary-fixed: '#00210a'
  on-primary-fixed-variant: '#005323'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000b'
  tertiary-fixed: '#97f5cc'
  tertiary-fixed-dim: '#7bd8b1'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-trust, functional, and clean digital environment tailored for the UK commercial food sector, serving both wholesale (caterers, independent grocers, restaurants) and retail household customers. The visual narrative balances pragmatic British mercantile utility with fresh agricultural vitality.

### Personality & Tone
- **Dependable & Utilitarian:** Direct pricing, zero visual clutter, unambiguous volume tiers, and explicit VAT/tax declarations.
- **Agricultural Freshness:** Crisp, organic vitality signaled through selective botanical emerald accents, counterbalanced by clean clinical white space.
- **Commercial Authority:** Institutional trust built on British trade norms, Red Tractor certification markers, and explicit delivery SLA flags.

### Design Movement
**Modern Functionalist Commerce:** Clean, restrained minimalism characterized by rigid data alignment, low-contrast structural dividers, micro-elevations, and high legibility. Avoid decorative gradients, heavy drop shadows, or novelty stylings; the product imagery and trade economics are the focal points.

## Colors

The palette is intentionally restrained, relying primarily on high-contrast neutrals to maintain a professional B2B/B2C trade portal demeanor while drawing focal accents directly from the brand identity.

### Palette Architecture
- **Primary Green (`#15803D` / Deep Botanical Green):** Used for primary conversion actions (Add to Cart, Bulk Order checkout, Primary CTAs), availability status indicators ("In Stock"), and verified freshness markers.
- **Secondary Red (`#DC2626` / Crimson Accent):** Strictly reserved for urgent utility: bulk tier volume breaks, wholesale discount tags, clearance alerts, and stock threshold warnings. Never used as generic background fills.
- **Tertiary Dark Green (`#047857`):** Hover states, interactive highlights, and corporate navigation links.
- **Neutrals & Canvas:**
  - Base Background: Pure White (`#FFFFFF`) for product card surfaces and critical forms.
  - Page Wash: Warm Slate Neutral (`#F9FAFB`) for structural backdrops and alternating data rows.
  - Borders & Outlines: Subtle Slate (`#E5E7EB`) ensuring structural clarity without visual weight.
  - Body Typography: Charcoal Slate (`#374151`) for extended readability.
  - Headings & Primary Data: Deep Pitch Charcoal (`#111827`) for maximum contrast and readability under varied ambient lighting.

## Typography

The typographic hierarchy prioritizes rapid scanning of numeric figures, UK trade measurements (kg, sacks, crates, pallets), and currency notations (£ GBP).

- **Headlines (Plus Jakarta Sans):** Selected for its crisp geometric terminals and subtle humanist warmth, providing high visual polish to marketing banners, category headers, and tier titles.
- **Body & Numerical Labels (Inter):** Highly legible tabular numerals ensure that product codes, multi-buy rates (e.g. `£14.50 / 25kg bag`), and VAT calculations align cleanly across tables and dense product grids.

## Layout & Spacing

The layout employs a responsive 12-column grid designed for density and information hierarchy. 

### Grid & Form Factors
- **Desktop (1200px+):** 12-column layout with 24px gutters and max-width container capped at 1360px. Facilitates standard 4-to-5 item product grids and deep faceted category filters on the left rail.
- **Tablet (768px – 1199px):** 8-column layout with 20px gutters. Filters collapse into a slide-over modal; product cards render in 2 or 3 columns.
- **Mobile (< 768px):** 4-column fluid layout with 16px margins and gutters. Navigation collapses into an off-canvas drawer; quick-action sticky checkout bar activates on product detail screens.

### Spatial Rhythm
Strict 4px/8px incremental rhythm govern all inner padding and structural separation. Whitespace is functional: tight around unit-of-measure selectors to show relation, expansive between major trade sections to minimize operational error.

## Elevation & Depth

Visual hierarchy is maintained predominantly through low-contrast outlines and tonal layering, minimizing decorative distraction and focusing user attention on product specifications.

- **Level 0 (Flat/Base):** Page surface `#F9FAFB`.
- **Level 1 (Card/Container Surfaces):** Pure White `#FFFFFF` with a crisp `1px solid #E5E7EB` stroke. No shadow in default resting state.
- **Level 2 (Hover/Active Interactivity):** `0px 4px 12px -2px rgba(17, 24, 39, 0.06), 0px 2px 4px -2px rgba(17, 24, 39, 0.03)` with border shifting to `#D1D5DB`. Applied to elevated product cards on hover and dropdown panels.
- **Level 3 (Sticky Headers & Cart Drawer):** `0px 10px 15px -3px rgba(17, 24, 39, 0.08)` coupled with semi-opaque backdrop blur (`backdrop-filter: blur(8px)`) for the sticky UK commerce header and mobile navigation bar.

## Shapes

The design system utilizes a conservative `roundedness: 1` (`0.25rem` / 4px base radius) throughout its structural framework. 

- **Containers & Product Cards:** 4px radius (`rounded-sm`) ensures a clean, modular appearance reminiscent of professional wholesale shipping containers, preventing soft, frivolous consumer-app visuals.
- **Badges & Micro-Pills:** 4px radius for wholesale volume tags (e.g., `Min 500kg`, `Red Tractor Certified`), retaining a clean architectural box shape.
- **Inputs & Standard CTAs:** 4px to 6px (`rounded-sm` / `rounded-md`) to ensure clear clickable boundaries that fit comfortably alongside dense data tables.

## Components

### 1. Buttons
- **Primary Action (Add to Order / Proceed to Checkout):** Solid `#15803D` background, `#FFFFFF` text, `4px` border radius, semi-bold text. Focus ring: `2px solid #166534` with 2px offset.
- **Secondary Action (Request Bulk Quote / Spec Sheet):** Crisp `#FFFFFF` background with `1px solid #E5E7EB`, `#111827` text. On hover, background shifts to `#F9FAFB` with `#D1D5DB` border.
- **Destructive / Urgency (Clear Order):** Subtle `#FEF2F2` background with `#DC2626` text and border.

### 2. Product Cards & Bulk Pricing Table
- **Standard Card:** Fixed aspect ratio (1:1) white photo zone, product title (`headline-sm`), provenance origin tag (e.g., "Kent, UK" or "Imported Basmati"), price per unit (`£ GBP`), and integrated quantity stepper (`[-] 1 [+]`).
- **Wholesale Price Break Tier:** A tabular micro-component within cards or drawers:
  - *Tier 1 (1–9 bags):* £16.50/ea
  - *Tier 2 (10–49 bags):* £14.20/ea
  - *Tier 3 (50+ Pallet):* £11.90/ea (Marked with `#DC2626` "Save 28%" pill).

### 3. Trust & Certification Badges
- Compact rectangular badges (`label-sm`, uppercase, letter-spaced) anchored to product headers and page footers:
  - **Red Tractor / British Grown:** `#F0FDF4` light green tint background with `#15803D` border and text.
  - **Wholesale Tier Alert:** `#FEF2F2` tinted background with `#DC2626` accent text.

### 4. Form Fields & Steppers
- Input containers feature `#FFFFFF` background, `#D1D5DB` borders, and `#111827` input text with `8px` vertical padding.
- Dedicated numeric stepper for trade volume (50kg bag, 100kg crate increments) with direct tactile `+` and `-` boundary buttons.

### 5. Sticky Navigation & Commerce Header
- Top strip: Delivery status alert ("Next Day Wholesale Delivery Available Across Greater London & UK Mainland") with contact number.
- Main sticky bar: Brand identity, category dropdowns (Fresh Veg, Fresh Fruit, Bulk Rice), global SKU/produce search bar with autocomplete, wholesale account toggle (B2B Tax Exemption vs Retail), and cart preview with live GBP running total.