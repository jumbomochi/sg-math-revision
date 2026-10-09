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
      title: String.raw`Repeated roots and the derivative`,
      body: String.raw`- $(x - a)^2$ divides $P(x)$ exactly when $P(a) = 0$ **and** $P'(a) = 0$: if $P = (x - a)^2 Q$ then $P' = (x - a)\big(2Q + (x - a)Q'\big)$.
- More generally $(x - a)^k$ divides $P$ when $P$ and its first $k - 1$ derivatives vanish at $a$. To find a remainder on division by $(x - a)^k$, expand $P$ in powers of $t = x - a$ and keep the terms below $t^k$.
- Example: $x^3 - 3x + 2$ has $P(1) = 0$ and $P'(1) = 3 - 3 = 0$, so $(x - 1)^2$ is a factor; indeed $x^3 - 3x + 2 = (x - 1)^2(x + 2)$.
- The same test works at a non-real root, using complex arithmetic.`,
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
        {
          stem: String.raw`The roots of $2x^2 - 6x + 1 = 0$ are $a$ and $b$. Find $|a - b|$.`,
          difficulty: 1,
          answer: String.raw`$\sqrt7$`,
        },
        {
          stem: String.raw`The three roots of $x^3 - 6x^2 + kx + 6 = 0$ are real and form an arithmetic progression. Find $k$.`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Real numbers $a$, $b$, $c$ are such that all four roots of
$$x^4 + ax^3 + bx^2 + cx + 1 = 0$$
are positive real numbers. Prove that $a + c \le -8$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the product of the roots is $1$, so by Vieta $-c = \sum r_ir_jr_k = \sum \dfrac{1}{r_i}$ and $a + c = -\sum\left(r_i + \dfrac{1}{r_i}\right) \le -8$, as $r + \dfrac1r \ge 2$ for $r > 0$.`,
        },
        {
          stem: String.raw`The polynomial $x^4 - 4x^3 + 2x^2 + bx + c$, where $b$ and $c$ are real, has four real roots (counted with multiplicity). Find the largest possible value of $c$.`,
          difficulty: 4,
          answer: String.raw`$1$. Key idea: the roots have sum $4$ and sum of squares $16 - 4 = 12$, and $c$ is their product. If all roots are positive, AM-GM gives $c \le 1$. If two are negative, pair each with a positive root: a pair with sum $s$ and sum of squares $u$ has product $-\frac{u - s^2}{2} < 0$, so by AM-GM $c \le \frac{1}{16}\left(12 - s^2 - t^2\right)^2 \le 1$ since $s + t = 4$ gives $s^2 + t^2 \ge 8$. Equality for $(x^2 - 2x - 1)^2$.`,
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
        {
          stem: String.raw`Let $a$, $b$, $c$ be the roots of $x^3 - 2x - 3 = 0$. Find $a^3 + b^3 + c^3$.`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Real numbers $a$, $b$, $c$ satisfy
$$a + b + c = 1, \qquad a^2 + b^2 + c^2 = 5, \qquad a^3 + b^3 + c^3 = 4.$$
Find $a^4 + b^4 + c^4$.`,
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`Let $\alpha$ be the largest real root of $x^3 - 4x^2 + 2 = 0$. Prove that $\lfloor \alpha^n \rfloor$ is odd for every integer $n \ge 3$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with the other two roots $\beta \approx 0.79$ and $\gamma \approx -0.66$, Newton's sums $p_n = 4p_{n-1} - 2p_{n-3}$ make $p_n = \alpha^n + \beta^n + \gamma^n$ an even integer for $n \ge 1$, while $0 < \beta^n + \gamma^n < 1$ for $n \ge 3$; hence $\lfloor \alpha^n \rfloor = p_n - 1$.`,
        },
        {
          stem: String.raw`Let $a$, $b$, $c$ be the roots of $x^3 - 2x^2 + 3x - 5 = 0$, and let $s_n = a^n + b^n + c^n$ (an integer for every $n \ge 0$). Prove that for every prime $p$ and every positive integer $n$, the number $s_{pn} - s_n$ is divisible by $p$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $u = a^n$, $v = b^n$, $w = c^n$ are the roots of a monic cubic with integer coefficients (its coefficients are symmetric integer polynomials in $a, b, c$), and for such roots $(u + v + w)^p - (u^p + v^p + w^p)$ is $p$ times an integer, because every multinomial coefficient $\frac{p!}{i!\,j!\,k!}$ with $i, j, k < p$ is divisible by $p$ and the terms group into symmetric polynomials with integer coefficients; so $s_{pn} \equiv s_n^p \equiv s_n \pmod p$ by Fermat.`,
        },
      ],
    },
    {
      id: "A4-remainder-factor",
      name: String.raw`Remainder and factor theorems`,
      tests: String.raw`Finding the remainder of a polynomial division without dividing, often from partial information about $P$. Write $P = DQ + R$ with $\deg R < \deg D$ and substitute the roots of the divisor $D$; for a repeated factor such as $(x^2 + x + 1)^2$ or a power $x^n$, use derivatives or compare coefficients.`,
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
        {
          stem: String.raw`When the polynomial $P(x)$ is divided by $x^2 - x$, the remainder is $1 - x$. Find the remainder when $P(P(P(x)))$ is divided by $x^2 - x$.`,
          difficulty: 1,
          answer: String.raw`$1 - x$`,
        },
        {
          stem: String.raw`A polynomial $P(x)$ with real coefficients leaves remainder $x + 2$ when divided by $x^2 + 1$, and remainder $5$ when divided by $x - 1$. Find the remainder when $P(x)$ is divided by $(x^2 + 1)(x - 1)$.`,
          difficulty: 2,
          answer: String.raw`$x^2 + x + 3$`,
        },
        {
          stem: String.raw`Prove that there are no positive integers $m$ and $n$ for which $x^m + x^n + 1$ is divisible by $(x^2 + x + 1)^2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $\omega$ would be a double root, so $P(\omega) = P'(\omega) = 0$; the first forces $\{\omega^m, \omega^n\} = \{\omega, \omega^2\}$, and then $\omega P'(\omega) = m\omega^m + n\omega^n$ is $m\omega + n\omega^2$ or $m\omega^2 + n\omega$, which is never $0$ for positive $m, n$.`,
        },
        {
          stem: String.raw`Find all integers $a$ with the following property: for every positive integer $n$ there is a polynomial $P$ with integer coefficients such that $P(x)^3 - 1 - ax$ is divisible by $x^n$. Prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Exactly the multiples of $9$. **Proof.** Key idea: writing $P(x) \equiv 1 + Q(x)$ with $Q = c_1x + c_2x^2 + \cdots$ (the constant term must be $1$), the coefficients of $x, x^2, x^3$ in $1 + 3Q + 3Q^2 + Q^3$ force $c_1 = \frac a3$, $c_2 = -c_1^2$, $c_3 = \frac53c_1^3$, so $3 \mid c_1$, i.e. $9 \mid a$; conversely, if $3 \mid c_1$ then $3c_k = -3[x^k]Q^2 - [x^k]Q^3$ shows by induction that every $c_k$ is a multiple of $3$.`,
        },
      ],
    },
    {
      id: "A4-integer-roots",
      name: String.raw`Integer coefficients and rational roots`,
      tests: String.raw`Polynomials with integer coefficients: finding rational or integer roots, or proving that certain values are impossible. Use the rational root theorem, Vieta with integer roots, or the fact that $a - b$ divides $P(a) - P(b)$; harder versions factor out known roots, or compare the growth of $P(n)$ for large $n$.`,
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
        {
          stem: String.raw`For how many integers $k$ does the equation $x^2 + kx + 12 = 0$ have two integer roots?`,
          difficulty: 1,
          choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`],
          answer: String.raw`(E) $6$`,
        },
        {
          stem: String.raw`A polynomial $P$ with integer coefficients satisfies $P(2) = 5$ and $P(5) = 2$, and it has an integer root $r$. Find all possible values of $r$.`,
          difficulty: 2,
          answer: String.raw`$r = 3$ or $r = 7$`,
        },
        {
          stem: String.raw`Prove that there is no polynomial $P$ with integer coefficients such that $P(1) = 3$, $P(3) = 5$ and $P(5) = 3$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $P(x) - 3$ vanishes at $1$ and $5$, so $P(x) - 3 = (x - 1)(x - 5)Q(x)$ where $Q$ has integer coefficients (dividing by a monic integer polynomial); then $x = 3$ gives $2 = -4Q(3)$, impossible.`,
        },
        {
          stem: String.raw`Find all polynomials $P$ with integer coefficients such that, for every positive integer $n$, $P(n) \ne 0$ and $P(n)$ divides $P(2n)$. Prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$P(x) = cx^d$ for a nonzero integer $c$ and an integer $d \ge 0$. **Proof.** Key idea: $\dfrac{P(2n)}{P(n)}$ is an integer and tends to $2^d$ (where $d = \deg P$), so it equals $2^d$ for all large $n$; then $P(2x) = 2^dP(x)$ identically, and comparing coefficients kills every term except $x^d$.`,
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
        {
          stem: String.raw`A polynomial $P$ satisfies $P(x^2 + 1) = x^4 + 4x^2 + 5$ for all real $x$. Find $P(x^2 - 1)$.`,
          difficulty: 1,
          answer: String.raw`$x^4 + 1$`,
        },
        {
          stem: String.raw`A polynomial $P$ of degree at most $3$ satisfies $P(k) = 3^k$ for $k = 0, 1, 2, 3$. Find $P(4)$.`,
          difficulty: 2,
          answer: String.raw`$65$`,
        },
        {
          stem: String.raw`Find all polynomials $P$ with real coefficients such that
$$P(P(x)) = P(x)^2 + 1$$
for all real $x$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$P(x) = x^2 + 1$. **Proof.** Key idea: a non-constant $P$ takes infinitely many values $y$, and $P(y) = y^2 + 1$ for each of them, so $P(y) - y^2 - 1$ has infinitely many roots; a constant $c$ would need $c = c^2 + 1$, which has no real solution.`,
        },
        {
          stem: String.raw`Find all polynomials $P$ with real coefficients such that
$$P(x)\,P(x + 2) = P(x + 1)^2 - 1$$
for all real $x$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$P(x) = x + c$ and $P(x) = -x + c$ for any real constant $c$. **Proof.** Key idea: if $\deg P = n \ge 2$ with leading coefficient $a$, the coefficient of $x^{2n-2}$ in $P(x)P(x + 2) - P(x + 1)^2$ is $-na^2 \ne 0$, so this difference is not constant; constants give $0 \ne -1$, and $P(x) = ax + b$ gives exactly $-a^2 = -1$.`,
        },
      ],
    },
    {
      id: "A4-roots-of-unity",
      name: String.raw`Coefficient sums and roots-of-unity filters`,
      tests: String.raw`Sums of selected coefficients of an expansion, sums of binomial coefficients in steps of $3$, or counting subsets by their sum modulo $3$. Evaluate the polynomial at $1$, $-1$, $\omega$, $\omega^2$ and average; harder versions filter with fifth (or other) roots of unity.`,
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
        {
          stem: String.raw`Find the sum of the coefficients of the odd powers of $x$ in the expansion of $(1 + 2x - x^2)^5$.`,
          difficulty: 1,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`Write $(1 + x + x^2)^6 = a_0 + a_1x + a_2x^2 + \cdots + a_{12}x^{12}$. Find $a_0 + a_3 + a_6 + a_9 + a_{12}$.`,
          difficulty: 2,
          answer: String.raw`$243$`,
        },
        {
          stem: String.raw`How many six-digit numbers have every digit in $\{1, 2, 3, 4, 5\}$ and a digit sum divisible by $3$?`,
          difficulty: 3,
          answer: String.raw`$5209$`,
        },
        {
          stem: String.raw`Let $m$ be a positive integer. Find, in terms of $m$, the number of subsets of $\{1^2, 2^2, 3^2, \ldots, (5m)^2\}$ (including the empty set) whose sum of elements is divisible by $5$.`,
          difficulty: 4,
          answer: String.raw`$\dfrac{32^m + 2(7 + 3\sqrt5)^m + 2(7 - 3\sqrt5)^m}{5}$. Key idea: filter $\prod_{k=1}^{5m}(1 + x^{k^2})$ with the fifth roots of unity $\zeta$; the squares in each block of five are $\equiv 0, 1, 4, 4, 1 \pmod 5$, so a block gives $2(1 + \zeta)^2(1 + \zeta^4)^2 = 2(2 + 2\cos\theta)^2$ with $\theta = 72^\circ$ or $144^\circ$, which is $7 + 3\sqrt5$ or $7 - 3\sqrt5$, each for two of the four $\zeta \ne 1$.`,
        },
      ],
    },
  ],
});
