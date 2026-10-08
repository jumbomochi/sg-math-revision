H2.addTopic({
  id: "A3",
  title: "Surds",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Simplifying surds, the four operations, rationalising the denominator, and solving equations involving surds — all without a calculator.`,
  syllabus: {
    include: [
      String.raw`Four operations on surds, including rationalising the denominator`,
      String.raw`Solving equations involving surds`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`What a surd is, and simplest form`,
      body: String.raw`A **surd** is a root that cannot be written exactly as a fraction, e.g. $\sqrt{2}$, $\sqrt{12}$, $3 - \sqrt{5}$. ($\sqrt{9} = 3$ is not a surd.)

Rules (for $a, b > 0$), memorise:
- $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$ and $\dfrac{\sqrt{a}}{\sqrt{b}} = \sqrt{\dfrac{a}{b}}$
- $\sqrt{a} \times \sqrt{a} = a$
- $\sqrt{a^2 b} = a\sqrt{b}$: take out the largest square factor, e.g. $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$.

Common mistake: $\sqrt{a + b} \ne \sqrt{a} + \sqrt{b}$. For example $\sqrt{9 + 16} = 5$, but $\sqrt{9} + \sqrt{16} = 7$.

Questions on surds are usually "Without using a calculator…". Show every step; a calculator answer scores nothing.`,
    },
    {
      title: String.raw`Adding, subtracting and multiplying`,
      body: String.raw`- Only **like surds** can be added or subtracted: $\sqrt{18} + \sqrt{32} = 3\sqrt{2} + 4\sqrt{2} = 7\sqrt{2}$. First simplify each surd so that like surds show up.
- Multiply brackets as in algebra, then use $\sqrt{a}\sqrt{a} = a$:
$$(3\sqrt{2} + 1)^2 = 18 + 6\sqrt{2} + 1 = 19 + 6\sqrt{2}.$$
- Useful products (difference of two squares):
$$(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b, \qquad (\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b.$$
These give a **rational** answer — the key to rationalising.`,
    },
    {
      title: String.raw`Rationalising the denominator`,
      body: String.raw`To remove a surd from the denominator, multiply the numerator **and** the denominator by:

| Denominator | Multiply top and bottom by |
| $\sqrt{a}$ | $\sqrt{a}$ |
| $a + \sqrt{b}$ | $a - \sqrt{b}$ (the conjugate) |
| $\sqrt{a} - \sqrt{b}$ | $\sqrt{a} + \sqrt{b}$ |

Example:
$$\frac{4 + \sqrt{2}}{3 - \sqrt{2}} \times \frac{3 + \sqrt{2}}{3 + \sqrt{2}} = \frac{12 + 4\sqrt{2} + 3\sqrt{2} + 2}{9 - 2} = \frac{14 + 7\sqrt{2}}{7} = 2 + \sqrt{2}.$$

Always simplify the denominator, then cancel any common factor, as in the last step above.`,
    },
    {
      title: String.raw`Comparing rational and irrational parts`,
      body: String.raw`If $a$, $b$, $c$, $d$ are rational and $\sqrt{n}$ is a surd, then
$$a + b\sqrt{n} = c + d\sqrt{n} \implies a = c \text{ and } b = d.$$

Use this to find unknowns. For example, to find $\sqrt{19 - 8\sqrt{3}}$ in the form $p + q\sqrt{3}$:
- square: $(p + q\sqrt{3})^2 = p^2 + 3q^2 + 2pq\sqrt{3}$;
- compare: $p^2 + 3q^2 = 19$ and $2pq = -8$;
- solve, and choose the signs so that $p + q\sqrt{3}$ is **positive** (a square root is never negative).`,
    },
    {
      title: String.raw`Equations with surd coefficients`,
      body: String.raw`Solve as usual, then rationalise at the end.

- Linear: $x(3 - \sqrt{2}) = 7 \implies x = \dfrac{7}{3 - \sqrt{2}}$, then rationalise to get $3 + \sqrt{2}$.
- Simultaneous: use substitution or elimination exactly as with whole-number coefficients; $\sqrt{2} \times \sqrt{2} = 2$ often makes terms combine.
- Give answers in the form asked for, e.g. $a + b\sqrt{3}$ with $a$, $b$ integers.`,
    },
    {
      title: String.raw`Equations with the unknown under a square root`,
      body: String.raw`1. Isolate one square root on one side.
2. Square **both sides** (square the whole side: $(1 + \sqrt{x})^2 = 1 + 2\sqrt{x} + x$, not $1 + x$).
3. If a square root is still there, isolate it and square again.
4. Solve the resulting equation.
5. **Check every answer in the original equation** and reject any that do not work.

Squaring can create extra roots. $\sqrt{x + 2} = x$ gives $x^2 - x - 2 = 0$, so $x = 2$ or $x = -1$. But $x = -1$ gives $\sqrt{1} = -1$, which is false, so the only solution is $x = 2$. The extra root is where the line meets the *negative* square root.`,
      figure: {
        type: "plot",
        x: [-2.6, 3.6], y: [-2.6, 3.1], equal: true, originLabel: "se",
        curves: [
          { fn: "x => Math.sqrt(x + 2)", domain: [-2, 3.6] },
          { fn: "x => -Math.sqrt(x + 2)", domain: [-2, 3.6], dashed: true, tone: "muted" },
          { fn: "x => x", tone: "good" },
        ],
        points: [
          { x: 2, y: 2, label: "(2, 2)", pos: "nw" },
          { x: -1, y: -1 },
        ],
        labels: [
          { x: 3.5, y: 1.4, text: "y = √(x + 2)", pos: "w", style: "italic", tone: "accent" },
          { x: 3.5, y: -1.6, text: "y = −√(x + 2)", pos: "w", style: "italic", tone: "muted" },
          { x: -2.05, y: -1.25, text: "(−1, −1)", style: "plain" },
          { x: 3.0, y: 3.0, text: "y = x", pos: "w", style: "italic", tone: "good" },
        ],
        caption: String.raw`$\sqrt{x + 2} = x$ has one solution, $x = 2$. Squaring also catches $x = -1$, where $y = x$ meets $y = -\sqrt{x + 2}$.`,
        alt: "Equal-scale graph of y = √(x + 2) (solid) and y = −√(x + 2) (dashed), forming a sideways parabola from (−2, 0), together with the line y = x. The line meets the solid upper half at (2, 2) and the dashed lower half at (−1, −1).",
      },
    },
    {
      title: String.raw`Surds in lengths and areas`,
      body: String.raw`Geometry questions often give lengths as surds and ask for an exact answer.

- Pythagoras: square each side carefully, e.g. $(\sqrt{5} + 1)^2 = 6 + 2\sqrt{5}$.
- Area of a triangle or rectangle: multiply the surd expressions, then simplify.
- Ratios of sides (e.g. $\tan$ in a right-angled triangle): rationalise the denominator.
- Unknown side from a given area: divide, then rationalise.

"Exact" means leave answers in surd form — never round.`,
    },
  ],
  archetypes: [
    {
      id: "A3-simplify-operations",
      name: String.raw`Simplifying and the four operations`,
      tests: String.raw`Writing surds in simplest form, collecting like surds and expanding brackets, without a calculator.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, simplify`,
          parts: [
            { label: "(a)", text: String.raw`$\sqrt{75} - \sqrt{27} + \sqrt{12}$,`, marks: 2 },
            { label: "(b)", text: String.raw`$(2\sqrt{3} - 1)^2$, giving your answer in the form $a + b\sqrt{3}$, where $a$ and $b$ are integers.`, marks: 2 },
            { label: "(c)", text: String.raw`$(3 + \sqrt{2})(3 - \sqrt{2}) - \sqrt{2}(\sqrt{8} - 1)$.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "A3-rationalise",
      name: String.raw`Rationalising the denominator`,
      tests: String.raw`Multiplying by the conjugate to express a fraction in the form $a + b\sqrt{n}$, or to prove a given simplification.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, express $\dfrac{5 + 2\sqrt{3}}{2 - \sqrt{3}}$ in the form $a + b\sqrt{3}$, where $a$ and $b$ are integers.`,
          marks: 3,
          calculator: false,
        },
        {
          stem: String.raw`Without using a calculator, show that $\dfrac{2}{\sqrt{5} - \sqrt{3}} - \dfrac{2}{\sqrt{5} + \sqrt{3}} = 2\sqrt{3}$.`,
          marks: 3,
          calculator: false,
        },
      ],
    },
    {
      id: "A3-compare-parts",
      name: String.raw`Finding unknowns by comparing rational and irrational parts`,
      tests: String.raw`Expanding and equating the rational parts and the surd parts to form simultaneous equations, e.g. to find the square root of an expression like $19 - 8\sqrt{3}$.`,
      questions: [
        {
          stem: String.raw`Without using a calculator,`,
          parts: [
            { label: "(a)", text: String.raw`find the integers $p$ and $q$, where $p > 0$, such that $(p + q\sqrt{3})^2 = 28 - 10\sqrt{3}$,`, marks: 4 },
            { label: "(b)", text: String.raw`hence write down the value of $\sqrt{28 - 10\sqrt{3}}$ in the form $a + b\sqrt{3}$.`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "A3-solve-surd-coefficients",
      name: String.raw`Solving equations with surd coefficients`,
      tests: String.raw`Solving linear or simultaneous equations whose coefficients are surds, and giving answers in the form $a + b\sqrt{n}$.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, solve the equation $x(2 + \sqrt{3}) = 4 + \sqrt{3}$, giving your answer in the form $a + b\sqrt{3}$, where $a$ and $b$ are integers.`,
          marks: 3,
          calculator: false,
        },
        {
          stem: String.raw`Without using a calculator, solve the simultaneous equations
$$\sqrt{2}\,x + y = 5, \qquad x - \sqrt{2}\,y = 3 - 2\sqrt{2},$$
giving your answers in the form $a + b\sqrt{2}$, where $a$ and $b$ are integers.`,
          marks: 5,
          calculator: false,
        },
      ],
    },
    {
      id: "A3-square-root-equations",
      name: String.raw`Equations with the unknown under a square root`,
      tests: String.raw`Isolating a root, squaring (once or twice), solving the resulting quadratic, and checking each answer in the original equation to reject false roots.`,
      questions: [
        {
          stem: String.raw`Solve the equation $\sqrt{3x + 4} = x - 2$.`,
          marks: 4,
          calculator: false,
        },
        {
          stem: String.raw`Solve the equation $\sqrt{2x + 3} - \sqrt{x + 1} = 1$.`,
          marks: 5,
          calculator: false,
        },
      ],
    },
    {
      id: "A3-surds-geometry",
      name: String.raw`Surds in lengths and areas`,
      tests: String.raw`Using Pythagoras' theorem, area formulae or trigonometric ratios with sides given in surd form, and leaving answers exact.`,
      questions: [
        {
          stem: String.raw`The diagram shows a triangle $PQR$ in which angle $PQR = 90^\circ$, $PQ = (\sqrt{3} + 1)$ cm and $QR = (\sqrt{3} - 1)$ cm. Without using a calculator,`,
          figure: {
            type: "plot",
            x: [-0.8, 3.4], y: [-0.5, 1.25], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [2.732, 0], [0, 0.732]], tone: "accent" }],
            rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.13 }],
            labels: [
              { x: 0, y: 0, text: "Q", pos: "sw", style: "italic" },
              { x: 2.732, y: 0, text: "P", pos: "se", style: "italic" },
              { x: 0, y: 0.732, text: "R", pos: "nw", style: "italic" },
              { x: 1.366, y: 0, text: "(√3 + 1) cm", pos: "s", style: "plain" },
              { x: 0, y: 0.366, text: "(√3 − 1) cm", pos: "w", style: "plain" },
            ],
            alt: "A right-angled triangle PQR with the right angle at Q. The horizontal side PQ is labelled (√3 + 1) cm and the shorter vertical side QR is labelled (√3 − 1) cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`find the exact length of $PR$,`, marks: 2 },
            { label: "(b)", text: String.raw`find the area of the triangle,`, marks: 2 },
            { label: "(c)", text: String.raw`find $\tan \angle QPR$ in the form $a + b\sqrt{3}$, where $a$ and $b$ are integers.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`A rectangle has an area of $(11 + 6\sqrt{3})$ cm$^2$ and a length of $(4 + \sqrt{3})$ cm. Without using a calculator, find`,
          parts: [
            { label: "(a)", text: String.raw`the width of the rectangle in the form $(a + b\sqrt{3})$ cm, where $a$ and $b$ are integers,`, marks: 3 },
            { label: "(b)", text: String.raw`the perimeter of the rectangle.`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
  ],
});
