H2.addTopic({
  id: "1.3",
  title: "Equations and Inequalities",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Formulating and solving equations, linear systems and inequalities — exactly by algebra, or approximately with the GC.`,
  syllabus: {
    include: [
      String.raw`formulating an equation, a system of linear equations, or inequalities from a problem situation`,
      String.raw`solving an equation exactly or approximately using a graphing calculator or a graphing software`,
      String.raw`solving a system of linear equations using a graphing calculator or a graphing software`,
      String.raw`solving inequalities of the form $\dfrac{\mathrm{f}(x)}{\mathrm{g}(x)} > 0$ where $\mathrm{f}(x)$ and $\mathrm{g}(x)$ are linear expressions or quadratic expressions`,
      String.raw`concept of $|x|$, and use of relations $|x - a| < b \iff a - b < x < a + b$ and $|x - a| > b \iff x < a - b$ or $x > a + b$`,
      String.raw`solving inequalities by graphical methods`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Systems of linear equations`,
      body: String.raw`- **Define your unknowns** in words, with units ("Let $x$ be the price, in dollars, of one coffee").
- $n$ unknowns need $n$ independent equations. Write each equation down in full before using the GC — the equations carry method marks.
- Solve with the GC's simultaneous-equation solver (or matrix rref). Copy the answer, then **answer the question asked** in context (e.g. "Each coffee costs \$3.50").
- Curve fitting is the same idea: a point $(p, q)$ on $y = ax^2 + bx + c$ gives the linear equation $ap^2 + bp + c = q$; a gradient condition gives another.`,
    },
    {
      title: String.raw`Solving equations with the GC`,
      body: String.raw`- Rearrange to $\mathrm{f}(x) = 0$ and use the **zero** function, or graph both sides and use **intersect**.
- Choose a sensible window — roots outside the window are easily missed. Check the number of roots against a sketch.
- Give answers to **3 significant figures** unless told otherwise, and reject roots outside the context's domain (e.g. a length must be positive).
- "Exact" or "without using a calculator" means algebra: factorise, use the quadratic formula, or reduce to a standard form.`,
    },
    {
      title: String.raw`Rational inequalities $\dfrac{\mathrm{f}(x)}{\mathrm{g}(x)} > 0$`,
      body: String.raw`**Never multiply both sides by an expression whose sign is unknown.** Instead:

1. Bring everything to one side and combine into a single fraction.
2. Factorise numerator and denominator fully.
3. Mark the critical values on a number line and use a **sign diagram** (or multiply through by $\mathrm{g}(x)^2 > 0$).
4. Values that make the **denominator zero are always excluded**, even for $\ge$ or $\le$.

A quadratic factor with negative discriminant (show this, or complete the square, e.g. $x^2 + 2x + 5 = (x + 1)^2 + 4 > 0$) is always positive and can be divided out without changing the inequality sign.`,
    },
    {
      title: String.raw`Modulus`,
      body: String.raw`$|x| = x$ if $x \ge 0$ and $|x| = -x$ if $x < 0$; $|x - a|$ is the **distance** between $x$ and $a$ on the number line.

- $|x - a| < b \iff a - b < x < a + b$ (memorise).
- $|x - a| > b \iff x < a - b$ or $x > a + b$ (memorise).
- $|\mathrm{f}(x)| < |\mathrm{g}(x)| \iff [\mathrm{f}(x)]^2 < [\mathrm{g}(x)]^2$, since both sides are non-negative.
- When the right-hand side can be negative (e.g. $|x^2 - 4| > 3x$), do **not** square; sketch both graphs or split into cases.`,
    },
    {
      title: String.raw`Graphical methods`,
      body: String.raw`To solve $\mathrm{f}(x) > \mathrm{g}(x)$, sketch $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$ on the same axes and read off the $x$-values where the first graph is **above** the second.

- Find the intersection points exactly (algebra) or with the GC (state 3 s.f.).
- Include the sketch in your working, with intersections labelled — "from GC" alone with no supporting sketch risks losing marks.
- Watch vertical asymptotes: the inequality can change direction there without an intersection.`,
    },
    {
      title: String.raw`"Hence" by substitution`,
      body: String.raw`If the solution of an inequality in $x$ is known, a related inequality is solved by **replacing $x$** throughout and solving for the new variable.

| Replace $x$ by | Watch for |
| $\lvert x \rvert$ | $\lvert x \rvert \ge 0$: discard negative ranges, and the answer is symmetric about 0 |
| $\mathrm{e}^x$ | $\mathrm{e}^x > 0$: discard non-positive ranges; then take ln |
| $\ln x$ | answer must have $x > 0$; exponentiate each bound |
| $\dfrac{1}{x}$ | split into $x > 0$ and $x < 0$ before inverting each bound |
| $-x$ or $x - a$ | reverse the inequality signs when multiplying by $-1$ |

Show the substitution explicitly ("replace $x$ by $|x|$") — that line is what "hence" is asking for. Re-solving from scratch earns no marks.`,
    },
    {
      title: String.raw`Formulating from a problem situation`,
      body: String.raw`- Translate each sentence into one equation or inequality; "at least" is $\ge$, "at most" / "not more than" is $\le$, "exceeds" is $>$.
- State the natural restrictions on the variable (lengths positive, integers for counts) and apply them to the final answer.
- For integer contexts, the final answer is a **set of integers** or a least/greatest integer, not an interval.`,
    },
  ],
  archetypes: [
    {
      id: "1.3-linear-system-context",
      name: String.raw`Formulating and solving a system of linear equations`,
      tests: String.raw`Setting up three (or more) linear equations from a real-world description or from conditions on a curve, solving with the GC, and interpreting the solution in context.`,
      questions: [
        {
          stem: String.raw`A café sells coffee, tea and juice. Each drink of the same type has the same price. Three customers place the following orders.

| Customer | Coffee | Tea | Juice | Total paid |
| Ann | 2 | 3 | 1 | \$19.60 |
| Ben | 1 | 2 | 3 | \$21.70 |
| Chen | 4 | 1 | 2 | \$25.20 |`,
          parts: [
            { label: "(i)", text: String.raw`Write down and solve equations to find the price of each type of drink.`, marks: 4 },
            { label: "(ii)", text: String.raw`Determine whether a customer with \$20 can afford two drinks of each type.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A ball is thrown upwards from a platform. Its height above the ground, $h$ metres, $t$ seconds after it is thrown is modelled by $h = at^2 + bt + c$, where $a$, $b$ and $c$ are constants. The heights after 1, 2 and 3 seconds are 18.6 m, 25.9 m and 23.4 m respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$, $b$ and $c$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State the height of the platform.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the time taken for the ball to reach the ground, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the greatest height reached by the ball, giving your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-formulate-equation-inequality",
      name: String.raw`Formulating an equation or inequality from context`,
      tests: String.raw`Building a polynomial model from a geometric or practical situation, solving it with the GC (or exactly), and rejecting values that make no sense in context.`,
      questions: [
        {
          stem: String.raw`A rectangular sheet of card measures 30 cm by 20 cm. A square of side $x$ cm is cut from each corner and the sides are folded up to form an open box.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the volume, $V\ \mathrm{cm}^3$, of the box is given by $V = 4x^3 - 100x^2 + 600x$, and state the range of possible values of $x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the values of $x$ for which the volume of the box is $800\ \mathrm{cm}^3$, giving your answers correct to 3 significant figures.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence find the range of values of $x$ for which the volume of the box exceeds $800\ \mathrm{cm}^3$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A farmer uses 60 m of fencing to enclose a rectangular plot against a long straight wall, so that fencing is needed on three sides only. The two sides perpendicular to the wall each have length $x$ m.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that the area of the plot, $A\ \mathrm{m}^2$, is given by $A = 60x - 2x^2$.`, marks: 1 },
            { label: "(ii)", text: String.raw`The area of the plot must be at least $400\ \mathrm{m}^2$. Without using a calculator, find the range of possible values of $x$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given further that the side parallel to the wall must not exceed 30 m, find the range of possible values of $x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-rational-inequality",
      name: String.raw`Rational inequalities solved algebraically`,
      tests: String.raw`Solving $\frac{\mathrm{f}(x)}{\mathrm{g}(x)} \gtrless k$ without a calculator by collecting terms into one fraction, factorising and using a sign diagram; recognised by "without using a calculator".`,
      questions: [
        {
          stem: String.raw`Without using a calculator, solve the inequality
$$\frac{x^2 + 2x + 3}{x^2 - x - 2} \ge 1.$$`,
          calculator: false,
          marks: 4,
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $x^2 + 5x + 8 > 0$ for all real values of $x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence solve the inequality $\dfrac{2x^2 + 5x + 4}{x^2 - 4} > 1$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "1.3-hence-substitution",
      name: String.raw`"Hence" deductions by substitution`,
      tests: String.raw`Solving a base rational inequality, then deducing the solution of a related inequality by replacing $x$ with $|x|$, $\mathrm{e}^x$, $\ln x$, $\frac{1}{x}$ or $-x$, taking care with the restrictions each substitution imposes.`,
      questions: [
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the inequality $\dfrac{3x - 1}{x + 1} < x - 1$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve $\dfrac{3|x| - 1}{|x| + 1} < |x| - 1$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence solve $\dfrac{3\mathrm{e}^x - 1}{\mathrm{e}^x + 1} < \mathrm{e}^x - 1$, giving your answer in exact form.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the inequality $\dfrac{x + 6}{x + 2} \ge x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve $\dfrac{1 + 6x}{1 + 2x} \ge \dfrac{1}{x}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve $\dfrac{\ln x + 6}{\ln x + 2} \ge \ln x$, giving your answer in exact form.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-modulus-inequality",
      name: String.raw`Modulus equations and inequalities`,
      tests: String.raw`Using $|x - a| < b \iff a - b < x < a + b$ and its counterpart, squaring when both sides are non-negative moduli, and using a sketch when one side can be negative.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, solve the following inequalities.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$|3x - 2| \le 7$`, marks: 2 },
            { label: "(b)", text: String.raw`$|x^2 - 5| > 4$`, marks: 3 },
            { label: "(c)", text: String.raw`$|x - 1| < |2x + 1|$`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Do not use a calculator in answering this question.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch the graphs of $y = |x^2 - 4|$ and $y = 3x$, stating the coordinates of the points where the graphs meet the axes.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the $x$-coordinates of the points of intersection of the two graphs.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve the inequality $|x^2 - 4| > 3x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.3-graphical-gc",
      name: String.raw`Solving equations and inequalities graphically with the GC`,
      tests: String.raw`Sketching two curves, using the GC to find their intersections to 3 s.f., and reading off where one curve lies above the other; frequently followed by a "hence" with $|x|$.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \mathrm{e}^{\frac{1}{2}x}$ and $\mathrm{g}(x) = 5 - x^2$.`,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Solve the inequality $\mathrm{e}^{\frac{1}{2}x} < 5 - x^2$, giving the bounds correct to 3 significant figures.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve the inequality $\mathrm{e}^{\frac{1}{2}|x|} < 5 - x^2$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The curve $C$ has equation $y = \dfrac{x + 1}{x - 2}$.`,
          parts: [
            { label: "(i)", text: String.raw`On the same diagram, sketch $C$ and the line $y = 2x - 3$, stating the equations of the asymptotes of $C$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using your diagram, solve the inequality $\dfrac{x + 1}{x - 2} \le 2x - 3$, giving any non-exact bounds correct to 3 significant figures.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
