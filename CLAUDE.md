# Radical Intelligence Website

## Project Overview

Marketing website for Radical Intelligence - an AI transformation consultancy. The site communicates RI's framework for enterprise AI adoption across People, Process, and Product.

## Tech Stack

- **Framework:** Next.js 16.1.1
- **React:** 19.2.3
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS 3.4.19
- **Animations:** Framer Motion 12.23.26
- **Fonts:** Inter (sans), JetBrains Mono (mono)

## Site Structure

```
/                    - Main landing page (8 sections)
/perspectives        - ASCII art visualization of RI framework
/perspectives/manifesto - Full manifesto (not yet implemented)
/work                - Case studies (not yet implemented)
```

## Main Page Sections

1. **Header** - Fixed nav with logo, links, contact modal
2. **Hero** - Main headline, CTAs, floating "AI TRANSFORMATION" card
3. **Framework** - Interactive 3x3 grid (Sight/Capability/Sustenance x People/Process/Product)
4. **Offerings** - Three expandable service cards
5. **RIOS** - Platform showcase with dashboard image
6. **Philosophy** - Company principles and approach
7. **Manifesto** - Key messaging ("Clarity is the new bottleneck")
8. **Footer** - Links, social, contact

## Key Components

### `/src/components/`

- `Header.tsx` - Navigation with mobile menu + contact modal
- `Hero.tsx` - Hero section with floating stats card
- `Framework.tsx` - 3x3 interactive grid showing RI framework
- `Offerings.tsx` - Three service cards (Sight, Capability, Sustenance)
- `RIOS.tsx` - Platform section with `/images/rios-image.png`
- `Philosophy.tsx` - Principles with `/images/team.png`
- `Manifesto.tsx` - Quote block and manifesto content
- `Footer.tsx` - Site footer
- `AsciiArt.tsx` - Animated ASCII diagram of RI framework
- `AnimatedHeading.tsx` - Word-by-word text animation utility

### `/src/app/perspectives/`

- `page.tsx` - Perspectives page displaying ASCII art visualization

## Assets

### Images (`/public/images/`)
- `rios-image.png` (1794x908) - RIOS dashboard screenshot
- `team.png` (926x836) - Team illustration
- `1.jpg` - Hero section image

### Logos (`/public/`)
- `RI-logo3.png` - Current logo in header
- `RI-logo.png`, `Ri-logo2.png` - Alternative logos

## Color System

Defined in `/src/app/globals.css`:

```css
--accent: #F06840;        /* Bright orange - primary accent */
--accent-light: #F8805A;
--background: #FAF9F6;    /* Off-white */
--background-secondary: #F5F4F1;
--foreground: #1a1a1a;    /* Near-black text */
--foreground-muted: #4a4a4a;
--foreground-subtle: #8a8a8a;
```

## RI Framework

The core framework has three movements applied across three domains:

**Movements:**
- **Sight** - "See what should exist" (2-4 week engagement)
- **Capability** - "Build your ability to build" (6-16 week sprints)
- **Sustenance** - "Stay with you as it evolves" (ongoing retainer)

**Domains:**
- **People** - Workforce transformation
- **Process** - Operations and workflows
- **Product** - Systems and technology

## Session Changes Summary

### Content Updates
- Hero floating card: "TRANSFORMATION" → "AI TRANSFORMATION"
- Manifesto headline: "Clarity is the new bottleneck"
- Manifesto copy rewritten for enterprise AI adoption focus
- RIOS readiness score: 78/Advancing → 44/Developing

### New Features
- Created `/perspectives` page with ASCII art visualization
- Updated ASCII art to show RI framework (Sight → People/Process/Product → Capability → Sustenance)

### Removed Elements
- Flywheel badge from Framework section
- Flywheel badge from Offerings section
- Reduced vertical spacing between sections

### Images Added
- RIOS dashboard image
- Team illustration
- New logo variations

### Logo
- Updated header to use `RI-logo3.png`

## Development

```bash
npm run dev    # Start dev server (typically runs on :3000 or :3001)
npm run build  # Production build
```

## Repository

GitHub: https://github.com/m37daveking/ri-web
