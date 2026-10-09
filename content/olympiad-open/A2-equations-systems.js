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
    {
      title: String.raw`Cyclic systems with a decreasing function`,
      body: String.raw`If $f$ is strictly **decreasing**, then $f \circ f$ is increasing and $f \circ f \circ f$ is decreasing again.

- **Odd cycle** ($x = f(y)$, $y = f(z)$, $z = f(x)$): $x$ is a fixed point of the decreasing function $f \circ f \circ f$, which has at most one, so $x = y = z$.
- **Even cycle**: $x = f(f(x))$ with $f \circ f$ increasing; now there can be genuine **2-cycles** $x = f(y)$, $y = f(x)$ with $x \ne y$, and alternating solutions $(x, y, x, y, \ldots)$ appear.
- For a 2-cycle, subtract the two equations to factor out $x - y$, then add them, and work with $x + y$ and $xy$.
- Example: for positive reals, $x = \frac1y$, $y = \frac1z$, $z = \frac1x$ forces $x = y = z = 1$, but $x = \frac1y$, $y = \frac1x$ holds for every pair $\left(t, \frac1t\right)$.`,
    },
    {
      title: String.raw`Two tricks for stubborn quartics`,
      body: String.raw`- **Add a square to both sides (Ferrari)**: move terms so that one side is $(x^2 + c)^2$ and choose $c$ so the other side becomes a perfect square too. Example: $x^4 - 2x^2 - 8x - 3 = 0$ is $(x^2 + 1)^2 = 4x^2 + 8x + 4 = 4(x + 1)^2$, so $x^2 + 1 = \pm 2(x + 1)$.
- **Treat a constant as the unknown**: if the coefficients involve a number $a$ (such as $\sqrt2$ or a parameter), the equation may be only quadratic in $a$. Solve for $a$, and the equation splits into factors of lower degree in $x$. Example: $x^3 + x^2 - \sqrt2\,x^2 - \sqrt2\,x - \sqrt2 + 2 = 0$ is $a^2 - (x^2 + x + 1)a + x^3 + x^2 = 0$ with $a = \sqrt2$, i.e. $(a - x^2)(a - x - 1) = 0$.
- After splitting, count real roots with the discriminant of each factor and check whether the factors share a root.`,
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
        {
          stem: String.raw`How many ordered pairs $(x, y)$ of real numbers satisfy $x + y = 4$ and $x^2 + y^2 = 4$?`,
          difficulty: 1,
          choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`$4$`],
          answer: String.raw`(A) $0$`,
        },
        {
          stem: String.raw`Find all triples $(x, y, z)$ of real numbers such that
$$x + y + z = 2, \qquad x^2 + y^2 + z^2 = 6, \qquad x^3 + y^3 + z^3 = 8.$$`,
          difficulty: 2,
          answer: String.raw`The six permutations of $(2, 1, -1)$`,
        },
        {
          stem: String.raw`Find all triples $(x, y, z)$ of real numbers such that
$$x + 2y^3 = 3, \qquad y + 2z^3 = 3, \qquad z + 2x^3 = 3,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $(1, 1, 1)$. **Proof.** Key idea: $x = f(y)$, $y = f(z)$, $z = f(x)$ with $f(t) = 3 - 2t^3$ strictly decreasing, so $x = f(f(f(x)))$ where $f \circ f \circ f$ is also strictly decreasing; it has only one fixed point, namely the root $t = 1$ of $t + 2t^3 = 3$.`,
        },
        {
          stem: String.raw`How many quadruples $(x, y, z, w)$ of real numbers satisfy
$$x + y^3 = 1, \qquad y + z^3 = 1, \qquad z + w^3 = 1, \qquad w + x^3 = 1?$$`,
          difficulty: 4,
          answer: String.raw`$5$`,
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
        {
          stem: String.raw`Find all real solutions of $\dfrac{x + 1}{x} + \dfrac{x}{x + 1} = \dfrac{5}{2}$.`,
          difficulty: 1,
          answer: String.raw`$x = 1$ and $x = -2$`,
        },
        {
          stem: String.raw`Find all real solutions of $3x^4 - 4x^3 - 14x^2 - 4x + 3 = 0$.`,
          difficulty: 2,
          answer: String.raw`$x = -1, \dfrac{1}{3}, 3$`,
        },
        {
          stem: String.raw`Find all real solutions of
$$\frac{x}{x^2 + x + 1} + \frac{2x}{x^2 + 3x + 1} = 1.$$`,
          difficulty: 3,
          answer: String.raw`Only $x = -1$`,
        },
        {
          stem: String.raw`Find all real solutions of
$$x^8 + x^6 - 20x^5 + 10x^4 - 40x^3 + 4x^2 + 16 = 0.$$`,
          difficulty: 4,
          answer: String.raw`$x = \dfrac{2 + \sqrt{2} \pm \sqrt{4\sqrt{2} - 2}}{2}$`,
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
          choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`infinitely many`],
          answer: String.raw`(A) $2$`,
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
        {
          stem: String.raw`Find all real solutions of $\big|\,|x - 1| - 2\,\big| = 1$.`,
          difficulty: 1,
          answer: String.raw`$x = -2, 0, 2, 4$`,
        },
        {
          stem: String.raw`Find all real solutions of $\sqrt[3]{x + 1} + \sqrt[3]{25 - x} = 2$.`,
          difficulty: 2,
          answer: String.raw`$x = -2$ and $x = 26$`,
        },
        {
          stem: String.raw`Find all real solutions of
$$\sqrt{3x^2 + 2x + 4} - \sqrt{3x^2 - 6x + 4} = 2x.$$`,
          difficulty: 3,
          answer: String.raw`$x = 0$ and $x = 1$`,
        },
        {
          stem: String.raw`Find all real numbers $x$ such that
$$\sqrt{3x + 2} + \sqrt[3]{2x + 1} = 2x + 1,$$
and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$x = \dfrac{1 + \sqrt{5}}{2}$ and $x = \dfrac{1 - \sqrt{5}}{2}$. **Proof.** Key idea: write the equation as $\big(\sqrt{3x + 2} - (x + 1)\big) + \big(\sqrt[3]{2x + 1} - x\big) = 0$ and rationalise both brackets: the numerators are $-(x^2 - x - 1)$ and $-(x + 1)(x^2 - x - 1)$, and every other factor is positive for $x \ge -\frac{2}{3}$, so $x^2 - x - 1 = 0$.`,
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
        {
          stem: String.raw`How many real numbers $x$ satisfy $2^x = 3 - x$?`,
          difficulty: 1,
          choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`infinitely many`],
          answer: String.raw`(B) $1$`,
        },
        {
          stem: String.raw`Find all real solutions of $4^x + 4^{-x} - 2^{x+1} - 2^{1-x} = 6$.`,
          difficulty: 2,
          answer: String.raw`$x = \pm\log_2\!\big(2 + \sqrt{3}\big)$`,
        },
        {
          stem: String.raw`Find all triples $(x, y, z)$ of real numbers such that
$$2^x = 3y - 1, \qquad 2^y = 3z - 1, \qquad 2^z = 3x - 1,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(1, 1, 1)$ and $(3, 3, 3)$. **Proof.** Key idea: $y = \frac{2^x + 1}{3}$ is a strictly increasing function of $x$, so the cyclic order argument forces $x = y = z = t$; then the convex curve $y = 2^t$ meets the line $y = 3t - 1$ at most twice, at $t = 1$ and $t = 3$.`,
        },
        {
          stem: String.raw`Find all real numbers $x$ such that $1 + 5^x + 6^x = 2^x + 3^x + 7^x$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$x = 0$, $x = 1$ and $x = 2$. **Proof.** Key idea: these work because $1 + 5 + 6 = 2 + 3 + 7$ and $1 + 25 + 36 = 4 + 9 + 49$, and there are no more because the coefficients of $f(x) = 1 - 2^x - 3^x + 5^x + 6^x - 7^x$, listed by increasing base, change sign only three times, while dividing by $c^x$ for a base $c$ at a sign change and differentiating removes one sign change and, by Rolle's theorem, at most one root (a sum with no sign change has no root).`,
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
        {
          stem: String.raw`How many real numbers $x$ satisfy $x\,|x| = 4x$?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Let $f(x) = x^2 - 2x$. How many distinct real numbers $x$ satisfy $f(f(x)) = 3$?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`How many real solutions does the equation $(x^2 - 3)^2 - 3 = x$ have?`,
          difficulty: 3,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Find all real numbers $a$ for which the equation
$$x^4 - 3x^3 + 2x^2 + ax - a^2 = 0$$
has exactly three distinct real solutions.`,
          difficulty: 4,
          answer: String.raw`$a = -\dfrac{1}{4},\ 0,\ \dfrac{3}{4},\ 1$`,
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
        {
          stem: String.raw`How many ordered pairs $(x, y)$ of positive integers satisfy $3x + 5y = 100$?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find all pairs $(x, y)$ of positive integers such that $x^2 = y! + 12$.`,
          difficulty: 2,
          answer: String.raw`Only $(x, y) = (6, 4)$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which $n^2 + 2026n$ is a perfect square.`,
          difficulty: 3,
          answer: String.raw`Only $n = 512072$`,
        },
        {
          stem: String.raw`Find all positive integers $k$ for which the equation
$$x^2 + y^2 + x + 3y = kxy$$
has a solution in positive integers $x$ and $y$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$k = 3, 4, 5, 6$. **Proof.** Key idea (Vieta jumping): in a solution with $x + y$ minimal, replacing $y$ by the other root $\frac{x^2 + x}{y}$, or $x$ by $\frac{y^2 + 3y}{x}$, cannot lower the sum, which forces $x = y$ (then $k = 2 + \frac{4}{x}$ with $x \in \{1, 2, 4\}$) or $x = y + 1$ (then only $(x, y) = (2, 1)$ works, giving $k = 5$).`,
        },
      ],
    },
  ],
});
