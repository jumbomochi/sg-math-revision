H2.addTopic({
  id: "X2",
  title: "Proof by Mathematical Induction",
  paper: "H3 9820",
  tags: ["IP"],
  summary: String.raw`Not in 9758 (in H3 Mathematics; taught in many IP schools). The structure of an induction proof, and its use for sums, divisibility, inequalities, recurrences and $n$th derivatives.`,
  syllabus: {
    include: [
      String.raw`the principle of mathematical induction and the structure of a proof: statement $P_n$, basis, assumption, inductive step, conclusion`,
      String.raw`proving summation formulae, including formulae first conjectured from the first few cases`,
      String.raw`proving divisibility results`,
      String.raw`proving inequalities, including ones that hold only from some starting value $n_0$`,
      String.raw`proving results about sequences given by recurrence relations (closed forms, bounds, monotonicity), including two-step recurrences`,
      String.raw`proving results about $n$th derivatives and products`,
    ],
    exclude: [
      String.raw`induction over structures other than the integers`,
      String.raw`induction proofs involving matrices`,
    ],
  },
  concepts: [
    {
      title: String.raw`The principle of mathematical induction`,
      body: String.raw`Let $P_n$ be a statement about the integer $n$. If

1. **(Basis)** $P_1$ is true, and
2. **(Inductive step)** for every $k \ge 1$, *if* $P_k$ is true *then* $P_{k+1}$ is true,

then $P_n$ is true for **all** positive integers $n$. Like a row of dominoes: the first falls, and each one knocks over the next.

- The start need not be 1: to prove $P_n$ for all $n \ge n_0$, check $P_{n_0}$ and do the step for $k \ge n_0$.
- Both parts are essential. A step $P_k \Rightarrow P_{k+1}$ with no true basis proves nothing (the statement "$4^n + 1$ is divisible by 3" passes the step, since $4^{k+1} + 1 = 4(4^k + 1) - 3$, but is never true). A basis with no step proves nothing either: checking many cases is evidence, not proof.
- **Strong form:** if the step needs $P_{k-1}$ and $P_k$ to get $P_{k+1}$ (two-term recurrences), then **two** base cases are needed.`,
      figure: {
        type: "plot", x: [-0.4, 7.4], y: [-0.9, 2.3], axes: false, height: 170,
        polygons: [
          { points: [[0.028, 0.127], [0.3, 0], [0.976, 1.45], [0.704, 1.577]], fill: true, tone: "warn" },
          { points: [[1.0, 0], [1.3, 0], [1.3, 1.6], [1.0, 1.6]], fill: true, tone: "muted" },
          { points: [[2.0, 0], [2.3, 0], [2.3, 1.6], [2.0, 1.6]], fill: true, tone: "muted" },
          { points: [[4.2, 0], [4.5, 0], [4.5, 1.6], [4.2, 1.6]], fill: true, tone: "accent" },
          { points: [[5.6, 0], [5.9, 0], [5.9, 1.6], [5.6, 1.6]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [-0.3, 0], to: [7.2, 0], tone: "muted", thin: true },
          { from: [4.6, 1.9], to: [5.5, 1.9], arrow: true, tone: "accent", label: "P(k) ⇒ P(k + 1)", pos: "n", style: "plain" },
        ],
        labels: [
          { x: 0.3, y: -0.35, text: "n = 1", style: "small" },
          { x: 1.15, y: -0.35, text: "2", style: "small" },
          { x: 2.15, y: -0.35, text: "3", style: "small" },
          { x: 3.25, y: 0.6, text: "…", style: "plain" },
          { x: 4.35, y: -0.35, text: "k", style: "italic" },
          { x: 5.75, y: -0.35, text: "k + 1", style: "italic" },
          { x: 6.7, y: 0.6, text: "…", style: "plain" },
          { x: 0.5, y: 2.05, text: "basis: P(1)", style: "small", tone: "warn" },
        ],
        caption: String.raw`The basis knocks over the first domino; the inductive step guarantees each domino knocks over the next.`,
        alt: "A row of dominoes labelled n = 1, 2, 3, then k and k + 1. The first domino is tipping over, marked basis P(1); an arrow from domino k to domino k + 1 is labelled P(k) implies P(k + 1).",
      },
    },
    {
      title: String.raw`Writing the proof: what earns the marks`,
      body: String.raw`A standard write-up has four parts.

1. **Define** $P_n$: "Let $P_n$ be the statement $\displaystyle\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$, for $n \in \mathbb{Z}^+$."
2. **Basis:** "When $n = 1$: LHS $= 1$, RHS $= \frac{1 \cdot 4}{4} = 1$, so $P_1$ is true." Evaluate **both** sides separately.
3. **Assume** "$P_k$ is true for **some** $k \in \mathbb{Z}^+$", write out what that means, then **show** $P_{k+1}$: write down the target, start from one side, and use the assumption visibly.
4. **Conclude:** "Since $P_1$ is true, and $P_k$ true $\Rightarrow$ $P_{k+1}$ true, by mathematical induction $P_n$ is true for all $n \in \mathbb{Z}^+$."

Common errors that cost marks:
- "Assume $P_k$ is true **for all** $k$" (this assumes what you are proving).
- Defining $P_n$ as a formula ("$P_n = \frac{n(n+1)}{2}$") instead of a statement.
- Working with both sides of $P_{k+1}$ at once until "$0 = 0$", which does not show the implication.
- Never actually using $P_k$.`,
    },
    {
      title: String.raw`Summation formulae`,
      body: String.raw`To prove $\displaystyle\sum_{r=1}^{n} u_r = S_n$, the step uses

$$\sum_{r=1}^{k+1} u_r = \sum_{r=1}^{k} u_r + u_{k+1} = S_k + u_{k+1} \quad \text{(by the assumption)},$$

then simplify to $S_{k+1}$. Write $S_{k+1}$ down first so you know the target.

- **Factorise early**: in the $\sum r^3$ example, $\frac{k^2(k+1)^2}{4} + (k+1)^3 = \frac{(k+1)^2}{4}\left(k^2 + 4k + 4\right) = \frac{(k+1)^2(k+2)^2}{4}$, which is $S_{k+1}$. Expanding everything is slower and error-prone.
- With exponentials, pull out the common power: $k\,3^{k+1} + (k+1)3^{k+1} = 3^{k+1}(2k + 1)$.
- **Conjecture-then-prove** questions: compute $S_1, S_2, S_3, \dots$ as simplified fractions, spot the pattern, state $S_n$, then prove it.`,
    },
    {
      title: String.raw`Divisibility`,
      body: String.raw`To prove "$f(n)$ is divisible by $d$", the assumption is $f(k) = dM$ for some integer $M$. Then either

- **express $f(k+1)$ in terms of $f(k)$:** for $f(n) = 4^n - 1$ and $d = 3$, $\ f(k+1) = 4 \cdot 4^k - 1 = 4(4^k - 1) + 3 = 4(3M) + 3 = 3(4M + 1)$; or
- **consider $f(k+1) - f(k)$** (or $f(k+1) - a f(k)$) and show that it is a multiple of $d$; then $f(k+1) = f(k) + (\text{multiple of } d)$.

- For polynomials such as $n^3 + 2n$, the difference $f(k+1) - f(k)$ is a quadratic; you may need a second fact, e.g. $k(k+1)$ is always even.
- End by stating clearly that $f(k+1)$ is an integer multiple of $d$.`,
    },
    {
      title: String.raw`Inequalities`,
      body: String.raw`The step is a **chain** that uses the assumption once and then a separate fact about $k$:

$$\text{LHS}_{k+1} = (\dots)\,\text{LHS}_k \;\; > \;\; (\dots)\,\text{RHS}_k \;\; \ge \;\; \text{RHS}_{k+1}.$$

- Example: $n! > 2^n$ for $n \ge 4$. Assume $k! > 2^k$ with $k \ge 4$; then $(k+1)! = (k+1)\,k! > (k+1)2^k > 2 \cdot 2^k = 2^{k+1}$, since $k + 1 > 2$.
- The extra fact (here $k + 1 > 2$) is often proved separately first, e.g. by completing the square or factorising, and it is where the condition $k \ge n_0$ is used. State it.
- Check the basis at the true starting value: many inequalities fail for small $n$.
- **Strengthening:** to prove $\sum_{r=1}^{n} a_r < C$ it can be easier to prove a stronger statement such as $\sum_{r=1}^{n} a_r \le C - g(n)$ with $g(n) > 0$, because the stronger assumption gives more to work with in the step.`,
    },
    {
      title: String.raw`Recurrence relations`,
      body: String.raw`**Closed forms.** For a sequence defined by $u_1$ and $u_{n+1} = \mathrm{f}(u_n)$, prove a formula by substituting the assumed $u_k$ into the recurrence. Example: if $u_1 = 1$ and $u_{n+1} = 2u_n + 1$, then assuming $u_k = 2^k - 1$ gives $u_{k+1} = 2(2^k - 1) + 1 = 2^{k+1} - 1$.

**Two-term recurrences** $u_{n+2} = a u_{n+1} + b u_n$: assume the formula for $u_k$ **and** $u_{k+1}$, deduce it for $u_{k+2}$, and check **two** base cases ($n = 1$ and $n = 2$).

**Bounds and monotonicity.** For $u_{n+1} = \mathrm{f}(u_n)$ with $\mathrm{f}$ increasing, prove $a < u_n < b$ by induction (apply $\mathrm{f}$ to the assumed inequality). To show the sequence is increasing, factorise $u_{n+1} - u_n$ (or $u_{n+1}^2 - u_n^2$) and use the bounds. A sequence that is increasing and bounded above converges, and its limit $L$ satisfies $L = \mathrm{f}(L)$.`,
      figure: {
        type: "plot", x: [-0.3, 2.9], y: [-0.3, 2.6], equal: true,
        curves: [{ fn: "x => Math.sqrt(2 + x)", domain: [-0.3, 2.9], label: "y = f(x)", labelAt: 2.45 }],
        lines: [{ fn: "x => x", label: "y = x", labelAt: 2.35 }],
        segments: [
          { from: [0, 0], to: [0, 1.414], tone: "warn", thin: true },
          { from: [0, 1.414], to: [1.414, 1.414], tone: "warn", thin: true },
          { from: [1.414, 1.414], to: [1.414, 1.848], tone: "warn", thin: true },
          { from: [1.414, 1.848], to: [1.848, 1.848], tone: "warn", thin: true },
          { from: [1.848, 1.848], to: [1.848, 1.962], tone: "warn", thin: true },
          { from: [1.848, 1.962], to: [1.962, 1.962], tone: "warn", thin: true },
          { from: [2, 0], to: [2, 2], tone: "muted", thin: true, dashed: true },
        ],
        xTicks: [{ x: 1.414, label: "u₂" }, { x: 2, label: "L" }],
        caption: String.raw`$u_{n+1} = \sqrt{2 + u_n}$, $u_1 = 0$: the terms increase but stay below the fixed point $L = 2$, where $y = \mathrm{f}(x)$ meets $y = x$.`,
        alt: "Cobweb diagram for u n plus 1 equals root of 2 plus u n, starting at 0. A staircase between the curve y = f(x) and the line y = x climbs towards the intersection at x = 2, marked L.",
      },
    },
    {
      title: String.raw`$n$th derivatives and other results`,
      body: String.raw`**$n$th derivatives.** Find the first two or three derivatives to see (or check) the pattern, then for the step **differentiate the assumed $k$th derivative**:

$$\text{if } \frac{\dd^k}{\dd x^k}\left(x\ee^{x}\right) = (x + k)\ee^{x}, \text{ then } \frac{\dd^{k+1}}{\dd x^{k+1}}\left(x\ee^{x}\right) = \frac{\dd}{\dd x}\left[(x + k)\ee^{x}\right] = (x + k + 1)\ee^{x}.$$

- Keep constant factors (powers, signs, factorials) together and tidy them into the $k + 1$ form at the end, e.g. $3^{k} \times 3 = 3^{k+1}$, $(-1)^{k} \times (-1) = (-1)^{k+1}$, $k! \times (k + 1) = (k + 1)!$.
- The derivative results feed straight into Maclaurin series: the coefficient of $x^n$ is $\frac{\mathrm{f}^{(n)}(0)}{n!}$.

**Products** $\prod_{r} a_r$: the step multiplies by the next factor, $\prod_{r=1}^{k+1} a_r = \left(\prod_{r=1}^{k} a_r\right) a_{k+1}$.

**De Moivre's theorem** for positive integers is proved by induction using the compound-angle formulae, then extended to negative integers by taking reciprocals.`,
    },
  ],
  archetypes: [
    {
      id: "X2-summation",
      name: String.raw`Summation formulae, including conjecture and prove`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Proving $\sum_{r=1}^{n} u_r = S_n$ by induction with a clear basis, assumption and step $S_k + u_{k+1} = S_{k+1}$, sometimes after conjecturing $S_n$ from the first few partial sums, then using the result in a related sum.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Prove by mathematical induction that, for all positive integers $n$,
$$\sum_{r=1}^{n} r\,2^r = (n - 1)2^{n+1} + 2.$$`, marks: 5 },
            { label: "(ii)", text: String.raw`Hence show that $\displaystyle\sum_{r=1}^{n} (r + 1)2^r = n\,2^{n+1}$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`It is given that $S_n = \displaystyle\sum_{r=1}^{n} \frac{1}{(2r - 1)(2r + 1)}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $S_1$, $S_2$, $S_3$ and $S_4$, giving each answer as a fraction in its simplest form.`, marks: 2 },
            { label: "(ii)", text: String.raw`Make a conjecture for a formula for $S_n$ in terms of $n$, and prove your conjecture by mathematical induction.`, marks: 5 },
            { label: "(iii)", text: String.raw`Hence find $\displaystyle\sum_{r=n+1}^{2n} \frac{1}{(2r - 1)(2r + 1)}$, giving your answer as a single fraction in terms of $n$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-divisibility",
      name: String.raw`Divisibility results`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Proving that an expression in $n$ (exponential or polynomial) is divisible by a given integer, by writing $f(k+1)$ in terms of $f(k)$ or showing that $f(k+1) - f(k)$ is a multiple of the divisor.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Prove by mathematical induction that $9^n + 7$ is divisible by 8 for all positive integers $n$.`, marks: 5 },
            { label: "(b)", text: String.raw`Prove by mathematical induction that $4^{n+1} + 5^{2n-1}$ is divisible by 21 for all positive integers $n$.`, marks: 5 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Prove by mathematical induction that $n^3 + 5n$ is divisible by 6 for all positive integers $n$. You may use the fact that the product of two consecutive integers is even.`, marks: 6 },
            { label: "(ii)", text: String.raw`By writing $n^3 + 5n = (n - 1)n(n + 1) + 6n$, give a different proof of the result in part (i) that does not use induction.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-inequalities",
      name: String.raw`Inequalities`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Proving an inequality for all $n \ge n_0$ by a chain that uses the assumption once and a separately proved fact about $k$, including choosing the correct starting value and proving a strengthened statement to bound a sum.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $2k^2 > (k + 1)^2$ for all integers $k \ge 3$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Prove by mathematical induction that $2^n > n^2$ for all integers $n \ge 5$.`, marks: 5 },
            { label: "(iii)", text: String.raw`The statement $2^n > n^2$ is true when $n = 1$. Explain why it is not possible to use $n = 1$ as the basis for an induction proof that $2^n > n^2$ for all positive integers $n$.`, marks: 1 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{1}{(k + 1)^2} < \dfrac{1}{k} - \dfrac{1}{k + 1}$ for all positive integers $k$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence prove by mathematical induction that
$$\sum_{r=1}^{n} \frac{1}{r^2} \le 2 - \frac{1}{n}$$
for all positive integers $n$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Deduce that $\displaystyle\sum_{r=1}^{n} \frac{1}{r^2} < 2$ for all positive integers $n$, and explain why proving this weaker statement directly by induction is difficult.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-recurrence-closed-form",
      name: String.raw`Recurrence relations: proving a closed form`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Generating terms from a recurrence, conjecturing a formula for $u_n$, and proving it by induction, including two-term recurrences that need two base cases and an assumption about two consecutive terms.`,
      questions: [
        {
          stem: String.raw`A sequence $u_1, u_2, u_3, \dots$ is defined by $u_1 = 2$ and
$$u_{n+1} = \frac{u_n}{1 + u_n}, \qquad n \ge 1.$$`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $u_2$, $u_3$ and $u_4$, giving each answer as a fraction.`, marks: 2 },
            { label: "(ii)", text: String.raw`Make a conjecture for $u_n$ in terms of $n$, and prove your conjecture by mathematical induction.`, marks: 5 },
            { label: "(iii)", text: String.raw`State the limit of $u_n$ as $n \to \infty$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A sequence is defined by $u_1 = 1$, $u_2 = 5$ and
$$u_{n+2} = 5u_{n+1} - 6u_n, \qquad n \ge 1.$$`,
          parts: [
            { label: "(i)", text: String.raw`Prove by mathematical induction that $u_n = 3^n - 2^n$ for all positive integers $n$.`, marks: 6 },
            { label: "(ii)", text: String.raw`Find the least value of $n$ for which $u_n > 10^6$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-recurrence-bounds",
      name: String.raw`Recurrence relations: bounds, monotonicity and limits`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Proving by induction that every term of a recursively defined sequence lies between two bounds, using the bounds to show the sequence is increasing or decreasing, and then finding the limit from $L = \mathrm{f}(L)$.`,
      questions: [
        {
          stem: String.raw`A sequence of real numbers is defined by $u_1 = 1$ and
$$u_{n+1} = \sqrt{6 + u_n}, \qquad n \ge 1.$$`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Prove by mathematical induction that $0 < u_n < 3$ for all positive integers $n$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show that $u_{n+1}^{\,2} - u_n^{\,2} = (3 - u_n)(2 + u_n)$, and hence prove that $u_{n+1} > u_n$ for all positive integers $n$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that the sequence converges, find its limit, justifying your choice.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-nth-derivative",
      name: String.raw`$n$th derivatives`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Finding the first few derivatives of a function, proving a general formula for the $n$th derivative by differentiating the assumed $k$th derivative, and using the result, e.g. to locate a zero or to write down a Maclaurin coefficient.`,
      questions: [
        {
          stem: String.raw`It is given that $y = x\ee^{2x}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $\dfrac{\dd y}{\dd x}$ and $\dfrac{\dd^2 y}{\dd x^2}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Prove by mathematical induction that $\dfrac{\dd^n y}{\dd x^n} = 2^{n-1}(2x + n)\ee^{2x}$ for all positive integers $n$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Hence find the value of $x$ for which $\dfrac{\dd^{10} y}{\dd x^{10}} = 0$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \ln(1 + x)$ for $x > -1$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Prove by mathematical induction that $\mathrm{f}^{(n)}(x) = \dfrac{(-1)^{n-1}(n - 1)!}{(1 + x)^n}$ for all positive integers $n$, where $\mathrm{f}^{(n)}(x)$ denotes the $n$th derivative of $\mathrm{f}(x)$.`, marks: 5 },
            { label: "(ii)", text: String.raw`Hence show that the coefficient of $x^n$ in the Maclaurin series of $\ln(1 + x)$ is $\dfrac{(-1)^{n-1}}{n}$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X2-products-and-flawed-proofs",
      name: String.raw`Products, de Moivre's theorem and flawed proofs`,
      tests: String.raw`Not in 9758 (in H3 Mathematics). Proving results about products or de Moivre's theorem by induction (with a starting value other than 1 where needed), and explaining why an argument with a valid inductive step but no true basis is not a proof.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(a)", parts: [
              { label: "(i)", text: String.raw`Prove by mathematical induction that, for all integers $n \ge 2$,
$$\prod_{r=2}^{n} \left(1 - \frac{1}{r^2}\right) = \frac{n + 1}{2n}.$$`, marks: 5 },
              { label: "(ii)", text: String.raw`State the limit of $\displaystyle\prod_{r=2}^{n} \left(1 - \frac{1}{r^2}\right)$ as $n \to \infty$.`, marks: 1 },
            ] },
            { label: "(b)", parts: [
              { label: "(i)", text: String.raw`Prove by mathematical induction that $(\cos\theta + \ii\sin\theta)^n = \cos n\theta + \ii\sin n\theta$ for all positive integers $n$.`, marks: 4 },
              { label: "(ii)", text: String.raw`Deduce that the result also holds when $n$ is a negative integer.`, marks: 2 },
            ] },
          ],
        },
        {
          stem: String.raw`A student wants to prove the statement $P_n$: "$n^2 + n + 1$ is even", for all positive integers $n$. She shows that if $k^2 + k + 1$ is even, then $(k + 1)^2 + (k + 1) + 1$ is even, and concludes that $P_n$ is true for all positive integers $n$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $(k + 1)^2 + (k + 1) + 1 = \left(k^2 + k + 1\right) + 2(k + 1)$, and explain why this establishes the step $P_k \Rightarrow P_{k+1}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Explain why the student's argument is not a valid proof.`, marks: 1 },
            { label: "(iii)", text: String.raw`Prove that, in fact, $n^2 + n + 1$ is odd for every positive integer $n$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
