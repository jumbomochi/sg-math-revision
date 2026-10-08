H2.addTopic({
  id: "C1",
  title: "Counting",
  summary: String.raw`Multiplication and addition principles, arrangements with restrictions, stars and bars, inclusion–exclusion, bijections and lattice paths, recursion, and counting up to symmetry.`,
  concepts: [
    {
      title: String.raw`Multiplication principle and casework`,
      body: String.raw`- **Multiplication principle**: if a task is done in stages, with $m$ options at the first stage and then $n$ options at the second (whatever was chosen first), there are $mn$ ways.
- **Addition principle**: split the objects into **disjoint** cases, count each case, and add.
- Fill the **most restricted** position first. If one restriction changes the number of options elsewhere, split into cases.
- Example: three-digit even numbers with distinct digits. Last digit $0$: $9 \times 8 = 72$. Last digit $2, 4, 6$ or $8$: $4 \times 8 \times 8 = 256$ (the first digit cannot be $0$). Total $328$.`,
    },
    {
      title: String.raw`Permutations and combinations`,
      body: String.raw`- Ordered choices of $k$ from $n$ distinct objects: $n(n-1)\cdots(n-k+1) = \dfrac{n!}{(n-k)!}$.
- Unordered choices: $\displaystyle\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$. Useful facts: $\binom{n}{k} = \binom{n}{n-k}$ and $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ (Pascal).
- Arrangements of $n$ objects with $a$ identical of one kind, $b$ of another, ...: $\dfrac{n!}{a!\,b!\cdots}$. Example: the letters of COCOA give $\dfrac{5!}{2!\,2!} = 30$ words.`,
    },
    {
      title: String.raw`Restrictions: glue, gaps and complements`,
      body: String.raw`- **Must be together**: glue them into one block, arrange the blocks, then arrange inside the block.
- **Must not be together**: arrange the others first, then place the restricted objects into the **gaps** (including the two ends), at most one per gap.
- **At least one** or awkward conditions: count everything and subtract the complement.
- Example: $4$ boys and $3$ girls in a row with no two girls adjacent. Arrange the boys ($4!$), creating $5$ gaps; put the girls in $3$ different gaps in order: $5 \times 4 \times 3$. Total $24 \times 60 = 1440$.`,
    },
    {
      title: String.raw`Stars and bars`,
      body: String.raw`- The number of solutions of $x_1 + x_2 + \cdots + x_k = n$ in **non-negative** integers is $\displaystyle\binom{n+k-1}{k-1}$: arrange $n$ stars and $k-1$ bars in a row.
- In **positive** integers it is $\displaystyle\binom{n-1}{k-1}$ (choose $k-1$ of the $n-1$ gaps between stars).
- Lower bounds: substitute $x_i = y_i + c$. Upper bounds: subtract the bad cases with inclusion–exclusion.
- Example: $x + y + z = 5$ in non-negative integers has $\binom{7}{2} = 21$ solutions. The same count gives the number of ways to share $5$ identical sweets among $3$ children.`,
      figure: {
        type: "plot",
        x: [-1, 7],
        y: [-1.7, 1.1],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [5, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [6, 0], r: 0.28, fill: true, tone: "accent" },
        ],
        segments: [
          { from: [2, -0.6], to: [2, 0.6], tone: "warn" },
          { from: [4, -0.6], to: [4, 0.6], tone: "warn" },
        ],
        labels: [
          { x: 0.5, y: -0.75, text: "x = 2", pos: "s", style: "small" },
          { x: 3, y: -0.75, text: "y = 1", pos: "s", style: "small" },
          { x: 5.5, y: -0.75, text: "z = 2", pos: "s", style: "small" },
        ],
        caption: String.raw`Five stars and two bars: this row stands for $x = 2$, $y = 1$, $z = 2$. Every row of $5$ stars and $2$ bars gives exactly one solution.`,
        alt: "Two dots, a bar, one dot, a bar, two dots, labelled x = 2, y = 1, z = 2.",
      },
    },
    {
      title: String.raw`Inclusion–exclusion`,
      body: String.raw`- Two sets: $|A \cup B| = |A| + |B| - |A \cap B|$.
- Three sets: $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$.
- In general: add the single sets, subtract the pairwise intersections, add the triple intersections, and so on.
- Example: of $1, 2, \ldots, 84$, those divisible by $2$, $3$ or $7$ number $42 + 28 + 12 - 14 - 6 - 4 + 2 = 60$.
- **Derangements** (no object in its own place): $D_n = n!\left(1 - \frac{1}{1!} + \frac{1}{2!} - \cdots + \frac{(-1)^n}{n!}\right)$, e.g. $D_4 = 9$.`,
    },
    {
      title: String.raw`Bijections and lattice paths`,
      body: String.raw`- Two sets in **one-to-one correspondence** have the same size. Count the easier one.
- A shortest path on a grid with $m$ steps right ($R$) and $n$ steps up ($U$) is a word of $m$ $R$'s and $n$ $U$'s, so there are $\binom{m+n}{n}$ paths.
- Non-decreasing sequences of length $k$ from $\{1, \ldots, n\}$ correspond to multisets, so there are $\binom{n+k-1}{k}$ (stars and bars).
- **Reflection**: to count paths that touch a forbidden line, reflect the part of the path up to the first touch in that line. Example: paths from $(0,0)$ to $(n,n)$ that never go above $y = x$ number $\binom{2n}{n} - \binom{2n}{n+1}$.`,
      figure: {
        type: "plot",
        x: [-0.7, 4.7],
        y: [-0.7, 3.7],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [0, 3], tone: "muted", thin: true },
          { from: [1, 0], to: [1, 3], tone: "muted", thin: true },
          { from: [2, 0], to: [2, 3], tone: "muted", thin: true },
          { from: [3, 0], to: [3, 3], tone: "muted", thin: true },
          { from: [4, 0], to: [4, 3], tone: "muted", thin: true },
          { from: [0, 0], to: [4, 0], tone: "muted", thin: true },
          { from: [0, 1], to: [4, 1], tone: "muted", thin: true },
          { from: [0, 2], to: [4, 2], tone: "muted", thin: true },
          { from: [0, 3], to: [4, 3], tone: "muted", thin: true },
          { from: [0, 0], to: [2, 0], tone: "warn" },
          { from: [2, 0], to: [2, 1], tone: "warn" },
          { from: [2, 1], to: [3, 1], tone: "warn" },
          { from: [3, 1], to: [3, 3], tone: "warn" },
          { from: [3, 3], to: [4, 3], tone: "warn" },
        ],
        points: [
          { x: 0, y: 0 },
          { x: 4, y: 3 },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 4, y: 3, text: "B", pos: "ne" },
        ],
        caption: String.raw`The path $RRURUUR$. Each word of four $R$'s and three $U$'s is one path, so there are $\binom{7}{3} = 35$ paths from A to B.`,
        alt: "A 4 by 3 grid with a path from A at the bottom left to B at the top right: right, right, up, right, up, up, right.",
      },
    },
    {
      title: String.raw`Recursion: look at the first step`,
      body: String.raw`- Let $a_n$ be the answer for size $n$. Split by what happens **first** (or last) to get a recurrence, then compute small cases by hand and build up.
- Example: tile a $1 \times n$ strip with $1 \times 1$ and $1 \times 3$ tiles. The first tile leaves a strip of length $n-1$ or $n-3$, so $a_n = a_{n-1} + a_{n-3}$, with $a_1 = a_2 = 1$, $a_3 = 2$. Then $a_4 = 3$, $a_5 = 4$, $a_6 = 6$.
- Check the first few values by listing: it catches wrong starting values.
- Sometimes two sequences are needed (e.g. strings ending in a given letter or not), giving a pair of linked recurrences.`,
      figure: [
        {
          type: "plot",
          x: [-0.4, 7.4],
          y: [-0.9, 1.4],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0, 0], [1, 0], [1, 1], [0, 1]], fill: true, tone: "accent" },
            { points: [[1, 0], [7, 0], [7, 1], [1, 1]], fill: true, tone: "muted", thin: true },
          ],
          labels: [
            { x: 4, y: 0.5, text: "length n − 1", style: "small" },
            { x: 0.5, y: 0, text: "1 × 1", pos: "s", style: "small" },
          ],
          alt: "A strip whose first cell is a 1 by 1 tile, leaving a strip of length n minus 1.",
        },
        {
          type: "plot",
          x: [-0.4, 7.4],
          y: [-0.9, 1.4],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0, 0], [3, 0], [3, 1], [0, 1]], fill: true, tone: "accent" },
            { points: [[3, 0], [7, 0], [7, 1], [3, 1]], fill: true, tone: "muted", thin: true },
          ],
          labels: [
            { x: 5, y: 0.5, text: "length n − 3", style: "small" },
            { x: 1.5, y: 0, text: "1 × 3", pos: "s", style: "small" },
          ],
          alt: "A strip whose first three cells are a 1 by 3 tile, leaving a strip of length n minus 3.",
        },
      ],
    },
    {
      title: String.raw`Counting up to symmetry`,
      body: String.raw`- $n$ people around a round table, where rotations count as the same: $(n-1)!$ (fix one person's seat and arrange the rest).
- If **every** arrangement is counted exactly $k$ times, divide by $k$. This fails when some arrangements look the same after a symmetry.
- **Burnside's lemma**: the number of different patterns equals the **average**, over all symmetries, of the number of colourings that the symmetry leaves unchanged.
- Example: colour the vertices of an equilateral triangle with $2$ colours, rotations counting as the same. The identity fixes $8$ colourings; each of the two rotations fixes only the $2$ one-colour ones. So there are $\frac{8 + 2 + 2}{3} = 4$ patterns.`,
    },
  ],
  archetypes: [
    {
      id: "C1-multiplication-casework",
      name: String.raw`Multiplication principle and casework`,
      tests: String.raw`Forming numbers or choices in stages, where restrictions (no leading zero, distinct digits, conditions on primes) force a split into cases. Fill the tightest position first, or handle each prime separately.`,
      questions: [
        {
          stem: String.raw`How many four-digit odd numbers have four different digits?`,
          difficulty: 1,
          choices: [String.raw`$1680$`, String.raw`$2240$`, String.raw`$2268$`, String.raw`$2520$`, String.raw`$4536$`],
          answer: String.raw`(B) $2240$`,
        },
        {
          stem: String.raw`How many four-digit positive integers use exactly two different digits? (For example, $3003$ and $7477$ are counted, but $5555$ and $1230$ are not.)`,
          difficulty: 2,
          answer: String.raw`$567$`,
        },
        {
          stem: String.raw`How many ordered triples $(a, b, c)$ of positive integers satisfy $\operatorname{lcm}(a, b) = \operatorname{lcm}(b, c) = \operatorname{lcm}(c, a) = 2000$?`,
          difficulty: 3,
          answer: String.raw`$130$`,
        },
      ],
    },
    {
      id: "C1-restricted-arrangements",
      name: String.raw`Arrangements with restrictions`,
      tests: String.raw`Arranging people, letters or beads in a row or around a table when some must (or must not) be adjacent, or some objects are identical. Use glue, gaps, complements and, for long conditions, a recursion on the last object placed.`,
      questions: [
        {
          stem: String.raw`How many different arrangements of the seven letters of the word LETTERS have the two T's **not** next to each other?`,
          difficulty: 1,
          answer: String.raw`$900$`,
        },
        {
          stem: String.raw`Eight people, including Alan, Beth, Chloe and Dev, sit around a round table with $8$ seats. Seatings that differ only by a rotation are the same. In how many seatings does Alan sit next to Beth, while Chloe does **not** sit next to Dev?`,
          difficulty: 2,
          answer: String.raw`$960$`,
        },
        {
          stem: String.raw`Five identical red beads, four identical blue beads and three identical green beads are placed in a row. In how many ways can this be done so that no two beads of the same colour are next to each other?`,
          difficulty: 3,
          answer: String.raw`$588$`,
        },
      ],
    },
    {
      id: "C1-stars-bars",
      name: String.raw`Distributions: stars and bars`,
      tests: String.raw`Sharing identical objects among distinct people or counting integer solutions of $x_1 + \cdots + x_k = n$, possibly with lower and upper bounds. Shift to remove lower bounds; use inclusion–exclusion for upper bounds.`,
      questions: [
        {
          stem: String.raw`How many ordered quadruples $(a, b, c, d)$ of **positive** integers satisfy $a + b + c + d = 12$?`,
          difficulty: 1,
          answer: String.raw`$165$`,
        },
        {
          stem: String.raw`Twenty identical sweets are shared among four children. Every sweet is given out, and each child receives at least $2$ and at most $8$ sweets. In how many ways can this be done?`,
          difficulty: 2,
          answer: String.raw`$231$`,
        },
        {
          stem: String.raw`Twelve identical red marbles and twelve identical blue marbles are shared among three children, Ann, Bala and Chen. Every marble is given out, and each child receives at least one marble (of either colour). In how many ways can this be done?`,
          difficulty: 3,
          answer: String.raw`$7777$`,
        },
      ],
    },
    {
      id: "C1-inclusion-exclusion",
      name: String.raw`Inclusion–exclusion and complements`,
      tests: String.raw`Counting objects that avoid several overlapping properties (divisibility, identical neighbours, fixed points). Name the bad sets, count their intersections, and alternate signs.`,
      questions: [
        {
          stem: String.raw`How many integers from $1$ to $1000$ are divisible by **none** of $2$, $3$ and $5$?`,
          difficulty: 1,
          answer: String.raw`$266$`,
        },
        {
          stem: String.raw`In how many ways can the six letters A, A, B, B, C, C be arranged in a row so that no two identical letters are next to each other?`,
          difficulty: 2,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\sum_{k=0}^{n} (-1)^k \binom{n}{k} (n-k)^n = n!.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: both sides count the functions from $\{1, \ldots, n\}$ onto $\{1, \ldots, n\}$; the left side does it by inclusion–exclusion on the set of values that are missed ($\binom{n}{k}(n-k)^n$ functions avoid a chosen $k$ values), and an onto function between two $n$-element sets is a permutation.`,
        },
      ],
    },
    {
      id: "C1-bijections-paths",
      name: String.raw`Lattice paths and bijections`,
      tests: String.raw`Counting grid paths, monotone digit strings or restricted paths by matching them one-to-one with words, subsets or multisets, or by reflecting the bad paths.`,
      questions: [
        {
          stem: String.raw`The diagram shows a $6 \times 4$ grid of streets. A walker goes from A to B along the streets, each step one block to the right or one block up. How many such routes pass through the point P?`,
          figure: {
            type: "plot",
            x: [-0.8, 6.8],
            y: [-0.8, 4.8],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 4], tone: "ink" },
              { from: [1, 0], to: [1, 4], tone: "ink" },
              { from: [2, 0], to: [2, 4], tone: "ink" },
              { from: [3, 0], to: [3, 4], tone: "ink" },
              { from: [4, 0], to: [4, 4], tone: "ink" },
              { from: [5, 0], to: [5, 4], tone: "ink" },
              { from: [6, 0], to: [6, 4], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [0, 1], to: [6, 1], tone: "ink" },
              { from: [0, 2], to: [6, 2], tone: "ink" },
              { from: [0, 3], to: [6, 3], tone: "ink" },
              { from: [0, 4], to: [6, 4], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 2, y: 1 },
              { x: 6, y: 4 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 2, y: 1, text: "P", pos: "se" },
              { x: 6, y: 4, text: "B", pos: "ne" },
            ],
            alt: "A grid of streets 6 blocks wide and 4 blocks high, with A at the bottom left, B at the top right, and P two blocks right and one block up from A.",
          },
          difficulty: 1,
          answer: String.raw`$105$`,
        },
        {
          stem: String.raw`How many four-digit positive integers $\overline{abcd}$ have digits satisfying $a \le b \le c \le d$? (For example, $1134$ and $2222$.)`,
          difficulty: 2,
          answer: String.raw`$495$`,
        },
        {
          stem: String.raw`Let $n \ge 2$. A path from $(0, 0)$ to $(n, n)$ uses unit steps right or up. Prove that the number of such paths that never touch the line $y = x + 2$ is
$$\binom{2n}{n} - \binom{2n}{n+2}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: reflect the part of a bad path up to its first point on $y = x + 2$ in that line; this is a bijection between bad paths and all paths from $(-2, 2)$ to $(n, n)$, of which there are $\binom{2n}{n+2}$.`,
        },
      ],
    },
    {
      id: "C1-recursion",
      name: String.raw`Recursion: tilings and strings`,
      tests: String.raw`Counting tilings of boards or strings that avoid a pattern, where a direct formula is hard. Define $a_n$, split on the first (or last) piece, and build up from small cases.`,
      questions: [
        {
          stem: String.raw`In how many ways can a $2 \times 10$ rectangle be tiled with $1 \times 2$ dominoes (each domino may be placed horizontally or vertically)?`,
          difficulty: 1,
          answer: String.raw`$89$`,
        },
        {
          stem: String.raw`How many strings of length $8$, using only the letters A, B and C, contain no two consecutive A's?`,
          difficulty: 2,
          answer: String.raw`$3344$`,
        },
        {
          stem: String.raw`Let $t_n$ be the number of tilings of a $3 \times 2n$ rectangle by $1 \times 2$ dominoes, with $t_0 = 1$ (so $t_1 = 3$). Prove that $t_n = 4t_{n-1} - t_{n-2}$ for all $n \ge 2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: classify tilings by the first vertical grid line, at distance $2k$ from the left edge, that no domino crosses; the part to its left is a $3 \times 2k$ tiling with no such line inside, and there are $3$ of these for $k = 1$ and exactly $2$ for each $k \ge 2$, so $t_n = 3t_{n-1} + 2(t_{n-2} + \cdots + t_0)$, and subtracting the same identity for $n - 1$ gives the result.`,
        },
      ],
    },
    {
      id: "C1-symmetry",
      name: String.raw`Counting up to symmetry`,
      tests: String.raw`Round tables, necklaces and coloured polygons where rotations (and sometimes reflections) count as the same. Fix one object, divide when every pattern is counted equally often, or use Burnside's lemma when some patterns are symmetric.`,
      questions: [
        {
          stem: String.raw`Seven people sit around a round table. Two seatings count as the same if every person has the same left-hand neighbour and the same right-hand neighbour in both. How many different seatings are there?`,
          difficulty: 1,
          choices: [String.raw`$120$`, String.raw`$360$`, String.raw`$720$`, String.raw`$2520$`, String.raw`$5040$`],
          answer: String.raw`(C) $720$`,
        },
        {
          stem: String.raw`The six vertices of a regular hexagon are coloured so that exactly two are red, two are blue and two are green. Two colourings count as the same if one can be turned into the other by a rotation or a reflection of the hexagon. How many different colourings are there?`,
          difficulty: 2,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Let $p$ be a prime and $a$ a positive integer. A necklace is a ring of $p$ beads, each bead one of $a$ colours, where necklaces that differ by a rotation are the same. By counting necklaces, prove that $p$ divides $a^p - a$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: a string of $p$ beads that is unchanged by a rotation through $k$ places with $0 < k < p$ must be one colour, because $\gcd(k, p) = 1$; so the $a^p - a$ strings that are not one colour fall into rotation classes of exactly $p$ strings each.`,
        },
      ],
    },
  ],
});
