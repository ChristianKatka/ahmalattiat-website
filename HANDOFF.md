# Website handoff to Claude

Prepared 2026-10-16. The user explicitly stopped Codex implementation and requested
steering files to continue with Claude. Existing application edits remain in the
working tree; they have not been committed, pushed, deployed, or finally accepted.

## Current implementation

The landing-page first pass retains `ahma-site/public/images/hero-bg.JPG` as a
full-screen image with gradients behind the top copy and bottom contact actions.
It adds a fixed logo/navigation header, responsive menu, phone/email buttons,
system fonts, clean dark backgrounds below the hero, and Finnish document language.
The original hero copy is preserved. Desktop and normal mobile screenshots showed
both men's faces visible. User review of this implementation is still pending.

### Changed application files

- `ahma-site/src/home/2hero/Hero.tsx`: semantic hero, real image with priority loading,
  original Finnish copy, Janne phone/email actions, and link to work examples.
- `ahma-site/src/home/1navbar/Navbar.tsx`: responsive navigation, skip link, contact
  action, menu state, Escape handling, and focus return.
- `ahma-site/src/App.css`: new hero/header responsive styles.
- `ahma-site/src/index.css`: global typography, focus styles, background, and
  reduced-motion handling including AOS.
- `ahma-site/src/App.tsx`: main landmark, removed placeholder spacer, tidied composition.
- `ahma-site/src/home/background/Background.tsx`: plain background wrapper.
- `ahma-site/src/home/3intro/Intro.tsx`: reduced oversized gaps and corrected heading hierarchy.
- `ahma-site/src/home/our-work/OurWork.tsx`: `tyot` anchor and scroll offset.
- `ahma-site/index.html`: `lang="fi"`.

No new production dependencies, downloaded images, or generated images were added.
The root AGENTS.md and TYPOGRAPHY.md were preparation documents and are also untracked.

## Useful assets and details

- Team image: `ahma-site/public/images/hero-bg.JPG`, 5712 × 4284. Faces are around
  37% and 64% across the original image. Preserve both when evaluating crops.
- Existing logo: `ahma-site/src/assets/logo.png`; includes transparent padding.
- Janne: `janne.katka@ahmalattiat.fi`, phone `+358509110686`.
- Navigation destinations: `#home`, `#tyot`, `#employees`, `#address`.
- Current font is a system stack. No Inter font was loaded or added.

## Verification already performed

- `npm ci` completed. The dependency audit reported 31 existing vulnerabilities
  (4 moderate, 27 high); dependency upgrades were not part of the design work.
- Lint and production build passed before the final header sizing and JSX formatting
  edits. **Rerun both for the final working tree.** Build warned about old caniuse data.
- Playwright with installed Google Chrome was used because the Browser plugin was
  unavailable. Desktop 1440 × 1000 screenshots were inspected visually.
- Latest interaction checks passed at 390 × 844, 320 × 740, and 844 × 390: image loaded,
  one H1, anchor navigation, mobile menu open/close, Escape focus return, correct
  phone/mail links, no horizontal document overflow, and no page errors.
- Earlier 200% root text enlargement revealed clipped header controls. The final
  CSS edits switched mobile logo/icon/button geometry to px while retaining rem text.
  **The 200% check has not been rerun after that fix.** Check actual element bounds;
  overflow clipping can hide problems even when document width appears correct.
- A mobile text-spacing override screenshot was inspected before the final fix.
  This was a spot check, not a complete accessibility audit.

## Suggested next checks when the user resumes coding

1. Review the current page with the user before expanding the redesign.
2. Verify enlarged text at 200%, including visible and operable phone/menu controls.
3. Inspect the latest 320px stacked contact buttons, landscape view, open menu, and
   sections below the hero. Check employee/project card text contrast after global styles.
4. Run lint/build, inspect the diff, and fix only issues within the user's requested scope.

## Temporary local QA material

These paths are outside the repository and may disappear; do not make them project dependencies:

- `/tmp/ahma-website-qa/check.cjs`: temporary Playwright interaction script.
- `/tmp/ahma-website-qa/node_modules/playwright`: temporary QA package installation.
- `/tmp/ahma-before-desktop.png`, `/tmp/ahma-before-mobile.png`: baseline screenshots.
- `/tmp/ahma-after-desktop.png`, `/tmp/ahma-after-390.png`, `/tmp/ahma-after-320.png`,
  `/tmp/ahma-after-844.png`, `/tmp/ahma-mobile-menu.png`: implementation screenshots.
- `/tmp/ahma-text-200.png`: screenshot of the enlargement problem **before** its final fix.
- `/tmp/ahma-spacing.png`: spacing override screenshot.

A Vite server was started at `http://127.0.0.1:5173/`; check whether it is still running.
Start it from `ahma-site/` if needed. No deployment was performed.
