H2.addTopic({
  id: "C2",
  title: "Applications of Differentiation",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Part of syllabus item C1 (Differentiation and integration): tangents and normals, increasing and decreasing functions, stationary points, maxima and minima problems, and connected rates of change.`,
  syllabus: {
    include: [
      String.raw`increasing and decreasing functions`,
      String.raw`stationary points (maximum and minimum turning points and stationary points of inflexion)`,
      String.raw`use of second derivative test to discriminate between maxima and minima`,
      String.raw`apply differentiation to gradients, tangents and normals, connected rates of change and maxima and minima problems`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Tangents and normals`,
      body: String.raw`At the point $(x_1, y_1)$ on a curve, let $m$ be the value of $\dfrac{\dd y}{\dd x}$ at $x = x_1$.

- **Tangent**: gradient $m$, equation $y - y_1 = m(x - x_1)$.
- **Normal** (perpendicular to the tangent): gradient $-\dfrac{1}{m}$, equation $y - y_1 = -\dfrac{1}{m}(x - x_1)$.
- If $m = 0$, the tangent is $y = y_1$ and the normal is the vertical line $x = x_1$.
- If only $x_1$ is given, find $y_1$ from the **equation of the curve**, not from $\dfrac{\dd y}{\dd x}$.
- A tangent **parallel** to a line has the same gradient as that line; **perpendicular** gradients multiply to $-1$.`,
      figure: {
        type: "plot",
        x: [-1.2, 5.2], y: [-0.8, 4.8], equal: true, originLabel: "se",
        curves: [{ fn: "x => x*x/4 + 1", domain: [-1.1, 3.8], label: "y = f(x)", labelAt: -1.05 }],
        segments: [
          { from: [-0.6, -0.6], to: [4.6, 4.6], tone: "good" },
          { from: [-0.4, 4.4], to: [4.6, -0.6], tone: "warn" },
        ],
        rightAngles: [{ at: [2, 2], a: [1, 1], b: [-1, 1], size: 0.32 }],
        points: [{ x: 2, y: 2, label: "(x₁, y₁)", pos: "e" }],
        labels: [
          { x: 3.0, y: 4.5, text: "tangent, gradient m", pos: "w", style: "small", tone: "good" },
          { x: 4.0, y: -0.35, text: "normal, gradient −1/m", pos: "w", style: "small", tone: "warn" },
        ],
        caption: String.raw`The normal is perpendicular to the tangent at the same point.`,
        alt: "A curve with the tangent and the normal drawn at the point (x₁, y₁). The tangent has gradient m, the normal has gradient −1/m, and a right-angle mark shows they are perpendicular.",
      },
    },
    {
      title: String.raw`Increasing and decreasing functions`,
      body: String.raw`- $\dfrac{\dd y}{\dd x} > 0$ for an interval: $y$ is **increasing** there (the graph goes up from left to right).
- $\dfrac{\dd y}{\dd x} < 0$ for an interval: $y$ is **decreasing** there.

To find the range of $x$ for which $y$ is increasing, solve the inequality $\dfrac{\dd y}{\dd x} > 0$ (factorise; use a sketch or a sign test for a quadratic).

To **show** that a function is increasing for all real $x$, prove $\mathrm{f}'(x) > 0$ for every $x$, e.g.
- complete the square: $3x^2 + 12x + 15 = 3(x + 2)^2 + 3 > 0$, or
- use facts such as $\ee^{x} > 0$ and $(\ldots)^2 \ge 0$.

State the reason in words: "since $(x + 2)^2 \ge 0$ for all $x$, $\mathrm{f}'(x) \ge 3 > 0$".`,
      figure: {
        type: "plot",
        x: [-2.6, 2.8], y: [-3.2, 3.4], height: 230,
        curves: [{ fn: "x => x*x*x - 3*x", domain: [-2.2, 2.2] }],
        points: [{ x: -1, y: 2 }, { x: 1, y: -2 }],
        segments: [
          { from: [-1, 2], to: [-1, 0], dashed: true, thin: true, tone: "muted" },
          { from: [1, -2], to: [1, 0], dashed: true, thin: true, tone: "muted" },
        ],
        xTicks: [{ x: -1, label: "−1" }, { x: 1, label: "1" }],
        labels: [
          { x: -2.0, y: 1.0, text: "increasing", style: "small", tone: "good" },
          { x: 0.4, y: 1.3, text: "decreasing", style: "small", tone: "warn" },
          { x: 2.05, y: -1.0, text: "increasing", style: "small", tone: "good" },
        ],
        caption: String.raw`$y = x^3 - 3x$: $\frac{\dd y}{\dd x} = 3(x + 1)(x - 1)$ is positive for $x < -1$ and $x > 1$, and negative for $-1 < x < 1$.`,
        alt: "Graph of y = x³ − 3x with a maximum at x = −1 and a minimum at x = 1. The curve is labelled increasing for x < −1 and x > 1, and decreasing between −1 and 1.",
      },
    },
    {
      title: String.raw`Stationary points`,
      body: String.raw`A **stationary point** is a point where $\dfrac{\dd y}{\dd x} = 0$ (the tangent is horizontal). There are three types:

- **maximum** turning point,
- **minimum** turning point,
- **stationary point of inflexion** — the gradient is zero but does not change sign.

To find them: solve $\dfrac{\dd y}{\dd x} = 0$, then substitute each $x$ into the **equation of the curve** to get $y$. Give both coordinates.`,
      figure: [
        {
          type: "plot",
          x: [-2, 2], y: [-0.4, 3.4], height: 180, axisLabels: ["x", null],
          curves: [{ fn: "x => 2.6 - 0.6*x*x", domain: [-1.9, 1.9] }],
          segments: [{ from: [-0.6, 2.6], to: [0.6, 2.6], tone: "warn", thin: true }],
          points: [{ x: 0, y: 2.6 }],
          labels: [
            { x: -1.4, y: 0.8, text: "+", style: "bold", tone: "good" },
            { x: 0, y: 3.05, text: "0", style: "bold" },
            { x: 1.4, y: 0.8, text: "−", style: "bold", tone: "warn" },
          ],
          caption: String.raw`Maximum: $+$, $0$, $-$`,
          alt: "A maximum turning point: the gradient is positive before, zero at, and negative after the point.",
        },
        {
          type: "plot",
          x: [-2, 2], y: [-0.4, 3.4], height: 180, axisLabels: ["x", null],
          curves: [{ fn: "x => 0.6 + 0.6*x*x", domain: [-1.9, 1.9] }],
          segments: [{ from: [-0.6, 0.6], to: [0.6, 0.6], tone: "warn", thin: true }],
          points: [{ x: 0, y: 0.6 }],
          labels: [
            { x: -1.5, y: 2.9, text: "−", style: "bold", tone: "warn" },
            { x: 0, y: 1.1, text: "0", style: "bold" },
            { x: 1.5, y: 2.9, text: "+", style: "bold", tone: "good" },
          ],
          caption: String.raw`Minimum: $-$, $0$, $+$`,
          alt: "A minimum turning point: the gradient is negative before, zero at, and positive after the point.",
        },
        {
          type: "plot",
          x: [-2, 2], y: [-0.4, 3.4], height: 180, axisLabels: ["x", null],
          curves: [{ fn: "x => 1.5 + 0.35*x*x*x", domain: [-1.75, 1.75] }],
          segments: [{ from: [-0.6, 1.5], to: [0.6, 1.5], tone: "warn", thin: true }],
          points: [{ x: 0, y: 1.5 }],
          labels: [
            { x: -1.1, y: 1.6, text: "+", style: "bold", tone: "good" },
            { x: 0, y: 2.0, text: "0", style: "bold" },
            { x: 1.1, y: 1.4, text: "+", style: "bold", tone: "good" },
          ],
          caption: String.raw`Inflexion: $+$, $0$, $+$ (or $-$, $0$, $-$)`,
          alt: "A stationary point of inflexion: the gradient is positive on both sides and zero at the point, so the curve flattens and keeps rising.",
        },
      ],
    },
    {
      title: String.raw`First derivative test`,
      body: String.raw`Check the **sign of $\dfrac{\dd y}{\dd x}$** just before and just after the stationary point $x = a$ (e.g. at $x = a - 0.1$ and $x = a + 0.1$), and show it in a table:

| $x$ | $a^-$ | $a$ | $a^+$ |
| --- | --- | --- | --- |
| $\frac{\dd y}{\dd x}$ | $+$ | $0$ | $-$ |
| shape | / | — | \ |

- $+, 0, -$: maximum. $-, 0, +$: minimum. Same sign on both sides: stationary point of inflexion.
- Choose test values close enough that no other stationary point lies in between.
- This test **always** works, so use it when the second derivative test fails.`,
    },
    {
      title: String.raw`Second derivative test`,
      body: String.raw`At a stationary point $x = a$ (where $\dfrac{\dd y}{\dd x} = 0$):

| Value of $\dfrac{\dd^2 y}{\dd x^2}$ at $x = a$ | Nature |
| --- | --- |
| $< 0$ | maximum |
| $> 0$ | minimum |
| $= 0$ | **no conclusion** — use the first derivative test |

- Show the substitution and the sign, e.g. "$\dfrac{\dd^2 y}{\dd x^2} = -12 < 0$, so it is a maximum."
- $\dfrac{\dd^2 y}{\dd x^2} = 0$ does **not** mean a point of inflexion. For $y = x^4$, $\dfrac{\dd^2 y}{\dd x^2} = 0$ at the origin, but the origin is a minimum.`,
    },
    {
      title: String.raw`Maxima and minima problems`,
      body: String.raw`1. Write the quantity to be maximised or minimised (area, volume, cost…) in terms of **one** variable. Use the given condition (fixed volume, fixed perimeter…) to remove the other variable. Questions usually say "Show that $A = \ldots$" — then use the given expression in later parts even if you could not show it.
2. Differentiate and solve $\dfrac{\dd A}{\dd x} = 0$. Reject values that are impossible (negative lengths, angles outside the range).
3. Show it is a maximum or minimum (second derivative test).
4. Answer the question asked: the **value** of $A$, with units, not just $x$.

Formulae you need (memorise): volume of a cylinder $\pi r^2 h$, curved surface area $2\pi r h$; volume of a cone $\frac{1}{3}\pi r^2 h$; volume of a prism = cross-section area × length.`,
      figure: {
        type: "plot",
        x: [-1.4, 7.4], y: [-0.9, 6.9], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [6, 0], [6, 6], [0, 6]], tone: "ink" },
          { points: [[0, 0], [1.2, 0], [1.2, 1.2], [0, 1.2]], fill: true, tone: "warn" },
          { points: [[4.8, 0], [6, 0], [6, 1.2], [4.8, 1.2]], fill: true, tone: "warn" },
          { points: [[4.8, 4.8], [6, 4.8], [6, 6], [4.8, 6]], fill: true, tone: "warn" },
          { points: [[0, 4.8], [1.2, 4.8], [1.2, 6], [0, 6]], fill: true, tone: "warn" },
        ],
        segments: [
          { from: [1.2, 1.2], to: [4.8, 1.2], dashed: true, thin: true, tone: "muted" },
          { from: [1.2, 4.8], to: [4.8, 4.8], dashed: true, thin: true, tone: "muted" },
          { from: [1.2, 1.2], to: [1.2, 4.8], dashed: true, thin: true, tone: "muted" },
          { from: [4.8, 1.2], to: [4.8, 4.8], dashed: true, thin: true, tone: "muted" },
          { from: [0, -0.5], to: [6, -0.5], arrow: true, arrowStart: true, thin: true, tone: "muted" },
        ],
        labels: [
          { x: 0.6, y: 1.2, text: "x", pos: "n", style: "italic" },
          { x: 1.2, y: 0.6, text: "x", pos: "e", style: "italic" },
          { x: 3, y: -0.5, text: "30 cm", pos: "s", style: "small" },
          { x: 3, y: 3, text: "base", style: "small" },
        ],
        caption: String.raw`An open box from a 30 cm square sheet: cut squares of side $x$ from the corners and fold along the dashed lines. Then $V = x(30 - 2x)^2$ with $0 < x < 15$.`,
        alt: "A square sheet of side 30 cm with a small square of side x shaded at each corner. Dashed fold lines mark the square base in the middle.",
      },
    },
    {
      title: String.raw`Connected rates of change`,
      body: String.raw`When two quantities are linked, their rates of change are linked by the Chain Rule:
$$\frac{\dd V}{\dd t} = \frac{\dd V}{\dd h} \times \frac{\dd h}{\dd t}.$$

1. List what is given and what is wanted, with units, e.g. given $\frac{\dd V}{\dd t} = 4$ cm³/s, want $\frac{\dd h}{\dd t}$ when $h = 5$.
2. Find a formula linking $V$ and $h$ **only** (use similar triangles to remove $r$ in a cone).
3. Differentiate it to get $\frac{\dd V}{\dd h}$, then use the Chain Rule.
4. Substitute the value of $h$ **after** differentiating, never before.

A negative rate means the quantity is decreasing.`,
    },
  ],
  archetypes: [
    {
      id: "C2-tangent-normal",
      name: String.raw`Equations of tangents and normals`,
      tests: String.raw`Finding the gradient at a given point, writing the equations of the tangent and normal, and then using them (where they meet the axes, area of a triangle formed).`,
      questions: [
        {
          stem: String.raw`The diagram shows part of the curve $y = \sqrt{2x + 5}$. The tangent and the normal to the curve at the point $P(2, 3)$ meet the $x$-axis at $A$ and $B$ respectively.`,
          figure: {
            type: "plot",
            x: [-8, 4.6], y: [-0.9, 4.6], equal: true,
            curves: [{ fn: "x => Math.sqrt(2*x + 5)", domain: [-2.5, 4.5] }],
            labels: [
              { x: -0.3, y: 3.3, text: "y = √(2x + 5)", pos: "w", style: "italic", tone: "accent" },
              { x: 2.4, y: 2.45, text: "P(2, 3)", pos: "e" },
            ],
            segments: [
              { from: [-7.6, -0.2], to: [3.8, 3.6], tone: "good" },
              { from: [1.55, 4.35], to: [3.2, -0.6], tone: "warn" },
            ],
            points: [
              { x: 2, y: 3 },
              { x: -7, y: 0, label: "A", pos: "n" },
              { x: 3, y: 0, label: "B", pos: "ne" },
            ],
            alt: "Part of the curve y = √(2x + 5) starting at (−2.5, 0). The tangent at P(2, 3) slopes gently up and meets the x-axis at A on the far left; the normal at P slopes steeply down and meets the x-axis at B to the right of P.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the equation of the tangent to the curve at $P$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the equation of the normal to the curve at $P$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the area of triangle $PAB$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A curve has equation $y = x\ln x$, where $x > 0$.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find the equation of the tangent to the curve at the point where $x = \ee$.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the exact coordinates of the point where this tangent meets the $x$-axis.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "C2-tangent-conditions",
      name: String.raw`Tangents with a given gradient or condition`,
      tests: String.raw`Using a condition on the tangent — parallel or perpendicular to a given line, or a known gradient at a known point — to find points on the curve or unknown constants.`,
      questions: [
        {
          stem: String.raw`A curve has equation $y = x^3 - 3x^2 - 8x + 5$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of the two points on the curve at which the tangent is parallel to the line $y = x + 2$.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the equations of the tangents at these two points.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $y = ax^2 + \dfrac{b}{x}$, where $a$ and $b$ are constants, passes through the point $P(1, 4)$. The tangent to the curve at $P$ is perpendicular to the line $x + 2y = 6$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the equation of the tangent at $P$, and show that this tangent meets the curve again at the point $(-1, 0)$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "C2-increasing-decreasing",
      name: String.raw`Increasing and decreasing functions`,
      tests: String.raw`Solving $\frac{\dd y}{\dd x} > 0$ or $< 0$ for a range of $x$, or proving a function is increasing (or decreasing) for all $x$ by showing the derivative is always positive (or negative).`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = x^3 - 3x^2 + 6x - 2$. Show that f is an increasing function for all real values of $x$.`,
          marks: 3,
        },
        {
          stem: String.raw`A curve has equation $y = x^2\ee^{-x}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the range of values of $x$ for which $y$ is an increasing function of $x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "C2-stationary-second-derivative",
      name: String.raw`Stationary points and the second derivative test`,
      tests: String.raw`Solving $\frac{\dd y}{\dd x} = 0$, finding both coordinates, and using the sign of $\frac{\dd^2 y}{\dd x^2}$ to decide maximum or minimum; sometimes working backwards from a given stationary point to unknown constants.`,
      questions: [
        {
          stem: String.raw`A curve has equation $y = \dfrac{x^2 + 3}{x - 1}$, where $x \ne 1$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of the stationary points of the curve.`, marks: 5 },
            { label: "(b)", text: String.raw`Given that $\dfrac{\dd^2 y}{\dd x^2} = \dfrac{8}{(x - 1)^3}$, determine the nature of each stationary point.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $y = ax + \dfrac{b}{x^2}$, where $a$ and $b$ are constants, has a stationary point at $(2, 6)$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 4 },
            { label: "(b)", text: String.raw`Determine the nature of the stationary point.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "C2-stationary-inflexion",
      name: String.raw`Stationary points of inflexion and the first derivative test`,
      tests: String.raw`Classifying stationary points when the second derivative is zero (or is not given), using the sign of $\frac{\dd y}{\dd x}$ on either side. A repeated factor such as $x^2$ in $\frac{\dd y}{\dd x}$ is the clue.`,
      questions: [
        {
          stem: String.raw`A curve has equation $y = x^4 - 4x^3$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of the stationary points of the curve.`, marks: 3 },
            { label: "(b)", text: String.raw`Explain why the second derivative test cannot be used to determine the nature of one of these points.`, marks: 1 },
            { label: "(c)", text: String.raw`Determine the nature of each stationary point, showing your working clearly.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`A curve $y = \mathrm{f}(x)$ is such that $\mathrm{f}'(x) = (x - 1)^2(x + 2)$. Find the $x$-coordinates of the stationary points of the curve and determine the nature of each.`,
          marks: 4,
        },
      ],
    },
    {
      id: "C2-maxmin-containers",
      name: String.raw`Maxima and minima: boxes and cylinders`,
      tests: String.raw`Using a fixed volume to write a surface area (or a fixed area to write a volume) in one variable, then finding and justifying the least or greatest value.`,
      questions: [
        {
          stem: String.raw`The diagram shows a closed rectangular box with a base measuring $x$ cm by $2x$ cm and a height of $h$ cm. The volume of the box is $576$ cm³.`,
          figure: {
            type: "plot",
            x: [-1.2, 6.4], y: [-0.9, 3.9], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [4, 0], [4, 2], [0, 2]], tone: "ink" },
              { points: [[0, 2], [4, 2], [5.2, 2.8], [1.2, 2.8]], tone: "ink" },
              { points: [[4, 0], [5.2, 0.8], [5.2, 2.8], [4, 2]], tone: "ink" },
            ],
            segments: [
              { from: [0, 0], to: [1.2, 0.8], dashed: true, thin: true, tone: "muted" },
              { from: [1.2, 0.8], to: [5.2, 0.8], dashed: true, thin: true, tone: "muted" },
              { from: [1.2, 0.8], to: [1.2, 2.8], dashed: true, thin: true, tone: "muted" },
            ],
            labels: [
              { x: 2, y: 0, text: "2x cm", pos: "s", style: "italic" },
              { x: 4.6, y: 0.4, text: "x cm", pos: "se", style: "italic" },
              { x: 0, y: 1, text: "h cm", pos: "w", style: "italic" },
            ],
            alt: "A closed cuboid drawn in perspective. The front edge of the base is 2x cm, the side edge of the base is x cm and the height is h cm. Hidden edges are dashed.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that the total surface area, $A$ cm², of the box is given by $A = 4x^2 + \dfrac{1728}{x}$.`, marks: 3 },
            { label: "(b)", text: String.raw`Given that $x$ can vary, find the value of $x$ for which $A$ is stationary.`, marks: 3 },
            { label: "(c)", text: String.raw`Find this stationary value of $A$ and determine whether it is a maximum or a minimum.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`An open cylindrical tin (with a base but no lid) has radius $r$ cm and height $h$ cm. The volume of the tin is $125\pi$ cm³.`,
          figure: {
            type: "plot",
            x: [-3.2, 3.2], y: [-0.9, 5.1], equal: true, axes: false,
            curves: [
              { param: "t => [2*Math.cos(t), 4 + 0.5*Math.sin(t)]", t: [0, 6.2832], tone: "ink" },
              { param: "t => [2*Math.cos(t), 0.5*Math.sin(t)]", t: [3.1416, 6.2832], tone: "ink" },
              { param: "t => [2*Math.cos(t), 0.5*Math.sin(t)]", t: [0, 3.1416], tone: "muted", dashed: true },
            ],
            segments: [
              { from: [-2, 0], to: [-2, 4], tone: "ink" },
              { from: [2, 0], to: [2, 4], tone: "ink" },
              { from: [0, 4], to: [2, 4], thin: true, tone: "ink", label: "r cm", pos: "n", style: "italic" },
              { from: [2.45, 0], to: [2.45, 4], arrow: true, arrowStart: true, thin: true, tone: "muted" },
            ],
            points: [{ x: 0, y: 4 }],
            labels: [{ x: 2.45, y: 2, text: "h cm", pos: "e", style: "italic" }],
            alt: "An open cylinder of radius r cm and height h cm. The back half of the base circle is dashed.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that the total external surface area, $A$ cm², of the tin is given by $A = \pi r^2 + \dfrac{250\pi}{r}$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the value of $r$ for which $A$ has a stationary value.`, marks: 3 },
            { label: "(c)", text: String.raw`Show that this value of $A$ is a minimum, and find the minimum value of $A$, leaving your answer in terms of $\pi$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C2-maxmin-angles",
      name: String.raw`Maxima and minima with an angle as the variable`,
      tests: String.raw`Plane figures where the variable is an angle $\theta$ in radians: forming the expression with trigonometry, differentiating trigonometric functions, and solving a trigonometric equation for the stationary value.`,
      questions: [
        {
          stem: String.raw`The diagram shows a trapezium $ABCD$ in which $AD$ is parallel to $BC$, $AB = BC = CD = 10$ cm and angle $BAD$ = angle $CDA = \theta$ radians, where $0 < \theta < \frac{\pi}{2}$.`,
          calculator: false,
          figure: {
            type: "plot",
            x: [-0.8, 6.5], y: [-0.7, 3.3], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [1.36, 2.67], [4.36, 2.67], [5.72, 0]], tone: "ink" }],
            angles: [
              { at: [0, 0], from: [1, 0], to: [1.36, 2.67], r: 0.55, label: "θ" },
              { at: [5.72, 0], from: [4.36, 2.67], to: [4.72, 0], r: 0.55, label: "θ" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 1.36, y: 2.67, text: "B", pos: "nw" },
              { x: 4.36, y: 2.67, text: "C", pos: "ne" },
              { x: 5.72, y: 0, text: "D", pos: "se" },
              { x: 0.68, y: 1.335, text: "10 cm", pos: "w", style: "small" },
              { x: 2.86, y: 2.67, text: "10 cm", pos: "n", style: "small" },
              { x: 5.04, y: 1.335, text: "10 cm", pos: "e", style: "small" },
            ],
            alt: "An isosceles trapezium ABCD with the longer side AD at the bottom. AB, BC and CD are each 10 cm, and the angles at A and D are both θ.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that the area, $A$ cm², of the trapezium is given by $A = 100\sin\theta(1 + \cos\theta)$.`, marks: 3 },
            { label: "(b)", text: String.raw`Show that $\dfrac{\dd A}{\dd \theta} = 100(2\cos\theta - 1)(\cos\theta + 1)$.`, marks: 3 },
            { label: "(c)", text: String.raw`Given that $\theta$ can vary, find the value of $\theta$ for which $A$ is stationary, and find the exact stationary value of $A$.`, marks: 3 },
            { label: "(d)", text: String.raw`Determine whether this value of $A$ is a maximum or a minimum.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "C2-maxmin-cost",
      name: String.raw`Maxima and minima in real-world contexts`,
      tests: String.raw`Forming a cost (or profit, or time) model from a description in words, then finding the value of the variable that makes it least or greatest and interpreting the answer.`,
      questions: [
        {
          stem: String.raw`A lorry travels a distance of $300$ km at a constant speed of $v$ km/h. The cost of running the lorry is $\left(36 + \dfrac{v^2}{100}\right)$ dollars per hour.`,
          parts: [
            { label: "(a)", text: String.raw`Show that the total cost, $\$C$, of the journey is given by $C = \dfrac{10\,800}{v} + 3v$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the speed at which the total cost of the journey is least, and show that this cost is a minimum.`, marks: 4 },
            { label: "(c)", text: String.raw`Find the least total cost of the journey.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "C2-connected-rates",
      name: String.raw`Connected rates of change`,
      tests: String.raw`Linking two rates with the Chain Rule: containers filling or emptying (often a cone, using similar triangles), or a point moving along a curve.`,
      questions: [
        {
          stem: String.raw`The diagram shows a container in the shape of an inverted right circular cone of height $30$ cm and base radius $10$ cm. Water is poured into the container at a constant rate of $6$ cm³/s. At time $t$ seconds, the depth of water is $h$ cm and the volume of water is $V$ cm³.`,
          figure: {
            type: "plot",
            x: [-3.3, 3.6], y: [-0.6, 6.9], equal: true, axes: false,
            shade: [{ upper: "x => 3.6", lower: "x => 3*Math.abs(x)", from: -1.2, to: 1.2, tone: "accent" }],
            curves: [
              { param: "t => [2*Math.cos(t), 6 + 0.4*Math.sin(t)]", t: [0, 6.2832], tone: "ink" },
              { param: "t => [1.2*Math.cos(t), 3.6 + 0.24*Math.sin(t)]", t: [0, 6.2832], tone: "accent" },
            ],
            segments: [
              { from: [0, 0], to: [-2, 6], tone: "ink" },
              { from: [0, 0], to: [2, 6], tone: "ink" },
              { from: [0, 0], to: [0, 6], dashed: true, thin: true, tone: "muted" },
              { from: [0, 6], to: [2, 6], thin: true, tone: "ink", label: "10 cm", pos: "n", style: "small", labelAt: [1, 6.45] },
              { from: [2.7, 0], to: [2.7, 6], arrow: true, arrowStart: true, thin: true, tone: "muted" },
              { from: [-1.9, 0], to: [-1.9, 3.6], arrow: true, arrowStart: true, thin: true, tone: "muted" },
            ],
            labels: [
              { x: 2.7, y: 3, text: "30 cm", pos: "e", style: "small" },
              { x: -1.9, y: 1.8, text: "h cm", pos: "w", style: "italic" },
            ],
            alt: "An inverted cone with its vertex at the bottom, height 30 cm and top radius 10 cm. Water fills the lower part to a depth of h cm, with a smaller circular water surface.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $V = \dfrac{\pi h^3}{27}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the rate at which the depth of water is increasing at the instant when $h = 6$.`, marks: 3 },
            { label: "(c)", text: String.raw`Find the depth of water at the instant when the depth is increasing at a rate of $\dfrac{3}{8\pi}$ cm/s.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A point $P$ moves along the curve $y = \ln(2x + 3)$ in such a way that its $y$-coordinate increases at a constant rate of $0.2$ units per second.`,
          parts: [
            { label: "(a)", text: String.raw`Find the rate of increase of the $x$-coordinate of $P$ at the instant when $x = 1$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the coordinates of $P$ at the instant when its $x$-coordinate is increasing at $0.3$ units per second.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
