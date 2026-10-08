H2.addTopic({
  id: "X1",
  title: "Modulus Functions",
  tags: ["IP"],
  summary: String.raw`Not in K341 (removed from O-Level A-Math 4047). The modulus $|x|$, graphs of $y = |\mathrm{f}(x)|$ for linear, quadratic and trigonometric $\mathrm{f}$, modulus equations solved algebraically and from graphs, and simple modulus inequalities.`,
  syllabus: {
    include: [
      String.raw`the meaning of $|x|$ and $|\mathrm{f}(x)|$`,
      String.raw`graphs of $y = |ax + b|$ and $y = |\mathrm{f}(x)|$, where $\mathrm{f}(x)$ is linear, quadratic or trigonometric`,
      String.raw`solving equations of the form $|\mathrm{f}(x)| = \mathrm{g}(x)$ and $|\mathrm{f}(x)| = |\mathrm{g}(x)|$ algebraically (rejecting extraneous roots) and graphically`,
      String.raw`using graphs to find the number of solutions of an equation`,
      String.raw`simple modulus inequalities such as $|x - a| < b$ and $|ax + b| > c$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`What $|x|$ means`,
      body: String.raw`Not in K341 (removed from O-Level A-Math 4047). The **modulus** (absolute value) of $x$ is its size without its sign:

$$|x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases}$$

So $|5| = 5$, $|-5| = 5$ and $|0| = 0$. A modulus is **never negative**.

- $|x|$ is the distance of $x$ from $0$ on the number line, and $|x - a|$ is the distance of $x$ from $a$.
- $|ab| = |a||b|$ and $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$, but in general $|a + b| \ne |a| + |b|$.
- $|x|^2 = x^2$ and $\sqrt{x^2} = |x|$ (not $x$).
- $|x| = k$ has two solutions $x = \pm k$ if $k > 0$, one solution if $k = 0$, and **none** if $k < 0$.`,
      figure: [
        {
          type: "plot",
          x: [-3.4, 3.6], y: [-0.8, 3.6], height: 190,
          curves: [{ fn: "x => Math.abs(x)", label: "y = |x|", labelAt: 2.2 }],
          ticks: true,
          caption: String.raw`The graph of $y = |x|$ is a V with its vertex at $O$.`,
          alt: "The graph of y = |x|: two straight half-lines of gradient −1 and 1 meeting at the origin to form a V shape.",
        },
        {
          type: "plot",
          x: [-0.6, 6.6], y: [-0.9, 1.1], equal: true, axes: false,
          segments: [
            { from: [-0.4, 0], to: [6.5, 0], arrow: true, tone: "muted" },
            { from: [3, 0.35], to: [1.06, 0.35], arrow: true, tone: "accent" },
            { from: [3, 0.35], to: [4.94, 0.35], arrow: true, tone: "accent" },
          ],
          points: [{ x: 1, y: 0 }, { x: 3, y: 0 }, { x: 5, y: 0 }],
          labels: [
            { x: 1, y: -0.45, text: "1", style: "plain" },
            { x: 3, y: -0.45, text: "3", style: "plain" },
            { x: 5, y: -0.45, text: "5", style: "plain" },
            { x: 2, y: 0.7, text: "2", style: "plain", tone: "accent" },
            { x: 4, y: 0.7, text: "2", style: "plain", tone: "accent" },
          ],
          caption: String.raw`$|x - 3| = 2$: the numbers at distance $2$ from $3$, so $x = 1$ or $x = 5$.`,
          alt: "A number line with points at 1, 3 and 5. Arrows of length 2 go from 3 to 1 and from 3 to 5.",
        },
      ],
    },
    {
      title: String.raw`The graph of $y = |ax + b|$`,
      body: String.raw`Draw $y = ax + b$ first, then **reflect the part below the $x$-axis in the $x$-axis**. The graph is a V shape.

- The vertex is on the $x$-axis, at $x = -\dfrac{b}{a}$ (where $ax + b = 0$).
- The $y$-intercept is $|b|$.
- The two arms have gradients $a$ and $-a$.
- The whole graph is on or above the $x$-axis.

Label the vertex and the $y$-intercept with their coordinates. If a domain is given, draw only that part and label the end-points.`,
      figure: {
        type: "plot",
        x: [-1.4, 4.4], y: [-3.6, 5.6], height: 240,
        curves: [
          { fn: "x => 2*x - 3", domain: [-1.4, 1.5], dashed: true, tone: "muted" },
          { fn: "x => Math.abs(2*x - 3)", label: "y = |2x − 3|", labelAt: 3.3 },
        ],
        points: [
          { x: 1.5, y: 0, label: "(1.5, 0)", pos: "se" },
          { x: 0, y: 3, label: "(0, 3)", pos: "e" },
        ],
        labels: [{ x: 0.55, y: -2.7, text: "y = 2x − 3", pos: "e", style: "italic", tone: "muted" }],
        caption: String.raw`The part of $y = 2x - 3$ below the $x$-axis (dashed) is reflected upwards.`,
        alt: "The line y = 2x − 3 is drawn dashed where it is below the x-axis. The graph of y = |2x − 3| is a V shape with vertex at (1.5, 0) on the x-axis and y-intercept (0, 3).",
      },
    },
    {
      title: String.raw`The graph of $y = |\mathrm{f}(x)|$ for a quadratic`,
      body: String.raw`1. Sketch $y = \mathrm{f}(x)$: roots, $y$-intercept and turning point (complete the square).
2. Keep every part on or above the $x$-axis.
3. Reflect every part **below** the $x$-axis in the $x$-axis.

A minimum point $(h, k)$ with $k < 0$ becomes a **maximum** point $(h, -k)$ of $y = |\mathrm{f}(x)|$. The roots stay where they are and become sharp corners ("cusps"), not smooth turning points.`,
      figure: {
        type: "plot",
        x: [-2.6, 4.6], y: [-4.8, 6.6], height: 260,
        curves: [
          { fn: "x => x*x - 2*x - 3", domain: [-1, 3], dashed: true, tone: "muted" },
          { fn: "x => Math.abs(x*x - 2*x - 3)", label: "y = |x² − 2x − 3|", labelAt: -2.15 },
        ],
        points: [
          { x: -1, y: 0, label: "(−1, 0)", pos: "sw" },
          { x: 3, y: 0, label: "(3, 0)", pos: "se" },
          { x: 0, y: 3, label: "(0, 3)", pos: "nw" },
          { x: 1, y: 4, label: "(1, 4)", pos: "n" },
          { x: 1, y: -4, label: "(1, −4)", pos: "s" },
        ],
        caption: String.raw`$y = x^2 - 2x - 3 = (x - 1)^2 - 4$. The minimum $(1, -4)$ is reflected to the maximum $(1, 4)$.`,
        alt: "The parabola y = x² − 2x − 3 has its part between x = −1 and x = 3 drawn dashed below the x-axis, with minimum (1, −4). The graph of y = |x² − 2x − 3| reflects this part upwards to give a maximum at (1, 4), with sharp corners at (−1, 0) and (3, 0) and y-intercept (0, 3).",
      },
    },
    {
      title: String.raw`The graph of $y = |\mathrm{f}(x)|$ for a trigonometric function`,
      body: String.raw`Sketch $y = a\sin bx + c$ or $y = a\cos bx + c$ over the given interval first, then reflect the parts below the $x$-axis.

- $y = |\sin x|$ and $y = |\cos x|$ have **period $180^\circ$** ($\pi$), half the period of $\sin x$ and $\cos x$.
- If $c \ne 0$, the graph is not symmetric about the $x$-axis, so the reflected "humps" are **smaller** (or larger) than the original ones. Find the zeros by solving $\mathrm{f}(x) = 0$ in the interval.
- Label the end-points of the interval, the zeros and the maximum points.`,
      figure: {
        type: "plot",
        x: [-25, 385], y: [-3.4, 3.8], height: 240,
        curves: [
          { fn: "x => 2*Math.cos(x*Math.PI/180) - 1", domain: [60, 300], dashed: true, tone: "muted" },
          { fn: "x => Math.abs(2*Math.cos(x*Math.PI/180) - 1)", domain: [0, 360] },
        ],
        xTicks: [{ x: 60, label: "60°" }, { x: 180, label: "180°" }, { x: 300, label: "300°" }, { x: 360, label: "360°" }],
        yTicks: [{ y: 1, label: "1" }, { y: 3, label: "3" }, { y: -3, label: "−3" }],
        labels: [{ x: 255, y: 3.1, text: "y = |2 cos x − 1|", style: "italic", tone: "accent" }],
        caption: String.raw`$y = |2\cos x - 1|$ for $0^\circ \le x \le 360^\circ$. The minimum $-3$ at $180^\circ$ becomes a maximum $3$.`,
        alt: "The graph of y = 2cos x − 1 between 60° and 300° dips below the x-axis to −3 (dashed). The graph of y = |2cos x − 1| starts at 1 when x = 0°, falls to 0 at 60°, rises to a maximum of 3 at 180°, falls to 0 at 300° and rises to 1 at 360°.",
      },
    },
    {
      title: String.raw`Solving $|\mathrm{f}(x)| = \mathrm{g}(x)$`,
      body: String.raw`Since $|\mathrm{f}(x)|$ is either $\mathrm{f}(x)$ or $-\mathrm{f}(x)$, solve **both**

$$\mathrm{f}(x) = \mathrm{g}(x) \qquad \text{or} \qquad \mathrm{f}(x) = -\mathrm{g}(x).$$

Then **check every answer** in the original equation. The modulus side is never negative, so any answer that makes $\mathrm{g}(x) < 0$ is **rejected** (it is an extraneous root).

Example: $|x - 3| = 2x$. From $x - 3 = 2x$, $x = -3$; but then $2x = -6 < 0$, so reject. From $x - 3 = -2x$, $x = 1$; check: $|1 - 3| = 2 = 2(1)$. So $x = 1$ only.

For full marks, show the check and write "(rejected)" next to any value you discard. If $\mathrm{g}(x)$ is a positive constant, both answers are always valid.`,
      figure: {
        type: "plot",
        x: [-4.2, 5.2], y: [-7, 7], height: 260,
        labels: [{ x: -4.0, y: 3.3, text: "y = |x − 3|", pos: "e", style: "italic", tone: "accent" }],
        curves: [
          { fn: "x => x - 3", domain: [-4.2, 3], dashed: true, tone: "muted" },
          { fn: "x => Math.abs(x - 3)" },
          { fn: "x => 2*x", tone: "good", domain: [-3.6, 3.5], label: "y = 2x", labelAt: 2.6 },
        ],
        points: [
          { x: 1, y: 2, label: "(1, 2)", pos: "e" },
          { x: -3, y: -6, label: "x = −3 (rejected)", pos: "e" },
        ],
        caption: String.raw`The line $y = 2x$ meets $y = |x - 3|$ only once. The value $x = -3$ comes from the dashed line $y = x - 3$, which is not part of the graph.`,
        alt: "The V-shaped graph y = |x − 3| and the line y = 2x meet at one point, (1, 2). The dashed extension of y = x − 3 below the x-axis meets the line y = 2x at x = −3, which is marked as rejected.",
      },
    },
    {
      title: String.raw`Solving $|\mathrm{f}(x)| = |\mathrm{g}(x)|$`,
      body: String.raw`Two numbers have the same modulus when they are equal or when one is the negative of the other:

$$|\mathrm{f}(x)| = |\mathrm{g}(x)| \iff \mathrm{f}(x) = \mathrm{g}(x) \ \text{ or } \ \mathrm{f}(x) = -\mathrm{g}(x).$$

Both sides are never negative, so no answers need to be rejected (still check them quickly).

Another method is to square both sides: $[\mathrm{f}(x)]^2 = [\mathrm{g}(x)]^2$, since $|a|^2 = a^2$. This avoids the two cases but gives a harder equation when $\mathrm{f}$ or $\mathrm{g}$ is quadratic.

Example: $|x + 1| = |2x - 4|$ gives $x + 1 = 2x - 4$, so $x = 5$, or $x + 1 = -(2x - 4)$, so $x = 1$. Graphically, these are where the two V shapes cross.`,
      figure: {
        type: "plot",
        x: [-2.6, 7.2], y: [-1, 8.6], height: 240,
        curves: [
          { fn: "x => Math.abs(x + 1)", label: "y = |x + 1|", labelAt: -2.1 },
          { fn: "x => Math.abs(2*x - 4)", tone: "good" },
        ],
        labels: [{ x: 2.9, y: 0.8, text: "y = |2x − 4|", pos: "e", style: "italic", tone: "good" }],
        points: [
          { x: 1, y: 2, label: "(1, 2)", pos: "n" },
          { x: 5, y: 6, label: "(5, 6)", pos: "nw" },
        ],
        caption: String.raw`The graphs of $y = |x + 1|$ and $y = |2x - 4|$ cross where $x = 1$ and $x = 5$.`,
        alt: "Two V-shaped graphs: y = |x + 1| with vertex at (−1, 0) and y = |2x − 4| with vertex at (2, 0). They cross at (1, 2) and (5, 6).",
      },
    },
    {
      title: String.raw`Counting solutions from a graph`,
      body: String.raw`The number of solutions of $|\mathrm{f}(x)| = \mathrm{g}(x)$ is the number of points where $y = |\mathrm{f}(x)|$ and $y = \mathrm{g}(x)$ meet.

- For $|\mathrm{f}(x)| = k$, slide a horizontal line $y = k$ up the graph and count the crossings. The changes happen at $k = 0$ and at the **heights of the turning points**.
- For an equation that is not in this form, rearrange it so that one side is the modulus graph you have drawn, then draw the "suitable straight line" from the other side.
- A line through a sharp corner or touching a turning point counts as **one** point.

Answers are often ranges of $k$: for example, "exactly four solutions when $0 < k < 4$". State the end-points carefully.`,
      figure: {
        type: "plot",
        x: [-0.8, 7.8], y: [-0.8, 7.2], height: 250,
        curves: [{ fn: "x => Math.abs(x*x - 6*x + 5)", label: "y = |x² − 6x + 5|", labelAt: 0.1 }],
        lines: [{ y: 2, label: "y = 2" }, { y: 4, label: "y = 4" }, { y: 6, label: "y = 6" }],
        points: [{ x: 3, y: 4, label: "(3, 4)", pos: "n" }],
        caption: String.raw`$y = |x^2 - 6x + 5|$ has a maximum $(3, 4)$ after reflection, so $|x^2 - 6x + 5| = k$ has $4$ solutions for $0 < k < 4$, $3$ for $k = 4$ and $2$ for $k > 4$.`,
        alt: "The graph of y = |x² − 6x + 5| with zeros at x = 1 and x = 5 and a reflected maximum at (3, 4). Horizontal lines y = 2, y = 4 and y = 6 meet it at 4, 3 and 2 points respectively.",
      },
    },
    {
      title: String.raw`Simple modulus inequalities`,
      body: String.raw`For $b > 0$ (think "distance from $a$"):

| Inequality | Meaning | Solution |
| $|x - a| < b$ | within $b$ of $a$ | $a - b < x < a + b$ |
| $|x - a| > b$ | more than $b$ away from $a$ | $x < a - b$ or $x > a + b$ |

The same idea works for $|ax + b| < c$: write $-c < ax + b < c$ and solve both sides together.

- "Less than" gives **one** interval (between); "greater than" gives **two** separate intervals (outside). Never write $5 < x < -1$.
- For harder ones such as $|\mathrm{f}(x)| < |\mathrm{g}(x)|$, solve the equation first, then use a sketch to choose the right intervals.`,
      figure: {
        type: "plot",
        x: [-2.6, 4.6], y: [-0.9, 4.2], height: 200,
        shade: [{ upper: "x => 0.12", lower: "x => -0.12", from: -1, to: 3, tone: "warn" }],
        curves: [{ fn: "x => Math.abs(x - 1)", label: "y = |x − 1|", labelAt: -2.1 }],
        lines: [{ y: 2, label: "y = 2" }],
        points: [{ x: -1, y: 2, label: "(−1, 2)", pos: "nw" }, { x: 3, y: 2, label: "(3, 2)", pos: "nw" }],
        segments: [
          { from: [-1, 2], to: [-1, 0], dashed: true, thin: true, tone: "muted" },
          { from: [3, 2], to: [3, 0], dashed: true, thin: true, tone: "muted" },
        ],
        caption: String.raw`$|x - 1| < 2$: the graph is below the line $y = 2$ for $-1 < x < 3$.`,
        alt: "The V-shaped graph y = |x − 1| and the horizontal line y = 2 meet at (−1, 2) and (3, 2). The interval −1 < x < 3 on the x-axis, where the V is below the line, is highlighted.",
      },
    },
  ],
  archetypes: [
    {
      id: "X1-sketch-linear-modulus",
      name: String.raw`Sketching $y = |ax + b|$ and using the graph`,
      tests: String.raw`Not in K341. Sketching a V-shaped graph with its vertex and intercepts labelled, finding the constants from a given graph, and reading off where it meets a line.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Sketch the graph of $y = |2x - 6|$, stating the coordinates of the points where the graph meets the axes.`, marks: 3 },
            { label: "(b)", text: String.raw`Solve the equation $|2x - 6| = x + 1$.`, marks: 3 },
            { label: "(c)", text: String.raw`Hence state the range of values of $x$ for which $|2x - 6| < x + 1$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = |ax + b|$, where $a$ and $b$ are constants and $a > 0$. The graph meets the $y$-axis at $(0, 5)$ and the $x$-axis at $(2.5, 0)$.`,
          figure: {
            type: "plot",
            x: [-1.5, 5.5], y: [-1, 7.5], height: 220,
            curves: [{ fn: "x => Math.abs(2*x - 5)" }],
            labels: [{ x: 3.4, y: 6, text: "y = |ax + b|", pos: "w", style: "italic", tone: "accent" }],
            points: [{ x: 0, y: 5, label: "(0, 5)", pos: "e" }, { x: 2.5, y: 0, label: "(2.5, 0)", pos: "se" }],
            alt: "A V-shaped graph y = |ax + b| with its vertex on the x-axis at (2.5, 0), meeting the y-axis at (0, 5).",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the $x$-coordinates of the points where the graph meets the line $y = 3$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X1-quadratic-modulus-graph",
      name: String.raw`Sketching $y = |\mathrm{f}(x)|$ for a quadratic`,
      tests: String.raw`Not in K341. Completing the square to find the turning point, sketching the modulus graph with the reflected turning point and cusps labelled, then using the sketch to count solutions of $|\mathrm{f}(x)| = k$.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = x^2 - 2x - 8$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $\mathrm{f}(x)$ in the form $(x - h)^2 + k$, where $h$ and $k$ are constants.`, marks: 2 },
            { label: "(b)", text: String.raw`Sketch the graph of $y = |\mathrm{f}(x)|$, stating the coordinates of the turning point and of the points where the graph meets the axes.`, marks: 4 },
            { label: "(c)", text: String.raw`State the range of values of $k$ for which the equation $|x^2 - 2x - 8| = k$ has exactly four solutions.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X1-trig-modulus-graph",
      name: String.raw`Sketching $y = |\mathrm{f}(x)|$ for a trigonometric function`,
      tests: String.raw`Not in K341. Sketching the modulus of a sine or cosine graph over a given interval, solving a related trigonometric equation exactly, and using the sketch to count solutions.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Sketch the graph of $y = |1 + 2\sin x|$ for $0 \le x \le 2\pi$.`, marks: 3 },
            { label: "(b)", text: String.raw`Without using a calculator, solve the equation $|1 + 2\sin x| = 1$ for $0 \le x \le 2\pi$, giving your answers in terms of $\pi$.`, marks: 3 },
            { label: "(c)", text: String.raw`Hence find the set of values of $k$ for which the equation $|1 + 2\sin x| = k$ has exactly two solutions for $0 \le x \le 2\pi$.`, marks: 2 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`State the amplitude and the period of $y = 3\sin 2x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Sketch the graph of $y = |3\sin 2x|$ for $0^\circ \le x \le 180^\circ$.`, marks: 2 },
            { label: "(c)", text: String.raw`Solve the equation $|3\sin 2x| = 1.5$ for $0^\circ \le x \le 180^\circ$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-modulus-equals-function",
      name: String.raw`Solving $|\mathrm{f}(x)| = \mathrm{g}(x)$ algebraically`,
      tests: String.raw`Not in K341. Splitting into $\mathrm{f}(x) = \mathrm{g}(x)$ or $\mathrm{f}(x) = -\mathrm{g}(x)$, solving each, and checking every answer so that values making the right-hand side negative are rejected.`,
      questions: [
        {
          stem: String.raw`Solve the equations`,
          parts: [
            { label: "(a)", text: String.raw`$|3x - 2| = 7$,`, marks: 2 },
            { label: "(b)", text: String.raw`$|2x - 5| = 3x$,`, marks: 3 },
            { label: "(c)", text: String.raw`$|x^2 - x - 6| = x + 2$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`Solve the equation $|x^2 - 4x| = 2x - 5$, giving any irrational answer in the form $p + \sqrt{q}$. Show clearly why any values are rejected.`,
          marks: 6,
        },
      ],
    },
    {
      id: "X1-modulus-equals-modulus",
      name: String.raw`Solving $|\mathrm{f}(x)| = |\mathrm{g}(x)|$`,
      tests: String.raw`Not in K341. Using $\mathrm{f}(x) = \pm\mathrm{g}(x)$ (or squaring both sides) to solve an equation with a modulus on each side, often with a sketch of both graphs that is then used for a related inequality.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`On the same diagram, sketch the graphs of $y = |3x - 1|$ and $y = |x + 5|$.`, marks: 3 },
            { label: "(b)", text: String.raw`Solve the equation $|3x - 1| = |x + 5|$.`, marks: 3 },
            { label: "(c)", text: String.raw`Hence write down the set of values of $x$ for which $|3x - 1| > |x + 5|$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, solve the equation $|x^2 - 3| = |2x|$.`,
          calculator: false,
          marks: 4,
        },
      ],
    },
    {
      id: "X1-number-of-solutions",
      name: String.raw`Number of solutions from a modulus graph`,
      tests: String.raw`Not in K341. Using a modulus graph and a horizontal or sloping line to find how many solutions an equation has, or the range of a constant for a given number of intersection points.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = |x^2 - 4x|$.`,
          figure: {
            type: "plot",
            x: [-1.6, 5.8], y: [-0.8, 7.2], height: 230,
            curves: [{ fn: "x => Math.abs(x*x - 4*x)" }],
            labels: [{ x: 2, y: 6.2, text: "y = |x² − 4x|", style: "italic", tone: "accent" }],
            alt: "The graph of y = |x² − 4x|: it touches the x-axis at the origin and at x = 4, with a hump between them, and rises steeply on both sides.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of the maximum point of the graph for $0 < x < 4$.`, marks: 2 },
            { label: "(b)", text: String.raw`State the value of $k$ for which the equation $|x^2 - 4x| = k$ has exactly three solutions.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the range of values of $m$ for which the line $y = mx$ meets the graph at exactly three points.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Sketch the graph of $y = |2x - 3|$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the range of values of the constant $c$ for which the line $y = x + c$ meets the graph of $y = |2x - 3|$ at two distinct points.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-modulus-inequality",
      name: String.raw`Simple modulus inequalities`,
      tests: String.raw`Not in K341. Turning $|ax + b| < c$ into one interval and $|ax + b| > c$ into two, sometimes with a quadratic inside the modulus or two conditions to combine.`,
      questions: [
        {
          stem: String.raw`Find the range of values of $x$ for which`,
          parts: [
            { label: "(a)", text: String.raw`$|2x - 3| < 5$,`, marks: 2 },
            { label: "(b)", text: String.raw`$|x + 2| \ge 3$,`, marks: 2 },
            { label: "(c)", text: String.raw`$|x^2 - 5| < 4$.`, marks: 4 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Find the integer values of $x$ for which $|3x - 4| \le 5$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the set of values of $x$ which satisfy both $|x - 1| < 3$ and $|x + 1| > 2$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-reducible-modulus-equation",
      name: String.raw`Equations that reduce to $|x| = k$ or $|\mathrm{f}(x)| = k$`,
      tests: String.raw`Not in K341. Spotting a quadratic in $|x|$ (using $x^2 = |x|^2$) or a modulus of an exponential, solving for the modulus first and rejecting negative values of the modulus.`,
      questions: [
        {
          stem: String.raw`Solve the equations`,
          parts: [
            { label: "(a)", text: String.raw`$x^2 - 3|x| - 10 = 0$,`, marks: 3 },
            { label: "(b)", text: String.raw`$|2^x - 4| = 2$, giving any non-exact answer correct to 3 significant figures.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
