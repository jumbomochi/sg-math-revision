H2.addTopic({
  id: "A5",
  title: "Binomial Expansions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`The Binomial Theorem for a positive integer power: $n!$ and $\binom{n}{r}$, the general term, specific coefficients, the term independent of $x$, products of expansions and approximations.`,
  syllabus: {
    include: [
      String.raw`Use of the Binomial Theorem for positive integer $n$`,
      String.raw`Use of the notations $n!$ and $\binom{n}{r}$`,
      String.raw`Use of the general term $\binom{n}{r}a^{n-r}b^r$, $0 \le r \le n$`,
    ],
    exclude: [
      String.raw`Knowledge of the greatest term and properties of the coefficients`,
    ],
  },
  concepts: [
    {
      title: String.raw`Factorials and $\binom{n}{r}$`,
      body: String.raw`- $n! = n(n - 1)(n - 2) \cdots 3 \times 2 \times 1$, and $0! = 1$.
- $\displaystyle\binom{n}{r} = \frac{n!}{r!\,(n - r)!} = \frac{n(n - 1)\cdots(n - r + 1)}{r!}$ **(Given)**.
- Useful values: $\binom{n}{0} = \binom{n}{n} = 1$, $\binom{n}{1} = n$, $\binom{n}{2} = \dfrac{n(n - 1)}{2}$, $\binom{n}{3} = \dfrac{n(n - 1)(n - 2)}{6}$.
- Symmetry: $\binom{n}{r} = \binom{n}{n - r}$.

When $n$ is unknown, write $\binom{n}{2}$ and $\binom{n}{3}$ in the expanded forms above and solve the resulting equation (remember $n$ is a positive integer).

The coefficients for small $n$ form **Pascal's triangle**: each number is the sum of the two above it.`,
      figure: {
        type: "plot",
        x: [-3.7, 2.9], y: [-3.8, 0.35], equal: true, axes: false,
        labels: [
          ...[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]].flatMap((row, n) =>
            row.map((v, k) => ({ x: (k - n / 2) * 0.8, y: -0.7 * n, text: String(v), style: n === 4 ? "bold" : "plain", tone: n === 4 ? "accent" : undefined }))),
          ...[0, 1, 2, 3, 4, 5].map((n) => ({ x: -3.6, y: -0.7 * n, text: "n = " + n, pos: "e", style: "small" })),
        ],
        caption: String.raw`Pascal's triangle. Row $n = 4$ gives the coefficients of $(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.`,
        alt: "Pascal's triangle for n = 0 to 5: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1 (highlighted); 1 5 10 10 5 1.",
      },
    },
    {
      title: String.raw`The Binomial Theorem`,
      body: String.raw`For a positive integer $n$ **(Given)**:
$$(a + b)^n = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{r}a^{n-r}b^r + \cdots + b^n.$$

- There are $n + 1$ terms.
- The power of $a$ goes down by 1 each term while the power of $b$ goes up by 1; in every term the two powers add to $n$.
- Put each part in brackets, especially negatives and fractions: in $(2 - 3x)^5$, take $a = 2$ and $b = (-3x)$, so $b^2 = 9x^2$ and $b^3 = -27x^3$.
- "In ascending powers of $x$" means start with the constant term, then $x$, $x^2$, …`,
    },
    {
      title: String.raw`The general term`,
      body: String.raw`The $(r + 1)$th term of $(a + b)^n$ is
$$T_{r+1} = \binom{n}{r}a^{n-r}b^r, \qquad 0 \le r \le n.$$
This is not printed separately on the formula sheet, but it is the general term of the given expansion — know it well.

- Careful with the count: the **4th** term has $r = 3$.
- The **coefficient** of a term excludes the power of $x$; the **term** includes it. For example, in $(2 - 3x)^5$ the term in $x^3$ is $\binom{5}{3}(2)^2(-3x)^3 = -1080x^3$, and the coefficient is $-1080$.`,
    },
    {
      title: String.raw`Specific powers and the term independent of $x$`,
      body: String.raw`When both $a$ and $b$ contain $x$ (e.g. $x^2$ and $\dfrac{1}{x}$):
1. Write the general term and collect all the powers of $x$ into a single power $x^{(\ldots)}$ in terms of $r$.
2. Set that power equal to the one you want (use $0$ for the **term independent of $x$**, i.e. the constant term).
3. Solve for $r$. If $r$ is not a whole number between $0$ and $n$, **there is no such term**.
4. Substitute $r$ back to find the term.

Example: in $\left(x + \dfrac{1}{x^2}\right)^6$, $T_{r+1} = \binom{6}{r}x^{6-r}\left(x^{-2}\right)^r = \binom{6}{r}x^{6 - 3r}$. The constant term has $6 - 3r = 0$, so $r = 2$ and the term is $\binom{6}{2} = 15$.`,
    },
    {
      title: String.raw`Product of two expansions`,
      body: String.raw`To find one coefficient in a product such as $(1 - x)(1 + 2x)^5$, expand $(1 + 2x)^5$ only as far as needed, then pick out every pair of terms whose powers of $x$ add up to the power you want:
$$(1 - x)(1 + 10x + 40x^2 + \cdots).$$
The coefficient of $x$ is $1 \times 10 + (-1) \times 1 = 9$.

Do not multiply out everything — list the useful pairs and add their products. When one bracket has negative powers (e.g. $\frac{2}{x}$), the constant term may come from more than one pair.`,
    },
    {
      title: String.raw`Finding $n$ or an unknown constant`,
      body: String.raw`When some coefficients are given (or are equal, or in a given ratio):
- write each coefficient using $\binom{n}{r}$ in expanded form;
- form equations and solve;
- for two unknowns (e.g. $n$ and $k$ in $(1 + kx)^n$), divide one equation by the other to eliminate one unknown.

Check that $n$ is a positive integer, and reject any other solutions.`,
    },
    {
      title: String.raw`Approximations`,
      body: String.raw`When $x$ is small, high powers of $x$ are tiny, so the first few terms give a good approximation:
$$(1 + x)^6 \approx 1 + 6x + 15x^2.$$

To estimate a number such as $1.01^6$, match it to the expansion: $1 + x = 1.01$ gives $x = 0.01$, so $1.01^6 \approx 1 + 0.06 + 0.0015 = 1.0615$.

- Show the value of $x$ you substitute.
- The approximation is good only when $x$ is small, because the terms you left out are then very small.`,
      figure: {
        type: "plot",
        x: [-0.62, 0.48], y: [-0.4, 6.6], height: 230,
        curves: [
          { fn: "x => Math.pow(1 + x, 6)" },
          { fn: "x => 1 + 6*x + 15*x*x", tone: "good", dashed: true },
        ],
        labels: [
          { x: -0.6, y: 3.6, text: "y = 1 + 6x + 15x²", pos: "e", style: "italic", tone: "good" },
          { x: 0.27, y: 4.6, text: "y = (1 + x)⁶", pos: "w", style: "italic", tone: "accent" },
        ],
        xTicks: [{ x: -0.5, label: "−0.5" }, { x: 0.4, label: "0.4" }],
        caption: String.raw`$(1 + x)^6$ and its first three terms $1 + 6x + 15x^2$: almost the same near $x = 0$, drifting apart as $|x|$ grows.`,
        alt: "Graphs of y = (1 + x)⁶ (solid) and y = 1 + 6x + 15x² (dashed) for x from about −0.6 to 0.48. The two curves lie on top of each other near x = 0 and separate further from 0.",
      },
    },
  ],
  archetypes: [
    {
      id: "A5-first-terms-approximation",
      name: String.raw`First few terms and approximations`,
      tests: String.raw`Writing down the first three or four terms of an expansion in ascending powers of $x$, then choosing a value of $x$ to estimate a number such as $1.9975^8$.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Write down the first three terms in the expansion of $\left(2 - \dfrac{x}{4}\right)^8$ in ascending powers of $x$, simplifying each term.`, marks: 3 },
            { label: "(b)", text: String.raw`By substituting a suitable value of $x$, use your answer to part (a) to estimate the value of $1.9975^8$, giving your answer correct to 2 decimal places.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A5-specific-term",
      name: String.raw`A specific term or coefficient`,
      tests: String.raw`Using the general term to find the coefficient of a given power of $x$ without writing out the whole expansion, including when both parts of the bracket contain $x$.`,
      questions: [
        {
          stem: String.raw`Find the coefficient of $x^5$ in the expansion of $(3 + 2x)^7$.`,
          marks: 2,
        },
        {
          stem: String.raw`Write down the general term in the expansion of $\left(2x - \dfrac{1}{x}\right)^9$. Hence find the term in $x^3$.`,
          marks: 4,
        },
      ],
    },
    {
      id: "A5-term-independent",
      name: String.raw`Term independent of $x$`,
      tests: String.raw`Collecting the powers of $x$ in the general term, setting the power to zero and solving for $r$; showing that a term does not exist when $r$ is not a whole number.`,
      questions: [
        {
          stem: String.raw`Find the term independent of $x$ in the expansion of $\left(x^2 + \dfrac{2}{x}\right)^6$.`,
          marks: 3,
        },
        {
          stem: String.raw`In the expansion of $\left(x^3 - \dfrac{2}{x}\right)^8$,`,
          parts: [
            { label: "(a)", text: String.raw`find the term independent of $x$,`, marks: 3 },
            { label: "(b)", text: String.raw`show that there is no term in $x^2$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A5-product-expansions",
      name: String.raw`Coefficient in a product of two expressions`,
      tests: String.raw`Expanding only the terms needed, pairing terms whose powers add up to the required power, and sometimes using a given coefficient to find an unknown.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Find the first three terms in the expansion of $(1 - 3x)^6$ in ascending powers of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given that the coefficient of $x^2$ in the expansion of $(2 + kx)(1 - 3x)^6$ is $216$, find the value of the constant $k$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Find the term independent of $x$ in the expansion of $(1 + x^2)\left(x - \dfrac{2}{x}\right)^6$.`,
          marks: 5,
        },
      ],
    },
    {
      id: "A5-find-n-or-constant",
      name: String.raw`Finding $n$ or an unknown constant from given coefficients`,
      tests: String.raw`Forming equations from given or equal coefficients using $\binom{n}{2}$, $\binom{n}{3}$ in expanded form, and solving for $n$ (a positive integer) and any other constant.`,
      questions: [
        {
          stem: String.raw`In the expansion of $(1 + kx)^n$, where $k$ is a constant and $n$ is a positive integer, the coefficient of $x$ is $20$ and the coefficient of $x^2$ is $150$. Find the value of $n$ and of $k$.`,
          marks: 5,
        },
        {
          stem: String.raw`In the expansion of $(2 + x)^n$, where $n$ is a positive integer, the coefficients of $x^2$ and $x^3$ are equal.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $n = 8$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence find the coefficient of $x^2$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "A5-full-expansion-surds",
      name: String.raw`Full expansion and exact values`,
      tests: String.raw`Expanding a binomial fully (often a sum such as $(1 + x)^n + (1 - x)^n$, where odd powers cancel), then substituting a surd to find an exact value without a calculator.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Expand and simplify $(1 + x)^5 + (1 - x)^5$.`, marks: 3 },
            { label: "(b)", text: String.raw`Hence, without using a calculator, find the exact value of $(1 + \sqrt{2})^5 + (1 - \sqrt{2})^5$.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
  ],
});
