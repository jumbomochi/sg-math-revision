H2.addTopic({
  id: "N3",
  title: "Patterns and Sequences",
  summary: String.raw`Spot the rule in number and figure patterns, find any term, add long lists quickly by pairing, and use remainders for repeating patterns and number tables.`,
  concepts: [
    {
      title: String.raw`Find the rule: look at the gaps`,
      body: String.raw`Write the gap between each pair of neighbours. If the gap is the same every time, you can jump straight to any term.

For $4, 7, 10, 13, \dots$ the gap is $3$. To reach the $20$th term you start at $4$ and make $19$ jumps of $3$:
$$4 + 19 \times 3 = 61$$

- **Term number $n$ = first term + $(n - 1) \times$ gap.**
- Count the jumps, not the numbers: from the $1$st term to the $20$th term is only $19$ jumps.`,
    },
    {
      title: String.raw`How many numbers are in the list?`,
      body: String.raw`For an evenly spaced list, find how many jumps there are, then add $1$ for the starting number.

$6, 10, 14, \dots, 98$: the distance is $98 - 6 = 92$, which is $92 \div 4 = 23$ jumps, so there are $23 + 1 = 24$ numbers.

- **Number of terms = (last − first) ÷ gap + 1.**
- Forgetting the "+ 1" is the most common mistake. Check with a tiny list: $2, 4, 6$ has $(6-2) \div 2 + 1 = 3$ numbers.`,
    },
    {
      title: String.raw`Pair the first and last numbers`,
      body: String.raw`To add an evenly spaced list, pair the first with the last, the second with the second-last, and so on. Every pair has the same sum.

$3 + 6 + 9 + \dots + 30$ has $10$ numbers. Each pair adds to $3 + 30 = 33$, and there are $5$ pairs, so the sum is $5 \times 33 = 165$.

- **Sum = (first + last) × number of terms ÷ 2.**
- Another way to see it: the sum is the *middle value* times how many numbers there are.`,
      figure: {
        type: "plot",
        x: [-1.6, 7.2],
        y: [-1.1, 4.6],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 4], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 4], r: 0.28, fill: true, tone: "good" },
          { c: [2, 4], r: 0.28, fill: true, tone: "good" },
          { c: [3, 4], r: 0.28, fill: true, tone: "good" },
          { c: [4, 4], r: 0.28, fill: true, tone: "good" },
          { c: [5, 4], r: 0.28, fill: true, tone: "good" },
          { c: [0, 3], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 3], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 3], r: 0.28, fill: true, tone: "good" },
          { c: [3, 3], r: 0.28, fill: true, tone: "good" },
          { c: [4, 3], r: 0.28, fill: true, tone: "good" },
          { c: [5, 3], r: 0.28, fill: true, tone: "good" },
          { c: [0, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 2], r: 0.28, fill: true, tone: "good" },
          { c: [4, 2], r: 0.28, fill: true, tone: "good" },
          { c: [5, 2], r: 0.28, fill: true, tone: "good" },
          { c: [0, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [4, 1], r: 0.28, fill: true, tone: "good" },
          { c: [5, 1], r: 0.28, fill: true, tone: "good" },
          { c: [0, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [4, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [5, 0], r: 0.28, fill: true, tone: "good" },
        ],
        labels: [
          { x: -0.6, y: 4, text: "1 + 5", pos: "w", style: "small" },
          { x: -0.6, y: 3, text: "2 + 4", pos: "w", style: "small" },
          { x: -0.6, y: 2, text: "3 + 3", pos: "w", style: "small" },
          { x: -0.6, y: 1, text: "4 + 2", pos: "w", style: "small" },
          { x: -0.6, y: 0, text: "5 + 1", pos: "w", style: "small" },
          { x: 2.5, y: -0.85, text: "5 rows of 6 dots", style: "small" },
        ],
        caption: String.raw`Two copies of $1+2+3+4+5$ fit together into $5$ rows of $6$ dots, so $1+2+3+4+5 = 5 \times 6 \div 2 = 15$.`,
        alt: "A staircase of 1, 2, 3, 4, 5 blue dots and an upside-down staircase of 5, 4, 3, 2, 1 green dots fit together into a rectangle of 5 rows of 6 dots.",
      },
    },
    {
      title: String.raw`Odd numbers add up to square numbers`,
      body: String.raw`Adding the odd numbers from $1$ always gives a square number:
$$1 = 1 \times 1, \quad 1 + 3 = 2 \times 2, \quad 1 + 3 + 5 = 3 \times 3$$

- **The first $n$ odd numbers add up to $n \times n$.**
- First count how many odd numbers there are. $1 + 3 + \dots + 19$ has $(19 + 1) \div 2 = 10$ numbers, so the sum is $10 \times 10 = 100$.`,
      figure: {
        type: "plot",
        x: [-0.8, 7.2],
        y: [-0.8, 3.8],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 0.28, fill: true, tone: "good" },
          { c: [0, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [0, 2], r: 0.28, fill: true, tone: "good" },
          { c: [0, 3], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 0], r: 0.28, fill: true, tone: "good" },
          { c: [1, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 2], r: 0.28, fill: true, tone: "good" },
          { c: [1, 3], r: 0.28, fill: true, tone: "good" },
          { c: [2, 0], r: 0.28, fill: true, tone: "good" },
          { c: [2, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 3], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 0], r: 0.28, fill: true, tone: "good" },
          { c: [3, 1], r: 0.28, fill: true, tone: "good" },
          { c: [3, 2], r: 0.28, fill: true, tone: "good" },
          { c: [3, 3], r: 0.28, fill: true, tone: "good" },
        ],
        labels: [
          { x: 4.4, y: 2.6, text: "1 + 3 + 5 + 7", pos: "e", style: "plain" },
          { x: 4.4, y: 1.6, text: "= 4 × 4 = 16", pos: "e", style: "plain" },
        ],
        caption: String.raw`Start with $1$ dot in the corner. Each new odd number adds an L-shape around it, and the dots always make a square.`,
        alt: "A 4 by 4 square of dots split into L-shaped layers of 1, 3, 5 and 7 dots in alternating colours.",
      },
    },
    {
      title: String.raw`Square numbers and triangular numbers`,
      body: String.raw`- **Square numbers**: $1, 4, 9, 16, 25, \dots$ (dots in a square, $n \times n$).
- **Triangular numbers**: $1, 3, 6, 10, 15, \dots$ (dots in a triangle). The $n$th one is $1 + 2 + \dots + n = n \times (n + 1) \div 2$. For example, the $6$th is $6 \times 7 \div 2 = 21$.
- Gaps of square numbers are the odd numbers $3, 5, 7, \dots$; gaps of triangular numbers are $2, 3, 4, \dots$
- Two triangular numbers next to each other add up to a square number.`,
      figure: {
        type: "plot",
        x: [-0.8, 7.2],
        y: [-0.8, 3.8],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 3], r: 0.28, fill: true, tone: "accent" },
          { c: [0, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [0, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [0, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 3], r: 0.28, fill: true, tone: "good" },
          { c: [1, 2], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [1, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 3], r: 0.28, fill: true, tone: "good" },
          { c: [2, 2], r: 0.28, fill: true, tone: "good" },
          { c: [2, 1], r: 0.28, fill: true, tone: "accent" },
          { c: [2, 0], r: 0.28, fill: true, tone: "accent" },
          { c: [3, 3], r: 0.28, fill: true, tone: "good" },
          { c: [3, 2], r: 0.28, fill: true, tone: "good" },
          { c: [3, 1], r: 0.28, fill: true, tone: "good" },
          { c: [3, 0], r: 0.28, fill: true, tone: "accent" },
        ],
        labels: [
          { x: 4.4, y: 2.6, text: "6 + 10", pos: "e", style: "plain" },
          { x: 4.4, y: 1.6, text: "= 4 × 4 = 16", pos: "e", style: "plain" },
        ],
        caption: String.raw`A staircase cut splits a square into two triangular numbers next to each other.`,
        alt: "A 4 by 4 square of dots cut along a staircase into a triangle of 10 blue dots and a triangle of 6 green dots.",
      },
    },
    {
      title: String.raw`Figure patterns: count what is added each time`,
      body: String.raw`For matchstick, dot or tile patterns, count the first few figures and make a small table. Then look for the gap.

| Columns | 1 | 2 | 3 | 4 |
| Sticks | 7 | 12 | 17 | 22 |

The gap is $5$, so the rule is $2 + 5 \times (\text{number of columns})$: $2$ sticks on the left, then $5$ for each column.

- Draw the next figure yourself to check the rule before you use it for a big figure.
- Shared sticks (or dots) are counted once only.`,
      figure: {
        type: "plot",
        x: [-0.4, 12.799999999999999],
        y: [-0.9, 2.4],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [0, 1], tone: "ink" },
          { from: [0, 1], to: [0, 2], tone: "ink" },
          { from: [0, 0], to: [1, 0], tone: "ink" },
          { from: [0, 1], to: [1, 1], tone: "ink" },
          { from: [0, 2], to: [1, 2], tone: "ink" },
          { from: [1, 0], to: [1, 1], tone: "ink" },
          { from: [1, 1], to: [1, 2], tone: "ink" },
          { from: [1.8, 0], to: [1.8, 1], tone: "ink" },
          { from: [1.8, 1], to: [1.8, 2], tone: "ink" },
          { from: [1.8, 0], to: [2.8, 0], tone: "ink" },
          { from: [1.8, 1], to: [2.8, 1], tone: "ink" },
          { from: [1.8, 2], to: [2.8, 2], tone: "ink" },
          { from: [2.8, 0], to: [2.8, 1], tone: "ink" },
          { from: [2.8, 1], to: [2.8, 2], tone: "ink" },
          { from: [2.8, 0], to: [3.8, 0], tone: "warn" },
          { from: [2.8, 1], to: [3.8, 1], tone: "warn" },
          { from: [2.8, 2], to: [3.8, 2], tone: "warn" },
          { from: [3.8, 0], to: [3.8, 1], tone: "warn" },
          { from: [3.8, 1], to: [3.8, 2], tone: "warn" },
          { from: [4.6, 0], to: [4.6, 1], tone: "ink" },
          { from: [4.6, 1], to: [4.6, 2], tone: "ink" },
          { from: [4.6, 0], to: [5.6, 0], tone: "ink" },
          { from: [4.6, 1], to: [5.6, 1], tone: "ink" },
          { from: [4.6, 2], to: [5.6, 2], tone: "ink" },
          { from: [5.6, 0], to: [5.6, 1], tone: "ink" },
          { from: [5.6, 1], to: [5.6, 2], tone: "ink" },
          { from: [5.6, 0], to: [6.6, 0], tone: "ink" },
          { from: [5.6, 1], to: [6.6, 1], tone: "ink" },
          { from: [5.6, 2], to: [6.6, 2], tone: "ink" },
          { from: [6.6, 0], to: [6.6, 1], tone: "ink" },
          { from: [6.6, 1], to: [6.6, 2], tone: "ink" },
          { from: [6.6, 0], to: [7.6, 0], tone: "warn" },
          { from: [6.6, 1], to: [7.6, 1], tone: "warn" },
          { from: [6.6, 2], to: [7.6, 2], tone: "warn" },
          { from: [7.6, 0], to: [7.6, 1], tone: "warn" },
          { from: [7.6, 1], to: [7.6, 2], tone: "warn" },
          { from: [8.4, 0], to: [8.4, 1], tone: "ink" },
          { from: [8.4, 1], to: [8.4, 2], tone: "ink" },
          { from: [8.4, 0], to: [9.4, 0], tone: "ink" },
          { from: [8.4, 1], to: [9.4, 1], tone: "ink" },
          { from: [8.4, 2], to: [9.4, 2], tone: "ink" },
          { from: [9.4, 0], to: [9.4, 1], tone: "ink" },
          { from: [9.4, 1], to: [9.4, 2], tone: "ink" },
          { from: [9.4, 0], to: [10.4, 0], tone: "ink" },
          { from: [9.4, 1], to: [10.4, 1], tone: "ink" },
          { from: [9.4, 2], to: [10.4, 2], tone: "ink" },
          { from: [10.4, 0], to: [10.4, 1], tone: "ink" },
          { from: [10.4, 1], to: [10.4, 2], tone: "ink" },
          { from: [10.4, 0], to: [11.4, 0], tone: "ink" },
          { from: [10.4, 1], to: [11.4, 1], tone: "ink" },
          { from: [10.4, 2], to: [11.4, 2], tone: "ink" },
          { from: [11.4, 0], to: [11.4, 1], tone: "ink" },
          { from: [11.4, 1], to: [11.4, 2], tone: "ink" },
          { from: [11.4, 0], to: [12.4, 0], tone: "warn" },
          { from: [11.4, 1], to: [12.4, 1], tone: "warn" },
          { from: [11.4, 2], to: [12.4, 2], tone: "warn" },
          { from: [12.4, 0], to: [12.4, 1], tone: "warn" },
          { from: [12.4, 1], to: [12.4, 2], tone: "warn" },
        ],
        labels: [
          { x: 0.5, y: -0.45, text: "7", style: "small" },
          { x: 2.8, y: -0.45, text: "12", style: "small" },
          { x: 6.1, y: -0.45, text: "17", style: "small" },
          { x: 10.399999999999999, y: -0.45, text: "22", style: "small" },
        ],
        caption: String.raw`Each new column needs only $5$ more sticks (coloured), so the counts go up by $5$: $7, 12, 17, 22, \dots$`,
        alt: "Strips two squares tall and 1, 2, 3 and 4 squares long, made of matchsticks, needing 7, 12, 17 and 22 sticks; the 5 sticks added each time are coloured.",
      },
    },
    {
      title: String.raw`Repeating patterns: use the remainder`,
      body: String.raw`Find the **block** that repeats and how long it is. Divide the position by the block length; the **remainder** tells you where you are in the block.

Pattern ★ ● ▲ ★ ● ▲ … has a block of $3$. For the $50$th shape: $50 = 16 \times 3 + 2$, so it is the $2$nd shape of a block: ●.

- **Remainder $0$ means the last shape of the block**, not the first.
- Days of the week repeat every $7$ days. Last digits of $2 \times 2 \times 2 \times \dots$ repeat too ($2, 4, 8, 6, 2, 4, \dots$).`,
    },
    {
      title: String.raw`Number tables: find the row and the column`,
      body: String.raw`When numbers are written in rows of equal length, divide by the row length.

| A | B | C | D |
| 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 |

Here the last column holds the multiples of $4$. For $30$: $30 = 7 \times 4 + 2$, so $30$ comes after $7$ full rows: row $8$, column B.

- If the rows go back and forth (a "snake"), odd rows go left to right and even rows go right to left.
- For a triangle of numbers (rows of $1, 2, 3, \dots$), the last number in each row is a triangular number.`,
    },
    {
      title: String.raw`Doubling patterns: powers of 2`,
      body: String.raw`The doubling numbers $1, 2, 4, 8, 16, 32, \dots$ have a neat total: add them up from $1$, and you get **one less than the next one**.
$$1 + 2 + 4 + 8 = 15 = 16 - 1$$

- Why? Add $1$ more: $1 + 1 = 2$, then $2 + 2 = 4$, then $4 + 4 = 8$, then $8 + 8 = 16$. Each step doubles.
- Some patterns hide doubling numbers. Compare each term with $1, 2, 4, 8, \dots$ and look at what is left over.`,
    },
  ],
  archetypes: [
    {
      id: "N3-nth-term",
      name: String.raw`Finding a term and counting terms`,
      tests: String.raw`An evenly spaced list where you must find a far-away term or count how many numbers there are. Look for "What is the 50th number?" or a list that ends with "…, 601".`,
      questions: [
        {
          stem: String.raw`Look at the number pattern
$$5, \ 9, \ 13, \ 17, \ 21, \ \dots$$
What is the $30$th number?`,
          difficulty: 1,
          answer: String.raw`$121$`,
        },
        {
          stem: String.raw`How many numbers are there in the list $7, 13, 19, 25, \dots, 601$?`,
          difficulty: 2,
          choices: [String.raw`$98$`, String.raw`$99$`, String.raw`$100$`, String.raw`$101$`, String.raw`$102$`],
          answer: String.raw`(C) $100$`,
        },
        {
          stem: String.raw`List A is $3, 10, 17, 24, \dots$ and List B is $5, 9, 13, 17, \dots$ Each list keeps going but contains only numbers up to $500$. How many numbers appear in both lists?`,
          difficulty: 3,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Look at the number pattern
$$100, \ 94, \ 88, \ 82, \ \dots$$
What is the $15$th number?`,
          difficulty: 1,
          choices: [String.raw`$10$`, String.raw`$16$`, String.raw`$22$`, String.raw`$28$`],
          answer: String.raw`(B) $16$`,
        },
        {
          stem: String.raw`In an evenly spaced list of numbers, the $5$th number is $23$ and the $12$th number is $51$. What is the $1$st number?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Ali counts up from $5$ in steps of $4$: $5, 9, 13, \dots$ At the same time, Bala counts down from $2005$ in steps of $6$: $2005, 1999, 1993, \dots$ They start together and each says one number every second. At one moment they both say the same number. What number is it?`,
          difficulty: 3,
          answer: String.raw`$805$`,
        },
        {
          stem: String.raw`All the whole numbers that are not multiples of $3$, not multiples of $5$ and not multiples of $7$ are listed in order:
$$1, \ 2, \ 4, \ 8, \ 11, \ 13, \ 16, \ \dots$$
What is the $2026$th number in the list?`,
          difficulty: 4,
          answer: String.raw`$4432$`,
        },
      ],
    },
    {
      id: "N3-pairing-sums",
      name: String.raw`Adding evenly spaced numbers`,
      tests: String.raw`A long sum such as $1 + 2 + \dots + 100$ or $2 + 5 + 8 + \dots$, done by pairing the first and last numbers. Also sums of consecutive numbers that equal a given total.`,
      questions: [
        {
          stem: String.raw`Find the value of $1 + 2 + 3 + \dots + 59 + 60$.`,
          difficulty: 1,
          answer: String.raw`$1830$`,
        },
        {
          stem: String.raw`What is the value of $2 + 5 + 8 + 11 + \dots + 98 + 101$?`,
          difficulty: 2,
          choices: [String.raw`$1700$`, String.raw`$1751$`, String.raw`$1802$`, String.raw`$3502$`, String.raw`$5253$`],
          answer: String.raw`(B) $1751$`,
        },
        {
          stem: String.raw`The number $9$ can be written as a sum of two or more consecutive whole numbers in two ways: $9 = 4 + 5$ and $9 = 2 + 3 + 4$.

In how many ways can $90$ be written as a sum of two or more consecutive whole numbers? (Use only numbers bigger than $0$.)`,
          difficulty: 3,
          answer: String.raw`5 ways`,
        },
        {
          stem: String.raw`Find the value of $2 + 4 + 6 + \dots + 48 + 50$.`,
          difficulty: 1,
          answer: String.raw`$650$`,
        },
        {
          stem: String.raw`The sum of ten consecutive whole numbers is $2025$. What is the largest of the ten numbers?`,
          difficulty: 2,
          answer: String.raw`$207$`,
        },
        {
          stem: String.raw`The pages of a chapter are numbered in order, starting from page $21$. The page numbers of the chapter add up to $1620$. What is the number of the last page of the chapter?`,
          difficulty: 3,
          answer: String.raw`$60$`,
        },
        {
          stem: String.raw`What is the sum of all the whole numbers from $1$ to $300$ that are not multiples of $3$ and not multiples of $4$?`,
          difficulty: 4,
          answer: String.raw`$22\,500$`,
        },
      ],
    },
    {
      id: "N3-matchsticks",
      name: String.raw`Matchstick figure patterns`,
      tests: String.raw`Figures built from matchsticks that grow by a rule. Count the sticks in the first few figures, find the gap, then find a big figure or work back from a number of sticks.`,
      questions: [
        {
          stem: String.raw`Matchsticks are used to make the figures below. How many matchsticks are needed to make Figure $25$?`,
          difficulty: 1,
          answer: String.raw`$76$`,
          figure: {
            type: "plot",
            x: [-0.5, 8.5],
            y: [-0.9, 1.4],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 1], tone: "ink" },
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [0, 1], to: [1, 1], tone: "ink" },
              { from: [1, 0], to: [1, 1], tone: "ink" },
              { from: [2, 0], to: [2, 1], tone: "ink" },
              { from: [2, 0], to: [3, 0], tone: "ink" },
              { from: [2, 1], to: [3, 1], tone: "ink" },
              { from: [3, 0], to: [3, 1], tone: "ink" },
              { from: [3, 0], to: [4, 0], tone: "ink" },
              { from: [3, 1], to: [4, 1], tone: "ink" },
              { from: [4, 0], to: [4, 1], tone: "ink" },
              { from: [5, 0], to: [5, 1], tone: "ink" },
              { from: [5, 0], to: [6, 0], tone: "ink" },
              { from: [5, 1], to: [6, 1], tone: "ink" },
              { from: [6, 0], to: [6, 1], tone: "ink" },
              { from: [6, 0], to: [7, 0], tone: "ink" },
              { from: [6, 1], to: [7, 1], tone: "ink" },
              { from: [7, 0], to: [7, 1], tone: "ink" },
              { from: [7, 0], to: [8, 0], tone: "ink" },
              { from: [7, 1], to: [8, 1], tone: "ink" },
              { from: [8, 0], to: [8, 1], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: -0.45, text: "Figure 1", style: "small" },
              { x: 3, y: -0.45, text: "Figure 2", style: "small" },
              { x: 6.5, y: -0.45, text: "Figure 3", style: "small" },
            ],
            alt: "Figure 1 is one square of 4 matchsticks. Figure 2 is two squares in a row. Figure 3 is three squares in a row.",
          },
        },
        {
          stem: String.raw`Triangles are made from matchsticks, pointing up and down in turn, as shown. Figure $1$ has $1$ triangle, Figure $2$ has $2$ triangles, and so on. Which figure uses exactly $81$ matchsticks?`,
          difficulty: 2,
          answer: String.raw`Figure $40$`,
          figure: {
            type: "plot",
            x: [-0.5, 7],
            y: [-0.9, 1.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [1, 0], to: [0.5, 0.866], tone: "ink" },
              { from: [0, 0], to: [0.5, 0.866], tone: "ink" },
              { from: [2, 0], to: [3, 0], tone: "ink" },
              { from: [2.5, 0.866], to: [3, 0], tone: "ink" },
              { from: [2, 0], to: [2.5, 0.866], tone: "ink" },
              { from: [2.5, 0.866], to: [3.5, 0.866], tone: "ink" },
              { from: [3.5, 0.866], to: [3, 0], tone: "ink" },
              { from: [4.5, 0], to: [5.5, 0], tone: "ink" },
              { from: [5, 0.866], to: [5.5, 0], tone: "ink" },
              { from: [4.5, 0], to: [5, 0.866], tone: "ink" },
              { from: [5, 0.866], to: [6, 0.866], tone: "ink" },
              { from: [5.5, 0], to: [6, 0.866], tone: "ink" },
              { from: [5.5, 0], to: [6.5, 0], tone: "ink" },
              { from: [6.5, 0], to: [6, 0.866], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: -0.45, text: "Figure 1", style: "small" },
              { x: 2.75, y: -0.45, text: "Figure 2", style: "small" },
              { x: 5.5, y: -0.45, text: "Figure 3", style: "small" },
            ],
            alt: "Figure 1 is one triangle of 3 matchsticks. Figure 2 adds an upside-down triangle next to it. Figure 3 has three triangles in a row, pointing up, down, up.",
          },
        },
        {
          stem: String.raw`Figure $n$ is a square grid made from matchsticks, with $n$ small squares along each side. How many matchsticks are needed to make Figure $10$?`,
          difficulty: 3,
          answer: String.raw`$220$`,
          figure: {
            type: "plot",
            x: [-0.5, 8.5],
            y: [-0.9, 3.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [0, 0], to: [0, 1], tone: "ink" },
              { from: [0, 1], to: [1, 1], tone: "ink" },
              { from: [1, 0], to: [1, 1], tone: "ink" },
              { from: [2, 0], to: [3, 0], tone: "ink" },
              { from: [2, 0], to: [2, 1], tone: "ink" },
              { from: [3, 0], to: [4, 0], tone: "ink" },
              { from: [2, 1], to: [2, 2], tone: "ink" },
              { from: [2, 1], to: [3, 1], tone: "ink" },
              { from: [3, 0], to: [3, 1], tone: "ink" },
              { from: [3, 1], to: [4, 1], tone: "ink" },
              { from: [3, 1], to: [3, 2], tone: "ink" },
              { from: [2, 2], to: [3, 2], tone: "ink" },
              { from: [4, 0], to: [4, 1], tone: "ink" },
              { from: [3, 2], to: [4, 2], tone: "ink" },
              { from: [4, 1], to: [4, 2], tone: "ink" },
              { from: [5, 0], to: [6, 0], tone: "ink" },
              { from: [5, 0], to: [5, 1], tone: "ink" },
              { from: [6, 0], to: [7, 0], tone: "ink" },
              { from: [5, 1], to: [5, 2], tone: "ink" },
              { from: [7, 0], to: [8, 0], tone: "ink" },
              { from: [5, 2], to: [5, 3], tone: "ink" },
              { from: [5, 1], to: [6, 1], tone: "ink" },
              { from: [6, 0], to: [6, 1], tone: "ink" },
              { from: [6, 1], to: [7, 1], tone: "ink" },
              { from: [6, 1], to: [6, 2], tone: "ink" },
              { from: [7, 1], to: [8, 1], tone: "ink" },
              { from: [6, 2], to: [6, 3], tone: "ink" },
              { from: [5, 2], to: [6, 2], tone: "ink" },
              { from: [7, 0], to: [7, 1], tone: "ink" },
              { from: [6, 2], to: [7, 2], tone: "ink" },
              { from: [7, 1], to: [7, 2], tone: "ink" },
              { from: [7, 2], to: [8, 2], tone: "ink" },
              { from: [7, 2], to: [7, 3], tone: "ink" },
              { from: [5, 3], to: [6, 3], tone: "ink" },
              { from: [8, 0], to: [8, 1], tone: "ink" },
              { from: [6, 3], to: [7, 3], tone: "ink" },
              { from: [8, 1], to: [8, 2], tone: "ink" },
              { from: [7, 3], to: [8, 3], tone: "ink" },
              { from: [8, 2], to: [8, 3], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: -0.45, text: "Figure 1", style: "small" },
              { x: 3, y: -0.45, text: "Figure 2", style: "small" },
              { x: 6.5, y: -0.45, text: "Figure 3", style: "small" },
            ],
            alt: "Figure 1 is a 1 by 1 square of matchsticks, Figure 2 a 2 by 2 grid of squares, Figure 3 a 3 by 3 grid of squares.",
          },
        },
        {
          stem: String.raw`Matchsticks are used to make rows of hexagons, as shown. How many matchsticks are needed to make Figure $20$?`,
          difficulty: 1,
          answer: String.raw`$101$`,
          figure: {
            type: "plot",
            x: [-1.3, 11.296],
            y: [-2.1, 1.4],
            equal: true,
            axes: false,
            segments: [
              { from: [-0.866, -0.5], to: [-0.866, 0.5], tone: "ink" },
              { from: [-0.866, -0.5], to: [0, -1], tone: "ink" },
              { from: [-0.866, 0.5], to: [0, 1], tone: "ink" },
              { from: [0, -1], to: [0.866, -0.5], tone: "ink" },
              { from: [0, 1], to: [0.866, 0.5], tone: "ink" },
              { from: [0.866, -0.5], to: [0.866, 0.5], tone: "ink" },
              { from: [1.534, -0.5], to: [1.534, 0.5], tone: "ink" },
              { from: [1.534, -0.5], to: [2.4, -1], tone: "ink" },
              { from: [1.534, 0.5], to: [2.4, 1], tone: "ink" },
              { from: [2.4, -1], to: [3.266, -0.5], tone: "ink" },
              { from: [2.4, 1], to: [3.266, 0.5], tone: "ink" },
              { from: [3.266, -0.5], to: [3.266, 0.5], tone: "ink" },
              { from: [3.266, -0.5], to: [4.132, -1], tone: "ink" },
              { from: [3.266, 0.5], to: [4.132, 1], tone: "ink" },
              { from: [4.132, -1], to: [4.998, -0.5], tone: "ink" },
              { from: [4.132, 1], to: [4.998, 0.5], tone: "ink" },
              { from: [4.998, -0.5], to: [4.998, 0.5], tone: "ink" },
              { from: [5.666, -0.5], to: [5.666, 0.5], tone: "ink" },
              { from: [5.666, -0.5], to: [6.532, -1], tone: "ink" },
              { from: [5.666, 0.5], to: [6.532, 1], tone: "ink" },
              { from: [6.532, -1], to: [7.398, -0.5], tone: "ink" },
              { from: [6.532, 1], to: [7.398, 0.5], tone: "ink" },
              { from: [7.398, -0.5], to: [7.398, 0.5], tone: "ink" },
              { from: [7.398, -0.5], to: [8.264, -1], tone: "ink" },
              { from: [7.398, 0.5], to: [8.264, 1], tone: "ink" },
              { from: [8.264, -1], to: [9.13, -0.5], tone: "ink" },
              { from: [8.264, 1], to: [9.13, 0.5], tone: "ink" },
              { from: [9.13, -0.5], to: [9.13, 0.5], tone: "ink" },
              { from: [9.13, -0.5], to: [9.996, -1], tone: "ink" },
              { from: [9.13, 0.5], to: [9.996, 1], tone: "ink" },
              { from: [9.996, -1], to: [10.862, -0.5], tone: "ink" },
              { from: [9.996, 1], to: [10.862, 0.5], tone: "ink" },
              { from: [10.862, -0.5], to: [10.862, 0.5], tone: "ink" },
            ],
            labels: [
              { x: 0, y: -1.55, text: "Figure 1", style: "small" },
              { x: 3.266, y: -1.55, text: "Figure 2", style: "small" },
              { x: 8.264, y: -1.55, text: "Figure 3", style: "small" },
            ],
            alt: "Figure 1 is one hexagon made of 6 matchsticks. Figure 2 is two hexagons side by side sharing one matchstick. Figure 3 is three hexagons in a row, each sharing a side with the next.",
          },
        },
        {
          stem: String.raw`Matchsticks are used to make staircases of squares, as shown. How many matchsticks are needed to make Figure $10$?`,
          difficulty: 2,
          answer: String.raw`$130$`,
          figure: {
            type: "plot",
            x: [-0.6, 8.6],
            y: [-0.95, 3.4],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 1], tone: "ink" },
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [0, 1], to: [1, 1], tone: "ink" },
              { from: [1, 0], to: [1, 1], tone: "ink" },
              { from: [2, 0], to: [2, 1], tone: "ink" },
              { from: [2, 0], to: [3, 0], tone: "ink" },
              { from: [2, 1], to: [3, 1], tone: "ink" },
              { from: [3, 0], to: [3, 1], tone: "ink" },
              { from: [3, 0], to: [4, 0], tone: "ink" },
              { from: [3, 1], to: [3, 2], tone: "ink" },
              { from: [3, 1], to: [4, 1], tone: "ink" },
              { from: [3, 2], to: [4, 2], tone: "ink" },
              { from: [4, 0], to: [4, 1], tone: "ink" },
              { from: [4, 1], to: [4, 2], tone: "ink" },
              { from: [5, 0], to: [5, 1], tone: "ink" },
              { from: [5, 0], to: [6, 0], tone: "ink" },
              { from: [5, 1], to: [6, 1], tone: "ink" },
              { from: [6, 0], to: [6, 1], tone: "ink" },
              { from: [6, 0], to: [7, 0], tone: "ink" },
              { from: [6, 1], to: [6, 2], tone: "ink" },
              { from: [6, 1], to: [7, 1], tone: "ink" },
              { from: [6, 2], to: [7, 2], tone: "ink" },
              { from: [7, 0], to: [7, 1], tone: "ink" },
              { from: [7, 0], to: [8, 0], tone: "ink" },
              { from: [7, 1], to: [7, 2], tone: "ink" },
              { from: [7, 1], to: [8, 1], tone: "ink" },
              { from: [7, 2], to: [7, 3], tone: "ink" },
              { from: [7, 2], to: [8, 2], tone: "ink" },
              { from: [7, 3], to: [8, 3], tone: "ink" },
              { from: [8, 0], to: [8, 1], tone: "ink" },
              { from: [8, 1], to: [8, 2], tone: "ink" },
              { from: [8, 2], to: [8, 3], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: -0.5, text: "Figure 1", style: "small" },
              { x: 3, y: -0.5, text: "Figure 2", style: "small" },
              { x: 6.5, y: -0.5, text: "Figure 3", style: "small" },
            ],
            alt: "Staircases made of matchstick squares. Figure 1 is one square. Figure 2 has a column of 1 square next to a column of 2 squares. Figure 3 has columns of 1, 2 and 3 squares, bottoms level, forming steps.",
          },
        },
        {
          stem: String.raw`Matchsticks are used to make triangles, as shown. Figure $n$ is a large triangle with $n$ matchsticks along each side, split into small triangles. Which figure uses exactly $630$ matchsticks?`,
          difficulty: 3,
          answer: String.raw`Figure $20$`,
          figure: {
            type: "plot",
            x: [-0.6, 8.2],
            y: [-0.95, 2.9],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0.5, 0.866], tone: "ink" },
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [0.5, 0.866], to: [1, 0], tone: "ink" },
              { from: [1.8, 0], to: [2.3, 0.866], tone: "ink" },
              { from: [1.8, 0], to: [2.8, 0], tone: "ink" },
              { from: [2.3, 0.866], to: [2.8, 0], tone: "ink" },
              { from: [2.3, 0.866], to: [2.8, 1.732], tone: "ink" },
              { from: [2.3, 0.866], to: [3.3, 0.866], tone: "ink" },
              { from: [2.8, 0], to: [3.3, 0.866], tone: "ink" },
              { from: [2.8, 0], to: [3.8, 0], tone: "ink" },
              { from: [2.8, 1.732], to: [3.3, 0.866], tone: "ink" },
              { from: [3.3, 0.866], to: [3.8, 0], tone: "ink" },
              { from: [4.6, 0], to: [5.1, 0.866], tone: "ink" },
              { from: [4.6, 0], to: [5.6, 0], tone: "ink" },
              { from: [5.1, 0.866], to: [5.6, 0], tone: "ink" },
              { from: [5.1, 0.866], to: [5.6, 1.732], tone: "ink" },
              { from: [5.1, 0.866], to: [6.1, 0.866], tone: "ink" },
              { from: [5.6, 0], to: [6.1, 0.866], tone: "ink" },
              { from: [5.6, 0], to: [6.6, 0], tone: "ink" },
              { from: [5.6, 1.732], to: [6.1, 0.866], tone: "ink" },
              { from: [5.6, 1.732], to: [6.1, 2.598], tone: "ink" },
              { from: [5.6, 1.732], to: [6.6, 1.732], tone: "ink" },
              { from: [6.1, 0.866], to: [6.6, 0], tone: "ink" },
              { from: [6.1, 0.866], to: [6.6, 1.732], tone: "ink" },
              { from: [6.1, 0.866], to: [7.1, 0.866], tone: "ink" },
              { from: [6.1, 2.598], to: [6.6, 1.732], tone: "ink" },
              { from: [6.6, 0], to: [7.1, 0.866], tone: "ink" },
              { from: [6.6, 0], to: [7.6, 0], tone: "ink" },
              { from: [6.6, 1.732], to: [7.1, 0.866], tone: "ink" },
              { from: [7.1, 0.866], to: [7.6, 0], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: -0.5, text: "Figure 1", style: "small" },
              { x: 2.8, y: -0.5, text: "Figure 2", style: "small" },
              { x: 6.1, y: -0.5, text: "Figure 3", style: "small" },
            ],
            alt: "Triangles made of matchsticks. Figure 1 is one small triangle. Figure 2 is a triangle with sides 2 matchsticks long, split into 4 small triangles. Figure 3 is a triangle with sides 3 matchsticks long, split into 9 small triangles.",
          },
        },
        {
          stem: String.raw`A rectangle is divided into small squares using matchsticks, with one matchstick along each side of every small square. The rectangle shown is $2$ squares by $3$ squares and uses $17$ matchsticks. Another rectangle made in the same way uses exactly $881$ matchsticks. How many small squares does it have?`,
          difficulty: 4,
          answer: String.raw`$420$`,
          figure: {
            type: "plot",
            x: [-0.6, 3.6],
            y: [-0.5, 2.5],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [1, 0], tone: "ink" },
              { from: [1, 0], to: [2, 0], tone: "ink" },
              { from: [2, 0], to: [3, 0], tone: "ink" },
              { from: [0, 1], to: [1, 1], tone: "ink" },
              { from: [1, 1], to: [2, 1], tone: "ink" },
              { from: [2, 1], to: [3, 1], tone: "ink" },
              { from: [0, 2], to: [1, 2], tone: "ink" },
              { from: [1, 2], to: [2, 2], tone: "ink" },
              { from: [2, 2], to: [3, 2], tone: "ink" },
              { from: [0, 0], to: [0, 1], tone: "ink" },
              { from: [0, 1], to: [0, 2], tone: "ink" },
              { from: [1, 0], to: [1, 1], tone: "ink" },
              { from: [1, 1], to: [1, 2], tone: "ink" },
              { from: [2, 0], to: [2, 1], tone: "ink" },
              { from: [2, 1], to: [2, 2], tone: "ink" },
              { from: [3, 0], to: [3, 1], tone: "ink" },
              { from: [3, 1], to: [3, 2], tone: "ink" },
            ],
            alt: "A rectangle 3 matchsticks wide and 2 matchsticks tall, divided by matchsticks into 6 small squares; 17 matchsticks in all.",
          },
        },
      ],
    },
    {
      id: "N3-square-triangular",
      name: String.raw`Square numbers, triangular numbers and odd sums`,
      tests: String.raw`Dot patterns in squares or triangles, sums like $1 + 3 + 5 + \dots$, and counting square or triangular numbers in a range.`,
      questions: [
        {
          stem: String.raw`The dot patterns below follow a rule. How many dots are there in Pattern $12$?`,
          difficulty: 1,
          answer: String.raw`$78$`,
          figure: {
            type: "plot",
            x: [-0.7, 12.7],
            y: [-1.1, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [2.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [2, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [3, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [6, 1.732], r: 0.25, fill: true, tone: "accent" },
              { c: [5.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [6.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [5, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [6, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [7, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [10.5, 2.598], r: 0.25, fill: true, tone: "accent" },
              { c: [10, 1.732], r: 0.25, fill: true, tone: "accent" },
              { c: [11, 1.732], r: 0.25, fill: true, tone: "accent" },
              { c: [9.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [10.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [11.5, 0.866], r: 0.25, fill: true, tone: "accent" },
              { c: [9, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [10, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [11, 0], r: 0.25, fill: true, tone: "accent" },
              { c: [12, 0], r: 0.25, fill: true, tone: "accent" },
            ],
            labels: [
              { x: 0, y: -0.75, text: "Pattern 1", style: "small" },
              { x: 2.5, y: -0.75, text: "Pattern 2", style: "small" },
              { x: 6, y: -0.75, text: "Pattern 3", style: "small" },
              { x: 10.5, y: -0.75, text: "Pattern 4", style: "small" },
            ],
            alt: "Four triangular dot patterns with 1, 3, 6 and 10 dots: each has one more row at the bottom than the one before.",
          },
        },
        {
          stem: String.raw`What is the value of $1 + 3 + 5 + 7 + \dots + 77 + 79$?`,
          difficulty: 2,
          choices: [String.raw`$800$`, String.raw`$1521$`, String.raw`$1600$`, String.raw`$1681$`, String.raw`$3200$`],
          answer: String.raw`(C) $1600$`,
        },
        {
          stem: String.raw`A number is called *special* if it is a square number ($1, 4, 9, 16, \dots$) or a triangular number ($1, 3, 6, 10, \dots$), or both. How many special numbers are there from $1$ to $2026$?`,
          difficulty: 3,
          answer: String.raw`$105$`,
        },
        {
          stem: String.raw`The square numbers are $1, 4, 9, 16, 25, \dots$ What is the difference between the $20$th square number and the $19$th square number?`,
          difficulty: 1,
          answer: String.raw`$39$`,
        },
        {
          stem: String.raw`The triangular numbers are $1, 3, 6, 10, 15, \dots$ What is the sum of the $24$th and the $25$th triangular numbers?`,
          difficulty: 2,
          answer: String.raw`$625$`,
        },
        {
          stem: String.raw`Each dot pattern below is made from the one before by adding a ring of dots all the way round the outside. How many dots are there in Pattern $10$?`,
          difficulty: 3,
          answer: String.raw`$271$`,
          figure: {
            type: "plot",
            x: [-1, 11.4],
            y: [-2.75, 2.1],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [2.2, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [2.7, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [2.7, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [3.2, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [3.7, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [3.7, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [4.2, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [6.4, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [6.9, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [7.4, 1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [6.9, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [7.4, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [7.9, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [8.4, 1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [7.4, -1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [7.9, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [8.4, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [8.9, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [9.4, 1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [8.4, -1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [8.9, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [9.4, 0], r: 0.22, fill: true, tone: "accent" },
              { c: [9.9, 0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [9.4, -1.732], r: 0.22, fill: true, tone: "accent" },
              { c: [9.9, -0.866], r: 0.22, fill: true, tone: "accent" },
              { c: [10.4, 0], r: 0.22, fill: true, tone: "accent" },
            ],
            labels: [
              { x: 0, y: -2.3, text: "Pattern 1", style: "small" },
              { x: 3.2, y: -2.3, text: "Pattern 2", style: "small" },
              { x: 8.4, y: -2.3, text: "Pattern 3", style: "small" },
            ],
            alt: "Three dot patterns shaped like hexagons. Pattern 1 is a single dot. Pattern 2 is a dot with a ring of 6 dots around it. Pattern 3 adds a further ring of 12 dots around Pattern 2.",
          },
        },
        {
          stem: String.raw`How many of the first $1000$ triangular numbers ($1, 3, 6, 10, \dots$) end in the two digits $00$?`,
          difficulty: 4,
          answer: String.raw`$20$`,
        },
      ],
    },
    {
      id: "N3-repeating",
      name: String.raw`Repeating patterns`,
      tests: String.raw`A block of colours, letters, numbers or days that repeats over and over. Asks what the 100th item is, or the total of the first few hundred items. Divide and use the remainder.`,
      questions: [
        {
          stem: String.raw`Beads are threaded on a string in this order: red, red, blue, yellow, red, red, blue, yellow, … What colour is the $75$th bead?`,
          difficulty: 1,
          answer: String.raw`Blue`,
        },
        {
          stem: String.raw`Today is Saturday. What day of the week will it be $1000$ days from today?`,
          difficulty: 2,
          choices: [String.raw`Thursday`, String.raw`Friday`, String.raw`Saturday`, String.raw`Sunday`, String.raw`Monday`],
          answer: String.raw`(B) Friday`,
        },
        {
          stem: String.raw`The numbers below continue in the same pattern:
$$1, \ 2, \ 3, \ 4, \ 3, \ 2, \ 1, \ 2, \ 3, \ 4, \ 3, \ 2, \ 1, \ 2, \ \dots$$
What is the sum of the first $100$ numbers?`,
          difficulty: 3,
          answer: String.raw`$250$`,
        },
        {
          stem: String.raw`It is now 9 a.m. What time will it be $100$ hours from now?`,
          difficulty: 1,
          choices: [String.raw`9 a.m.`, String.raw`11 a.m.`, String.raw`1 p.m.`, String.raw`3 p.m.`, String.raw`5 p.m.`],
          answer: String.raw`(C) 1 p.m.`,
        },
        {
          stem: String.raw`As a decimal, $\frac17 = 0.142857142857\ldots$, with the block of digits $142857$ repeating forever. What is the $100$th digit after the decimal point?`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Two rows of letters are written one under the other, starting at the same place. Row 1 repeats A, B, C and Row 2 repeats A, B, C, D:

| Place | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | … |
| Row 1 | A | B | C | A | B | C | A | B | … |
| Row 2 | A | B | C | D | A | B | C | D | … |

In the first $100$ places, how many times is the letter in Row 1 the same as the letter in Row 2?`,
          difficulty: 3,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`A list starts with $2$ and $3$. Every number after that is the last digit of the product of the two numbers just before it. So the list begins $2, 3, 6, 8, \ldots$ (because $2 \times 3 = 6$ and $3 \times 6 = 18$). What is the sum of the first $2026$ numbers in the list?`,
          difficulty: 4,
          answer: String.raw`$12\,151$`,
        },
      ],
    },
    {
      id: "N3-number-tables",
      name: String.raw`Where is the number in the table?`,
      tests: String.raw`Whole numbers written in rows (straight, snake-shaped or in a triangle). Asks for the row and column of a large number such as $2026$. Divide by the row length, or use triangular numbers for a triangle.`,
      questions: [
        {
          stem: String.raw`The whole numbers are written in rows of six, as shown. The first row is Row $1$.

| A | B | C | D | E | F |
| 1 | 2 | 3 | 4 | 5 | 6 |
| 7 | 8 | 9 | 10 | 11 | 12 |
| 13 | 14 | 15 | 16 | 17 | 18 |
| … | … | … | … | … | … |

In which row and column is the number $100$?`,
          difficulty: 1,
          answer: String.raw`Row $17$, column D`,
        },
        {
          stem: String.raw`The whole numbers are written in five columns, going back and forth as shown.

| A | B | C | D | E |
| 1 | 2 | 3 | 4 | 5 |
| 10 | 9 | 8 | 7 | 6 |
| 11 | 12 | 13 | 14 | 15 |
| 20 | 19 | 18 | 17 | 16 |
| … | … | … | … | … |

In which column is the number $2026$?`,
          difficulty: 2,
          answer: String.raw`Column E`,
        },
        {
          stem: String.raw`The whole numbers are arranged in rows so that Row $1$ has $1$ number, Row $2$ has $2$ numbers, Row $3$ has $3$ numbers, and so on:

- Row 1: $1$
- Row 2: $2, \ 3$
- Row 3: $4, \ 5, \ 6$
- Row 4: $7, \ 8, \ 9, \ 10$

In which row is $2026$, and what is its position in that row, counting from the left?`,
          difficulty: 3,
          answer: String.raw`Row $64$, $10$th from the left`,
        },
        {
          stem: String.raw`The whole numbers are written in order in rows of eight: Row $1$ is $1$ to $8$, Row $2$ is $9$ to $16$, and so on. The columns are labelled A to H from left to right. Which number is in Row $12$, column C?`,
          difficulty: 1,
          answer: String.raw`$91$`,
        },
        {
          stem: String.raw`The odd numbers are written in rows of five, as shown. The first row is Row $1$.

| A | B | C | D | E |
| 1 | 3 | 5 | 7 | 9 |
| 11 | 13 | 15 | 17 | 19 |
| 21 | 23 | 25 | 27 | 29 |
| … | … | … | … | … |

In which row and column is the number $2025$?`,
          difficulty: 2,
          answer: String.raw`Row $203$, column C`,
        },
        {
          stem: String.raw`The whole numbers are written in a grid that grows in L-shapes, as shown. Row $1$ is the top row and Column $1$ is the left-hand column. The pattern goes on forever.

| Col 1 | Col 2 | Col 3 | Col 4 | Col 5 | … |
| 1 | 2 | 5 | 10 | 17 | … |
| 4 | 3 | 6 | 11 | 18 | … |
| 9 | 8 | 7 | 12 | 19 | … |
| 16 | 15 | 14 | 13 | 20 | … |
| 25 | 24 | 23 | 22 | 21 | … |
| … | … | … | … | … | … |

In which row and column is the number $2000$?`,
          difficulty: 3,
          answer: String.raw`Row $45$, Column $26$`,
        },
        {
          stem: String.raw`The whole numbers are arranged in rows as shown. Row $1$ has $1$ number, and each row has $2$ more numbers than the row above: one extra number sticks out at each end. Apart from the two end numbers of each row, every number sits directly below a number in the row above. The pattern goes on forever. Which number is directly above $2100$?`,
          difficulty: 4,
          answer: String.raw`$2010$`,
          figure: {
            type: "plot",
            x: [-5.6, 5.6],
            y: [-5.1, 0.5],
            equal: true,
            axes: false,
            labels: [
              { x: 0, y: 0, text: "1" },
              { x: -1, y: -0.9, text: "2" },
              { x: 0, y: -0.9, text: "3" },
              { x: 1, y: -0.9, text: "4" },
              { x: -2, y: -1.8, text: "5" },
              { x: -1, y: -1.8, text: "6" },
              { x: 0, y: -1.8, text: "7" },
              { x: 1, y: -1.8, text: "8" },
              { x: 2, y: -1.8, text: "9" },
              { x: -3, y: -2.7, text: "10" },
              { x: -2, y: -2.7, text: "11" },
              { x: -1, y: -2.7, text: "12" },
              { x: 0, y: -2.7, text: "13" },
              { x: 1, y: -2.7, text: "14" },
              { x: 2, y: -2.7, text: "15" },
              { x: 3, y: -2.7, text: "16" },
              { x: -4, y: -3.6, text: "17" },
              { x: -3, y: -3.6, text: "18" },
              { x: -2, y: -3.6, text: "19" },
              { x: -1, y: -3.6, text: "20" },
              { x: 0, y: -3.6, text: "21" },
              { x: 1, y: -3.6, text: "22" },
              { x: 2, y: -3.6, text: "23" },
              { x: 3, y: -3.6, text: "24" },
              { x: 4, y: -3.6, text: "25" },
              { x: 0, y: -4.6, text: "⋮" },
            ],
            alt: "Numbers arranged in centred rows: row 1 is 1; row 2 is 2, 3, 4; row 3 is 5 to 9; row 4 is 10 to 16; row 5 is 17 to 25. Each row has two more numbers than the row above, one more at each end, and each number sits directly below the number above it.",
          },
        },
      ],
    },
    {
      id: "N3-growing-gaps",
      name: String.raw`Growing gaps and other rules`,
      tests: String.raw`Patterns where the gaps are not equal: the gaps themselves grow ($1, 2, 3, \dots$ or $3, 5, 7, \dots$), or each number is made from the numbers before it.`,
      questions: [
        {
          stem: String.raw`What is the next number in the pattern?
$$2, \ 5, \ 10, \ 17, \ 26, \ \dots$$`,
          difficulty: 1,
          answer: String.raw`$37$`,
        },
        {
          stem: String.raw`In the pattern $1, 2, 4, 7, 11, 16, \dots$ the gaps are $1, 2, 3, 4, 5, \dots$ What is the $20$th number in the pattern?`,
          difficulty: 2,
          choices: [String.raw`$172$`, String.raw`$190$`, String.raw`$191$`, String.raw`$210$`, String.raw`$211$`],
          answer: String.raw`(C) $191$`,
        },
        {
          stem: String.raw`In a list of numbers, each number from the $3$rd one onwards is the sum of the two numbers just before it. The $1$st number is $3$ and the $6$th number is $54$. What is the $2$nd number?`,
          difficulty: 3,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`What is the next number in the pattern?
$$1, \ 4, \ 10, \ 19, \ 31, \ \dots$$`,
          difficulty: 1,
          answer: String.raw`$46$`,
        },
        {
          stem: String.raw`In the list $3, 4, 7, 11, 18, 29, \dots$ each number from the $3$rd onwards is the sum of the two numbers just before it. How many of the first $30$ numbers in the list are even?`,
          difficulty: 2,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`In a number pattern, the gaps between neighbouring numbers grow by the same amount each time. The $1$st number is $4$, the $2$nd number is $7$ and the $5$th number is $40$. What is the $10$th number?`,
          difficulty: 3,
          answer: String.raw`$175$`,
        },
        {
          stem: String.raw`Look at the pattern
$$2, \ 4, \ 7, \ 12, \ 21, \ 38, \ \dots$$
The gaps between neighbouring numbers are $2, 3, 5, 9, 17, \dots$, and the gaps between those gaps are $1, 2, 4, 8, \dots$, doubling each time. What is the sum of the first $15$ numbers in the pattern?`,
          difficulty: 4,
          answer: String.raw`$32\,887$`,
        },
      ],
    },
  ],
});
