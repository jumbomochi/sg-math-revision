H2.addTopic({
  id: "C1",
  title: "Differentiation",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Part of syllabus item C1 (Differentiation and integration): the derivative as a gradient and a rate of change, standard derivatives, and the chain, product and quotient rules.`,
  syllabus: {
    include: [
      String.raw`derivative of $\mathrm{f}(x)$ as the gradient of the tangent to the graph of $y = \mathrm{f}(x)$ at a point`,
      String.raw`derivative as rate of change`,
      String.raw`use of standard notations $\mathrm{f}'(x)$, $\mathrm{f}''(x)$, $\dfrac{\dd y}{\dd x}$, $\dfrac{\dd^2 y}{\dd x^2}\ \left[= \dfrac{\dd}{\dd x}\left(\dfrac{\dd y}{\dd x}\right)\right]$`,
      String.raw`derivatives of $x^n$ for any rational $n$, $\sin x$, $\cos x$, $\tan x$, $\ee^x$ and $\ln x$, together with constant multiples, sums and differences`,
      String.raw`derivatives of products and quotients of functions`,
      String.raw`use of Chain Rule`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`The derivative is a gradient`,
      body: String.raw`The **derivative** $\dfrac{\dd y}{\dd x}$ at a point is the **gradient of the tangent** to the curve $y = \mathrm{f}(x)$ at that point.

- A curve has a different gradient at different points, so $\dfrac{\dd y}{\dd x}$ is itself a function of $x$ (the **gradient function**).
- To find the gradient at a point, differentiate first, **then** substitute the $x$-coordinate.
- Do not substitute the $y$-coordinate into $\dfrac{\dd y}{\dd x}$ by mistake — read the question carefully.`,
      figure: {
        type: "plot",
        x: [-0.6, 4.6], y: [-0.5, 4.6], height: 250,
        curves: [{ fn: "x => x*x/4 + 0.5", domain: [-0.5, 4.1] }],
        segments: [
          { from: [0.4, 0.075], to: [3.9, 4.01], dashed: true, thin: true, tone: "muted" },
          { from: [0.2, 0.11], to: [3.6, 2.83], dashed: true, thin: true, tone: "muted" },
          { from: [-0.4, 0.05], to: [4.4, 2.45], tone: "good" },
        ],
        points: [
          { x: 1, y: 0.75, label: "P", pos: "se" },
          { x: 3.5, y: 3.5625, label: "Q", pos: "w" },
          { x: 2.2, y: 1.71 },
        ],
        labels: [
          { x: 4.45, y: 1.6, text: "tangent at P", pos: "w", style: "small", tone: "good" },
          { x: 3.4, y: 4.3, text: "y = f(x)", pos: "w", style: "italic", tone: "accent" },
        ],
        caption: String.raw`As $Q$ slides along the curve towards $P$, the chord $PQ$ turns into the tangent at $P$. Its gradient is $\frac{\dd y}{\dd x}$ at $P$.`,
        alt: "The curve y = f(x) with a point P. Two dashed chords from P to points further along the curve get closer to the solid tangent line at P as the second point moves towards P.",
      },
    },
    {
      title: String.raw`The derivative is a rate of change`,
      body: String.raw`$\dfrac{\dd y}{\dd x}$ tells you how fast $y$ changes as $x$ changes.

- If $V$ depends on time $t$, then $\dfrac{\dd V}{\dd t}$ is the rate of change of $V$ (units: units of $V$ per unit of time, e.g. cm³ per second).
- $\dfrac{\dd V}{\dd t} > 0$: $V$ is increasing. $\dfrac{\dd V}{\dd t} < 0$: $V$ is decreasing.
- "Find the rate at which $V$ is **decreasing**" — if $\dfrac{\dd V}{\dd t} = -3$, the answer is "decreasing at 3 units per second" (a positive number with the word *decreasing*).`,
      figure: {
        type: "plot",
        x: [-6, 82], y: [-8, 98], height: 230, axisLabels: ["t", "θ"],
        curves: [{ fn: "x => 20 + 70*Math.exp(-0.04*x)", domain: [0, 80] }],
        segments: [{ from: [5, 70.33], to: [35, 32.58], tone: "warn" }],
        points: [{ x: 20, y: 51.45 }],
        labels: [{ x: 21, y: 54, text: "gradient < 0: θ decreasing", pos: "ne", style: "small", tone: "warn" }],
        caption: String.raw`A cooling drink, $\theta = 20 + 70\ee^{-0.04t}$: the gradient of the tangent at any time is $\frac{\dd \theta}{\dd t}$, the rate of change of temperature.`,
        alt: "Graph of temperature θ against time t, decreasing from 90 towards 20. A tangent drawn at t = 20 slopes downwards, showing a negative rate of change.",
      },
    },
    {
      title: String.raw`Notation`,
      body: String.raw`| Function | First derivative | Second derivative |
| --- | --- | --- |
| $y$ | $\dfrac{\dd y}{\dd x}$ | $\dfrac{\dd^2 y}{\dd x^2} = \dfrac{\dd}{\dd x}\left(\dfrac{\dd y}{\dd x}\right)$ |
| $\mathrm{f}(x)$ | $\mathrm{f}'(x)$ | $\mathrm{f}''(x)$ |

- The second derivative is found by differentiating the first derivative **again**.
- $\dfrac{\dd^2 y}{\dd x^2}$ is **not** the same as $\left(\dfrac{\dd y}{\dd x}\right)^2$.
- "Differentiate with respect to $x$" means find $\dfrac{\dd}{\dd x}(\ldots)$. If the variable is $t$, differentiate with respect to $t$.`,
    },
    {
      title: String.raw`Standard derivatives (memorise)`,
      body: String.raw`None of these is on the formula sheet.

| $y$ | $\dfrac{\dd y}{\dd x}$ |
| --- | --- |
| $x^n$ ($n$ rational) | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\ee^x$ | $\ee^x$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $k$ (constant) | $0$ |

- Constants multiply through, and sums and differences are differentiated term by term.
- **Rewrite before differentiating**: $\sqrt{x} = x^{\frac{1}{2}}$, $\dfrac{3}{x^2} = 3x^{-2}$, $\dfrac{1}{2\sqrt{x}} = \frac{1}{2}x^{-\frac{1}{2}}$. Split a fraction with a single term in the denominator: $\dfrac{x^2 + 4}{x} = x + 4x^{-1}$.
- Angles **must be in radians** for the trigonometric results.`,
      figure: {
        type: "plot",
        x: [-0.5, 7], y: [-1.6, 1.8], height: 220,
        curves: [
          { fn: "x => Math.sin(x)", domain: [0, 6.2832], label: "y = sin x", labelAt: 2.2 },
          { fn: "x => Math.cos(x)", domain: [0, 6.2832], dashed: true, tone: "good" },
        ],
        segments: [{ from: [0.9, 1], to: [2.24, 1], tone: "warn", thin: true }],
        points: [{ x: 1.5708, y: 1 }, { x: 1.5708, y: 0 }],
        xTicks: [{ x: 1.5708, label: "π/2" }, { x: 3.1416, label: "π" }, { x: 6.2832, label: "2π" }],
        labels: [{ x: 0.25, y: 1.3, text: "y = cos x", pos: "e", style: "italic", tone: "good" }],
        caption: String.raw`The gradient of $y = \sin x$ is $\cos x$: where $\sin x$ has a horizontal tangent ($x = \frac{\pi}{2}$), $\cos x = 0$.`,
        alt: "Graphs of y = sin x (solid) and y = cos x (dashed) for 0 ≤ x ≤ 2π. At x = π/2 the sine curve has a horizontal tangent and the cosine curve crosses the x-axis.",
      },
    },
    {
      title: String.raw`Chain Rule`,
      body: String.raw`For a function of a function, $y = \mathrm{f}(u)$ where $u$ is a function of $x$:
$$\frac{\dd y}{\dd x} = \frac{\dd y}{\dd u} \times \frac{\dd u}{\dd x}.$$
"Differentiate the outside, keep the inside, then multiply by the derivative of the inside."

| $y$ | $\dfrac{\dd y}{\dd x}$ |
| --- | --- |
| $[\mathrm{f}(x)]^n$ | $n[\mathrm{f}(x)]^{n-1}\,\mathrm{f}'(x)$ |
| $\ee^{\mathrm{f}(x)}$ | $\mathrm{f}'(x)\,\ee^{\mathrm{f}(x)}$ |
| $\ln \mathrm{f}(x)$ | $\dfrac{\mathrm{f}'(x)}{\mathrm{f}(x)}$ |
| $\sin \mathrm{f}(x)$ | $\mathrm{f}'(x)\cos \mathrm{f}(x)$ |
| $\sin(ax + b)$ | $a\cos(ax + b)$ |

- $\sin^3 x$ means $(\sin x)^3$, so $\dfrac{\dd}{\dd x}\sin^3 x = 3\sin^2 x \cos x$.
- Common mistake: forgetting the factor $\mathrm{f}'(x)$, e.g. writing $\dfrac{\dd}{\dd x}\ee^{3x} = \ee^{3x}$.`,
    },
    {
      title: String.raw`Use the laws of logarithms first`,
      body: String.raw`Before differentiating $\ln(\ldots)$ of a product, quotient or power, **split it up** with the laws of logarithms. It is much quicker and avoids the quotient rule.
$$y = \ln\frac{x^2}{\sqrt{3x + 1}} = 2\ln x - \tfrac{1}{2}\ln(3x + 1) \ \Rightarrow\ \frac{\dd y}{\dd x} = \frac{2}{x} - \frac{3}{2(3x + 1)}.$$

- $\ln x^2 = 2\ln x$, but $(\ln x)^2$ is different: $\dfrac{\dd}{\dd x}(\ln x)^2 = \dfrac{2\ln x}{x}$.
- $\ln(a + b)$ cannot be split.`,
    },
    {
      title: String.raw`Product and quotient rules (memorise)`,
      body: String.raw`For functions $u$ and $v$ of $x$:
$$\frac{\dd}{\dd x}(uv) = u\frac{\dd v}{\dd x} + v\frac{\dd u}{\dd x}, \qquad \frac{\dd}{\dd x}\left(\frac{u}{v}\right) = \frac{v\dfrac{\dd u}{\dd x} - u\dfrac{\dd v}{\dd x}}{v^2}.$$

- The quotient rule has a **minus sign**, so the order matters: "$v$ d$u$ minus $u$ d$v$, over $v$ squared".
- Write down $u$, $v$, $\frac{\dd u}{\dd x}$ and $\frac{\dd v}{\dd x}$ first — it earns method marks and avoids slips.
- In "Show that $\frac{\dd y}{\dd x} = \ldots$" questions, take out **common factors** (such as $\ee^{2x}$ or a power of $(2x - 1)$) and simplify to the exact form given. Show every step.
- If the denominator is a single power of $x$, you may split the fraction instead of using the quotient rule.`,
    },
    {
      title: String.raw`Second derivatives and "show that" equations`,
      body: String.raw`To show that $y$ satisfies an equation such as $\dfrac{\dd^2 y}{\dd x^2} + 2\dfrac{\dd y}{\dd x} + 2y = 0$:

1. Find $\dfrac{\dd y}{\dd x}$ and $\dfrac{\dd^2 y}{\dd x^2}$ fully.
2. Substitute all three into the **left-hand side**.
3. Simplify until you reach the right-hand side. Do not start by assuming the equation is true.

Leave common factors such as $\ee^{-x}$ factorised — collecting terms is then easy.`,
    },
  ],
  archetypes: [
    {
      id: "C1-powers-rewriting",
      name: String.raw`Differentiating powers, roots and fractions`,
      tests: String.raw`Rewriting roots and reciprocals as powers, expanding or splitting fractions, then differentiating term by term. Often a "show that" with a factorised answer.`,
      questions: [
        {
          stem: String.raw`Differentiate each of the following with respect to $x$.`,
          parts: [
            { label: "(a)", text: String.raw`$4x^3 - \dfrac{6}{x^2} + 5\sqrt{x}$`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{1}{3\sqrt[3]{x}} + \dfrac{x^2 - 2x}{x}$`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that $y = \dfrac{(x + 2)^2}{\sqrt{x}}$, where $x > 0$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $y$ as a sum of powers of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence show that $\dfrac{\dd y}{\dd x} = \dfrac{(x + 2)(3x - 2)}{2x\sqrt{x}}$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C1-chain-rule",
      name: String.raw`Chain Rule for composite functions`,
      tests: String.raw`Differentiating a function of a function: powers of brackets, roots, and $\ee$, $\ln$ or trigonometric functions of an expression. Recognise it by a bracket or expression "inside" another function.`,
      questions: [
        {
          stem: String.raw`Differentiate each of the following with respect to $x$.`,
          parts: [
            { label: "(a)", text: String.raw`$\sqrt{1 + 4x^2}$`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{6}{(2x - 5)^3}$`, marks: 2 },
            { label: "(c)", text: String.raw`$\ee^{x^2 - 3x}$`, marks: 2 },
            { label: "(d)", text: String.raw`$\cos^4 x$`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Given that $y = \sin^2 3x$, show that $\dfrac{\dd y}{\dd x} = 3\sin 6x$.`,
          marks: 3,
          calculator: false,
        },
      ],
    },
    {
      id: "C1-trig-exp-ln",
      name: String.raw`Trigonometric, exponential and logarithmic functions`,
      tests: String.raw`Using the standard derivatives of $\sin$, $\cos$, $\tan$, $\ee^x$ and $\ln x$ with the Chain Rule, splitting logarithms with the laws of logarithms first, and finding exact gradients without a calculator.`,
      questions: [
        {
          stem: String.raw`Given that $y = \ln\dfrac{(2x + 1)^3}{\sqrt{x - 2}}$, where $x > 2$, show that $\dfrac{\dd y}{\dd x} = \dfrac{k(2x - 5)}{(2x + 1)(x - 2)}$, where $k$ is a constant to be found.`,
          marks: 4,
        },
        {
          stem: String.raw`Without using a calculator, find the exact value of the gradient of each curve at the given point.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$y = \tan 2x$ at the point where $x = \dfrac{\pi}{8}$.`, marks: 2 },
            { label: "(b)", text: String.raw`$y = 3\ee^{1 - 2x} + \ln(4x - 1)$ at the point where $x = \dfrac{1}{2}$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C1-product-rule",
      name: String.raw`Product rule`,
      tests: String.raw`Differentiating a product of two functions, then factorising the result — often followed by finding where the gradient is zero.`,
      questions: [
        {
          stem: String.raw`A curve has equation $y = x^2\ee^{3x}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$, giving your answer in factorised form.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence find the $x$-coordinates of the points on the curve where the gradient is zero.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Given that $y = (x + 1)\sqrt{2x - 3}$, where $x > \frac{3}{2}$, show that $\dfrac{\dd y}{\dd x} = \dfrac{3x - 2}{\sqrt{2x - 3}}$.`,
          marks: 4,
        },
      ],
    },
    {
      id: "C1-quotient-rule",
      name: String.raw`Quotient rule`,
      tests: String.raw`Differentiating a quotient, simplifying the numerator carefully (signs!) and factorising, or using a trigonometric identity to simplify.`,
      questions: [
        {
          stem: String.raw`It is given that $y = \dfrac{4x - 3}{x^2 + 1}$.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $\dfrac{\dd y}{\dd x} = \dfrac{k(2x + 1)(2 - x)}{(x^2 + 1)^2}$, where $k$ is an integer to be found.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the values of $x$ for which $\dfrac{\dd y}{\dd x} = 0$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Given that $y = \dfrac{\sin x}{1 + \cos x}$, show that $\dfrac{\dd y}{\dd x} = \dfrac{1}{1 + \cos x}$.`,
          marks: 4,
          calculator: false,
        },
      ],
    },
    {
      id: "C1-gradient-unknowns",
      name: String.raw`Gradient at a point and unknown constants`,
      tests: String.raw`Using $\frac{\dd y}{\dd x}$ as the gradient at a point: substituting a given $x$, or forming equations from "passes through" and "has gradient" conditions to find unknown constants.`,
      questions: [
        {
          stem: String.raw`The curve $y = ax + \dfrac{b}{x^2}$, where $a$ and $b$ are constants, passes through the point $(1, 3)$ and has gradient $-3$ at this point.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the gradient of the curve at the point where $x = 2$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "C1-rate-of-change",
      name: String.raw`Rate of change in context`,
      tests: String.raw`Interpreting a derivative with respect to time as a rate of change: finding it at an instant, giving units, and explaining from its sign whether a quantity is increasing or decreasing.`,
      questions: [
        {
          stem: String.raw`The temperature, $\theta\,$°C, of a cup of coffee $t$ minutes after it is made is given by $\theta = 25 + 60\ee^{-0.05t}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the initial temperature of the coffee.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the rate at which the temperature is decreasing when $t = 10$.`, marks: 3 },
            { label: "(c)", text: String.raw`Explain why the temperature of the coffee is decreasing for all values of $t$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "C1-second-derivative",
      name: String.raw`Second derivatives and showing an equation holds`,
      tests: String.raw`Differentiating twice (usually with the product or quotient rule) and substituting into a given equation connecting $y$, $\frac{\dd y}{\dd x}$ and $\frac{\dd^2 y}{\dd x^2}$.`,
      questions: [
        {
          stem: String.raw`Given that $y = \ee^{2x}\sin x$, show that $\dfrac{\dd^2 y}{\dd x^2} - 4\dfrac{\dd y}{\dd x} + 5y = 0$.`,
          marks: 5,
        },
        {
          stem: String.raw`It is given that $y = \dfrac{\ln x}{x}$, where $x > 0$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$ and $\dfrac{\dd^2 y}{\dd x^2}$.`, marks: 4 },
            { label: "(b)", text: String.raw`Hence show that $x^2\dfrac{\dd^2 y}{\dd x^2} + 3x\dfrac{\dd y}{\dd x} + y = 0$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
