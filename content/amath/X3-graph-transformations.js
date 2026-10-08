H2.addTopic({
  id: "X3",
  title: "Graph Transformations",
  tags: ["IP"],
  summary: String.raw`Not in K341 (taught in many IP schools; also in H2 1.2). Translations, reflections and stretches of $y = \mathrm{f}(x)$, combining two transformations, and sketching transformed quadratic, trigonometric, exponential and logarithmic graphs.`,
  syllabus: {
    include: [
      String.raw`translations: $y = \mathrm{f}(x) + a$ and $y = \mathrm{f}(x + a)$`,
      String.raw`reflections: $y = -\mathrm{f}(x)$ (in the $x$-axis) and $y = \mathrm{f}(-x)$ (in the $y$-axis)`,
      String.raw`stretches: $y = a\mathrm{f}(x)$ (parallel to the $y$-axis) and $y = \mathrm{f}(ax)$ (parallel to the $x$-axis)`,
      String.raw`combining two transformations, and the order in which they are applied`,
      String.raw`describing the transformation(s) that map one graph onto another, given their equations`,
      String.raw`sketching transformed quadratic, trigonometric, exponential and logarithmic graphs, including asymptotes and intercepts`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Translations`,
      body: String.raw`Not in K341 (taught in many IP schools; also in H2 1.2). For $a > 0$:

| Equation | Transformation of $y = \mathrm{f}(x)$ |
| $y = \mathrm{f}(x) + a$ | translation of $a$ units in the **positive $y$-direction** (up) |
| $y = \mathrm{f}(x) - a$ | translation of $a$ units in the negative $y$-direction (down) |
| $y = \mathrm{f}(x + a)$ | translation of $a$ units in the **negative $x$-direction** (left) |
| $y = \mathrm{f}(x - a)$ | translation of $a$ units in the positive $x$-direction (right) |

A change **outside** the function acts on $y$ in the way you expect. A change **inside** the bracket acts on $x$ the **opposite** way: $\mathrm{f}(x - 2)$ moves the graph 2 units to the **right**.

Every point, turning point and asymptote moves by the same amount: $(p, q) \to (p, q + a)$ for $\mathrm{f}(x) + a$, and $(p, q) \to (p - a, q)$ for $\mathrm{f}(x + a)$.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 4.2], y: [-0.8, 5.6], height: 210,
          curves: [
            { fn: "x => x*x", tone: "muted", dashed: true },
            { fn: "x => x*x + 2" },
          ],
          segments: [{ from: [-1.5, 2.25], to: [-1.5, 4.15], arrow: true, tone: "warn" }],
          points: [{ x: 0, y: 2, label: "(0, 2)", pos: "e" }],
          labels: [
            { x: 2.75, y: 5.3, text: "y = x² + 2", pos: "e", style: "italic", tone: "accent" },
            { x: 2.6, y: 3.5, text: "y = x²", pos: "e", style: "italic", tone: "muted" },
          ],
          caption: String.raw`$y = \mathrm{f}(x) + 2$: up 2 units.`,
          alt: "The dashed parabola y = x² and the solid parabola y = x² + 2, which is the same shape moved 2 units up, with vertex (0, 2). An arrow points upwards between them.",
        },
        {
          type: "plot",
          x: [-2.2, 4.6], y: [-0.8, 5.6], height: 210,
          curves: [
            { fn: "x => x*x", tone: "muted", dashed: true },
            { fn: "x => (x - 2)*(x - 2)", label: "y = (x − 2)²", labelAt: 3.6 },
          ],
          segments: [{ from: [-1.4, 1.96], to: [0.45, 1.96], arrow: true, tone: "warn" }],
          points: [{ x: 2, y: 0, label: "(2, 0)", pos: "s" }],
          caption: String.raw`$y = \mathrm{f}(x - 2)$: right 2 units.`,
          alt: "The dashed parabola y = x² and the solid parabola y = (x − 2)², which is the same shape moved 2 units to the right, with vertex (2, 0). An arrow points to the right between them.",
        },
      ],
    },
    {
      title: String.raw`Reflections`,
      body: String.raw`| Equation | Transformation of $y = \mathrm{f}(x)$ | Point $(p, q)$ goes to |
| $y = -\mathrm{f}(x)$ | reflection in the **$x$-axis** | $(p, -q)$ |
| $y = \mathrm{f}(-x)$ | reflection in the **$y$-axis** | $(-p, q)$ |

- For $-\mathrm{f}(x)$, the $x$-intercepts stay fixed; maximum points become minimum points.
- For $\mathrm{f}(-x)$, the $y$-intercept stays fixed.
- A horizontal asymptote $y = k$ becomes $y = -k$ under $-\mathrm{f}(x)$; a vertical asymptote $x = k$ becomes $x = -k$ under $\mathrm{f}(-x)$.

Example with $\mathrm{f}(x) = \mathrm{e}^x$: $y = \mathrm{e}^{-x}$ is its mirror image in the $y$-axis, and $y = -\mathrm{e}^x$ is its mirror image in the $x$-axis.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 2.6], y: [-0.8, 5.2], height: 200,
          curves: [
            { fn: "x => Math.exp(x)", label: "y = eˣ", labelAt: 1.2 },
            { fn: "x => Math.exp(-x)", tone: "good", label: "y = e⁻ˣ", labelAt: -2.05 },
          ],
          points: [{ x: 0, y: 1 }],
          caption: String.raw`Reflection in the $y$-axis. Both pass through $(0, 1)$.`,
          alt: "The curves y = eˣ and y = e⁻ˣ, mirror images of each other in the y-axis, both passing through (0, 1).",
        },
        {
          type: "plot",
          x: [-2.6, 2.2], y: [-4.6, 4.6], height: 200,
          curves: [
            { fn: "x => Math.exp(x)", label: "y = eˣ", labelAt: 0.9 },
            { fn: "x => -Math.exp(x)", tone: "good", label: "y = −eˣ", labelAt: 0.9 },
          ],
          points: [{ x: 0, y: 1, label: "(0, 1)", pos: "nw" }, { x: 0, y: -1, label: "(0, −1)", pos: "sw" }],
          caption: String.raw`Reflection in the $x$-axis.`,
          alt: "The curves y = eˣ above the x-axis and y = −eˣ below it, mirror images of each other in the x-axis, through (0, 1) and (0, −1).",
        },
      ],
    },
    {
      title: String.raw`Stretches`,
      body: String.raw`For $a > 0$:

| Equation | Transformation of $y = \mathrm{f}(x)$ | Point $(p, q)$ goes to |
| $y = a\mathrm{f}(x)$ | stretch **parallel to the $y$-axis**, scale factor $a$ | $(p, aq)$ |
| $y = \mathrm{f}(ax)$ | stretch **parallel to the $x$-axis**, scale factor $\dfrac{1}{a}$ | $\left(\dfrac{p}{a}, q\right)$ |

- $y = a\mathrm{f}(x)$: $x$-intercepts stay fixed; heights are multiplied by $a$. For $y = \sin x$, the amplitude becomes $a$.
- $y = \mathrm{f}(ax)$: the $y$-intercept stays fixed; the graph is **squashed** towards the $y$-axis when $a > 1$. For $y = \sin x$, the period becomes $\dfrac{360^\circ}{a}$.
- A scale factor less than 1 (e.g. $\tfrac{1}{2}$) is still called a "stretch" in exam answers.

To describe a stretch fully, give **three things**: "stretch", the direction ("parallel to the $x$-axis"), and the scale factor.`,
      figure: [
        {
          type: "plot",
          x: [-25, 390], y: [-2.5, 2.7], height: 200,
          curves: [
            { fn: "x => Math.sin(x*Math.PI/180)", domain: [0, 360], tone: "muted", dashed: true },
            { fn: "x => 2*Math.sin(x*Math.PI/180)", domain: [0, 360] },
          ],
          xTicks: [{ x: 180, label: "180°" }, { x: 360, label: "360°" }],
          yTicks: [{ y: 1, label: "1" }, { y: 2, label: "2" }, { y: -2, label: "−2" }],
          labels: [{ x: 160, y: 2.25, text: "y = 2 sin x", pos: "w", style: "italic", tone: "accent" }],
          caption: String.raw`$y = 2\sin x$: stretch parallel to the $y$-axis, factor 2.`,
          alt: "The dashed curve y = sin x between 0° and 360° with amplitude 1, and the solid curve y = 2 sin x with the same zeros but amplitude 2.",
        },
        {
          type: "plot",
          x: [-25, 390], y: [-2.5, 2.7], height: 200,
          curves: [
            { fn: "x => Math.sin(x*Math.PI/180)", domain: [0, 360], tone: "muted", dashed: true },
            { fn: "x => Math.sin(2*x*Math.PI/180)", domain: [0, 360] },
          ],
          xTicks: [{ x: 180, label: "180°" }, { x: 360, label: "360°" }],
          yTicks: [{ y: 1, label: "1" }, { y: -1, label: "−1" }],
          labels: [{ x: 45, y: 1.6, text: "y = sin 2x", pos: "c", style: "italic", tone: "accent" }],
          caption: String.raw`$y = \sin 2x$: stretch parallel to the $x$-axis, factor $\tfrac{1}{2}$.`,
          alt: "The dashed curve y = sin x between 0° and 360°, and the solid curve y = sin 2x, which has the same amplitude but completes two full cycles in the same interval.",
        },
      ],
    },
    {
      title: String.raw`Combining two transformations`,
      body: String.raw`Work out what happens to $y = \mathrm{f}(x)$ one step at a time, changing the equation at each step.

- **Outside changes** (to $y$): $y = 2\mathrm{f}(x) + 1$ is "stretch parallel to the $y$-axis, factor 2, **then** translate 1 unit up". The other order gives $2[\mathrm{f}(x) + 1] = 2\mathrm{f}(x) + 2$, which is different. Order matters.
- **Inside changes** (to $x$): replace $x$ step by step. For $y = \mathrm{f}(2x + 2)$, either translate 2 units left ($x \to x + 2$ gives $\mathrm{f}(x + 2)$), then stretch parallel to the $x$-axis with factor $\tfrac{1}{2}$ ($x \to 2x$ gives $\mathrm{f}(2x + 2)$); **or** write $\mathrm{f}(2x + 2) = \mathrm{f}(2(x + 1))$ and stretch with factor $\tfrac{1}{2}$ first, then translate only **1** unit left.
- One inside change and one outside change, e.g. $y = \mathrm{f}(x - 3) + 4$, can be done in either order.

Always check your sequence by applying it to the equation.`,
      figure: {
        type: "plot",
        x: [-25, 390], y: [-2.5, 3.6], height: 250,
        curves: [
          { fn: "x => Math.cos(x*Math.PI/180)", domain: [0, 360], tone: "muted", dashed: true },
          { fn: "x => 2*Math.cos(x*Math.PI/180)", domain: [0, 360], tone: "good", dashed: true },
          { fn: "x => 2*Math.cos(x*Math.PI/180) + 1", domain: [0, 360] },
        ],
        xTicks: [{ x: 90, label: "90°" }, { x: 180, label: "180°" }, { x: 270, label: "270°" }, { x: 360, label: "360°" }],
        yTicks: [{ y: 1, label: "1" }, { y: 3, label: "3" }, { y: -1, label: "−1" }, { y: -2, label: "−2" }],
        labels: [
          { x: 15, y: 3.3, text: "y = 2 cos x + 1", pos: "e", style: "italic", tone: "accent" },
          { x: 300, y: -1.9, text: "y = 2 cos x", pos: "c", style: "italic", tone: "good" },
        ],
        caption: String.raw`$y = \cos x$ (grey) $\to$ $y = 2\cos x$ (stretch, factor 2) $\to$ $y = 2\cos x + 1$ (up 1).`,
        alt: "Three curves between 0° and 360°: the dashed curve y = cos x, the dashed curve y = 2 cos x with amplitude 2 (from −2 to 2), and the solid curve y = 2 cos x + 1, which is y = 2 cos x moved up 1 unit, ranging from −1 to 3.",
      },
    },
    {
      title: String.raw`Describing the transformation from an equation`,
      body: String.raw`To describe how $y = \mathrm{f}(x)$ maps onto a new curve, first write the new equation in terms of $\mathrm{f}$.

- Quadratics: complete the square. $y = x^2 - 4x + 5 = (x - 2)^2 + 1$, so $y = x^2$ is translated 2 units in the positive $x$-direction and 1 unit in the positive $y$-direction.
- Trigonometric: $y = 3 - \cos x = -\cos x + 3$ is a reflection in the $x$-axis, then a translation of 3 units up.
- Some curves can be described in two ways: $y = \ln(2x) = \ln x + \ln 2$ is a stretch parallel to the $x$-axis (factor $\tfrac{1}{2}$) **or** a translation of $\ln 2$ units up.

Use the exact words: **translation** (with distance and direction), **reflection** (in which axis), **stretch** (direction and scale factor). "Shift", "move" or "flip" may lose marks.`,
      figure: {
        type: "plot",
        x: [-2.4, 4.8], y: [-0.8, 7.6], height: 240,
        curves: [
          { fn: "x => x*x", tone: "muted", dashed: true },
          { fn: "x => (x - 2)*(x - 2) + 1" },
        ],
        segments: [{ from: [0, 0], to: [1.9, 0.95], arrow: true, tone: "warn" }],
        points: [{ x: 2, y: 1, label: "(2, 1)", pos: "se" }],
        labels: [
          { x: -1.9, y: 5.4, text: "y = x²", pos: "e", style: "italic", tone: "muted" },
          { x: 3.1, y: 0.45, text: "y = (x − 2)² + 1", pos: "e", style: "italic", tone: "accent" },
        ],
        caption: String.raw`The vertex $(0, 0)$ moves to $(2, 1)$: 2 units right and 1 unit up.`,
        alt: "The dashed parabola y = x² with vertex at the origin and the solid parabola y = (x − 2)² + 1 with vertex (2, 1). An arrow goes from the origin to (2, 1).",
      },
    },
    {
      title: String.raw`Transforming exponential and logarithmic graphs`,
      body: String.raw`Track three things: the **asymptote**, the **intercepts**, and the **shape**.

| Graph | Asymptote | Key point |
| $y = \mathrm{e}^x$ | $y = 0$ | $(0, 1)$ |
| $y = \ln x$ | $x = 0$ | $(1, 0)$ |

- $y = \mathrm{e}^x + a$ moves the asymptote to $y = a$. Stretches parallel to the $x$-axis and translations left or right leave it alone.
- $y = \ln(x + a)$ moves the asymptote to $x = -a$. The domain becomes $x > -a$.
- After transforming, find the new intercepts **algebraically**: put $x = 0$ for the $y$-intercept and $y = 0$ for the $x$-intercept, and give exact answers (in terms of $\mathrm{e}$ or $\ln$) when asked.

Draw asymptotes as dashed lines and label them with their equations.`,
      figure: [
        {
          type: "plot",
          x: [-2.8, 2.2], y: [-3.8, 3.6], height: 210,
          curves: [
            { fn: "x => Math.exp(x)", tone: "muted", dashed: true },
            { fn: "x => Math.exp(x) - 3" },
          ],
          labels: [{ x: -2.6, y: -1.0, text: "y = eˣ − 3", pos: "e", style: "italic", tone: "accent" }],
          lines: [{ y: -3, label: "y = −3" }],
          points: [{ x: 0, y: -2, label: "(0, −2)", pos: "nw" }, { x: Math.log(3), y: 0, label: "(ln 3, 0)", pos: "se" }],
          caption: String.raw`Down 3: the asymptote moves to $y = -3$.`,
          alt: "The dashed curve y = eˣ and the solid curve y = eˣ − 3, which approaches the dashed asymptote y = −3 on the left, crosses the y-axis at (0, −2) and the x-axis at (ln 3, 0).",
        },
        {
          type: "plot",
          x: [-0.8, 6.2], y: [-3.4, 2.8], height: 210,
          curves: [
            { fn: "x => Math.log(x)", domain: [0.02, 6.2], tone: "muted", dashed: true },
            { fn: "x => Math.log(x - 1)", domain: [1.02, 6.2], label: "y = ln(x − 1)", labelAt: 4.4 },
          ],
          lines: [{ x: 1, label: "x = 1" }],
          points: [{ x: 2, y: 0, label: "(2, 0)", pos: "se" }],
          caption: String.raw`Right 1: the asymptote moves to $x = 1$.`,
          alt: "The dashed curve y = ln x and the solid curve y = ln(x − 1), which is the same shape moved 1 unit right, with vertical asymptote x = 1 and x-intercept (2, 0).",
        },
      ],
    },
    {
      title: String.raw`Transforming a graph you only see as a sketch`,
      body: String.raw`Often you are given a sketch of $y = \mathrm{f}(x)$ with a few labelled points, and no equation. Transform the **labelled points** and **asymptotes**, then join them with the same shape.

| New graph | Image of $(p, q)$ |
| $y = \mathrm{f}(x) + a$ | $(p, q + a)$ |
| $y = \mathrm{f}(x + a)$ | $(p - a, q)$ |
| $y = a\mathrm{f}(x)$ | $(p, aq)$ |
| $y = \mathrm{f}(ax)$ | $\left(\dfrac{p}{a}, q\right)$ |
| $y = -\mathrm{f}(x)$ | $(p, -q)$ |
| $y = \mathrm{f}(-x)$ | $(-p, q)$ |

Label every transformed point with its coordinates on your sketch. A common mistake is to transform the $x$-coordinate the wrong way for $\mathrm{f}(x + a)$ and $\mathrm{f}(ax)$.`,
    },
  ],
  archetypes: [
    {
      id: "X3-describe-single",
      name: String.raw`Describing a single transformation`,
      tests: String.raw`Not in K341. Naming the one transformation (translation, reflection or stretch) that maps a given curve onto another, with full details: direction and distance, mirror line, or direction and scale factor.`,
      questions: [
        {
          stem: String.raw`Describe fully a single transformation which maps the graph of $y = x^2$ onto the graph of`,
          parts: [
            { label: "(a)", text: String.raw`$y = x^2 - 5$,`, marks: 1 },
            { label: "(b)", text: String.raw`$y = (x - 3)^2$,`, marks: 1 },
            { label: "(c)", text: String.raw`$y = -x^2$,`, marks: 1 },
            { label: "(d)", text: String.raw`$y = \left(\dfrac{x}{2}\right)^2$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Describe fully a single transformation which maps the graph of $y = \mathrm{e}^x$ onto the graph of`,
          parts: [
            { label: "(a)", text: String.raw`$y = \mathrm{e}^{x + 2}$,`, marks: 1 },
            { label: "(b)", text: String.raw`$y = \mathrm{e}^{-x}$,`, marks: 1 },
            { label: "(c)", text: String.raw`$y = 3\mathrm{e}^x$.`, marks: 2 },
            { label: "(d)", text: String.raw`Show that the graph of $y = \mathrm{e}^{x + 2}$ can also be obtained from the graph of $y = \mathrm{e}^x$ by a stretch, and state the exact scale factor and direction of this stretch.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X3-two-transformations",
      name: String.raw`Describing a sequence of two transformations`,
      tests: String.raw`Not in K341. Breaking an equation into two steps in a correct order, including the trap where a stretch inside the bracket changes the size of a translation.`,
      questions: [
        {
          stem: String.raw`Describe a sequence of two transformations which maps the graph of $y = \sin x$ onto the graph of`,
          parts: [
            { label: "(a)", text: String.raw`$y = 3\sin x + 1$,`, marks: 2 },
            { label: "(b)", text: String.raw`$y = \sin 2x - 1$,`, marks: 2 },
            { label: "(c)", text: String.raw`$y = \sin\left(2x + \dfrac{\pi}{3}\right)$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{1}{x - 3} + 2$.`,
          parts: [
            { label: "(a)", text: String.raw`Describe a sequence of two transformations which maps the graph of $y = \dfrac{1}{x}$ onto $C$.`, marks: 2 },
            { label: "(b)", text: String.raw`State the equations of the asymptotes of $C$.`, marks: 2 },
            { label: "(c)", text: String.raw`Sketch $C$, stating the coordinates of the points where it meets the axes.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X3-quadratic-transformations",
      name: String.raw`Transformations of quadratic graphs`,
      tests: String.raw`Not in K341. Completing the square to see a quadratic as a translation (and possibly a stretch or reflection) of $y = x^2$, then sketching it with its turning point and intercepts.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Express $x^2 + 6x + 4$ in the form $(x + a)^2 + b$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence describe a sequence of two transformations which maps the graph of $y = x^2$ onto the graph of $y = x^2 + 6x + 4$.`, marks: 2 },
            { label: "(c)", text: String.raw`Sketch the graph of $y = x^2 + 6x + 4$, stating the coordinates of the turning point and of the point where the graph meets the $y$-axis.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curve $y = 4 - (x - 1)^2$ is obtained from the curve $y = x^2$ by a sequence of transformations.`,
          parts: [
            { label: "(a)", text: String.raw`Describe a suitable sequence of transformations.`, marks: 3 },
            { label: "(b)", text: String.raw`State the coordinates of the image of the vertex of $y = x^2$, and whether it is a maximum or a minimum point.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X3-trig-transformations",
      name: String.raw`Transformations of trigonometric graphs`,
      tests: String.raw`Not in K341. Describing and sketching $y = a\sin(x - b) + c$ type graphs from $y = \sin x$ or $y = \cos x$, including a horizontal translation, and finding the constants from a given graph.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Describe a sequence of two transformations which maps the graph of $y = \sin x$ onto the graph of $y = 2\sin\left(x - \dfrac{\pi}{4}\right)$.`, marks: 2 },
            { label: "(b)", text: String.raw`Sketch the graph of $y = 2\sin\left(x - \dfrac{\pi}{4}\right)$ for $0 \le x \le 2\pi$, stating the coordinates of the maximum and minimum points and of the points where the graph meets the axes.`, marks: 4 },
            { label: "(c)", text: String.raw`Hence state the number of solutions of the equation $2\sin\left(x - \dfrac{\pi}{4}\right) = 1$ for $0 \le x \le 2\pi$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows part of the graph of $y = a\sin(x - b) + c$ for $0 \le x \le 2\pi$, where $a$, $b$ and $c$ are constants, $a > 0$ and $0 < b < \dfrac{\pi}{2}$. The graph has a maximum point at $\left(\dfrac{2\pi}{3}, 4\right)$ and a minimum point at $\left(\dfrac{5\pi}{3}, -2\right)$.`,
          figure: {
            type: "plot",
            x: [-0.5, 6.9], y: [-3, 5], height: 230,
            curves: [{ fn: "x => 3*Math.sin(x - Math.PI/6) + 1", domain: [0, 2*Math.PI] }],
            points: [
              { x: 2*Math.PI/3, y: 4, label: "(2π/3, 4)", pos: "n" },
              { x: 5*Math.PI/3, y: -2, label: "(5π/3, −2)", pos: "s" },
            ],
            xTicks: [{ x: 2*Math.PI, label: "2π" }],
            alt: "One full cycle of a sine-shaped curve for 0 ≤ x ≤ 2π, starting slightly below the x-axis, rising to a maximum at (2π/3, 4), falling to a minimum at (5π/3, −2) and rising again to x = 2π.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$, of $c$ and of $b$.`, marks: 4 },
            { label: "(b)", text: String.raw`Describe a sequence of transformations which maps the graph of $y = \sin x$ onto this graph.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X3-exp-log-transformations",
      name: String.raw`Transformations of exponential and logarithmic graphs`,
      tests: String.raw`Not in K341. Applying translations and reflections to $y = \mathrm{e}^x$ or $y = \ln x$, stating the new asymptote, finding exact intercepts and sketching the result.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $y = \ln(x + 2) - 1$.`,
          parts: [
            { label: "(a)", text: String.raw`Describe a sequence of two transformations which maps the graph of $y = \ln x$ onto $C$.`, marks: 2 },
            { label: "(b)", text: String.raw`State the equation of the asymptote of $C$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the exact coordinates of the points where $C$ meets the axes.`, marks: 3 },
            { label: "(d)", text: String.raw`Sketch $C$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $D$ has equation $y = 2 - \mathrm{e}^{-x}$.`,
          parts: [
            { label: "(a)", text: String.raw`Describe a sequence of transformations which maps the graph of $y = \mathrm{e}^x$ onto $D$.`, marks: 3 },
            { label: "(b)", text: String.raw`Sketch $D$, stating the equation of its asymptote and the exact coordinates of the points where it meets the axes.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "X3-given-graph",
      name: String.raw`Transforming a given sketch of $y = \mathrm{f}(x)$`,
      tests: String.raw`Not in K341. Sketching transformed versions of a graph given only by its shape and labelled points, and stating the images of those points.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$. The graph meets the $x$-axis at $A(-2, 0)$ and $C(4, 0)$, and has a maximum point at $B(1, 3)$. On separate diagrams, sketch the graphs of the following, stating the coordinates of the images of $A$, $B$ and $C$.`,
          figure: {
            type: "plot",
            x: [-3.6, 5.6], y: [-2.2, 4.4], height: 220,
            curves: [{ fn: "x => (x + 2)*(4 - x)/3", domain: [-2.9, 4.9], label: "y = f(x)", labelAt: 3.2 }],
            points: [
              { x: -2, y: 0, label: "A(−2, 0)", pos: "nw" },
              { x: 1, y: 3, label: "B(1, 3)", pos: "n" },
              { x: 4, y: 0, label: "C(4, 0)", pos: "ne" },
            ],
            alt: "An arch-shaped curve y = f(x) crossing the x-axis at A(−2, 0) and C(4, 0), with a maximum point at B(1, 3).",
          },
          parts: [
            { label: "(a)", text: String.raw`$y = \mathrm{f}(x) - 3$`, marks: 2 },
            { label: "(b)", text: String.raw`$y = \mathrm{f}(x + 2)$`, marks: 2 },
            { label: "(c)", text: String.raw`$y = 2\mathrm{f}(x)$`, marks: 2 },
            { label: "(d)", text: String.raw`$y = \mathrm{f}(2x)$`, marks: 2 },
            { label: "(e)", text: String.raw`$y = -\mathrm{f}(x)$`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The point $P(3, -2)$ lies on the curve $y = \mathrm{f}(x)$. State the coordinates of the image of $P$ on each of the following curves.`,
          parts: [
            { label: "(a)", text: String.raw`$y = \mathrm{f}(x) + 4$`, marks: 1 },
            { label: "(b)", text: String.raw`$y = \mathrm{f}(x - 1)$`, marks: 1 },
            { label: "(c)", text: String.raw`$y = 3\mathrm{f}(x)$`, marks: 1 },
            { label: "(d)", text: String.raw`$y = \mathrm{f}(3x)$`, marks: 1 },
            { label: "(e)", text: String.raw`$y = \mathrm{f}(-x)$`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "X3-find-equation",
      name: String.raw`Finding the equation after transformations`,
      tests: String.raw`Not in K341. Applying a described sequence of transformations to an equation step by step, or using an asymptote and a point to find the constants in a transformed equation.`,
      questions: [
        {
          stem: String.raw`The graph of $y = x^2$ is stretched parallel to the $y$-axis with scale factor $2$. The resulting graph is then translated $1$ unit in the negative $x$-direction and $3$ units in the negative $y$-direction.`,
          parts: [
            { label: "(a)", text: String.raw`Find the equation of the final graph in the form $y = ax^2 + bx + c$.`, marks: 3 },
            { label: "(b)", text: String.raw`State the coordinates of the turning point of the final graph.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The curve $y = \mathrm{e}^{x + p} + q$, where $p$ and $q$ are constants, has the line $y = -1$ as an asymptote and passes through the point $(0, 2)$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $q$ and the exact value of $p$.`, marks: 3 },
            { label: "(b)", text: String.raw`Describe a sequence of two transformations which maps the graph of $y = \mathrm{e}^x$ onto this curve.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
