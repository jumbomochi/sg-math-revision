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
    {
      title: String.raw`Factor out the greatest common divisor`,
      body: String.raw`- For an equation that is homogeneous apart from one term, write $x = da$, $y = db$ with $d = \gcd(x, y)$ and $\gcd(a, b) = 1$. Then use facts such as $\gcd(a, a + b) = 1$ and $\gcd(a + b, ab) = 1$ to show that some factor must be tiny.
- Example: $x^{2} + xy = y^{3}$ becomes $a(a + b) = d\,b^{3}$. Since $b$ is coprime to $a$ and to $a + b$, we need $b = 1$, so $d = a(a + 1)$ and $(x, y) = (a^{2}(a + 1), a(a + 1))$ for every $a \ge 1$.`,
    },
    {
      title: String.raw`Equations with factorials`,
      body: String.raw`- If $m < n$ then $m! \mid n!$, so $m! + n! = m!\left(1 + \frac{n!}{m!}\right)$: pull out the smaller factorial.
- A prime $p \le n$ divides $n!$. A prime that divides one side but cannot divide the other (for example a prime factor of $m - 1$, which does not divide $m$) gives strong restrictions.
- Compare exponents of a prime: $v_{p}(a + b) = \min(v_{p}(a), v_{p}(b))$ when $v_{p}(a) \ne v_{p}(b)$. Example: $v_{2}(3! + 4!) = v_{2}(6 + 24) = \min(1, 3) = 1$.
- Factorials grow faster than powers with a fixed base, so large cases are often ruled out by size.`,
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
        {
          stem: String.raw`How many pairs of integers $(x, y)$ with $-100 \le x \le 100$ satisfy $7x - 5y = 3$?`,
          difficulty: 1,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`A bag contains $30$ coins, each worth $2$, $5$ or $10$ cents, with at least one coin of each kind. Their total value is $150$ cents. How many possibilities are there for the numbers of $2$-cent, $5$-cent and $10$-cent coins?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`How many positive integers can be written as $5a + 8b$, with $a$ and $b$ non-negative integers, in **exactly one** way?`,
          difficulty: 3,
          answer: String.raw`$39$`,
        },
        {
          stem: String.raw`Let $a$ and $b$ be coprime **odd** integers greater than $1$. Prove that, among the positive integers that can **not** be written as $ax + by$ with $x$ and $y$ non-negative integers, exactly half are even.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the non-representable integers are the exponents of the polynomial $\frac{1}{1 - t} - \frac{1 - t^{ab}}{(1 - t^{a})(1 - t^{b})}$, and since $a$, $b$, $ab$ are odd, putting $t = -1$ gives $\frac{1}{2} - \frac{2}{2 \cdot 2} = 0$, i.e. as many even as odd ones.`,
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
        {
          stem: String.raw`How many pairs of positive integers $(x, y)$ satisfy $x^{2} - y^{2} = 2024$?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Find the sum of all positive integers $n$ for which $n^{2} + 2n + 2026$ is a perfect square.`,
          difficulty: 2,
          answer: String.raw`$1761$`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(x, y)$ such that $x^{2} + 5 \cdot 3^{x} = y^{2}$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(x, y) = (1, 4)$, $(2, 7)$ and $(3, 12)$. **Proof.** Key idea: put $u = y - x < v = y + x$, so $uv = 5 \cdot 3^{x}$ and $v - u = 2x$; if $u$ has fewer factors $3$ than $v$, then $3^{v_{3}(u)} \mid x$ gives $u \le 5x$ and $5 \cdot 3^{x} = u(u + 2x) \le 35x^{2}$, so $x \le 4$; otherwise $u = 3^{b+1}$, $v = 5 \cdot 3^{b}$ and $x = 3^{b} = 2b + 1$.`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(x, y)$ such that $x^{2} + y^{2} = (x - y)^{3}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$(x, y) = \big(a(2a^{2} - 2a + 1),\ (a - 1)(2a^{2} - 2a + 1)\big)$ for $a = 2, 3, 4, \ldots$ **Proof.** Key idea: with $d = \gcd(x, y)$, $x = da$, $y = db$, the equation becomes $a^{2} + b^{2} = d(a - b)^{3}$; as $\gcd(a - b, a^{2} + b^{2}) \mid 2$, this forces $a - b \mid 2$, and $a - b = 2$ fails modulo $8$, so $b = a - 1$ and $d = a^{2} + (a - 1)^{2}$.`,
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
        {
          stem: String.raw`How many triples of positive integers $(a, b, c)$ with $a \le b \le c$ satisfy $abc = 3(a + b + c)$?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find all triples of positive integers $(x, y, z)$ with $x \le y \le z$ such that $2(xy + yz + zx) = xyz + 1$.`,
          difficulty: 2,
          answer: String.raw`$(3, 7, 41)$ and $(3, 11, 13)$`,
        },
        {
          stem: String.raw`Find all pairs of integers $(x, y)$ (positive, negative or zero) such that $x^{2} - xy + y^{2} = x + y + 11$.`,
          difficulty: 3,
          answer: String.raw`$(3, 5)$, $(5, 3)$, $(3, -1)$, $(-1, 3)$, $(-1, -3)$ and $(-3, -1)$`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(m, n)$ such that $m! + n! = m^{n} + 1$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$(m, n) = (1, 1)$, $(2, 1)$ and $(5, 3)$. **Proof.** Key idea: for $n \ge 2$, reducing modulo primes $p \le n$ shows $m > n$ and every prime factor of $m$ exceeds $n$, so $n! \mid m^{n} + 1$; even $n$ fail (modulo $4$, or directly for $n = 2$), and odd $n$ give $2^{v_{2}(n!)} \mid m + 1$, making $m$ far too large for $m! < m^{n}$ unless $n \le 5$, which are checked by hand.`,
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
        {
          stem: String.raw`How many integers $n$ with $1 \le n \le 100$ can be written as $x^{2} - y^{2}$ with $x$ and $y$ integers?`,
          difficulty: 1,
          answer: String.raw`$75$`,
        },
        {
          stem: String.raw`Prove that the equation $x^{2} + y^{2} + z^{2} = 7w^{2}$ has no solutions in positive integers.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: a sum of three squares is never $\equiv 7 \pmod 8$, so $w$ is even; then $x^{2} + y^{2} + z^{2} \equiv 0 \pmod 4$ forces $x$, $y$, $z$ even, and halving everything gives a smaller solution (infinite descent).`,
        },
        {
          stem: String.raw`Find all pairs of non-negative integers $(m, n)$ such that $3 \cdot 2^{m} + 1 = 7^{n}$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(m, n) = (1, 1)$ and $(4, 2)$. **Proof.** Key idea: in $7^{n} - 1 = 3 \cdot 2^{m}$, an odd $n$ makes $7^{n} - 1$ twice an odd number; if $4 \mid n$ then $5 \mid 7^{4} - 1 \mid 7^{n} - 1$; otherwise LTE gives exactly $2^{4} \parallel 7^{n} - 1$, so $7^{n} = 49$.`,
        },
        {
          stem: String.raw`Find all triples of positive integers $(x, y, z)$ such that $2^{x} + 7^{y} = 3^{z}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$(x, y, z) = (1, 1, 2)$ and $(5, 2, 4)$. **Proof.** Key idea: modulo $3$, $x$ is odd. For $x \ge 3$, modulo $8$ makes $y$ and $z$ even, and factorising $3^{z} - 7^{y}$ as a difference of squares gives $(5, 2, 4)$. For $x = 1$ and $z \ge 3$, modulo $7$ gives $z \equiv 2 \pmod 6$, modulo $27$ gives $y \equiv 4 \pmod 9$, and then the two sides disagree modulo $37$.`,
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
        {
          stem: String.raw`How many non-congruent right-angled triangles with integer side lengths have perimeter $240$?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`How many **primitive** Pythagorean triples $(a, b, c)$ are there with $a < b < c \le 100$? (Primitive means $a^{2} + b^{2} = c^{2}$ and $\gcd(a, b) = 1$.)`,
          difficulty: 2,
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 50$ is there **exactly one** right-angled triangle with integer side lengths having a leg of length $n$?`,
          difficulty: 3,
          answer: String.raw`$23$`,
        },
        {
          stem: String.raw`A right-angled triangle has integer side lengths $a$, $b$, $c$ and perimeter $P$. Find the smallest possible value of $P$ for which $P^{2}$ divides $abc$.`,
          difficulty: 4,
          answer: String.raw`$144$`,
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
        {
          stem: String.raw`The equation $x^{2} - 2y^{2} = -1$ has the positive integer solutions $(1, 1)$ and $(7, 5)$. Find the next one.`,
          difficulty: 1,
          answer: String.raw`$(x, y) = (41, 29)$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 100\,000$ is $3n^{2} + 1$ a perfect square?`,
          difficulty: 2,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Prove that there are infinitely many perfect squares $n$ such that $1 + 2 + 3 + \cdots + n$ is also a perfect square.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: if $x^{2} + 1 = 2y^{2}$, then $n = x^{2}$ gives $\frac{n(n + 1)}{2} = (xy)^{2}$; and $x^{2} - 2y^{2} = -1$ has infinitely many solutions, since $(x, y) \mapsto (3x + 4y, 2x + 3y)$ turns a solution into a larger one, starting from $(1, 1)$.`,
        },
        {
          stem: String.raw`Let $k$ be a positive integer. Find, in terms of $k$, the smallest positive integer $n$ such that $kn + 1$ and $(k + 1)n + 1$ are both perfect squares, and prove that it is the smallest.`,
          difficulty: 4,
          answer: String.raw`$n = 16k + 8$. **Proof.** Key idea: with $kn + 1 = A^{2}$ and $(k + 1)n + 1 = B^{2}$ we get $(k + 1)A^{2} - kB^{2} = 1$; the map $(A, B) \mapsto \big((2k + 1)A - 2kB,\ (2k + 1)B - 2(k + 1)A\big)$ turns a solution with $A > 1$ into a smaller positive one, so every solution descends to $(1, 1)$, and the solution just above $(1, 1)$ is $(4k + 1, 4k + 3)$.`,
        },
      ],
    },
  ],
});
