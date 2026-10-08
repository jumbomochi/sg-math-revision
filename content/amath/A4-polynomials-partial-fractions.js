H2.addTopic({
  id: "A4",
  title: "Polynomials and Partial Fractions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Dividing polynomials, the remainder and factor theorems, factorising and solving cubic equations, sums and differences of cubes, and partial fractions.`,
  syllabus: {
    include: [
      String.raw`Multiplication and division of polynomials`,
      String.raw`Use of remainder and factor theorems, including factorising polynomials and solving cubic equations`,
      String.raw`Use of $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ and $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$`,
      String.raw`Partial fractions with cases where the denominator is no more complicated than $(ax + b)(cx + d)$, $(ax + b)(cx + d)^2$ or $(ax + b)(x^2 + c^2)$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Polynomials and identities`,
      body: String.raw`A **polynomial** in $x$ is a sum of terms $ax^n$ with $n$ a whole number. The **degree** is the highest power, e.g. $2x^3 - x + 5$ has degree 3 (a cubic).

An **identity** ($\equiv$) is true for **all** values of $x$. To find unknown constants in an identity, either
- **compare coefficients** of each power of $x$ on both sides, or
- **substitute** convenient values of $x$ (often ones that make a bracket zero).

Using both methods together is often quickest.`,
    },
    {
      title: String.raw`Long division`,
      body: String.raw`Dividing a polynomial $\mathrm{P}(x)$ by a divisor $\mathrm{D}(x)$ gives a quotient $\mathrm{Q}(x)$ and a remainder $\mathrm{R}(x)$:
$$\mathrm{P}(x) \equiv \mathrm{D}(x)\,\mathrm{Q}(x) + \mathrm{R}(x), \qquad \text{degree of } \mathrm{R} < \text{degree of } \mathrm{D}.$$

- Write both polynomials in descending powers and put in $0x^2$ (etc.) for missing powers.
- Divide the leading terms, multiply back, subtract — repeat until the degree of what is left is less than the degree of the divisor.
- Dividing by a linear divisor leaves a constant remainder; dividing by a quadratic leaves a remainder of the form $px + q$.
- Check: expand $\mathrm{D}(x)\mathrm{Q}(x) + \mathrm{R}(x)$.`,
    },
    {
      title: String.raw`The remainder theorem`,
      body: String.raw`When $\mathrm{P}(x)$ is divided by $(x - a)$, the remainder is $\mathrm{P}(a)$.

When $\mathrm{P}(x)$ is divided by $(ax - b)$, the remainder is $\mathrm{P}\!\left(\dfrac{b}{a}\right)$ — use the value of $x$ that makes the divisor zero.

Signs: dividing by $(x + 2)$ means substituting $x = -2$.

Two pieces of information (two remainders, or a remainder and a factor) give two simultaneous equations for two unknown coefficients.`,
      figure: {
        type: "plot",
        x: [-2.5, 3], y: [-2.5, 5.5], height: 220,
        curves: [{ fn: "x => x*x*x - 3*x + 1", label: "y = P(x)", labelAt: 2.25 }],
        segments: [{ from: [2, 3], to: [2, 0], dashed: true, thin: true, tone: "warn" }],
        points: [{ x: 2, y: 3, label: "(a, P(a))", pos: "se" }],
        xTicks: [{ x: 2, label: "a" }],
        caption: String.raw`The remainder when $\mathrm{P}(x)$ is divided by $(x - a)$ is $\mathrm{P}(a)$, the height of the curve at $x = a$.`,
        alt: "The graph of a cubic y = P(x) with a marked point above x = a. A dashed vertical line from the x-axis up to the point shows the value P(a).",
      },
    },
    {
      title: String.raw`The factor theorem and solving cubic equations`,
      body: String.raw`$(x - a)$ is a factor of $\mathrm{P}(x)$ $\iff$ $\mathrm{P}(a) = 0$. Similarly $(ax - b)$ is a factor $\iff \mathrm{P}\!\left(\frac{b}{a}\right) = 0$.

To solve a cubic $\mathrm{P}(x) = 0$:
1. Find one root by trial: try $x = \pm1, \pm2, \ldots$ (factors of the constant term), then fractions like $\pm\frac{1}{2}$ if needed.
2. Find the quadratic factor by long division or by comparing coefficients: $\mathrm{P}(x) \equiv (x - a)(px^2 + qx + r)$.
3. Solve the quadratic — factorise, or use the quadratic formula **(Given)**.

If the quadratic factor has $b^2 - 4ac < 0$, the cubic has only **one** real root. To "show that" there is only one real root, you must work out this discriminant.`,
      figure: [
        {
          type: "plot",
          x: [-3, 4.2], y: [-10, 13], height: 210,
          curves: [{ fn: "x => (x + 1)*(x - 2)*(x - 3)" }],
          points: [{ x: -1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
          caption: String.raw`$(x + 1)(x - 2)(x - 3) = 0$: three real roots.`,
          alt: "A cubic curve crossing the x-axis three times, at x = −1, 2 and 3.",
        },
        {
          type: "plot",
          x: [-3, 4.2], y: [-10, 13], height: 210,
          curves: [{ fn: "x => (x - 1)*(x*x + x + 2)/2" }],
          points: [{ x: 1, y: 0 }],
          originLabel: "nw",
          caption: String.raw`$(x - 1)(x^2 + x + 2) = 0$: one real root, as $x^2 + x + 2$ has $b^2 - 4ac < 0$.`,
          alt: "A cubic curve that rises steadily and crosses the x-axis only once, at x = 1.",
        },
      ],
    },
    {
      title: String.raw`Sum and difference of two cubes`,
      body: String.raw`Memorise (not on the formula sheet):
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2), \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2).$$

- Write each term as a cube first: $27x^3 + 8 = (3x)^3 + 2^3 = (3x + 2)(9x^2 - 6x + 4)$.
- Take out any common factor first: $3x^3 - 24 = 3(x^3 - 8)$.
- The quadratic factor $a^2 \mp ab + b^2$ never factorises further (its discriminant is negative), so $x^3 = k$ has exactly one real root.
- Also useful: $a^3 + b^3 = (a + b)\left[(a + b)^2 - 3ab\right]$, e.g. to find $x^3 + \dfrac{1}{x^3}$ from $x + \dfrac{1}{x}$.`,
    },
    {
      title: String.raw`Partial fractions: the three forms`,
      body: String.raw`A **proper** fraction (degree of numerator < degree of denominator) can be split as follows. Memorise the forms:

| Denominator | Partial fractions |
| $(ax + b)(cx + d)$ | $\dfrac{A}{ax + b} + \dfrac{B}{cx + d}$ |
| $(ax + b)(cx + d)^2$ | $\dfrac{A}{ax + b} + \dfrac{B}{cx + d} + \dfrac{C}{(cx + d)^2}$ |
| $(ax + b)(x^2 + c^2)$ | $\dfrac{A}{ax + b} + \dfrac{Bx + C}{x^2 + c^2}$ |

Method: multiply through by the full denominator to get an identity in $x$, then
- substitute the values of $x$ that make each linear factor zero, and
- compare coefficients (e.g. of $x^2$, or the constant term) for the constants left over.

Common mistakes: leaving out the $\dfrac{B}{cx + d}$ term for a repeated factor, and using $\dfrac{B}{x^2 + c^2}$ instead of $\dfrac{Bx + C}{x^2 + c^2}$.`,
    },
    {
      title: String.raw`Improper fractions`,
      body: String.raw`If the degree of the numerator is **greater than or equal to** the degree of the denominator, the fraction is **improper**. Divide first:
$$\frac{x^2 + 3x}{(x + 1)(x - 2)} = 1 + \frac{4x + 2}{(x + 1)(x - 2)},$$
then split the proper fraction into partial fractions as usual.

Expand the denominator before dividing: $(x + 1)(x - 2) = x^2 - x - 2$.`,
    },
  ],
  archetypes: [
    {
      id: "A4-division-identities",
      name: String.raw`Long division and identities`,
      tests: String.raw`Dividing a polynomial by a linear or quadratic divisor to find the quotient and remainder, or finding unknown coefficients from $\mathrm{P}(x) \equiv \mathrm{D}(x)\mathrm{Q}(x) + \mathrm{R}(x)$.`,
      questions: [
        {
          stem: String.raw`Find the quotient and the remainder when $2x^3 - 3x^2 + 4x - 5$ is divided by $x^2 - x + 2$.`,
          marks: 4,
        },
        {
          stem: String.raw`When $3x^3 + ax^2 + bx - 4$ is divided by $x^2 + 2$, the quotient is $3x + c$ and the remainder is $x + 2$. Find the values of the constants $a$, $b$ and $c$.`,
          marks: 4,
        },
      ],
    },
    {
      id: "A4-remainder-factor-unknowns",
      name: String.raw`Remainder and factor theorems with unknown coefficients`,
      tests: String.raw`Using $\mathrm{P}(a)$ for a remainder or a factor to form equations for unknown coefficients, then using the completed polynomial (another remainder, or the number of real roots).`,
      questions: [
        {
          stem: String.raw`The polynomial $\mathrm{f}(x) = 2x^3 + ax^2 + bx - 6$, where $a$ and $b$ are constants, has a factor $x - 2$ and leaves a remainder of $-12$ when divided by $x + 1$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and of $b$.`, marks: 4 },
            { label: "(b)", text: String.raw`Using these values, show that the equation $\mathrm{f}(x) = 0$ has only one real root.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The expression $4x^3 + kx^2 - 7x + 3$, where $k$ is a constant, leaves a remainder of $2$ when divided by $2x - 1$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $k$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the remainder when the expression is divided by $x + 2$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A4-solve-cubic",
      name: String.raw`Factorising and solving a cubic equation`,
      tests: String.raw`Finding a first factor with the factor theorem, finding the quadratic factor, and solving; sometimes followed by a "hence" equation obtained by a substitution such as $x = 2y$.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{p}(x) = x^3 - 2x^2 - 5x + 6$.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $x - 3$ is a factor of $\mathrm{p}(x)$.`, marks: 1 },
            { label: "(b)", text: String.raw`Factorise $\mathrm{p}(x)$ completely.`, marks: 2 },
            { label: "(c)", text: String.raw`Hence solve the equation $8y^3 - 8y^2 - 10y + 6 = 0$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Solve the equation $x^3 - 4x^2 + x + 2 = 0$, giving the non-integer roots in the form $\dfrac{a \pm \sqrt{b}}{c}$.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A4-sum-difference-cubes",
      name: String.raw`Sum and difference of two cubes`,
      tests: String.raw`Factorising expressions such as $8x^3 + 27$ or $2x^3 - 54$ with the cube identities, solving related equations, and using $a^3 + b^3 = (a + b)[(a + b)^2 - 3ab]$.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Factorise $8x^3 + 27$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence show that the equation $8x^3 + 27 = 2x + 3$ has only one real root, and state this root.`, marks: 4 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Factorise completely $2x^3 - 54$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given that $x + \dfrac{1}{x} = 3$, use the identity for $a^3 + b^3$ to find the value of $x^3 + \dfrac{1}{x^3}$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "A4-pf-linear-improper",
      name: String.raw`Partial fractions: distinct linear factors and improper fractions`,
      tests: String.raw`Splitting a fraction with denominator $(ax + b)(cx + d)$, including an improper fraction that needs long division first.`,
      questions: [
        {
          stem: String.raw`Express $\dfrac{5x - 1}{(x + 1)(2x - 1)}$ in partial fractions.`,
          marks: 3,
        },
        {
          stem: String.raw`Express $\dfrac{2x^2 + 4x + 3}{(x - 1)(x + 2)}$ in partial fractions.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A4-pf-repeated-linear",
      name: String.raw`Partial fractions: repeated linear factor`,
      tests: String.raw`Using the form $\dfrac{A}{ax + b} + \dfrac{B}{cx + d} + \dfrac{C}{(cx + d)^2}$, finding the constants by substitution and comparing coefficients.`,
      questions: [
        {
          stem: String.raw`Express $\dfrac{5x^2 - 2x + 2}{(2x - 1)(x + 1)^2}$ in partial fractions.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A4-pf-quadratic-factor",
      name: String.raw`Partial fractions: quadratic factor $x^2 + c^2$`,
      tests: String.raw`Using the form $\dfrac{A}{ax + b} + \dfrac{Bx + C}{x^2 + c^2}$, with a substitution for $A$ and comparing coefficients for $B$ and $C$.`,
      questions: [
        {
          stem: String.raw`Express $\dfrac{3x^2 + x + 3}{(x + 1)(x^2 + 4)}$ in partial fractions.`,
          marks: 5,
        },
      ],
    },
  ],
});
