H2.addTopic({
  id: "X2",
  title: "Functions",
  tags: ["IP"],
  summary: String.raw`Not in K341 (taught in many IP schools; also in H2 1.1). Function notation, domain and range, one-one functions, composite functions and inverse functions with their graphs.`,
  syllabus: {
    include: [
      String.raw`function notation $\mathrm{f}: x \mapsto \mathrm{f}(x)$ and $\mathrm{f}(x)$; domain and range`,
      String.raw`finding the range of a function over a given domain from its graph`,
      String.raw`one-one and many-one functions`,
      String.raw`composite functions $\mathrm{fg}$, including $\mathrm{f}^2 = \mathrm{ff}$`,
      String.raw`inverse functions $\mathrm{f}^{-1}$ and the condition for an inverse to exist (f is one-one)`,
      String.raw`restricting the domain of a quadratic function so that its inverse exists`,
      String.raw`the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ as reflections of each other in the line $y = x$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Functions, notation, domain and range`,
      body: String.raw`Not in K341 (taught in many IP schools; also in H2 1.1). A **function** is a rule that gives **exactly one** output for each input in its domain.

- $\mathrm{f}: x \mapsto 2x + 1,\ x \in \mathbb{R}$ is read "f maps $x$ to $2x + 1$". The same function is written $\mathrm{f}(x) = 2x + 1$. Then $\mathrm{f}(3) = 7$ is the **image** of $3$.
- The **domain** is the set of inputs (written after the rule, e.g. $x \in \mathbb{R}$, $x \ge 0$, $-1 \le x \le 3$).
- The **range** is the set of outputs (images) you actually get.
- **Vertical line test:** a graph is the graph of a function if every vertical line meets it at most once. A circle is not the graph of a function.
- Values that make a denominator zero, or a square root of a negative number, must be left out of the domain: $\mathrm{f}(x) = \dfrac{1}{x - 2}$ needs $x \ne 2$.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 2.6], y: [-1.8, 4.2], height: 190,
          curves: [{ fn: "x => x*x - 1", label: "y = x² − 1", labelAt: 1.9 }],
          lines: [{ x: 1.2 }],
          points: [{ x: 1.2, y: 0.44 }],
          caption: String.raw`A function: each vertical line meets the graph once.`,
          alt: "A U-shaped parabola y = x² − 1 with a dashed vertical line that meets it at exactly one point.",
        },
        {
          type: "plot",
          x: [-3, 3], y: [-2.6, 2.6], equal: true,
          circles: [{ c: [0, 0], r: 2 }],
          lines: [{ x: 1.2 }],
          points: [{ x: 1.2, y: 1.6 }, { x: 1.2, y: -1.6 }],
          caption: String.raw`Not a function: one input $x$ gives two outputs.`,
          alt: "A circle centred at the origin with a dashed vertical line that meets it at two points.",
        },
      ],
    },
    {
      title: String.raw`Finding the range`,
      body: String.raw`To find the range over a given domain:

1. Sketch the graph **only over the domain**.
2. Find the $y$-values at the end-points, and at any turning point inside the domain.
3. Read off the lowest and highest $y$-values.

For a quadratic, complete the square to find the turning point. The greatest or least value may come from the turning point, not from an end-point. Use $\le$ for an end-point that is included and $<$ for one that is not.

For a linear function, the range runs between the images of the two end-points (watch out for a negative gradient, which swaps them).`,
      figure: {
        type: "plot",
        x: [-2.2, 3.4], y: [-1.1, 5.2], height: 240,
        shade: [
          { upper: "x => 0.12", lower: "x => -0.12", from: -1, to: 2, tone: "good" },
          { upper: "x => 4", lower: "x => 0", from: -0.07, to: 0.07, tone: "warn" },
        ],
        curves: [{ fn: "x => 4 - (x - 1)*(x - 1)", domain: [-1, 2], label: "y = f(x)", labelAt: 1.8 }],
        segments: [{ from: [1, 4], to: [0, 4], dashed: true, thin: true, tone: "muted" }],
        points: [
          { x: -1, y: 0, label: "(−1, 0)", pos: "nw" },
          { x: 1, y: 4, label: "(1, 4)", pos: "n" },
          { x: 2, y: 3, label: "(2, 3)", pos: "e" },
        ],
        labels: [
          { x: 0.5, y: -0.55, text: "domain", style: "small", tone: "good" },
          { x: 0.15, y: 1.2, text: "range", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`$\mathrm{f}(x) = 4 - (x - 1)^2$, $-1 \le x \le 2$, has range $0 \le \mathrm{f}(x) \le 4$. The greatest value comes from the turning point.`,
        alt: "The graph of y = 4 − (x − 1)² drawn for −1 ≤ x ≤ 2, from (−1, 0) up to the maximum (1, 4) and down to (2, 3). The domain is highlighted on the x-axis and the range from 0 to 4 on the y-axis.",
      },
    },
    {
      title: String.raw`One-one and many-one functions`,
      body: String.raw`A function is **one-one** if different inputs always give different outputs. Otherwise it is **many-one**.

- **Horizontal line test:** f is one-one if every horizontal line meets its graph **at most once**.
- To show that f is **not** one-one, give two inputs with the same image, e.g. "$\mathrm{f}(-2) = \mathrm{f}(2) = 4$", or name a horizontal line that meets the graph twice.
- Straight lines (non-horizontal), $y = \mathrm{e}^x$ and $y = \ln x$ are one-one. A quadratic on $\mathbb{R}$ is many-one.

The domain matters: $x \mapsto x^2,\ x \in \mathbb{R}$ is many-one, but $x \mapsto x^2,\ x \ge 0$ is one-one.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 2.6], y: [-0.8, 4.4], height: 190,
          curves: [{ fn: "x => x*x", label: "y = x²", labelAt: 1.3 }],
          lines: [{ y: 2.5 }],
          points: [{ x: -1.581, y: 2.5 }, { x: 1.581, y: 2.5 }],
          caption: String.raw`$x \in \mathbb{R}$: many-one.`,
          alt: "The parabola y = x² for all x, with a dashed horizontal line meeting it at two points.",
        },
        {
          type: "plot",
          x: [-0.8, 2.6], y: [-0.8, 4.4], height: 190,
          curves: [{ fn: "x => x*x", domain: [0, 2.2], label: "y = x², x ≥ 0", labelAt: 1.0 }],
          lines: [{ y: 2.5 }],
          points: [{ x: 1.581, y: 2.5 }],
          caption: String.raw`$x \ge 0$: one-one.`,
          alt: "The right half of the parabola y = x², for x ≥ 0, with a dashed horizontal line meeting it at only one point.",
        },
      ],
    },
    {
      title: String.raw`Composite functions`,
      body: String.raw`$\mathrm{fg}(x)$ means $\mathrm{f}(\mathrm{g}(x))$: apply **g first**, then f.

Example: if $\mathrm{f}(x) = x + 4$ and $\mathrm{g}(x) = x^2$, then $\mathrm{fg}(x) = x^2 + 4$ but $\mathrm{gf}(x) = (x + 4)^2$. In general $\mathrm{fg} \ne \mathrm{gf}$.

- $\mathrm{f}^2(x)$ means $\mathrm{ff}(x) = \mathrm{f}(\mathrm{f}(x))$, **not** $[\mathrm{f}(x)]^2$.
- To find $\mathrm{fg}(x)$, replace every $x$ in the rule for f by the whole expression $\mathrm{g}(x)$, in brackets.
- For a number, work from the inside out: $\mathrm{fg}(3) = \mathrm{f}(\mathrm{g}(3))$.
- fg only makes sense if every output of g is an allowed input of f (the range of g lies inside the domain of f).`,
      figure: {
        type: "plot",
        x: [0, 10], y: [-0.6, 1.9], equal: true, axes: false,
        polygons: [
          { points: [[2.2, 0.15], [3.6, 0.15], [3.6, 1.15], [2.2, 1.15]], tone: "good", fill: true, label: "g", labelAt: [2.9, 0.65], style: "bold" },
          { points: [[6.2, 0.15], [7.6, 0.15], [7.6, 1.15], [6.2, 1.15]], tone: "accent", fill: true, label: "f", labelAt: [6.9, 0.65], style: "bold" },
        ],
        segments: [
          { from: [0.9, 0.65], to: [2.15, 0.65], arrow: true, tone: "muted" },
          { from: [3.65, 0.65], to: [6.15, 0.65], arrow: true, tone: "muted" },
          { from: [7.65, 0.65], to: [9.1, 0.65], arrow: true, tone: "muted" },
        ],
        labels: [
          { x: 0.5, y: 0.65, text: "x", style: "italic" },
          { x: 4.9, y: 1.0, text: "g(x)", style: "italic" },
          { x: 9.0, y: 1.05, text: "fg(x)", style: "italic" },
          { x: 4.9, y: -0.35, text: "g acts first", style: "small", tone: "muted" },
        ],
        caption: String.raw`$\mathrm{fg}(x) = \mathrm{f}(\mathrm{g}(x))$: the input goes through g, then through f.`,
        alt: "A flow diagram: x goes into a box labelled g, the output g(x) goes into a box labelled f, and the final output is fg(x).",
      },
    },
    {
      title: String.raw`Inverse functions`,
      body: String.raw`The inverse $\mathrm{f}^{-1}$ "undoes" f: if $\mathrm{f}(a) = b$ then $\mathrm{f}^{-1}(b) = a$.

- $\mathrm{f}^{-1}$ **exists only if f is one-one**. (If two inputs gave the same output, $\mathrm{f}^{-1}$ would not know which one to return.)
- Domain of $\mathrm{f}^{-1}$ = range of f, and range of $\mathrm{f}^{-1}$ = domain of f.
- $\mathrm{ff}^{-1}(x) = \mathrm{f}^{-1}\mathrm{f}(x) = x$.

**Method** to find $\mathrm{f}^{-1}(x)$:

1. Let $y = \mathrm{f}(x)$.
2. Make $x$ the subject.
3. Replace $y$ by $x$ (and $x$ by $\mathrm{f}^{-1}(x)$).
4. State the domain of $\mathrm{f}^{-1}$ (the range of f).

Example: $y = \dfrac{x + 2}{x - 1} \Rightarrow xy - y = x + 2 \Rightarrow x(y - 1) = y + 2 \Rightarrow x = \dfrac{y + 2}{y - 1}$, so $\mathrm{f}^{-1}(x) = \dfrac{x + 2}{x - 1}$ (this f is its own inverse).

To find a single value such as $\mathrm{f}^{-1}(5)$, you can simply solve $\mathrm{f}(x) = 5$.`,
    },
    {
      title: String.raw`Restricting the domain of a quadratic`,
      body: String.raw`A quadratic on $\mathbb{R}$ is many-one, so it has no inverse. Restrict the domain to **one side of the turning point** to make it one-one.

1. Complete the square: $\mathrm{f}(x) = a(x - h)^2 + k$. The turning point is $(h, k)$.
2. The largest domains that work are $x \ge h$ or $x \le h$.
3. When you make $x$ the subject, the square root gives $\pm$. Choose the sign that matches the domain: for $x \ge h$, $x - h = +\sqrt{\cdots}$; for $x \le h$, $x - h = -\sqrt{\cdots}$.

"Find the least value of $k$ such that f with domain $x \ge k$ has an inverse": $k$ is the $x$-coordinate of the turning point.`,
      figure: {
        type: "plot",
        x: [-1, 5.2], y: [-1.8, 4.6], height: 230,
        curves: [
          { fn: "x => (x - 2)*(x - 2) - 1", domain: [-0.3, 2], dashed: true, tone: "muted" },
          { fn: "x => (x - 2)*(x - 2) - 1", domain: [2, 4.6] },
        ],
        labels: [{ x: 3.7, y: 3.7, text: "y = (x − 2)² − 1, x ≥ 2", pos: "w", style: "italic", tone: "accent" }],
        lines: [{ y: 2.2 }],
        points: [{ x: 2, y: -1, label: "(2, −1)", pos: "s" }, { x: 2 + Math.sqrt(3.2), y: 2.2 }],
        caption: String.raw`Keeping only $x \ge 2$ (solid) makes the function one-one: each horizontal line meets it at most once.`,
        alt: "The parabola y = (x − 2)² − 1 with minimum point (2, −1). The left half, x < 2, is dashed and the right half, x ≥ 2, is solid. A dashed horizontal line meets the solid part once.",
      },
    },
    {
      title: String.raw`Graphs of f and $\mathrm{f}^{-1}$`,
      body: String.raw`The graph of $y = \mathrm{f}^{-1}(x)$ is the **reflection** of the graph of $y = \mathrm{f}(x)$ in the line $y = x$.

- A point $(a, b)$ on $y = \mathrm{f}(x)$ becomes $(b, a)$ on $y = \mathrm{f}^{-1}(x)$: intercepts swap axes.
- Draw both graphs on the same axes with **equal scales** and draw the line $y = x$ (dashed). Label each graph.
- If f is increasing, the graphs of f and $\mathrm{f}^{-1}$ can only meet on the line $y = x$. So their intersection points can be found from $\mathrm{f}(x) = x$, which is often easier than $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$.`,
      figure: {
        type: "plot",
        x: [-0.6, 4.6], y: [-0.6, 4.6], equal: true, originLabel: "sw",
        curves: [
          { fn: "x => x*x/2 + 1", domain: [0, 2.5], label: "y = f(x)", labelAt: 2.2 },
          { fn: "x => Math.sqrt(2*(x - 1))", domain: [1, 4.2], tone: "good", label: "y = f⁻¹(x)", labelAt: 3.6 },
        ],
        lines: [{ fn: "x => x", label: "y = x", labelAt: 3.9 }],
        points: [{ x: 0, y: 1, label: "(0, 1)", pos: "w" }, { x: 1, y: 0, label: "(1, 0)", pos: "s" }],
        caption: String.raw`$\mathrm{f}(x) = \tfrac{1}{2}x^2 + 1$, $x \ge 0$, and its inverse are mirror images in $y = x$.`,
        alt: "On equal axes, the curve y = f(x) = ½x² + 1 for x ≥ 0 starts at (0, 1) and curves upwards. The curve y = f⁻¹(x) starts at (1, 0) and curves to the right. The dashed line y = x lies between them as a mirror line.",
      },
    },
  ],
  archetypes: [
    {
      id: "X2-notation-range",
      name: String.raw`Function notation, images and range`,
      tests: String.raw`Not in K341. Evaluating images, solving $\mathrm{f}(x) = k$, and finding the range over a restricted domain from a sketch, including a turning point inside the domain.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto 5 - 2x$, $-1 \le x \le 3$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $\mathrm{f}(-1)$ and $\mathrm{f}(3)$.`, marks: 2 },
            { label: "(b)", text: String.raw`State the range of f.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the value of $x$ for which $\mathrm{f}(x) = 0$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The function g is defined by $\mathrm{g}: x \mapsto x^2 - 4x + 1$, $0 \le x \le 5$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $x^2 - 4x + 1$ in the form $(x - a)^2 + b$.`, marks: 2 },
            { label: "(b)", text: String.raw`Sketch the graph of $y = \mathrm{g}(x)$, labelling the end-points and the turning point.`, marks: 3 },
            { label: "(c)", text: String.raw`Find the range of g.`, marks: 2 },
            { label: "(d)", text: String.raw`Explain why g does not have an inverse.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "X2-one-one",
      name: String.raw`Deciding whether a function is one-one`,
      tests: String.raw`Not in K341. Using the horizontal line test, or two inputs with the same image, to decide whether a function is one-one and hence whether it has an inverse. The stated domain decides the answer.`,
      questions: [
        {
          stem: String.raw`For each of the following functions, state, with a reason, whether the function is one-one.`,
          parts: [
            { label: "(a)", text: String.raw`$\mathrm{f}: x \mapsto 3x - 2,\ x \in \mathbb{R}$`, marks: 1 },
            { label: "(b)", text: String.raw`$\mathrm{g}: x \mapsto x^2 + 1,\ x \in \mathbb{R}$`, marks: 1 },
            { label: "(c)", text: String.raw`$\mathrm{h}: x \mapsto x^2 + 1,\ x \ge 0$`, marks: 1 },
            { label: "(d)", text: String.raw`$\mathrm{k}: x \mapsto \sin x,\ 0 \le x \le \pi$`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "X2-composite",
      name: String.raw`Composite functions`,
      tests: String.raw`Not in K341. Forming $\mathrm{fg}(x)$, $\mathrm{gf}(x)$ and $\mathrm{f}^2(x)$ in the correct order, evaluating them at a number, and solving an equation involving a composite function.`,
      questions: [
        {
          stem: String.raw`The functions f and g are defined by $\mathrm{f}: x \mapsto 2x - 3$, $x \in \mathbb{R}$, and $\mathrm{g}: x \mapsto x^2 + 1$, $x \in \mathbb{R}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $\mathrm{fg}(x)$ and $\mathrm{gf}(x)$.`, marks: 3 },
            { label: "(b)", text: String.raw`Solve the equation $\mathrm{fg}(x) = 17$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The functions f and g are defined by $\mathrm{f}: x \mapsto \dfrac{3}{x - 1}$, $x \ne 1$, and $\mathrm{g}: x \mapsto 2x + 1$, $x \in \mathbb{R}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $\mathrm{f}^2(2)$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find an expression for $\mathrm{fg}(x)$, and state the value of $x$ for which $\mathrm{fg}(x)$ is not defined.`, marks: 2 },
            { label: "(c)", text: String.raw`Solve the equation $\mathrm{fg}(x) = 1$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "X2-inverse-function",
      name: String.raw`Finding an inverse function`,
      tests: String.raw`Not in K341. Making $x$ the subject to find $\mathrm{f}^{-1}(x)$ for a linear, rational or exponential function, stating its domain as the range of f, and evaluating the inverse.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto \dfrac{2x + 1}{x - 3}$, $x \ne 3$.`,
          parts: [
            { label: "(a)", text: String.raw`Find an expression for $\mathrm{f}^{-1}(x)$.`, marks: 3 },
            { label: "(b)", text: String.raw`State the value of $x$ for which $\mathrm{f}^{-1}(x)$ is not defined.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the value of $x$ for which $\mathrm{f}^{-1}(x) = 4$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto 2\mathrm{e}^x - 1$, $x \in \mathbb{R}$.`,
          parts: [
            { label: "(a)", text: String.raw`State the range of f.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
            { label: "(c)", text: String.raw`Find the exact value of $\mathrm{f}^{-1}(7)$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "X2-quadratic-inverse",
      name: String.raw`Restricting the domain of a quadratic to find its inverse`,
      tests: String.raw`Not in K341. Completing the square, choosing a domain on one side of the turning point so the function is one-one, and finding the inverse with the correct sign of the square root.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto x^2 - 4x + 7$, $x \ge 2$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $x^2 - 4x + 7$ in the form $(x - a)^2 + b$.`, marks: 2 },
            { label: "(b)", text: String.raw`State the range of f.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
            { label: "(d)", text: String.raw`Explain why $\mathrm{f}^{-1}$ would not exist if the domain of f were $x \in \mathbb{R}$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The function g is defined by $\mathrm{g}: x \mapsto x^2 + 6x + 5$, $x \ge k$, where $k$ is a constant.`,
          parts: [
            { label: "(a)", text: String.raw`Find the least value of $k$ for which $\mathrm{g}^{-1}$ exists.`, marks: 2 },
            { label: "(b)", text: String.raw`Using this value of $k$, find $\mathrm{g}^{-1}(x)$ and state its domain.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X2-graph-inverse",
      name: String.raw`Graphs of a function and its inverse`,
      tests: String.raw`Not in K341. Sketching $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ on the same axes as reflections in $y = x$, and finding where they meet by solving $\mathrm{f}(x) = x$.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto \dfrac{x^2 + 6}{5}$, $x \ge 0$.`,
          parts: [
            { label: "(a)", text: String.raw`State the range of f.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
            { label: "(c)", text: String.raw`On the same diagram, sketch the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$, showing clearly the relationship between them.`, marks: 3 },
            { label: "(d)", text: String.raw`Find the coordinates of the points where the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ meet.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X2-unknown-constants",
      name: String.raw`Finding unknown constants in a function`,
      tests: String.raw`Not in K341. Using given values of $\mathrm{f}(x)$ or $\mathrm{f}^{-1}(x)$ to form and solve simultaneous equations for the constants, then working with the composite or inverse function.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}: x \mapsto ax + b$, $x \in \mathbb{R}$, where $a$ and $b$ are constants. It is given that $\mathrm{f}(1) = 5$ and $\mathrm{f}^{-1}(11) = 3$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find $\mathrm{f}^2(x)$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and solve the equation $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
