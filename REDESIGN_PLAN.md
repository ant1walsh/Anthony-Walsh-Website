# Anthony Walsh Portfolio — Redesign Implementation Plan

## Overview
Rebuild the portfolio in the existing React 18 + TypeScript + Vite + Tailwind + shadcn/ui stack, adopting the prototype's design system and selected interactive features.

---

## Design System Decisions

| Aspect | Current | Prototype | Recommendation |
|--------|---------|-----------|----------------|
| **Primary Background** | `220 25% 6%` (dark navy) | `0 0% 4%` (near-black) | **Keep current** — softer, more readable |
| **Accent (Cobalt)** | `217 91% 60%` | `227 100% 62%` | **Adopt prototype** — brighter, more electric |
| **Display Font** | Space Grotesk | Space Grotesk | **Keep** |
| **Body Font** | DM Sans | Inter | **Switch to Inter** — better readability, matches prototype |
| **Mono Font** | (none explicit) | JetBrains Mono | **Add JetBrains Mono** — terminal aesthetic |
| **Dark/Light Mode** | Dark only | Both + toggle | **Add light mode + toggle** |
| **Border Radius** | `0.75rem` (12px) | `6px` | **Adopt 6px** — sharper, more technical |

### New Color Tokens (extend tailwind.config.ts)
```typescript
// Add to theme.extend.colors
cobalt: {
  DEFAULT: "hsl(var(--cobalt))",        // 227 100% 62%
  deep: "hsl(var(--cobalt-deep))",      // 226 85% 52%
  muted: "hsl(var(--cobalt) / 0.14)",
},
bg: {
  DEFAULT: "hsl(var(--bg))",            // 0 0% 4% (dark) / 0 0% 100% (light)
  secondary: "hsl(var(--bg-2))",        // 0 0% 6.5% / 0 0% 96.5%
},
surface: {
  DEFAULT: "hsl(var(--surface))",       // 0 0% 8% / 0 0% 100%
  secondary: "hsl(var(--surface-2))",   // 0 0% 11% / 0 0% 96%
},
text: {
  DEFAULT: "hsl(var(--text))",          // 0 0% 98% / 0 0% 7%
  muted: "hsl(var(--muted))",           // 0 0% 58% / 0 0% 38%
},
border: {
  DEFAULT: "hsl(var(--border))",        // 0 0% 16% / 0 0% 88%
  strong: "hsl(var(--border-2))",       // 0 0% 22% / 0 0% 80%
},
```

### CSS Variables (add to index.css)
```css
:root {
  --cobalt: 227 100% 62%;
  --cobalt-deep: 226 85% 52%;
  --radius: 6px;
  --ease: cubic-bezier(.22, 1, .36, 1);
}

html[data-theme="dark"] {
  --bg: 0 0% 4%;
  --bg-2: 0 0% 6.5%;
  --surface: 0 0% 8%;
  --surface-2: 0 0% 11%;
  --text: 0 0% 98%;
  --muted: 0 0% 58%;
  --border: 0 0% 16%;
  --border-2: 0 0% 22%;
  --card-shadow: 0 24px 60px -30px rgba(0,0,0,.9);
}

html[data-theme="light"] {
  --bg: 0 0% 100%;
  --bg-2: 0 0% 96.5%;
  --surface: 0 0% 100%;
  --surface-2: 0 0% 96%;
  --text: 0 0% 7%;
  --muted: 0 0% 38%;
  --border: 0 0% 88%;
  --border-2: 0 0% 80%;
  --card-shadow: 0 20px 50px -30px rgba(20,30,60,.28);
}
```

---

## Interactive Features — Menu

| # | Feature | Description | Effort | Priority |
|---|---------|-------------|--------|----------|
| **1** | **Terminal Hero** | Typing animation in terminal UI, live metric cards, hero photo column | Medium | ⭐⭐⭐ |
| **2** | **Animated Timeline** | Commit-log style, scroll progress fill, node activation on scroll | Medium | ⭐⭐⭐ |
| **3** | **Project Explorer** | Search input, company/program filter pills, sort select, animated grid cards | High | ⭐⭐⭐ |
| **4** | **AI Studio Live Demo** | Positioning generator with banned-word scrubbing, mode tabs (product/feature) | High | ⭐⭐⭐ |
| **5** | **Testimonial Carousel** | Auto-advance (6.5s), dot navigation, prev/next, keyboard support, entry animation | Low | ⭐⭐ |
| **6** | **Scroll Progress Bar** | Top-of-page thin bar showing scroll position | Low | ⭐ |
| **7** | **Staggered Reveal** | IntersectionObserver-based entrance animations (replaces Framer Motion scroll) | Medium | ⭐⭐ |
| **8** | **Dark/Light Mode Toggle** | Persisted in localStorage, system preference detection, smooth transition | Low | ⭐⭐ |
| **9** | **Mobile Nav + Hamburger** | Slide-down mobile menu, accessible focus trapping | Low | ⭐⭐ |

---

## Page-by-Page Breakdown

### 1. Home (`/`)
- **Hero**: Terminal typing animation (replaces static text + hero image)
- **Stats**: 3 metric cards with count-up animation on scroll
- **Timeline**: Commit-log style with scroll progress bar
- **Testimonials**: Carousel with 8 testimonials
- **CTA Band**: "Let's work together" with primary/ghost buttons

### 2. Projects List (`/projects`)
- **Explorer Header**: Label, title, subtitle
- **Controls Row**: Search input + sort select
- **Filter Rows**: Company pills + Program pills (dynamic from data)
- **Results Count**: " > 11 results · Meta · Go-to-Market Strategy"
- **Grid**: 3-col (desktop) / 2-col (tablet) / 1-col (mobile) animated cards
- **Card Hover**: Lift + left border accent + read link animation

### 3. Project Detail (`/projects/:slug`)
- **Detail Hero**: Company badge, subtitle as title, program + metric
- **Sticky Side Nav**: Section links with active state on scroll
- **Sections**: Scenario, Challenge, Objective, Solution (bullet list), Impact
- **Back Button**: Returns to explorer with scroll position restored

### 4. AI Studio (`/ai-agents`)
- **Header**: Label, title, subtitle
- **Agent Cards**: 3 GitHub-linked cards (existing)
- **Live Demo**: Positioning Generator
  - Mode tabs: "New Product Launch" / "Feature Release"
  - Dynamic form fields per mode
  - Generate button → typewriter output with section headers
  - Banned-word detection + governance note
  - Preview badge (not production)

### 5. Blog (`/blog`)
- **Header**: Label, title, subtitle
- **Posts**: Linked cards with date, title, excerpt, external arrow
- **Podcast**: Special card with play icon, YouTube link

### 6. Resume (`/resume`)
- **Header**: Label, title, subtitle
- **Card**: Centered, download icon, "View Resume" button → Dropbox PDF

### 7. Contact (`/contact`)
- **Header**: Label, title, subtitle
- **CTA Cards**: Calendly (calendar), LinkedIn, GitHub, Email (mailto)

---

## Technical Architecture

### New Hooks to Create
```
src/hooks/
├── useTheme.ts           # Dark/light mode + persistence
├── useReveal.ts          # IntersectionObserver reveal animations
├── useScrollProgress.ts  # Scroll progress bar + timeline fill
├── useTerminalType.ts    # Terminal typing animation
├── useCounter.ts         # Count-up animation for stats
├── useCarousel.ts        # Testimonial carousel logic
├── useProjectFilters.ts  # Search, filter, sort state for explorer
└── usePositioningGen.ts  # AI demo generator logic
```

### New Components
```
src/components/
├── ui/                   # Keep existing shadcn/ui components
├── ThemeToggle.tsx       # Dark/light switch
├── ScrollProgress.tsx    # Top progress bar
├── TerminalHero.tsx      # Home hero with typing animation
├── MetricCard.tsx        # Stat card with count-up
├── CommitTimeline.tsx    # Timeline with scroll fill + nodes
├── TestimonialCarousel.tsx
├── ProjectExplorer.tsx   # Search + filters + grid
├── ProjectCard.tsx       # Explorer card
├── ProjectDetailLayout.tsx # Detail page wrapper + side nav
├── AIDemo.tsx            # Positioning generator
├── StaggeredReveal.tsx   # Wrapper for entrance animations
└── MobileNav.tsx         # Hamburger + slide menu
```

### Data Structure Updates
- `projects.ts`: Add `program` field (already in prototype), `metric` field
- `timeline.ts`: Already compatible
- `testimonials.ts`: Already compatible
- Add `agents.ts` for AI Studio cards (already in prototype data)

---

## Implementation Phases

### Phase 1: Foundation (2-3 hours)
- [ ] Update `tailwind.config.ts` with new tokens, fonts
- [ ] Update `index.css` with CSS variables, base styles, utilities
- [ ] Add Google Fonts: Inter, JetBrains Mono (keep Space Grotesk)
- [ ] Create `useTheme` hook + `ThemeToggle` component
- [ ] Update `Layout.tsx` to use new nav style + theme toggle
- [ ] Add `ScrollProgress` component + `useScrollProgress` hook
- [ ] Create `StaggeredReveal` wrapper component + `useReveal` hook

### Phase 2: Home Page (3-4 hours)
- [ ] Build `TerminalHero` with `useTerminalType` hook
- [ ] Build `MetricCard` with `useCounter` hook
- [ ] Build `CommitTimeline` with scroll-activated nodes
- [ ] Build `TestimonialCarousel` with `useCarousel` hook
- [ ] Assemble `Index.tsx` with new sections

### Phase 3: Projects Explorer (4-5 hours)
- [ ] Create `useProjectFilters` hook (search, company, program, sort)
- [ ] Build `ProjectCard` component with hover animations
- [ ] Build `ProjectExplorer` component (controls + grid)
- [ ] Update `Projects.tsx` page
- [ ] Create `ProjectDetailLayout` + side nav
- [ ] Update `ProjectDetail.tsx`

### Phase 4: AI Studio Demo (3-4 hours)
- [ ] Create `usePositioningGen` hook (banned words, templates)
- [ ] Build `AIDemo` component (tabs, form, typewriter output)
- [ ] Update `AIStudio.tsx` page

### Phase 5: Remaining Pages (2-3 hours)
- [ ] Update `Blog.tsx` with new card style
- [ ] Update `Resume.tsx` with new card style
- [ ] Update `Contact.tsx` with new CTA cards
- [ ] Ensure all pages use `StaggeredReveal` for entrances

### Phase 6: Polish & QA (2-3 hours)
- [ ] Mobile responsive testing (320px, 768px, 1024px, 1440px)
- [ ] Dark/light mode visual review
- [ ] Accessibility: focus states, ARIA labels, keyboard nav
- [ ] Performance: lazy load images, check bundle size
- [ ] Cross-browser: Chrome, Firefox, Safari
- [ ] Build + deploy verification

---

## Estimated Total: 16-22 hours

---

## Decision Points for You

Please confirm or adjust:

1. **Color tokens**: Adopt prototype's brighter cobalt (227°) + near-black bg (4%)? Or keep current navy (220°) + softer cobalt (217°)?
2. **Fonts**: Switch body to Inter, add JetBrains Mono? Keep DM Sans?
3. **Border radius**: Sharpen to 6px (prototype) or keep 12px (current)?
4. **Feature priority**: Rank the 9 features above — which are must-have vs nice-to-have?
5. **Project data**: Add `program` and `metric` fields to existing 11 projects (I can do this)?
6. **Hero image**: Prototype removes the hero photo in favor of terminal + metrics. Keep photo or replace?
7. **Light mode**: Full support or dark-only with toggle placeholder?

---

## Next Steps

Once you confirm the decision points, I'll:
1. Update this plan with your choices
2. Begin Phase 1 implementation
3. Share progress at each phase completion

Let me know your preferences!