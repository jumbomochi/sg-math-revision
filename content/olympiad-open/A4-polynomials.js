H2.addTopic({
  id: "A4",
  title: "Polynomials",
  summary: String.raw`Vieta's formulas and symmetric expressions in the roots, Newton's sums, the remainder and factor theorems, integer and rational roots, identities from counting roots, and coefficient sums with roots of unity.`,
  concepts: [
    {
      title: String.raw`Vieta's formulas`,
      body: String.raw`If $P(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_0$ has roots $r_1, \ldots, r_n$ (complex, counted with multiplicity), then $P(x) = a_n(x - r_1)\cdots(x - r_n)$. Comparing coefficients:

- Quadratic $ax^2 + bx + c$: $\ \alpha + \beta = -\dfrac{b}{a}$, $\ \alpha\beta = \dfrac{c}{a}$.
- Cubic $ax^3 + bx^2 + cx + d$: $\ \alpha + \beta + \gamma = -\dfrac{b}{a}$, $\ \alpha\beta + \beta\gamma + \gamma\alpha = \dfrac{c}{a}$, $\ \alpha\beta\gamma = -\dfrac{d}{a}$.
- In general the signs alternate: $e_1 = \sum r_i = -\dfrac{a_{n-1}}{a_n}$, $e_2 = \sum_{i<j} r_i r_j = \dfrac{a_{n-2}}{a_n}$, ..., $r_1 r_2 \cdots r_n = (-1)^n\dfrac{a_0}{a_n}$.
- Example: $x^3 - 6x^2 + 11x - 6$ has roots $1, 2, 3$, and indeed $1 + 2 + 3 = 6$, $2 + 3 + 6 = 11$, $1 \cdot 2 \cdot 3 = 6$.`,
    },
    {
      title: String.raw`Symmetric expressions in the roots`,
      body: String.raw`Any expression that is unchanged when the roots are permuted can be written in terms of $e_1, e_2, e_3, \ldots$, so it can be found **without solving** the equation.

- $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$, and for three roots $\sum \alpha^2 = e_1^2 - 2e_2$.
- $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$; $\ \dfrac{1}{\alpha} + \dfrac{1}{\beta} = \dfrac{\alpha + \beta}{\alpha\beta}$.
- $(\alpha + \beta)(\beta + \gamma)(\gamma + \alpha) = e_1 e_2 - e_3$ (since $\alpha + \beta = e_1 - \gamma$).
- Example: if $\alpha + \beta = 5$ and $\alpha\beta = 2$, then $\alpha^2 + \beta^2 = 25 - 4 = 21$.
- For an awkward expression in one root, use the equation to simplify it first, or find the polynomial whose roots are the new quantities (see "New polynomials from old roots").`,
    },
    {
      title: String.raw`Newton's sums: powers of the roots`,
      body: String.raw`Let $p_k = \alpha^k + \beta^k + \gamma^k$ for the roots of $x^3 = e_1 x^2 - e_2 x + e_3$. Multiply the equation by $x^{k-3}$, substitute each root and add:
$$p_k = e_1 p_{k-1} - e_2 p_{k-2} + e_3 p_{k-3} \quad (k \ge 3),$$
starting from $p_0 = 3$, $p_1 = e_1$, $p_2 = e_1^2 - 2e_2$. The same works for any degree.

- Example: the roots of $x^2 = x + 1$ satisfy $p_k = p_{k-1} + p_{k-2}$ with $p_0 = 2$, $p_1 = 1$, giving $2, 1, 3, 4, 7, 11, 18, \ldots$ (the Lucas numbers).
- Integer coefficients and leading coefficient $1$ make every $p_k$ an integer, even when the roots are irrational or complex.`,
    },
    {
      title: String.raw`Remainder and factor theorems`,
      body: String.raw`- The remainder when $P(x)$ is divided by $x - a$ is $P(a)$; so $x - a$ is a factor exactly when $P(a) = 0$.
- Dividing by a quadratic leaves a remainder $px + q$; dividing by a cubic leaves a remainder of degree at most $2$. Write $P(x) = D(x)Q(x) + R(x)$ and substitute the roots of $D$ to kill the $D(x)Q(x)$ term.
- Example: dividing $x^5$ by $x^2 - 1$: if $x^5 = (x^2 - 1)Q(x) + px + q$, then $x = 1$ gives $p + q = 1$ and $x = -1$ gives $-p + q = -1$, so the remainder is $x$.
- Reduce high powers using the divisor: modulo $x^2 + 1$ we have $x^2 \equiv -1$, and modulo $x^2 + x + 1$ we have $x^3 \equiv 1$.`,
    },
    {
      title: String.raw`Integer coefficients and rational roots`,
      body: String.raw`- **Rational root theorem**: if $P$ has integer coefficients and $\dfrac{p}{q}$ (in lowest terms) is a root, then $p$ divides the constant term and $q$ divides the leading coefficient. Example: the only candidates for $3x^3 - x^2 - 3x + 1$ are $\pm 1, \pm\tfrac13$; testing shows the roots are $1, -1, \tfrac13$.
- A monic polynomial with integer coefficients can only have integer rational roots, and they divide the constant term.
- **Difference rule**: if $P$ has integer coefficients and $a \ne b$ are integers, then $a - b$ divides $P(a) - P(b)$, because $a - b$ divides $a^k - b^k$ for every $k$. Example: $P(9) - P(4)$ is always a multiple of $5$.`,
    },
    {
      title: String.raw`Counting roots and polynomial identities`,
      body: String.raw`- A nonzero polynomial of degree $n$ has **at most $n$ roots**. So two polynomials of degree at most $n$ that agree at $n + 1$ points are identical, and a polynomial with infinitely many roots is the zero polynomial.
- **Subtract to create roots**: if $P(k) = k^2$ for $k = 1, 2, 3$, then $P(x) - x^2$ has roots $1, 2, 3$, so $P(x) - x^2 = (x - 1)(x - 2)(x - 3)Q(x)$. The degree of $P$ then tells you what $Q$ can be.
- To solve an equation for an unknown polynomial: substitute values that make one side vanish to find roots, factor them out, and compare degrees or leading coefficients.`,
    },
    {
      title: String.raw`New polynomials from old roots`,
      body: String.raw`If $P(x)$ has roots $r_i$, then:

- $P(x - k)$ has roots $r_i + k$, and $P(x/k)$ (times $k^n$) has roots $k r_i$;
- $x^n P(1/x)$, which is $P$ with its coefficients **reversed**, has roots $\dfrac{1}{r_i}$;
- for roots $f(r_i)$ in general, set $y = f(x)$, eliminate $x$ using $P(x) = 0$, and read off Vieta for the equation in $y$.
- Example: $x^2 - 5x + 6$ has roots $2, 3$, so $6x^2 - 5x + 1$ has roots $\tfrac12, \tfrac13$.`,
    },
    {
      title: String.raw`Coefficient sums and roots of unity`,
      body: String.raw`- $P(1)$ is the sum of the coefficients; $P(-1)$ is the alternating sum; $\dfrac{P(1) + P(-1)}{2}$ is the sum of the coefficients of the **even** powers.
- Let $\omega$ be a non-real cube root of unity: $\omega^3 = 1$ and $1 + \omega + \omega^2 = 0$. Then $1 + \omega^k + \omega^{2k}$ is $3$ when $3 \mid k$ and $0$ otherwise, so
$$\text{(sum of coefficients of } x^0, x^3, x^6, \ldots) = \frac{P(1) + P(\omega) + P(\omega^2)}{3}.$$
- Useful: $1 + \omega = -\omega^2$ and $(1 + \omega)(1 + \omega^2) = 1$.
- Example: $(1 + x)^4 = 1 + 4x + 6x^2 + 4x^3 + x^4$; the coefficients of $x^0, x^3$ sum to $5$, and $\dfrac{2^4 + \omega^2 + \omega}{3} = \dfrac{16 - 1}{3} = 5$.
- The same filter counts subsets whose sum is a multiple of $3$: use the generating function $\prod (1 + x^{a})$.`,
      figure: {
        type: "plot",
        x: [-1.7, 1.7],
        y: [-1.35, 1.35],
        equal: true,
        axisLabels: ["Re", "Im"],
        originLabel: false,
        circles: [{ c: [0, 0], r: 1, tone: "muted" }],
        polygons: [{ points: [[1, 0], [-0.5, 0.866], [-0.5, -0.866]], tone: "accent", dashed: true }],
        points: [
          { x: 1, y: 0, label: "1", pos: "se" },
          { x: -0.5, y: 0.866, label: "ω", pos: "nw" },
          { x: -0.5, y: -0.866, label: "ω²", pos: "sw" },
        ],
        caption: String.raw`The cube roots of unity are equally spaced on the unit circle, so $1 + \omega + \omega^2 = 0$.`,
        alt: "Unit circle in the complex plane with the points 1, omega and omega squared at angles 0, 120 and 240 degrees, joined by a dashed equilateral triangle.",
      },
    },
  ],
  archetypes: [
    {
      id: "A4-vieta-symmetric",
      name: String.raw`Vieta and symmetric expressions in the roots`,
      tests: String.raw`An expression in the roots of a given polynomial is asked for, or a claim about the roots must be proved, without solving the equation. Rewrite the expression through the sum, pair-sum and product of the roots.`,
      questions: [
        {
          stem: String.raw`The roots of $x^2 - 7x + 3 = 0$ are $a$ and $b$. Find $a^2 + b^2$.`,
          difficulty: 1,
          answer: String.raw`$43$`,
        },
        {
          stem: String.raw`Let $a$ and $b$ be real numbers. Prove that the equation $x^4 - 4x^3 + 7x^2 + ax + b = 0$ cannot have four real roots (counted with multiplicity).`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: by Vieta the four roots would have sum $4$ and sum of squares $4^2 - 2 \cdot 7 = 2$, contradicting $(r_1 + r_2 + r_3 + r_4)^2 \le 4(r_1^2 + r_2^2 + r_3^2 + r_4^2)$ for real numbers.`,
        },
        {
          stem: String.raw`Let $a$, $b$, $c$ be the roots of $x^3 - 2x^2 - 3x + 5 = 0$. Find
$$\frac{1}{a^2 - 2a} + \frac{1}{b^2 - 2b} + \frac{1}{c^2 - 2c}.$$`,
          difficulty: 3,
          answer: String.raw`$\dfrac{1}{5}$`,
        },
      ],
    },
    {
      id: "A4-power-sums",
      name: String.raw`Power sums of roots (Newton's sums)`,
      tests: String.raw`Finding or reasoning about $a^k + b^k + c^k$ for roots of a polynomial, or for numbers given by their sum, sum of squares and product. Set up the recurrence $p_k = e_1 p_{k-1} - e_2 p_{k-2} + e_3 p_{k-3}$.`,
      questions: [
        {
          stem: String.raw`The numbers $a$ and $b$ satisfy $a + b = 3$ and $ab = 1$. Find $a^4 + b^4$.`,
          difficulty: 1,
          answer: String.raw`$47$`,
        },
        {
          stem: String.raw`Let $a$, $b$, $c$ be the three (complex) roots of $x^3 - x^2 - x - 1 = 0$. Prove that $a^n + b^n + c^n$ is an odd positive integer for every positive integer $n$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: Newton's sums give $p_n = p_{n-1} + p_{n-2} + p_{n-3}$ with $p_0 = 3$, $p_1 = 1$, $p_2 = 3$, so by induction each $p_n$ is a sum of three odd positive integers.`,
        },
        {
          stem: String.raw`Real numbers $a$, $b$, $c$ satisfy $a + b + c = 0$, $a^2 + b^2 + c^2 = 10$ and $abc = 2$. Find $a^7 + b^7 + c^7$.`,
          difficulty: 3,
          answer: String.raw`$350$`,
        },
      ],
    },
    {
      id: "A4-remainder-factor",
      name: String.raw`Remainder and factor theorems`,
      tests: String.raw`Finding the remainder of a polynomial division without dividing, often from partial information about $P$. Write $P = DQ + R$ with $\deg R < \deg D$ and substitute the roots of the divisor $D$.`,
      questions: [
        {
          stem: String.raw`Find the remainder when $x^{2026} + 3x^5 - 4$ is divided by $x + 1$.`,
          difficulty: 1,
          answer: String.raw`$-6$`,
        },
        {
          stem: String.raw`A polynomial $P(x)$ leaves remainder $5$ when divided by $x - 2$ and remainder $-1$ when divided by $x + 1$. Find the remainder when $P(x)$ is divided by $x^2 - x - 2$.`,
          difficulty: 2,
          answer: String.raw`$2x + 1$`,
        },
        {
          stem: String.raw`A polynomial $P(x)$ leaves remainder $2x + 3$ when divided by $(x - 1)^2$, and remainder $8$ when divided by $x + 2$. Find the remainder when $P(x)$ is divided by $(x - 1)^2(x + 2)$.`,
          difficulty: 3,
          answer: String.raw`$x^2 + 4$`,
        },
      ],
    },
    {
      id: "A4-integer-roots",
      name: String.raw`Integer coefficients and rational roots`,
      tests: String.raw`Polynomials with integer coefficients: finding rational or integer roots, or proving that certain values are impossible. Use the rational root theorem, Vieta with integer roots, or the fact that $a - b$ divides $P(a) - P(b)$.`,
      questions: [
        {
          stem: String.raw`Which of the following is a root of $2x^3 - x^2 - 13x - 6 = 0$?`,
          difficulty: 1,
          choices: [String.raw`$\tfrac12$`, String.raw`$-\tfrac12$`, String.raw`$\tfrac32$`, String.raw`$2$`, String.raw`$-3$`],
          answer: String.raw`(B) $-\tfrac12$`,
        },
        {
          stem: String.raw`Prove that there is no polynomial $P$ with integer coefficients such that $P(2) = 7$, $P(5) = 10$ and $P(7) = 14$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: for integer coefficients, $7 - 2 = 5$ must divide $P(7) - P(2) = 7$, which is false.`,
        },
        {
          stem: String.raw`Find all integers $k$ for which all three roots of $x^3 - 13x + k = 0$ are integers.`,
          difficulty: 3,
          answer: String.raw`$k = 12$ or $k = -12$`,
        },
      ],
    },
    {
      id: "A4-identities",
      name: String.raw`Polynomial identities: values at many points`,
      tests: String.raw`A polynomial is known at several points, or satisfies an identity for all $x$. Subtract a simple polynomial to create known roots, factor them out, and compare degrees and leading coefficients.`,
      questions: [
        {
          stem: String.raw`A quadratic polynomial $P$ satisfies $P(1) = 1$, $P(2) = 4$ and $P(3) = 11$. Find $P(4)$.`,
          difficulty: 1,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`$P(x)$ is a polynomial of degree $4$ with leading coefficient $1$, and $P(1) = 3$, $P(2) = 5$, $P(3) = 7$, $P(4) = 9$. Find $P(5)$.`,
          difficulty: 2,
          answer: String.raw`$35$`,
        },
        {
          stem: String.raw`Find all polynomials $P$ with real coefficients such that
$$(x - 1)\,P(x + 1) = (x + 2)\,P(x)$$
for all real $x$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$P(x) = c(x^3 - x)$ for any real constant $c$. **Proof.** Key idea: $x = 1, -2, 0$ give $P(1) = P(-1) = P(0) = 0$; writing $P(x) = x(x - 1)(x + 1)Q(x)$ leaves $Q(x + 1) = Q(x)$, so $Q - Q(0)$ has infinitely many roots and $Q$ is constant.`,
        },
      ],
    },
    {
      id: "A4-roots-of-unity",
      name: String.raw`Coefficient sums and roots-of-unity filters`,
      tests: String.raw`Sums of selected coefficients of an expansion, sums of binomial coefficients in steps of $3$, or counting subsets by their sum modulo $3$. Evaluate the polynomial at $1$, $-1$, $\omega$, $\omega^2$ and average.`,
      questions: [
        {
          stem: String.raw`Find the sum of the coefficients of the even powers of $x$ (including the constant term) in the expansion of $(2x - 1)^6$.`,
          difficulty: 1,
          answer: String.raw`$365$`,
        },
        {
          stem: String.raw`Find $\dbinom{12}{0} + \dbinom{12}{3} + \dbinom{12}{6} + \dbinom{12}{9} + \dbinom{12}{12}$.`,
          difficulty: 2,
          answer: String.raw`$1366$`,
        },
        {
          stem: String.raw`How many subsets of $\{1, 2, 3, \ldots, 10\}$ (including the empty set) have a sum of elements that is divisible by $3$?`,
          difficulty: 3,
          answer: String.raw`$344$`,
        },
      ],
    },
  ],
});
