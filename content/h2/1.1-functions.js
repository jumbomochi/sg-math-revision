H2.addTopic({
  id: "1.1",
  title: "Functions",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Domain, range, inverse functions and composite functions.`,
  syllabus: {
    include: [
      String.raw`concepts of function, domain and range`,
      String.raw`inverse functions and composite functions`,
      String.raw`conditions for the existence of inverse functions and composite functions`,
      String.raw`domain restriction to obtain an inverse function`,
      String.raw`relationship between graphs of a one-to-one function and its inverse`,
    ],
    exclude: [
      String.raw`the use of the relation $(\mathrm{fg})^{-1} = \mathrm{g}^{-1}\mathrm{f}^{-1}$`,
      String.raw`restriction of domain to obtain a composite function`,
    ],
  },
  concepts: [
    {
      title: String.raw`Function, domain and range`,
      body: String.raw`A **function** $\mathrm{f}: x \mapsto \mathrm{f}(x),\ x \in D_\mathrm{f}$ assigns to every element of the domain $D_\mathrm{f}$ **exactly one** image. The **range** $R_\mathrm{f}$ is the set of all images.

- A rule is not a function unless the domain is stated — always write it down.
- Vertical line test: every vertical line through $D_\mathrm{f}$ meets the graph exactly once.
- To find a range, **sketch the graph over the given domain** and read off the $y$-values. Watch endpoints: is each one included ($\le$) or not ($<$)?`,
      figure: {
        type: "plot",
        x: [-1.8, 4.4], y: [-0.9, 6.2], height: 250,
        shade: [
          { upper: "x => 0.13", lower: "x => -0.13", from: 0, to: 3, tone: "good" },
          { upper: "x => 5", lower: "x => 1", from: -0.08, to: 0.08, tone: "warn" },
        ],
        curves: [{ fn: "x => (x - 2)*(x - 2) + 1", domain: [0, 3], label: "y = f(x)", labelAt: 0.75 }],
        segments: [{ from: [2, 1], to: [0, 1], dashed: true, thin: true, tone: "muted" }],
        points: [
          { x: 0, y: 5, label: "(0, 5)", pos: "e" },
          { x: 2, y: 1, label: "(2, 1)", pos: "s" },
          { x: 3, y: 2, label: "(3, 2)", pos: "e" },
        ],
        labels: [
          { x: 1.5, y: -0.45, text: "domain", style: "small", tone: "good" },
          { x: -0.2, y: 3, text: "range", pos: "w", style: "small", tone: "warn" },
        ],
        caption: String.raw`$\mathrm{f}(x) = (x - 2)^2 + 1$, $0 \le x \le 3$: the range is $1 \le \mathrm{f}(x) \le 5$. The least value comes from the turning point, not from an end-point.`,
        alt: "Graph of y = (x − 2)² + 1 drawn only for 0 ≤ x ≤ 3, from (0, 5) down to the minimum (2, 1) and up to (3, 2). The domain is highlighted on the x-axis from 0 to 3 and the range on the y-axis from 1 to 5.",
      },
    },
    {
      title: String.raw`One-one functions and the inverse`,
      body: String.raw`$\mathrm{f}^{-1}$ exists $\iff$ $\mathrm{f}$ is **one-one**.

- Horizontal line test: every horizontal line $y = k,\ k \in R_\mathrm{f}$, meets the graph **exactly once**. To show f is *not* one-one, give a specific line, e.g. "$y = 2$ cuts the graph twice".
- $D_{\mathrm{f}^{-1}} = R_\mathrm{f}$ and $R_{\mathrm{f}^{-1}} = D_\mathrm{f}$.
- Finding $\mathrm{f}^{-1}$: let $y = \mathrm{f}(x)$, make $x$ the subject, choose the correct sign (from the domain of f), then replace $y$ by $x$.
- Domain restriction: for a quadratic, the largest domain $x \le k$ or $x \ge k$ starts at the turning point (complete the square).`,
      figure: [
        {
          type: "plot",
          x: [-1.6, 3.6], y: [-0.7, 5.2], height: 230,
          curves: [{ fn: "x => (x - 1)*(x - 1) + 1" }],
          lines: [{ y: 3, label: "y = 3" }],
          points: [{ x: 1 - Math.SQRT2, y: 3 }, { x: 1 + Math.SQRT2, y: 3 }],
          caption: String.raw`Not one-one: $y = 3$ meets the graph twice.`,
          alt: "The parabola y = (x − 1)² + 1 over all real x, cut twice by the horizontal line y = 3.",
        },
        {
          type: "plot",
          x: [-1.6, 3.6], y: [-0.7, 5.2], height: 230,
          curves: [
            { fn: "x => (x - 1)*(x - 1) + 1", domain: [-1.6, 1], dashed: true, tone: "muted" },
            { fn: "x => (x - 1)*(x - 1) + 1", domain: [1, 3.6] },
          ],
          lines: [{ y: 3, label: "y = 3" }],
          segments: [{ from: [1, 1], to: [1, 0], dashed: true, thin: true, tone: "muted" }],
          xTicks: [{ x: 1, label: "1" }],
          points: [{ x: 1, y: 1, label: "(1, 1)", pos: "se" }, { x: 1 + Math.SQRT2, y: 3 }],
          caption: String.raw`Domain restricted at the turning point, $x \ge 1$: now one-one.`,
          alt: "The same parabola with only the part x ≥ 1 kept, starting at the vertex (1, 1); the line y = 3 now meets it once. The discarded left half is dashed.",
        },
      ],
    },
    {
      title: String.raw`Graphs of $\mathrm{f}$ and $\mathrm{f}^{-1}$`,
      body: String.raw`The graph of $y = \mathrm{f}^{-1}(x)$ is the reflection of $y = \mathrm{f}(x)$ in the line $y = x$. Use equal scales and draw $y = x$ when sketching both.

If f is **increasing**, the curves $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ meet only on $y = x$, so

$$\mathrm{f}(x) = \mathrm{f}^{-1}(x) \iff \mathrm{f}(x) = x.$$

This shortcut fails for decreasing functions — check graphically.`,
      figure: {
        type: "plot",
        x: [-1.4, 4.8], y: [-0.6, 3.8], equal: true,
        lines: [{ fn: "x => x", label: "y = x", labelAt: 3.95 }],
        curves: [
          { fn: "x => (x*x + 2)/3", domain: [0, 3.5] },
          { fn: "x => Math.sqrt(3*x - 2)", domain: [2/3, 4.8], tone: "good" },
        ],
        segments: [{ from: [2.7, 3.0967], to: [3.0967, 2.7], dashed: true, thin: true, tone: "muted" }],
        points: [
          { x: 1, y: 1 }, { x: 2, y: 2 },
          { x: 2.7, y: 3.0967, label: "(a, b)", pos: "w" },
          { x: 3.0967, y: 2.7, label: "(b, a)", pos: "se" },
        ],
        labels: [
          { x: 2.5, y: 3.62, text: "y = f(x)", pos: "w", style: "italic", tone: "accent" },
          { x: 3.3, y: 1.95, text: "y = f⁻¹(x)", pos: "e", style: "italic", tone: "good" },
        ],
        caption: String.raw`$\mathrm{f}(x) = \frac{1}{3}(x^2 + 2)$, $x \ge 0$, is increasing, so $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ meet only on $y = x$.`,
        alt: "Equal-scale axes showing the increasing curve y = f(x) and its reflection y = f⁻¹(x) in the dashed line y = x. A point (a, b) on f and its image (b, a) on f⁻¹ are joined by a dashed segment perpendicular to y = x. The two curves meet at two points, both on y = x.",
      },
    },
    {
      title: String.raw`Composite functions`,
      body: String.raw`$\mathrm{fg}(x) = \mathrm{f}(\mathrm{g}(x))$ — apply g first.

- $\mathrm{fg}$ exists $\iff R_\mathrm{g} \subseteq D_\mathrm{f}$. Always quote both sets in your answer.
- $D_\mathrm{fg} = D_\mathrm{g}$.
- To find $R_\mathrm{fg}$: take $R_\mathrm{g}$ as the input set of f, sketch $y = \mathrm{f}(x)$ over that set, and read off the outputs. (Do **not** just sketch the formula of fg over $\mathbb{R}$.)`,
      figure: {
        type: "plot",
        x: [0, 10], y: [0, 5], equal: true, axes: false,
        circles: [
          { c: [1.5, 2.3], r: 1.2, fill: true, tone: "muted" },
          { c: [5.3, 2.3], r: 2.1, fill: true, tone: "muted" },
          { c: [5.1, 2.1], r: 1.2, fill: true, tone: "accent" },
          { c: [8.8, 2.3], r: 1.0, fill: true, tone: "good" },
        ],
        segments: [
          { from: [1.65, 2.1], to: [4.9, 2.1], arrow: true, tone: "ink", label: "g", pos: "n", style: "italic", labelAt: [2.95, 2.1] },
          { from: [5.25, 2.1], to: [8.6, 2.1], arrow: true, tone: "ink", label: "f", pos: "n", style: "italic", labelAt: [7.6, 2.1] },
        ],
        points: [
          { x: 1.5, y: 2.1, label: "x", pos: "s", style: "italic" },
          { x: 5.1, y: 2.1, label: "g(x)", pos: "s", style: "italic" },
          { x: 8.8, y: 2.1, label: "fg(x)", pos: "s", style: "italic" },
        ],
        labels: [
          { x: 1.5, y: 3.8, text: "domain of g", style: "small" },
          { x: 5.3, y: 4.68, text: "domain of f", style: "small" },
          { x: 5.1, y: 2.65, text: "range of g", style: "small", tone: "accent" },
          { x: 8.8, y: 3.6, text: "range of fg", style: "small", tone: "good" },
        ],
        caption: String.raw`fg exists because $R_\mathrm{g} \subseteq D_\mathrm{f}$: every output of g is a valid input of f. $R_\mathrm{fg}$ is what f does to $R_\mathrm{g}$ only.`,
        alt: "Arrow diagram: x in the domain of g is sent by g to g(x), which lies in the range of g, drawn as a small set inside the larger domain of f. Then f sends g(x) to fg(x) in the range of fg.",
      },
    },
    {
      title: String.raw`Identities with inverses`,
      body: String.raw`- $\mathrm{f}^{-1}\mathrm{f}(x) = x$ for $x \in D_\mathrm{f}$, and $\mathrm{ff}^{-1}(x) = x$ for $x \in D_{\mathrm{f}^{-1}}$ — same rule, possibly **different domains**.
- If $\mathrm{ff}(x) = x$ then f is **self-inverse**: $\mathrm{f}^{-1} = \mathrm{f}$, and its graph is symmetric about $y = x$.
- Repeated composition: if $\mathrm{f}^2 = $ identity then $\mathrm{f}^n = \mathrm{f}$ for odd $n$ and the identity for even $n$.`,
      figure: {
        type: "plot",
        x: [-3.5, 7.5], y: [-3.5, 7.5], equal: true,
        lines: [{ x: 2 }, { y: 2, label: "y = 2" }, { fn: "x => x", label: "y = x", labelAt: 6.1 }],
        curves: [{ fn: "x => (2*x + 1)/(x - 2)", label: "y = f(x)", labelAt: 4.6 }],
        labels: [{ x: 2.1, y: -3, text: "x = 2", pos: "e", style: "italic" }],
        caption: String.raw`A self-inverse function, $\mathrm{f}(x) = \dfrac{2x + 1}{x - 2}$: the graph is its own reflection in $y = x$.`,
        alt: "Equal-scale graph of the rectangular hyperbola y = (2x + 1)/(x − 2) with asymptotes x = 2 and y = 2, and the dashed line y = x. The curve is symmetric about y = x: its axis intercepts (−½, 0) and (0, −½) are mirror images of each other.",
      },
    },
    {
      title: String.raw`Periodic and piecewise functions`,
      body: String.raw`$\mathrm{f}(x + p) = \mathrm{f}(x)$ for all $x$ means the graph repeats every $p$ units. To evaluate $\mathrm{f}(a)$, subtract multiples of $p$ until the input lands in the defining interval. For piecewise definitions, check carefully which interval each endpoint belongs to.`,
      figure: {
        type: "plot",
        x: [-4.4, 6.6], y: [-0.8, 3.2], equal: true,
        curves: [-6, -4, -2, 0, 2, 4, 6].map((k) => ({ fn: `x => (x - ${k})*(x - ${k})/2`, domain: [Math.max(k, -4.4), Math.min(k + 2 - 0.036, 6.6)] })),
        circles: [-4, -2, 0, 2, 4, 6].map((k) => ({ c: [k, 2], r: 0.08, tone: "accent" })),
        segments: [
          { from: [2, 2.65], to: [4, 2.65], arrow: true, arrowStart: true, thin: true, tone: "muted", label: "period 2", pos: "n", style: "small" },
          { from: [1.2, 0.72], to: [5.2, 0.72], dashed: true, thin: true, tone: "warn" },
        ],
        points: [
          ...[-4, -2, 0, 2, 4, 6].map((k) => ({ x: k, y: 0 })),
          { x: 1.2, y: 0.72 }, { x: 5.2, y: 0.72 },
        ],
        xTicks: [{ x: -2, label: "−2" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }],
        caption: String.raw`$\mathrm{f}(x) = \frac{1}{2}x^2$ for $0 \le x < 2$, with $\mathrm{f}(x + 2) = \mathrm{f}(x)$. Solid dots are included end-points, open circles are not; the dashed line shows $\mathrm{f}(5.2) = \mathrm{f}(1.2)$.`,
        alt: "A repeating graph: on each interval from 2k to 2k + 2 the curve rises from a solid dot on the x-axis to an open circle at height 2. An arrow marks one period of length 2, and a dashed line shows that f(5.2) equals f(1.2).",
      },
    },
  ],
  archetypes: [
    {
      id: "1.1-range-restricted-domain",
      name: String.raw`Range of a function on a restricted domain`,
      tests: String.raw`Sketching over the given domain only and reading off the range, with correct inclusion of endpoints. Usually the opening part of a longer functions question.`,
      questions: [
        {
          stem: String.raw`The function f is defined by
$$\mathrm{f} : x \mapsto x^2 - 4x + 1, \quad x \in \mathbb{R},\ 0 \le x \le 5.$$`,
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}(x)$, labelling the coordinates of the end-points and the turning point.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the range of f.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain why $\mathrm{f}^{-1}$ does not exist.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The function g is defined by $\mathrm{g} : x \mapsto 3 - \dfrac{2}{x + 1}$, $x \in \mathbb{R}$, $x > 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the range of g.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that g is one-one.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "1.1-inverse-domain-restriction",
      name: String.raw`Finding an inverse, including restricting the domain`,
      tests: String.raw`Choosing the largest domain so that f is one-one (often via completing the square), then finding $\mathrm{f}^{-1}(x)$ with the correct sign and stating its domain.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto x^2 - 6x + 10$, $x \in \mathbb{R}$, $x \le k$.`,
          parts: [
            { label: "(i)", text: String.raw`State the largest value of $k$ for which $\mathrm{f}^{-1}$ exists.`, marks: 1 },
            { label: "(ii)", text: String.raw`Using the value of $k$ found in part (i), find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The function h is defined by $\mathrm{h} : x \mapsto \dfrac{2x + 1}{x - 3}$, $x \in \mathbb{R}$, $x \ne 3$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\mathrm{h}^{-1}(x)$ and state the domain of $\mathrm{h}^{-1}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact values of $x$ for which $\mathrm{h}(x) = x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-composite-existence-range",
      name: String.raw`Existence and range of a composite function`,
      tests: String.raw`Checking $R_\mathrm{g} \subseteq D_\mathrm{f}$ with both sets quoted, writing down $\mathrm{fg}(x)$, and finding $R_\mathrm{fg}$ by feeding $R_\mathrm{g}$ into f.`,
      questions: [
        {
          stem: String.raw`The functions f and g are defined by
$$\mathrm{f} : x \mapsto \ln(x - 3),\ x \in \mathbb{R},\ x > 3, \qquad \mathrm{g} : x \mapsto x^2 + 2,\ x \in \mathbb{R}.$$`,
          parts: [
            { label: "(i)", text: String.raw`Explain why the composite function fg does not exist.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that the composite function gf exists, and find an expression for $\mathrm{gf}(x)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the range of gf.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The functions p and q are defined by
$$\mathrm{p} : x \mapsto \frac{1}{x},\ x \in \mathbb{R},\ x \ge 1, \qquad \mathrm{q} : x \mapsto 4x - x^2,\ x \in \mathbb{R},\ 1 \le x \le 3.$$`,
          parts: [
            { label: "(i)", text: String.raw`Show that pq exists.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the range of pq.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-graph-f-and-inverse",
      name: String.raw`Graphs of f and $\mathrm{f}^{-1}$; solving $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$`,
      tests: String.raw`Sketching a curve and its inverse as reflections in $y = x$, and reducing $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$ to $\mathrm{f}(x) = x$ for an increasing function.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto x^2 - 2x + 2$, $x \in \mathbb{R}$, $x \ge 1$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`On the same diagram, sketch the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$, making clear the relationship between the two graphs.`, marks: 3 },
            { label: "(iii)", text: String.raw`Solve the equation $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-self-inverse-repeated",
      name: String.raw`Self-inverse functions and repeated composition`,
      tests: String.raw`Simplifying $\mathrm{ff}(x)$, recognising $\mathrm{f}^{-1} = \mathrm{f}$, and using the pattern to evaluate $\mathrm{f}^n$ for large $n$.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto \dfrac{x + 1}{x - 1}$, $x \in \mathbb{R}$, $x \ne 1$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\mathrm{ff}(x) = x$. Hence state $\mathrm{f}^{-1}(x)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State a geometrical property of the graph of $y = \mathrm{f}(x)$ that follows from part (i).`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the value of $\mathrm{f}^{2027}(3)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-periodic-piecewise",
      name: String.raw`Periodic and piecewise-defined functions`,
      tests: String.raw`Sketching a piecewise function extended by $\mathrm{f}(x + p) = \mathrm{f}(x)$, evaluating at large inputs, and solving equations across several periods.`,
      questions: [
        {
          stem: String.raw`The function f is defined by
$$\mathrm{f}(x) = \begin{cases} x^2 & \text{for } 0 \le x < 1, \\ 2 - x & \text{for } 1 \le x < 2, \end{cases}$$
and $\mathrm{f}(x + 2) = \mathrm{f}(x)$ for all real values of $x$.`,
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}(x)$ for $-2 \le x \le 4$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the value of $\mathrm{f}(7.5)$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find all the values of $x$, for $0 \le x \le 4$, for which $\mathrm{f}(x) = \frac{1}{4}$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
