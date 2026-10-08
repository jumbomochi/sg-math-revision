H2.addTopic({
  id: "A5",
  title: "Sequences, Series and Recurrences",
  summary: String.raw`Telescoping sums and products, arithmetic and geometric series, linear recurrences and their invariants, periodic sequences, sequences built from floors and digits, and bounding sums and limits.`,
  concepts: [
    {
      title: String.raw`Telescoping sums and products`,
      body: String.raw`Write each term as a **difference** $g(k) - g(k + 1)$; then almost everything cancels:
$$\sum_{k=1}^{n} \big(g(k) - g(k+1)\big) = g(1) - g(n + 1).$$

- Partial fractions: $\dfrac{1}{k(k+1)} = \dfrac1k - \dfrac{1}{k+1}$, so $\dfrac{1}{1\cdot 2} + \cdots + \dfrac{1}{9 \cdot 10} = 1 - \dfrac{1}{10} = \dfrac{9}{10}$. More generally $\dfrac{1}{k(k+d)} = \dfrac1d\left(\dfrac1k - \dfrac{1}{k+d}\right)$.
- Rationalise: $\dfrac{1}{\sqrt{k} + \sqrt{k+1}} = \sqrt{k+1} - \sqrt{k}$.
- **Products** telescope with ratios: $\displaystyle\prod_{k=1}^{n}\left(1 + \frac1k\right) = \frac21 \cdot \frac32 \cdots \frac{n+1}{n} = n + 1$. Factorise each term first, e.g. $1 - \dfrac{1}{k^2} = \dfrac{k-1}{k}\cdot\dfrac{k+1}{k}$.`,
    },
    {
      title: String.raw`Arithmetic and geometric series`,
      body: String.raw`- **AP**: $a, a + d, a + 2d, \ldots$; the $n$th term is $a + (n - 1)d$ and the sum of $n$ terms is $\dfrac{n}{2}(\text{first} + \text{last})$.
- **GP**: $a, ar, ar^2, \ldots$; the sum of $n$ terms is $a\dfrac{r^n - 1}{r - 1}$, and for $|r| < 1$ the infinite sum is $\dfrac{a}{1 - r}$. The squares of a GP form another GP with ratio $r^2$.
- **Consecutive integers**: $m + (m + 1) + \cdots + (m + k - 1) = \dfrac{k(2m + k - 1)}{2}$. The two factors $k$ and $2m + k - 1$ have opposite parity, which links such sums to odd divisors.
- Standard sums: $\sum k = \dfrac{n(n+1)}{2}$, $\sum k^2 = \dfrac{n(n+1)(2n+1)}{6}$, $\sum k^3 = \left(\dfrac{n(n+1)}{2}\right)^2$.
- Example: $1 + 2 + 4 + \cdots + 2^9 = 2^{10} - 1 = 1023$.`,
    },
    {
      title: String.raw`Linear recurrences: the characteristic equation`,
      body: String.raw`For $a_{n+2} = p\,a_{n+1} + q\,a_n$, try $a_n = t^n$: this works when $t^2 = pt + q$.

- Two different roots $r, s$: $a_n = A r^n + B s^n$, with $A, B$ fixed by the first two terms.
- A double root $r$: $a_n = (A + Bn) r^n$.
- Example: $a_0 = 0$, $a_1 = 1$, $a_{n+2} = 5a_{n+1} - 6a_n$. Then $t^2 - 5t + 6 = 0$ gives $t = 2, 3$, and $a_n = 3^n - 2^n$.
- For small indices it is often quickest just to compute the terms.`,
    },
    {
      title: String.raw`Invariants of a recurrence`,
      body: String.raw`A quantity built from consecutive terms that does not change with $n$ turns a recurrence into a fact about every term.

- Check it by substituting the recurrence: show the expression for $(a_{n+1}, a_{n+2})$ equals the one for $(a_n, a_{n+1})$, then evaluate it at the start.
- Example (Fibonacci $F_1 = F_2 = 1$): $F_{n+1}^2 - F_{n+1}F_n - F_n^2$ alternates between $-1$ and $1$, which is why $F_{n+1}F_{n-1} - F_n^2 = (-1)^n$.
- For a second-order linear recurrence, natural candidates are quadratic expressions in two consecutive terms, like the Fibonacci one above; keep the coefficients that survive the substitution.`,
    },
    {
      title: String.raw`Periodic sequences`,
      body: String.raw`If each term depends only on the previous one or two terms, a single repeat of the starting values makes the whole sequence repeat.

- Compute terms until they cycle, then use the index **modulo the period**.
- Example: $a_1 = 2$, $a_{n+1} = \dfrac{1}{1 - a_n}$ gives $2, -1, \tfrac12, 2, -1, \tfrac12, \ldots$ (period $3$), so $a_{100} = a_1 = 2$.
- For sums, add one full period first, then the leftover terms.
- If a recurrence looks like a trigonometric identity, try substituting $x_n = \tan\theta_n$ (or $\cos\theta_n$) and follow what happens to the angle: adding a fixed angle each step gives a periodic sequence when that angle is a rational multiple of $180^\circ$.`,
    },
    {
      title: String.raw`Sequences with floors and digits`,
      body: String.raw`- $\lfloor x \rfloor = m$ means $m \le x < m + 1$. To add many floor values, **group terms by their value** and count how many terms take each value.
- If consecutive terms of $f(n)$ differ by less than $1$, then $\lfloor f(n)\rfloor$ takes every integer value in its range; if they differ by at least $1$, all the floor values are different.
- Example: $\lfloor k/3 \rfloor$ for $k = 1, \ldots, 10$ is $0, 0, 1, 1, 1, 2, 2, 2, 3, 3$, with sum $15$.
- **Digit maps** (sum of digits, sum of squares of digits, ...) make large numbers much smaller, so the sequence soon stays in a finite set and must become periodic. Compute until a value repeats.`,
    },
    {
      title: String.raw`Limits of recursive sequences`,
      body: String.raw`- An increasing sequence that is bounded above has a limit (and similarly decreasing and bounded below).
- If $a_{n+1} = f(a_n)$ converges to $L$ and $f$ is continuous, then $L = f(L)$; choose the root that is consistent with the bounds.
- Example: $a_1 = \tfrac14$, $a_{n+1} = \sqrt{2 + a_n}$. By induction $a_n < a_{n+1} < 2$, and $L = \sqrt{2 + L}$ gives $L = 2$.`,
      figure: {
        type: "plot",
        x: [-0.25, 2.75],
        y: [-0.25, 2.55],
        equal: true,
        originLabel: "sw",
        curves: [{ fn: "x => Math.sqrt(2 + x)", domain: [-0.2, 2.7] }],
        lines: [{ fn: "x => x" }],
        labels: [
          { x: 0.6, y: 1.86, text: "y = √(2 + x)", pos: "c" },
          { x: 2.38, y: 2.5, text: "y = x", pos: "w" },
        ],
        segments: [
          { from: [0.25, 0], to: [0.25, 1.5], tone: "warn" },
          { from: [0.25, 1.5], to: [1.5, 1.5], tone: "warn" },
          { from: [1.5, 1.5], to: [1.5, 1.8708], tone: "warn" },
          { from: [1.5, 1.8708], to: [1.8708, 1.8708], tone: "warn" },
          { from: [1.8708, 1.8708], to: [1.8708, 1.9674], tone: "warn" },
          { from: [1.8708, 1.9674], to: [1.9674, 1.9674], tone: "warn" },
        ],
        points: [{ x: 2, y: 2, label: "(2, 2)", pos: "se" }],
        xTicks: [{ x: 0.25, label: "a₁" }, { x: 1.5, label: "a₂" }, { x: 1.8708, label: "a₃" }],
        caption: String.raw`Cobweb diagram: go up to the curve, across to $y = x$, and repeat. The steps close in on the fixed point.`,
        alt: "Graph of y equals root of 2 plus x and the line y equals x, crossing at (2, 2). A staircase starts at a1 = 0.25 on the x-axis, goes up to the curve, across to the line, and so on, approaching the crossing point. Ticks mark a1, a2 and a3.",
      },
    },
    {
      title: String.raw`Bounding a sum`,
      body: String.raw`To estimate a sum you cannot compute exactly, **squeeze each term between two telescoping terms**.

- Example: for $k \ge 2$, $\dfrac{1}{k(k+1)} < \dfrac{1}{k^2} < \dfrac{1}{k(k-1)} = \dfrac{1}{k-1} - \dfrac1k$, so $1 + \dfrac14 + \dfrac19 + \cdots + \dfrac{1}{n^2} < 1 + \left(1 - \dfrac1n\right) < 2$.
- A sharper bound comes from a closer telescoping term, or from keeping the first few terms exactly and bounding only the tail.
- For the integer part of a sum, you need a lower bound and an upper bound that lie between the **same two consecutive integers**.`,
    },
  ],
  archetypes: [
    {
      id: "A5-telescoping",
      name: String.raw`Telescoping sums and products`,
      tests: String.raw`A long sum or product of fractions with a regular pattern. Split each term (partial fractions, factorising, rationalising) into a difference or ratio of consecutive expressions so that it collapses.`,
      questions: [
        {
          stem: String.raw`Find $\dfrac{1}{1 \times 3} + \dfrac{1}{3 \times 5} + \dfrac{1}{5 \times 7} + \cdots + \dfrac{1}{49 \times 51}$.`,
          difficulty: 1,
          answer: String.raw`$\dfrac{25}{51}$`,
        },
        {
          stem: String.raw`Find $\left(1 - \dfrac{1}{2^2}\right)\left(1 - \dfrac{1}{3^2}\right)\left(1 - \dfrac{1}{4^2}\right)\cdots\left(1 - \dfrac{1}{50^2}\right)$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{51}{100}$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\frac{1}{1^2} + \frac{1}{2^2} + \frac{1}{3^2} + \cdots + \frac{1}{n^2} < \frac53.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: for $k \ge 2$, $\dfrac{1}{k^2} < \dfrac{1}{k^2 - \frac14} = \dfrac{1}{k - \frac12} - \dfrac{1}{k + \frac12}$, and these telescope to less than $\dfrac{1}{3/2} = \dfrac23$.`,
        },
      ],
    },
    {
      id: "A5-ap-gp",
      name: String.raw`Arithmetic and geometric series`,
      tests: String.raw`Problems about terms and sums of arithmetic or geometric progressions, including infinite geometric series and sums of consecutive integers. Set up equations in the first term and the common difference or ratio.`,
      questions: [
        {
          stem: String.raw`The 3rd term of an arithmetic progression is $11$ and the 10th term is $39$. Find the sum of the first $20$ terms.`,
          difficulty: 1,
          answer: String.raw`$820$`,
        },
        {
          stem: String.raw`An infinite geometric series has sum $12$. The series formed by squaring each of its terms has sum $48$. Find the first term of the original series.`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`In how many ways can $2025$ be written as the sum of two or more consecutive positive integers?`,
          difficulty: 3,
          answer: String.raw`$14$`,
        },
      ],
    },
    {
      id: "A5-linear-recurrences",
      name: String.raw`Linear recurrences`,
      tests: String.raw`A sequence where each term is a fixed combination of the previous two. Compute terms, find a closed form from the characteristic equation, or find an invariant to prove a property of every term.`,
      questions: [
        {
          stem: String.raw`A sequence has $a_1 = a_2 = 1$ and $a_{n+2} = a_{n+1} + 2a_n$ for $n \ge 1$. Find $a_{10}$.`,
          difficulty: 1,
          answer: String.raw`$341$`,
        },
        {
          stem: String.raw`A sequence has $a_0 = 0$, $a_1 = 1$ and $a_{n+2} = 4a_{n+1} - 4a_n$ for $n \ge 0$. Find a formula for $a_n$ in terms of $n$.`,
          difficulty: 2,
          answer: String.raw`$a_n = n \cdot 2^{n-1}$`,
        },
        {
          stem: String.raw`A sequence has $a_1 = a_2 = 1$ and $a_{n+2} = 4a_{n+1} - a_n$ for $n \ge 1$. Prove that $2a_n a_{n+1} - 2$ is a perfect square for every positive integer $n$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $a_{n+1}^2 - 4a_{n+1}a_n + a_n^2$ is invariant (it equals $a_{n+1}^2 - a_n a_{n+2}$ both ways), so it is always $-2$, which rearranges to $(a_{n+1} - a_n)^2 = 2a_n a_{n+1} - 2$.`,
        },
      ],
    },
    {
      id: "A5-periodic",
      name: String.raw`Periodic sequences`,
      tests: String.raw`A recurrence and a very large index such as $2026$. Compute terms until they repeat (or spot a hidden trigonometric substitution), then reduce the index modulo the period.`,
      questions: [
        {
          stem: String.raw`A sequence has $x_1 = 2$ and $x_{n+1} = \dfrac{1 + x_n}{1 - x_n}$ for $n \ge 1$. What is $x_{2026}$?`,
          difficulty: 1,
          choices: [String.raw`$2$`, String.raw`$-3$`, String.raw`$-\tfrac12$`, String.raw`$\tfrac13$`, String.raw`$-2$`],
          answer: String.raw`(B) $-3$`,
        },
        {
          stem: String.raw`A sequence has $a_1 = 2$, $a_2 = 3$ and $a_{n+2} = \dfrac{1 + a_{n+1}}{a_n}$ for $n \ge 1$. Find $a_1 + a_2 + \cdots + a_{2026}$.`,
          difficulty: 2,
          answer: String.raw`$3647$`,
        },
        {
          stem: String.raw`A sequence has $x_1 = 2$ and $x_{n+1} = \dfrac{\sqrt3\,x_n - 1}{x_n + \sqrt3}$ for $n \ge 1$. Find $x_{2026}$.`,
          difficulty: 3,
          answer: String.raw`$-\dfrac12$`,
        },
      ],
    },
    {
      id: "A5-floor-digits",
      name: String.raw`Sequences with floors and digits`,
      tests: String.raw`Sums or lists of floor values, or sequences built from the digits of the previous term. Group terms by value, compare the gap between consecutive terms with $1$, or compute until the sequence cycles.`,
      questions: [
        {
          stem: String.raw`Find $\lfloor \sqrt{1} \rfloor + \lfloor \sqrt{2} \rfloor + \lfloor \sqrt{3} \rfloor + \cdots + \lfloor \sqrt{50} \rfloor$.`,
          difficulty: 1,
          answer: String.raw`$217$`,
        },
        {
          stem: String.raw`A sequence has $a_1 = 2027$, and for $n \ge 1$, $a_{n+1}$ is the sum of the squares of the digits of $a_n$. Find $a_{2027}$.`,
          difficulty: 2,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`How many different integers appear in the list
$$\left\lfloor \frac{1^2}{50} \right\rfloor, \left\lfloor \frac{2^2}{50} \right\rfloor, \left\lfloor \frac{3^2}{50} \right\rfloor, \ldots, \left\lfloor \frac{100^2}{50} \right\rfloor?$$`,
          difficulty: 3,
          answer: String.raw`$88$`,
        },
      ],
    },
    {
      id: "A5-bounds-limits",
      name: String.raw`Bounding sums and limits`,
      tests: String.raw`Finding the limit of a recursively defined sequence, the integer part of a sum, or proving that a term lies between two bounds. Use $L = f(L)$, squeeze terms between telescoping expressions, or square the recurrence.`,
      questions: [
        {
          stem: String.raw`A sequence has $x_1 = 1$ and $x_{n+1} = \sqrt{12 + x_n}$ for $n \ge 1$. The sequence is increasing and bounded, so it has a limit. Find the limit.`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Find the integer part of
$$S = 1 + \frac{1}{\sqrt2} + \frac{1}{\sqrt3} + \cdots + \frac{1}{\sqrt{100}}.$$`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`A sequence has $a_1 = 1$ and $a_{n+1} = a_n + \dfrac{1}{a_n}$ for $n \ge 1$. Prove that $63 < a_{2026} < 64$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: squaring gives $a_{n+1}^2 = a_n^2 + 2 + \dfrac{1}{a_n^2}$, so $a_{2026}^2 = 4051 + \sum_{k=1}^{2025} \dfrac{1}{a_k^2}$ with $a_k^2 \ge 2k - 1$; this gives $a_{2026}^2 \ge 4051 > 63^2$, and bounding $\sum \dfrac{1}{2k-1}$ by a harmonic sum (less than $7$) gives $a_{2026}^2 < 4096 = 64^2$.`,
        },
      ],
    },
  ],
});
