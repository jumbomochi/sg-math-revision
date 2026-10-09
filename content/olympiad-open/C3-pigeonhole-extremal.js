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
    {
      title: String.raw`Splitting into monotone subsequences`,
      body: String.raw`- Label each term by the length of the longest increasing subsequence **ending** at it. Two terms with the same label form a decreasing pair (otherwise the later one would get a bigger label).
- So a sequence with no increasing subsequence of length $k$ splits into at most $k - 1$ **decreasing** subsequences (the dual form of Erdős–Szekeres).
- Example: $3, 1, 4, 2, 5$ has labels $1, 1, 2, 2, 3$, giving the decreasing subsequences $3, 1$ and $4, 2$ and $5$.`,
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
        {
          stem: String.raw`A drawer contains $10$ red, $8$ blue and $3$ green socks. In the dark, what is the smallest number of socks you must take out to be sure of having $4$ socks of the same colour?`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Each cell of an $8 \times 8$ board contains a non-negative integer, and the sum of all $64$ numbers is $2024$. Find the largest integer $M$ such that, however the numbers are chosen, some $2 \times 2$ square of cells has sum at least $M$.`,
          difficulty: 2,
          answer: String.raw`$127$`,
        },
        {
          stem: String.raw`In a class of $30$ students, a test had $8$ problems, and each problem was solved by at least $20$ of the students. Prove that there are two students who, between them, solved all $8$ problems.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: count the pairs (pair of students, problem missed by both): each problem is missed by at most $10$ students, so there are at most $8\binom{10}{2} = 360$ of them, fewer than the $\binom{30}{2} = 435$ pairs of students, so some pair misses no problem.`,
        },
        {
          stem: String.raw`A quiz has $6$ true-or-false questions, and every student answered all of them. Every two students gave different answers to at least $3$ of the questions. Find, with proof, the largest possible number of students.`,
          difficulty: 4,
          answer: String.raw`$8$. **Proof.** Key idea: the students who gave the more common answer to question $1$ (at least half of them) still differ in at least $3$ of the other $5$ questions, so halving twice reduces to $4$ questions, where $3$ students are impossible because each question adds at most $2$ to the three pairwise numbers of differences ($4 \cdot 2 < 3 \cdot 3$); for $8$, answer the first three questions in all $8$ ways and let the answers to questions $4, 5, 6$ record whether the answers to questions $1$ and $2$, $1$ and $3$, $2$ and $3$ agree.`,
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
        {
          stem: String.raw`What is the smallest number of integers that must be chosen to be sure that three of them leave the same remainder when divided by $7$?`,
          difficulty: 1,
          choices: [String.raw`$8$`, String.raw`$14$`, String.raw`$15$`, String.raw`$21$`, String.raw`$22$`],
          answer: String.raw`(C) $15$`,
        },
        {
          stem: String.raw`What is the largest number of integers that can be chosen from $1, 2, \ldots, 25$ so that no two of the chosen numbers differ by exactly $4$?`,
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`What is the smallest positive integer $n$ such that among any $n$ different numbers chosen from $1, 2, \ldots, 100$ there are always two whose product is a perfect square?`,
          difficulty: 3,
          answer: String.raw`$62$`,
        },
        {
          stem: String.raw`Find, with proof, all integers $m \ge 2$ for which one can choose $\lfloor m/2 \rfloor + 1$ integers whose squares leave pairwise different remainders when divided by $m$.`,
          difficulty: 4,
          answer: String.raw`All primes $m$ and all $m = 2p$ with $p$ an odd prime. **Proof.** Key idea: every integer is $\equiv \pm r \pmod m$ with $0 \le r \le \lfloor m/2 \rfloor$, so the condition says that $0^2, 1^2, \ldots, \lfloor m/2 \rfloor^2$ are different mod $m$; this fails if $4 \mid m$ or $p^2 \mid m$ (compare $(m/2)^2$ or $(m/p)^2$ with $0^2$) or if $m = uv$ with coprime $u, v \ge 3$ (by the Chinese remainder theorem some $x \not\equiv \pm 1$ has $x^2 \equiv 1$), and for $m = p$ or $2p$ one checks that $m \mid (x - y)(x + y)$ is impossible for $0 \le y < x \le \lfloor m/2 \rfloor$.`,
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
        {
          stem: String.raw`What is the largest $n$ for which there is a sequence of $n$ integers in which no block of one or more consecutive terms has a sum divisible by $6$?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Each of the $100$ cells of a $1 \times 100$ strip contains a positive integer, and the total of all $100$ numbers is $199$. Prove that there is a block of consecutive cells whose numbers add up to exactly $100$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: two of the $101$ prefix sums $s_0 = 0, s_1, \ldots, s_{100}$ leave the same remainder mod $100$, so some block has a sum that is a positive multiple of $100$ and at most $199$, hence exactly $100$.`,
        },
        {
          stem: String.raw`Let $n \ge 1$. Some $n$ positive integers are written around a circle, and their total $S$ is at most $2n - 1$. Prove that for every $k$ with $1 \le k \le S$ there is a block of consecutive numbers around the circle with sum exactly $k$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the $n$ prefix sums $s_0, \ldots, s_{n-1}$ (starting anywhere) are distinct mod $S$, and so are the $n$ numbers $s_i + k$; since $2n > S$, some $s_j \equiv s_i + k \pmod S$, and the arc from position $i$ to position $j$ has sum $k$ (for $k = S$ take the whole circle).`,
        },
        {
          stem: String.raw`Let $n \ge 2$. Call a sequence of $2n$ terms, each equal to $1$ or $-1$, **balanced** if its sum is $0$. Find, with proof, the largest $L < 2n$ such that every balanced sequence of $2n$ terms has $L$ consecutive terms with sum $0$.`,
          difficulty: 4,
          answer: String.raw`$L = n$ if $n$ is even and $L = n + 1$ if $n$ is odd. **Proof.** Key idea: the sums of $L$ consecutive terms ($L$ even) change by $0$ or $\pm 2$ when the block moves one step, so it suffices to find one block with sum $\ge 0$ and one with sum $\le 0$, namely the two halves ($n$ even) or the first and last $n + 1$ terms, which overlap in only $2$ terms ($n$ odd); for even $L = 2k$ with $n + 1 < 2k < 2n$, repeat a block of $2k$ terms with sum $2$ whose first $2n - 2k$ terms have sum $-2$, so that every $2k$ consecutive terms have sum $2$.`,
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
        {
          stem: String.raw`What is the smallest positive integer $n$ such that whenever $n$ points are placed in a cube of edge $2$ (inside or on the surface), some two of them are at distance at most $\sqrt{3}$?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Nineteen points are placed in a unit square (inside or on the boundary). Prove that some three of them lie in a disc of radius $\frac{1}{4}$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: cut the square into nine squares of side $\frac{1}{3}$; since $19 > 2 \times 9$, one small square holds three points, and it lies inside its circumscribed disc of radius $\frac{\sqrt{2}}{6} < \frac{1}{4}$.`,
        },
        {
          stem: String.raw`Prove that there is an integer $n$ with $1 \le n \le 1000$ such that both $n\sqrt{2}$ and $n\sqrt{3}$ differ from an integer by less than $\frac{1}{31}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: for $n = 0, 1, \ldots, 1000$ plot the point (fractional part of $n\sqrt{2}$, fractional part of $n\sqrt{3}$) in the unit square cut into $31^2 = 961$ small squares; two of the $1001$ points share a small square, and the difference of their two values of $n$ works.`,
        },
        {
          stem: String.raw`Find, with proof, the largest number of points that can be placed in a closed ball of radius $1$ (inside or on the boundary) so that every two of them are at distance at least $\sqrt{2}$.`,
          difficulty: 4,
          answer: String.raw`$6$, for example $(\pm 1, 0, 0)$, $(0, \pm 1, 0)$, $(0, 0, \pm 1)$. **Proof.** Key idea: with $O$ the centre (which cannot be one of two or more such points), $\angle POQ < 90^\circ$ would give $PQ^2 < OP^2 + OQ^2 \le 2$, so the directions from $O$ make pairwise angles of at least $90^\circ$; fixing one direction $u$, at most one other is $-u$, and the projections of the rest onto the plane perpendicular to $u$ still make pairwise angles of at least $90^\circ$ (the dot products only decrease), so there are at most $4$ of them.`,
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
        {
          stem: String.raw`A set $S$ of seven positive integers has the property that whenever $a$ and $b$ are in $S$ with $a > b$, the number $a - b$ is also in $S$. The largest element of $S$ is $63$. What is the smallest element of $S$?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Find all finite sets $S$ of real numbers with at least two elements such that the sum of any two different elements of $S$ is also an element of $S$.`,
          difficulty: 2,
          answer: String.raw`$S = \{0, a\}$ or $S = \{-a, 0, a\}$ with $a \ne 0$.`,
        },
        {
          stem: String.raw`Finitely many unit squares with sides parallel to the axes lie in the plane, and their union has area $A$. Prove that one can choose some of these squares, no two of which have a common point, with total area at least $\frac{A}{6}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: repeatedly choose, among the squares not yet chosen or discarded, one whose left side is furthest to the left, and discard the squares it meets; these lie in a $2 \times 3$ rectangle starting at the chosen square's left side and extending one unit above and below it, so the union is covered by rectangles of total area $6$ times that of the chosen squares.`,
        },
        {
          stem: String.raw`In a club, every member has at most $7$ enemies among the other members (enmity is mutual). Prove that the members can be split into a red group and a blue group so that every red member has at most $2$ red enemies and every blue member has at most $4$ blue enemies.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: choose the split that minimises $2R + B$, where $R$ and $B$ are the numbers of enemy pairs inside the red and inside the blue group; a red member with at least $3$ red enemies has at most $4$ blue ones, and a blue member with at least $5$ blue enemies has at most $2$ red ones, so moving such a member to the other group would lower $2R + B$ (by at least $2$, respectively $1$).`,
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
        {
          stem: String.raw`What is the smallest $n$ such that every sequence of $n$ different real numbers contains an increasing subsequence of length $3$ or a decreasing subsequence of length $5$?`,
          difficulty: 1,
          choices: [String.raw`$8$`, String.raw`$9$`, String.raw`$10$`, String.raw`$15$`, String.raw`$16$`],
          answer: String.raw`(B) $9$`,
        },
        {
          stem: String.raw`What is the smallest positive integer $n$ such that among any $n$ different positive integers there are always three, $a < b < c$, with $a \mid b$ and $b \mid c$, or three of which none divides another?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`For an arrangement of $1, 2, \ldots, 2026$ in a row, let $I$ be the length of its longest increasing subsequence and $D$ the length of its longest decreasing subsequence (subsequences read from left to right, not necessarily adjacent). Over all arrangements, what is the smallest possible value of $I + D$?`,
          difficulty: 3,
          answer: String.raw`$91$`,
        },
        {
          stem: String.raw`Students with pairwise different heights and pairwise different weights stand in a row. Find, with proof, the smallest $n$ such that among any $n$ such students one can always choose $4$ who, read from left to right, are in increasing or in decreasing order of height and also in increasing or in decreasing order of weight.`,
          difficulty: 4,
          answer: String.raw`$n = 82$. **Proof.** Key idea: apply the Erdős–Szekeres theorem twice ($82 = 9^2 + 1$ students include $10 = 3^2 + 1$ in monotone order of height, and these include $4$ in monotone order of weight); for $81$ students, label them along the row by $(a, b, c, d) \in \{1, 2, 3\}^4$ in dictionary order, and order heights by $(a, b, -c, -d)$ and weights by $(a, -b, c, -d)$ in dictionary order, so that the four kinds of monotone pairs are exactly the pairs whose labels first differ in the $1$st, $2$nd, $3$rd and $4$th place, and $4$ labels cannot pairwise first differ in the same place.`,
        },
      ],
    },
  ],
});
