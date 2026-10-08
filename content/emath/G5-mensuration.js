H2.addTopic({
  id: "G5",
  title: "Mensuration",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Perimeter and area of plane figures, arcs, sectors and segments with radian measure, and volume and surface area of solids.`,
  syllabus: {
    include: [
      String.raw`area of parallelogram and trapezium`,
      String.raw`problems involving perimeter and area of composite plane figures`,
      String.raw`volume and surface area of cube, cuboid, prism, cylinder, pyramid, cone and sphere`,
      String.raw`conversion between $\text{cm}^2$ and $\text{m}^2$, and between $\text{cm}^3$ and $\text{m}^3$`,
      String.raw`problems involving volume and surface area of composite solids`,
      String.raw`arc length, sector area and area of a segment of a circle`,
      String.raw`use of radian measure of angle (including conversion between radians and degrees)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Area of plane figures`,
      body: String.raw`All of these must be memorised — only the triangle formula $\frac{1}{2}ab\sin C$ is given.

| Shape | Area |
| --- | --- |
| Triangle | $\frac{1}{2} \times \text{base} \times \text{height}$ |
| Parallelogram | $\text{base} \times \text{height}$ |
| Trapezium | $\frac{1}{2}(a + b)h$, where $a$, $b$ are the parallel sides |
| Circle | $\pi r^2$ (circumference $2\pi r$) |

- The **height** is always **perpendicular** to the base. It is not the slanted side.
- A parallelogram has two bases and two heights: $\text{Area} = PQ \times h_1 = PS \times h_2$. Use this to find the distance between the other pair of sides.`,
      figure: [
        {
          type: "plot",
          x: [-0.5, 7.4], y: [-0.9, 3.6], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [5, 0], [6.6, 2.8], [1.6, 2.8]], fill: true, tone: "accent" }],
          segments: [{ from: [1.6, 2.8], to: [1.6, 0], dashed: true, thin: true, tone: "muted" }],
          rightAngles: [{ at: [1.6, 0], a: [1, 0], b: [0, 1], size: 0.25 }],
          labels: [
            { x: 2.5, y: 0, text: "base", pos: "s", style: "small" },
            { x: 1.6, y: 1.4, text: "h", pos: "e", style: "italic" },
          ],
          caption: String.raw`Parallelogram: base $\times$ height`,
          alt: "A parallelogram with its base along the bottom and a dashed perpendicular height h from the top side to the base.",
        },
        {
          type: "plot",
          x: [-0.5, 7.4], y: [-0.9, 3.6], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [6.6, 0], [4.8, 2.8], [1.2, 2.8]], fill: true, tone: "accent" }],
          segments: [{ from: [1.2, 2.8], to: [1.2, 0], dashed: true, thin: true, tone: "muted" }],
          rightAngles: [{ at: [1.2, 0], a: [1, 0], b: [0, 1], size: 0.25 }],
          labels: [
            { x: 3.3, y: 0, text: "b", pos: "s", style: "italic" },
            { x: 3.0, y: 2.8, text: "a", pos: "n", style: "italic" },
            { x: 1.2, y: 1.4, text: "h", pos: "e", style: "italic" },
          ],
          caption: String.raw`Trapezium: $\frac{1}{2}(a + b)h$`,
          alt: "A trapezium with parallel sides a (top) and b (bottom) and a dashed perpendicular height h between them.",
        },
      ],
    },
    {
      title: String.raw`Composite plane figures`,
      body: String.raw`Split the figure into simple shapes, then **add** or **subtract** areas.

- **Perimeter** = the length of the **outer boundary only**. Do not include lines where two shapes are joined.
- A semicircle of diameter $d$ adds an arc of length $\frac{1}{2}\pi d$ to the perimeter, not $\pi d$.
- A shape with a hole: area = outer area $-$ hole. The perimeter includes the edge of the hole if the question says so.
- Write down each piece separately (e.g. "rectangle $= 240$, two semicircles $= 36\pi$") so method marks are easy to award.`,
      figure: {
        type: "plot",
        x: [-1.5, 5.5], y: [-0.6, 5.4], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [4, 0], [4, 3]].concat(Array.from({ length: 41 }, (_, i) => [2 + 2 * Math.cos(Math.PI * i / 40), 3 + 2 * Math.sin(Math.PI * i / 40)])).concat([[0, 3]]), fill: true, tone: "accent" }],
        segments: [{ from: [0, 3], to: [4, 3], dashed: true, thin: true, tone: "muted" }],
        labels: [
          { x: 2, y: 0, text: "d", pos: "s", style: "italic" },
          { x: 2, y: 3, text: "not part of the perimeter", pos: "s", style: "small", tone: "muted" },
        ],
        caption: String.raw`Perimeter $=$ three sides of the rectangle $+ \frac{1}{2}\pi d$. The dashed line is inside the shape.`,
        alt: "A window shape: a rectangle with a semicircle on top. The dashed line where the semicircle joins the rectangle is inside the shape and is not part of the perimeter.",
      },
    },
    {
      title: String.raw`Units: converting areas and volumes`,
      body: String.raw`Square or cube the length conversion — do not just multiply by 100.

- $1\text{ m} = 100\text{ cm}$, so $1\text{ m}^2 = 100^2 = 10\,000\text{ cm}^2$ and $1\text{ m}^3 = 100^3 = 1\,000\,000\text{ cm}^3$.
- $1\text{ litre} = 1000\text{ cm}^3$, and $1\text{ m}^3 = 1000$ litres.
- $1\text{ cm}^3$ of water is $1$ ml.
- Change all lengths to the **same unit before** calculating. Check the unit the answer must be given in.`,
    },
    {
      title: String.raw`Prisms and cylinders`,
      body: String.raw`A **prism** has the same cross-section all along its length. A cuboid and a cylinder are prisms.

- Volume $=$ area of cross-section $\times$ length. Cylinder: $V = \pi r^2 h$ (memorise).
- Total surface area $= 2 \times$ cross-section $+$ perimeter of cross-section $\times$ length.
- Cylinder: curved surface area $= 2\pi rh$; total surface area of a closed cylinder $= 2\pi r^2 + 2\pi rh$. An **open** cylinder (no lid) has only one circle.
- Cube of side $a$: $V = a^3$, surface area $= 6a^2$. Cuboid: $V = lbh$, surface area $= 2(lb + bh + lh)$.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 5.8], y: [-0.8, 3.8], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [3, 0], [1.2, 2]], fill: true, tone: "accent" }],
          segments: [
            { from: [3, 0], to: [5, 1.2], tone: "ink" },
            { from: [1.2, 2], to: [3.2, 3.2], tone: "ink" },
            { from: [5, 1.2], to: [3.2, 3.2], tone: "ink" },
            { from: [0, 0], to: [2, 1.2], tone: "ink", dashed: true, thin: true },
            { from: [2, 1.2], to: [5, 1.2], tone: "ink", dashed: true, thin: true },
            { from: [2, 1.2], to: [3.2, 3.2], tone: "ink", dashed: true, thin: true },
          ],
          labels: [
            { x: 4.0, y: 0.6, text: "length", pos: "se", style: "small" },
            { x: 1.4, y: 0.65, text: "cross-section", pos: "c", style: "small", tone: "accent" },
          ],
          caption: String.raw`Prism: $V = A \times \text{length}$`,
          alt: "A triangular prism with the shaded triangular cross-section at the front and the length running back.",
        },
        {
          type: "plot",
          x: [-2.6, 2.6], y: [-0.8, 3.8], equal: true, axes: false,
          curves: [
            { param: "t => [1.5*Math.cos(t), 3 + 0.45*Math.sin(t)]", t: [0, 6.2832], tone: "ink" },
            { param: "t => [1.5*Math.cos(t), 0.45*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
            { param: "t => [1.5*Math.cos(t), 0.45*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
          ],
          segments: [
            { from: [-1.5, 0], to: [-1.5, 3], tone: "ink" },
            { from: [1.5, 0], to: [1.5, 3], tone: "ink" },
            { from: [0, 3], to: [1.5, 3], tone: "accent", label: "r", pos: "n", style: "italic" },
            { from: [1.9, 0], to: [1.9, 3], tone: "muted", thin: true, arrow: true, arrowStart: true, label: "h", pos: "e", style: "italic" },
          ],
          points: [{ x: 0, y: 3 }],
          caption: String.raw`Cylinder: $V = \pi r^2 h$, curved area $2\pi rh$`,
          alt: "A cylinder of radius r and height h. The back half of the bottom circle is dashed.",
        },
      ],
    },
    {
      title: String.raw`Pyramids and cones`,
      body: String.raw`- Pyramid: $V = \frac{1}{3} \times \text{base area} \times \text{height}$ (memorise). The height is the **perpendicular** height from the apex to the base.
- Cone: $V = \frac{1}{3}\pi r^2 h$ (Given) and curved surface area $= \pi r l$ (Given), where $l$ is the **slant height**.
- Link them with Pythagoras: $l^2 = r^2 + h^2$.
- Total surface area of a solid cone $= \pi r l + \pi r^2$. Of a pyramid $=$ base $+$ the triangular faces; the height of each triangular face is its own slant height, found with Pythagoras.
- A sector of radius $R$ rolled into a cone: the slant height $l = R$, and the **arc length becomes the base circumference** $2\pi r$.`,
      figure: {
        type: "plot",
        x: [-2.6, 2.8], y: [-0.8, 3.9], equal: true, axes: false,
        curves: [
          { param: "t => [1.6*Math.cos(t), 0.45*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
          { param: "t => [1.6*Math.cos(t), 0.45*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
        ],
        segments: [
          { from: [-1.6, 0], to: [0, 3.3], tone: "ink" },
          { from: [1.6, 0], to: [0, 3.3], tone: "accent", label: "l", pos: "ne", style: "italic" },
          { from: [0, 3.3], to: [0, 0], dashed: true, tone: "muted", label: "h", pos: "w", style: "italic" },
          { from: [0, 0], to: [1.6, 0], dashed: true, tone: "muted", label: "r", pos: "s", style: "italic" },
        ],
        rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.22 }],
        caption: String.raw`The height $h$, radius $r$ and slant height $l$ form a right-angled triangle.`,
        alt: "A cone with apex above the centre of its circular base. The vertical height h, base radius r and slant height l form a right-angled triangle inside the cone.",
      },
    },
    {
      title: String.raw`Spheres and hemispheres`,
      body: String.raw`- Sphere: $V = \frac{4}{3}\pi r^3$ (Given), surface area $= 4\pi r^2$ (Given).
- Hemisphere: $V = \frac{2}{3}\pi r^3$; **curved** surface area $= 2\pi r^2$; a **solid** hemisphere also has a flat circular face, so its total surface area $= 2\pi r^2 + \pi r^2 = 3\pi r^2$.
- Melting and recasting: the **volume stays the same**. Number of small objects $= \dfrac{\text{volume of large object}}{\text{volume of one small object}}$ (round down if only whole objects count).
- Displacement: when a solid sinks fully in water, the rise in water level $\times$ base area of the container $=$ volume of the solid.`,
      figure: [
        {
          type: "plot",
          x: [-2.1, 2.1], y: [-1.8, 1.9], equal: true, axes: false,
          circles: [{ c: [0, 0], r: 1.5, tone: "ink" }],
          curves: [
            { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "muted" },
            { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [0, 3.1416], tone: "muted", dashed: true },
          ],
          segments: [{ from: [0, 0], to: [1.5, 0], tone: "accent", label: "r", pos: "n", style: "italic" }],
          points: [{ x: 0, y: 0 }],
          caption: String.raw`Sphere: $\frac{4}{3}\pi r^3$, $4\pi r^2$`,
          alt: "A sphere of radius r with its equator drawn as an ellipse.",
        },
        {
          type: "plot",
          x: [-2.1, 2.1], y: [-1.0, 2.7], equal: true, axes: false,
          curves: [
            { param: "t => [1.5*Math.cos(t), 1.5*Math.sin(t)]", t: [0, 3.1416], tone: "ink" },
            { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [0, 6.2832], tone: "ink" },
          ],
          polygons: [{ points: Array.from({ length: 41 }, (_, i) => [1.5 * Math.cos(2 * Math.PI * i / 40), 0.4 * Math.sin(2 * Math.PI * i / 40)]), fill: true, tone: "accent" }],
          segments: [{ from: [0, 0], to: [1.5, 0], tone: "accent", label: "r", pos: "s", style: "italic", labelAt: [0.75, -0.1] }],
          points: [{ x: 0, y: 0 }],
          caption: String.raw`Solid hemisphere: total area $3\pi r^2$`,
          alt: "A solid hemisphere of radius r resting on its flat circular face, which is shaded.",
        },
      ],
    },
    {
      title: String.raw`Composite solids`,
      body: String.raw`Build the solid from simple pieces.

- **Volume**: add the volumes of the pieces (or subtract a hole).
- **Total surface area**: add only the surfaces that are **exposed**. Where two pieces are joined, the joining face is hidden and is **not** counted.
- Example: a cylinder topped by a hemisphere of the same radius has surface area $= \pi r^2$ (base) $+ 2\pi rh$ (curved side) $+ 2\pi r^2$ (dome).
- Mass $=$ density $\times$ volume. Watch units: g/cm$^3$ with cm$^3$ gives grams.`,
      figure: {
        type: "plot",
        x: [-2.8, 2.8], y: [-0.8, 5.1], equal: true, axes: false,
        curves: [
          { param: "t => [1.5*Math.cos(t), 2.8 + 1.5*Math.sin(t)]", t: [0, 3.1416], tone: "ink" },
          { param: "t => [1.5*Math.cos(t), 2.8 + 0.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "warn", dashed: true },
          { param: "t => [1.5*Math.cos(t), 2.8 + 0.4*Math.sin(t)]", t: [0, 3.1416], tone: "warn", dashed: true },
          { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
          { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
        ],
        segments: [
          { from: [-1.5, 0], to: [-1.5, 2.8], tone: "ink" },
          { from: [1.5, 0], to: [1.5, 2.8], tone: "ink" },
        ],
        labels: [
          { x: 1.6, y: 2.8, text: "not counted", pos: "e", style: "small", tone: "warn" },
          { x: 0, y: 3.7, text: "2πr²", pos: "c", style: "small" },
          { x: 0, y: 1.4, text: "2πrh", pos: "c", style: "small" },
          { x: 0, y: -0.4, text: "πr²", pos: "s", style: "small" },
        ],
        caption: String.raw`Cylinder with a hemispherical top: the circle where they join is inside the solid.`,
        alt: "A cylinder with a hemisphere on top. The circle where the hemisphere meets the cylinder is dashed and marked as not counted. The exposed parts are the dome (2 pi r squared), the curved side (2 pi r h) and the base (pi r squared).",
      },
    },
    {
      title: String.raw`Radian measure`,
      body: String.raw`One **radian** is the angle at the centre of a circle subtended by an arc **equal in length to the radius**.

$$\pi \text{ rad} = 180^\circ \quad \text{(memorise)}$$

- Degrees to radians: multiply by $\dfrac{\pi}{180}$. Radians to degrees: multiply by $\dfrac{180}{\pi}$.
- $1 \text{ rad} \approx 57.3^\circ$. Useful values: $90^\circ = \frac{\pi}{2}$, $60^\circ = \frac{\pi}{3}$, $45^\circ = \frac{\pi}{4}$, $30^\circ = \frac{\pi}{6}$, $360^\circ = 2\pi$.
- An angle with no degree sign, such as $1.2$, is in radians.
- When you use $\sin\theta$ with $\theta$ in radians, set the calculator to **radian** mode.`,
      figure: {
        type: "plot",
        x: [-2.2, 2.6], y: [-2.2, 2.3], equal: true, axes: false,
        circles: [{ c: [0, 0], r: 1.8, tone: "muted" }],
        curves: [{ param: "t => [1.8*Math.cos(t), 1.8*Math.sin(t)]", t: [0, 1], tone: "accent" }],
        segments: [
          { from: [0, 0], to: [1.8, 0], tone: "ink", label: "r", pos: "s", style: "italic" },
          { from: [0, 0], to: [0.9726, 1.5147], tone: "ink", label: "r", pos: "nw", style: "italic" },
        ],
        angles: [{ at: [0, 0], from: [1, 0], to: [0.5403, 0.8415], r: 0.45, label: "1 rad" }],
        labels: [{ x: 1.65, y: 0.95, text: "arc = r", pos: "e", style: "small", tone: "accent" }],
        points: [{ x: 0, y: 0 }],
        caption: String.raw`An arc equal to the radius subtends an angle of 1 radian ($\approx 57.3^\circ$).`,
        alt: "A circle with two radii of length r. The arc between their ends also has length r, and the angle between them is 1 radian.",
      },
    },
    {
      title: String.raw`Arc length, sector area and segment area`,
      body: String.raw`With $\theta$ in **radians** (both Given):
$$\text{arc length } s = r\theta, \qquad \text{sector area} = \tfrac{1}{2}r^2\theta.$$

With the angle $x^\circ$ in **degrees** (memorise): arc $= \dfrac{x}{360} \times 2\pi r$, sector $= \dfrac{x}{360} \times \pi r^2$.

- **Segment** (region between a chord and an arc) $=$ sector $-$ triangle:
$$\text{segment area} = \tfrac{1}{2}r^2\theta - \tfrac{1}{2}r^2\sin\theta.$$
- **Perimeter of a sector** $= 2r + r\theta$ — remember the two radii.
- **Perimeter of a segment** $=$ arc $+$ chord. Find the chord with the cosine rule or by splitting the isosceles triangle in half: chord $= 2r\sin\frac{\theta}{2}$.
- The **major** sector uses the angle $2\pi - \theta$.`,
      figure: [
        {
          type: "plot",
          x: [-1.0, 2.6], y: [-0.5, 2.6], equal: true, axes: false,
          polygons: [{ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2.2 * Math.cos(0.2 + 1.1 * i / 40), 2.2 * Math.sin(0.2 + 1.1 * i / 40)])), fill: true, tone: "accent" }],
          angles: [{ at: [0, 0], from: [Math.cos(0.2), Math.sin(0.2)], to: [Math.cos(1.3), Math.sin(1.3)], r: 0.5, label: "θ" }],
          labels: [
            { x: 1.08, y: 0.22, text: "r", pos: "s", style: "italic" },
            { x: 1.85, y: 1.55, text: "s = rθ", pos: "ne", style: "small", tone: "accent" },
          ],
          points: [{ x: 0, y: 0, label: "O", pos: "sw", style: "italic" }],
          caption: String.raw`Sector: area $\frac{1}{2}r^2\theta$`,
          alt: "A sector of a circle with centre O, radius r and angle theta, with arc length s = r theta.",
        },
        {
          type: "plot",
          x: [-1.0, 2.6], y: [-0.5, 2.6], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [2.2 * Math.cos(0.2), 2.2 * Math.sin(0.2)], [2.2 * Math.cos(1.3), 2.2 * Math.sin(1.3)]], fill: true, tone: "muted" },
            { points: Array.from({ length: 41 }, (_, i) => [2.2 * Math.cos(0.2 + 1.1 * i / 40), 2.2 * Math.sin(0.2 + 1.1 * i / 40)]), fill: true, tone: "warn" },
          ],
          angles: [{ at: [0, 0], from: [Math.cos(0.2), Math.sin(0.2)], to: [Math.cos(1.3), Math.sin(1.3)], r: 0.5, label: "θ" }],
          labels: [
            { x: 1.08, y: 0.22, text: "r", pos: "s", style: "italic" },
            { x: 1.75, y: 1.6, text: "segment", pos: "ne", style: "small", tone: "warn" },
          ],
          points: [{ x: 0, y: 0, label: "O", pos: "sw", style: "italic" }],
          caption: String.raw`Segment $=$ sector $-$ triangle`,
          alt: "The same sector split by a chord into an isosceles triangle at the centre and a segment between the chord and the arc. The segment is highlighted.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "G5-parallelogram-trapezium",
      name: String.raw`Area of parallelograms and trapeziums`,
      tests: String.raw`Using base $\times$ height and $\frac{1}{2}(a + b)h$, including working backwards from a given area to a height or a side, and using the two different heights of a parallelogram.`,
      questions: [
        {
          stem: String.raw`In the trapezium $ABCD$, $AB$ is parallel to $DC$. $AB = 14$ cm, $DC = 7$ cm, $AD = 6.5$ cm and $BC = 7.5$ cm. The area of $ABCD$ is $63\text{ cm}^2$.`,
          figure: {
            type: "plot",
            x: [-1.2, 15.4], y: [-1.4, 7.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [14, 0], [9.5, 6], [2.5, 6]], fill: true, tone: "muted" }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 14, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 9.5, y: 6, text: "C", pos: "ne", style: "italic" },
              { x: 2.5, y: 6, text: "D", pos: "nw", style: "italic" },
              { x: 7, y: 0, text: "14 cm", pos: "s" },
              { x: 6, y: 6, text: "7 cm", pos: "n" },
              { x: 1.25, y: 3, text: "6.5 cm", pos: "w" },
              { x: 11.75, y: 3, text: "7.5 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "Trapezium ABCD with AB = 14 cm at the bottom parallel to DC = 7 cm at the top, AD = 6.5 cm and BC = 7.5 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the perpendicular distance between $AB$ and $DC$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $\angle DAB$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a parallelogram $PQRS$. $PQ = 12$ cm, $PS = 8.75$ cm and the perpendicular distance between $PQ$ and $SR$ is 7 cm.`,
          figure: {
            type: "plot",
            x: [-1.2, 18.6], y: [-1.4, 8.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [12, 0], [17.25, 7], [5.25, 7]], fill: true, tone: "muted" }],
            segments: [{ from: [5.25, 7], to: [5.25, 0], dashed: true, thin: true, tone: "ink" }],
            rightAngles: [{ at: [5.25, 0], a: [1, 0], b: [0, 1], size: 0.5 }],
            labels: [
              { x: 0, y: 0, text: "P", pos: "sw", style: "italic" },
              { x: 12, y: 0, text: "Q", pos: "se", style: "italic" },
              { x: 17.25, y: 7, text: "R", pos: "ne", style: "italic" },
              { x: 5.25, y: 7, text: "S", pos: "nw", style: "italic" },
              { x: 8.6, y: 0, text: "12 cm", pos: "s" },
              { x: 2.6, y: 3.5, text: "8.75 cm", pos: "w" },
              { x: 5.25, y: 3.5, text: "7 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "Parallelogram PQRS with PQ = 12 cm along the bottom, PS = 8.75 cm, and a dashed perpendicular of 7 cm from S to PQ.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the area of $PQRS$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the perpendicular distance between $PS$ and $QR$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-composite-plane-figures",
      name: String.raw`Perimeter and area of composite plane figures`,
      tests: String.raw`Combining rectangles, triangles, circles and semicircles by adding or subtracting, and finding the perimeter of the outer boundary only, often in a context such as a field, window or logo.`,
      questions: [
        {
          stem: String.raw`The diagram shows a field made of a rectangle 20 m by 12 m with a semicircle at each end. The diameter of each semicircle is 12 m.`,
          figure: {
            type: "plot",
            x: [-7.5, 27.5], y: [-8.6, 7.4], equal: true, axes: false,
            polygons: [{ points: Array.from({ length: 41 }, (_, i) => [20 + 6 * Math.cos(-Math.PI / 2 + Math.PI * i / 40), 6 * Math.sin(-Math.PI / 2 + Math.PI * i / 40)]).concat(Array.from({ length: 41 }, (_, i) => [6 * Math.cos(Math.PI / 2 + Math.PI * i / 40), 6 * Math.sin(Math.PI / 2 + Math.PI * i / 40)])), fill: true, tone: "good" }],
            segments: [
              { from: [0, -6], to: [0, 6], dashed: true, thin: true, tone: "muted" },
              { from: [20, -6], to: [20, 6], dashed: true, thin: true, tone: "muted" },
            ],
            labels: [
              { x: 10, y: -6, text: "20 m", pos: "s" },
              { x: 20, y: 0, text: "12 m", pos: "w" },
            ],
            caption: "Not drawn to scale",
            alt: "A field shaped like a running track: a 20 m by 12 m rectangle with a semicircle of diameter 12 m on each short side.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the perimeter of the field.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the area of the field.`, marks: 2 },
            { label: "(c)", text: String.raw`Turf costs $\$4.50$ per square metre. Find the cost of covering the whole field with turf.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a metal plate made from a rectangle $ABCD$, with $AB = 16$ cm and $BC = 10$ cm, from which a semicircle with diameter $AD$ has been removed.`,
          figure: {
            type: "plot",
            x: [-1.6, 17.6], y: [-1.6, 11.6], equal: true, axes: false,
            polygons: [{ points: [[0, 10], [16, 10], [16, 0], [0, 0]].concat(Array.from({ length: 41 }, (_, i) => [5 * Math.cos(-Math.PI / 2 + Math.PI * i / 40), 5 + 5 * Math.sin(-Math.PI / 2 + Math.PI * i / 40)])), fill: true, tone: "muted" }],
            labels: [
              { x: 0, y: 10, text: "A", pos: "nw", style: "italic" },
              { x: 16, y: 10, text: "B", pos: "ne", style: "italic" },
              { x: 16, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 0, y: 0, text: "D", pos: "sw", style: "italic" },
              { x: 8, y: 10, text: "16 cm", pos: "n" },
              { x: 16, y: 5, text: "10 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "Rectangle ABCD, 16 cm by 10 cm, with a semicircle on diameter AD cut out of the left side.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the perimeter of the plate.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the area of the plate.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-prism-cylinder",
      name: String.raw`Volume and surface area of prisms and cylinders, with unit conversion`,
      tests: String.raw`Using cross-section $\times$ length for prisms (often with a trapezium cross-section, such as a swimming pool) and $\pi r^2 h$ for cylinders, converting between cm$^3$, m$^3$ and litres, and rates of filling.`,
      questions: [
        {
          stem: String.raw`A swimming pool is a prism 25 m long and 10 m wide. Its cross-section is a trapezium: the depth of water increases steadily from 1.2 m at the shallow end to 2.0 m at the deep end.`,
          figure: {
            type: "plot",
            x: [-1.6, 14.2], y: [-0.5, 5.4], equal: true, axes: false,
            polygons: [
              { points: [[0, 3], [10, 3], [12.5, 4.5], [2.5, 4.5]], fill: true, tone: "accent" },
              { points: [[0, 3], [10, 3], [10, 0.6], [0, 1.56]], fill: true, tone: "muted" },
            ],
            segments: [
              { from: [10, 3], to: [12.5, 4.5], tone: "ink" },
              { from: [12.5, 4.5], to: [12.5, 2.1], tone: "ink" },
              { from: [10, 0.6], to: [12.5, 2.1], tone: "ink" },
              { from: [0, 1.56], to: [2.5, 3.06], tone: "ink", dashed: true, thin: true },
              { from: [2.5, 3.06], to: [12.5, 2.1], tone: "ink", dashed: true, thin: true },
              { from: [2.5, 4.5], to: [2.5, 3.06], tone: "ink", dashed: true, thin: true },
            ],
            labels: [
              { x: 5, y: 1.08, text: "25 m", pos: "s" },
              { x: 11.25, y: 1.35, text: "10 m", pos: "se" },
              { x: 0, y: 2.28, text: "1.2 m", pos: "w" },
              { x: 10, y: 1.5, text: "2.0 m", pos: "w" },
            ],
            caption: "Not drawn to scale",
            alt: "A swimming pool drawn as a prism 25 m long and 10 m wide. The side face is a trapezium with depth 1.2 m at the shallow end and 2.0 m at the deep end.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that the volume of the pool is $400\text{ m}^3$.`, marks: 2 },
            { label: "(b)", text: String.raw`The pool is filled with water at a rate of 500 litres per minute. Find the time taken to fill the empty pool. Give your answer in hours and minutes.`, marks: 2 },
            { label: "(c)", text: String.raw`The two sides, the two ends and the bottom of the pool are to be tiled. Find the area to be tiled.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A closed cylindrical can has radius 7 cm and height 20 cm.`,
          parts: [
            { label: "(a)", text: String.raw`Find the capacity of the can in litres.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the total surface area of the can, giving your answer in $\text{m}^2$.`, marks: 3 },
            { label: "(c)", text: String.raw`2 litres of water are poured into the empty can, standing upright. Find the depth of the water.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-pyramid-cone",
      name: String.raw`Pyramids and cones, including a cone made from a sector`,
      tests: String.raw`Using $\frac{1}{3} \times$ base $\times$ height and the cone formulae, finding slant heights with Pythagoras, and folding a sector into a cone (arc length $=$ base circumference, radius of sector $=$ slant height).`,
      questions: [
        {
          stem: String.raw`The diagram shows a right pyramid $VABCD$ with a square base $ABCD$ of side 10 cm. The vertex $V$ is vertically above the centre of the base, and the height of the pyramid is 12 cm.`,
          figure: {
            type: "plot",
            x: [-0.8, 9.2], y: [-0.8, 5.8], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [6, 0], [8, 1.6], [2, 1.6]], fill: true, tone: "muted" }],
            segments: [
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [8, 1.6], tone: "ink" },
              { from: [8, 1.6], to: [2, 1.6], tone: "ink", dashed: true, thin: true },
              { from: [2, 1.6], to: [0, 0], tone: "ink", dashed: true, thin: true },
              { from: [4, 5.2], to: [0, 0], tone: "ink" },
              { from: [4, 5.2], to: [6, 0], tone: "ink" },
              { from: [4, 5.2], to: [8, 1.6], tone: "ink" },
              { from: [4, 5.2], to: [2, 1.6], tone: "ink", dashed: true, thin: true },
              { from: [4, 5.2], to: [4, 0.8], tone: "muted", dashed: true, thin: true },
            ],
            points: [{ x: 4, y: 0.8 }],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 8, y: 1.6, text: "C", pos: "e", style: "italic" },
              { x: 2, y: 1.6, text: "D", pos: "w", style: "italic" },
              { x: 4, y: 5.2, text: "V", pos: "n", style: "italic" },
              { x: 3, y: 0, text: "10 cm", pos: "s" },
              { x: 4, y: 2.6, text: "12 cm", pos: "w" },
            ],
            caption: "Not drawn to scale",
            alt: "A right pyramid with square base ABCD of side 10 cm and vertex V vertically above the centre of the base, at a height of 12 cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the volume of the pyramid.`, marks: 1 },
            { label: "(b)", text: String.raw`Show that the height of each triangular face, measured from $V$ to the midpoint of a side of the base, is 13 cm.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the total surface area of the pyramid.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A sector of a circle of radius 15 cm has an angle of $216^\circ$. The two straight edges of the sector are joined, without overlap, to make an open cone.`,
          figure: [
            {
              type: "plot",
              x: [-17, 17], y: [-7.5, 17.5], equal: true, axes: false,
              polygons: [{ points: [[0, 0]].concat(Array.from({ length: 61 }, (_, i) => { const t = (-18 + 216 * i / 60) * Math.PI / 180; return [15 * Math.cos(t), 15 * Math.sin(t)]; })), fill: true, tone: "accent" }],
              angles: [{ at: [0, 0], from: [Math.cos(-0.3142), Math.sin(-0.3142)], to: [Math.cos(3.4558), Math.sin(3.4558)], r: 3.2, label: "216°" }],
              labels: [{ x: 7.13, y: -2.32, text: "15 cm", pos: "s" }],
              points: [{ x: 0, y: 0 }],
              caption: "The sector (not drawn to scale)",
              alt: "A sector of radius 15 cm with a reflex angle of 216 degrees at the centre.",
            },
            {
              type: "plot",
              x: [-11, 11], y: [-4, 15], equal: true, axes: false,
              curves: [
                { param: "t => [9*Math.cos(t), 2.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
                { param: "t => [9*Math.cos(t), 2.4*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
              ],
              segments: [
                { from: [-9, 0], to: [0, 12], tone: "ink" },
                { from: [9, 0], to: [0, 12], tone: "ink" },
              ],
              caption: "The cone",
              alt: "The open cone made from the sector, drawn without measurements.",
            },
          ],
          parts: [
            { label: "(a)", text: String.raw`Show that the radius of the base of the cone is 9 cm.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the height of the cone.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the volume of the cone, leaving your answer in terms of $\pi$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-sphere-hemisphere",
      name: String.raw`Spheres and hemispheres: recasting and displacement`,
      tests: String.raw`Using the given sphere formulae, often by equating volumes when a solid is melted and recast, or when a ball is dropped into a container of water and the level rises.`,
      questions: [
        {
          stem: String.raw`A solid metal sphere of radius 6 cm is melted down and recast into small solid cones, each of base radius 2 cm and height 3 cm. No metal is lost.`,
          parts: [
            { label: "(a)", text: String.raw`Find the number of cones made.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the surface area of the sphere.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the total surface area of one cone.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A cylindrical container of radius 10 cm stands upright and contains water. A solid ball of radius 6 cm is placed in the container and sinks, so that it is completely under the water. No water overflows.`,
          parts: [
            { label: "(a)", text: String.raw`Find the volume of the ball, leaving your answer in terms of $\pi$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the rise in the water level.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-composite-solids",
      name: String.raw`Composite solids`,
      tests: String.raw`Finding the volume, total exposed surface area and mass of a solid made of cylinders, cones, hemispheres or prisms, remembering not to count the joining faces.`,
      questions: [
        {
          stem: String.raw`The diagram shows a solid made of a cylinder of radius 4 cm and height 10 cm, a hemisphere of radius 4 cm on top, and a cone of radius 4 cm and height 3 cm underneath.`,
          figure: {
            type: "plot",
            x: [-8.5, 8.5], y: [-4.2, 15.2], equal: true, axes: false,
            curves: [
              { param: "t => [4*Math.cos(t), 10 + 4*Math.sin(t)]", t: [0, 3.1416], tone: "ink" },
              { param: "t => [4*Math.cos(t), 10 + 1.1*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
              { param: "t => [4*Math.cos(t), 10 + 1.1*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
              { param: "t => [4*Math.cos(t), 1.1*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
              { param: "t => [4*Math.cos(t), 1.1*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
            ],
            segments: [
              { from: [-4, 0], to: [-4, 10], tone: "ink" },
              { from: [4, 0], to: [4, 10], tone: "ink" },
              { from: [-4, 0], to: [0, -3], tone: "ink" },
              { from: [4, 0], to: [0, -3], tone: "ink" },
              { from: [0, 10], to: [4, 10], tone: "muted", dashed: true, thin: true },
              { from: [5.2, 0], to: [5.2, 10], tone: "muted", thin: true, arrow: true, arrowStart: true, label: "10 cm", pos: "e", style: "plain" },
              { from: [5.2, -3], to: [5.2, 0], tone: "muted", thin: true, arrow: true, arrowStart: true, label: "3 cm", pos: "e", style: "plain" },
            ],
            labels: [{ x: 2, y: 10.45, text: "4 cm", pos: "c" }],
            caption: "Not drawn to scale",
            alt: "A solid made of a cylinder of radius 4 cm and height 10 cm, with a hemisphere of radius 4 cm on top and a cone of height 3 cm below.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the volume of the solid.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the total surface area of the solid.`, marks: 3 },
            { label: "(c)", text: String.raw`The solid is made of metal with density $7.8\text{ g/cm}^3$. Find the mass of the solid in kilograms.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G5-radian-measure",
      name: String.raw`Radian measure, arc length and sector area`,
      tests: String.raw`Converting between degrees and radians, and using $s = r\theta$ and $A = \frac{1}{2}r^2\theta$ to find an arc, an area, an angle or the perimeter of a sector.`,
      questions: [
        {
          stem: String.raw`Answer the following.`,
          parts: [
            { label: "(a)", text: String.raw`Express $75^\circ$ in radians, giving your answer correct to 3 significant figures.`, marks: 1 },
            { label: "(b)", text: String.raw`Express 2.4 radians in degrees.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a sector $OAB$ of a circle with centre $O$ and radius 8 cm. The angle $AOB$ is $\theta$ radians and the area of the sector is $40\text{ cm}^2$.`,
          figure: {
            type: "plot",
            x: [-1.4, 9.4], y: [-1.4, 8.8], equal: true, axes: false,
            polygons: [{ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [8 * Math.cos(1.25 * i / 40), 8 * Math.sin(1.25 * i / 40)])), fill: true, tone: "muted" }],
            angles: [{ at: [0, 0], from: [1, 0], to: [Math.cos(1.25), Math.sin(1.25)], r: 1.4, label: "θ" }],
            labels: [
              { x: 0, y: 0, text: "O", pos: "sw", style: "italic" },
              { x: 8, y: 0, text: "A", pos: "se", style: "italic" },
              { x: 8 * Math.cos(1.25), y: 8 * Math.sin(1.25), text: "B", pos: "n", style: "italic" },
              { x: 4, y: 0, text: "8 cm", pos: "s" },
            ],
            caption: "Not drawn to scale",
            alt: "Sector OAB with centre O, radius 8 cm and angle theta radians at O.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find $\theta$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the perimeter of the sector.`, marks: 2 },
            { label: "(c)", text: String.raw`Express $\theta$ in degrees.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G5-arc-sector-segment",
      name: String.raw`Segments and regions bounded by arcs`,
      tests: String.raw`Finding the area and perimeter of a segment (sector minus triangle, arc plus chord), and of shapes made from sectors, such as a sector of a ring, in radians or degrees.`,
      questions: [
        {
          stem: String.raw`In the diagram, $O$ is the centre of a circle of radius 10 cm. $A$ and $B$ lie on the circle and $\angle AOB = 1.8$ radians. The shaded region is the minor segment cut off by the chord $AB$.`,
          figure: {
            type: "plot",
            x: [-12, 12], y: [-11.8, 12.6], equal: true, axes: false,
            circles: [{ c: [0, 0], r: 10, tone: "ink" }],
            polygons: [{ points: Array.from({ length: 41 }, (_, i) => { const t = Math.PI / 2 - 0.9 + 1.8 * i / 40; return [10 * Math.cos(t), 10 * Math.sin(t)]; }), fill: true, tone: "accent" }],
            segments: [
              { from: [0, 0], to: [10 * Math.cos(Math.PI / 2 + 0.9), 10 * Math.sin(Math.PI / 2 + 0.9)], tone: "ink" },
              { from: [0, 0], to: [10 * Math.cos(Math.PI / 2 - 0.9), 10 * Math.sin(Math.PI / 2 - 0.9)], tone: "ink" },
            ],
            angles: [{ at: [0, 0], from: [Math.cos(Math.PI / 2 - 0.9), Math.sin(Math.PI / 2 - 0.9)], to: [Math.cos(Math.PI / 2 + 0.9), Math.sin(Math.PI / 2 + 0.9)], r: 1.8, label: "1.8 rad" }],
            points: [{ x: 0, y: 0, label: "O", pos: "s", style: "italic" }],
            labels: [
              { x: 10 * Math.cos(Math.PI / 2 + 0.9), y: 10 * Math.sin(Math.PI / 2 + 0.9), text: "A", pos: "w", style: "italic" },
              { x: 10 * Math.cos(Math.PI / 2 - 0.9), y: 10 * Math.sin(Math.PI / 2 - 0.9), text: "B", pos: "e", style: "italic" },
              { x: 3.9, y: 3.1, text: "10 cm", pos: "e" },
            ],
            caption: "Not drawn to scale",
            alt: "A circle with centre O and radius 10 cm. Radii OA and OB make an angle of 1.8 radians. The minor segment between chord AB and the minor arc is shaded.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the length of the minor arc $AB$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the length of the chord $AB$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of the shaded segment.`, marks: 3 },
            { label: "(d)", text: String.raw`Find the perimeter of the shaded segment.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a logo $ABCD$. $AD$ and $BC$ are arcs of circles with centre $O$. $OAB$ and $ODC$ are straight lines, $OA = 6$ cm, $AB = 4$ cm and $\angle AOD = 120^\circ$.`,
          figure: {
            type: "plot",
            x: [-10.5, 10.5], y: [-1.6, 11.2], equal: true, axes: false,
            polygons: [{ points: Array.from({ length: 41 }, (_, i) => { const t = (30 + 120 * i / 40) * Math.PI / 180; return [10 * Math.cos(t), 10 * Math.sin(t)]; }).concat(Array.from({ length: 41 }, (_, i) => { const t = (150 - 120 * i / 40) * Math.PI / 180; return [6 * Math.cos(t), 6 * Math.sin(t)]; })), fill: true, tone: "accent" }],
            segments: [
              { from: [0, 0], to: [6 * Math.cos(Math.PI / 6), 3], tone: "ink", dashed: true, thin: true },
              { from: [0, 0], to: [-6 * Math.cos(Math.PI / 6), 3], tone: "ink", dashed: true, thin: true },
            ],
            angles: [{ at: [0, 0], from: [Math.cos(Math.PI / 6), 0.5], to: [-Math.cos(Math.PI / 6), 0.5], r: 1.4, label: "120°" }],
            points: [{ x: 0, y: 0, label: "O", pos: "s", style: "italic" }],
            labels: [
              { x: 6 * Math.cos(Math.PI / 6), y: 3, text: "A", pos: "se", style: "italic" },
              { x: 10 * Math.cos(Math.PI / 6), y: 5, text: "B", pos: "e", style: "italic" },
              { x: -10 * Math.cos(Math.PI / 6), y: 5, text: "C", pos: "w", style: "italic" },
              { x: -6 * Math.cos(Math.PI / 6), y: 3, text: "D", pos: "sw", style: "italic" },
              { x: 3 * Math.cos(Math.PI / 6), y: 1.5, text: "6 cm", pos: "se" },
              { x: 8 * Math.cos(Math.PI / 6), y: 4, text: "4 cm", pos: "se" },
            ],
            caption: "Not drawn to scale",
            alt: "A logo shaped like part of a ring: the region between arc AD of radius 6 cm and arc BC of radius 10 cm, both centred at O, with angle AOD = 120 degrees. A lies on OB and D lies on OC.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the area of the logo.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the perimeter of the logo.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G5-real-world-tank",
      name: String.raw`Real-world task: painting and filling a tank`,
      tests: String.raw`A Paper 2 style task: finding a surface area to paint and a capacity, then using coverage rates and tin prices to choose the cheapest way to buy enough paint, with a clear justification.`,
      questions: [
        {
          stem: String.raw`A water tank is made of a cylinder of diameter 3 m and height 4 m, with a hemispherical roof of the same diameter. The tank stands on the ground on its circular base.`,
          figure: {
            type: "plot",
            x: [-4.4, 4.4], y: [-1.1, 5.8], equal: true, axes: false,
            curves: [
              { param: "t => [1.5*Math.cos(t), 4 + 1.5*Math.sin(t)]", t: [0, 3.1416], tone: "ink" },
              { param: "t => [1.5*Math.cos(t), 4 + 0.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
              { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
              { param: "t => [1.5*Math.cos(t), 0.4*Math.sin(t)]", t: [0, 3.1416], tone: "ink", dashed: true },
            ],
            segments: [
              { from: [-1.5, 0], to: [-1.5, 4], tone: "ink" },
              { from: [1.5, 0], to: [1.5, 4], tone: "ink" },
              { from: [-2.6, -0.4], to: [2.6, -0.4], tone: "muted" },
              { from: [-1.5, -0.62], to: [1.5, -0.62], tone: "muted", thin: true, arrow: true, arrowStart: true },
              { from: [2.0, 0], to: [2.0, 4], tone: "muted", thin: true, arrow: true, arrowStart: true, label: "4 m", pos: "e", style: "plain" },
            ],
            labels: [{ x: 0, y: -0.62, text: "3 m", pos: "s" }],
            caption: "Not drawn to scale",
            alt: "A water tank: a cylinder 4 m high and 3 m in diameter with a hemispherical roof, standing on the ground.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the capacity of the tank, in litres.`, marks: 3 },
            { label: "(b)", text: String.raw`The outside of the tank, excluding the base, is to be given **two** coats of paint. One litre of paint covers $10\text{ m}^2$ for one coat. Show that about 10.4 litres of paint are needed.`, marks: 3 },
            { label: "(c)", text: String.raw`Paint is sold in 4-litre tins at $\$45$ each and in 1-litre tins at $\$14$ each. Find the least cost of buying enough paint. Show your working clearly.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
