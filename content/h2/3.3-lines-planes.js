H2.addTopic({
  id: "3.3",
  title: "Lines and Planes",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Equations of lines and planes, and the angles, distances, intersections and reflections between them.`,
  syllabus: {
    include: [
      String.raw`vector and cartesian equations of lines and planes`,
      String.raw`foot of the perpendicular and distance from a point to a line or to a plane`,
      String.raw`angle between two lines, between a line and a plane, or between two planes`,
      String.raw`relationships between (i) two lines (coplanar or skew), (ii) a line and a plane, (iii) two planes`,
    ],
    exclude: [
      String.raw`shortest distance between two skew lines`,
      String.raw`common perpendicular to two skew lines`,
    ],
  },
  concepts: [
    {
      title: String.raw`Equations of a line`,
      body: String.raw`Line through the point with position vector $\mathbf{a}$, parallel to $\mathbf{d}$:
$$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d},\ \lambda \in \mathbb{R} \qquad\Longleftrightarrow\qquad \frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3}.$$

- Always write "$\mathbf{r} = $" and state $\lambda \in \mathbb{R}$; a vector equation without $\mathbf{r}$ loses marks.
- If a component of $\mathbf{d}$ is zero, the cartesian form has that coordinate **constant**, e.g. $\frac{x - 2}{3} = \frac{y + 3}{5},\ z = 4$.
- Watch signs when converting: $\frac{5 - y}{2} = \frac{y - 5}{-2}$, and $\frac{2x - 1}{4} = \frac{x - \frac{1}{2}}{2}$ (make the coefficient of $x$ equal to 1 first).
- To check a point lies on a line, find one $\lambda$ that satisfies **all three** components.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.7, 2.37], to: [9.53, 5.31], tone: "ink", thin: true, label: "l", pos: "n", style: "italic", labelAt: [9.24, 5.21] },
          { from: [1, 0.8], to: [2.6, 3], arrow: true, label: "a", pos: "w" },
          { from: [1, 0.8], to: [6.96, 4.45], arrow: true, tone: "good", label: "r", pos: "se" },
          { from: [2.6, 3], to: [3.93, 3.44], arrow: true, tone: "warn", label: "d", pos: "n", labelAt: [3.26, 3.22] },
        ],
        points: [
          { x: 1, y: 0.8, label: "O", pos: "sw" },
        ],
        labels: [
          { x: 2.6, y: 3, text: "A", pos: "nw" },
          { x: 6.96, y: 4.45, text: "R", pos: "n" },
          { x: 5.45, y: 3.95, text: "λd", pos: "nw", style: "bold" },
        ],
        caption: String.raw`$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$: reach $A$, then move any multiple of $\mathbf{d}$ along $l$`,
        alt: "Line l through the point A with direction vector d. From the origin O, the position vector a reaches A, and a general point R on the line has position vector r = a + lambda d.",
      },
    },
    {
      title: String.raw`Two lines: parallel, intersecting or skew`,
      body: String.raw`| Directions parallel? | Common point? | Relationship |
| --- | --- | --- |
| Yes | Yes | Same line |
| Yes | No | Parallel (distinct) |
| No | Yes | Intersecting |
| No | No | Skew |

To test for intersection, equate the two vector equations, solve **two** components for $\lambda$ and $\mu$, then **check the third**. Skew lines need both facts stated: not parallel **and** no common point. Parallel or intersecting lines are coplanar.

Acute angle between lines: $\cos\theta = \dfrac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$. (Not in MF27.)`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.6, 1.2], to: [9.4, 4.4], tone: "accent", label: "l₁", pos: "se", style: "italic", labelAt: [8.96, 4.24] },
            { from: [1.4, 4.9], to: [8.8, 0.7], tone: "good", label: "l₂", pos: "ne", style: "italic", labelAt: [8.58, 0.83] },
          ],
          angles: [
            { at: [5.06, 2.82], from: [8.8, 0.7], to: [9.4, 4.4], r: 1.1, label: "θ" },
          ],
          points: [
            { x: 5.06, y: 2.82, label: "", pos: "c" },
          ],
          caption: "Intersecting: one common point",
          alt: "Two lines crossing at a single point, with the acute angle theta between them.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.8, 1], to: [5.07, 2.42], arrow: true, label: "l₁", pos: "s", style: "italic", labelAt: [8.77, 3.66] },
            { from: [5.07, 2.42], to: [9.34, 3.85], tone: "accent" },
            { from: [0.14, 2.99], to: [4.22, 4.35], arrow: true, tone: "good", label: "l₂", pos: "s", style: "italic", labelAt: [7.73, 5.52] },
            { from: [4.22, 4.35], to: [8.29, 5.71], tone: "good" },
          ],
          caption: String.raw`Parallel: $\mathbf{d}_1 = k\mathbf{d}_2$, no common point`,
          alt: "Two parallel lines with the same direction and no common point.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [1.6, 0.9], to: [6.8, 0.9], tone: "muted", thin: true },
            { from: [6.8, 0.9], to: [8.42, 2.7], tone: "muted", thin: true },
            { from: [1.6, 3.3], to: [6.8, 3.3], tone: "muted", thin: true },
            { from: [6.8, 3.3], to: [8.42, 5.1], tone: "muted", thin: true },
            { from: [3.22, 5.1], to: [8.42, 5.1], tone: "muted", thin: true },
            { from: [1.6, 3.3], to: [3.22, 5.1], tone: "muted", thin: true },
            { from: [1.6, 0.9], to: [1.6, 3.3], tone: "muted", thin: true },
            { from: [6.8, 0.9], to: [6.8, 3.3], tone: "muted", thin: true },
            { from: [8.42, 2.7], to: [8.42, 5.1], tone: "muted", thin: true },
            { from: [1.6, 0.9], to: [3.22, 2.7], tone: "muted", thin: true, dashed: true },
            { from: [3.22, 2.7], to: [8.42, 2.7], tone: "muted", thin: true, dashed: true },
            { from: [3.22, 2.7], to: [3.22, 5.1], tone: "muted", thin: true, dashed: true },
            { from: [0.2, 0.9], to: [8.4, 0.9], tone: "accent", label: "l₁", pos: "s", style: "italic", labelAt: [8.1, 0.9] },
            { from: [0.88, 2.5], to: [3.67, 5.6], tone: "good", label: "l₂", pos: "w", style: "italic", labelAt: [3.58, 5.5] },
          ],
          caption: "Skew: not parallel **and** no common point (like these two edges of a box)",
          alt: "A cuboid drawn in 3D. Line l1 runs along a bottom front edge and line l2 runs along a top side edge going back; they are not parallel and never meet.",
        },
      ],
    },
    {
      title: String.raw`Point and line: foot, distance, reflection`,
      body: String.raw`For a point $P$ and the line $l: \mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$:

1. Let the foot be $N$ with $\overrightarrow{ON} = \mathbf{a} + \lambda\mathbf{d}$.
2. Solve $\overrightarrow{PN} \cdot \mathbf{d} = 0$ for $\lambda$.
3. Distance $= |\overrightarrow{PN}|$; reflection of $P$ in $l$: $\overrightarrow{OP'} = 2\overrightarrow{ON} - \overrightarrow{OP}$ (midpoint theorem).

Shortcut for the distance only: $|\overrightarrow{AP} \times \hat{\mathbf{d}}|$, where $A$ is any point on $l$. The length of projection of $\overrightarrow{AP}$ onto $l$ is $|\overrightarrow{AP} \cdot \hat{\mathbf{d}}|$.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.4, 1.2], to: [9.6, 1.2], tone: "ink", label: "l", pos: "n", style: "italic", labelAt: [9.4, 1.2] },
            { from: [1.4, 1.2], to: [3.1, 1.2], arrow: true, label: "d", pos: "s", labelAt: [2.25, 1.2] },
            { from: [1.4, 1.2], to: [6.2, 4.6], tone: "muted" },
            { from: [6.2, 4.6], to: [6.2, 1.2], dashed: true, tone: "ink" },
            { from: [1.4, 0.6], to: [6.2, 0.6], tone: "good", thin: true, arrow: true, arrowStart: true, label: "|AP · d̂|", pos: "s", style: "plain" },
            { from: [6.65, 4.6], to: [6.65, 1.2], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "|AP × d̂|", pos: "e", style: "plain" },
          ],
          rightAngles: [
            { at: [6.2, 1.2], a: [0, 1], b: [-1, 0], size: 0.32 },
          ],
          angles: [
            { at: [1.4, 1.2], from: [6.2, 1.2], to: [6.2, 4.6], r: 1.1, label: "θ" },
          ],
          points: [
            { x: 1.4, y: 1.2, label: "A", pos: "nw" },
            { x: 6.2, y: 4.6, label: "P", pos: "n" },
            { x: 6.2, y: 1.2, label: "N", pos: "se" },
          ],
          caption: String.raw`Distance $PN = |\overrightarrow{AP} \times \hat{\mathbf{d}}|$; projection $AN = |\overrightarrow{AP} \cdot \hat{\mathbf{d}}|$`,
          alt: "Point P above line l, with A a point on l and d its direction. The foot of the perpendicular from P is N. AN is the projection |AP dot d-hat| and PN is the perpendicular distance |AP cross d-hat|.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.4, 2.8], to: [9.6, 2.8], tone: "ink", label: "l", pos: "n", style: "italic", labelAt: [9.4, 2.8] },
            { from: [5, 5.2], to: [5, 2.8], tone: "accent" },
            { from: [5, 2.8], to: [5, 0.4], tone: "accent", dashed: true },
            { from: [5.2, 4], to: [4.8, 4], tone: "ink", thin: true },
            { from: [5.2, 1.6], to: [4.8, 1.6], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [5, 2.8], a: [0, 1], b: [1, 0], size: 0.32 },
          ],
          points: [
            { x: 5, y: 5.2, label: "P", pos: "n" },
            { x: 5, y: 2.8, label: "N", pos: "se" },
            { x: 5, y: 0.4, label: "P′", pos: "s" },
          ],
          caption: String.raw`Reflection: $N$ is the midpoint of $PP'$, so $\overrightarrow{OP'} = 2\overrightarrow{ON} - \overrightarrow{OP}$`,
          alt: "Point P, its foot of perpendicular N on line l, and its reflection P prime on the other side, with PN equal to NP prime.",
        },
      ],
    },
    {
      title: String.raw`Equations of a plane`,
      body: String.raw`| Form | Equation |
| --- | --- |
| Parametric (vector) | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$, $\lambda, \mu \in \mathbb{R}$ |
| Scalar-product | $\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}$ |
| Cartesian | $n_1x + n_2y + n_3z = D$ |

- $\mathbf{b}$ and $\mathbf{c}$ are non-parallel directions **in** the plane; the normal is $\mathbf{n} = \mathbf{b} \times \mathbf{c}$.
- Plane through $A$, $B$, $C$: $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$, then $D = \mathbf{a} \cdot \mathbf{n}$. Check with the other two points.
- Plane containing a line $l$ and a point $P$ not on $l$: use $\mathbf{d}$ and $\overrightarrow{AP}$ as the two directions.
- Perpendicular distance from $O$ to $\mathbf{r} \cdot \hat{\mathbf{n}} = d$ is $|d|$ — normalise first.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 1.2], [7.7, 1.2], [9.54, 3.5], [2.14, 3.5]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [6.26, 1.84], to: [8.05, 3.22], dashed: true, tone: "muted", thin: true },
            { from: [3.89, 3.08], to: [8.05, 3.22], dashed: true, tone: "muted", thin: true },
            { from: [2.1, 1.7], to: [6.26, 1.84], dashed: true, tone: "muted", thin: true },
            { from: [2.1, 1.7], to: [3.89, 3.08], dashed: true, tone: "muted", thin: true },
            { from: [2.1, 1.7], to: [5.18, 1.8], arrow: true, label: "b", pos: "s" },
            { from: [2.1, 1.7], to: [3.66, 2.9], arrow: true, label: "c", pos: "w" },
          ],
          points: [
            { x: 2.1, y: 1.7, label: "A", pos: "sw" },
            { x: 8.05, y: 3.22, label: "R", pos: "e" },
          ],
          labels: [
            { x: 7.9, y: 4.06, text: "r = a + λb + μc", pos: "c", style: "bold" },
          ],
          caption: String.raw`Parametric: from $A$, move along two non-parallel directions $\mathbf{b}$, $\mathbf{c}$ in the plane`,
          alt: "A plane containing the point A and two non-parallel direction vectors b and c; a general point R is reached from A by lambda b plus mu c.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 1.2], [7.7, 1.2], [9.54, 3.5], [2.14, 3.5]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [3.06, 1.9], to: [7.42, 2.6], arrow: true, tone: "good", label: "r − a", pos: "se", labelAt: [5.46, 2.28] },
            { from: [3.06, 1.9], to: [3.06, 4.5], arrow: true, label: "n", pos: "e", labelAt: [3.06, 4.11] },
          ],
          rightAngles: [
            { at: [3.06, 1.9], a: [0, 1], b: [4.36, 0.7], size: 0.42 },
          ],
          points: [
            { x: 3.06, y: 1.9, label: "A", pos: "w" },
            { x: 7.42, y: 2.6, label: "R", pos: "e" },
          ],
          caption: String.raw`$(\mathbf{r} - \mathbf{a}) \cdot \mathbf{n} = 0$, i.e. $\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}$`,
          alt: "A plane with normal vector n at the point A. For any point R in the plane, the vector r minus a lies in the plane and is perpendicular to n.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 2.4], [7.7, 2.4], [9.22, 4.3], [1.82, 4.3]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [4.26, 0.85], to: [4.26, 2.85], dashed: true, tone: "warn", label: "|D| / |n|", pos: "e", style: "plain" },
            { from: [4.26, 2.85], to: [4.26, 4.35], arrow: true, label: "n", pos: "e", labelAt: [4.26, 4.05] },
          ],
          rightAngles: [
            { at: [4.26, 2.85], a: [0, 1], b: [1, 0], size: 0.36 },
          ],
          points: [
            { x: 4.26, y: 0.85, label: "O", pos: "s" },
            { x: 4.26, y: 2.85, label: "F", pos: "w" },
          ],
          labels: [
            { x: 8.18, y: 4, text: "r · n = D", pos: "c", style: "bold" },
          ],
          caption: String.raw`Distance from $O$ to $\mathbf{r} \cdot \mathbf{n} = D$ is $\dfrac{|D|}{|\mathbf{n}|}$ (just $|d|$ if the equation is $\mathbf{r} \cdot \hat{\mathbf{n}} = d$)`,
          alt: "The origin O below a plane r dot n = D, with F the foot of the perpendicular from O. The distance OF is |D| divided by |n|.",
        },
      ],
    },
    {
      title: String.raw`Line and plane`,
      body: String.raw`For $l: \mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ and $\pi: \mathbf{r} \cdot \mathbf{n} = D$:

- $\mathbf{d} \cdot \mathbf{n} \ne 0$: they meet at exactly one point — substitute the line into the plane and solve for $\lambda$.
- $\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a} \cdot \mathbf{n} = D$: the line **lies in** the plane.
- $\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a} \cdot \mathbf{n} \ne D$: the line is **parallel** to the plane, with no common point.

Acute angle between line and plane: $\sin\theta = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$ — **sine**, because $\mathbf{n}$ is perpendicular to the plane. Using cosine gives the complement, a very common error.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.9], [7.7, 0.9], [9.54, 3.2], [2.14, 3.2]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [1.42, 0.9], to: [2.74, 1.7], dashed: true, tone: "accent" },
            { from: [2.74, 1.7], to: [6.86, 2.1], dashed: true, tone: "muted" },
            { from: [6.86, 4.2], to: [6.86, 2.1], dashed: true, tone: "muted" },
            { from: [2.74, 1.7], to: [8.01, 4.9], tone: "accent", label: "l", pos: "nw", style: "italic", labelAt: [7.59, 4.64] },
            { from: [2.74, 1.7], to: [2.74, 4.8], arrow: true, tone: "ink", label: "n", pos: "w", labelAt: [2.74, 4.49] },
          ],
          rightAngles: [
            { at: [6.86, 2.1], a: [0, 1], b: [-4.12, -0.4], size: 0.3 },
          ],
          angles: [
            { at: [2.74, 1.7], from: [6.86, 2.1], to: [6.86, 4.2], r: 1.3, label: "θ" },
            { at: [2.74, 1.7], from: [6.86, 4.2], to: [2.74, 4.8], r: 1.9 },
          ],
          points: [
            { x: 2.74, y: 1.7, label: "B", pos: "s" },
          ],
          labels: [
            { x: 3.82, y: 3.73, text: "90° − θ", pos: "c", style: "small" },
          ],
          caption: String.raw`Angle with the plane: $\sin\theta = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$, as $\mathbf{d}$ makes $90^\circ - \theta$ with $\mathbf{n}$`,
          alt: "A line l meeting a plane at B, drawn dashed below the plane. The angle theta is between l and its projection onto the plane; the normal n at B makes angle 90 degrees minus theta with l.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.9], [7.7, 0.9], [9.54, 3.2], [2.14, 3.2]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [1.7, 3.55], to: [7.86, 4.25], tone: "accent", label: "l", pos: "n", style: "italic", labelAt: [7.55, 4.22] },
            { from: [1.7, 3.55], to: [3.24, 3.72], arrow: true, tone: "accent", label: "d", pos: "n", labelAt: [2.47, 3.64] },
            { from: [6.32, 4.07], to: [6.32, 2.17], dashed: true, tone: "ink" },
            { from: [2.66, 1.35], to: [2.66, 2.55], arrow: true, tone: "ink", label: "n", pos: "e", labelAt: [2.66, 2.35] },
          ],
          rightAngles: [
            { at: [6.32, 2.17], a: [0, 1], b: [-1, 0], size: 0.3 },
          ],
          caption: String.raw`$\mathbf{d} \cdot \mathbf{n} = 0$ but $\mathbf{a} \cdot \mathbf{n} \ne D$: parallel, no common point`,
          alt: "A line l above a plane and parallel to it; its direction d is perpendicular to the normal n, and the line never meets the plane.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.9], [7.7, 0.9], [9.54, 3.2], [2.14, 3.2]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [1.74, 1.7], to: [8.34, 2.45], tone: "accent", label: "l", pos: "s", style: "italic", labelAt: [8.01, 2.41] },
            { from: [1.74, 1.7], to: [3.28, 1.88], arrow: true, tone: "accent", label: "d", pos: "s", labelAt: [2.51, 1.79] },
            { from: [5.48, 2.13], to: [5.48, 4.53], arrow: true, tone: "ink", label: "n", pos: "e", labelAt: [5.48, 4.22] },
          ],
          rightAngles: [
            { at: [5.48, 2.13], a: [0, 1], b: [1.1, 0.13], size: 0.36 },
          ],
          caption: String.raw`$\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a} \cdot \mathbf{n} = D$: the line lies in the plane`,
          alt: "A line l drawn in a plane, with the normal n perpendicular to the line's direction d.",
        },
      ],
    },
    {
      title: String.raw`Point and plane: foot, distance, reflection`,
      body: String.raw`For a point $P$ and the plane $\pi: \mathbf{r} \cdot \mathbf{n} = D$:

- Foot $N$: the line through $P$ parallel to $\mathbf{n}$, $\mathbf{r} = \mathbf{p} + t\mathbf{n}$, meets $\pi$ at $N$.
- Distance $= |\overrightarrow{PN}|$, or directly $\dfrac{|\mathbf{p} \cdot \mathbf{n} - D|}{|\mathbf{n}|} = |\overrightarrow{AP} \cdot \hat{\mathbf{n}}|$ for any $A$ on $\pi$.
- Reflection of $P$ in $\pi$: $\overrightarrow{OP'} = 2\overrightarrow{ON} - \overrightarrow{OP}$.
- **Reflection of a line** $l$ in $\pi$ (when $l$ meets $\pi$ at $B$): reflect any other point $P$ of $l$ to $P'$; the image line passes through $B$ and $P'$. If $l$ is parallel to $\pi$, the image is parallel to $l$ through $P'$.
- Planes $\mathbf{r} \cdot \mathbf{n} = D_1$ and $\mathbf{r} \cdot \mathbf{n} = D_2$ (same $\mathbf{n}$) are parallel, a distance $|D_1 - D_2| / |\mathbf{n}|$ apart.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.9], [7.7, 0.9], [9.54, 3.2], [2.14, 3.2]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [2.34, 1.7], to: [6.06, 2.1], tone: "muted", thin: true },
            { from: [2.34, 1.7], to: [6.06, 5.4], arrow: true, tone: "good", label: "AP", pos: "nw", style: "plain" },
            { from: [6.06, 3.35], to: [6.06, 5.4], dashed: true, tone: "ink" },
            { from: [6.06, 2.1], to: [6.06, 3.35], arrow: true, tone: "accent", label: "n̂", pos: "w", labelAt: [6.06, 2.98] },
            { from: [6.56, 5.4], to: [6.56, 2.1], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "|AP · n̂|", pos: "e", style: "plain" },
          ],
          rightAngles: [
            { at: [6.06, 2.1], a: [0, 1], b: [-3.72, -0.4], size: 0.36 },
          ],
          points: [
            { x: 2.34, y: 1.7, label: "A", pos: "sw" },
            { x: 6.06, y: 2.1, label: "N", pos: "se" },
          ],
          labels: [
            { x: 6.06, y: 5.4, text: "P", pos: "n" },
          ],
          caption: String.raw`Distance $PN = |\overrightarrow{AP} \cdot \hat{\mathbf{n}}| = \dfrac{|\mathbf{p} \cdot \mathbf{n} - D|}{|\mathbf{n}|}$ for any $A$ in the plane`,
          alt: "Point P above a plane, A any point in the plane, and N the foot of the perpendicular from P. The distance PN is the projection of AP onto the unit normal n-hat.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6.2],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 2.3], [7.7, 2.3], [9.22, 4.2], [1.82, 4.2]], fill: true, tone: "muted" },
          ],
          segments: [
            { from: [2.74, 3.6], to: [6.3, 4.97], tone: "accent", label: "l", pos: "se", style: "italic", labelAt: [6.2, 4.92] },
            { from: [2.74, 3.6], to: [5.97, 0.12], tone: "good", dashed: true, label: "l′", pos: "sw", style: "italic", labelAt: [5.84, 0.26] },
            { from: [5.48, 4.65], to: [5.48, 2.65], tone: "ink", thin: true },
            { from: [5.48, 2.65], to: [5.48, 0.65], tone: "ink", thin: true, dashed: true },
            { from: [5.66, 3.65], to: [5.3, 3.65], tone: "ink", thin: true },
            { from: [5.66, 1.65], to: [5.3, 1.65], tone: "ink", thin: true },
          ],
          rightAngles: [
            { at: [5.48, 2.65], a: [0, 1], b: [-1, 0], size: 0.3 },
          ],
          points: [
            { x: 2.74, y: 3.6, label: "B", pos: "w" },
            { x: 5.48, y: 4.65, label: "P", pos: "nw" },
            { x: 5.48, y: 2.65, label: "N", pos: "e" },
            { x: 5.48, y: 0.65, label: "P′", pos: "e" },
          ],
          caption: "Reflect $P$ to $P'$ using the foot $N$; the image of $l$ is the line $l'$ through $B$ and $P'$",
          alt: "Line l meets a plane at B. A point P on l has foot N on the plane and reflection P prime below the plane, with PN equal to NP prime. The reflected line l prime passes through B and P prime.",
        },
      ],
    },
    {
      title: String.raw`Two planes: angle and line of intersection`,
      body: String.raw`- Acute angle between planes = acute angle between their normals: $\cos\theta = \dfrac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$. In context (e.g. the angle between two roof faces) the required angle may be the **obtuse** one — read the question.
- Non-parallel planes meet in a line with direction $\mathbf{n}_1 \times \mathbf{n}_2$. Find a point by setting one coordinate (e.g. $z = 0$) and solving the other two equations.
- With a GC: solve the two cartesian equations as a system; the GC returns, e.g., $x = 1 - \frac{2}{5}z$, $y = 2 + z$; let $z = \lambda$ to write $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$. Show this working step.
- Parallel planes: $\mathbf{n}_1 \parallel \mathbf{n}_2$ (coincident if the equations are multiples of each other).`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.2],
          equal: true,
          axes: false,
          segments: [
            { from: [0.4, 1.6], to: [9.6, 1.6], tone: "ink", label: "Π₁", pos: "n", style: "italic", labelAt: [9.3, 1.6] },
            { from: [0.81, -0.35], to: [8.68, 5.16], tone: "ink", label: "Π₂", pos: "nw", style: "italic", labelAt: [8.42, 4.98] },
            { from: [3.6, 1.6], to: [3.6, 4], arrow: true, label: "n₁", pos: "n", labelAt: [3.6, 4] },
            { from: [3.6, 1.6], to: [2.22, 3.57], arrow: true, tone: "good", label: "n₂", pos: "nw", labelAt: [2.22, 3.57] },
          ],
          angles: [
            { at: [3.6, 1.6], from: [9.6, 1.6], to: [8.68, 5.16], r: 2, label: "θ" },
            { at: [3.6, 1.6], from: [3.6, 4], to: [2.22, 3.57], r: 1.2, label: "θ" },
          ],
          points: [
            { x: 3.6, y: 1.6, label: "", pos: "c" },
          ],
          caption: "Edge-on view: the angle between the normals equals the angle between the planes",
          alt: "Two planes seen edge-on as lines meeting at angle theta. Their normals n1 and n2, drawn from the same point, also meet at angle theta.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1.29, 0.66], [8.09, 0.66], [8.58, 2.3], [1.78, 2.3]], tone: "good", dashed: true },
            { points: [[0.3, 1.2], [8.3, 1.2], [10.06, 3.4], [2.06, 3.4]], fill: true, tone: "muted" },
            { points: [[1.78, 2.3], [8.58, 2.3], [9.5, 5.38], [2.7, 5.38]], fill: true, tone: "good" },
          ],
          segments: [
            { from: [0.88, 2.3], to: [9.58, 2.3], tone: "accent", label: "l", pos: "s", style: "italic", labelAt: [1.05, 2.3] },
            { from: [3.78, 2.3], to: [5.28, 2.3], arrow: true, label: "n₁ × n₂", pos: "s", labelAt: [4.53, 2.3] },
          ],
          caption: String.raw`The line of intersection is perpendicular to both normals, so it has direction $\mathbf{n}_1 \times \mathbf{n}_2$`,
          alt: "A horizontal plane and an inclined plane meeting in a line l. The direction of l is n1 cross n2, perpendicular to both normals.",
        },
      ],
    },
    {
      title: String.raw`Exam technique`,
      body: String.raw`- "Acute angle" means take the modulus of the dot product; give angles to $0.1^\circ$ unless told otherwise.
- None of the line and plane formulae are in MF27 — memorise them, and the sine/cosine distinction above.
- When a part says "Hence", reuse your earlier normal, foot or intersection point.
- In real-world contexts (roofs, ramps, lasers, flight paths) translate first: "shortest rod to the roof" = perpendicular distance to a plane; "the beam hits the mirror" = line–plane intersection; "the reflected ray" = reflection in a plane. Give units and answer in context.`,
    },
  ],
  archetypes: [
    {
      id: "3.3-line-equations",
      name: String.raw`Vector and cartesian equations of lines`,
      tests: String.raw`Writing the equation of a line through two points, converting between vector and cartesian forms (including awkward signs and zero components), and checking whether a point lies on a line.`,
      questions: [
        {
          stem: String.raw`The points $A$ and $B$ have coordinates $(2, -1, 3)$ and $(4, 0, 1)$ respectively. The line $l$ passes through $A$ and $B$.`,
          parts: [
            { label: "(i)", text: String.raw`Find a vector equation of $l$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Write down a cartesian equation of $l$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Show that the point $C(8, 2, -3)$ lies on $l$.`, marks: 2 },
            { label: "(iv)", text: String.raw`The point $D(p, q, 7)$ also lies on $l$. Find the values of $p$ and $q$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The line $l$ has cartesian equation
$$\frac{x - 1}{2} = 3 - y = \frac{z + 2}{3},$$
and the line $m$ has vector equation $\mathbf{r} = \mathbf{j} + \mathbf{k} + \mu(\mathbf{i} + \mathbf{j} + \mathbf{k})$, $\mu \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find a vector equation of $l$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the acute angle between $l$ and $m$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the point where $l$ meets the $x$-$y$ plane.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-foot-perpendicular-line",
      name: String.raw`Foot of perpendicular, distance and reflection: point and line`,
      tests: String.raw`Finding the foot of the perpendicular from a point to a line via $\overrightarrow{PN} \cdot \mathbf{d} = 0$, then the perpendicular distance, the reflection of the point in the line, or points on the line at a given distance.`,
      questions: [
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\0\\2\end{pmatrix} + \lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$, $\lambda \in \mathbb{R}$, and the point $P$ has coordinates $(4, 5, -3)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $P$ to $l$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the exact perpendicular distance from $P$ to $l$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the coordinates of the reflection of $P$ in $l$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the coordinates of the two points on $l$ which are a distance $\sqrt{29}$ from $P$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, -2, 0)$, $(3, -1, 2)$ and $(5, 4, -1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the length of projection of $\overrightarrow{AC}$ onto the line $AB$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the exact perpendicular distance from $C$ to the line $AB$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the position vector of the foot of the perpendicular from $C$ to the line $AB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-two-lines",
      name: String.raw`Relationship between two lines`,
      tests: String.raw`Deciding whether two lines are parallel, intersecting or skew; finding the point of intersection or an unknown constant that makes lines meet; and the acute angle between lines.`,
      questions: [
        {
          stem: String.raw`The lines $l_1$ and $l_2$ have equations
$$l_1: \mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + \lambda\begin{pmatrix}1\\-1\\2\end{pmatrix}, \qquad l_2: \mathbf{r} = \begin{pmatrix}3\\-1\\4\end{pmatrix} + \mu\begin{pmatrix}2\\1\\-1\end{pmatrix},$$
where $\lambda, \mu \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $l_1$ and $l_2$ are skew.`, marks: 3 },
            { label: "(ii)", text: String.raw`The line $l_3$ has equation $\mathbf{r} = \begin{pmatrix}2\\a\\0\end{pmatrix} + t\begin{pmatrix}0\\1\\1\end{pmatrix}$, $t \in \mathbb{R}$, where $a$ is a constant. Given that $l_1$ and $l_3$ intersect, find the value of $a$ and the coordinates of the point of intersection.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the acute angle between $l_1$ and $l_3$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The lines $l_1$ and $l_2$ have equations
$$l_1: \frac{x - 1}{2} = \frac{y + 1}{-1} = \frac{z - 3}{2}, \qquad l_2: \mathbf{r} = \begin{pmatrix}4\\0\\1\end{pmatrix} + \mu\begin{pmatrix}-4\\2\\-4\end{pmatrix},\ \mu \in \mathbb{R}.$$`,
          parts: [
            { label: "(i)", text: String.raw`Show that $l_1$ and $l_2$ are parallel and distinct.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact distance between $l_1$ and $l_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a cartesian equation of the plane containing $l_1$ and $l_2$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-plane-equations",
      name: String.raw`Equations of planes in different forms`,
      tests: String.raw`Obtaining a normal via a vector product, writing a plane in parametric, scalar-product and cartesian forms (including the plane through three points or containing a line), and converting between them.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(2, 1, 0)$, $(0, 3, 1)$ and $(1, 0, 3)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a vector equation of the plane $\pi$ containing $A$, $B$ and $C$ in the form $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find an equation of $\pi$ in scalar-product form, and hence write down its cartesian equation.`, marks: 3 },
            { label: "(iii)", text: String.raw`The point $D(3, k, 2)$ lies in $\pi$. Find the value of $k$.`, marks: 1 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The line $l$ has cartesian equation $x - 1 = y$, $z = -1$. The plane $\Pi$ contains $l$ and is parallel to the vector $\mathbf{j} + 2\mathbf{k}$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a vector equation of $l$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find a cartesian equation of $\Pi$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact perpendicular distance from the origin to $\Pi$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-line-plane",
      name: String.raw`Line and plane: intersection, angle, parallel or lying in`,
      tests: String.raw`Finding where a line meets a plane and the acute angle between them (using sine), the projection of a line onto a plane, and using $\mathbf{d} \cdot \mathbf{n} = 0$ to decide whether a line is parallel to or lies in a plane.`,
      questions: [
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\-2\\3\end{pmatrix} + \lambda\begin{pmatrix}1\\1\\2\end{pmatrix}$, $\lambda \in \mathbb{R}$, and the plane $p$ has equation $x + 2y + 3z = 15$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the point of intersection of $l$ and $p$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the acute angle between $l$ and $p$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a vector equation of the line $l'$, the projection of $l$ onto $p$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\a\\2\end{pmatrix} + \lambda\begin{pmatrix}2\\-1\\b\end{pmatrix}$, $\lambda \in \mathbb{R}$, where $a$ and $b$ are constants, and the plane $p$ has equation $3x + y - z = 4$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $l$ lies in $p$, find the values of $a$ and $b$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Given instead that $b$ takes the value found in part (i) and $a = 0$, describe the geometrical relationship between $l$ and $p$, and find the exact distance between them.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-point-plane-distance",
      name: String.raw`Foot of perpendicular and distance: point and plane`,
      tests: String.raw`Finding the foot of the perpendicular from a point to a plane and the perpendicular distance, and using the distance formula to find unknown constants, points on a line at a given distance, or parallel planes.`,
      questions: [
        {
          stem: String.raw`The plane $p$ has equation $2x - y + 2z = 5$ and the point $A$ has coordinates $(5, -1, 6)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $A$ to $p$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the perpendicular distance from $A$ to $p$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The plane $q$ has equation $2x - y + 2z = k$, where $k$ is a constant. Given that the perpendicular distance from $A$ to $q$ is 3, find the possible values of $k$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The plane $p$ has equation $x + 2y - 2z = 4$ and the line $l$ has equation $\mathbf{r} = \mathbf{i} + \mathbf{j} + \mathbf{k} + \lambda(2\mathbf{i} + \mathbf{j} + \mathbf{k})$, $\lambda \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the perpendicular distance from the origin to $p$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the coordinates of the points on $l$ which are a distance 3 units from $p$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the cartesian equations of the two planes which are parallel to $p$ and a distance 2 units from $p$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-reflection-in-plane",
      name: String.raw`Reflection of a point and of a line in a plane`,
      tests: String.raw`Using the foot of the perpendicular and the midpoint theorem to reflect a point in a plane, then combining with the line–plane intersection to find the equation of the reflected line.`,
      questions: [
        {
          stem: String.raw`The plane $\pi$ has equation $\mathbf{r} \cdot \begin{pmatrix}1\\1\\-1\end{pmatrix} = 2$. The line $l$ passes through the point $A(4, 3, -1)$ and is parallel to $\mathbf{i} + 2\mathbf{j} + \mathbf{k}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $A$ to $\pi$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the coordinates of the point $A'$, the reflection of $A$ in $\pi$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the point $B$ where $l$ meets $\pi$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Hence find a vector equation of the line $l'$, the reflection of $l$ in $\pi$.`, marks: 2 },
            { label: "(v)", text: String.raw`Verify that $l$ and $l'$ make the same acute angle with $\pi$.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "3.3-two-planes",
      name: String.raw`Two planes: angle and line of intersection`,
      tests: String.raw`Finding the acute angle between two planes via their normals, the line of intersection (by vector product or GC), and planes defined through that line; includes finding an unknown from a given angle.`,
      questions: [
        {
          stem: String.raw`The planes $p_1$ and $p_2$ have equations $x + y - z = 2$ and $2x - y + 3z = 1$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the acute angle between $p_1$ and $p_2$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find a vector equation of the line of intersection of $p_1$ and $p_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a cartesian equation of the plane which passes through the point $(1, 2, 3)$ and is perpendicular to both $p_1$ and $p_2$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The planes $p_1$ and $p_2$ have equations $x + z = 3$ and $y + kz = 0$ respectively, where $k$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Given that the acute angle between $p_1$ and $p_2$ is $60^\circ$, find the possible values of $k$.`, marks: 3 },
            { label: "(ii)", text: String.raw`For the positive value of $k$, find a vector equation of the line of intersection, $l$, of $p_1$ and $p_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the acute angle between $l$ and the $x$-$y$ plane.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-real-world-application",
      name: String.raw`Real-world applications: mirrors, roofs, ramps and flight paths`,
      tests: String.raw`Translating a physical situation into line and plane geometry — a beam meeting and reflecting off a mirror, angles between roof faces or with the ground, shortest supports as perpendicular distances — and interpreting answers in context.`,
      questions: [
        {
          stem: String.raw`In a laboratory, a flat mirror lies in the plane $\Pi$ with equation $x + 2y + 2z = 21$, where units are in metres. A laser at the point $L(1, -1, 2)$ emits a beam in the direction $3\mathbf{i} + \mathbf{j} + 2\mathbf{k}$, which strikes the mirror at the point $P$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of $P$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the acute angle between the beam and the mirror.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the foot of the perpendicular from $L$ to $\Pi$.`, marks: 3 },
            { label: "(iv)", text: String.raw`The reflected beam lies along the line through $P$ and $L'$, where $L'$ is the reflection of $L$ in $\Pi$. Show that the reflected beam travels in the direction $\mathbf{i} - 3\mathbf{j} - 2\mathbf{k}$.`, marks: 3 },
            { label: "(v)", text: String.raw`The floor of the laboratory is the plane $z = 0$. Find the coordinates of the point where the reflected beam hits the floor.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a shed. Its roof consists of two rectangular faces $ABFE$ and $EFCD$ meeting along a horizontal ridge $EF$. Relative to an origin $O$ on the horizontal ground $z = 0$, the corners have coordinates $A(0, 0, 6)$, $B(10, 0, 6)$, $C(10, 8, 6)$, $D(0, 8, 6)$, $E(0, 4, 9)$ and $F(10, 4, 9)$, where units are in metres.`,
          figure: {
            type: "plot",
            x: [-0.8, 17.4],
            y: [-0.4, 12.2],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0.6, 0.6], [10.6, 0.6], [10.6, 6.6], [0.6, 6.6]], fill: true, tone: "muted" },
              { points: [[10.6, 0.6], [16.2, 3.4], [16.2, 9.4], [13.4, 11], [10.6, 6.6]], fill: true, tone: "muted" },
              { points: [[0.6, 6.6], [10.6, 6.6], [13.4, 11], [3.4, 11]], fill: true, tone: "accent" },
            ],
            segments: [
              { from: [0.6, 0.6], to: [6.2, 3.4], dashed: true, tone: "muted", thin: true },
              { from: [6.2, 3.4], to: [16.2, 3.4], dashed: true, tone: "muted", thin: true },
              { from: [6.2, 3.4], to: [6.2, 9.4], dashed: true, tone: "muted", thin: true },
              { from: [3.4, 11], to: [6.2, 9.4], dashed: true, tone: "muted", thin: true },
              { from: [6.2, 9.4], to: [16.2, 9.4], dashed: true, tone: "muted", thin: true },
            ],
            points: [
              { x: 0.6, y: 0.6, label: "O", pos: "sw" },
            ],
            labels: [
              { x: 0.6, y: 6.6, text: "A", pos: "w" },
              { x: 10.6, y: 6.6, text: "B", pos: "se" },
              { x: 16.2, y: 9.4, text: "C", pos: "e" },
              { x: 6.2, y: 9.4, text: "D", pos: "sw" },
              { x: 3.4, y: 11, text: "E", pos: "nw" },
              { x: 13.4, y: 11, text: "F", pos: "ne" },
            ],
            alt: "A shed drawn in 3D: rectangular walls on horizontal ground with O at a bottom corner, and a roof made of two rectangular faces ABFE and EFCD meeting along the horizontal ridge EF.",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that the face $ABFE$ lies in the plane with cartesian equation $-3y + 4z = 24$.`, marks: 3 },
            { label: "(ii)", text: String.raw`The face $EFCD$ lies in the plane $3y + 4z = 48$. Find the angle between the two faces of the roof, measured inside the shed.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the angle that the face $ABFE$ makes with the horizontal ground.`, marks: 2 },
            { label: "(iv)", text: String.raw`A light fitting at the point $L(5, 4, 4)$ is to be attached to the face $ABFE$ by the shortest possible straight rod. Find the length of the rod and the coordinates of the point where it meets the roof.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
