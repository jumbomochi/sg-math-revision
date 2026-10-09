H2.addTopic({
  id: "C6",
  title: "Generating Functions and Double Counting",
  summary: String.raw`Generating functions for coins, dice and partitions, series and recurrences solved with generating functions, binomial sums, Vandermonde-type identities and combinatorial proofs, and double counting.`,
  concepts: [
    {
      title: String.raw`Generating functions: multiply to count`,
      body: String.raw`Give each kind of item a series whose exponents are the amounts it may contribute. The number of ways to reach a total $n$ is the **coefficient of $x^{n}$** in the product.

- Any number of $2$-cent and $5$-cent stamps: $(1 + x^{2} + x^{4} + \cdots)(1 + x^{5} + x^{10} + \cdots)$. The coefficient of $x^{12}$ is $2$ ($12 = 6 \times 2$ or $1 \times 2 + 2 \times 5$).
- A die with faces $1$ to $6$ is $x + x^{2} + \cdots + x^{6}$; the totals of $k$ dice are counted by its $k$-th power.
- "At most $m$ of this kind" is a finite factor $1 + x + \cdots + x^{m}$; "a multiple of $k$" is $\dfrac{1}{1 - x^{k}}$; an item that may count negatively gets negative exponents.
- Order does not matter inside a product, so the method counts **selections**, not arrangements.`,
    },
    {
      title: String.raw`A toolkit of series`,
      body: String.raw`- $\dfrac{1}{1 - x} = 1 + x + x^{2} + \cdots$ and $\dfrac{1 - x^{m}}{1 - x} = 1 + x + \cdots + x^{m-1}$.
- $\dfrac{1}{(1 - x)^{2}} = \displaystyle\sum_{n \ge 0} (n + 1)x^{n}$, and in general $\dfrac{1}{(1 - x)^{k}} = \displaystyle\sum_{n \ge 0} \binom{n + k - 1}{k - 1} x^{n}$.
- Applying $x\dfrac{d}{dx}$ multiplies the coefficient of $x^{n}$ by $n$: $\displaystyle\sum_{n \ge 1} n x^{n} = \dfrac{x}{(1 - x)^{2}}$.
- $\displaystyle\sum_{n \ge 0} \binom{2n}{n} x^{n} = \dfrac{1}{\sqrt{1 - 4x}}$.
- Look for **cancellation**: $(1 + x + x^{2} + x^{3}) \cdot \dfrac{1}{1 - x^{4}} = \dfrac{1}{1 - x}$, which says every $n \ge 0$ is $4q + r$ with $0 \le r \le 3$ in exactly one way.`,
    },
    {
      title: String.raw`Evaluating at special points`,
      body: String.raw`For $f(x) = \sum a_{n}x^{n}$:

- $f(1)$ is the sum of all coefficients and $\dfrac{f(1) + f(-1)}{2}$ is the sum of those with even $n$.
- **Roots of unity filter**: if $\omega$ is a primitive $m$-th root of unity, then $\dfrac{1}{m}\displaystyle\sum_{j=0}^{m-1} f(\omega^{j})$ is the sum of the $a_{n}$ with $m \mid n$, because $1 + \omega^{n} + \omega^{2n} + \cdots + \omega^{(m-1)n}$ is $m$ if $m \mid n$ and $0$ otherwise.
- $1 + x + \cdots + x^{m-1}$ vanishes at every $m$-th root of unity other than $1$, so factors of this shape make the filter collapse.
- Example: $D(x) = x + x^{2} + \cdots + x^{6}$ has $D(-1) = 0$, so for any number of dice the even and odd totals are equally frequent.
- Factorising a generating function (into cyclotomic pieces such as $1 + x$, $1 + x + x^{2}$, $1 - x + x^{2}$) shows all ways of splitting it into products with non-negative coefficients.`,
    },
    {
      title: String.raw`Partitions and Ferrers diagrams`,
      body: String.raw`A **partition** of $n$ writes $n$ as an unordered sum of positive integers: $5$ has $7$ partitions ($5$, $4+1$, $3+2$, $3+1+1$, $2+2+1$, $2+1+1+1$, $1+1+1+1+1$).

- Generating function: $\displaystyle\prod_{k \ge 1} \frac{1}{1 - x^{k}}$. Drop factors to restrict the parts; distinct parts give $\displaystyle\prod_{k \ge 1}(1 + x^{k})$.
- **Ferrers diagram**: one row of dots per part. Reading columns instead of rows gives the **conjugate** partition; it swaps "number of parts" with "largest part".
- **Euler**: partitions into distinct parts and into odd parts are equinumerous, since $\prod (1 + x^{k}) = \prod \dfrac{1 - x^{2k}}{1 - x^{k}} = \prod_{k \text{ odd}} \dfrac{1}{1 - x^{k}}$. For $6$: $6, 5+1, 4+2, 3+2+1$ and $5+1, 3+3, 3+1+1+1, 1+1+1+1+1+1$.`,
      figure: [
        {
          type: "plot",
          x: [-0.8, 4.6],
          y: [-4.2, 0.8],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 0.22, fill: true, tone: "accent" },
            { c: [1, 0], r: 0.22, fill: true, tone: "accent" },
            { c: [2, 0], r: 0.22, fill: true, tone: "accent" },
            { c: [3, 0], r: 0.22, fill: true, tone: "accent" },
            { c: [0, -1], r: 0.22, fill: true, tone: "accent" },
            { c: [1, -1], r: 0.22, fill: true, tone: "accent" },
            { c: [0, -2], r: 0.22, fill: true, tone: "accent" },
          ],
          labels: [{ x: 1.5, y: -3.7, text: "4 + 2 + 1", style: "plain" }],
          alt: "Ferrers diagram of 4 + 2 + 1: rows of 4, 2 and 1 dots, left-aligned.",
        },
        {
          type: "plot",
          x: [-0.8, 4.6],
          y: [-4.2, 0.8],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 0.22, fill: true, tone: "good" },
            { c: [1, 0], r: 0.22, fill: true, tone: "good" },
            { c: [2, 0], r: 0.22, fill: true, tone: "good" },
            { c: [0, -1], r: 0.22, fill: true, tone: "good" },
            { c: [1, -1], r: 0.22, fill: true, tone: "good" },
            { c: [0, -2], r: 0.22, fill: true, tone: "good" },
            { c: [0, -3], r: 0.22, fill: true, tone: "good" },
          ],
          labels: [{ x: 2.6, y: -3.7, text: "3 + 2 + 1 + 1", style: "plain" }],
          alt: "Ferrers diagram of the conjugate partition 3 + 2 + 1 + 1: rows of 3, 2, 1 and 1 dots.",
          caption: String.raw`Rows of $4+2+1$ read as columns give the conjugate $3+2+1+1$.`,
        },
      ],
    },
    {
      title: String.raw`Recurrences and sums with generating functions`,
      body: String.raw`Put the sequence into $A(x) = \sum_{n \ge 0} a_{n}x^{n}$, multiply the recurrence by $x^{n}$ and add over $n$; this gives an equation for $A(x)$. Solve it and expand (partial fractions, or a known series).

- Example: $a_{0} = 0$, $a_{n} = 2a_{n-1} + 1$. Then $A = 2xA + \dfrac{x}{1 - x}$, so $A = \dfrac{x}{(1 - x)(1 - 2x)} = \dfrac{1}{1 - 2x} - \dfrac{1}{1 - x}$ and $a_{n} = 2^{n} - 1$.
- **Convolutions become products**: if $c_{n} = \sum_{k=0}^{n} a_{k}b_{n-k}$ then $C(x) = A(x)B(x)$.
- **Sums of series**: $\sum a_{n}r^{n} = A(r)$ when the series converges. Example: $\displaystyle\sum_{n \ge 1} \frac{n}{2^{n}} = \frac{1/2}{(1 - 1/2)^{2}} = 2$.
- If $A$ satisfies a quadratic, choose the root whose expansion starts with the right constant term.`,
    },
    {
      title: String.raw`The binomial toolkit`,
      body: String.raw`- **Pascal**: $\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$; **symmetry**: $\binom{n}{k} = \binom{n}{n-k}$.
- **Absorption**: $k\binom{n}{k} = n\binom{n-1}{k-1}$ and $\dfrac{1}{k+1}\binom{n}{k} = \dfrac{1}{n+1}\binom{n+1}{k+1}$.
- **Hockey stick**: $\binom{r}{r} + \binom{r+1}{r} + \cdots + \binom{n}{r} = \binom{n+1}{r+1}$.
- **Calculus on $(1 + x)^{n}$**: differentiate to bring down $k$, integrate to divide by $k + 1$, then put $x = 1$ or $x = -1$. Example: $\sum k\binom{4}{k} = 4 \cdot 2^{3} = 32$.
- Sums over even $k$ only: average the values at $x = 1$ and $x = -1$.`,
    },
    {
      title: String.raw`Double counting`,
      body: String.raw`Count one set of pairs in two ways.

- **Incidences**: in any family of clubs, $\sum (\text{club sizes}) = \sum_{\text{people}} (\text{number of clubs joined})$. Example: $6$ committees of $3$ drawn from $9$ people, each person on exactly $2$ committees: $6 \times 3 = 9 \times 2$.
- **Handshakes**: the degrees of a graph add up to twice the number of edges.
- **Pairs inside sets**: if any two of $m$ sets share at most $\lambda$ elements and element $x$ lies in $d_{x}$ of them, then $\sum_{x} \binom{d_{x}}{2} \le \lambda\binom{m}{2}$.
- Turn the bound into a size estimate with **Cauchy–Schwarz**, $\sum d_{x}^{2} \ge \dfrac{(\sum d_{x})^{2}}{N}$ over $N$ elements, or with "as equal as possible" (convexity).`,
      figure: {
        type: "plot",
        x: [-1.4, 5.4],
        y: [-0.9, 3.0],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [0.5, 2.2], tone: "muted" },
          { from: [1.5, 0], to: [0.5, 2.2], tone: "muted" },
          { from: [1.5, 0], to: [2.5, 2.2], tone: "muted" },
          { from: [3, 0], to: [2.5, 2.2], tone: "muted" },
          { from: [3, 0], to: [4, 2.2], tone: "muted" },
          { from: [4.5, 0], to: [4, 2.2], tone: "muted" },
          { from: [0, 0], to: [4, 2.2], tone: "muted" },
          { from: [4.5, 0], to: [2.5, 2.2], tone: "muted" },
        ],
        circles: [
          { c: [0, 0], r: 0.2, fill: true, tone: "accent" },
          { c: [1.5, 0], r: 0.2, fill: true, tone: "accent" },
          { c: [3, 0], r: 0.2, fill: true, tone: "accent" },
          { c: [4.5, 0], r: 0.2, fill: true, tone: "accent" },
          { c: [0.5, 2.2], r: 0.2, fill: true, tone: "good" },
          { c: [2.5, 2.2], r: 0.2, fill: true, tone: "good" },
          { c: [4, 2.2], r: 0.2, fill: true, tone: "good" },
        ],
        labels: [
          { x: -0.5, y: 0, text: "people", pos: "w", style: "small" },
          { x: 0, y: 2.2, text: "clubs", pos: "w", style: "small" },
        ],
        caption: String.raw`Each line is a (person, club) pair: $8$ lines, counted as $2+3+3$ by clubs or $2+2+2+2$ by people.`,
        alt: "Four people in a bottom row and three clubs in a top row, joined by eight lines; the clubs have 2, 3 and 3 members and every person is in 2 clubs.",
      },
    },
    {
      title: String.raw`Combinatorial proofs and Vandermonde`,
      body: String.raw`To prove an identity, find one set that each side counts.

- **Committee and chair**: $k\binom{n}{k} = n\binom{n-1}{k-1}$ (choose the committee then its chair, or the chair first).
- **Vandermonde**: $\displaystyle\sum_{k} \binom{m}{k}\binom{n}{r-k} = \binom{m+n}{r}$: choose $r$ people from $m$ men and $n$ women, sorted by the number $k$ of men. Use $\binom{n}{r-k} = \binom{n}{n-r+k}$ to bring sums of products into this shape.
- **Split by a special element**: $\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$ (is person $n$ chosen?).
- **Lattice paths**: $\binom{a+b}{a}$ counts paths of $a$ right-steps and $b$ up-steps; sorting paths by where they cross a line gives convolution identities.
- An algebraic check: compare coefficients in $(1 + x)^{m}(1 + x)^{n} = (1 + x)^{m+n}$.`,
    },
  ],
  archetypes: [
    {
      id: "C6-gf-counting",
      name: String.raw`Counting with generating functions`,
      tests: String.raw`Coins, stamps, weights, dice totals and baskets of sweets in which each kind has its own allowed amounts. Give each kind a factor, multiply, and read off (or filter) a coefficient.`,
      questions: [
        {
          stem: String.raw`In how many ways can $50$ cents be made using $5$-cent, $10$-cent and $20$-cent coins? (Only the number of coins of each kind matters.)`,
          difficulty: 1,
          choices: [String.raw`$9$`, String.raw`$10$`, String.raw`$11$`, String.raw`$12$`, String.raw`$13$`],
          answer: String.raw`(D) $12$`,
        },
        {
          stem: String.raw`Two ordinary dice (faces $1$ to $6$) and one four-sided die (faces $1$ to $4$) are rolled together. In how many of the $144$ equally likely outcomes is the total $10$?`,
          difficulty: 1,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A bag of $25$ sweets is filled with toffees, mints, chocolates and jellies (sweets of the same kind are identical). The number of toffees must be even, there may be at most one mint, the number of chocolates must be a multiple of $3$, and there may be at most two jellies. How many different bags are possible?`,
          difficulty: 2,
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`A shopkeeper has a two-pan balance and four weights of $1$ g, $2$ g, $4$ g and $8$ g. An object is placed on the left pan, and each weight is either placed on the left pan, placed on the right pan, or not used. In how many ways can she balance an object of mass $5$ g?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Twelve sweets are chosen from four kinds (sweets of the same kind are identical, and there are plenty of each kind). In how many ways can this be done if no kind is chosen exactly once? (A kind may be chosen $0$ times.)`,
          difficulty: 3,
          answer: String.raw`$205$`,
        },
        {
          stem: String.raw`Let $n$ be a positive integer. Some $n$ ordinary dice are rolled, and the total is divided by $7$. Prove that, among the $6^{n}$ outcomes, the numbers of outcomes giving the seven possible remainders differ from one another by at most $1$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $D(x) = x + x^{2} + \cdots + x^{6}$ and $\omega$ a primitive $7$th root of unity, the roots of unity filter gives the count for remainder $r$ as $\frac{1}{7}\sum_{j=0}^{6} \omega^{-jr}D(\omega^{j})^{n}$, and $D(\omega^{j}) = -1$ for $j \ne 0$; so remainder $0$ occurs $\frac{6^{n} + 6(-1)^{n}}{7}$ times and every other remainder $\frac{6^{n} - (-1)^{n}}{7}$ times.`,
        },
        {
          stem: String.raw`Each face of two cubes is labelled with a non-negative integer. When both cubes are rolled and the two top labels are added, each of the totals $0, 1, 2, \ldots, 35$ occurs in exactly one of the $36$ outcomes. How many such pairs of cubes are there? (The two cubes are interchangeable, and a cube is determined by its six labels.)`,
          difficulty: 4,
          answer: String.raw`$7$`,
        },
      ],
    },
    {
      id: "C6-partitions",
      name: String.raw`Partitions of integers`,
      tests: String.raw`Unordered sums: partitions with restricted, distinct or odd parts, or a fixed number of parts. Use Ferrers diagrams and conjugation, or compare product generating functions (as in Euler's distinct-parts/odd-parts theorem).`,
      questions: [
        {
          stem: String.raw`In how many ways can $10$ be written as a sum of terms each equal to $1$, $2$ or $3$, if the order of the terms does not matter? (For example, $3 + 3 + 2 + 1 + 1$ is one way.)`,
          difficulty: 1,
          choices: [String.raw`$12$`, String.raw`$13$`, String.raw`$14$`, String.raw`$15$`, String.raw`$16$`],
          answer: String.raw`(C) $14$`,
        },
        {
          stem: String.raw`In how many ways can $11$ be written as a sum of one or more **different** positive integers, if the order does not matter? (The number $11$ on its own counts as one way.)`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`In how many ways can $15$ be written as a sum of odd positive integers, repetitions allowed and order not mattering? (Both $15$ on its own and $1 + 1 + \cdots + 1$ count.)`,
          difficulty: 2,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`Twelve identical sweets are packed into four identical bags so that no bag is empty. In how many ways can this be done?`,
          difficulty: 2,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Let $n \ge 2$. Prove that the number of partitions of $n$ in which the largest part occurs exactly once equals the total number of partitions of $n - 1$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: conjugate. The number of times the largest part occurs equals the smallest part of the conjugate partition, so these partitions correspond to the partitions of $n$ that contain a part $1$; deleting one $1$ gives every partition of $n - 1$ exactly once.`,
        },
        {
          stem: String.raw`A partition is **self-conjugate** if its Ferrers diagram is symmetric about its main diagonal (equivalently, it equals its own conjugate); for example $3 + 2 + 1$ and $4 + 1 + 1 + 1$ are self-conjugate. How many partitions of $20$ are self-conjugate?`,
          difficulty: 3,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$, the number of partitions of $n$ in which no part occurs exactly once (every part that appears, appears at least twice) equals the number of partitions of $n$ into parts none of which is of the form $6k + 1$ or $6k + 5$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the first count has generating function $\prod_{k}\left(1 + \frac{x^{2k}}{1 - x^{k}}\right) = \prod_{k}\frac{1 - x^{k} + x^{2k}}{1 - x^{k}}$, and $1 - x^{k} + x^{2k} = \frac{1 + x^{3k}}{1 + x^{k}}$ turns this into $\prod_{k}\frac{1 - x^{6k}}{(1 - x^{2k})(1 - x^{3k})}$, which allows exactly the parts $\equiv 0, 2, 3, 4 \pmod 6$, each any number of times.`,
        },
      ],
    },
    {
      id: "C6-gf-recurrences",
      name: String.raw`Series and recurrences via generating functions`,
      tests: String.raw`Infinite sums $\sum a_{n}r^{n}$, sequences defined by a recurrence, and recurrences involving a convolution $\sum a_{k}b_{n-k}$. Form $A(x) = \sum a_{n}x^{n}$, turn the recurrence into an equation for $A$, solve and expand.`,
      questions: [
        {
          stem: String.raw`Find $\displaystyle 1 + \frac{2}{4} + \frac{3}{4^{2}} + \frac{4}{4^{3}} + \cdots = \sum_{n \ge 0} \frac{n + 1}{4^{n}}$.`,
          difficulty: 1,
          choices: [String.raw`$\frac{4}{3}$`, String.raw`$\frac{3}{2}$`, String.raw`$\frac{16}{9}$`, String.raw`$2$`, String.raw`$\frac{9}{4}$`],
          answer: String.raw`(C) $\frac{16}{9}$`,
        },
        {
          stem: String.raw`The Fibonacci numbers are given by $F_{1} = F_{2} = 1$ and $F_{n+2} = F_{n+1} + F_{n}$. Find $\displaystyle\sum_{n \ge 1} \frac{F_{n}}{3^{n}}$.`,
          difficulty: 1,
          answer: String.raw`$\frac{3}{5}$`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$ and $a_{n} = 2a_{n-1} + n$ for $n \ge 1$. Find $a_{10}$.`,
          difficulty: 2,
          answer: String.raw`$3060$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{n \ge 1} \frac{n^{2}}{3^{n}}$.`,
          difficulty: 2,
          answer: String.raw`$\frac{3}{2}$`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$ and, for $n \ge 1$,
$$a_{n} = a_{n-1} + 2a_{n-2} + 4a_{n-3} + \cdots + 2^{n-1}a_{0}.$$
Find $a_{10}$.`,
          difficulty: 3,
          answer: String.raw`$3^{9} = 19683$`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$ and, for $n \ge 1$,
$$a_{n} = n a_{0} + (n - 1)a_{1} + (n - 2)a_{2} + \cdots + 1 \cdot a_{n-1}.$$
With Fibonacci numbers $F_{1} = F_{2} = 1$, $F_{k+2} = F_{k+1} + F_{k}$, prove that $a_{n} = F_{2n}$ for every $n \ge 1$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the recurrence is a convolution with $1, 2, 3, \ldots$, so $A(x) = 1 + \frac{x}{(1 - x)^{2}}A(x)$, giving $A(x) = \frac{(1 - x)^{2}}{1 - 3x + x^{2}} = 1 + \frac{x}{1 - 3x + x^{2}}$; and $\sum_{n \ge 1} F_{2n}x^{n} = \frac{x}{1 - 3x + x^{2}}$ because $F_{2n+2} = 3F_{2n} - F_{2n-2}$.`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$ and, for $n \ge 1$,
$$a_{n} = a_{n-1} + \sum_{k=0}^{n-1} a_{k}a_{n-1-k},$$
so $a_{1} = 2$, $a_{2} = 6$ and $a_{3} = 22$. Prove that for every $n \ge 1$, $a_{n}$ leaves remainder $2$ on division by $8$ when $n \equiv 0$ or $1 \pmod 4$, and remainder $6$ when $n \equiv 2$ or $3 \pmod 4$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $A(x) = \sum a_{n}x^{n}$ satisfies $A = 1 + xA + xA^{2}$, so $T = \frac{A - 1}{2}$ satisfies $T = x + 3xT + 2xT^{2}$; modulo $2$ this gives $T \equiv \frac{x}{1 - x}$, and putting $T^{2} \equiv \frac{x^{2}}{(1 - x)^{2}}$ back in modulo $4$ (where $1 - 3x \equiv 1 + x$) gives $T \equiv \frac{x}{1 + x} + \frac{2x^{3}}{(1 - x)^{3}}$, that is, $\frac{a_{n}}{2} \equiv (-1)^{n-1} + 2\binom{n-1}{2} \pmod 4$.`,
        },
      ],
    },
    {
      id: "C6-binomial-sums",
      name: String.raw`Binomial sums`,
      tests: String.raw`Closed forms for sums of binomial coefficients with weights: $k\binom{n}{k}$, $\frac{1}{k+1}\binom{n}{k}$, $k^{2}\binom{n}{k}$, alternating signs, or every other term. Use absorption, the hockey stick, or differentiate or integrate $(1 + x)^{n}$; for hard ones, a generating function in $n$.`,
      questions: [
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{10} k\binom{10}{k}$.`,
          difficulty: 1,
          choices: [String.raw`$2560$`, String.raw`$5120$`, String.raw`$10240$`, String.raw`$11264$`, String.raw`$20480$`],
          answer: String.raw`(B) $5120$`,
        },
        {
          stem: String.raw`Find $\dbinom{3}{3} + \dbinom{4}{3} + \dbinom{5}{3} + \cdots + \dbinom{12}{3}$.`,
          difficulty: 1,
          answer: String.raw`$715$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{9} \frac{1}{k + 1}\binom{9}{k}$.`,
          difficulty: 2,
          answer: String.raw`$\frac{1023}{10}$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{8} k^{2}\binom{8}{k}$.`,
          difficulty: 2,
          answer: String.raw`$4608$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{10} k\binom{20}{2k} = 0 \cdot \binom{20}{0} + 1 \cdot \binom{20}{2} + 2 \cdot \binom{20}{4} + \cdots + 10 \cdot \binom{20}{20}$.`,
          difficulty: 3,
          answer: String.raw`$5 \cdot 2^{19} = 2621440$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\binom{n}{1} - \frac{1}{2}\binom{n}{2} + \frac{1}{3}\binom{n}{3} - \cdots + \frac{(-1)^{n-1}}{n}\binom{n}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \cdots + \frac{1}{n}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: call the left side $S_{n}$; by Pascal's rule $S_{n} - S_{n-1} = \sum_{k \ge 1} \frac{(-1)^{k-1}}{k}\binom{n-1}{k-1} = \frac{1}{n}\sum_{k \ge 1}(-1)^{k-1}\binom{n}{k} = \frac{1}{n}$, then induct.`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\sum_{k=0}^{n} (-1)^{k} \, 4^{n-k} \binom{n}{k}\binom{2k}{k} = \binom{2n}{n}.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: multiply by $x^{n}$ and sum over $n$: for any $b_{k}$, $\sum_{n}x^{n}\sum_{k}\binom{n}{k}4^{n-k}b_{k} = \frac{1}{1 - 4x}B\!\left(\frac{x}{1 - 4x}\right)$ where $B(y) = \sum b_{k}y^{k}$; with $b_{k} = (-1)^{k}\binom{2k}{k}$, $B(y) = (1 + 4y)^{-1/2}$ and the result simplifies to $(1 - 4x)^{-1/2} = \sum \binom{2n}{n}x^{n}$.`,
        },
      ],
    },
    {
      id: "C6-double-counting",
      name: String.raw`Double counting`,
      tests: String.raw`Clubs and members, committees and pairs of people, numbers and their divisors. Count one set of pairs in two ways to get an equation, or an inequality when one of the counts is only bounded (often finished with Cauchy–Schwarz).`,
      questions: [
        {
          stem: String.raw`A school has $15$ clubs, each with exactly $8$ members, and every student belongs to exactly $3$ clubs. How many students are there?`,
          difficulty: 1,
          choices: [String.raw`$40$`, String.raw`$45$`, String.raw`$60$`, String.raw`$80$`, String.raw`$120$`],
          answer: String.raw`(A) $40$`,
        },
        {
          stem: String.raw`For a positive integer $n$, let $d(n)$ be the number of positive divisors of $n$. Find $d(1) + d(2) + d(3) + \cdots + d(20)$.`,
          difficulty: 1,
          answer: String.raw`$66$`,
        },
        {
          stem: String.raw`A society of $13$ people has some committees, each with exactly $4$ members, arranged so that every two people serve together on exactly one committee. How many committees are there?`,
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`In a school, every club has exactly $8$ members, every student belongs to exactly two clubs, and any two clubs have exactly one member in common. How many students are there?`,
          difficulty: 2,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`In a group of $25$ people, each person has at least $6$ friends within the group (friendship is mutual). Prove that some two people in the group have at least two common friends.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: count triples (person, unordered pair of that person's friends): there are at least $25\binom{6}{2} = 375$ of them, but only $\binom{25}{2} = 300$ pairs of people, so some pair is counted twice.`,
        },
        {
          stem: String.raw`What is the largest number of $4$-element subsets of $\{1, 2, \ldots, 9\}$ that can be chosen so that any two of the chosen subsets have at most one element in common?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`A club has $12$ committees, each with exactly $6$ members, and any two committees have at most $2$ members in common. Find, with proof, the smallest possible number of members of the club.`,
          difficulty: 4,
          answer: String.raw`$16$. Key idea: if member $x$ is on $d_{x}$ committees, then $\sum d_{x} = 72$ and, counting (pair of committees, common member), $\sum \binom{d_{x}}{2} \le 2\binom{12}{2}$, so $\sum d_{x}^{2} \le 336$ and Cauchy–Schwarz gives $72^{2} \le 336N$, so $N \ge 16$; for $16$, place the members in a $4 \times 4$ grid and, for $12$ of the cells, form the committee of the $6$ other cells in that cell's row or column — any two of these committees share exactly $2$ members.`,
        },
      ],
    },
    {
      id: "C6-combinatorial-proofs",
      name: String.raw`Vandermonde and combinatorial proofs`,
      tests: String.raw`Sums of products of binomial coefficients, and identities to prove by counting one set in two ways: choosing from two groups (Vandermonde), a committee with officers, people in couples, or lattice paths.`,
      questions: [
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{4} \binom{6}{k}\binom{8}{4-k}$.`,
          difficulty: 1,
          choices: [String.raw`$210$`, String.raw`$330$`, String.raw`$495$`, String.raw`$715$`, String.raw`$1001$`],
          answer: String.raw`(E) $1001$`,
        },
        {
          stem: String.raw`Find $\dbinom{8}{0}^{2} + \dbinom{8}{1}^{2} + \dbinom{8}{2}^{2} + \cdots + \dbinom{8}{8}^{2}$.`,
          difficulty: 1,
          answer: String.raw`$12870$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{6} k\binom{6}{k}^{2}$.`,
          difficulty: 2,
          answer: String.raw`$2772$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{8} \binom{10}{k}\binom{10}{k+2}$.`,
          difficulty: 2,
          answer: String.raw`$125970$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\binom{2n}{n} = \sum_{k \ge 0} \binom{n}{2k}\binom{2k}{k}2^{n-2k}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: choose $n$ of $2n$ people who form $n$ couples; the number of couples chosen completely equals the number not chosen at all, say $k$ each, so pick these $2k$ couples, decide which $k$ of them are chosen, and pick one person from each of the other $n - 2k$ couples.`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=0}^{12} (-1)^{k}\binom{12}{k}^{2}$.`,
          difficulty: 3,
          answer: String.raw`$924$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\sum_{k=0}^{n} \binom{n}{k}\binom{n+k}{k} = \sum_{k=0}^{n} \binom{n}{k}^{2}2^{k}.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: expand $\binom{n+k}{k} = \sum_{j}\binom{n}{j}\binom{k}{j}$ by Vandermonde, swap the sums and use $\binom{n}{k}\binom{k}{j} = \binom{n}{j}\binom{n-j}{k-j}$, so the left side is $\sum_{j}\binom{n}{j}^{2}2^{n-j}$; finally replace $j$ by $n - j$.`,
        },
      ],
    },
  ],
});
