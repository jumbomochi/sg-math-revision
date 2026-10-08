H2.addTopic({
  id: "A2",
  title: "Equations and Inequalities",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`The discriminant and the nature of roots, when a line meets, touches or misses a curve, simultaneous equations with one linear equation, and quadratic inequalities.`,
  syllabus: {
    include: [
      String.raw`Conditions for a quadratic equation to have: (i) two real roots, (ii) two equal roots, (iii) no real roots`,
      String.raw`Related conditions for a given line to: (i) intersect a given curve, (ii) be a tangent to a given curve, (iii) not intersect a given curve`,
      String.raw`Solving simultaneous equations in two variables by substitution, with one of the equations being a linear equation`,
      String.raw`Solving quadratic inequalities, and representing the solution on the number line`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`The discriminant and the nature of roots`,
      body: String.raw`For $ax^2 + bx + c = 0$ ($a \ne 0$), the **discriminant** is $b^2 - 4ac$.

| Discriminant | Roots | Graph of $y = ax^2 + bx + c$ |
| $b^2 - 4ac > 0$ | two real, distinct (different) roots | cuts the $x$-axis twice |
| $b^2 - 4ac = 0$ | two equal (repeated) real roots | touches the $x$-axis |
| $b^2 - 4ac < 0$ | no real roots | does not meet the $x$-axis |

- "**Real roots**" (without "distinct") means $b^2 - 4ac \ge 0$.
- These conditions are not on the formula sheet — memorise them. The quadratic formula is **(Given)**.
- Before using the discriminant, write the equation as $ax^2 + bx + c = 0$ and read off $a$, $b$ and $c$ carefully, with their signs.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 4.6], y: [-1.6, 5], height: 170,
          curves: [{ fn: "x => x*x - 4*x + 3" }],
          points: [{ x: 1, y: 0 }, { x: 3, y: 0 }],
          caption: String.raw`$b^2 - 4ac > 0$`,
          alt: "A U-shaped parabola cutting the x-axis at two points.",
        },
        {
          type: "plot",
          x: [-0.6, 4.6], y: [-1.6, 5], height: 170,
          curves: [{ fn: "x => x*x - 4*x + 4" }],
          points: [{ x: 2, y: 0 }],
          caption: String.raw`$b^2 - 4ac = 0$`,
          alt: "A U-shaped parabola touching the x-axis at one point.",
        },
        {
          type: "plot",
          x: [-0.6, 4.6], y: [-1.6, 5], height: 170,
          curves: [{ fn: "x => x*x - 4*x + 5" }],
          caption: String.raw`$b^2 - 4ac < 0$`,
          alt: "A U-shaped parabola lying entirely above the x-axis.",
        },
      ],
    },
    {
      title: String.raw`Finding an unknown constant from the nature of roots`,
      body: String.raw`1. Write the equation in the form $ax^2 + bx + c = 0$; $a$, $b$, $c$ may contain $k$.
2. Write down the correct condition, e.g. "two real distinct roots $\Rightarrow b^2 - 4ac > 0$".
3. Substitute and simplify to a quadratic inequality (or equation) in $k$.
4. Solve it with a sketch of the graph in $k$ (see the last concept).

Watch out:
- If the coefficient of $x^2$ contains $k$, the equation is only a quadratic when that coefficient is not zero.
- Brackets: $(k - 2)^2 - 4(1)(k + 1)$, not $k - 2^2 - 4k + 1$.`,
    },
    {
      title: String.raw`Showing roots are real for all values of $k$`,
      body: String.raw`To show that an equation has real roots for **all** real $k$, show that the discriminant is never negative.

- If the discriminant simplifies to a perfect square, e.g. $(k + 2)^2$, then it is $\ge 0$ for all $k$: real roots.
- If it is a perfect square plus a positive number, e.g. $(k - 4)^2 + 5$, then it is $> 0$ for all $k$: real and **distinct** roots.
- Otherwise, complete the square on the discriminant, or show it is a quadratic in $k$ that is always positive.

Give a clear concluding sentence: "Since $b^2 - 4ac = (k + 2)^2 \ge 0$ for all real $k$, the roots are real for all real values of $k$."`,
    },
    {
      title: String.raw`A line and a curve`,
      body: String.raw`To decide how the line $y = mx + c$ meets a curve, substitute the line into the curve to get a quadratic equation in $x$. Its discriminant tells you the number of intersection points.

| Discriminant | The line… |
| $> 0$ | cuts (intersects) the curve at two distinct points |
| $= 0$ | is a **tangent** to the curve (touches it at one point) |
| $< 0$ | does not meet the curve |
| $\ge 0$ | meets (intersects) the curve |

For a tangent, solve the repeated-root equation to find the point of contact: $x = -\dfrac{b}{2a}$, then use the line to find $y$.`,
      figure: {
        type: "plot",
        x: [-2.6, 4.2], y: [-3.5, 10.5], height: 270,
        curves: [
          { fn: "x => x*x", label: "y = x²", labelAt: -2.35 },
          { fn: "x => 2*x + 3", tone: "good" },
          { fn: "x => 2*x - 1", tone: "warn" },
          { fn: "x => 2*x - 3", tone: "muted", dashed: true },
        ],
        points: [{ x: -1, y: 1 }, { x: 3, y: 9 }, { x: 1, y: 1 }],
        labels: [
          { x: 4.15, y: 8.0, text: "two points", pos: "w", style: "small", tone: "good" },
          { x: 4.15, y: 6.6, text: "tangent", pos: "w", style: "small", tone: "warn" },
          { x: 4.15, y: 3.8, text: "misses", pos: "w", style: "small", tone: "muted" },
        ],
        caption: String.raw`Lines $y = 2x + c$ and the curve $y = x^2$: $c = 3$ cuts it twice, $c = -1$ is a tangent at $(1, 1)$, $c = -3$ does not meet it.`,
        alt: "The parabola y = x² with three parallel lines of gradient 2. The highest line cuts the parabola at two points, the middle line touches it at (1, 1), and the lowest dashed line passes below without meeting it.",
      },
    },
    {
      title: String.raw`Simultaneous equations: one linear, one non-linear`,
      body: String.raw`1. From the **linear** equation, make one variable the subject (choose the one that avoids fractions).
2. Substitute into the non-linear equation and simplify to a quadratic.
3. Solve the quadratic.
4. Substitute each answer back into the **linear** equation to find the other variable.
5. Write the answers in pairs, e.g. $x = 2, y = 1$ **and** $x = -1, y = 4$.

Each pair is a point where the line meets the curve. Common mistakes: substituting into the curve in step 4 (this can give extra, wrong pairs), and mixing up which $y$ goes with which $x$.`,
    },
    {
      title: String.raw`Solving quadratic inequalities`,
      body: String.raw`1. Bring every term to one side so that the other side is $0$, with a positive $x^2$ coefficient if possible.
2. Find the roots (factorise, or use the quadratic formula).
3. Sketch the parabola and read off where it is above or below the $x$-axis.

For roots $p < q$ and a U-shaped graph:
- $(x - p)(x - q) < 0 \iff p < x < q$ (between the roots);
- $(x - p)(x - q) > 0 \iff x < p$ or $x > q$ (outside the roots).

Do **not** "square root both sides" or divide by an expression whose sign you do not know. Write "or" for two separate regions; never write $3 < x < -1$.

**Number line:** use an open circle $\circ$ for $<$ or $>$ (end-point not included) and a filled dot $\bullet$ for $\le$ or $\ge$ (end-point included).`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 4.6], y: [-4.6, 5.5], height: 220,
          shade: [
            { upper: "x => 0", lower: "x => (x + 1)*(x - 3)", from: -1, to: 3, tone: "warn" },
          ],
          originLabel: "ne",
          curves: [{ fn: "x => (x + 1)*(x - 3)" }],
          labels: [
            { x: -1.5, y: 0.6, text: "−1", style: "plain" },
            { x: 3.45, y: 0.6, text: "3", style: "plain" },
            { x: 3.6, y: 3.6, text: "y = (x + 1)(x − 3)", pos: "w", style: "italic", tone: "accent" },
          ],
          caption: String.raw`$(x + 1)(x - 3) < 0$: the graph is below the $x$-axis between the roots.`,
          alt: "Graph of y = (x + 1)(x − 3), a U-shaped parabola crossing the x-axis at −1 and 3. The part below the x-axis, between x = −1 and x = 3, is shaded.",
        },
        {
          type: "plot",
          x: [-3.4, 5.4], y: [-1.1, 0.9], equal: true, axes: false,
          circles: [{ c: [-1, 0], r: 0.13, tone: "accent" }, { c: [3, 0], r: 0.13, tone: "accent" }],
          segments: [
            { from: [-1.13, 0], to: [-3.3, 0], arrow: true, tone: "muted" },
            { from: [3.13, 0], to: [5.3, 0], arrow: true, tone: "muted" },
            { from: [-0.87, 0], to: [2.87, 0], tone: "accent" },
          ],
          labels: [
            { x: -1, y: -0.45, text: "−1", style: "plain" },
            { x: 3, y: -0.45, text: "3", style: "plain" },
            { x: 1, y: 0.4, text: "−1 < x < 3", style: "italic", tone: "accent" },
          ],
          caption: String.raw`The solution on a number line, with open circles because the end-points are not included.`,
          alt: "A number line with open circles at −1 and 3 and the segment between them highlighted, showing −1 < x < 3.",
        },
      ],
    },
    {
      title: String.raw`Roots and coefficients of a quadratic equation`,
      tags: ["IP"],
      body: String.raw`Not in K341 (removed from O-Level A-Math 4047). If $\alpha$ and $\beta$ are the roots of $ax^2 + bx + c = 0$, then

$$\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a}.$$

Memorise these (they are not on the formula sheet). Conversely, a quadratic equation with roots $\alpha$ and $\beta$ is

$$x^2 - (\text{sum of roots})x + (\text{product of roots}) = 0.$$

To find other expressions **without solving** the equation, write them in terms of $\alpha + \beta$ and $\alpha\beta$:

- $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$
- $(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta$
- $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$
- $\dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha + \beta}{\alpha\beta}$

Example: for $x^2 - 5x + 3 = 0$, $\alpha + \beta = 5$ and $\alpha\beta = 3$. The equation with roots $2\alpha$ and $2\beta$ has sum $10$ and product $4\alpha\beta = 12$, so it is $x^2 - 10x + 12 = 0$.

Multiply through at the end to give integer coefficients if the question asks for them.`,
    },
  ],
  archetypes: [
    {
      id: "A2-nature-of-roots-unknown",
      name: String.raw`Using the discriminant to find an unknown constant`,
      tests: String.raw`Applying the correct discriminant condition (two real distinct, equal, or no real roots) to an equation containing an unknown, then solving the resulting quadratic equation or inequality in that unknown.`,
      questions: [
        {
          stem: String.raw`The equation $kx^2 - 4x + k - 3 = 0$, where $k$ is a non-zero constant, has two equal roots.`,
          parts: [
            { label: "(a)", text: String.raw`Find the possible values of $k$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence write down the range of values of $k$ for which the equation has no real roots.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Find the range of values of $p$ for which the equation $x^2 + px + 2p - 3 = 0$ has two real distinct roots.`,
          marks: 4,
        },
      ],
    },
    {
      id: "A2-real-roots-all-k",
      name: String.raw`Showing roots are real for all values of a constant`,
      tests: String.raw`Simplifying the discriminant to a perfect square, or a perfect square plus a positive number, to prove that the roots are real (or real and distinct) whatever the value of the constant.`,
      questions: [
        {
          stem: String.raw`In this question, $k$ is a real constant.`,
          parts: [
            { label: "(a)", text: String.raw`Show that the equation $2x^2 + kx - 3 = 0$ has two real distinct roots for all values of $k$.`, marks: 2 },
            { label: "(b)", text: String.raw`Show that the equation $x^2 - (k + 3)x + 3k = 0$ has real roots for all values of $k$.`, marks: 3 },
            { label: "(c)", text: String.raw`State the value of $k$ for which the equation in part (b) has two equal roots.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Show that, for all real values of $k$, the line $y = kx - 1$ cuts the curve $y = x^2 + x - 3$ at two distinct points.`,
          marks: 4,
        },
      ],
    },
    {
      id: "A2-tangent-to-curve",
      name: String.raw`Line as a tangent to a curve`,
      tests: String.raw`Substituting the line into the curve, setting the discriminant equal to zero to find the unknown, then finding the point (or points) of contact.`,
      questions: [
        {
          stem: String.raw`The line $y = 2x + c$ is a tangent to the curve $y^2 = 8x$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of the constant $c$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the coordinates of the point at which the line touches the curve.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Find the values of $m$ for which the line $y = mx - 1$ is a tangent to the curve $y = x^2 + 3$. For each value of $m$, find the coordinates of the point of contact.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A2-line-meets-curve",
      name: String.raw`Range of values for a line to meet or not meet a curve`,
      tests: String.raw`Forming a quadratic from a line and a curve and using $b^2 - 4ac > 0$, $\ge 0$ or $< 0$ to find the range of an unknown gradient or intercept.`,
      questions: [
        {
          stem: String.raw`The line $y = mx + 3$ and the curve $y = x^2 - x + 7$ are given, where $m$ is a constant.`,
          parts: [
            { label: "(a)", text: String.raw`Find the range of values of $m$ for which the line does not meet the curve.`, marks: 4 },
            { label: "(b)", text: String.raw`State the values of $m$ for which the line is a tangent to the curve, and find the coordinates of the point of contact in each case.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "A2-simultaneous-linear-nonlinear",
      name: String.raw`Simultaneous equations with one linear equation`,
      tests: String.raw`Solving a linear and a non-linear equation together by substitution, often to find where a line meets a curve, then using the points (distance, midpoint) or interpreting the answers in context.`,
      questions: [
        {
          stem: String.raw`The diagram shows the curve $x^2 + xy = 6$ and the line $2x + y = 7$. The line meets the curve at the points $A$ and $B$.`,
          figure: {
            type: "plot",
            x: [-3, 8.5], y: [-9, 12], height: 270,
            curves: [
              { fn: "x => (6 - x*x)/x", domain: [0.4, 8.5] },
              { fn: "x => (6 - x*x)/x", domain: [-3, -0.5] },
              { fn: "x => 7 - 2*x", tone: "good" },
            ],
            points: [{ x: 1, y: 5, label: "A", pos: "ne", style: "italic" }, { x: 6, y: -5, label: "B", pos: "sw", style: "italic" }],
            labels: [
              { x: 3.2, y: 3, text: "x² + xy = 6", pos: "e", style: "italic", tone: "accent" },
              { x: 6.3, y: -8.2, text: "2x + y = 7", pos: "w", style: "italic", tone: "good" },
            ],
            alt: "The curve x² + xy = 6, which has two separate branches either side of the y-axis, and the straight line 2x + y = 7 with negative gradient. The line crosses the right-hand branch at A and B.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of $A$ and of $B$.`, marks: 4 },
            { label: "(b)", text: String.raw`Find the length of $AB$, giving your answer in the form $p\sqrt{5}$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A rectangular garden plot has a perimeter of $34$ m. The length of a diagonal of the plot is $13$ m. The length of the plot is $x$ m and its width is $y$ m.`,
          parts: [
            { label: "(a)", text: String.raw`Write down two equations in $x$ and $y$.`, marks: 2 },
            { label: "(b)", text: String.raw`Solve the equations to find the dimensions of the plot.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "A2-quadratic-inequality",
      name: String.raw`Solving quadratic inequalities and the number line`,
      tests: String.raw`Rearranging to one side, factorising, choosing "between" or "outside" the roots from a sketch, and showing the solution set on a number line; sometimes combined with a linear inequality or a request for integer values.`,
      questions: [
        {
          stem: String.raw`Solve the inequality $2x^2 - 5x - 3 > 0$, and represent the solution set on a number line.`,
          marks: 3,
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Find the range of values of $x$ for which $x(2x + 3) \le 5$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence find the integer values of $x$ which satisfy both $x(2x + 3) \le 5$ and $3x + 4 > 0$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A2-roots-and-coefficients",
      name: String.raw`Roots and coefficients of quadratic equations`,
      tags: ["IP"],
      tests: String.raw`Not in K341 (removed from O-Level A-Math 4047). Using $\alpha + \beta = -\frac{b}{a}$ and $\alpha\beta = \frac{c}{a}$ to evaluate symmetric expressions without solving, forming a new equation whose roots are related to $\alpha$ and $\beta$, or finding an unknown coefficient from a condition on the roots.`,
      questions: [
        {
          stem: String.raw`The roots of the equation $2x^2 - 6x + 1 = 0$ are $\alpha$ and $\beta$. Without solving the equation,`,
          parts: [
            { label: "(a)", text: String.raw`find the value of $\alpha^2 + \beta^2$,`, marks: 2 },
            { label: "(b)", text: String.raw`find the value of $\alpha^3 + \beta^3$,`, marks: 2 },
            { label: "(c)", text: String.raw`find a quadratic equation, with integer coefficients, whose roots are $\dfrac{\alpha}{\beta}$ and $\dfrac{\beta}{\alpha}$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The roots of the equation $x^2 - kx + 27 = 0$, where $k$ is a positive constant, are $\alpha$ and $3\alpha$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $\alpha$ and of $k$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the quadratic equation whose roots are $\alpha + 2$ and $3\alpha + 2$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
