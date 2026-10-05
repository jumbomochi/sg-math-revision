H2.addTopic({
  id: "5.4",
  title: "Definite Integrals",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`The definite integral as a limit of a sum and as an area, used to find areas between curves and volumes of revolution, exactly or with a GC.`,
  syllabus: {
    include: [
      String.raw`concept of definite integral as a limit of sum`,
      String.raw`definite integral as the area under a curve`,
      String.raw`evaluation of definite integrals`,
      String.raw`area of a region bounded by a curve and lines parallel to the coordinate axes, between a curve and a line, or between two curves`,
      String.raw`area below the $x$-axis`,
      String.raw`volume of revolution about the $x$- or $y$-axis`,
      String.raw`finding the approximate value of a definite integral using a graphing calculator or a graphing software`,
    ],
    exclude: [
      String.raw`area and volume of revolution about the $x$-axis or $y$-axis where the curve is defined parametrically`,
    ],
  },
  concepts: [
    {
      title: String.raw`Definite integral as a limit of a sum`,
      body: String.raw`Split $[a, b]$ into $n$ strips of width $h = \dfrac{b - a}{n}$. For an **increasing** function on $[a, b]$:

$$\text{lower sum } L_n = h\sum_{r=0}^{n-1}\mathrm{f}(a + rh), \qquad \text{upper sum } U_n = h\sum_{r=1}^{n}\mathrm{f}(a + rh),$$

and $L_n < \displaystyle\int_a^b \mathrm{f}(x)\,\dd x < U_n$. (For a decreasing function the roles swap: left-end heights give the upper sum.) As $n \to \infty$, both sums tend to the integral.

- Simplify the sum using standard results: $\sum r = \frac{1}{2}n(n + 1)$, $\sum r^2 = \frac{1}{6}n(n + 1)(2n + 1)$, or a **geometric series** for exponential heights.
- To find the limit, divide through by the highest power of $n$; terms like $\frac{1}{n} \to 0$. For $n(\ee^{1/n} - 1)$ use $\ee^{1/n} \approx 1 + \frac{1}{n}$ (Maclaurin).
- "Show that the area of the rectangles is …" — write the sum of $\text{width} \times \text{height}$ explicitly before simplifying.`,
    },
    {
      title: String.raw`Signed area and area below the $x$-axis`,
      body: String.raw`$\displaystyle\int_a^b \mathrm{f}(x)\,\dd x$ is the area above the $x$-axis **minus** the area below it. To find a total area:

1. Sketch and find where the curve crosses the $x$-axis.
2. Integrate separately over each sub-interval.
3. Add the **magnitudes**.

A question that asks you to "explain why $\int_0^3 \mathrm{f}(x)\,\dd x$ does not give the area" wants: part of the region lies below the $x$-axis, so its contribution is negative and cancels part of the positive area.

Useful properties: $\int_a^b = -\int_b^a$; $\int_a^b + \int_b^c = \int_a^c$; for an even function $\int_{-a}^{a} = 2\int_0^a$, for an odd function $\int_{-a}^{a} = 0$.`,
    },
    {
      title: String.raw`Area between two curves, or a curve and a line`,
      body: String.raw`$$\text{Area} = \int_a^b (y_\text{upper} - y_\text{lower})\,\dd x,$$

where $a$, $b$ are the $x$-coordinates of the intersection points (or given boundaries). This formula holds **even when part of the region is below the $x$-axis** — no splitting needed as long as the same curve stays on top. If the curves cross inside the interval, split at the crossing.

Areas of triangles and trapezia formed by straight lines may be found by geometry rather than integration — often quicker and safer.`,
    },
    {
      title: String.raw`Area with respect to the $y$-axis`,
      body: String.raw`For a region between a curve and the **$y$-axis**, between $y = c$ and $y = d$:

$$\text{Area} = \int_c^d x\,\dd y \quad\text{(make $x$ the subject first).}$$

Integrating with respect to $y$ avoids splitting when the left and right boundaries of the region are single curves, e.g. a region bounded by $y = \sqrt{x}$, $y = x - 2$ and the $x$-axis: $\int_0^2 \big((y + 2) - y^2\big)\,\dd y$. The limits are now $y$-values.`,
    },
    {
      title: String.raw`Volumes of revolution`,
      body: String.raw`Rotating through $2\pi$ radians (one full turn):

| About | Formula |
| $x$-axis | $V = \pi\displaystyle\int_a^b y^2\,\dd x$ |
| $y$-axis | $V = \pi\displaystyle\int_c^d x^2\,\dd y$ |

- **Region between two curves** about the $x$-axis: $V = \pi\displaystyle\int_a^b (y_1^2 - y_2^2)\,\dd x$ — **not** $\pi\displaystyle\int (y_1 - y_2)^2\,\dd x$.
- Subtracting a known solid (cone $\frac{1}{3}\pi r^2 h$, cylinder $\pi r^2 h$) is often quicker than a second integral.
- Region on both sides of the axis of rotation: the volume is that of the part furthest from the axis — sketch the reflection.
- Leave exact volumes as multiples of $\pi$ unless told otherwise.`,
    },
    {
      title: String.raw`Integrals involving modulus`,
      body: String.raw`To evaluate $\displaystyle\int_a^b |\mathrm{f}(x)|\,\dd x$ exactly, find the roots of $\mathrm{f}(x) = 0$ in $[a, b]$, split the integral there, and replace $|\mathrm{f}(x)|$ by $\mathrm{f}(x)$ or $-\mathrm{f}(x)$ on each piece according to its sign. A quick sketch of $y = |\mathrm{f}(x)|$ shows which.

On the GC, $\int_a^b |\mathrm{f}(x)|\,\dd x$ can be evaluated directly with the abs function — use it to check the exact answer.`,
    },
    {
      title: String.raw`Using the GC for definite integrals`,
      body: String.raw`When exact integration is impossible or not required ("Use your GC to find…", "correct to 3 significant figures"):

- **Write down the integral** you are evaluating, with limits, before quoting the value — the method mark is for the integral.
- Find intersection points with the GC's intersect function, **store them** (e.g. as A and B) and use the stored values as limits; rounding the limits first can change the third significant figure.
- Keep at least 5 significant figures in working; round only the final answer.
- For volumes, remember the $\pi$ and the squares: fnInt($\pi Y_1^2$, X, A, B).`,
    },
    {
      title: String.raw`Modelling with areas and volumes`,
      body: String.raw`Real-life contexts (a vase, a bowl, a garden bed, a logo, a lens) are areas or volumes of revolution in disguise.

- Identify the axis of rotation and which variable the given equation is in; for a vessel standing upright, rotate about the $y$-axis and use $\pi\int x^2\,\dd y$.
- **Volume of liquid to depth $h$** is $\pi\displaystyle\int_0^h x^2\,\dd y$; to find the depth that gives a stated volume, solve the equation on the GC.
- Check units (cm, cm³, m²) and convert cost or capacity at the end (1 litre = 1000 cm³).
- Comment on suitability when asked, e.g. the model ignores the thickness of the material.`,
    },
  ],
  archetypes: [
    {
      id: "5.4-limit-of-sum",
      name: String.raw`Area as a limit of a sum of rectangles`,
      tests: String.raw`Writing the total area of $n$ rectangles as a sum, simplifying it with standard series (sum of $r^2$ or a geometric series), using it to bound the integral, and taking the limit as $n \to \infty$. Usually accompanied by a diagram of the rectangles.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = x^2 + 1$ for $0 \le x \le 2$. The region under the curve is divided into $n$ strips of equal width, and $n$ rectangles are drawn whose upper right-hand corners lie on the curve (the case $n = 5$ is shown).

You may use the result $\displaystyle\sum_{r=1}^{n} r^2 = \frac{1}{6}n(n + 1)(2n + 1)$.`,
          figure: {
            type: "plot",
            x: [-0.5, 2.6], y: [-0.5, 5.5],
            height: 300,
            curves: [{ fn: "x => x*x + 1", domain: [-0.3, 2.25], label: "y = x² + 1", labelAt: 1.7 }],
            shade: [
              { upper: "x => 0.4*0.4 + 1", from: 0, to: 0.4 },
              { upper: "x => 0.8*0.8 + 1", from: 0.4, to: 0.8 },
              { upper: "x => 1.2*1.2 + 1", from: 0.8, to: 1.2 },
              { upper: "x => 1.6*1.6 + 1", from: 1.2, to: 1.6 },
              { upper: "x => 2*2 + 1", from: 1.6, to: 2 },
            ],
            lines: [{ x: 2, label: "x = 2" }],
            alt: "Curve y = x squared plus 1 with five upper rectangles from x = 0 to x = 2",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that the total area of the $n$ rectangles is $U_n = 2 + \dfrac{4(n + 1)(2n + 1)}{3n^2}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Write down a similar expression, $L_n$, for the total area of the $n$ rectangles whose upper left-hand corners lie on the curve.`, marks: 2 },
            { label: "(iii)", text: String.raw`Using $n = 10$, find bounds for $\displaystyle\int_0^2 (x^2 + 1)\,\dd x$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the limit of $U_n$ as $n \to \infty$, and explain what this limit represents.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The region bounded by the curve $y = \ee^x$, the axes and the line $x = 1$ is divided into $n$ vertical strips of equal width. Rectangles are drawn on each strip with height equal to the value of $y$ at the **left-hand** edge of the strip.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the total area $S_n$ of the rectangles is given by $S_n = \dfrac{\ee - 1}{n\left(\ee^{\frac{1}{n}} - 1\right)}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Explain why $S_n < \ee - 1$ for all positive integers $n$.`, marks: 1 },
            { label: "(iii)", text: String.raw`By using the first two terms of the Maclaurin series for $\ee^{\frac{1}{n}}$, or otherwise, show that $S_n \to \ee - 1$ as $n \to \infty$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.4-area-below-axis",
      name: String.raw`Area between a curve and the $x$-axis, including area below the axis`,
      tests: String.raw`Finding where the curve crosses the axis, integrating each piece separately and adding magnitudes; explaining why a single integral does not give the area.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = x(x - 2)(x - 3)$. The shaded region is bounded by the curve and the $x$-axis for $0 \le x \le 3$.`,
          figure: {
            type: "plot",
            x: [-0.8, 5.4], y: [-1.5, 3],
            curves: [{ fn: "x => x*(x - 2)*(x - 3)", domain: [-0.35, 3.45], label: "y = x(x − 2)(x − 3)", labelAt: 3.3 }],
            shade: [{ upper: "x => Math.max(x*(x - 2)*(x - 3), 0)", lower: "x => Math.min(x*(x - 2)*(x - 3), 0)", from: 0, to: 3 }],
            points: [{ x: 2, y: 0, label: "2", pos: "sw" }, { x: 3, y: 0, label: "3", pos: "se" }],
            alt: "Cubic curve crossing the x-axis at 0, 2 and 3, with the regions between the curve and the axis shaded",
          },
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Without using a calculator, find the exact total area of the shaded region.`, marks: 4 },
            { label: "(ii)", text: String.raw`Evaluate $\displaystyle\int_0^3 x(x - 2)(x - 3)\,\dd x$ and explain why it is not equal to your answer in part (i).`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.4-area-between-curves",
      name: String.raw`Area between a curve and a line, or between two curves`,
      tests: String.raw`Finding intersection points and integrating (upper $-$ lower), splitting where the curves cross. Often an exact-answer question with a diagram, sometimes needing a trig identity or a logarithm.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = \dfrac{4}{x}$, $x > 0$, and the line $x + y = 5$. The shaded region $R$ is bounded by the curve and the line.`,
          figure: {
            type: "plot",
            x: [-0.5, 5.8], y: [-0.5, 5.8],
            curves: [
              { fn: "x => 4/x", domain: [0.7, 5.6], label: "y = 4/x", labelAt: 4.7 },
              { fn: "x => 5 - x", domain: [-0.3, 5.4], label: "x + y = 5", labelAt: 0.3 },
            ],
            shade: [{ upper: "x => 5 - x", lower: "x => 4/x", from: 1, to: 4 }],
            alt: "Hyperbola y = 4/x and line x + y = 5 meeting at two points, with the region between them shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the points of intersection of the curve and the line.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact area of $R$, giving your answer in the form $a - b\ln 2$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The diagram shows the curves $y = \sin 2x$ and $y = \sin x$ for $0 \le x \le \pi$.`,
          figure: {
            type: "plot",
            x: [-0.3, 4.3], y: [-1.3, 1.4],
            curves: [
              { fn: "x => Math.sin(2*x)", domain: [0, 3.1416], label: "y = sin 2x", labelAt: 3.0 },
              { fn: "x => Math.sin(x)", domain: [0, 3.1416], label: "y = sin x", labelAt: 2.1 },
            ],
            shade: [{ upper: "x => Math.max(Math.sin(2*x), Math.sin(x))", lower: "x => Math.min(Math.sin(2*x), Math.sin(x))", from: 0, to: 3.14159 }],
            alt: "Graphs of y = sin 2x and y = sin x from 0 to pi with the regions between them shaded",
          },
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find the $x$-coordinates of the points where the curves meet for $0 \le x \le \pi$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Without using a calculator, find the total area of the shaded regions.`, marks: 5 },
          ],
        },
      ],
    },
    {
      id: "5.4-area-wrt-y",
      name: String.raw`Area with respect to the $y$-axis`,
      tests: String.raw`Rewriting the curve as $x$ in terms of $y$ and using $\int x\,\dd y$, either because the region is bounded by the $y$-axis or because it avoids splitting a region bounded by a curve, a line and the $x$-axis.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = \ln(x + 1)$. The shaded region is bounded by the curve, the $y$-axis and the line $y = 1$.`,
          figure: {
            type: "plot",
            x: [-0.8, 3.2], y: [-0.6, 1.6],
            curves: [{ fn: "x => Math.log(x + 1)", domain: [-0.45, 3], label: "y = ln(x + 1)", labelAt: 2.3 }],
            lines: [{ y: 1, label: "y = 1" }],
            shade: [{ upper: "x => 1", lower: "x => Math.log(x + 1)", from: 0, to: 1.71828 }],
            alt: "Curve y = ln(x + 1) with the region between the curve, the y-axis and the line y = 1 shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the exact area of the shaded region by integrating with respect to $y$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Verify your answer by finding $\displaystyle\int_0^{\ee - 1} \ln(x + 1)\,\dd x$ and using the area of a suitable rectangle.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The region $R$ is bounded by the curve $y = \sqrt{x}$, the line $y = x - 2$ and the $x$-axis, as shown in the diagram.`,
          figure: {
            type: "plot",
            x: [-0.5, 5.5], y: [-0.8, 3],
            curves: [
              { fn: "x => Math.sqrt(x)", domain: [0, 5.3], label: "y = √x", labelAt: 4.6 },
              { fn: "x => x - 2", domain: [1.2, 4.7], label: "y = x − 2", labelAt: 3.0 },
            ],
            shade: [{ upper: "x => Math.sqrt(x)", lower: "x => Math.max(0, x - 2)", from: 0, to: 4 }],
            alt: "Curve y = root x and line y = x − 2 with the region between them and the x-axis shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the point where the curve and the line meet.`, marks: 2 },
            { label: "(ii)", text: String.raw`By integrating with respect to $y$, find the exact area of $R$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.4-volume-x-axis",
      name: String.raw`Volume of revolution about the $x$-axis`,
      tests: String.raw`Setting up $\pi\int y^2\,\dd x$, often combined with a 5.3 technique (identity, parts, substitution) for an exact answer, and handling a region between two curves with $\pi\int (y_1^2 - y_2^2)\,\dd x$.`,
      questions: [
        {
          stem: String.raw`The region $R$ is bounded by the curve $y = \sin x + \cos x$, the axes and the line $x = \dfrac{\pi}{2}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $(\sin x + \cos x)^2 = 1 + \sin 2x$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Without using a calculator, find the exact volume of the solid formed when $R$ is rotated through $2\pi$ radians about the $x$-axis.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The diagram shows the curve $y = x^2$ and the line $y = 2x$. The shaded region $S$ is bounded by the curve and the line.`,
          figure: {
            type: "plot",
            x: [-0.8, 3], y: [-0.6, 5],
            curves: [
              { fn: "x => x*x", domain: [-0.6, 2.2], label: "y = x²", labelAt: 2.05 },
              { fn: "x => 2*x", domain: [-0.3, 2.4], label: "y = 2x", labelAt: 1.3 },
            ],
            shade: [{ upper: "x => 2*x", lower: "x => x*x", from: 0, to: 2 }],
            points: [{ x: 2, y: 4, label: "(2, 4)", pos: "e" }],
            alt: "Parabola y = x squared and line y = 2x meeting at the origin and (2, 4) with the region between them shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the exact area of $S$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact volume of the solid formed when $S$ is rotated through $2\pi$ radians about the $x$-axis.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact volume of the solid formed when $S$ is rotated through $2\pi$ radians about the $y$-axis.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.4-volume-y-axis",
      name: String.raw`Volume of revolution about the $y$-axis`,
      tests: String.raw`Expressing $x^2$ in terms of $y$, using $\pi\int x^2\,\dd y$ with $y$-limits, and dealing with regions whose boundary changes (e.g. a curve meeting a horizontal line).`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = \ln x$. The shaded region is bounded by the curve, the axes and the line $y = 1$.`,
          figure: {
            type: "plot",
            x: [-0.5, 3.6], y: [-1.2, 1.6],
            curves: [{ fn: "x => Math.log(x)", domain: [0.3, 3.4], label: "y = ln x", labelAt: 0.5 }],
            lines: [{ y: 1, label: "y = 1" }],
            shade: [{ upper: "x => 1", lower: "x => Math.max(0, Math.log(x))", from: 0, to: 2.71828 }],
            alt: "Curve y = ln x with the region between the curve, the axes and y = 1 shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the exact volume of the solid formed when the shaded region is rotated through $2\pi$ radians about the $y$-axis.`, marks: 4 },
            { label: "(ii)", text: String.raw`Use your GC to find the volume of the solid formed when the region bounded by the curve, the $x$-axis and the line $x = \ee$ is rotated through $2\pi$ radians about the $x$-axis, giving your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.4-modulus-integrals",
      name: String.raw`Integrals involving modulus: splitting at roots`,
      tests: String.raw`Evaluating $\int |\mathrm{f}(x)|\,\dd x$ exactly by locating roots, splitting the interval and taking the correct sign on each piece; a sketch of $y = |\mathrm{f}(x)|$ is usually requested first.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = |x^2 - 4x + 3|$ for $0 \le x \le 4$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Without using a calculator, find the exact value of $\displaystyle\int_0^4 |x^2 - 4x + 3|\,\dd x$.`, marks: 4 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Find the exact value of $\displaystyle\int_0^3 |\ee^x - 2|\,\dd x$, giving your answer in the form $\ee^3 + a + b\ln 2$, where $a$ and $b$ are integers.`,
          marks: 5,
        },
      ],
    },
    {
      id: "5.4-gc-numerical",
      name: String.raw`Numerical areas and volumes using the GC`,
      tests: String.raw`Finding intersection points that cannot be found algebraically, writing down the correct integral expression, and evaluating areas or volumes on the GC to the required accuracy.`,
      questions: [
        {
          stem: String.raw`The curves $y = \ee^{\frac{x}{2}}$ and $y = 4 - x^2$ intersect at the points A and B, where the $x$-coordinate of A is negative.`,
          figure: {
            type: "plot",
            x: [-3, 3], y: [-1, 4.8],
            curves: [
              { fn: "x => Math.exp(x/2)", domain: [-3, 2.8], label: "y = e^(x/2)", labelAt: 2.1 },
              { fn: "x => 4 - x*x", domain: [-2.3, 2.3], label: "y = 4 − x²", labelAt: -2.15 },
            ],
            shade: [{ upper: "x => 4 - x*x", lower: "x => Math.exp(x/2)", from: -1.90090, to: 1.40688 }],
            points: [{ x: -1.9009, y: 0.3866, label: "A", pos: "nw" }, { x: 1.40688, y: 2.0207, label: "B", pos: "ne" }],
            alt: "Exponential curve and downward parabola meeting at A and B with the region between them shaded",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the $x$-coordinates of A and B, giving your answers correct to 3 decimal places.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the area of the shaded region bounded by the two curves, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the volume of the solid formed when the shaded region is rotated through $2\pi$ radians about the $x$-axis, giving your answer correct to 3 significant figures.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.4-modelling",
      name: String.raw`Modelling with areas and volumes (vessels, designs)`,
      tests: String.raw`Translating a real object into an area or a volume of revolution, computing it exactly or on the GC, and answering a contextual follow-up such as cost, capacity or the depth giving a stated volume.`,
      questions: [
        {
          stem: String.raw`The inner surface of a vase is modelled by rotating the curve
$$x = 4 + 1.5\sin\left(\frac{\pi y}{12}\right), \quad 0 \le y \le 18,$$
through $2\pi$ radians about the $y$-axis, where $x$ and $y$ are measured in centimetres. The base of the vase lies along $y = 0$ and the vase stands with the $y$-axis vertical.`,
          parts: [
            { label: "(i)", text: String.raw`Write down an integral for the capacity of the vase, and use your GC to evaluate it, giving your answer to the nearest cm³.`, marks: 2 },
            { label: "(ii)", text: String.raw`Water is poured into the vase to a depth of $h$ cm. Write down an expression in terms of $h$ for the volume of water in the vase.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the depth of water when the vase is half full, giving your answer correct to 1 decimal place.`, marks: 3 },
            { label: "(iv)", text: String.raw`State one assumption made in this model.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A landscape designer plans a flower bed whose shape is the region bounded by the curves $y = 3 - \dfrac{x^2}{3}$ and $y = \dfrac{x^2}{6}$, where $x$ and $y$ are measured in metres.`,
          figure: {
            type: "plot",
            x: [-3.6, 3.6], y: [-0.6, 3.8],
            curves: [
              { fn: "x => 3 - x*x/3", domain: [-3.2, 3.2], label: "y = 3 − x²/3", labelAt: 1.2 },
              { fn: "x => x*x/6", domain: [-3.4, 3.4], label: "y = x²/6", labelAt: 2.8 },
            ],
            shade: [{ upper: "x => 3 - x*x/3", lower: "x => x*x/6", from: -2.44949, to: 2.44949 }],
            alt: "Two parabolas, one opening down and one opening up, enclosing a lens-shaped shaded region",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the exact $x$-coordinates of the points where the curves meet.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that the area of the flower bed is $4\sqrt{6}$ m².`, marks: 3 },
            { label: "(iii)", text: String.raw`Turf for the flower bed costs \$45 per m². Find the cost of turfing the flower bed, correct to the nearest dollar.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
