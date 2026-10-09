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
      title: String.raw`Additive, multiplicative and exponential`,
      body: String.raw`- If $g$ is both **additive** ($g(x + y) = g(x) + g(y)$) and **multiplicative** ($g(xy) = g(x)g(y)$) on $\mathbb{R}$, then $g(x) = x$ for all $x$ or $g \equiv 0$: $g(t^2) = g(t)^2 \ge 0$ makes $g$ increasing, and an increasing additive function is linear.
- If $g(x + y) = g(x)g(y)$, then $g(x) = g\!\left(\frac x2\right)^2 \ge 0$, and one zero value forces $g \equiv 0$. On $\mathbb{Q}$, $g\!\left(\frac pq\right)^q = g(1)^p$.
- A function with $f(mn) = f(m)f(n)$ for **all** $m, n$ (completely multiplicative) is fixed by its values at the primes; comparing powers such as $f(a^k)$ with $f(b^l)$ when $a^k < b^l$ uses monotonicity or a size condition to pin down those values.
- Rescale or shift to reach these forms. Example: if $f(x + y) = 3f(x)f(y)$, then $g = 3f$ satisfies $g(x + y) = g(x)g(y)$.`,
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
          choices: [String.raw`$35$`, String.raw`$40$`, String.raw`$45$`, String.raw`$50$`, String.raw`$55$`],
          answer: String.raw`(A) $35$`,
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
        {
          stem: String.raw`A function $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(x - y) = f(x) + f(y) - 2xy$ for all real $x, y$. Find $f(2026)$.`,
          difficulty: 1,
          answer: String.raw`$2026^2 = 4104676$`,
        },
        {
          stem: String.raw`A function $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(x + f(y)) = x + y + 1$ for all real $x, y$. Find $f(2026)$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{4053}{2}$`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$f(x\,f(y)) = f(xy) + x$$
for all real $x, y$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(x) = x + 1$. **Proof.** Key idea: $y = 0$ gives $f(x\,f(0)) = f(0) + x$, so $f(0) = c \ne 0$ and $f(t) = c + \dfrac tc$ for all $t$; substituting back forces $\dfrac{1}{c^2} = \dfrac1c$, so $c = 1$.`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$f(x + y) + f(xy) = f(x)f(y) + 1$$
for all real $x, y$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$f(x) = 1$ for all $x$, and $f(x) = x + 1$. **Proof.** Key idea: $f(0) = 1$; with $a = f(1)$, $y = 1$ gives $f(x + 1) = (a - 1)f(x) + 1$, and comparing the substitutions $y = -1$ at $x$ and $-x$ leaves $a = 1$ (so $f \equiv 1$), $a = 2$ or $a = 0$. For $g = f - 1$, replacing $y$ by $y + 1$ and subtracting gives $g(xy + x) = g(xy) + g(x)$ when $a = 2$, so $g$ is additive and then multiplicative, hence $g(x) = x$; when $a = 0$ the same step gives $g(2x) = 0$, contradicting $g(1) = -1$.`,
        },
      ],
    },
    {
      id: "A6-systems",
      name: String.raw`Swapping the variable to build a system`,
      tests: String.raw`An equation in one variable linking $f(x)$ with $f(1/x)$, $f(1 - x)$ or $f$ at some other related point. Substitute the related point to get more equations and solve the linear system; if the substitutions never close up (as with $x \mapsto \frac x2$), chain them and use a continuity or differentiability condition at $0$.`,
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
        {
          stem: String.raw`A function $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(x) + 3f(-x) = x^2 + 4x$ for all real $x$. Find $f(1)$.`,
          difficulty: 1,
          answer: String.raw`$-\dfrac74$`,
        },
        {
          stem: String.raw`A function $f$ is defined for all real $x \ne 1$ and satisfies
$$f(x) + 2f\!\left(\frac{x + 1}{x - 1}\right) = x.$$
Find $f(3)$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac13$`,
        },
        {
          stem: String.raw`Prove that there is no function $f$, defined for all real $x$ other than $-1$, $0$ and $1$, such that
$$f(x) + f\!\left(\frac{x - 1}{x + 1}\right) = x$$
for all such $x$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the map $x \mapsto \frac{x - 1}{x + 1}$ has period $4$ ($x \to \frac{x-1}{x+1} \to -\frac1x \to \frac{1 + x}{1 - x} \to x$), so the four equations along a cycle can only be consistent if the alternating sum of their right sides is $0$; at $x = 2$ it is $2 - \frac13 - \frac12 + 3 \ne 0$.`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ that are differentiable at $0$ and satisfy
$$f(x) - 3f\!\left(\frac x2\right) + 2f\!\left(\frac x4\right) = x^2$$
for all real $x$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$f(x) = \dfrac83x^2 + ax + b$ for any real constants $a, b$. **Proof.** Key idea: $g(x) = f(x) - f\!\left(\frac x2\right)$ satisfies $g(x) - 2g\!\left(\frac x2\right) = x^2$, so $h(x) = g(x) - 2x^2$ has $h(x) = 2h\!\left(\frac x2\right)$ and $\frac{h(x)}{x} = \frac{h(x/2^n)}{x/2^n} \to h'(0)$, making $h$ linear (continuity alone would allow $h(x) = x\sin(2\pi\log_2|x|)$); then chain $f(x) - f\!\left(\frac x2\right) = 2x^2 + h'(0)x$ down to $0$.`,
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
        {
          stem: String.raw`A function $f : \mathbb{Z} \to \mathbb{Z}$ satisfies $f(m + n) = f(m) + f(n) + 3$ for all integers $m, n$, and $f(1) = 2$. Find $f(10)$.`,
          difficulty: 1,
          answer: String.raw`$47$`,
        },
        {
          stem: String.raw`A function $f : \mathbb{Q} \to \mathbb{R}$ satisfies $f(x + y) = f(x)\,f(y)$ for all rational $x, y$, and $f(1) = 4$. Find $f\!\left(\dfrac32\right)$.`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{Q} \to \mathbb{Q}$ such that
$$f\!\left(\frac{x + 2y}{3}\right) = \frac{f(x) + 2f(y)}{3}$$
for all rational $x, y$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$f(x) = ax + b$ for rational constants $a, b$. **Proof.** Key idea: $g = f - f(0)$ satisfies $g\!\left(\frac x3\right) = \frac{g(x)}{3}$ and $g\!\left(\frac{2y}{3}\right) = \frac{2g(y)}{3}$ (put $y = 0$, then $x = 0$), so the equation becomes $g(u + v) = g(u) + g(v)$ with $u = \frac x3$, $v = \frac{2y}{3}$ arbitrary; Cauchy on $\mathbb{Q}$ gives $g(x) = ax$.`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{Q} \to \mathbb{Q}$ such that
$$f(x + y) = f(x) + f(y) + f(x)f(y)$$
for all rational $x, y$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$f(x) = 0$ for all $x$, and $f(x) = -1$ for all $x$. **Proof.** Key idea: $g = f + 1$ satisfies $g(x + y) = g(x)g(y)$, so $g \ge 0$ and either $g \equiv 0$ or $g > 0$ everywhere; in the second case $r = g(1)$ is a positive rational with a rational $n$-th root $g\!\left(\frac1n\right)$ for every $n$, so every prime exponent of $r$ is divisible by every $n$, giving $r = 1$ and then $g \equiv 1$.`,
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
        {
          stem: String.raw`A linear function $f(x) = ax + b$, with $a$ and $b$ real, satisfies $f(f(f(x))) = 8x + 21$ for all real $x$. Find $f(1)$.`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`A function $f : \mathbb{R} \to \mathbb{R}$ satisfies $f(f(x)) = 3x + 2$ for all real $x$. Find $f(-1)$.`,
          difficulty: 2,
          answer: String.raw`$-1$`,
        },
        {
          stem: String.raw`Prove that there is no function $f : \mathbb{R} \to \mathbb{R}$ such that $f(f(x)) = -x^3$ for all real $x$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: applying $f$ gives $f(-x^3) = f(f(f(x))) = -f(x)^3$, so $x = 1$ and $x = -1$ give $f(1) = f(1)^9$, i.e. $f(1) \in \{-1, 0, 1\}$, and each of these contradicts $f(f(1)) = -1$.`,
        },
        {
          stem: String.raw`Find all functions $f : \mathbb{R} \to \mathbb{R}$ such that
$$f(2x + f(y)) = f(x) + x + y$$
for all real $x, y$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$f(x) = x$. **Proof.** Key idea: $f$ is bijective; with $f(a) = 0$, $y = a$ gives $f(2x) = f(x) + x + a$, and applying this to $2x + f(y) = 2\left(x + \frac{f(y)}{2}\right)$ shows $f(x + t) - f(x)$ does not depend on $x$, so $g = f - f(0)$ is additive; substituting back separates the variables as $g(x) - x = y - g(g(y)) - g(f(0))$, so both sides are constant, giving $g(x) = x$ and $f(0) = 0$.`,
        },
      ],
    },
    {
      id: "A6-positive-integers",
      name: String.raw`Functions on the positive integers`,
      tests: String.raw`$f$ is defined on the positive integers by a recursive rule or a condition such as "strictly increasing". Compute small values, look at binary digits for rules in $2n$ and $2n + 1$, and use induction or the gaps $f(n + 1) - f(n) \ge 1$; for multiplicative conditions, work prime by prime and compare powers.`,
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
        {
          stem: String.raw`A function $f$ on the positive integers satisfies $f(mn) = f(m) + f(n)$ for all positive integers $m, n$, with $f(2) = 3$ and $f(3) = 5$. Find $f(72)$.`,
          difficulty: 1,
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`A function on the positive integers satisfies $f(1) = 1$ and $f(n) = f\!\left(\left\lfloor \dfrac n2 \right\rfloor\right) + n$ for all $n \ge 2$. Find $f(2026)$.`,
          difficulty: 2,
          answer: String.raw`$4044$`,
        },
        {
          stem: String.raw`A strictly increasing function $f$ from the positive integers to the positive integers satisfies $f(mn) = f(m)f(n)$ for all positive integers $m, n$, and $f(2) = 4$. Find $f(3)$.`,
          difficulty: 3,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Find all functions $f$ from the positive integers to the positive integers such that
$$f(mn) = f(m)f(n) \quad\text{and}\quad f(m + n) \le f(m) + f(n)$$
for all positive integers $m, n$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$f(n) = n$ and $f(n) = 1$. **Proof.** Key idea: $f(1) = 1$ and subadditivity give $f(n) \le n$, while $f(2) \in \{1, 2\}$. If $f(2) = 2$, then $2^k = f(2^k) \le f(n) + f(2^k - n) \le f(n) + 2^k - n$ forces $f(n) \ge n$. If $f(2) = 1$, writing $n^k$ in binary gives $f(n)^k = f(n^k) \le k\log_2 n + 1$ for every $k$, so $f(n) = 1$.`,
        },
      ],
    },
  ],
});
