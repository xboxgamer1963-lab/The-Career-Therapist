# Claude Code Plan — mycareertherapist.com (Existing Project)

The project is already scaffolded. Do NOT run `create-next-app`. Just make the changes below.

> **Note (Tailwind v4):** This repo runs Tailwind v4 with `@tailwindcss/postcss`. There is no `tailwind.config.ts`. Design tokens are added via the `@theme` block in `src/app/globals.css` (Step 2).

---

## Step 1 — Install missing dependencies

```bash
npm install
```

Tailwind v4 is already installed and wired through PostCSS — no `tailwindcss init` needed.

---

## Step 2 — Design Tokens (Tailwind v4)

### `src/app/globals.css` — replace contents with the brand tokens, fonts, and base styles

```css
@import "tailwindcss";

@theme {
  --color-cream: #FAF7F2;
  --color-charcoal: #1C1C1C;
  --color-sage: #4A6741;
  --color-sage-light: #EEF2ED;
  --color-muted: #6B6B6B;
  --color-border: #E5E0D8;

  --font-serif: "Instrument Serif", Georgia, serif;
  --font-sans:  "DM Sans", sans-serif;
}

html { scroll-behavior: smooth; }

body {
  background-color: #FAF7F2;
  color: #1C1C1C;
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 { font-family: "Instrument Serif", Georgia, serif; }

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
```

---

## Step 3 — Global Layout

Replace `src/app/layout.tsx` with metadata, Google Fonts (Instrument Serif + DM Sans), Material Icons, Navbar, Footer.

---

## Step 4 — Components

Replace `src/components/Navbar.tsx` with the announce-bar + sticky nav + mobile menu version.
Replace `src/components/Footer.tsx` with the 4-column footer.

---

## Step 5 — Create new section components

- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ServicesGrid.tsx`
- `src/components/Testimonials.tsx`
- `src/components/WhyMe.tsx`
- `src/components/NewsletterCTA.tsx`
- `src/components/FAQAccordion.tsx`
- `src/components/FinalCTA.tsx`

---

## Step 6 — Homepage

Replace `src/app/page.tsx` so it composes the eight sections above in order.

---

## Step 7 — Delete unused files

```bash
rm src/app/page.module.css
rm public/file.svg public/next.svg public/vercel.svg public/window.svg public/globe.svg
```

---

## Step 8 — Inner page stubs

For each route folder, write a `page.tsx` that renders an eyebrow, italic serif title, muted description, and the shared `<FinalCTA />`.

Apply to each route with these values:

| Folder | Eyebrow | Title | Description |
|---|---|---|---|
| `coaching` | Work With Me | 1-on-1 Career Coaching | Personalised career coaching for professionals at every stage. |
| `job-search-coaching` | Job Search | Land Your Next Job | A focused strategy to find the right role, stand out, and get offers. |
| `get-promoted` | Promotion Coaching | Get That Promotion | Build visibility, make the case, and have the conversations that get you promoted. |
| `laid-off` | Redundancy Support | Just Been Laid Off? | Practical, fast support to get you back on your feet and into your next role. |
| `career-change` | Career Change | Ready for a New Direction? | Clarity on what you want, and a practical plan to get there. |
| `club` | The Career Alignment Club | Join the Club | A community and resource hub for professionals who want to grow. |
| `about` | About Aisha | Career coach with an insider edge. | Years in HR. Now helping professionals get the careers they deserve. |
| `blog` | Career Blog | Practical Career Advice | Honest, experience-led articles on jobs, promotions, and career growth. |
| `faq` | FAQ | Frequently Asked Questions | Everything you need to know before working together. |
| `contact` | Book a Call | Let's Talk About Your Career | A free 20-minute discovery call. No obligation. |
| `subscribe` | Newsletter | Weekly Career Insights | Practical advice delivered every week — free. |
| `free-course` | Free Course | The 5-Day Career Clarity Course | A free email course to help you get clear on your next career move. |

---

## Step 9 — Verify & run

```bash
npm run build
```

Fix any TypeScript errors — most likely missing `'use client'` on files that use `useState`, or missing `alt` props on images.

---

## Done Checklist

- [ ] `globals.css` updated with `@theme` brand tokens + base styles
- [ ] `layout.tsx` updated with fonts, metadata, Navbar + Footer
- [ ] `Navbar.tsx` replaced (announce bar, mobile menu)
- [ ] `Footer.tsx` replaced (4-column layout)
- [ ] `HeroSection.tsx` created
- [ ] `AboutSection.tsx` created
- [ ] `ServicesGrid.tsx` created
- [ ] `Testimonials.tsx` created
- [ ] `WhyMe.tsx` created
- [ ] `NewsletterCTA.tsx` created
- [ ] `FAQAccordion.tsx` created
- [ ] `FinalCTA.tsx` created
- [ ] `page.tsx` replaced (assembles all sections)
- [ ] All 12 inner page stubs created
- [ ] Unused files deleted
- [ ] `npm run build` passes with no errors
