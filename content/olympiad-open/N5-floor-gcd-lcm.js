H2.addTopic({
  id: "N5",
  title: "Floor Function, GCD and LCM",
  summary: String.raw`Equations and sums with the floor function, Hermite's identity, Legendre's formula, the Euclidean algorithm, Bézout's identity and greatest common divisors of expressions.`,
  concepts: [
    {
      title: String.raw`The floor function and floor equations`,
      body: String.raw`$\lfloor x \rfloor$ is the greatest integer $\le x$, $\lceil x \rceil$ the least integer $\ge x$, and $\{x\} = x - \lfloor x \rfloor \in [0, 1)$.

- $\lfloor x \rfloor = n \iff n \le x < n + 1$, and $\lfloor x + m \rfloor = \lfloor x \rfloor + m$ for every integer $m$. Also $\lceil x \rceil = -\lfloor -x \rfloor$.
- **To solve an equation**, put $n = \lfloor x \rfloor$, solve for $x$ in terms of $n$, then impose $n \le x < n + 1$ to find the allowed $n$.
- Example: $3\lfloor x \rfloor = 2x + 1$ gives $x = \frac{3n - 1}{2}$; then $n \le \frac{3n-1}{2} < n + 1$ means $1 \le n < 3$, so $x = 1$ or $x = \frac{5}{2}$.`,
    },
    {
      title: String.raw`Split into integer and fractional parts`,
      body: String.raw`Write $x = n + t$ with $n = \lfloor x \rfloor$ and $0 \le t < 1$. For a positive integer $k$, $\lfloor kx \rfloor = kn + \lfloor kt \rfloor$.

- So an expression like $\lfloor x \rfloor + \lfloor 3x \rfloor$ equals $4n + \lfloor 3t \rfloor$, and $\lfloor 3t \rfloor$ only takes the values $0, 1, 2$ (on $[0, \frac13)$, $[\frac13, \frac23)$, $[\frac23, 1)$).
- Hence $\lfloor x \rfloor + \lfloor 3x \rfloor$ takes exactly the integer values that are $\equiv 0, 1$ or $2 \pmod 4$, and never one that is $\equiv 3$.
- In general, cut $[0, 1)$ at the points where some $\lfloor kt \rfloor$ jumps and list the values on each piece.`,
    },
    {
      title: String.raw`Hermite's identity`,
      body: String.raw`For every real $x$ and positive integer $n$,
$$\lfloor x \rfloor + \left\lfloor x + \tfrac{1}{n} \right\rfloor + \left\lfloor x + \tfrac{2}{n} \right\rfloor + \cdots + \left\lfloor x + \tfrac{n-1}{n} \right\rfloor = \lfloor nx \rfloor.$$

- Proof idea: both sides increase by $1$ when $x$ increases by $\frac1n$, and both are $0$ for $0 \le x < \frac1n$.
- With $n = 2$: $\lfloor x + \frac12 \rfloor = \lfloor 2x \rfloor - \lfloor x \rfloor$. This turns sums of "rounded" terms into telescoping sums.
- Example: $\lfloor 3.4 \rfloor + \lfloor 3.4 + \frac13 \rfloor + \lfloor 3.4 + \frac23 \rfloor = 3 + 3 + 4 = 10 = \lfloor 10.2 \rfloor$.`,
    },
    {
      title: String.raw`Sums of floors: multiples, pairing and lattice points`,
      body: String.raw`- The number of multiples of $d$ in $\{1, 2, \ldots, N\}$ is $\left\lfloor \frac{N}{d} \right\rfloor$.
- $\lfloor \frac{kp}{q} \rfloor$ counts the lattice points $(k, j)$ with $1 \le j < \frac{kp}{q}$ (when $q \nmid kp$), i.e. those strictly below the line $y = \frac{p}{q}x$.
- **Pairing**: if $q \nmid kp$ then $\{\frac{kp}{q}\} + \{\frac{(q-k)p}{q}\} = 1$, so $\lfloor \frac{kp}{q} \rfloor + \lfloor \frac{(q-k)p}{q} \rfloor = p - 1$.
- For coprime $p, q$ this gives $\displaystyle\sum_{k=1}^{q-1} \left\lfloor \frac{kp}{q} \right\rfloor = \frac{(p-1)(q-1)}{2}$. Example: $\lfloor \frac35 \rfloor + \lfloor \frac65 \rfloor + \lfloor \frac95 \rfloor + \lfloor \frac{12}{5} \rfloor = 0 + 1 + 1 + 2 = 4 = \frac{2 \cdot 4}{2}$.`,
      figure: {
        type: "plot",
        x: [-0.9, 6.2],
        y: [-0.9, 3.7],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [5.6, 0], tone: "muted", arrow: true },
          { from: [0, 0], to: [0, 3.4], tone: "muted", arrow: true },
          { from: [0, 3], to: [5, 3], tone: "muted", dashed: true },
          { from: [5, 0], to: [5, 3], tone: "muted", dashed: true },
          { from: [0, 0], to: [5, 3], tone: "accent" },
        ],
        circles: [
          { c: [1, 1], r: 0.1, tone: "muted" },
          { c: [1, 2], r: 0.1, tone: "muted" },
          { c: [2, 2], r: 0.1, tone: "muted" },
          { c: [3, 2], r: 0.1, tone: "muted" },
          { c: [2, 1], r: 0.12, fill: true, tone: "warn" },
          { c: [3, 1], r: 0.12, fill: true, tone: "warn" },
          { c: [4, 1], r: 0.12, fill: true, tone: "warn" },
          { c: [4, 2], r: 0.12, fill: true, tone: "warn" },
        ],
        labels: [
          { x: 1, y: 0, text: "1", pos: "s", style: "small" },
          { x: 2, y: 0, text: "2", pos: "s", style: "small" },
          { x: 3, y: 0, text: "3", pos: "s", style: "small" },
          { x: 4, y: 0, text: "4", pos: "s", style: "small" },
          { x: 5, y: 0, text: "5", pos: "s", style: "small" },
          { x: 0, y: 1, text: "1", pos: "w", style: "small" },
          { x: 0, y: 2, text: "2", pos: "w", style: "small" },
          { x: 0, y: 3, text: "3", pos: "w", style: "small" },
          { x: 5, y: 3, text: "y = 3x/5", pos: "ne", style: "small", tone: "accent" },
        ],
        caption: String.raw`The $8$ lattice points inside the $5 \times 3$ rectangle split evenly by the diagonal; the $4$ below it give $\sum_{k=1}^{4} \lfloor \frac{3k}{5} \rfloor = 4$.`,
        alt: "A 5 by 3 rectangle with its diagonal from the origin to (5, 3). Of the eight interior lattice points, the four below the diagonal, (2, 1), (3, 1), (4, 1) and (4, 2), are highlighted.",
      },
    },
    {
      title: String.raw`Legendre's formula and trailing zeros`,
      body: String.raw`For a prime $p$, the exponent of $p$ in $n!$ is
$$v_{p}(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^{2}} \right\rfloor + \left\lfloor \frac{n}{p^{3}} \right\rfloor + \cdots = \frac{n - s_{p}(n)}{p - 1},$$
where $s_{p}(n)$ is the digit sum of $n$ in base $p$.

- $n!$ ends in $v_{5}(n!)$ zeros, since there are more $2$s than $5$s. Example: $100!$ ends in $20 + 4 = 24$ zeros, and $v_{2}(100!) = 100 - s_{2}(100) = 97$.
- In base $b$, the number of trailing zeros is the smallest of $\left\lfloor \frac{v_{p}(n!)}{e} \right\rfloor$ over the prime powers $p^{e}$ exactly dividing $b$.
- For binomial coefficients, $v_{p}\binom{m+n}{m} = v_{p}((m+n)!) - v_{p}(m!) - v_{p}(n!)$, which equals the number of carries when adding $m$ and $n$ in base $p$ (Kummer). Example: $5 + 5$ in base $2$ is $101_{2} + 101_{2}$ with $2$ carries, and $\binom{10}{5} = 252 = 2^{2} \cdot 63$.`,
    },
    {
      title: String.raw`Euclidean algorithm, gcd and lcm`,
      body: String.raw`- $\gcd(a, b) = \gcd(b, a - qb)$ for any integer $q$; repeating with $q = \lfloor a/b \rfloor$ is the **Euclidean algorithm**. Example: $\gcd(1071, 462) = \gcd(462, 147) = \gcd(147, 21) = 21$.
- $\gcd(a, b) \cdot \operatorname{lcm}(a, b) = ab$. So $\operatorname{lcm}(1071, 462) = \frac{1071 \cdot 462}{21} = 23562$.
- **Standard substitution**: with $d = \gcd(a, b)$, write $a = dx$, $b = dy$ where $\gcd(x, y) = 1$; then $\operatorname{lcm}(a, b) = dxy$.
- Prime by prime, the gcd takes the **minimum** exponent and the lcm the **maximum**.`,
    },
    {
      title: String.raw`Bézout's identity and the Frobenius number`,
      body: String.raw`- **Bézout**: there are integers $x, y$ with $ax + by = \gcd(a, b)$, and $\gcd(a, b)$ is the smallest positive number of the form $ax + by$. Run the Euclidean algorithm backwards to find $x, y$.
- If $\gcd(a, b) = 1$ and $(x_{0}, y_{0})$ solves $ax + by = n$, all integer solutions are $(x_{0} + bt,\ y_{0} - at)$.
- **Frobenius (Sylvester)**: for coprime positive $a, b$, the largest integer **not** of the form $ax + by$ with $x, y \ge 0$ is $ab - a - b$. Example: with $3$ and $7$ the impossible values are $1, 2, 4, 5, 8, 11$, and $11 = 21 - 3 - 7$.`,
    },
    {
      title: String.raw`GCD of expressions and coprimality`,
      body: String.raw`- A common divisor of $A$ and $B$ divides every combination $uA + vB$. Eliminate $n$ step by step: $\gcd(n^{2} + 5, n + 2)$ divides $(n^{2} + 5) - (n - 2)(n + 2) = 9$, so it is $1$, $3$ or $9$.
- Consecutive integers are coprime, and $\gcd(n, n + k)$ divides $k$.
- If $\gcd(a, b) = 1$ and $ab$ is a perfect $k$-th power, then $a$ and $b$ are perfect $k$-th powers.
- $\gcd(2^{m} - 1, 2^{n} - 1) = 2^{\gcd(m, n)} - 1$, because the Euclidean algorithm on the exponents runs alongside: $2^{m} - 1 - 2^{m-n}(2^{n} - 1) = 2^{m-n} - 1$.`,
    },
  ],
  archetypes: [
    {
      id: "N5-floor-equations",
      name: String.raw`Equations with the floor function`,
      tests: String.raw`Solving equations involving $\lfloor x \rfloor$, or finding which integers an expression with floors can take. Set $n = \lfloor x \rfloor$ and use $n \le x < n + 1$, or split $x = n + t$ and check the pieces of $[0, 1)$.`,
      questions: [
        {
          stem: String.raw`How many positive integers $n$ satisfy $\left\lfloor \dfrac{n}{3} \right\rfloor = \left\lfloor \dfrac{n}{4} \right\rfloor$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`, String.raw`infinitely many`],
          answer: String.raw`(C) $5$`,
        },
        {
          stem: String.raw`Find all real numbers $x$ such that $x^{2} - 7\lfloor x \rfloor + 10 = 0$.`,
          difficulty: 2,
          answer: String.raw`$x = 2,\ \sqrt{11},\ 3\sqrt{2},\ 5$`,
        },
        {
          stem: String.raw`How many integers $N$ with $1 \le N \le 2026$ can be written in the form $\lfloor x \rfloor + \lfloor 2x \rfloor + \lfloor 4x \rfloor + \lfloor 8x \rfloor$ for some real number $x$?`,
          difficulty: 3,
          answer: String.raw`$1081$`,
        },
        {
          stem: String.raw`Find all real numbers $x$ such that $x + 2\{x\} = 3\lfloor x \rfloor$, where $\{x\} = x - \lfloor x \rfloor$.`,
          difficulty: 1,
          answer: String.raw`$x = 0$ and $x = \frac{5}{3}$`,
        },
        {
          stem: String.raw`Find the smallest positive real number $x$ such that $\lfloor x^{2} \rfloor - \lfloor x \rfloor^{2} = 10$.`,
          difficulty: 2,
          answer: String.raw`$\sqrt{35}$`,
        },
        {
          stem: String.raw`How many real numbers $x$ satisfy $x^{2} = 100\{x\}$, where $\{x\} = x - \lfloor x \rfloor$?`,
          difficulty: 3,
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`Find all non-negative real numbers $x$ such that $\lfloor x \rfloor \cdot \lfloor x^{2} \rfloor = \lfloor x^{3} \rfloor$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$0 \le x < \sqrt[3]{2}$, $\sqrt{2} \le x < \sqrt[3]{3}$, and $n \le x < \sqrt[3]{n^{3} + 1}$ for each integer $n \ge 2$. **Proof.** Key idea: with $n = \lfloor x \rfloor$, $m = \lfloor x^{2} \rfloor$ and $x = n + t$, we have $x^{3} = x \cdot x^{2} \ge (n + t)m$, so the equation needs $tm < 1$; for $n \ge 2$ this rules out $m \ge n^{2} + 1$ (which needs $t > \frac{1}{2n + 1} \ge \frac{1}{m}$), and for $n = 1$ the cases $m = 1, 2, 3$ are checked one by one.`,
        },
      ],
    },
    {
      id: "N5-floor-sums",
      name: String.raw`Sums of floors`,
      tests: String.raw`Evaluating or proving facts about sums of floor values. Look for Hermite's identity, pairing $k$ with $q - k$, counting lattice points, or reading $\lfloor n/k \rfloor$ as a count of multiples.`,
      questions: [
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=0}^{99} \left\lfloor \frac{2026 + k}{100} \right\rfloor$.`,
          difficulty: 1,
          answer: String.raw`$2026$`,
        },
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=1}^{2025} \left\lfloor \frac{17k}{2026} \right\rfloor$.`,
          difficulty: 2,
          answer: String.raw`$16200$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$, the number $$\left\lfloor \frac{n}{1} \right\rfloor + \left\lfloor \frac{n}{3} \right\rfloor + \left\lfloor \frac{n}{5} \right\rfloor + \cdots + \left\lfloor \frac{n}{2r + 1} \right\rfloor + \lfloor \sqrt{n} \rfloor + \left\lfloor \sqrt{n/2} \right\rfloor$$ is even, where $2r + 1$ is the largest odd number not exceeding $n$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the sum over odd $k$ counts the pairs $(k, m)$ with $k$ odd and $k \mid m \le n$, so it equals the total number of odd divisors of $1, 2, \ldots, n$, and $m$ has an odd number of odd divisors exactly when its odd part is a perfect square, i.e. when $m$ is a square or twice a square, which happens $\lfloor \sqrt{n} \rfloor + \lfloor \sqrt{n/2} \rfloor$ times.`,
        },
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=1}^{63} \lfloor \log_{2} k \rfloor$.`,
          difficulty: 1,
          answer: String.raw`$258$`,
        },
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=1}^{2026} \left\lfloor \frac{k}{\lfloor \sqrt{k} \rfloor} \right\rfloor$.`,
          difficulty: 2,
          answer: String.raw`$60\,898$`,
        },
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=1}^{2025} \left\lfloor \frac{k^{3}}{2026} \right\rfloor$.`,
          difficulty: 3,
          answer: String.raw`$2\,076\,965\,550$`,
        },
        {
          stem: String.raw`Prove that there are infinitely many positive integers $n$ for which $\lfloor \sqrt{2} \rfloor + \lfloor 2\sqrt{2} \rfloor + \cdots + \lfloor n\sqrt{2} \rfloor$ is divisible by $n$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: for each of the infinitely many solutions of $p^{2} - 2q^{2} = \pm 1$ with $q \ge 2$, we have $\left|k\sqrt{2} - \frac{kp}{q}\right| < \frac{1}{q}$ for $1 \le k < q$ while $\frac{kp}{q}$ is a non-integer with denominator $q$, so $\lfloor k\sqrt{2} \rfloor = \lfloor \frac{kp}{q} \rfloor$ and $n = q - 1$ gives the sum $\frac{(p - 1)(q - 1)}{2}$, a multiple of $n$ because $p$ is odd.`,
        },
      ],
    },
    {
      id: "N5-legendre",
      name: String.raw`Legendre's formula and trailing zeros`,
      tests: String.raw`Counting the zeros at the end of factorials and binomial coefficients, or the power of a prime that divides them. Apply $v_{p}(n!) = \sum \lfloor n/p^{i} \rfloor$ and compare the powers of $2$ and $5$.`,
      questions: [
        {
          stem: String.raw`How many zeros are at the end of $2026!$?`,
          difficulty: 1,
          answer: String.raw`$505$`,
        },
        {
          stem: String.raw`How many zeros are at the end of the binomial coefficient $\dbinom{2026}{1013}$?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 2026$ does $(2n)!$ end in exactly twice as many zeros as $n!$?`,
          difficulty: 3,
          answer: String.raw`$242$`,
        },
        {
          stem: String.raw`How many zeros are at the end of $2026!$ when it is written in base $12$?`,
          difficulty: 1,
          answer: String.raw`$1009$`,
        },
        {
          stem: String.raw`For how many integers $n$ with $2 \le n \le 2026$ is $n!$ divisible by $2^{n-2}$?`,
          difficulty: 2,
          answer: String.raw`$65$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 2026$ does $n!$ end in exactly $\dfrac{n - 4}{4}$ zeros?`,
          difficulty: 3,
          answer: String.raw`$69$`,
        },
        {
          stem: String.raw`Prove that for all non-negative integers $a$ and $b$ the number $$\frac{(3a)!\,(3b)!}{a!\,(b!)^{2}\,(2a + b)!}$$ is an integer.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: by Legendre's formula it is enough that $\lfloor 3x \rfloor + \lfloor 3y \rfloor \ge \lfloor x \rfloor + 2\lfloor y \rfloor + \lfloor 2x + y \rfloor$ for all real $x, y \ge 0$; removing integer parts reduces this to $\lfloor 3x \rfloor + \lfloor 3y \rfloor \ge \lfloor 2x + y \rfloor$ for $0 \le x, y < 1$, which follows by checking the cases $\lfloor 2x + y \rfloor = 1$ and $2$.`,
        },
      ],
    },
    {
      id: "N5-gcd-lcm",
      name: String.raw`GCD and LCM`,
      tests: String.raw`Conditions on $\gcd(a, b)$ and $\operatorname{lcm}(a, b)$. Substitute $a = dx$, $b = dy$ with $\gcd(x, y) = 1$, or compare prime exponents (minimum for gcd, maximum for lcm).`,
      questions: [
        {
          stem: String.raw`How many ordered pairs $(a, b)$ of positive integers satisfy $\gcd(a, b) = 12$ and $\operatorname{lcm}(a, b) = 360$?`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Positive integers $a$ and $b$ satisfy $a + b = 2026$. Find the largest possible value of $\operatorname{lcm}(a, b)$.`,
          difficulty: 2,
          answer: String.raw`$1\,026\,165$`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(a, b)$ with $a \le b$ such that
$$\gcd(a, b) + \operatorname{lcm}(a, b) = a + b + 2026,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(a, b) = (2, 2027)$ and $(2026, 3039)$. **Proof.** Key idea: with $a = dx$, $b = dy$, $\gcd(x, y) = 1$, the equation becomes $d(x - 1)(y - 1) = 2026 = 2 \cdot 1013$, and checking the few factorisations against $\gcd(x, y) = 1$ leaves only $(d, x, y) = (1, 2, 2027)$ and $(1013, 2, 3)$.`,
        },
        {
          stem: String.raw`How many positive integers $n$ satisfy $\operatorname{lcm}(n, 18) = 180$?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`How many ordered pairs $(a, b)$ of positive integers satisfy $\operatorname{lcm}(a, b) - \gcd(a, b) = 35$?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 100$ is $\operatorname{lcm}(1, 2, \ldots, n)$ divisible by $n^{2}$?`,
          difficulty: 3,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which there exist $n$ distinct positive integers whose sum equals their least common multiple, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$n = 1$ and every $n \ge 3$. **Proof.** Key idea: for $n = 2$, writing $a = dx$, $b = dy$ with $\gcd(x, y) = 1$ turns $\operatorname{lcm}(a, b) = a + b$ into $xy = x + y$, which has no coprime solution; $\{1, 2, 3\}$ works, and from such a set containing $1$ with even lcm $L$ one gets a set with one more element by multiplying everything by $3$ and replacing the element $3$ by $1$ and $2$ (the sum and the lcm both become $3L$).`,
        },
      ],
    },
    {
      id: "N5-bezout",
      name: String.raw`Bézout and linear combinations`,
      tests: String.raw`Which amounts can be made from given values, and in how many ways. Use Bézout's identity, the general solution $(x_{0} + bt, y_{0} - at)$, and the Frobenius number $ab - a - b$.`,
      questions: [
        {
          stem: String.raw`A post office sells only $5$-cent and $8$-cent stamps. What is the largest postage, in cents, that cannot be made exactly with these stamps?`,
          difficulty: 1,
          answer: String.raw`$27$ cents`,
        },
        {
          stem: String.raw`How many pairs of non-negative integers $(x, y)$ satisfy $7x + 11y = 2026$?`,
          difficulty: 2,
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`Find the largest integer that cannot be written as $12x + 15y + 20z$ with $x$, $y$, $z$ non-negative integers.`,
          difficulty: 3,
          answer: String.raw`$73$`,
        },
        {
          stem: String.raw`Find the integer $x$ with $0 < x < 29$ for which there is an integer $y$ with $17x + 29y = 1$.`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`How many positive integers can **not** be written in the form $7x + 10y$ with $x$ and $y$ non-negative integers?`,
          difficulty: 2,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`Find the largest positive integer $n$ for which the equation $13x + 21y = n$ has exactly two solutions in positive integers $x$, $y$.`,
          difficulty: 3,
          answer: String.raw`$819$`,
        },
        {
          stem: String.raw`How many positive integers can **not** be written in the form $2026x + 2029y + 2032z$ with $x$, $y$, $z$ non-negative integers?`,
          difficulty: 4,
          answer: String.raw`$1\,028\,194$`,
        },
      ],
    },
    {
      id: "N5-gcd-expressions",
      name: String.raw`GCD of expressions and coprimality`,
      tests: String.raw`Finding or bounding $\gcd$ of two expressions in $n$, or proving two numbers are coprime. Subtract multiples to eliminate $n$ (as in the Euclidean algorithm) until a constant is left.`,
      questions: [
        {
          stem: String.raw`As $n$ runs through the positive integers, what is the largest possible value of $\gcd(n + 7,\ 2n + 30)$?`,
          difficulty: 1,
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$, the numbers $n! + 1$ and $(n + 1)! + 1$ are coprime.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: a common divisor divides $(n + 1)(n! + 1) - \big((n + 1)! + 1\big) = n$, but $n$ and $n! + 1$ are coprime because $n \mid n!$.`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(m, n)$ such that $2^{m} + 1$ and $2^{n} - 1$ have a common divisor greater than $1$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly the pairs in which the highest power of $2$ dividing $n$ is greater than the highest power of $2$ dividing $m$. **Proof.** Key idea: if an odd prime $p$ divides both, the order of $2$ modulo $p$ divides $n$ and $2m$ but not $m$, so it contains one more factor $2$ than $m$ does, and $n$ must too; conversely, with $d = \gcd(m, n)$, $2^{d} + 1$ divides both numbers.`,
        },
        {
          stem: String.raw`As $n$ runs through the positive integers, $\gcd(n + 2,\ n^{2} + 2n + 12)$ takes several different values. What is the sum of all of them?`,
          difficulty: 1,
          answer: String.raw`$28$`,
        },
        {
          stem: String.raw`Let $a$ and $b$ be coprime positive integers. Which values can $\gcd(a + b,\ a^{2} - ab + b^{2})$ take?`,
          difficulty: 2,
          answer: String.raw`$1$ and $3$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 2026$ is $\gcd(n^{3} + 2,\ (n + 1)^{3} + 2) > 1$?`,
          difficulty: 3,
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`Find the smallest possible value of $b - a$ over all pairs of positive integers $a < b$ such that $\gcd(a + i,\ b + i) > 1$ for each $i = 0, 1, 2, \ldots, 13$, and prove that it is the smallest.`,
          difficulty: 4,
          answer: String.raw`$30030$. **Proof.** Key idea: $\gcd(a + i, b + i) = \gcd(a + i, d)$ with $d = b - a$, so each of the $14$ consecutive numbers $a, \ldots, a + 13$ must share a prime with $d$; if $d$ is even, then of the $7$ odd ones (spaced $2$ apart) the primes $3$ and $5$ together cover at most $4$ and every other odd prime at most $1$, and if $d$ is odd, then $3$ and $5$ together cover at most $7$ of the $14$ and every other prime at most $2$, so either way $d$ has at least six prime factors, giving $d \ge 2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 = 30030$, and the Chinese remainder theorem shows $30030$ works.`,
        },
      ],
    },
  ],
});
