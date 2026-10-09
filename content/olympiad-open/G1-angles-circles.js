H2.addTopic({
  id: "G1",
  title: "Angle Chasing and Circles",
  summary: String.raw`Angle chasing in triangles and polygons, inscribed angles and arcs, cyclic quadrilaterals and proving concyclicity, tangents, power of a point and the radical axis.`,
  concepts: [
    {
      title: String.raw`Angle chasing toolkit`,
      body: String.raw`- The angles of an $n$-gon add to $(n - 2) \times 180^\circ$. The **exterior angles** of a convex polygon add to $360^\circ$, so a regular $n$-gon has exterior angle $\frac{360^\circ}{n}$ and interior angle $180^\circ - \frac{360^\circ}{n}$.
- Equal sides give an **isosceles triangle** with equal base angles. An **exterior angle** of a triangle equals the sum of the two opposite interior angles.
- Call **one** unknown angle $x$, write every other angle in terms of $x$, and finish with a sum that must be $180^\circ$ or $360^\circ$.
- Triangle centres (acute triangle $ABC$): with incentre $I$, orthocentre $H$ and circumcentre $O$,
$$\angle BIC = 90^\circ + \tfrac12 \angle A, \qquad \angle BHC = 180^\circ - \angle A, \qquad \angle BOC = 2\angle A.$$
- Example: a regular hexagon has interior angle $120^\circ$; a square and an equilateral triangle meeting at a point leave $360^\circ - 90^\circ - 60^\circ = 210^\circ$ for the rest.`,
    },
    {
      title: String.raw`Inscribed angles`,
      body: String.raw`- An arc subtends at the **centre** twice the angle it subtends at any point on the rest of the circle: $\angle AOB = 2\angle APB$.
- **Angles in the same segment are equal**: if $P$ and $Q$ lie on the same arc cut off by chord $AB$, then $\angle APB = \angle AQB$.
- **Angle in a semicircle**: if $AB$ is a diameter then $\angle APB = 90^\circ$. Conversely, if $\angle APB = 90^\circ$ then $P$ lies on the circle with diameter $AB$.
- Example: if $\angle AOB = 110^\circ$, every point on the major arc sees chord $AB$ at $55^\circ$ and every point on the minor arc at $125^\circ$.`,
      figure: {
        type: "plot",
        x: [-2.5, 2.5],
        y: [-2.5, 2.5],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2, tone: "ink" },
        ],
        segments: [
          { from: [-0.939, 1.766], to: [-1.732, -1], tone: "ink" },
          { from: [-0.939, 1.766], to: [1.732, -1], tone: "ink" },
          { from: [0.939, 1.766], to: [-1.732, -1], tone: "ink" },
          { from: [0.939, 1.766], to: [1.732, -1], tone: "ink" },
          { from: [0, 0], to: [-1.732, -1], tone: "accent" },
          { from: [0, 0], to: [1.732, -1], tone: "accent" },
        ],
        angles: [
          { at: [-0.939, 1.766], from: [-1.732, -1], to: [1.732, -1], r: 0.5, label: "x" },
          { at: [0.939, 1.766], from: [-1.732, -1], to: [1.732, -1], r: 0.5, label: "x" },
          { at: [0, 0], from: [-1.732, -1], to: [1.732, -1], r: 0.45, label: "2x" },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0, y: 0, text: "O", pos: "n", style: "italic" },
          { x: -1.732, y: -1, text: "A", pos: "sw", style: "italic" },
          { x: 1.732, y: -1, text: "B", pos: "se", style: "italic" },
          { x: -0.939, y: 1.766, text: "P", pos: "nw", style: "italic" },
          { x: 0.939, y: 1.766, text: "Q", pos: "ne", style: "italic" },
        ],
        caption: String.raw`$\angle APB = \angle AQB = x$ and $\angle AOB = 2x$.`,
        alt: "Circle with centre O and chord AB near the bottom. Points P and Q on the upper arc are joined to A and B; the angles at P and Q are both marked x and the angle AOB at the centre is marked 2x.",
      },
    },
    {
      title: String.raw`Arcs measure angles`,
      body: String.raw`- Measure an arc by the angle it subtends at the centre. An inscribed angle is **half its arc**.
- In one circle: **equal chords** $\Leftrightarrow$ **equal arcs** $\Leftrightarrow$ **equal inscribed angles**. The vertices of a regular $n$-gon lie on a circle, each side cutting off an arc of $\frac{360^\circ}{n}$.
- Chords $AC$ and $BD$ crossing **inside** the circle at $X$: $\angle AXB = \tfrac12(\text{arc } AB + \text{arc } CD)$.
- Two secants meeting **outside** the circle: the angle between them is $\tfrac12(\text{far arc} - \text{near arc})$.
- Example: arcs of $100^\circ$ and $40^\circ$ give $70^\circ$ between crossing chords, and $30^\circ$ between secants.`,
      figure: {
        type: "plot",
        x: [-2.5, 2.5],
        y: [-2.5, 2.5],
        equal: true,
        axes: false,
        curves: [
          { param: "t => [0 + 2 * Math.cos(t), 0 + 2 * Math.sin(t)]", t: [0.785, 2.705], tone: "warn" },
          { param: "t => [0 + 2 * Math.cos(t), 0 + 2 * Math.sin(t)]", t: [3.927, 4.8], tone: "warn" },
        ],
        circles: [
          { c: [0, 0], r: 2, tone: "ink" },
        ],
        segments: [
          { from: [-1.813, 0.845], to: [0.174, -1.992], tone: "ink" },
          { from: [1.414, 1.414], to: [-1.414, -1.414], tone: "ink" },
        ],
        angles: [
          { at: [-0.718, -0.718], from: [1.414, 1.414], to: [-1.813, 0.845], r: 0.4 },
        ],
        points: [
          { x: -0.718, y: -0.718 },
        ],
        labels: [
          { x: -0.347, y: 1.97, text: "α", pos: "n", style: "italic", tone: "warn" },
          { x: -0.684, y: -1.879, text: "β", pos: "sw", style: "italic", tone: "warn" },
          { x: -0.718, y: 0.032, text: "½(α + β)", pos: "c", style: "plain" },
          { x: -1.813, y: 0.845, text: "A", pos: "nw", style: "italic" },
          { x: 1.414, y: 1.414, text: "B", pos: "ne", style: "italic" },
          { x: 0.174, y: -1.992, text: "C", pos: "s", style: "italic" },
          { x: -1.414, y: -1.414, text: "D", pos: "sw", style: "italic" },
          { x: -0.718, y: -0.718, text: "X", pos: "s", style: "italic" },
        ],
        caption: String.raw`$\angle AXB = \tfrac12(\alpha + \beta)$.`,
        alt: "Circle with chords AC and BD crossing at X. The arc AB at the top is highlighted and labelled alpha, the arc CD at the bottom is highlighted and labelled beta, and the angle AXB is marked as one half of alpha plus beta.",
      },
    },
    {
      title: String.raw`Cyclic quadrilaterals`,
      body: String.raw`If $A, B, C, D$ lie on a circle (in that order):

- **Opposite angles add to $180^\circ$**: $\angle A + \angle C = \angle B + \angle D = 180^\circ$. Equivalently, an **exterior angle equals the interior opposite angle**.
- **Side and diagonal**: $\angle BAC = \angle BDC$, since both stand on chord $BC$. With both diagonals drawn there are four such pairs; mark them first.
- Example: in a cyclic quadrilateral with $\angle ABC = 75^\circ$, $\angle ADC = 105^\circ$ and the exterior angle at $D$ is $75^\circ$.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 2.6],
          y: [-2.6, 2.6],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2, tone: "ink" },
          ],
          segments: [
            { from: [-1.879, -0.684], to: [0.684, -1.879], tone: "ink" },
            { from: [0.684, -1.879], to: [1.932, 0.518], tone: "ink" },
            { from: [1.932, 0.518], to: [-1, 1.732], tone: "ink" },
            { from: [-1, 1.732], to: [-1.879, -0.684], tone: "ink" },
          ],
          angles: [
            { at: [-1.879, -0.684], from: [0.684, -1.879], to: [-1, 1.732], r: 0.45, label: "x" },
            { at: [1.932, 0.518], from: [-1, 1.732], to: [0.684, -1.879], r: 0.4 },
          ],
          labels: [
            { x: 1.039, y: 0.193, text: "180° − x", pos: "c", style: "plain" },
            { x: -1.879, y: -0.684, text: "A", pos: "w", style: "italic" },
            { x: 0.684, y: -1.879, text: "B", pos: "s", style: "italic" },
            { x: 1.932, y: 0.518, text: "C", pos: "e", style: "italic" },
            { x: -1, y: 1.732, text: "D", pos: "nw", style: "italic" },
          ],
          caption: String.raw`Opposite angles are supplementary.`,
          alt: "Cyclic quadrilateral ABCD. The angle at A is marked x, and the opposite angle at C is marked 180 degrees minus x.",
        },
        {
          type: "plot",
          x: [-2.6, 2.6],
          y: [-2.6, 2.6],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2, tone: "ink" },
          ],
          segments: [
            { from: [-1.879, -0.684], to: [0.684, -1.879], tone: "ink" },
            { from: [0.684, -1.879], to: [1.932, 0.518], tone: "ink" },
            { from: [1.932, 0.518], to: [-1, 1.732], tone: "ink" },
            { from: [-1, 1.732], to: [-1.879, -0.684], tone: "ink" },
            { from: [-1.879, -0.684], to: [1.932, 0.518], tone: "accent" },
            { from: [0.684, -1.879], to: [-1, 1.732], tone: "accent" },
          ],
          angles: [
            { at: [-1.879, -0.684], from: [0.684, -1.879], to: [1.932, 0.518], r: 0.6, label: "y" },
            { at: [-1, 1.732], from: [0.684, -1.879], to: [1.932, 0.518], r: 0.6, label: "y" },
          ],
          labels: [
            { x: -1.879, y: -0.684, text: "A", pos: "w", style: "italic" },
            { x: 0.684, y: -1.879, text: "B", pos: "s", style: "italic" },
            { x: 1.932, y: 0.518, text: "C", pos: "e", style: "italic" },
            { x: -1, y: 1.732, text: "D", pos: "nw", style: "italic" },
          ],
          caption: String.raw`$\angle BAC = \angle BDC$ (same segment).`,
          alt: "Cyclic quadrilateral ABCD with both diagonals. The angle BAC and the angle BDC are both marked y.",
        },
      ],
    },
    {
      title: String.raw`Proving that four points are concyclic`,
      body: String.raw`Four points $A, B, C, D$ lie on one circle if **any one** of these holds:

1. $ABCD$ is a convex quadrilateral with $\angle A + \angle C = 180^\circ$ (or an exterior angle equals the interior opposite angle).
2. $\angle ACB = \angle ADB$, with $C$ and $D$ on the **same side** of line $AB$.
3. Lines $AB$ and $CD$ meet at $P$ with $PA \cdot PB = PC \cdot PD$ (and $P$ inside both segments or outside both).

- **Two right angles on one segment**: if $\angle AXB = \angle AYB = 90^\circ$, then $X$ and $Y$ lie on the circle with diameter $AB$. Feet of perpendiculars and altitudes create such hidden circles everywhere.
- Once a hidden circle is found, use "angles in the same segment" to move angles across it.`,
      figure: {
        type: "plot",
        x: [-0.5, 4.9],
        y: [-2.7, 3.9],
        equal: true,
        axes: false,
        circles: [
          { c: [2.2, 0], r: 2.2, tone: "accent", dashed: true },
          { c: [1.3, 2.293], r: 1.107, tone: "good", dashed: true },
        ],
        segments: [
          { from: [1.3, 3.4], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [4.4, 0], tone: "ink" },
          { from: [4.4, 0], to: [1.3, 3.4], tone: "ink" },
          { from: [0, 0], to: [2.403, 2.191], tone: "muted" },
          { from: [4.4, 0], to: [0.561, 1.468], tone: "muted" },
        ],
        rightAngles: [
          { at: [2.403, 2.191], a: [-2.403, -2.191], b: [1.997, -2.191], size: 0.2 },
          { at: [0.561, 1.468], a: [3.839, -1.468], b: [-0.561, -1.468], size: 0.2 },
        ],
        points: [
          { x: 1.3, y: 3.4 },
          { x: 0, y: 0 },
          { x: 4.4, y: 0 },
          { x: 2.403, y: 2.191 },
          { x: 0.561, y: 1.468 },
          { x: 1.3, y: 1.185 },
        ],
        labels: [
          { x: 1.3, y: 3.4, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 4.4, y: 0, text: "C", pos: "se", style: "italic" },
          { x: 2.403, y: 2.191, text: "E", pos: "ne", style: "italic" },
          { x: 0.561, y: 1.468, text: "F", pos: "nw", style: "italic" },
          { x: 1.3, y: 1.185, text: "H", pos: "s", style: "italic" },
        ],
        caption: String.raw`$B, C, E, F$ lie on the circle with diameter $BC$; $A, F, H, E$ on the circle with diameter $AH$.`,
        alt: "Triangle ABC with altitudes BE and CF meeting at H. A dashed circle with diameter BC passes through E and F, and a second dashed circle with diameter AH also passes through E and F.",
      },
    },
    {
      title: String.raw`Tangents and the tangent–chord angle`,
      body: String.raw`- A tangent is **perpendicular to the radius** at the point of contact.
- The two **tangents from an external point are equal**, and the line from that point to the centre bisects the angle between them.
- **Tangent–chord angle** (alternate segment theorem): the angle between the tangent at $A$ and the chord $AB$ equals the inscribed angle $\angle ACB$ for any $C$ on the arc on the other side of $AB$.
- Example: if the tangent at $A$ makes $40^\circ$ with chord $AB$, then every point $C$ on the far arc gives $\angle ACB = 40^\circ$.`,
      figure: [
        {
          type: "plot",
          x: [-2, 4.7],
          y: [-2, 2],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 1.5, tone: "ink" },
          ],
          segments: [
            { from: [4.2, 0], to: [0.536, 1.401], tone: "accent" },
            { from: [4.2, 0], to: [0.536, -1.401], tone: "accent" },
            { from: [0, 0], to: [0.536, 1.401], tone: "muted" },
            { from: [0, 0], to: [0.536, -1.401], tone: "muted" },
            { from: [0, 0], to: [4.2, 0], tone: "muted", dashed: true },
            { from: [2.411, 0.813], to: [2.325, 0.588], tone: "ink" },
            { from: [2.325, -0.588], to: [2.411, -0.813], tone: "ink" },
          ],
          rightAngles: [
            { at: [0.536, 1.401], a: [-0.536, -1.401], b: [3.664, -1.401], size: 0.22 },
            { at: [0.536, -1.401], a: [-0.536, 1.401], b: [3.664, 1.401], size: 0.22 },
          ],
          points: [
            { x: 0, y: 0 },
            { x: 4.2, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "w", style: "italic" },
            { x: 4.2, y: 0, text: "P", pos: "e", style: "italic" },
            { x: 0.536, y: 1.401, text: "A", pos: "n", style: "italic" },
            { x: 0.536, y: -1.401, text: "B", pos: "s", style: "italic" },
          ],
          caption: String.raw`$PA = PB$ and $OA \perp PA$.`,
          alt: "Circle with centre O and an external point P. Tangents PA and PB are marked equal, with right angles between each tangent and the radius.",
        },
        {
          type: "plot",
          x: [-2.9, 3.1],
          y: [-2.1, 2.1],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 1.6, tone: "ink" },
          ],
          segments: [
            { from: [-2.4, -1.6], to: [2.6, -1.6], tone: "accent" },
            { from: [0, -1.6], to: [1.504, 0.547], tone: "ink" },
            { from: [1.504, 0.547], to: [-1.311, 0.918], tone: "ink" },
            { from: [-1.311, 0.918], to: [0, -1.6], tone: "ink" },
          ],
          angles: [
            { at: [0, -1.6], from: [1, -1.6], to: [1.504, 0.547], r: 0.55, label: "θ" },
            { at: [-1.311, 0.918], from: [0, -1.6], to: [1.504, 0.547], r: 0.55, label: "θ" },
          ],
          labels: [
            { x: 0, y: -1.6, text: "A", pos: "s", style: "italic" },
            { x: 1.504, y: 0.547, text: "B", pos: "e", style: "italic" },
            { x: -1.311, y: 0.918, text: "C", pos: "nw", style: "italic" },
          ],
          caption: String.raw`Tangent–chord angle $= \angle ACB$.`,
          alt: "Circle with a tangent line at A at the bottom. Chord AB goes up to the right, and C is on the far arc. The angle between the tangent and AB, and the angle ACB, are both marked theta.",
        },
      ],
    },
    {
      title: String.raw`Power of a point`,
      body: String.raw`For a point $P$ and a circle with centre $O$ and radius $r$, every line through $P$ meeting the circle at $A$ and $B$ gives the **same** product
$$PA \cdot PB = |OP^2 - r^2|,$$
the **power** of $P$ (taken as $OP^2 - r^2$: negative inside, zero on, positive outside the circle).

- **Crossing chords** at $P$: $PA \cdot PB = PC \cdot PD$.
- **Two secants** from $P$ outside: $PA \cdot PB = PC \cdot PD$. **Tangent** $PT$: $PT^2 = PA \cdot PB$.
- The proofs are similar triangles, e.g. $\triangle PAC \sim \triangle PDB$; for unusual configurations, redo the similar triangles directly.
- Example: a secant from $P$ meets the circle at distances $4$ and $9$ from $P$; the tangent from $P$ has length $\sqrt{4 \times 9} = 6$.`,
      figure: [
        {
          type: "plot",
          x: [-2.5, 2.5],
          y: [-2.5, 2.5],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2, tone: "ink" },
          ],
          segments: [
            { from: [-1.918, -0.567], to: [1.833, 0.799], tone: "accent" },
            { from: [1.42, -1.408], to: [-0.166, 1.993], tone: "good" },
          ],
          points: [
            { x: 0.6, y: 0.35 },
          ],
          labels: [
            { x: 0.6, y: 0.35, text: "P", pos: "n", style: "italic" },
            { x: -1.918, y: -0.567, text: "A", pos: "w", style: "italic" },
            { x: 1.833, y: 0.799, text: "B", pos: "ne", style: "italic" },
            { x: 1.42, y: -1.408, text: "C", pos: "se", style: "italic" },
            { x: -0.166, y: 1.993, text: "D", pos: "n", style: "italic" },
          ],
          caption: String.raw`$PA \cdot PB = PC \cdot PD$`,
          alt: "Two chords AB and CD of a circle crossing at an interior point P.",
        },
        {
          type: "plot",
          x: [-2.1, 4.9],
          y: [-2.1, 2.1],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 1.6, tone: "ink" },
          ],
          segments: [
            { from: [4.4, 0.6], to: [-1.21, -1.047], tone: "accent" },
            { from: [4.4, 0.6], to: [0.37, 1.557], tone: "good" },
          ],
          points: [
            { x: 4.4, y: 0.6 },
            { x: 1.584, y: -0.226 },
            { x: -1.21, y: -1.047 },
            { x: 0.37, y: 1.557 },
          ],
          labels: [
            { x: 4.4, y: 0.6, text: "P", pos: "e", style: "italic" },
            { x: 1.584, y: -0.226, text: "A", pos: "se", style: "italic" },
            { x: -1.21, y: -1.047, text: "B", pos: "sw", style: "italic" },
            { x: 0.37, y: 1.557, text: "T", pos: "n", style: "italic" },
          ],
          caption: String.raw`$PT^2 = PA \cdot PB$`,
          alt: "A point P outside a circle. A secant from P meets the circle at A and then B; a tangent from P touches the circle at T.",
        },
      ],
    },
    {
      title: String.raw`Radical axis and radical centre`,
      body: String.raw`- The points with **equal power** with respect to two circles with different centres form a straight line, the **radical axis**, perpendicular to the line of centres.
- For two **intersecting** circles it is the line through the two common points; for two touching circles, the common tangent at the point of contact.
- From any point on the radical axis outside both circles the **tangents to the two circles are equal**. So the common chord, extended, bisects each common tangent.
- **Radical centre**: for three circles with non-collinear centres, the three radical axes meet at one point.
- In coordinates, subtract the equations $x^2 + y^2 + \ldots = 0$ of two circles: the squares cancel and the radical axis is left. Example: $x^2 + y^2 = 4$ and $(x - 4)^2 + y^2 = 4$ give $8x - 16 = 0$, the line $x = 2$.`,
      figure: {
        type: "plot",
        x: [-2.5, 5.2],
        y: [-3.1, 4.1],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2, tone: "ink" },
          { c: [3.1, 0], r: 1.6, tone: "ink" },
        ],
        segments: [
          { from: [1.782, -2.6], to: [1.782, 3.6], tone: "warn", dashed: true },
          { from: [1.782, 3.3], to: [-0.982, 1.742], tone: "accent" },
          { from: [1.782, 3.3], to: [4.16, 1.199], tone: "accent" },
          { from: [0.341, 2.626], to: [0.459, 2.417], tone: "ink" },
          { from: [2.891, 2.16], to: [3.05, 2.339], tone: "ink" },
          { from: [0, 0], to: [3.1, 0], tone: "muted", dashed: true },
        ],
        points: [
          { x: 1.782, y: 0.907 },
          { x: 1.782, y: -0.907 },
          { x: 1.782, y: 3.3 },
          { x: 0, y: 0 },
          { x: 3.1, y: 0 },
        ],
        labels: [
          { x: 1.782, y: 3.3, text: "P", pos: "n", style: "italic" },
          { x: -0.982, y: 1.742, text: "T₁", pos: "w", style: "italic" },
          { x: 4.16, y: 1.199, text: "T₂", pos: "e", style: "italic" },
          { x: 0, y: 0, text: "O₁", pos: "s", style: "italic" },
          { x: 3.1, y: 0, text: "O₂", pos: "s", style: "italic" },
          { x: 1.782, y: -2.45, text: "radical axis", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`From $P$ on the radical axis, $PT_1 = PT_2$.`,
        alt: "Two intersecting circles with centres O1 and O2. The line through their two common points is dashed and labelled radical axis; it is perpendicular to O1O2. From a point P on it, the tangents PT1 and PT2 to the two circles are marked equal.",
      },
    },
    {
      title: String.raw`Arc midpoints and the incentre`,
      body: String.raw`Let $M$ be the midpoint of the arc $BC$ of the circumcircle of $ABC$ that does not contain $A$.

- $M$ lies on the **bisector of $\angle A$** (equal arcs $BM$, $MC$) and on the **perpendicular bisector of $BC$**, so these two lines meet on the circumcircle.
- **Incentre–excentre lemma**: $MB = MC = MI$, where $I$ is the incentre, because $\angle MBI = \angle MIB = \tfrac12(\angle A + \angle B)$.
- The reflection in line $AM$ swaps the lines $AB$ and $AC$ and fixes $M$, which is often the quickest way to move a length across.
- Example: if $\angle A = 2\theta$, then $\angle MBC = \angle MCB = \theta$.`,
      figure: {"type": "plot", "x": [-0.692, 5.092], "y": [-1.722, 4.061], "equal": true, "axes": false, "circles": [{"c": [2.2, 1.17], "r": 2.492, "tone": "ink"}], "segments": [{"from": [1.267, 3.48], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.4, 0.0], "tone": "ink"}, {"from": [4.4, 0.0], "to": [1.267, 3.48], "tone": "ink"}, {"from": [1.267, 3.48], "to": [2.2, -1.322], "tone": "muted", "dashed": true}, {"from": [2.2, -1.322], "to": [0.0, 0.0], "tone": "accent"}, {"from": [2.2, -1.322], "to": [4.4, 0.0], "tone": "accent"}, {"from": [2.2, -1.322], "to": [1.71, 1.198], "tone": "accent"}, {"from": [1.054, -0.738], "to": [1.146, -0.584], "tone": "ink"}, {"from": [3.254, -0.584], "to": [3.346, -0.738], "tone": "ink"}, {"from": [1.744, 0.551], "to": [1.921, 0.585], "tone": "ink"}], "points": [{"x": 1.71, "y": 1.198}, {"x": 2.2, "y": -1.322}], "labels": [{"x": 1.267, "y": 3.48, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 4.4, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 1.71, "y": 1.198, "text": "I", "pos": "nw", "style": "italic"}, {"x": 2.2, "y": -1.322, "text": "M", "pos": "s", "style": "italic"}], "caption": "$MB = MI = MC$.", "alt": "Triangle ABC in its circumcircle with incentre I. The bisector from A meets the circle again at M, the midpoint of arc BC, and MB, MI and MC are marked equal."},
    },
    {
      title: String.raw`Antiparallels and the orthic triangle`,
      body: String.raw`- If $E$ on $CA$ and $F$ on $AB$ make $B, C, E, F$ concyclic, then $\angle AFE = \angle ACB$ and $\angle AEF = \angle ABC$: the line $EF$ is **antiparallel** to $BC$ and triangle $AEF$ is similar to triangle $ABC$.
- An antiparallel to $BC$ is parallel to the tangent at $A$ to the circumcircle, so it is **perpendicular to $OA$** ($O$ the circumcentre).
- The feet of the altitudes are the main example: $B, C, E, F$ lie on the circle with diameter $BC$, and $A, F, H, E$ on the circle with diameter $AH$.
- Example: if $\angle B = 70^\circ$ and $\angle C = 50^\circ$, any antiparallel $EF$ to $BC$ makes $\angle AEF = 70^\circ$ and $\angle AFE = 50^\circ$.`,
    },
  ],
  archetypes: [
    {
      id: "G1-polygon-chase",
      name: "Angle chasing in triangles and polygons",
      tests: String.raw`Angles in triangles and polygons from angle sums, isosceles triangles, exterior angles and angle bisectors, with no circle given. Recognise it by equal sides, regular or equilateral polygons, or bisectors meeting at a point. Harder versions need an auxiliary point, such as an equilateral triangle built on a side.`,
      questions: [
        {
          stem: String.raw`$ABCDE$ is a convex pentagon with all five sides equal, and $\angle EAB = \angle ABC = 90^\circ$. Find $\angle ADB$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.5, 2.5],
            y: [-0.5, 4.232],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [2, 0], tone: "ink" },
              { from: [2, 0], to: [2, 2], tone: "ink" },
              { from: [2, 2], to: [1, 3.732], tone: "ink" },
              { from: [1, 3.732], to: [0, 2], tone: "ink" },
              { from: [0, 2], to: [0, 0], tone: "ink" },
              { from: [1, -0.09], to: [1, 0.09], tone: "ink" },
              { from: [2.09, 1], to: [1.91, 1], tone: "ink" },
              { from: [1.578, 2.911], to: [1.422, 2.821], tone: "ink" },
              { from: [0.422, 2.911], to: [0.578, 2.821], tone: "ink" },
              { from: [-0.09, 1], to: [0.09, 1], tone: "ink" },
              { from: [0, 0], to: [1, 3.732], tone: "accent", dashed: true },
              { from: [2, 0], to: [1, 3.732], tone: "accent", dashed: true },
            ],
            angles: [
              { at: [1, 3.732], from: [0, 0], to: [2, 0], r: 0.6 },
            ],
            rightAngles: [
              { at: [0, 0], a: [2, 0], b: [0, 2], size: 0.22 },
              { at: [2, 0], a: [-2, 0], b: [0, 2], size: 0.22 },
            ],
            labels: [
              { x: 1, y: 2.782, text: "?", pos: "c", style: "plain" },
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 2, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 2, y: 2, text: "C", pos: "e", style: "italic" },
              { x: 1, y: 3.732, text: "D", pos: "n", style: "italic" },
              { x: 0, y: 2, text: "E", pos: "w", style: "italic" },
            ],
            alt: "Convex pentagon ABCDE with all sides marked equal and right angles at A and B. Dashed segments DA and DB are drawn and the angle ADB is marked with a question mark.",
          },
          choices: [String.raw`$15^\circ$`, String.raw`$24^\circ$`, String.raw`$30^\circ$`, String.raw`$36^\circ$`, String.raw`$45^\circ$`],
          answer: String.raw`(C) $30^\circ$`,
        },
        {
          stem: String.raw`Each interior angle of a convex polygon is a whole number of degrees, and no two of its interior angles are equal. What is the largest possible number of sides of the polygon?`,
          difficulty: 2,
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle BAC = 60^\circ$. The bisectors of $\angle ABC$ and $\angle ACB$ meet $CA$ and $AB$ at $E$ and $F$ respectively. Prove that $BF + CE = BC$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.5, 5.1],
            y: [-0.5, 4.254],
            equal: true,
            axes: false,
            segments: [
              { from: [1.22, 3.754], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.6, 0], tone: "ink" },
              { from: [4.6, 0], to: [1.22, 3.754], tone: "ink" },
              { from: [0, 0], to: [2.781, 2.02], tone: "accent" },
              { from: [4.6, 0], to: [0.581, 1.789], tone: "accent" },
            ],
            angles: [
              { at: [1.22, 3.754], from: [0, 0], to: [4.6, 0], r: 0.5, label: "60°" },
              { at: [0, 0], from: [4.6, 0], to: [2.781, 2.02], r: 0.75 },
              { at: [0, 0], from: [2.781, 2.02], to: [1.22, 3.754], r: 0.9 },
              { at: [4.6, 0], from: [0.581, 1.789], to: [0, 0], r: 0.75 },
              { at: [4.6, 0], from: [1.22, 3.754], to: [0.581, 1.789], r: 0.9 },
            ],
            points: [
              { x: 1.22, y: 3.754 },
              { x: 0, y: 0 },
              { x: 4.6, y: 0 },
              { x: 2.781, y: 2.02 },
              { x: 0.581, y: 1.789 },
              { x: 1.748, y: 1.27 },
            ],
            labels: [
              { x: 1.22, y: 3.754, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 4.6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.781, y: 2.02, text: "E", pos: "ne", style: "italic" },
              { x: 0.581, y: 1.789, text: "F", pos: "nw", style: "italic" },
              { x: 1.748, y: 1.27, text: "I", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC with angle A equal to 60 degrees. The bisector from B meets CA at E and the bisector from C meets AB at F; the bisectors cross at I. Equal half-angles are marked at B and at C.",
          },
          answer: String.raw`**Proof.** Key idea: the bisectors meet at the incentre $I$ with $\angle BIC = 120^\circ$, so $\angle BIF = \angle CIE = 60^\circ$; take $X$ on $BC$ with $BX = BF$, then congruent triangles give $\angle BIX = 60^\circ$, hence $\angle CIX = 60^\circ$ and $CX = CE$.`,
        },
        {
          stem: String.raw`$ABCDE$ is a regular pentagon, and $F$ is the point inside it for which triangle $ABF$ is equilateral. Find $\angle DFE$.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-1.192, 3.592], "y": [-0.45, 4.143], "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [2.4, 0.0], "tone": "ink"}, {"from": [2.4, 0.0], "to": [3.142, 2.283], "tone": "ink"}, {"from": [3.142, 2.283], "to": [1.2, 3.693], "tone": "ink"}, {"from": [1.2, 3.693], "to": [-0.742, 2.283], "tone": "ink"}, {"from": [-0.742, 2.283], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [1.2, 2.078], "tone": "accent"}, {"from": [2.4, 0.0], "to": [1.2, 2.078], "tone": "accent"}, {"from": [1.2, 2.078], "to": [1.2, 3.693], "tone": "muted"}, {"from": [1.2, 2.078], "to": [-0.742, 2.283], "tone": "muted"}], "angles": [{"at": [1.2, 2.078], "from": [1.2, 3.693], "to": [-0.742, 2.283], "r": 0.45, "label": "?"}], "labels": [{"x": 0.0, "y": 0.0, "text": "A", "pos": "sw", "style": "italic"}, {"x": 2.4, "y": 0.0, "text": "B", "pos": "se", "style": "italic"}, {"x": 3.142, "y": 2.283, "text": "C", "pos": "e", "style": "italic"}, {"x": 1.2, "y": 3.693, "text": "D", "pos": "n", "style": "italic"}, {"x": -0.742, "y": 2.283, "text": "E", "pos": "w", "style": "italic"}, {"x": 1.2, "y": 2.078, "text": "F", "pos": "s", "style": "italic"}], "alt": "Regular pentagon ABCDE with an equilateral triangle ABF drawn inside it on side AB. Segments FD and FE are drawn and the angle DFE is marked with a question mark."},
          choices: [String.raw`$66^\circ$`, String.raw`$72^\circ$`, String.raw`$78^\circ$`, String.raw`$84^\circ$`, String.raw`$90^\circ$`],
          answer: String.raw`(D) $84^\circ$`,
        },
        {
          stem: String.raw`In convex quadrilateral $ABCD$, $AB = BC = CD$, $\angle ABC = 90^\circ$ and $\angle BCD = 150^\circ$. Find $\angle BAD$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-0.54, 4.555], "y": [-0.54, 2.65], "equal": true, "axes": false, "segments": [{"from": [0.0, 2.2], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [2.2, 0.0], "tone": "ink"}, {"from": [2.2, 0.0], "to": [4.105, 1.1], "tone": "ink"}, {"from": [4.105, 1.1], "to": [0.0, 2.2], "tone": "ink"}, {"from": [0.09, 1.1], "to": [-0.09, 1.1], "tone": "ink"}, {"from": [1.1, 0.09], "to": [1.1, -0.09], "tone": "ink"}, {"from": [3.108, 0.628], "to": [3.198, 0.472], "tone": "ink"}], "angles": [{"at": [2.2, 0.0], "from": [4.105, 1.1], "to": [0.0, 0.0], "r": 0.4, "label": "150°"}, {"at": [0.0, 2.2], "from": [0.0, 0.0], "to": [4.105, 1.1], "r": 0.5, "label": "?"}], "rightAngles": [{"at": [0.0, 0.0], "a": [2.2, 0.0], "b": [0.0, 2.2], "size": 0.22}], "labels": [{"x": 0.0, "y": 2.2, "text": "A", "pos": "nw", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 2.2, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 4.105, "y": 1.1, "text": "D", "pos": "e", "style": "italic"}], "alt": "Convex quadrilateral ABCD with AB, BC and CD marked equal, a right angle at B and an angle of 150 degrees at C. The angle BAD is marked with a question mark."},
          answer: String.raw`$75^\circ$`,
        },
        {
          stem: String.raw`$ABCDEF$ is a convex hexagon whose six sides are all equal, and $\angle A = \angle C = \angle E$. Prove that $\angle B = \angle D = \angle F$.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-0.846, 3.846], "y": [-1.773, 3.048], "equal": true, "axes": false, "segments": [{"from": [-0.396, 1.96], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [1.5, -1.323], "tone": "ink"}, {"from": [1.5, -1.323], "to": [3.0, 0.0], "tone": "ink"}, {"from": [3.0, 0.0], "to": [3.396, 1.96], "tone": "ink"}, {"from": [3.396, 1.96], "to": [1.5, 2.598], "tone": "ink"}, {"from": [1.5, 2.598], "to": [-0.396, 1.96], "tone": "ink"}, {"from": [-0.11, 0.998], "to": [-0.286, 0.962], "tone": "ink"}, {"from": [0.81, -0.594], "to": [0.69, -0.729], "tone": "ink"}, {"from": [2.19, -0.594], "to": [2.31, -0.729], "tone": "ink"}, {"from": [3.11, 0.998], "to": [3.286, 0.962], "tone": "ink"}, {"from": [2.419, 2.194], "to": [2.477, 2.365], "tone": "ink"}, {"from": [0.581, 2.194], "to": [0.523, 2.365], "tone": "ink"}], "angles": [{"at": [-0.396, 1.96], "from": [0.0, 0.0], "to": [1.5, 2.598], "r": 0.4}, {"at": [1.5, -1.323], "from": [3.0, 0.0], "to": [0.0, 0.0], "r": 0.4}, {"at": [3.396, 1.96], "from": [1.5, 2.598], "to": [3.0, 0.0], "r": 0.4}], "labels": [{"x": -0.396, "y": 1.96, "text": "A", "pos": "w", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 1.5, "y": -1.323, "text": "C", "pos": "s", "style": "italic"}, {"x": 3.0, "y": 0.0, "text": "D", "pos": "se", "style": "italic"}, {"x": 3.396, "y": 1.96, "text": "E", "pos": "ne", "style": "italic"}, {"x": 1.5, "y": 2.598, "text": "F", "pos": "n", "style": "italic"}], "alt": "Convex hexagon ABCDEF with all six sides marked equal and equal angles marked at A, C and E."},
          answer: String.raw`**Proof.** Key idea: triangles $FAB$, $BCD$, $DEF$ are congruent (SAS), so $FB = BD = DF$ and triangle $BDF$ is equilateral; then each of $\angle B$, $\angle D$, $\angle F$ equals $60^\circ$ plus two base angles of these congruent isosceles triangles.`,
        },
        {
          stem: String.raw`$ABCD$ is a convex quadrilateral with $AB = BC = CD = 1$. Its diagonals $AC$ and $BD$ meet at $P$, and $\angle APB = 60^\circ$. Prove that $\sqrt3 < AD \le 2$.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-0.867, 4.689], "y": [-0.54, 2.814], "equal": true, "axes": false, "segments": [{"from": [-0.417, 2.364], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [2.4, 0.0], "tone": "ink"}, {"from": [2.4, 0.0], "to": [4.239, 1.543], "tone": "ink"}, {"from": [4.239, 1.543], "to": [-0.417, 2.364], "tone": "ink"}, {"from": [-0.417, 2.364], "to": [2.4, 0.0], "tone": "muted"}, {"from": [0.0, 0.0], "to": [4.239, 1.543], "tone": "muted"}, {"from": [-0.12, 1.197], "to": [-0.297, 1.166], "tone": "ink"}, {"from": [1.2, 0.09], "to": [1.2, -0.09], "tone": "ink"}, {"from": [3.261, 0.84], "to": [3.377, 0.702], "tone": "ink"}], "angles": [{"at": [1.674, 0.609], "from": [-0.417, 2.364], "to": [0.0, 0.0], "r": 0.4, "label": "60°"}], "points": [{"x": 1.674, "y": 0.609}], "labels": [{"x": -0.417, "y": 2.364, "text": "A", "pos": "nw", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 2.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 4.239, "y": 1.543, "text": "D", "pos": "ne", "style": "italic"}, {"x": 1.674, "y": 0.609, "text": "P", "pos": "n", "style": "italic"}], "alt": "Convex quadrilateral ABCD with AB, BC and CD marked equal. The diagonals AC and BD meet at P, and the angle APB is marked 60 degrees."},
          answer: String.raw`**Proof.** Key idea: the isosceles triangles $ABC$ and $BCD$ give $\angle BPC = \tfrac12(\angle B + \angle C)$, so $\angle B + \angle C = 240^\circ$; the point $E$ on the same side of $BC$ as $A$ with $BCE$ equilateral then lies on $AD$ (an angle count at $E$), and $AD = AE + ED = 2\cos\frac{\angle B - \angle C}{4}$ with $|\angle B - \angle C| < 120^\circ$.`,
        },
      ],
    },
    {
      id: "G1-inscribed-angles",
      name: "Inscribed angles and arcs",
      tests: String.raw`Points on a circle, often the vertices of a regular polygon or a triangle with its circumcentre, where angles come from arcs. Recognise it by a circumcircle, a centre $O$, or a regular polygon with diagonals.`,
      questions: [
        {
          stem: String.raw`$A_1A_2A_3 \ldots A_{12}$ is a regular $12$-sided polygon. Find the acute angle between the diagonals $A_1A_5$ and $A_2A_9$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-2.8, 2.8],
            y: [-2.8, 2.8],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 2.2], to: [1.1, 1.905], tone: "ink" },
              { from: [1.1, 1.905], to: [1.905, 1.1], tone: "ink" },
              { from: [1.905, 1.1], to: [2.2, 0], tone: "ink" },
              { from: [2.2, 0], to: [1.905, -1.1], tone: "ink" },
              { from: [1.905, -1.1], to: [1.1, -1.905], tone: "ink" },
              { from: [1.1, -1.905], to: [0, -2.2], tone: "ink" },
              { from: [0, -2.2], to: [-1.1, -1.905], tone: "ink" },
              { from: [-1.1, -1.905], to: [-1.905, -1.1], tone: "ink" },
              { from: [-1.905, -1.1], to: [-2.2, 0], tone: "ink" },
              { from: [-2.2, 0], to: [-1.905, 1.1], tone: "ink" },
              { from: [-1.905, 1.1], to: [-1.1, 1.905], tone: "ink" },
              { from: [-1.1, 1.905], to: [0, 2.2], tone: "ink" },
              { from: [0, 2.2], to: [1.905, -1.1], tone: "accent" },
              { from: [1.1, 1.905], to: [-1.905, -1.1], tone: "accent" },
            ],
            points: [
              { x: 0, y: 2.2 },
              { x: 1.1, y: 1.905 },
              { x: 1.905, y: 1.1 },
              { x: 2.2, y: 0 },
              { x: 1.905, y: -1.1 },
              { x: 1.1, y: -1.905 },
              { x: 0, y: -2.2 },
              { x: -1.1, y: -1.905 },
              { x: -1.905, y: -1.1 },
              { x: -2.2, y: 0 },
              { x: -1.905, y: 1.1 },
              { x: -1.1, y: 1.905 },
            ],
            labels: [
              { x: 0, y: 2.2, text: "A₁", pos: "n", style: "italic" },
              { x: 1.1, y: 1.905, text: "A₂", pos: "ne", style: "italic" },
              { x: 1.905, y: 1.1, text: "A₃", pos: "ne", style: "italic" },
              { x: 2.2, y: 0, text: "A₄", pos: "e", style: "italic" },
              { x: 1.905, y: -1.1, text: "A₅", pos: "se", style: "italic" },
              { x: 1.1, y: -1.905, text: "A₆", pos: "se", style: "italic" },
              { x: 0, y: -2.2, text: "A₇", pos: "s", style: "italic" },
              { x: -1.1, y: -1.905, text: "A₈", pos: "sw", style: "italic" },
              { x: -1.905, y: -1.1, text: "A₉", pos: "sw", style: "italic" },
              { x: -2.2, y: 0, text: "A₁₀", pos: "w", style: "italic" },
              { x: -1.905, y: 1.1, text: "A₁₁", pos: "nw", style: "italic" },
              { x: -1.1, y: 1.905, text: "A₁₂", pos: "nw", style: "italic" },
            ],
            alt: "Regular 12-sided polygon A1 to A12 labelled clockwise from the top. The diagonals A1A5 and A2A9 are drawn and cross inside the polygon.",
          },
          answer: String.raw`$75^\circ$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle ABC = 72^\circ$ and $\angle ACB = 46^\circ$. $O$ is the circumcentre of the triangle and $D$ is the foot of the perpendicular from $A$ to $BC$. Find $\angle OAD$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.692, 5.092],
            y: [-1.722, 4.061],
            equal: true,
            axes: false,
            circles: [
              { c: [2.2, 1.17], r: 2.492, tone: "muted" },
            ],
            segments: [
              { from: [1.108, 3.409], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.4, 0], tone: "ink" },
              { from: [4.4, 0], to: [1.108, 3.409], tone: "ink" },
              { from: [1.108, 3.409], to: [1.108, 0], tone: "accent", dashed: true },
              { from: [1.108, 3.409], to: [2.2, 1.17], tone: "accent" },
            ],
            angles: [
              { at: [0, 0], from: [4.4, 0], to: [1.108, 3.409], r: 0.5, label: "72°" },
              { at: [4.4, 0], from: [1.108, 3.409], to: [0, 0], r: 0.6, label: "46°" },
              { at: [1.108, 3.409], from: [1.108, 0], to: [2.2, 1.17], r: 1 },
            ],
            rightAngles: [
              { at: [1.108, 0], a: [0, 3.409], b: [3.292, 0], size: 0.2 },
            ],
            points: [
              { x: 1.108, y: 3.409 },
              { x: 0, y: 0 },
              { x: 4.4, y: 0 },
              { x: 1.108, y: 0 },
              { x: 2.2, y: 1.17 },
            ],
            labels: [
              { x: 1.393, y: 2.175, text: "?", pos: "c", style: "plain" },
              { x: 1.108, y: 3.409, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 4.4, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 1.108, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 2.2, y: 1.17, text: "O", pos: "e", style: "italic" },
            ],
            alt: "Triangle ABC in its circumcircle with centre O. Angle B is 72 degrees and angle C is 46 degrees. AD is perpendicular to BC, and the angle between AD and AO is marked with a question mark.",
          },
          answer: String.raw`$26^\circ$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has circumcentre $O$ and orthocentre $H$. If $AH = AO$, find $\angle BAC$.`,
          difficulty: 3,
          answer: String.raw`$60^\circ$`,
        },
        {
          stem: String.raw`$AB$ is a diameter of a circle, and $C$, $D$ are points of the circle on opposite sides of $AB$ with $\angle BAC = 25^\circ$ and $\angle ABD = 40^\circ$. Chord $CD$ meets $AB$ at $X$. Find $\angle BXC$.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-2.45, 2.45], "y": [-2.45, 2.45], "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 2, "tone": "ink"}], "segments": [{"from": [-2.0, 0.0], "to": [2.0, 0.0], "tone": "ink"}, {"from": [-2.0, 0.0], "to": [1.286, 1.532], "tone": "ink"}, {"from": [2.0, 0.0], "to": [-0.347, -1.97], "tone": "ink"}, {"from": [1.286, 1.532], "to": [-0.347, -1.97], "tone": "accent"}], "angles": [{"at": [-2.0, 0.0], "from": [2.0, 0.0], "to": [1.286, 1.532], "r": 0.75, "label": "25°"}, {"at": [2.0, 0.0], "from": [-2.0, 0.0], "to": [-0.347, -1.97], "r": 0.6, "label": "40°"}, {"at": [0.571, 0.0], "from": [2.0, 0.0], "to": [1.286, 1.532], "r": 0.35, "label": "?"}], "points": [{"x": 0.571, "y": 0.0}], "labels": [{"x": -2.0, "y": 0.0, "text": "A", "pos": "w", "style": "italic"}, {"x": 2.0, "y": 0.0, "text": "B", "pos": "e", "style": "italic"}, {"x": 1.286, "y": 1.532, "text": "C", "pos": "ne", "style": "italic"}, {"x": -0.347, "y": -1.97, "text": "D", "pos": "s", "style": "italic"}, {"x": 0.571, "y": 0.0, "text": "X", "pos": "sw", "style": "italic"}], "alt": "Circle with diameter AB. C is on the upper arc and D on the lower arc. Angle BAC is 25 degrees and angle ABD is 40 degrees. Chord CD crosses AB at X, and angle BXC is marked with a question mark."},
          answer: String.raw`$65^\circ$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, $\angle BAC = 52^\circ$. $BE$ and $CF$ are altitudes of the triangle, and $M$ is the midpoint of $BC$. Find $\angle EMF$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-0.45, 4.85], "y": [-0.54, 4.933], "equal": true, "axes": false, "segments": [{"from": [2.589, 4.483], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.4, 0.0], "tone": "ink"}, {"from": [4.4, 0.0], "to": [2.589, 4.483], "tone": "ink"}, {"from": [0.0, 0.0], "to": [3.783, 1.528], "tone": "muted"}, {"from": [4.4, 0.0], "to": [1.1, 1.905], "tone": "muted"}, {"from": [2.2, 0.0], "to": [3.783, 1.528], "tone": "accent"}, {"from": [2.2, 0.0], "to": [1.1, 1.905], "tone": "accent"}, {"from": [1.1, 0.09], "to": [1.1, -0.09], "tone": "ink"}, {"from": [3.3, 0.09], "to": [3.3, -0.09], "tone": "ink"}], "angles": [{"at": [2.589, 4.483], "from": [0.0, 0.0], "to": [4.4, 0.0], "r": 0.5, "label": "52°"}, {"at": [2.2, 0.0], "from": [3.783, 1.528], "to": [1.1, 1.905], "r": 0.5, "label": "?"}], "rightAngles": [{"at": [3.783, 1.528], "a": [0.617, -1.528], "b": [-3.783, -1.528], "size": 0.17}, {"at": [1.1, 1.905], "a": [1.489, 2.578], "b": [3.3, -1.905], "size": 0.17}], "points": [{"x": 2.2, "y": 0.0}], "labels": [{"x": 2.589, "y": 4.483, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 3.783, "y": 1.528, "text": "E", "pos": "ne", "style": "italic"}, {"x": 1.1, "y": 1.905, "text": "F", "pos": "nw", "style": "italic"}, {"x": 2.2, "y": 0.0, "text": "M", "pos": "s", "style": "italic"}], "alt": "Acute triangle ABC with angle A equal to 52 degrees. The altitudes BE and CF are drawn, M is the midpoint of BC, and segments ME and MF are drawn with angle EMF marked by a question mark."},
          answer: String.raw`$76^\circ$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB < AC$. Point $D$ lies on side $AC$ with $AD = AB$. Prove that the circumcentre of triangle $BCD$ lies on the circumcircle of triangle $ABC$.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-0.681, 5.281], "y": [-1.809, 4.153], "equal": true, "axes": false, "circles": [{"c": [2.3, 1.172], "r": 2.581, "tone": "ink"}], "segments": [{"from": [0.894, 3.337], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.6, 0.0], "tone": "ink"}, {"from": [4.6, 0.0], "to": [0.894, 3.337], "tone": "ink"}, {"from": [0.0, 0.0], "to": [3.461, 1.025], "tone": "muted"}, {"from": [0.534, 1.645], "to": [0.36, 1.692], "tone": "ink"}, {"from": [2.238, 2.248], "to": [2.117, 2.114], "tone": "ink"}], "points": [{"x": 3.461, "y": 1.025}], "labels": [{"x": 0.894, "y": 3.337, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 4.6, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 3.461, "y": 1.025, "text": "D", "pos": "ne", "style": "italic"}], "alt": "Triangle ABC with AB shorter than AC, inside its circumcircle. D is on AC with AD marked equal to AB, and segment BD is drawn."},
          answer: String.raw`**Proof.** Key idea: let $M$ be the midpoint of the arc $BC$ not containing $A$; then $MB = MC$ and $AM$ bisects $\angle BAC$, so the reflection in line $AM$ swaps $B$ and $D$ and $MD = MB = MC$.`,
        },
        {
          stem: String.raw`Circles $\omega_1$ and $\omega_2$ have the same radius and centres $O_1$ and $O_2$, and they meet at $A$ and $B$. A point $P$ of $\omega_1$ lies outside $\omega_2$, and the lines $PA$ and $PB$ meet $\omega_2$ again at $X$ and $Y$. Prove that the circumradius of triangle $PXY$ equals $O_1O_2$.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-2.7, 2.7], "y": [-1.95, 1.95], "equal": true, "axes": false, "circles": [{"c": [-0.75, 0.0], "r": 1.6, "tone": "ink"}, {"c": [0.75, 0.0], "r": 1.6, "tone": "ink"}], "segments": [{"from": [-2.254, -0.547], "to": [0.0, 1.413], "tone": "accent"}, {"from": [-2.254, -0.547], "to": [0.36, -1.552], "tone": "accent"}, {"from": [-0.546, 0.938], "to": [0.36, -1.552], "tone": "accent"}, {"from": [-0.75, 0.0], "to": [0.75, 0.0], "tone": "muted", "dashed": true}], "points": [{"x": -0.75, "y": 0.0}, {"x": 0.75, "y": 0.0}, {"x": 0.0, "y": 1.413}, {"x": 0.0, "y": -1.413}, {"x": -2.254, "y": -0.547}, {"x": -0.546, "y": 0.938}, {"x": 0.36, "y": -1.552}], "labels": [{"x": -0.75, "y": 0.0, "text": "O₁", "pos": "s", "style": "italic"}, {"x": 0.75, "y": 0.0, "text": "O₂", "pos": "s", "style": "italic"}, {"x": 0.0, "y": 1.413, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": -1.413, "text": "B", "pos": "s", "style": "italic"}, {"x": -2.254, "y": -0.547, "text": "P", "pos": "w", "style": "italic"}, {"x": -0.546, "y": 0.938, "text": "X", "pos": "nw", "style": "italic"}, {"x": 0.36, "y": -1.552, "text": "Y", "pos": "se", "style": "italic"}, {"x": -1.89, "y": 1.14, "text": "ω₁", "pos": "nw", "style": "italic"}, {"x": 1.89, "y": 1.14, "text": "ω₂", "pos": "ne", "style": "italic"}], "alt": "Two circles omega 1 and omega 2 of equal radius with centres O1 and O2 joined by a dashed segment; they meet at A and B. P is on omega 1 outside omega 2, and the lines PA and PB meet omega 2 again at X and Y; triangle PXY is drawn."},
          answer: String.raw`**Proof.** Key idea: in equal circles, equal or supplementary inscribed angles stand on equal chords, so $\angle ABP$ (in $\omega_1$) and $\angle ABY$ (in $\omega_2$) give $AP = AY$, and likewise $BP = BX$; hence the circumcentre of $PXY$ is where the perpendicular from $A$ to $PB$ meets the perpendicular from $B$ to $PA$, namely the orthocentre $H$ of triangle $PAB$, and $PH = 2r\cos\angle APB = O_1O_2$ ($r$ the common radius).`,
        },
      ],
    },
    {
      id: "G1-cyclic-quads",
      name: "Cyclic quadrilaterals and concyclic points",
      tests: String.raw`Four points on a circle, or a configuration (altitudes, feet of perpendiculars) in which you must spot or prove that four points are concyclic and then move angles across the circle. The hardest ones combine several hidden circles with antiparallels.`,
      questions: [
        {
          stem: String.raw`$ABCD$ is a cyclic quadrilateral. Side $AB$ is extended beyond $B$ to a point $E$. If $\angle CBE = 72^\circ$ and $\angle BDC = 30^\circ$, find $\angle ACB$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-2.5, 2.5],
            y: [-3.098, 2.5],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2, tone: "ink" },
            ],
            segments: [
              { from: [-1.879, -0.684], to: [0.484, -1.941], tone: "ink" },
              { from: [0.484, -1.941], to: [1.923, -0.551], tone: "ink" },
              { from: [1.923, -0.551], to: [-0.684, 1.879], tone: "ink" },
              { from: [-0.684, 1.879], to: [-1.879, -0.684], tone: "ink" },
              { from: [-1.879, -0.684], to: [1.923, -0.551], tone: "muted" },
              { from: [0.484, -1.941], to: [-0.684, 1.879], tone: "muted" },
              { from: [0.484, -1.941], to: [1.72, -2.598], tone: "ink", dashed: true },
            ],
            angles: [
              { at: [0.484, -1.941], from: [1.72, -2.598], to: [1.923, -0.551], r: 0.45, label: "72°" },
              { at: [-0.684, 1.879], from: [0.484, -1.941], to: [1.923, -0.551], r: 0.9, label: "30°" },
              { at: [1.923, -0.551], from: [-1.879, -0.684], to: [0.484, -1.941], r: 0.55, label: "?" },
            ],
            labels: [
              { x: -1.879, y: -0.684, text: "A", pos: "w", style: "italic" },
              { x: 0.484, y: -1.941, text: "B", pos: "s", style: "italic" },
              { x: 1.923, y: -0.551, text: "C", pos: "e", style: "italic" },
              { x: -0.684, y: 1.879, text: "D", pos: "n", style: "italic" },
              { x: 1.72, y: -2.598, text: "E", pos: "s", style: "italic" },
            ],
            alt: "Cyclic quadrilateral ABCD with diagonals AC and BD. Side AB is extended beyond B to E. Angle CBE is 72 degrees, angle BDC is 30 degrees, and angle ACB is marked with a question mark.",
          },
          answer: String.raw`$42^\circ$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, $\angle ABC = 58^\circ$ and $\angle ACB = 70^\circ$. $AD$, $BE$ and $CF$ are the altitudes of the triangle. Find $\angle DFE$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.5, 5.1],
            y: [-0.5, 5.152],
            equal: true,
            axes: false,
            segments: [
              { from: [2.907, 4.652], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.6, 0], tone: "ink" },
              { from: [4.6, 0], to: [2.907, 4.652], tone: "ink" },
              { from: [2.907, 4.652], to: [2.907, 0], tone: "muted" },
              { from: [0, 0], to: [4.062, 1.478], tone: "muted" },
              { from: [4.6, 0], to: [1.292, 2.067], tone: "muted" },
              { from: [2.907, 0], to: [4.062, 1.478], tone: "accent" },
              { from: [4.062, 1.478], to: [1.292, 2.067], tone: "accent" },
              { from: [1.292, 2.067], to: [2.907, 0], tone: "accent" },
            ],
            angles: [
              { at: [0, 0], from: [4.6, 0], to: [2.907, 4.652], r: 0.45 },
              { at: [4.6, 0], from: [2.907, 4.652], to: [0, 0], r: 0.45 },
              { at: [1.292, 2.067], from: [2.907, 0], to: [4.062, 1.478], r: 0.95 },
            ],
            points: [
              { x: 2.907, y: 4.652 },
              { x: 0, y: 0 },
              { x: 4.6, y: 0 },
              { x: 2.907, y: 0 },
              { x: 4.062, y: 1.478 },
              { x: 1.292, y: 2.067 },
            ],
            labels: [
              { x: 0.828, y: 0.191, text: "58°", pos: "c", style: "plain" },
              { x: 3.779, y: 0.22, text: "70°", pos: "c", style: "plain" },
              { x: 2.423, y: 1.61, text: "?", pos: "c", style: "plain" },
              { x: 2.907, y: 4.652, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 4.6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.907, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.062, y: 1.478, text: "E", pos: "ne", style: "italic" },
              { x: 1.292, y: 2.067, text: "F", pos: "nw", style: "italic" },
            ],
            alt: "Acute triangle ABC with angle B 58 degrees and angle C 70 degrees. The altitudes AD, BE and CF are drawn, and triangle DEF is drawn in accent colour with angle DFE marked by a question mark.",
          },
          answer: String.raw`$40^\circ$`,
        },
        {
          stem: String.raw`Points $D$, $E$, $F$ lie on the sides $BC$, $CA$, $AB$ of triangle $ABC$. The circle through $A$, $E$, $F$ and the circle through $B$, $F$, $D$ meet again at a point $M$ inside the triangle. Prove that $C$, $D$, $M$, $E$ lie on a circle.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.6, 5.5],
            y: [-1.1, 4.3],
            equal: true,
            axes: false,
            circles: [
              { c: [2.113, 2.289], r: 1.543, tone: "accent" },
              { c: [1.1, 0.62], r: 1.263, tone: "good" },
            ],
            segments: [
              { from: [1.3, 3.6], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [5, 0], to: [1.3, 3.6], tone: "ink" },
            ],
            points: [
              { x: 1.3, y: 3.6 },
              { x: 0, y: 0 },
              { x: 5, y: 0 },
              { x: 2.2, y: 0 },
              { x: 3.446, y: 1.512 },
              { x: 0.65, y: 1.8 },
              { x: 2.354, y: 0.765 },
            ],
            labels: [
              { x: 1.3, y: 3.6, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 5, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.2, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.446, y: 1.512, text: "E", pos: "ne", style: "italic" },
              { x: 0.65, y: 1.8, text: "F", pos: "w", style: "italic" },
              { x: 2.354, y: 0.765, text: "M", pos: "e", style: "italic" },
            ],
            alt: "Triangle ABC with D on BC, E on CA and F on AB. The circle through A, E, F and the circle through B, F, D are drawn; besides F they meet at a point M inside the triangle.",
          },
          answer: String.raw`**Proof.** Key idea: the cyclic quadrilaterals $AFME$ and $BDMF$ give $\angle FME = 180^\circ - \angle A$ and $\angle FMD = 180^\circ - \angle B$, so $\angle DME = 360^\circ - \angle FME - \angle FMD = \angle A + \angle B = 180^\circ - \angle C$, and $CDME$ has opposite angles adding to $180^\circ$.`,
        },
        {
          stem: String.raw`$ABCD$ is a cyclic quadrilateral with $AB = AD$ and $\angle BAD = 100^\circ$. Find $\angle ACB$.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-2.45, 2.45], "y": [-2.45, 2.45], "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 2, "tone": "ink"}], "segments": [{"from": [0.0, 2.0], "to": [-1.97, 0.347], "tone": "ink"}, {"from": [-1.97, 0.347], "to": [0.347, -1.97], "tone": "ink"}, {"from": [0.347, -1.97], "to": [1.97, 0.347], "tone": "ink"}, {"from": [1.97, 0.347], "to": [0.0, 2.0], "tone": "ink"}, {"from": [0.0, 2.0], "to": [0.347, -1.97], "tone": "muted"}, {"from": [-0.927, 1.105], "to": [-1.043, 1.243], "tone": "ink"}, {"from": [1.043, 1.243], "to": [0.927, 1.105], "tone": "ink"}], "angles": [{"at": [0.0, 2.0], "from": [-1.97, 0.347], "to": [1.97, 0.347], "r": 0.5, "label": "100°"}, {"at": [0.347, -1.97], "from": [0.0, 2.0], "to": [-1.97, 0.347], "r": 0.6, "label": "?"}], "labels": [{"x": 0.0, "y": 2.0, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.97, "y": 0.347, "text": "B", "pos": "w", "style": "italic"}, {"x": 0.347, "y": -1.97, "text": "C", "pos": "s", "style": "italic"}, {"x": 1.97, "y": 0.347, "text": "D", "pos": "e", "style": "italic"}], "alt": "Cyclic quadrilateral ABCD in a circle with AB and AD marked equal and angle BAD equal to 100 degrees. The diagonal AC is drawn and angle ACB is marked with a question mark."},
          choices: [String.raw`$30^\circ$`, String.raw`$40^\circ$`, String.raw`$45^\circ$`, String.raw`$50^\circ$`, String.raw`$80^\circ$`],
          answer: String.raw`(B) $40^\circ$`,
        },
        {
          stem: String.raw`In convex quadrilateral $ABCD$, $\angle ABD = \angle ACD = 35^\circ$, $\angle BAC = 40^\circ$ and $\angle ADB = 60^\circ$. Find $\angle CAD$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-2.329, 1.982], "y": [-1.736, 1.982], "equal": true, "axes": false, "segments": [{"from": [-1.879, -0.684], "to": [1.532, -1.286], "tone": "ink"}, {"from": [1.532, -1.286], "to": [1.532, 1.286], "tone": "ink"}, {"from": [1.532, 1.286], "to": [-1.286, 1.532], "tone": "ink"}, {"from": [-1.286, 1.532], "to": [-1.879, -0.684], "tone": "ink"}, {"from": [-1.879, -0.684], "to": [1.532, 1.286], "tone": "muted"}, {"from": [1.532, -1.286], "to": [-1.286, 1.532], "tone": "muted"}], "angles": [{"at": [1.532, -1.286], "from": [-1.286, 1.532], "to": [-1.879, -0.684], "r": 0.7, "label": "35°"}, {"at": [1.532, 1.286], "from": [-1.286, 1.532], "to": [-1.879, -0.684], "r": 0.7, "label": "35°"}, {"at": [-1.879, -0.684], "from": [1.532, -1.286], "to": [1.532, 1.286], "r": 0.75, "label": "40°"}, {"at": [-1.286, 1.532], "from": [-1.879, -0.684], "to": [1.532, -1.286], "r": 0.7, "label": "60°"}, {"at": [-1.879, -0.684], "from": [1.532, 1.286], "to": [-1.286, 1.532], "r": 0.95, "label": "?"}], "labels": [{"x": -1.879, "y": -0.684, "text": "A", "pos": "sw", "style": "italic"}, {"x": 1.532, "y": -1.286, "text": "B", "pos": "se", "style": "italic"}, {"x": 1.532, "y": 1.286, "text": "C", "pos": "ne", "style": "italic"}, {"x": -1.286, "y": 1.532, "text": "D", "pos": "nw", "style": "italic"}], "alt": "Convex quadrilateral ABCD with both diagonals. Angles ABD and ACD are both 35 degrees, angle BAC is 40 degrees and angle ADB is 60 degrees; angle CAD is marked with a question mark."},
          answer: String.raw`$45^\circ$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, $BE$ and $CF$ are altitudes, so $B$, $C$, $E$, $F$ lie on a circle. Prove that the tangents to this circle at $E$ and at $F$ meet on the altitude from $A$.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-0.4, 5.051], "y": [-2.7, 6.06], "equal": true, "axes": false, "circles": [{"c": [2.3, 0.0], "r": 2.3, "tone": "muted", "dashed": true}], "segments": [{"from": [2.761, 5.66], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.6, 0.0], "tone": "ink"}, {"from": [4.6, 0.0], "to": [2.761, 5.66], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.161, 1.352], "tone": "muted"}, {"from": [4.6, 0.0], "to": [0.884, 1.812], "tone": "muted"}, {"from": [2.761, 5.66], "to": [2.761, 0.0], "tone": "muted", "dashed": true}, {"from": [4.651, 0.678], "to": [2.411, 3.76], "tone": "accent"}, {"from": [0.227, 1.299], "to": [3.23, 3.645], "tone": "accent"}], "rightAngles": [{"at": [4.161, 1.352], "a": [0.439, -1.352], "b": [-4.161, -1.352], "size": 0.16}, {"at": [0.884, 1.812], "a": [1.877, 3.848], "b": [3.716, -1.812], "size": 0.16}, {"at": [2.761, 0.0], "a": [1.839, 0.0], "b": [0.0, 5.66], "size": 0.16}], "points": [{"x": 2.3, "y": 0.0}], "labels": [{"x": 2.761, "y": 5.66, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.6, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 4.161, "y": 1.352, "text": "E", "pos": "e", "style": "italic"}, {"x": 0.884, "y": 1.812, "text": "F", "pos": "w", "style": "italic"}, {"x": 2.761, "y": 0.0, "text": "D", "pos": "s", "style": "italic"}, {"x": 2.3, "y": 0.0, "text": "M", "pos": "s", "style": "italic"}], "alt": "Acute triangle ABC with altitudes BE and CF and the dashed altitude AD. The dashed circle with diameter BC passes through E and F, and the tangents to it at E and F are drawn."},
          answer: String.raw`**Proof.** Key idea: let $H$ be the orthocentre and $N$ the midpoint of $AH$, the centre of the circle through $A, F, H, E$; then $\angle NEA = \angle NAE = 90^\circ - \angle C$ and $\angle MEC = \angle C$ ($M$ the midpoint of $BC$), so $\angle NEM = 90^\circ$ and $NE$ is the tangent at $E$; likewise $NF$.`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB \ne AC$. A circle $\omega$ with centre $W$ passes through $B$ and $C$, is not the circle with diameter $BC$, and meets the sides $AB$ and $AC$ again at $F$ and $E$. The circumcircles of triangles $ABC$ and $AEF$ meet again at $Q$, and $K$ and $M$ are the midpoints of $EF$ and $BC$. Prove that $Q$, $W$, $K$, $M$ lie on a circle.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-1.965, 2.565], "y": [-3.025, 2.765], "equal": true, "axes": false, "circles": [{"c": [0.3, 0.5], "r": 1.965, "tone": "ink"}, {"c": [0.3, -0.7], "r": 2.025, "tone": "good"}, {"c": [0.8, 1.2], "r": 1.2, "tone": "muted", "dashed": true}], "segments": [{"from": [0.8, 2.4], "to": [-1.6, 0.0], "tone": "ink"}, {"from": [-1.6, 0.0], "to": [2.2, 0.0], "tone": "ink"}, {"from": [2.2, 0.0], "to": [0.8, 2.4], "tone": "ink"}, {"from": [1.845, 0.609], "to": [-0.4, 1.2], "tone": "accent"}], "points": [{"x": 0.3, "y": -0.7}, {"x": 0.722, "y": 0.905}, {"x": 0.3, "y": 0.0}, {"x": 1.935, "y": 1.589}, {"x": 1.845, "y": 0.609}, {"x": -0.4, "y": 1.2}], "labels": [{"x": 0.8, "y": 2.4, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.6, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 2.2, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 1.845, "y": 0.609, "text": "E", "pos": "e", "style": "italic"}, {"x": -0.4, "y": 1.2, "text": "F", "pos": "w", "style": "italic"}, {"x": 0.3, "y": -0.7, "text": "W", "pos": "e", "style": "italic"}, {"x": 0.722, "y": 0.905, "text": "K", "pos": "s", "style": "italic"}, {"x": 0.3, "y": 0.0, "text": "M", "pos": "s", "style": "italic"}, {"x": 1.935, "y": 1.589, "text": "Q", "pos": "e", "style": "italic"}, {"x": 1.758, "y": -2.158, "text": "ω", "pos": "se", "style": "italic"}], "alt": "Triangle ABC in its circumcircle. A second circle omega with centre W passes through B and C and meets AB at F and AC at E. The dashed circumcircle of AEF meets the circumcircle again at Q. K is the midpoint of EF and M the midpoint of BC."},
          answer: String.raw`**Proof.** Key idea: let lines $EF$ and $BC$ meet at $R$; inscribed angles give $\triangle QFE \sim \triangle QBC$, so $Q$ is the centre of a spiral similarity taking $F, E, K$ to $B, C, M$, whence $\angle KQM = \angle KRM$ and $Q$ lies on the circle $KMR$, which is the circle with diameter $WR$ because $WK \perp EF$ and $WM \perp BC$.`,
        },
      ],
    },
    {
      id: "G1-tangents",
      name: "Tangents and the tangent–chord angle",
      tests: String.raw`A tangent to a circle appears, from an external point or at a vertex of an inscribed triangle. Use radius $\perp$ tangent, equal tangents and the tangent–chord angle, often together with an exterior angle.`,
      questions: [
        {
          stem: String.raw`$PA$ and $PB$ are tangents from $P$ to a circle with centre $O$, and $\angle APB = 48^\circ$. $C$ is a point on the major arc $AB$. Find $\angle ACB$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-2.3, 4.925],
            y: [-2.3, 2.3],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1.8, tone: "ink" },
            ],
            segments: [
              { from: [4.425, 0], to: [0.732, 1.644], tone: "ink" },
              { from: [4.425, 0], to: [0.732, -1.644], tone: "ink" },
              { from: [-1.739, -0.466], to: [0.732, 1.644], tone: "accent" },
              { from: [-1.739, -0.466], to: [0.732, -1.644], tone: "accent" },
            ],
            angles: [
              { at: [4.425, 0], from: [0.732, 1.644], to: [0.732, -1.644], r: 0.9, label: "48°" },
              { at: [-1.739, -0.466], from: [0.732, -1.644], to: [0.732, 1.644], r: 0.6, label: "?" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 4.425, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "n", style: "italic" },
              { x: 4.425, y: 0, text: "P", pos: "e", style: "italic" },
              { x: 0.732, y: 1.644, text: "A", pos: "n", style: "italic" },
              { x: 0.732, y: -1.644, text: "B", pos: "s", style: "italic" },
              { x: -1.739, y: -0.466, text: "C", pos: "w", style: "italic" },
            ],
            alt: "Circle with centre O. Tangents PA and PB from an external point P meet at 48 degrees. C is on the major arc and angle ACB is marked with a question mark.",
          },
          answer: String.raw`$66^\circ$`,
        },
        {
          stem: String.raw`Triangle $ABC$ is inscribed in a circle. The tangent to the circle at $A$ meets line $BC$ at $P$, with $B$ between $P$ and $C$. If $\angle APC = 30^\circ$ and $\angle BAC = 70^\circ$, find $\angle ACB$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-3.214, 3.703],
            y: [-1.52, 3.177],
            equal: true,
            axes: false,
            circles: [
              { c: [1.6, 0.582], r: 1.703, tone: "ink" },
            ],
            segments: [
              { from: [0.749, 2.057], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [3.2, 0], tone: "ink" },
              { from: [3.2, 0], to: [0.749, 2.057], tone: "ink" },
              { from: [-2.814, 0], to: [0, 0], tone: "ink" },
              { from: [-2.814, 0], to: [1.996, 2.777], tone: "accent" },
            ],
            angles: [
              { at: [-2.814, 0], from: [3.2, 0], to: [0.749, 2.057], r: 1, label: "30°" },
              { at: [0.749, 2.057], from: [0, 0], to: [3.2, 0], r: 0.5, label: "70°" },
              { at: [3.2, 0], from: [0.749, 2.057], to: [0, 0], r: 0.6, label: "?" },
            ],
            points: [
              { x: -2.814, y: 0 },
            ],
            labels: [
              { x: 0.749, y: 2.057, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "s", style: "italic" },
              { x: 3.2, y: 0, text: "C", pos: "se", style: "italic" },
              { x: -2.814, y: 0, text: "P", pos: "sw", style: "italic" },
            ],
            alt: "Triangle ABC inscribed in a circle. The tangent at A meets line CB extended beyond B at P. Angle APC is 30 degrees, angle BAC is 70 degrees, and angle ACB is marked with a question mark.",
          },
          answer: String.raw`$40^\circ$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB < AC$. The tangent at $A$ to the circumcircle of $ABC$ meets line $BC$ at $P$, and the bisector of $\angle BAC$ meets $BC$ at $D$. Prove that $PD^2 = PB \cdot PC$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-4.018, 4.175],
            y: [-1.285, 3.666],
            equal: true,
            axes: false,
            circles: [
              { c: [1.7, 1.19], r: 2.075, tone: "ink" },
            ],
            segments: [
              { from: [0.51, 2.89], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [3.4, 0], tone: "ink" },
              { from: [3.4, 0], to: [0.51, 2.89], tone: "ink" },
              { from: [-3.618, 0], to: [0, 0], tone: "ink" },
              { from: [-3.618, 0], to: [0.51, 2.89], tone: "accent" },
              { from: [0.51, 2.89], to: [1.421, 0], tone: "good" },
            ],
            angles: [
              { at: [0.51, 2.89], from: [0, 0], to: [1.421, 0], r: 1 },
              { at: [0.51, 2.89], from: [1.421, 0], to: [3.4, 0], r: 1.1 },
            ],
            points: [
              { x: -3.618, y: 0 },
              { x: 1.421, y: 0 },
            ],
            labels: [
              { x: 0.51, y: 2.89, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "s", style: "italic" },
              { x: 3.4, y: 0, text: "C", pos: "se", style: "italic" },
              { x: -3.618, y: 0, text: "P", pos: "sw", style: "italic" },
              { x: 1.421, y: 0, text: "D", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC in its circumcircle with AB shorter than AC. The tangent at A meets line CB extended beyond B at P. The bisector of angle A meets BC at D, with the two equal half-angles marked.",
          },
          answer: String.raw`**Proof.** Key idea: by the tangent–chord angle $\angle PAD = \angle ACB + \tfrac12\angle BAC$, which is also the exterior angle $\angle PDA$ of triangle $ADC$; so $PA = PD$, and $PA^2 = PB \cdot PC$ by power of a point.`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ touches $BC$, $CA$, $AB$ at $D$, $E$, $F$. Given $\angle BAC = 50^\circ$, find $\angle EDF$.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-0.4, 5.0], "y": [-0.4, 5.287], "equal": true, "axes": false, "circles": [{"c": [2.079, 1.456], "r": 1.456, "tone": "ink"}], "segments": [{"from": [1.779, 4.887], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.6, 0.0], "tone": "ink"}, {"from": [4.6, 0.0], "to": [1.779, 4.887], "tone": "ink"}, {"from": [2.079, 0.0], "to": [3.339, 2.183], "tone": "accent"}, {"from": [3.339, 2.183], "to": [0.711, 1.953], "tone": "accent"}, {"from": [0.711, 1.953], "to": [2.079, 0.0], "tone": "accent"}], "angles": [{"at": [1.779, 4.887], "from": [0.0, 0.0], "to": [4.6, 0.0], "r": 0.5, "label": "50°"}, {"at": [2.079, 0.0], "from": [3.339, 2.183], "to": [0.711, 1.953], "r": 0.45, "label": "?"}], "labels": [{"x": 1.779, "y": 4.887, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.6, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 2.079, "y": 0.0, "text": "D", "pos": "s", "style": "italic"}, {"x": 3.339, "y": 2.183, "text": "E", "pos": "ne", "style": "italic"}, {"x": 0.711, "y": 1.953, "text": "F", "pos": "nw", "style": "italic"}], "alt": "Triangle ABC with its incircle touching BC at D, CA at E and AB at F. Angle BAC is 50 degrees, and in triangle DEF the angle EDF is marked with a question mark."},
          answer: String.raw`$65^\circ$`,
        },
        {
          stem: String.raw`$PA$ and $PB$ are tangents from $P$ to a circle with centre $O$, and $\angle APB = 44^\circ$. The tangent at a point $C$ of the minor arc $AB$ meets $PA$ at $X$ and $PB$ at $Y$. Find $\angle XOY$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-2.05, 4.721], "y": [-2.05, 2.05], "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 1.6, "tone": "ink"}], "segments": [{"from": [4.271, 0.0], "to": [0.599, 1.483], "tone": "ink"}, {"from": [4.271, 0.0], "to": [0.599, -1.483], "tone": "ink"}, {"from": [1.456, 1.137], "to": [1.758, -1.015], "tone": "accent"}, {"from": [0.0, 0.0], "to": [1.456, 1.137], "tone": "muted"}, {"from": [0.0, 0.0], "to": [1.758, -1.015], "tone": "muted"}], "angles": [{"at": [4.271, 0.0], "from": [0.599, 1.483], "to": [0.599, -1.483], "r": 0.9, "label": "44°"}, {"at": [0.0, 0.0], "from": [1.758, -1.015], "to": [1.456, 1.137], "r": 0.4, "label": "?"}], "points": [{"x": 0.0, "y": 0.0}], "labels": [{"x": 0.0, "y": 0.0, "text": "O", "pos": "w", "style": "italic"}, {"x": 4.271, "y": 0.0, "text": "P", "pos": "e", "style": "italic"}, {"x": 0.599, "y": 1.483, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.599, "y": -1.483, "text": "B", "pos": "s", "style": "italic"}, {"x": 1.584, "y": 0.223, "text": "C", "pos": "e", "style": "italic"}, {"x": 1.456, "y": 1.137, "text": "X", "pos": "ne", "style": "italic"}, {"x": 1.758, "y": -1.015, "text": "Y", "pos": "se", "style": "italic"}], "alt": "Circle with centre O and tangents PA and PB meeting at 44 degrees at P. The tangent at C on the minor arc AB meets PA at X and PB at Y; segments OX and OY are drawn and angle XOY is marked with a question mark."},
          answer: String.raw`$68^\circ$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has $AB = 6$ and $AC = 9$. The tangents to its circumcircle at $B$ and $C$ meet at $T$, and line $AT$ meets $BC$ at $K$. Find $BK : KC$.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-0.882, 5.007], "y": [-3.482, 4.348], "equal": true, "axes": false, "circles": [{"c": [2.062, 1.403], "r": 2.495, "tone": "ink"}], "segments": [{"from": [0.413, 3.274], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.125, 0.0], "tone": "ink"}, {"from": [4.125, 0.0], "to": [0.413, 3.274], "tone": "ink"}, {"from": [0.0, 0.0], "to": [2.062, -3.032], "tone": "muted"}, {"from": [4.125, 0.0], "to": [2.062, -3.032], "tone": "muted"}, {"from": [0.413, 3.274], "to": [2.062, -3.032], "tone": "accent"}], "points": [{"x": 1.269, "y": 0.0}, {"x": 2.062, "y": -3.032}], "labels": [{"x": 0.206, "y": 1.637, "text": "6", "pos": "nw", "style": "plain"}, {"x": 2.269, "y": 1.637, "text": "9", "pos": "ne", "style": "plain"}, {"x": 0.413, "y": 3.274, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 4.125, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 2.062, "y": -3.032, "text": "T", "pos": "s", "style": "italic"}, {"x": 1.269, "y": 0.0, "text": "K", "pos": "ne", "style": "italic"}], "alt": "Acute triangle ABC in its circumcircle with AB = 6 and AC = 9. The tangents at B and C meet at T below BC, and the segment AT crosses BC at K."},
          answer: String.raw`$4 : 9$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has circumcircle $\Gamma$ with centre $O$. A circle $\omega$ passes through $B$ and $C$ and contains $A$ in its interior. The tangent to $\Gamma$ at $A$ meets $\omega$ at $X$ and $Y$, where $X$ lies on the same side of line $OA$ as $B$. Lines $BX$ and $CY$ meet $\Gamma$ again at $U$ and $V$. Prove that $AU = AV$.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-2.112, 2.512], "y": [-1.646, 3.212], "equal": true, "axes": false, "circles": [{"c": [0.2, 0.53], "r": 1.876, "tone": "ink"}, {"c": [0.2, 0.9], "r": 2.012, "tone": "good"}], "segments": [{"from": [-0.55, 2.25], "to": [-1.6, 0.0], "tone": "ink"}, {"from": [-1.6, 0.0], "to": [2.0, 0.0], "tone": "ink"}, {"from": [2.0, 0.0], "to": [-0.55, 2.25], "tone": "ink"}, {"from": [-1.605, 1.79], "to": [0.776, 2.828], "tone": "accent"}, {"from": [-1.6, 0.0], "to": [-1.605, 1.79], "tone": "muted"}, {"from": [2.0, 0.0], "to": [0.776, 2.828], "tone": "muted"}], "points": [{"x": 0.2, "y": 0.53}, {"x": -1.605, "y": 1.79}, {"x": 0.776, "y": 2.828}, {"x": -1.603, "y": 1.05}, {"x": 1.046, "y": 2.205}], "labels": [{"x": -0.55, "y": 2.25, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.6, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 2.0, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 0.2, "y": 0.53, "text": "O", "pos": "s", "style": "italic"}, {"x": -1.605, "y": 1.79, "text": "X", "pos": "nw", "style": "italic"}, {"x": 0.776, "y": 2.828, "text": "Y", "pos": "ne", "style": "italic"}, {"x": -1.603, "y": 1.05, "text": "U", "pos": "e", "style": "italic"}, {"x": 1.046, "y": 2.205, "text": "V", "pos": "w", "style": "italic"}, {"x": -1.223, "y": 2.323, "text": "ω", "pos": "nw", "style": "italic"}, {"x": -0.926, "y": -0.971, "text": "Γ", "pos": "sw", "style": "italic"}], "alt": "Triangle ABC in its circumcircle Gamma with centre O. A second circle omega through B and C contains A. The tangent to the circumcircle at A meets omega at X and Y; lines BX and CY meet the circumcircle again at U and V."},
          answer: String.raw`**Proof.** Key idea: let $\omega$ meet lines $AB$ and $AC$ again at $F$ and $E$; then $EF$ is antiparallel to $BC$, hence parallel to the tangent $XY$, so $XYEF$ is an isosceles trapezium and inscribed angles in $\omega$ give $\angle ABX = \angle FYX = \angle EXY = \angle ACY$, that is $\angle ABU = \angle ACV$, so the chords $AU$ and $AV$ of $\Gamma$ are equal.`,
        },
      ],
    },
    {
      id: "G1-power-point",
      name: "Power of a point",
      tests: String.raw`Products of lengths along lines through one point: crossing chords, secants and tangents. Recognise it by two lines through a point each cutting a circle, by a length to be found from a product, or by a concyclicity to prove from equal products.`,
      questions: [
        {
          stem: String.raw`Chords $AB$ and $CD$ of a circle meet at $P$. Given $AP = 6$, $PB = 8$, $CD = 16$ and $CP < PD$, find $CP$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-3.5, 3.5],
            y: [-3.5, 3.5],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 3, tone: "ink" },
            ],
            segments: [
              { from: [2.263, 1.969], to: [1.451, -2.626], tone: "accent" },
              { from: [2.843, -0.957], to: [-0.87, 2.871], tone: "good" },
            ],
            points: [
              { x: 1.915, y: 0 },
            ],
            labels: [
              { x: 2.089, y: 0.985, text: "6", pos: "n", style: "plain" },
              { x: 1.683, y: -1.313, text: "8", pos: "n", style: "plain" },
              { x: 1.915, y: 0, text: "P", pos: "e", style: "italic" },
              { x: 2.263, y: 1.969, text: "A", pos: "ne", style: "italic" },
              { x: 1.451, y: -2.626, text: "B", pos: "se", style: "italic" },
              { x: 2.843, y: -0.957, text: "C", pos: "e", style: "italic" },
              { x: -0.87, y: 2.871, text: "D", pos: "n", style: "italic" },
            ],
            alt: "Circle with chords AB and CD crossing at P. AP is labelled 6 and PB is labelled 8.",
          },
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, $D$ is the foot of the altitude from $A$. $P$ and $Q$ are the feet of the perpendiculars from $D$ to $AB$ and $AC$. Prove that $B$, $P$, $Q$, $C$ lie on a circle.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.5, 5.1],
            y: [-0.5, 4.156],
            equal: true,
            axes: false,
            segments: [
              { from: [1.944, 3.656], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.6, 0], tone: "ink" },
              { from: [4.6, 0], to: [1.944, 3.656], tone: "ink" },
              { from: [1.944, 3.656], to: [1.944, 0], tone: "muted" },
              { from: [1.944, 0], to: [0.428, 0.806], tone: "accent" },
              { from: [1.944, 0], to: [3.682, 1.263], tone: "accent" },
            ],
            rightAngles: [
              { at: [1.944, 0], a: [0, 3.656], b: [2.656, 0], size: 0.2 },
              { at: [0.428, 0.806], a: [1.515, -0.806], b: [1.515, 2.85], size: 0.18 },
              { at: [3.682, 1.263], a: [-1.738, -1.263], b: [-1.738, 2.393], size: 0.18 },
            ],
            points: [
              { x: 1.944, y: 3.656 },
              { x: 0, y: 0 },
              { x: 4.6, y: 0 },
              { x: 1.944, y: 0 },
              { x: 0.428, y: 0.806 },
              { x: 3.682, y: 1.263 },
            ],
            labels: [
              { x: 1.944, y: 3.656, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 4.6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 1.944, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 0.428, y: 0.806, text: "P", pos: "nw", style: "italic" },
              { x: 3.682, y: 1.263, text: "Q", pos: "ne", style: "italic" },
            ],
            alt: "Acute triangle ABC with altitude AD. From D, perpendiculars DP and DQ are dropped to AB and AC, with right angles marked at D, P and Q.",
          },
          answer: String.raw`**Proof.** Key idea: in the right triangles $ADB$ and $ADC$, $AP \cdot AB = AD^2 = AQ \cdot AC$, and the converse of power of a point at $A$ gives the circle.`,
        },
        {
          stem: String.raw`$ABCD$ is a cyclic quadrilateral in which the diagonal $AC$ bisects $\angle BCD$. If $AB = 6$, $BC = 9$ and $CD = 4$, find $AC$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-1.167, 3.567],
            y: [-0.937, 3.797],
            equal: true,
            axes: false,
            circles: [
              { c: [1.2, 1.43], r: 1.867, tone: "ink" },
            ],
            segments: [
              { from: [2.4, 0], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [1.5, 3.273], tone: "ink" },
              { from: [1.5, 3.273], to: [2.817, 2.364], tone: "ink" },
              { from: [2.817, 2.364], to: [2.4, 0], tone: "ink" },
              { from: [2.4, 0], to: [1.5, 3.273], tone: "accent", dashed: true },
            ],
            angles: [
              { at: [1.5, 3.273], from: [0, 0], to: [2.4, 0], r: 0.8 },
              { at: [1.5, 3.273], from: [2.4, 0], to: [2.817, 2.364], r: 0.95 },
            ],
            labels: [
              { x: 1.2, y: 0, text: "6", pos: "n", style: "plain" },
              { x: 0.75, y: 1.636, text: "9", pos: "se", style: "plain" },
              { x: 2.158, y: 2.818, text: "4", pos: "sw", style: "plain" },
              { x: 2.4, y: 0, text: "A", pos: "se", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 1.5, y: 3.273, text: "C", pos: "n", style: "italic" },
              { x: 2.817, y: 2.364, text: "D", pos: "ne", style: "italic" },
            ],
            alt: "Cyclic quadrilateral ABCD with AB = 6, BC = 9 and CD = 4. The diagonal AC is dashed, and the two equal angles BCA and ACD are marked.",
          },
          answer: String.raw`$6\sqrt{2}$`,
        },
        {
          stem: String.raw`From a point $P$ outside a circle, a tangent $PT$ of length $12$ is drawn. The line through $P$ and the centre of the circle meets the circle at $A$ and $B$, with $PA = 8$. Find the radius of the circle.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-1.7, 3.7], "y": [-1.7, 1.7], "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 1.25, "tone": "ink"}], "segments": [{"from": [3.25, 0.0], "to": [-1.25, 0.0], "tone": "accent"}, {"from": [3.25, 0.0], "to": [0.481, 1.154], "tone": "good"}], "rightAngles": [{"at": [0.481, 1.154], "a": [-0.481, -1.154], "b": [2.769, -1.154], "size": 0.18}], "points": [{"x": 0.0, "y": 0.0}, {"x": 1.25, "y": 0.0}, {"x": -1.25, "y": 0.0}, {"x": 3.25, "y": 0.0}], "labels": [{"x": 1.865, "y": 0.577, "text": "12", "pos": "ne", "style": "plain"}, {"x": 2.25, "y": 0.0, "text": "8", "pos": "s", "style": "plain"}, {"x": 0.0, "y": 0.0, "text": "O", "pos": "s", "style": "italic"}, {"x": 3.25, "y": 0.0, "text": "P", "pos": "e", "style": "italic"}, {"x": 1.25, "y": 0.0, "text": "A", "pos": "sw", "style": "italic"}, {"x": -1.25, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 0.481, "y": 1.154, "text": "T", "pos": "n", "style": "italic"}], "alt": "A circle with centre O and an external point P. The tangent PT has length 12. The line from P through O meets the circle first at A, with PA = 8, and then at B."},
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = AC = 10$ and $BC = 12$. Point $D$ lies on $BC$ with $BD = 4$. The circle through $A$, $B$, $D$ meets $AC$ again at $E$, and the circle through $A$, $D$, $C$ meets $AB$ again at $F$. Find $BF + CE$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-3.279, 2.639], "y": [-0.959, 3.519], "equal": true, "axes": false, "circles": [{"c": [-1.28, 1.52], "r": 1.649, "tone": "accent"}, {"c": [0.64, 1.04], "r": 1.649, "tone": "good"}], "segments": [{"from": [0.0, 2.56], "to": [-1.92, 0.0], "tone": "ink"}, {"from": [-1.92, 0.0], "to": [1.92, 0.0], "tone": "ink"}, {"from": [1.92, 0.0], "to": [0.0, 2.56], "tone": "ink"}], "points": [{"x": -0.64, "y": 0.0}, {"x": 0.077, "y": 2.458}, {"x": -0.998, "y": 1.229}], "labels": [{"x": 0.0, "y": 2.56, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.92, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 1.92, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": -0.64, "y": 0.0, "text": "D", "pos": "s", "style": "italic"}, {"x": 0.077, "y": 2.458, "text": "E", "pos": "e", "style": "italic"}, {"x": -0.998, "y": 1.229, "text": "F", "pos": "w", "style": "italic"}], "alt": "Isosceles triangle ABC with D on BC. The circle through A, B, D crosses AC again at E, and the circle through A, D, C crosses AB again at F."},
          answer: String.raw`$\tfrac{72}{5}$`,
        },
        {
          stem: String.raw`Chords $AB$ and $CD$ of a circle of radius $5$ are perpendicular and meet at $P$, with $PA = 2$ and $PB = 6$. Find $CD$.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-1.65, 3.25], "y": [-1.25, 3.65], "equal": true, "axes": false, "circles": [{"c": [0.8, 1.2], "r": 2.0, "tone": "ink"}], "segments": [{"from": [-0.8, 0.0], "to": [2.4, 0.0], "tone": "accent"}, {"from": [0.0, 3.033], "to": [0.0, -0.633], "tone": "good"}], "rightAngles": [{"at": [0.0, 0.0], "a": [2.4, 0.0], "b": [0.0, 3.033], "size": 0.18}], "points": [{"x": 0.0, "y": 0.0}], "labels": [{"x": -0.4, "y": 0.0, "text": "2", "pos": "s", "style": "plain"}, {"x": 1.2, "y": 0.0, "text": "6", "pos": "s", "style": "plain"}, {"x": -0.8, "y": 0.0, "text": "A", "pos": "w", "style": "italic"}, {"x": 2.4, "y": 0.0, "text": "B", "pos": "e", "style": "italic"}, {"x": 0.0, "y": 3.033, "text": "C", "pos": "n", "style": "italic"}, {"x": 0.0, "y": -0.633, "text": "D", "pos": "s", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "P", "pos": "nw", "style": "italic"}], "alt": "A circle with perpendicular chords AB and CD crossing at P. PA = 2 and PB = 6."},
          answer: String.raw`$2\sqrt{21}$`,
        },
        {
          stem: String.raw`Circles $\omega_1$ and $\omega_2$ meet at $A$ and $B$. A common tangent touches $\omega_1$ at $P$ and $\omega_2$ at $Q$. The lines $QA$ and $QB$ meet $\omega_1$ again at $V$ and $Y$. Prove that $PV = PY$.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-1.95, 3.57], "y": [-0.35, 3.55], "equal": true, "axes": false, "circles": [{"c": [0.0, 1.6], "r": 1.6, "tone": "ink"}, {"c": [2.22, 1.0], "r": 1.0, "tone": "ink"}], "segments": [{"from": [-1.3, 0.0], "to": [3.12, 0.0], "tone": "muted"}, {"from": [2.22, 0.0], "to": [1.346, 2.465], "tone": "accent"}, {"from": [2.22, 0.0], "to": [-1.346, 2.465], "tone": "accent"}, {"from": [0.0, 0.0], "to": [1.346, 2.465], "tone": "good"}, {"from": [0.0, 0.0], "to": [-1.346, 2.465], "tone": "good"}], "points": [{"x": 0.0, "y": 0.0}, {"x": 2.22, "y": 0.0}, {"x": 1.59, "y": 1.776}, {"x": 1.285, "y": 0.647}, {"x": 1.346, "y": 2.465}, {"x": -1.346, "y": 2.465}], "labels": [{"x": 0.0, "y": 0.0, "text": "P", "pos": "s", "style": "italic"}, {"x": 2.22, "y": 0.0, "text": "Q", "pos": "s", "style": "italic"}, {"x": 1.59, "y": 1.776, "text": "A", "pos": "ne", "style": "italic"}, {"x": 1.285, "y": 0.647, "text": "B", "pos": "sw", "style": "italic"}, {"x": 1.346, "y": 2.465, "text": "V", "pos": "ne", "style": "italic"}, {"x": -1.346, "y": 2.465, "text": "Y", "pos": "w", "style": "italic"}, {"x": -1.2, "y": 2.8, "text": "ω₁", "pos": "nw", "style": "italic"}, {"x": 2.97, "y": 1.75, "text": "ω₂", "pos": "ne", "style": "italic"}], "alt": "Two circles omega 1 and omega 2 meeting at A and B, with a common tangent line touching omega 1 at P and omega 2 at Q. The lines QA and QB meet omega 1 again at V and Y, and the segments PV and PY are drawn."},
          answer: String.raw`**Proof.** Key idea: the tangent $QP$ gives $QP^2 = QA \cdot QV = QB \cdot QY$, so $\triangle QPA \sim \triangle QVP$ and $\triangle QPB \sim \triangle QYP$, whence $\dfrac{PV}{PY} = \dfrac{PA}{PB} \cdot \dfrac{QB}{QA}$; and $\dfrac{PA}{PB} = \dfrac{QA}{QB}$ because line $AB$ bisects $PQ$ at a point $M$ with $\triangle MPB \sim \triangle MAP$ and $\triangle MQB \sim \triangle MAQ$.`,
        },
      ],
    },
    {
      id: "G1-radical-axis",
      name: "Radical axis and radical centre",
      tests: String.raw`Two or three circles with equal tangents from a point, a common chord, or a point with the same power with respect to several circles. Recognise it by "tangents of equal length" or a line to be shown through a special point.`,
      questions: [
        {
          stem: String.raw`Two circles have radii $5$ and $9$, and their centres are $28$ apart. Point $P$ lies on the segment joining the centres, and the tangents from $P$ to the two circles have equal length. Find this length.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-6.2, 38.2],
            y: [-12.8, 10.2],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 5, tone: "ink" },
              { c: [28, 0], r: 9, tone: "ink" },
            ],
            segments: [
              { from: [0, 0], to: [28, 0], tone: "muted", dashed: true },
              { from: [13, 0], to: [1.923, 4.615], tone: "accent" },
              { from: [13, 0], to: [22.6, 7.2], tone: "accent" },
              { from: [0, 0], to: [1.923, 4.615], tone: "muted" },
              { from: [28, 0], to: [22.6, 7.2], tone: "muted" },
              { from: [0, -11], to: [28, -11], tone: "muted", arrow: true, label: "28", pos: "s", style: "plain", arrowStart: true },
              { from: [0, -5.6], to: [0, -11.6], tone: "muted", thin: true },
              { from: [28, -9.6], to: [28, -11.6], tone: "muted", thin: true },
            ],
            rightAngles: [
              { at: [1.923, 4.615], a: [-1.923, -4.615], b: [11.077, -4.615], size: 1 },
              { at: [22.6, 7.2], a: [5.4, -7.2], b: [-9.6, -7.2], size: 1 },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 28, y: 0 },
              { x: 13, y: 0 },
            ],
            labels: [
              { x: 0.962, y: 2.308, text: "5", pos: "nw", style: "plain" },
              { x: 25.3, y: 3.6, text: "9", pos: "ne", style: "plain" },
              { x: 13, y: 0, text: "P", pos: "s", style: "italic" },
            ],
            alt: "Two separate circles with radii 5 and 9 whose centres are 28 apart. From a point P on the segment joining the centres, a tangent is drawn to each circle; the radii to the points of contact are perpendicular to the tangents.",
          },
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Find the point $P$ from which the tangents to the three circles
$$x^2 + y^2 = 1, \qquad (x - 10)^2 + y^2 = 1, \qquad x^2 + (y - 12)^2 = 25$$
all have the same length, and find this common length.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-6, 13],
            y: [-2.5, 18],
            equal: true,
            axes: true,
            xTicks: [
              { x: 10, label: "10" },
            ],
            yTicks: [
              { y: 12, label: "12" },
            ],
            originLabel: false,
            circles: [
              { c: [0, 0], r: 1, tone: "accent" },
              { c: [10, 0], r: 1, tone: "accent" },
              { c: [0, 12], r: 5, tone: "accent" },
            ],
            alt: "Coordinate axes with three circles: radius 1 centred at the origin, radius 1 centred at (10, 0), and radius 5 centred at (0, 12).",
          },
          answer: String.raw`$P = (5, 5)$; length $7$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has orthocentre $H$. Points $E$ and $F$ lie on the sides $CA$ and $AB$. The circles with diameters $BE$ and $CF$ meet at $X$ and $Y$. Prove that $H$ lies on line $XY$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.56, 5.669],
            y: [-1.603, 4.1],
            equal: true,
            axes: false,
            circles: [
              { c: [1.807, 0.777], r: 1.967, tone: "accent" },
              { c: [2.993, 1.073], r: 2.276, tone: "good" },
            ],
            segments: [
              { from: [1.7, 3.7], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [5, 0], to: [1.7, 3.7], tone: "ink" },
              { from: [0, 0], to: [3.614, 1.554], tone: "muted" },
              { from: [5, 0], to: [0.986, 2.146], tone: "muted" },
            ],
            points: [
              { x: 1.7, y: 3.7 },
              { x: 0, y: 0 },
              { x: 5, y: 0 },
              { x: 3.614, y: 1.554 },
              { x: 0.986, y: 2.146 },
              { x: 1.404, y: 2.702 },
              { x: 2.356, y: -1.112 },
              { x: 1.7, y: 1.516 },
            ],
            labels: [
              { x: 1.7, y: 3.7, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 5, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3.614, y: 1.554, text: "E", pos: "ne", style: "italic" },
              { x: 0.986, y: 2.146, text: "F", pos: "w", style: "italic" },
              { x: 1.404, y: 2.702, text: "X", pos: "e", style: "italic" },
              { x: 2.356, y: -1.112, text: "Y", pos: "s", style: "italic" },
              { x: 1.7, y: 1.516, text: "H", pos: "e", style: "italic" },
            ],
            alt: "Acute triangle ABC with orthocentre H. E is on CA and F is on AB. The circle with diameter BE and the circle with diameter CF are drawn; they meet at X and Y.",
          },
          answer: String.raw`**Proof.** Key idea: the circle on diameter $BE$ passes through the foot $B_1$ of the altitude from $B$, so the power of $H$ is $-HB \cdot HB_1$; likewise $-HC \cdot HC_1$ for the other circle, and $HB \cdot HB_1 = HC \cdot HC_1$ because $B, C, B_1, C_1$ are concyclic; so $H$ is on the radical axis $XY$.`,
        },
        {
          stem: String.raw`Two circles meet at $A$ and $B$. Point $P$ lies on line $AB$, with $A$ between $P$ and $B$, $PA = 2$ and $AB = 6$. The tangents from $P$ touch the circles at $T_1$ and $T_2$. Find $PT_1$.`,
          difficulty: 1,
          figure: {"type": "plot", "x": [-2.818, 3.485], "y": [-2.205, 2.45], "equal": true, "axes": false, "circles": [{"c": [-0.88, 0.0], "r": 1.488, "tone": "ink"}, {"c": [1.28, 0.0], "r": 1.755, "tone": "ink"}], "segments": [{"from": [0.0, 2.0], "to": [0.0, -1.2], "tone": "muted"}, {"from": [0.0, 2.0], "to": [-1.469, 1.366], "tone": "accent"}, {"from": [0.0, 2.0], "to": [1.577, 1.729], "tone": "accent"}], "points": [{"x": 0.0, "y": 1.2}, {"x": 0.0, "y": -1.2}, {"x": 0.0, "y": 2.0}], "labels": [{"x": 0.0, "y": 1.6, "text": "2", "pos": "e", "style": "plain"}, {"x": 0.0, "y": 0.0, "text": "6", "pos": "e", "style": "plain"}, {"x": 0.0, "y": 1.2, "text": "A", "pos": "w", "style": "italic"}, {"x": 0.0, "y": -1.2, "text": "B", "pos": "s", "style": "italic"}, {"x": 0.0, "y": 2.0, "text": "P", "pos": "n", "style": "italic"}, {"x": -1.469, "y": 1.366, "text": "T₁", "pos": "w", "style": "italic"}, {"x": 1.577, "y": 1.729, "text": "T₂", "pos": "e", "style": "italic"}], "alt": "Two circles meeting at A and B. P is on line AB beyond A, with PA = 2 and AB = 6. Tangents from P touch the left circle at T1 and the right circle at T2."},
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Circles $\omega_1$ and $\omega_2$ meet at $A$ and $B$. A common tangent touches $\omega_1$ at $P$ and $\omega_2$ at $Q$, and line $AB$ meets $PQ$ at $M$, with $A$ between $M$ and $B$. Given $MA = 2$ and $AB = 5$, find $PQ$.`,
          difficulty: 2,
          figure: {"type": "plot", "x": [-4.645, 3.375], "y": [-0.4, 5.747], "equal": true, "axes": false, "circles": [{"c": [-1.571, 2.673], "r": 2.673, "tone": "ink"}, {"c": [1.571, 1.404], "r": 1.404, "tone": "ink"}], "segments": [{"from": [-2.357, 0.0], "to": [2.357, 0.0], "tone": "accent"}, {"from": [0.0, 0.0], "to": [1.101, 2.726], "tone": "muted"}], "points": [{"x": -1.571, "y": 0.0}, {"x": 1.571, "y": 0.0}, {"x": 0.0, "y": 0.0}, {"x": 0.315, "y": 0.779}, {"x": 1.101, "y": 2.726}], "labels": [{"x": 0.157, "y": 0.389, "text": "2", "pos": "e", "style": "plain"}, {"x": -1.571, "y": 0.0, "text": "P", "pos": "s", "style": "italic"}, {"x": 1.571, "y": 0.0, "text": "Q", "pos": "s", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "M", "pos": "s", "style": "italic"}, {"x": 0.315, "y": 0.779, "text": "A", "pos": "e", "style": "italic"}, {"x": 1.101, "y": 2.726, "text": "B", "pos": "n", "style": "italic"}], "alt": "Two circles meeting at A and B, with a common tangent line touching them at P and Q. Line BA extended meets PQ at M, with MA = 2."},
          answer: String.raw`$2\sqrt{14}$`,
        },
        {
          stem: String.raw`Three circles with radii $1$, $8$ and $9$ touch each other externally. There is a point from which the tangents to all three circles have the same length. Find this length.`,
          difficulty: 3,
          figure: {"type": "plot", "x": [-3.3, 3.7], "y": [-1.9, 3.7], "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 0.2, "tone": "ink"}, {"c": [1.8, 0.0], "r": 1.6, "tone": "ink"}, {"c": [-1.2, 1.6], "r": 1.8, "tone": "ink"}], "points": [{"x": 0.0, "y": 0.0}, {"x": 1.8, "y": 0.0}, {"x": -1.2, "y": 1.6}], "labels": [{"x": 0.0, "y": -0.2, "text": "1", "pos": "s", "style": "plain"}, {"x": 1.8, "y": 0.0, "text": "8", "pos": "s", "style": "plain"}, {"x": -1.2, "y": 1.6, "text": "9", "pos": "s", "style": "plain"}], "alt": "Three circles with radii 1, 8 and 9, each touching the other two from outside; their centres are marked."},
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has circumcircle $\Gamma$. The tangents to $\Gamma$ at $B$ and $C$ meet at $T$, and $M$ and $N$ are the midpoints of $TB$ and $TC$. Line $MN$ meets lines $AB$ and $AC$ at $X$ and $Y$. Prove that $A$, $X$, $T$, $Y$ lie on a circle.`,
          difficulty: 4,
          figure: {"type": "plot", "x": [-2.479, 3.658], "y": [-3.586, 3.163], "equal": true, "axes": false, "circles": [{"c": [0.2, 0.893], "r": 1.92, "tone": "ink"}], "segments": [{"from": [-0.45, 2.7], "to": [-2.129, -1.618], "tone": "ink"}, {"from": [-0.45, 2.7], "to": [3.308, -1.618], "tone": "ink"}, {"from": [-1.5, 0.0], "to": [1.9, 0.0], "tone": "ink"}, {"from": [0.2, -3.236], "to": [-1.5, 0.0], "tone": "muted"}, {"from": [0.2, -3.236], "to": [1.9, 0.0], "tone": "muted"}, {"from": [-2.129, -1.618], "to": [3.308, -1.618], "tone": "accent"}], "points": [{"x": 0.2, "y": -3.236}, {"x": -0.65, "y": -1.618}, {"x": 1.05, "y": -1.618}, {"x": -2.129, "y": -1.618}, {"x": 3.308, "y": -1.618}], "labels": [{"x": -0.45, "y": 2.7, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.5, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 1.9, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 0.2, "y": -3.236, "text": "T", "pos": "s", "style": "italic"}, {"x": -0.65, "y": -1.618, "text": "M", "pos": "sw", "style": "italic"}, {"x": 1.05, "y": -1.618, "text": "N", "pos": "se", "style": "italic"}, {"x": -2.129, "y": -1.618, "text": "X", "pos": "w", "style": "italic"}, {"x": 3.308, "y": -1.618, "text": "Y", "pos": "e", "style": "italic"}], "alt": "Acute triangle ABC in its circumcircle. The tangents at B and C meet at T below BC. M and N are the midpoints of TB and TC, and the line MN meets AB extended beyond B at X and AC extended beyond C at Y."},
          answer: String.raw`**Proof.** Key idea: treat $T$ as a circle of radius $0$; the tangent lengths give $MB = MT$ and $NC = NT$, so $MN$ is the radical axis of $\Gamma$ and $T$ and $XT^2 = XA \cdot XB$; then $\triangle XTB \sim \triangle XAT$ gives $\angle XTA = \angle XBT = \angle ACB$, likewise $\angle YTA = \angle ABC$, so $\angle XTY + \angle XAY = 180^\circ$.`,
        },
      ],
    },
  ],
});
