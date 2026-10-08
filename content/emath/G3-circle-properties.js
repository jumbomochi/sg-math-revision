H2.addTopic({
  id: "G3",
  title: "Properties of Circles",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Symmetry properties of chords and tangents, and the angle properties of circles, used to find lengths and angles with reasons.`,
  syllabus: {
    include: [
      String.raw`symmetry properties of circles: equal chords are equidistant from the centre; the perpendicular bisector of a chord passes through the centre; tangents from an external point are equal in length; the line joining an external point to the centre of the circle bisects the angle between the tangents`,
      String.raw`angle properties of circles: angle in a semicircle is a right angle; angle between tangent and radius of a circle is a right angle; angle at the centre is twice the angle at the circumference; angles in the same segment are equal; angles in opposite segments are supplementary`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Parts of a circle`,
      body: String.raw`- **Radius**: centre to circle. **Diameter**: a chord through the centre ($= 2r$).
- **Chord**: a line segment joining two points on the circle. It splits the circle into a **minor segment** and a **major segment**.
- **Arc**: part of the circumference (minor arc or major arc).
- **Sector**: region between two radii and an arc.
- **Tangent**: a line that touches the circle at exactly one point.
- An angle **subtended** by arc $AB$ at a point $P$ is $\angle APB$.

All radii of a circle are equal, so a triangle with two radii as sides (e.g. $\triangle OAB$) is **isosceles**. Spotting these is the key to most angle questions.`,
      figure: [
        {
          type: "plot",
          x: [-3.63, 3.63],
          y: [-2.9, 2.9],
          equal: true,
          axes: false,
          polygons: [
            { points: [[-2.26, -0.82], [-2.21, -0.95], [-2.15, -1.07], [-2.08, -1.19], [-2.01, -1.31], [-1.94, -1.42], [-1.85, -1.53], [-1.76, -1.63], [-1.67, -1.73], [-1.57, -1.82], [-1.46, -1.9], [-1.35, -1.98], [-1.24, -2.06], [-1.12, -2.12], [-1, -2.18], [-0.87, -2.24], [-0.74, -2.28], [-0.61, -2.32], [-0.48, -2.35], [-0.34, -2.38], [-0.21, -2.39], [-0.07, -2.4], [0.06, -2.4], [0.2, -2.39], [0.33, -2.38], [0.47, -2.35], [0.6, -2.32], [0.73, -2.29], [0.86, -2.24], [0.99, -2.19], [1.11, -2.13], [1.23, -2.06], [1.34, -1.99], [1.45, -1.91], [1.56, -1.82], [1.66, -1.73], [1.76, -1.64], [1.85, -1.53], [1.93, -1.43], [2.01, -1.32], [2.08, -1.2]], fill: true, tone: "warn" },
            { points: [[0, 0], [1.84, 1.54], [1.79, 1.6], [1.74, 1.65], [1.69, 1.7], [1.64, 1.76], [1.58, 1.8], [1.53, 1.85], [1.47, 1.9], [1.41, 1.94], [1.35, 1.98], [1.29, 2.02], [1.23, 2.06], [1.16, 2.1], [1.1, 2.13], [1.03, 2.17], [0.97, 2.2], [0.9, 2.23], [0.83, 2.25], [0.76, 2.28], [0.69, 2.3], [0.62, 2.32], [0.55, 2.34], [0.48, 2.35], [0.41, 2.37], [0.33, 2.38], [0.26, 2.39], [0.19, 2.39], [0.12, 2.4], [0.04, 2.4], [-0.03, 2.4], [-0.1, 2.4], [-0.18, 2.39], [-0.25, 2.39], [-0.32, 2.38], [-0.4, 2.37], [-0.47, 2.35], [-0.54, 2.34], [-0.61, 2.32], [-0.68, 2.3], [-0.75, 2.28], [-0.82, 2.26]], fill: true, tone: "accent" },
          ],
          circles: [
            { c: [0, 0], r: 2.4, tone: "ink" },
          ],
          segments: [
            { from: [-2.26, -0.82], to: [2.08, -1.2], tone: "ink" },
            { from: [0, 0], to: [1.84, 1.54], tone: "ink" },
            { from: [0, 0], to: [-0.82, 2.26], tone: "ink" },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "sw" },
            { x: -2.26, y: -0.82, text: "A", pos: "w" },
            { x: 2.08, y: -1.2, text: "B", pos: "se" },
            { x: 1.84, y: 1.54, text: "P", pos: "ne" },
            { x: -0.82, y: 2.26, text: "Q", pos: "n" },
            { x: 0.05, y: 1.45, text: "sector", pos: "c", style: "small", tone: "accent" },
            { x: 0.2, y: -1.85, text: "minor segment", pos: "c", style: "small", tone: "warn" },
            { x: -1, y: -0.62, text: "chord", pos: "c", style: "small" },
          ],
          caption: String.raw`Chord $AB$ cuts off a minor segment (shaded) and a major segment. Radii $OP$, $OQ$ bound a sector; arc $PQ$ is a minor arc.`,
          alt: "Circle centre O. Chord AB with the minor segment below it shaded. Radii OP and OQ enclose a shaded sector at the top.",
        },
        {
          type: "plot",
          x: [-3.63, 3.63],
          y: [-2.9, 2.9],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2.4, tone: "ink" },
          ],
          segments: [
            { from: [-2.4, 0], to: [2.4, 0], tone: "accent" },
            { from: [2.4, -2.2], to: [2.4, 2.2], tone: "ink" },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "n" },
            { x: 2.4, y: 0, text: "T", pos: "ne" },
            { x: -2.4, y: 0, text: "C", pos: "w" },
            { x: 2.4, y: 1.8, text: "tangent", pos: "e", style: "small" },
            { x: -1.2, y: 0, text: "diameter", pos: "s", style: "small", tone: "accent" },
          ],
          caption: String.raw`A **tangent** touches the circle at exactly one point $T$. A **diameter** is a chord through the centre.`,
          alt: "Circle centre O with diameter CT drawn and a vertical tangent line touching the circle at T.",
        },
      ],
    },
    {
      title: String.raw`Chords: perpendicular bisector and equal chords`,
      body: String.raw`- The perpendicular from the centre to a chord **bisects** the chord. Conversely, the line from the centre to the midpoint of a chord is perpendicular to it.
- The **perpendicular bisector of a chord passes through the centre**. (Two such bisectors meet at the centre — a way to locate it.)
- **Equal chords are equidistant from the centre**, and chords equidistant from the centre are equal.

Length problems: draw the radius to one end of the chord to make a right-angled triangle, then use Pythagoras:
$$r^2 = d^2 + \left(\tfrac{1}{2}\,\text{chord}\right)^2,$$
where $d$ is the distance from the centre to the chord (memorise).

Two parallel chords can be on the **same side** or on **opposite sides** of the centre — read the question (or diagram) carefully.`,
      figure: [
        {
          type: "plot",
          x: [-3.76, 3.76],
          y: [-3, 3],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2.5, tone: "ink" },
          ],
          segments: [
            { from: [-2.05, -1.43], to: [2.05, -1.43], tone: "ink" },
            { from: [0, 0], to: [0, -1.43], tone: "accent" },
            { from: [0, 0], to: [2.05, -1.43], tone: "good" },
            { from: [-1.02, -1.32], to: [-1.02, -1.54], tone: "ink", thin: true },
            { from: [1.02, -1.32], to: [1.02, -1.54], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [0, -1.43], a: [2.05, 0], b: [0, 1.43], size: 0.22 },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "n" },
            { x: -2.05, y: -1.43, text: "A", pos: "sw" },
            { x: 2.05, y: -1.43, text: "B", pos: "se" },
            { x: 0, y: -1.43, text: "M", pos: "s" },
            { x: 0, y: -0.72, text: "d", pos: "w", style: "italic", tone: "accent" },
            { x: 1.02, y: -0.72, text: "r", pos: "ne", style: "italic", tone: "good" },
          ],
          caption: String.raw`$OM \perp AB \iff AM = MB$. Pythagoras in $\triangle OMB$: $r^2 = d^2 + MB^2$.`,
          alt: "Circle centre O with chord AB. The perpendicular OM from O to the chord meets it at its midpoint M, marked with a right angle and equal ticks. OM is labelled d and the radius OB is labelled r.",
        },
        {
          type: "plot",
          x: [-3.76, 3.76],
          y: [-3, 3],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2.5, tone: "ink" },
          ],
          segments: [
            { from: [-2.35, -0.86], to: [0, -2.5], tone: "ink" },
            { from: [2.49, -0.22], to: [1.06, 2.27], tone: "ink" },
            { from: [0, 0], to: [-1.17, -1.68], tone: "accent" },
            { from: [0, 0], to: [1.77, 1.02], tone: "accent" },
            { from: [-1.73, -1.15], to: [-1.86, -1.33], tone: "ink", thin: true },
            { from: [-1.67, -1.2], to: [-1.79, -1.38], tone: "ink", thin: true },
            { from: [2.06, 0.31], to: [2.25, 0.42], tone: "ink", thin: true },
            { from: [2.02, 0.38], to: [2.21, 0.49], tone: "ink", thin: true },
            { from: [-0.5, -0.9], to: [-0.68, -0.78], tone: "ink", thin: true },
            { from: [0.83, 0.61], to: [0.94, 0.42], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [-1.17, -1.68], a: [1.17, -0.82], b: [1.17, 1.68], size: 0.2 },
            { at: [1.77, 1.02], a: [-0.72, 1.24], b: [-1.77, -1.02], size: 0.2 },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "w" },
            { x: -2.35, y: -0.86, text: "A", pos: "w" },
            { x: 0, y: -2.5, text: "B", pos: "s" },
            { x: 2.49, y: -0.22, text: "C", pos: "e" },
            { x: 1.06, y: 2.27, text: "D", pos: "ne" },
          ],
          caption: String.raw`Equal chords are equidistant from the centre (and conversely).`,
          alt: "Circle centre O with two equal chords AB and CD, each marked with double ticks. The perpendicular distances from O to the two chords are marked equal with single ticks.",
        },
      ],
    },
    {
      title: String.raw`Tangent and radius`,
      body: String.raw`The tangent at a point is **perpendicular to the radius** drawn to that point: $\angle OTP = 90^\circ$ (tan $\perp$ rad).

- Use it to find angles (right-angled triangle $OTP$) and lengths (Pythagoras or trigonometry with $OT = r$).
- If a line from the centre meets the circle at $A$ and continues to an external point $P$, then $AP = OP - r$.`,
      figure: {
        type: "plot",
        x: [-3.21, 4.33],
        y: [-2.5, 3.51],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2, tone: "ink" },
        ],
        segments: [
          { from: [-0.82, 3.01], to: [3.11, 0.26], tone: "ink" },
          { from: [0, 0], to: [1.15, 1.64], tone: "accent" },
        ],
        rightAngles: [
          { at: [1.15, 1.64], a: [-1.15, -1.64], b: [-0.82, 0.57], size: 0.25 },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0, y: 0, text: "O", pos: "sw" },
          { x: 1.15, y: 1.64, text: "T", pos: "ne" },
        ],
        caption: String.raw`tan $\perp$ rad: the tangent at $T$ is perpendicular to the radius $OT$.`,
        alt: "Circle centre O with a tangent line touching it at T; the radius OT meets the tangent at a right angle.",
      },
    },
    {
      title: String.raw`Two tangents from an external point`,
      body: String.raw`If $TA$ and $TB$ are tangents from an external point $T$ to a circle with centre $O$:

- $TA = TB$ (tangents from ext. pt), so $\triangle TAB$ is isosceles.
- $OT$ **bisects** $\angle ATB$ (and also $\angle AOB$).
- $\angle OAT = \angle OBT = 90^\circ$, so $\angle AOB + \angle ATB = 180^\circ$ (angle sum of quadrilateral $OATB$).
- $\triangle OAT \equiv \triangle OBT$ (RHS), and $OATB$ is a kite.`,
      figure: {
        type: "plot",
        x: [-2.3, 5.9],
        y: [-2.3, 2.3],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 1.8, tone: "ink" },
        ],
        segments: [
          { from: [5.4, 0], to: [0.6, 1.7], tone: "ink" },
          { from: [5.4, 0], to: [0.6, -1.7], tone: "ink" },
          { from: [0, 0], to: [0.6, 1.7], tone: "accent" },
          { from: [0, 0], to: [0.6, -1.7], tone: "accent" },
          { from: [0, 0], to: [5.4, 0], tone: "muted", dashed: true },
          { from: [3, 0.72], to: [3.08, 0.95], tone: "ink", thin: true },
          { from: [2.92, 0.75], to: [3, 0.98], tone: "ink", thin: true },
          { from: [3.08, -0.95], to: [3, -0.72], tone: "ink", thin: true },
          { from: [3, -0.98], to: [2.92, -0.75], tone: "ink", thin: true },
        ],
        angles: [
          { at: [5.4, 0], from: [0.6, 1.7], to: [0, 0], r: 0.9 },
          { at: [5.4, 0], from: [0, 0], to: [0.6, -1.7], r: 1 },
          { at: [0, 0], from: [5.4, 0], to: [0.6, 1.7], r: 0.45 },
          { at: [0, 0], from: [5.4, 0], to: [0.6, 1.7], r: 0.55 },
          { at: [0, 0], from: [0.6, -1.7], to: [5.4, 0], r: 0.45 },
          { at: [0, 0], from: [0.6, -1.7], to: [5.4, 0], r: 0.55 },
        ],
        rightAngles: [
          { at: [0.6, 1.7], a: [-0.6, -1.7], b: [4.8, -1.7], size: 0.22 },
          { at: [0.6, -1.7], a: [-0.6, 1.7], b: [4.8, 1.7], size: 0.22 },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0, y: 0, text: "O", pos: "w" },
          { x: 0.6, y: 1.7, text: "A", pos: "n" },
          { x: 0.6, y: -1.7, text: "B", pos: "s" },
          { x: 5.4, y: 0, text: "T", pos: "e" },
        ],
        caption: String.raw`tangents from ext. pt: $TA = TB$, and $OT$ bisects $\angle ATB$ and $\angle AOB$. $OATB$ is a kite.`,
        alt: "Circle centre O with tangents from an external point T touching at A and B. TA and TB are marked equal. Radii OA and OB meet the tangents at right angles. OT is dashed and splits the angle at T into two equal parts and the angle at O into two equal parts.",
      },
    },
    {
      title: String.raw`Angle at the centre`,
      body: String.raw`The angle subtended by an arc at the **centre** is **twice** the angle it subtends at any point on the remaining part of the circumference:
$$\angle AOB = 2\angle APB \qquad (\angle \text{ at centre} = 2\angle \text{ at circumference}).$$

- Both angles must stand on the **same arc**. Check by tracing $A \to$ vertex $\to B$ for each angle.
- If $P$ is on the minor arc, use the **reflex** angle at the centre: reflex $\angle AOB = 2\angle APB$.
- The angle in a semicircle is the special case $\angle AOB = 180^\circ$.`,
      figure: [
        {
          type: "plot",
          x: [-3.63, 3.63],
          y: [-2.9, 2.9],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2.4, tone: "ink" },
          ],
          segments: [
            { from: [-0.62, 2.32], to: [-1.97, -1.38], tone: "ink" },
            { from: [-0.62, 2.32], to: [1.97, -1.38], tone: "ink" },
            { from: [0, 0], to: [-1.97, -1.38], tone: "accent" },
            { from: [0, 0], to: [1.97, -1.38], tone: "accent" },
          ],
          angles: [
            { at: [-0.62, 2.32], from: [-1.97, -1.38], to: [1.97, -1.38], r: 0.6 },
            { at: [0, 0], from: [-1.97, -1.38], to: [1.97, -1.38], r: 0.45 },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "n" },
            { x: -1.97, y: -1.38, text: "A", pos: "sw" },
            { x: 1.97, y: -1.38, text: "B", pos: "se" },
            { x: -0.62, y: 2.32, text: "P", pos: "n" },
            { x: -0.52, y: 1.51, text: "x", pos: "c", style: "italic" },
            { x: 0, y: -0.66, text: "2x", pos: "c", style: "italic" },
          ],
          caption: String.raw`$\angle AOB = 2\angle APB$ ($\angle$ at centre $= 2\angle$ at circumference).`,
          alt: "Circle centre O. Points A and B at the bottom and P at the top. The angle APB at the circumference is x and the angle AOB at the centre is 2x.",
        },
        {
          type: "plot",
          x: [-3.63, 3.63],
          y: [-2.9, 2.9],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2.4, tone: "ink" },
          ],
          segments: [
            { from: [0, -2.4], to: [-2.26, -0.82], tone: "ink" },
            { from: [0, -2.4], to: [2.26, -0.82], tone: "ink" },
            { from: [0, 0], to: [-2.26, -0.82], tone: "accent" },
            { from: [0, 0], to: [2.26, -0.82], tone: "accent" },
          ],
          angles: [
            { at: [0, -2.4], from: [2.26, -0.82], to: [-2.26, -0.82], r: 0.45 },
            { at: [0, 0], from: [2.26, -0.82], to: [-2.26, -0.82], r: 0.5 },
          ],
          points: [
            { x: 0, y: 0 },
          ],
          labels: [
            { x: 0, y: 0, text: "O", pos: "s" },
            { x: -2.26, y: -0.82, text: "A", pos: "w" },
            { x: 2.26, y: -0.82, text: "B", pos: "e" },
            { x: 0, y: -2.4, text: "P", pos: "s" },
            { x: 0, y: -1.74, text: "y", pos: "c", style: "italic" },
            { x: 0, y: 0.71, text: "2y", pos: "c", style: "italic" },
          ],
          caption: String.raw`Also true with a reflex angle: reflex $\angle AOB = 2\angle APB$.`,
          alt: "Circle centre O with A and B on the lower half and P on the minor arc between them. The obtuse angle APB is y and the reflex angle AOB is 2y.",
        },
      ],
    },
    {
      title: String.raw`Angle in a semicircle`,
      body: String.raw`If $AB$ is a **diameter** and $C$ is any other point on the circle, then $\angle ACB = 90^\circ$ ($\angle$ in semicircle).

- Look for a diameter (a chord through $O$) and a point on the circle joined to both ends — that is a hidden right angle.
- Conversely, if $\angle ACB = 90^\circ$ for a point $C$ on the circle, then $AB$ is a diameter.
- Once you have a right-angled triangle, Pythagoras and trigonometry apply.`,
      figure: {
        type: "plot",
        x: [-3.63, 3.63],
        y: [-2.9, 2.9],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2.4, tone: "ink" },
        ],
        segments: [
          { from: [-2.4, 0], to: [2.4, 0], tone: "accent" },
          { from: [-2.4, 0], to: [-1.13, 2.12], tone: "ink" },
          { from: [2.4, 0], to: [-1.13, 2.12], tone: "ink" },
        ],
        rightAngles: [
          { at: [-1.13, 2.12], a: [-1.27, -2.12], b: [3.53, -2.12], size: 0.28 },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0, y: 0, text: "O", pos: "s" },
          { x: -2.4, y: 0, text: "A", pos: "w" },
          { x: 2.4, y: 0, text: "B", pos: "e" },
          { x: -1.13, y: 2.12, text: "C", pos: "nw" },
        ],
        caption: String.raw`$AB$ is a diameter $\Rightarrow \angle ACB = 90^\circ$ ($\angle$ in semicircle).`,
        alt: "Circle centre O with diameter AB. C is on the circle and the angle ACB is a right angle.",
      },
    },
    {
      title: String.raw`Angles in the same segment`,
      body: String.raw`Angles subtended by the same arc (or chord) at points on the circumference **on the same side** of the chord are equal: $\angle APB = \angle AQB$ ($\angle$s in same segment).

- Picture a "bow tie": two triangles standing on the same chord, with their top vertices on the circle.
- This is often the step that gives equal angles for proving two triangles **similar** (G2).`,
      figure: {
        type: "plot",
        x: [-3.63, 3.63],
        y: [-2.9, 2.9],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2.4, tone: "ink" },
        ],
        segments: [
          { from: [-2.08, -1.2], to: [2.08, -1.2], tone: "muted" },
          { from: [0.62, 2.32], to: [-2.08, -1.2], tone: "ink" },
          { from: [0.62, 2.32], to: [2.08, -1.2], tone: "ink" },
          { from: [-1.7, 1.7], to: [-2.08, -1.2], tone: "ink" },
          { from: [-1.7, 1.7], to: [2.08, -1.2], tone: "ink" },
        ],
        angles: [
          { at: [0.62, 2.32], from: [-2.08, -1.2], to: [2.08, -1.2], r: 0.75 },
          { at: [-1.7, 1.7], from: [-2.08, -1.2], to: [2.08, -1.2], r: 0.75 },
        ],
        labels: [
          { x: -2.08, y: -1.2, text: "A", pos: "sw" },
          { x: 2.08, y: -1.2, text: "B", pos: "se" },
          { x: 0.62, y: 2.32, text: "P", pos: "n" },
          { x: -1.7, y: 1.7, text: "Q", pos: "nw" },
          { x: 0.5, y: 1.36, text: "x", pos: "c", style: "italic" },
          { x: -1.33, y: 0.81, text: "x", pos: "c", style: "italic" },
        ],
        caption: String.raw`$\angle APB = \angle AQB$ ($\angle$s in same segment): both stand on chord $AB$ from the same side.`,
        alt: "Circle with chord AB near the bottom. Two points P and Q on the major arc are each joined to A and B; the angles APB and AQB are both x.",
      },
    },
    {
      title: String.raw`Cyclic quadrilaterals: angles in opposite segments`,
      body: String.raw`A **cyclic quadrilateral** has all four vertices on a circle. Its opposite angles are **supplementary**:
$$\angle A + \angle C = 180^\circ, \qquad \angle B + \angle D = 180^\circ \qquad (\angle\text{s in opp. segments}).$$

- Consequence: an **exterior angle** of a cyclic quadrilateral equals the interior opposite angle. (Give the two reasons: adj. $\angle$s on a str. line and $\angle$s in opp. segments.)
- The vertices must all lie on the circle. A quadrilateral with one vertex at the centre $O$ is **not** cyclic.`,
      figure: {
        type: "plot",
        x: [-3.2, 4.07],
        y: [-2.9, 2.9],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2.4, tone: "ink" },
        ],
        segments: [
          { from: [-2.26, -0.82], to: [0.82, -2.26], tone: "ink" },
          { from: [0.82, -2.26], to: [2.36, 0.42], tone: "ink" },
          { from: [2.36, 0.42], to: [-1.2, 2.08], tone: "ink" },
          { from: [-1.2, 2.08], to: [-2.26, -0.82], tone: "ink" },
          { from: [2.36, 0.42], to: [3.26, 1.98], tone: "muted" },
        ],
        angles: [
          { at: [-2.26, -0.82], from: [0.82, -2.26], to: [-1.2, 2.08], r: 0.55 },
          { at: [2.36, 0.42], from: [-1.2, 2.08], to: [0.82, -2.26], r: 0.5 },
          { at: [2.36, 0.42], from: [3.26, 1.98], to: [-1.2, 2.08], r: 0.75 },
        ],
        labels: [
          { x: -2.26, y: -0.82, text: "A", pos: "w" },
          { x: 0.82, y: -2.26, text: "B", pos: "s" },
          { x: 2.36, y: 0.42, text: "C", pos: "e" },
          { x: -1.2, y: 2.08, text: "D", pos: "nw" },
          { x: 3.26, y: 1.98, text: "E", pos: "e" },
          { x: -1.55, y: -0.53, text: "a", pos: "c", style: "italic" },
          { x: 1.31, y: 0.09, text: "180° − a", pos: "c", style: "italic" },
          { x: 2.07, y: 1.33, text: "a", pos: "c", style: "italic" },
        ],
        caption: String.raw`Cyclic quadrilateral: $\angle A + \angle C = 180^\circ$ ($\angle$s in opp. segments). So the exterior angle $\angle DCE = \angle A$.`,
        alt: "Cyclic quadrilateral ABCD with BC produced to E. The angle at A is a, the angle BCD is 180 degrees minus a, and the exterior angle DCE is a.",
      },
    },
    {
      title: String.raw`Angle chasing with reasons`,
      body: String.raw`Standard reasons for circle properties:

| Property | Reason |
| --- | --- |
| Angle at centre | $\angle$ at centre $= 2\angle$ at circumference |
| Angle in semicircle | $\angle$ in semicircle |
| Same segment | $\angle$s in same segment |
| Cyclic quadrilateral | $\angle$s in opp. segments |
| Tangent and radius | tan $\perp$ rad |
| Two tangents | tangents from ext. pt |
| Chord | $\perp$ from centre bisects chord |
| Two radii | base $\angle$s of isos. $\triangle$ ($OA = OB$, radii) |

Strategy:

1. Mark every radius you can see — each pair gives an isosceles triangle.
2. Mark right angles from diameters and tangents.
3. Find the arc each angle stands on, then use the centre, same segment or opposite segment property.
4. Write one step per line: the angle, its value, and the reason. In "Show that" parts every step needs a reason.`,
    },
  ],
  archetypes: [
    {
      id: "G3-chord-pythagoras",
      name: String.raw`Chord lengths and distances from the centre`,
      tests: String.raw`Using "the perpendicular from the centre bisects the chord" with Pythagoras to find a chord, a radius or a distance, including parallel chords and real objects such as pipes, arches and wheels.`,
      questions: [
        {
          stem: String.raw`The diagram shows a circle with centre $O$ and radius $13$ cm. $AB$ and $CD$ are parallel chords on opposite sides of $O$. $AB = 24$ cm and $CD = 10$ cm.`,
          figure: {
            type: "plot",
            x: [-4.7, 4.7],
            y: [-3.75, 3.75],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 3.25, tone: "ink" },
            ],
            segments: [
              { from: [-3, 1.25], to: [3, 1.25], tone: "ink" },
              { from: [-1.25, -3], to: [1.25, -3], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "se" },
              { x: -3, y: 1.25, text: "A", pos: "nw" },
              { x: 3, y: 1.25, text: "B", pos: "ne" },
              { x: -1.25, y: -3, text: "C", pos: "sw" },
              { x: 1.25, y: -3, text: "D", pos: "se" },
            ],
            alt: "Circle centre O with two parallel chords: AB above the centre and CD, shorter, below the centre.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the distance from $O$ to the chord $AB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the distance between the chords $AB$ and $CD$.`, marks: 2 },
            { label: "(c)", text: String.raw`A third chord $EF$ is $10$ cm from $O$. Without finding its length, state, with a reason, whether $EF$ is longer or shorter than $AB$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows the circular cross-section of a horizontal pipe with centre $O$ and internal radius $25$ cm. Water lies in the bottom of the pipe. The width of the water surface is $48$ cm, and the depth of water is less than the radius.`,
          figure: {
            type: "plot",
            x: [-6.77, 6.77],
            y: [-5.4, 5.4],
            equal: true,
            axes: false,
            shade: [
              { upper: "x => -1.4", lower: "x => -Math.sqrt(Math.max(25 - x*x, 0))", from: -4.8, to: 4.8, tone: "accent" },
            ],
            circles: [
              { c: [0, 0], r: 5, tone: "ink" },
            ],
            segments: [
              { from: [-4.8, -1.4], to: [4.8, -1.4], tone: "accent" },
              { from: [-4.6, -1.85], to: [4.6, -1.85], tone: "muted", thin: true, arrow: true, arrowStart: true },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: -1.85, text: "48 cm", pos: "s", style: "small" },
              { x: 0, y: 0, text: "O", pos: "n" },
            ],
            alt: "Circular cross-section of a pipe with centre O. Water fills the bottom part; the horizontal water surface is 48 cm wide and lies below the centre.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the depth of the water.`, marks: 3 },
            { label: "(b)", text: String.raw`More water flows into the pipe until the width of the water surface is again $48$ cm. Find the increase in the depth of the water.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-tangent-radius",
      name: String.raw`Tangent perpendicular to radius`,
      tests: String.raw`Spotting the right angle between a tangent and a radius, then finding lengths with Pythagoras or trigonometry, or angles in the right-angled triangle formed.`,
      questions: [
        {
          stem: String.raw`In the diagram, $PT$ is a tangent to the circle with centre $O$ and radius $8$ cm, touching the circle at $T$. $OP = 17$ cm, and $OP$ cuts the circle at $A$.`,
          figure: {
            type: "plot",
            x: [-2.9, 5.6],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [0, 0], to: [5.1, 0], tone: "ink" },
              { from: [0, 0], to: [1.13, 2.12], tone: "ink" },
              { from: [1.13, 2.12], to: [5.1, 0], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "w" },
              { x: 1.13, y: 2.12, text: "T", pos: "n" },
              { x: 5.1, y: 0, text: "P", pos: "e" },
              { x: 2.4, y: 0, text: "A", pos: "se" },
              { x: 0.56, y: 1.06, text: "8 cm", pos: "nw", style: "small" },
              { x: 3.67, y: 0, text: "17 cm", pos: "s", style: "small" },
            ],
            alt: "Circle centre O and radius 8 cm. PT is a tangent touching the circle at T, with OT drawn. OP = 17 cm and the line OP cuts the circle at A.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down $\angle OTP$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $PT$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $AP$.`, marks: 1 },
            { label: "(d)", text: String.raw`Find $\angle TPO$. Give your answer correct to 1 decimal place.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In the diagram, $AB$ is a diameter of the circle with centre $O$, and $C$ is a point on the circle. The tangent to the circle at $B$ meets $AC$ produced at $T$. $\angle BAC = 34^\circ$.`,
          figure: {
            type: "plot",
            x: [-4.37, 4.37],
            y: [-2.7, 4.27],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.2, tone: "ink" },
            ],
            segments: [
              { from: [-2.2, 0], to: [2.2, 0], tone: "ink" },
              { from: [-2.2, 0], to: [2.2, 2.97], tone: "ink" },
              { from: [2.2, 0], to: [0.82, 2.04], tone: "ink" },
              { from: [2.2, -1.2], to: [2.2, 3.77], tone: "ink" },
            ],
            angles: [
              { at: [-2.2, 0], from: [2.2, 0], to: [2.2, 2.97], r: 0.8 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "s" },
              { x: -2.2, y: 0, text: "A", pos: "w" },
              { x: 2.2, y: 0, text: "B", pos: "se" },
              { x: 0.82, y: 2.04, text: "C", pos: "nw" },
              { x: 2.2, y: 2.97, text: "T", pos: "e" },
              { x: -1.13, y: 0.33, text: "34°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O with diameter AB. The tangent at B is a vertical line. AC is produced to meet the tangent at T. Angle BAC is 34 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle ATB$, giving reasons.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle CBT$, giving reasons.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-tangents-external-point",
      name: String.raw`Two tangents from an external point`,
      tests: String.raw`Using equal tangents, the bisected angle at the external point and the right angles at the points of contact (the kite $OATB$), for angles and for lengths and areas.`,
      questions: [
        {
          stem: String.raw`In the diagram, $TA$ and $TB$ are tangents to the circle with centre $O$. $C$ is a point on the major arc $AB$. $\angle ATB = 48^\circ$.`,
          figure: {
            type: "plot",
            x: [-2.5, 5.42],
            y: [-2.5, 2.5],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2, tone: "ink" },
            ],
            segments: [
              { from: [4.92, 0], to: [0.81, 1.83], tone: "ink" },
              { from: [4.92, 0], to: [0.81, -1.83], tone: "ink" },
              { from: [0, 0], to: [0.81, 1.83], tone: "ink" },
              { from: [0, 0], to: [0.81, -1.83], tone: "ink" },
              { from: [0.81, 1.83], to: [0.81, -1.83], tone: "ink" },
              { from: [-1.93, -0.52], to: [0.81, 1.83], tone: "ink" },
              { from: [-1.93, -0.52], to: [0.81, -1.83], tone: "ink" },
            ],
            angles: [
              { at: [4.92, 0], from: [0.81, 1.83], to: [0.81, -1.83], r: 0.9 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "w" },
              { x: 0.81, y: 1.83, text: "A", pos: "n" },
              { x: 0.81, y: -1.83, text: "B", pos: "s" },
              { x: 4.92, y: 0, text: "T", pos: "e" },
              { x: -1.93, y: -0.52, text: "C", pos: "w" },
              { x: 3.79, y: 0, text: "48°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O. Tangents from T touch the circle at A and B, and angle ATB is 48 degrees. OA, OB and AB are drawn, and C is a point on the major arc joined to A and B.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle AOB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle OAB$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle ACB$.`, marks: 1 },
            { label: "(d)", text: String.raw`Find $\angle TAB$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In the diagram, $TA$ and $TB$ are tangents from $T$ to the circle with centre $O$ and radius $5$ cm. $TA = 12$ cm.`,
          figure: {
            type: "plot",
            x: [-2, 4.4],
            y: [-2, 2],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1.5, tone: "ink" },
            ],
            segments: [
              { from: [3.9, 0], to: [0.58, 1.38], tone: "ink" },
              { from: [3.9, 0], to: [0.58, -1.38], tone: "ink" },
              { from: [0, 0], to: [0.58, 1.38], tone: "ink" },
              { from: [0, 0], to: [0.58, -1.38], tone: "ink" },
              { from: [0, 0], to: [3.9, 0], tone: "muted", dashed: true },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0.29, y: 0.69, text: "5 cm", pos: "nw", style: "small" },
              { x: 2.24, y: 0.69, text: "12 cm", pos: "ne", style: "small" },
              { x: 0, y: 0, text: "O", pos: "w" },
              { x: 0.58, y: 1.38, text: "A", pos: "n" },
              { x: 0.58, y: -1.38, text: "B", pos: "s" },
              { x: 3.9, y: 0, text: "T", pos: "e" },
            ],
            alt: "Circle centre O with radius 5 cm. Tangents from an external point T touch the circle at A and B; TA = 12 cm. OA, OB and OT are drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the length of $TB$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $OT$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $\angle ATB$. Give your answer correct to 1 decimal place.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the area of the quadrilateral $OATB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-angle-at-centre",
      name: String.raw`Angle at the centre is twice the angle at the circumference`,
      tests: String.raw`Matching an angle at the centre with an angle at the circumference on the same arc (including the reflex case), usually together with isosceles triangles formed by radii.`,
      questions: [
        {
          stem: String.raw`In the diagram, $A$, $B$, $C$ and $D$ lie on the circle with centre $O$. $D$ lies on the minor arc $AB$. $\angle ACB = 38^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [0, 0], to: [-1.48, -1.89], tone: "ink" },
              { from: [0, 0], to: [1.48, -1.89], tone: "ink" },
              { from: [-1.48, -1.89], to: [1.48, -1.89], tone: "ink" },
              { from: [-0.42, 2.36], to: [-1.48, -1.89], tone: "ink" },
              { from: [-0.42, 2.36], to: [1.48, -1.89], tone: "ink" },
              { from: [0, -2.4], to: [-1.48, -1.89], tone: "ink" },
              { from: [0, -2.4], to: [1.48, -1.89], tone: "ink" },
            ],
            angles: [
              { at: [-0.42, 2.36], from: [-1.48, -1.89], to: [1.48, -1.89], r: 0.75 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "n" },
              { x: -1.48, y: -1.89, text: "A", pos: "sw" },
              { x: 1.48, y: -1.89, text: "B", pos: "se" },
              { x: -0.42, y: 2.36, text: "C", pos: "n" },
              { x: 0, y: -2.4, text: "D", pos: "s" },
              { x: -0.33, y: 1.4, text: "38°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O. A and B are on the lower part of the circle with OA, OB and AB drawn. C is on the major arc and angle ACB is 38 degrees. D is on the minor arc AB and is joined to A and B.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle AOB$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle OAB$, giving a reason.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $\angle ADB$, giving a reason.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In the diagram, $A$, $B$ and $C$ lie on the circle with centre $O$. $\angle OBC = 28^\circ$ and $\angle ABO = 20^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [0.82, 2.26], to: [-2.08, -1.2], tone: "ink" },
              { from: [-2.08, -1.2], to: [2.16, -1.05], tone: "ink" },
              { from: [2.16, -1.05], to: [0.82, 2.26], tone: "ink" },
              { from: [0, 0], to: [-2.08, -1.2], tone: "ink" },
              { from: [0, 0], to: [2.16, -1.05], tone: "ink" },
              { from: [0, 0], to: [0.82, 2.26], tone: "muted", dashed: true },
            ],
            angles: [
              { at: [-2.08, -1.2], from: [2.16, -1.05], to: [0, 0], r: 0.95 },
              { at: [-2.08, -1.2], from: [0, 0], to: [0.82, 2.26], r: 1.1 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "e" },
              { x: 0.82, y: 2.26, text: "A", pos: "n" },
              { x: -2.08, y: -1.2, text: "B", pos: "sw" },
              { x: 2.16, y: -1.05, text: "C", pos: "se" },
              { x: -0.96, y: -0.88, text: "28°", pos: "c", style: "italic" },
              { x: -0.89, y: -0.2, text: "20°", pos: "c", style: "italic" },
            ],
            alt: "Triangle ABC inscribed in a circle with centre O inside the triangle. OB and OC are drawn, and OA is dashed. Angle OBC is 28 degrees and angle ABO is 20 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle BOC$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle BAC$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle AOC$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-angle-in-semicircle",
      name: String.raw`Angle in a semicircle`,
      tests: String.raw`Recognising the right angle opposite a diameter, then using the angle sum of a triangle, Pythagoras or trigonometry.`,
      questions: [
        {
          stem: String.raw`In the diagram, $AB$ is a diameter of the circle with centre $O$. $C$ is a point on the circle such that $AC = 7$ cm and $BC = 24$ cm.`,
          figure: {
            type: "plot",
            x: [-3.76, 3.76],
            y: [-3, 3],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.5, tone: "ink" },
            ],
            segments: [
              { from: [-2.5, 0], to: [2.5, 0], tone: "ink" },
              { from: [-2.5, 0], to: [-2.11, 1.34], tone: "ink" },
              { from: [2.5, 0], to: [-2.11, 1.34], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: -2.3, y: 0.67, text: "7 cm", pos: "w", style: "small" },
              { x: 0.2, y: 0.67, text: "24 cm", pos: "n", style: "small" },
              { x: 0, y: 0, text: "O", pos: "s" },
              { x: -2.5, y: 0, text: "A", pos: "w" },
              { x: 2.5, y: 0, text: "B", pos: "e" },
              { x: -2.11, y: 1.34, text: "C", pos: "nw" },
            ],
            alt: "Circle centre O with diameter AB. C is on the circle with AC = 7 cm and BC = 24 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down $\angle ACB$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the radius of the circle.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $\angle CAB$. Give your answer correct to 1 decimal place.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In the diagram, $AB$ is a diameter of the circle with centre $O$. $C$ and $D$ are points on the circle on opposite sides of $AB$. $\angle BAC = (x + 10)^\circ$ and $\angle ABC = 3x^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [-2.4, 0], to: [2.4, 0], tone: "ink" },
              { from: [-2.4, 0], to: [1.2, 2.08], tone: "ink" },
              { from: [2.4, 0], to: [1.2, 2.08], tone: "ink" },
              { from: [0.42, -2.36], to: [-2.4, 0], tone: "ink" },
              { from: [0.42, -2.36], to: [1.2, 2.08], tone: "ink" },
            ],
            angles: [
              { at: [-2.4, 0], from: [2.4, 0], to: [1.2, 2.08], r: 0.7 },
              { at: [2.4, 0], from: [1.2, 2.08], to: [-2.4, 0], r: 0.55 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "s" },
              { x: -2.4, y: 0, text: "A", pos: "w" },
              { x: 2.4, y: 0, text: "B", pos: "e" },
              { x: 1.2, y: 2.08, text: "C", pos: "ne" },
              { x: 0.42, y: -2.36, text: "D", pos: "s" },
              { x: -0.68, y: 0.46, text: "(x + 10)°", pos: "c", style: "italic" },
              { x: 1.74, y: 0.38, text: "3x°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O with diameter AB. C is on the upper arc, with angle BAC = (x + 10) degrees and angle ABC = 3x degrees. D is on the lower arc and is joined to A and C.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$, giving a reason.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle ADC$, giving a reason.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-same-segment",
      name: String.raw`Angles in the same segment`,
      tests: String.raw`Finding equal angles standing on the same chord, often with intersecting chords, and using them to prove similar triangles and find lengths.`,
      questions: [
        {
          stem: String.raw`In the diagram, $A$, $B$, $C$ and $D$ lie on a circle. The chords $AC$ and $BD$ meet at $X$. $\angle BAC = 35^\circ$ and $\angle ABD = 48^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [-2.26, -0.82], to: [1.2, -2.08], tone: "ink" },
              { from: [1.2, -2.08], to: [2.36, 0.42], tone: "ink" },
              { from: [2.36, 0.42], to: [-0.58, 2.33], tone: "ink" },
              { from: [-0.58, 2.33], to: [-2.26, -0.82], tone: "ink" },
              { from: [-2.26, -0.82], to: [2.36, 0.42], tone: "ink" },
              { from: [1.2, -2.08], to: [-0.58, 2.33], tone: "ink" },
            ],
            angles: [
              { at: [-2.26, -0.82], from: [1.2, -2.08], to: [2.36, 0.42], r: 0.85 },
              { at: [1.2, -2.08], from: [-0.58, 2.33], to: [-2.26, -0.82], r: 0.7 },
            ],
            labels: [
              { x: -2.26, y: -0.82, text: "A", pos: "w" },
              { x: 1.2, y: -2.08, text: "B", pos: "se" },
              { x: 2.36, y: 0.42, text: "C", pos: "e" },
              { x: -0.58, y: 2.33, text: "D", pos: "n" },
              { x: 0.77, y: -0.31, text: "X", pos: "c" },
              { x: -1.19, y: -0.87, text: "35°", pos: "c", style: "italic" },
              { x: 0.54, y: -1.44, text: "48°", pos: "c", style: "italic" },
            ],
            alt: "Four points A, B, C and D on a circle, joined in order to form a quadrilateral. The diagonals AC and BD meet at X. Angle BAC is 35 degrees and angle ABD is 48 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle BDC$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle ACD$, giving a reason.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\angle AXB$.`, marks: 1 },
            { label: "(d)", text: String.raw`Show that triangle $ABX$ is similar to triangle $DCX$.`, marks: 2 },
            { label: "(e)", text: String.raw`Given that $AX = 6$ cm and $DX = 9$ cm, find the ratio $BX : CX$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-cyclic-quadrilateral",
      name: String.raw`Cyclic quadrilaterals`,
      tests: String.raw`Using opposite angles of a cyclic quadrilateral (supplementary) and the exterior angle, often with algebra or with an angle at the centre.`,
      questions: [
        {
          stem: String.raw`In the diagram, $ABCD$ is a cyclic quadrilateral. $BC$ is produced to $E$. $\angle ABC = (3x + 10)^\circ$, $\angle ADC = (2x + 20)^\circ$ and $\angle DCE = 85^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.31, 3.95],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [-2.08, -1.2], to: [1.2, -2.08], tone: "ink" },
              { from: [1.2, -2.08], to: [2.36, 0.42], tone: "ink" },
              { from: [2.36, 0.42], to: [-0.82, 2.26], tone: "ink" },
              { from: [-0.82, 2.26], to: [-2.08, -1.2], tone: "ink" },
              { from: [2.36, 0.42], to: [3.04, 1.87], tone: "ink" },
            ],
            angles: [
              { at: [1.2, -2.08], from: [2.36, 0.42], to: [-2.08, -1.2], r: 0.5 },
              { at: [-0.82, 2.26], from: [-2.08, -1.2], to: [2.36, 0.42], r: 0.5 },
              { at: [2.36, 0.42], from: [3.04, 1.87], to: [-0.82, 2.26], r: 0.45 },
            ],
            labels: [
              { x: -2.08, y: -1.2, text: "A", pos: "sw" },
              { x: 1.2, y: -2.08, text: "B", pos: "se" },
              { x: 2.36, y: 0.42, text: "C", pos: "e" },
              { x: -0.82, y: 2.26, text: "D", pos: "n" },
              { x: 3.04, y: 1.87, text: "E", pos: "e" },
              { x: 0.81, y: -1.24, text: "(3x + 10)°", pos: "c", style: "italic" },
              { x: -0.45, y: 1.23, text: "(2x + 20)°", pos: "c", style: "italic" },
              { x: 2.16, y: 1.05, text: "85°", pos: "c", style: "italic" },
            ],
            alt: "Cyclic quadrilateral ABCD with BC produced to E. Angle ABC is (3x + 10) degrees, angle ADC is (2x + 20) degrees and angle DCE is 85 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $x$, giving a reason.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle BAD$, giving reasons.`, marks: 2 },
            { label: "(c)", text: String.raw`Explain why $AC$ is not a diameter of the circle.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In the diagram, $A$, $B$, $C$ and $D$ lie on the circle with centre $O$. $B$ lies on the minor arc $AC$ and $\angle AOC = 130^\circ$.`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [-2.18, -1.01], to: [0, -2.4], tone: "ink" },
              { from: [0, -2.4], to: [2.18, -1.01], tone: "ink" },
              { from: [2.18, -1.01], to: [0, 2.4], tone: "ink" },
              { from: [0, 2.4], to: [-2.18, -1.01], tone: "ink" },
              { from: [0, 0], to: [-2.18, -1.01], tone: "ink" },
              { from: [0, 0], to: [2.18, -1.01], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [-2.18, -1.01], to: [2.18, -1.01], r: 0.45 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "n" },
              { x: -2.18, y: -1.01, text: "A", pos: "sw" },
              { x: 0, y: -2.4, text: "B", pos: "s" },
              { x: 2.18, y: -1.01, text: "C", pos: "se" },
              { x: 0, y: 2.4, text: "D", pos: "n" },
              { x: 0, y: -0.66, text: "130°", pos: "c", style: "italic" },
            ],
            alt: "Cyclic quadrilateral ABCD in a circle with centre O. B is on the minor arc AC and D is on the major arc. OA and OC are drawn and angle AOC is 130 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\angle ADC$, giving a reason.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\angle ABC$, giving a reason.`, marks: 1 },
            { label: "(c)", text: String.raw`Given also that $BA = BC$, find $\angle BAC$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G3-multi-step-angles",
      name: String.raw`Multi-step angle problems with reasons`,
      tests: String.raw`A longer structured question combining several circle properties (semicircle, same segment, tangent and radius, centre) with triangle facts, where every step must carry a reason.`,
      questions: [
        {
          stem: String.raw`In the diagram, $A$, $B$, $C$ and $D$ lie on the circle with centre $O$, and $AC$ is a diameter. $\angle BAC = 32^\circ$ and $\angle CAD = 40^\circ$. The tangent to the circle at $A$ meets $CB$ produced at $T$.

Giving reasons for each step of your working, find`,
          figure: {
            type: "plot",
            x: [-7.82, 3.6],
            y: [-2.6, 2.6],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.1, tone: "ink" },
            ],
            segments: [
              { from: [0, -2.1], to: [0, 2.1], tone: "ink" },
              { from: [0, -2.1], to: [-1.89, 0.92], tone: "ink" },
              { from: [0, 2.1], to: [-6.72, -2.1], tone: "ink" },
              { from: [0, -2.1], to: [2.07, 0.36], tone: "ink" },
              { from: [0, 2.1], to: [2.07, 0.36], tone: "ink" },
              { from: [-1.89, 0.92], to: [2.07, 0.36], tone: "ink" },
              { from: [0, 0], to: [-1.89, 0.92], tone: "ink" },
              { from: [-7.32, -2.1], to: [3.1, -2.1], tone: "ink" },
            ],
            angles: [
              { at: [0, -2.1], from: [0, 2.1], to: [-1.89, 0.92], r: 1 },
              { at: [0, -2.1], from: [2.07, 0.36], to: [0, 2.1], r: 0.9 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "e" },
              { x: 0, y: -2.1, text: "A", pos: "s" },
              { x: 0, y: 2.1, text: "C", pos: "n" },
              { x: -1.89, y: 0.92, text: "B", pos: "nw" },
              { x: 2.07, y: 0.36, text: "D", pos: "e" },
              { x: -6.72, y: -2.1, text: "T", pos: "s" },
              { x: -0.43, y: -0.61, text: "32°", pos: "c", style: "italic" },
              { x: 0.43, y: -0.92, text: "40°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O with diameter AC, A at the bottom and C at the top. B is on the left arc and D on the right arc. Angle BAC is 32 degrees and angle CAD is 40 degrees. BD and OB are drawn. The tangent to the circle at A meets CB produced at T.",
          },
          parts: [
            { label: "(a)", text: String.raw`$\angle ABC$,`, marks: 1 },
            { label: "(b)", text: String.raw`$\angle ADB$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\angle BOC$,`, marks: 1 },
            { label: "(d)", text: String.raw`$\angle ATC$,`, marks: 2 },
            { label: "(e)", text: String.raw`$\angle BCD$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In the diagram, $A$, $B$, $C$ and $D$ lie on the circle with centre $O$, and $BD$ is a diameter. $AC$ meets $BD$ at $E$. $\angle ABD = 24^\circ$ and $\angle BDC = 40^\circ$.

Giving reasons for each step of your working, find`,
          figure: {
            type: "plot",
            x: [-3.63, 3.63],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2.4, tone: "ink" },
            ],
            segments: [
              { from: [-2.4, 0], to: [2.4, 0], tone: "ink" },
              { from: [1.61, 1.78], to: [-0.42, -2.36], tone: "ink" },
              { from: [1.61, 1.78], to: [-2.4, 0], tone: "ink" },
              { from: [1.61, 1.78], to: [2.4, 0], tone: "ink" },
              { from: [-0.42, -2.36], to: [2.4, 0], tone: "ink" },
              { from: [-2.4, 0], to: [-0.42, -2.36], tone: "ink" },
              { from: [0, 0], to: [1.61, 1.78], tone: "muted" },
            ],
            angles: [
              { at: [-2.4, 0], from: [2.4, 0], to: [1.61, 1.78], r: 1 },
              { at: [2.4, 0], from: [-2.4, 0], to: [-0.42, -2.36], r: 0.8 },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "O", pos: "s" },
              { x: 1.61, y: 1.78, text: "A", pos: "ne" },
              { x: -2.4, y: 0, text: "B", pos: "w" },
              { x: -0.42, y: -2.36, text: "C", pos: "s" },
              { x: 2.4, y: 0, text: "D", pos: "e" },
              { x: 0.74, y: 0, text: "E", pos: "nw" },
              { x: -1.13, y: 0.27, text: "24°", pos: "c", style: "italic" },
              { x: 1.45, y: -0.35, text: "40°", pos: "c", style: "italic" },
            ],
            alt: "Circle centre O with diameter BD. A is on the upper arc and C on the lower arc. AC meets BD at E. Angle ABD is 24 degrees and angle BDC is 40 degrees. OA is drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`$\angle ACD$,`, marks: 1 },
            { label: "(b)", text: String.raw`$\angle ADB$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\angle AOB$,`, marks: 1 },
            { label: "(d)", text: String.raw`$\angle AED$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
