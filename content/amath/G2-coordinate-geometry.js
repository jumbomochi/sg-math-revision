H2.addTopic({
  id: "G2",
  title: "Coordinate Geometry",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Parallel and perpendicular lines, midpoints, areas of rectilinear figures, equations of circles with tangents and chords, and the linear law.`,
  syllabus: {
    include: [
      String.raw`condition for two lines to be parallel or perpendicular`,
      String.raw`midpoint of line segment`,
      String.raw`area of rectilinear figure`,
      String.raw`coordinate geometry of circles in the form $(x - a)^2 + (y - b)^2 = r^2$ and $x^2 + y^2 + 2gx + 2fy + c = 0$`,
      String.raw`transformation of given relationships, including $y = ax^n$ and $y = kb^x$, to linear form to determine the unknown constants from a straight line graph`,
    ],
    exclude: [
      String.raw`problems involving two circles`,
    ],
  },
  concepts: [
    {
      title: String.raw`Gradient, length and midpoint`,
      body: String.raw`For $A(x_1, y_1)$ and $B(x_2, y_2)$ (all **memorise** — not on the formula sheet):
$$m_{AB} = \frac{y_2 - y_1}{x_2 - x_1}, \qquad AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \qquad M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right).$$

- If $M$ is the midpoint of $AB$ and you know $A$ and $M$, then $B = (2x_M - x_A,\ 2y_M - y_A)$.
- Three points $A$, $B$, $C$ are **collinear** if $m_{AB} = m_{BC}$.
- Leave lengths in surd form (e.g. $2\sqrt{5}$) unless a decimal is asked for.`,
      figure: {
        type: "plot",
        x: [-0.8, 8.6], y: [-0.8, 6.2], equal: true,
        segments: [
          { from: [1, 1], to: [7, 5], tone: "accent" },
          { from: [1, 1], to: [7, 1], dashed: true, thin: true, tone: "muted", label: "x₂ − x₁", pos: "s", style: "small" },
          { from: [7, 1], to: [7, 5], dashed: true, thin: true, tone: "muted", label: "y₂ − y₁", pos: "e", style: "small" },
        ],
        rightAngles: [{ at: [7, 1], a: [-1, 0], b: [0, 1], size: 0.3 }],
        points: [
          { x: 1, y: 1, label: "A(x₁, y₁)", pos: "nw" },
          { x: 7, y: 5, label: "B(x₂, y₂)", pos: "n" },
          { x: 4, y: 3, label: "M", pos: "nw" },
        ],
        caption: String.raw`Gradient = rise ÷ run; $AB$ by Pythagoras; $M$ averages the coordinates.`,
        alt: "Segment AB on coordinate axes with midpoint M. A dashed right-angled triangle below AB shows the horizontal run x2 − x1 and the vertical rise y2 − y1.",
      },
    },
    {
      title: String.raw`Parallel and perpendicular lines`,
      body: String.raw`For lines with gradients $m_1$ and $m_2$ (memorise):

- **Parallel**: $m_1 = m_2$.
- **Perpendicular**: $m_1 m_2 = -1$, i.e. $m_2 = -\dfrac{1}{m_1}$ ("flip and change sign").
- A vertical line $x = k$ is perpendicular to a horizontal line $y = k$; neither rule above applies to them directly.
- To show a triangle is **right-angled**, show two sides have $m_1 m_2 = -1$ (or use Pythagoras). To show it is isosceles, show two sides are equal in length.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 6.4], y: [-0.6, 5.2], equal: true, axes: false,
          segments: [
            { from: [0, 0.5], to: [6, 3.5], tone: "accent", label: "gradient m", pos: "se", style: "small", labelAt: [4.4, 2.7] },
            { from: [0, 2.5], to: [6, 5.5], tone: "good", label: "gradient m", pos: "nw", style: "small", labelAt: [2, 3.5] },
          ],
          caption: String.raw`Parallel: $m_1 = m_2$`,
          alt: "Two parallel straight lines with the same gradient m.",
        },
        {
          type: "plot",
          x: [-0.6, 6.4], y: [-0.6, 5.2], equal: true, axes: false,
          segments: [
            { from: [0.5, 1], to: [5.5, 3.5], tone: "accent", label: "gradient m", pos: "se", style: "small", labelAt: [4.6, 3.05] },
            { from: [2.25, 5.0], to: [4.25, 1.0], tone: "good", label: "gradient −1/m", pos: "w", style: "small", labelAt: [2.55, 4.4] },
          ],
          rightAngles: [{ at: [3.5, 2.5], a: [2, 1], b: [-1, 2], size: 0.35 }],
          caption: String.raw`Perpendicular: $m_1 m_2 = -1$`,
          alt: "Two straight lines crossing at right angles; one has gradient m and the other gradient −1/m.",
        },
      ],
    },
    {
      title: String.raw`Equations of lines and the perpendicular bisector`,
      body: String.raw`Line with gradient $m$ through $(x_1, y_1)$: $\;y - y_1 = m(x - x_1)$, or $y = mx + c$.

- **Perpendicular bisector** of $AB$: passes through the midpoint of $AB$ with gradient $-\dfrac{1}{m_{AB}}$. Every point on it is the **same distance** from $A$ and $B$.
- **Foot of the perpendicular** from $P$ to a line $L$: find the line through $P$ perpendicular to $L$, then solve simultaneously with $L$. The perpendicular distance from $P$ to $L$ is the length from $P$ to this foot.
- **Reflection** of $P$ in $L$: the foot $F$ is the midpoint of $P$ and its image $P'$.
- Points where a line meets the axes: put $y = 0$ (for the $x$-axis) or $x = 0$ (for the $y$-axis).`,
      figure: {
        type: "plot",
        x: [-0.2, 8.2], y: [-0.6, 6.0], equal: true, axes: false,
        segments: [
          { from: [1, 1], to: [7, 4], tone: "ink" },
          { from: [2.6, 5.3], to: [5.4, -0.3], tone: "accent", label: "perpendicular bisector", pos: "e", style: "small", labelAt: [5.25, 0] },
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
        caption: String.raw`Any point $P$ on the perpendicular bisector of $AB$ has $PA = PB$.`,
        alt: "Segment AB with midpoint M. The perpendicular bisector passes through M at right angles to AB. A point P on the bisector is joined to A and B by dashed lines of equal length.",
      },
    },
    {
      title: String.raw`Area of a rectilinear figure (shoelace method)`,
      body: String.raw`For a polygon with vertices $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$ taken **in order** round the figure (memorise):
$$\text{Area} = \frac12\begin{vmatrix} x_1 & x_2 & \cdots & x_n & x_1 \\ y_1 & y_2 & \cdots & y_n & y_1 \end{vmatrix} = \frac12\left|(x_1y_2 + x_2y_3 + \cdots) - (x_2y_1 + x_3y_2 + \cdots)\right|.$$

- Repeat the first vertex at the end. Multiply "down-right" and subtract "up-right".
- The vertices must go round the figure in order (anticlockwise gives a positive value). Going in a criss-cross order gives a wrong answer.
- Example: $(1, 1), (6, 0), (7, 4), (2, 5)$ gives $\frac12|(0 + 24 + 35 + 2) - (6 + 0 + 8 + 5)| = 21$ units².
- If an area involves an unknown, the modulus gives **two** cases: $\frac12|\ldots| = A$ means $\ldots = 2A$ or $\ldots = -2A$.`,
      figure: {
        type: "plot",
        x: [-0.8, 8.6], y: [-0.9, 6.0], equal: true,
        polygons: [{ points: [[1, 1], [6, 0], [7, 4], [2, 5]], fill: true, tone: "accent" }],
        points: [
          { x: 1, y: 1, label: "(1, 1)", pos: "w" },
          { x: 6, y: 0, label: "(6, 0)", pos: "se" },
          { x: 7, y: 4, label: "(7, 4)", pos: "e" },
          { x: 2, y: 5, label: "(2, 5)", pos: "n" },
        ],
        caption: String.raw`Take the vertices anticlockwise: area $= 21$ units².`,
        alt: "A quadrilateral with vertices (1, 1), (6, 0), (7, 4) and (2, 5) shaded on a coordinate grid.",
      },
    },
    {
      title: String.raw`Special quadrilaterals with coordinates`,
      body: String.raw`| Shape | Useful property |
| --- | --- |
| Parallelogram | diagonals bisect each other (same midpoint); opposite sides parallel |
| Rhombus | diagonals bisect each other **at right angles** |
| Rectangle | diagonals bisect each other and are equal in length |
| Square | rhombus with equal diagonals |
| Kite | one diagonal is the perpendicular bisector of the other |
| Trapezium | one pair of parallel sides |

To find the fourth vertex $D$ of parallelogram $ABCD$: midpoint of $AC$ = midpoint of $BD$, so $D = A + C - B$ (coordinate by coordinate). Take the letters in order round the shape.`,
      figure: {
        type: "plot",
        x: [0.2, 8.8], y: [0.2, 6.6], equal: true, axes: false,
        polygons: [{ points: [[1, 1], [6, 2], [8, 6], [3, 5]], tone: "accent" }],
        segments: [
          { from: [1, 1], to: [8, 6], dashed: true, thin: true, tone: "muted" },
          { from: [6, 2], to: [3, 5], dashed: true, thin: true, tone: "muted" },
        ],
        points: [
          { x: 1, y: 1, label: "A", pos: "sw" },
          { x: 6, y: 2, label: "B", pos: "se" },
          { x: 8, y: 6, label: "C", pos: "ne" },
          { x: 3, y: 5, label: "D", pos: "nw" },
          { x: 4.5, y: 3.5, label: "M", pos: "s" },
        ],
        caption: String.raw`Parallelogram: $M$ is the midpoint of both $AC$ and $BD$.`,
        alt: "Parallelogram ABCD with both diagonals drawn dashed, meeting at their common midpoint M.",
      },
    },
    {
      title: String.raw`Equation of a circle`,
      body: String.raw`Circle with centre $(a, b)$ and radius $r$ (memorise — not on the formula sheet):
$$(x - a)^2 + (y - b)^2 = r^2.$$
Expanded (general) form: $x^2 + y^2 + 2gx + 2fy + c = 0$, with
$$\text{centre } (-g, -f), \qquad r = \sqrt{g^2 + f^2 - c}.$$

- The coefficients of $x^2$ and $y^2$ must both be 1 — divide through first if they are not.
- Or complete the square: $x^2 - 6x = (x - 3)^2 - 9$.
- Circle with diameter $AB$: centre = midpoint of $AB$, radius $= \frac12 AB$.
- A circle **touching the $x$-axis** has $r = |b|$; touching the $y$-axis has $r = |a|$.
- A point lies on the circle if its coordinates satisfy the equation; inside if the left side is less than $r^2$.`,
      figure: {
        type: "plot",
        x: [-0.8, 6.8], y: [-1.0, 5.2], equal: true,
        circles: [{ c: [3, 2], r: 2.5, tone: "accent" }],
        segments: [
          { from: [3, 2], to: [4.915, 3.607], tone: "ink", label: "r", pos: "nw", style: "italic" },
          { from: [3, 2], to: [4.915, 2], dashed: true, thin: true, tone: "muted", label: "x − a", pos: "s", style: "small" },
          { from: [4.915, 2], to: [4.915, 3.607], dashed: true, thin: true, tone: "muted", label: "y − b", pos: "e", style: "small" },
        ],
        points: [
          { x: 3, y: 2, label: "C(a, b)", pos: "w" },
          { x: 4.915, y: 3.607, label: "P(x, y)", pos: "ne" },
        ],
        caption: String.raw`Pythagoras on the dashed triangle gives $(x - a)^2 + (y - b)^2 = r^2$.`,
        alt: "A circle with centre C(a, b) and a point P(x, y) on it. The radius CP is the hypotenuse of a dashed right-angled triangle with legs x − a and y − b.",
      },
    },
    {
      title: String.raw`Tangents and chords`,
      body: String.raw`Circle facts from E-Math, used with coordinates:

- The **tangent** at $P$ is perpendicular to the radius $CP$: $m_{\text{tangent}} = -\dfrac{1}{m_{CP}}$.
- The perpendicular from the centre to a **chord** bisects the chord, so the centre lies on the perpendicular bisector of every chord. Two chords' perpendicular bisectors meet at the centre.
- An angle in a semicircle is $90^\circ$: if $AB$ is a diameter and $P$ is on the circle, $PA \perp PB$.
- The tangents at the two ends $P$ and $Q$ of a diameter are parallel; the point $Q$ diametrically opposite $P$ is $2C - P$ (coordinate by coordinate).
- Length of tangent from an external point $T$: $TP^2 = TC^2 - r^2$.`,
      figure: {
        type: "plot",
        x: [-3.2, 4.6], y: [-2.6, 3.0], equal: true, axes: false,
        circles: [{ c: [0, 0], r: 2, tone: "accent" }],
        segments: [
          { from: [0, 0], to: [1, 1.732], tone: "ink" },
          { from: [-0.5, 2.598], to: [3.5, 0.289], tone: "good", label: "tangent", pos: "ne", style: "small", labelAt: [2.9, 0.635] },
          { from: [-1.8, -0.872], to: [1.0, -1.732], tone: "ink" },
          { from: [0, 0], to: [-0.4, -1.302], dashed: true, thin: true, tone: "muted" },
        ],
        rightAngles: [
          { at: [1, 1.732], a: [-1, -1.732], b: [1.732, -1], size: 0.25 },
          { at: [-0.4, -1.302], a: [0.4, 1.302], b: [2.8, -0.86], size: 0.22 },
        ],
        points: [
          { x: 0, y: 0, label: "C", pos: "w" },
          { x: 1, y: 1.732, label: "P", pos: "n" },
          { x: -0.4, y: -1.302, label: "M", pos: "s" },
        ],
        caption: String.raw`Tangent $\perp$ radius at $P$; the perpendicular from $C$ bisects the chord at $M$.`,
        alt: "A circle with centre C. The tangent at P is at right angles to the radius CP. A chord below the centre has its midpoint M joined to C by a dashed line at right angles to the chord.",
      },
    },
    {
      title: String.raw`Where a line meets a circle`,
      body: String.raw`Substitute the line into the circle to get a quadratic in one variable, then use the discriminant $b^2 - 4ac$ (A2):

| $b^2 - 4ac$ | Line and circle |
| --- | --- |
| $> 0$ | meet at two points (the line is a secant; the chord joins them) |
| $= 0$ | line is a **tangent** (one point of contact) |
| $< 0$ | do not meet |

Equivalent geometric test: compare the perpendicular distance from the centre to the line with $r$. To find the points of intersection, solve the quadratic and substitute back into the **linear** equation.`,
      figure: {
        type: "plot",
        x: [-3.6, 4.6], y: [-2.5, 2.7], equal: true, axes: false,
        circles: [{ c: [0, 0], r: 1.8, tone: "accent" }],
        segments: [
          { from: [-3.4, -1.0], to: [3.4, 0.6], tone: "ink", label: "2 points", pos: "e", style: "small", labelAt: [3.4, 0.6] },
          { from: [-3.4, 1.8], to: [3.0, 1.8], tone: "good", label: "tangent", pos: "e", style: "small", labelAt: [3.0, 1.8] },
          { from: [-1.2, -2.4], to: [3.4, -1.0], tone: "muted", label: "no points", pos: "e", style: "small", labelAt: [3.4, -1.0] },
        ],
        points: [{ x: 0, y: 1.8 }],
        caption: String.raw`Secant ($b^2 - 4ac > 0$), tangent ($= 0$) and a line that misses ($< 0$).`,
        alt: "A circle with three straight lines: one cutting it at two points, one touching it at a single point, and one missing it.",
      },
    },
    {
      title: String.raw`Linear law`,
      body: String.raw`Rewrite a non-linear relationship in the form $Y = mX + c$, where $X$ and $Y$ contain only the variables and $m$, $c$ contain only the constants. Plot $Y$ against $X$: the gradient gives $m$ and the $Y$-intercept gives $c$.

| Relationship | Linear form | $Y$ | $X$ | $m$ | $c$ |
| --- | --- | --- | --- | --- | --- |
| $y = ax^n$ | $\lg y = n\lg x + \lg a$ | $\lg y$ | $\lg x$ | $n$ | $\lg a$ |
| $y = kb^x$ | $\lg y = (\lg b)x + \lg k$ | $\lg y$ | $x$ | $\lg b$ | $\lg k$ |
| $y = ax + \dfrac{b}{x}$ | $xy = ax^2 + b$ | $xy$ | $x^2$ | $a$ | $b$ |

- $Y$ and $X$ must **not** contain the unknown constants.
- Draw a ruled line of best fit, use two points **on the line** far apart (not data points) for the gradient, and read the intercept only if the $X$-axis starts at 0.
- To estimate $y$ for a given $x$, read from the line, then undo the logarithm.`,
      figure: {
        type: "plot",
        x: [-0.15, 1.6], y: [-0.2, 3.0], height: 220, axisLabels: ["X", "Y"],
        lines: [{ fn: "x => 1.5*x + 0.48" }],
        scatter: [[0.2, 0.8], [0.45, 1.13], [0.7, 1.55], [0.95, 1.88], [1.2, 2.3], [1.4, 2.56]],
        points: [{ x: 0, y: 0.48, label: "Y-intercept = c", pos: "se" }],
        labels: [{ x: 1.05, y: 1.2, text: "gradient = m", pos: "c", style: "small" }],
        caption: String.raw`Plot $Y$ against $X$, draw the line of best fit, read off $m$ and $c$.`,
        alt: "Data points plotted on X and Y axes lying close to a straight line of best fit, with the Y-intercept c and gradient m indicated.",
      },
    },
  ],
  archetypes: [
    {
      id: "G2-parallel-perpendicular",
      name: String.raw`Parallel and perpendicular lines, foot of perpendicular`,
      tests: String.raw`Finding the equation of a line parallel or perpendicular to a given line, the intersection (foot of the perpendicular), a perpendicular distance and an area. A standard opening question.`,
      questions: [
        {
          stem: String.raw`The points $A(-3, 2)$, $B(5, 6)$ and $C(4, -2)$ are the vertices of a triangle.`,
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the line through $C$ which is perpendicular to $AB$.`, marks: 3 },
            { label: "(ii)", text: String.raw`This line meets $AB$ at $D$. Find the coordinates of $D$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact length of $CD$ and hence find the area of triangle $ABC$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The line $L$ has equation $y = 2x + 1$ and the point $P$ has coordinates $(7, 0)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $P$ to $L$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the coordinates of $P'$, the reflection of $P$ in $L$.`, marks: 2 },
            { label: "(iii)", text: String.raw`$L$ meets the $y$-axis at $Q$. Find the area of triangle $PP'Q$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G2-perpendicular-bisector",
      name: String.raw`Perpendicular bisector and equidistant points`,
      tests: String.raw`Using the midpoint and the perpendicular gradient to find a perpendicular bisector, and the fact that points on it are equidistant from both ends of the segment.`,
      questions: [
        {
          stem: String.raw`The points $P$ and $Q$ have coordinates $(1, 7)$ and $(5, -1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the perpendicular bisector of $PQ$.`, marks: 3 },
            { label: "(ii)", text: String.raw`The point $R$ lies on the $y$-axis and is equidistant from $P$ and $Q$. Find the coordinates of $R$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the area of triangle $PQR$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The point $(2, 0)$ lies on the perpendicular bisector of the line segment joining $A(k, 3)$ and $B(5, -1)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the two possible values of $k$.`, marks: 3 },
            { label: "(ii)", text: String.raw`For the smaller value of $k$, find the equation of the perpendicular bisector of $AB$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G2-area-rectilinear",
      name: String.raw`Area of a rectilinear figure`,
      tests: String.raw`Using the shoelace (array) method for the area of a triangle or quadrilateral, including finding an unknown coordinate from a given area and finding a perpendicular distance from an area.`,
      questions: [
        {
          stem: String.raw`The diagram shows a quadrilateral $ABCD$ with vertices $A(-2, 1)$, $B(3, -2)$, $C(6, 3)$ and $D(1, 5)$.`,
          figure: {
            type: "plot",
            x: [-3.2, 7.8], y: [-3.0, 6.2], equal: true,
            polygons: [{ points: [[-2, 1], [3, -2], [6, 3], [1, 5]], tone: "accent" }],
            segments: [{ from: [-2, 1], to: [6, 3], dashed: true, thin: true, tone: "muted" }],
            points: [
              { x: -2, y: 1, label: "A(−2, 1)", pos: "nw" },
              { x: 3, y: -2, label: "B(3, −2)", pos: "se" },
              { x: 6, y: 3, label: "C(6, 3)", pos: "e" },
              { x: 1, y: 5, label: "D(1, 5)", pos: "n" },
            ],
            originLabel: "nw",
            alt: "Quadrilateral ABCD on coordinate axes with A(−2, 1), B(3, −2), C(6, 3), D(1, 5), and the diagonal AC drawn dashed.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the area of $ABCD$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the area of triangle $ACD$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence find the perpendicular distance from $D$ to $AC$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The vertices of a triangle are $P(1, 2)$, $Q(7, 4)$ and $R(k, 8)$. The area of triangle $PQR$ is 16 units².`,
          parts: [
            { label: "(i)", text: String.raw`Find the two possible values of $k$.`, marks: 4 },
            { label: "(ii)", text: String.raw`For the smaller value of $k$, show that angle $PRQ$ is not a right angle.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G2-special-quadrilaterals",
      name: String.raw`Parallelograms, rhombuses and right-angled triangles`,
      tests: String.raw`Using properties of diagonals (bisect each other, perpendicular) and gradients to find missing vertices, or to show that a figure is a right-angled, isosceles or special quadrilateral.`,
      questions: [
        {
          stem: String.raw`The diagram shows a rhombus $ABCD$ in which $A$ is $(-1, 1)$, $C$ is $(5, 3)$ and $B$ lies on the $y$-axis.`,
          figure: {
            type: "plot",
            x: [-2.4, 6.8], y: [-4.8, 9.0], equal: true,
            polygons: [{ points: [[-1, 1], [0, 8], [5, 3], [4, -4]], tone: "accent" }],
            segments: [
              { from: [-1, 1], to: [5, 3], dashed: true, thin: true, tone: "muted" },
              { from: [0, 8], to: [4, -4], dashed: true, thin: true, tone: "muted" },
            ],
            points: [
              { x: -1, y: 1, label: "A(−1, 1)", pos: "w" },
              { x: 0, y: 8, label: "B", pos: "ne" },
              { x: 5, y: 3, label: "C(5, 3)", pos: "e" },
              { x: 4, y: -4, label: "D", pos: "se" },
            ],
            originLabel: "sw",
            alt: "Rhombus ABCD with A at (−1, 1), C at (5, 3), B on the positive y-axis and D below the x-axis. Both diagonals are drawn dashed.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the diagonal $BD$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the coordinates of $B$ and of $D$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the area of the rhombus.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The points $P(-1, 2)$, $Q(3, 4)$ and $R(5, 0)$ are three vertices of a quadrilateral $PQRS$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that triangle $PQR$ is a right-angled isosceles triangle.`, marks: 3 },
            { label: "(ii)", text: String.raw`Given that $PQRS$ is a square, find the coordinates of $S$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the equation of the diagonal $QS$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G2-circle-equation",
      name: String.raw`Centre, radius and equation of a circle`,
      tests: String.raw`Converting between $x^2 + y^2 + 2gx + 2fy + c = 0$ and $(x - a)^2 + (y - b)^2 = r^2$, and finding the equation from a diameter, a centre and a point, or a circle touching an axis.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Find the centre and the radius of the circle $x^2 + y^2 + 8x - 2y - 8 = 0$.`, marks: 3 },
            { label: "(b)", text: String.raw`The points $A(-1, 3)$ and $B(5, -5)$ are the ends of a diameter of a circle. Find the equation of the circle.`, marks: 3 },
            { label: "(c)", text: String.raw`A circle has centre $(-3, 4)$ and touches the $x$-axis. Find its equation in the form $x^2 + y^2 + 2gx + 2fy + c = 0$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A circle passes through the points $A(1, 5)$ and $B(7, 3)$, and its centre lies on the line $y = x - 2$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the perpendicular bisector of $AB$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the equation of the circle.`, marks: 3 },
            { label: "(iii)", text: String.raw`Show that $AC$ is a diameter of the circle, where $C$ is the point $(5, -3)$.`, marks: 2 },
            { label: "(iv)", text: String.raw`State the size of angle $ABC$, giving a reason.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-tangent-to-circle",
      name: String.raw`Tangent to a circle at a given point`,
      tests: String.raw`Using "tangent $\perp$ radius" to find the equation of a tangent, then where it meets an axis, a tangent length, or the parallel tangent at the opposite end of a diameter.`,
      questions: [
        {
          stem: String.raw`The diagram shows the circle $x^2 + y^2 - 6x + 4y - 12 = 0$. The point $P(6, 2)$ lies on the circle. The tangent to the circle at $P$ meets the $y$-axis at $T$.`,
          figure: {
            type: "plot",
            x: [-2.4, 9.6], y: [-7.4, 7.8], equal: true,
            circles: [{ c: [3, -2], r: 5, tone: "accent" }],
            segments: [{ from: [-1.0, 7.25], to: [9.0, -0.25], tone: "good" }],
            points: [
              { x: 6, y: 2, label: "P(6, 2)", pos: "ne" },
              { x: 0, y: 6.5, label: "T", pos: "w" },
            ],
            alt: "A circle drawn on coordinate axes, with the point P(6, 2) on the circle and the tangent at P sloping down from left to right, meeting the y-axis at T.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the centre and the radius of the circle.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the equation of the tangent at $P$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the length of $PT$.`, marks: 2 },
            { label: "(iv)", text: String.raw`The tangent to the circle at the point $Q$ is parallel to the tangent at $P$, where $Q \ne P$. Find the coordinates of $Q$ and the equation of the tangent at $Q$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G2-line-meets-circle",
      name: String.raw`Intersection of a line and a circle`,
      tests: String.raw`Solving a line and a circle simultaneously to find points of intersection and chord properties, or using the discriminant to find when a line is a tangent, a secant, or misses the circle.`,
      questions: [
        {
          stem: String.raw`The circle $x^2 + y^2 - 2x - 4y - 20 = 0$ has centre $C$. The line $y = x + 2$ meets the circle at the points $A$ and $B$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of $A$ and $B$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the exact length of the chord $AB$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the coordinates of $M$, the midpoint of $AB$, and show that $CM$ is perpendicular to $AB$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The line $y = 2x + k$, where $k$ is a constant, and the circle $x^2 + y^2 = 20$ are given.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $k$ for which the line is a tangent to the circle.`, marks: 4 },
            { label: "(ii)", text: String.raw`For each of these values, find the coordinates of the point of contact.`, marks: 3 },
            { label: "(iii)", text: String.raw`State the range of values of $k$ for which the line meets the circle at two distinct points.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G2-linear-law",
      name: String.raw`Linear law: finding constants from a straight-line graph`,
      tests: String.raw`Choosing $X$ and $Y$ to turn $y = ax^n$, $y = kb^x$ or $y = ax + \frac{b}{x}$ into a straight line, then using the gradient and intercept (from a table of data or a given line) to find the constants and make estimates.`,
      questions: [
        {
          stem: String.raw`The table shows experimental values of two variables $x$ and $y$, which are believed to be related by $y = kb^x$, where $k$ and $b$ are constants.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
| --- | --- | --- | --- | --- | --- | --- |
| $y$ | 4.02 | 6.38 | 10.3 | 16.4 | 26.1 | 42.0 |`,
          parts: [
            { label: "(i)", text: String.raw`Plot $\lg y$ against $x$ and draw a straight line graph.`, marks: 3 },
            { label: "(ii)", text: String.raw`Use your graph to estimate the value of $k$ and of $b$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Use your graph to estimate the value of $x$ when $y = 20$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The variables $x$ and $y$ are related by the equation $y = ax + \dfrac{b}{x}$, where $a$ and $b$ are constants. The diagram shows the straight line obtained by plotting $xy$ against $x^2$. The line passes through the points $(2, 7)$ and $(6, 15)$.`,
          figure: {
            type: "plot",
            x: [-0.8, 8.0], y: [-1.2, 19.0], height: 230, axisLabels: ["x²", "xy"],
            segments: [{ from: [0, 3], to: [7.5, 18], tone: "accent" }],
            points: [
              { x: 2, y: 7, label: "(2, 7)", pos: "se" },
              { x: 6, y: 15, label: "(6, 15)", pos: "se" },
            ],
            alt: "A straight line on axes labelled x squared (horizontal) and xy (vertical), passing through the points (2, 7) and (6, 15) and crossing the positive vertical axis.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the value of $y$ when $x = 1.5$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain why the value of $y$ cannot be found from the graph when $x = 0$.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
