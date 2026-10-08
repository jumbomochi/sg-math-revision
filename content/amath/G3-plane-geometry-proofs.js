H2.addTopic({
  id: "G3",
  title: "Proofs in Plane Geometry",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Writing clear geometric proofs using parallel lines, triangles, quadrilaterals, circles, congruent and similar triangles, the midpoint theorem and the alternate segment theorem.`,
  syllabus: {
    include: [
      String.raw`use of properties of parallel lines cut by a transversal, perpendicular and angle bisectors, triangles, special quadrilaterals and circles (properties learnt in G3 Mathematics)`,
      String.raw`use of congruent and similar triangles (properties learnt in G3 Mathematics)`,
      String.raw`use of the midpoint theorem`,
      String.raw`use of the tangent-chord theorem (alternate segment theorem)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`How to write a proof`,
      body: String.raw`A proof is a chain of statements, **each with a reason** in brackets. Marks are lost for missing reasons, not just wrong ones.

- Start from what is given; mark it on the diagram. Work backwards from what you must prove ("to show $AB = AC$, I need two equal angles…").
- One fact per line, e.g. $\angle ABD = \angle ACD$ (∠s in same segment).
- Name angles with three letters ($\angle ABC$), never a single letter when several angles meet at a point.
- Use accepted short reasons: *alt. ∠s*, *corr. ∠s*, *int. ∠s* (co-interior), *vert. opp. ∠s*, *adj. ∠s on a str. line*, *∠ sum of △*, *ext. ∠ of △*, *base ∠s of isos. △*, *∠ at centre = 2∠ at circumference*, *∠s in same segment*, *∠ in semicircle*, *opp. ∠s of cyclic quad.*, *tan. ⊥ rad.*, *tangents from ext. point*, *∠s in alt. segment*.
- Do not use what you are asked to prove, and do not assume anything from the look of the diagram (it may not be to scale).
- End with a clear conclusion that repeats the statement, e.g. "Hence triangle $ABC$ is isosceles."`,
    },
    {
      title: String.raw`Parallel lines and angles`,
      body: String.raw`When a transversal cuts two **parallel** lines:

- alternate angles are equal (alt. ∠s) — the "Z" shape;
- corresponding angles are equal (corr. ∠s) — the "F" shape;
- interior angles add up to $180^\circ$ (int. ∠s) — the "C" shape.

The **converses** prove lines are parallel: if a pair of alternate (or corresponding) angles are equal, the lines are parallel.

Other basic facts: vertically opposite angles are equal; angles on a straight line add to $180^\circ$; the exterior angle of a triangle equals the sum of the two interior opposite angles; base angles of an isosceles triangle are equal, and conversely.`,
      figure: {
        type: "plot",
        x: [-0.4, 8.0], y: [-1.2, 3.4], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [7.6, 0], tone: "ink" },
          { from: [0, 2], to: [7.6, 2], tone: "ink" },
          { from: [1.6, -1.0], to: [5.6, 3.0], tone: "accent" },
          { from: [6.4, 0], to: [6.75, 0], arrow: true, tone: "ink" },
          { from: [6.4, 2], to: [6.75, 2], arrow: true, tone: "ink" },
        ],
        angles: [
          { at: [2.6, 0], from: [7.6, 0], to: [5.6, 3.0], r: 0.55, label: "a" },
          { at: [4.6, 2], from: [7.6, 2], to: [5.6, 3.0], r: 0.55, label: "a" },
          { at: [4.6, 2], from: [0, 2], to: [1.6, -1.0], r: 0.55, label: "a" },
          { at: [4.6, 2], from: [1.6, -1.0], to: [7.6, 2], r: 0.8, label: "b" },
        ],
        points: [
          { x: 2.6, y: 0, label: "P", pos: "se" },
          { x: 4.6, y: 2, label: "Q", pos: "nw" },
        ],
        caption: String.raw`Alternate angles (both $a$, at $P$ and below-left at $Q$), corresponding angles (both $a$, above-right of each line), and interior angles $a + b = 180^\circ$.`,
        alt: "Two horizontal parallel lines cut by a slanting transversal at P (lower) and Q (upper). The angle a at P equals the corresponding angle a at Q above the upper line and the alternate angle a at Q below the upper line. The interior angle b at Q satisfies a + b = 180 degrees.",
      },
    },
    {
      title: String.raw`Perpendicular bisectors and angle bisectors`,
      body: String.raw`- Any point on the **perpendicular bisector** of $AB$ is equidistant from $A$ and $B$; conversely, a point equidistant from $A$ and $B$ lies on it.
- Any point on the **bisector of an angle** is equidistant from the two arms (perpendicular distances); conversely, a point equidistant from the arms lies on the bisector.
- To prove either fact in a question, use congruent triangles (SAS for the perpendicular bisector, AAS for the angle bisector) — do not just quote the result unless the question allows it.`,
      figure: [
        {
          type: "plot",
          x: [-0.2, 8.2], y: [-0.6, 6.0], equal: true, axes: false,
          segments: [
            { from: [1, 1], to: [7, 4], tone: "ink" },
            { from: [2.6, 5.3], to: [5.4, -0.3], tone: "accent" },
            { from: [3, 4.5], to: [1, 1], dashed: true, thin: true, tone: "muted" },
            { from: [3, 4.5], to: [7, 4], dashed: true, thin: true, tone: "muted" },
          ],
          rightAngles: [{ at: [4, 2.5], a: [2, 1], b: [-1, 2], size: 0.3 }],
          points: [
            { x: 1, y: 1, label: "A", pos: "sw" },
            { x: 7, y: 4, label: "B", pos: "e" },
            { x: 4, y: 2.5, label: "M", pos: "se" },
            { x: 3, y: 4.5, label: "P", pos: "w" },
          ],
          caption: String.raw`$PA = PB$`,
          alt: "Segment AB with its perpendicular bisector through the midpoint M. A point P on the bisector is joined to A and B by equal dashed lines.",
        },
        {
          type: "plot",
          x: [-0.6, 5.6], y: [-0.8, 4.4], equal: true, axes: false,
          segments: [
            { from: [0, 0], to: [5.2, 0], tone: "ink" },
            { from: [0, 0], to: [3.214, 3.83], tone: "ink" },
            { from: [0, 0], to: [4.35, 2.028], tone: "accent", dashed: true },
            { from: [3.263, 1.521], to: [3.263, 0], tone: "good" },
            { from: [3.263, 1.521], to: [2.097, 2.499], tone: "good" },
          ],
          rightAngles: [
            { at: [3.263, 0], a: [-1, 0], b: [0, 1], size: 0.22 },
            { at: [2.097, 2.499], a: [-0.643, -0.766], b: [1.166, -0.978], size: 0.22 },
          ],
          angles: [
            { at: [0, 0], from: [5.2, 0], to: [4.35, 2.028], r: 1.1 },
            { at: [0, 0], from: [4.35, 2.028], to: [3.214, 3.83], r: 1.25 },
          ],
          points: [
            { x: 0, y: 0, label: "V", pos: "w" },
            { x: 3.263, y: 1.521, label: "P", pos: "e" },
          ],
          caption: String.raw`$P$ on the bisector of $\angle V$: equal distances to both arms`,
          alt: "An angle at vertex V with its bisector drawn dashed. From a point P on the bisector, perpendiculars of equal length are drawn to the two arms.",
        },
      ],
    },
    {
      title: String.raw`Congruent triangles`,
      body: String.raw`Two triangles are **congruent** (identical in shape and size) if one of these holds:

| Test | What you need |
| --- | --- |
| SSS | three pairs of equal sides |
| SAS | two pairs of sides and the **included** angle |
| ASA / AAS | two pairs of angles and one pair of **corresponding** sides |
| RHS | right angle, hypotenuse and one other side |

- SSA (angle not between the sides) and AAA are **not** tests for congruence.
- Write the vertices in **corresponding order**: $\triangle ABC \equiv \triangle PQR$ means $A \leftrightarrow P$, $B \leftrightarrow Q$, $C \leftrightarrow R$.
- Set out three lines, each with a reason, then state the test. After proving congruence, the other sides and angles are equal ("corresponding parts of congruent triangles") — this is how you then prove lengths or angles equal, or lines perpendicular or parallel.`,
      figure: {
        type: "plot",
        x: [-0.5, 8.3], y: [-0.6, 2.8], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [3.2, 0], [1, 2.2]], tone: "accent" },
          { points: [[7.8, 0], [4.6, 0], [6.8, 2.2]], tone: "good" },
        ],
        angles: [
          { at: [0, 0], from: [3.2, 0], to: [1, 2.2], r: 0.45 },
          { at: [7.8, 0], from: [6.8, 2.2], to: [4.6, 0], r: 0.45 },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 3.2, y: 0, text: "B", pos: "se" },
          { x: 1, y: 2.2, text: "C", pos: "n" },
          { x: 7.8, y: 0, text: "P", pos: "se" },
          { x: 4.6, y: 0, text: "Q", pos: "sw" },
          { x: 6.8, y: 2.2, text: "R", pos: "n" },
          { x: 1.6, y: 0, text: "5", pos: "s", style: "small" },
          { x: 0.5, y: 1.1, text: "4", pos: "w", style: "small" },
          { x: 6.2, y: 0, text: "5", pos: "s", style: "small" },
          { x: 7.3, y: 1.1, text: "4", pos: "e", style: "small" },
        ],
        caption: String.raw`SAS: $AB = PQ$, $AC = PR$ and the included angles at $A$ and $P$ are equal, so $\triangle ABC \equiv \triangle PQR$.`,
        alt: "Two congruent triangles ABC and PQR, the second a mirror image of the first. Sides AB and PQ are both 5, sides AC and PR are both 4, and the included angles at A and P are marked equal.",
      },
    },
    {
      title: String.raw`Similar triangles`,
      body: String.raw`Two triangles are **similar** (same shape) if:

- **AA**: two pairs of equal angles; or
- **SSS**: all three pairs of sides in the same ratio; or
- **SAS**: two pairs of sides in the same ratio and the included angles equal.

Then corresponding sides are in proportion: if $\triangle ADE \sim \triangle ABC$, then $\dfrac{AD}{AB} = \dfrac{AE}{AC} = \dfrac{DE}{BC}$.

- "Show that $AB \times CD = \ldots$" or "$AB^2 = \ldots$" almost always means: find two similar triangles containing these lengths, write the ratio, then cross-multiply.
- Match vertices by their equal angles, not by their position on the page. A common angle (shared by both triangles) is a typical second pair.`,
      figure: {
        type: "plot",
        x: [-0.6, 6.6], y: [-0.6, 4.6], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [6, 0], [2, 4]], tone: "accent" }],
        segments: [{ from: [1.2, 2.4], to: [3.6, 2.4], tone: "good" }],
        angles: [
          { at: [0, 0], from: [6, 0], to: [2, 4], r: 0.5 },
          { at: [1.2, 2.4], from: [3.6, 2.4], to: [2, 4], r: 0.45 },
        ],
        labels: [
          { x: 2, y: 4, text: "A", pos: "n" },
          { x: 0, y: 0, text: "B", pos: "sw" },
          { x: 6, y: 0, text: "C", pos: "se" },
          { x: 1.2, y: 2.4, text: "D", pos: "w" },
          { x: 3.6, y: 2.4, text: "E", pos: "e" },
        ],
        caption: String.raw`$DE \parallel BC$: $\angle ADE = \angle ABC$ (corr. ∠s) and $\angle A$ is common, so $\triangle ADE \sim \triangle ABC$ (AA).`,
        alt: "Triangle ABC with a line DE parallel to BC cutting AB at D and AC at E. The corresponding angles at D and B are marked equal.",
      },
    },
    {
      title: String.raw`Midpoint theorem`,
      body: String.raw`If $M$ and $N$ are the midpoints of $AB$ and $AC$ in triangle $ABC$, then
$$MN \parallel BC \quad\text{and}\quad MN = \tfrac12 BC.$$

- Quote it as "(midpoint theorem)". It gives **both** a parallel and a length — use both.
- Typical use in a quadrilateral: draw a diagonal to split it into two triangles and apply the theorem in each. Two segments that are each parallel to the same line are parallel to each other.
- The converse is also useful: a line through the midpoint of one side, parallel to a second side, bisects the third side.`,
      figure: {
        type: "plot",
        x: [-0.6, 6.6], y: [-0.6, 4.6], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [6, 0], [1.8, 4]], tone: "accent" }],
        segments: [{ from: [0.9, 2], to: [3.9, 2], tone: "good" }],
        points: [
          { x: 0.9, y: 2, label: "M", pos: "w" },
          { x: 3.9, y: 2, label: "N", pos: "e" },
        ],
        labels: [
          { x: 1.8, y: 4, text: "A", pos: "n" },
          { x: 0, y: 0, text: "B", pos: "sw" },
          { x: 6, y: 0, text: "C", pos: "se" },
        ],
        caption: String.raw`$AM = MB$, $AN = NC$ $\Rightarrow$ $MN \parallel BC$, $MN = \frac12 BC$.`,
        alt: "Triangle ABC with M the midpoint of AB and N the midpoint of AC. The segment MN is parallel to BC and half its length.",
      },
    },
    {
      title: String.raw`Special quadrilaterals`,
      body: String.raw`| Quadrilateral | Key properties |
| --- | --- |
| Parallelogram | opposite sides parallel and equal; opposite angles equal; diagonals bisect each other |
| Rectangle | parallelogram with all angles $90^\circ$; diagonals equal |
| Rhombus | parallelogram with all sides equal; diagonals bisect each other at right angles and bisect the angles |
| Square | rectangle and rhombus |
| Kite | two pairs of adjacent equal sides; one diagonal is the perpendicular bisector of the other |
| Trapezium | exactly one pair of parallel sides |

To **prove** a quadrilateral is a parallelogram, show one of: both pairs of opposite sides parallel; both pairs of opposite sides equal; **one pair of opposite sides equal and parallel**; diagonals bisect each other. Then a parallelogram with two adjacent sides equal is a rhombus; with one right angle it is a rectangle.`,
    },
    {
      title: String.raw`Circle properties`,
      body: String.raw`From E-Math (quote these as reasons):

1. Angle at the centre $= 2 \times$ angle at the circumference (subtended by the same arc).
2. Angles in the same segment are equal.
3. Angle in a semicircle $= 90^\circ$.
4. Opposite angles of a cyclic quadrilateral add to $180^\circ$; an exterior angle equals the interior opposite angle.
5. Tangent $\perp$ radius at the point of contact.
6. Two tangents from an external point are equal in length, and the line to the centre bisects the angle between them.
7. The perpendicular from the centre to a chord bisects the chord; equal chords are equidistant from the centre and subtend equal angles.

To prove four points are **concyclic** (lie on a circle), show that opposite angles of the quadrilateral add to $180^\circ$, or that an exterior angle equals the interior opposite angle, or that two angles on the same side of a segment are equal.`,
      figure: [
        {
          type: "plot",
          x: [-2.5, 2.5], y: [-2.5, 2.6], equal: true, axes: false,
          circles: [{ c: [0, 0], r: 2, tone: "muted" }],
          polygons: [{ points: [[-1.732, -1], [0, 0], [1.732, -1]], tone: "accent" }],
          segments: [
            { from: [0, 2], to: [-1.732, -1], tone: "good" },
            { from: [0, 2], to: [1.732, -1], tone: "good" },
          ],
          angles: [
            { at: [0, 0], from: [-1.732, -1], to: [1.732, -1], r: 0.38, label: "2x" },
            { at: [0, 2], from: [-1.732, -1], to: [1.732, -1], r: 0.55, label: "x" },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "n" },
            { x: -1.732, y: -1, text: "A", pos: "sw" },
            { x: 1.732, y: -1, text: "B", pos: "se" },
            { x: 0, y: 2, text: "P", pos: "n" },
          ],
          caption: String.raw`$\angle AOB = 2\angle APB$`,
          alt: "A circle with centre O and points A, B and P on it. The angle AOB at the centre is 2x and the angle APB at the circumference is x.",
        },
        {
          type: "plot",
          x: [-2.5, 2.5], y: [-2.5, 2.6], equal: true, axes: false,
          circles: [{ c: [0, 0], r: 2, tone: "muted" }],
          polygons: [{ points: [[-0.347, 1.97], [-1.879, -0.684], [0.684, -1.879], [1.97, -0.347]], tone: "accent" }],
          angles: [
            { at: [-0.347, 1.97], from: [-1.879, -0.684], to: [1.97, -0.347], r: 0.5, label: "x" },
            { at: [0.684, -1.879], from: [1.97, -0.347], to: [-1.879, -0.684], r: 0.42, label: "180° − x" },
          ],
          labels: [
            { x: -0.347, y: 1.97, text: "A", pos: "n" },
            { x: -1.879, y: -0.684, text: "B", pos: "w" },
            { x: 0.684, y: -1.879, text: "C", pos: "s" },
            { x: 1.97, y: -0.347, text: "D", pos: "e" },
          ],
          caption: String.raw`Cyclic quadrilateral: $\angle A + \angle C = 180^\circ$`,
          alt: "A cyclic quadrilateral ABCD inscribed in a circle. The angle at A is x and the opposite angle at C is 180 degrees minus x.",
        },
      ],
    },
    {
      title: String.raw`Tangent-chord (alternate segment) theorem`,
      body: String.raw`The angle between a tangent and a chord through the point of contact equals the angle in the **alternate segment** (the angle subtended by the chord at any point on the other side of the chord).

- Reason to quote: "(∠s in alt. segment)" or "(tangent-chord theorem)".
- Find it by looking for a tangent and a chord **meeting at the point of contact**; the equal angle is at the circumference on the far side of that chord.
- A classic consequence (tangent-secant): if $PX$ is a tangent at $X$ and $PYZ$ is a line cutting the circle at $Y$ and $Z$, then $\triangle PXY \sim \triangle PZX$, so $PX^2 = PY \times PZ$.
- Converse: if the angle between a line through $A$ and the chord $AB$ equals the angle in the alternate segment, the line is a tangent at $A$.`,
      figure: {
        type: "plot",
        x: [-3.4, 3.6], y: [-2.6, 2.4], equal: true, axes: false,
        circles: [{ c: [0, 0], r: 2, tone: "muted" }],
        segments: [
          { from: [-3.2, -2], to: [3.4, -2], tone: "good" },
          { from: [0, -2], to: [1.879, -0.684], tone: "ink" },
          { from: [0, -2], to: [-1.286, 1.532], tone: "ink" },
          { from: [-1.286, 1.532], to: [1.879, -0.684], tone: "ink" },
        ],
        angles: [
          { at: [0, -2], from: [3.4, -2], to: [1.879, -0.684], r: 0.7, label: "x" },
          { at: [-1.286, 1.532], from: [0, -2], to: [1.879, -0.684], r: 0.7, label: "x" },
        ],
        labels: [
          { x: 0, y: -2, text: "A", pos: "s" },
          { x: 1.879, y: -0.684, text: "B", pos: "e" },
          { x: -1.286, y: 1.532, text: "C", pos: "nw" },
          { x: 3.2, y: -2, text: "T", pos: "n" },
        ],
        caption: String.raw`$\angle TAB = \angle ACB$: the tangent-chord angle equals the angle in the alternate segment.`,
        alt: "A circle with tangent AT at the point A at the bottom. Chord AB goes up to the right, and C is a point on the far side of the circle. The angle TAB between the tangent and the chord equals the angle ACB at C, both marked x.",
      },
    },
  ],
  archetypes: [
    {
      id: "G3-parallel-lines-isosceles",
      name: String.raw`Parallel lines, angle bisectors and isosceles triangles`,
      tests: String.raw`Combining alternate or corresponding angles with a given angle bisector to show two angles are equal, and hence that a triangle is isosceles or a quadrilateral is a rhombus.`,
      questions: [
        {
          stem: String.raw`In the diagram, the bisector of angle $ABC$ meets $AC$ at $D$. The line through $D$ parallel to $BC$ meets $AB$ at $E$, and the line through $D$ parallel to $AB$ meets $BC$ at $F$.`,
          figure: {
            type: "plot",
            x: [-0.6, 6.6], y: [-0.6, 4.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [6, 0], [1.5, 4]], tone: "accent" }],
            segments: [
              { from: [0, 0], to: [3.371, 2.336], tone: "ink" },
              { from: [0.876, 2.336], to: [3.371, 2.336], tone: "good" },
              { from: [3.371, 2.336], to: [2.495, 0], tone: "good" },
            ],
            labels: [
              { x: 1.5, y: 4, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 3.371, y: 2.336, text: "D", pos: "ne" },
              { x: 0.876, y: 2.336, text: "E", pos: "w" },
              { x: 2.495, y: 0, text: "F", pos: "s" },
            ],
            alt: "Triangle ABC with the bisector of angle B meeting AC at D. ED is parallel to BC with E on AB, and DF is parallel to AB with F on BC.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangle $BED$ is isosceles.`, marks: 3 },
            { label: "(ii)", text: String.raw`Prove that $BEDF$ is a rhombus.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G3-congruent-triangles",
      name: String.raw`Proving congruence, then using it`,
      tests: String.raw`Choosing the right congruence test (SSS, SAS, ASA/AAS, RHS) with reasons for each pair, then using corresponding parts to prove equal lengths, an isosceles triangle or perpendicular lines.`,
      questions: [
        {
          stem: String.raw`$ABCD$ is a square. The points $E$ on $BC$ and $F$ on $CD$ are such that $BE = CF$. The lines $AE$ and $BF$ meet at $G$.`,
          figure: {
            type: "plot",
            x: [-0.7, 4.7], y: [-0.6, 4.6], equal: true, axes: false,
            polygons: [{ points: [[0, 4], [0, 0], [4, 0], [4, 4]], tone: "accent" }],
            segments: [
              { from: [0, 4], to: [1.5, 0], tone: "ink" },
              { from: [0, 0], to: [4, 1.5], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 4, text: "A", pos: "nw" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 4, y: 0, text: "C", pos: "se" },
              { x: 4, y: 4, text: "D", pos: "ne" },
              { x: 1.5, y: 0, text: "E", pos: "s" },
              { x: 4, y: 1.5, text: "F", pos: "e" },
              { x: 1.47, y: 0.86, text: "G", pos: "c" },
            ],
            alt: "Square ABCD with A top-left, B bottom-left, C bottom-right and D top-right. E is on BC near B and F is on CD near C. AE and BF cross at G.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $ABE$ and $BCF$ are congruent.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence prove that $AE$ is perpendicular to $BF$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`In the diagram, $AB = AC$ and the points $D$ and $E$ lie on $BC$ such that $BD = CE$.`,
          figure: {
            type: "plot",
            x: [-0.6, 6.6], y: [-0.6, 4.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [6, 0], [3, 4]], tone: "accent" }],
            segments: [
              { from: [3, 4], to: [1.5, 0], tone: "ink" },
              { from: [3, 4], to: [4.5, 0], tone: "ink" },
            ],
            labels: [
              { x: 3, y: 4, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 1.5, y: 0, text: "D", pos: "s" },
              { x: 4.5, y: 0, text: "E", pos: "s" },
            ],
            alt: "Isosceles triangle ABC with apex A. Points D and E on the base BC, with BD equal to CE, are joined to A.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $ABD$ and $ACE$ are congruent.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that triangle $ADE$ is isosceles.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-similar-triangles",
      name: String.raw`Similar triangles and products of lengths`,
      tests: String.raw`Proving two triangles similar (usually AA, using circle angles or a common angle), then writing the ratio of corresponding sides to show a result such as $AX \times XB = CX \times XD$ or $AB^2 = BD \times BC$.`,
      questions: [
        {
          stem: String.raw`$A$, $B$, $C$ and $D$ are points on a circle. The chords $AB$ and $CD$ intersect at $X$.`,
          figure: {
            type: "plot",
            x: [-2.9, 2.9], y: [-2.8, 2.9], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 2.5, tone: "muted" }],
            segments: [
              { from: [-2.165, 1.25], to: [2.349, -0.855], tone: "ink" },
              { from: [0.434, 2.462], to: [-1.915, -1.607], tone: "ink" },
              { from: [-2.165, 1.25], to: [0.434, 2.462], tone: "accent" },
              { from: [-1.915, -1.607], to: [2.349, -0.855], tone: "accent" },
            ],
            labels: [
              { x: -2.165, y: 1.25, text: "A", pos: "w" },
              { x: 2.349, y: -0.855, text: "B", pos: "e" },
              { x: 0.434, y: 2.462, text: "C", pos: "n" },
              { x: -1.915, y: -1.607, text: "D", pos: "sw" },
              { x: -0.669, y: 0.552, text: "X", pos: "e" },
            ],
            alt: "A circle with chords AB and CD crossing at X inside the circle. The chords AC and DB are also drawn, forming triangles AXC and DXB.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $AXC$ and $DXB$ are similar.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $AX \times XB = CX \times XD$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In the diagram, angle $BAC = 90^\circ$ and $D$ is the point on $BC$ such that $AD$ is perpendicular to $BC$.`,
          figure: {
            type: "plot",
            x: [-0.7, 9.7], y: [-0.7, 5.1], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [9, 0], [4, 4.472]], tone: "accent" }],
            segments: [{ from: [4, 4.472], to: [4, 0], tone: "ink" }],
            rightAngles: [
              { at: [4, 0], a: [1, 0], b: [0, 1], size: 0.35 },
              { at: [4, 4.472], a: [-4, -4.472], b: [5, -4.472], size: 0.35 },
            ],
            labels: [
              { x: 4, y: 4.472, text: "A", pos: "n" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 9, y: 0, text: "C", pos: "se" },
              { x: 4, y: 0, text: "D", pos: "s" },
            ],
            alt: "Right-angled triangle ABC with the right angle at A. The perpendicular from A meets the hypotenuse BC at D.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangle $ABD$ is similar to triangle $CBA$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $AB^2 = BD \times BC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Given that $BD = 4$ cm and $DC = 5$ cm, find the length of $AB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-midpoint-theorem",
      name: String.raw`Midpoint theorem`,
      tests: String.raw`Applying the midpoint theorem (twice, to two triangles sharing a diagonal) to prove that segments are parallel and equal, typically that the midpoints of a quadrilateral's sides form a parallelogram or rhombus.`,
      questions: [
        {
          stem: String.raw`$ABCD$ is a quadrilateral. $P$, $Q$, $R$ and $S$ are the midpoints of $AB$, $BC$, $CD$ and $DA$ respectively.`,
          figure: {
            type: "plot",
            x: [-0.7, 7.7], y: [-1.1, 5.6], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [6, -0.5], [7, 4], [1.5, 5]], tone: "accent" },
              { points: [[3, -0.25], [6.5, 1.75], [4.25, 4.5], [0.75, 2.5]], tone: "good" },
            ],
            segments: [{ from: [0, 0], to: [7, 4], dashed: true, thin: true, tone: "muted" }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 6, y: -0.5, text: "B", pos: "se" },
              { x: 7, y: 4, text: "C", pos: "ne" },
              { x: 1.5, y: 5, text: "D", pos: "nw" },
              { x: 3, y: -0.25, text: "P", pos: "s" },
              { x: 6.5, y: 1.75, text: "Q", pos: "e" },
              { x: 4.25, y: 4.5, text: "R", pos: "n" },
              { x: 0.75, y: 2.5, text: "S", pos: "w" },
            ],
            alt: "A general quadrilateral ABCD with the midpoints P, Q, R, S of its sides joined to form an inner quadrilateral PQRS. The diagonal AC is drawn dashed.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that $PQRS$ is a parallelogram.`, marks: 4 },
            { label: "(ii)", text: String.raw`Given further that $AC = BD$, prove that $PQRS$ is a rhombus.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-circle-properties",
      name: String.raw`Proofs with circle properties and cyclic quadrilaterals`,
      tests: String.raw`Using angles in the same segment, angles at the centre and cyclic quadrilateral properties (with full reasons) to prove angle bisectors, equal angles or similar triangles formed by chords produced outside the circle.`,
      questions: [
        {
          stem: String.raw`$A$, $B$, $C$ and $D$ are points on a circle such that $AB = AD$. The diagonals $AC$ and $BD$ of the quadrilateral $ABCD$ are drawn. Prove that $AC$ bisects angle $BCD$.`,
          marks: 4,
          figure: {
            type: "plot",
            x: [-2.9, 2.9], y: [-2.9, 3.0], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 2.5, tone: "muted" }],
            polygons: [{ points: [[0, 2.5], [2.349, 0.855], [-0.434, -2.462], [-2.349, 0.855]], tone: "accent" }],
            segments: [
              { from: [0, 2.5], to: [-0.434, -2.462], tone: "ink" },
              { from: [2.349, 0.855], to: [-2.349, 0.855], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 2.5, text: "A", pos: "n" },
              { x: 2.349, y: 0.855, text: "B", pos: "e" },
              { x: -0.434, y: -2.462, text: "C", pos: "s" },
              { x: -2.349, y: 0.855, text: "D", pos: "w" },
            ],
            alt: "Cyclic quadrilateral ABCD with A at the top, B on the right, C at the bottom and D on the left, with AB equal to AD. The diagonals AC and BD are drawn.",
          },
        },
        {
          stem: String.raw`$ABCD$ is a cyclic quadrilateral. The sides $AB$ and $DC$ are produced to meet at $E$.`,
          figure: {
            type: "plot",
            x: [-2.9, 3.0], y: [-2.9, 5.2], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 2.5, tone: "muted" }],
            polygons: [{ points: [[-2.266, -1.057], [-0.855, 2.349], [1.057, 2.266], [2.349, -0.855]], tone: "accent" }],
            segments: [
              { from: [-0.855, 2.349], to: [0.083, 4.615], tone: "ink" },
              { from: [1.057, 2.266], to: [0.083, 4.615], tone: "ink" },
            ],
            labels: [
              { x: -2.266, y: -1.057, text: "A", pos: "sw" },
              { x: -0.855, y: 2.349, text: "B", pos: "w" },
              { x: 1.057, y: 2.266, text: "C", pos: "e" },
              { x: 2.349, y: -0.855, text: "D", pos: "se" },
              { x: 0.083, y: 4.615, text: "E", pos: "n" },
            ],
            alt: "Cyclic quadrilateral ABCD with AB and DC extended beyond B and C to meet at a point E outside the circle.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $EBC$ and $EDA$ are similar.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $EB \times EA = EC \times ED$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-alternate-segment",
      name: String.raw`Alternate segment theorem`,
      tests: String.raw`Spotting a tangent and a chord meeting at the point of contact, using the alternate segment theorem to get equal angles, then proving similar triangles (tangent-secant result) or that four points are concyclic.`,
      questions: [
        {
          stem: String.raw`In the diagram, $TA$ is a tangent to the circle at $A$. The line $TBC$ cuts the circle at $B$ and $C$.`,
          figure: {
            type: "plot",
            x: [-2.5, 5.6], y: [-2.4, 2.5], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 2, tone: "muted" }],
            segments: [
              { from: [5, 0], to: [0.8, 1.833], tone: "good" },
              { from: [5, 0], to: [-1.813, -0.845], tone: "ink" },
              { from: [0.8, 1.833], to: [1.964, -0.377], tone: "accent" },
              { from: [0.8, 1.833], to: [-1.813, -0.845], tone: "accent" },
            ],
            labels: [
              { x: 5, y: 0, text: "T", pos: "e" },
              { x: 0.8, y: 1.833, text: "A", pos: "n" },
              { x: 1.964, y: -0.377, text: "B", pos: "s" },
              { x: -1.813, y: -0.845, text: "C", pos: "w" },
            ],
            alt: "A circle with an external point T. TA touches the circle at A. A line from T cuts the circle first at B and then at C. Chords AB and AC are drawn.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $TAB$ and $TCA$ are similar.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $TA^2 = TB \times TC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Given that $TB = 4$ cm and $BC = 5$ cm, find the length of $TA$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The triangle $ABC$ is inscribed in a circle. $SAT$ is the tangent to the circle at $A$. The points $D$ on $AB$ and $E$ on $AC$ are such that $DE$ is parallel to $SAT$.`,
          figure: {
            type: "plot",
            x: [-3.0, 3.0], y: [-1.9, 2.6], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 2, tone: "muted" }],
            polygons: [{ points: [[0, 2], [-1.732, -1], [1.813, -0.845]], tone: "accent" }],
            segments: [
              { from: [-2.6, 2], to: [2.6, 2], tone: "good" },
              { from: [-0.635, 0.9], to: [0.701, 0.9], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 2, text: "A", pos: "n" },
              { x: -1.732, y: -1, text: "B", pos: "sw" },
              { x: 1.813, y: -0.845, text: "C", pos: "se" },
              { x: -0.635, y: 0.9, text: "D", pos: "w" },
              { x: 0.701, y: 0.9, text: "E", pos: "e" },
              { x: -2.5, y: 2, text: "S", pos: "n" },
              { x: 2.5, y: 2, text: "T", pos: "n" },
            ],
            alt: "Triangle ABC inscribed in a circle with A at the top. The tangent SAT at A is horizontal. A segment DE, with D on AB and E on AC, is drawn parallel to the tangent.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that angle $ADE$ = angle $ACB$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence prove that the points $B$, $C$, $E$ and $D$ lie on a circle.`, marks: 2 },
            { label: "(iii)", text: String.raw`Prove that triangle $ADE$ is similar to triangle $ACB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-tangent-proofs",
      name: String.raw`Tangents from an external point; proving a line is a tangent`,
      tests: String.raw`Using "tangent $\perp$ radius" and equal tangents with congruent triangles, or showing a line is a tangent through the converse of the alternate segment theorem after proving similar triangles.`,
      questions: [
        {
          stem: String.raw`$PA$ and $PB$ are tangents from the point $P$ to a circle with centre $O$. The chord $AB$ meets $OP$ at $M$.`,
          figure: {
            type: "plot",
            x: [-2.2, 5.4], y: [-2.2, 2.2], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 1.8, tone: "muted" }],
            segments: [
              { from: [5, 0], to: [0.648, 1.679], tone: "good" },
              { from: [5, 0], to: [0.648, -1.679], tone: "good" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [0.648, 1.679], to: [0.648, -1.679], tone: "ink" },
              { from: [0, 0], to: [0.648, 1.679], tone: "muted" },
              { from: [0, 0], to: [0.648, -1.679], tone: "muted" },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "w" },
              { x: 5, y: 0, text: "P", pos: "e" },
              { x: 0.648, y: 1.679, text: "A", pos: "n" },
              { x: 0.648, y: -1.679, text: "B", pos: "s" },
              { x: 0.648, y: 0, text: "M", pos: "se" },
            ],
            alt: "A circle with centre O. Two tangents from an external point P touch the circle at A and B. The radii OA and OB, the chord AB and the line OP are drawn; AB meets OP at M.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $OAP$ and $OBP$ are congruent.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $OP$ bisects angle $APB$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Prove that $OP$ is perpendicular to $AB$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`In triangle $ABC$, the point $D$ lies on $BC$ such that $AB^2 = BD \times BC$.`,
          figure: {
            type: "plot",
            x: [-0.6, 6.7], y: [-1.4, 4.5], equal: true, axes: false,
            circles: [{ c: [3.75, 1.561], r: 2.739, tone: "muted", dashed: true }],
            polygons: [{ points: [[0, 0], [6, 0], [1.268, 2.719]], tone: "accent" }],
            segments: [{ from: [1.268, 2.719], to: [1.5, 0], tone: "ink" }],
            labels: [
              { x: 1.268, y: 2.719, text: "A", pos: "nw" },
              { x: 0, y: 0, text: "B", pos: "sw" },
              { x: 6, y: 0, text: "C", pos: "se" },
              { x: 1.5, y: 0, text: "D", pos: "s" },
            ],
            alt: "Triangle ABC with D on BC close to B, joined to A. A dashed circle passes through A, D and C.",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that triangles $ABD$ and $CBA$ are similar.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that angle $BAD$ = angle $ACB$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain why $AB$ is a tangent to the circle passing through $A$, $D$ and $C$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-quadrilateral-proofs",
      name: String.raw`Proving properties of quadrilaterals`,
      tests: String.raw`Using congruent triangles inside a parallelogram or kite to prove a new quadrilateral is a parallelogram, or using angle-bisector properties to prove equal lengths and a perpendicular bisector.`,
      questions: [
        {
          stem: String.raw`$ABCD$ is a parallelogram. The points $E$ and $F$ lie on the diagonal $BD$ such that $BE = DF$.`,
          figure: {
            type: "plot",
            x: [-0.6, 7.6], y: [-0.6, 4.1], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [5, 0], [7, 3.5], [2, 3.5]], tone: "accent" },
              { points: [[0, 0], [4.25, 0.875], [7, 3.5], [2.75, 2.625]], tone: "good" },
            ],
            segments: [{ from: [5, 0], to: [2, 3.5], tone: "ink", thin: true }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 5, y: 0, text: "B", pos: "se" },
              { x: 7, y: 3.5, text: "C", pos: "ne" },
              { x: 2, y: 3.5, text: "D", pos: "nw" },
              { x: 4.25, y: 0.875, text: "E", pos: "e" },
              { x: 2.75, y: 2.625, text: "F", pos: "w" },
            ],
            alt: "Parallelogram ABCD with the diagonal BD. Points E and F on BD, with E near B and F near D, are joined to A and C to form the quadrilateral AECF.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $ABE$ and $CDF$ are congruent.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence prove that $AECF$ is a parallelogram.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`In triangle $ABC$, the bisector of angle $BAC$ meets $BC$ at $D$. The points $E$ on $AB$ and $F$ on $AC$ are such that $DE$ is perpendicular to $AB$ and $DF$ is perpendicular to $AC$.`,
          figure: {
            type: "plot",
            x: [-0.6, 7.2], y: [-2.0, 3.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [6, 3], [6.5, -1.5]], tone: "accent" }],
            segments: [
              { from: [0, 0], to: [6.251, 0.744], tone: "ink" },
              { from: [6.251, 0.744], to: [5.298, 2.649], tone: "good" },
              { from: [6.251, 0.744], to: [5.772, -1.332], tone: "good" },
              { from: [5.298, 2.649], to: [5.772, -1.332], tone: "muted", dashed: true },
            ],
            rightAngles: [
              { at: [5.298, 2.649], a: [-2, -1], b: [0.953, -1.905], size: 0.25 },
              { at: [5.772, -1.332], a: [-6.5, 1.5], b: [0.479, 2.076], size: 0.25 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "w" },
              { x: 6, y: 3, text: "B", pos: "ne" },
              { x: 6.5, y: -1.5, text: "C", pos: "se" },
              { x: 6.251, y: 0.744, text: "D", pos: "e" },
              { x: 5.298, y: 2.649, text: "E", pos: "nw" },
              { x: 5.772, y: -1.332, text: "F", pos: "s" },
            ],
            alt: "Triangle ABC with A on the left. The bisector of angle A meets BC at D. Perpendiculars from D meet AB at E and AC at F; EF is drawn dashed.",
          },
          parts: [
            { label: "(i)", text: String.raw`Prove that triangles $ADE$ and $ADF$ are congruent.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $DE = DF$ and $AE = AF$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Hence prove that $AD$ is the perpendicular bisector of $EF$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
