H2.addTopic({
  id: "C3",
  title: "Integration",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Part of syllabus item C1 (Differentiation and integration): integration as the reverse of differentiation, standard integrals, definite integrals and areas bounded by a curve and lines.`,
  syllabus: {
    include: [
      String.raw`integration as the reverse of differentiation`,
      String.raw`integration of $x^n$ for any rational $n$, $\sin x$, $\cos x$, $\sec^2 x$ and $\ee^x$, together with constant multiples, sums and differences`,
      String.raw`integration of $(ax + b)^n$ for any rational $n$, $\sin(ax + b)$, $\cos(ax + b)$ and $\ee^{(ax + b)}$`,
      String.raw`definite integral as area under a curve`,
      String.raw`evaluation of definite integrals`,
      String.raw`finding the area of a region bounded by a curve and line(s)`,
      String.raw`finding areas of regions below the $x$-axis`,
    ],
    exclude: [
      String.raw`area of region between 2 curves`,
    ],
  },
  concepts: [
    {
      title: String.raw`Integration reverses differentiation`,
      body: String.raw`If $\dfrac{\dd}{\dd x}\mathrm{F}(x) = \mathrm{f}(x)$, then
$$\int \mathrm{f}(x)\,\dd x = \mathrm{F}(x) + c.$$

- Always add the **arbitrary constant** $c$ to an indefinite integral — it is a lost mark if you forget.
- Check your answer by differentiating it: you should get back the expression you integrated.
- Given the gradient function $\dfrac{\dd y}{\dd x}$ and **one point** on the curve, integrate, then substitute the point to find $c$. Given $\dfrac{\dd^2 y}{\dd x^2}$, integrate twice: two constants, so you need two facts (e.g. a point and a stationary point).`,
      figure: {
        type: "plot",
        x: [-2.4, 2.4], y: [-1.6, 5.2], height: 240,
        curves: [
          { fn: "x => x*x - 1", domain: [-2.3, 2.3], dashed: true, tone: "muted" },
          { fn: "x => x*x", domain: [-2.3, 2.3], dashed: true, tone: "muted" },
          { fn: "x => x*x + 3", domain: [-2.3, 2.3], dashed: true, tone: "muted" },
          { fn: "x => x*x + 1", domain: [-2.3, 2.3] },
        ],
        points: [{ x: 1, y: 2, label: "(1, 2)", pos: "w" }],
        labels: [{ x: 1.0, y: -1.2, text: "y = x² + c", pos: "e", style: "italic", tone: "muted" }],
        caption: String.raw`$\frac{\dd y}{\dd x} = 2x$ gives the family $y = x^2 + c$ (four members shown). The point $(1, 2)$ picks out one curve: $c = 1$.`,
        alt: "Four parallel parabolas y = x² + c for c = −1, 0, 1 and 3. The curve with c = 1 is solid and passes through the marked point (1, 2); the others are dashed.",
      },
    },
    {
      title: String.raw`Standard integrals (memorise)`,
      body: String.raw`None of these is on the formula sheet.

| $\mathrm{f}(x)$ | $\displaystyle\int \mathrm{f}(x)\,\dd x$ |
| --- | --- |
| $x^n$ ($n \ne -1$) | $\dfrac{x^{n+1}}{n + 1} + c$ |
| $\cos x$ | $\sin x + c$ |
| $\sin x$ | $-\cos x + c$ |
| $\sec^2 x$ | $\tan x + c$ |
| $\ee^x$ | $\ee^x + c$ |

- Rewrite first: $\dfrac{5}{x^4} = 5x^{-4}$, $\sqrt[3]{x} = x^{\frac{1}{3}}$.
- You **cannot** integrate a product or quotient term by term. Expand brackets or split the fraction first: $\dfrac{(x + 3)^2}{\sqrt{x}} = x^{\frac{3}{2}} + 6x^{\frac{1}{2}} + 9x^{-\frac{1}{2}}$.
- Signs: $\int \sin x\,\dd x = -\cos x + c$ (the minus sign is the most common slip).
- Use identities to rewrite: $\tan^2 x = \sec^2 x - 1$, $\sin^2 x = \frac{1}{2}(1 - \cos 2x)$ (rearranged from $\cos 2A = 1 - 2\sin^2 A$ on the formula sheet).`,
    },
    {
      title: String.raw`Integrals of $(ax + b)$ forms`,
      body: String.raw`When $x$ is replaced by $(ax + b)$, integrate as usual and **divide by $a$** (the derivative of the inside):

| $\mathrm{f}(x)$ | $\displaystyle\int \mathrm{f}(x)\,\dd x$ |
| --- | --- |
| $(ax + b)^n$ ($n \ne -1$) | $\dfrac{(ax + b)^{n+1}}{a(n + 1)} + c$ |
| $\cos(ax + b)$ | $\dfrac{1}{a}\sin(ax + b) + c$ |
| $\sin(ax + b)$ | $-\dfrac{1}{a}\cos(ax + b) + c$ |
| $\sec^2(ax + b)$ | $\dfrac{1}{a}\tan(ax + b) + c$ |
| $\ee^{ax + b}$ | $\dfrac{1}{a}\ee^{ax + b} + c$ |

- Example: $\displaystyle\int \frac{5}{(4x + 3)^2}\,\dd x = \int 5(4x + 3)^{-2}\,\dd x = \frac{5(4x + 3)^{-1}}{(-1)(4)} + c = -\frac{5}{4(4x + 3)} + c$.
- This works only for a **linear** inside. $\int (x^2 + 1)^3\,\dd x$ must be expanded first.`,
    },
    {
      title: String.raw`"Hence" integration`,
      body: String.raw`A common two-step question: "Differentiate $\mathrm{F}(x)$. Hence find $\int \mathrm{g}(x)\,\dd x$."

1. Find $\mathrm{F}'(x)$.
2. Write the result as an integral: $\int \mathrm{F}'(x)\,\dd x = \mathrm{F}(x) + c$.
3. Rearrange so that the integral you want is the subject. Move constant multiples outside, and integrate any extra terms separately.

Example: $\dfrac{\dd}{\dd x}(x\ee^x) = x\ee^x + \ee^x$, so $\int(x\ee^x + \ee^x)\,\dd x = x\ee^x + c$, and therefore $\int x\ee^x\,\dd x = x\ee^x - \ee^x + c$.

The word "hence" means you must use the previous result — another method scores no marks.`,
    },
    {
      title: String.raw`Definite integrals`,
      body: String.raw`$$\int_a^b \mathrm{f}(x)\,\dd x = \Big[\mathrm{F}(x)\Big]_a^b = \mathrm{F}(b) - \mathrm{F}(a).$$

- No $+c$ is needed (it cancels).
- $\displaystyle\int_b^a \mathrm{f}(x)\,\dd x = -\int_a^b \mathrm{f}(x)\,\dd x$ and $\displaystyle\int_a^b k\,\mathrm{f}(x)\,\dd x = k\int_a^b \mathrm{f}(x)\,\dd x$.
- $\displaystyle\int_a^b [\mathrm{f}(x) + \mathrm{g}(x)]\,\dd x = \int_a^b \mathrm{f}(x)\,\dd x + \int_a^b \mathrm{g}(x)\,\dd x$, and $\displaystyle\int_a^b k\,\dd x = k(b - a)$.
- Trigonometric limits are in **radians**. For "exact value" questions, use exact values such as $\sin\frac{\pi}{6} = \frac{1}{2}$ and leave $\pi$, $\ee$ or surds in the answer.
- Show the substituted brackets $\mathrm{F}(b) - \mathrm{F}(a)$ before the final value.`,
    },
    {
      title: String.raw`Area under a curve`,
      body: String.raw`For a curve **above** the $x$-axis, the area bounded by the curve, the $x$-axis and the lines $x = a$ and $x = b$ is
$$\text{Area} = \int_a^b y\,\dd x.$$

Similarly, the area bounded by a curve, the **$y$-axis** and the lines $y = c$ and $y = d$ is $\displaystyle\int_c^d x\,\dd y$ (write $x$ in terms of $y$ first).

Find the limits first — they are often the $x$-intercepts of the curve, found by solving $y = 0$.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 4], y: [-0.5, 3.6], height: 210,
          shade: [{ upper: "x => 0.2*x*x + 1", from: 1, to: 3, tone: "accent" }],
          curves: [{ fn: "x => 0.2*x*x + 1", domain: [0, 3.8] }],
          labels: [{ x: 1.4, y: 2.6, text: "y = f(x)", pos: "w", style: "italic", tone: "accent" }],
          segments: [
            { from: [1, 0], to: [1, 1.2], thin: true, tone: "ink" },
            { from: [3, 0], to: [3, 2.8], thin: true, tone: "ink" },
          ],
          xTicks: [{ x: 1, label: "a" }, { x: 3, label: "b" }],
          caption: String.raw`Area $= \int_a^b y\,\dd x$`,
          alt: "The region under the curve y = f(x), above the x-axis, between x = a and x = b, is shaded.",
        },
        {
          type: "plot",
          x: [-0.6, 4], y: [-0.5, 3.6], height: 210,
          polygons: [{ points: [[0, 1], ...Array.from({ length: 31 }, (_, i) => { const y = 1 + (1.6 * i) / 30; return [y * y / 2, y]; }), [0, 2.6]], fill: true, tone: "accent" }],
          curves: [{ fn: "x => Math.sqrt(2*x)", domain: [0, 3.8] }],
          labels: [{ x: 2.4, y: 1.3, text: "x = g(y)", pos: "e", style: "italic", tone: "accent" }],
          segments: [
            { from: [0, 1], to: [0.5, 1], thin: true, tone: "ink" },
            { from: [0, 2.6], to: [3.38, 2.6], thin: true, tone: "ink" },
          ],
          yTicks: [{ y: 1, label: "c" }, { y: 2.6, label: "d" }],
          caption: String.raw`Area $= \int_c^d x\,\dd y$`,
          alt: "The region between a curve and the y-axis, between the horizontal lines y = c and y = d, is shaded.",
        },
      ],
    },
    {
      title: String.raw`Areas below the $x$-axis`,
      body: String.raw`Where the curve is **below** the $x$-axis, $\int_a^b y\,\dd x$ is **negative**. The area is the positive value: $\left|\int_a^b y\,\dd x\right|$.

If the curve crosses the $x$-axis between the limits:
1. Find where it crosses (solve $y = 0$) and sketch the curve.
2. Integrate **each part separately**.
3. Add the positive values of the parts.

One integral across the whole interval gives the *difference* of the areas, not the total area — the parts above and below cancel.`,
      figure: {
        type: "plot",
        x: [-0.5, 3.6], y: [-2.6, 1.6], height: 220, originLabel: "nw",
        shade: [
          { upper: "x => x*(x - 1)*(x - 3)", from: 0, to: 1, tone: "accent" },
          { upper: "x => 0", lower: "x => x*(x - 1)*(x - 3)", from: 1, to: 3, tone: "warn" },
        ],
        curves: [{ fn: "x => x*(x - 1)*(x - 3)", domain: [-0.25, 3.35] }],
        xTicks: [{ x: 1, label: "1" }],
        labels: [
          { x: 3, y: 0, text: "3", pos: "nw" },
          { x: 0.5, y: 0.3, text: "+", style: "bold", tone: "accent" },
          { x: 2.1, y: -0.9, text: "−", style: "bold", tone: "warn" },
        ],
        caption: String.raw`$y = x(x - 1)(x - 3)$: total area $= \int_0^1 y\,\dd x + \left|\int_1^3 y\,\dd x\right|$.`,
        alt: "A cubic curve crossing the x-axis at 0, 1 and 3. The region between 0 and 1 is above the axis and its integral is positive; the region between 1 and 3 is below the axis and its integral is negative.",
      },
    },
    {
      title: String.raw`Area bounded by a curve and a line`,
      body: String.raw`1. Find where the curve and the line meet (solve simultaneously) — these give the limits.
2. Then either
   - use $\displaystyle\int_a^b (\text{upper} - \text{lower})\,\dd x$, where "upper" is the graph on top over the whole interval, or
   - add or subtract the area under the curve and the area of a triangle or trapezium under the line (use $\frac{1}{2}(a + b)h$ — quicker than integrating).
3. Look carefully at which region is shaded; split it at a point where the boundary changes.

Areas between **two curves** are not in the syllabus.`,
      figure: {
        type: "plot",
        x: [-0.8, 6.6], y: [-0.9, 10], height: 240, originLabel: "se",
        shade: [{ upper: "x => 6*x - x*x", lower: "x => 2*x", from: 0, to: 4, tone: "accent" }],
        curves: [{ fn: "x => 6*x - x*x", domain: [-0.1, 6.1], label: "y = 6x − x²", labelAt: 5.0 }],
        segments: [{ from: [-0.3, -0.6], to: [4.9, 9.8], tone: "good" }],
        points: [{ x: 4, y: 8 }],
        xTicks: [{ x: 4, label: "4" }],
        labels: [{ x: 4.85, y: 9.6, text: "y = 2x", pos: "e", style: "italic", tone: "good" }],
        caption: String.raw`Area $= \int_0^4 \left[(6x - x^2) - 2x\right]\dd x$: curve on top, line below.`,
        alt: "The parabola y = 6x − x² and the line y = 2x meet at the origin and at x = 4. The region between them, with the curve above the line, is shaded.",
      },
    },
  ],
  archetypes: [
    {
      id: "C3-standard-integrals",
      name: String.raw`Indefinite integrals of standard functions`,
      tests: String.raw`Rewriting powers and roots, expanding or splitting before integrating term by term, and integrating $\sin x$, $\cos x$, $\sec^2 x$ and $\ee^x$, with the $+c$.`,
      questions: [
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int \left(3x^2 - \frac{4}{x^3} + \sqrt{x}\right)\dd x$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\displaystyle\int \frac{(x + 2)^2}{\sqrt{x}}\,\dd x$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int (4\sin x + 3\sec^2 x)\,\dd x$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\displaystyle\int \tan^2 x\,\dd x$, using the identity $\sec^2 x = 1 + \tan^2 x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "C3-linear-forms",
      name: String.raw`Integrals of $(ax + b)$ forms`,
      tests: String.raw`Integrating $(ax + b)^n$, $\ee^{ax + b}$ and trigonometric functions of $(ax + b)$ by dividing by $a$; sometimes after expanding or using a double angle formula.`,
      questions: [
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int (3x - 2)^5\,\dd x$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\displaystyle\int \frac{6}{(2x + 1)^3}\,\dd x$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\displaystyle\int \ee^{3 - 2x}\,\dd x$,`, marks: 2 },
            { label: "(d)", text: String.raw`$\displaystyle\int \sin\left(2x + \frac{\pi}{3}\right)\dd x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int \frac{(\ee^x - 1)^2}{\ee^x}\,\dd x$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\displaystyle\int \cos^2 x\,\dd x$, by first expressing $\cos^2 x$ in terms of $\cos 2x$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C3-curve-from-gradient",
      name: String.raw`Finding a curve from its gradient function`,
      tests: String.raw`Integrating $\frac{\dd y}{\dd x}$ (or $\frac{\dd^2 y}{\dd x^2}$ twice) and using given points or stationary points to find the constants.`,
      questions: [
        {
          stem: String.raw`The gradient function of a curve is given by $\dfrac{\dd y}{\dd x} = 4\ee^{2x} - 3$. The curve passes through the point $(0, 5)$. Find the equation of the curve.`,
          marks: 4,
        },
        {
          stem: String.raw`A curve is such that $\dfrac{\dd^2 y}{\dd x^2} = 6x - 4$. The curve has a stationary point at $(1, 2)$.`,
          parts: [
            { label: "(a)", text: String.raw`Find an expression for $\dfrac{\dd y}{\dd x}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the equation of the curve.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the $x$-coordinate of the other stationary point of the curve and determine its nature.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C3-hence-integration",
      name: String.raw`Integration from a given derivative ("hence")`,
      tests: String.raw`Differentiating a given function (usually with the product or quotient rule), then reversing the result to find an integral that cannot be done directly.`,
      questions: [
        {
          stem: String.raw`It is given that $y = x\ln x$, where $x > 0$.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence find $\displaystyle\int \ln x\,\dd x$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the exact value of $\displaystyle\int_1^{\ee} \ln x\,\dd x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator,`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`show that $\dfrac{\dd}{\dd x}(x\sin 2x) = \sin 2x + 2x\cos 2x$,`, marks: 2 },
            { label: "(b)", text: String.raw`hence find the exact value of $\displaystyle\int_0^{\frac{\pi}{4}} x\cos 2x\,\dd x$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "C3-definite-integrals",
      name: String.raw`Evaluating definite integrals`,
      tests: String.raw`Substituting limits correctly (often without a calculator, with exact trigonometric values), using the properties of definite integrals, and finding an unknown limit.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, evaluate`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int_1^4 \left(3\sqrt{x} - \frac{2}{x^2}\right)\dd x$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\displaystyle\int_0^{\frac{\pi}{4}} (\cos 2x + \sec^2 x)\,\dd x$.`, marks: 3 },
          ],
        },
        {
          parts: [
            {
              label: "(a)",
              text: String.raw`It is given that $\displaystyle\int_1^5 \mathrm{f}(x)\,\dd x = 7$.`,
              parts: [
                { label: "(i)", text: String.raw`Find the value of $\displaystyle\int_1^5 [2\mathrm{f}(x) - 3]\,\dd x$.`, marks: 2 },
                { label: "(ii)", text: String.raw`Write down the value of $\displaystyle\int_5^1 \mathrm{f}(x)\,\dd x$.`, marks: 1 },
              ],
            },
            { label: "(b)", text: String.raw`Find the value of the constant $k$, where $k > 1$, such that $\displaystyle\int_1^k (2x - 1)\,\dd x = 6$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C3-area-under-curve",
      name: String.raw`Area between a curve and an axis`,
      tests: String.raw`Finding the limits from the axis intercepts and evaluating $\int y\,\dd x$ (or $\int x\,\dd y$ for a region next to the $y$-axis) for a region shown in a diagram.`,
      questions: [
        {
          stem: String.raw`The diagram shows part of the curve $y = x(x - 3)^2$. The curve meets the $x$-axis at the origin $O$ and touches the $x$-axis at the point $A$.`,
          figure: {
            type: "plot",
            x: [-0.7, 4.3], y: [-0.8, 5.4], height: 230, originLabel: "nw",
            shade: [{ upper: "x => x*(x - 3)*(x - 3)", from: 0, to: 3, tone: "accent" }],
            curves: [{ fn: "x => x*(x - 3)*(x - 3)", domain: [-0.25, 3.95] }],
            labels: [{ x: 3.9, y: 4.5, text: "y = x(x − 3)²", pos: "w", style: "italic", tone: "accent" }],
            points: [{ x: 3, y: 0, label: "A", pos: "s" }],
            alt: "The curve y = x(x − 3)² rising from the origin to a maximum, then falling to touch the x-axis at A and rising again. The region between the curve and the x-axis from O to A is shaded.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the coordinates of $A$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the area of the shaded region.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The diagram shows part of the curve $x = y^2 + 1$. The shaded region is bounded by the curve, the $y$-axis, the $x$-axis and the line $y = 2$. Find the area of the shaded region.`,
          figure: {
            type: "plot",
            x: [-0.8, 6.2], y: [-0.8, 2.9], equal: true,
            polygons: [{ points: [[0, 0], ...Array.from({ length: 41 }, (_, i) => { const y = (2 * i) / 40; return [y * y + 1, y]; }), [0, 2]], fill: true, tone: "accent" }],
            curves: [{ param: "t => [t*t + 1, t]", t: [-0.6, 2.15] }],
            lines: [{ y: 2 }],
            labels: [
              { x: 3.0, y: 1.2, text: "x = y² + 1", pos: "e", style: "italic", tone: "accent" },
              { x: 0, y: 2.15, text: "y = 2", pos: "w", style: "italic" },
            ],
            alt: "Part of the curve x = y² + 1, which crosses the x-axis at x = 1 and bends to the right as y increases. The region between the y-axis and the curve, from y = 0 to y = 2, is shaded.",
          },
          marks: 3,
        },
      ],
    },
    {
      id: "C3-area-below-axis",
      name: String.raw`Regions below the $x$-axis`,
      tests: String.raw`Recognising that an integral over a region below the $x$-axis is negative, splitting the interval where the curve crosses the axis, and adding positive areas.`,
      questions: [
        {
          stem: String.raw`The diagram shows part of the curve $y = \sin 2x$ for $0 \le x \le \frac{3\pi}{4}$. Without using a calculator, find the total area of the shaded regions.`,
          calculator: false,
          marks: 4,
          figure: {
            type: "plot",
            x: [-0.3, 2.75], y: [-1.4, 1.5], height: 210,
            shade: [
              { upper: "x => Math.sin(2*x)", from: 0, to: 1.5708, tone: "accent" },
              { upper: "x => 0", lower: "x => Math.sin(2*x)", from: 1.5708, to: 2.3562, tone: "accent" },
            ],
            curves: [{ fn: "x => Math.sin(2*x)", domain: [0, 2.3562], label: "y = sin 2x", labelAt: 0.95 }],
            segments: [{ from: [2.3562, 0], to: [2.3562, -1], thin: true, tone: "ink" }],
            labels: [{ x: 1.5708, y: 0, text: "π/2", pos: "sw", style: "italic" }, { x: 2.3562, y: -1, text: "x = 3π/4", pos: "e", style: "italic" }],
            alt: "One and a half arches of y = sin 2x: a shaded arch above the x-axis from 0 to π/2, then a shaded region below the axis from π/2 to x = 3π/4.",
          },
        },
        {
          stem: String.raw`A curve has equation $y = x^2 - 2x$.`,
          parts: [
            { label: "(a)", text: String.raw`Evaluate $\displaystyle\int_0^3 (x^2 - 2x)\,\dd x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain why your answer to part (a) is not the total area of the regions bounded by the curve, the $x$-axis and the line $x = 3$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find this total area.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C3-area-curve-line",
      name: String.raw`Area bounded by a curve and a straight line`,
      tests: String.raw`Finding where a line meets a curve, then finding a shaded area by "upper minus lower" or by combining the area under the curve with a triangle or trapezium.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $y = 3 + 2x - x^2$ and the line $y = x + 1$, which intersect at the points $A$ and $B$.`,
          figure: {
            type: "plot",
            x: [-2.4, 3.8], y: [-2.2, 4.8], height: 250,
            shade: [{ upper: "x => 3 + 2*x - x*x", lower: "x => x + 1", from: -1, to: 2, tone: "accent" }],
            curves: [{ fn: "x => 3 + 2*x - x*x", domain: [-1.8, 3.5] }],
            segments: [{ from: [-2.2, -1.2], to: [3.3, 4.3], tone: "good" }],
            points: [{ x: -1, y: 0, label: "A", pos: "nw" }, { x: 2, y: 3, label: "B", pos: "nw" }],
            labels: [
              { x: 3.3, y: 4.3, text: "y = x + 1", pos: "w", style: "italic", tone: "good" },
              { x: -2.3, y: 3.8, text: "y = 3 + 2x − x²", pos: "e", style: "italic", tone: "accent" },
            ],
            alt: "A downward parabola y = 3 + 2x − x² and the line y = x + 1 crossing it at A on the left and B on the right. The region between them, with the parabola on top, is shaded.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of $A$ and of $B$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the area of the shaded region.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The diagram shows part of the curve $y = \sqrt{x}$ and the line $y = x - 2$. The line meets the $x$-axis at $Q$ and meets the curve at $P$.`,
          figure: {
            type: "plot",
            x: [-0.6, 5.6], y: [-0.9, 3.0], equal: true,
            shade: [{ upper: "x => Math.sqrt(x)", lower: "x => Math.max(0, x - 2)", from: 0, to: 4, tone: "accent" }],
            curves: [{ fn: "x => Math.sqrt(x)", domain: [0, 5.4] }],
            segments: [{ from: [1.4, -0.6], to: [4.8, 2.8], tone: "good" }],
            points: [{ x: 4, y: 2, label: "P", pos: "nw" }, { x: 2, y: 0, label: "Q", pos: "se" }],
            labels: [
              { x: 3.1, y: 0.6, text: "y = x − 2", pos: "e", style: "italic", tone: "good" },
              { x: 1.0, y: 1.4, text: "y = √x", pos: "w", style: "italic", tone: "accent" },
            ],
            alt: "The curve y = √x from the origin and the line y = x − 2, which crosses the x-axis at Q and meets the curve at P. The region bounded by the curve, the x-axis and the line is shaded.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $P$ is the point $(4, 2)$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the area of the shaded region bounded by the curve, the line and the $x$-axis.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
