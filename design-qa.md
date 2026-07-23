# Design QA — Editorial Ledger Personal Homepage

## Evidence

- Approved source, desktop: `prototype/screenshots/desktop-A-education.png`
  (`1440 × 5856`)
- Production capture, desktop: `qa/screenshots/implementation-desktop.png`
  (`1440 × 5911`)
- Direct desktop comparison:
  `qa/screenshots/comparison-desktop.png`
- Approved source, mobile: `prototype/screenshots/mobile-A-education.png`
  (`390 × 8835`)
- Production capture, mobile: `qa/screenshots/implementation-mobile.png`
  (`390 × 8398`)
- Direct mobile comparison:
  `qa/screenshots/comparison-mobile.png`
- Additional production resilience capture:
  `qa/screenshots/implementation-tablet.png` (`768 × 8792`)

Source and implementation were placed side by side in the same comparison image
for each approved target viewport. The prototype switcher visible over parts of
the source capture is intentionally absent from production, as required by the
Spec.

## Comparison passes

### Desktop — 1440 × 1000 viewport

- Layout and spacing: the production page preserves the source's editorial
  three-column grid, section order, wide margins, thin rules, and alternating
  dense/open vertical rhythm. Full-page height differs by less than 1%, mainly
  from the approved role line and refined public copy.
- Typography: serif display headings, sans-serif labels, weight hierarchy, line
  height, and Chinese wrapping match the source intent. No clipping or cramped
  labels were found.
- Color and surfaces: ivory paper, navy text/footer, muted teal accents, warm
  gold honors, and restrained borders remain consistent. Project media retain
  the flat editorial treatment instead of becoming generic cards.
- Imagery: the approved portrait crop and all public project images are present.
  The redacted experiment preserves the source's navy technical-panel treatment
  without exposing real data.
- Interaction and states: navigation, CTA, text-link underline, focus-visible,
  active movement, and one-time scroll reveal are implemented. No prototype
  controls remain.

### Mobile — 390 × 844 viewport

- Layout and spacing: every desktop grid stacks into a single readable column;
  project media, course tags, competition results, timeline items, and footer
  links remain separated. No horizontal overflow, overlap, or clipped copy was
  observed.
- Typography: display headings retain the editorial character without forcing
  narrow columns. Long school, degree, and project strings wrap naturally.
- Imagery: portrait and project media keep their intended aspect ratios. The
  three Sprout screens remain legible as a grouped product view.
- Navigation and tap targets: the compact header keeps the essential Education,
  Journey, and Contact routes visible; hero actions become full-width targets.
- Intentional difference: the source's floating prototype switcher obscures part
  of the portrait, while production correctly removes it.

### Tablet — 768 × 1024 viewport

- The layout switches cleanly to its single-column intermediate state.
- Portrait, education details, project media, process panel, timeline, and footer
  remain aligned with no collapsed sections or page-level overflow.
- The larger portrait and project frames remain sharp and do not create layout
  shift because explicit image dimensions are present.

## Accessibility and resilience

- One `h1`, five continuous `h2` section headings, semantic
  `header/nav/main/section/footer` landmarks, accurate image alternative text,
  and named links are present.
- Keyboard focus is visible on navigation and every public link.
- At `prefers-reduced-motion: reduce`, reveal transforms are removed and all
  content remains fully visible.
- The site uses local system font stacks and remains usable without remote font
  requests.
- Desktop, tablet, and mobile browser checks report no page-level horizontal
  overflow.

## Findings and resolutions

1. **P2 — Image performance:** the three approved Sprout screenshots were
   initially `1080 × 2400` and approximately `280–347 KB` each. They were
   resized to `540 × 1200`, recompressed to approximately `69–83 KB`, and their
   HTML dimensions were updated. Visual legibility remains equivalent at their
   rendered size.
2. **P2 — Capture-state artifact:** the first full-page comparison caught later
   regions during the scroll-reveal transition, making Journey and Contact look
   too faint. The QA capture now waits beyond the longest transition and the
   repeated comparison confirms the final rendered contrast matches the source
   intent. No runtime visibility defect remains.
3. **P2 — Prototype-only overlay:** the approved source screenshots include the
   throwaway variant switcher over the portrait. It was verified as an
   intentional source artifact and remains excluded from production per the
   Spec.

No unresolved P0, P1, or P2 findings remain.

final result: passed
