# Typography steering for the Ahma-Lattiat website

Prepared from primary web-platform and accessibility sources on 2026-10-16.
Read this before changing visible text styles. This is guidance for future work;
it does not change the current website or select a new brand font.

## Purpose and decision order

Typography should make Finnish service descriptions, project examples, and contact
details easy to read. Prioritize readability, hierarchy, authentic company identity,
and a coherent page rhythm. Follow the user's supplied reference or accepted design;
use the defaults below when the design leaves a decision open. They are project
starting points, not universal rules or WCAG minimum font sizes.

## Typeface and hierarchy

- Start with one legible family and a small set of real weights: 400 for body text,
  500–600 for controls/emphasis, and 600–700 for headings. A second display family
  needs a clear purpose. Avoid thin, condensed, or ornate faces for essential copy.
- Preserve the existing logo as an asset. Do not recreate it using an approximately
  matching text font, or replace genuine company identity during typography cleanup.
- Verify support for Finnish `ä`, `ö`, `å`, their capitals, punctuation, and names such
  as `Kätkä` and `Jyväskylä`. Test the actual font files, not just a font-family name.
- Use one descriptive main page heading, section headings at `h2`, and subsection
  headings at `h3`. Choose heading elements for document structure; size them with
  classes. A subtitle or introductory sentence is usually a paragraph, not a heading
  chosen just to obtain a smaller font.
- Communicate hierarchy with size, weight, spacing, and placement together. Use
  sentence case for Finnish copy; long uppercase passages and widespread bolding
  weaken readability and emphasis. Keep long paragraphs aligned to the reading edge.

## Suggested scale

At the normal browser setting, 1rem is commonly 16 CSS px; users can change it.
Keep the root font size at `100%` or its browser default and size text in rem.

| Role | Starting size | Unitless line height | Typical weight |
| --- | --- | --- | --- |
| Main heading | 2.25rem mobile; up to 4rem desktop | 1.1–1.2 | 600–700 |
| Section heading | 1.75–2.5rem | 1.2–1.3 | 600–700 |
| Subheading | 1.25–1.5rem | 1.3–1.4 | 600 |
| Paragraph | 1–1.125rem | 1.5–1.7 | 400 |
| Navigation, buttons, inputs | Usually 1rem | About 1.4–1.5 | 400–600 |
| Caption or secondary metadata | Usually 0.875rem | About 1.5 | 400–500 |

Do not demote phone numbers, service information, or important instructions to tiny
metadata. Inspect line breaks with the real Finnish copy. Adjust the scale and
available width instead of shrinking all text to make a layout fit.

Use Tailwind v3's existing responsive sizes or a bounded rem/vw `clamp()` for headings.
Do not size text using viewport units alone. Fluid type still needs zoom testing;
mixing rem into a formula does not automatically guarantee accessible scaling.
Use unitless line heights so descendants scale with their own text size.
[Responsive typography guidance](https://web.dev/learn/design/typography)

## Reading width, spacing, and wrapping

- Start prose blocks around `60–70ch` maximum width, often `max-w-[65ch]` in this repo.
  `ch` is a glyph-based approximation, not a literal character counter. Verify the
  rendered measure; narrower mobile columns are expected.
- Give paragraphs breathing room, and visually group each heading with its following
  content. Avoid excessive gaps between lines or unrelated spacing from section to
  section. Default body letter spacing to normal; test any tight headline tracking
  against Finnish accents and the actual font.
- Avoid full justification for ordinary service descriptions. Do not add manual
  `<br>` elements everywhere to force desktop wrapping onto mobile.
- `text-wrap: balance` can improve short headings; `pretty` may improve paragraphs.
  Treat these as enhancements, check browser support, and keep normal wrapping usable.
  Apply them to selected text blocks rather than every element.
- Set the document language to Finnish (`lang="fi"`) when updating the document.
  Automatic Finnish hyphenation requires the correct language and a browser dictionary;
  enable it selectively and inspect the result. Use an overflow-wrap fallback for
  long addresses/URLs, not `word-break: break-all` across normal Finnish prose.
  [Language-sensitive hyphenation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/hyphens)

## Accessibility requirements to verify

- Normal text needs at least **4.5:1** contrast; large text needs **3:1**. WCAG large
  text is at least 18pt regular or 14pt bold (24 CSS px or about 18.67 CSS px bold).
  Evaluate computed size/weight and the actual background, including photos, gradients,
  and hover states. Muted text still needs sufficient contrast. Do not use color alone
  to identify inline links; underlining is the default project choice.
  [WCAG contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- Text must be enlargeable to **200%** without losing content or functionality.
  Avoid fixed-height text boxes, clipped headings, ellipsized essential details,
  and viewport settings that disable zoom. Check intermediate zoom levels too.
  [WCAG resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- At a width equivalent to **320 CSS px**, ordinary page text should reflow without
  requiring both horizontal and vertical scrolling. Test a 320px viewport and desktop
  zoom that produces that effective width. Narrow-screen reflow and text enlargement
  are separate checks, not substitutes for each other.
  [WCAG reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)
- Test user overrides applied together: line height 1.5, paragraph spacing 2em,
  letter spacing 0.12em, and word spacing 0.16em. Content and controls must remain
  usable. **These are override-tolerance checks, not mandatory default styling.**
  [WCAG text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

## Font delivery and stable rendering

- First choose deliberately between a system font stack and a downloaded brand font.
  A name such as `Inter` in CSS does not install or download that font.
- If a web font is needed, prefer appropriately licensed, self-hosted WOFF2 assets.
  Include Finnish glyph coverage and only the required weights/styles. Compare file
  sizes before assuming a variable font is smaller for this particular usage.
- Put `font-display` inside `@font-face`, not on `body`. Start with `swap` when the
  final brand font matters, or consider `optional` when retaining the fallback on a
  slow visit is acceptable. Never promise that `swap` eliminates layout shifts.
- Preload only truly critical fonts, with matching URLs, `as="font"`, the correct
  type, and `crossorigin`. Excessive preloads compete with the main page images.
- Choose compatible fallbacks and measure cold-load shifts. Use measured font-face
  metric adjustments where needed. Modern `font-size-adjust` can improve legibility,
  but is an enhancement to test, not a guarantee of identical wrapping or zero CLS.
- Make controls inherit the chosen font, then explicitly set their size and line
  height. Use SVG icons such as the existing Heroicons rather than an icon font.
  [Font loading and layout stability](https://web.dev/articles/font-best-practices)

## React and Tailwind v3 application

Keep shared typography decisions in `ahma-site/tailwind.config.js` and the existing
global styles, with consistent role classes or component variants. Use complete
Tailwind class names. Do not import Tailwind v4-only configuration into this v3 app.
Retain semantic React markup and real selectable text; never ship a heading or
contact details as a flattened screenshot to match a mockup.

For targeted changes, inspect the existing cascade before adding utilities. For a
redesign, establish the type family, role scale, widths, weights, and responsive
rules once, then reuse them. Do not add a typography library just for basic sizing.

## Known starting points in this repository

These were observations before the hero update. See HANDOFF.md for the current
uncommitted implementation; recheck source rather than treating these as current defects:

- `src/index.css` lists Inter, but the inspected source has no font-face declaration,
  font package, or external font stylesheet that supplies it. Confirm the rendered
  font before claiming Inter is in use; a locally installed font can mask the issue.
- Global heading/button defaults coexist with Tailwind component classes. Inspect
  their computed styles rather than assuming class names tell the entire story.
- `Hero.tsx` uses an `h3` for supporting copy, while `Intro.tsx` has another `h1`.
  Review semantics and visual hierarchy together during the relevant website update.
- `index.html` currently declares English although the website copy is Finnish.
- Audit the orange gradient heading and muted footer text against their actual
  backgrounds; attractive appearance alone does not establish sufficient contrast.

## Completion check for typography changes

Use the browser-testing workflow in `AGENTS.md`. Inspect actual font rendering,
computed size/weight/line height, Finnish accents, headline wraps, paragraph width,
control labels, and contrast on desktop and mobile. Also check enlarged text,
320px reflow, user spacing overrides, and cold-load or blocked-font fallback.
For redesigns, compare screenshots with the accepted typography reference. Record
the checks actually performed and any remaining limitations; do not claim full
accessibility conformance based on screenshots or a build alone.
