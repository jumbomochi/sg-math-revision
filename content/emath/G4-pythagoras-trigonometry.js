H2.addTopic({
  id: "G4",
  title: "Pythagoras' Theorem and Trigonometry",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Pythagoras' theorem, trigonometric ratios, obtuse angles, the sine and cosine rules, area of a triangle, and problems with bearings, elevation and three dimensions.`,
  syllabus: {
    include: [
      String.raw`use of Pythagoras' theorem`,
      String.raw`determining whether a triangle is right-angled given the lengths of three sides`,
      String.raw`use of trigonometric ratios (sine, cosine and tangent) of acute angles to calculate unknown sides and angles in right-angled triangles`,
      String.raw`extending sine and cosine to obtuse angles`,
      String.raw`use of the formula $\frac{1}{2}ab\sin C$ for the area of a triangle`,
      String.raw`use of sine rule and cosine rule for any triangle`,
      String.raw`problems in two and three dimensions including those involving angles of elevation and depression and bearings`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Pythagoras' theorem and its converse`,
      body: String.raw`In a right-angled triangle, the **hypotenuse** $c$ is the side opposite the right angle. It is always the longest side.

$$a^2 + b^2 = c^2 \quad \text{(memorise)}$$

- To find the hypotenuse: add the squares. To find a shorter side: subtract, e.g. $a^2 = c^2 - b^2$.
- **Converse**: if the three sides satisfy $a^2 + b^2 = c^2$, where $c$ is the longest side, then the triangle is right-angled, and the right angle is opposite $c$.
- To *show* a triangle is right-angled, work out $a^2 + b^2$ and $c^2$ **separately**, show they are equal, then write the conclusion. If they are not equal, say "so the triangle is not right-angled".`,
      figure: {
        type: "plot",
        x: [-1.2, 5.6], y: [-0.9, 3.7], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [4.4, 0], [0, 3.1]], fill: true, tone: "accent" }],
        rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.35 }],
        labels: [
          { x: 2.2, y: 0, text: "b", pos: "s", style: "italic" },
          { x: 0, y: 1.55, text: "a", pos: "w", style: "italic" },
          { x: 2.2, y: 1.55, text: "c", pos: "ne", style: "italic" },
          { x: 3.3, y: 2.3, text: "hypotenuse", pos: "c", style: "small" },
        ],
        caption: String.raw`$a^2 + b^2 = c^2$. The hypotenuse $c$ is opposite the right angle.`,
        alt: "A right-angled triangle with the right angle at the bottom left. The two shorter sides are a (vertical) and b (horizontal); the longest side c, the hypotenuse, is opposite the right angle.",
      },
    },
    {
      title: String.raw`Trigonometric ratios in a right-angled triangle`,
      body: String.raw`Name the sides **from the angle** $\theta$ you are using: opposite, adjacent (next to $\theta$, not the hypotenuse) and hypotenuse.

$$\sin\theta = \frac{\text{opp}}{\text{hyp}}, \qquad \cos\theta = \frac{\text{adj}}{\text{hyp}}, \qquad \tan\theta = \frac{\text{opp}}{\text{adj}} \quad \text{(SOH-CAH-TOA, memorise)}$$

- Pick the ratio that links the side you know and the side (or angle) you want.
- To find an angle, use the inverse: $\theta = \tan^{-1}\left(\frac{\text{opp}}{\text{adj}}\right)$.
- Make sure the calculator is in **degree** mode. Keep full calculator values in working; round only the final answer (3 s.f. for lengths, 1 d.p. for angles).
- These ratios only work in a **right-angled** triangle. For other triangles use the sine or cosine rule.`,
      figure: {
        type: "plot",
        x: [-1.6, 6.4], y: [-0.9, 3.9], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [4.8, 0], [4.8, 3.2]], fill: true, tone: "accent" }],
        rightAngles: [{ at: [4.8, 0], a: [-1, 0], b: [0, 1], size: 0.35 }],
        angles: [{ at: [0, 0], from: [4.8, 0], to: [4.8, 3.2], r: 1.1, label: "θ" }],
        labels: [
          { x: 2.4, y: 0, text: "adjacent", pos: "s", style: "small" },
          { x: 4.8, y: 1.6, text: "opposite", pos: "e", style: "small" },
          { x: 2.3, y: 1.7, text: "hypotenuse", pos: "nw", style: "small" },
        ],
        caption: String.raw`Opposite and adjacent depend on which angle you use. The hypotenuse never changes.`,
        alt: "A right-angled triangle with angle theta at the bottom left. The side next to theta along the bottom is adjacent, the vertical side across from theta is opposite, and the sloping side is the hypotenuse.",
      },
    },
    {
      title: String.raw`Sine and cosine of obtuse angles`,
      body: String.raw`For an obtuse angle ($90^\circ < \theta < 180^\circ$):

$$\sin(180^\circ - \theta) = \sin\theta, \qquad \cos(180^\circ - \theta) = -\cos\theta \quad \text{(memorise)}$$

- The sine of an obtuse angle is **positive**; the cosine is **negative**.
- $\sin 90^\circ = 1$, $\cos 90^\circ = 0$.
- **Danger with sine**: $\sin x = 0.6$ has **two** answers between $0^\circ$ and $180^\circ$: $x = 36.9^\circ$ and $x = 180^\circ - 36.9^\circ = 143.1^\circ$. The calculator only gives the acute one. Decide from the diagram or the question which one fits.
- Cosine has no such problem: $\cos x = -0.4$ gives one angle, $113.6^\circ$, straight from the calculator.`,
      figure: {
        type: "plot",
        x: [-1.45, 1.45], y: [-0.3, 1.25], equal: true,
        axisLabels: ["x", "y"],
        curves: [{ param: "t => [Math.cos(t), Math.sin(t)]", t: [0, Math.PI], tone: "muted" }],
        segments: [
          { from: [0, 0], to: [0.8192, 0.5736], tone: "accent" },
          { from: [0, 0], to: [-0.8192, 0.5736], tone: "good" },
          { from: [0.8192, 0.5736], to: [0.8192, 0], dashed: true, thin: true, tone: "muted" },
          { from: [-0.8192, 0.5736], to: [-0.8192, 0], dashed: true, thin: true, tone: "muted" },
          { from: [-0.8192, 0.5736], to: [0.8192, 0.5736], dashed: true, thin: true, tone: "muted" },
        ],
        angles: [
          { at: [0, 0], from: [1, 0], to: [0.8192, 0.5736], r: 0.28, label: "θ" },
          { at: [0, 0], from: [0.8192, 0.5736], to: [-0.8192, 0.5736], r: 0.18 },
        ],
        points: [
          { x: 0.8192, y: 0.5736, label: "P", pos: "ne", style: "italic" },
          { x: -0.8192, y: 0.5736, label: "Q", pos: "nw", style: "italic" },
        ],
        labels: [
          { x: -0.3, y: 0.3, text: "180° − θ", pos: "c", style: "small", tone: "good" },
        ],
        xTicks: [{ x: 0.8192, label: "cos θ" }, { x: -0.8192, label: "−cos θ" }],
        caption: String.raw`$P$ and $Q$ are at the same height, so $\sin(180^\circ - \theta) = \sin\theta$. They are on opposite sides, so $\cos(180^\circ - \theta) = -\cos\theta$.`,
        alt: "A semicircle of radius 1 centred at the origin. Point P makes angle theta with the positive x-axis; point Q makes angle 180 degrees minus theta. P and Q are at the same height, and their x-coordinates are cos theta and minus cos theta.",
      },
    },
    {
      title: String.raw`Sine rule and cosine rule`,
      body: String.raw`Label a triangle so that side $a$ is opposite angle $A$, and so on. Both rules work in **any** triangle.

**Sine rule** (Given): $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$

Use it when you know a side **and its opposite angle**, plus one more side or angle.

**Cosine rule** (Given): $a^2 = b^2 + c^2 - 2bc\cos A$

Use it when you know **two sides and the angle between them** (to find the third side), or **all three sides** (to find an angle). For an angle, rearrange first:
$$\cos A = \frac{b^2 + c^2 - a^2}{2bc}.$$

- If $\cos A$ comes out negative, angle $A$ is obtuse — the calculator handles this correctly.
- When using the sine rule to find an angle, check whether the obtuse answer $180^\circ - x$ is possible. The **largest angle is opposite the longest side**. To be safe, use the sine rule to find the *smaller* unknown angle.`,
      figure: {
        type: "plot",
        x: [-0.8, 7], y: [-0.8, 4.2], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [6.2, 0], [2.2, 3.5]], fill: true, tone: "accent" }],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
          { x: 6.2, y: 0, text: "B", pos: "se", style: "italic" },
          { x: 2.2, y: 3.5, text: "C", pos: "n", style: "italic" },
          { x: 3.1, y: 0, text: "c", pos: "s", style: "italic" },
          { x: 4.2, y: 1.75, text: "a", pos: "ne", style: "italic" },
          { x: 1.1, y: 1.75, text: "b", pos: "nw", style: "italic" },
        ],
        caption: String.raw`Side $a$ is opposite angle $A$, side $b$ opposite $B$, side $c$ opposite $C$.`,
        alt: "A general triangle ABC. Side a = BC is opposite vertex A, side b = CA is opposite vertex B, and side c = AB is opposite vertex C.",
      },
    },
    {
      title: String.raw`Area of a triangle $= \frac{1}{2}ab\sin C$`,
      body: String.raw`$$\text{Area of triangle } ABC = \tfrac{1}{2}ab\sin C \quad \text{(Given)}$$

- You need **two sides and the angle between them** (the included angle).
- It is the same as $\frac{1}{2} \times \text{base} \times \text{height}$, because the height is $b\sin C$.
- If you know the area and two sides, $\sin C = \dfrac{2 \times \text{Area}}{ab}$ gives **two** possible angles, $C$ and $180^\circ - C$. Both may be valid unless the question says the angle is acute or obtuse.
- Area of a quadrilateral: split it along a diagonal into two triangles.`,
      figure: {
        type: "plot",
        x: [-0.9, 6.6], y: [-0.8, 3.9], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [5.8, 0], [2.4, 3.2]], fill: true, tone: "accent" }],
        segments: [{ from: [2.4, 3.2], to: [2.4, 0], dashed: true, thin: true, tone: "muted" }],
        rightAngles: [{ at: [2.4, 0], a: [1, 0], b: [0, 1], size: 0.25 }],
        angles: [{ at: [0, 0], from: [5.8, 0], to: [2.4, 3.2], r: 0.7, label: "C" }],
        labels: [
          { x: 0, y: 0, text: "C", pos: "sw", style: "italic" },
          { x: 5.8, y: 0, text: "B", pos: "se", style: "italic" },
          { x: 2.4, y: 3.2, text: "A", pos: "n", style: "italic" },
          { x: 4.0, y: 0, text: "a", pos: "s", style: "italic" },
          { x: 1.2, y: 1.6, text: "b", pos: "nw", style: "italic" },
          { x: 2.4, y: 0.8, text: "b sin C", pos: "e", style: "small", tone: "muted" },
        ],
        caption: String.raw`The height from $A$ to $CB$ is $b\sin C$, so the area is $\frac{1}{2} \times a \times b\sin C$.`,
        alt: "Triangle with vertices C, B and A. Side a runs from C to B along the base, side b from C to A, with the angle C between them. A dashed perpendicular from A to the base has length b sin C.",
      },
    },
    {
      title: String.raw`Angles of elevation and depression`,
      body: String.raw`Both are measured **from the horizontal**.

- **Angle of elevation**: looking *up* from the horizontal to an object.
- **Angle of depression**: looking *down* from the horizontal to an object.
- The angle of depression of $B$ from $T$ equals the angle of elevation of $T$ from $B$ (alternate angles, horizontal lines are parallel).
- Draw the horizontal line at the observer, mark the angle, then find the right-angled triangle. Do not measure the angle from the vertical.`,
      figure: {
        type: "plot",
        x: [-1.2, 8.2], y: [-0.7, 4.8], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [0, 4], tone: "ink" },
          { from: [-0.6, 0], to: [8, 0], tone: "muted" },
          { from: [0, 4], to: [7.6, 4], dashed: true, thin: true, tone: "muted" },
          { from: [0, 4], to: [7, 0], tone: "accent" },
        ],
        angles: [
          { at: [0, 4], from: [7, 0], to: [7.6, 4], r: 1.7 },
          { at: [7, 0], from: [0, 4], to: [0, 0], r: 1.7 },
        ],
        points: [
          { x: 0, y: 4, label: "T", pos: "nw", style: "italic" },
          { x: 7, y: 0, label: "B", pos: "se", style: "italic" },
        ],
        labels: [
          { x: 2.0, y: 4.0, text: "angle of depression", pos: "n", style: "small" },
          { x: 5.0, y: 0.0, text: "angle of elevation", pos: "s", style: "small" },
          { x: 7.4, y: 4.0, text: "horizontal", pos: "n", style: "small", tone: "muted" },
        ],
        caption: String.raw`The angle of depression from $T$ equals the angle of elevation from $B$.`,
        alt: "A vertical tower with top T and a point B on level ground. A dashed horizontal line runs from T. The angle of depression at T, between the horizontal and the line TB, equals the angle of elevation at B, between the ground and BT.",
      },
    },
    {
      title: String.raw`Bearings`,
      body: String.raw`A bearing is an angle measured **clockwise from north**, written with **three figures**: $060^\circ$, $145^\circ$, $305^\circ$.

- "The bearing of $B$ **from** $A$" — stand at $A$, draw a north line at $A$, turn clockwise until you face $B$.
- The **back bearing** (bearing of $A$ from $B$) is the bearing $\pm 180^\circ$.
- North lines at different points are **parallel**, so use co-interior angles (sum $180^\circ$) and alternate angles to find angles inside the triangle.
- Draw a clear sketch with a north line at every point mentioned before you calculate.`,
      figure: {
        type: "plot",
        x: [-1.6, 6.6], y: [-1.6, 5.4], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [0, 2.3], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [0, 2.3] },
          { from: [4.33, 2.5], to: [4.33, 4.8], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [4.33, 4.8] },
          { from: [0, 0], to: [4.33, 2.5], tone: "accent" },
        ],
        angles: [
          { at: [0, 0], from: [4.33, 2.5], to: [0, 2], r: 0.9, label: "060°" },
          { at: [4.33, 2.5], from: [0, 0], to: [4.33, 4.5], r: 0.75, label: "240°" },
        ],
        points: [
          { x: 0, y: 0, label: "A", pos: "sw", style: "italic" },
          { x: 4.33, y: 2.5, label: "B", pos: "e", style: "italic" },
        ],
        caption: String.raw`The bearing of $B$ from $A$ is $060^\circ$. The bearing of $A$ from $B$ is $060^\circ + 180^\circ = 240^\circ$.`,
        alt: "Points A and B with a north arrow at each. The bearing of B from A is 060 degrees, measured clockwise from north at A. At B, the bearing of A is 240 degrees, measured clockwise from north at B.",
      },
    },
    {
      title: String.raw`Problems in three dimensions`,
      body: String.raw`Break a 3D problem into flat right-angled triangles.

- Redraw each triangle you use as a separate 2D sketch, with the right angle marked.
- The angle between a line and a horizontal plane: drop a vertical line from the top of the line to the plane, then use the right-angled triangle formed by the line, the vertical and the line on the plane.
- A vertical pole or edge is perpendicular to **every** line on the ground through its foot.
- In a cuboid, find a face diagonal first, then the space diagonal: $AG^2 = AB^2 + BC^2 + CG^2$.
- The **greatest angle of elevation** of the top of a pole from a point moving along a straight path occurs when the point is **closest** to the foot of the pole (the perpendicular distance).`,
      figure: {
        type: "plot",
        x: [-0.9, 9.0], y: [-0.7, 4.8], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [6, 0], [8, 1.6], [2, 1.6]], fill: true, tone: "muted" }],
        segments: [
          { from: [0, 0], to: [6, 0], tone: "ink" },
          { from: [6, 0], to: [8, 1.6], tone: "ink" },
          { from: [2, 1.6], to: [8, 1.6], tone: "ink", dashed: true, thin: true },
          { from: [0, 0], to: [2, 1.6], tone: "ink", dashed: true, thin: true },
          { from: [2, 1.6], to: [2, 4.1], tone: "ink", dashed: true, thin: true },
          { from: [0, 0], to: [0, 2.5], tone: "ink" },
          { from: [6, 0], to: [6, 2.5], tone: "ink" },
          { from: [8, 1.6], to: [8, 4.1], tone: "ink" },
          { from: [0, 2.5], to: [6, 2.5], tone: "ink" },
          { from: [6, 2.5], to: [8, 4.1], tone: "ink" },
          { from: [8, 4.1], to: [2, 4.1], tone: "ink" },
          { from: [2, 4.1], to: [0, 2.5], tone: "ink" },
          { from: [0, 0], to: [8, 1.6], tone: "good", dashed: true },
          { from: [0, 0], to: [8, 4.1], tone: "accent" },
        ],
        rightAngles: [{ at: [8, 1.6], a: [0, 1], b: [-8, -1.6], size: 0.3 }],
        angles: [{ at: [0, 0], from: [8, 1.6], to: [8, 4.1], r: 1.6, label: "θ" }],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
          { x: 8, y: 1.6, text: "C", pos: "se", style: "italic" },
          { x: 8, y: 4.1, text: "G", pos: "ne", style: "italic" },
        ],
        caption: String.raw`The angle between $AG$ and the base is $\angle GAC$, in the right-angled triangle $ACG$.`,
        alt: "A cuboid with base corner A and top corner G diagonally opposite. The base diagonal AC is dashed, G is vertically above C, and the angle theta at A between AC and AG is the angle between the space diagonal and the base.",
      },
    },
    {
      title: String.raw`Exam technique`,
      body: String.raw`- Give lengths to 3 significant figures and angles to 1 decimal place, unless told otherwise. Bearings are three figures, e.g. $047.5^\circ$.
- Keep at least 5 significant figures in intermediate values (or use the calculator memory). Early rounding often loses the accuracy mark.
- For "Show that" questions, show the calculation that leads to the given value and give it to more figures than the value stated, e.g. show $15.04$ to get "$15.0$".
- Pythagoras and SOH-CAH-TOA are **not** on the formula sheet. The sine rule, cosine rule and $\frac{1}{2}ab\sin C$ are given.
- State which triangle you are working in, e.g. "In triangle $ABD$, …".`,
    },
  ],
  archetypes: [
    {
      id: "G4-pythagoras-converse",
      name: String.raw`Pythagoras' theorem and testing for a right angle`,
      tests: String.raw`Finding an unknown side with Pythagoras' theorem, often in a figure made of two triangles, and using the converse to decide whether a triangle is right-angled.`,
      questions: [
        {
          stem: String.raw`In the diagram, $ABCD$ is a quadrilateral. $AB = 9$ cm, $BC = 12$ cm, $CD = 8$ cm, $AD = 17$ cm and $\angle ABC = 90^\circ$.`,
          figure: {
            type: "plot",
            x: [-2.2, 19], y: [-1.6, 10.6], equal: true, axes: false,
            polygons: [{ points: [[0, 9], [0, 0], [12, 0], [16.8, 6.4]], fill: true, tone: "muted" }],
            segments: [{ from: [0, 9], to: [12, 0], tone: "ink", thin: true }],
            rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.8 }],
            labels: [
              { x: 0, y: 9, text: "A", pos: "nw", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 12, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 16.8, y: 6.4, text: "D", pos: "e", style: "italic" },
              { x: 0, y: 4.5, text: "9 cm", pos: "w" },
              { x: 6, y: 0, text: "12 cm", pos: "s" },
              { x: 14.4, y: 3.2, text: "8 cm", pos: "se" },
              { x: 8.4, y: 7.7, text: "17 cm", pos: "n" },
            ],
            caption: "Not drawn to scale",
            alt: "Quadrilateral ABCD with a right angle at B. AB = 9 cm, BC = 12 cm, CD = 8 cm and AD = 17 cm. The diagonal AC is drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $AC$.`, marks: 1 },
            { label: "(b)", text: String.raw`Show that triangle $ACD$ is right-angled.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of $ABCD$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find $\angle BAD$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The lengths of the sides of a triangle are 20 cm, 21 cm and 28 cm. Determine whether the triangle is right-angled. Show your working.`,
          marks: 2,
        },
      ],
    },
    {
      id: "G4-right-angled-trig",
      name: String.raw`Trigonometric ratios in right-angled triangles`,
      tests: String.raw`Choosing sine, cosine or tangent to find sides and angles, usually in two right-angled triangles that share a side, so that one answer feeds the next.`,
      questions: [
        {
          stem: String.raw`In the diagram, $C$, $D$ and $B$ lie on a straight line and $AB$ is perpendicular to $CB$. $AB = 7$ cm, $\angle ADB = 52^\circ$ and $\angle ACB = 31^\circ$.`,
          figure: {
            type: "plot",
            x: [-13, 1.6], y: [-1.4, 8.3], equal: true, axes: false,
            segments: [
              { from: [-11.65, 0], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [0, 7], tone: "ink" },
              { from: [-11.65, 0], to: [0, 7], tone: "ink" },
              { from: [-5.469, 0], to: [0, 7], tone: "ink" },
            ],
            rightAngles: [{ at: [0, 0], a: [-1, 0], b: [0, 1], size: 0.6 }],
            angles: [
              { at: [-5.469, 0], from: [0, 0], to: [0, 7], r: 1.2, label: "52°" },
              { at: [-11.65, 0], from: [0, 0], to: [0, 7], r: 2.0, label: "31°" },
            ],
            labels: [
              { x: 0, y: 7, text: "A", pos: "ne", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "se", style: "italic" },
              { x: -5.469, y: 0, text: "D", pos: "s", style: "italic" },
              { x: -11.65, y: 0, text: "C", pos: "sw", style: "italic" },
              { x: 0, y: 3.5, text: "7 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "Right-angled triangle ABC with the right angle at B and AB = 7 cm vertical. D lies on CB between C and B. Angle ADB = 52 degrees and angle ACB = 31 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $BD$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $CD$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find $AC$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G4-obtuse-angles",
      name: String.raw`Sine and cosine of obtuse angles`,
      tests: String.raw`Using $\sin(180^\circ - \theta) = \sin\theta$ and $\cos(180^\circ - \theta) = -\cos\theta$ to write down exact ratios of an obtuse angle from a diagram, and solving $\sin x = k$ or $\cos x = k$ for $0^\circ \le x \le 180^\circ$.`,
      questions: [
        {
          stem: String.raw`In the diagram, $A$, $B$ and $C$ lie on a straight line and $DC$ is perpendicular to $AC$. $AB = 5$ cm, $BC = 6$ cm and $CD = 8$ cm.`,
          figure: {
            type: "plot",
            x: [-1, 12.6], y: [-1.4, 9.2], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [11, 0], tone: "ink" },
              { from: [11, 0], to: [11, 8], tone: "ink" },
              { from: [5, 0], to: [11, 8], tone: "ink" },
              { from: [0, 0], to: [11, 8], tone: "ink" },
            ],
            rightAngles: [{ at: [11, 0], a: [-1, 0], b: [0, 1], size: 0.6 }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 5, y: 0, text: "B", pos: "s", style: "italic" },
              { x: 11, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 11, y: 8, text: "D", pos: "ne", style: "italic" },
              { x: 2.5, y: 0, text: "5 cm", pos: "s" },
              { x: 8, y: 0, text: "6 cm", pos: "s" },
              { x: 11, y: 4, text: "8 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "A, B and C lie on a horizontal line with AB = 5 cm and BC = 6 cm. D is vertically above C with CD = 8 cm and a right angle at C. Lines BD and AD are drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the value of $\sin \angle DBC$, as a fraction.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the value of $\cos \angle ABD$, as a fraction.`, marks: 1 },
            { label: "(c)", text: String.raw`Using your answer to part (a), find the area of triangle $ABD$.`, marks: 2 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Angles $x$ and $y$ lie between $0^\circ$ and $180^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`Given that $\sin x = 0.42$, find the two possible values of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given that $\cos y = -0.3$, find $y$.`, marks: 1 },
            { label: "(c)", text: String.raw`Explain why there is only one possible value of $y$ in part (b).`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G4-sine-cosine-rule",
      name: String.raw`Solving triangles with the sine and cosine rules`,
      tests: String.raw`Deciding which rule to use from the given information (two sides and the included angle, three sides, or a side with its opposite angle), then finding the remaining sides, angles and area.`,
      questions: [
        {
          stem: String.raw`In triangle $PQR$, $PQ = 8$ cm, $QR = 11$ cm and $\angle PQR = 65^\circ$.`,
          figure: {
            type: "plot",
            x: [-1, 12.2], y: [-1.3, 8.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [11, 0], [3.381, 7.25]], fill: true, tone: "muted" }],
            angles: [{ at: [0, 0], from: [11, 0], to: [3.381, 7.25], r: 1.2, label: "65°" }],
            labels: [
              { x: 0, y: 0, text: "Q", pos: "sw", style: "italic" },
              { x: 11, y: 0, text: "R", pos: "se", style: "italic" },
              { x: 3.381, y: 7.25, text: "P", pos: "n", style: "italic" },
              { x: 1.69, y: 3.62, text: "8 cm", pos: "w" },
              { x: 5.5, y: 0, text: "11 cm", pos: "s" },
            ],
            caption: "Not drawn to scale",
            alt: "Triangle PQR with PQ = 8 cm, QR = 11 cm and angle PQR = 65 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $PR$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle PRQ$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $PQR$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In triangle $XYZ$, $XY = 12$ cm, $YZ = 7$ cm and $XZ = 9$ cm.`,
          figure: {
            type: "plot",
            x: [-1, 13.2], y: [-1.3, 6.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [12, 0], [7.333, 5.217]], fill: true, tone: "muted" }],
            labels: [
              { x: 0, y: 0, text: "X", pos: "sw", style: "italic" },
              { x: 12, y: 0, text: "Y", pos: "se", style: "italic" },
              { x: 7.333, y: 5.217, text: "Z", pos: "n", style: "italic" },
              { x: 6, y: 0, text: "12 cm", pos: "s" },
              { x: 9.67, y: 2.61, text: "7 cm", pos: "ne" },
              { x: 3.67, y: 2.61, text: "9 cm", pos: "nw" },
            ],
            caption: "Not drawn to scale",
            alt: "Triangle XYZ with XY = 12 cm along the base, YZ = 7 cm and XZ = 9 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $\angle XZY$ is an obtuse angle.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the area of triangle $XYZ$.`, marks: 2 },
            { label: "(c)", text: String.raw`Hence find the perpendicular distance from $Z$ to $XY$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G4-area-of-triangle",
      name: String.raw`Area of a triangle and quadrilateral using $\frac{1}{2}ab\sin C$`,
      tests: String.raw`Using the area formula forwards and backwards: finding an area, finding an angle from a given area (with two possible answers), and finding the area of a quadrilateral split by a diagonal.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $AB = 8$ cm, $AC = 10$ cm and the area of the triangle is $30\text{ cm}^2$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the two possible values of $\angle BAC$.`, marks: 3 },
            { label: "(b)", text: String.raw`Given that $\angle BAC$ is obtuse, find $BC$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a plot of land $ABCD$. $AB = 12$ m, $AD = 9$ m, $BC = 14$ m, $CD = 11$ m and $\angle BAD = 110^\circ$.`,
          figure: {
            type: "plot",
            x: [-5.2, 14.4], y: [-1.6, 14.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [12, 0], [6.919, 13.046], [-3.078, 8.457]], fill: true, tone: "muted" }],
            segments: [{ from: [12, 0], to: [-3.078, 8.457], tone: "ink", thin: true, dashed: true }],
            angles: [{ at: [0, 0], from: [12, 0], to: [-3.078, 8.457], r: 1.3, label: "110°" }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 12, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 6.919, y: 13.046, text: "C", pos: "n", style: "italic" },
              { x: -3.078, y: 8.457, text: "D", pos: "w", style: "italic" },
              { x: 6, y: 0, text: "12 m", pos: "s" },
              { x: -1.54, y: 4.23, text: "9 m", pos: "w" },
              { x: 9.46, y: 6.52, text: "14 m", pos: "e" },
              { x: 1.92, y: 10.75, text: "11 m", pos: "nw" },
            ],
            caption: "Not drawn to scale",
            alt: "Quadrilateral ABCD with AB = 12 m, AD = 9 m, BC = 14 m and CD = 11 m. Angle BAD = 110 degrees. The diagonal BD is dashed.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $BD$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle BCD$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of the plot of land.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G4-elevation-depression",
      name: String.raw`Angles of elevation and depression`,
      tests: String.raw`Turning a description of a tower, cliff or building into right-angled triangles measured from the horizontal, often with two observers or two angles from the same point.`,
      questions: [
        {
          stem: String.raw`$T$ is the top of a vertical lighthouse $TF$ of height 45 m, standing at sea level. Two boats $A$ and $B$ are in a straight line with $F$, as shown. The angles of depression of $A$ and $B$ from $T$ are $28^\circ$ and $17^\circ$ respectively.`,
          figure: {
            type: "plot",
            x: [-14, 166], y: [-12, 60], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [0, 45], tone: "ink" },
              { from: [-6, 0], to: [160, 0], tone: "muted" },
              { from: [0, 45], to: [160, 45], dashed: true, thin: true, tone: "muted" },
              { from: [0, 45], to: [84.63, 0], tone: "ink" },
              { from: [0, 45], to: [147.19, 0], tone: "ink" },
            ],
            rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 4 }],
            angles: [
              { at: [0, 45], from: [84.63, 0], to: [160, 45], r: 55 },
              { at: [0, 45], from: [147.19, 0], to: [160, 45], r: 95 },
            ],
            labels: [
              { x: 0, y: 45, text: "T", pos: "nw", style: "italic" },
              { x: 0, y: 0, text: "F", pos: "sw", style: "italic" },
              { x: 84.63, y: 0, text: "A", pos: "s", style: "italic" },
              { x: 147.19, y: 0, text: "B", pos: "s", style: "italic" },
              { x: 0, y: 22.5, text: "45 m", pos: "w" },
              { x: 57.3, y: 21.3, text: "28°", pos: "c", style: "italic" },
              { x: 98.9, y: 30.2, text: "17°", pos: "c", style: "italic" },
            ],
            caption: "Not drawn to scale",
            alt: "A vertical lighthouse TF, 45 m tall. Boats A and B lie on the sea in line with F, with A nearer. A dashed horizontal line from T shows angles of depression of 28 degrees to A and 17 degrees to B.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the distance $FA$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the distance between the two boats.`, marks: 2 },
            { label: "(c)", text: String.raw`A third boat $C$ is on the line $AB$, 100 m from $F$. Find the angle of elevation of $T$ from $C$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A flagpole $BT$ stands vertically on top of a building $FB$. A point $P$ on level ground is 30 m from the foot $F$ of the building. From $P$, the angle of elevation of $B$ is $40^\circ$ and the angle of elevation of $T$ is $46^\circ$.`,
          figure: {
            type: "plot",
            x: [-3, 37], y: [-2.6, 34], equal: true, axes: false,
            polygons: [{ points: [[30, 0], [35, 0], [35, 25.17], [30, 25.17]], fill: true, tone: "muted" }],
            segments: [
              { from: [-2, 0], to: [36, 0], tone: "muted" },
              { from: [30, 25.17], to: [30, 31.07], tone: "ink" },
              { from: [0, 0], to: [30, 25.17], tone: "ink" },
              { from: [0, 0], to: [30, 31.07], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [30, 0], to: [30, 25.17], r: 5.5, label: "40°" },
              { at: [0, 0], from: [30, 0], to: [30, 31.07], r: 10, label: "46°" },
            ],
            labels: [
              { x: 0, y: 0, text: "P", pos: "sw", style: "italic" },
              { x: 30, y: 0, text: "F", pos: "s", style: "italic" },
              { x: 30, y: 25.17, text: "B", pos: "w", style: "italic" },
              { x: 30, y: 31.07, text: "T", pos: "n", style: "italic" },
              { x: 15, y: 0, text: "30 m", pos: "s" },
            ],
            caption: "Not drawn to scale",
            alt: "A building FB on level ground with a vertical flagpole BT on top. From P, 30 m from F, the angles of elevation of B and T are 40 degrees and 46 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the height of the building $FB$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the length of the flagpole $BT$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G4-bearings",
      name: String.raw`Bearings`,
      tests: String.raw`Using north lines, back bearings and parallel-line angle facts to find angles inside a triangle, then distances by Pythagoras, trigonometry or the sine and cosine rules, and finally bearings or shortest distances.`,
      questions: [
        {
          stem: String.raw`A ship sails 12 km from port $P$ to a point $Q$ on a bearing of $050^\circ$. It then sails 9 km from $Q$ to a point $R$ on a bearing of $140^\circ$.`,
          figure: {
            type: "plot",
            x: [-2, 17], y: [-1.6, 12.4], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [0, 4.2], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [0, 4.2] },
              { from: [9.193, 7.713], to: [9.193, 11.6], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [9.193, 11.6] },
              { from: [0, 0], to: [9.193, 7.713], tone: "accent" },
              { from: [9.193, 7.713], to: [14.978, 0.819], tone: "accent" },
            ],
            angles: [
              { at: [0, 0], from: [9.193, 7.713], to: [0, 3], r: 2.2, label: "50°" },
              { at: [9.193, 7.713], from: [14.978, 0.819], to: [9.193, 11], r: 1.4, label: "140°" },
            ],
            labels: [
              { x: 0, y: 0, text: "P", pos: "sw", style: "italic" },
              { x: 9.193, y: 7.713, text: "Q", pos: "nw", style: "italic" },
              { x: 14.978, y: 0.819, text: "R", pos: "se", style: "italic" },
              { x: 4.6, y: 3.86, text: "12 km", pos: "nw" },
              { x: 12.09, y: 4.27, text: "9 km", pos: "ne" },
            ],
            caption: "Not drawn to scale",
            alt: "North lines at P and Q. Q is 12 km from P on a bearing of 050 degrees, and R is 9 km from Q on a bearing of 140 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $\angle PQR = 90^\circ$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the distance $PR$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the bearing of $R$ from $P$.`, marks: 2 },
            { label: "(d)", text: String.raw`Write down the bearing of $P$ from $R$.`, marks: 1 },
            { label: "(e)", text: String.raw`Find the shortest distance from $Q$ to the straight line $PR$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Three towns $A$, $B$ and $C$ are on level ground. $B$ is 25 km from $A$ on a bearing of $070^\circ$. The bearing of $C$ from $A$ is $155^\circ$ and the bearing of $C$ from $B$ is $210^\circ$.`,
          figure: {
            type: "plot",
            x: [-4, 28], y: [-21, 13.5], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [0, 6], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [0, 6] },
              { from: [23.49, 8.55], to: [23.49, 13], arrow: true, tone: "ink", label: "N", pos: "n", style: "plain", labelAt: [23.49, 13] },
              { from: [8.29, -17.78], to: [8.29, -12], arrow: true, tone: "ink", label: "N", pos: "e", style: "plain", labelAt: [8.29, -12] },
              { from: [0, 0], to: [23.49, 8.55], tone: "accent" },
              { from: [0, 0], to: [8.29, -17.78], tone: "accent" },
              { from: [23.49, 8.55], to: [8.29, -17.78], tone: "accent" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "w", style: "italic" },
              { x: 23.49, y: 8.55, text: "B", pos: "e", style: "italic" },
              { x: 8.29, y: -17.78, text: "C", pos: "s", style: "italic" },
              { x: 11.74, y: 4.27, text: "25 km", pos: "nw" },
            ],
            caption: "Not drawn to scale",
            alt: "Triangle of towns A, B and C with a north line at each. B is 25 km from A, to the north-east; C is south-south-east of A and south-west of B.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $\angle BAC = 85^\circ$ and $\angle ABC = 40^\circ$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the distance $AC$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $ABC$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the bearing of $A$ from $C$.`, marks: 1 },
            { label: "(e)", text: String.raw`A straight road joins $B$ and $C$. Find the shortest distance from $A$ to the road.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G4-three-dimensions",
      name: String.raw`Problems in three dimensions`,
      tests: String.raw`Finding lengths and angles in cuboids, pyramids and vertical poles on horizontal ground by picking out the right-angled triangles, including the greatest angle of elevation from a straight path.`,
      questions: [
        {
          stem: String.raw`The diagram shows a cuboid $ABCDEFGH$ with a horizontal base $ABCD$. $AB = 12$ cm, $BC = 5$ cm and $CG = 4$ cm.`,
          figure: {
            type: "plot",
            x: [-1, 10.2], y: [-1, 5.6], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [7.2, 0], tone: "ink" },
              { from: [7.2, 0], to: [9.0, 1.5], tone: "ink" },
              { from: [1.8, 1.5], to: [9.0, 1.5], tone: "ink", dashed: true, thin: true },
              { from: [0, 0], to: [1.8, 1.5], tone: "ink", dashed: true, thin: true },
              { from: [1.8, 1.5], to: [1.8, 3.9], tone: "ink", dashed: true, thin: true },
              { from: [0, 0], to: [0, 2.4], tone: "ink" },
              { from: [7.2, 0], to: [7.2, 2.4], tone: "ink" },
              { from: [9.0, 1.5], to: [9.0, 3.9], tone: "ink" },
              { from: [0, 2.4], to: [7.2, 2.4], tone: "ink" },
              { from: [7.2, 2.4], to: [9.0, 3.9], tone: "ink" },
              { from: [9.0, 3.9], to: [1.8, 3.9], tone: "ink" },
              { from: [1.8, 3.9], to: [0, 2.4], tone: "ink" },
              { from: [0, 0], to: [9.0, 3.9], tone: "accent", thin: true },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 7.2, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 9.0, y: 1.5, text: "C", pos: "e", style: "italic" },
              { x: 1.8, y: 1.5, text: "D", pos: "nw", style: "italic" },
              { x: 0, y: 2.4, text: "E", pos: "w", style: "italic" },
              { x: 7.2, y: 2.4, text: "F", pos: "nw", style: "italic" },
              { x: 9.0, y: 3.9, text: "G", pos: "ne", style: "italic" },
              { x: 1.8, y: 3.9, text: "H", pos: "nw", style: "italic" },
              { x: 3.6, y: 0, text: "12 cm", pos: "s" },
              { x: 8.1, y: 0.75, text: "5 cm", pos: "se" },
              { x: 9.0, y: 2.7, text: "4 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "A cuboid ABCDEFGH with base ABCD and top EFGH, E above A, F above B, G above C and H above D. AB = 12 cm, BC = 5 cm and CG = 4 cm. The space diagonal AG is drawn.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $AC$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $AG$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the angle between $AG$ and the base $ABCD$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A vertical mast $FT$ of height 18 m stands with its foot $F$ on horizontal ground. The point $P$ is on the ground 40 m due south of $F$, and the point $Q$ is on the ground due east of $F$. The angle of elevation of $T$ from $Q$ is $35^\circ$.`,
          figure: {
            type: "plot",
            x: [-0.4, 11.2], y: [-0.4, 7.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [9.4, 0], [11, 4.4], [1.6, 4.4]], fill: true, tone: "muted" }],
            segments: [
              { from: [4.6, 3.2], to: [4.6, 7.0], tone: "ink" },
              { from: [2.2, 1.4], to: [4.6, 3.2], tone: "ink", dashed: true, thin: true },
              { from: [4.6, 3.2], to: [7.17, 3.2], tone: "ink", dashed: true, thin: true },
              { from: [2.2, 1.4], to: [4.6, 7.0], tone: "ink" },
              { from: [7.17, 3.2], to: [4.6, 7.0], tone: "ink" },
              { from: [2.2, 1.4], to: [7.17, 3.2], tone: "accent" },
              { from: [9.8, 2.6], to: [10.4, 3.05], arrow: true, tone: "ink", label: "N", pos: "ne", style: "plain", labelAt: [10.4, 3.05] },
            ],
            angles: [{ at: [7.17, 3.2], from: [4.6, 7.0], to: [4.6, 3.2], r: 0.8, label: "35°" }],
            labels: [
              { x: 4.6, y: 7.0, text: "T", pos: "n", style: "italic" },
              { x: 4.6, y: 3.2, text: "F", pos: "w", style: "italic" },
              { x: 2.2, y: 1.4, text: "P", pos: "sw", style: "italic" },
              { x: 7.17, y: 3.2, text: "Q", pos: "e", style: "italic" },
              { x: 4.6, y: 5.1, text: "18 m", pos: "e" },
              { x: 3.4, y: 2.3, text: "40 m", pos: "se" },
            ],
            caption: "Not drawn to scale",
            alt: "A vertical mast FT, 18 m tall, on horizontal ground. P is 40 m due south of F and Q is due east of F. The angle of elevation of T from Q is 35 degrees. The straight line PQ is drawn on the ground.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the angle of elevation of $T$ from $P$.`, marks: 2 },
            { label: "(b)", text: String.raw`Show that $FQ = 25.7$ m, correct to 3 significant figures.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the bearing of $Q$ from $P$.`, marks: 2 },
            { label: "(d)", text: String.raw`A man walks along the straight line from $P$ to $Q$. Find the greatest angle of elevation of $T$ from the man during his walk.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "G4-real-world-ramp",
      name: String.raw`Real-world task: designing a ramp`,
      tests: String.raw`A Paper 2 style task: using a stated guideline (a maximum angle) and measurements to decide whether a design is acceptable, then working out lengths and cost. Answers must be justified with figures.`,
      questions: [
        {
          stem: String.raw`A school wants to build a wheelchair ramp to an entrance which is 0.75 m above the ground. A guideline says that the angle between a ramp and the horizontal ground must not be more than $4.8^\circ$. The side view of a single straight ramp is shown.`,
          figure: {
            type: "plot",
            x: [-0.6, 11.4], y: [-0.7, 3.0], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [9, 0], [9, 2]], fill: true, tone: "accent" },
              { points: [[9, 0], [11, 0], [11, 2], [9, 2]], fill: true, tone: "muted" },
            ],
            segments: [{ from: [-0.5, 0], to: [11.2, 0], tone: "ink" }],
            rightAngles: [{ at: [9, 0], a: [-1, 0], b: [0, 1], size: 0.3 }],
            angles: [{ at: [0, 0], from: [9, 0], to: [9, 2], r: 2.2, label: "θ" }],
            labels: [
              { x: 9, y: 1, text: "0.75 m", pos: "w" },
              { x: 10, y: 2, text: "entrance", pos: "n", style: "small" },
              { x: 4.5, y: 1.0, text: "ramp", pos: "nw", style: "small" },
            ],
            caption: "Not drawn to scale",
            alt: "Side view of a straight ramp rising from the ground to an entrance 0.75 m high. The ramp makes an angle theta with the ground.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the shortest horizontal distance that a single straight ramp needs, if it follows the guideline.`, marks: 2 },
            { label: "(b)", text: String.raw`There is only 6 m of space in front of the entrance, so the school chooses a design with two straight sloping sections joined by a flat landing, where the ramp turns back on itself. Each sloping section rises 0.375 m over a horizontal distance of 5 m.

Determine whether this design follows the guideline. Justify your answer.`, marks: 2 },
            { label: "(c)", text: String.raw`The sloping sections are each 1.2 m wide and are coated with a non-slip paint costing $\$18$ per square metre. Find the cost of coating both sloping sections.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
