H2.addTopic({
  id: "N3",
  title: "Diophantine Equations",
  summary: String.raw`Solving equations in integers: linear equations and the coin problem, factoring tricks, bounding, parity and modular contradictions, Pythagorean triples and Pell equations.`,
  concepts: [
    {
      title: String.raw`Linear Diophantine equations`,
      body: String.raw`$ax + by = c$ has integer solutions **iff** $d = \gcd(a, b)$ divides $c$.

- Find one solution $(x_{0}, y_{0})$, by inspection or the Euclidean algorithm. Then **all** solutions are
$$x = x_{0} + \frac{b}{d}t, \qquad y = y_{0} - \frac{a}{d}t, \qquad t \in \mathbb{Z}.$$
- Example: $3x + 5y = 1$ has $(2, -1)$, so all solutions are $x = 2 + 5t$, $y = -1 - 3t$.
- For **positive** solutions, turn $x > 0$ and $y > 0$ into bounds on $t$ and count.`,
      figure: {
        type: "plot",
        x: [-1.4, 8.6],
        y: [-1.6, 5.4],
        equal: true,
        axisLabels: ["x", "y"],
        segments: [
          { from: [-0.6, 4.4], to: [7.5, -1], tone: "accent" },
          { from: [0, 4], to: [3, 4], tone: "muted", dashed: true, arrow: true },
          { from: [3, 4], to: [3, 2], tone: "muted", dashed: true, arrow: true },
          { from: [3, 2], to: [6, 2], tone: "muted", dashed: true, arrow: true },
          { from: [6, 2], to: [6, 0], tone: "muted", dashed: true, arrow: true },
        ],
        points: [
          { x: 0, y: 4, label: "(0, 4)", pos: "w" },
          { x: 3, y: 2, label: "(3, 2)", pos: "sw" },
          { x: 6, y: 0, label: "(6, 0)", pos: "ne" },
        ],
        labels: [
          { x: 1.5, y: 4.1, text: "+3", pos: "n", style: "small" },
          { x: 3.1, y: 3, text: "−2", pos: "e", style: "small" },
          { x: 4.4, y: 0.6, text: "2x + 3y = 12", pos: "sw", style: "small", tone: "accent" },
        ],
        caption: String.raw`The integer points on $2x + 3y = 12$ are spaced by the step $(3, -2)$.`,
        alt: "The line 2x + 3y = 12 on a grid, passing through the integer points (0, 4), (3, 2) and (6, 0). Dashed arrows show that each integer point is reached from the previous one by moving 3 right and 2 down.",
      },
    },
    {
      title: String.raw`The coin problem (Frobenius)`,
      body: String.raw`For coprime positive integers $a, b$:

- The largest integer **not** of the form $ax + by$ with $x, y \ge 0$ is $ab - a - b$.
- Exactly $\frac{(a - 1)(b - 1)}{2}$ positive integers are not of this form.
- Example: with $3$ and $5$, the amounts $1, 2, 4, 7$ cannot be made ($4$ of them, the largest $7 = 15 - 3 - 5$); every amount from $8$ on can.
- Why every large $n$ works: among $n, n - b, n - 2b, \ldots, n - (a - 1)b$ one is a multiple of $a$, and it is non-negative when $n$ is large enough.`,
    },
    {
      title: String.raw`Factoring: SFFT and difference of squares`,
      body: String.raw`Aim for **(product of integer factors) = constant**, then list the factor pairs (including negative ones).

- **Simon's favourite factoring trick**: $xy + ax + by = c \iff (x + b)(y + a) = c + ab$. Example: $xy - 2x - 3y = 0 \iff (x - 3)(y - 2) = 6$.
- Clear denominators first: equations with $\frac{1}{x}$, $\frac{1}{y}$ usually become SFFT.
- $x^{2} - y^{2} = N$: write $(x - y)(x + y) = N$; the two factors have the **same parity**. Example: $x^{2} - y^{2} = 15$ gives $1 \times 15$ and $3 \times 5$, so $(x, y) = (8, 7)$ or $(4, 1)$ in positive integers.
- Complete the square to reach a difference of squares: $x^{2} + 6x - y^{2} = (x + 3)^{2} - y^{2} - 9$.`,
    },
    {
      title: String.raw`Bounding`,
      body: String.raw`- For a **symmetric** equation, assume $x \le y \le z$. Then the smallest variable is bounded, leaving finitely many cases.
- Example: $xyz = x + y + z$ with $1 \le x \le y \le z$. Then $xyz \le 3z$, so $xy \le 3$, giving $(x, y) \in \{(1, 1), (1, 2), (1, 3)\}$ and the only solution $(1, 2, 3)$.
- For $\frac{1}{x} + \frac{1}{y} + \cdots$, the smallest variable gives the largest term: $\frac{1}{x} \ge \frac{\text{total}}{\text{number of terms}}$.
- Fast-growing terms (powers, factorials) quickly outgrow slow ones: compare sizes to show only small cases are possible.`,
    },
    {
      title: String.raw`Treat it as a quadratic`,
      body: String.raw`- An equation quadratic in $x$ has integer solutions only if its **discriminant** is a perfect square, and real solutions only if the discriminant is $\ge 0$.
- Example: $x^{2} - xy + y^{2} = 3$ as a quadratic in $x$ has discriminant $y^{2} - 4(y^{2} - 3) = 12 - 3y^{2} \ge 0$, so $|y| \le 2$, leaving five cases to check.`,
    },
    {
      title: String.raw`Parity, modular contradictions and descent`,
      body: String.raw`- **Parity** first: odd $\pm$ odd is even, a square is $\equiv 0$ or $1 \pmod 4$, an odd square is $\equiv 1 \pmod 8$.
- Pick a modulus in which the terms take few values (see the residue table in Modular Arithmetic). Example: $x^{2} + y^{2}$ is $\equiv 0, 1, 2, 4$ or $5 \pmod 8$, so $x^{2} + y^{2} = 8z + 6$ has no solutions.
- For exponential equations like $a^{x} - b^{y} = c$, try moduli in which the powers cycle quickly ($3, 4, 7, 8, 9, 13, 16$), possibly two in a row: the first gives a congruence on an exponent, the second uses it.
- **Infinite descent**: in $x^{2} + y^{2} = 3z^{2}$, looking mod $3$ forces $3 \mid x$ and $3 \mid y$, then $3 \mid z$, giving a smaller solution $\left(\frac{x}{3}, \frac{y}{3}, \frac{z}{3}\right)$. So the only solution is $(0, 0, 0)$.`,
    },
    {
      title: String.raw`Pythagorean triples`,
      body: String.raw`All **primitive** solutions of $a^{2} + b^{2} = c^{2}$ (with $b$ even) are
$$a = m^{2} - n^{2}, \quad b = 2mn, \quad c = m^{2} + n^{2},$$
with $m > n > 0$ coprime and of opposite parity. All other triples are multiples $k(a, b, c)$.

- Example: $m = 4$, $n = 1$ gives $(15, 8, 17)$.
- In every triple, one leg is a multiple of $3$, one leg is a multiple of $4$, and one side is a multiple of $5$.
- A given leg $\ell$: $\ell^{2} = c^{2} - a^{2} = (c - a)(c + a)$, so factor $\ell^{2}$ into two factors of the same parity.`,
    },
    {
      title: String.raw`Pell equations`,
      body: String.raw`For a positive integer $D$ that is not a perfect square, $x^{2} - Dy^{2} = 1$ has infinitely many positive solutions.

- Find the smallest (**fundamental**) solution $(x_{1}, y_{1})$ by trying $y = 1, 2, 3, \ldots$ until $Dy^{2} + 1$ is a square. All positive solutions come from $x + y\sqrt{D} = (x_{1} + y_{1}\sqrt{D})^{k}$.
- Example: $D = 2$ has $(3, 2)$; then $(3 + 2\sqrt{2})^{2} = 17 + 12\sqrt{2}$ gives $(17, 12)$, and the next is $(99, 70)$.
- Many problems become Pell-type after completing the square, e.g. "$n + 1$ and $3n + 1$ are both squares" becomes $b^{2} - 3a^{2} = -2$. To show **infinitely many** solutions, it is enough to find one and a rule (a linear map) that turns any solution into a larger one.`,
    },
  ],
  archetypes: [
    {
      id: "N3-linear",
      name: String.raw`Linear equations and the coin problem`,
      tests: String.raw`Equations $ax + by = c$ in positive or non-negative integers: count the solutions, or decide which totals can be made from two coin or stamp values.`,
      questions: [
        {
          stem: String.raw`How many ordered pairs of positive integers $(x, y)$ satisfy $7x + 4y = 150$?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`A post office sells only $9$-cent stamps and $14$-cent stamps. How many positive whole-number amounts of cents **cannot** be made exactly with these stamps?`,
          difficulty: 2,
          answer: String.raw`$52$`,
        },
        {
          stem: String.raw`Prove that every integer $n \ge 60$ can be written as $n = 7a + 11b$ with non-negative integers $a$ and $b$, but $59$ cannot.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: for $n \ge 60$ choose $b \in \{0, 1, \ldots, 6\}$ with $11b \equiv n \pmod 7$; then $n - 11b \ge -6$ is a multiple of $7$, hence $\ge 0$. For $59$, none of $59 - 11b$ ($b = 0, \ldots, 5$) is a multiple of $7$.`,
        },
      ],
    },
    {
      id: "N3-factoring",
      name: String.raw`Factoring into a product`,
      tests: String.raw`Equations with $xy$, reciprocals or a difference of squares, where rearranging gives (factor) × (factor) = constant. Recognise by mixed terms that "nearly" factorise.`,
      questions: [
        {
          stem: String.raw`How many ordered pairs of positive integers $(x, y)$ satisfy $xy = 4x + 5y$?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`How many ordered pairs of positive integers $(x, y)$ satisfy $\dfrac{1}{x} - \dfrac{1}{y} = \dfrac{1}{20}$?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(x, y)$ such that $x^{2} - 3xy + 2y^{2} + x - y = 13$.`,
          difficulty: 3,
          answer: String.raw`$(x, y) = (12, 13)$ and $(26, 13)$`,
        },
      ],
    },
    {
      id: "N3-bounding",
      name: String.raw`Bounding the variables`,
      tests: String.raw`Symmetric equations, sums of reciprocals or quadratic forms where ordering the variables or comparing sizes leaves only a few cases to check.`,
      questions: [
        {
          stem: String.raw`How many ordered pairs of positive integers $(x, y)$ satisfy $x^{2} + 3y^{2} = 84$?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`How many triples of positive integers $(x, y, z)$ with $x \le y \le z$ satisfy
$$\frac{1}{x} + \frac{1}{y} + \frac{1}{z} = \frac{5}{6}\ ?$$`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Find all triples of positive integers $(a, b, c)$ with $a \le b \le c$ such that
$$\left(1 + \frac{1}{a}\right)\left(1 + \frac{1}{b}\right)\left(1 + \frac{1}{c}\right) = 3,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(1, 3, 8)$, $(1, 4, 5)$ and $(2, 2, 3)$. **Proof.** Key idea: $\left(1 + \frac{1}{a}\right)^{3} \ge 3$ forces $a \le 2$; then $a = 1$ gives $(b - 2)(c - 2) = 6$ and $a = 2$ gives $(b - 1)(c - 1) = 2$.`,
        },
      ],
    },
    {
      id: "N3-modular-contradictions",
      name: String.raw`Parity and modular contradictions`,
      tests: String.raw`Showing an equation has no solutions, or pinning down the few that exist, by reducing modulo a suitable number. Typical for sums of squares or cubes and for equations with powers such as $5^{x}$ and $3^{y}$.`,
      questions: [
        {
          stem: String.raw`Exactly one of these equations has a solution in integers $x, y$. Which one?`,
          difficulty: 1,
          choices: [String.raw`$x^{2} + y^{2} = 2027$`, String.raw`$x^{2} - y^{2} = 2026$`, String.raw`$x^{2} + y^{2} = 2029$`, String.raw`$x^{2} + 4y^{2} = 2026$`, String.raw`$x^{2} - 3y^{2} = 2$`],
          answer: String.raw`(C) $x^{2} + y^{2} = 2029$`,
        },
        {
          stem: String.raw`Prove that the equation $x^{2} - 2y^{2} = 5$ has no integer solutions.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: work modulo $8$: $x$ must be odd, so $x^{2} \equiv 1$, while $2y^{2} \equiv 0$ or $2$; hence $x^{2} - 2y^{2} \equiv 1$ or $7 \pmod 8$, never $5$.`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(x, y)$ such that $5^{x} - 3^{y} = 2$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(x, y) = (1, 1)$. **Proof.** Key idea: if $y \ge 2$, then mod $9$ forces $x \equiv 5 \pmod 6$, then mod $7$ forces $6 \mid y$, so $y$ is even; but then mod $4$ the left side is $\equiv 1 - 1 = 0$, not $2$.`,
        },
      ],
    },
    {
      id: "N3-pythagorean",
      name: String.raw`Pythagorean triples`,
      tests: String.raw`Right-angled triangles with integer sides: given a leg or the hypotenuse, or a condition linking area and perimeter. Use the parametrisation or factor a difference of squares.`,
      questions: [
        {
          stem: String.raw`How many non-congruent right-angled triangles with integer side lengths have a leg of length $24$?`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`How many non-congruent right-angled triangles with integer side lengths have hypotenuse $85$?`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`How many non-congruent right-angled triangles with integer side lengths have area numerically equal to $3$ times their perimeter?`,
          difficulty: 3,
          answer: String.raw`$6$`,
        },
      ],
    },
    {
      id: "N3-pell",
      name: String.raw`Pell-type equations`,
      tests: String.raw`Equations of the form $x^{2} - Dy^{2} = k$, often hidden: "a triangular number that is a square", "two consecutive numbers whose squares add to a square". Find the smallest solution and a rule that generates more.`,
      questions: [
        {
          stem: String.raw`Find the solution in positive integers of $x^{2} - 7y^{2} = 1$ with $y$ as small as possible.`,
          difficulty: 1,
          answer: String.raw`$(x, y) = (8, 3)$`,
        },
        {
          stem: String.raw`Find the two smallest integers $n > 1$ for which $1 + 2 + 3 + \cdots + n$ is a perfect square.`,
          difficulty: 2,
          answer: String.raw`$n = 8$ and $n = 49$`,
        },
        {
          stem: String.raw`Prove that there are infinitely many positive integers $n$ such that $n^{2} + (n + 1)^{2}$ is a perfect square.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: if $n^{2} + (n + 1)^{2} = m^{2}$, then $n' = 3n + 2m + 1$, $m' = 4n + 3m + 2$ is again a solution (expand to check), and it is larger; start from $3^{2} + 4^{2} = 5^{2}$.`,
        },
      ],
    },
  ],
});
