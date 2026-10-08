H2.addTopic({
  id: "N7",
  title: "Equations and Inequalities",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Linear, fractional, simultaneous and quadratic equations, linear inequalities, and forming equations from word problems.`,
  syllabus: {
    include: [
      String.raw`solving linear equations in one variable`,
      String.raw`solving simple fractional equations that can be reduced to linear equations such as $\frac{x}{3} + \frac{x - 2}{4} = 3$ and $\frac{3}{x - 2} = 6$`,
      String.raw`solving simultaneous linear equations in two variables by substitution and elimination methods, and by graphical method`,
      String.raw`solving quadratic equations in one unknown by factorisation, use of formula, completing the square for $y = x^2 + px + q$, and graphical method`,
      String.raw`solving fractional equations that can be reduced to quadratic equations such as $\frac{6}{x + 4} = x + 3$ and $\frac{1}{x - 2} + \frac{2}{x - 3} = 5$`,
      String.raw`formulating equations to solve problems`,
      String.raw`solving linear inequalities in one variable, and representing the solution on the number line`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Linear equations`,
      body: String.raw`Whatever you do to one side, do to the other side. Aim to get the unknown on one side and numbers on the other.
- Expand brackets first, carefully with negative signs.
- With fractions, multiply **every term on both sides** by the LCM of the denominators. Put each numerator in a bracket first:
$$\frac{x}{2} + \frac{x - 1}{3} = 3 \;\Rightarrow\; 3x + 2(x - 1) = 18 \;\Rightarrow\; 5x = 20 \;\Rightarrow\; x = 4.$$
- Check your answer by substituting it back into the original equation.`,
    },
    {
      title: String.raw`Fractional equations`,
      body: String.raw`An equation with the unknown in a denominator: multiply both sides by the product (or LCM) of all the denominators to clear the fractions.
$$\frac{4}{x + 1} = \frac{3}{x - 2} \;\Rightarrow\; 4(x - 2) = 3(x + 1).$$
- The result may be linear or quadratic. If it is quadratic, collect all terms on one side to get $ax^2 + bx + c = 0$.
- A value that makes any denominator zero is **not** a solution. Check each answer against the original denominators.
- In a "Show that the equation can be written as …" part, show every step, including the expanded brackets.`,
    },
    {
      title: String.raw`Simultaneous linear equations`,
      body: String.raw`Two equations, two unknowns. Number the equations (1) and (2).

- **Elimination**: multiply one or both equations so that one unknown has the same coefficient, then add or subtract to remove it. Same signs → subtract; different signs → add.
- **Substitution**: make one unknown the subject of one equation (best when a coefficient is 1), then substitute into the other equation.
- Find the second unknown by substituting back into the simpler equation. Check both values in the **other** equation.
- Clear fractions first: $\frac{x}{3} + \frac{y}{4} = 2$ becomes $4x + 3y = 24$.`,
    },
    {
      title: String.raw`Graphical method for simultaneous equations`,
      body: String.raw`Each linear equation is a straight line. The solution is the **point of intersection**: $x$ and $y$ are its coordinates.
- Draw each line using a table of 3 values.
- Parallel lines (same gradient, different $y$-intercepts) never meet, so there is **no solution**.
- If both equations give the same line, there are infinitely many solutions.
- Answers read from a graph are estimates. The algebraic method gives exact values.`,
      figure: [
        {
          type: "plot",
          x: [-1, 5.4], y: [-1.6, 6], height: 220,
          curves: [
            { fn: "x => 5 - x", domain: [-0.8, 5.4] },
            { fn: "x => 2*x - 1", domain: [-0.3, 3.4], tone: "good" },
          ],
          segments: [
            { from: [2, 3], to: [2, 0], dashed: true, thin: true, tone: "muted" },
            { from: [2, 3], to: [0, 3], dashed: true, thin: true, tone: "muted" },
          ],
          labels: [
            { x: 4.1, y: 1.3, text: "x + y = 5", pos: "e", style: "italic", tone: "accent" },
            { x: 2.3, y: 5.2, text: "y = 2x − 1", pos: "w", style: "italic", tone: "good" },
          ],
          points: [{ x: 2, y: 3, label: "(2, 3)", pos: "n" }],
          caption: String.raw`One point of intersection: $x = 2$, $y = 3$.`,
          alt: "Two straight lines, x + y = 5 sloping down and y = 2x − 1 sloping up, crossing at the point (2, 3), with dashed lines from (2, 3) to both axes.",
        },
        {
          type: "plot",
          x: [-2.2, 3.6], y: [-3.4, 6], height: 220,
          curves: [
            { fn: "x => 2*x + 1", domain: [-2.2, 2.4] },
            { fn: "x => 2*x - 2", domain: [-0.8, 3.6], tone: "good" },
          ],
          labels: [
            { x: -0.3, y: 3.6, text: "y = 2x + 1", pos: "w", style: "italic", tone: "accent" },
            { x: 2.1, y: 1, text: "y = 2x − 2", pos: "e", style: "italic", tone: "good" },
          ],
          caption: String.raw`Parallel lines: no solution.`,
          alt: "Two parallel straight lines, y = 2x + 1 and y = 2x − 2, which never meet.",
        },
      ],
    },
    {
      title: String.raw`Quadratic equations by factorisation`,
      body: String.raw`If $AB = 0$ then $A = 0$ or $B = 0$.
1. Rearrange so that one side is **0**: $ax^2 + bx + c = 0$.
2. Factorise, then set each factor equal to 0.

- $(x - 2)(x + 5) = 0 \Rightarrow x = 2$ or $x = -5$. Watch the signs.
- Never divide both sides by $x$ or by a bracket. You lose a solution: $x^2 = 5x \Rightarrow x(x - 5) = 0 \Rightarrow x = 0$ or $x = 5$.
- $(x - 2)(x + 5) = 6$ does **not** give $x - 2 = 6$. Expand and rearrange to "$= 0$" first.`,
    },
    {
      title: String.raw`The quadratic formula`,
      body: String.raw`For $ax^2 + bx + c = 0$ (**memorise** — it is not on the E-Math formula sheet):
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$
- Write the equation in the form $ax^2 + bx + c = 0$ first, and write down $a$, $b$ and $c$ with their signs.
- Put negative values in brackets: if $b = -7$, then $-b = 7$ and $b^2 = (-7)^2 = 49$.
- Use the formula when the question asks for answers "correct to 2 decimal places" — a hint that the equation does not factorise.
- Keep full calculator values and round only at the end.
- If $b^2 - 4ac < 0$, there are no real solutions.`,
    },
    {
      title: String.raw`Completing the square`,
      body: String.raw`Add and subtract the square of **half the coefficient of $x$**:
$$x^2 + px + q = \left(x + \frac{p}{2}\right)^2 - \left(\frac{p}{2}\right)^2 + q.$$

To solve $x^2 - 6x + 2 = 0$:
$$(x - 3)^2 - 9 + 2 = 0 \;\Rightarrow\; (x - 3)^2 = 7 \;\Rightarrow\; x - 3 = \pm\sqrt{7} \;\Rightarrow\; x = 3 \pm \sqrt{7}.$$

- Don't forget the $\pm$ when you take the square root.
- The completed-square form also gives the turning point of the graph (see N6).`,
      figure: {
        type: "plot",
        x: [-0.9, 6.2], y: [-0.4, 6.2], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: true, tone: "accent" },
          { points: [[4, 0], [5.3, 0], [5.3, 4], [4, 4]], fill: true, tone: "good" },
          { points: [[0, 4], [4, 4], [4, 5.3], [0, 5.3]], fill: true, tone: "good" },
          { points: [[4, 4], [5.3, 4], [5.3, 5.3], [4, 5.3]], dashed: true, tone: "warn" },
        ],
        labels: [
          { x: 2, y: 2, text: "x²", style: "italic" },
          { x: 4.65, y: 2, text: "½px", style: "italic" },
          { x: 2, y: 4.65, text: "½px", style: "italic" },
          { x: 4.65, y: 4.65, text: "(½p)²", style: "small", tone: "warn" },
          { x: 2, y: -0.3, text: "x", style: "italic" },
          { x: 4.65, y: -0.3, text: "½p", style: "italic" },
          { x: -0.35, y: 2, text: "x", style: "italic" },
          { x: -0.35, y: 4.65, text: "½p", style: "italic" },
        ],
        caption: String.raw`$x^2 + px$ is a square of side $x + \frac{p}{2}$ with the corner $\left(\frac{p}{2}\right)^2$ missing, so $x^2 + px = \left(x + \frac{p}{2}\right)^2 - \left(\frac{p}{2}\right)^2$.`,
        alt: "A square of side x with two strips of width ½p attached on the right and on top. Together they nearly make a larger square of side x + ½p; only a small corner square of side ½p, drawn dashed, is missing.",
      },
    },
    {
      title: String.raw`Graphical method for quadratic equations`,
      body: String.raw`- The solutions of $ax^2 + bx + c = 0$ are the $x$-coordinates where $y = ax^2 + bx + c$ cuts the **$x$-axis**.
- The solutions of $ax^2 + bx + c = k$ are where the curve meets the horizontal line $y = k$.
- Two intersections → two solutions; the line just touches the turning point → one solution; no intersection → no real solutions.
- Read values to the accuracy of the grid (usually half a small square).`,
      figure: {
        type: "plot",
        x: [-2.6, 4.8], y: [-6.2, 5.6], height: 260,
        curves: [{ fn: "x => x*x - 2*x - 3", domain: [-2.3, 4.3] }],
        segments: [
          { from: [-2.6, 2], to: [4.8, 2], tone: "good", thin: true },
          { from: [-2.6, -4], to: [4.8, -4], tone: "warn", thin: true },
          { from: [1 - Math.sqrt(6), 2], to: [1 - Math.sqrt(6), 0], dashed: true, thin: true, tone: "muted" },
          { from: [1 + Math.sqrt(6), 2], to: [1 + Math.sqrt(6), 0], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: 1 - Math.sqrt(6), y: 2 }, { x: 1 + Math.sqrt(6), y: 2 }, { x: 1, y: -4 }, { x: -1, y: 0 }, { x: 3, y: 0 }],
        labels: [
          { x: 1, y: 1.15, text: "y = 2: two solutions", pos: "c", style: "small", tone: "good" },
          { x: 4.7, y: -4.5, text: "y = −4: one solution", pos: "w", style: "small", tone: "warn" },
          { x: 2.5, y: -2.4, text: "y = x² − 2x − 3", pos: "e", style: "italic", tone: "accent" },
        ],
        caption: String.raw`$x^2 - 2x - 3 = 0$ at the $x$-intercepts; $x^2 - 2x - 3 = 2$ where the curve meets $y = 2$.`,
        alt: "The parabola y = x² − 2x − 3 crossing the x-axis at −1 and 3. The horizontal line y = 2 cuts it twice, with dashed lines down to the x-axis; the line y = −4 just touches the minimum point.",
      },
    },
    {
      title: String.raw`Linear inequalities and the number line`,
      body: String.raw`Solve like an equation, with one extra rule: **when you multiply or divide both sides by a negative number, reverse the inequality sign.**
$$3 - 2x \le 11 \;\Rightarrow\; -2x \le 8 \;\Rightarrow\; x \ge -4.$$

- Number line: **open circle** for $<$ or $>$ (end-point not included), **closed circle** for $\le$ or $\ge$ (included).
- A combined inequality $a < \ldots \le b$ can be split into two inequalities. Solve each, then combine them.
- "Integer values" means list the whole numbers that satisfy the inequality. Check the end-points carefully.
- To avoid dividing by a negative, you can move the $x$-term to the other side instead.`,
      figure: {
        type: "plot",
        x: [-4.7, 6.7], y: [-0.7, 3.3], equal: true, axes: false,
        segments: [
          { from: [-4.4, 2.2], to: [0.87, 2.2], thin: true, tone: "ink", arrowStart: true },
          { from: [1.13, 2.2], to: [6.4, 2.2], thin: true, tone: "ink", arrow: true },
          { from: [1.13, 2.2], to: [6.4, 2.2], tone: "accent", arrow: true },
          ...[-4, -3, -2, -1, 0, 2, 3, 4, 5, 6].map((k) => ({ from: [k, 2.08], to: [k, 2.32], thin: true, tone: "ink" })),
          { from: [-4.4, 0.4], to: [-2.13, 0.4], thin: true, tone: "ink", arrowStart: true },
          { from: [-1.87, 0.4], to: [6.4, 0.4], thin: true, tone: "ink", arrow: true },
          { from: [-1.87, 0.4], to: [4, 0.4], tone: "accent" },
          ...[-4, -3, -1, 0, 1, 2, 3, 5, 6].map((k) => ({ from: [k, 0.28], to: [k, 0.52], thin: true, tone: "ink" })),
        ],
        circles: [{ c: [1, 2.2], r: 0.13, tone: "accent" }, { c: [-2, 0.4], r: 0.13, tone: "accent" }],
        points: [{ x: 4, y: 0.4 }],
        labels: [
          ...[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((k) => ({ x: k, y: 1.8, text: k < 0 ? "−" + (-k) : String(k), style: "small" })),
          ...[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((k) => ({ x: k, y: 0, text: k < 0 ? "−" + (-k) : String(k), style: "small" })),
          { x: -4.4, y: 2.85, text: "x > 1", pos: "e", style: "italic" },
          { x: -4.4, y: 1.05, text: "−2 < x ≤ 4", pos: "e", style: "italic" },
        ],
        caption: String.raw`Open circle: not included. Closed circle: included.`,
        alt: "Two number lines from −4 to 6. The first shows x > 1: an open circle at 1 with a bold arrow to the right. The second shows −2 < x ≤ 4: an open circle at −2, a bold segment to a solid dot at 4.",
      },
    },
    {
      title: String.raw`Forming equations from word problems`,
      body: String.raw`1. Let the unknown be $x$ and say what it stands for, with units ("Let the cost of one adult ticket be \$$x$").
2. Write other quantities in terms of $x$. Useful facts: time $= \dfrac{\text{distance}}{\text{speed}}$, area of a rectangle $=$ length $\times$ width, total cost $=$ number $\times$ price.
3. Form the equation from the sentence that gives a total, a difference or an equal amount. Convert units first (minutes to hours, cents to dollars).
4. Solve, then **reject** solutions that make no sense (negative lengths, speeds or numbers of items; a non-integer number of people).
5. Answer the question that was asked, with units.

For inequalities in context, think about whether the answer must be a whole number, and round in the sensible direction (e.g. "the greatest number of pens" rounds **down**).`,
    },
  ],
  archetypes: [
    {
      id: "N7-linear-equations",
      name: String.raw`Linear and simple fractional equations`,
      tests: String.raw`Solving linear equations with brackets and fractions, and fractional equations with the unknown in the denominator that reduce to linear equations.`,
      questions: [
        {
          stem: String.raw`Solve`,
          parts: [
            { label: "(a)", text: String.raw`$5(2x - 3) = 3(x + 2) - 7$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{x}{4} + \dfrac{x - 3}{6} = 2$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\dfrac{2y + 1}{5} - \dfrac{y - 3}{2} = 1$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Solve`,
          parts: [
            { label: "(a)", text: String.raw`$\dfrac{4}{x - 3} = 8$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{5}{2x + 1} = \dfrac{3}{x - 1}$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N7-simultaneous-algebraic",
      name: String.raw`Simultaneous equations by elimination or substitution`,
      tests: String.raw`Solving a pair of linear equations, sometimes with fractions to clear first. A standard 3-mark Paper 1 question.`,
      questions: [
        {
          stem: String.raw`Solve the simultaneous equations
$$3x + 2y = 7, \qquad 5x - 3y = 37.$$`,
          marks: 3,
        },
        {
          stem: String.raw`Solve the simultaneous equations
$$\frac{x}{2} + \frac{y}{3} = 4, \qquad 2x - y = 2.$$`,
          marks: 3,
        },
      ],
    },
    {
      id: "N7-simultaneous-graphical",
      name: String.raw`Simultaneous equations by the graphical method`,
      tests: String.raw`Drawing a second line on a given grid, reading the point of intersection as the solution, and explaining when there is no solution (parallel lines).`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $2x + y = 8$ for $0 \le x \le 5$.`,
          figure: {
            type: "plot",
            x: [-0.6, 5.6], y: [-2.8, 8.8], height: 320,
            segments: [
              ...[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((v) => ({ from: [v, -2.5], to: [v, 8.5], thin: true, tone: "muted" })),
              ...[-2, -1, 1, 2, 3, 4, 5, 6, 7, 8].map((v) => ({ from: [0, v], to: [5.3, v], thin: true, tone: "muted" })),
            ],
            curves: [{ fn: "x => 8 - 2*x", domain: [0, 5] }],
            labels: [{ x: 1.15, y: 6.3, text: "2x + y = 8", pos: "e", style: "italic", tone: "accent" }],
            xTicks: [1, 2, 3, 4, 5].map((v) => ({ x: v, label: String(v) })),
            yTicks: [-2, 2, 4, 6, 8].map((v) => ({ y: v, label: String(v) })),
            alt: "Grid with x from 0 to 5 and y from −2 to 8, showing the straight line 2x + y = 8 from (0, 8) down to (5, −2).",
          },
          parts: [
            { label: "(a)", text: String.raw`Complete the table of values for $y = x - 1$.

| $x$ | $0$ | $2$ | $4$ |
| $y$ |  |  |  |`, marks: 1 },
            { label: "(b)", text: String.raw`On the same axes, draw the graph of $y = x - 1$.`, marks: 1 },
            { label: "(c)", text: String.raw`Use your graphs to solve the simultaneous equations $2x + y = 8$ and $y = x - 1$.`, marks: 1 },
            { label: "(d)", text: String.raw`Explain why the simultaneous equations $2x + y = 8$ and $4x + 2y = 5$ have no solution.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N7-quadratic-factorisation",
      name: String.raw`Quadratic equations by factorisation`,
      tests: String.raw`Rearranging to "$= 0$", factorising and using the zero product. Includes traps such as a common bracket on both sides or a missing constant term.`,
      questions: [
        {
          stem: String.raw`Solve`,
          parts: [
            { label: "(a)", text: String.raw`$x^2 - 5x - 14 = 0$,`, marks: 2 },
            { label: "(b)", text: String.raw`$6x^2 = 7x + 3$,`, marks: 2 },
            { label: "(c)", text: String.raw`$x(x - 4) = 3(x - 4)$,`, marks: 2 },
            { label: "(d)", text: String.raw`$4x^2 = 9x$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N7-quadratic-formula",
      name: String.raw`Quadratic equations by formula`,
      tests: String.raw`Rearranging to $ax^2 + bx + c = 0$ and using the formula with correct signs, giving answers to 2 decimal places or 3 significant figures.`,
      questions: [
        {
          stem: String.raw`Solve the equation $3x^2 - 5x - 4 = 0$, giving your answers correct to 2 decimal places.`,
          marks: 3,
        },
        {
          stem: String.raw`Solve the equation $(2x - 1)^2 = 3x + 5$, giving your answers correct to 2 decimal places.`,
          marks: 3,
        },
      ],
    },
    {
      id: "N7-completing-square",
      name: String.raw`Solving by completing the square`,
      tests: String.raw`Writing $x^2 + px + q$ in the form $(x + a)^2 + b$ and then solving, remembering the $\pm$ when square-rooting.`,
      questions: [
        {
          stem: String.raw`It is given that $x^2 - 8x + 5 = (x - a)^2 - b$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and the value of $b$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence solve the equation $x^2 - 8x + 5 = 0$, giving your answers correct to 2 decimal places.`, marks: 2 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Express $x^2 + 5x - 2$ in the form $(x + p)^2 + q$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence solve the equation $x^2 + 5x - 2 = 0$, giving your answers correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N7-fractional-quadratic",
      name: String.raw`Fractional equations leading to quadratics`,
      tests: String.raw`Clearing denominators to obtain a quadratic equation (often a "Show that" step), solving it, and checking that no solution makes a denominator zero.`,
      questions: [
        {
          stem: String.raw`Solve the equation $\dfrac{8}{x + 2} = x - 5$.`,
          marks: 3,
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Show that the equation $\dfrac{2}{x - 1} + \dfrac{3}{x + 2} = 4$ can be written as $4x^2 - x - 9 = 0$.`, marks: 3 },
            { label: "(b)", text: String.raw`Solve the equation $4x^2 - x - 9 = 0$, giving your answers correct to 2 decimal places.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N7-quadratic-graphical",
      name: String.raw`Quadratic equations by the graphical method`,
      tests: String.raw`Using a given parabola to solve $ax^2 + bx + c = 0$ and $ax^2 + bx + c = k$ by reading intersections with the $x$-axis or a horizontal line, and explaining when there are no solutions.`,
      questions: [
        {
          stem: String.raw`The diagram shows the graph of $y = x^2 - x - 6$ for $-3 \le x \le 4$.`,
          figure: {
            type: "plot",
            x: [-3.4, 4.6], y: [-7.6, 7.4], height: 330,
            segments: [
              ...[-3, -2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4].map((v) => ({ from: [v, -7], to: [v, 7], thin: true, tone: "muted" })),
              ...[-7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7].map((v) => ({ from: [-3, v], to: [4, v], thin: true, tone: "muted" })),
            ],
            curves: [{ fn: "x => x*x - x - 6", domain: [-3, 4] }],
            xTicks: [-3, -2, -1, 1, 2, 3, 4].map((v) => ({ x: v, label: v < 0 ? "−" + (-v) : String(v) })),
            yTicks: [-6, -4, -2, 2, 4, 6].map((v) => ({ y: v, label: v < 0 ? "−" + (-v) : String(v) })),
            alt: "Grid with x from −3 to 4 and y from −7 to 7, showing the U-shaped curve y = x² − x − 6. It starts at (−3, 6), falls to a minimum just below y = −6 near x = 0.5, and rises to (4, 6).",
          },
          parts: [
            { label: "(a)", text: String.raw`Use the graph to solve the equation $x^2 - x - 6 = 0$.`, marks: 1 },
            { label: "(b)", text: String.raw`Use the graph to solve the equation $x^2 - x - 6 = -3$.`, marks: 2 },
            { label: "(c)", text: String.raw`Explain how the graph shows that the equation $x^2 - x - 6 = -8$ has no solutions.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N7-linear-inequalities",
      name: String.raw`Linear inequalities and the number line`,
      tests: String.raw`Solving single and combined linear inequalities (reversing the sign for a negative multiplier), showing the solution on a number line, and listing integer solutions.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Solve the inequality $\dfrac{x + 1}{3} - \dfrac{x - 2}{2} < 1$.`, marks: 3 },
            { label: "(b)", text: String.raw`Represent your answer to part (a) on a number line.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`It is given that $2x - 5 < 3x + 1 \le 19 - x$.`,
          parts: [
            { label: "(a)", text: String.raw`Solve the inequalities.`, marks: 3 },
            { label: "(b)", text: String.raw`Represent the solution on a number line.`, marks: 1 },
            { label: "(c)", text: String.raw`Write down the smallest integer and the largest integer that satisfy the inequalities.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N7-forming-linear",
      name: String.raw`Forming linear equations and inequalities from word problems`,
      tests: String.raw`Defining unknowns, writing simultaneous equations or an inequality from a real-world description, solving, and interpreting the answer (e.g. rounding down to a whole number).`,
      questions: [
        {
          stem: String.raw`At a cinema, 3 adult tickets and 2 child tickets cost \$51 altogether. 2 adult tickets and 5 child tickets cost \$50.50 altogether. The cost of an adult ticket is \$$a$ and the cost of a child ticket is \$$c$.`,
          parts: [
            { label: "(a)", text: String.raw`Write down two equations in $a$ and $c$.`, marks: 2 },
            { label: "(b)", text: String.raw`Solve your equations to find the cost of an adult ticket and the cost of a child ticket.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Ahmad has \$50. He buys a book that costs \$12.80 and $n$ pens that cost \$2.35 each.`,
          parts: [
            { label: "(a)", text: String.raw`Write down an inequality in $n$ to show that he does not spend more than \$50.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the greatest number of pens that Ahmad can buy.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N7-forming-quadratic",
      name: String.raw`Forming quadratic equations from word problems`,
      tests: String.raw`Setting up a quadratic from a context (speed–time, area, paths and borders), showing it simplifies to a given equation, solving, and rejecting the solution that does not make sense.`,
      questions: [
        {
          stem: String.raw`A cyclist rides 60 km from Town A to Town B at an average speed of $x$ km/h. On the return journey, his average speed is 5 km/h less, and the journey takes 1 hour longer.`,
          parts: [
            { label: "(a)", text: String.raw`Write down an expression, in terms of $x$, for the time taken, in hours, for the journey from A to B.`, marks: 1 },
            { label: "(b)", text: String.raw`Show that $x^2 - 5x - 300 = 0$.`, marks: 3 },
            { label: "(c)", text: String.raw`Solve the equation $x^2 - 5x - 300 = 0$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the time taken for the return journey.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a rectangular garden 20 m long and 14 m wide. A path of uniform width $x$ m runs along all four sides inside the garden. The rest of the garden is a lawn of area 160 m$^2$.`,
          figure: {
            type: "plot",
            x: [-2.4, 22], y: [-2.2, 15.4], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [20, 0], [20, 14], [0, 14]], fill: true, tone: "muted" },
              { points: [[2.8, 2.8], [17.2, 2.8], [17.2, 11.2], [2.8, 11.2]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [10, 11.35], to: [10, 13.85], thin: true, tone: "ink", arrow: true, arrowStart: true },
            ],
            labels: [
              { x: 10, y: -1.1, text: "20 m" },
              { x: -0.5, y: 7, text: "14 m", pos: "w" },
              { x: 10.4, y: 12.6, text: "x m", pos: "e", style: "italic" },
              { x: 10, y: 7, text: "Lawn" },
            ],
            caption: String.raw`Not drawn to scale`,
            alt: "A rectangle 20 m by 14 m with a smaller rectangle inside it, leaving a path of equal width x m all round. The inner rectangle is the lawn. An arrow across the top path is labelled x m.",
          },
          parts: [
            { label: "(a)", text: String.raw`Show that $x^2 - 17x + 30 = 0$.`, marks: 2 },
            { label: "(b)", text: String.raw`Solve the equation and explain why one of the solutions must be rejected.`, marks: 3 },
            { label: "(c)", text: String.raw`Find the area of the path.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
