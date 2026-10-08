H2.addTopic({
  id: "A6",
  title: "Functional Equations",
  summary: String.raw`Substituting special values, building systems by swapping variables, Cauchy-type equations over the integers and rationals, injectivity and surjectivity, f(f(x)) problems, and functions on the positive integers.`,
  concepts: [
    {
      title: String.raw`Substitute special values`,
      body: String.raw`An equation that holds "for all $x, y$" holds in particular for clever choices. Standard first moves:

- $x = y = 0$ to find $f(0)$; then $y = 0$ alone to relate $f(x)$ to $f(0)$.
- $y = x$, $y = -x$, $y = 1$, or swapping $x$ and $y$ and comparing.
- Choose values that make an argument vanish or repeat, e.g. $y = x$ in $f(x - y)$.
- Example: if $f(x + y) = f(x) + f(y) + 1$, then $x = y = 0$ gives $f(0) = 2f(0) + 1$, so $f(0) = -1$.
- When a substitution gives a quadratic such as $f(0)^2 = f(0)$, **split into cases** and rule out the bad ones.`,
    },
    {
      title: String.raw`Always check your answer`,
      body: String.raw`Substitutions only give **necessary** conditions: they show that a solution must have a certain form. A "find all functions" solution has two parts:

1. Show that every solution must be one of your candidates.
2. Substitute each candidate back into the original equation to show that it really works.

- Example: $f(x)^2 = x^2$ for all $x$ does **not** force $f(x) = x$ or $f(x) = -x$ for all $x$ at once; $f$ could choose a sign separately at each $x$. Be careful about "pointwise" conclusions.
- Guessing helps: try $f(x) = ax + b$ or $f(x) = ax^2 + bx + c$ and compare coefficients to find likely answers, then prove there are no others.`,
    },
    {
      title: String.raw`Build a system by changing the variable`,
      body: String.raw`If the equation links $f(x)$ with $f$ at a related point, such as $f(1/x)$, $f(-x)$ or $f(1 - x)$, substitute that related point to get a second equation, then **solve the linear system** for $f(x)$.

- Example: $f(x) + 2f(-x) = x$. Replacing $x$ by $-x$ gives $f(-x) + 2f(x) = -x$. Eliminating $f(-x)$: $3f(x) = -3x$, so $f(x) = -x$ (and it checks).
- Look for a map that returns to $x$ when repeated: $x \mapsto -x$, $x \mapsto \dfrac1x$ and $x \mapsto 1 - x$ have period $2$. Some maps take more steps to return; keep substituting until the cycle closes, then solve the resulting system.
- If the coefficients of the system depend on $x$, check that its determinant is never zero.`,
    },
    {
      title: String.raw`Cauchy's equation over the integers and rationals`,
      body: String.raw`If $f(x + y) = f(x) + f(y)$ for all rational $x, y$, then $f(x) = cx$ with $c = f(1)$:

- $f(0) = 0$, $f(nx) = nf(x)$ by induction, $f(-x) = -f(x)$, and $q\,f\!\left(\tfrac{p}{q}\right) = f(p) = p\,f(1)$.
- Over the reals the same conclusion needs an extra condition (for example $f$ monotonic or continuous).
- **Reduce to Cauchy**: subtract a particular solution. Example: if $f(x + y) = f(x) + f(y) - 1$, then $g(x) = f(x) - 1$ satisfies $g(x + y) = g(x) + g(y)$.
- On the integers, setting $y = 1$ turns many equations into a recurrence for $f(n + 1)$; solve it by induction in both directions.`,
    },
    {
      title: String.raw`Injective and surjective`,
      body: String.raw`- $f$ is **injective** if $f(a) = f(b)$ forces $a = b$. To prove it, assume $f(a) = f(b)$, substitute both into the equation, and compare.
- $f$ is **surjective** if every value is taken. If one side of the equation can be made to equal any number (e.g. $f(\ldots) = x + \text{const}$), then $f$ is surjective.
- Example: if $f(f(x)) = 2x + 3$ for all real $x$, then $f(a) = f(b)$ gives $2a + 3 = 2b + 3$, so $f$ is injective; and $f$ takes every real value, since $2x + 3$ does.
- Surjectivity lets you pick $a$ with $f(a) = 0$ and substitute it; injectivity lets you cancel $f$ from $f(\text{this}) = f(\text{that})$.`,
    },
    {
      title: String.raw`Equations involving f(f(x))`,
      body: String.raw`- Apply $f$ to both sides, or substitute $f(x)$ for $x$: from $f(f(x)) = g(x)$ you get $f(g(x)) = f(f(f(x))) = g(f(x))$.
- Example: if $f(f(x)) = x^2$, then $f(x^2) = f(f(f(x))) = f(x)^2$.
- For a linear guess $f(x) = ax + b$: $f(f(x)) = a^2 x + ab + b$, so compare coefficients.
- Fixed points matter: if $f(f(a)) = a$ then $f$ swaps $a$ and $f(a)$ (or fixes $a$).`,
    },
    {
      title: String.raw`Functions on the positive integers`,
      body: String.raw`- Compute $f(1), f(2), f(3), \ldots$, guess the pattern, then prove it by (strong) induction.
- If $f$ is **strictly increasing** with integer values, then $f(n + 1) \ge f(n) + 1$, so $f(n + k) \ge f(n) + k$, with equality only if every step is exactly $1$.
- Example: $f(1) = 1$ and $f(n + 1) = f(n) + 2n + 1$ give $1, 4, 9, 16, \ldots$, and induction proves $f(n) = n^2$.`,
    },
    {
      title: String.raw`Definitions through 2n and 2n + 1`,
      body: String.raw`Rules for $f(2n)$ and $f(2n + 1)$ act on the **binary digits** of $n$: $2n$ appends a $0$ and $2n + 1$ appends a $1$, so going from $n$ back to $\lfloor n/2 \rfloor$ deletes the last binary digit.

- Write $n$ in base $2$ and follow what the rule does to each digit.
- Example: $f(1) = 1$, $f(2n) = 2f(n) + 1$, $f(2n + 1) = 2f(n)$ flips every binary digit after the leading $1$; so $6 = 110_2$ gives $f(6) = 101_2 = 5$.`,
    },
  ],
  archetypes: [
    {
      id: "A6-special-values",
      name: String.raw`Substituting special values`,
      tests: String.raw`An equation in two variables over the reals, asking for a particular value such as $f(2026)$ or for all solutions. Start with $x = 0$, $y = 0$, $y = 1$ or $y = x$, and pin down $f(0)$ and $f(1)$ first.`,
      questions: [
        {
          stem: String.raw`A function $f$ satisfies $f(x + y) = f(x) + f(y) + 2xy$ for all real $x, y$, and $f(1) = 3$. What is $f(5)$?`,
          difficulty: 1,
          choices: [String.raw`$15$`, String.raw`$25$`, String.raw`$35$`, String.raw`$45$`, String.raw`$55$`],
          answer: String.raw`(C) $35$`,
        },
        {
          stem: String.raw`A function $f : \mathbb{R} \to \mathbb{R}$ satisfies
$$f(x)f(y) - f(xy) = 2x + 2y + 2$$
for all real $x, y$. Find $f(2026)$.`,
          difficulty: 2,
          answer: String.raw`$2028$`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$f(x)f(y) = f(x + y) + 4xy$$
for all real $x, y$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(x) = 1 + 2x$ and $f(x) = 1 - 2x$. **Proof.** Key idea: $f(0) = 1$ (as $f(0) = 0$ forces $f \equiv 0$, which fails); with $c = f(1)$, $y = 1$ gives $f(x + 1) = cf(x) - 4x$, and comparing the substitutions $(x, y + 1)$ and $(x + 1, y)$ yields $xf(y) - yf(x) = x - y$, so $y = 1$ makes $f$ linear.`,
        },
      ],
    },
    {
      id: "A6-systems",
      name: String.raw`Swapping the variable to build a system`,
      tests: String.raw`An equation in one variable linking $f(x)$ with $f(1/x)$, $f(1 - x)$ or $f$ at some other related point. Substitute the related point to get more equations and solve the linear system.`,
      questions: [
        {
          stem: String.raw`A function $f$ satisfies $f(x) + 2f\!\left(\dfrac1x\right) = 3x$ for all $x \ne 0$. Find $f(2)$.`,
          difficulty: 1,
          answer: String.raw`$-1$`,
        },
        {
          stem: String.raw`A function $f$ is defined for all real $x \ne 0, 1$ and satisfies
$$f(x) + f\!\left(\frac{1}{1 - x}\right) = 2x.$$
Find $f(2)$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac72$`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$f(x) + x\,f(1 - x) = x^3 - x^2 + x$$
for all real $x$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(x) = x^2$. **Proof.** Key idea: replacing $x$ by $1 - x$ gives a second linear equation in $f(x)$ and $f(1 - x)$; its determinant $1 - x(1 - x) = x^2 - x + 1$ is never $0$, so $f(x)$ is uniquely determined, and $x^2$ works.`,
        },
      ],
    },
    {
      id: "A6-cauchy",
      name: String.raw`Cauchy-type equations over the integers and rationals`,
      tests: String.raw`Additive-looking equations on $\mathbb{Z}$ or $\mathbb{Q}$. Show $f(nx) = nf(x)$, subtract a particular solution to reach Cauchy's equation, or set $n = 1$ to get a recurrence and use induction.`,
      questions: [
        {
          stem: String.raw`A function $f : \mathbb{Q} \to \mathbb{Q}$ satisfies $f(x + y) = f(x) + f(y)$ for all rational $x, y$, and $f(6) = 4$. Find $f\!\left(\dfrac92\right)$.`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`A function $f : \mathbb{Q} \to \mathbb{Q}$ satisfies $f(x + y) = f(x) + f(y) + xy$ for all rational $x, y$, and $f(1) = 2$. Find $f(x)$ for every rational $x$.`,
          difficulty: 2,
          answer: String.raw`$f(x) = \dfrac{x^2 + 3x}{2}$`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{Z} \to \mathbb{Z}$ such that
$$f(m + n) + f(m - n) = 2f(m) + 2f(n)$$
for all integers $m, n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(n) = cn^2$ for any integer $c$. **Proof.** Key idea: $m = n = 0$ gives $f(0) = 0$ and $m = 0$ shows $f$ is even; then $n = 1$ gives $f(m + 1) = 2f(m) - f(m - 1) + 2f(1)$, and induction gives $f(m) = m^2 f(1)$.`,
        },
      ],
    },
    {
      id: "A6-injective-ffx",
      name: String.raw`Injectivity, surjectivity and f(f(x))`,
      tests: String.raw`Equations with $f$ inside $f$, often asking to prove that no such function exists. Prove injectivity or surjectivity, apply $f$ to both sides, find where $f$ is $0$, and reduce to a simpler equation.`,
      questions: [
        {
          stem: String.raw`A linear function $f(x) = ax + b$ is increasing and satisfies $f(f(x)) = 9x + 8$ for all real $x$. Find $f(2)$.`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Prove that there is no function $f : \mathbb{Z} \to \mathbb{Z}$ such that $f(f(n)) = n + 1$ for every integer $n$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: $f(n + 1) = f(f(f(n))) = f(n) + 1$, so $f(n) = n + f(0)$; then $f(f(n)) = n + 2f(0)$ would need $2f(0) = 1$.`,
        },
        {
          stem: String.raw`Prove that there is no function $f : \mathbb{Q} \to \mathbb{Q}$ such that
$$f(x + f(y)) = f(x) + 2y$$
for all rational $x, y$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $f$ is injective and surjective, which gives $f(0) = 0$ and $f(f(y)) = 2y$; replacing $y$ by $f(y)$ makes $f$ additive, so $f(x) = cx$ on $\mathbb{Q}$ with $c^2 = 2$, impossible for rational $c$.`,
        },
      ],
    },
    {
      id: "A6-positive-integers",
      name: String.raw`Functions on the positive integers`,
      tests: String.raw`$f$ is defined on the positive integers by a recursive rule or a condition such as "strictly increasing". Compute small values, look at binary digits for rules in $2n$ and $2n + 1$, and use induction or the gaps $f(n + 1) - f(n) \ge 1$.`,
      questions: [
        {
          stem: String.raw`A function on the positive integers satisfies $f(1) = 1$, $f(2n) = f(n)$ and $f(2n + 1) = f(n) + 1$ for all $n \ge 1$. Find $f(2026)$.`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`A function on the positive integers satisfies $f(1) = 1$, $f(2n) = 3f(n)$ and $f(2n + 1) = 3f(n) + 1$ for all $n \ge 1$. How many positive integers $n$ satisfy $f(n) \le 2026$?`,
          difficulty: 2,
          answer: String.raw`$127$`,
        },
        {
          stem: String.raw`Find all strictly increasing functions $f$ from the positive integers to the positive integers such that $f(f(n)) = n + 2026$ for every positive integer $n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(n) = n + 1013$. **Proof.** Key idea: $f(n + 2026) = f(f(f(n))) = f(n) + 2026$, and the $2026$ gaps $f(k + 1) - f(k) \ge 1$ from $k = n$ to $n + 2025$ add up to $2026$, so each gap is $1$; hence $f(n) = n + c$ with $2c = 2026$.`,
        },
      ],
    },
  ],
});
