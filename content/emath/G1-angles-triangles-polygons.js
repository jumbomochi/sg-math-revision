H2.addTopic({
  id: "G1",
  title: "Angles, Triangles and Polygons",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Angle facts, parallel lines, triangles, special quadrilaterals, angle sums of polygons, regular polygons and simple constructions.`,
  syllabus: {
    include: [
      String.raw`right, acute, obtuse and reflex angles`,
      String.raw`vertically opposite angles, angles on a straight line and angles at a point`,
      String.raw`angles formed by two parallel lines and a transversal: corresponding angles, alternate angles, interior angles`,
      String.raw`properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties`,
      String.raw`classifying special quadrilaterals on the basis of their properties`,
      String.raw`angle sum of interior and exterior angles of any convex polygon`,
      String.raw`construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors, where appropriate`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Types of angles and basic angle facts`,
      body: String.raw`| Type | Size |
| --- | --- |
| Acute | $0^\circ < \theta < 90^\circ$ |
| Right | $\theta = 90^\circ$ |
| Obtuse | $90^\circ < \theta < 180^\circ$ |
| Reflex | $180^\circ < \theta < 360^\circ$ |

- **Adjacent angles on a straight line** add up to $180^\circ$.
- **Angles at a point** add up to $360^\circ$.
- **Vertically opposite angles** are equal.
- A reflex angle is "the other way round": reflex $\angle AOB = 360^\circ - \angle AOB$.
- With algebra (e.g. $(3x - 20)^\circ$), form an equation from one fact, solve for $x$, then substitute back to get the angle the question asks for.`,
      figure: [
        {
          type: "plot",
          x: [-2.76, 2.76],
          y: [-2.07, 2.07],
          equal: true,
          axes: false,
          segments: [
            { from: [2.36, 1.1], to: [-2.36, -1.1], tone: "ink" },
            { from: [-1.99, 1.67], to: [1.99, -1.67], tone: "ink" },
          ],
          angles: [
            { at: [0, 0], from: [0.91, 0.42], to: [-0.77, 0.64], r: 0.55 },
            { at: [0, 0], from: [-0.91, -0.42], to: [0.77, -0.64], r: 0.55 },
            { at: [0, 0], from: [-0.77, 0.64], to: [-0.91, -0.42], r: 0.85 },
            { at: [0, 0], from: [0.77, -0.64], to: [0.91, 0.42], r: 0.85 },
          ],
          labels: [
            { x: 0.09, y: 0.71, text: "a", pos: "c", style: "italic" },
            { x: -0.09, y: -0.71, text: "a", pos: "c", style: "italic" },
            { x: -1, y: 0.13, text: "b", pos: "c", style: "italic" },
            { x: 1, y: -0.13, text: "b", pos: "c", style: "italic" },
          ],
          caption: String.raw`Vertically opposite angles are equal. Adjacent angles on a straight line: $a + b = 180^\circ$.`,
          alt: "Two straight lines crossing. The two opposite angles marked a are equal, and the two opposite angles marked b are equal; a and b are next to each other on a straight line.",
        },
        {
          type: "plot",
          x: [-2.89, 3.18],
          y: [-2.48, 2.37],
          equal: true,
          axes: false,
          segments: [
            { from: [0, 0], to: [2.32, 0.62], tone: "ink" },
            { from: [0, 0], to: [-1.38, 1.97], tone: "ink" },
            { from: [0, 0], to: [-2.04, -1.27], tone: "ink" },
            { from: [0, 0], to: [1.2, -2.08], tone: "ink" },
          ],
          angles: [
            { at: [0, 0], from: [0.97, 0.26], to: [-0.57, 0.82], r: 0.45 },
            { at: [0, 0], from: [-0.57, 0.82], to: [-0.85, -0.53], r: 0.75 },
            { at: [0, 0], from: [-0.85, -0.53], to: [0.5, -0.87], r: 0.45 },
            { at: [0, 0], from: [0.5, -0.87], to: [0.97, 0.26], r: 0.75 },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0.21, y: 0.59, text: "p", pos: "c", style: "italic" },
            { x: -0.91, y: 0.18, text: "q", pos: "c", style: "italic" },
            { x: -0.15, y: -0.61, text: "r", pos: "c", style: "italic" },
            { x: 0.86, y: -0.35, text: "s", pos: "c", style: "italic" },
          ],
          caption: String.raw`Angles at a point: $p + q + r + s = 360^\circ$.`,
          alt: "Four rays from one point dividing the full turn into angles p, q, r and s.",
        },
      ],
    },
    {
      title: String.raw`Parallel lines and a transversal`,
      body: String.raw`When a line (the **transversal**) cuts two parallel lines:

- **Corresponding angles** are equal.
- **Alternate angles** are equal.
- **Interior angles** (on the same side, between the lines) add up to $180^\circ$.

Parallel lines are marked with matching arrows. The converse is also true: if a pair of alternate (or corresponding) angles are equal, the lines are parallel.

When a point sits between two parallel lines (a "zigzag"), draw an extra line through it parallel to both, then use alternate or interior angles twice.`,
      figure: [
        {
          type: "plot",
          x: [-0.65, 5.95],
          y: [-1.32, 3.52],
          equal: true,
          axes: false,
          segments: [
            { from: [-0.3, 2.2], to: [5.6, 2.2], tone: "ink" },
            { from: [-0.3, 0], to: [5.6, 0], tone: "ink" },
            { from: [1.48, -0.97], to: [3.69, 3.17], tone: "accent" },
            { from: [0.35, 2.2], to: [0.47, 2.2], arrow: true, tone: "ink", thin: true },
            { from: [0.35, 0], to: [0.47, 0], arrow: true, tone: "ink", thin: true },
          ],
          angles: [
            { at: [3.17, 2.2], from: [4.17, 2.2], to: [3.64, 3.08], r: 0.45 },
            { at: [2, 0], from: [3, 0], to: [2.47, 0.88], r: 0.45 },
          ],
          labels: [
            { x: 3.72, y: 2.53, text: "a", pos: "c", style: "italic" },
            { x: 2.55, y: 0.33, text: "a", pos: "c", style: "italic" },
          ],
          caption: String.raw`**Corresponding** angles are equal (F shape).`,
          alt: "Two parallel lines cut by a transversal; the two angles marked a are in matching positions at each crossing.",
        },
        {
          type: "plot",
          x: [-0.65, 5.95],
          y: [-1.32, 3.52],
          equal: true,
          axes: false,
          segments: [
            { from: [-0.3, 2.2], to: [5.6, 2.2], tone: "ink" },
            { from: [-0.3, 0], to: [5.6, 0], tone: "ink" },
            { from: [1.48, -0.97], to: [3.69, 3.17], tone: "accent" },
            { from: [0.35, 2.2], to: [0.47, 2.2], arrow: true, tone: "ink", thin: true },
            { from: [0.35, 0], to: [0.47, 0], arrow: true, tone: "ink", thin: true },
          ],
          angles: [
            { at: [3.17, 2.2], from: [2.17, 2.2], to: [2.7, 1.32], r: 0.45 },
            { at: [2, 0], from: [3, 0], to: [2.47, 0.88], r: 0.45 },
          ],
          labels: [
            { x: 2.62, y: 1.87, text: "a", pos: "c", style: "italic" },
            { x: 2.55, y: 0.33, text: "a", pos: "c", style: "italic" },
          ],
          caption: String.raw`**Alternate** angles are equal (Z shape).`,
          alt: "Two parallel lines cut by a transversal; the two angles marked a are on opposite sides of the transversal, between the parallel lines.",
        },
        {
          type: "plot",
          x: [-0.65, 5.95],
          y: [-1.32, 3.52],
          equal: true,
          axes: false,
          segments: [
            { from: [-0.3, 2.2], to: [5.6, 2.2], tone: "ink" },
            { from: [-0.3, 0], to: [5.6, 0], tone: "ink" },
            { from: [1.48, -0.97], to: [3.69, 3.17], tone: "accent" },
            { from: [0.35, 2.2], to: [0.47, 2.2], arrow: true, tone: "ink", thin: true },
            { from: [0.35, 0], to: [0.47, 0], arrow: true, tone: "ink", thin: true },
          ],
          angles: [
            { at: [3.17, 2.2], from: [2.7, 1.32], to: [4.17, 2.2], r: 0.4 },
            { at: [2, 0], from: [3, 0], to: [2.47, 0.88], r: 0.45 },
          ],
          labels: [
            { x: 3.48, y: 1.69, text: "b", pos: "c", style: "italic" },
            { x: 2.55, y: 0.33, text: "a", pos: "c", style: "italic" },
          ],
          caption: String.raw`**Interior** angles add up to $180^\circ$: $a + b = 180^\circ$ (C shape).`,
          alt: "Two parallel lines cut by a transversal; angles a and b are on the same side of the transversal, between the parallel lines.",
        },
      ],
    },
    {
      title: String.raw`Properties of triangles`,
      body: String.raw`- **Angle sum** of a triangle $= 180^\circ$.
- **Exterior angle** $=$ sum of the two interior opposite angles.
- **Isosceles** triangle: two equal sides, and the angles opposite them (the base angles) are equal. The converse also holds.
- **Equilateral** triangle: three equal sides, each angle $60^\circ$.
- A **right-angled** triangle has one angle of $90^\circ$, so the other two add up to $90^\circ$.

By sides: scalene, isosceles, equilateral. By angles: acute-angled, right-angled, obtuse-angled.

Equal sides are shown by matching tick marks. Look for them, and for two radii or two equal lengths in the question, to spot isosceles triangles.`,
      figure: [
        {
          type: "plot",
          x: [-0.5, 6.9],
          y: [-0.5, 3.5],
          equal: true,
          axes: false,
          segments: [
            { from: [1.4, 3], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [4.2, 0], tone: "ink" },
            { from: [4.2, 0], to: [1.4, 3], tone: "ink" },
            { from: [4.2, 0], to: [6.4, 0], tone: "ink" },
          ],
          angles: [
            { at: [1.4, 3], from: [0, 0], to: [4.2, 0], r: 0.55 },
            { at: [0, 0], from: [4.2, 0], to: [1.4, 3], r: 0.6 },
            { at: [4.2, 0], from: [6.4, 0], to: [1.4, 3], r: 0.55 },
          ],
          labels: [
            { x: 1.4, y: 3, text: "A", pos: "n" },
            { x: 0, y: 0, text: "B", pos: "sw" },
            { x: 4.2, y: 0, text: "C", pos: "se" },
            { x: 6.4, y: 0, text: "D", pos: "s" },
            { x: 1.52, y: 2.24, text: "a", pos: "c", style: "italic" },
            { x: 0.69, y: 0.44, text: "b", pos: "c", style: "italic" },
            { x: 4.51, y: 0.7, text: "a + b", pos: "c", style: "italic" },
          ],
          caption: String.raw`Exterior angle of a triangle $=$ sum of the interior opposite angles.`,
          alt: "Triangle ABC with BC produced to D. Angles a at A and b at B; the exterior angle ACD is marked a + b.",
        },
        {
          type: "plot",
          x: [-0.96, 4.56],
          y: [-0.5, 3.9],
          equal: true,
          axes: false,
          segments: [
            { from: [1.8, 3.4], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [3.6, 0], tone: "ink" },
            { from: [3.6, 0], to: [1.8, 3.4], tone: "ink" },
            { from: [0.97, 1.66], to: [0.83, 1.74], tone: "ink", thin: true },
            { from: [2.77, 1.74], to: [2.63, 1.66], tone: "ink", thin: true },
          ],
          angles: [
            { at: [0, 0], from: [3.6, 0], to: [1.8, 3.4], r: 0.55 },
            { at: [3.6, 0], from: [1.8, 3.4], to: [0, 0], r: 0.55 },
          ],
          labels: [
            { x: 1.8, y: 3.4, text: "A", pos: "n" },
            { x: 0, y: 0, text: "B", pos: "sw" },
            { x: 3.6, y: 0, text: "C", pos: "se" },
            { x: 0.61, y: 0.37, text: "x", pos: "c", style: "italic" },
            { x: 2.99, y: 0.37, text: "x", pos: "c", style: "italic" },
          ],
          caption: String.raw`Isosceles: $AB = AC \Rightarrow$ base angles equal.`,
          alt: "Isosceles triangle ABC with AB and AC marked equal by tick marks; the base angles at B and C are both marked x.",
        },
      ],
    },
    {
      title: String.raw`Special quadrilaterals and their properties`,
      body: String.raw`| Shape | Sides | Angles | Diagonals | Lines of symmetry |
| --- | --- | --- | --- | --- |
| Parallelogram | Opposite sides parallel and equal | Opposite angles equal | Bisect each other | 0 |
| Rectangle | Opposite sides parallel and equal | All $90^\circ$ | Equal, bisect each other | 2 |
| Rhombus | All sides equal, opposite sides parallel | Opposite angles equal | Bisect each other at $90^\circ$; bisect the angles | 2 |
| Square | All sides equal | All $90^\circ$ | Equal, bisect each other at $90^\circ$ | 4 |
| Trapezium | Exactly one pair of parallel sides | Interior angles between the parallel sides add to $180^\circ$ | — | 0 (1 if isosceles) |
| Kite | Two pairs of equal adjacent sides | One pair of opposite angles equal | Perpendicular; one bisects the other | 1 |

Adjacent angles of a parallelogram add up to $180^\circ$ (interior angles). The angle sum of any quadrilateral is $360^\circ$.`,
      figure: [
        {
          type: "plot",
          x: [-0.35, 4.75],
          y: [-0.35, 2.55],
          equal: true,
          axes: false,
          segments: [
            { from: [0.8, 2.2], to: [4.4, 2.2], tone: "ink" },
            { from: [4.4, 2.2], to: [3.6, 0], tone: "ink" },
            { from: [3.6, 0], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [0.8, 2.2], tone: "ink" },
            { from: [0.8, 2.2], to: [3.6, 0], tone: "muted", dashed: true, thin: true },
            { from: [4.4, 2.2], to: [0, 0], tone: "muted", dashed: true, thin: true },
            { from: [2.55, 2.2], to: [2.65, 2.2], arrow: true, tone: "ink", thin: true },
            { from: [1.75, 0], to: [1.85, 0], arrow: true, tone: "ink", thin: true },
            { from: [0.37, 1.02], to: [0.4, 1.11], arrow: true, tone: "ink", thin: true },
            { from: [0.4, 1.09], to: [0.43, 1.18], arrow: true, tone: "ink", thin: true },
            { from: [3.97, 1.02], to: [4, 1.11], arrow: true, tone: "ink", thin: true },
            { from: [4, 1.09], to: [4.03, 1.18], arrow: true, tone: "ink", thin: true },
          ],
          caption: String.raw`Parallelogram: diagonals bisect each other.`,
          alt: "A parallelogram with both pairs of opposite sides marked parallel, and its two diagonals drawn dashed.",
        },
        {
          type: "plot",
          x: [-0.95, 4.95],
          y: [-0.95, 3.75],
          equal: true,
          axes: false,
          segments: [
            { from: [2, 3.4], to: [3.4, 2.2], tone: "ink" },
            { from: [3.4, 2.2], to: [2, -0.6], tone: "ink" },
            { from: [2, -0.6], to: [0.6, 2.2], tone: "ink" },
            { from: [0.6, 2.2], to: [2, 3.4], tone: "ink" },
            { from: [2, 3.4], to: [2, -0.6], tone: "muted", dashed: true, thin: true },
            { from: [0.6, 2.2], to: [3.4, 2.2], tone: "muted", dashed: true, thin: true },
            { from: [1.36, 2.73], to: [1.24, 2.87], tone: "ink", thin: true },
            { from: [2.76, 2.87], to: [2.64, 2.73], tone: "ink", thin: true },
            { from: [1.36, 0.87], to: [1.21, 0.79], tone: "ink", thin: true },
            { from: [1.39, 0.81], to: [1.24, 0.73], tone: "ink", thin: true },
            { from: [2.79, 0.79], to: [2.64, 0.87], tone: "ink", thin: true },
            { from: [2.76, 0.73], to: [2.61, 0.81], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [2, 2.2], a: [1, 0], b: [0, 1], size: 0.22 },
          ],
          caption: String.raw`Kite: diagonals perpendicular; one diagonal is a line of symmetry.`,
          alt: "A kite with two pairs of equal adjacent sides marked by single and double ticks. Its diagonals are drawn dashed and meet at right angles.",
        },
        {
          type: "plot",
          x: [-0.35, 4.95],
          y: [-0.35, 2.55],
          equal: true,
          axes: false,
          segments: [
            { from: [1, 2.2], to: [3.6, 2.2], tone: "ink" },
            { from: [3.6, 2.2], to: [4.6, 0], tone: "ink" },
            { from: [4.6, 0], to: [0, 0], tone: "ink" },
            { from: [0, 0], to: [1, 2.2], tone: "ink" },
            { from: [2.25, 2.2], to: [2.35, 2.2], arrow: true, tone: "ink", thin: true },
            { from: [2.25, 0], to: [2.35, 0], arrow: true, tone: "ink", thin: true },
          ],
          caption: String.raw`Trapezium: exactly one pair of parallel sides.`,
          alt: "A trapezium with only its top and bottom sides marked parallel.",
        },
      ],
    },
    {
      title: String.raw`Classifying quadrilaterals`,
      body: String.raw`Each special quadrilateral is a special case of the one above it:

- A **square** is a rectangle *and* a rhombus.
- A **rectangle** and a **rhombus** are both parallelograms.
- A **parallelogram** is a quadrilateral with two pairs of parallel sides.

To name a shape from its properties, give the **most specific** name that fits all the facts. Useful tests:

- Diagonals bisect each other $\Rightarrow$ parallelogram.
- ... and are equal $\Rightarrow$ rectangle; ... and are perpendicular $\Rightarrow$ rhombus; both $\Rightarrow$ square.
- Diagonals perpendicular, with only one bisected by the other $\Rightarrow$ kite.

To show a statement is false, one counter-example (a sketch with the properties marked) is enough.`,
    },
    {
      title: String.raw`Interior angle sum of a polygon`,
      body: String.raw`For a convex polygon with $n$ sides (memorise):
$$\text{Sum of interior angles} = (n - 2) \times 180^\circ.$$

| $n$ | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- |
| Sum | $180^\circ$ | $360^\circ$ | $540^\circ$ | $720^\circ$ | $900^\circ$ | $1080^\circ$ |

When the angles are given in terms of $x$, add them all, set the total equal to $(n - 2) \times 180^\circ$, and solve.`,
      figure: {
        type: "plot",
        x: [-0.87, 4.78],
        y: [-0.45, 3.74],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [3.4, 0], [4.33, 1.99]], fill: true, tone: "accent" },
          { points: [[0, 0], [4.33, 1.99], [2.08, 3.29]], fill: true, tone: "good" },
          { points: [[0, 0], [2.08, 3.29], [-0.42, 2.38]], fill: true, tone: "warn" },
        ],
        segments: [
          { from: [0, 0], to: [3.4, 0], tone: "ink" },
          { from: [3.4, 0], to: [4.33, 1.99], tone: "ink" },
          { from: [4.33, 1.99], to: [2.08, 3.29], tone: "ink" },
          { from: [2.08, 3.29], to: [-0.42, 2.38], tone: "ink" },
          { from: [-0.42, 2.38], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [4.33, 1.99], tone: "muted", dashed: true, thin: true },
          { from: [0, 0], to: [2.08, 3.29], tone: "muted", dashed: true, thin: true },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 3.4, y: 0, text: "B", pos: "se" },
          { x: 4.33, y: 1.99, text: "C", pos: "e" },
          { x: 2.08, y: 3.29, text: "D", pos: "n" },
          { x: -0.42, y: 2.38, text: "E", pos: "w" },
        ],
        caption: String.raw`Diagonals from one vertex split an $n$-sided polygon into $(n - 2)$ triangles. Pentagon: $3 \times 180^\circ = 540^\circ$.`,
        alt: "A convex pentagon ABCDE split into three shaded triangles by the diagonals AC and AD from vertex A.",
      },
    },
    {
      title: String.raw`Exterior angles of a polygon`,
      body: String.raw`An exterior angle is formed by producing one side. For **any** convex polygon (memorise):
$$\text{Sum of exterior angles} = 360^\circ.$$

At every vertex, interior angle $+$ exterior angle $= 180^\circ$ (adjacent angles on a straight line).

Exterior angles are often the quicker route: if you know all but one exterior angle, the last one is $360^\circ$ minus the rest.`,
      figure: {
        type: "plot",
        x: [-1.98, 5.32],
        y: [-1.53, 4.29],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [3.4, 0], [4.33, 1.99], [2.08, 3.29], [-0.42, 2.38]], fill: true, tone: "muted" },
        ],
        segments: [
          { from: [0, 0], to: [3.4, 0], tone: "ink" },
          { from: [3.4, 0], to: [4.5, 0], tone: "muted", thin: true, dashed: true },
          { from: [3.4, 0], to: [4.33, 1.99], tone: "ink" },
          { from: [4.33, 1.99], to: [4.79, 2.99], tone: "muted", thin: true, dashed: true },
          { from: [4.33, 1.99], to: [2.08, 3.29], tone: "ink" },
          { from: [2.08, 3.29], to: [1.13, 3.84], tone: "muted", thin: true, dashed: true },
          { from: [2.08, 3.29], to: [-0.42, 2.38], tone: "ink" },
          { from: [-0.42, 2.38], to: [-1.45, 2.01], tone: "muted", thin: true, dashed: true },
          { from: [-0.42, 2.38], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [0.19, -1.08], tone: "muted", thin: true, dashed: true },
        ],
        angles: [
          { at: [3.4, 0], from: [4.5, 0], to: [4.33, 1.99], r: 0.45, label: "e₁" },
          { at: [4.33, 1.99], from: [4.79, 2.99], to: [2.08, 3.29], r: 0.45, label: "e₂" },
          { at: [2.08, 3.29], from: [1.13, 3.84], to: [-0.42, 2.38], r: 0.45, label: "e₃" },
          { at: [-0.42, 2.38], from: [-1.45, 2.01], to: [0, 0], r: 0.45, label: "e₄" },
          { at: [0, 0], from: [0.19, -1.08], to: [3.4, 0], r: 0.45, label: "e₅" },
        ],
        caption: String.raw`Each side extended in turn: $e_1 + e_2 + e_3 + e_4 + e_5 = 360^\circ$. At each vertex, interior $+$ exterior $= 180^\circ$.`,
        alt: "The same pentagon with each side produced in the same direction round the shape, forming exterior angles e1 to e5 at the five vertices.",
      },
    },
    {
      title: String.raw`Regular polygons`,
      body: String.raw`A **regular** polygon has all sides equal and all angles equal. For $n$ sides (memorise):
$$\text{Each exterior angle} = \frac{360^\circ}{n}, \qquad \text{each interior angle} = 180^\circ - \frac{360^\circ}{n}.$$

| Polygon | $n$ | Exterior angle | Interior angle |
| --- | --- | --- | --- |
| Pentagon | 5 | $72^\circ$ | $108^\circ$ |
| Hexagon | 6 | $60^\circ$ | $120^\circ$ |
| Octagon | 8 | $45^\circ$ | $135^\circ$ |
| Decagon | 10 | $36^\circ$ | $144^\circ$ |

- To **find $n$**: work out the exterior angle first, then $n = \dfrac{360^\circ}{\text{exterior angle}}$. If $n$ is not a whole number, no such regular polygon exists.
- Symmetry: a regular $n$-gon has $n$ lines of symmetry and rotational symmetry of order $n$.
- Joining the centre to every vertex gives $n$ congruent isosceles triangles, each with angle $\frac{360^\circ}{n}$ at the centre.`,
      figure: {
        type: "plot",
        x: [-4.14, 4.14],
        y: [-3.3, 3.3],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 2.4], [-2.08, 1.2], [-2.08, -1.2], [0, -2.4], [2.08, -1.2], [2.08, 1.2]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [0, 3], to: [0, -3], tone: "muted", dashed: true, thin: true },
          { from: [-1.42, 2.47], to: [1.43, -2.47], tone: "muted", dashed: true, thin: true },
          { from: [-2.6, 1.5], to: [2.6, -1.5], tone: "muted", dashed: true, thin: true },
          { from: [-2.85, 0], to: [2.85, 0], tone: "muted", dashed: true, thin: true },
          { from: [-2.6, -1.5], to: [2.6, 1.5], tone: "muted", dashed: true, thin: true },
          { from: [-1.43, -2.47], to: [1.42, 2.47], tone: "muted", dashed: true, thin: true },
          { from: [0, 2.4], to: [-2.08, 1.2], tone: "ink" },
          { from: [-2.08, 1.2], to: [-2.08, -1.2], tone: "ink" },
          { from: [-2.08, -1.2], to: [0, -2.4], tone: "ink" },
          { from: [0, -2.4], to: [2.08, -1.2], tone: "ink" },
          { from: [2.08, -1.2], to: [2.08, 1.2], tone: "ink" },
          { from: [2.08, 1.2], to: [0, 2.4], tone: "ink" },
          { from: [0, 0], to: [2.08, -1.2], tone: "good", thin: true },
          { from: [0, 0], to: [2.08, 1.2], tone: "good", thin: true },
        ],
        angles: [
          { at: [0, 0], from: [2.08, -1.2], to: [2.08, 1.2], r: 0.55 },
          { at: [0, 2.4], from: [-2.08, 1.2], to: [2.08, 1.2], r: 0.4 },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0.79, y: 0, text: "60°", pos: "c", style: "italic" },
          { x: 0, y: 1.76, text: "120°", pos: "c", style: "italic" },
        ],
        caption: String.raw`Regular hexagon: 6 lines of symmetry, rotational symmetry of order 6. Angle at the centre $= \frac{360^\circ}{6} = 60^\circ$; interior angle $120^\circ$.`,
        alt: "A regular hexagon with its six lines of symmetry dashed: three through opposite vertices and three through midpoints of opposite sides. The angle at the centre subtended by one side is 60 degrees and an interior angle is 120 degrees.",
      },
    },
    {
      title: String.raw`Constructions`,
      body: String.raw`Use a sharp pencil, ruler, compasses and protractor.

- **Three sides given**: draw one side, then two arcs from its ends (radii = the other two sides).
- **Two sides and the included angle**: draw one side, measure the angle with a protractor, then mark the second side along that arm.
- **Quadrilateral**: split it into triangles and build them one at a time.

For full marks, **leave all construction arcs visible** and label every vertex. Lengths are usually accepted to within $\pm 0.1$ cm and angles to within $\pm 1^\circ$. When asked to "measure", give lengths in cm to 1 decimal place and angles to the nearest degree.`,
      figure: {
        type: "plot",
        x: [-0.6, 7.6],
        y: [-0.6, 4.32],
        equal: true,
        axes: false,
        curves: [
          { param: "t => [0 + 5*Math.cos(t), 0 + 5*Math.sin(t)]", t: [0.32, 0.84], tone: "muted" },
          { param: "t => [7 + 4*Math.cos(t), 0 + 4*Math.sin(t)]", t: [2.05, 2.68], tone: "muted" },
        ],
        segments: [
          { from: [0, 0], to: [7, 0], tone: "ink" },
          { from: [7, 0], to: [4.14, 2.8], tone: "ink" },
          { from: [4.14, 2.8], to: [0, 0], tone: "ink" },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "w" },
          { x: 7, y: 0, text: "B", pos: "e" },
          { x: 4.14, y: 2.8, text: "C", pos: "n" },
          { x: 3.5, y: 0, text: "7 cm", pos: "s", style: "small" },
          { x: 2.07, y: 1.4, text: "5 cm", pos: "nw", style: "small" },
          { x: 5.57, y: 1.4, text: "4 cm", pos: "ne", style: "small" },
        ],
        caption: String.raw`Triangle from three sides: draw $AB = 7$ cm, then an arc of radius 5 cm centre $A$ and an arc of radius 4 cm centre $B$. They meet at $C$. Leave the arcs showing.`,
        alt: "Construction of triangle ABC with AB 7 cm: an arc of radius 5 cm about A and an arc of radius 4 cm about B cross at C, which is joined to A and B.",
      },
    },
    {
      title: String.raw`Giving reasons for full marks`,
      body: String.raw`In "find, giving reasons" questions, write each step with its reason. Standard short forms:

| Fact | Reason |
| --- | --- |
| Angles on a straight line | adj. $\angle$s on a str. line |
| Angles at a point | $\angle$s at a pt |
| Vertically opposite angles | vert. opp. $\angle$s |
| Corresponding angles | corr. $\angle$s, $AB \parallel CD$ |
| Alternate angles | alt. $\angle$s, $AB \parallel CD$ |
| Interior angles | int. $\angle$s, $AB \parallel CD$ |
| Angle sum of triangle | $\angle$ sum of $\triangle$ |
| Exterior angle of triangle | ext. $\angle$ of $\triangle$ |
| Isosceles triangle | base $\angle$s of isos. $\triangle$ |

- Name angles with three letters ($\angle ABC$, vertex in the middle), not "angle B", whenever there could be any doubt.
- Do not read angles off a diagram marked "Not drawn to scale".`,
    },
  ],
  archetypes: [
    {
      id: "G1-basic-angle-facts",
      name: String.raw`Angles at a point, on a straight line and vertically opposite`,
      tests: String.raw`Forming and solving a linear equation from one angle fact, often in two steps. Usually a short Paper 1 question with a diagram and angles in terms of $x$.`,
      questions: [
        {
          stem: String.raw`In the diagram, $AOB$ and $COD$ are straight lines. $\angle AOC = (2x + 15)^\circ$, $\angle BOD = (3x - 20)^\circ$, $\angle COE = (y + 5)^\circ$ and $\angle EOB = 2y^\circ$.`,
          figure: {
            type: "plot",
            x: [-4.5, 4.5],
            y: [-3.49, 3.69],
            equal: true,
            axes: false,
            segments: [
              { from: [-3.6, 0], to: [3.6, 0], tone: "ink" },
              { from: [-0.28, 3.19], to: [0.26, -2.99], tone: "ink" },
              { from: [0, 0], to: [1.7, 2.94], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [-0.28, 3.19], to: [-3.6, 0], r: 0.75 },
              { at: [0, 0], from: [0.26, -2.99], to: [3.6, 0], r: 0.7 },
              { at: [0, 0], from: [1.7, 2.94], to: [-0.28, 3.19], r: 1.1 },
              { at: [0, 0], from: [3.6, 0], to: [1.7, 2.94], r: 0.65 },
            ],
            labels: [
              { x: -3.6, y: 0, text: "A", pos: "w" },
              { x: 3.6, y: 0, text: "B", pos: "e" },
              { x: -0.28, y: 3.19, text: "C", pos: "n" },
              { x: 0.26, y: -2.99, text: "D", pos: "s" },
              { x: 1.7, y: 2.94, text: "E", pos: "ne" },
              { x: 0, y: 0, text: "O", pos: "se" },
              { x: -0.95, y: 0.87, text: "(2x + 15)°", pos: "c", style: "italic" },
              { x: 0.95, y: -0.87, text: "(3x − 20)°", pos: "c", style: "italic" },
              { x: 0.51, y: 2.3, text: "(y + 5)°", pos: "c", style: "italic" },
              { x: 0.79, y: 0.46, text: "2y°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Straight lines AOB and COD cross at O. A ray OE lies between OB and OC. Angle AOC is (2x + 15) degrees, angle BOD is (3x − 20) degrees, angle COE is (y + 5) degrees and angle EOB is 2y degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $y$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find reflex $\angle AOE$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows four angles at the point $P$.`,
          figure: {
            type: "plot",
            x: [-4.51, 4.33],
            y: [-3.54, 3.51],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3.01, 1.09], tone: "ink" },
              { from: [0, 0], to: [-1.09, 3.01], tone: "ink" },
              { from: [0, 0], to: [-3.19, 0.22], tone: "ink" },
              { from: [0, 0], to: [-0.99, -3.04], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [0.94, 0.34], to: [-0.34, 0.94], r: 0.5 },
              { at: [0, 0], from: [-0.34, 0.94], to: [-1, 0.07], r: 0.7 },
              { at: [0, 0], from: [-1, 0.07], to: [-0.31, -0.95], r: 0.5 },
              { at: [0, 0], from: [-0.31, -0.95], to: [0.94, 0.34], r: 0.7 },
            ],
            labels: [
              { x: 0.21, y: -0.36, text: "P", pos: "c" },
              { x: 0.32, y: 0.69, text: "5a°", pos: "c", style: "italic" },
              { x: -1.25, y: 0.94, text: "(3a + 12)°", pos: "c", style: "italic" },
              { x: -1.15, y: -0.78, text: "(2a + 40)°", pos: "c", style: "italic" },
              { x: 0.69, y: -0.67, text: "128°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Four rays from a point P forming four angles round P: 5a degrees, (3a + 12) degrees, (2a + 40) degrees and 128 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $a$.`, marks: 2 },
            { label: "(b)", text: String.raw`Which of the four angles is a right angle? Explain your answer.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-parallel-lines",
      name: String.raw`Angles with parallel lines`,
      tests: String.raw`Using corresponding, alternate and interior angles (with the parallel lines named in the reason), sometimes with an extra line drawn through a "zigzag" point.`,
      questions: [
        {
          stem: String.raw`In the diagram, $AB$ is parallel to $CD$. The line $EF$ meets $AB$ at $G$ and $CD$ at $H$. $\angle EGB = 64^\circ$ and $\angle GHD = (2x + 10)^\circ$. The line $GK$ bisects $\angle AGH$ and meets $CD$ at $K$.`,
          figure: {
            type: "plot",
            x: [-1.1, 8.7],
            y: [-1.4, 4.85],
            equal: true,
            axes: false,
            segments: [
              { from: [-0.6, 3], to: [8.2, 3], tone: "ink" },
              { from: [-0.6, 0], to: [8.2, 0], tone: "ink" },
              { from: [5.86, 4.35], to: [3.3, -0.9], tone: "ink" },
              { from: [5.2, 3], to: [0.4, 0], tone: "ink" },
              { from: [0.01, 3], to: [0.2, 3], arrow: true, tone: "ink", thin: true },
              { from: [0.01, 0], to: [0.2, 0], arrow: true, tone: "ink", thin: true },
            ],
            angles: [
              { at: [5.2, 3], from: [8.2, 3], to: [5.86, 4.35], r: 0.55 },
              { at: [3.74, 0], from: [8.2, 0], to: [5.2, 3], r: 0.55 },
            ],
            labels: [
              { x: -0.6, y: 3, text: "A", pos: "w" },
              { x: 8.2, y: 3, text: "B", pos: "e" },
              { x: -0.6, y: 0, text: "C", pos: "w" },
              { x: 8.2, y: 0, text: "D", pos: "e" },
              { x: 5.86, y: 4.35, text: "E", pos: "ne" },
              { x: 3.3, y: -0.9, text: "F", pos: "sw" },
              { x: 5.2, y: 3, text: "G", pos: "nw" },
              { x: 3.74, y: 0, text: "H", pos: "se" },
              { x: 0.4, y: 0, text: "K", pos: "s" },
              { x: 5.91, y: 3.44, text: "64°", pos: "c", style: "italic" },
              { x: 5.25, y: 0.94, text: "(2x + 10)°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Parallel lines AB (top) and CD (bottom). Line EF crosses AB at G and CD at H. Angle EGB is 64 degrees and angle GHD is (2x + 10) degrees. A line from G meets CD at K, to the left of H.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$, giving a reason.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle GKH$, giving reasons.`, marks: 2 },
            { label: "(c)", text: String.raw`Explain why triangle $GHK$ is isosceles.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In the diagram, $AB$ is parallel to $ED$. $\angle ABC = 140^\circ$, $\angle CDE = 125^\circ$ and $\angle BCD = x^\circ$. Find $x$, showing your working clearly.`,
          figure: {
            type: "plot",
            x: [0.1, 6.8],
            y: [-0.5, 4.5],
            equal: true,
            axes: false,
            segments: [
              { from: [0.6, 4], to: [4, 4], tone: "ink" },
              { from: [4, 4], to: [6.3, 2.07], tone: "ink" },
              { from: [6.3, 2.07], to: [4.85, 0], tone: "ink" },
              { from: [4.85, 0], to: [0.6, 0], tone: "ink" },
              { from: [2.07, 4], to: [2.19, 4], arrow: true, tone: "ink", thin: true },
              { from: [2.45, 0], to: [2.57, 0], arrow: true, tone: "ink", thin: true },
            ],
            angles: [
              { at: [4, 4], from: [0.6, 4], to: [6.3, 2.07], r: 0.45 },
              { at: [4.85, 0], from: [6.3, 2.07], to: [0.6, 0], r: 0.45 },
              { at: [6.3, 2.07], from: [4, 4], to: [4.85, 0], r: 0.5 },
            ],
            labels: [
              { x: 0.6, y: 4, text: "A", pos: "w" },
              { x: 4, y: 4, text: "B", pos: "n" },
              { x: 6.3, y: 2.07, text: "C", pos: "e" },
              { x: 4.85, y: 0, text: "D", pos: "s" },
              { x: 0.6, y: 0, text: "E", pos: "w" },
              { x: 3.78, y: 3.39, text: "140°", pos: "c", style: "italic" },
              { x: 4.55, y: 0.57, text: "125°", pos: "c", style: "italic" },
              { x: 5.61, y: 1.98, text: "x°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "AB and ED are parallel horizontal lines. From B a line goes down to the right to C, then back down to the left to D. Angle ABC is 140 degrees, angle CDE is 125 degrees, and angle BCD is x degrees.",
          },
          marks: 3,
        },
      ],
    },
    {
      id: "G1-triangle-angles",
      name: String.raw`Isosceles triangles and exterior angles`,
      tests: String.raw`Combining the angle sum of a triangle, base angles of an isosceles triangle and the exterior angle property. Equal sides are shown by tick marks or stated in words.`,
      questions: [
        {
          stem: String.raw`In the diagram, $AB = AC$ and $\angle BAC = 44^\circ$. The side $BC$ is produced to $D$. The point $E$ lies on $AC$ such that $BE$ bisects $\angle ABC$.`,
          figure: {
            type: "plot",
            x: [-0.58, 6.88],
            y: [-0.5, 5.45],
            equal: true,
            axes: false,
            segments: [
              { from: [2, 4.95], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4, 0], tone: "ink" },
              { from: [4, 0], to: [2, 4.95], tone: "ink" },
              { from: [4, 0], to: [6.3, 0], tone: "ink" },
              { from: [0, 0], to: [3.14, 2.12], tone: "ink" },
              { from: [1.1, 2.43], to: [0.9, 2.52], tone: "ink", thin: true },
              { from: [2.74, 3.41], to: [2.54, 3.33], tone: "ink", thin: true },
            ],
            angles: [
              { at: [2, 4.95], from: [0, 0], to: [4, 0], r: 0.7 },
            ],
            labels: [
              { x: 2, y: 4.95, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 4, y: 0, text: "C", pos: "s" },
              { x: 6.3, y: 0, text: "D", pos: "s" },
              { x: 3.14, y: 2.12, text: "E", pos: "e" },
              { x: 2, y: 4.03, text: "44°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Isosceles triangle ABC with AB = AC and angle BAC = 44 degrees. BC is produced to D. A line from B meets AC at E.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle ABC$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle ACD$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle BEC$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In triangle $PQR$, the side $QR$ is produced to $S$. $\angle PQR = (x + 15)^\circ$, $\angle QPR = 2x^\circ$ and $\angle PRS = (4x - 25)^\circ$.`,
          figure: {
            type: "plot",
            x: [-0.5, 7.5],
            y: [-0.5, 3.21],
            equal: true,
            axes: false,
            segments: [
              { from: [1.89, 2.71], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.6, 0], tone: "ink" },
              { from: [4.6, 0], to: [1.89, 2.71], tone: "ink" },
              { from: [4.6, 0], to: [7, 0], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [4.6, 0], to: [1.89, 2.71], r: 0.65 },
              { at: [1.89, 2.71], from: [0, 0], to: [4.6, 0], r: 0.6 },
              { at: [4.6, 0], from: [7, 0], to: [1.89, 2.71], r: 0.55 },
            ],
            labels: [
              { x: 1.89, y: 2.71, text: "P", pos: "n" },
              { x: 0, y: 0, text: "Q", pos: "sw" },
              { x: 4.6, y: 0, text: "R", pos: "s" },
              { x: 7, y: 0, text: "S", pos: "s" },
              { x: 1.35, y: 0.7, text: "(x + 15)°", pos: "c", style: "italic" },
              { x: 1.97, y: 1.87, text: "2x°", pos: "c", style: "italic" },
              { x: 4.92, y: 0.78, text: "(4x − 25)°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Triangle PQR with QR produced to S. Angle PQR is (x + 15) degrees, angle QPR is 2x degrees and the exterior angle PRS is (4x − 25) degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle PRQ$.`, marks: 1 },
            { label: "(c)", text: String.raw`State whether triangle $PQR$ is acute-angled, right-angled or obtuse-angled. Give a reason.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-quadrilateral-properties",
      name: String.raw`Special quadrilaterals: angles and classification`,
      tests: String.raw`Using the properties of parallelograms, rhombuses, kites and trapeziums to find angles, or naming a quadrilateral from a list of its properties.`,
      questions: [
        {
          stem: String.raw`In the diagram, $ABCD$ is a parallelogram and $E$ is a point on $DC$ such that $AE = AD$. $\angle ABC = 72^\circ$.`,
          figure: {
            type: "plot",
            x: [-0.5, 7.49],
            y: [-0.5, 3.54],
            equal: true,
            axes: false,
            segments: [
              { from: [0.99, 3.04], to: [6.99, 3.04], tone: "ink" },
              { from: [6.99, 3.04], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [0.99, 3.04], tone: "ink" },
              { from: [0.99, 3.04], to: [1.98, 0], tone: "ink" },
              { from: [0.61, 1.49], to: [0.38, 1.56], tone: "ink", thin: true },
              { from: [1.59, 1.56], to: [1.37, 1.49], tone: "ink", thin: true },
            ],
            angles: [
              { at: [6.99, 3.04], from: [0.99, 3.04], to: [6, 0], r: 0.55 },
            ],
            labels: [
              { x: 0.99, y: 3.04, text: "A", pos: "nw" },
              { x: 6.99, y: 3.04, text: "B", pos: "ne" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 0, y: 0, text: "D", pos: "sw" },
              { x: 1.98, y: 0, text: "E", pos: "s" },
              { x: 6.35, y: 2.58, text: "72°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Parallelogram ABCD with AB at the top and DC at the bottom. E is a point on DC with AE equal to AD, shown by tick marks. Angle ABC is 72 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down $\angle ADC$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle DAE$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $\angle BAE$, giving a reason.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$PQRS$ is a quadrilateral. Its diagonals $PR$ and $QS$ meet at $M$.`,
          parts: [
            { label: "(a)", text: String.raw`Given that $PM = MR$, $QM = MS$ and $PR = QS$, write down the special name of $PQRS$.`, marks: 1 },
            { label: "(b)", text: String.raw`Given instead that $PR$ and $QS$ are perpendicular, $QM = MS$ but $PM \ne MR$, write down the special name of $PQRS$.`, marks: 1 },
            { label: "(c)", text: String.raw`Ali says, "A quadrilateral with one pair of parallel sides and the other pair of sides equal in length must be a parallelogram." Draw a sketch to show that Ali is wrong.`, marks: 1 },
            { label: "(d)", text: String.raw`Name the special quadrilateral that has exactly two lines of symmetry and diagonals that are perpendicular.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-polygon-angle-sum",
      name: String.raw`Interior and exterior angle sums of a polygon`,
      tests: String.raw`Setting up an equation using $(n - 2) \times 180^\circ$ or the $360^\circ$ exterior angle sum when the angles of an irregular polygon are given in terms of $x$.`,
      questions: [
        {
          stem: String.raw`The diagram shows a pentagon $ABCDE$. Its interior angles are $120^\circ$, $2x^\circ$, $(2x + 10)^\circ$, $(3x - 20)^\circ$ and $(x + 30)^\circ$.`,
          figure: {
            type: "plot",
            x: [-1.51, 5.46],
            y: [-1.08, 3.87],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [4.16, -0.58], tone: "ink" },
              { from: [4.16, -0.58], to: [4.96, 1.89], tone: "ink" },
              { from: [4.96, 1.89], to: [3.07, 3.37], tone: "ink" },
              { from: [3.07, 3.37], to: [-1.01, 2.5], tone: "ink" },
              { from: [-1.01, 2.5], to: [0, 0], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [4.16, -0.58], to: [-1.01, 2.5], r: 0.55 },
              { at: [4.16, -0.58], from: [4.96, 1.89], to: [0, 0], r: 0.55 },
              { at: [4.96, 1.89], from: [3.07, 3.37], to: [4.16, -0.58], r: 0.55 },
              { at: [3.07, 3.37], from: [-1.01, 2.5], to: [4.96, 1.89], r: 0.55 },
              { at: [-1.01, 2.5], from: [0, 0], to: [3.07, 3.37], r: 0.55 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 4.16, y: -0.58, text: "B", pos: "se" },
              { x: 4.96, y: 1.89, text: "C", pos: "e" },
              { x: 3.07, y: 3.37, text: "D", pos: "ne" },
              { x: -1.01, y: 2.5, text: "E", pos: "w" },
              { x: 0.46, y: 0.59, text: "120°", pos: "c", style: "italic" },
              { x: 3.76, y: 0.05, text: "2x°", pos: "c", style: "italic" },
              { x: 4.17, y: 1.65, text: "(2x + 10)°", pos: "c", style: "italic" },
              { x: 2.9, y: 2.63, text: "(3x − 20)°", pos: "c", style: "italic" },
              { x: -0.17, y: 2.05, text: "(x + 30)°", pos: "c", style: "italic" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "Pentagon ABCDE with interior angles 120 degrees at A, 2x degrees at B, (2x + 10) degrees at C, (3x − 20) degrees at D and (x + 30) degrees at E.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the largest exterior angle of the pentagon.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The exterior angles of a hexagon are $x^\circ$, $2x^\circ$, $40^\circ$, $65^\circ$, $(x + 25)^\circ$ and $50^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the largest interior angle of the hexagon.`, marks: 1 },
            { label: "(c)", text: String.raw`Show that the sum of the interior angles of the hexagon is $720^\circ$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-regular-polygon-find-n",
      name: String.raw`Regular polygons: finding the number of sides`,
      tests: String.raw`Moving between the number of sides, the exterior angle and the interior angle of a regular polygon, including showing that a given angle is impossible.`,
      questions: [
        {
          stem: String.raw`The interior angle of a regular polygon is $156^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the number of sides of the polygon.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain why there is no regular polygon with an interior angle of $130^\circ$.`, marks: 2 },
            { label: "(c)", text: String.raw`Another regular polygon has an interior angle that is 7 times its exterior angle. Find the number of sides of this polygon.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The sum of the interior angles of a regular polygon is $1440^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the number of sides and name the polygon.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the size of each exterior angle.`, marks: 1 },
            { label: "(c)", text: String.raw`A regular polygon with $n$ sides has an exterior angle that is $15^\circ$ larger than the exterior angle of a regular polygon with $2n$ sides. Find $n$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G1-regular-polygons-combined",
      name: String.raw`Angles in diagrams made of regular polygons`,
      tests: String.raw`Finding angles where regular polygons share a side or are joined to squares and triangles, using interior angles, isosceles triangles and angles at a point. Symmetry facts may be asked too.`,
      questions: [
        {
          stem: String.raw`The diagram shows a regular pentagon $ABCDE$ and a square $ABFG$ drawn on opposite sides of $AB$. The line $EG$ is drawn.`,
          figure: {
            type: "plot",
            x: [-3.46, 6.06],
            y: [-3.1, 4.5],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [2.6, 0], tone: "ink" },
              { from: [2.6, 0], to: [3.4, 2.47], tone: "ink" },
              { from: [3.4, 2.47], to: [1.3, 4], tone: "ink" },
              { from: [1.3, 4], to: [-0.8, 2.47], tone: "ink" },
              { from: [-0.8, 2.47], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [0, -2.6], tone: "ink" },
              { from: [0, -2.6], to: [2.6, -2.6], tone: "ink" },
              { from: [2.6, -2.6], to: [2.6, 0], tone: "ink" },
              { from: [-0.8, 2.47], to: [0, -2.6], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "ne" },
              { x: 2.6, y: 0, text: "B", pos: "e" },
              { x: 3.4, y: 2.47, text: "C", pos: "e" },
              { x: 1.3, y: 4, text: "D", pos: "n" },
              { x: -0.8, y: 2.47, text: "E", pos: "w" },
              { x: 2.6, y: -2.6, text: "F", pos: "se" },
              { x: 0, y: -2.6, text: "G", pos: "sw" },
            ],
            alt: "A regular pentagon ABCDE sits above the side AB, and a square ABFG is drawn below AB. The line EG is drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the size of an interior angle of a regular pentagon.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle EAG$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle AEG$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find $\angle DEG$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$ABCDEFGH$ is a regular octagon. The diagonal $AC$ is drawn, and the sides $AB$ and $DC$ are produced to meet at $P$.`,
          figure: {
            type: "plot",
            x: [-4.12, 4.12],
            y: [-3.77, 2.81],
            equal: true,
            axes: false,
            segments: [
              { from: [-2.31, -0.96], to: [-0.96, -2.31], tone: "ink" },
              { from: [-0.96, -2.31], to: [0.96, -2.31], tone: "ink" },
              { from: [0.96, -2.31], to: [2.31, -0.96], tone: "ink" },
              { from: [2.31, -0.96], to: [2.31, 0.96], tone: "ink" },
              { from: [2.31, 0.96], to: [0.96, 2.31], tone: "ink" },
              { from: [0.96, 2.31], to: [-0.96, 2.31], tone: "ink" },
              { from: [-0.96, 2.31], to: [-2.31, 0.96], tone: "ink" },
              { from: [-2.31, 0.96], to: [-2.31, -0.96], tone: "ink" },
              { from: [-0.96, -2.31], to: [0, -3.27], dashed: true, tone: "muted" },
              { from: [0.96, -2.31], to: [0, -3.27], dashed: true, tone: "muted" },
              { from: [-2.31, -0.96], to: [0.96, -2.31], tone: "ink" },
            ],
            labels: [
              { x: -2.31, y: -0.96, text: "A", pos: "w" },
              { x: -0.96, y: -2.31, text: "B", pos: "s" },
              { x: 0.96, y: -2.31, text: "C", pos: "se" },
              { x: 2.31, y: -0.96, text: "D", pos: "e" },
              { x: 2.31, y: 0.96, text: "E", pos: "ne" },
              { x: 0.96, y: 2.31, text: "F", pos: "n" },
              { x: -0.96, y: 2.31, text: "G", pos: "nw" },
              { x: -2.31, y: 0.96, text: "H", pos: "nw" },
              { x: 0, y: -3.27, text: "P", pos: "se" },
            ],
            alt: "A regular octagon ABCDEFGH. The diagonal AC is drawn. AB and DC are produced to meet at P outside the octagon.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle ABC$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle BAC$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle BPC$.`, marks: 2 },
            { label: "(d)", text: String.raw`Write down the order of rotational symmetry of the octagon.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-construction",
      name: String.raw`Constructing triangles and quadrilaterals`,
      tests: String.raw`Accurate construction from given sides and angles with ruler, compasses and protractor, then measuring a length or angle. Arcs must be left visible.`,
      questions: [
        {
          stem: String.raw`Triangle $ABC$ has $AB = 9$ cm, $BC = 7$ cm and $\angle ABC = 65^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Using ruler, compasses and protractor, construct triangle $ABC$, starting with the side $AB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Measure and write down the length of $AC$.`, marks: 1 },
            { label: "(c)", text: String.raw`Measure and write down $\angle BAC$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Quadrilateral $PQRS$ has $PQ = 8$ cm, $PS = 5.5$ cm, $QR = 6$ cm, $\angle SPQ = 75^\circ$ and $\angle PQR = 100^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Using ruler, compasses and protractor, construct quadrilateral $PQRS$, starting with the side $PQ$.`, marks: 3 },
            { label: "(b)", text: String.raw`Measure and write down the length of $RS$.`, marks: 1 },
            { label: "(c)", text: String.raw`Measure and write down reflex $\angle PSR$.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
