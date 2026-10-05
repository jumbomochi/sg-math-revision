H2.addTopic({
  id: "1.2",
  title: "Graphs and Transformations",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Sketching conics and rational curves, transforming graphs, and parametric curves.`,
  syllabus: {
    include: [
      String.raw`use of a graphing calculator or a graphing software to graph a given function`,
      String.raw`important characteristics of graphs such as symmetry, intersections with the axes, turning points and asymptotes of the following: $y^2 = ax$; $x^2 = by$; $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$; $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$; $\dfrac{y^2}{b^2} - \dfrac{x^2}{a^2} = 1$; $y = \dfrac{ax + b}{cx + d}$; $y = \dfrac{ax^2 + bx + c}{dx + e}$`,
      String.raw`equations of asymptotes, axes of symmetry, and restrictions on the possible values of $x$ and/or $y$`,
      String.raw`effect of transformations on the graph of $y = \mathrm{f}(x)$ as represented by $y = a\mathrm{f}(x)$, $y = \mathrm{f}(x) + a$, $y = \mathrm{f}(x + a)$ and $y = \mathrm{f}(ax)$ and combinations of these transformations`,
      String.raw`relating the graphs of $y = |\mathrm{f}(x)|$, $y = \mathrm{f}(|x|)$ and $y = \dfrac{1}{\mathrm{f}(x)}$ to the graph of $y = \mathrm{f}(x)$`,
      String.raw`simple parametric equations and their graphs`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`What a sketch must show`,
      body: String.raw`A sketch earns its marks from **labelled features**, not from neatness. Unless told otherwise, show:

- intersections with both axes (exact if they can be found easily),
- turning points (coordinates),
- asymptotes, drawn dashed **with their equations**,
- the correct behaviour near each asymptote (the curve approaches but does not cross a vertical asymptote).

Use the GC to see the shape, but take exact values from algebra. If the question gives a domain, draw **only** that part and mark end-points (solid dot if included, open circle if not).`,
    },
    {
      title: String.raw`Conics: parabola, ellipse, hyperbola`,
      body: String.raw`Not in MF27 — memorise.

| Curve | Key features |
| $y^2 = ax$ | parabola, vertex $(0,0)$, symmetric about the $x$-axis |
| $x^2 = by$ | parabola, vertex $(0,0)$, symmetric about the $y$-axis |
| $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ | ellipse, centre $(0,0)$, meets axes at $(\pm a, 0)$, $(0, \pm b)$ |
| $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ | hyperbola, vertices $(\pm a, 0)$, asymptotes $y = \pm \dfrac{b}{a}x$ |
| $\dfrac{y^2}{b^2} - \dfrac{x^2}{a^2} = 1$ | hyperbola, vertices $(0, \pm b)$, asymptotes $y = \pm \dfrac{b}{a}x$ |

For a **shifted** conic, complete the square to reach $\dfrac{(x-h)^2}{a^2} \pm \dfrac{(y-k)^2}{b^2} = 1$: the centre is $(h, k)$, the lines of symmetry are $x = h$ and $y = k$, and hyperbola asymptotes become $y - k = \pm \dfrac{b}{a}(x - h)$.`,
    },
    {
      title: String.raw`Rational curve $y = \dfrac{ax + b}{cx + d}$`,
      body: String.raw`- Vertical asymptote $x = -\dfrac{d}{c}$; horizontal asymptote $y = \dfrac{a}{c}$.
- Writing $y = \dfrac{a}{c} + \dfrac{k}{cx + d}$ shows it is a transformed $y = \dfrac{1}{x}$, so it has **no stationary points** and is symmetric about the intersection of its asymptotes.
- The sign of $k$ decides which pair of opposite quadrants (relative to the asymptotes) the branches lie in — check with one easy point such as the $y$-intercept.`,
    },
    {
      title: String.raw`Rational curve $y = \dfrac{ax^2 + bx + c}{dx + e}$`,
      body: String.raw`Long division gives $y = px + q + \dfrac{r}{dx + e}$.

- Vertical asymptote $x = -\dfrac{e}{d}$; **oblique asymptote** $y = px + q$ (as $x \to \pm\infty$, $\dfrac{r}{dx + e} \to 0$).
- Stationary points: solve $\dfrac{\mathrm{d}y}{\mathrm{d}x} = 0$. There are either **two** (one maximum and one minimum, on opposite branches) or **none**.
- If $r = 0$ the "curve" is just a line with one point missing — exam questions exclude this value of the constant.
- A line parallel to the oblique asymptote, $y = px + m$, meets the curve where $\dfrac{r}{dx + e} = m - q$: exactly one point unless $m = q$.`,
    },
    {
      title: String.raw`Restrictions on $y$: the discriminant method`,
      body: String.raw`To find the values $y$ **cannot** take without calculus (or with unknown constants):

1. Rearrange $y = \mathrm{f}(x)$ into a quadratic in $x$ whose coefficients involve $y$.
2. $x$ is real $\iff$ discriminant $\ge 0$. Solve this inequality in $y$.
3. The boundary values of $y$ are the $y$-coordinates of the **turning points**; substitute back to get $x$ (the repeated root $x = -\frac{B}{2A}$).

The curve takes **all** real values exactly when the discriminant is positive for every $y$ — test this by showing the "discriminant of the discriminant" is negative. "Using an algebraic method" or "non-calculus method" means this route, not differentiation.`,
    },
    {
      title: String.raw`Transformations of $y = \mathrm{f}(x)$`,
      body: String.raw`| Equation | Transformation |
| $y = \mathrm{f}(x) + a$ | translation by $a$ units in the positive $y$-direction |
| $y = \mathrm{f}(x + a)$ | translation by $a$ units in the **negative** $x$-direction |
| $y = a\mathrm{f}(x)$ | stretch parallel to the $y$-axis, scale factor $a$ ($x$-axis invariant) |
| $y = \mathrm{f}(ax)$ | stretch parallel to the $x$-axis, scale factor $\dfrac{1}{a}$ ($y$-axis invariant) |
| $y = -\mathrm{f}(x)$ / $y = \mathrm{f}(-x)$ | reflection in the $x$-axis / $y$-axis |

Full marks need the **full description**: "translation of 2 units in the negative $x$-direction", "stretch with scale factor 3 parallel to the $y$-axis". Never say "shift" or "move".

- Changes **outside** f act on $y$ in the natural order; changes **inside** f act on $x$ in the reverse order. $y = \mathrm{f}(2x + 3)$: translate 3 units in the negative $x$-direction, *then* stretch by factor $\frac{1}{2}$ parallel to the $x$-axis (or stretch first, then translate by $\frac{3}{2}$).
- To find the equation after a transformation, replace $x$ (or $y$) in the **current** equation, one step at a time.
- To reverse a sequence, undo the steps in the **opposite order** using inverse transformations.`,
    },
    {
      title: String.raw`$y = |\mathrm{f}(x)|$ and $y = \mathrm{f}(|x|)$`,
      body: String.raw`- $y = |\mathrm{f}(x)|$: keep the parts with $y \ge 0$, **reflect the parts below the $x$-axis in the $x$-axis**. Minimum points below the axis become maximum points; sharp corners appear at the $x$-intercepts.
- $y = \mathrm{f}(|x|)$: **delete** the part with $x < 0$, then reflect the part with $x \ge 0$ in the $y$-axis. The result is symmetric about the $y$-axis, often with a sharp point at $(0, \mathrm{f}(0))$.
- Asymptotes transform too: e.g. under $\mathrm{f}(|x|)$, the asymptote $x = 1$ gives $x = \pm 1$ and an oblique asymptote $y = x + 1$ gives $y = |x| + 1$, i.e. $y = -x + 1$ on the left.`,
    },
    {
      title: String.raw`$y = \dfrac{1}{\mathrm{f}(x)}$`,
      body: String.raw`| Feature of $y = \mathrm{f}(x)$ | Feature of $y = \dfrac{1}{\mathrm{f}(x)}$ |
| zero at $x = a$ | vertical asymptote $x = a$ |
| vertical asymptote $x = a$ | $y \to 0$ as $x \to a$ (curve meets $(a, 0)$) |
| horizontal asymptote $y = k \ne 0$ | horizontal asymptote $y = \dfrac{1}{k}$ |
| $\mathrm{f}(x) \to \pm\infty$ (including oblique asymptote) | horizontal asymptote $y = 0$ |
| maximum $(p, q)$, $q \ne 0$ | minimum $\left(p, \dfrac{1}{q}\right)$, and vice versa |
| $\mathrm{f}(x) = \pm 1$ | same points (invariant) |

The **sign** of $y$ is unchanged, and where f increases, $\frac{1}{\mathrm{f}}$ decreases. A double root of f gives a vertical asymptote with both sides going the same way.`,
    },
    {
      title: String.raw`Parametric equations`,
      body: String.raw`A curve $x = \mathrm{f}(t)$, $y = \mathrm{g}(t)$ is traced as $t$ varies over the stated interval.

- **Sketch**: use the GC in parametric mode with the given range of $t$; mark points at the ends of the interval and where the curve meets the axes (solve $x = 0$ or $y = 0$ for $t$ first).
- **Cartesian equation**: eliminate $t$ — make $t$ the subject, or use an identity such as $\sin^2 t + \cos^2 t = 1$, $\sin 2t = 2\sin t \cos t$, $\left(t + \frac{1}{t}\right)^2 - \left(t - \frac{1}{t}\right)^2 = 4$. State any **restriction on $x$ or $y$** that the parameter imposes (e.g. $x = t^2 \Rightarrow x \ge 0$).
- **Intersection with a line or curve**: substitute $x(t)$, $y(t)$ into the other equation, solve for $t$, then find the points.`,
    },
  ],
  archetypes: [
    {
      id: "1.2-conics",
      name: String.raw`Sketching conics and their features`,
      tests: String.raw`Completing the square to put a conic in standard form, then sketching it with centre, vertices, lines of symmetry and (for hyperbolas) asymptotes; often combined with intersections of two conics or a transformation.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $4x^2 + 9y^2 - 16x + 54y + 61 = 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the equation of $C$ can be written in the form $\dfrac{(x - 2)^2}{9} + \dfrac{(y + 3)^2}{4} = 1$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Sketch $C$, stating the coordinates of its centre, the equations of its lines of symmetry and the exact coordinates of the points where $C$ meets the $y$-axis.`, marks: 4 },
            { label: "(iii)", text: String.raw`Describe a sequence of transformations which maps the curve $x^2 + y^2 = 1$ onto $C$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curves $C_1$ and $C_2$ have equations
$$C_1 : \frac{x^2}{8} - \frac{y^2}{36} = 1, \qquad C_2 : y^2 = 9x.$$`,
          parts: [
            { label: "(i)", text: String.raw`Sketch $C_1$ and $C_2$ on the same diagram, stating the equations of any asymptotes and the exact coordinates of the points where each curve meets the axes.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show that the $x$-coordinates of the points of intersection of $C_1$ and $C_2$ satisfy $x^2 - 2x - 8 = 0$. Hence find the coordinates of these points, explaining why one root of this equation must be rejected.`, marks: 4 },
            { label: "(iii)", text: String.raw`$C_1$ is translated by 3 units in the negative $x$-direction. Write down the equation of the resulting curve and the equations of its asymptotes.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.2-rational-oblique",
      name: String.raw`Sketching $y = \dfrac{ax^2 + bx + c}{dx + e}$ with an oblique asymptote`,
      tests: String.raw`Long division to find the oblique asymptote, locating turning points, and a full labelled sketch; sometimes the constants must first be found from given features. Usually ends with a deduction about the number of roots of a related equation.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x^2 - 3x + 6}{x - 1}$.`,
          parts: [
            { label: "(i)", text: String.raw`Express $y$ in the form $Ax + B + \dfrac{D}{x - 1}$, where $A$, $B$ and $D$ are constants to be found.`, marks: 2 },
            { label: "(ii)", text: String.raw`Sketch $C$, stating the equations of the asymptotes and the coordinates of the turning points and of any points of intersection with the axes.`, marks: 5 },
            { label: "(iii)", text: String.raw`Hence find the set of values of $k$ for which the equation $\dfrac{x^2 - 3x + 6}{x - 1} = k$ has no real roots.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x^2 + ax + b}{x - 2}$, where $a$ and $b$ are constants. It is given that $C$ has an asymptote $y = x + 3$ and passes through the point $(3, 10)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$ and $b$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using the values of $a$ and $b$ found in part (i), sketch $C$, stating the equations of the asymptotes and the coordinates of the turning points and of the points of intersection with the axes.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the value of $m$ for which the line $y = x + m$ does not meet $C$, justifying your answer.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.2-range-discriminant",
      name: String.raw`Restrictions on $y$ by the discriminant method`,
      tests: String.raw`Forming a quadratic in $x$ and using discriminant $\ge 0$ to find the values $y$ can (or cannot) take, without differentiation; recognised by "using an algebraic method" or "show that $y$ cannot lie between…".`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x^2 + 8}{x - 1}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Without using differentiation, show that $y$ cannot take values between $-4$ and $8$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence find the coordinates of the turning points of $C$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Sketch $C$, stating the equations of the asymptotes and the coordinates of any points of intersection with the axes.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x^2 + a}{x - 1}$, where $a$ is a constant and $a \ne -1$.`,
          parts: [
            { label: "(i)", text: String.raw`Using an algebraic method, find the range of values of $a$ for which $y$ can take all real values.`, marks: 4 },
            { label: "(ii)", text: String.raw`Sketch $C$ for the case $a = -5$, stating the equations of the asymptotes and the exact coordinates of the points of intersection with the axes.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.2-constants-stationary",
      name: String.raw`Conditions on constants for stationary points`,
      tests: String.raw`Differentiating a rational function containing an unknown constant and using the discriminant of the numerator of $\frac{\mathrm{d}y}{\mathrm{d}x}$ to decide when the curve has two or no stationary points, then sketching a specific case.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x^2 + 3x}{x + k}$, where $k$ is a constant and $k \ne 0$, $k \ne 3$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\mathrm{d}y}{\mathrm{d}x} = \dfrac{x^2 + 2kx + 3k}{(x + k)^2}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the range of values of $k$ for which $C$ has two stationary points.`, marks: 3 },
            { label: "(iii)", text: String.raw`Sketch $C$ for the case $k = 2$, stating the equations of the asymptotes and the coordinates of the points of intersection with the axes.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.2-describe-transformations",
      name: String.raw`Describing a sequence of transformations`,
      tests: String.raw`Rewriting an equation (e.g. $y = \frac{ax + b}{cx + d}$ as $p + \frac{q}{x + r}$) to identify the transformations from a basic curve, and stating them fully and in a valid order; or applying a given sequence to find a new equation, and reversing a sequence.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{3x + 5}{x + 1}$.`,
          parts: [
            { label: "(i)", text: String.raw`Express $\dfrac{3x + 5}{x + 1}$ in the form $p + \dfrac{q}{x + 1}$, where $p$ and $q$ are constants.`, marks: 1 },
            { label: "(ii)", text: String.raw`Hence describe a sequence of transformations which maps the graph of $y = \dfrac{1}{x}$ onto $C$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Sketch $C$, stating the equations of the asymptotes and the coordinates of the points of intersection with the axes.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A curve $y = \mathrm{f}(x)$ undergoes, in succession, the following transformations:

- A: a translation of 2 units in the positive $x$-direction;
- B: a stretch with scale factor $\frac{1}{3}$ parallel to the $x$-axis;
- C: a reflection in the $x$-axis.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $\mathrm{f}(x) = \ln x$, find the equation of the resulting curve.`, marks: 3 },
            { label: "(ii)", text: String.raw`A different curve $y = \mathrm{g}(x)$ is transformed by the same sequence A, B, C, and the resulting curve has equation $y = \dfrac{2}{3x - 1}$. Find $\mathrm{g}(x)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`State the equations of the asymptotes of $y = \mathrm{g}(x)$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "1.2-transform-given-graph",
      name: String.raw`Sketching transformations of a given graph`,
      tests: String.raw`Applying combinations of $y = a\mathrm{f}(x)$, $\mathrm{f}(x) + a$, $\mathrm{f}(x + a)$, $\mathrm{f}(ax)$ to a diagram, tracking where each labelled point and asymptote goes.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$. The curve passes through the origin, has a maximum point at $(1, 2)$ and a minimum point at $(-1, -2)$, and the $x$-axis is an asymptote.`,
          figure: {
            type: "plot",
            x: [-6, 6], y: [-3, 3],
            curves: [{ fn: "x => 4*x/(x*x + 1)", label: "y = f(x)", labelAt: 3.2 }],
            points: [
              { x: 1, y: 2, label: "(1, 2)", pos: "n" },
              { x: -1, y: -2, label: "(−1, −2)", pos: "s" },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}\!\left(\frac{1}{2}x\right) + 1$, stating the coordinates of the turning points, the point where the curve meets the $y$-axis and the equation of the asymptote.`, marks: 3 },
            { label: "(ii)", text: String.raw`Sketch the graph of $y = 2 - \mathrm{f}(x + 1)$, stating the corresponding features.`, marks: 3 },
            { label: "(iii)", text: String.raw`Describe a sequence of transformations which maps the graph of $y = \mathrm{f}(x)$ onto the graph of $y = 2 - \mathrm{f}(x + 1)$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.2-modulus-graphs",
      name: String.raw`Graphs of $y = |\mathrm{f}(x)|$ and $y = \mathrm{f}(|x|)$`,
      tests: String.raw`Reflecting the negative part in the $x$-axis versus discarding the left half and reflecting the right half in the $y$-axis, including what happens to asymptotes; often followed by counting roots from the sketch.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$. The curve crosses the $x$-axis at $(-2, 0)$ and $(2, 0)$ and the $y$-axis at $(0, 4)$. The lines $x = 1$ and $y = x + 1$ are asymptotes to the curve, and the curve has no turning points.`,
          figure: {
            type: "plot",
            x: [-5, 6], y: [-6, 9],
            curves: [{ fn: "x => (x*x - 4)/(x - 1)", label: "y = f(x)", labelAt: 4.2 }],
            lines: [{ x: 1, label: "x = 1" }, { fn: "x => x + 1", label: "y = x + 1", labelAt: -4.5 }],
            points: [
              { x: -2, y: 0, label: "(−2, 0)", pos: "nw" },
              { x: 2, y: 0, label: "(2, 0)", pos: "se" },
              { x: 0, y: 4, label: "(0, 4)", pos: "w" },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = |\mathrm{f}(x)|$, stating the equations of the asymptotes and the coordinates of any points where the curve meets the axes.`, marks: 3 },
            { label: "(ii)", text: String.raw`Sketch the graph of $y = \mathrm{f}(|x|)$, stating the equations of the asymptotes and the coordinates of any points where the curve meets the axes.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that $\mathrm{f}(x) = 5$ has two positive roots, state the number of real roots of the equation $\mathrm{f}(|x|) = 5$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "1.2-reciprocal-graph",
      name: String.raw`Graph of $y = \dfrac{1}{\mathrm{f}(x)}$`,
      tests: String.raw`Converting zeros to vertical asymptotes, asymptotes to zeros or new horizontal asymptotes, and maxima to minima, while keeping the sign of $y$; often followed by counting solutions of $\frac{1}{\mathrm{f}(x)} = k$.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$. The curve has a maximum point at the origin and a minimum point at $(2, 4)$. The lines $x = 1$ and $y = x + 1$ are asymptotes to the curve.`,
          figure: {
            type: "plot",
            x: [-4, 5], y: [-8, 10],
            curves: [{ fn: "x => x*x/(x - 1)", label: "y = f(x)", labelAt: 3.6 }],
            lines: [{ x: 1, label: "x = 1" }, { fn: "x => x + 1", label: "y = x + 1", labelAt: -3.6 }],
            points: [{ x: 2, y: 4, label: "(2, 4)", pos: "se" }],
          },
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \dfrac{1}{\mathrm{f}(x)}$, stating the equations of any asymptotes and the coordinates of any turning points and points where the curve meets the axes.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence state the set of values of $k$ for which the equation $\dfrac{1}{\mathrm{f}(x)} = k$ has exactly two real roots.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = \mathrm{f}(x)$, where $\mathrm{f}(x) = \dfrac{2x - 2}{x + 1}$. The curve meets the axes at $(1, 0)$ and $(0, -2)$, and has asymptotes $x = -1$ and $y = 2$.`,
          figure: {
            type: "plot",
            x: [-6, 6], y: [-6, 8],
            curves: [{ fn: "x => (2*x - 2)/(x + 1)", label: "y = f(x)", labelAt: 4.5 }],
            lines: [{ x: -1, label: "x = −1" }, { y: 2, label: "y = 2" }],
            points: [
              { x: 1, y: 0, label: "(1, 0)", pos: "se" },
              { x: 0, y: -2, label: "(0, −2)", pos: "e" },
            ],
          },
          parts: [
            { label: "(i)", text: String.raw`On a separate diagram, sketch the graph of $y = \dfrac{1}{\mathrm{f}(x)}$, stating the equations of the asymptotes and the coordinates of the points where the curve meets the axes.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact coordinates of the points where the graphs of $y = \mathrm{f}(x)$ and $y = \dfrac{1}{\mathrm{f}(x)}$ intersect.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.2-parametric",
      name: String.raw`Parametric curves: sketch, cartesian equation, intersections`,
      tests: String.raw`Eliminating the parameter (often by a trigonometric or algebraic identity) with any restriction on $x$ or $y$, sketching over the given parameter range, and finding intersections by substituting into the other equation.`,
      questions: [
        {
          stem: String.raw`The curve $C$ has parametric equations
$$x = t + \frac{1}{t}, \qquad y = t - \frac{1}{t}, \qquad t > 0.$$`,
          parts: [
            { label: "(i)", text: String.raw`Show that a cartesian equation of $C$ is $x^2 - y^2 = 4$, and show that $x \ge 2$ for all points on $C$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Sketch $C$, stating the equations of any asymptotes and the coordinates of any points where $C$ meets the axes.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact coordinates of the point where $C$ meets the line $2y = x$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has parametric equations
$$x = 2\cos t, \qquad y = \sin 2t, \qquad 0 \le t < 2\pi.$$`,
          parts: [
            { label: "(i)", text: String.raw`Sketch $C$, stating the coordinates of the points where $C$ meets the axes and the exact coordinates of the points on $C$ with the greatest $y$-coordinate.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that a cartesian equation of $C$ is $4y^2 = x^2(4 - x^2)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the exact coordinates of the points, other than the origin, where $C$ meets the line $y = \frac{1}{2}x$.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
