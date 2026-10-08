H2.addTopic({
  id: "A3",
  title: "Inequalities",
  summary: String.raw`Squares are non-negative and sums of squares, AM-GM with equality cases, Cauchy-Schwarz and its Engel (Titu) form, the rearrangement inequality, the tangent-line trick, and finding maxima and minima.`,
  concepts: [
    {
      title: String.raw`Squares are non-negative (SOS)`,
      body: String.raw`Every real square is $\ge 0$, with equality only when the base is $0$. To prove $P \ge 0$, try to write $P$ as a **sum of squares** (SOS).

- Completing the square: $x^2 - 6x + 10 = (x - 3)^2 + 1 \ge 1$, with equality at $x = 3$.
- The key three-variable identity:
$$a^2 + b^2 + c^2 - ab - bc - ca = \tfrac{1}{2}\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big] \ge 0.$$
- A sum of squares equals $0$ only if **every** square is $0$, which also solves equations like $(x - 1)^2 + (y + 2)^2 = 0$.
- With two variables, complete the square in one variable first, then in the other.`,
    },
    {
      title: String.raw`AM-GM and its equality case`,
      body: String.raw`For non-negative reals $a_1, \ldots, a_n$:
$$\frac{a_1 + a_2 + \cdots + a_n}{n} \ge \sqrt[n]{a_1 a_2 \cdots a_n},$$
with equality **if and only if** $a_1 = a_2 = \cdots = a_n$.

- Two variables: $a + b \ge 2\sqrt{ab}$, which is just $(\sqrt{a} - \sqrt{b})^2 \ge 0$.
- Example: for $x > 0$, $x + \frac{4}{x} \ge 2\sqrt{4} = 4$, with equality when $x = \frac{4}{x}$, i.e. $x = 2$.
- Always find the equality case: a bound that can never be reached is not the minimum.
- The chain $\sqrt{\frac{a^2 + b^2}{2}} \ge \frac{a + b}{2} \ge \sqrt{ab} \ge \frac{2ab}{a + b}$ (QM $\ge$ AM $\ge$ GM $\ge$ HM) holds for $a, b > 0$. For $1$ and $4$: $\sqrt{8.5} \ge 2.5 \ge 2 \ge 1.6$.`,
      figure: {
        type: "plot",
        x: [-0.6, 5.6],
        y: [-0.7, 2.9],
        equal: true,
        axes: false,
        curves: [
          { param: "t => [2.5 + 2.5*Math.cos(t), 2.5*Math.sin(t)]", t: [0, 3.14159265] },
        ],
        segments: [
          { from: [0, 0], to: [5, 0] },
          { from: [4, 0], to: [4, 2], tone: "warn" },
          { from: [2.5, 0], to: [2.5, 2.5], tone: "good" },
        ],
        rightAngles: [
          { at: [4, 0], a: [-1, 0], b: [0, 1], size: 0.2 },
        ],
        points: [
          { x: 2.5, y: 0 },
          { x: 4, y: 0 },
        ],
        labels: [
          { x: 2, y: -0.05, text: "a", pos: "s", style: "italic" },
          { x: 4.5, y: -0.05, text: "b", pos: "s", style: "italic" },
          { x: 2.5, y: 1.3, text: "(a + b)/2", pos: "w", style: "small", tone: "good" },
          { x: 4, y: 1.1, text: "√(ab)", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`A semicircle on a diameter of length $a + b$: the radius is the AM and the half-chord at the split point is the GM, so $\frac{a+b}{2} \ge \sqrt{ab}$.`,
        alt: "A semicircle whose diameter is split into lengths a and b. A vertical radius from the centre has length (a+b)/2. A vertical segment from the split point up to the arc has length root ab and is shorter than the radius.",
      },
    },
    {
      title: String.raw`AM-GM for optimisation: make something constant`,
      body: String.raw`- **Fixed sum, maximise a product**: $x(10 - x) \le \left(\frac{x + 10 - x}{2}\right)^2 = 25$.
- **Fixed product, minimise a sum**: if $xy = 9$ with $x, y > 0$, then $x + y \ge 6$.
- **Split terms** so the product of the pieces is constant, choosing the split so all pieces can be equal: for $x > 0$,
$$2x + \frac{1}{x^2} = x + x + \frac{1}{x^2} \ge 3\sqrt[3]{x \cdot x \cdot \frac{1}{x^2}} = 3,$$
with equality at $x = 1$.
- **Weights and coefficients**: to maximise $x^2 y$ when $x + y = 3$, write $x + y = \frac{x}{2} + \frac{x}{2} + y$ so the product $\frac{x}{2} \cdot \frac{x}{2} \cdot y$ appears; the maximum is $4$ at $x = 2$, $y = 1$.`,
    },
    {
      title: String.raw`Cauchy-Schwarz inequality`,
      body: String.raw`For reals $a_i, b_i$:
$$(a_1^2 + a_2^2 + \cdots + a_n^2)(b_1^2 + b_2^2 + \cdots + b_n^2) \ge (a_1 b_1 + a_2 b_2 + \cdots + a_n b_n)^2,$$
with equality when $(a_1, \ldots, a_n)$ and $(b_1, \ldots, b_n)$ are proportional.

- Use it to bound a **linear expression** given a **sum of squares** (or vice versa).
- Example: if $x^2 + y^2 = 1$, then $(3x + 4y)^2 \le (3^2 + 4^2)(x^2 + y^2) = 25$, so $3x + 4y \le 5$, with equality at $(x, y) = \left(\frac{3}{5}, \frac{4}{5}\right)$.
- Geometric meaning: $|\mathbf{a} \cdot \mathbf{b}| \le |\mathbf{a}|\,|\mathbf{b}|$.`,
    },
    {
      title: String.raw`Engel form (Titu's lemma)`,
      body: String.raw`For reals $a_i$ and positive $b_i$:
$$\frac{a_1^2}{b_1} + \frac{a_2^2}{b_2} + \cdots + \frac{a_n^2}{b_n} \ge \frac{(a_1 + a_2 + \cdots + a_n)^2}{b_1 + b_2 + \cdots + b_n},$$
with equality when $\frac{a_1}{b_1} = \frac{a_2}{b_2} = \cdots = \frac{a_n}{b_n}$.

- Example: for $x, y > 0$, $\frac{1}{x} + \frac{4}{y} = \frac{1^2}{x} + \frac{2^2}{y} \ge \frac{9}{x + y}$.
- **Make numerators squares**: $\frac{a}{b + c} = \frac{a^2}{ab + ac}$. Multiplying top and bottom by a well-chosen factor often makes the denominators add up nicely.`,
    },
    {
      title: String.raw`Rearrangement inequality`,
      body: String.raw`If $a_1 \le a_2 \le \cdots \le a_n$ and $b_1 \le b_2 \le \cdots \le b_n$, then for any reordering $c_1, \ldots, c_n$ of the $b_i$:
$$a_1 b_n + \cdots + a_n b_1 \;\le\; a_1 c_1 + \cdots + a_n c_n \;\le\; a_1 b_1 + \cdots + a_n b_n.$$

- **Same order gives the largest sum, opposite order the smallest.** Two terms: if $a \ge b$ and $x \ge y$, then $ax + by \ge ay + bx$, since the difference is $(a - b)(x - y) \ge 0$.
- Example: pairing $(a, b, c)$ with itself and with $(b, c, a)$ gives $a^2 + b^2 + c^2 \ge ab + bc + ca$.
- For cyclic expressions you may assume an order of the variables only after checking the expression allows it; otherwise treat two cases.`,
    },
    {
      title: String.raw`The tangent-line trick`,
      body: String.raw`For a sum $f(a) + f(b) + f(c)$ under a condition like $a + b + c = 3$ with equality at $a = b = c = 1$:

1. Find the tangent line to $y = f(x)$ at $x = 1$: $y = f(1) + f'(1)(x - 1)$. (Without calculus, choose the line so that $(x - 1)^2$ divides the difference.)
2. Prove $f(x) \ge$ (or $\le$) that line for all allowed $x$, usually by factorising the difference, which contains $(x - 1)^2$.
3. Add the three inequalities; the condition makes the right-hand side a constant.

- Example: for $x \ge 0$, $\sqrt{x} \le \frac{x + 1}{2}$ (since $(\sqrt{x} - 1)^2 \ge 0$). So if $a + b + c = 3$ with $a, b, c \ge 0$, then $\sqrt{a} + \sqrt{b} + \sqrt{c} \le \frac{3 + 3}{2} = 3$.`,
    },
    {
      title: String.raw`Strategy for maximum and minimum problems`,
      body: String.raw`- **Guess the equality case first** (often all variables equal, or a boundary). It tells you which inequality and which split to use.
- A min/max answer needs **two** things: an inequality that holds for all allowed values, and an example where equality holds.
- **Balance coefficients**: when splitting a term, introduce a parameter (e.g. write $y^2 = \lambda y^2 + (1 - \lambda) y^2$) and pick it so the equality conditions of every step agree.
- **Geometry**: $\sqrt{(x - p)^2 + (y - q)^2}$ is a distance, so a sum of such roots is the length of a broken path; it is shortest when the path is straight.
- **Discriminant method**: if $k$ is a value of the expression, rewrite as a quadratic in one variable and require a real root ($\Delta \ge 0$).`,
    },
  ],
  archetypes: [
    {
      id: "A3-am-gm",
      name: String.raw`AM-GM with equality cases`,
      tests: String.raw`Minimise or bound expressions with positive variables, especially sums whose terms multiply to something simple. Split terms so the product is constant and check the equality case is attainable.`,
      questions: [
        {
          stem: String.raw`What is the minimum value of $\dfrac{x^2 + 2x + 16}{x}$ over all positive real numbers $x$?`,
          difficulty: 1,
          choices: [String.raw`$6$`, String.raw`$8$`, String.raw`$10$`, String.raw`$12$`, String.raw`$18$`],
          answer: String.raw`(C) $10$`,
        },
        {
          stem: String.raw`Find the minimum value of $x^2 + \dfrac{16}{x}$ over all positive real numbers $x$.`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Let $a, b, c$ be positive real numbers. Prove that
$$\frac{a}{b} + \frac{b}{c} + \frac{c}{a} \ge \frac{a + b + c}{\sqrt[3]{abc}}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: by AM-GM on three terms, $\frac{a}{b} + \frac{a}{b} + \frac{b}{c} \ge 3\sqrt[3]{\frac{a^2}{bc}} = \frac{3a}{\sqrt[3]{abc}}$; add the three cyclic versions.`,
        },
      ],
    },
    {
      id: "A3-cauchy-schwarz",
      name: String.raw`Cauchy-Schwarz and Engel form`,
      tests: String.raw`A linear expression bounded by a sum of squares, or a sum of fractions $\frac{\text{square}}{\text{positive}}$ to be bounded below. Look for a constraint whose shape matches the denominators.`,
      questions: [
        {
          stem: String.raw`Real numbers $x$ and $y$ satisfy $x^2 + y^2 = 10$. Find the maximum value of $x + 3y$.`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Positive real numbers $x, y, z$ satisfy $x + y + z = 2$. Find the minimum value of $\dfrac{1}{x} + \dfrac{9}{y} + \dfrac{16}{z}$.`,
          difficulty: 2,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`Let $a, b, c$ be positive real numbers. Prove that
$$\frac{a}{3a + b} + \frac{b}{3b + c} + \frac{c}{3c + a} \le \frac{3}{4}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: write $\frac{a}{3a + b} = \frac{1}{3}\big(1 - \frac{b}{3a + b}\big)$, then bound $\sum \frac{b}{3a + b} = \sum \frac{b^2}{3ab + b^2}$ below by the Engel form and finish with $a^2 + b^2 + c^2 \ge ab + bc + ca$.`,
        },
      ],
    },
    {
      id: "A3-rearrangement",
      name: String.raw`Rearrangement and ordering`,
      tests: String.raw`Choosing an order of given numbers to make a sum of products as large or small as possible, or proving cyclic inequalities by comparing similarly ordered sequences.`,
      questions: [
        {
          stem: String.raw`The numbers $x_1, x_2, \ldots, x_6$ are $1, 2, 3, 4, 5, 6$ in some order. Find the smallest possible value of $x_1 + 2x_2 + 3x_3 + 4x_4 + 5x_5 + 6x_6$.`,
          difficulty: 1,
          answer: String.raw`$56$`,
        },
        {
          stem: String.raw`Let $a, b, c$ be positive real numbers. Prove that $a^3 + b^3 + c^3 \ge a^2 b + b^2 c + c^2 a$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: $(a^2, b^2, c^2)$ and $(a, b, c)$ are similarly ordered, so by rearrangement $a^2 \cdot a + b^2 \cdot b + c^2 \cdot c \ge a^2 \cdot b + b^2 \cdot c + c^2 \cdot a$ (or use AM-GM: $a^3 + a^3 + b^3 \ge 3a^2 b$).`,
        },
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 8$ are placed around a circle, one at each of eight equally spaced points. For each of the eight pairs of neighbouring numbers, the two numbers are multiplied, and $S$ is the sum of these eight products. Find the largest possible value of $S$.`,
          difficulty: 3,
          answer: String.raw`$191$`,
        },
      ],
    },
    {
      id: "A3-sum-of-squares",
      name: String.raw`Completing squares and SOS`,
      tests: String.raw`Polynomials in one or two variables to be minimised, or shown to be non-negative, by rewriting as a sum of squares plus a constant.`,
      questions: [
        {
          stem: String.raw`Find the minimum value of $x^2 + y^2 - 4x + 6y + 20$ over all real numbers $x$ and $y$.`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Find the minimum value of $x^2 + 5y^2 - 4xy + 2x - 6y + 10$ over all real numbers $x$ and $y$.`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Prove that $x^4 + y^4 + 8 \ge 8xy$ for all real numbers $x$ and $y$, and find all cases of equality.`,
          difficulty: 3,
          answer: String.raw`Equality at $x = y = \sqrt{2}$ and $x = y = -\sqrt{2}$. **Proof.** Key idea: $x^4 + y^4 + 8 - 8xy = (x^2 - y^2)^2 + 2(xy - 2)^2$.`,
        },
      ],
    },
    {
      id: "A3-tangent-line",
      name: String.raw`Tangent-line trick`,
      tests: String.raw`A sum $f(a) + f(b) + f(c)$ of the same one-variable function under a linear condition such as $a + b + c = 3$, with equality when all variables are equal. Bound each term by a linear function.`,
      questions: [
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $a + b + c = 6$. Find the minimum value of $a^3 + b^3 + c^3$.`,
          difficulty: 1,
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $a + b + c = 3$. Find the minimum value of
$$a^2 + b^2 + c^2 + \frac{1}{a} + \frac{1}{b} + \frac{1}{c}.$$`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $a + b + c = 3$. Prove that
$$\frac{a^3}{a^2 + 2} + \frac{b^3}{b^2 + 2} + \frac{c^3}{c^2 + 2} \ge 1.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the tangent line at $x = 1$ gives $\frac{x^3}{x^2 + 2} \ge \frac{7x - 4}{9}$ for $x > 0$, which is equivalent to $(x - 1)^2(x + 4) \ge 0$; then add.`,
        },
      ],
    },
    {
      id: "A3-min-max",
      name: String.raw`Maximum and minimum problems`,
      tests: String.raw`Find the largest or smallest value of an expression under a condition. Combine an inequality (AM-GM, Cauchy-Schwarz, a geometric picture, balanced coefficients) with an example achieving it.`,
      questions: [
        {
          stem: String.raw`Positive real numbers $x$ and $y$ satisfy $x + 2y = 12$. Find the maximum value of $xy$.`,
          difficulty: 1,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Find the minimum value of $\sqrt{x^2 + 4} + \sqrt{(6 - x)^2 + 9}$ over all real numbers $x$.`,
          difficulty: 2,
          answer: String.raw`$\sqrt{61}$`,
        },
        {
          stem: String.raw`Find the maximum value of
$$\frac{xy + yz + 2zx}{x^2 + y^2 + z^2}$$
over all real numbers $x, y, z$, not all zero.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{1 + \sqrt{3}}{2}$`,
        },
      ],
    },
  ],
});
