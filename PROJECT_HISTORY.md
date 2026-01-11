# Eptesicus Laboratories Website - Project History

> Complete documentation of all development work, design decisions, and iterations.
> Last updated: December 24, 2024

---

## Project Overview

**Company:** Eptesicus Laboratories
**Product:** Lumis-1 — On-device AI with reliability infrastructure
**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion
**Deployment:** Cloudflare Pages (static export)

---

## Design Philosophy

### Final Direction: "Precision Intelligence"
- Light mode with glassmorphism aesthetic
- Professional, technical infrastructure company feel
- Inspired by: Linear, Vercel, Stripe, Anthropic
- Key elements: Inter font, monospace labels, blur effects, subtle animations

### Color Palette (Final)
```
Backgrounds: White base with gradient overlays
Text Primary: #111827 (gray-900)
Text Secondary: #6B7280 (gray-500/600)
Accent Blue: #3B82F6
Borders: rgba(255, 255, 255, 0.3) for glassmorphism
```

---

## Implementation Timeline

### Phase 1: Initial Setup
- Next.js 14 project initialization
- Tailwind CSS configuration
- Basic page structure
- Language provider for i18n support (English/Bulgarian)

### Phase 2: Core Sections Built
- **Hero Section**: Full viewport, animated title, CTA button
- **About Section**: Company description, problem/solution layout
- **Products Section (Lumis-1)**: Tabbed interface with Overview, Reliability, Economics, Use Cases
- **Team Section**: Founder cards linking to detail pages
- **Footer**: Contact links, social icons

### Phase 3: Visual Design Iterations

#### Background Evolution
1. **Static gradient** — Simple blue gradient
2. **Dots pattern** — Animated magnetized dots (REMOVED - too playful)
3. **Blossoming gradient** — Blobs that expand on scroll
4. **Dynamic blobs** — Moving gradient orbs following curved paths
5. **Flower blossom (FINAL)** — 5 "petals" that bloom on page load, then float gently

#### Navbar Evolution
1. **Static navbar** — Fixed header
2. **Scroll-triggered floating** — Morphs to pill shape on scroll
3. **Two-layer crossfade** — Separate docked/floating navbars with opacity transition (ATTEMPTED, REVERTED)
4. **Single navbar with Framer Motion (FINAL)** — Smooth 0.7s transitions for all properties

#### Footer Evolution
1. **Multi-section footer** — Large with multiple columns
2. **Compact single-row** — Links and icons in one line
3. **Brand-first layout (FINAL)** — Large "Eptesicus Laboratories" at top (black), links below, legal at bottom

### Phase 4: Animation & Motion

#### Scroll Behavior
1. **CSS scroll-behavior: smooth** — Basic smooth scrolling
2. **Lenis smooth scroll (FINAL)** — Ultra-fluid momentum scrolling with 1.4s duration, exponential easing

#### Entry Animations
- Hero: fadeUp with staggered delays
- Sections: whileInView triggers with 0.6s duration
- Navbar: Custom easing [0.25, 0.1, 0.25, 1]
- Flower blossom: 2.4s bloom on load with easeOutExpo

#### Scroll Indicator (Hero Arrow)
1. **Bouncy animation** — Playful spring effect (REMOVED - unprofessional)
2. **Fluid animation (FINAL)** — 2.5s duration, 6px movement, custom easing [0.45, 0, 0.55, 1]

### Phase 5: Typography System

#### Font Evolution
1. **DM Sans + Geist Mono** — Initial setup
2. **Inter + JetBrains Mono (FINAL)** — Industry standard, matches Linear/Vercel aesthetic

#### Typography Hierarchy (Final)
- **Headlines**: font-semibold (600), text-gray-900
- **Section Labels**: text-xs font-mono uppercase tracking-[0.2em] text-gray-400
- **Accent Labels**: text-blue-500
- **Body Text**: text-gray-500/600, font-normal

### Phase 6: Glassmorphism Implementation
Applied to:
- Floating navbar
- Products section card
- Team member cards
- Footer
- Founder detail pages (back button, content cards, social icons)

Properties:
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px) saturate(180%);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6);
border: 1px solid rgba(255, 255, 255, 0.3);
```

### Phase 7: Founder Pages Redesign
- Added gradient background (same flower blossom effect)
- Glassmorphism back button pill
- Updated typography to match main site
- Glassmorphism content cards
- Social icons with glass effect

### Phase 8: Contact Modal & CTA Behavior
- Replaced Gmail pitch deck links with an in-site contact modal
- Added prefilled subject for "Request Pitch Deck" CTAs
- Wired navbar Contact button to open the same modal
- Ensured founder cards link reliably in static export

---

## Components Created

### Layout
- `Navbar.tsx` — Floating glassmorphism navbar with scroll detection
- `Footer.tsx` — Brand-first footer with glassmorphism

### Sections
- `Hero.tsx` — Full viewport hero with animated arrow
- `About.tsx` — Problem/solution layout
- `ProductsSection.tsx` — Tabbed Lumis-1 showcase
- `TeamSection.tsx` — Founder cards grid
- `ValidatorSection.tsx` — Reliability layer explanation (created, may not be used)
- `UseCasesSection.tsx` — Use cases grid (created, may not be used)
- `EconomicsSection.tsx` — Cloud vs On-Device comparison (created, may not be used)
- `CurrentWork.tsx` — Active directives section

### UI Components
- `GradientBackground.tsx` — Flower blossom gradient with scroll reactivity
- `AnimatedText.tsx` — Per-character scroll animation (CREATED, NOT CURRENTLY USED)
- `ContactModal.tsx` — Glassmorphism contact form modal for pitch deck/contact

### Providers
- `LanguageProvider.tsx` — i18n context for EN/BG
- `SmoothScrollProvider.tsx` — Lenis smooth scroll wrapper
- `ContactModalProvider.tsx` — Contact modal state + open helpers

### Team
- `TeamMemberContent.tsx` — Founder detail page layout

---

## Features Implemented

### Currently Active
- [x] Responsive design (mobile, tablet, desktop)
- [x] Flower blossom gradient background on load
- [x] Lenis ultra-smooth scrolling
- [x] Floating glassmorphism navbar
- [x] Tabbed products section with smooth transitions
- [x] Founder detail pages with matching design
- [x] Contact modal with prefilled pitch deck subject
- [x] Language toggle (EN/BG)
- [x] PDF pitch deck link
- [x] Social media links
- [x] Framer Motion animations throughout

### Removed/Not Implemented
- [ ] Magnetized dots background — Removed (too playful)
- [ ] Two-layer navbar crossfade — Attempted, reverted to single navbar
- [ ] Per-character scroll animation in footer — Created but not used
- [ ] Dark mode — Considered but not implemented
- [ ] Separate Validator/Economics/UseCases sections — Created as components, consolidated into ProductsSection tabs

---

## Dependencies Added

```json
{
  "framer-motion": "motion animations",
  "lucide-react": "icons",
  "lenis": "smooth scrolling"
}
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Design system tokens
│   └── team/[slug]/
│       └── page.tsx         # Dynamic founder pages
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── CurrentWork.tsx
│   ├── ui/
│   │   ├── GradientBackground.tsx
│   │   └── AnimatedText.tsx
│   ├── providers/
│   │   ├── LanguageProvider.tsx
│   │   └── SmoothScrollProvider.tsx
│   └── team/
│       └── TeamMemberContent.tsx
└── lib/
    ├── translations.ts      # i18n strings
    └── team-data.ts         # Founder information
```

---

## Design Decisions & Rationale

### Why Light Mode (Not Dark)?
- Differentiates from typical "tech startup" dark themes
- Cleaner, more professional feel for B2B enterprise audience
- Glassmorphism effects work beautifully on light backgrounds

### Why Inter Font?
- Industry standard used by Linear, Vercel, Stripe
- Excellent readability at all sizes
- Clean geometric forms match technical aesthetic
- Free and well-supported

### Why Lenis Over CSS Smooth Scroll?
- CSS `scroll-behavior: smooth` is basic and jarring
- Lenis provides momentum, interpolation, and customizable easing
- Matches the ultra-fluid feel of premium sites like antigravity.google

### Why Flower Blossom Gradient?
- Organic, living feel without being playful
- Creates memorable first impression
- Subtle enough not to distract from content
- Responds to scroll for interactive engagement

---

## Performance Considerations

- `will-change-transform` on animated gradient blobs
- `requestAnimationFrame` for smooth animations
- Passive scroll listeners
- Lenis handles scroll performance efficiently
- Images optimized for static export

---

## Known Issues / Future Work

1. **Founder photos** — Currently placeholder gradients, need real photos
2. **OG images** — Need proper social sharing images
3. **Favicon** — Needs update
4. **Bulgarian translations** — May need review/completion
5. **Accessibility** — Could add more ARIA labels, focus management

---

## Git History Summary

This document represents the culmination of multiple development sessions focused on:
1. Building core functionality
2. Iterating on visual design
3. Refining animations for fluidity
4. Ensuring design consistency across all pages

---

*This file serves as a complete record of the project's evolution and can be used for onboarding, reference, or continuing development.*
