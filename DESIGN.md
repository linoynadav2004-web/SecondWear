# SecondWear — Design System

## Brand Identity
SecondWear is a premium second-hand clothing marketplace. The design conveys warmth, sustainability, and elegance.

---

## Color Palette

| Token              | Hex       | Usage                        |
|---------------------|-----------|------------------------------|
| `--bg-cream`        | `#FAF9F6` | Page background              |
| `--primary-brown`   | `#4A3728` | Headings, buttons, accents   |
| `--accent-brown`    | `#8B5E3C` | Links, brand labels          |
| `--secondary-cream` | `#F5F1E9` | Cards, sections, dividers    |
| `--text-main`       | `#2C2420` | Body text                    |
| `--text-muted`      | `#6D5D51` | Subtitles, secondary text    |
| `--white`           | `#FFFFFF` | Card backgrounds, inputs     |

---

## Typography

| Role      | Font Family       | Weight    |
|-----------|-------------------|-----------|
| Headings  | Playfair Display  | 700 (Bold)|
| Body Text | Inter             | 400–700   |

- Base font size: `15px`
- Line height body: `1.5`
- Line height headings: `1.2`

---

## Spacing & Layout

| Token             | Value   |
|-------------------|---------|
| `--border-radius` | `12px`  |
| Container max     | `1100px`|
| Container padding | `0 24px`|

---

## Shadows

| Token      | Value                                  |
|------------|----------------------------------------|
| `--shadow` | `0 4px 15px rgba(74, 55, 40, 0.06)`   |

---

## Components

### Navbar
- Sticky top, white background, subtle shadow
- Logo (Playfair Display), navigation links with Lucide icons

### Footer
- Brown background (`--primary-brown`), white text

### ProductCard
- White card, 12px radius, image with 4:5 aspect ratio
- Heart (wishlist) + Cart icon overlay
- Brand label, product name, price in ₪

### Buttons
- Primary: `--primary-brown` background, white text, 12px radius
- Transition: `all 0.25s ease`

---

## Target Platform
- Desktop only — optimized for standard screen sizes (1024px+)
- No mobile/responsive layout required
