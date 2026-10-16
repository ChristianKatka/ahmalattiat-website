# Claude instructions — Ahma-Lattiat website

## Read first

Read [AGENTS.md](AGENTS.md), [TYPOGRAPHY.md](TYPOGRAPHY.md), and
[HANDOFF.md](HANDOFF.md) before editing. These contain the project direction,
typography requirements, and the state of the unfinished implementation.
The user's latest request takes precedence over these files.

## Project

- Work in **`ahma-site/`**: React 18, TypeScript, Vite 5, Tailwind CSS 3.
- Leave the other implementations in `angular/` and `ui/` alone.
- Christian handles IT for the family company; Janne Kätkä is his father.
- Communicate compactly, normally one or two sentences. The user listens through Siri.
- Inspect the existing working tree before editing. Preserve its uncommitted changes.

## Approved visual direction

- Modern, simple Finnish company website with real flooring work and clear contact actions.
- Keep the existing team photograph as a prominent full-screen landing hero.
- Keep both men's faces visible and unobstructed. Put copy in the sky area and contact
  actions below the team where the viewport allows; inspect the actual mobile crop.
- Use **only images already in this repository's public/assets folders**. Do not
  download or generate images. Use the existing logo rather than recreating it.
- Improve navigation, typography, spacing, and phone/email actions while preserving
  company information and authentic supplied copy. No invented claims or testimonials.
- Favor restrained styling, readable contrast, useful spacing, and minimal motion.

## Implementation and verification

- Keep the existing stack. Use Tailwind v3 conventions and simple accessible React.
- Use semantic headings, Finnish document language, visible focus, keyboard navigation,
  responsive images, and reduced-motion support.
- Do not assume Codex-specific plugins or tools in AGENTS.md are available in Claude.
  Apply the same principles using available tools and official documentation when needed.
- Run commands inside `ahma-site/`: `npm run dev -- --host 127.0.0.1`,
  `npm run lint`, and `npm run build`. Use `npm ci` if dependencies need installing.
- Inspect desktop and mobile screenshots, narrow screens, enlarged text, navigation,
  contact links, anchor offsets, and browser errors. Report only checks actually performed.
- Do not treat a successful build as proof the design works in the browser.

## Scope boundaries

- Website hosting and AWS deployment are separate from this design task. Do not run
  the existing deploy script: it recursively deletes objects in an old S3 target.
- Do not modify DNS or Google Workspace mail records while working on the website.
- Keep credentials, mailbox backups, and hosting exports outside this repository.
- Do not commit, push, or deploy unless requested.

The user stopped Codex coding to continue with Claude. Read the handoff, then follow
the user's next instruction; this document does not authorize additional changes by itself.
