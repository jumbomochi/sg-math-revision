# Math Revision (Singapore syllabuses)

A static revision site for Singapore mathematics: H2 Mathematics (9758), Secondary E-Math (SEC K310 / O-Level 4052), A-Math (SEC K341 / O-Level 4049) and a Primary Math Olympiad section. For every topic it gives:

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

Levels are configured in `content/levels.js` (name, papers, topic groups, and the list of topic files). Each topic is one file in `content/<level>/` (e.g. `content/h2/5.3-integration-techniques.js`) containing a single `H2.addTopic({...})` call. Every text field is wrapped in `String.raw\`...\`` so LaTeX backslashes work as written.

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

Figures (graphs, normal curves, vector diagrams, Venn and tree diagrams, bar charts) are declared, not drawn — see the comment at the top of `assets/plot.js`. A figure can go on a question, a part, or a key concept (`figure: {...}`, or an array to show several side by side).

To check figures visually:

```sh
node tools/preview-figures.mjs content/h2/6.3-normal-distribution.js --out /tmp/figs   # add --dark for dark mode
```

This renders every figure in the file to a PNG using headless Chrome.

Archetype `id`s (e.g. `5.3-by-parts`) are the keys for students' saved checklist ticks, so don't rename them once the site is in use.

After editing, run:

```sh
npm run validate
```

This checks the schema, mark totals and unique ids, and parses every piece of maths with KaTeX. Pushing to `main` runs the same check and then deploys to GitHub Pages.

## Olympiad problems and IP extensions

- Olympiad levels (`kind: "olympiad"`) show answers: each problem has `difficulty: 1|2|3`, a short final `answer` (revealed with "Show answer"), and optional `choices` for multiple choice. No `syllabus` field is needed.
- Content beyond the national syllabus is tagged `tags: ["IP"]` on a topic, concept or archetype; the level's `tagInfo` explains the tag. Start IP text with a one-line scope note (e.g. "Not in K341.").

## Adding a topic

Create `content/<level>/<id>-<slug>.js` and add `"<id>-<slug>"` to that level's `files` in `content/levels.js`.
