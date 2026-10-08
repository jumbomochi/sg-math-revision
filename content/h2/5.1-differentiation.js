H2.addTopic({
  id: "5.1",
  title: "Differentiation",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Implicit and parametric differentiation, tangents and normals, stationary points, optimisation and rates of change.`,
  syllabus: {
    include: [
      String.raw`graphical interpretation of (i) $\mathrm{f}'(x) > 0$, $\mathrm{f}'(x) = 0$ and $\mathrm{f}'(x) < 0$; (ii) $\mathrm{f}''(x) > 0$ and $\mathrm{f}''(x) < 0$`,
      String.raw`relating the graph of $y = \mathrm{f}'(x)$ to the graph of $y = \mathrm{f}(x)$`,
      String.raw`differentiation of simple functions defined implicitly or parametrically`,
      String.raw`determining the nature of the stationary points (local maximum and minimum points and points of inflexion) analytically, in simple cases, using the first derivative test or the second derivative test`,
      String.raw`locating maximum and minimum points using a graphing calculator or a graphing software`,
      String.raw`finding the approximate value of a derivative at a given point using a graphing calculator or a graphing software`,
      String.raw`problems involving tangents and normals to curves, including cases where the curve is defined implicitly or parametrically`,
      String.raw`local maxima and minima problems`,
      String.raw`connected rates of change problems`,
    ],
    exclude: [
      String.raw`non-stationary points of inflexion`,
      String.raw`finding the second derivative of functions defined parametrically`,
    ],
  },
  concepts: [
    {
      title: String.raw`Standard derivatives and the rules`,
      body: String.raw`Memorise: $\frac{\dd}{\dd x}x^n = nx^{n-1}$ (any rational $n$), $\sin x \to \cos x$, $\cos x \to -\sin x$, $\tan x \to \sec^2 x$, $\ee^x \to \ee^x$, $\ln x \to \frac{1}{x}$.

**(MF27)** also lists $\sin^{-1}x$, $\cos^{-1}x$, $\tan^{-1}x$, $\operatorname{cosec}x$ and $\sec x$ — look them up rather than misremember a sign.

- Chain rule: $\frac{\dd y}{\dd x} = \frac{\dd y}{\dd u}\cdot\frac{\dd u}{\dd x}$, e.g. $\frac{\dd}{\dd x}\ln(\mathrm{f}(x)) = \frac{\mathrm{f}'(x)}{\mathrm{f}(x)}$.
- Product rule $(uv)' = u'v + uv'$; quotient rule $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$.
- $a^x = \ee^{x\ln a}$, so $\frac{\dd}{\dd x}a^x = a^x \ln a$. Simplify logs **before** differentiating, e.g. $\ln\frac{x^2}{\sqrt{1+x}} = 2\ln x - \frac12\ln(1+x)$.`,
    },
    {
      title: String.raw`Implicit differentiation`,
      body: String.raw`Differentiate every term with respect to $x$, treating $y$ as a function of $x$: $\frac{\dd}{\dd x}(y^3) = 3y^2\frac{\dd y}{\dd x}$, $\frac{\dd}{\dd x}(xy) = y + x\frac{\dd y}{\dd x}$, $\frac{\dd}{\dd x}\ee^{y} = \ee^{y}\frac{\dd y}{\dd x}$. Then collect the $\frac{\dd y}{\dd x}$ terms.

Writing $\frac{\dd y}{\dd x} = \frac{N}{D}$:
- tangent **parallel to the $x$-axis**: $N = 0$ (with $D \ne 0$);
- tangent **parallel to the $y$-axis**: $D = 0$ (with $N \ne 0$).

Each condition gives a relation between $x$ and $y$ — substitute it **back into the equation of the curve** to find the actual points. Discard points where $N = D = 0$ (e.g. the origin on $x^3 + y^3 = 3xy$).`,
      figure: {
        type: "plot", x: [-3.4, 3.4], y: [-3, 3], equal: true,
        caption: String.raw`Horizontal tangents where $N = 0$, vertical tangents where $D = 0$.`,
        alt: "The tilted ellipse x squared minus xy plus y squared equals 3, with horizontal tangents at (1, 2) and (-1, -2) and vertical tangents at (2, 1) and (-2, -1).",
        curves: [ { param: "t => [Math.sqrt(3)*Math.cos(t) + Math.sin(t), Math.sqrt(3)*Math.cos(t) - Math.sin(t)]", t: [0, 6.2832] } ],
        segments: [
          { from: [0.1, 2], to: [1.9, 2], tone: "good" },
          { from: [-1.9, -2], to: [-0.1, -2], tone: "good" },
          { from: [2, 0.1], to: [2, 1.9], tone: "warn" },
          { from: [-2, -1.9], to: [-2, -0.1], tone: "warn" },
        ],
        points: [ { x: 1, y: 2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: -2, y: -1 } ],
        labels: [
          { x: 1, y: 2.05, text: "N = 0", pos: "n", tone: "good" },
          { x: -1, y: -2.05, text: "N = 0", pos: "s", tone: "good" },
          { x: 2.05, y: 1, text: "D = 0", pos: "e", tone: "warn" },
          { x: -2.05, y: -1, text: "D = 0", pos: "w", tone: "warn" },
          { x: -2.2, y: 2.4, text: "x² − xy + y² = 3", pos: "c", style: "italic" },
        ],
      },
    },
    {
      title: String.raw`Parametric differentiation`,
      body: String.raw`For $x = \mathrm{f}(t)$, $y = \mathrm{g}(t)$:
$$\frac{\dd y}{\dd x} = \frac{\dd y/\dd t}{\dd x/\dd t}, \qquad \frac{\dd x}{\dd t} \ne 0.$$

- Horizontal tangent: $\frac{\dd y}{\dd t} = 0$; vertical tangent: $\frac{\dd x}{\dd t} = 0$.
- Leave the gradient in terms of the parameter; find the point $(\mathrm{f}(t), \mathrm{g}(t))$ before writing a tangent.
- "Meets the curve again": substitute $x = \mathrm{f}(t)$, $y = \mathrm{g}(t)$ into the line, giving an equation in $t$ that has the known parameter as a root — factorise it out.
- Second derivatives of parametric functions are **not** examined.`,
    },
    {
      title: String.raw`Tangents and normals`,
      body: String.raw`At $(x_1, y_1)$ with gradient $m$:
$$\text{tangent: } y - y_1 = m(x - x_1), \qquad \text{normal: } y - y_1 = -\frac{1}{m}(x - x_1).$$

- If $m = 0$ the tangent is $y = y_1$ and the normal is $x = x_1$; if the gradient is undefined, the tangent is $x = x_1$.
- For the triangle formed with the axes, find both intercepts (put $x = 0$, then $y = 0$); area $= \frac12|x\text{-int}|\,|y\text{-int}|$.
- Exact answers are expected unless a GC is clearly needed — keep $\sqrt{3}$, $\ee$, $\ln 2$.`,
      figure: {
        type: "plot", x: [-1.4, 5.4], y: [-1.6, 4.4], equal: true,
        caption: String.raw`The normal is perpendicular to the tangent: gradients $m$ and $-\frac{1}{m}$.`,
        alt: "The curve y = x squared over 4 with the tangent and the normal at the point P(2, 1); the normal is perpendicular to the tangent.",
        curves: [ { fn: "x => x*x/4", domain: [-1.4, 4.1], label: "y = f(x)", labelAt: -1.3 } ],
        segments: [
          { from: [-0.3, -1.3], to: [5, 4], tone: "good" },
          { from: [-0.6, 3.6], to: [4.6, -1.6], tone: "warn" },
        ],
        rightAngles: [ { at: [2, 1], a: [1, 1], b: [-1, 1], size: 0.35 } ],
        points: [ { x: 2, y: 1, label: "P(x₁, y₁)", pos: "e" } ],
        labels: [
          { x: 4.6, y: 3.25, text: "tangent", pos: "e", tone: "good" },
          { x: 4.1, y: -1.1, text: "normal", pos: "e", tone: "warn" },
        ],
      },
    },
    {
      title: String.raw`What $\mathrm{f}'$ and $\mathrm{f}''$ say about the graph`,
      body: String.raw`| Condition on an interval | Graph of $y = \mathrm{f}(x)$ |
| --- | --- |
| $\mathrm{f}'(x) > 0$ | increasing |
| $\mathrm{f}'(x) < 0$ | decreasing |
| $\mathrm{f}'(x) = 0$ | stationary point |
| $\mathrm{f}''(x) > 0$ | concave upwards (gradient increasing) |
| $\mathrm{f}''(x) < 0$ | concave downwards (gradient decreasing) |

"f is increasing for all real $x$" for a quadratic $\mathrm{f}'$: leading coefficient $> 0$ and discriminant $< 0$. For a non-polynomial $\mathrm{f}'$, find the range of the varying part first (by calculus or completing the square) and compare with the constant.`,
      figure: [
        {
          type: "plot", x: [-2.6, 2.8], y: [-3.2, 3.4], height: 240,
          caption: String.raw`Sign of $\mathrm{f}'$: increasing or decreasing.`,
          alt: "The curve y = x cubed minus 3x: f'(x) > 0 where it rises, f'(x) < 0 between the maximum and minimum, and f'(x) = 0 at the turning points.",
          curves: [ { fn: "x => x*x*x - 3*x", domain: [-2.2, 2.2] } ],
          points: [ { x: -1, y: 2, label: "f′ = 0", pos: "n" }, { x: 1, y: -2, label: "f′ = 0", pos: "s" } ],
          labels: [
            { x: -2.05, y: 0.6, text: "f′ > 0", pos: "c", tone: "good" },
            { x: 0.75, y: 0.7, text: "f′ < 0", pos: "c", tone: "warn" },
            { x: 2.15, y: -0.6, text: "f′ > 0", pos: "c", tone: "good" },
          ],
        },
        {
          type: "plot", x: [-2.6, 2.8], y: [-3.2, 3.4], height: 240,
          caption: String.raw`Sign of $\mathrm{f}''$: concavity.`,
          alt: "The same cubic curve: concave downwards (f''(x) < 0) for x < 0 and concave upwards (f''(x) > 0) for x > 0.",
          curves: [ { fn: "x => x*x*x - 3*x", domain: [-2.2, 2.2] } ],
          labels: [
            { x: -1.85, y: 3.1, text: "f″ < 0", pos: "c", tone: "warn" },
            { x: -1.85, y: 2.5, text: "concave down", pos: "c", style: "small" },
            { x: 1.85, y: -2.4, text: "f″ > 0", pos: "c", tone: "good" },
            { x: 1.85, y: -3.0, text: "concave up", pos: "c", style: "small" },
          ],
        },
      ],
    },
    {
      title: String.raw`Nature of stationary points`,
      body: String.raw`**Second derivative test** at $x = a$ where $\mathrm{f}'(a) = 0$: $\mathrm{f}''(a) < 0 \Rightarrow$ maximum, $\mathrm{f}''(a) > 0 \Rightarrow$ minimum, $\mathrm{f}''(a) = 0 \Rightarrow$ **inconclusive** — you must then use the first derivative test.

**First derivative test**: tabulate the sign of $\mathrm{f}'$ at $x = a^-$, $a$, $a^+$ using actual values close to $a$ (and not beyond another stationary point).

| Sign of $\mathrm{f}'$: $a^-$, $a$, $a^+$ | Nature |
| --- | --- |
| $+$, $0$, $-$ | maximum |
| $-$, $0$, $+$ | minimum |
| $+$, $0$, $+$ or $-$, $0$, $-$ | stationary point of inflexion |

When the question says "use a GC", locating the max/min with the GC is acceptable; otherwise show the test.`,
      figure: [
        {
          type: "plot", x: [-2.1, 2.1], y: [-0.1, 3.5], height: 200, axisLabels: ["x", null],
          caption: String.raw`Maximum: $+$, $0$, $-$`,
          alt: "A maximum point with tangents at a-minus, a and a-plus having positive, zero and negative gradients.",
          xTicks: [ { x: -1.2, label: "a⁻" }, { x: 0, label: "a" }, { x: 1.2, label: "a⁺" } ],
          curves: [ { fn: "x => 2.8 - 0.6*x*x", domain: [-1.9, 1.9] } ],
          segments: [
            { from: [-1.62, 1.331], to: [-0.78, 2.541], tone: "good" },
            { from: [-0.42, 2.8], to: [0.42, 2.8], tone: "good" },
            { from: [0.78, 2.541], to: [1.62, 1.331], tone: "good" },
          ],
          points: [ { x: 0, y: 2.8 } ],
          labels: [
            { x: -1.55, y: 0.95, text: "+", pos: "c", style: "bold", tone: "good" },
            { x: 0, y: 2.85, text: "0", pos: "n", style: "bold", tone: "good" },
            { x: 1.55, y: 0.95, text: "−", pos: "c", style: "bold", tone: "good" },
          ],
        },
        {
          type: "plot", x: [-2.1, 2.1], y: [-0.1, 3.5], height: 200, axisLabels: ["x", null],
          caption: String.raw`Minimum: $-$, $0$, $+$`,
          alt: "A minimum point with tangents at a-minus, a and a-plus having negative, zero and positive gradients.",
          xTicks: [ { x: -1.2, label: "a⁻" }, { x: 0, label: "a" }, { x: 1.2, label: "a⁺" } ],
          curves: [ { fn: "x => 1 + 0.6*x*x", domain: [-1.9, 1.9] } ],
          segments: [
            { from: [-1.62, 2.469], to: [-0.78, 1.259], tone: "good" },
            { from: [-0.42, 1.0], to: [0.42, 1.0], tone: "good" },
            { from: [0.78, 1.259], to: [1.62, 2.469], tone: "good" },
          ],
          points: [ { x: 0, y: 1.0 } ],
          labels: [
            { x: -0.85, y: 1.9, text: "−", pos: "c", style: "bold", tone: "good" },
            { x: 0, y: 1.05, text: "0", pos: "n", style: "bold", tone: "good" },
            { x: 0.85, y: 1.9, text: "+", pos: "c", style: "bold", tone: "good" },
          ],
        },
        {
          type: "plot", x: [-2.1, 2.1], y: [-0.1, 3.5], height: 200, axisLabels: ["x", null],
          caption: String.raw`Stationary point of inflexion: $+$, $0$, $+$`,
          alt: "A stationary point of inflexion with tangents at a-minus, a and a-plus having positive, zero and positive gradients.",
          xTicks: [ { x: -1.2, label: "a⁻" }, { x: 0, label: "a" }, { x: 1.2, label: "a⁺" } ],
          curves: [ { fn: "x => 1.8 + 0.35*x*x*x", domain: [-1.65, 1.65] } ],
          segments: [
            { from: [-1.62, 0.56], to: [-0.78, 1.83], tone: "good" },
            { from: [-0.42, 1.8], to: [0.42, 1.8], tone: "good" },
            { from: [0.78, 1.77], to: [1.62, 3.04], tone: "good" },
          ],
          points: [ { x: 0, y: 1.8 } ],
          labels: [
            { x: -1.5, y: 1.35, text: "+", pos: "c", style: "bold", tone: "good" },
            { x: 0, y: 1.85, text: "0", pos: "n", style: "bold", tone: "good" },
            { x: 0.95, y: 2.65, text: "+", pos: "c", style: "bold", tone: "good" },
          ],
        },
      ],
    },
    {
      title: String.raw`Graph of $y = \mathrm{f}'(x)$ from $y = \mathrm{f}(x)$`,
      body: String.raw`| Feature of $y = \mathrm{f}(x)$ | Feature of $y = \mathrm{f}'(x)$ |
| --- | --- |
| stationary point at $x = a$ | crosses (or touches) the $x$-axis at $x = a$ |
| increasing / decreasing | above / below the $x$-axis |
| stationary point of inflexion | touches the $x$-axis (turning point on it) |
| vertical asymptote $x = a$ | vertical asymptote $x = a$ |
| oblique asymptote $y = mx + c$ | horizontal asymptote $y = m$ |
| horizontal asymptote | horizontal asymptote $y = 0$ |

The $y$-coordinates of $\mathrm{f}$ are **not** transferred — only gradients matter. Label asymptotes and $x$-intercepts of the new graph.`,
      figure: {
        type: "plot", x: [-2.4, 2.6], y: [-2.1, 7.4], height: 380, axes: false,
        caption: String.raw`Turning points of $y = \mathrm{f}(x)$ line up with the $x$-intercepts of $y = \mathrm{f}'(x)$.`,
        alt: "Top: y = f(x), a cubic with a maximum at x = -1 and a minimum at x = 1. Bottom, on the same x-scale: y = f'(x), a parabola crossing the x-axis at x = -1 and x = 1, negative in between.",
        curves: [
          { fn: "x => 5.6 + 1.5*(x*x*x/3 - x)", domain: [-1.95, 1.95], label: "y = f(x)", labelAt: 1.95 },
          { fn: "x => 1.5*(x*x - 1)", domain: [-1.85, 1.85], tone: "good", label: "y = f′(x)", labelAt: 1.85 },
        ],
        segments: [
          { from: [-2.3, 5.6], to: [2.5, 5.6], arrow: true, tone: "ink", thin: true },
          { from: [-2.3, 0], to: [2.5, 0], arrow: true, tone: "ink", thin: true },
          { from: [-1, 7.2], to: [-1, -1.9], dashed: true, tone: "muted", thin: true },
          { from: [1, 7.2], to: [1, -1.9], dashed: true, tone: "muted", thin: true },
        ],
        points: [ { x: -1, y: 6.6, label: "max", pos: "n" }, { x: 1, y: 4.6, label: "min", pos: "s" }, { x: -1, y: 0 }, { x: 1, y: 0 } ],
        labels: [
          { x: 2.45, y: 5.6, text: "x", pos: "se", style: "italic" },
          { x: 2.45, y: 0, text: "x", pos: "se", style: "italic" },
          { x: -1, y: 0, text: "−1", pos: "sw", style: "small" },
          { x: 1, y: 0, text: "1", pos: "se", style: "small" },
          { x: 0, y: -0.75, text: "f′ < 0", pos: "c", style: "small", tone: "warn" },
        ],
      },
    },
    {
      title: String.raw`Maxima and minima problems`,
      body: String.raw`1. Introduce variables; use the **constraint** (fixed volume, perimeter, cost…) to write the target quantity in terms of **one** variable. "Show that" lines usually hand you this step.
2. Differentiate and solve $\frac{\dd V}{\dd x} = 0$; reject values outside the physical domain (lengths $> 0$, etc.).
3. **Justify** max/min — second derivative test or a first derivative sign table. Without this, the mark is lost.
4. Answer the question actually asked (the maximum *volume*, the *height*, the *cost*), with units and the required accuracy.

If the stationary value lies outside the allowed interval, the optimum is at an end-point — the sign of the derivative on the interval tells you which.`,
      figure: [
        {
          type: "plot", x: [-0.6, 5.6], y: [-12, 92], height: 220, axisLabels: ["x", "V"],
          caption: String.raw`Stationary value inside the domain: $\frac{\dd V}{\dd x} = 0$ gives the maximum.`,
          alt: "V = x(10 - 2x) squared for 0 < x < 5: a single hump with its maximum at the stationary point x = 5/3.",
          curves: [ { fn: "x => x*(10 - 2*x)*(10 - 2*x)", domain: [0, 5] } ],
          segments: [ { from: [1.6667, 74.07], to: [1.6667, 0], dashed: true, tone: "muted", thin: true } ],
          points: [ { x: 1.6667, y: 74.07, label: "max", pos: "n" } ],
          xTicks: [ { x: 5, label: "5" } ],
        },
        {
          type: "plot", x: [-0.6, 5.6], y: [-1.2, 10], height: 220, axisLabels: ["x", "T"],
          caption: String.raw`Stationary point outside the domain $0 \le x \le b$: least value at the end-point.`,
          alt: "T decreasing throughout 0 <= x <= b; its stationary point (dashed continuation) lies beyond b, so the least value of T on the interval is at x = b.",
          curves: [
            { fn: "x => 0.5*(x - 4)*(x - 4) + 1", domain: [0, 2.5] },
            { fn: "x => 0.5*(x - 4)*(x - 4) + 1", domain: [2.5, 5.3], dashed: true, tone: "muted" },
          ],
          segments: [ { from: [2.5, 2.125], to: [2.5, 0], dashed: true, tone: "muted", thin: true } ],
          points: [ { x: 2.5, y: 2.125, label: "least T", pos: "ne" } ],
          xTicks: [ { x: 2.5, label: "b" } ],
        },
      ],
    },
    {
      title: String.raw`Connected rates of change`,
      body: String.raw`Link the rates with the chain rule, e.g.
$$\frac{\dd h}{\dd t} = \frac{\dd h}{\dd V}\cdot\frac{\dd V}{\dd t} = \frac{\dd V/\dd t}{\dd V/\dd h}.$$

- First write the relation between the quantities **in general** (e.g. $V = \frac{\pi}{27}h^3$ using similar triangles), differentiate, and only **then** substitute the instant's values.
- Rates of decrease are negative: "leaks at 3 cm³ s⁻¹" means $\frac{\dd V}{\dd t} = -3$.
- Mensuration formulae are **not** in MF27; questions often quote them, but memorise $V_\text{cone} = \frac13\pi r^2 h$, $V_\text{sphere} = \frac43\pi r^3$, $S_\text{sphere} = 4\pi r^2$, $S_\text{curved, cylinder} = 2\pi r h$.`,
    },
    {
      title: String.raw`GC skills for this topic`,
      body: String.raw`- **Maximum/minimum**: graph the function and use the calc max/min feature; quote the coordinates to 3 s.f.
- **Numerical derivative**: $\frac{\dd y}{\dd x}\big|_{x=a}$ via the GC's derivative function — state "from GC".
- **Solving** $\mathrm{f}'(x) = 0$ or $\mathrm{f}(x) = k$ by intersection/zero.

Exact answers ("find the exact value", "without using a calculator") must come from algebra. Keep intermediate values to at least 5 s.f. before rounding the final answer.`,
    },
  ],
  archetypes: [
    {
      id: "5.1-implicit-tangents",
      name: String.raw`Implicit differentiation: tangents parallel to an axis`,
      tests: String.raw`Differentiating an implicit equation, then using numerator $= 0$ or denominator $= 0$ of $\frac{\dd y}{\dd x}$ together with the curve's equation to locate horizontal or vertical tangents; often with a tangent or normal at a given point.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $x^2 + xy + y^2 = 12$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd y}{\dd x} = -\dfrac{2x + y}{x + 2y}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the coordinates of the points on $C$ at which the tangent is parallel to the $x$-axis.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the equations of the tangents to $C$ which are parallel to the $y$-axis.`, marks: 3 },
            { label: "(iv)", text: String.raw`The normal to $C$ at the point $(2, 2)$ meets $C$ again at the point $Q$. Find the coordinates of $Q$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $x^3 + y^3 = 6xy$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$ in terms of $x$ and $y$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the equation of the tangent to $C$ at the point $(3, 3)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the exact coordinates of the point on $C$, other than the origin, at which the tangent is parallel to the $x$-axis.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.1-parametric-tangents-normals",
      name: String.raw`Parametric curves: tangents, normals and the curve met again`,
      tests: String.raw`Finding $\frac{\dd y}{\dd x}$ in terms of the parameter, writing a tangent or normal at a general point, and using it to find intercepts, an area, a length, or the parameter of the point where the line meets the curve again.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has parametric equations
$$x = a\cos^3\theta, \quad y = a\sin^3\theta, \qquad 0 < \theta < \tfrac{\pi}{2},$$
where $a$ is a positive constant.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the equation of the tangent to $C$ at the point with parameter $\theta$ is $x\sin\theta + y\cos\theta = a\sin\theta\cos\theta$.`, marks: 4 },
            { label: "(ii)", text: String.raw`The tangent in part (i) meets the $x$-axis at $A$ and the $y$-axis at $B$. Show that the length $AB$ is independent of $\theta$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find, in terms of $a$, the greatest possible area of triangle $OAB$, where $O$ is the origin, and state the value of $\theta$ at which it occurs.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has parametric equations $x = 3t^2$, $y = 2t^3$. The point $P$ on $C$ has parameter $p$, where $p \ne 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the tangent to $C$ at $P$ has equation $y = px - p^3$.`, marks: 3 },
            { label: "(ii)", text: String.raw`The tangent at $P$ meets $C$ again at the point $Q$. Show that $Q$ has parameter $-\frac{1}{2}p$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact values of $p$ for which the tangent at $P$ is also the normal to $C$ at $Q$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.1-nature-stationary-points",
      name: String.raw`Stationary points and their nature`,
      tests: String.raw`Solving $\frac{\dd y}{\dd x} = 0$ exactly and classifying each stationary point, recognising when the second derivative test is inconclusive and the first derivative test is needed (e.g. a stationary point of inflexion).`,
      questions: [
        {
          stem: String.raw`A curve has equation $y = 3x^4 - 8x^3 + 6x^2$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the stationary points of the curve.`, marks: 3 },
            { label: "(ii)", text: String.raw`Use the second derivative test to determine the nature of one of the stationary points, and explain why this test cannot be used for the other.`, marks: 2 },
            { label: "(iii)", text: String.raw`Use the first derivative test to determine the nature of the remaining stationary point.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          stem: String.raw`A curve has equation $y = \ee^{x}\cos x$, for $0 \le x \le 2\pi$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the exact $x$-coordinates of the stationary points of the curve.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that $\dfrac{\dd^2 y}{\dd x^2} = -2\ee^{x}\sin x$, and hence determine the nature of each stationary point.`, marks: 3 },
            { label: "(iii)", text: String.raw`State the exact coordinates of the maximum point.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "5.1-graph-of-derivative",
      name: String.raw`Relating the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}'(x)$`,
      tests: String.raw`Translating stationary points, asymptotes and increasing/decreasing behaviour between a graph and the graph of its derivative, in either direction, including concavity from the sign of $\mathrm{f}''$.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$. The curve has a maximum point at $(-1, -3)$, a minimum point at $(3, 5)$, and crosses the $y$-axis at $(0, -4)$. The lines $x = 1$ and $y = x$ are asymptotes to the curve.`,
          figure: {
            type: "plot",
            x: [-6, 8], y: [-10, 12], height: 320,
            curves: [
              { fn: "x => x + 4/(x - 1)", domain: [-6, 0.98], label: "y = f(x)", labelAt: -5 },
              { fn: "x => x + 4/(x - 1)", domain: [1.02, 8] },
            ],
            lines: [ { x: 1, label: "x = 1" }, { fn: "x => x", label: "y = x", labelAt: 2.4 } ],
            points: [
              { x: -1, y: -3, label: "(-1, -3)", pos: "n" },
              { x: 3, y: 5, label: "(3, 5)", pos: "s" },
              { x: 0, y: -4, label: "(0, -4)", pos: "e" },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}'(x)$, stating the equations of any asymptotes and the coordinates of any points where the graph crosses the $x$-axis.`, marks: 4 },
            { label: "(ii)", text: String.raw`State the set of values of $x$ for which $\mathrm{f}'(x) < 0$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}'(x)$. The graph crosses the $x$-axis at $(-2, 0)$, touches the $x$-axis at $(1, 0)$, has a maximum point at $(-1, 2)$ and crosses the $y$-axis at $(0, 1)$.`,
          figure: {
            type: "plot",
            x: [-3.5, 3], y: [-4, 5], height: 280,
            curves: [ { fn: "x => 0.5*(x + 2)*(x - 1)*(x - 1)", label: "y = f'(x)", labelAt: 1.9 } ],
            points: [
              { x: -2, y: 0, label: "(-2, 0)", pos: "nw" },
              { x: 1, y: 0, label: "(1, 0)", pos: "s" },
              { x: -1, y: 2, label: "(-1, 2)", pos: "n" },
              { x: 0, y: 1, label: "(0, 1)", pos: "ne" },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`State the $x$-coordinates of the stationary points of the curve $y = \mathrm{f}(x)$ and determine the nature of each, justifying your answers.`, marks: 3 },
            { label: "(ii)", text: String.raw`State the set of values of $x$ for which $\mathrm{f}''(x) < 0$, and describe the graph of $y = \mathrm{f}(x)$ for these values of $x$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Given that $\mathrm{f}(0) = 0$, sketch a possible graph of $y = \mathrm{f}(x)$, indicating the $x$-coordinates of its stationary points.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.1-increasing-decreasing",
      name: String.raw`Increasing and decreasing functions; range of a constant`,
      tests: String.raw`Using the sign of $\mathrm{f}'(x)$ to find where a function increases or decreases, or the range of a parameter for which it is monotonic for all $x$ (discriminant, or bounding a non-polynomial term).`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f}(x) = x^3 + kx^2 + 3x + 1$, $x \in \mathbb{R}$, where $k$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Find the range of values of $k$ for which $\mathrm{f}'(x) > 0$ for all real $x$.`, marks: 3 },
            { label: "(ii)", text: String.raw`For the case $k = 5$, find the set of values of $x$ for which f is decreasing.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The function g is defined by $\mathrm{g}(x) = \ln(x^2 + 4) - kx$, $x \in \mathbb{R}$, where $k$ is a positive constant.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $-\dfrac{1}{2} \le \dfrac{2x}{x^2 + 4} \le \dfrac{1}{2}$ for all real $x$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the range of values of $k$ for which g is a decreasing function for all real $x$.`, marks: 2 },
            { label: "(iii)", text: String.raw`For the case $k = 0.3$, find the $x$-coordinates of the stationary points of the curve $y = \mathrm{g}(x)$ and determine their nature.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.1-optimisation-geometry",
      name: String.raw`Maxima and minima: shapes, containers and cost`,
      tests: String.raw`Using a geometric constraint (inscribed solid, fixed volume) to express a volume, area or cost in one variable, then finding and justifying the optimum exactly.`,
      questions: [
        {
          stem: String.raw`A right circular cone of height $h$ cm and base radius $r$ cm is inscribed in a sphere of radius 6 cm, so that the vertex and the whole circumference of the base lie on the sphere. The centre of the sphere lies inside the cone. The diagram shows a cross-section through the axis of the cone.`,
          figure: {
            type: "plot", x: [-7.6, 7.6], y: [-7, 7.4], equal: true, axes: false,
            alt: "Cross-section: a circle of radius 6 cm with centre O, and an isosceles triangle inscribed in it with its vertex at the top of the circle; the height of the triangle is h and the half-width of its base is r.",
            circles: [ { c: [0, 0], r: 6, tone: "muted" } ],
            polygons: [ { points: [[0, 6], [-5.196, -3], [5.196, -3]], fill: true, tone: "accent" } ],
            segments: [
              { from: [0, 6], to: [0, -3], dashed: true, tone: "ink", thin: true, label: "h", pos: "e", labelAt: [0, 2.6], style: "italic" },
              { from: [0, -3], to: [5.196, -3], tone: "ink", label: "r", pos: "s", style: "italic" },
              { from: [0, 0], to: [-6, 0], tone: "muted", label: "6 cm", pos: "n", labelAt: [-4.4, 0], style: "plain" },
            ],
            rightAngles: [ { at: [0, -3], a: [1, 0], b: [0, 1], size: 0.5 } ],
            points: [ { x: 0, y: 0, label: "O", pos: "e" } ],
          },
          parts: [
            { label: "(i)", text: String.raw`Show that $r^2 = 12h - h^2$, and hence show that the volume $V$ cm³ of the cone is given by $V = \frac{1}{3}\pi(12h^2 - h^3)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using differentiation, find the exact maximum volume of the cone, proving that it is a maximum.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`A manufacturer makes closed cylindrical tins, each with volume $500\pi$ cm³. The tin has base radius $r$ cm. The material for the top and the base costs $2k$ cents per cm², and the material for the curved surface costs $k$ cents per cm², where $k$ is a positive constant.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the total cost $C$ cents of the material for one tin is given by $C = 4k\pi r^2 + \dfrac{1000k\pi}{r}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using differentiation, find the value of $r$ which minimises $C$, and the corresponding height of the tin. Show that this value of $r$ gives a minimum cost.`, marks: 4 },
            { label: "(iii)", text: String.raw`Given that $k = 2$, find the minimum cost of the material for one tin, giving your answer in dollars correct to the nearest cent.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "5.1-optimisation-modelling",
      name: String.raw`Optimisation in a real-world model (with GC)`,
      tests: String.raw`Setting up or interpreting a model in context (travel time, concentration, profit), finding the optimum by calculus or GC, evaluating a rate with the GC, and interpreting answers — including when the optimum lies at an end-point.`,
      questions: [
        {
          stem: String.raw`In the diagram, a lifeguard stands at a point $A$ on a straight shoreline. A swimmer in difficulty is at the point $S$, 60 m from the shore, and $B$ is the point on the shoreline nearest to $S$, where $AB = 100$ m. The lifeguard runs along the shoreline from $A$ to a point $P$, where $BP = x$ m and $P$ lies between $A$ and $B$, and then swims in a straight line from $P$ to $S$. The lifeguard runs at 5 m s⁻¹ and swims at 3 m s⁻¹.`,
          figure: {
            type: "plot", x: [-8, 112], y: [-72, 22], equal: true, axes: false,
            alt: "A straight shoreline with points A, P and B in that order, AB = 100 m and BP = x m. The swimmer S is 60 m out to sea from B, with SB perpendicular to the shore. The lifeguard runs from A to P and swims from P to S.",
            polygons: [ { points: [[-8, 0], [112, 0], [112, -72], [-8, -72]], fill: true, tone: "muted" } ],
            segments: [
              { from: [-8, 0], to: [112, 0], tone: "ink" },
              { from: [0, 0], to: [37, 0], arrow: true, tone: "accent" },
              { from: [40, 0], to: [98.3, -58.3], arrow: true, tone: "accent" },
              { from: [100, 0], to: [100, -60], dashed: true, tone: "ink", thin: true, label: "60 m", pos: "e", style: "plain" },
              { from: [0, 14], to: [100, 14], arrow: true, arrowStart: true, tone: "ink", thin: true, label: "100 m", pos: "n", style: "plain" },
              { from: [40, 6], to: [100, 6], arrow: true, arrowStart: true, tone: "muted", thin: true, label: "x m", pos: "n", style: "plain" },
            ],
            rightAngles: [ { at: [100, 0], a: [-1, 0], b: [0, -1], size: 5 } ],
            points: [
              { x: 0, y: 0, label: "A", pos: "sw" },
              { x: 40, y: 0, label: "P", pos: "sw" },
              { x: 100, y: 0, label: "B", pos: "ne" },
              { x: 100, y: -60, label: "S", pos: "se" },
            ],
            labels: [ { x: 15, y: -40, text: "sea", pos: "c", style: "italic" } ],
          },
          parts: [
            { label: "(i)", text: String.raw`Show that the time taken, $T$ seconds, to reach the swimmer is given by $T = \dfrac{100 - x}{5} + \dfrac{\sqrt{x^2 + 3600}}{3}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Using differentiation, find the value of $x$ that minimises $T$, and find this minimum time. Justify that it is a minimum.`, marks: 5 },
            { label: "(iii)", text: String.raw`Suppose instead that $AB = 30$ m, with all other information unchanged. Explain why the lifeguard should now enter the water immediately at $A$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The concentration, $C$ mg per litre, of a drug in a patient's bloodstream $t$ hours after an oral dose is modelled by
$$C = 10\left(\ee^{-0.2t} - \ee^{-0.8t}\right), \qquad t \ge 0.$$`,
          parts: [
            { label: "(i)", text: String.raw`Using differentiation, find the exact time at which the concentration is greatest, and show that the greatest concentration is $\frac{15}{4}\sqrt[3]{2}$ mg per litre.`, marks: 5 },
            { label: "(ii)", text: String.raw`Use your GC to find the rate of change of the concentration when $t = 5$, and interpret your answer in context.`, marks: 2 },
            { label: "(iii)", text: String.raw`The drug is effective while the concentration is at least 3 mg per litre. Find the length of time for which the drug is effective, giving your answer in hours correct to 2 decimal places.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.1-rates-containers",
      name: String.raw`Connected rates of change: liquid in a container`,
      tests: String.raw`Relating volume to depth (via similar triangles or a given formula) and using $\frac{\dd h}{\dd t} = \frac{\dd V/\dd t}{\dd V/\dd h}$ at a given instant, then a further linked rate such as surface area or surface radius.`,
      questions: [
        {
          stem: String.raw`The diagram shows a container in the shape of an inverted right circular cone with base radius 10 cm and height 20 cm, with its axis vertical. Water is poured into the container at a constant rate of 5 cm³ s⁻¹. At time $t$ seconds, the depth of water is $h$ cm.`,
          figure: {
            type: "plot", x: [-13, 17], y: [-1.5, 22.5], equal: true, axes: false,
            alt: "An inverted cone with vertex at the bottom, top radius 10 cm and height 20 cm, containing water to a depth h.",
            shade: [ { upper: "x => 12 + 0.9*Math.sqrt(Math.max(0, 1 - x*x/36))", lower: "x => Math.abs(x)*2", from: -6, to: 6, tone: "accent" } ],
            curves: [
              { param: "t => [10*Math.cos(t), 20 + 1.5*Math.sin(t)]", t: [0, 6.2832], tone: "ink" },
              { param: "t => [6*Math.cos(t), 12 + 0.9*Math.sin(t)]", t: [0, 6.2832] },
            ],
            segments: [
              { from: [-10, 20], to: [0, 0], tone: "ink" },
              { from: [10, 20], to: [0, 0], tone: "ink" },
              { from: [0, 20], to: [10, 20], tone: "muted", thin: true, label: "10 cm", pos: "n", labelAt: [5, 21.5], style: "plain" },
              { from: [0, 0], to: [0, 12], dashed: true, tone: "ink", thin: true, label: "h", pos: "e", labelAt: [0, 6], style: "italic" },
              { from: [13.5, 0], to: [13.5, 20], arrow: true, arrowStart: true, tone: "muted", thin: true, label: "20 cm", pos: "e", style: "plain" },
              { from: [0.5, 0], to: [14.2, 0], dashed: true, tone: "muted", thin: true },
              { from: [10.5, 20], to: [14.2, 20], dashed: true, tone: "muted", thin: true },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`Show that the volume of water in the container is $V = \dfrac{\pi h^3}{12}$ cm³.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact rate at which the depth of water is increasing when the depth is 8 cm.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the rate at which the area of the water surface is increasing at this instant.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a hemispherical bowl of radius 12 cm held with its rim horizontal. When the depth of water in the bowl is $h$ cm, the volume of water is $V = \frac{1}{3}\pi h^2(36 - h)$ cm³. Water is poured into the bowl at a constant rate of $9\pi$ cm³ s⁻¹.`,
          figure: {
            type: "plot", x: [-14, 14], y: [-1.5, 14.5], equal: true, axes: false,
            alt: "Cross-section of a hemispherical bowl of radius 12 cm with its rim horizontal, containing water of depth h whose surface has radius r.",
            shade: [ { upper: "x => 5", lower: "x => 12 - Math.sqrt(Math.max(0, 144 - x*x))", from: -9.7468, to: 9.7468, tone: "accent" } ],
            curves: [ { fn: "x => 12 - Math.sqrt(Math.max(0, 144 - x*x))", domain: [-12, 12], tone: "ink" } ],
            segments: [
              { from: [-12, 12], to: [12, 12], dashed: true, tone: "muted", thin: true },
              { from: [0, 12], to: [-12, 12], tone: "muted", label: "12 cm", pos: "n", style: "plain" },
              { from: [-9.7468, 5], to: [9.7468, 5], tone: "accent" },
              { from: [0, 5], to: [9.7468, 5], tone: "ink", thin: true, label: "r", pos: "n", style: "italic" },
              { from: [0, 0], to: [0, 5], dashed: true, tone: "ink", thin: true, label: "h", pos: "w", style: "italic" },
              { from: [0, 5], to: [0, 12], dashed: true, tone: "muted", thin: true },
            ],
            points: [ { x: 0, y: 12, label: "O", pos: "n" } ],
          },
          parts: [
            { label: "(i)", text: String.raw`Find the rate at which the depth of water is increasing when the depth is 6 cm.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that the radius $r$ cm of the water surface satisfies $r^2 = 24h - h^2$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Hence find the exact rate at which the radius of the water surface is increasing when the depth is 6 cm.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.1-rates-geometry-motion",
      name: String.raw`Connected rates of change: expanding shapes and moving objects`,
      tests: String.raw`Linking rates through a geometric relationship that holds at all times (sphere formulae, Pythagoras, trigonometry), including angles and quantities expressed as functions of time.`,
      questions: [
        {
          stem: String.raw`A spherical balloon is being inflated so that its surface area increases at a constant rate of 8 cm² s⁻¹.`,
          parts: [
            { label: "(i)", text: String.raw`Find the exact rate of increase of the radius when the radius is 5 cm.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the rate of increase of the volume of the balloon at this instant.`, marks: 2 },
            { label: "(iii)", text: String.raw`Given that the radius is 1 cm when inflation begins, find the exact time taken for the radius to reach 5 cm.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a ladder $AB$ of length 5 m resting with its foot $A$ on horizontal ground and its top $B$ against a vertical wall. The foot of the ladder slides away from the wall at a constant rate of 0.3 m s⁻¹. At time $t$ seconds, the ladder makes an angle $\theta$ radians with the ground.`,
          figure: {
            type: "plot", x: [-1.2, 4.6], y: [-0.6, 5], equal: true, axes: false,
            alt: "A ladder AB of length 5 m with foot A on horizontal ground and top B against a vertical wall, making angle theta with the ground.",
            polygons: [ { points: [[-0.35, -0.3], [3.9, -0.3], [3.9, 0], [0, 0], [0, 4.8], [-0.35, 4.8]], fill: true, tone: "muted" } ],
            segments: [ { from: [2.7015, 0], to: [0, 4.2074], tone: "accent", label: "5 m", pos: "ne", style: "plain" } ],
            angles: [ { at: [2.7015, 0], from: [0, 4.2074], to: [0, 0], r: 0.55, label: "θ" } ],
            rightAngles: [ { at: [0, 0], a: [1, 0], b: [0, 1], size: 0.25 } ],
            points: [ { x: 2.7015, y: 0, label: "A", pos: "se" }, { x: 0, y: 4.2074, label: "B", pos: "e" } ],
          },
          parts: [
            { label: "(i)", text: String.raw`Find the rate at which $B$ is moving down the wall at the instant when $A$ is 3 m from the wall.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the rate of change of $\theta$ at this instant, and state whether $\theta$ is increasing or decreasing.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
