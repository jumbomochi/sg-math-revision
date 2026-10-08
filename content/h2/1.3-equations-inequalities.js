H2.addTopic({
  id: "1.3",
  title: "Equations and Inequalities",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Setting up and solving equations, linear systems and inequalities, by algebra or with a GC.`,
  syllabus: {
    include: [
      String.raw`formulating an equation, a system of linear equations, or inequalities from a problem situation`,
      String.raw`solving an equation exactly or approximately using a graphing calculator or a graphing software`,
      String.raw`solving a system of linear equations using a graphing calculator or a graphing software`,
      String.raw`solving inequalities of the form $\dfrac{\mathrm{f}(x)}{\mathrm{g}(x)} > 0$ where $\mathrm{f}(x)$ and $\mathrm{g}(x)$ are linear expressions or quadratic expressions`,
      String.raw`concept of $|x|$, and use of relations $|x - a| < b \iff a - b < x < a + b$ and $|x - a| > b \iff x < a - b$ or $x > a + b$`,
      String.raw`solving inequalities by graphical methods`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Systems of linear equations`,
      body: String.raw`- **Define your unknowns** in words, with units ("Let $x$ be the price, in dollars, of one coffee").
- $n$ unknowns need $n$ independent equations. Write each equation down in full before using the GC — the equations carry method marks.
- Solve with the GC's simultaneous-equation solver (or matrix rref). Copy the answer, then **answer the question asked** in context (e.g. "Each coffee costs \$3.80").
- Curve fitting is the same idea: a point $(p, q)$ on $y = ax^2 + bx + c$ gives the linear equation $ap^2 + bp + c = q$; a gradient condition gives another.`,
    },
    {
      title: String.raw`Solving equations with the GC`,
      body: String.raw`- Rearrange to $\mathrm{f}(x) = 0$ and use the **zero** function, or graph both sides and use **intersect**.
- Choose a sensible window — roots outside the window are easily missed. Check the number of roots against a sketch.
- Give answers to **3 significant figures** unless told otherwise, and reject roots outside the context's domain (e.g. a length must be positive).
- "Exact" or "without using a calculator" means algebra: factorise, use the quadratic formula, or reduce to a standard form.`,
    },
    {
      title: String.raw`Rational inequalities $\dfrac{\mathrm{f}(x)}{\mathrm{g}(x)} > 0$`,
      body: String.raw`**Never multiply both sides by an expression whose sign is unknown.** Instead:

1. Bring everything to one side and combine into a single fraction.
2. Factorise numerator and denominator fully.
3. Mark the critical values on a number line and use a **sign diagram** (or multiply through by $\mathrm{g}(x)^2 > 0$).
4. Values that make the **denominator zero are always excluded**, even for $\ge$ or $\le$.

A quadratic factor with positive leading coefficient and negative discriminant (show this, or complete the square, e.g. $x^2 + 2x + 5 = (x + 1)^2 + 4 > 0$) is always positive and can be divided out without changing the inequality sign.`,
      figure: {
        type: "plot",
        x: [-3.6, 5.6], y: [-1, 1.3], equal: true, axes: false,
        segments: [
          { from: [-3.4, 0], to: [0.86, 0], thin: true, tone: "ink" },
          { from: [1.14, 0], to: [5.4, 0], thin: true, arrow: true, tone: "ink", label: "x", pos: "e", style: "italic", labelAt: [5.4, 0] },
          { from: [-1, 0], to: [0.86, 0], tone: "warn" },
          { from: [3, 0], to: [5.25, 0], tone: "warn" },
        ],
        circles: [{ c: [1, 0], r: 0.14, tone: "warn" }],
        points: [{ x: -1, y: 0 }, { x: 3, y: 0 }],
        labels: [
          { x: -1, y: -0.5, text: "−1" }, { x: 1, y: -0.5, text: "1" }, { x: 3, y: -0.5, text: "3" },
          { x: -2.3, y: 0.55, text: "−", style: "bold" }, { x: 0, y: 0.55, text: "+", style: "bold" },
          { x: 2, y: 0.55, text: "−", style: "bold" }, { x: 4.2, y: 0.55, text: "+", style: "bold" },
        ],
        caption: String.raw`Sign diagram for $\dfrac{(x + 1)(x - 3)}{x - 1} \ge 0$: the solution is $-1 \le x < 1$ or $x \ge 3$. The zero of the denominator, $x = 1$, is excluded (open circle).`,
        alt: "Number line with critical values −1, 1 and 3. The sign of the expression is − , +, −, + on the four intervals. The solution is highlighted from −1 (solid dot) to 1 (open circle) and from 3 (solid dot) onwards.",
      },
    },
    {
      title: String.raw`Modulus`,
      body: String.raw`$|x| = x$ if $x \ge 0$ and $|x| = -x$ if $x < 0$; $|x - a|$ is the **distance** between $x$ and $a$ on the number line.

- $|x - a| < b \iff a - b < x < a + b$ (memorise).
- $|x - a| > b \iff x < a - b$ or $x > a + b$ (memorise).
- $|\mathrm{f}(x)| < |\mathrm{g}(x)| \iff [\mathrm{f}(x)]^2 < [\mathrm{g}(x)]^2$, since both sides are non-negative.
- When the right-hand side can be negative (e.g. $|x^2 - 1| > 2x$), do **not** square; sketch both graphs or split into cases.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 6.6], y: [-1.1, 1.4], equal: true, axes: false,
          segments: [
            { from: [-0.4, 0], to: [0.86, 0], thin: true, tone: "ink" },
            { from: [1.14, 0], to: [4.86, 0], thin: true, tone: "ink" },
            { from: [5.14, 0], to: [6.4, 0], thin: true, arrow: true, tone: "ink" },
            { from: [1.14, 0], to: [4.86, 0], tone: "warn" },
            { from: [3, 0.55], to: [1.08, 0.55], arrow: true, thin: true, tone: "muted", label: "b", pos: "n", style: "italic" },
            { from: [3, 0.55], to: [4.92, 0.55], arrow: true, thin: true, tone: "muted", label: "b", pos: "n", style: "italic" },
          ],
          circles: [{ c: [1, 0], r: 0.14, tone: "warn" }, { c: [5, 0], r: 0.14, tone: "warn" }],
          points: [{ x: 3, y: 0 }],
          labels: [{ x: 1, y: -0.55, text: "a − b", style: "italic" }, { x: 3, y: -0.55, text: "a", style: "italic" }, { x: 5, y: -0.55, text: "a + b", style: "italic" }],
          caption: String.raw`$|x - a| < b$: $x$ is within distance $b$ of $a$.`,
          alt: "Number line with the point a and arrows of length b to either side, reaching a − b and a + b, which are open circles. The interval between them is highlighted.",
        },
        {
          type: "plot",
          x: [-0.8, 5], y: [-0.7, 3.2], height: 220,
          shade: [{ upper: "x => 1.5", lower: "x => Math.abs(x - 2)", from: 0.5, to: 3.5, tone: "warn" }],
          curves: [{ fn: "x => Math.abs(x - 2)" }],
          lines: [{ y: 1.5, label: "y = b" }],
          segments: [
            { from: [0.5, 1.5], to: [0.5, 0], dashed: true, thin: true, tone: "muted" },
            { from: [3.5, 1.5], to: [3.5, 0], dashed: true, thin: true, tone: "muted" },
            { from: [0.5, 0], to: [3.5, 0], tone: "warn" },
          ],
          xTicks: [{ x: 0.5, label: "a − b" }, { x: 2, label: "a" }, { x: 3.5, label: "a + b" }],
          labels: [{ x: 4.1, y: 2.75, text: "y = |x − a|", pos: "w", style: "italic", tone: "accent" }],
          caption: String.raw`The same inequality from graphs: $y = |x - a|$ lies below $y = b$ for $a - b < x < a + b$.`,
          alt: "Graph of the V-shaped y = |x − a| with vertex on the x-axis at a, and the horizontal line y = b. The region where the V lies below the line is shaded, and the x-interval from a − b to a + b is highlighted on the x-axis.",
        },
      ],
    },
    {
      title: String.raw`Graphical methods`,
      body: String.raw`To solve $\mathrm{f}(x) > \mathrm{g}(x)$, sketch $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$ on the same axes and read off the $x$-values where the first graph is **above** the second.

- Find the intersection points exactly (algebra) or with the GC (state 3 s.f.).
- Include the sketch in your working, with intersections labelled — "from GC" alone with no supporting sketch risks losing marks.
- Watch vertical asymptotes: the inequality can change direction there without an intersection.`,
      figure: {
        type: "plot",
        x: [-4.2, 4.2], y: [-4, 4.5], height: 280,
        shade: [
          { upper: "x => x + 1", lower: "x => 2/x", from: -2, to: -0.02, tone: "warn" },
          { upper: "x => x + 1", lower: "x => 2/x", from: 1, to: 4.2, tone: "warn" },
        ],
        curves: [{ fn: "x => 2/x", tone: "good" }, { fn: "x => x + 1" }],
        segments: [
          { from: [-2, -1], to: [-2, 0], dashed: true, thin: true, tone: "muted" },
          { from: [1, 2], to: [1, 0], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: -2, y: -1, label: "(−2, −1)", pos: "w" }, { x: 1, y: 2 }],
        labels: [
          { x: 1.25, y: 1.75, text: "(1, 2)", pos: "e" },
          { x: 2.6, y: 4.1, text: "y = x + 1", pos: "w", style: "italic", tone: "accent" },
          { x: 3.2, y: 0.3, text: "y = 2/x", pos: "c", style: "italic", tone: "good" },
        ],
        caption: String.raw`$x + 1 > \dfrac{2}{x}$: the line is above the curve for $-2 < x < 0$ or $x > 1$. The switch at $x = 0$ comes from the asymptote, not from an intersection.`,
        alt: "The line y = x + 1 and the hyperbola y = 2/x, meeting at (−2, −1) and (1, 2). The regions where the line lies above the curve are shaded: between x = −2 and the y-axis, and to the right of x = 1.",
      },
    },
    {
      title: String.raw`"Hence" by substitution`,
      body: String.raw`If the solution of an inequality in $x$ is known, a related inequality is solved by **replacing $x$** throughout and solving for the new variable.

| Replace $x$ by | Watch for |
| $\lvert x \rvert$ | $\lvert x \rvert \ge 0$: discard negative ranges, and the answer is symmetric about 0 |
| $\mathrm{e}^x$ | $\mathrm{e}^x > 0$: discard non-positive ranges; then take ln |
| $\ln x$ | answer must have $x > 0$; exponentiate each bound |
| $\dfrac{1}{x}$ | split into $x > 0$ and $x < 0$ before inverting each bound |
| $-x$ or $x - a$ | reverse the inequality signs when multiplying by $-1$ |

Show the substitution explicitly ("replace $x$ by $|x|$") — that line is what "hence" is asking for. Re-solving from scratch earns no marks.`,
      figure: {
        type: "plot",
        x: [-4.6, 4.6], y: [-0.5, 3.8], equal: true, axes: false,
        segments: [
          { from: [-4.4, 2.6], to: [-2.14, 2.6], thin: true, tone: "ink", arrowStart: true },
          { from: [-1.86, 2.6], to: [0.86, 2.6], thin: true, tone: "ink" },
          { from: [1.14, 2.6], to: [2.86, 2.6], thin: true, tone: "ink" },
          { from: [3.14, 2.6], to: [4.4, 2.6], thin: true, arrow: true, tone: "ink" },
          { from: [-4.4, 2.6], to: [-2.14, 2.6], tone: "warn", arrowStart: true },
          { from: [1.14, 2.6], to: [2.86, 2.6], tone: "warn" },
          { from: [-4.4, 0.6], to: [-3.14, 0.6], thin: true, tone: "ink", arrowStart: true },
          { from: [-2.86, 0.6], to: [-1.14, 0.6], thin: true, tone: "ink" },
          { from: [-0.86, 0.6], to: [0.86, 0.6], thin: true, tone: "ink" },
          { from: [1.14, 0.6], to: [2.86, 0.6], thin: true, tone: "ink" },
          { from: [3.14, 0.6], to: [4.4, 0.6], thin: true, arrow: true, tone: "ink" },
          { from: [-2.86, 0.6], to: [-1.14, 0.6], tone: "warn" },
          { from: [1.14, 0.6], to: [2.86, 0.6], tone: "warn" },
        ],
        circles: [
          { c: [-2, 2.6], r: 0.14, tone: "warn" }, { c: [1, 2.6], r: 0.14, tone: "warn" }, { c: [3, 2.6], r: 0.14, tone: "warn" },
          { c: [-3, 0.6], r: 0.14, tone: "warn" }, { c: [-1, 0.6], r: 0.14, tone: "warn" }, { c: [1, 0.6], r: 0.14, tone: "warn" }, { c: [3, 0.6], r: 0.14, tone: "warn" },
        ],
        labels: [
          { x: -4.4, y: 3.4, text: "x < −2 or 1 < x < 3", pos: "e", style: "small" },
          { x: -2, y: 2.15, text: "−2" }, { x: 0, y: 2.15, text: "0" }, { x: 1, y: 2.15, text: "1" }, { x: 3, y: 2.15, text: "3" },
          { x: -4.4, y: 1.3, text: "replace x by |x|:  −3 < x < −1 or 1 < x < 3", pos: "e", style: "small" },
          { x: -3, y: 0.15, text: "−3" }, { x: -1, y: 0.15, text: "−1" }, { x: 0, y: 0.15, text: "0" }, { x: 1, y: 0.15, text: "1" }, { x: 3, y: 0.15, text: "3" },
        ],
        caption: String.raw`If the solution in $x$ is $x < -2$ or $1 < x < 3$, then $|x| < -2$ is impossible and $1 < |x| < 3$ gives a range on each side of 0 — the answer is symmetric about 0.`,
        alt: "Two number lines. The top one shows the solution x < −2 or 1 < x < 3. The bottom one shows the result of replacing x by |x|: the part x < −2 is discarded and 1 < x < 3 is reflected to give −3 < x < −1 or 1 < x < 3.",
      },
    },
    {
      title: String.raw`Formulating from a problem situation`,
      body: String.raw`- Translate each sentence into one equation or inequality; "at least" is $\ge$, "at most" / "not more than" is $\le$, "exceeds" is $>$.
- State the natural restrictions on the variable (lengths positive, integers for counts) and apply them to the final answer.
- For integer contexts, the final answer is a **set of integers** or a least/greatest integer, not an interval.`,
    },
  ],
  archetypes: [
    {
      id: "1.3-linear-system-context",
      name: String.raw`Formulating and solving a system of linear equations`,
      tests: String.raw`Setting up three (or more) linear equations from a real-world description or from conditions on a curve, solving with the GC, and interpreting the solution in context.`,
      questions: [
        {
          stem: String.raw`A café sells coffee, tea and juice. Each drink of the same type has the same price. Three customers place the following orders.

| Customer | Coffee | Tea | Juice | Total paid |
| Ann | 2 | 3 | 1 | \$19.60 |
| Ben | 1 | 2 | 3 | \$21.70 |
| Chen | 4 | 1 | 2 | \$25.20 |`,
          parts: [
            { label: "(i)", text: String.raw`Write down and solve equations to find the price of each type of drink.`, marks: 4 },
            { label: "(ii)", text: String.raw`Determine whether a customer with \$20 can afford two drinks of each type.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A ball is thrown upwards from a platform. Its height above the ground, $h$ metres, $t$ seconds after it is thrown is modelled by $h = at^2 + bt + c$, where $a$, $b$ and $c$ are constants. The heights after 1, 2 and 3 seconds are 18.6 m, 25.9 m and 23.4 m respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$, $b$ and $c$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State the height of the platform.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the time taken for the ball to reach the ground, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the greatest height reached by the ball, giving your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-formulate-equation-inequality",
      name: String.raw`Formulating an equation or inequality from context`,
      tests: String.raw`Building a polynomial model from a geometric or practical situation, solving it with the GC (or exactly), and rejecting values that make no sense in context.`,
      questions: [
        {
          stem: String.raw`A rectangular sheet of card measures 30 cm by 20 cm. A square of side $x$ cm is cut from each corner, as shown in the diagram, and the sides are folded up to form an open box.`,
          figure: {
            type: "plot",
            x: [-3.5, 33.5], y: [-3.6, 22], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [30, 0], [30, 20], [0, 20]], tone: "ink" },
              { points: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: true, tone: "muted" },
              { points: [[26, 0], [30, 0], [30, 4], [26, 4]], fill: true, tone: "muted" },
              { points: [[26, 16], [30, 16], [30, 20], [26, 20]], fill: true, tone: "muted" },
              { points: [[0, 16], [4, 16], [4, 20], [0, 20]], fill: true, tone: "muted" },
              { points: [[4, 4], [26, 4], [26, 16], [4, 16]], dashed: true, tone: "muted" },
            ],
            labels: [
              { x: 15, y: 0, text: "30 cm", pos: "s" },
              { x: 0, y: 10, text: "20 cm", pos: "w" },
              { x: 2, y: 20, text: "x", pos: "n", style: "italic" },
              { x: 30, y: 18, text: "x", pos: "e", style: "italic" },
            ],
            caption: String.raw`Dashed lines are the folds.`,
            alt: "A 30 cm by 20 cm rectangle with a shaded square of side x removed from each corner; dashed fold lines join the inner corners of the squares.",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that the volume, $V\ \mathrm{cm}^3$, of the box is given by $V = 4x^3 - 100x^2 + 600x$, and state the range of possible values of $x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the values of $x$ for which the volume of the box is $800\ \mathrm{cm}^3$, giving your answers correct to 3 significant figures.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence find the range of values of $x$ for which the volume of the box exceeds $800\ \mathrm{cm}^3$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A farmer uses 60 m of fencing to enclose a rectangular plot against a long straight wall, so that fencing is needed on three sides only, as shown in the diagram. The two sides perpendicular to the wall each have length $x$ m.`,
          figure: {
            type: "plot",
            x: [-2.5, 40.5], y: [-1.5, 18.5], equal: true, axes: false,
            segments: [
              { from: [0, 15], to: [38, 15], tone: "ink" },
              { from: [0, 15], to: [1, 16.2], thin: true, tone: "muted" }, { from: [2, 15], to: [3, 16.2], thin: true, tone: "muted" }, { from: [4, 15], to: [5, 16.2], thin: true, tone: "muted" }, { from: [6, 15], to: [7, 16.2], thin: true, tone: "muted" }, { from: [8, 15], to: [9, 16.2], thin: true, tone: "muted" }, { from: [10, 15], to: [11, 16.2], thin: true, tone: "muted" }, { from: [12, 15], to: [13, 16.2], thin: true, tone: "muted" }, { from: [14, 15], to: [15, 16.2], thin: true, tone: "muted" }, { from: [16, 15], to: [17, 16.2], thin: true, tone: "muted" }, { from: [18, 15], to: [19, 16.2], thin: true, tone: "muted" }, { from: [20, 15], to: [21, 16.2], thin: true, tone: "muted" }, { from: [22, 15], to: [23, 16.2], thin: true, tone: "muted" }, { from: [24, 15], to: [25, 16.2], thin: true, tone: "muted" }, { from: [26, 15], to: [27, 16.2], thin: true, tone: "muted" }, { from: [28, 15], to: [29, 16.2], thin: true, tone: "muted" }, { from: [30, 15], to: [31, 16.2], thin: true, tone: "muted" }, { from: [32, 15], to: [33, 16.2], thin: true, tone: "muted" }, { from: [34, 15], to: [35, 16.2], thin: true, tone: "muted" }, { from: [36, 15], to: [37, 16.2], thin: true, tone: "muted" },
              { from: [2, 15], to: [2, 2], tone: "accent" },
              { from: [2, 2], to: [36, 2], tone: "accent" },
              { from: [36, 2], to: [36, 15], tone: "accent" },
            ],
            labels: [
              { x: 19, y: 16.4, text: "wall", pos: "n", style: "small" },
              { x: 2, y: 8.5, text: "x m", pos: "w", style: "italic" },
              { x: 36, y: 8.5, text: "x m", pos: "e", style: "italic" },
              { x: 19, y: 2, text: "fence", pos: "s", style: "small", tone: "accent" },
            ],
            alt: "Plan view of a rectangular plot against a long straight wall. Fencing runs along the other three sides; the two sides perpendicular to the wall are each labelled x m.",
          },
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that the area of the plot, $A\ \mathrm{m}^2$, is given by $A = 60x - 2x^2$.`, marks: 1 },
            { label: "(ii)", text: String.raw`The area of the plot must be at least $400\ \mathrm{m}^2$. Without using a calculator, find the range of possible values of $x$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given further that the side parallel to the wall must not exceed 30 m, find the range of possible values of $x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-rational-inequality",
      name: String.raw`Rational inequalities solved algebraically`,
      tests: String.raw`Solving $\frac{\mathrm{f}(x)}{\mathrm{g}(x)} \gtrless k$ without a calculator by collecting terms into one fraction, factorising and using a sign diagram; recognised by "without using a calculator".`,
      questions: [
        {
          stem: String.raw`Without using a calculator, solve the inequality
$$\frac{x^2 + 2x + 3}{x^2 - x - 2} \ge 1.$$`,
          calculator: false,
          marks: 4,
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $x^2 + 5x + 8 > 0$ for all real values of $x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence solve the inequality $\dfrac{2x^2 + 5x + 4}{x^2 - 4} > 1$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.3-hence-substitution",
      name: String.raw`"Hence" deductions by substitution`,
      tests: String.raw`Solving a base rational inequality, then deducing the solution of a related inequality by replacing $x$ with $|x|$, $\mathrm{e}^x$, $\ln x$, $\frac{1}{x}$ or $-x$, taking care with the restrictions each substitution imposes.`,
      questions: [
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the inequality $\dfrac{3x - 1}{x + 1} < x - 1$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve $\dfrac{3|x| - 1}{|x| + 1} < |x| - 1$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence solve $\dfrac{3\mathrm{e}^x - 1}{\mathrm{e}^x + 1} < \mathrm{e}^x - 1$, giving your answer in exact form.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the inequality $\dfrac{x + 6}{x + 2} \ge x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve $\dfrac{1 + 6x}{1 + 2x} \ge \dfrac{1}{x}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve $\dfrac{\ln x + 6}{\ln x + 2} \ge \ln x$, giving your answer in exact form.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-modulus-inequality",
      name: String.raw`Modulus equations and inequalities`,
      tests: String.raw`Using $|x - a| < b \iff a - b < x < a + b$ and its counterpart, squaring when both sides are non-negative moduli, and using a sketch when one side can be negative.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, solve the following inequalities.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$|3x - 2| \le 7$`, marks: 2 },
            { label: "(b)", text: String.raw`$|x^2 - 5| > 4$`, marks: 3 },
            { label: "(c)", text: String.raw`$|x - 1| < |2x + 1|$`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch the graphs of $y = |x^2 - 4|$ and $y = 3x$, stating the coordinates of the points where the graphs meet the axes.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the $x$-coordinates of the points of intersection of the two graphs.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve the inequality $|x^2 - 4| > 3x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-graphical-gc",
      name: String.raw`Solving equations and inequalities graphically with the GC`,
      tests: String.raw`Sketching two curves, using the GC to find their intersections to 3 s.f., and reading off where one curve lies above the other; frequently followed by a "hence" with $|x|$.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \mathrm{e}^{\frac{1}{2}x}$ and $\mathrm{g}(x) = 5 - x^2$.`,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Solve the inequality $\mathrm{e}^{\frac{1}{2}x} < 5 - x^2$, giving the bounds correct to 3 significant figures.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve the inequality $\mathrm{e}^{\frac{1}{2}|x|} < 5 - x^2$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x + 1}{x - 2}$.`,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch $C$ and the line $y = 2x - 3$, stating the equations of the asymptotes of $C$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using your diagram, solve the inequality $\dfrac{x + 1}{x - 2} \le 2x - 3$, giving any non-exact bounds correct to 3 significant figures.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
