# Website steering for Codex

## Project and scope

- This is Ahma-Lattiat Oy's Finnish company website. Aim for a modern, simple,
  trustworthy site that shows real flooring work and makes contacting the company easy.
- The active application is **`ahma-site/`**, as confirmed by the root README.
  `angular/` and `ui/` contain other versions; leave them alone unless requested.
- The active package declares React 18.3, TypeScript 5.5, Vite 5.4, Tailwind CSS 3.4,
  Heroicons, AOS, Framer Motion, and React Slick. Check the package and lockfile before
  using version-specific APIs. Keep the current stack unless a migration is requested.
- Christian handles IT; Janne is his father. Preserve company details, Finnish names,
  real project photographs, and supplied copy. Do not invent testimonials, credentials,
  completed jobs, partner relationships, or business claims.
- Work autonomously within the requested scope. Keep progress and final replies short,
  normally one or two sentences, because the user listens through Siri.

## Use the installed guidance

1. **Modern Web Guidance:** Before implementing HTML, CSS, or browser JavaScript,
   read its skill and search for the specific task, then retrieve the relevant guides.
   Adapt their guidance to this React/Tailwind application. Default to Baseline Widely
   available browser features; use the documented fallbacks for newer features.
2. **Build Web Apps:** Use `frontend-app-builder` for an actual redesign or new visual
   surface. Follow its concept/design-system workflow and implement the accepted visual
   direction faithfully. Use `frontend-testing-debugging` for rendered UI fixes and
   verification, and `react-best-practices` for React changes. Routine small fixes should
   fit the existing design rather than start an unrelated redesign.
3. **Context7:** When library behavior or APIs need checking, resolve the library ID,
   then query documentation matching the installed version. Never send credentials,
   private source, or personal data in documentation queries. Context7 returned
   "not connected" when this document was prepared on 2026-10-16; check its current
   connection state rather than assuming access. If unavailable, use official React,
   Tailwind v3, Vite, or library documentation and state the limitation briefly.

Read the actual skill instructions when applying a skill; this file is a project brief,
not a replacement for them. Document-only preparation does not require generating
mockups, running the site, or changing the design.

## Design direction

- Current redesign direction: retain the existing team photo as a full-screen hero,
  keep faces unobstructed, and modernize typography, navigation, and contact actions.
  The user permits only images already in `public/` or `src/assets/`; do not download
  or generate imagery for this work. Use the agreed verbal direction as the reference.
- Read [TYPOGRAPHY.md](TYPOGRAPHY.md) before changing text styles; it defines the
  project's type scale, Finnish text handling, font loading, and accessibility checks.
- Prioritize real work photographs, clear Finnish typography, readable contrast,
  generous but purposeful spacing, and obvious phone/email contact actions.
- Use the existing logo and genuine project/employee images. Generated concepts can
  guide layout, but generated work must never masquerade as an actual company project.
- Keep one coherent palette, spacing scale, type scale, and icon style. Reuse components
  and explicit variants instead of copying slightly different markup.
- Avoid decorative clutter, generic marketing filler, excessive animation, and repeated
  card grids. Design the entire requested page or section, including mobile behavior.
- Preserve supplied content and anchor destinations unless the task calls for changes.
  A redesign should improve the customer's experience without inventing services.

## React and Tailwind implementation

- `src/App.tsx` composes the page; `src/home/` contains its sections. `src/main.tsx`
  initializes the app and AOS. Shared styles are in `src/index.css` and `src/App.css`.
- Keep components focused, use typed props and stable list keys, and keep state local.
  Calculate derived values during render; reserve effects for external synchronization
  with cleanup. Apply performance optimizations to demonstrated problems.
- This is a Vite client app. Do not copy Next.js server-component or `next/dynamic`
  patterns into it. Add dependencies only when they solve a concrete requirement.
- Use **Tailwind v3** utilities and the existing `tailwind.config.js` / PostCSS setup.
  Do not silently introduce Tailwind v4 syntax or change build tooling.
- Start with unprefixed mobile styles, then use `sm:`, `md:`, and larger breakpoints.
  Use complete utility class strings so Tailwind can discover them.
- Prefer semantic HTML and native browser features. Provide accessible link/button
  names, visible keyboard focus, sensible heading order, and meaningful image alt text.
  Respect reduced-motion preferences; essential content must remain readable without
  scroll animations. Check fixed navigation does not cover anchor destinations.
- Keep project images responsive and correctly sized. Set dimensions or aspect ratios
  to prevent layout shifts. Lazy-load offscreen images, but not the main hero image.
  Prefer discoverable `<img>` / `<picture>` for likely LCP imagery over CSS backgrounds.
- For Finnish content, use the correct document language. Review canonical URL, page
  description, and social metadata when the related content or hosting changes.

## Local commands and verification

Run these commands from `ahma-site/`:

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

- Install dependencies when needed; a documentation-only change needs no app build.
- For app changes, run the relevant lint/build checks and report existing failures
  separately. There is currently no test script; do not claim tests that were not run.
- For visible changes, use the Browser plugin when available; otherwise use Playwright
  and record the fallback reason. Check desktop and mobile, keyboard use, image loading,
  navigation, contact links, galleries, and browser errors relevant to the change.
- For redesign work, compare browser screenshots against the design reference using
  `view_image`, following the Build Web Apps fidelity checks. Do not equate a successful
  build with a verified UI. Remove temporary QA artifacts unless they are useful deliverables.

## AWS and migration boundaries

- AWS website hosting, TLS certificate setup, and deployment are separate tasks from
  editing the website. Domain/mail migration notes and backups live beside this repo
  in `../buildwatch/mail/` and `../buildwatch/backups/`.
- The user intentionally accepts website downtime while preparing AWS hosting. Email
  must keep working through Google Workspace; website work must not modify its MX,
  SPF, DKIM, or verification records.
- Current deployment is documented in `1-infra/README.md`: certificate in us-east-1,
  private bucket and CloudFront stack in eu-north-1. The initial bucket was imported.
  `npm run deploy` in `ahma-site/` publishes to `ahmalattiat-website` without deleting
  older objects and reads the distribution ID from CloudFormation. Deploy only when
  requested; build/lint checks do not require deployment. Leave legacy Ireland stacks
  alone unless cleanup is explicitly requested.
- Keep credentials, backup mail, and private hosting exports out of this repository.

## Primary references

- [Modern Web Guidance](https://developer.chrome.com/docs/modern-web-guidance/get-started)
- [Tailwind v3 responsive design](https://v3.tailwindcss.com/docs/responsive-design)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
