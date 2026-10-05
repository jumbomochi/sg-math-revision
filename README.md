# H2 Math Revision (9758)

A static revision site for Singapore-Cambridge A-Level H2 Mathematics (syllabus 9758, examinations 2026–2027). For every syllabus sub-topic it gives:

- the syllabus scope (included / excluded content),
- key concepts,
- the recurring question archetypes, each with original exam-style questions (no solutions — these are gone through in class),
- a per-student checklist of archetypes, saved in the student's browser.

No build step: plain HTML, CSS and JavaScript. Maths is rendered with KaTeX.

## Run locally

```sh
npm install          # only needed for the validator
npm run serve        # http://localhost:8000
```

## Editing content

Each sub-topic is one file in `content/` (e.g. `content/5.3-integration-techniques.js`) containing a single `H2.addTopic({...})` call. Every text field is wrapped in `String.raw\`...\`` so LaTeX backslashes work as written.

Text fields use a small markup (see `assets/markup.js`):

| Write | For |
|---|---|
| `$x^2$`, `$$\int_0^1 x\,\mathrm{d}x$$` | inline / display maths |
| `\$250` | a literal dollar sign |
| `**bold**`, `*italic*` | emphasis |
| lines starting `- ` / `1. ` | lists |
| lines starting `\|` | a table (first row is the header) |
| blank line | new paragraph |

A question looks like:

```js
{
  stem: String.raw`The function f is defined by $\mathrm{f}(x) = x^2$, $x \ge 0$.`,
  parts: [
    { label: "(i)", text: String.raw`Find $\mathrm{f}^{-1}(x)$.`, marks: 2 },
    { label: "(ii)", text: String.raw`Sketch ...`, marks: 3 },
  ],
  figure: { type: "plot", x: [-1, 4], y: [-1, 4], curves: [{ fn: "x => x*x", domain: [0, 2] }] }, // optional
}
```

Graph figures are declared, not drawn — see the comment at the top of `assets/plot.js`.

Archetype `id`s (e.g. `5.3-by-parts`) are the keys for students' saved checklist ticks, so don't rename them once the site is in use.

After editing, run:

```sh
npm run validate
```

This checks the schema, mark totals and unique ids, and parses every piece of maths with KaTeX. Pushing to `main` runs the same check and then deploys to GitHub Pages.

## Adding a sub-topic

Create `content/<id>-<slug>.js` and add a matching `<script>` tag in `index.html`.
