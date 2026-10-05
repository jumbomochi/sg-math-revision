H2.addTopic({
  id: "5.1",
  title: "Differentiation",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Implicit and parametric differentiation, tangents and normals, stationary points, and the applied problems — optimisation and connected rates of change — that use them.`,
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

Each condition gives a relation between $x$ and $y$ — substitute it **back into the equation of the curve** to find the actual points. Discard points where $N = D = 0$ (e.g. the origin on $x^3 + y^3 = 6xy$).`,
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
    },
    {
      title: String.raw`Maxima and minima problems`,
      body: String.raw`1. Introduce variables; use the **constraint** (fixed volume, perimeter, cost…) to write the target quantity in terms of **one** variable. "Show that" lines usually hand you this step.
2. Differentiate and solve $\frac{\dd V}{\dd x} = 0$; reject values outside the physical domain (lengths $> 0$, etc.).
3. **Justify** max/min — second derivative test or a first derivative sign table. Without this, the mark is lost.
4. Answer the question actually asked (the maximum *volume*, the *height*, the *cost*), with units and the required accuracy.

If the stationary value lies outside the allowed interval, the optimum is at an end-point — the sign of the derivative on the interval tells you which.`,
    },
    {
      title: String.raw`Connected rates of change`,
      body: String.raw`Link the rates with the chain rule, e.g.
$$\frac{\dd h}{\dd t} = \frac{\dd h}{\dd V}\cdot\frac{\dd V}{\dd t} = \frac{\dd V/\dd t}{\dd V/\dd h}.$$

- First write the relation between the quantities **in general** (e.g. $V = \frac{\pi}{12}h^3$ using similar triangles), differentiate, and only **then** substitute the instant's values.
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
          stem: String.raw`A right circular cone of height $h$ cm and base radius $r$ cm is inscribed in a sphere of radius 6 cm, so that the vertex and the whole circumference of the base lie on the sphere. The centre of the sphere lies inside the cone.`,
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
          stem: String.raw`A lifeguard stands at a point $A$ on a straight shoreline. A swimmer in difficulty is at the point $S$, 60 m from the shore, and $B$ is the point on the shoreline nearest to $S$, where $AB = 100$ m. The lifeguard runs along the shoreline from $A$ to a point $P$, where $BP = x$ m and $P$ lies between $A$ and $B$, and then swims in a straight line from $P$ to $S$. The lifeguard runs at 5 m s⁻¹ and swims at 3 m s⁻¹.`,
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
          stem: String.raw`A container is in the shape of an inverted right circular cone with base radius 10 cm and height 20 cm, with its axis vertical. Water is poured into the container at a constant rate of 5 cm³ s⁻¹. At time $t$ seconds, the depth of water is $h$ cm.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the volume of water in the container is $V = \dfrac{\pi h^3}{12}$ cm³.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact rate at which the depth of water is increasing when the depth is 8 cm.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the rate at which the area of the water surface is increasing at this instant.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A hemispherical bowl of radius 12 cm is held with its rim horizontal. When the depth of water in the bowl is $h$ cm, the volume of water is $V = \frac{1}{3}\pi h^2(36 - h)$ cm³. Water is poured into the bowl at a constant rate of $9\pi$ cm³ s⁻¹.`,
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
          stem: String.raw`A ladder $AB$ of length 5 m rests with its foot $A$ on horizontal ground and its top $B$ against a vertical wall. The foot of the ladder slides away from the wall at a constant rate of 0.3 m s⁻¹. At time $t$ seconds, the ladder makes an angle $\theta$ radians with the ground.`,
          parts: [
            { label: "(i)", text: String.raw`Find the rate at which $B$ is moving down the wall at the instant when $A$ is 3 m from the wall.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the rate of change of $\theta$ at this instant, and state whether $\theta$ is increasing or decreasing.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
