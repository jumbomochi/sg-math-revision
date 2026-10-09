H2.addTopic({
  id: "C2",
  title: "Probability and Expected Value",
  summary: String.raw`Probability by counting, conditional probability and Bayes, geometric probability, linearity of expectation, expected values by states, and probability games.`,
  concepts: [
    {
      title: String.raw`Classical probability: equally likely outcomes`,
      body: String.raw`- If all outcomes are **equally likely**, $\P(A) = \dfrac{\text{number of outcomes in } A}{\text{total number of outcomes}}$.
- Choose the sample space so the outcomes really are equally likely: for two dice use the $36$ **ordered** pairs, not the $11$ possible sums.
- Example: $\P(\text{two dice sum to } 7) = \frac{6}{36} = \frac{1}{6}$.
- Counting top and bottom the same way (both ordered or both unordered) keeps the ratio right.`,
    },
    {
      title: String.raw`Complements and independence`,
      body: String.raw`- $\P(\text{at least one}) = 1 - \P(\text{none})$. Example: in $4$ rolls of a die, $\P(\text{at least one } 6) = 1 - \left(\frac{5}{6}\right)^4 = \frac{671}{1296}$.
- Events $A$ and $B$ are **independent** if $\P(A \cap B) = \P(A)\,\P(B)$; separate tosses or rolls are independent.
- **Bijection trick**: if a one-to-one pairing matches the outcomes in $A$ with the outcomes not in $A$, then $\P(A) = \frac{1}{2}$.`,
    },
    {
      title: String.raw`Conditional probability and Bayes`,
      body: String.raw`- $\P(A \mid B) = \dfrac{\P(A \cap B)}{\P(B)}$: restrict to the outcomes where $B$ happened.
- A **tree diagram** lists the stages; multiply along branches and add over the branches you want.
- **Bayes**: to reverse a condition, $\P(A \mid B) = \dfrac{\P(B \mid A)\,\P(A)}{\P(B)}$.
- Example: machine A makes $60\%$ of items, $5\%$ of them faulty; machine B makes $40\%$, $10\%$ faulty. A random item is faulty. Then $\P(\text{from A}) = \dfrac{0.6 \times 0.05}{0.6 \times 0.05 + 0.4 \times 0.1} = \dfrac{3}{7}$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.5, 3], to: [4, 4.6], tone: "ink", label: "0.6", pos: "n", style: "plain" },
          { from: [0.5, 3], to: [4, 1.4], tone: "ink", label: "0.4", pos: "s", style: "plain" },
          { from: [4.8, 4.6], to: [8.3, 5.4], tone: "ink", label: "0.05", pos: "n", style: "plain" },
          { from: [4.8, 4.6], to: [8.3, 3.8], tone: "ink", label: "0.95", pos: "s", style: "plain" },
          { from: [4.8, 1.4], to: [8.3, 2.2], tone: "ink", label: "0.1", pos: "n", style: "plain" },
          { from: [4.8, 1.4], to: [8.3, 0.6], tone: "ink", label: "0.9", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 4.4, y: 4.6, text: "A" },
          { x: 4.4, y: 1.4, text: "B" },
          { x: 9, y: 5.4, text: "faulty", style: "small", tone: "warn" },
          { x: 9, y: 3.8, text: "good", style: "small" },
          { x: 9, y: 2.2, text: "faulty", style: "small", tone: "warn" },
          { x: 9, y: 0.6, text: "good", style: "small" },
        ],
        caption: String.raw`$\P(\text{faulty}) = 0.6 \times 0.05 + 0.4 \times 0.1 = 0.07$, of which $0.03$ comes from A.`,
        alt: "A tree diagram: first branches A with 0.6 and B with 0.4; from A, faulty 0.05 and good 0.95; from B, faulty 0.1 and good 0.9.",
      },
    },
    {
      title: String.raw`Geometric probability`,
      body: String.raw`- When a point is chosen **uniformly** in a region, $\P = \dfrac{\text{favourable length, area or volume}}{\text{total length, area or volume}}$.
- Two random numbers $x, y$ in $[0, 1]$ give a random point $(x, y)$ in the unit square; translate the condition into a region and find its area.
- Example: $\P\left(x + y < \frac{1}{2}\right)$ is the area of a triangle with legs $\frac{1}{2}$, namely $\frac{1}{8}$.
- Boundaries (where equality holds) have zero area, so $<$ and $\le$ give the same answer.`,
      figure: {
        type: "plot",
        x: [-0.15, 1.25],
        y: [-0.15, 1.25],
        equal: true,
        originLabel: "sw",
        polygons: [
          { points: [[0, 0], [1, 0], [1, 1], [0, 1]], tone: "muted" },
        ],
        shade: [
          { upper: "x => 0.5 - x", lower: "x => 0", from: 0, to: 0.5, tone: "warn" },
        ],
        xTicks: [{ x: 0.5, label: "½" }, { x: 1, label: "1" }],
        yTicks: [{ y: 0.5, label: "½" }, { y: 1, label: "1" }],
        labels: [
          { x: 0.62, y: 0.62, text: "unit square", style: "small" },
        ],
        caption: String.raw`The shaded region $x + y < \frac{1}{2}$ has area $\frac{1}{8}$ out of $1$.`,
        alt: "The unit square with the small triangle below the line x + y = 1/2 shaded.",
      },
    },
    {
      title: String.raw`Linearity of expectation`,
      body: String.raw`- $\E(X + Y) = \E(X) + \E(Y)$ **always**, even when $X$ and $Y$ are dependent.
- To find the expected number of times something happens, write the count as a sum of **indicators** ($1$ if the event happens at position $i$, else $0$). Then $\E(\text{count}) = \sum \P(\text{event at } i)$.
- Example: the expected number of fixed points of a random permutation of $1, \ldots, n$ is $n \times \frac{1}{n} = 1$, for every $n$.
- **Probabilistic method**: if a random choice has expected value $m$, then some choice has value at least $m$.`,
    },
    {
      title: String.raw`Expected value by states`,
      body: String.raw`- Name the **states** of the process, and let $E_s$ be the expected number of further steps from state $s$.
- **First-step analysis**: $E_s = 1 + \sum_t \P(s \to t)\, E_t$, with $E = 0$ at the finishing state. Solve the linear equations.
- Example: rolling a die until a $6$ appears, $E = 1 + \frac{5}{6}E$, so $E = 6$.
- Use symmetry to merge states (e.g. all vertices at the same distance from the target).`,
    },
    {
      title: String.raw`Symmetry in probability`,
      body: String.raw`- When drawing without replacement, the $k$th object drawn is equally likely to be any of the objects. Example: from $3$ red and $5$ blue balls, $\P(\text{5th ball is red}) = \frac{3}{8}$.
- In a shuffled deck, the ace of spades is above the king of spades with probability $\frac{1}{2}$, since swapping the two cards is a bijection.
- Look for a symmetry before calculating: it often turns a long sum into one line.`,
    },
    {
      title: String.raw`Probability games`,
      body: String.raw`- **Alternate turns**: let $p$ be the first player's chance of winning, and use that after a full round with no winner the game restarts. Example: players toss a coin in turn, first head wins: $p = \frac{1}{2} + \frac{1}{4}p$, so $p = \frac{2}{3}$.
- **First to $n$ wins**: count the ways the winner's last win ends the match, or pretend all the games are played.
- **Pattern races**: ask which pattern must appear just before the other one can.`,
    },
    {
      title: String.raw`Random real numbers and their order`,
      body: String.raw`- If $x_1, \ldots, x_n$ are chosen independently and uniformly from $[0, 1]$, ties have probability $0$ and all $n!$ orders of the $x_i$ are equally likely.
- So $\P(x_1 < x_2 < \cdots < x_k) = \frac{1}{k!}$; for example $\P(x_1 < x_2 < x_3) = \frac{1}{6}$.
- Questions about the order of random reals become questions about random permutations, and vice versa.`,
    },
    {
      title: String.raw`Gambler's ruin`,
      body: String.raw`- A token on $0, 1, \ldots, m$ starts at $k$ and moves one step left or right with probability $\frac{1}{2}$ each, stopping at $0$ or $m$.
- It reaches $m$ before $0$ with probability $\frac{k}{m}$, and the expected number of moves is $k(m - k)$ (check: $E_k = 1 + \frac{1}{2}(E_{k-1} + E_{k+1})$ with $E_0 = E_m = 0$).
- If the step to the right has probability $p \ne \frac{1}{2}$ and $r = \frac{1-p}{p}$, it reaches $m$ first with probability $\frac{1 - r^k}{1 - r^m}$. Example: $p = \frac{3}{4}$, $k = 1$, $m = 2$ gives $\frac{1 - 1/3}{1 - 1/9} = \frac{3}{4}$.`,
    },
  ],
  archetypes: [
    {
      id: "C2-counting-probability",
      name: String.raw`Probability by counting`,
      tests: String.raw`Dice, cards, subsets or random colourings where every outcome is equally likely, so the answer is a ratio of counts. Count the complement, use inclusion–exclusion, or pair outcomes up.`,
      questions: [
        {
          stem: String.raw`Two fair dice are rolled. What is the probability that the product of the two numbers is a multiple of $3$?`,
          difficulty: 1,
          choices: [String.raw`$\frac{11}{36}$`, String.raw`$\frac{1}{3}$`, String.raw`$\frac{4}{9}$`, String.raw`$\frac{5}{9}$`, String.raw`$\frac{2}{3}$`],
          answer: String.raw`(D) $\frac{5}{9}$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. A subset of $\{1, 2, \ldots, n\}$ is chosen at random, all $2^n$ subsets being equally likely. Prove that the probability that the sum of its elements is even is exactly $\frac{1}{2}$. (The empty set has sum $0$.)`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: adding $1$ to a subset that lacks it, or removing it from a subset that contains it, is a bijection that changes the sum by $1$, so it pairs even-sum subsets with odd-sum subsets.`,
        },
        {
          stem: String.raw`Each of the $12$ unit squares of a $3 \times 4$ grid is coloured black or white, independently, each with probability $\frac{1}{2}$. What is the probability that no $2 \times 2$ block of four squares is entirely black?`,
          difficulty: 3,
          answer: String.raw`$\frac{379}{512}$`,
        },
        {
          stem: String.raw`Three different numbers are chosen at random from $1, 2, \ldots, 9$. What is the probability that their sum is even?`,
          difficulty: 1,
          answer: String.raw`$\frac{11}{21}$`,
        },
        {
          stem: String.raw`A fair die is rolled four times. What is the probability that the four results, in the order rolled, never decrease (each result is at least the one before it)?`,
          difficulty: 2,
          answer: String.raw`$\frac{7}{72}$`,
        },
        {
          stem: String.raw`A function $f$ from $\{1, 2, 3, 4, 5\}$ to $\{1, 2, 3, 4, 5\}$ is chosen at random, all $5^5$ functions being equally likely. What is the probability that $f(f(x)) = f(x)$ for every $x$?`,
          difficulty: 3,
          answer: String.raw`$\frac{196}{3125}$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. A permutation $\sigma$ of $\{1, 2, \ldots, 2n\}$ is chosen at random. Its cycles are found by following $i \to \sigma(i) \to \sigma(\sigma(i)) \to \cdots$ until the walk returns to $i$. Prove that the probability that every cycle of $\sigma$ contains at least one odd number and at least one even number is $\dfrac{n}{2(2n-1)}$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: every permutation splits uniquely into its cycles of odd numbers only, its cycles of even numbers only and its mixed cycles, so if $g(a, b)$ is the number of permutations of $a$ odd and $b$ even numbers with all cycles mixed, divided by $a!\,b!$, then $\sum_{i \le a,\, j \le b} g(i, j) = \binom{a+b}{a}$ for all $a, b \ge 0$, and taking differences in $a$ and in $b$ (Pascal's rule) gives $g(a, b) = \binom{a+b-2}{a-1}$ for $a, b \ge 1$.`,
        },
      ],
    },
    {
      id: "C2-conditional",
      name: String.raw`Conditional probability and Bayes`,
      tests: String.raw`Problems that give information ("given that", "it shows heads", "no odd number was rolled") and ask for a probability under it. Restrict to the outcomes consistent with the information, or reverse the condition with Bayes.`,
      questions: [
        {
          stem: String.raw`A family has three children. Each child is equally likely to be a boy or a girl, independently. Given that at least two of the children are girls, what is the probability that all three are girls?`,
          difficulty: 1,
          answer: String.raw`$\frac{1}{4}$`,
        },
        {
          stem: String.raw`A bag contains $3$ fair coins and $1$ coin with heads on both sides. A coin is taken from the bag at random and tossed $3$ times. It shows heads every time. What is the probability that it is the double-headed coin?`,
          difficulty: 2,
          answer: String.raw`$\frac{8}{11}$`,
        },
        {
          stem: String.raw`A fair die is rolled repeatedly until a $6$ appears. Given that no odd number was rolled at any point, what is the probability that the die was rolled exactly once?`,
          difficulty: 3,
          answer: String.raw`$\frac{2}{3}$`,
        },
        {
          stem: String.raw`Two fair dice are rolled and the total is $8$. What is the probability that both dice show even numbers?`,
          difficulty: 1,
          choices: [String.raw`$\frac{1}{4}$`, String.raw`$\frac{1}{3}$`, String.raw`$\frac{2}{5}$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{3}{5}$`],
          answer: String.raw`(E) $\frac{3}{5}$`,
        },
        {
          stem: String.raw`Bag A holds $3$ red and $2$ blue balls; bag B holds $1$ red and $3$ blue balls. A fair die is rolled: on a $1$ or $2$ bag A is used, otherwise bag B. Two balls are drawn from that bag without replacement, and they are one red and one blue. What is the probability that bag A was used?`,
          difficulty: 2,
          answer: String.raw`$\frac{3}{8}$`,
        },
        {
          stem: String.raw`An urn starts with one red ball and one blue ball. Five times, a ball is drawn at random, then put back together with one extra ball of the same colour. Given that the fifth ball drawn was red, what is the probability that the first ball drawn was red?`,
          difficulty: 3,
          answer: String.raw`$\frac{2}{3}$`,
        },
        {
          stem: String.raw`Let $n \ge 3$. A token starts at vertex A of a regular $n$-gon. Every second it moves to one of the two neighbouring vertices, each with probability $\frac{1}{2}$. Given that the token visits every other vertex before it first returns to A, find, with proof, the expected number of moves until it first returns to A.`,
          difficulty: 4,
          answer: String.raw`$\frac{n(n+1)}{3}$. **Proof.** Key idea: cut the $n$-gon open at A into a path $0, 1, \ldots, n$ whose two ends are both A, with the first move going to $1$; the condition says the token reaches $n - 1$ before $0$, and given this (by Bayes and the gambler's ruin) it moves from $k$ up with probability $\frac{k+1}{2k}$, so the expected time $E_k$ to reach $n - 1$ satisfies a recurrence solved by $E_k = \frac{(n-1)^2 - k^2}{3}$, after which the return to A takes $n - 1$ moves on average.`,
        },
      ],
    },
    {
      id: "C2-geometric",
      name: String.raw`Geometric probability`,
      tests: String.raw`A point (or several numbers) chosen uniformly at random from a segment, square or triangle. Turn the condition into a region and compare lengths or areas. Harder versions use barycentric coordinates, affine maps or an integral over the region.`,
      questions: [
        {
          stem: String.raw`A stick is broken at a point chosen uniformly at random along its length. What is the probability that the longer piece is at least twice as long as the shorter piece?`,
          difficulty: 1,
          answer: String.raw`$\frac{2}{3}$`,
        },
        {
          stem: String.raw`The diagram shows a square ABCD. A point P is chosen uniformly at random inside the square. What is the probability that $\angle APB$ is obtuse?`,
          figure: {
            type: "plot",
            x: [-0.8, 4.8],
            y: [-0.8, 4.8],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [4, 0], [4, 4], [0, 4]], tone: "ink" },
            ],
            segments: [
              { from: [1.5, 2.6], to: [0, 0], tone: "accent" },
              { from: [1.5, 2.6], to: [4, 0], tone: "accent" },
            ],
            angles: [
              { at: [1.5, 2.6], from: [0, 0], to: [4, 0], r: 0.5 },
            ],
            points: [
              { x: 1.5, y: 2.6, label: "P", pos: "n" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 4, y: 0, text: "B", pos: "se" },
              { x: 4, y: 4, text: "C", pos: "ne" },
              { x: 0, y: 4, text: "D", pos: "nw" },
            ],
            alt: "A square ABCD with A at the bottom left, and a point P inside joined to A and B, with the angle APB marked.",
          },
          difficulty: 2,
          answer: String.raw`$\frac{\pi}{8}$`,
        },
        {
          stem: String.raw`A point P is chosen uniformly at random inside an equilateral triangle. Let $d_1$, $d_2$, $d_3$ be the distances from P to the three sides, as in the diagram. What is the probability that $d_1$, $d_2$, $d_3$ are the side lengths of a (non-degenerate) triangle?`,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.7, 5.8],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [6, 0], [3, 5.196]], tone: "ink" },
            ],
            segments: [
              { from: [2.6, 1.6], to: [2.6, 0], tone: "accent", dashed: true, label: "d₁", pos: "e", labelAt: [2.6, 0.8] },
              { from: [2.6, 1.6], to: [4.457, 2.672], tone: "accent", dashed: true, label: "d₂", pos: "se", labelAt: [3.5, 2.12] },
              { from: [2.6, 1.6], to: [1.343, 2.326], tone: "accent", dashed: true, label: "d₃", pos: "sw", labelAt: [1.97, 1.96] },
            ],
            rightAngles: [
              { at: [2.6, 0], a: [0, 1], b: [1, 0], size: 0.22 },
              { at: [4.457, 2.672], a: [-1.857, -1.072], b: [-0.5, 0.866], size: 0.22 },
              { at: [1.343, 2.326], a: [1.257, -0.726], b: [0.5, 0.866], size: 0.22 },
            ],
            points: [
              { x: 2.6, y: 1.6, label: "P", pos: "n" },
            ],
            alt: "An equilateral triangle with a point P inside and the three perpendiculars from P to the sides, of lengths d1, d2 and d3.",
          },
          difficulty: 3,
          answer: String.raw`$\frac{1}{4}$`,
        },
        {
          stem: String.raw`Two numbers $x$ and $y$ are chosen independently and uniformly at random from $[0, 1]$. What is the probability that $|x - y| < \frac{1}{3}$?`,
          difficulty: 1,
          answer: String.raw`$\frac{5}{9}$`,
        },
        {
          stem: String.raw`A point P is chosen uniformly at random inside a regular hexagon. What is the probability that P is closer to the centre of the hexagon than to each of its six vertices?`,
          difficulty: 2,
          answer: String.raw`$\frac{1}{3}$`,
        },
        {
          stem: String.raw`A point P is chosen uniformly at random inside a triangle ABC. The three lines through P parallel to the sides cut the triangle into three small triangles, each with a vertex at P, and three parallelograms, as shown. What is the probability that the three small triangles together have at least half the area of triangle ABC?`,
          figure: {
            type: "plot",
            x: [-0.6, 7.6],
            y: [-0.7, 5.2],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [7, 0], [2.2, 4.6]], tone: "ink" },
              { points: [[3, 1.6], [2.235, 0], [4.67, 0]], fill: true, tone: "accent" },
              { points: [[3, 1.6], [5.33, 1.6], [3.732, 3.131]], fill: true, tone: "accent" },
              { points: [[3, 1.6], [0.765, 1.6], [1.468, 3.069]], fill: true, tone: "accent" },
            ],
            segments: [
              { from: [0.765, 1.6], to: [5.33, 1.6], tone: "muted" },
              { from: [4.67, 0], to: [1.468, 3.069], tone: "muted" },
              { from: [2.235, 0], to: [3.732, 3.131], tone: "muted" },
            ],
            points: [
              { x: 3, y: 1.6, label: "P", pos: "sw" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 7, y: 0, text: "B", pos: "se" },
              { x: 2.2, y: 4.6, text: "C", pos: "n" },
            ],
            alt: "A triangle ABC with a point P inside; the three lines through P parallel to the sides cut off three small shaded triangles, each with a vertex at P, and three parallelograms.",
          },
          difficulty: 3,
          answer: String.raw`$1 - \frac{\pi\sqrt{3}}{9}$`,
        },
        {
          stem: String.raw`Points X, Y, Z are chosen independently and uniformly at random on the sides BC, CA, AB of a triangle ABC, and G is the centroid of ABC. Prove that the probability that G lies inside triangle XYZ is $\frac{2}{3}\ln 2$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: G is outside triangle XYZ exactly when it lies in one of the corner triangles AZY, BXZ, CYX, and with $a = \frac{AZ}{AB}$, $b = \frac{AY}{AC}$ (an affine map keeps these ratios and G) it lies in triangle AZY exactly when $\frac{1}{a} + \frac{1}{b} < 3$, which forces $a, b > \frac{1}{2}$, so at most one corner triangle contains G, each with probability $\int_{1/2}^{1} \frac{2a - 1}{3a - 1}\,da = \frac{1}{3} - \frac{2}{9}\ln 2$.`,
        },
      ],
    },
    {
      id: "C2-linearity",
      name: String.raw`Linearity of expectation`,
      tests: String.raw`Expected number of occurrences (rises, mixed neighbours, split pairs) in a random arrangement. Write the count as a sum of indicators; dependence between them does not matter. Also used to prove that a good choice exists.`,
      questions: [
        {
          stem: String.raw`A fair die is rolled $10$ times. Find the expected number of rolls that are strictly greater than the roll just before them.`,
          difficulty: 1,
          answer: String.raw`$\frac{15}{4}$`,
        },
        {
          stem: String.raw`Four men and four women sit at random in the $8$ seats around a round table. Find the expected number of pairs of neighbours that consist of one man and one woman.`,
          difficulty: 2,
          answer: String.raw`$\frac{32}{7}$`,
        },
        {
          stem: String.raw`At a party there are $30$ guests and $100$ pairs of friends among them. Show that the guests can be split between two rooms so that at least $50$ of the pairs of friends are in different rooms.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: send each guest to a room by tossing a fair coin; each pair of friends is split with probability $\frac{1}{2}$, so by linearity the expected number of split pairs is $50$, and some split achieves at least the expected value.`,
        },
        {
          stem: String.raw`A fair coin is tossed $10$ times. A **run** is a maximal block of consecutive equal results (for example, HHTHHH has three runs). Find the expected number of runs.`,
          difficulty: 1,
          answer: String.raw`$\frac{11}{2}$`,
        },
        {
          stem: String.raw`A permutation $(a_1, \ldots, a_{10})$ of $1, 2, \ldots, 10$ is chosen at random. A term is a **local maximum** if it is larger than each of its neighbours ($a_1$ and $a_{10}$ have only one neighbour). Find the expected number of local maxima.`,
          difficulty: 2,
          answer: String.raw`$\frac{11}{3}$`,
        },
        {
          stem: String.raw`The numbers $1, 2, \ldots, 64$ are placed at random in the cells of an $8 \times 8$ board, one per cell. A cell is a **peak** if its number is larger than the numbers in all the cells that share a side with it. Find the expected number of peaks.`,
          difficulty: 3,
          answer: String.raw`$\frac{218}{15}$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. A function $f$ from $\{1, 2, \ldots, n\}$ to itself is chosen at random, all $n^n$ functions being equally likely. Call $x$ **recurrent** if applying $f$ to $x$ repeatedly (at least once) eventually gives $x$ again. Prove that the expected number of recurrent elements equals the expected number of different values in the sequence $1, f(1), f(f(1)), f(f(f(1))), \ldots$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $x$ is recurrent exactly when there is a (unique) list $x = a_1, a_2, \ldots, a_k$ of different numbers with $f(a_1) = a_2, \ldots, f(a_{k-1}) = a_k, f(a_k) = a_1$, so by linearity over all such lists, each working with probability $n^{-k}$, the expected number of recurrent elements is $\sum_{k} \frac{n(n-1)\cdots(n-k+1)}{n^k}$, while the sequence from $1$ has at least $k$ different values with probability $\frac{(n-1)(n-2)\cdots(n-k+1)}{n^{k-1}}$, and summing these over $k$ gives the same total.`,
        },
      ],
    },
    {
      id: "C2-states",
      name: String.raw`Expected value by states`,
      tests: String.raw`Random walks on shapes and waiting for patterns of coin tosses. Set up one unknown per state, use first-step analysis, and merge symmetric states.`,
      questions: [
        {
          stem: String.raw`A frog sits at vertex A of a square ABCD. Every second it jumps to one of the two neighbouring vertices, each with probability $\frac{1}{2}$. Find the expected number of jumps until it first reaches C, the vertex opposite A.`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`An ant starts at vertex A of a cube, as shown. Every minute it walks along an edge to one of the three neighbouring vertices, chosen at random. Find the expected number of minutes until it first returns to A.`,
          figure: {
            type: "plot",
            x: [-0.7, 4.7],
            y: [-0.7, 4.4],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [3, 0], to: [3, 3], tone: "ink" },
              { from: [3, 3], to: [0, 3], tone: "ink" },
              { from: [0, 3], to: [0, 0], tone: "ink" },
              { from: [3, 0], to: [4.2, 1], tone: "ink" },
              { from: [3, 3], to: [4.2, 4], tone: "ink" },
              { from: [0, 3], to: [1.2, 4], tone: "ink" },
              { from: [4.2, 1], to: [4.2, 4], tone: "ink" },
              { from: [1.2, 4], to: [4.2, 4], tone: "ink" },
              { from: [0, 0], to: [1.2, 1], tone: "muted", dashed: true },
              { from: [1.2, 1], to: [4.2, 1], tone: "muted", dashed: true },
              { from: [1.2, 1], to: [1.2, 4], tone: "muted", dashed: true },
            ],
            points: [
              { x: 0, y: 0, label: "A", pos: "sw" },
            ],
            alt: "A cube drawn in perspective with hidden edges dashed and the front bottom-left vertex labelled A.",
          },
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`A fair coin is tossed repeatedly until the four consecutive tosses H, T, H, H appear (in that order). Find the expected number of tosses.`,
          difficulty: 3,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`A fair die is rolled until the same number comes up on two consecutive rolls. Find the expected number of rolls.`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A fair die is rolled until each of the numbers $1$, $2$ and $3$ has appeared at least once. Find the expected number of rolls.`,
          difficulty: 2,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`A fair die is rolled repeatedly, and after each roll the product of all the numbers rolled so far is computed. Find the expected number of rolls until this product is a perfect square for the first time.`,
          difficulty: 3,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Let $k \ge 2$ and $n \ge 1$. A web consists of $k$ paths, each made of $n$ edges, which share one endpoint O and have no other points in common. A spider starts at O, and every second it moves along an edge to one of the neighbouring points, all of them equally likely. Find, with proof, the expected number of moves until the spider first reaches the far end of one particular path.`,
          difficulty: 4,
          answer: String.raw`$(2k-1)n^2$. **Proof.** Key idea: on a tree, by first-step analysis and induction, the expected time to get from a point $u$ to a neighbouring point $v$ is $2e + 1$, where $e$ is the number of edges on $u$'s side of the edge $uv$; along the chosen path the $j$th step has $e = (k-1)n + j - 1$, and $\sum_{j=1}^{n} \left(2(k-1)n + 2j - 1\right) = (2k-1)n^2$.`,
        },
      ],
    },
    {
      id: "C2-games",
      name: String.raw`Probability games`,
      tests: String.raw`Players take turns, play a series, or race for coin patterns. Write an equation for the winning probability using the restart after a full round, count ways to finish the series, or compare which pattern must come first.`,
      questions: [
        {
          stem: String.raw`Amy and Ben take turns rolling a fair die, Amy first. The first person to roll a $6$ wins. What is the probability that Amy wins?`,
          difficulty: 1,
          answer: String.raw`$\frac{6}{11}$`,
        },
        {
          stem: String.raw`Two teams play a series of games; the first team to win $3$ games wins the series. Team X wins each game with probability $\frac{2}{3}$, independently, and there are no draws. What is the probability that Team X wins the series?`,
          difficulty: 2,
          answer: String.raw`$\frac{64}{81}$`,
        },
        {
          stem: String.raw`A fair coin is tossed repeatedly. Ann wins as soon as four consecutive tosses read T, H, H, H, and Ben wins as soon as four consecutive tosses read H, H, H, H. Prove that Ann wins with probability $\frac{15}{16}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: if H, H, H, H appears for the first time anywhere other than tosses $1$–$4$, the toss just before it is T (otherwise H, H, H, H appeared earlier), so T, H, H, H appeared one toss earlier; hence Ben wins only when the first four tosses are all heads.`,
        },
        {
          stem: String.raw`In a tennis game at deuce, Amy wins each point with probability $\frac{3}{5}$, independently. The game ends as soon as one player is two points ahead. What is the probability that Amy wins the game?`,
          difficulty: 1,
          answer: String.raw`$\frac{9}{13}$`,
        },
        {
          stem: String.raw`Ann has $3$ coins and Ben has $2$. In each round Ann wins with probability $\frac{2}{3}$ and Ben with probability $\frac{1}{3}$, and the loser gives the winner one coin. They play until one of them has all $5$ coins. What is the probability that Ann ends with all the coins?`,
          difficulty: 2,
          answer: String.raw`$\frac{28}{31}$`,
        },
        {
          stem: String.raw`Ann and Ben take turns rolling a fair die, Ann first, adding each roll to a running total that starts at $0$. The first player to make the running total a multiple of $7$ wins. What is the probability that Ann wins?`,
          difficulty: 3,
          answer: String.raw`$\frac{5}{11}$`,
        },
        {
          stem: String.raw`Ann and Ben take turns choosing a real number uniformly at random from $[0, 1]$, independently, Ann first. The first player whose number, added to the number chosen just before it, gives a total greater than $1$ wins. Prove that Ann wins with probability $\dfrac{1 - \sin 1}{\cos 1}$ (angles in radians).`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: if $w(x)$ is the probability that the player about to choose wins when the previous number is $x$, then $w(x) = x + \int_0^{1-x} \left(1 - w(y)\right) dy$, so $w'(x) = w(1 - x)$ and $w'' = -w$, which with $w(1) = 1$ gives $w(x) = \sin x + \frac{1 - \sin 1}{\cos 1}\cos x$, and Ann wins with probability $1 - \int_0^1 w(x)\,dx$.`,
        },
      ],
    },
  ],
});
