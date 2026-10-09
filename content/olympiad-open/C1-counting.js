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
    {
      title: String.raw`Truncated inclusion–exclusion (Bonferroni)`,
      body: String.raw`- Stopping inclusion–exclusion early gives a **bound**: if you stop after a term you **added**, you get an upper bound for the number of objects with none of the bad properties; if you stop after a term you **subtracted**, you get a lower bound.
- Reason: an object with exactly $m \ge 1$ bad properties is counted $1 - m + \binom{m}{2} - \cdots \pm \binom{m}{j}$ times, which equals $(-1)^j \binom{m-1}{j}$.
- Example: of $1, 2, \ldots, N$, at least $N - \frac{N}{p_1} - \cdots - \frac{N}{p_k}$ are divisible by none of the primes $p_1, \ldots, p_k$ (stop after the first subtraction).`,
    },
  ],
  archetypes: [
    {
      id: "C1-multiplication-casework",
      name: String.raw`Multiplication principle and casework`,
      tests: String.raw`Forming numbers or choices in stages, where restrictions (no leading zero, distinct digits, conditions on primes) force a split into cases. Fill the tightest position first, or handle each prime separately. The hardest versions place the values one at a time so that the number of choices never depends on earlier choices.`,
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
        {
          stem: String.raw`How many positive divisors of $7200$ are perfect squares?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`How many six-digit positive integers have the product of their digits equal to $400$?`,
          difficulty: 2,
          answer: String.raw`$465$`,
        },
        {
          stem: String.raw`How many subsets $S$ of $\{1, 2, \ldots, 20\}$ (including the empty set) have the property that for every $x$ in $S$, neither $2x$ nor $3x$ is in $S$?`,
          difficulty: 3,
          answer: String.raw`$43776$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. Prove that the number of permutations $(a_1, a_2, \ldots, a_n)$ of $1, 2, \ldots, n$ with $a_i \le 2i$ for every $i$ is equal to the number of permutations with $a_{i+1} \le 2a_i$ for every $i = 1, 2, \ldots, n - 1$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: both numbers equal $\prod_{v=1}^{n} \left(\left\lfloor \frac{v}{2} \right\rfloor + 1\right)$: for the first kind place the values $n, n - 1, \ldots, 1$ in this order (value $v$ can use the $\left\lfloor \frac{v}{2} \right\rfloor + 1$ positions $i \ge \frac{v}{2}$ not already taken by larger values), and for the second kind build the row by inserting $1, 2, \ldots, n$ in this order (value $v$ can go at the front or just after one of the $\left\lfloor \frac{v}{2} \right\rfloor$ earlier values that are at least $\frac{v}{2}$, and inserting it never spoils a neighbouring pair).`,
        },
      ],
    },
    {
      id: "C1-restricted-arrangements",
      name: String.raw`Arrangements with restrictions`,
      tests: String.raw`Arranging people, letters or beads in a row or around a table when some must (or must not) be adjacent, or some objects are identical. Use glue, gaps, complements and, for long conditions, a recursion on the last object placed; truncated inclusion–exclusion gives lower bounds.`,
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
        {
          stem: String.raw`In how many ways can the six letters of the word BANANA be arranged in a row so that no two A's are next to each other?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Four people sit down in a row of $10$ chairs so that no two of them sit next to each other, and the two end chairs are not both empty. In how many ways can this be done? (The people are different; the empty chairs are not.)`,
          difficulty: 2,
          answer: String.raw`$720$`,
        },
        {
          stem: String.raw`Let $n \ge 2$. Prove that the number of ways to arrange $1, 2, \ldots, n$ in a row so that every number is at most $2$ larger than the number immediately to its left is $2 \cdot 3^{n-2}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: removing $n$ from a good arrangement leaves a good arrangement of $1, \ldots, n - 1$ (the number before $n$ is $n - 1$ or $n - 2$, so the new neighbours still satisfy the rule), and conversely $n$ can be put back in exactly $3$ places: at the front, just after $n - 1$, or just after $n - 2$.`,
        },
        {
          stem: String.raw`Let $n \ge 3$. Prove that more than one third of the $n!$ arrangements of $1, 2, \ldots, n$ in a row have no number $k$ immediately followed by $k + 1$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: stopping inclusion–exclusion after the subtracted third term gives a lower bound, and gluing $j$ chosen pairs $(k, k + 1)$ leaves $n - j$ blocks, so $S_j = \binom{n-1}{j}(n-j)!$ arrangements are counted for each $j$ and $n! - S_1 + S_2 - S_3 = \frac{2n + 3}{6n}\, n! > \frac{n!}{3}$.`,
        },
      ],
    },
    {
      id: "C1-stars-bars",
      name: String.raw`Distributions: stars and bars`,
      tests: String.raw`Sharing identical objects among distinct people or counting integer solutions of $x_1 + \cdots + x_k = n$, possibly with lower and upper bounds. Shift to remove lower bounds; use inclusion–exclusion for upper bounds. Conditions on running totals turn the tuple into a word or path, whose cyclic rotations or reflections can be compared.`,
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
        {
          stem: String.raw`After the expansion of $(x + y + z + w)^6$ is multiplied out and like terms are collected, how many different terms are there?`,
          difficulty: 1,
          choices: [String.raw`$20$`, String.raw`$24$`, String.raw`$35$`, String.raw`$56$`, String.raw`$84$`],
          answer: String.raw`(E) $84$`,
        },
        {
          stem: String.raw`In how many ways can $8$ identical balls be placed into $5$ different boxes so that exactly two of the boxes are empty?`,
          difficulty: 2,
          answer: String.raw`$210$`,
        },
        {
          stem: String.raw`Thirty points are equally spaced around a circle. In how many ways can $5$ of them be chosen so that, going round the circle, between any two consecutive chosen points there are at least $3$ points that are not chosen?`,
          difficulty: 3,
          answer: String.raw`$6006$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. Find, with proof, the number of $n$-tuples $(x_1, \ldots, x_n)$ of non-negative integers with $x_1 + \cdots + x_n = 2n$ and
$$x_1 + x_2 + \cdots + x_k \ge 2k \quad \text{for every } k = 1, 2, \ldots, n.$$`,
          difficulty: 4,
          answer: String.raw`$\frac{1}{2n+1}\binom{3n}{n}$. **Proof.** Key idea: write the tuple as a word of $+1$'s and $-2$'s ($x_1$ copies of $+1$, then $-2$, then $x_2$ copies of $+1$, then $-2$, and so on) with one extra $+1$ in front, so that the condition says every running total is positive; of the $3n + 1$ cyclic rotations of any word of $2n + 1$ $(+1)$'s and $n$ $(-2)$'s, exactly one has all running totals positive (the one starting just after the last place where the running total is smallest), so the answer is $\frac{1}{3n+1}\binom{3n+1}{n}$.`,
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
        {
          stem: String.raw`How many integers from $1$ to $500$ are divisible by exactly one of the numbers $3$ and $5$?`,
          difficulty: 1,
          answer: String.raw`$200$`,
        },
        {
          stem: String.raw`How many strings of six digits, each digit being $1$, $2$, $3$ or $4$, contain each of the digits $1$, $2$ and $3$ at least once?`,
          difficulty: 2,
          answer: String.raw`$2100$`,
        },
        {
          stem: String.raw`How many words of length $8$ made from the letters A, B, C, D use all four letters and have no two equal letters next to each other?`,
          difficulty: 3,
          answer: String.raw`$7224$`,
        },
        {
          stem: String.raw`Let $n \ge 1$, and let $N_n$ be the number of ways to colour each cell of an $n \times n$ board black or white so that every row and every column contains at least one black cell. Prove that $N_n$ leaves remainder $1$ on division by $8$ when $n$ is odd, and remainder $7$ when $n$ is even.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: inclusion–exclusion on the set of columns with no black cell gives $N_n = \sum_{k=0}^{n} (-1)^k \binom{n}{k} \left(2^{n-k} - 1\right)^n$, and modulo $8$ every factor $(2^m - 1)^n$ with $m \ge 3$ is $(-1)^n$, so the alternating binomial sum collapses and only the terms with $n - k = 2$ and $n - k = 1$ need individual attention.`,
        },
      ],
    },
    {
      id: "C1-bijections-paths",
      name: String.raw`Lattice paths and bijections`,
      tests: String.raw`Counting grid paths, monotone digit strings or restricted paths by matching them one-to-one with words, subsets or multisets, or by reflecting the bad paths. Pairs of paths that must not meet are counted by swapping their tails at the first meeting point.`,
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
        {
          stem: String.raw`A path in space goes from $(0, 0, 0)$ to $(3, 2, 2)$, and each step increases exactly one of the three coordinates by $1$. How many such paths are there?`,
          difficulty: 1,
          answer: String.raw`$210$`,
        },
        {
          stem: String.raw`A path from $(0, 0)$ to $(6, 6)$ uses unit steps to the right or up. How many such paths meet the line $y = x$ only at their two endpoints?`,
          difficulty: 2,
          answer: String.raw`$84$`,
        },
        {
          stem: String.raw`How many $5$-element subsets of $\{1, 2, \ldots, 15\}$ contain exactly one pair of consecutive integers? (For example, $\{2, 3, 7, 10, 14\}$ is counted, but $\{2, 3, 4, 8, 12\}$ and $\{1, 3, 5, 7, 9\}$ are not.)`,
          difficulty: 3,
          answer: String.raw`$1320$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. A path from $(0, 0)$ to $(n, n)$ uses unit steps to the right or up. Prove that the number of ordered pairs $(P, Q)$ of such paths that have no common point other than $(0, 0)$ and $(n, n)$ is
$$2\left[\binom{2n-2}{n-1}^2 - \binom{2n-2}{n}^2\right].$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: if $P$ starts with a step right then $Q$ starts with a step up and the paths end the other way round, so removing these steps leaves paths from $(1, 0)$ to $(n, n - 1)$ and from $(0, 1)$ to $(n - 1, n)$ with no common point, and swapping the parts after the first common point matches the pairs that do meet with all pairs of paths from $(1, 0)$ to $(n - 1, n)$ and from $(0, 1)$ to $(n, n - 1)$.`,
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
        {
          stem: String.raw`A $1 \times 10$ strip is tiled with $1 \times 1$ squares and $1 \times 2$ dominoes. Each square is then painted red or blue (the dominoes stay white). How many different painted tilings are there?`,
          difficulty: 1,
          answer: String.raw`$5741$`,
        },
        {
          stem: String.raw`How many subsets of $\{1, 2, \ldots, 12\}$ (including the empty set) contain no two numbers that differ by exactly $2$?`,
          difficulty: 2,
          answer: String.raw`$441$`,
        },
        {
          stem: String.raw`In how many ways can a $2 \times 7$ rectangle be tiled with $1 \times 1$ squares and $1 \times 2$ dominoes? (Dominoes may be placed horizontally or vertically.)`,
          difficulty: 3,
          answer: String.raw`$2356$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. Some $2n$ children sit on the chairs of a $2 \times n$ grid of chairs ($2$ rows, $n$ columns), one child per chair. They all stand up and sit down again, one child per chair, so that each child sits either on their own chair or on a chair next to it in the same row or the same column. Let $g_n$ be the number of possible new seatings (including the one in which nobody moves), and put $g_0 = 1$. Prove that $g_n = 3g_{n-1} + 3g_{n-2} - g_{n-3}$ for every $n \ge 3$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the children who move form swaps of two neighbours and cycles running round the edge of a $2 \times k$ block ($k \ge 2$, in either direction), so cutting at every column line that no swap or cycle crosses gives $g_n = 2g_{n-1} + 5g_{n-2} + 4(g_{n-3} + \cdots + g_0)$ (an uncut block of width $w \ge 3$ is one of the $2$ cycles round its edge or one of the $2$ staggered patterns of horizontal swaps), and subtracting the same identity for $n - 1$ gives the result.`,
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
          choices: [String.raw`$720$`, String.raw`$840$`, String.raw`$1440$`, String.raw`$2520$`, String.raw`$5040$`],
          answer: String.raw`(A) $720$`,
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
        {
          stem: String.raw`Six beads, three red and three blue, are arranged in a ring that lies flat on a table. Two rings count as the same if one can be rotated (but not turned over) into the other. How many different rings are there?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Exactly three of the nine cells of a $3 \times 3$ board are coloured black. Two colourings count as the same if one can be rotated into the other (rotations through $90^\circ$, $180^\circ$ or $270^\circ$; reflections are not allowed). How many different colourings are there?`,
          difficulty: 2,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`Eight beads, each black or white, are threaded on a ring so that no two black beads are next to each other. Two rings count as the same if one can be rotated or turned over into the other. How many different rings are there? (The all-white ring counts.)`,
          difficulty: 3,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Let $L_1 = 1$, $L_2 = 3$ and $L_{k+1} = L_k + L_{k-1}$ for $k \ge 2$. Prove that for every integer $n \ge 3$,
$$n \text{ divides } \sum_{d \mid n} \varphi\!\left(\frac{n}{d}\right) L_d,$$
where the sum is over the positive divisors $d$ of $n$ and $\varphi$ is Euler's function.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: apply Burnside's lemma to rings of $n$ black and white beads with no two black beads next to each other, up to rotation: the rotation through $k$ places fixes exactly the rings that repeat every $d = \gcd(k, n)$ beads, which correspond to the $L_d$ cyclic strings of length $d$ with no two black beads next to each other (check $d = 1, 2$ directly), and exactly $\varphi\!\left(\frac{n}{d}\right)$ of the $n$ rotations have $\gcd(k, n) = d$.`,
        },
      ],
    },
  ],
});
