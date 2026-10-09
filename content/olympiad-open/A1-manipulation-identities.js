H2.addTopic({
  id: "A1",
  title: "Algebraic Manipulation and Identities",
  summary: String.raw`Factorisation tricks, symmetric expressions such as x + 1/x, power sums from a sum and a product, telescoping sums and products, the Sophie Germain identity, evaluating expressions under constraints, and denesting radicals.`,
  concepts: [
    {
      title: String.raw`Factorisations to know by heart`,
      body: String.raw`- Difference of squares: $a^2 - b^2 = (a - b)(a + b)$.
- Sum and difference of cubes: $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$.
- In general $a^n - b^n = (a - b)(a^{n-1} + a^{n-2}b + \cdots + b^{n-1})$, and for **odd** $n$, $a^n + b^n$ is divisible by $a + b$.
- Example: $10^6 - 1 = (10^3 - 1)(10^3 + 1) = 999 \times 1001 = 3^3 \cdot 37 \cdot 7 \cdot 11 \cdot 13$.
- Factorising an integer expression turns "is it prime?" or "is it divisible by $k$?" into a question about its factors. A product of $k$ consecutive integers is divisible by $k!$.`,
    },
    {
      title: String.raw`Symmetric expressions in $x$ and $\frac{1}{x}$`,
      body: String.raw`Let $t = x + \frac{1}{x}$. Then everything symmetric in $x$ and $\frac{1}{x}$ is a polynomial in $t$:

$$x^2 + \frac{1}{x^2} = t^2 - 2, \qquad x^3 + \frac{1}{x^3} = t^3 - 3t.$$

- Recurrence: writing $t_n = x^n + x^{-n}$, we have $t_{n+1} = t \cdot t_n - t_{n-1}$ (multiply $t_n$ by $x + \frac{1}{x}$).
- Products split too: $t_m t_n = t_{m+n} + t_{|m-n|}$.
- Example: if $x + \frac{1}{x} = 3$ then $x^2 + \frac{1}{x^2} = 7$, $x^3 + \frac{1}{x^3} = 18$ and $x^4 + \frac{1}{x^4} = 3 \cdot 18 - 7 = 47$.
- An equation like $x^2 - kx + 1 = 0$ is the same as $x + \frac{1}{x} = k$ (divide by $x$).`,
    },
    {
      title: String.raw`Power sums from sums and products`,
      body: String.raw`With $s = a + b$ and $p = ab$:

$$a^2 + b^2 = s^2 - 2p, \qquad a^3 + b^3 = s^3 - 3sp.$$

For three numbers, with $e_1 = a + b + c$, $e_2 = ab + bc + ca$, $e_3 = abc$ and $p_k = a^k + b^k + c^k$:

- $p_2 = e_1^2 - 2e_2$.
- **Newton's identity**: $p_{k} = e_1 p_{k-1} - e_2 p_{k-2} + e_3 p_{k-3}$ (with $p_0 = 3$), so $p_3 = e_1 p_2 - e_2 p_1 + 3e_3$.
- Example: if $a + b = 3$ and $ab = -2$, then $a^2 + b^2 = 9 + 4 = 13$ and $a^3 + b^3 = 27 + 18 = 45$.`,
    },
    {
      title: String.raw`The three-cube identity`,
      body: String.raw`$$a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca).$$

- Consequence: if $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.
- The second factor equals $\tfrac{1}{2}\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big]$, so it is zero only when $a = b = c$.
- Example: $(x - y)^3 + (y - z)^3 + (z - x)^3 = 3(x - y)(y - z)(z - x)$, because the three brackets add to $0$.`,
    },
    {
      title: String.raw`The Sophie Germain identity`,
      body: String.raw`Add and subtract $4a^2b^2$ to complete a square, then use difference of squares:

$$a^4 + 4b^4 = (a^2 + 2b^2)^2 - (2ab)^2 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2).$$

- The factors can also be written $(a + b)^2 + b^2$ and $(a - b)^2 + b^2$.
- Example: $3^4 + 4 = 85 = (9 + 6 + 2)(9 - 6 + 2) = 17 \times 5$.
- Look for it whenever you see a fourth power plus four times a fourth power, including hidden ones such as $4^n = 4 \cdot (2^{(n-1)/2})^4$ for odd $n$.`,
    },
    {
      title: String.raw`Telescoping sums and products`,
      body: String.raw`Write each term as a **difference** (for sums) or a **ratio** (for products) of consecutive values of one expression, so almost everything cancels.

- Sum: $\dfrac{1}{k(k+1)} = \dfrac{1}{k} - \dfrac{1}{k+1}$, so $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+1)} = 1 - \frac{1}{n+1}$.
- Product: $\displaystyle\prod_{k=2}^{n}\Big(1 - \frac{1}{k}\Big) = \frac{1}{2} \cdot \frac{2}{3} \cdots \frac{n-1}{n} = \frac{1}{n}$.
- Rationalising also telescopes: $\dfrac{1}{\sqrt{k+1} + \sqrt{k}} = \sqrt{k+1} - \sqrt{k}$.
- To find the cancelling pieces, **factorise the general term** (difference of squares, sums and differences of cubes, completing a square) and see which factor at $k$ matches a factor at $k + 1$. Partial fractions then turn a ratio of such factors into a difference.`,
    },
    {
      title: String.raw`Using a constraint: substitute and reduce`,
      body: String.raw`- **Reduce the degree**: if $x^2 = x + 1$, then $x^3 = x^2 + x = 2x + 1$ and $x^4 = 2x^2 + x = 3x + 2$. Any polynomial in $x$ becomes linear.
- **Spot a repeated block** and give it a name: $(x+1)(x+2)(x+3)(x+4) + 1 = (x^2 + 5x + 4)(x^2 + 5x + 6) + 1$; with $u = x^2 + 5x + 5$ this is $u^2 - 1 + 1 = u^2$.
- **Work with symmetric functions** instead of solving for the variables: you rarely need $a$ and $b$ themselves, only $a + b$ and $ab$.
- Check the constraint can actually be met by real numbers before trusting the answer.`,
    },
    {
      title: String.raw`Denesting radicals`,
      body: String.raw`- Try $\sqrt{a \pm 2\sqrt{b}} = \sqrt{m} \pm \sqrt{n}$ with $m + n = a$, $mn = b$ (and $m \ge n$ for the minus sign). Example: $\sqrt{5 + 2\sqrt{6}} = \sqrt{3} + \sqrt{2}$, since $3 + 2 = 5$ and $3 \cdot 2 = 6$.
- If the middle term is not of the form $2\sqrt{b}$, write it that way first: $4\sqrt{3} = 2\sqrt{12}$.
- **Cube roots**: guess $\sqrt[3]{p + q\sqrt{d}} = u + v\sqrt{d}$ and expand; or let $t = \sqrt[3]{A} + \sqrt[3]{B}$ and use $t^3 = A + B + 3\sqrt[3]{AB}\,t$. Example: $(1 + \sqrt{2})^3 = 7 + 5\sqrt{2}$.
- If $\sqrt{a} + \sqrt{b}$ equals a rational multiple of $\sqrt{d}$, squaring shows $\sqrt{ab}$ is rational, which pins down the form of $a$ and $b$.`,
    },
    {
      title: String.raw`Hidden differences of squares`,
      body: String.raw`Adding and subtracting a well-chosen term can turn an expression into $P^2 - Q^2$; the Sophie Germain identity is one example.

- $x^2 + x + 1 = (x + 1)^2 - x$ splits whenever $x$ is a perfect square, and $x^2 - x + 1 = (x + 1)^2 - 3x$ splits whenever $3x$ is a perfect square. Example: $12^2 - 12 + 1 = 13^2 - 6^2 = 7 \cdot 19$.
- Combined with $a^3 \pm 1 = (a \pm 1)(a^2 \mp a + 1)$, this can split a number like $a^{3} + 1$ into three factors of similar size.
- Comparing factorisations of one number $N = ab$: since $(a + b)^2 - (b - a)^2 = 4N$, the closer $a$ and $b$ are, the closer $a + b$ is to $2\sqrt{N}$.`,
    },
  ],
  archetypes: [
    {
      id: "A1-factorisation-tricks",
      name: String.raw`Factorising to compute and count`,
      tests: String.raw`Large numbers or integer expressions that become easy once written as a difference of squares, a difference of powers or a product of consecutive integers. Look for $a^2 - b^2$, $a^n - b^n$, or "divisible for every $n$".`,
      questions: [
        {
          stem: String.raw`Find the largest prime factor of $3^8 - 2^8$.`,
          difficulty: 1,
          answer: String.raw`$97$`,
        },
        {
          stem: String.raw`How many ordered pairs $(x, y)$ of positive integers satisfy $x^2 - y^2 = 2025$?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Prove that $n^5 - 5n^3 + 4n$ is divisible by $120$ for every integer $n$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: factorise as $(n-2)(n-1)n(n+1)(n+2)$, a product of five consecutive integers, which is divisible by $3$, $5$ and $8$.`,
        },
        {
          stem: String.raw`Evaluate $\dfrac{2026^3 - 1}{2026^2 + 2027}$.`,
          difficulty: 1,
          answer: String.raw`$2025$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which $n^3 - 8n^2 + 20n - 13$ is a prime number.`,
          difficulty: 2,
          answer: String.raw`$n = 2, 3, 4$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which $n^{2026} + n^{1013} + 1$ is a prime number, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $n = 1$. **Proof.** Key idea: since $n^3 \equiv 1 \pmod{n^2 + n + 1}$ and $2026 \equiv 1$, $1013 \equiv 2 \pmod 3$, the number is $\equiv n + n^2 + 1 \equiv 0 \pmod{n^2 + n + 1}$, a proper factor once $n \ge 2$.`,
        },
        {
          stem: String.raw`Prove that $3^{2025} + 1$ has a positive divisor $d$ with $3^{1000} < d < 3^{1012}$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: for odd $k$, $3^{2k} - 3^k + 1 = (3^k + 1)^2 - 3^{k+1}$ is a difference of squares, so $3^{3k} + 1 = (3^k + 1)\big(3^k + 1 - 3^{(k+1)/2}\big)\big(3^k + 1 + 3^{(k+1)/2}\big)$; applying this for $k = 25, 75, 225, 675$ and taking $d = (3^{25} + 1)\prod_{k \in \{75, 225, 675\}}\big(3^k + 1 + 3^{(k+1)/2}\big)$ gives a divisor just above $3^{1000}$.`,
        },
      ],
    },
    {
      id: "A1-x-plus-reciprocal",
      name: String.raw`Expressions in $x + \frac{1}{x}$`,
      tests: String.raw`Given $x + \frac{1}{x}$ (or a quadratic $x^2 - kx + 1 = 0$), find $x^n + \frac{1}{x^n}$ or another expression symmetric in $x$ and $\frac{1}{x}$, without solving for $x$.`,
      questions: [
        {
          stem: String.raw`The real number $x$ satisfies $x + \dfrac{1}{x} = 4$. What is the value of $x^3 + \dfrac{1}{x^3}$?`,
          difficulty: 1,
          choices: [String.raw`$48$`, String.raw`$52$`, String.raw`$56$`, String.raw`$60$`, String.raw`$64$`],
          answer: String.raw`(B) $52$`,
        },
        {
          stem: String.raw`The real number $x$ satisfies $x^2 - 5x + 1 = 0$. Find the value of $x^5 + \dfrac{1}{x^5}$.`,
          difficulty: 2,
          answer: String.raw`$2525$`,
        },
        {
          stem: String.raw`Let $x$ be a non-zero real number such that $x + \dfrac{1}{x}$ is an integer. Prove that $x^n + \dfrac{1}{x^n}$ is an integer for every positive integer $n$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $t_n = x^n + x^{-n}$, the recurrence $t_{n+1} = t_1 t_n - t_{n-1}$ (and $t_0 = 2$) gives integers by strong induction.`,
        },
        {
          stem: String.raw`The real number $x$ satisfies $x - \dfrac{1}{x} = 3$. Find $x^4 + \dfrac{1}{x^4}$.`,
          difficulty: 1,
          answer: String.raw`$119$`,
        },
        {
          stem: String.raw`The positive real number $x$ satisfies $x^2 + \dfrac{1}{x^2} = 47$. Find $\sqrt{x} + \dfrac{1}{\sqrt{x}}$.`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Let $x$ be a non-zero real number such that $x^2 + \dfrac{1}{x^2}$ and $x^3 + \dfrac{1}{x^3}$ are both integers. Prove that $x + \dfrac{1}{x}$ is an integer.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $t = x + \frac1x$ and $a = t^2 - 2$, we get $x^3 + x^{-3} = t(t^2 - 3) = t(a - 1)$ with $a - 1 \ge 1$, so $t$ is rational; a rational $t$ with $t^2 = a + 2$ an integer must be an integer.`,
        },
        {
          stem: String.raw`Let $k \ge 3$ be an integer and let $x$ be a real number with $x + \dfrac{1}{x} = k$. Prove that for every odd positive integer $n$, the number
$$\frac{x^n + x^{-n} - 2}{k - 2}$$
is the square of an integer.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $x^n + x^{-n} - 2 = \big(x^{n/2} - x^{-n/2}\big)^2$ and $k - 2 = \big(x^{1/2} - x^{-1/2}\big)^2$, so for $n = 2m + 1$ the quotient is $\big(x^{-m} + \cdots + x^{m}\big)^2 = \big(1 + t_1 + \cdots + t_m\big)^2$ with $t_j = x^j + x^{-j}$ integers.`,
        },
      ],
    },
    {
      id: "A1-telescoping",
      name: String.raw`Telescoping sums and products`,
      tests: String.raw`Long sums or products with a regular pattern in $k$. Split each term into a difference or ratio of consecutive values of some expression so that the middle cancels.`,
      questions: [
        {
          stem: String.raw`Evaluate $\left(1 - \dfrac{1}{2^2}\right)\left(1 - \dfrac{1}{3^2}\right)\left(1 - \dfrac{1}{4^2}\right)\cdots\left(1 - \dfrac{1}{50^2}\right)$.`,
          difficulty: 1,
          answer: String.raw`$\dfrac{51}{100}$`,
        },
        {
          stem: String.raw`Evaluate $\dfrac{3^3 - 8}{3^3 + 8} \cdot \dfrac{4^3 - 8}{4^3 + 8} \cdot \dfrac{5^3 - 8}{5^3 + 8} \cdots \dfrac{12^3 - 8}{12^3 + 8}$, giving your answer as a fraction in lowest terms.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{43}{143}$`,
        },
        {
          stem: String.raw`Evaluate $\displaystyle\sum_{k=1}^{12} \frac{k}{k^4 + 4}$, giving your answer as a fraction in lowest terms.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{1833}{4930}$`,
        },
        {
          stem: String.raw`Evaluate $\dfrac{1}{1 \cdot 2 \cdot 3} + \dfrac{1}{2 \cdot 3 \cdot 4} + \dfrac{1}{3 \cdot 4 \cdot 5} + \cdots + \dfrac{1}{8 \cdot 9 \cdot 10}$, giving your answer as a fraction in lowest terms.`,
          difficulty: 1,
          answer: String.raw`$\dfrac{11}{45}$`,
        },
        {
          stem: String.raw`Let $\theta = \arctan\dfrac{1}{3} + \arctan\dfrac{1}{7} + \arctan\dfrac{1}{13} + \cdots + \arctan\dfrac{1}{91}$, where the $k$-th angle is $\arctan\dfrac{1}{k^2 + k + 1}$ for $k = 1, 2, \ldots, 9$. Find $\tan\theta$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{9}{11}$`,
        },
        {
          stem: String.raw`Find the exact value of the infinite sum
$$\sum_{k=1}^{\infty} \frac{k^2 + k - 1}{(k + 2)!}.$$`,
          difficulty: 3,
          answer: String.raw`$\dfrac{1}{2}$`,
        },
        {
          stem: String.raw`Prove that there are infinitely many positive integers $n$ for which
$$\left(4 \cdot 1^4 + 1\right)\left(4 \cdot 2^4 + 1\right)\left(4 \cdot 3^4 + 1\right)\cdots\left(4n^4 + 1\right)$$
is a perfect square.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $4k^4 + 1 = h(k)\,h(k+1)$ with $h(k) = k^2 + (k - 1)^2$, so the product telescopes to $\big(n^2 + (n+1)^2\big)$ times a square; and $n^2 + (n + 1)^2 = c^2$ has infinitely many solutions, since $(n, c) \mapsto (3n + 2c + 1,\ 4n + 3c + 2)$ maps one solution to a larger one (starting from $(3, 5)$).`,
        },
      ],
    },
    {
      id: "A1-sophie-germain",
      name: String.raw`Sophie Germain factorisation`,
      tests: String.raw`Expressions of the form $a^4 + 4b^4$, sometimes disguised (powers of $2$ or $4$, or a constant that is $4$ times a fourth power). Factorising shows the number is composite or finds its prime factors.`,
      questions: [
        {
          stem: String.raw`Factorise $x^4 + 64$ as a product of two quadratics with integer coefficients.`,
          difficulty: 1,
          answer: String.raw`$(x^2 + 4x + 8)(x^2 - 4x + 8)$`,
        },
        {
          stem: String.raw`Find the largest prime factor of $2^{18} + 1$.`,
          difficulty: 2,
          answer: String.raw`$109$`,
        },
        {
          stem: String.raw`Find all pairs $(m, n)$ of positive integers for which $m^4 + 4n^4$ is prime, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $(m, n) = (1, 1)$. **Proof.** Key idea: $m^4 + 4n^4 = \big((m+n)^2 + n^2\big)\big((m-n)^2 + n^2\big)$, and the smaller factor equals $1$ only when $m = n = 1$.`,
        },
        {
          stem: String.raw`Evaluate $\dfrac{2026^4 + 4}{2025^2 + 1}$.`,
          difficulty: 1,
          answer: String.raw`$4108730$ (that is, $2027^2 + 1$)`,
        },
        {
          stem: String.raw`Find the largest prime factor of $4^9 + 9^4$.`,
          difficulty: 2,
          answer: String.raw`$881$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which $n^4 + 4$ is a power of a prime (that is, equal to $p^k$ for some prime $p$ and positive integer $k$), and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $n = 1$. **Proof.** Key idea: $n^4 + 4 = \big((n+1)^2 + 1\big)\big((n-1)^2 + 1\big)$; if both factors exceeded $1$ they would both be powers of the same odd prime $p$, which then divides their difference $4n$ and hence $n$, but then $(n+1)^2 + 1 \equiv 2 \pmod p$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which $n^4 + 4$ can be written as $ab$ with positive integers $a \le b$ and $b - a < 4n$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$n = 2$ and $n = 4$ (for example $20 = 4 \cdot 5$ and $260 = 13 \cdot 20$). **Proof.** Key idea: Sophie Germain gives $(n^2 - 2n + 2)(n^2 + 2n + 2)$ with gap exactly $4n$; for any $ab = n^4 + 4$ write $a + b = 2n^2 + s$, so $(b - a)^2 = s^2 + 4n^2 s - 16$, and $b - a < 4n$ forces $1 \le s \le 3$, where $s = 2, 3$ fail mod $8$ and mod $3$ and $s = 1$ needs $4n^2 - 15$ to be a square.`,
        },
      ],
    },
    {
      id: "A1-constraints",
      name: String.raw`Evaluating expressions under constraints`,
      tests: String.raw`You are given a few symmetric conditions (a sum, a product, a sum of squares) and asked for a higher power sum. Express everything through $a + b$, $ab$ (or $e_1, e_2, e_3$) instead of solving.`,
      questions: [
        {
          stem: String.raw`Real numbers $a$ and $b$ satisfy $a + b = 5$ and $ab = 3$. Find $a^4 + b^4$.`,
          difficulty: 1,
          answer: String.raw`$343$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 0$ and $a^2 + b^2 + c^2 = 6$. Find $a^4 + b^4 + c^4$.`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Real numbers $x, y, z$ satisfy
$$x + y + z = 3, \qquad x^2 + y^2 + z^2 = 9, \qquad x^3 + y^3 + z^3 = 24.$$
Find $x^4 + y^4 + z^4$.`,
          difficulty: 3,
          answer: String.raw`$69$`,
        },
        {
          stem: String.raw`Real numbers $a$ and $b$ satisfy $a - b = 2$ and $ab = 5$. Find $a^3 - b^3$.`,
          difficulty: 1,
          answer: String.raw`$38$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 3$ and $ab + bc + ca = 3$. Find $a^{2026} + b^{2026} + c^{2026}$.`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Three distinct real numbers $a, b, c$ satisfy
$$a^3 - 6a = b^3 - 6b = c^3 - 6c.$$
Find $a^4 + b^4 + c^4$.`,
          difficulty: 3,
          answer: String.raw`$72$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $m$ with the following property: whenever real numbers $a, b, c$ are such that $a + b + c$, $a^2 + b^2 + c^2$ and $a^3 + b^3 + c^3$ are all integers, the number $m\left(a^4 + b^4 + c^4\right)$ is also an integer.`,
          difficulty: 4,
          answer: String.raw`$m = 6$. Key idea: from Newton's identities $2e_2$ and $6e_3$ are integers and $6p_4$ is a polynomial with integer coefficients in $p_1, p_2, p_3$; real examples such as $(p_1, p_2, p_3) = (-6, 13, -30)$ and $(-5, 11, -28)$ give $p_4 = \frac{145}{2}$ and $\frac{229}{3}$, so $2 \mid m$ and $3 \mid m$.`,
        },
      ],
    },
    {
      id: "A1-nested-radicals",
      name: String.raw`Surds and nested radicals`,
      tests: String.raw`Simplifying $\sqrt{a \pm 2\sqrt{b}}$ or sums of cube roots of conjugate surds, and integer problems where a sum of square roots equals a surd. Look for a perfect square or cube hiding under the root.`,
      questions: [
        {
          stem: String.raw`Simplify $\sqrt{11 - 6\sqrt{2}}$.`,
          difficulty: 1,
          answer: String.raw`$3 - \sqrt{2}$`,
        },
        {
          stem: String.raw`Evaluate $\sqrt[3]{38 + 17\sqrt{5}} + \sqrt[3]{38 - 17\sqrt{5}}$, where both are real cube roots.`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Find all pairs $(a, b)$ of positive integers with $a < b$ such that $\sqrt{a} + \sqrt{b} = \sqrt{98}$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(a, b) = (2, 72), (8, 50), (18, 32)$. **Proof.** Key idea: squaring $\sqrt{b} = \sqrt{98} - \sqrt{a}$ shows $\sqrt{98a} = 7\sqrt{2a}$ is rational, so $a = 2m^2$ and then $b = 2(7 - m)^2$.`,
        },
        {
          stem: String.raw`Simplify $\sqrt{8 + 2\sqrt{15}} - \sqrt{8 - 2\sqrt{15}}$.`,
          difficulty: 1,
          answer: String.raw`$2\sqrt{3}$`,
        },
        {
          stem: String.raw`Simplify $\sqrt{6 - \sqrt{17 + 12\sqrt{2}}}$.`,
          difficulty: 2,
          answer: String.raw`$\sqrt{2} - 1$`,
        },
        {
          stem: String.raw`Find all pairs $(x, y)$ of rational numbers with $x \ge y \ge 0$ such that
$$\sqrt{x} + \sqrt{y} = \sqrt{2 + \sqrt{3}},$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $(x, y) = \left(\frac32, \frac12\right)$. **Proof.** Key idea: squaring gives $2\sqrt{xy} = \sqrt3 + (2 - x - y)$; squaring again leaves a rational multiple of $\sqrt3$ that must vanish, so $x + y = 2$ and $4xy = 3$.`,
        },
        {
          stem: String.raw`Find all pairs $(a, b)$ of positive integers with $a < b$ such that $\sqrt[3]{a} + \sqrt[3]{b} = \sqrt[3]{250}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$(a, b) = (2, 128)$ and $(16, 54)$. **Proof.** Key idea: cubing, $t^3 = a + b + 3\sqrt[3]{ab}\,t$ with $t = \sqrt[3]{250}$, shows $\sqrt[3]{a}\sqrt[3]{b} = r/t$ for a rational $r$; then $w = \sqrt[3]{a}/t$ is a root of a rational quadratic with $w^3$ rational, which forces $w$ rational, so $a = 250w^3$, $b = 250(1-w)^3$ with $w \in \{\frac15, \frac25, \frac35, \frac45\}$.`,
        },
      ],
    },
  ],
});
