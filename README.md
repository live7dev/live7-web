# Live7 Wholesale - Next.js & React Web Platform

A user-friendly, mobile-responsive wholesale produce and grain e-commerce web platform built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **shadcn/ui** components.

## Highlights

- **Outside `/public` Architecture**: The full application code resides at the project root (`src/`, `data/`, `components/`), keeping `public/` purely for static assets.
- **Zero Price Display (Wholesale Trade Model)**: Produce market rates fluctuate daily. All product prices are hidden from public display. Trade buyers select their desired pack size and click **"+ Add to Quote"** to build a trade inquiry list.
- **One-Click WhatsApp & Email Inquiries**: Trade buyers can submit their selected items, pack sizes, quantities, and contact details directly to your WhatsApp or email with structured formatting.
- **Easily Updatable via `/data`**: All products, categories, company contacts, depots, and FAQs live in clean JSON files inside the root [`data/`](file:///d:/work/live7web/data) folder.
- **Authentic Newly Launched Tone**: Clean, direct, and transparent copy highlighting founder-level attention, agile cold-chain dispatch, and flexible trial orders with low minimum order quantities (MOQs).
- **Fully Responsive & Accessible**: Mobile slide-out drawer, sticky floating quote pill on mobile, touch-friendly touch targets, and accessible dialogs.

---

## Directory Structure

```
live7web/
├── data/                       # Directly editable JSON configuration files
│   ├── site-config.json        # Brand, phone, WhatsApp, email, depots, announcements
│   ├── categories.json         # Category filters and icons
│   ├── products.json           # Catalog items (pack sizes, origin, stock status - ZERO prices)
│   └── faq.json                # Wholesale trade FAQs
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind CSS & theme variables
│   │   ├── layout.tsx          # Root layout with fonts & QuoteProvider
│   │   └── page.tsx            # Main application page
│   ├── components/             # High-level section components
│   │   ├── Navbar.tsx          # Header with search, quote count, and mobile toggle
│   │   ├── Hero.tsx            # Hero with trust badges and audience spotlights
│   │   ├── Catalog.tsx         # Catalog with live search and category chips
│   │   ├── WhyLive7.tsx        # Newly launched supplier advantages
│   │   ├── FAQSection.tsx      # Wholesale FAQ accordion
│   │   ├── DepotsAndContact.tsx# Depot locations and contact links
│   │   ├── QuoteDrawer.tsx     # Slide-out trade quote tray with WhatsApp/Email submit
│   │   ├── MobileQuoteBar.tsx  # Sticky floating quote pill on mobile screens
│   │   └── Footer.tsx          # Brand footer with legal & depot details
│   ├── components/ui/          # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   └── accordion.tsx
│   ├── context/
│   │   └── QuoteContext.tsx    # State management for quote list and drawer
│   ├── lib/
│   │   └── utils.ts            # shadcn cn() utility
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/                     # Static media assets only
├── components.json             # shadcn configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── .gitignore                  # Git ignore rules
```

---

## How to Run & Develop

### 1. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## How to Update Content

### Adding or Editing Products (`data/products.json`)
Open [`data/products.json`](file:///d:/work/live7web/data/products.json) and add or modify any product:
```json
{
  "id": "prod-9",
  "title": "Fresh Ginger Root (5kg Box)",
  "category": "vegetables crates",
  "sku": "L7-GIN-005",
  "grade": "Grade A Washed",
  "origin": "Direct Farm Import",
  "stockStatus": "In Stock",
  "image": "https://example.com/ginger.jpg",
  "description": "Plump, fibrous, high-aroma fresh ginger root for commercial kitchen prep.",
  "packSizes": [
    { "name": "1kg Pack", "type": "Retail" },
    { "name": "5kg Commercial Box", "type": "Catering", "default": true }
  ],
  "volumeTiers": "Single boxes and pallet consignments available",
  "pricingNotice": "Wholesale Pricing On Request",
  "storage": "Store in a cool, dry ambient store"
}
```
*No prices should be included in `products.json` — all items remain quote-based.*

### Updating Company Contacts & Depots (`data/site-config.json`)
Open [`data/site-config.json`](file:///d:/work/live7web/data/site-config.json) to update phone numbers, WhatsApp numbers, order emails, depot locations, or announcement banners.

