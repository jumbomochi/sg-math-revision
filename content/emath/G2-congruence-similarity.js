H2.addTopic({
  id: "G2",
  title: "Congruence and Similarity",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Congruent and similar figures, tests for triangles, scale factors, maps and scale drawings, bisector constructions, and ratios of areas and volumes.`,
  syllabus: {
    include: [
      String.raw`congruent figures and similar figures`,
      String.raw`properties of similar triangles and polygons: corresponding angles are equal; corresponding sides are proportional`,
      String.raw`enlargement and reduction of a plane figure`,
      String.raw`scale drawings`,
      String.raw`properties and construction of perpendicular bisectors of line segments and angle bisectors`,
      String.raw`determining whether two triangles are congruent or similar`,
      String.raw`ratio of areas of similar plane figures`,
      String.raw`ratio of volumes of similar solids`,
      String.raw`solving simple problems involving similarity and congruence`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Congruent triangles: the four tests`,
      body: String.raw`**Congruent** figures have the same shape **and** the same size: all corresponding sides and angles are equal. We write $\triangle ABC \equiv \triangle PQR$.

Two triangles are congruent if they match by one of these tests:

| Test | What must be equal |
| --- | --- |
| SSS | all three pairs of sides |
| SAS | two pairs of sides and the **included** angle (the angle between them) |
| AAS / ASA | two pairs of angles and one pair of **corresponding** sides |
| RHS | a right angle, the hypotenuse, and one other pair of sides |

**Not** tests: AAA (gives similar triangles, not necessarily the same size) and SSA where the angle is not between the two sides.`,
      figure: [
        {
          type: "plot",
          x: [-0.3, 4.3],
          y: [-0.3, 2.9],
          equal: true,
          axes: false,
          segments: [
            { from: [0, 0], to: [4, 0], tone: "ink" },
            { from: [4, 0], to: [1.3, 2.6], tone: "ink" },
            { from: [1.3, 2.6], to: [0, 0], tone: "ink" },
            { from: [2, 0.07], to: [2, -0.07], tone: "ink", thin: true },
            { from: [2.62, 1.23], to: [2.71, 1.33], tone: "ink", thin: true },
            { from: [2.59, 1.27], to: [2.68, 1.37], tone: "ink", thin: true },
            { from: [0.73, 1.31], to: [0.61, 1.37], tone: "ink", thin: true },
            { from: [0.71, 1.27], to: [0.59, 1.33], tone: "ink", thin: true },
            { from: [0.69, 1.23], to: [0.57, 1.29], tone: "ink", thin: true },
          ],
          caption: String.raw`**SSS**: three pairs of equal sides`,
          alt: "Triangle with all three sides marked with one, two and three ticks.",
        },
        {
          type: "plot",
          x: [-0.3, 4.3],
          y: [-0.3, 2.9],
          equal: true,
          axes: false,
          segments: [
            { from: [0, 0], to: [4, 0], tone: "ink" },
            { from: [4, 0], to: [1.3, 2.6], tone: "ink" },
            { from: [1.3, 2.6], to: [0, 0], tone: "ink" },
            { from: [2, 0.07], to: [2, -0.07], tone: "ink", thin: true },
            { from: [0.72, 1.29], to: [0.6, 1.35], tone: "ink", thin: true },
            { from: [0.7, 1.25], to: [0.58, 1.31], tone: "ink", thin: true },
          ],
          angles: [
            { at: [0, 0], from: [4, 0], to: [1.3, 2.6], r: 0.55 },
          ],
          caption: String.raw`**SAS**: two sides and the angle *between* them`,
          alt: "Triangle with two sides marked and the angle between them marked.",
        },
        {
          type: "plot",
          x: [-0.3, 4.3],
          y: [-0.3, 2.9],
          equal: true,
          axes: false,
          segments: [
            { from: [0, 0], to: [4, 0], tone: "ink" },
            { from: [4, 0], to: [1.3, 2.6], tone: "ink" },
            { from: [1.3, 2.6], to: [0, 0], tone: "ink" },
            { from: [2.6, 1.25], to: [2.7, 1.35], tone: "ink", thin: true },
          ],
          angles: [
            { at: [0, 0], from: [4, 0], to: [1.3, 2.6], r: 0.55 },
            { at: [4, 0], from: [1.3, 2.6], to: [0, 0], r: 0.45 },
            { at: [4, 0], from: [1.3, 2.6], to: [0, 0], r: 0.58 },
          ],
          caption: String.raw`**AAS** (or ASA): two angles and one corresponding side`,
          alt: "Triangle with two angles marked (single and double arcs) and one side marked.",
        },
        {
          type: "plot",
          x: [-0.41, 3.61],
          y: [-0.3, 2.9],
          equal: true,
          axes: false,
          segments: [
            { from: [0, 0], to: [3.2, 0], tone: "ink" },
            { from: [3.2, 0], to: [0, 2.6], tone: "ink" },
            { from: [0, 2.6], to: [0, 0], tone: "ink" },
            { from: [1.58, 1.24], to: [1.65, 1.33], tone: "ink", thin: true },
            { from: [1.55, 1.27], to: [1.62, 1.36], tone: "ink", thin: true },
            { from: [-0.06, 1.3], to: [0.06, 1.3], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [0, 0], a: [3.2, 0], b: [0, 2.6], size: 0.3 },
          ],
          caption: String.raw`**RHS**: right angle, hypotenuse and one other side`,
          alt: "Right-angled triangle with the right angle, the hypotenuse and one other side marked.",
        },
      ],
    },
    {
      title: String.raw`Writing a congruence proof`,
      body: String.raw`Set out three facts, each with a reason, then the conclusion with the test:

| Statement | Reason |
| --- | --- |
| $AB = AD$ | given |
| $CB = CD$ | given |
| $AC = AC$ | common side |

$\therefore \triangle ABC \equiv \triangle ADC$ (SSS).

- Write the vertices **in corresponding order**: $\triangle ABC \equiv \triangle ADC$ means $A \leftrightarrow A$, $B \leftrightarrow D$, $C \leftrightarrow C$.
- Common reasons: given, common side, vert. opp. $\angle$s, alt. $\angle$s, radii of the same circle, sides of a square.
- After proving congruence you may use it: "corresponding sides (or angles) of congruent triangles are equal".`,
      figure: {
        type: "plot",
        x: [-0.4, 6.6],
        y: [-2, 2],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [2.4, 1.6], tone: "ink" },
          { from: [2.4, 1.6], to: [6.2, 0], tone: "ink" },
          { from: [6.2, 0], to: [2.4, -1.6], tone: "ink" },
          { from: [2.4, -1.6], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [6.2, 0], tone: "accent" },
          { from: [1.14, 0.89], to: [1.26, 0.71], tone: "ink", thin: true },
          { from: [1.26, -0.71], to: [1.14, -0.89], tone: "ink", thin: true },
          { from: [4.29, 0.69], to: [4.37, 0.88], tone: "ink", thin: true },
          { from: [4.23, 0.72], to: [4.31, 0.91], tone: "ink", thin: true },
          { from: [4.37, -0.88], to: [4.29, -0.69], tone: "ink", thin: true },
          { from: [4.31, -0.91], to: [4.23, -0.72], tone: "ink", thin: true },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "w" },
          { x: 2.4, y: 1.6, text: "B", pos: "n" },
          { x: 6.2, y: 0, text: "C", pos: "e" },
          { x: 2.4, y: -1.6, text: "D", pos: "s" },
        ],
        caption: String.raw`$AB = AD$, $CB = CD$ and $AC$ is common, so $\triangle ABC \equiv \triangle ADC$ (SSS). Hence $\angle BAC = \angle DAC$.`,
        alt: "Quadrilateral ABCD with AB = AD (single ticks) and CB = CD (double ticks); the diagonal AC is shared by triangles ABC and ADC.",
      },
    },
    {
      title: String.raw`Similar figures and similar triangles`,
      body: String.raw`**Similar** figures have the same shape but may differ in size:

- corresponding angles are equal, and
- corresponding sides are in the same ratio (the **scale factor** $k$).

For polygons other than triangles you need **both** conditions (a square and a rhombus have proportional sides but are not similar).

Two triangles are similar if:

- **AA**: two pairs of corresponding angles are equal, or
- **SSS**: all three pairs of corresponding sides are in the same ratio, or
- **SAS**: two pairs of sides are in the same ratio and the included angles are equal.

Write similar triangles in corresponding order, then read off equal ratios directly, e.g. $\dfrac{PQ}{AB} = \dfrac{QR}{BC} = \dfrac{PR}{AC}$.`,
      figure: {
        type: "plot",
        x: [-0.4, 9.8],
        y: [-0.4, 3.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [3, 0], tone: "ink" },
          { from: [3, 0], to: [0.9, 2], tone: "ink" },
          { from: [0.9, 2], to: [0, 0], tone: "ink" },
          { from: [9.4, 0], to: [4.6, 0], tone: "ink" },
          { from: [4.6, 0], to: [7.96, 3.2], tone: "ink" },
          { from: [7.96, 3.2], to: [9.4, 0], tone: "ink" },
        ],
        angles: [
          { at: [0, 0], from: [3, 0], to: [0.9, 2], r: 0.45 },
          { at: [3, 0], from: [0.9, 2], to: [0, 0], r: 0.4 },
          { at: [3, 0], from: [0.9, 2], to: [0, 0], r: 0.52 },
          { at: [9.4, 0], from: [7.96, 3.2], to: [4.6, 0], r: 0.6 },
          { at: [4.6, 0], from: [9.4, 0], to: [7.96, 3.2], r: 0.55 },
          { at: [4.6, 0], from: [9.4, 0], to: [7.96, 3.2], r: 0.67 },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 3, y: 0, text: "B", pos: "se" },
          { x: 0.9, y: 2, text: "C", pos: "n" },
          { x: 9.4, y: 0, text: "P", pos: "se" },
          { x: 4.6, y: 0, text: "Q", pos: "sw" },
          { x: 7.96, y: 3.2, text: "R", pos: "n" },
        ],
        caption: String.raw`$\triangle ABC$ is similar to $\triangle PQR$: $\angle A = \angle P$, $\angle B = \angle Q$, $\angle C = \angle R$ and $\dfrac{PQ}{AB} = \dfrac{QR}{BC} = \dfrac{PR}{AC} = k$.`,
        alt: "Two triangles of the same shape, the second larger and flipped. Matching angles at A and P carry single arcs, and at B and Q double arcs.",
      },
    },
    {
      title: String.raw`Spotting similar triangles`,
      body: String.raw`Two shapes come up again and again:

- **Parallel line inside a triangle** ($DE \parallel BC$): $\triangle ADE$ and $\triangle ABC$ share $\angle A$, and $\angle ADE = \angle ABC$ (corr. $\angle$s). Use **whole** sides: $\dfrac{AD}{AB} = \dfrac{DE}{BC}$, not $\dfrac{AD}{DB}$.
- **Hourglass** ($AB \parallel DC$, $AC$ and $BD$ crossing at $X$): alternate angles and vertically opposite angles give $\triangle ABX$ similar to $\triangle CDX$.

Also look for a **common angle** plus one other equal angle, e.g. a right-angled triangle split by its altitude gives three similar triangles.

Redraw the two triangles separately, in the same orientation, before writing ratios.`,
      figure: [
        {
          type: "plot",
          x: [-0.4, 5.4],
          y: [-0.4, 4],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1.6, 3.6], [0.88, 1.98], [3.13, 1.98]], fill: true, tone: "accent" },
          ],
          segments: [
            { from: [1.6, 3.6], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [5, 0], tone: "ink" },
            { from: [5, 0], to: [1.6, 3.6], tone: "ink" },
            { from: [0.88, 1.98], to: [3.13, 1.98], tone: "ink" },
            { from: [1.95, 1.98], to: [2.06, 1.98], arrow: true, tone: "ink", thin: true },
            { from: [2.45, 0], to: [2.55, 0], arrow: true, tone: "ink", thin: true },
          ],
          labels: [
            { x: 1.6, y: 3.6, text: "A", pos: "n" },
            { x: 0, y: 0, text: "B", pos: "sw" },
            { x: 5, y: 0, text: "C", pos: "se" },
            { x: 0.88, y: 1.98, text: "D", pos: "w" },
            { x: 3.13, y: 1.98, text: "E", pos: "e" },
          ],
          caption: String.raw`$DE \parallel BC$: $\triangle ADE$ is similar to $\triangle ABC$ (corresponding angles).`,
          alt: "Triangle ABC with D on AB and E on AC, DE parallel to BC; the small triangle ADE is shaded.",
        },
        {
          type: "plot",
          x: [-0.4, 5.4],
          y: [-0.4, 3.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.6, 3.2], [3, 3.2], [2.03, 2.16]], fill: true, tone: "accent" },
            { points: [[5, 0], [0, 0], [2.03, 2.16]], fill: true, tone: "good" },
          ],
          segments: [
            { from: [0.6, 3.2], to: [3, 3.2], tone: "ink" },
            { from: [0, 0], to: [5, 0], tone: "ink" },
            { from: [0.6, 3.2], to: [5, 0], tone: "ink" },
            { from: [3, 3.2], to: [0, 0], tone: "ink" },
            { from: [1.75, 3.2], to: [1.85, 3.2], arrow: true, tone: "ink", thin: true },
            { from: [2.45, 0], to: [2.55, 0], arrow: true, tone: "ink", thin: true },
          ],
          labels: [
            { x: 0.6, y: 3.2, text: "A", pos: "nw" },
            { x: 3, y: 3.2, text: "B", pos: "ne" },
            { x: 5, y: 0, text: "C", pos: "se" },
            { x: 0, y: 0, text: "D", pos: "sw" },
            { x: 2.03, y: 2.16, text: "X", pos: "e" },
          ],
          caption: String.raw`$AB \parallel DC$: $\triangle ABX$ is similar to $\triangle CDX$ (alternate angles, vertically opposite angles).`,
          alt: "Lines AC and BD cross at X between parallel lines AB and DC, forming an hourglass of two shaded similar triangles ABX and CDX.",
        },
      ],
    },
    {
      title: String.raw`Enlargement and reduction`,
      body: String.raw`Enlarging or reducing a plane figure by a **scale factor** $k$ gives a similar figure:

$$k = \frac{\text{length on new figure}}{\text{corresponding length on original}}.$$

- $k > 1$: enlargement. $0 < k < 1$: reduction. $k = 1$: congruent copy.
- Every length is multiplied by $k$; every angle stays the same.
- Area is multiplied by $k^2$.

Example: a 20 cm by 12 cm photo reduced with $k = 0.4$ becomes 8 cm by 4.8 cm, and its area becomes $0.4^2 = 0.16$ of the original.`,
      figure: {
        type: "plot",
        x: [-0.5, 9.1],
        y: [-0.5, 4.1],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [2.4, 0], [0, 1.8]], fill: true, tone: "muted" },
          { points: [[4, 0], [8.8, 0], [4, 3.6]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [0, 0], to: [2.4, 0], tone: "ink" },
          { from: [2.4, 0], to: [0, 1.8], tone: "ink" },
          { from: [0, 1.8], to: [0, 0], tone: "ink" },
          { from: [4, 0], to: [8.8, 0], tone: "ink" },
          { from: [8.8, 0], to: [4, 3.6], tone: "ink" },
          { from: [4, 3.6], to: [4, 0], tone: "ink" },
        ],
        rightAngles: [
          { at: [0, 0], a: [2.4, 0], b: [0, 1.8], size: 0.2 },
          { at: [4, 0], a: [4.8, 0], b: [0, 3.6], size: 0.2 },
        ],
        labels: [
          { x: 1.2, y: 0, text: "4 cm", pos: "s", style: "small" },
          { x: 0, y: 0.9, text: "3 cm", pos: "w", style: "small" },
          { x: 1.2, y: 0.9, text: "5 cm", pos: "ne", style: "small" },
          { x: 6.4, y: 0, text: "8 cm", pos: "s", style: "small" },
          { x: 4, y: 1.8, text: "6 cm", pos: "w", style: "small" },
          { x: 6.4, y: 1.8, text: "10 cm", pos: "ne", style: "small" },
        ],
        caption: String.raw`Enlargement with scale factor $k = 2$: every length $\times 2$, angles unchanged, area $\times 2^2 = 4$.`,
        alt: "A right-angled triangle with sides 3, 4 and 5 cm and its enlargement with sides 6, 8 and 10 cm.",
      },
    },
    {
      title: String.raw`Maps and scale drawings`,
      body: String.raw`A scale such as $1 : 20\,000$ means 1 cm on the map stands for $20\,000$ cm $= 200$ m $= 0.2$ km on the ground.

- **Length** scale $1 : n$ $\Rightarrow$ **area** scale $1 : n^2$. With $1$ cm to $0.2$ km, $1\ \text{cm}^2$ stands for $0.2^2 = 0.04\ \text{km}^2$.
- Convert the scale to "1 cm represents ___" in a sensible unit **first**; most mistakes come from unit conversions.
- $1$ m $= 100$ cm, $1$ km $= 100\,000$ cm, $1\ \text{m}^2 = 10\,000\ \text{cm}^2$, $1\ \text{km}^2 = 1\,000\,000\ \text{m}^2$.
- A scale may be written as a **representative fraction**, e.g. $\frac{1}{20\,000}$.

Scale drawings (floor plans, models) work the same way: actual length $=$ drawing length $\times n$.`,
    },
    {
      title: String.raw`Ratio of areas of similar figures`,
      body: String.raw`If two figures are similar with lengths in the ratio $l_1 : l_2$ (memorise):
$$\frac{A_1}{A_2} = \left(\frac{l_1}{l_2}\right)^2.$$

- Work with a pair of **corresponding** lengths of the similar figures, e.g. $AD$ and $AB$ (not $AD$ and $DB$).
- For the trapezium part, subtract: area $DBCE$ = area $\triangle ABC -$ area $\triangle ADE$.
- Triangles with the **same height** (but not similar) have areas in the ratio of their bases. This often appears in the same question — check which rule applies.`,
      figure: [
        {
          type: "plot",
          x: [-0.5, 5.9],
          y: [-0.45, 4.65],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1.4, 4.2], [0.93, 2.8], [2.73, 2.8]], fill: true, tone: "accent" },
            { points: [[0.93, 2.8], [0, 0], [5.4, 0], [2.73, 2.8]], fill: true, tone: "good" },
          ],
          segments: [
            { from: [1.4, 4.2], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [5.4, 0], tone: "ink" },
            { from: [5.4, 0], to: [1.4, 4.2], tone: "ink" },
            { from: [0.93, 2.8], to: [2.73, 2.8], tone: "ink" },
            { from: [1.77, 2.8], to: [1.89, 2.8], arrow: true, tone: "ink", thin: true },
            { from: [2.64, 0], to: [2.76, 0], arrow: true, tone: "ink", thin: true },
          ],
          labels: [
            { x: 1.4, y: 4.2, text: "A", pos: "n" },
            { x: 0, y: 0, text: "B", pos: "sw" },
            { x: 5.4, y: 0, text: "C", pos: "se" },
            { x: 0.93, y: 2.8, text: "D", pos: "w" },
            { x: 2.73, y: 2.8, text: "E", pos: "e" },
            { x: 1.17, y: 3.5, text: "1", pos: "w", style: "small" },
            { x: 0.47, y: 1.4, text: "2", pos: "w", style: "small" },
          ],
          caption: String.raw`$AD : AB = 1 : 3$, so area $\triangle ADE :$ area $\triangle ABC = 1 : 9$, and area $\triangle ADE :$ area $DBCE = 1 : 8$.`,
          alt: "Triangle ABC with DE parallel to BC and AD to DB in the ratio 1 to 2. The small triangle ADE and the trapezium DBCE are shaded in different colours.",
        },
        {
          type: "plot",
          x: [-0.45, 5.85],
          y: [-0.45, 3.85],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1.6, 3.4], [0, 0], [2.1, 0]], fill: true, tone: "accent" },
            { points: [[1.6, 3.4], [2.1, 0], [5.4, 0]], fill: true, tone: "good" },
          ],
          segments: [
            { from: [1.6, 3.4], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [5.4, 0], tone: "ink" },
            { from: [5.4, 0], to: [1.6, 3.4], tone: "ink" },
            { from: [1.6, 3.4], to: [2.1, 0], tone: "ink" },
            { from: [1.6, 3.4], to: [1.6, 0], tone: "muted", dashed: true, thin: true },
          ],
          rightAngles: [
            { at: [1.6, 0], a: [1, 0], b: [0, 1], size: 0.2 },
          ],
          labels: [
            { x: 1.6, y: 3.4, text: "A", pos: "n" },
            { x: 0, y: 0, text: "B", pos: "sw" },
            { x: 5.4, y: 0, text: "C", pos: "se" },
            { x: 2.1, y: 0, text: "D", pos: "s" },
          ],
          caption: String.raw`Same height, so area $\triangle ABD :$ area $\triangle ADC = BD : DC$. (These triangles are **not** similar.)`,
          alt: "Triangle ABC with D on BC, split by AD into two shaded triangles ABD and ADC that share the same perpendicular height from A.",
        },
      ],
    },
    {
      title: String.raw`Ratio of volumes of similar solids`,
      body: String.raw`If two solids are similar with lengths in the ratio $l_1 : l_2$ (memorise):
$$\frac{V_1}{V_2} = \left(\frac{l_1}{l_2}\right)^3, \qquad \frac{\text{surface area}_1}{\text{surface area}_2} = \left(\frac{l_1}{l_2}\right)^2.$$

- Mass is proportional to volume for solids made of the same material, so masses also follow the **cube** of the length ratio.
- To go from areas to volumes, go through lengths: square root, then cube. For example, an area ratio of $4 : 25$ gives a length ratio of $2 : 5$ and a volume ratio of $8 : 125$.
- Water in an inverted cone (or pyramid) forms a smaller cone similar to the whole container.`,
      figure: {
        type: "plot",
        x: [-0.33, 7.13],
        y: [-0.98, 4.98],
        equal: true,
        axes: false,
        curves: [
          { param: "t => [1 + 0.8*Math.cos(t), 0.24*Math.sin(t)]", t: [3.14, 6.28], tone: "ink" },
          { param: "t => [1 + 0.8*Math.cos(t), 0.24*Math.sin(t)]", t: [0, 3.14], tone: "muted", dashed: true },
          { param: "t => [1 + 0.8*Math.cos(t), 2 + 0.24*Math.sin(t)]", t: [0, 6.28], tone: "ink" },
          { param: "t => [5 + 1.6*Math.cos(t), 0.48*Math.sin(t)]", t: [3.14, 6.28], tone: "ink" },
          { param: "t => [5 + 1.6*Math.cos(t), 0.48*Math.sin(t)]", t: [0, 3.14], tone: "muted", dashed: true },
          { param: "t => [5 + 1.6*Math.cos(t), 4 + 0.48*Math.sin(t)]", t: [0, 6.28], tone: "ink" },
        ],
        segments: [
          { from: [0.2, 0], to: [0.2, 2], tone: "ink" },
          { from: [1.8, 0], to: [1.8, 2], tone: "ink" },
          { from: [3.4, 0], to: [3.4, 4], tone: "ink" },
          { from: [6.6, 0], to: [6.6, 4], tone: "ink" },
        ],
        labels: [
          { x: 1.8, y: 1, text: "h", pos: "e", style: "italic" },
          { x: 6.6, y: 2, text: "2h", pos: "e", style: "italic" },
        ],
        caption: String.raw`Radius and height both $\times 2$: surface area $\times 2^2 = 4$, volume (and mass, same material) $\times 2^3 = 8$.`,
        alt: "Two similar cylinders. The larger has twice the radius and twice the height of the smaller.",
      },
    },
    {
      title: String.raw`Perpendicular bisectors and angle bisectors`,
      body: String.raw`**Perpendicular bisector** of $AB$: the line through the midpoint of $AB$ at right angles to it. Every point on it is **equidistant from $A$ and $B$**.

**Angle bisector** of $\angle AOB$: the line that splits the angle into two equal parts. Every point on it is **equidistant from the lines $OA$ and $OB$**.

Construction (compasses and ruler only):

1. Perpendicular bisector: with the same radius (more than half of $AB$), draw arcs from $A$ and from $B$ on both sides; join the two crossing points.
2. Angle bisector: draw an arc centred at $O$ cutting both arms; from these two points draw equal arcs that cross; join $O$ to the crossing.

Leave all arcs showing. A point "equidistant from $P$ and $Q$" lies on the perpendicular bisector of $PQ$; a point "equidistant from two lines" lies on an angle bisector.`,
      figure: [
        {
          type: "plot",
          x: [-1.33, 6.33],
          y: [-3.05, 3.05],
          equal: true,
          axes: false,
          curves: [
            { param: "t => [0 + 3.3*Math.cos(t), 0 + 3.3*Math.sin(t)]", t: [0.5, 0.92], tone: "muted" },
            { param: "t => [0 + 3.3*Math.cos(t), 0 + 3.3*Math.sin(t)]", t: [-0.92, -0.5], tone: "muted" },
            { param: "t => [5 + 3.3*Math.cos(t), 0 + 3.3*Math.sin(t)]", t: [2.22, 2.64], tone: "muted" },
            { param: "t => [5 + 3.3*Math.cos(t), 0 + 3.3*Math.sin(t)]", t: [-2.64, -2.22], tone: "muted" },
          ],
          segments: [
            { from: [0, 0], to: [5, 0], tone: "ink" },
            { from: [2.5, 2.65], to: [2.5, -2.65], tone: "accent" },
            { from: [1.25, 0.11], to: [1.25, -0.11], tone: "ink", thin: true },
            { from: [3.75, 0.11], to: [3.75, -0.11], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [2.5, 0], a: [1, 0], b: [0, 1], size: 0.22 },
          ],
          labels: [
            { x: 0, y: 0, text: "A", pos: "w" },
            { x: 5, y: 0, text: "B", pos: "e" },
          ],
          caption: String.raw`Perpendicular bisector of $AB$: equal arcs from $A$ and $B$ above and below; join the crossing points. Every point on it is equidistant from $A$ and $B$.`,
          alt: "Line segment AB with two pairs of equal arcs drawn from A and B crossing above and below AB. The line through the two crossings cuts AB at its midpoint at right angles.",
        },
        {
          type: "plot",
          x: [-0.73, 5.73],
          y: [-0.61, 4.55],
          equal: true,
          axes: false,
          curves: [
            { param: "t => [0 + 2*Math.cos(t), 0 + 2*Math.sin(t)]", t: [-0.1, 1.08], tone: "muted" },
            { param: "t => [2 + 2*Math.cos(t), 0 + 2*Math.sin(t)]", t: [0.73, 1.22], tone: "muted" },
            { param: "t => [1.12 + 2*Math.cos(t), 1.66 + 2*Math.sin(t)]", t: [-0.24, 0.24], tone: "muted" },
          ],
          segments: [
            { from: [0, 0], to: [5, 0], tone: "ink" },
            { from: [0, 0], to: [2.8, 4.15], tone: "ink" },
            { from: [0, 0], to: [4.59, 2.44], tone: "accent" },
          ],
          angles: [
            { at: [0, 0], from: [5, 0], to: [0.88, 0.47], r: 1.1 },
            { at: [0, 0], from: [0.88, 0.47], to: [2.8, 4.15], r: 1.2 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "w" },
            { x: 5, y: 0, text: "A", pos: "e" },
            { x: 2.8, y: 4.15, text: "B", pos: "ne" },
          ],
          caption: String.raw`Angle bisector of $\angle AOB$: an arc from $O$ cuts both arms; equal arcs from these two points cross; join $O$ to the crossing. Every point on it is equidistant from $OA$ and $OB$.`,
          alt: "Angle AOB with an arc centred at O cutting both arms, two further equal arcs crossing inside the angle, and the bisector drawn from O through the crossing, splitting the angle into two equal parts.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "G2-congruence-proof",
      name: String.raw`Proving two triangles congruent`,
      tests: String.raw`Choosing a test (SSS, SAS, AAS, RHS), stating three facts with reasons and writing the triangles in corresponding order, then using the congruence to deduce equal lengths or angles.`,
      questions: [
        {
          stem: String.raw`In the diagram, $AB$ is parallel to $DC$ and $AB = DC$. The lines $AC$ and $BD$ meet at $X$.`,
          figure: {
            type: "plot",
            x: [-0.4, 6.6],
            y: [-0.4, 3.6],
            equal: true,
            axes: false,
            segments: [
              { from: [1.2, 3.2], to: [6.2, 3.2], tone: "ink" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [1.2, 3.2], to: [5, 0], tone: "ink" },
              { from: [6.2, 3.2], to: [0, 0], tone: "ink" },
              { from: [3.63, 3.2], to: [3.77, 3.2], arrow: true, tone: "ink", thin: true },
              { from: [2.43, 0], to: [2.57, 0], arrow: true, tone: "ink", thin: true },
            ],
            labels: [
              { x: 1.2, y: 3.2, text: "A", pos: "nw" },
              { x: 6.2, y: 3.2, text: "B", pos: "ne" },
              { x: 5, y: 0, text: "C", pos: "se" },
              { x: 0, y: 0, text: "D", pos: "sw" },
              { x: 3.1, y: 1.6, text: "X", pos: "s" },
            ],
            alt: "AB and DC are parallel and equal in length, AB at the top and DC at the bottom. AC and BD cross at X.",
          },
          parts: [
            { label: "(a)", text: String.raw`Prove that triangle $ABX$ is congruent to triangle $CDX$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence explain why $X$ is the midpoint of $AC$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$ABC$ is a triangle. Squares $ABPQ$ and $ACRS$ are drawn outside the triangle, as shown in the diagram.`,
          figure: {
            type: "plot",
            x: [-3.4, 8.4],
            y: [-0.4, 6.2],
            equal: true,
            axes: false,
            segments: [
              { from: [2.2, 3], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [5, 0], to: [2.2, 3], tone: "ink" },
              { from: [0, 0], to: [-3, 2.2], tone: "ink" },
              { from: [-3, 2.2], to: [-0.8, 5.2], tone: "ink" },
              { from: [-0.8, 5.2], to: [2.2, 3], tone: "ink" },
              { from: [2.2, 3], to: [5.2, 5.8], tone: "ink" },
              { from: [5.2, 5.8], to: [8, 2.8], tone: "ink" },
              { from: [8, 2.8], to: [5, 0], tone: "ink" },
              { from: [-0.8, 5.2], to: [5, 0], tone: "accent" },
              { from: [0, 0], to: [5.2, 5.8], tone: "good" },
            ],
            labels: [
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 5, y: 0, text: "C", pos: "e" },
              { x: -3, y: 2.2, text: "P", pos: "w" },
              { x: -0.8, y: 5.2, text: "Q", pos: "nw" },
              { x: 8, y: 2.8, text: "R", pos: "e" },
              { x: 5.2, y: 5.8, text: "S", pos: "ne" },
              { x: 2.2, y: 3, text: "A", pos: "n" },
            ],
            alt: "Triangle ABC with square ABPQ drawn outwards on side AB and square ACRS drawn outwards on side AC. The lines QC and BS are drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $\angle QAC = \angle BAS$.`, marks: 1 },
            { label: "(b)", text: String.raw`Prove that triangle $QAC$ is congruent to triangle $BAS$.`, marks: 3 },
            { label: "(c)", text: String.raw`Hence write down a pair of equal lines in the diagram, other than the sides of the squares.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-similar-triangles",
      name: String.raw`Proving triangles similar and finding lengths`,
      tests: String.raw`Showing two triangles are similar (usually AA, with a parallel line or a common angle), then using equal ratios of corresponding sides to find unknown lengths.`,
      questions: [
        {
          stem: String.raw`In the diagram, $D$ lies on $AB$ and $E$ lies on $AC$ such that $DE$ is parallel to $BC$. $AD = 4$ cm, $DB = 6$ cm and $DE = 5$ cm.`,
          figure: {
            type: "plot",
            x: [-0.58, 6.18],
            y: [-0.5, 4.9],
            equal: true,
            axes: false,
            segments: [
              { from: [1.6, 4.4], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5.6, 0], tone: "ink" },
              { from: [5.6, 0], to: [1.6, 4.4], tone: "ink" },
              { from: [0.96, 2.64], to: [3.2, 2.64], tone: "ink" },
              { from: [2.02, 2.64], to: [2.14, 2.64], arrow: true, tone: "ink", thin: true },
              { from: [2.74, 0], to: [2.86, 0], arrow: true, tone: "ink", thin: true },
            ],
            labels: [
              { x: 1.6, y: 4.4, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 5.6, y: 0, text: "C", pos: "se" },
              { x: 0.96, y: 2.64, text: "D", pos: "w" },
              { x: 3.2, y: 2.64, text: "E", pos: "e" },
              { x: 1.28, y: 3.52, text: "4 cm", pos: "w", style: "small" },
              { x: 0.48, y: 1.32, text: "6 cm", pos: "w", style: "small" },
              { x: 2.08, y: 2.64, text: "5 cm", pos: "n", style: "small" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Triangle ABC with D on AB and E on AC such that DE is parallel to BC. AD = 4 cm, DB = 6 cm and DE = 5 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that triangle $ADE$ is similar to triangle $ABC$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $BC$.`, marks: 2 },
            { label: "(c)", text: String.raw`Given that $AE = 3.6$ cm, find $EC$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In triangle $ABC$, $D$ is a point on $AC$ such that $\angle ABD = \angle ACB$. $AB = 6$ cm, $AC = 9$ cm and $BC = 7.5$ cm.`,
          figure: {
            type: "plot",
            x: [-0.5, 9.5],
            y: [-0.5, 5.46],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3.38, 4.96], tone: "ink" },
              { from: [3.38, 4.96], to: [9, 0], tone: "ink" },
              { from: [9, 0], to: [0, 0], tone: "ink" },
              { from: [3.38, 4.96], to: [4, 0], tone: "ink" },
            ],
            angles: [
              { at: [3.38, 4.96], from: [0, 0], to: [4, 0], r: 0.6 },
              { at: [9, 0], from: [3.38, 4.96], to: [0, 0], r: 1 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 3.38, y: 4.96, text: "B", pos: "n" },
              { x: 9, y: 0, text: "C", pos: "se" },
              { x: 4, y: 0, text: "D", pos: "s" },
              { x: 1.69, y: 2.48, text: "6 cm", pos: "nw", style: "small" },
              { x: 6.19, y: 2.48, text: "7.5 cm", pos: "ne", style: "small" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Triangle ABC with D on AC. Angle ABD and angle ACB are marked equal. AB = 6 cm and BC = 7.5 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that triangle $ABD$ is similar to triangle $ACB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $AD$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $BD$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-enlargement-scale-factor",
      name: String.raw`Scale factor of an enlargement or reduction`,
      tests: String.raw`Finding the scale factor between similar figures and using it for unknown sides and angles, and for areas (factor $k^2$). Often set in a context such as photos, posters or similar polygons.`,
      questions: [
        {
          stem: String.raw`A rectangular photograph measures 15 cm by 10 cm. It is enlarged so that the longer side becomes 24 cm.`,
          parts: [
            { label: "(a)", text: String.raw`Find the scale factor of the enlargement.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the length of the shorter side of the enlarged photograph.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the area of the enlarged photograph, and hence show that it is $2.56$ times the area of the original.`, marks: 2 },
            { label: "(d)", text: String.raw`The original photograph is also reduced to make a stamp of area $6\ \text{cm}^2$. Find the scale factor of this reduction.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Quadrilateral $ABCD$ is similar to quadrilateral $PQRS$. $AB = 6$ cm, $BC = 4$ cm, $CD = 5$ cm and $\angle ABC = 110^\circ$. $PQ = 9$ cm, $QR = x$ cm, $RS = z$ cm and $\angle PQR = y^\circ$.`,
          figure: {
            type: "plot",
            x: [-0.5, 10.65],
            y: [-3.03, 4.13],
            equal: true,
            axes: false,
            segments: [
              { from: [1.03, 2.82], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [1.53, -1.29], tone: "ink" },
              { from: [1.53, -1.29], to: [3.3, 0.48], tone: "ink" },
              { from: [3.3, 0.48], to: [1.03, 2.82], tone: "ink" },
              { from: [6.74, 3.63], to: [5.2, -0.6], tone: "ink" },
              { from: [5.2, -0.6], to: [7.5, -2.53], tone: "ink" },
              { from: [7.5, -2.53], to: [10.15, 0.12], tone: "ink" },
              { from: [10.15, 0.12], to: [6.74, 3.63], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [1.53, -1.29], to: [1.03, 2.82], r: 0.4 },
              { at: [5.2, -0.6], from: [7.5, -2.53], to: [6.74, 3.63], r: 0.5 },
            ],
            labels: [
              { x: 1.03, y: 2.82, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "w" },
              { x: 1.53, y: -1.29, text: "C", pos: "s" },
              { x: 3.3, y: 0.48, text: "D", pos: "e" },
              { x: 6.74, y: 3.63, text: "P", pos: "n" },
              { x: 5.2, y: -0.6, text: "Q", pos: "w" },
              { x: 7.5, y: -2.53, text: "R", pos: "s" },
              { x: 10.15, y: 0.12, text: "S", pos: "e" },
              { x: 0.51, y: 1.41, text: "6 cm", pos: "w", style: "small" },
              { x: 0.77, y: -0.64, text: "4 cm", pos: "sw", style: "small" },
              { x: 2.42, y: -0.4, text: "5 cm", pos: "se", style: "small" },
              { x: 5.97, y: 1.51, text: "9 cm", pos: "w", style: "small" },
              { x: 6.35, y: -1.56, text: "x cm", pos: "sw", style: "small" },
              { x: 8.82, y: -1.2, text: "z cm", pos: "se", style: "small" },
              { x: 0.7, y: 0.19, text: "110°", pos: "c", style: "italic" },
              { x: 6, y: -0.39, text: "y°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Quadrilateral ABCD with AB = 6 cm, BC = 4 cm, CD = 5 cm and angle ABC = 110 degrees, and a larger similar quadrilateral PQRS with PQ = 9 cm, QR = x cm, RS = z cm and angle PQR = y degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the value of $y$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $x$ and the value of $z$.`, marks: 2 },
            { label: "(c)", text: String.raw`The area of $ABCD$ is $27.6\ \text{cm}^2$. Find the area of $PQRS$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G2-maps-scale-drawings",
      name: String.raw`Maps and scale drawings`,
      tests: String.raw`Converting between map and actual lengths and areas using a scale $1 : n$ (areas use $1 : n^2$), with careful unit changes. The floor-plan version is a common real-world Paper 2 task.`,
      questions: [
        {
          stem: String.raw`A map is drawn to a scale of $1 : 50\,000$.`,
          parts: [
            { label: "(a)", text: String.raw`The distance between two towns on the map is $7.4$ cm. Find the actual distance between the towns, in kilometres.`, marks: 2 },
            { label: "(b)", text: String.raw`A reservoir has an actual area of $2.5\ \text{km}^2$. Find the area of the reservoir on the map, in $\text{cm}^2$.`, marks: 2 },
            { label: "(c)", text: String.raw`A second map shows the same region. On this map, the distance between the two towns is $14.8$ cm. Write the scale of the second map in the form $1 : n$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The floor plan of a rectangular room is drawn to a scale of $1 : 200$. On the plan, the room measures $4.8$ cm by $3.2$ cm.

The owner wants to cover the floor with square tiles of side $80$ cm. Each tile costs $\$4.50$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the actual length and width of the room, in metres.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the actual area of the floor, in $\text{m}^2$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the number of tiles needed and the total cost of the tiles.`, marks: 3 },
            { label: "(d)", text: String.raw`A door on the plan is $0.45$ cm wide. Is the actual door wide enough for a wheelchair that needs a gap of $85$ cm? Show your working.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-area-ratio",
      name: String.raw`Ratio of areas of similar triangles`,
      tests: String.raw`Using $\left(\frac{l_1}{l_2}\right)^2$ for similar triangles (parallel-line or hourglass shapes), combined with subtraction for trapezium regions and the "same height" rule for triangles that are not similar.`,
      questions: [
        {
          stem: String.raw`In the diagram, $D$ lies on $AB$ and $E$ lies on $AC$ such that $DE$ is parallel to $BC$, and $AD : DB = 2 : 3$.`,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.9],
            equal: true,
            axes: false,
            segments: [
              { from: [1.8, 4.4], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [1.8, 4.4], tone: "ink" },
              { from: [1.08, 2.64], to: [3.48, 2.64], tone: "ink" },
              { from: [0, 0], to: [3.48, 2.64], tone: "muted", dashed: true },
              { from: [2.21, 2.64], to: [2.35, 2.64], arrow: true, tone: "ink", thin: true },
              { from: [2.93, 0], to: [3.07, 0], arrow: true, tone: "ink", thin: true },
            ],
            labels: [
              { x: 1.8, y: 4.4, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 1.08, y: 2.64, text: "D", pos: "w" },
              { x: 3.48, y: 2.64, text: "E", pos: "e" },
            ],
            alt: "Triangle ABC with D on AB and E on AC such that DE is parallel to BC. The line BE is drawn dashed.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\dfrac{\text{area of } \triangle ADE}{\text{area of } \triangle ABC}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the ratio of the area of $\triangle ADE$ to the area of the trapezium $DBCE$.`, marks: 1 },
            { label: "(c)", text: String.raw`The area of the trapezium $DBCE$ is $63\ \text{cm}^2$. Find the area of $\triangle ADE$.`, marks: 1 },
            { label: "(d)", text: String.raw`Find the area of $\triangle BDE$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`$ABCD$ is a trapezium in which $AB$ is parallel to $DC$, $AB = 4$ cm and $DC = 10$ cm. The diagonals $AC$ and $BD$ meet at $X$. The area of triangle $ABX$ is $8\ \text{cm}^2$.`,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 3.5],
            equal: true,
            axes: false,
            segments: [
              { from: [1.4, 3], to: [3.8, 3], tone: "ink" },
              { from: [3.8, 3], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [1.4, 3], tone: "ink" },
              { from: [1.4, 3], to: [6, 0], tone: "ink" },
              { from: [3.8, 3], to: [0, 0], tone: "ink" },
              { from: [2.53, 3], to: [2.67, 3], arrow: true, tone: "ink", thin: true },
              { from: [2.93, 0], to: [3.07, 0], arrow: true, tone: "ink", thin: true },
            ],
            labels: [
              { x: 1.4, y: 3, text: "A", pos: "nw" },
              { x: 3.8, y: 3, text: "B", pos: "ne" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 0, y: 0, text: "D", pos: "sw" },
              { x: 2.71, y: 2.14, text: "X", pos: "s" },
              { x: 2.6, y: 3, text: "4 cm", pos: "n", style: "small" },
              { x: 3, y: 0, text: "10 cm", pos: "s", style: "small" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Trapezium ABCD with AB parallel to DC, AB = 4 cm on top and DC = 10 cm at the bottom. The diagonals AC and BD meet at X.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that triangle $ABX$ is similar to triangle $CDX$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the area of triangle $CDX$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $ADX$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the area of the trapezium $ABCD$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-similar-solids",
      name: String.raw`Volumes, masses and surface areas of similar solids`,
      tests: String.raw`Using the cube of the length ratio for volume, capacity or mass and the square for surface area, including going from an area ratio to a volume ratio, and liquid in a cone.`,
      questions: [
        {
          stem: String.raw`Two bottles are geometrically similar. The smaller bottle has height $12$ cm and the larger bottle has height $18$ cm.`,
          parts: [
            { label: "(a)", text: String.raw`The capacity of the smaller bottle is $400\ \text{ml}$. Find the capacity of the larger bottle.`, marks: 2 },
            { label: "(b)", text: String.raw`The surface area of the larger bottle is $540\ \text{cm}^2$. Find the surface area of the smaller bottle.`, marks: 2 },
            { label: "(c)", text: String.raw`A third bottle, similar to the other two, has a surface area that is $\frac{1}{4}$ of the surface area of the smaller bottle. Find its capacity.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a container in the shape of an inverted cone of height $20$ cm. It contains water to a depth of $15$ cm. The volume of the container when full is $1280\ \text{cm}^3$.`,
          figure: {
            type: "plot",
            x: [-4.4, 4.4],
            y: [-0.4, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[-1.5, 3.75], [0, 0], [1.5, 3.75]], fill: true, tone: "accent" },
            ],
            curves: [
              { param: "t => [1.5*Math.cos(t), 3.75 + 0.42*Math.sin(t)]", t: [0, 6.28], tone: "accent" },
              { param: "t => [2*Math.cos(t), 5 + 0.56*Math.sin(t)]", t: [0, 6.28], tone: "ink" },
            ],
            segments: [
              { from: [-2, 5], to: [0, 0], tone: "ink" },
              { from: [2, 5], to: [0, 0], tone: "ink" },
              { from: [2.5, 0], to: [2.5, 5], tone: "muted", thin: true, arrow: true, arrowStart: true },
              { from: [-2.5, 0], to: [-2.5, 3.75], tone: "muted", thin: true, arrow: true, arrowStart: true },
              { from: [-2.8, 0], to: [0, 0], tone: "muted", thin: true, dashed: true },
            ],
            labels: [
              { x: 2.5, y: 2.5, text: "20 cm", pos: "e", style: "small" },
              { x: -2.5, y: 1.88, text: "15 cm", pos: "w", style: "small" },
            ],
            alt: "An inverted cone of height 20 cm, vertex at the bottom, containing water to a depth of 15 cm measured from the vertex.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the volume of water in the container.`, marks: 2 },
            { label: "(b)", text: String.raw`More water is added until the volume of water is doubled. Find the new depth of the water. Give your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G2-bisector-construction",
      name: String.raw`Constructing perpendicular bisectors and angle bisectors`,
      tests: String.raw`Constructing a triangle, then a perpendicular bisector and/or an angle bisector to locate a point that is equidistant from two points or two lines, and measuring. Often set as a scale drawing of a real site.`,
      questions: [
        {
          stem: String.raw`Triangle $ABC$ has $AB = 10$ cm, $AC = 7$ cm and $\angle BAC = 50^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Using ruler, compasses and protractor, construct triangle $ABC$, starting with the side $AB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Measure and write down the length of $BC$.`, marks: 1 },
            { label: "(c)", text: String.raw`On your diagram, construct (i) the perpendicular bisector of $AB$, (ii) the bisector of $\angle ABC$.`, marks: 2 },
            { label: "(d)", text: String.raw`The two bisectors meet at $P$. Measure and write down the length of $AP$.`, marks: 1 },
            { label: "(e)", text: String.raw`Complete the statement: "$P$ is equidistant from the points ___ and ___, and from the lines ___ and ___."`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A park is in the shape of a triangle $PQR$ with $PQ = 80$ m, $QR = 60$ m and $PR = 100$ m. A lamp post $L$ is to be placed in the park so that it is the same distance from $P$ as from $Q$, and the same distance from the fences $PQ$ and $PR$.`,
          parts: [
            { label: "(a)", text: String.raw`Using a scale of $1$ cm to represent $10$ m, construct triangle $PQR$.`, marks: 2 },
            { label: "(b)", text: String.raw`By constructing two suitable lines, find and label the position of $L$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the actual distance of $L$ from $P$, to the nearest metre.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-congruent-or-similar",
      name: String.raw`Deciding whether triangles are congruent or similar`,
      tests: String.raw`Checking given sides and angles against the tests, including traps such as AAA (similar only), SSA (no conclusion) and a right-angled triangle split by its altitude.`,
      questions: [
        {
          stem: String.raw`For each pair of triangles below, state whether they are **congruent**, **similar but not congruent**, or **cannot be decided** from the information. Give the test you used where there is one.`,
          parts: [
            { label: "(a)", text: String.raw`Triangle 1 has sides $5$ cm, $7$ cm, $9$ cm. Triangle 2 has sides $10$ cm, $14$ cm, $18$ cm.`, marks: 1 },
            { label: "(b)", text: String.raw`Both triangles are right-angled with hypotenuse $13$ cm. Triangle 1 has another side of $5$ cm; triangle 2 has another side of $12$ cm.`, marks: 1 },
            { label: "(c)", text: String.raw`Triangle 1 has angles $40^\circ$ and $65^\circ$, with the side opposite the $65^\circ$ angle equal to $8$ cm. Triangle 2 has angles $40^\circ$ and $75^\circ$, with the side opposite its $65^\circ$ angle equal to $8$ cm.`, marks: 1 },
            { label: "(d)", text: String.raw`Both triangles have sides of $6$ cm and $9$ cm and an angle of $35^\circ$ opposite the $6$ cm side.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In the diagram, triangle $ABC$ is right-angled at $A$, and $D$ is the point on $BC$ such that $AD$ is perpendicular to $BC$. $AB = 6$ cm and $BC = 10$ cm.`,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.85, 3.38],
            equal: true,
            axes: false,
            segments: [
              { from: [2.16, 2.88], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [2.16, 2.88], tone: "ink" },
              { from: [2.16, 2.88], to: [2.16, 0], tone: "ink" },
            ],
            rightAngles: [
              { at: [2.16, 2.88], a: [-2.16, -2.88], b: [3.84, -2.88], size: 0.3 },
              { at: [2.16, 0], a: [3.84, 0], b: [0, 2.88], size: 0.25 },
            ],
            labels: [
              { x: 2.16, y: 2.88, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 2.16, y: 0, text: "D", pos: "s" },
              { x: 1.08, y: 1.44, text: "6 cm", pos: "nw", style: "small" },
              { x: 3, y: -0.35, text: "10 cm", pos: "s", style: "small" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Triangle ABC with a right angle at A. D is the point on BC with AD perpendicular to BC. AB = 6 cm and BC = 10 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that triangle $ABD$ is similar to triangle $CBA$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $BD$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $AD$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
