H2.addTopic({
  id: "C3",
  title: "Pigeonhole and Extremal Principles",
  summary: String.raw`The pigeonhole principle and clever choices of pigeonholes, prefix sums, geometric pigeonhole, the extremal principle and infinite descent, monotone subsequences, and averaging arguments.`,
  concepts: [
    {
      title: String.raw`The pigeonhole principle`,
      body: String.raw`- If more than $n$ objects go into $n$ boxes, some box gets at least $2$ objects. Example: among $367$ people, two share a birthday.
- "Smallest number to **guarantee** ...": build the **largest bad configuration** (one that avoids the property); the answer is one more than its size. You must show both that the bad configuration exists and that one more object forces the property.
- The principle says **some** box is crowded, not which one.`,
    },
    {
      title: String.raw`Generalised pigeonhole`,
      body: String.raw`- If $N$ objects go into $k$ boxes, some box gets at least $\left\lceil \dfrac{N}{k} \right\rceil$ objects, and some box gets at most $\left\lfloor \dfrac{N}{k} \right\rfloor$.
- Equivalently, to force $r$ objects in one box you need $k(r-1) + 1$ objects.
- Example: $100$ pigeons in $7$ holes: some hole has at least $\lceil 100/7 \rceil = 15$.`,
    },
    {
      title: String.raw`Choosing the pigeonholes: residues and pairs`,
      body: String.raw`- **Residues**: among any $n + 1$ integers, two leave the same remainder mod $n$, so their difference is divisible by $n$.
- **Pairs**: group the numbers into boxes so that any two numbers in the same box have the property you want.
- Example: any $5$ numbers from $\{1, 2, \ldots, 8\}$ include two that differ by $4$. Boxes: $\{1, 5\}, \{2, 6\}, \{3, 7\}, \{4, 8\}$.
- If one box can safely hold at most one object (for example, residue $0$ when you want no sum divisible by $n$), count it separately.`,
    },
    {
      title: String.raw`Prefix sums`,
      body: String.raw`- For a sequence $a_1, \ldots, a_n$, let $s_k = a_1 + \cdots + a_k$. A block of consecutive terms $a_{i+1} + \cdots + a_j$ equals $s_j - s_i$.
- Among $s_1, \ldots, s_n$ either one is divisible by $n$, or two leave the same remainder mod $n$ ($n$ sums, only $n - 1$ non-zero remainders). Either way **some block has sum divisible by $n$**.
- Example with $n = 4$: for $6, 1, 3, 7$ the prefix sums $6, 7, 10, 17$ leave remainders $2, 3, 2, 1$; since $s_1 \equiv s_3$, the block $1 + 3 = 4$ works.
- For "a block with sum exactly $k$": compare the sets $\{s_i\}$ and $\{s_i + k\}$.`,
    },
    {
      title: String.raw`Geometric pigeonhole`,
      body: String.raw`- Cut the region into pieces small enough that two points in the same piece are close, then count points against pieces.
- The pieces need not be squares: choose them to match the distance you need (for example, rectangles whose diagonal is exactly that distance).
- Example: $5$ points in a square of side $2$: cut it into four unit squares; two points share one, so they are at most $\sqrt{2}$ apart.`,
      figure: {
        type: "plot",
        x: [-0.4, 2.4],
        y: [-0.4, 2.4],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [2, 0], [2, 2], [0, 2]], tone: "ink" },
        ],
        segments: [
          { from: [1, 0], to: [1, 2], tone: "muted", dashed: true },
          { from: [0, 1], to: [2, 1], tone: "muted", dashed: true },
          { from: [1.25, 1.3], to: [1.75, 1.8], tone: "warn" },
        ],
        points: [
          { x: 0.35, y: 0.6 },
          { x: 1.6, y: 0.3 },
          { x: 0.7, y: 1.55 },
          { x: 1.25, y: 1.3 },
          { x: 1.75, y: 1.8 },
        ],
        caption: String.raw`Five points, four unit squares: two points share a square, so they are at most $\sqrt{2}$ apart.`,
        alt: "A 2 by 2 square cut by dashed lines into four unit squares, with five points; two points in the top right square are joined.",
      },
    },
    {
      title: String.raw`The extremal principle and infinite descent`,
      body: String.raw`- Look at the **largest**, **smallest**, **longest** or **best** object; it often has a property the others lack. Every finite set has one.
- Example: in a round-robin tournament with no draws, let A be a player with the most wins. Every other player B lost to A, or lost to someone who lost to A (otherwise B would have more wins than A).
- **Infinite descent**: take a smallest counterexample (or solution) and build a smaller one, a contradiction. Example: if $\sqrt{2} = p/q$ with $q$ as small as possible, then $p$ and $q$ are both even, so $\frac{p/2}{q/2}$ has a smaller denominator.
- **Minimise a quantity**: among all arrangements choose one that minimises a "badness" count; any fault would let you lower it.`,
    },
    {
      title: String.raw`Monotone subsequences (Erdős–Szekeres)`,
      body: String.raw`- **Theorem**: any sequence of $mn + 1$ distinct real numbers has an increasing subsequence of length $m + 1$ or a decreasing subsequence of length $n + 1$. The bound is sharp: $mn$ numbers can avoid both.
- **Proof idea**: label each term with $(i, d)$, the lengths of the longest increasing and decreasing subsequences **ending** at it. Two different terms get different labels, and if all $i \le m$ and $d \le n$ there are only $mn$ labels.
- Example: for $2, 5, 1, 4, 3$ the labels are $(1,1), (2,1), (1,2), (2,2), (2,3)$, all different; the $3$ shows the decreasing run $5, 4, 3$.
- **Sharpness**: write $m$ decreasing blocks of length $n$, each block above the previous one.`,
    },
    {
      title: String.raw`Averaging and double counting`,
      body: String.raw`- If $n$ numbers have average $A$, then some number is at least $A$ and some is at most $A$. For integers, round up or down. Example: $7$ integers with sum $50$ include one that is at least $8$.
- **Double counting**: count the same set of pairs (person, club), (point, line), ... in two ways to get the total, then average over the boxes.
- To improve a weak averaging bound, leave out an awkward object (such as the smallest one) and average over the rest.`,
    },
  ],
  archetypes: [
    {
      id: "C3-generalised-averaging",
      name: String.raw`Generalised pigeonhole and averaging`,
      tests: String.raw`Guarantee questions ("at least how many must ...") and statements that some sum, difference or group must be large. Find the worst case, average over the boxes, or average along a cleverly chosen path or set.`,
      questions: [
        {
          stem: String.raw`What is the smallest number of people that must be in a room to be sure that at least $4$ of them were born in the same month?`,
          difficulty: 1,
          choices: [String.raw`$13$`, String.raw`$36$`, String.raw`$37$`, String.raw`$48$`, String.raw`$49$`],
          answer: String.raw`(C) $37$`,
        },
        {
          stem: String.raw`The numbers $1, 2, \ldots, 13$ are placed around a circle in some order. Find the largest integer $M$ such that, however they are placed, some three numbers in consecutive positions have a sum of at least $M$.`,
          difficulty: 2,
          answer: String.raw`$23$`,
        },
        {
          stem: String.raw`The numbers $1, 2, \ldots, 60$ are written in the cells of a $6 \times 10$ board, one number per cell. Prove that there are two cells sharing a side whose numbers differ by at least $5$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the cells containing $1$ and $60$ are joined by a path of at most $14$ steps between side-sharing cells (at most $9$ horizontal and $5$ vertical); the $59$ total increase along the path cannot be made of $14$ or fewer steps of at most $4$.`,
        },
      ],
    },
    {
      id: "C3-residues-pairs",
      name: String.raw`Choosing the pigeonholes: residues and pairs`,
      tests: String.raw`Choosing numbers so that two of them must have a given sum, or a sum or difference divisible by $n$. The boxes are residue classes or pairs that add up to a fixed total; the extremal example usually takes one side of each pair.`,
      questions: [
        {
          stem: String.raw`What is the smallest number of integers that must be chosen from $1, 2, \ldots, 40$ to be sure that two of the chosen numbers add up to $41$?`,
          difficulty: 1,
          answer: String.raw`$21$`,
        },
        {
          stem: String.raw`What is the largest number of integers that can be chosen from $1, 2, \ldots, 60$ so that no two of the chosen numbers have a sum divisible by $8$?`,
          difficulty: 2,
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that among any $n$ integers there are always two whose sum or difference is divisible by $14$. Prove that your answer is correct.`,
          difficulty: 3,
          answer: String.raw`$n = 9$. **Proof.** Key idea: use the $8$ boxes of remainders mod $14$: $\{0\}$, $\{7\}$, $\{1, 13\}$, $\{2, 12\}$, ..., $\{6, 8\}$; two numbers in the same box have sum or difference divisible by $14$, while $0, 1, \ldots, 7$ show that $8$ integers are not enough.`,
        },
      ],
    },
    {
      id: "C3-prefix-sums",
      name: String.raw`Prefix sums: consecutive blocks and subset sums`,
      tests: String.raw`Showing that some consecutive block or some subset has a sum divisible by $n$ or equal to a given number. Compare prefix sums mod $n$, or the sets $\{s_i\}$ and $\{s_i + k\}$; build bigger results from smaller ones.`,
      questions: [
        {
          stem: String.raw`What is the smallest positive integer $n$ such that from any $n$ integers one can always choose one or more of them whose sum is divisible by $9$?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Over $30$ days, Wei Ming solves at least one problem every day, and $45$ problems altogether. Prove that there is a run of consecutive days during which he solves exactly $14$ problems.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: the $30$ distinct prefix sums $s_1 < \cdots < s_{30}$ lie in $\{1, \ldots, 45\}$ and the $30$ distinct numbers $s_i + 14$ lie in $\{15, \ldots, 59\}$; these $60$ numbers lie in a set of $59$, so some $s_j = s_i + 14$.`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that from any $n$ integers one can choose four whose sum is divisible by $4$. Prove that your answer is correct.`,
          difficulty: 3,
          answer: String.raw`$n = 7$. **Proof.** Key idea: among any $3$ integers two have an even sum, so from $7$ integers remove three disjoint pairs with even sums $2a$, $2b$, $2c$; two of $a, b, c$ have the same parity, giving four numbers with sum divisible by $4$. The integers $0, 0, 0, 1, 1, 1$ show that $6$ are not enough.`,
        },
      ],
    },
    {
      id: "C3-geometric",
      name: String.raw`Geometric pigeonhole`,
      tests: String.raw`Many points in a square, rectangle or triangle: show two are close, or three form a small triangle. Cut the region into pieces of the right shape, one fewer than the number of points (or fewer than half, for triples).`,
      questions: [
        {
          stem: String.raw`What is the smallest positive integer $n$ such that whenever $n$ points are placed in a square of side $3$ (inside or on the boundary), some two of them are at distance at most $\sqrt{2}$ from each other?`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Twenty-six points are placed inside a $20 \times 15$ rectangle. Prove that some two of them are at distance at most $5$ from each other.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: cut the rectangle into $25$ rectangles of size $4 \times 3$, whose diagonals have length exactly $5$; two of the $26$ points lie in the same small rectangle.`,
        },
        {
          stem: String.raw`Thirteen points are placed in a $2 \times 3$ rectangle (inside or on the boundary). Prove that three of them are the vertices of a triangle (possibly degenerate) with area at most $\frac{1}{2}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: cut the rectangle into six unit squares; since $13 > 2 \times 6$, one square contains three of the points, and a triangle inside a unit square has area at most $\frac{1}{2}$ (cut it by the horizontal line through its middle vertex into two triangles with a common base at most $1$ and heights adding up to at most $1$).`,
        },
      ],
    },
    {
      id: "C3-extremal",
      name: String.raw`Extremal principle and infinite descent`,
      tests: String.raw`Statements about all elements of a finite configuration, equations with no solutions, or dividing a group in the best way. Look at the largest or smallest element, a smallest solution, or an arrangement that minimises a count.`,
      questions: [
        {
          stem: String.raw`Ten real numbers are written around a circle. Each of them is equal to the average of its two neighbours. One of the numbers is $7$. What is the sum of all ten numbers?`,
          difficulty: 1,
          answer: String.raw`$70$`,
        },
        {
          stem: String.raw`Prove that the equation $x^2 + y^2 = 3z^2$ has no solutions in positive integers.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: take a solution with $z$ as small as possible; squares are $0$ or $1$ mod $3$, so $3 \mid x$ and $3 \mid y$, then $3 \mid z$, and $\left(\frac{x}{3}, \frac{y}{3}, \frac{z}{3}\right)$ is a smaller solution.`,
        },
        {
          stem: String.raw`In a club, every member has at most $5$ enemies among the other members (enmity is mutual). Prove that the members can be divided into two groups so that every member has at most $2$ enemies in his or her own group.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: choose the division that makes the number of enemy pairs inside the same group as small as possible; a member with $3$ or more enemies in their own group has at most $2$ in the other, so moving them would lower that number.`,
        },
      ],
    },
    {
      id: "C3-monotone",
      name: String.raw`Monotone subsequences`,
      tests: String.raw`Sequences or rows of people where some long increasing or decreasing selection must exist (read left to right, not necessarily adjacent). Use the Erdős–Szekeres labelling for the bound and decreasing blocks for the extremal example.`,
      questions: [
        {
          stem: String.raw`What is the largest $N$ for which the numbers $1, 2, \ldots, N$ can be arranged in a row so that no three of them (not necessarily adjacent) appear in increasing order from left to right, and no three appear in decreasing order?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`For an arrangement of $1, 2, \ldots, 17$ in a row, let $L$ be the largest $k$ such that some $k$ of the numbers appear, from left to right, in increasing order or in decreasing order. Over all arrangements, what is the smallest possible value of $L$?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`$2026$ students of different heights stand in a row. Prove that one can choose $46$ of them who, read from left to right, are in increasing order of height or in decreasing order of height.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $2026 = 45^2 + 1$; label each student by the lengths $(i, d)$ of the longest increasing and decreasing selections ending with them. Different students get different labels, so not all labels fit in $\{1, \ldots, 45\}^2$.`,
        },
      ],
    },
  ],
});
