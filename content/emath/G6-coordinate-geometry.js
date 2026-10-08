H2.addTopic({
  id: "G6",
  title: "Coordinate Geometry",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Gradient and length of a line segment, the equation $y = mx + c$, parallel lines, intersections and geometric problems on coordinate axes.`,
  syllabus: {
    include: [
      String.raw`finding the gradient of a straight line given the coordinates of two points on it`,
      String.raw`finding the length of a line segment given the coordinates of its end points`,
      String.raw`interpreting and finding the equation of a straight line graph in the form $y = mx + c$`,
      String.raw`geometric problems involving the use of coordinates`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Gradient of a line`,
      body: String.raw`For two points $(x_1, y_1)$ and $(x_2, y_2)$ on a line (memorise):
$$m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}.$$

- Keep the **same order** on top and bottom. Mixing the order gives the wrong sign.
- $m > 0$: the line goes **up** from left to right. $m < 0$: it goes **down**.
- A **horizontal** line has gradient $0$. A **vertical** line has an **undefined** gradient.
- The larger $|m|$ is, the steeper the line.
- Leave a gradient as a fraction, e.g. $-\frac{5}{3}$, not $-1.67$.`,
      figure: {
        type: "plot",
        x: [-0.8, 7.4], y: [-0.8, 5.2], equal: true, ticks: true,
        curves: [{ fn: "x => 0.6*x + 0.4", domain: [-0.5, 7.2] }],
        segments: [
          { from: [1, 1], to: [6, 1], dashed: true, thin: true, tone: "muted" },
          { from: [6, 1], to: [6, 4], dashed: true, thin: true, tone: "muted" },
        ],
        rightAngles: [{ at: [6, 1], a: [-1, 0], b: [0, 1], size: 0.25 }],
        points: [
          { x: 1, y: 1, label: "(x₁, y₁)", pos: "nw" },
          { x: 6, y: 4, label: "(x₂, y₂)", pos: "nw" },
        ],
        labels: [
          { x: 3.5, y: 1, text: "run = x₂ − x₁", pos: "s", style: "small" },
          { x: 6, y: 2.5, text: "rise = y₂ − y₁", pos: "e", style: "small" },
        ],
        caption: String.raw`Gradient $=$ rise $\div$ run $= \frac{4 - 1}{6 - 1} = \frac{3}{5}$ here.`,
        alt: "A straight line through the points (1, 1) and (6, 4). A dashed right-angled triangle below the line shows the run of 5 across and the rise of 3 up.",
      },
    },
    {
      title: String.raw`Length of a line segment`,
      body: String.raw`The length of the line segment joining $(x_1, y_1)$ and $(x_2, y_2)$ comes from Pythagoras' theorem (memorise):
$$\text{length} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.$$

- Draw the right-angled triangle if unsure: horizontal side $= x_2 - x_1$, vertical side $= y_2 - y_1$.
- Squaring removes negative signs, so the order of the points does not matter here.
- Give the exact value $\sqrt{58}$ or the decimal $7.62$ (3 s.f.) as the question asks.
- If a length is given and one coordinate is unknown, square both sides. There are usually **two** answers.`,
      figure: {
        type: "plot",
        x: [-0.8, 6.4], y: [-0.8, 5.0], equal: true, ticks: true,
        segments: [
          { from: [1, 1], to: [5, 4], tone: "accent", label: "5", pos: "nw", style: "plain" },
          { from: [1, 1], to: [5, 1], dashed: true, thin: true, tone: "muted", label: "4", pos: "s", style: "plain" },
          { from: [5, 1], to: [5, 4], dashed: true, thin: true, tone: "muted", label: "3", pos: "e", style: "plain" },
        ],
        rightAngles: [{ at: [5, 1], a: [-1, 0], b: [0, 1], size: 0.25 }],
        points: [
          { x: 1, y: 1, label: "P(1, 1)", pos: "nw" },
          { x: 5, y: 4, label: "Q(5, 4)", pos: "n" },
        ],
        caption: String.raw`$PQ = \sqrt{4^2 + 3^2} = 5$ units.`,
        alt: "Points P(1, 1) and Q(5, 4) joined by a line segment of length 5, with a dashed right-angled triangle whose horizontal side is 4 and vertical side is 3.",
      },
    },
    {
      title: String.raw`The equation $y = mx + c$`,
      body: String.raw`Every straight line except a vertical one can be written as $y = mx + c$.

- $m$ is the **gradient**.
- $c$ is the **$y$-intercept**: the line crosses the $y$-axis at $(0, c)$.
- The equation must be in the form "$y = \ldots$" before you read off $m$ and $c$. For $4y = 3x - 8$, divide by 4 first: $y = \frac{3}{4}x - 2$, so $m = \frac{3}{4}$ and $c = -2$.
- To find the $x$-intercept, put $y = 0$.
- A point lies on a line if its coordinates **satisfy** the equation. Substitute and check both sides.`,
      figure: [
        {
          type: "plot",
          x: [-3.4, 4.4], y: [-1.6, 5.2], equal: true, ticks: true,
          curves: [{ fn: "x => 0.5*x + 2", domain: [-3.4, 4.4] }],
          labels: [{ x: 1.4, y: 3.5, text: "y = ½x + 2", pos: "c", style: "italic", tone: "accent" }],
          segments: [
            { from: [-3, 0.5], to: [-1, 0.5], dashed: true, thin: true, tone: "muted", label: "2", pos: "s", style: "plain" },
            { from: [-1, 0.5], to: [-1, 1.5], dashed: true, thin: true, tone: "muted", label: "1", pos: "e", style: "plain" },
          ],
          points: [{ x: 0, y: 2, label: "(0, 2)", pos: "nw" }],
          caption: String.raw`$m = \frac{1}{2}$: up 1 for every 2 across. $c = 2$.`,
          alt: "The line y = half x plus 2 crossing the y-axis at (0, 2), with a small triangle showing a rise of 1 for a run of 2.",
        },
        {
          type: "plot",
          x: [-3.4, 4.4], y: [-1.6, 5.2], equal: true, ticks: true,
          curves: [
            { fn: "x => x + 1", domain: [-2.6, 4.2] },
            { fn: "x => -x + 3", domain: [-2.2, 4.4], tone: "good", label: "m < 0", labelAt: -1.6 },
            { fn: "x => 4", domain: [-3.4, 4.4], tone: "warn" },
            { param: "t => [-2.5, t]", t: [-1.6, 5.2], tone: "muted" },
          ],
          labels: [
            { x: 4.2, y: 4, text: "m = 0", pos: "n", style: "small", tone: "warn" },
            { x: 2.8, y: 3.5, text: "m > 0", pos: "e", style: "italic", tone: "accent" },
            { x: -2.5, y: 0.35, text: "undefined", pos: "e", style: "small", tone: "muted" },
          ],
          caption: String.raw`Positive, negative, zero and undefined gradients.`,
          alt: "Four lines: one rising (positive gradient), one falling (negative gradient), one horizontal (zero gradient) and one vertical (undefined gradient).",
        },
      ],
    },
    {
      title: String.raw`Finding the equation of a line`,
      body: String.raw`**Given the gradient $m$ and one point $(x_1, y_1)$:** substitute into $y = mx + c$ to find $c$. (Equivalently, $y - y_1 = m(x - x_1)$.)

**Given two points:**
1. Find the gradient $m$ from the two points.
2. Substitute **either** point into $y = mx + c$ to find $c$.
3. Write the final equation, e.g. $y = -\frac{3}{2}x + \frac{5}{2}$.
4. Check with the other point.

- Horizontal line through $(a, b)$: $y = b$. Vertical line through $(a, b)$: $x = a$.
- The $x$-axis is $y = 0$; the $y$-axis is $x = 0$.`,
    },
    {
      title: String.raw`Parallel lines`,
      body: String.raw`Parallel lines have **equal gradients** (and different $y$-intercepts).

- $y = 2x + 3$, $y = 2x$ and $y = 2x - 2$ are all parallel.
- To find a line **parallel** to a given line through a point: take the same $m$, then use the point to find $c$.
- To **show** two lines are parallel, find both gradients and state that they are equal.
- To show three points $A$, $B$, $C$ are on one straight line (collinear): show the gradient of $AB$ equals the gradient of $BC$. The common point $B$ means the lines are the same line, not just parallel.`,
      figure: {
        type: "plot",
        x: [-3.2, 3.6], y: [-3.2, 4.8], equal: true, ticks: true,
        curves: [
          { fn: "x => 2*x + 3", domain: [-3, 0.9], label: "y = 2x + 3", labelAt: -2.9 },
          { fn: "x => 2*x", domain: [-1.6, 2.4], tone: "good", label: "y = 2x", labelAt: 1.7 },
          { fn: "x => 2*x - 2", domain: [-0.6, 3.4], tone: "warn", label: "y = 2x − 2", labelAt: 2.25 },
        ],
        caption: String.raw`Same gradient $m = 2$, different $c$: the lines never meet.`,
        alt: "Three parallel lines y = 2x + 3, y = 2x and y = 2x minus 2, all with gradient 2 and different y-intercepts.",
      },
    },
    {
      title: String.raw`Intersections and intercepts`,
      body: String.raw`- The point where two lines meet satisfies **both** equations. Solve them as **simultaneous equations** (substitution or elimination).
- Where a line meets the $x$-axis, $y = 0$. Where it meets the $y$-axis, $x = 0$.
- Parallel lines have no point of intersection — the simultaneous equations have no solution.
- Give the answer as coordinates $(x, y)$, not just the $x$-value.`,
      figure: {
        type: "plot",
        x: [-4, 7.6], y: [-1.6, 6.2], equal: true, ticks: true,
        curves: [
          { fn: "x => x + 2", domain: [-3.2, 4.2] },
          { fn: "x => -0.5*x + 5", domain: [-2.4, 7.6], tone: "good", label: "y = −½x + 5", labelAt: 5.4 },
        ],
        points: [
          { x: 2, y: 4 },
          { x: 0, y: 5, label: "y-intercept", pos: "ne", style: "small" },
          { x: -2, y: 0, label: "x-intercept", pos: "nw", style: "small" },
        ],
        labels: [
          { x: 2.3, y: 4.05, text: "(2, 4)", pos: "e" },
          { x: 3.8, y: 5.0, text: "y = x + 2", pos: "e", style: "italic", tone: "accent" },
        ],
        caption: String.raw`Solving $x + 2 = -\frac{1}{2}x + 5$ gives $x = 2$, so the lines meet at $(2, 4)$.`,
        alt: "The lines y = x + 2 and y = minus half x plus 5 crossing at (2, 4). The y-intercept of the second line at (0, 5) and the x-intercept of the first line at (−2, 0) are marked.",
      },
    },
    {
      title: String.raw`Geometric problems with coordinates`,
      body: String.raw`Sketch the points on a quick diagram first.

- **Area of a triangle**: if one side is horizontal or vertical, use $\frac{1}{2} \times \text{base} \times \text{height}$ with lengths read from the coordinates. Otherwise, split into simpler shapes or subtract triangles from an enclosing rectangle.
- **Right-angled triangle**: find the three lengths (squares are enough), then use the converse of Pythagoras.
- **Isosceles triangle**: show two lengths are equal.
- **Parallelogram**: opposite sides have equal gradients. A missing vertex can be found by using the same "move": if $A \to B$ is $3$ right, $1$ up, then $D \to C$ is too.
- State your conclusion in words, e.g. "so $PQRS$ is a parallelogram".`,
      figure: {
        type: "plot",
        x: [-0.8, 8.2], y: [-0.8, 6.2], equal: true, ticks: true,
        polygons: [{ points: [[1, 1], [7, 1], [4, 5]], fill: true, tone: "accent" }],
        segments: [{ from: [4, 5], to: [4, 1], dashed: true, thin: true, tone: "muted", label: "height 4", pos: "e", style: "small" }],
        rightAngles: [{ at: [4, 1], a: [1, 0], b: [0, 1], size: 0.25 }],
        points: [
          { x: 1, y: 1, label: "A(1, 1)", pos: "nw" },
          { x: 7, y: 1, label: "B(7, 1)", pos: "ne" },
          { x: 4, y: 5, label: "C(4, 5)", pos: "n" },
        ],
        labels: [{ x: 2.5, y: 1, text: "base 6", pos: "s", style: "small" }],
        caption: String.raw`$AB$ is horizontal, so area $= \frac{1}{2} \times 6 \times 4 = 12$ square units.`,
        alt: "Triangle A(1, 1), B(7, 1), C(4, 5). AB is horizontal with length 6 and the perpendicular height from C is 4.",
      },
    },
  ],
  archetypes: [
    {
      id: "G6-gradient-length",
      name: String.raw`Gradient and length from two points`,
      tests: String.raw`Using the gradient and length formulae directly, and working backwards to find an unknown coordinate from a given gradient or a given length (which usually gives two answers).`,
      questions: [
        {
          stem: String.raw`The points $A$ and $B$ have coordinates $(-2, 3)$ and $(4, -5)$ respectively.`,
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of $AB$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the length of $AB$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The point $P$ has coordinates $(1, k)$ and the point $Q$ has coordinates $(7, 2)$.`,
          parts: [
            { label: "(a)", text: String.raw`Given that the gradient of $PQ$ is $-\frac{1}{3}$, find the value of $k$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given instead that $PQ = 10$ units, find the two possible values of $k$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G6-equation-of-line",
      name: String.raw`Finding the equation of a straight line`,
      tests: String.raw`Finding $y = mx + c$ from two points or from a gradient and a point (including points on the axes), and checking whether a given point lies on the line.`,
      questions: [
        {
          stem: String.raw`The line $l$ passes through the points $(-2, 3)$ and $(4, -5)$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the equation of $l$.`, marks: 3 },
            { label: "(b)", text: String.raw`Determine whether the point $(7, -9)$ lies on $l$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows the line $l$, which meets the $x$-axis at $A(6, 0)$ and the $y$-axis at $B(0, 4)$.`,
          figure: {
            type: "plot",
            x: [-4.4, 7.8], y: [-1.2, 7.6], equal: true,
            curves: [{ fn: "x => -2*x/3 + 4", domain: [-4.2, 7.4], label: "l", labelAt: -3.6 }],
            points: [
              { x: 6, y: 0, label: "A(6, 0)", pos: "ne" },
              { x: 0, y: 4, label: "B(0, 4)", pos: "ne" },
            ],
            caption: "Not drawn to scale",
            alt: "A line l with negative gradient crossing the x-axis at A(6, 0) and the y-axis at B(0, 4).",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of $l$.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the equation of $l$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the length of $AB$.`, marks: 2 },
            { label: "(d)", text: String.raw`The point $C(-3, h)$ lies on $l$. Find the value of $h$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G6-interpret-graph",
      name: String.raw`Reading gradient and intercepts from equations and graphs`,
      tests: String.raw`Rearranging an equation into $y = mx + c$ to read off the gradient and intercepts, and writing down equations of lines drawn on a grid.`,
      questions: [
        {
          stem: String.raw`A line has equation $3y = 2x - 12$.`,
          parts: [
            { label: "(a)", text: String.raw`Write down the gradient of the line.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the coordinates of the point where the line crosses the $y$-axis.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the coordinates of the point where the line crosses the $x$-axis.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows two straight lines $l_1$ and $l_2$ drawn on a grid.`,
          figure: {
            type: "plot",
            x: [-1.6, 9.4], y: [-2.6, 6.4], equal: true, ticks: true,
            curves: [
              { fn: "x => 2*x - 1", domain: [-0.8, 3.7], label: "l₁", labelAt: 3.3 },
              { fn: "x => -0.5*x + 4", domain: [-1.6, 9.2], tone: "good", label: "l₂", labelAt: 7.4 },
            ],
            caption: String.raw`Each square is 1 unit.`,
            alt: "Two lines on a square grid. Line l1 rises steeply through (0, −1) and (2, 3). Line l2 falls gently through (0, 4) and (4, 2).",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the equation of $l_1$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the equation of $l_2$.`, marks: 2 },
            { label: "(c)", text: String.raw`Use your equations to show that $l_1$ and $l_2$ meet at the point $(2, 3)$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G6-parallel-lines",
      name: String.raw`Parallel lines`,
      tests: String.raw`Using equal gradients to find the equation of a line parallel to a given line, to find an unknown constant, or to decide whether two lines are parallel.`,
      questions: [
        {
          stem: String.raw`The line $l$ has equation $2y = 5x - 3$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the equation of the line which is parallel to $l$ and passes through the point $(4, -1)$.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain why the line $5x - 2y = 7$ does not meet $l$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The lines $y = (k - 1)x + 4$ and $3x - 2y = 6$ are parallel.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $k$.`, marks: 2 },
            { label: "(b)", text: String.raw`The point $R$ has coordinates $(4, 6)$. Determine whether the line joining the origin $O$ to $R$ is parallel to $3x - 2y = 6$. Give a reason.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G6-intersection-area",
      name: String.raw`Intersection of lines and areas of triangles`,
      tests: String.raw`Solving two linear equations simultaneously to find where lines meet, finding axis intercepts, then using them as vertices of a triangle to find its area.`,
      questions: [
        {
          stem: String.raw`The diagram shows the lines $y = 2x - 3$ and $x + 2y = 14$. The lines meet at $P$, and they cross the $x$-axis at $A$ and $B$ respectively.`,
          figure: {
            type: "plot",
            x: [-1.6, 16], y: [-3.6, 8.6], equal: true,
            curves: [
              { fn: "x => 2*x - 3", domain: [0.2, 5.6] },
              { fn: "x => -0.5*x + 7", domain: [-1, 15.6], tone: "good", label: "x + 2y = 14", labelAt: 9.6 },
            ],
            points: [
              { x: 4, y: 5, label: "P", pos: "nw", style: "italic" },
              { x: 1.5, y: 0, label: "A", pos: "se", style: "italic" },
              { x: 14, y: 0, label: "B", pos: "s", style: "italic" },
            ],
            labels: [{ x: 4.9, y: 6.5, text: "y = 2x − 3", pos: "e", style: "italic", tone: "accent" }],
            caption: "Not drawn to scale",
            alt: "Two lines on coordinate axes. The line y = 2x − 3 rises and crosses the x-axis at A; the line x + 2y = 14 falls and crosses the x-axis at B. They meet at P above the x-axis.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of $P$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the coordinates of $A$ and of $B$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $APB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G6-geometric-problems",
      name: String.raw`Geometric problems: right-angled triangles and parallelograms`,
      tests: String.raw`Combining lengths, gradients and equations to prove properties of shapes on coordinate axes — right-angled or isosceles triangles via lengths, parallelograms via equal gradients — and finding missing vertices and areas.`,
      questions: [
        {
          stem: String.raw`The points $P(-1, 2)$, $Q(5, 4)$ and $R(3, 10)$ are the vertices of a triangle.`,
          figure: {
            type: "plot",
            x: [-2.4, 7.2], y: [-0.8, 11.4], equal: true, ticks: true,
            polygons: [{ points: [[-1, 2], [5, 4], [3, 10]], fill: true, tone: "accent" }],
            points: [
              { x: -1, y: 2, label: "P(−1, 2)", pos: "w" },
              { x: 5, y: 4, label: "Q(5, 4)", pos: "e" },
              { x: 3, y: 10, label: "R(3, 10)", pos: "e" },
            ],
            alt: "Triangle with vertices P(−1, 2), Q(5, 4) and R(3, 10) on a coordinate grid.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $PQ = QR$.`, marks: 2 },
            { label: "(b)", text: String.raw`Show that triangle $PQR$ is right-angled, and state which angle is the right angle.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $PQR$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`$ABCD$ is a parallelogram. $A$, $B$ and $C$ have coordinates $(1, 1)$, $(7, 3)$ and $(8, 7)$ respectively.`,
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of $AB$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the coordinates of $D$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the equation of the line $DC$.`, marks: 2 },
            { label: "(d)", text: String.raw`The line $DC$ meets the $y$-axis at $E$. Find the coordinates of $E$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G6-real-world-linear",
      name: String.raw`Interpreting a straight-line graph in context`,
      tests: String.raw`Reading the gradient as a rate and the $y$-intercept as a fixed amount in a real situation (costs, charges, tank levels), writing the equation, and comparing with another linear model.`,
      questions: [
        {
          stem: String.raw`The graph shows the cost, $\$C$, of hiring a hall for $h$ hours from Company A. The graph is a straight line passing through $(0, 150)$ and $(5, 350)$.`,
          figure: {
            type: "plot",
            x: [-0.8, 9.2], y: [-40, 520], height: 240,
            axisLabels: ["h", "C"],
            curves: [{ fn: "x => 40*x + 150", domain: [0, 8.5] }],
            segments: [
              { from: [5, 0], to: [5, 350], dashed: true, thin: true, tone: "muted" },
              { from: [0, 350], to: [5, 350], dashed: true, thin: true, tone: "muted" },
            ],
            points: [{ x: 0, y: 150 }, { x: 5, y: 350 }],
            xTicks: [1, 2, 3, 4, 5, 6, 7, 8].map((k) => ({ x: k, label: String(k) })),
            yTicks: [100, 200, 300, 400, 500].map((k) => ({ y: k, label: String(k) })),
            alt: "Graph of cost C dollars against hours h for Company A: a straight line starting at C = 150 when h = 0 and passing through (5, 350).",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of the line, and explain what it represents.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain what the value 150 represents.`, marks: 1 },
            { label: "(c)", text: String.raw`Write down the equation of the line in the form $C = mh + c$.`, marks: 1 },
            { label: "(d)", text: String.raw`Company B charges $\$60$ per hour with no fixed fee. Find the number of hours for which both companies charge the same amount, and state which company is cheaper for a 10-hour event.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
