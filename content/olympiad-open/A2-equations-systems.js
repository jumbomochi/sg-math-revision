H2.addTopic({
  id: "A2",
  title: "Equations and Systems",
  summary: String.raw`Symmetric and cyclic systems, substitutions that lower the degree, equations with radicals and absolute values, exponential equations, counting real solutions, and equations and systems in integers.`,
  concepts: [
    {
      title: String.raw`Symmetric systems: use the sum and the product`,
      body: String.raw`If a system in $x$ and $y$ is unchanged when $x$ and $y$ swap, rewrite it with $s = x + y$ and $p = xy$.

- Useful forms: $x^2 + y^2 = s^2 - 2p$, $x^3 + y^3 = s^3 - 3sp$, $x^2 + xy + y^2 = s^2 - p$.
- Once $s$ and $p$ are known, $x$ and $y$ are the roots of $t^2 - st + p = 0$.
- **Real** solutions need $s^2 \ge 4p$. Discard $(s, p)$ pairs that fail this.
- Example: $x + y = 5$, $xy = 6$ gives $t^2 - 5t + 6 = 0$, so $\{x, y\} = \{2, 3\}$: two ordered pairs.`,
    },
    {
      title: String.raw`Cyclic systems and monotonic functions`,
      body: String.raw`- In a cyclic system $y = f(x)$, $z = f(y)$, $x = f(z)$ with $f$ **strictly increasing**: if $x \ge y$ then $f(x) \ge f(y)$, i.e. $y \ge z$, and then $z \ge x$. So $x = y = z$, and you only need to solve $t = f(t)$.
- If the system is symmetric, you may assume an order such as $x \ge y \ge z$ (then list all permutations at the end).
- Adding or subtracting the equations often factorises: $x^2 - y^2 = k(y - x)$ gives $(x - y)(x + y + k) = 0$.
- Example: $x^3 + x = 2y$, $y^3 + y = 2x$. Here $f(t) = \frac{t^3 + t}{2}$ is increasing, so $x = y$ and $t^3 = t$, giving $(0, 0)$, $(1, 1)$, $(-1, -1)$.`,
    },
    {
      title: String.raw`Substitutions that lower the degree`,
      body: String.raw`- **Repeated block**: if an expression such as $x^2 + 3x$ keeps appearing, call it $u$. In a product of four linear factors, pair them so the two quadratics share the same $x^2 + bx$ part.
- **Reciprocal (palindromic) equations**: coefficients read the same both ways. Divide by $x^2$ and put $t = x + \frac{1}{x}$, using $x^2 + \frac{1}{x^2} = t^2 - 2$.
- Example: $x^4 + x^3 - 4x^2 + x + 1 = 0$ becomes $t^2 + t - 6 = 0$, so $t = 2$ (giving $x = 1$) or $t = -3$ (giving $x = \frac{-3 \pm \sqrt{5}}{2}$).
- **Completing a square** in a fraction: $a^2 + b^2 = (a \pm b)^2 \mp 2ab$ can turn a messy equation into a quadratic in a new variable.`,
    },
    {
      title: String.raw`Equations with radicals`,
      body: String.raw`- First write down the **domain** (everything under an even root must be $\ge 0$).
- Isolate one radical, square, simplify, and repeat if needed.
- Squaring can create **extraneous roots**: always check every candidate in the original equation. A square root is never negative, so $\sqrt{A} = B$ needs $B \ge 0$.
- Example: $\sqrt{x + 3} = x + 1$ gives $x^2 + x - 2 = 0$, so $x = 1$ or $x = -2$. But $x = -2$ makes the right side $-1 < 0$, so only $x = 1$ works.
- Several radicals with a common pattern: let $t$ be a sum of roots, then $t^2$ often contains the other terms.`,
    },
    {
      title: String.raw`Absolute values`,
      body: String.raw`- Find the **critical points** where each expression inside $|\ \cdot\ |$ is zero. They split the line into intervals; on each interval remove the bars with the correct signs, solve, and keep only solutions inside that interval.
- $|x - a|$ is the **distance** from $x$ to $a$ on the number line. So $|x - a| + |x - b|$ is at least $|a - b|$, with equality exactly when $x$ lies between $a$ and $b$.
- Example: $|x - 1| + |x + 2| = 3$ holds for every $x$ in $[-2, 1]$, while $|x - 1| + |x + 2| = 5$ has exactly the two solutions $x = 2$ and $x = -3$.
- $|A| = B$ means $B \ge 0$ and $A = \pm B$.`,
    },
    {
      title: String.raw`Exponential equations`,
      body: String.raw`- Rewrite with a **common base**: $8^x = 2^{3x}$, $2^{x+3} = 8 \cdot 2^x$.
- Substitute $t = a^x$, remembering $t > 0$. Example: $9^x - 3^{x+1} + 2 = 0$ is $t^2 - 3t + 2 = 0$ with $t = 3^x$, so $3^x = 1$ or $2$, i.e. $x = 0$ or $x = \log_3 2$.
- Mixed bases such as $9^x, 12^x, 16^x$: divide by $16^x$ and use $t = \left(\frac{3}{4}\right)^x$, because $9^x = (3^x)^2$ and $12^x = 3^x \cdot 4^x$.
- **Monotonicity gives uniqueness**: $3^x + 4^x = 5^x$ is $\left(\frac{3}{5}\right)^x + \left(\frac{4}{5}\right)^x = 1$; the left side is strictly decreasing, so the obvious root $x = 2$ is the only one.`,
    },
    {
      title: String.raw`Counting real solutions`,
      body: String.raw`- Rewrite as $f(x) = k$ and count the intersections of $y = f(x)$ with the horizontal line $y = k$. Local maxima and minima are the values of $k$ where the count changes.
- A strictly monotonic function takes each value at most once. A continuous function that changes sign has a root in between (intermediate value theorem).
- For a quadratic, the discriminant decides between $0$, $1$ and $2$ roots. Under $x \mapsto |x|$ or $|f(x)|$ the graph reflects, so count carefully.
- With the floor function, set $\lfloor x \rfloor = n$, solve for $x$ in terms of $n$, and impose $n \le x < n + 1$.`,
      figure: {
        type: "plot",
        x: [-2.6, 3.9],
        y: [-3.2, 3.6],
        height: 280,
        axisLabels: ["x", "y"],
        curves: [
          { fn: "x => x*x*x - 3*x", domain: [-2.35, 2.4], label: "y = x³ − 3x", labelAt: 2.2 },
        ],
        lines: [
          { y: 1, label: "y = 1" },
          { y: 2, label: "y = 2" },
          { y: 3, label: "y = 3" },
        ],
        points: [
          { x: -1.532, y: 1 },
          { x: -0.347, y: 1 },
          { x: 1.879, y: 1 },
          { x: -1, y: 2 },
          { x: 2, y: 2 },
          { x: 2.104, y: 3 },
        ],
        caption: String.raw`$x^3 - 3x = k$ has $3$ real solutions for $-2 < k < 2$, $2$ for $k = \pm 2$, and $1$ otherwise.`,
        alt: "Graph of y = x cubed minus 3x with a local maximum at (-1, 2) and a local minimum at (1, -2). The line y = 1 cuts it three times, y = 2 touches at the maximum and cuts once more, and y = 3 cuts it once.",
      },
    },
    {
      title: String.raw`Equations in integers`,
      body: String.raw`- **Factorise**, then list factor pairs. For $xy + ax + by = c$ add $ab$ to both sides: $(x + b)(y + a) = c + ab$. Example: $xy - x - y = 1$ becomes $(x - 1)(y - 1) = 2$.
- **Difference of squares**: $x^2 - y^2 = N$ means $(x - y)(x + y) = N$, and the two factors have the same parity.
- **Squeeze between consecutive squares**: if $m^2 < N < (m + 1)^2$ then $N$ is not a perfect square. Example: for every positive integer $n$, $n^2 < n^2 + n + 1 < (n + 1)^2$, so $n^2 + n + 1$ is never a square.
- **Bound, then check**: use size (or an assumed order like $x \le y$) to leave finitely many cases. Parity or remainders modulo a small number rule out more.`,
    },
  ],
  archetypes: [
    {
      id: "A2-symmetric-systems",
      name: String.raw`Symmetric and cyclic systems`,
      tests: String.raw`Systems that do not change when the variables are swapped (use $x + y$ and $xy$), or that cycle $x \to y \to z \to x$ (use monotonicity or an ordering argument).`,
      questions: [
        {
          stem: String.raw`Real numbers $x$ and $y$ satisfy $x + y = 6$ and $x^3 + y^3 = 72$. Find $xy$.`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Find all pairs $(x, y)$ of real numbers such that
$$x^2 + xy + y^2 = 19 \quad \text{and} \quad x + xy + y = 11.$$`,
          difficulty: 2,
          answer: String.raw`$(x, y) = (2, 3)$ and $(3, 2)$`,
        },
        {
          stem: String.raw`Find all triples $(x, y, z)$ of real numbers such that
$$x^3 + 2 = 3y, \qquad y^3 + 2 = 3z, \qquad z^3 + 2 = 3x,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(1, 1, 1)$ and $(-2, -2, -2)$. **Proof.** Key idea: $f(t) = \frac{t^3 + 2}{3}$ is strictly increasing and $y = f(x)$, $z = f(y)$, $x = f(z)$, so $x \ge y$ forces $y \ge z \ge x$; hence $x = y = z$ and $t^3 - 3t + 2 = (t - 1)^2(t + 2) = 0$.`,
        },
      ],
    },
    {
      id: "A2-substitution",
      name: String.raw`Substitution to reduce the degree`,
      tests: String.raw`Quartic or rational equations with a hidden repeated block: a repeated quadratic, four linear factors that pair up, or a sum of squares that completes to a square of a simpler expression.`,
      questions: [
        {
          stem: String.raw`Find all real solutions of $(x^2 - 3x)^2 - 2(x^2 - 3x) - 8 = 0$.`,
          difficulty: 1,
          answer: String.raw`$x = -1, 1, 2, 4$`,
        },
        {
          stem: String.raw`Find all real solutions of $(x - 1)(x - 2)(x - 5)(x - 6) = 32$.`,
          difficulty: 2,
          answer: String.raw`$x = \dfrac{7 \pm \sqrt{41}}{2}$`,
        },
        {
          stem: String.raw`Find all real solutions of
$$x^2 + \frac{9x^2}{(x - 3)^2} = 16.$$`,
          difficulty: 3,
          answer: String.raw`$x = -1 + \sqrt{7}$ and $x = -1 - \sqrt{7}$`,
        },
      ],
    },
    {
      id: "A2-radicals-absolute-values",
      name: String.raw`Equations with radicals and absolute values`,
      tests: String.raw`Equations with square roots (square carefully and check for extraneous roots) or absolute values (split into cases at the critical points, or think of distances).`,
      questions: [
        {
          stem: String.raw`How many real numbers $x$ satisfy $|x - 2| + |x + 4| = 10$?`,
          difficulty: 1,
          choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`infinitely many`],
          answer: String.raw`(C) $2$`,
        },
        {
          stem: String.raw`Find all real solutions of $\sqrt{3x + 1} - \sqrt{x - 1} = 2$.`,
          difficulty: 2,
          answer: String.raw`$x = 1$ and $x = 5$`,
        },
        {
          stem: String.raw`Find all real solutions of
$$2\sqrt{x} + 2\sqrt{x + 9} + 2\sqrt{x^2 + 9x} = 54 - 2x.$$`,
          difficulty: 3,
          answer: String.raw`$x = \dfrac{400}{49}$`,
        },
      ],
    },
    {
      id: "A2-exponential",
      name: String.raw`Exponential equations`,
      tests: String.raw`Equations with $a^x$ terms. Rewrite with a common base, substitute $t = a^x > 0$, divide through by one power when several bases appear, and use monotonicity to show a root is unique.`,
      questions: [
        {
          stem: String.raw`Find the real number $x$ such that $2^{x+3} + 2^{x+1} = 320$.`,
          difficulty: 1,
          answer: String.raw`$x = 5$`,
        },
        {
          stem: String.raw`Find all real solutions of $3 \cdot 4^x + 2 \cdot 9^x = 5 \cdot 6^x$.`,
          difficulty: 2,
          answer: String.raw`$x = 0$ and $x = 1$`,
        },
        {
          stem: String.raw`Find all real numbers $x$ such that
$$4^x + 9^x + 25^x = 6^x + 10^x + 15^x,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $x = 0$. **Proof.** Key idea: with $a = 2^x$, $b = 3^x$, $c = 5^x$ the equation is $a^2 + b^2 + c^2 = ab + bc + ca$, i.e. $\frac{1}{2}\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big] = 0$, forcing $2^x = 3^x$.`,
        },
      ],
    },
    {
      id: "A2-counting-solutions",
      name: String.raw`Counting real solutions`,
      tests: String.raw`"How many real solutions…" or "for which $k$ are there exactly $n$ solutions". Sketch $y = f(x)$ against $y = k$, use monotonicity or a factorisation, or split by $\lfloor x \rfloor$.`,
      questions: [
        {
          stem: String.raw`For how many integers $k$ does the equation $|x^2 - 6x + 5| = k$ have exactly four real solutions?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Prove that the equation $x^4 + 3 = 4x$ has exactly one real solution.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: $x^4 - 4x + 3 = (x - 1)^2(x^2 + 2x + 3)$ and $x^2 + 2x + 3 = (x + 1)^2 + 2 > 0$, so $x = 1$ is the only root.`,
        },
        {
          stem: String.raw`How many real numbers $x$ satisfy $x^2 - 10\lfloor x \rfloor + 21 = 0$? (Here $\lfloor x \rfloor$ is the greatest integer not exceeding $x$.)`,
          difficulty: 3,
          answer: String.raw`$5$`,
        },
      ],
    },
    {
      id: "A2-integer-solutions",
      name: String.raw`Equations and systems in integers`,
      tests: String.raw`Find all integer (or positive integer) solutions. Factorise into a product equal to a constant, combine equations so they factorise, or squeeze an expression between consecutive squares.`,
      questions: [
        {
          stem: String.raw`How many ordered pairs $(x, y)$ of positive integers satisfy $xy - 2x - 3y = 0$?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`How many ordered triples $(x, y, z)$ of positive integers satisfy both $xy + z = 47$ and $yz + x = 47$?`,
          difficulty: 2,
          answer: String.raw`$47$`,
        },
        {
          stem: String.raw`Find all pairs $(x, y)$ of positive integers such that $x^2 + 4y$ and $y^2 + 8x$ are both perfect squares, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $(x, y) = (2, 3)$. **Proof.** Key idea: parity forces $x^2 + 4y = (x + 2m)^2$, so $y = m(x + m) > x$, and then squeezing $y^2 + 8x$ below $(y + 4)^2$ with parity forces $y^2 + 8x = (y + 2)^2$.`,
        },
      ],
    },
  ],
});
