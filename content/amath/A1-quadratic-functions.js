H2.addTopic({
  id: "A1",
  title: "Quadratic Functions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Completing the square to find maximum and minimum values, sketching parabolas, conditions for a quadratic to be always positive or always negative, and quadratic models.`,
  syllabus: {
    include: [
      String.raw`Finding the maximum or minimum value of a quadratic function using the method of completing the square`,
      String.raw`Conditions for $y = ax^2 + bx + c$ to be always positive (or always negative)`,
      String.raw`Using quadratic functions as models`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Shape of the graph $y = ax^2 + bx + c$`,
      body: String.raw`The graph of a quadratic function is a **parabola**.

- $a > 0$: U-shaped, opens upwards, has a **minimum** point.
- $a < 0$: $\cap$-shaped, opens downwards, has a **maximum** point.
- The $y$-intercept is $c$ (put $x = 0$).
- The $x$-intercepts are the roots of $ax^2 + bx + c = 0$ (factorise, or use the quadratic formula, which is **(Given)**).
- The graph is symmetrical about a vertical line through the turning point. If the $x$-intercepts are $p$ and $q$, the line of symmetry is $x = \frac{p + q}{2}$.`,
      figure: [
        {
          type: "plot",
          x: [-3, 5], y: [-5, 5.5], height: 220,
          curves: [{ fn: "x => x*x - 2*x - 3" }],
          labels: [{ x: 4.1, y: 1.8, text: "a > 0", pos: "e", style: "italic", tone: "accent" }],
          lines: [{ x: 1 }],
          points: [{ x: 1, y: -4, label: "minimum", pos: "se" }, { x: -1, y: 0 }, { x: 3, y: 0 }],
          caption: String.raw`$y = x^2 - 2x - 3$: minimum point.`,
          alt: "A U-shaped parabola y = x² − 2x − 3 crossing the x-axis at −1 and 3, with its lowest point at x = 1 marked as the minimum. A dashed vertical line x = 1 is the line of symmetry.",
        },
        {
          type: "plot",
          x: [-3, 5], y: [-5.5, 5], height: 220,
          curves: [{ fn: "x => -x*x + 2*x + 3" }],
          labels: [{ x: 4.1, y: -1.8, text: "a < 0", pos: "e", style: "italic", tone: "accent" }],
          lines: [{ x: 1 }],
          points: [{ x: 1, y: 4, label: "maximum", pos: "ne" }, { x: -1, y: 0 }, { x: 3, y: 0 }],
          caption: String.raw`$y = -x^2 + 2x + 3$: maximum point.`,
          alt: "A cap-shaped parabola y = −x² + 2x + 3 crossing the x-axis at −1 and 3, with its highest point at x = 1 marked as the maximum. A dashed vertical line x = 1 is the line of symmetry.",
        },
      ],
    },
    {
      title: String.raw`Completing the square`,
      body: String.raw`Write $y = ax^2 + bx + c$ in the form
$$y = a(x - h)^2 + k.$$
The turning point is $(h, k)$ and the line of symmetry is $x = h$.

Method when $a \ne 1$:
1. Take out $a$ from the $x^2$ and $x$ terms only: $2x^2 - 12x + 19 = 2(x^2 - 6x) + 19$.
2. Inside the bracket, add and subtract (half the coefficient of $x$)$^2$: $2\left[(x - 3)^2 - 9\right] + 19$.
3. Multiply out the outer bracket: $2(x - 3)^2 - 18 + 19 = 2(x - 3)^2 + 1$.

Check by expanding your answer — it must give back the original expression.`,
      figure: {
        type: "plot",
        x: [-1, 6.5], y: [-1, 9], height: 230,
        curves: [{ fn: "x => 2*(x - 3)*(x - 3) + 1" }],
        labels: [{ x: 4.3, y: 2.6, text: "y = 2(x − 3)² + 1", pos: "e", style: "italic", tone: "accent" }],
        lines: [{ x: 3, label: "x = 3" }],
        points: [{ x: 3, y: 1, label: "(3, 1)", pos: "e" }],
        caption: String.raw`$2x^2 - 12x + 19 = 2(x - 3)^2 + 1$: turning point $(3, 1)$, line of symmetry $x = 3$.`,
        alt: "The parabola y = 2(x − 3)² + 1 with its minimum point (3, 1) labelled and the dashed line of symmetry x = 3.",
      },
    },
    {
      title: String.raw`Maximum and minimum values`,
      body: String.raw`From $y = a(x - h)^2 + k$:

- Since $(x - h)^2 \ge 0$ for all $x$, if $a > 0$ then $y \ge k$. The **minimum value** of $y$ is $k$, when $x = h$.
- If $a < 0$ then $y \le k$. The **maximum value** of $y$ is $k$, when $x = h$.

Common mistakes:
- Sign of $h$: $(x + 4)^2$ gives $h = -4$, not $4$.
- Forgetting to multiply the $-9$ by $a$ in step 3 of completing the square.
- Giving only the value of $y$ when the question also asks for the value of $x$ at which it occurs.

Related expressions: if $x^2 + 6x + 13 = (x + 3)^2 + 4 \ge 4$, then $\dfrac{1}{x^2 + 6x + 13}$ has a greatest value of $\dfrac{1}{4}$ (a smaller denominator gives a larger fraction).`,
    },
    {
      title: String.raw`Sketching a quadratic graph`,
      body: String.raw`A sketch must show the correct **shape** and label all the key features with coordinates:

- the $y$-intercept $(0, c)$;
- the $x$-intercepts, if any;
- the turning point (from completing the square).

If there are no $x$-intercepts, say so by showing the curve entirely above (or below) the $x$-axis. A sketch need not be to scale, but the turning point must sit midway between the $x$-intercepts.`,
      figure: {
        type: "plot",
        x: [-3.5, 5.5], y: [-2, 10.5], height: 250,
        curves: [{ fn: "x => -x*x + 2*x + 8" }],
        lines: [{ x: 1 }],
        points: [
          { x: 1, y: 9, label: "(1, 9)", pos: "ne" },
          { x: 0, y: 8, label: "(0, 8)", pos: "w" },
          { x: -2, y: 0, label: "(−2, 0)", pos: "nw" },
          { x: 4, y: 0, label: "(4, 0)", pos: "ne" },
        ],
        caption: String.raw`$y = -x^2 + 2x + 8 = -(x - 1)^2 + 9 = -(x + 2)(x - 4)$, with every key point labelled.`,
        alt: "Sketch of the cap-shaped parabola y = −x² + 2x + 8 with labelled points: maximum (1, 9), y-intercept (0, 8) and x-intercepts (−2, 0) and (4, 0). A dashed line x = 1 shows the symmetry.",
      },
    },
    {
      title: String.raw`Always positive or always negative`,
      body: String.raw`$ax^2 + bx + c$ is **always positive** (for all real $x$) when the graph lies entirely above the $x$-axis:
$$a > 0 \quad \text{and} \quad b^2 - 4ac < 0.$$

$ax^2 + bx + c$ is **always negative** when
$$a < 0 \quad \text{and} \quad b^2 - 4ac < 0.$$

These conditions are not on the formula sheet — memorise them. You need **both** conditions: a common mistake is to use only $b^2 - 4ac < 0$ and forget to check the sign of $a$, especially when $a$ contains the unknown $k$.

Two ways to show an expression is always positive:
- Complete the square: $2x^2 - 8x + 11 = 2(x - 2)^2 + 3$, and $2(x - 2)^2 \ge 0$, so the expression is at least $3 > 0$.
- Use the discriminant: $a = 2 > 0$ and $b^2 - 4ac = 64 - 88 < 0$.`,
      figure: [
        {
          type: "plot",
          x: [-2, 4], y: [-4.5, 4.5], height: 200,
          curves: [{ fn: "x => x*x - 2*x + 3" }],
          labels: [{ x: 1, y: -2.6, text: "a > 0, b² − 4ac < 0", style: "small" }],
          caption: String.raw`Always positive.`,
          alt: "A U-shaped parabola lying completely above the x-axis, with minimum point at (1, 2).",
        },
        {
          type: "plot",
          x: [-2, 4], y: [-4.5, 4.5], height: 200,
          curves: [{ fn: "x => -x*x + 2*x - 3", tone: "good" }],
          labels: [{ x: 1, y: 2.6, text: "a < 0, b² − 4ac < 0", style: "small" }],
          caption: String.raw`Always negative.`,
          alt: "A cap-shaped parabola lying completely below the x-axis, with maximum point at (1, −2).",
        },
      ],
    },
    {
      title: String.raw`Finding the equation of a quadratic`,
      body: String.raw`Choose the form that uses the given information best:

| Given | Start with |
| turning point $(h, k)$ | $y = a(x - h)^2 + k$ |
| $x$-intercepts $p$ and $q$ | $y = a(x - p)(x - q)$ |
| three general points | $y = ax^2 + bx + c$, then solve simultaneous equations |

Then use one more point (often the $y$-intercept) to find $a$.`,
    },
    {
      title: String.raw`Quadratic functions as models`,
      body: String.raw`Many real quantities follow a quadratic rule: the height of a ball, the area of a fenced region, profit against selling price.

- Complete the square to find the greatest (or least) value and **when** it happens.
- Solve the quadratic equation to find when the quantity takes a given value; reject answers that make no sense (e.g. negative time or length).
- Use a quadratic inequality to find the range of values for which a condition holds.
- State the answer in context, with units, e.g. "The greatest height is 9.2 m, 1.2 s after the ball is thrown."`,
      figure: {
        type: "plot",
        x: [-0.35, 3.0], y: [-1.4, 11], height: 230,
        axisLabels: ["t", "h"],
        curves: [{ fn: "t => 2 + 12*t - 5*t*t", domain: [0, 2.5565] }],
        segments: [
          { from: [1.2, 9.2], to: [1.2, 0], dashed: true, thin: true, tone: "muted" },
          { from: [1.2, 9.2], to: [0, 9.2], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: 1.2, y: 9.2, label: "greatest height", pos: "ne" }, { x: 0, y: 2, label: "2", pos: "w" }],
        xTicks: [{ x: 1.2, label: "1.2" }],
        yTicks: [{ y: 9.2, label: "9.2" }],
        caption: String.raw`$h = 2 + 12t - 5t^2 = 9.2 - 5(t - 1.2)^2$: the greatest height is 9.2 m when $t = 1.2$ s. Only $t \ge 0$ makes sense.`,
        alt: "Graph of height h against time t for a ball thrown from a height of 2 m: an arch starting at (0, 2), rising to a maximum of 9.2 at t = 1.2, then falling to the t-axis.",
      },
    },
  ],
  archetypes: [
    {
      id: "A1-complete-square-max-min",
      name: String.raw`Completing the square to find a maximum or minimum value`,
      tests: String.raw`Writing $ax^2 + bx + c$ in the form $a(x - h)^2 + k$ and stating the greatest or least value and where it occurs. Sometimes extended to the greatest value of a related expression such as $\dfrac{1}{ax^2 + bx + c}$.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = 5 + 8x - 2x^2$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $\mathrm{f}(x)$ in the form $p - q(x - r)^2$, where $p$, $q$ and $r$ are constants.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence state the maximum value of $\mathrm{f}(x)$ and the value of $x$ at which it occurs.`, marks: 2 },
            { label: "(c)", text: String.raw`State the equation of the line of symmetry of the curve $y = \mathrm{f}(x)$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`It is given that $y = x^2 - 4x + 7$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $y$ in the form $(x - a)^2 + b$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence state the minimum value of $y$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the greatest value of $\dfrac{6}{x^2 - 4x + 7}$, explaining your reasoning.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A1-sketch-parabola",
      name: String.raw`Sketching a quadratic graph`,
      tests: String.raw`Finding the turning point and the axis intercepts, then sketching the parabola with the correct shape and all key points labelled. Often followed by a short question read off the sketch.`,
      questions: [
        {
          stem: String.raw`The equation of a curve is $y = -x^2 + 6x - 5$.`,
          parts: [
            { label: "(a)", text: String.raw`By completing the square, find the coordinates of the turning point of the curve, and state whether it is a maximum or a minimum point.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the coordinates of the points where the curve meets the axes.`, marks: 2 },
            { label: "(c)", text: String.raw`Sketch the curve.`, marks: 2 },
            { label: "(d)", text: String.raw`Write down the range of values of $k$ for which the line $y = k$ does not meet the curve.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "A1-find-equation",
      name: String.raw`Finding the equation of a quadratic from given information`,
      tests: String.raw`Using a turning point, intercepts or other points (often from a diagram) to find the constants in $y = a(x - h)^2 + k$ or $y = ax^2 + bx + c$.`,
      questions: [
        {
          stem: String.raw`The curve $y = ax^2 + bx + c$ has a minimum point at $(2, -3)$ and passes through the point $(0, 5)$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the values of $a$, $b$ and $c$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the $x$-coordinates of the points where the curve meets the $x$-axis, giving your answers correct to 2 decimal places.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = a(x - h)^2 + k$, where $a$, $h$ and $k$ are constants. The graph meets the $x$-axis at $(-1, 0)$ and $(5, 0)$, and the $y$-axis at $(0, 10)$.`,
          figure: {
            type: "plot",
            x: [-2.5, 6.5], y: [-4, 21], height: 240,
            curves: [{ fn: "x => -2*(x + 1)*(x - 5)" }],
            points: [
              { x: -1, y: 0, label: "(−1, 0)", pos: "nw" },
              { x: 5, y: 0, label: "(5, 0)", pos: "ne" },
              { x: 0, y: 10, label: "(0, 10)", pos: "w" },
            ],
            alt: "A cap-shaped parabola crossing the x-axis at (−1, 0) and (5, 0) and the y-axis at (0, 10). The turning point is not labelled.",
          },
          parts: [
            { label: "(a)", text: String.raw`State the value of $h$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $a$ and of $k$.`, marks: 3 },
            { label: "(c)", text: String.raw`State the maximum value of $y$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "A1-always-positive-negative",
      name: String.raw`Always positive or always negative`,
      tests: String.raw`Showing that an expression is positive (or negative) for all real $x$, or finding the range of an unknown constant for which this is true. Both conditions — the sign of $a$ and $b^2 - 4ac < 0$ — must be used.`,
      questions: [
        {
          stem: String.raw`Show that $3x^2 - 6x + 7$ is positive for all real values of $x$.`,
          marks: 3,
        },
        {
          stem: String.raw`Find the range of values of $k$ for which $kx^2 + 4x + k - 3$ is negative for all real values of $x$.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A1-max-min-unknown-constant",
      name: String.raw`Maximum or minimum value involving an unknown constant`,
      tests: String.raw`Completing the square with a letter in the expression, then using a given maximum or minimum value (or turning point) to form and solve an equation for the constant.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = x^2 - 2px + p + 6$, where $p$ is a constant.`,
          parts: [
            { label: "(a)", text: String.raw`Express $\mathrm{f}(x)$ in the form $(x - a)^2 + b$, where $a$ and $b$ are expressions in $p$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given that the minimum value of $\mathrm{f}(x)$ is $4$, find the possible values of $p$.`, marks: 3 },
            { label: "(c)", text: String.raw`For the negative value of $p$, state the value of $x$ at which the minimum occurs.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "A1-quadratic-models",
      name: String.raw`Quadratic models in context`,
      tests: String.raw`Forming or using a quadratic model (height of a projectile, area with a fixed perimeter), finding its maximum by completing the square, and interpreting answers in context, including the range of values for a condition.`,
      questions: [
        {
          stem: String.raw`A ball is thrown upwards from the top of a wall. Its height, $h$ metres, above the ground $t$ seconds after it is thrown is given by
$$h = 1.5 + 14t - 5t^2.$$`,
          parts: [
            { label: "(a)", text: String.raw`Express $h$ in the form $a - b(t - c)^2$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence find the greatest height reached by the ball and the time at which this happens.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the time taken for the ball to reach the ground, giving your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A farmer uses $60$ m of fencing to make a rectangular pen against a long straight wall, as shown in the diagram. The wall forms one side of the pen and the fencing forms the other three sides. Each side perpendicular to the wall has length $x$ m.`,
          figure: {
            type: "plot",
            x: [-1, 41], y: [1, 17.5], equal: true, axes: false,
            polygons: [{ points: [[-0.5, 15], [40.5, 15], [40.5, 16.6], [-0.5, 16.6]], fill: true, tone: "muted" }],
            segments: [
              { from: [2, 15], to: [2, 3], tone: "accent" },
              { from: [2, 3], to: [38, 3], tone: "accent" },
              { from: [38, 3], to: [38, 15], tone: "accent" },
            ],
            labels: [
              { x: 20, y: 15.8, text: "wall", style: "small" },
              { x: 2, y: 9, text: "x m", pos: "w", style: "italic" },
              { x: 38, y: 9, text: "x m", pos: "e", style: "italic" },
              { x: 20, y: 9, text: "pen", style: "small" },
            ],
            alt: "A long horizontal wall with a rectangular pen below it. Fencing forms the left, bottom and right sides of the rectangle; the two sides at right angles to the wall are each labelled x m.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that the area, $A$ m$^2$, of the pen is given by $A = 60x - 2x^2$.`, marks: 1 },
            { label: "(b)", text: String.raw`By completing the square, find the greatest possible area of the pen and the value of $x$ for which it occurs.`, marks: 3 },
            { label: "(c)", text: String.raw`The farmer needs the area of the pen to be at least $400$ m$^2$. Find the range of possible values of $x$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
