H2.addTopic({
  id: "N6",
  title: "Functions and Graphs",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Linear and quadratic graphs, power and exponential graphs, gradients and tangents, and using graphs to solve equations.`,
  syllabus: {
    include: [
      String.raw`Cartesian coordinates in two dimensions`,
      String.raw`graph of a set of ordered pairs as a representation of a relationship between two variables`,
      String.raw`linear functions ($y = ax + b$) and quadratic functions ($y = ax^2 + bx + c$)`,
      String.raw`graphs of linear functions`,
      String.raw`the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)`,
      String.raw`graphs of quadratic functions and their properties: positive or negative coefficient of $x^2$; maximum and minimum points; symmetry`,
      String.raw`sketching the graphs of quadratic functions given in the form $y = (x - p)^2 + q$, $y = -(x - p)^2 + q$, $y = (x - a)(x - b)$ and $y = -(x - a)(x - b)$`,
      String.raw`graphs of power functions of the form $y = ax^n$, where $n = -2, -1, 0, 1, 2, 3$, and simple sums of not more than three of these`,
      String.raw`graphs of exponential functions $y = ka^x$, where $a$ is a positive integer`,
      String.raw`estimation of the gradient of a curve by drawing a tangent`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Drawing a graph from a table of values`,
      body: String.raw`- Work out any missing values in the table carefully. Use the calculator, and put negative $x$ in brackets: for $x = -2$, $2x^2 = 2(-2)^2 = 8$.
- Use the scale given in the question, and label both axes.
- Plot each point accurately with a small cross. A wrong point costs a mark.
- Join the points with a **smooth curve** drawn freehand. Do not join points with a ruler, unless the graph is a straight line.
- Near a turning point the curve is rounded, not pointed. It may go a little beyond the lowest (or highest) plotted point.
- To read a value off the graph, draw a dashed line from the axis to the curve and across (or down) to the other axis. Show these lines on your graph.`,
    },
    {
      title: String.raw`Linear graphs and gradient`,
      body: String.raw`The graph of $y = ax + b$ is a straight line with **gradient** $a$ and **$y$-intercept** $b$ (also written $y = mx + c$).
$$\text{gradient} = \frac{\text{vertical change}}{\text{horizontal change}} = \frac{\text{rise}}{\text{run}}$$
- A line sloping up from left to right has a positive gradient. A line sloping down has a negative gradient.
- $y = k$ is a horizontal line (gradient 0). $x = k$ is a vertical line (gradient undefined).
- Parallel lines have the same gradient.
- To draw a line, find 3 points from a table of values. The third point is a check.
- In a real-world graph, the gradient is a **rate** (e.g. dollars per hour) and the $y$-intercept is the starting value (e.g. a fixed charge).`,
      figure: [
        {
          type: "plot",
          x: [-1.5, 3.8], y: [-1.5, 6.5], height: 240,
          curves: [{ fn: "x => 2*x + 1", domain: [-1.2, 2.6] }],
          labels: [{ x: 1.2, y: 4.6, text: "y = 2x + 1", pos: "w", style: "italic", tone: "accent" }],
          segments: [
            { from: [0.5, 2], to: [2.5, 2], dashed: true, thin: true, tone: "good", label: "run = 2", pos: "s", style: "small" },
            { from: [2.5, 2], to: [2.5, 6], dashed: true, thin: true, tone: "warn", label: "rise = 4", pos: "e", style: "small" },
          ],
          points: [{ x: 0, y: 1, label: "(0, 1)", pos: "w" }],
          caption: String.raw`Gradient $= \frac{4}{2} = 2$.`,
          alt: "The line y = 2x + 1 crossing the y-axis at (0, 1). A right-angled triangle under the line shows a run of 2 and a rise of 4.",
        },
        {
          type: "plot",
          x: [-1.5, 5.3], y: [-1.5, 6.5], height: 240,
          curves: [{ fn: "x => 4 - 0.75*x", domain: [-1.2, 5.3], label: "y = 4 − ¾x", labelAt: 2.6 }],
          segments: [
            { from: [0, 4], to: [4, 4], dashed: true, thin: true, tone: "good", label: "run = 4", pos: "n", style: "small" },
            { from: [4, 4], to: [4, 1], dashed: true, thin: true, tone: "warn", label: "fall = 3", pos: "e", style: "small" },
          ],
          points: [{ x: 0, y: 4, label: "(0, 4)", pos: "sw" }],
          caption: String.raw`Gradient $= \frac{-3}{4} = -\frac{3}{4}$.`,
          alt: "The line y = 4 − ¾x sloping downwards from (0, 4). A triangle shows a run of 4 and a fall of 3, so the gradient is negative.",
        },
      ],
    },
    {
      title: String.raw`Quadratic graphs: shape, turning point and symmetry`,
      body: String.raw`The graph of $y = ax^2 + bx + c$ is a **parabola**.
- $a > 0$: U-shaped, with a **minimum** point. $a < 0$: $\cap$-shaped, with a **maximum** point.
- The $y$-intercept is $c$ (put $x = 0$).
- The graph is **symmetrical** about a vertical line through the turning point. The line of symmetry is halfway between the two $x$-intercepts (if there are any), and halfway between any two points at the same height.
- In a table of values, symmetry shows up as equal $y$-values. Use it to check your table and to find the turning point.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 4.6], y: [-5, 5.6], height: 250,
          lines: [{ x: 1, label: "x = 1" }],
          curves: [{ fn: "x => x*x - 2*x - 3", label: "a > 0", labelAt: 3.5 }],
          points: [{ x: 1, y: -4, label: "minimum", pos: "e", style: "small" }],
          caption: String.raw`$y = x^2 - 2x - 3$`,
          alt: "U-shaped parabola y = x² − 2x − 3 with its minimum point at (1, −4) on the dashed line of symmetry x = 1.",
        },
        {
          type: "plot",
          x: [-2.6, 4.6], y: [-5, 5.6], height: 250,
          lines: [{ x: 1, label: "x = 1" }],
          curves: [{ fn: "x => -x*x + 2*x + 3", label: "a < 0", labelAt: 3.3 }],
          points: [{ x: 1, y: 4, label: "maximum", pos: "e", style: "small" }],
          caption: String.raw`$y = -x^2 + 2x + 3$`,
          alt: "Cap-shaped parabola y = −x² + 2x + 3 with its maximum point at (1, 4) on the dashed line of symmetry x = 1.",
        },
      ],
    },
    {
      title: String.raw`Sketching $y = \pm(x - p)^2 + q$`,
      body: String.raw`- $y = (x - p)^2 + q$ has a **minimum** point $(p, q)$, since $(x - p)^2 \ge 0$ and is 0 only when $x = p$.
- $y = -(x - p)^2 + q$ has a **maximum** point $(p, q)$.
- The line of symmetry is $x = p$.
- Watch the sign: $y = (x + 3)^2 - 5$ has turning point $(-3, -5)$.

To get this form from $y = x^2 + bx + c$, **complete the square**: $x^2 - 4x + 7 = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3$.

A sketch must show the shape, the turning point, and where the curve cuts the axes (put $x = 0$ for the $y$-intercept and $y = 0$ for the $x$-intercepts). It does not need graph paper or a scale.`,
      figure: {
        type: "plot",
        x: [-1.4, 5.2], y: [-0.9, 6.2], height: 240,
        lines: [{ x: 2, label: "x = p" }],
        curves: [{ fn: "x => (x - 2)*(x - 2) + 1", label: "y = (x − p)² + q", labelAt: 3.65 }],
        segments: [{ from: [2, 1], to: [0, 1], dashed: true, thin: true, tone: "muted" }],
        xTicks: [{ x: 2, label: "p" }],
        yTicks: [{ y: 1, label: "q" }],
        points: [{ x: 2, y: 1, label: "(p, q)", pos: "se" }],
        caption: String.raw`The minimum point is $(p, q)$. For $y = -(x - p)^2 + q$ the curve is turned upside down and $(p, q)$ is a maximum.`,
        alt: "A U-shaped parabola with its minimum point (p, q) marked. The dashed line x = p is the line of symmetry, and q is marked on the y-axis.",
      },
    },
    {
      title: String.raw`Sketching $y = \pm(x - a)(x - b)$`,
      body: String.raw`- The curve cuts the $x$-axis at $x = a$ and $x = b$ (where $y = 0$).
- The line of symmetry is halfway between: $x = \dfrac{a + b}{2}$. Substitute this into the equation to find the turning point.
- $y = (x - a)(x - b)$ is U-shaped (minimum); $y = -(x - a)(x - b)$ is $\cap$-shaped (maximum).
- The $y$-intercept is found by putting $x = 0$: for $y = (x - a)(x - b)$ it is $ab$.
- Watch the signs: $y = (x + 1)(x - 3)$ cuts the $x$-axis at $x = -1$ and $x = 3$.`,
      figure: {
        type: "plot",
        x: [-2.4, 4.6], y: [-1.6, 5.4], height: 240,
        lines: [{ x: 1, label: "x = (a + b) / 2" }],
        curves: [{ fn: "x => -(x + 1)*(x - 3)" }],
        labels: [{ x: 2.35, y: 3.3, text: "y = −(x − a)(x − b)", pos: "e", style: "italic", tone: "accent" }],
        xTicks: [{ x: -1, label: "a" }, { x: 3, label: "b" }],
        points: [{ x: -1, y: 0 }, { x: 3, y: 0 }, { x: 1, y: 4, label: "maximum", pos: "e", style: "small" }],
        caption: String.raw`The turning point lies on the line of symmetry, halfway between the $x$-intercepts $a$ and $b$.`,
        alt: "A cap-shaped parabola cutting the x-axis at a and b, with its maximum point on the dashed line of symmetry halfway between them.",
      },
    },
    {
      title: String.raw`Graphs of power functions $y = ax^n$`,
      body: String.raw`| $n$ | Graph of $y = ax^n$ (for $a > 0$) |
| $0$ | horizontal line $y = a$ |
| $1$ | straight line through the origin |
| $2$ | U-shaped parabola, vertex at $O$ |
| $3$ | cubic: through $O$, rises from bottom-left to top-right |
| $-1$ | $y = \frac{a}{x}$: two branches (1st and 3rd quadrants) |
| $-2$ | $y = \frac{a}{x^2}$: two branches, both above the $x$-axis |

- If $a < 0$ the graph is reflected in the $x$-axis.
- For $n = -1$ and $n = -2$ there is no point at $x = 0$. The curve gets close to both axes but never touches them.
- For sums such as $y = x^2 + \frac{12}{x}$, draw the graph from a table of values. Never draw across $x = 0$ where a term like $\frac{12}{x}$ is undefined.`,
      figure: [
        {
          type: "plot",
          x: [-2.2, 2.2], y: [-4.5, 4.5], height: 200,
          curves: [{ fn: "x => x*x*x/2" }],
          caption: String.raw`$n = 3$: $y = \frac{1}{2}x^3$`,
          alt: "Cubic curve y = ½x³ passing through the origin, rising from bottom left to top right with a flat point at O.",
        },
        {
          type: "plot",
          x: [-3.2, 3.2], y: [-3.2, 3.2], height: 200,
          curves: [{ fn: "x => 1/x", domain: [-3.2, -0.05] }, { fn: "x => 1/x", domain: [0.05, 3.2] }],
          caption: String.raw`$n = -1$: $y = \frac{1}{x}$`,
          alt: "Reciprocal graph y = 1/x with one branch in the first quadrant and one in the third, approaching both axes.",
        },
        {
          type: "plot",
          x: [-3.2, 3.2], y: [-1, 5.4], height: 200,
          curves: [{ fn: "x => 1/(x*x)", domain: [-3.2, -0.05] }, { fn: "x => 1/(x*x)", domain: [0.05, 3.2] }],
          caption: String.raw`$n = -2$: $y = \frac{1}{x^2}$`,
          alt: "Graph of y = 1/x² with two branches, both above the x-axis, symmetrical about the y-axis and approaching both axes.",
        },
      ],
    },
    {
      title: String.raw`Exponential graphs $y = ka^x$`,
      body: String.raw`For $k > 0$ and a positive integer $a > 1$:
- The $y$-intercept is $k$, since $a^0 = 1$.
- $y$ is always positive. As $x$ decreases, $y$ gets closer and closer to 0, but the curve never touches the $x$-axis.
- As $x$ increases, $y$ increases faster and faster. It is multiplied by $a$ for every increase of 1 in $x$.
- To find $k$ and $a$ from two points on the graph, use the $y$-intercept for $k$ first, then substitute the other point.
- Exponential graphs model growth, e.g. a population that doubles every hour: $N = N_0 \times 2^t$.`,
      figure: {
        type: "plot",
        x: [-3.2, 2.0], y: [-0.8, 9.5], height: 240,
        curves: [
          { fn: "x => Math.pow(4, x)", label: "y = 4ˣ", labelAt: 1.45 },
          { fn: "x => 2*Math.pow(4, x)", tone: "good" },
        ],
        labels: [{ x: -0.12, y: 5.6, text: "y = 2(4ˣ)", pos: "w", style: "italic", tone: "good" }],
        points: [{ x: 0, y: 1, label: "(0, 1)", pos: "e" }, { x: 0, y: 2, label: "(0, 2)", pos: "nw" }],
        caption: String.raw`Both curves stay above the $x$-axis. $k$ is the $y$-intercept.`,
        alt: "Graphs of y = 4 to the power x through (0, 1) and y = 2 times 4 to the power x through (0, 2). Both rise steeply to the right and flatten towards the x-axis on the left without touching it.",
      },
    },
    {
      title: String.raw`Gradient of a curve: drawing a tangent`,
      body: String.raw`The gradient of a curve at a point is the gradient of the **tangent** at that point.
1. Place the ruler so that it touches the curve at the point only, and the angles between the ruler and the curve look equal on both sides.
2. Draw a long tangent.
3. Pick two points far apart on the tangent (not on the curve) and draw a large right-angled triangle.
4. Gradient $= \dfrac{\text{rise}}{\text{run}}$, using the scales on the axes, not by counting squares. Give the sign.

The answer is an estimate, so a range of answers is accepted. A bigger triangle gives a more accurate answer. In real-world graphs the gradient is a rate of change, e.g. the gradient of a distance–time graph is the speed.`,
      figure: {
        type: "plot",
        x: [-0.6, 4.4], y: [-0.6, 8.6], height: 260,
        curves: [{ fn: "x => 0.5*x*x + 1", domain: [-0.6, 3.6] }],
        segments: [
          { from: [0.6, 0.2], to: [3.7, 6.4], tone: "warn", label: "tangent", pos: "e", style: "small", labelAt: [3.75, 6.5] },
          { from: [1, 1], to: [3.5, 1], dashed: true, thin: true, tone: "good", label: "run", pos: "s", style: "small" },
          { from: [3.5, 1], to: [3.5, 6], dashed: true, thin: true, tone: "good", label: "rise", pos: "e", style: "small" },
        ],
        points: [{ x: 2, y: 3, label: "P", pos: "nw" }],
        caption: String.raw`The tangent at $P$ touches the curve once. Gradient at $P$ $\approx \frac{\text{rise}}{\text{run}}$.`,
        alt: "A curve with a straight tangent line touching it at point P. A large right-angled triangle drawn on the tangent shows the run and the rise used to calculate the gradient.",
      },
    },
    {
      title: String.raw`Using a graph to solve equations`,
      body: String.raw`The solutions of $\mathrm{f}(x) = 0$ are the $x$-coordinates where $y = \mathrm{f}(x)$ cuts the $x$-axis. The solutions of $\mathrm{f}(x) = k$ are where it meets the line $y = k$.

To solve a new equation using a graph you already have:
1. Rearrange the new equation so that one side is exactly the expression you have drawn.
2. The other side is the straight line to draw.
3. Read off the $x$-coordinates of the points of intersection.

Example: you have drawn $y = x^2 - 2x - 3$. To solve $x^2 - 3x - 4 = 0$, write it as $x^2 - 2x - 3 = x + 1$, so draw $y = x + 1$.

Give the equation of the line you drew, and only give solutions inside the range of $x$ in your graph.`,
      figure: {
        type: "plot",
        x: [-2.4, 5.4], y: [-5, 7.2], height: 260,
        curves: [{ fn: "x => x*x - 2*x - 3", domain: [-2.2, 5.1] }],
        labels: [{ x: 2.9, y: -3, text: "y = x² − 2x − 3", pos: "e", style: "italic", tone: "accent" }],
        segments: [
          { from: [-2.4, -1.4], to: [5.4, 6.4], tone: "good", label: "y = x + 1", pos: "e", style: "italic", labelAt: [1.8, 2.8] },
          { from: [4, 5], to: [4, 0], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: -1, y: 0 }, { x: 4, y: 5 }],
        xTicks: [{ x: 4, label: "4" }],
        caption: String.raw`$x^2 - 2x - 3 = x + 1$ gives $x = -1$ or $x = 4$: the $x$-coordinates of the intersections.`,
        alt: "The parabola y = x² − 2x − 3 and the straight line y = x + 1 meeting at two points, at x = −1 and x = 4. A dashed line drops from the right-hand intersection to the x-axis.",
      },
    },
  ],
  archetypes: [
    {
      id: "N6-linear-gradient",
      name: String.raw`Gradient and equation of a linear graph`,
      tests: String.raw`Finding the gradient as rise over run (with the correct sign) and the $y$-intercept from a graph or two points, and writing the equation $y = ax + b$.`,
      questions: [
        {
          stem: String.raw`The diagram shows two straight lines, $l_1$ and $l_2$.`,
          figure: {
            type: "plot",
            x: [-1.5, 7.5], y: [-5.5, 6.5], height: 300,
            segments: [
              ...[-1, 1, 2, 3, 4, 5, 6, 7].map((v) => ({ from: [v, -5.5], to: [v, 6.5], thin: true, tone: "muted" })),
              ...[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((v) => ({ from: [-1.5, v], to: [7.5, v], thin: true, tone: "muted" })),
            ],
            curves: [
              { fn: "x => 4 - 2*x/3" },
              { fn: "x => 2*x - 4", domain: [-0.6, 5.2], tone: "good" },
            ],
            labels: [
              { x: 1, y: 3.95, text: "l₁", style: "italic", tone: "accent" },
              { x: 4.6, y: 4.2, text: "l₂", pos: "e", style: "italic", tone: "good" },
            ],
            xTicks: [1, 2, 3, 4, 5, 6, 7].map((v) => ({ x: v, label: String(v) })),
            yTicks: [-4, -2, 2, 4, 6].map((v) => ({ y: v, label: String(v) })),
            originLabel: false,
            alt: "Grid with two straight lines. Line l₁ slopes downwards, passing through (0, 4) and (6, 0). Line l₂ slopes upwards, passing through (0, −4) and (2, 0). The lines cross.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of $l_1$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the equation of $l_1$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the equation of $l_2$.`, marks: 2 },
            { label: "(d)", text: String.raw`Use the graph to write down the solution of the simultaneous equations
$$2x + 3y = 12, \qquad y = 2x - 4.$$`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The points $A(-1, 7)$ and $B(3, -1)$ lie on the line $y = ax + b$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the gradient of the line $AB$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $a$ and the value of $b$.`, marks: 2 },
            { label: "(c)", text: String.raw`Determine whether the point $(6, -8)$ lies on the line. Show your working.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N6-real-world-linear",
      name: String.raw`Real-world linear graphs`,
      tests: String.raw`Reading a graph in context: interpreting the gradient as a rate and the intercept as a fixed charge, comparing two plans, and finding where they are equal.`,
      questions: [
        {
          stem: String.raw`The graph shows the cost, $\$C$, of renting a karaoke room for $h$ hours under two price plans, Plan A and Plan B.`,
          figure: {
            type: "plot",
            x: [-0.5, 8.6], y: [-5, 78], height: 300,
            axisLabels: ["h", "C"],
            segments: [
              ...[1, 2, 3, 4, 5, 6, 7, 8].map((v) => ({ from: [v, 0], to: [v, 75], thin: true, tone: "muted" })),
              ...[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75].map((v) => ({ from: [0, v], to: [8.4, v], thin: true, tone: "muted" })),
            ],
            curves: [
              { fn: "x => 20 + 5*x", domain: [0, 8] },
              { fn: "x => 9*x", domain: [0, 8], tone: "good" },
            ],
            labels: [
              { x: 7.2, y: 48, text: "Plan A", pos: "e", style: "small", tone: "accent" },
              { x: 5.8, y: 62.5, text: "Plan B", pos: "w", style: "small", tone: "good" },
            ],
            xTicks: [1, 2, 3, 4, 5, 6, 7, 8].map((v) => ({ x: v, label: String(v) })),
            yTicks: [10, 20, 30, 40, 50, 60, 70].map((v) => ({ y: v, label: String(v) })),
            alt: "Grid showing cost C dollars against hours h from 0 to 8. Plan A is a straight line starting at (0, 20) and rising to (8, 60). Plan B is a steeper straight line starting at the origin and rising to (8, 72). The lines cross.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the fixed charge for Plan A.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the gradient of the line for Plan A and explain what it represents.`, marks: 2 },
            { label: "(c)", text: String.raw`Write down an equation connecting $C$ and $h$ for Plan B.`, marks: 1 },
            { label: "(d)", text: String.raw`Use the graph to find the number of hours for which both plans cost the same.`, marks: 1 },
            { label: "(e)", text: String.raw`Mei wants to rent a room for 7 hours. Which plan should she choose? Find how much she saves.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-quadratic-completed-square",
      name: String.raw`Sketching $y = \pm(x - p)^2 + q$`,
      tests: String.raw`Completing the square or using the given form to state the turning point and line of symmetry, finding the axis intercepts, and sketching the parabola.`,
      questions: [
        {
          stem: String.raw`It is given that $y = x^2 - 6x + 5$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $x^2 - 6x + 5$ in the form $(x - p)^2 + q$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence write down the coordinates of the turning point of the graph of $y = x^2 - 6x + 5$, and state whether it is a maximum or a minimum point.`, marks: 2 },
            { label: "(c)", text: String.raw`Sketch the graph of $y = x^2 - 6x + 5$, indicating the coordinates of the turning point and the points where the graph meets the axes.`, marks: 3 },
            { label: "(d)", text: String.raw`Write down the equation of the line of symmetry of the graph.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The equation of a curve is $y = -(x + 1)^2 + 9$.`,
          parts: [
            { label: "(a)", text: String.raw`Write down the coordinates of the maximum point of the curve.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the coordinates of the points where the curve meets the $x$-axis.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the $y$-intercept of the curve.`, marks: 1 },
            { label: "(d)", text: String.raw`Sketch the curve, showing the points found in parts (a), (b) and (c).`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-quadratic-factorised",
      name: String.raw`Sketching $y = \pm(x - a)(x - b)$`,
      tests: String.raw`Reading the $x$-intercepts from the factorised form, using symmetry to find the turning point, and linking a given graph back to its equation.`,
      questions: [
        {
          stem: String.raw`The equation of a curve is $y = -(x - 1)(x - 7)$.`,
          parts: [
            { label: "(a)", text: String.raw`Write down the coordinates of the points where the curve meets the $x$-axis.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the equation of the line of symmetry of the curve.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the coordinates of the maximum point.`, marks: 2 },
            { label: "(d)", text: String.raw`Sketch the curve, showing the points found in parts (a) and (c) and the $y$-intercept.`, marks: 2 },
            { label: "(e)", text: String.raw`Write down the range of values of $k$ for which the line $y = k$ does not meet the curve.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = (x - a)(x - b)$, where $a < b$. The graph passes through the points $(-1, 0)$, $(5, 0)$ and $(0, -5)$.`,
          figure: {
            type: "plot",
            x: [-2.6, 6.6], y: [-10.5, 7.5], height: 250,
            curves: [{ fn: "x => (x + 1)*(x - 5)", domain: [-2.3, 6.3] }],
            points: [
              { x: -1, y: 0, label: "(−1, 0)", pos: "nw" },
              { x: 5, y: 0, label: "(5, 0)", pos: "ne" },
              { x: 0, y: -5, label: "(0, −5)", pos: "w" },
            ],
            originLabel: "ne",
            alt: "A U-shaped parabola crossing the x-axis at (−1, 0) and (5, 0) and the y-axis at (0, −5). Its minimum point is below the x-axis and is not labelled.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the value of $a$ and the value of $b$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the coordinates of the minimum point of the graph.`, marks: 2 },
            { label: "(c)", text: String.raw`Write down the least value of $y$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N6-identify-graphs",
      name: String.raw`Recognising and sketching power and exponential graphs`,
      tests: String.raw`Matching equations of the form $y = ax^n$ ($n = -2, -1, 0, 1, 2, 3$) and $y = ka^x$ to their graphs, and sketching them with key features (intercepts, behaviour near the axes).`,
      questions: [
        {
          stem: String.raw`The diagrams show the graphs A, B, C and D. Each graph has one of the following equations.
$$y = x^3 \qquad y = -x^3 \qquad y = \frac{2}{x} \qquad y = -\frac{2}{x} \qquad y = \frac{2}{x^2} \qquad y = 2^x$$

Write down the equation of each graph.`,
          figure: [
            {
              type: "plot",
              x: [-3.2, 3.2], y: [-3.2, 3.2], height: 170,
              curves: [{ fn: "x => -2/x", domain: [-3.2, -0.05] }, { fn: "x => -2/x", domain: [0.05, 3.2] }],
              caption: "A",
              alt: "Graph A: two branches, one in the second quadrant and one in the fourth quadrant, approaching both axes.",
            },
            {
              type: "plot",
              x: [-3.2, 3.2], y: [-1, 5.4], height: 170,
              curves: [{ fn: "x => 2/(x*x)", domain: [-3.2, -0.05] }, { fn: "x => 2/(x*x)", domain: [0.05, 3.2] }],
              caption: "B",
              alt: "Graph B: two branches, both above the x-axis and symmetrical about the y-axis, approaching both axes.",
            },
            {
              type: "plot",
              x: [-3.2, 2.6], y: [-1, 5.4], height: 170,
              curves: [{ fn: "x => Math.pow(2, x)" }],
              caption: "C",
              alt: "Graph C: a curve above the x-axis that crosses the y-axis, rising steeply to the right and flattening towards the x-axis on the left.",
            },
            {
              type: "plot",
              x: [-2.2, 2.2], y: [-4.5, 4.5], height: 170,
              curves: [{ fn: "x => -x*x*x" }],
              caption: "D",
              alt: "Graph D: a cubic curve through the origin, falling from top left to bottom right with a flat point at O.",
            },
          ],
          marks: 4,
        },
        {
          stem: String.raw`On separate diagrams, sketch the graphs of`,
          parts: [
            { label: "(a)", text: String.raw`$y = 3^x$,`, marks: 2 },
            { label: "(b)", text: String.raw`$y = -\dfrac{4}{x}$,`, marks: 1 },
            { label: "(c)", text: String.raw`$y = 2x^2 - 3$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-plot-and-use-graph",
      name: String.raw`Plotting a graph and using it to solve equations`,
      tests: String.raw`The classic Paper 2 graph question: complete a table, draw the curve to a given scale, read off solutions, estimate a gradient with a tangent, and draw a suitable straight line to solve a related equation.`,
      questions: [
        {
          stem: String.raw`The table shows some corresponding values of $x$ and $y$ for $y = 2x^2 - 3x - 4$.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
| $y$ | $10$ | $p$ | $-4$ | $-5$ | $q$ | $5$ |`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $p$ and the value of $q$.`, marks: 2 },
            { label: "(b)", text: String.raw`Using a scale of 2 cm to represent 1 unit on the $x$-axis and 1 cm to represent 1 unit on the $y$-axis, draw the graph of $y = 2x^2 - 3x - 4$ for $-2 \le x \le 3$.`, marks: 3 },
            { label: "(c)", text: String.raw`Use your graph to solve the equation $2x^2 - 3x - 4 = 0$.`, marks: 2 },
            { label: "(d)", text: String.raw`By drawing a tangent, find the gradient of the curve at the point where $x = 2$.`, marks: 2 },
            { label: "(e)", text: String.raw`By drawing a suitable straight line on your graph, solve the equation $2x^2 - 5x - 2 = 0$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = x^2 + \dfrac{16}{x}$ for $1 \le x \le 5$.`,
          figure: {
            type: "plot",
            x: [-0.3, 5.5], y: [-1.5, 31], height: 340,
            segments: [
              ...[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => ({ from: [v, 0], to: [v, 30], thin: true, tone: "muted" })),
              ...[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].map((v) => ({ from: [0, v], to: [5.2, v], thin: true, tone: "muted" })),
            ],
            curves: [{ fn: "x => x*x + 16/x", domain: [1, 5] }],
            labels: [{ x: 3.9, y: 13, text: "y = x² + 16/x", pos: "e", style: "italic", tone: "accent" }],
            xTicks: [1, 2, 3, 4, 5].map((v) => ({ x: v, label: String(v) })),
            yTicks: [4, 8, 12, 16, 20, 24, 28].map((v) => ({ y: v, label: String(v) })),
            alt: "Graph on a grid of y = x² + 16/x for x from 1 to 5. The curve starts at (1, 17), falls to a minimum of about (2, 12), then rises to about (5, 28.2).",
          },
          parts: [
            { label: "(a)", text: String.raw`Use the graph to find the least value of $y$ for $1 \le x \le 5$.`, marks: 1 },
            { label: "(b)", text: String.raw`Use the graph to solve the equation $x^2 + \dfrac{16}{x} = 15$.`, marks: 2 },
            { label: "(c)", text: String.raw`By drawing a tangent, estimate the gradient of the curve at the point where $x = 4$.`, marks: 2 },
            { label: "(d)", text: String.raw`By drawing a suitable straight line on the graph, solve the equation $x^3 - 2x^2 - 10x + 16 = 0$ for $1 \le x \le 5$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N6-exponential",
      name: String.raw`Exponential graphs and growth`,
      tests: String.raw`Finding $k$ and $a$ in $y = ka^x$ from points on the graph, and drawing and using an exponential growth graph in context (reading values, rate of increase from a tangent).`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = ka^x$, where $k$ and $a$ are constants. The graph passes through the points $(0, 3)$ and $(2, 12)$.`,
          figure: {
            type: "plot",
            x: [-2.6, 3.2], y: [-1, 15.5], height: 250,
            curves: [{ fn: "x => 3*Math.pow(2, x)", domain: [-2.6, 2.3] }],
            labels: [{ x: 1.4, y: 6, text: "y = kaˣ", pos: "e", style: "italic", tone: "accent" }],
            points: [{ x: 0, y: 3, label: "(0, 3)", pos: "w" }, { x: 2, y: 12, label: "(2, 12)", pos: "e" }],
            alt: "An exponential curve that stays above the x-axis, rising steeply to the right. It passes through (0, 3) and (2, 12).",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $k$ and the value of $a$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the value of $y$ when $x = -1$.`, marks: 1 },
            { label: "(c)", text: String.raw`Describe what happens to $y$ as $x$ decreases.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The number of bacteria, $N$, in a culture $t$ hours after the start of an experiment is given by $N = 400 \times 2^t$. Some corresponding values of $t$ and $N$ are shown in the table.

| $t$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| $N$ | $400$ | $800$ | $m$ | $3200$ | $n$ |`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $m$ and the value of $n$.`, marks: 1 },
            { label: "(b)", text: String.raw`Using a scale of 4 cm to represent 1 hour on the horizontal axis and 2 cm to represent 1000 bacteria on the vertical axis, draw the graph of $N = 400 \times 2^t$ for $0 \le t \le 4$.`, marks: 3 },
            { label: "(c)", text: String.raw`Use your graph to estimate the time taken for the number of bacteria to reach 2000.`, marks: 1 },
            { label: "(d)", text: String.raw`By drawing a tangent, estimate the rate at which the number of bacteria is increasing when $t = 3$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-real-world-curve",
      name: String.raw`Real-world curves: reading values and rates`,
      tests: String.raw`Interpreting a given curve in context: reading maximum values and times, solving using a horizontal line, and estimating a rate of change (e.g. speed) from a tangent, with units.`,
      questions: [
        {
          stem: String.raw`A ball is thrown upwards from the top of a platform. Its height, $h$ metres, above the ground $t$ seconds later is given by $h = 2 + 20t - 5t^2$. The diagram shows the graph of $h$ against $t$ until the ball hits the ground.`,
          figure: {
            type: "plot",
            x: [-0.25, 4.6], y: [-1.2, 25], height: 300,
            axisLabels: ["t", "h"],
            segments: [
              ...[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5].map((v) => ({ from: [v, 0], to: [v, 24], thin: true, tone: "muted" })),
              ...[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].map((v) => ({ from: [0, v], to: [4.5, v], thin: true, tone: "muted" })),
            ],
            curves: [{ fn: "x => 2 + 20*x - 5*x*x", domain: [0, 4.0976] }],
            xTicks: [1, 2, 3, 4].map((v) => ({ x: v, label: String(v) })),
            yTicks: [4, 8, 12, 16, 20, 24].map((v) => ({ y: v, label: String(v) })),
            alt: "Grid showing height h metres against time t seconds. The curve starts at a height of 2 m when t = 0, rises to a maximum of 22 m at t = 2, then falls to the ground just after t = 4.",
          },
          parts: [
            { label: "(a)", text: String.raw`Use the graph to find the greatest height of the ball and the time at which it occurs.`, marks: 2 },
            { label: "(b)", text: String.raw`Use the graph to find the times at which the ball is 12 m above the ground.`, marks: 2 },
            { label: "(c)", text: String.raw`By drawing a tangent, estimate the gradient of the curve at $t = 1$. Explain what this value represents.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
