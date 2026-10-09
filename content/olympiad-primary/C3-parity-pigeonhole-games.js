H2.addTopic({
  id: "C3",
  title: "Parity, Pigeonhole and Games",
  summary: String.raw`Use odd and even, the pigeonhole principle, things that never change, winning positions and colouring to decide what is possible.`,
  concepts: [
    {
      title: String.raw`Odd and even`,
      body: String.raw`- even $+$ even $=$ even, odd $+$ odd $=$ even, odd $+$ even $=$ odd.
- A sum of many whole numbers is **odd** exactly when it has an **odd number of odd numbers** in it.
- odd $\times$ odd $=$ odd; anything $\times$ even $=$ even.

Example: $1 + 2 + 3 + 4 + 5$ has three odd numbers (1, 3, 5), so the total is odd. (It is 15.)

To show something is **impossible**, it is often enough to show the answer would have to be odd and even at the same time.`,
    },
    {
      title: String.raw`Pigeonhole: think of the unluckiest case`,
      body: String.raw`If there are more pigeons than holes, some hole gets at least 2 pigeons.

For "smallest number to be **sure**" questions, imagine you are as unlucky as possible, then add one more.

Example: a drawer has black socks and white socks. Taking 2 socks you might get one of each. The 3rd sock **must** match one of them, so 3 socks are enough to be sure of a pair.

If you need a sock of a particular colour, the unluckiest case is taking **all** the other colours first.`,
    },
    {
      title: String.raw`Guaranteeing several of the same`,
      body: String.raw`- To be sure of $k$ things in the same group when there are $g$ groups: the unluckiest case is $k - 1$ in every group, so you need $g \times (k-1) + 1$.
- If $N$ things are put into $g$ groups, some group has **at least** $N \div g$, rounded **up**.

Example: there are 4 card suits. To be sure of 3 cards of the same suit you need $4 \times 2 + 1 = 9$ cards.

Example: 25 pupils are put into 4 houses. $25 \div 4 = 6$ remainder $1$, so some house has at least $7$ pupils.

Sometimes you must invent the "holes" yourself, for example pairs of numbers that add to the same total.`,
    },
    {
      title: String.raw`Invariants: find what never changes`,
      body: String.raw`When a puzzle repeats a move again and again, look for something the move **cannot change**: a total, whether a total is odd or even, or the number of something.

Example: the numbers 1, 2, 3 are on a board. A move rubs out two numbers and writes their sum. The total of the numbers on the board is always $6$, so the last number left must be $6$.

If the start and the target have different "unchanging" values, the target can never be reached.`,
    },
    {
      title: String.raw`Take-away games: work backwards`,
      body: String.raw`Two players take turns removing counters. Find the **losing positions**: the numbers where the player about to move will lose if the other player plays well.

- 0 counters left (when the last counter wins) is a losing position for the player to move.
- A position is **winning** if you can move to a losing position. It is **losing** if every move leads to a winning position.

Example: take 1 or 2 counters each turn; whoever takes the last counter wins. The losing positions are 0, 3, 6, 9, 12, … (multiples of 3). With 10 counters, take 1 to leave 9, then always leave a multiple of 3.`,
      figure: {
        type: "plot",
        x: [-0.6, 6.6],
        y: [-0.55, 3.25],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 2.2], r: 0.36, tone: "warn", fill: true },
          { c: [1, 2.2], r: 0.36, tone: "ink", fill: false },
          { c: [2, 2.2], r: 0.36, tone: "ink", fill: false },
          { c: [3, 2.2], r: 0.36, tone: "warn", fill: true },
          { c: [4, 2.2], r: 0.36, tone: "ink", fill: false },
          { c: [5, 2.2], r: 0.36, tone: "ink", fill: false },
          { c: [6, 2.2], r: 0.36, tone: "warn", fill: true },
          { c: [0, 0], r: 0.36, tone: "ink", fill: false },
          { c: [1, 0], r: 0.36, tone: "ink", fill: false },
          { c: [2, 0], r: 0.36, tone: "warn", fill: true },
          { c: [3, 0], r: 0.36, tone: "ink", fill: false },
          { c: [4, 0], r: 0.36, tone: "ink", fill: false },
          { c: [5, 0], r: 0.36, tone: "warn", fill: true },
        ],
        labels: [
          { x: 0, y: 2.2, text: "0", pos: "c", style: "small" },
          { x: 0, y: 2.8800000000000003, text: "L", pos: "c", style: "bold", tone: "warn" },
          { x: 1, y: 2.2, text: "1", pos: "c", style: "small" },
          { x: 1, y: 2.8800000000000003, text: "W", pos: "c", style: "bold" },
          { x: 2, y: 2.2, text: "2", pos: "c", style: "small" },
          { x: 2, y: 2.8800000000000003, text: "W", pos: "c", style: "bold" },
          { x: 3, y: 2.2, text: "3", pos: "c", style: "small" },
          { x: 3, y: 2.8800000000000003, text: "L", pos: "c", style: "bold", tone: "warn" },
          { x: 4, y: 2.2, text: "4", pos: "c", style: "small" },
          { x: 4, y: 2.8800000000000003, text: "W", pos: "c", style: "bold" },
          { x: 5, y: 2.2, text: "5", pos: "c", style: "small" },
          { x: 5, y: 2.8800000000000003, text: "W", pos: "c", style: "bold" },
          { x: 6, y: 2.2, text: "6", pos: "c", style: "small" },
          { x: 6, y: 2.8800000000000003, text: "L", pos: "c", style: "bold", tone: "warn" },
          { x: 0, y: 0, text: "7", pos: "c", style: "small" },
          { x: 0, y: 0.68, text: "W", pos: "c", style: "bold" },
          { x: 1, y: 0, text: "8", pos: "c", style: "small" },
          { x: 1, y: 0.68, text: "W", pos: "c", style: "bold" },
          { x: 2, y: 0, text: "9", pos: "c", style: "small" },
          { x: 2, y: 0.68, text: "L", pos: "c", style: "bold", tone: "warn" },
          { x: 3, y: 0, text: "10", pos: "c", style: "small" },
          { x: 3, y: 0.68, text: "W", pos: "c", style: "bold" },
          { x: 4, y: 0, text: "11", pos: "c", style: "small" },
          { x: 4, y: 0.68, text: "W", pos: "c", style: "bold" },
          { x: 5, y: 0, text: "12", pos: "c", style: "small" },
          { x: 5, y: 0.68, text: "L", pos: "c", style: "bold", tone: "warn" },
        ],
        caption: String.raw`Take 1 or 2 counters per turn; taking the last counter wins. L = losing position for the player about to move. From every W you can move to an L.`,
        alt: "The numbers 0 to 12 in circles, 0 to 6 in the top row and 7 to 12 below. The circles for 0, 3, 6, 9 and 12 are shaded and marked L; all others are marked W.",
      },
    },
    {
      title: String.raw`Handshakes come in twos`,
      body: String.raw`Add up the number of hands that **each person** shook. Every handshake is counted twice (once by each of the two people), so

$$\text{sum of everyone's counts} = 2 \times \text{number of handshakes},$$

which is always **even**. So the number of people who shook an odd number of hands is always even.

Example: 3 people cannot each shake exactly 1 hand, because $3 \times 1 = 3$ is odd.

The same idea works for friendships, games played in a league, or roads joining towns.`,
    },
    {
      title: String.raw`Colouring a grid`,
      body: String.raw`Colour a grid like a chessboard. A domino ($1 \times 2$ tile) always covers **one dark and one light** square, wherever it is placed.

- If a board has an odd number of squares, it cannot be covered by dominoes at all.
- If a board has more dark squares than light squares, dominoes cannot cover it.
- For longer tiles, try colouring in a different pattern, such as stripes or diagonals, so that every tile covers the same mix of colours.

When the answer is **yes**, show a covering. When it is **no**, a colouring argument proves it.`,
      figure: {
        type: "plot",
        x: [-0.3, 4.3],
        y: [-0.3, 4.3],
        equal: true,
        axes: false,
        polygons: [
          {
            points: [[1, 3], [2, 3], [2, 4], [1, 4]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[3, 3], [4, 3], [4, 4], [3, 4]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[0, 2], [1, 2], [1, 3], [0, 3]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[2, 2], [3, 2], [3, 3], [2, 3]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[1, 1], [2, 1], [2, 2], [1, 2]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[3, 1], [4, 1], [4, 2], [3, 2]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[0, 0], [1, 0], [1, 1], [0, 1]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[2, 0], [3, 0], [3, 1], [2, 1]],
            fill: true,
            tone: "muted",
          },
          {
            points: [[0, 3], [1, 3], [1, 4], [0, 4]],
            tone: "ink",
          },
          {
            points: [[1, 3], [2, 3], [2, 4], [1, 4]],
            tone: "ink",
          },
          {
            points: [[2, 3], [3, 3], [3, 4], [2, 4]],
            tone: "ink",
          },
          {
            points: [[3, 3], [4, 3], [4, 4], [3, 4]],
            tone: "ink",
          },
          {
            points: [[0, 2], [1, 2], [1, 3], [0, 3]],
            tone: "ink",
          },
          {
            points: [[1, 2], [2, 2], [2, 3], [1, 3]],
            tone: "ink",
          },
          {
            points: [[2, 2], [3, 2], [3, 3], [2, 3]],
            tone: "ink",
          },
          {
            points: [[3, 2], [4, 2], [4, 3], [3, 3]],
            tone: "ink",
          },
          {
            points: [[0, 1], [1, 1], [1, 2], [0, 2]],
            tone: "ink",
          },
          {
            points: [[1, 1], [2, 1], [2, 2], [1, 2]],
            tone: "ink",
          },
          {
            points: [[2, 1], [3, 1], [3, 2], [2, 2]],
            tone: "ink",
          },
          {
            points: [[3, 1], [4, 1], [4, 2], [3, 2]],
            tone: "ink",
          },
          {
            points: [[0, 0], [1, 0], [1, 1], [0, 1]],
            tone: "ink",
          },
          {
            points: [[1, 0], [2, 0], [2, 1], [1, 1]],
            tone: "ink",
          },
          {
            points: [[2, 0], [3, 0], [3, 1], [2, 1]],
            tone: "ink",
          },
          {
            points: [[3, 0], [4, 0], [4, 1], [3, 1]],
            tone: "ink",
          },
          {
            points: [[1.1, 2.1], [2.9, 2.1], [2.9, 2.9], [1.1, 2.9]],
            fill: true,
            tone: "accent",
          },
        ],
        caption: String.raw`A domino placed anywhere covers one shaded and one unshaded square.`,
        alt: "A 4 by 4 board coloured like a chessboard, with a domino covering one shaded square and one white square next to it.",
      },
    },
    {
      title: String.raw`A walk changes colour at every step`,
      body: String.raw`Colour the board like a chessboard. A step onto a square that shares a side always changes the colour, so a walk goes dark, light, dark, light, …

- If a walk visits an **even** number of squares, it starts and ends on **different** colours.
- If it visits an **odd** number of squares, it starts and ends on the **same** colour.

Example: a $3 \times 3$ board has 5 dark squares (the corners and the centre) and 4 light ones. A walk through all 9 squares must go dark, light, dark, …, dark, so it must start and end on dark squares.`,
    },
  ],
  archetypes: [
    {
      id: "C3-odd-even",
      name: String.raw`Odd or even: can the total be…?`,
      tests: String.raw`"Is it possible to get a total of …?" Check whether the total must be odd or even before trying to find an example.`,
      questions: [
        {
          stem: String.raw`Eight cards show the numbers $1, 3, 5, 7, 9, 11, 13$ and $15$. Is it possible to choose $5$ of the cards so that their numbers add up to $50$? Answer yes or no.`,
          difficulty: 1,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`A book has pages numbered $1$ to $100$. Each sheet of paper has two pages on it: pages 1 and 2 are on the first sheet, pages 3 and 4 are on the second sheet, and so on. Tom tears out $12$ sheets and adds up all $24$ page numbers on them. Could his total be $2025$? Answer yes or no.`,
          difficulty: 2,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`For a whole number $n$, we try to split the numbers $1, 2, 3, \ldots, n$ into two groups with the same total. For example, this can be done for $n = 3$ (the groups are $1, 2$ and $3$). For how many values of $n$ from $1$ to $20$ can it be done?`,
          difficulty: 3,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Seven odd numbers are added together. Which of these could be the total?`,
          choices: [String.raw`$63$`, String.raw`$72$`, String.raw`$80$`, String.raw`$96$`],
          difficulty: 1,
          answer: String.raw`(A) $63$`,
        },
        {
          stem: String.raw`The numbers $1$ to $25$ are written in a $5 \times 5$ grid, one number in each square. Is it possible for all five row totals to be even? Answer yes or no.`,
          difficulty: 2,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`Cards numbered $1$ to $10$ are put in a row in some order. Under each card, Wei writes the difference between the card's number and its position in the row (larger minus smaller, or $0$ if they are equal). For example, if card $7$ is in position $3$, he writes $4$. He then adds up all ten differences. Which of these could be his total?`,
          choices: [String.raw`$27$`, String.raw`$35$`, String.raw`$41$`, String.raw`$44$`],
          difficulty: 3,
          answer: String.raw`(D) $44$`,
        },
        {
          stem: String.raw`The numbers $1$ to $9$ are placed in a $3 \times 3$ grid, one in each square. Then the totals of the $3$ rows, the $3$ columns and the $2$ diagonals are worked out, giving $8$ totals. What is the smallest possible number of these $8$ totals that are odd?`,
          difficulty: 4,
          answer: String.raw`$2$`,
        },
      ],
    },
    {
      id: "C3-pigeonhole-socks",
      name: String.raw`Socks and gloves: smallest number to be sure`,
      tests: String.raw`Items are taken without looking, and you need the smallest number that guarantees a pair, a certain colour, or a matching left and right. Build the unluckiest case and add one.`,
      questions: [
        {
          stem: String.raw`A drawer contains $6$ red socks, $8$ blue socks and $5$ white socks. In the dark, what is the smallest number of socks Wei must take out to be sure of getting two socks of the same colour?`,
          choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$4$`, String.raw`$9$`],
          difficulty: 1,
          answer: String.raw`(C) $4$`,
        },
        {
          stem: String.raw`A drawer contains $6$ red socks, $8$ blue socks and $5$ white socks. In the dark, what is the smallest number of socks Wei must take out to be sure of getting at least two **blue** socks?`,
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`A box has $5$ pairs of black gloves and $4$ pairs of brown gloves, all mixed up. Each pair is made of a left glove and a right glove. In the dark, what is the smallest number of gloves Raj must take out to be sure of getting a matching pair, that is, a left glove and a right glove of the same colour?`,
          difficulty: 3,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`A drawer contains $10$ black socks and $10$ white socks. In the dark, what is the smallest number of socks Lina must take out to be sure of getting two socks of **different** colours?`,
          difficulty: 1,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`A bag contains $5$ red, $3$ green and $7$ yellow balls. In the dark, what is the smallest number of balls Omar must take out to be sure of getting at least one ball of each colour?`,
          choices: [String.raw`$3$`, String.raw`$8$`, String.raw`$11$`, String.raw`$13$`],
          difficulty: 2,
          answer: String.raw`(D) $13$`,
        },
        {
          stem: String.raw`A drawer contains $10$ red, $10$ blue and $10$ green socks. In the dark, what is the smallest number of socks that must be taken out to be sure of getting two pairs of **different** colours (two socks of one colour and two socks of another colour)?`,
          difficulty: 3,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`A cupboard holds $3$ pairs of red shoes, $4$ pairs of blue shoes and $5$ pairs of green shoes, all mixed up. Each pair is a left shoe and a right shoe. In the dark, what is the smallest number of shoes that must be taken out to be sure of getting a matching pair (a left shoe and a right shoe of the same colour) in **each** of the three colours?`,
          difficulty: 4,
          answer: String.raw`$22$`,
        },
      ],
    },
    {
      id: "C3-pigeonhole-guarantee",
      name: String.raw`Pigeonhole: what must happen`,
      tests: String.raw`Find how many people or numbers are needed so that something must happen (several share a birthday month, two numbers add to a total), or the most that can be guaranteed. Decide what the "holes" are first.`,
      questions: [
        {
          stem: String.raw`What is the smallest number of people in a group that makes sure at least $3$ of them were born on the same day of the week?`,
          difficulty: 1,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`There are $40$ pupils in a class. What is the greatest number $N$ for which we can be sure that at least $N$ of the pupils were born in the same month?`,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$10$`, String.raw`$12$`],
          difficulty: 2,
          answer: String.raw`(B) $4$`,
        },
        {
          stem: String.raw`Numbers are chosen from the whole numbers $1$ to $20$, all different. What is the smallest number of numbers that must be chosen to be sure that two of the chosen numbers add up to $21$?`,
          difficulty: 3,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`What is the smallest number of people in a group that makes sure at least two of them have the same birthday (the same day and month)? Remember that 29 February is also a possible birthday.`,
          choices: [String.raw`$13$`, String.raw`$32$`, String.raw`$366$`, String.raw`$367$`],
          difficulty: 1,
          answer: String.raw`(D) $367$`,
        },
        {
          stem: String.raw`Some different whole numbers are chosen from $1$ to $30$. What is the smallest number of numbers that must be chosen to be sure that two of them have a difference that is a multiple of $5$?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Some different whole numbers are chosen from $1$ to $30$. What is the smallest number of numbers that must be chosen to be sure that two of them add up to a multiple of $10$?`,
          difficulty: 3,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Some different whole numbers are chosen from $1$ to $30$. What is the smallest number of numbers that must be chosen to be sure that there are **three** of them such that any two of the three multiply to give a square number? (For example, $2$, $8$ and $18$ work, because $2 \times 8 = 16$, $2 \times 18 = 36$ and $8 \times 18 = 144$ are all square numbers.)`,
          difficulty: 4,
          answer: String.raw`$26$`,
        },
      ],
    },
    {
      id: "C3-invariants",
      name: String.raw`Invariants: repeated moves`,
      tests: String.raw`A move is repeated (turning coins, rubbing out numbers and writing a new one). Find a quantity that never changes, or never changes from odd to even, to decide what can happen at the end.`,
      questions: [
        {
          stem: String.raw`Seven coins lie on a table, all heads up. In each move you must turn over exactly $2$ of the coins. Is it possible, after some moves, to have all seven coins tails up? Answer yes or no.`,
          difficulty: 1,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 12$ are written on a board. In each move, Mira rubs out two of the numbers and writes down their difference (the larger minus the smaller). She keeps going until only one number is left. What can you say about the last number?`,
          choices: [String.raw`It is always odd`, String.raw`It is always even`, String.raw`It can be odd or even, depending on her moves`, String.raw`It is always $0$`],
          difficulty: 2,
          answer: String.raw`(B) It is always even`,
        },
        {
          stem: String.raw`The numbers $1, 2, 3, 4$ and $5$ are written on a board. In each move, two of the numbers, $a$ and $b$, are rubbed out and the number $a + b + a \times b$ is written instead. After four moves only one number is left. What is it?`,
          difficulty: 3,
          answer: String.raw`$719$`,
        },
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 8$ are written on a board. In each move, two of the numbers are rubbed out and replaced by their sum minus $1$. After $7$ moves only one number is left. What is it?`,
          choices: [String.raw`$29$`, String.raw`$35$`, String.raw`$36$`, String.raw`$43$`],
          difficulty: 1,
          answer: String.raw`(A) $29$`,
        },
        {
          stem: String.raw`Kai starts with one sheet of paper. In each move he picks one of his pieces and cuts it into $4$ smaller pieces. After some moves, which of these could be the number of pieces he has?`,
          choices: [String.raw`$2024$`, String.raw`$2025$`, String.raw`$2026$`, String.raw`$2027$`],
          difficulty: 2,
          answer: String.raw`(C) $2026$`,
        },
        {
          stem: String.raw`Six cards numbered $1$ to $6$ lie in a row in the order $1, 2, 3, 4, 5, 6$. In each move, you may swap two cards that have exactly one card between them. Which of these orders can be reached after some moves?`,
          choices: [String.raw`$5, 4, 3, 6, 1, 2$`, String.raw`$2, 1, 4, 3, 6, 5$`, String.raw`$6, 5, 4, 3, 2, 1$`, String.raw`$1, 3, 5, 2, 4, 6$`],
          difficulty: 3,
          answer: String.raw`(A) $5, 4, 3, 6, 1, 2$`,
        },
        {
          stem: String.raw`The numbers $2, 3, 4, 6$ and $12$ are written on a board. In each move, two of the numbers, $a$ and $b$, are rubbed out and the number $(a \times b) \div (a + b)$ is written instead. After four moves only one number is left. What is it?`,
          difficulty: 4,
          answer: String.raw`$\tfrac{3}{4}$`,
        },
      ],
    },
    {
      id: "C3-take-away-games",
      name: String.raw`Take-away games`,
      tests: String.raw`Two players take turns removing counters with a rule about how many may be taken. Find the losing positions by working backwards to decide who wins with best play and what the first move should be.`,
      questions: [
        {
          stem: String.raw`There are $23$ counters on a table. Amy and Bo take turns, and Amy goes first. On each turn a player takes $1$, $2$ or $3$ counters. The player who takes the last counter wins. How many counters should Amy take on her first turn to be sure of winning?`,
          choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`Amy cannot be sure of winning`],
          difficulty: 1,
          answer: String.raw`(C) $3$`,
        },
        {
          stem: String.raw`There are $50$ counters on a table. Two players take turns. On each turn a player takes from $1$ to $5$ counters. The player who takes the **last** counter **loses**. How many counters should the first player take on the first turn to be sure of winning?`,
          difficulty: 2,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`There are $30$ counters on a table. Two players take turns. On each turn a player takes exactly $1$, $3$ or $4$ counters (no other number is allowed). The player who takes the last counter wins. With best play, who wins: the first player or the second player?`,
          difficulty: 3,
          answer: String.raw`The second player`,
        },
        {
          stem: String.raw`Two players take turns to call out numbers. The first player starts by calling $1$, $2$ or $3$. After that, each player adds $1$, $2$ or $3$ to the last number called and calls out the new total. The player who calls $22$ wins. Which number should the first player call first to be sure of winning?`,
          difficulty: 1,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`There are two piles of counters, one with $7$ counters and one with $10$ counters. Two players take turns. On each turn a player chooses one pile and takes any number of counters from it (at least one). The player who takes the last counter wins. How should the first player start to be sure of winning?`,
          choices: [String.raw`Take $3$ counters from the pile of $7$`, String.raw`Take $3$ counters from the pile of $10$`, String.raw`Take all $7$ counters from the pile of $7$`, String.raw`Take $1$ counter from the pile of $10$`, String.raw`The first player cannot be sure of winning`],
          difficulty: 2,
          answer: String.raw`(B) Take $3$ counters from the pile of $10$`,
        },
        {
          stem: String.raw`A counter is on the bottom-left square of a board with $6$ rows and $8$ columns, as shown. Two players take turns to move the counter one square to the right, one square up, or one square diagonally up and to the right. The player who moves the counter onto the top-right square F wins. With best play, which player wins, and what should the first move be?`,
          figure: {
            type: "plot",
            x: [-0.3, 8.3],
            y: [-0.3, 6.3],
            equal: true,
            axes: false,
            polygons: [
              { points: [[7, 5], [8, 5], [8, 6], [7, 6]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [0, 0], to: [8, 0], tone: "ink" },
              { from: [0, 1], to: [8, 1], tone: "ink" },
              { from: [0, 2], to: [8, 2], tone: "ink" },
              { from: [0, 3], to: [8, 3], tone: "ink" },
              { from: [0, 4], to: [8, 4], tone: "ink" },
              { from: [0, 5], to: [8, 5], tone: "ink" },
              { from: [0, 6], to: [8, 6], tone: "ink" },
              { from: [0, 0], to: [0, 6], tone: "ink" },
              { from: [1, 0], to: [1, 6], tone: "ink" },
              { from: [2, 0], to: [2, 6], tone: "ink" },
              { from: [3, 0], to: [3, 6], tone: "ink" },
              { from: [4, 0], to: [4, 6], tone: "ink" },
              { from: [5, 0], to: [5, 6], tone: "ink" },
              { from: [6, 0], to: [6, 6], tone: "ink" },
              { from: [7, 0], to: [7, 6], tone: "ink" },
              { from: [8, 0], to: [8, 6], tone: "ink" },
            ],
            circles: [
              { c: [0.5, 0.5], r: 0.3, fill: true, tone: "accent" },
            ],
            labels: [
              { x: 7.5, y: 5.5, text: "F", pos: "c", style: "bold" },
            ],
            alt: "A board of 6 rows and 8 columns of squares. A counter sits on the bottom-left square, and the top-right square is shaded and marked F.",
          },
          difficulty: 3,
          answer: String.raw`The first player; move diagonally (up and to the right)`,
        },
        {
          stem: String.raw`There are $30$ counters on a table. Two players take turns. On each turn a player must take exactly $1$, $8$ or $27$ counters (no other number is allowed), and cannot take more counters than there are. The player who takes the last counter wins. How many counters should the first player take on the first turn to be sure of winning?`,
          difficulty: 4,
          answer: String.raw`$8$`,
        },
      ],
    },
    {
      id: "C3-handshake-parity",
      name: String.raw`Handshake counting`,
      tests: String.raw`Questions about who shook hands (or played, or are friends) with whom. Use the fact that the sum of everyone's counts is twice the number of handshakes, and so is even.`,
      questions: [
        {
          stem: String.raw`A club has $5$ members. Is it possible for each member to shake hands with exactly $3$ of the other members? Answer yes or no.`,
          difficulty: 1,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`At a meeting of $15$ people, there were $40$ handshakes in total, and no two people shook hands more than once. Ten of the people shook exactly $5$ hands each. The other five people all shook the same number of hands. How many hands did each of those five people shake?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Mr and Mrs Tan invited two other couples to a party, so there were $6$ people. Some of them shook hands. Nobody shook hands with their own partner, and no two people shook hands more than once. Later, Mr Tan asked each of the other $5$ people how many hands they had shaken, and all $5$ answers were different. How many hands did Mrs Tan shake?`,
          difficulty: 3,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`Five people at a meeting each said how many hands they had shaken. No two people shook hands more than once. Which list of answers is impossible?`,
          choices: [String.raw`$2, 2, 2, 2, 2$`, String.raw`$1, 1, 2, 2, 2$`, String.raw`$3, 3, 2, 2, 2$`, String.raw`$3, 3, 3, 2, 2$`],
          difficulty: 1,
          answer: String.raw`(D) $3, 3, 3, 2, 2$`,
        },
        {
          stem: String.raw`Six people met, and some pairs shook hands, with no pair shaking hands more than once. Five of the people shook $1$, $2$, $2$, $3$ and $4$ hands. The sixth person shook more than $2$ hands. How many hands did the sixth person shake?`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`In a class of $12$ pupils, each pupil has at most $3$ friends in the class (if A is B's friend, then B is A's friend). There are $17$ pairs of friends altogether. What is the smallest possible number of pupils who have exactly $3$ friends?`,
          difficulty: 3,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`A domino set has one tile for every pair of numbers from $0$ to $5$, including doubles such as $3$–$3$, so it has $21$ tiles. The tiles are to be laid in one straight line, end to end, so that touching ends always show the same number. What is the smallest number of tiles that must be left out so that all the other tiles can be laid in such a line?`,
          difficulty: 4,
          answer: String.raw`$2$`,
        },
      ],
    },
    {
      id: "C3-colouring",
      name: String.raw`Covering boards: colouring arguments`,
      tests: String.raw`"Can this board be covered exactly by these tiles?" Count the squares, then colour the board (like a chessboard, or in another pattern) and compare the colours each tile covers. Answer yes or no. The same colouring decides whether a walk can visit every square exactly once.`,
      questions: [
        {
          stem: String.raw`Two corner squares are cut off the top of a $4 \times 4$ board, as shown. Can the remaining $14$ squares be covered exactly by $7$ dominoes, each covering $2$ squares side by side, with no overlaps? Answer yes or no.`,
          figure: {
            type: "plot",
            x: [-0.3, 4.3],
            y: [-0.3, 4.3],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [[1, 3], [2, 3], [2, 4], [1, 4]],
                tone: "ink",
              },
              {
                points: [[2, 3], [3, 3], [3, 4], [2, 4]],
                tone: "ink",
              },
              {
                points: [[0, 2], [1, 2], [1, 3], [0, 3]],
                tone: "ink",
              },
              {
                points: [[1, 2], [2, 2], [2, 3], [1, 3]],
                tone: "ink",
              },
              {
                points: [[2, 2], [3, 2], [3, 3], [2, 3]],
                tone: "ink",
              },
              {
                points: [[3, 2], [4, 2], [4, 3], [3, 3]],
                tone: "ink",
              },
              {
                points: [[0, 1], [1, 1], [1, 2], [0, 2]],
                tone: "ink",
              },
              {
                points: [[1, 1], [2, 1], [2, 2], [1, 2]],
                tone: "ink",
              },
              {
                points: [[2, 1], [3, 1], [3, 2], [2, 2]],
                tone: "ink",
              },
              {
                points: [[3, 1], [4, 1], [4, 2], [3, 2]],
                tone: "ink",
              },
              {
                points: [[0, 0], [1, 0], [1, 1], [0, 1]],
                tone: "ink",
              },
              {
                points: [[1, 0], [2, 0], [2, 1], [1, 1]],
                tone: "ink",
              },
              {
                points: [[2, 0], [3, 0], [3, 1], [2, 1]],
                tone: "ink",
              },
              {
                points: [[3, 0], [4, 0], [4, 1], [3, 1]],
                tone: "ink",
              },
            ],
            alt: "A 4 by 4 board of squares with the top left and top right corner squares missing.",
          },
          difficulty: 1,
          answer: String.raw`Yes`,
        },
        {
          stem: String.raw`Two opposite corner squares are cut off a $6 \times 6$ board, as shown. Can the remaining $34$ squares be covered exactly by $17$ dominoes, each covering $2$ squares side by side, with no overlaps? Answer yes or no.`,
          figure: {
            type: "plot",
            x: [-0.3, 6.3],
            y: [-0.3, 6.3],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [[1, 5], [2, 5], [2, 6], [1, 6]],
                tone: "ink",
              },
              {
                points: [[2, 5], [3, 5], [3, 6], [2, 6]],
                tone: "ink",
              },
              {
                points: [[3, 5], [4, 5], [4, 6], [3, 6]],
                tone: "ink",
              },
              {
                points: [[4, 5], [5, 5], [5, 6], [4, 6]],
                tone: "ink",
              },
              {
                points: [[5, 5], [6, 5], [6, 6], [5, 6]],
                tone: "ink",
              },
              {
                points: [[0, 4], [1, 4], [1, 5], [0, 5]],
                tone: "ink",
              },
              {
                points: [[1, 4], [2, 4], [2, 5], [1, 5]],
                tone: "ink",
              },
              {
                points: [[2, 4], [3, 4], [3, 5], [2, 5]],
                tone: "ink",
              },
              {
                points: [[3, 4], [4, 4], [4, 5], [3, 5]],
                tone: "ink",
              },
              {
                points: [[4, 4], [5, 4], [5, 5], [4, 5]],
                tone: "ink",
              },
              {
                points: [[5, 4], [6, 4], [6, 5], [5, 5]],
                tone: "ink",
              },
              {
                points: [[0, 3], [1, 3], [1, 4], [0, 4]],
                tone: "ink",
              },
              {
                points: [[1, 3], [2, 3], [2, 4], [1, 4]],
                tone: "ink",
              },
              {
                points: [[2, 3], [3, 3], [3, 4], [2, 4]],
                tone: "ink",
              },
              {
                points: [[3, 3], [4, 3], [4, 4], [3, 4]],
                tone: "ink",
              },
              {
                points: [[4, 3], [5, 3], [5, 4], [4, 4]],
                tone: "ink",
              },
              {
                points: [[5, 3], [6, 3], [6, 4], [5, 4]],
                tone: "ink",
              },
              {
                points: [[0, 2], [1, 2], [1, 3], [0, 3]],
                tone: "ink",
              },
              {
                points: [[1, 2], [2, 2], [2, 3], [1, 3]],
                tone: "ink",
              },
              {
                points: [[2, 2], [3, 2], [3, 3], [2, 3]],
                tone: "ink",
              },
              {
                points: [[3, 2], [4, 2], [4, 3], [3, 3]],
                tone: "ink",
              },
              {
                points: [[4, 2], [5, 2], [5, 3], [4, 3]],
                tone: "ink",
              },
              {
                points: [[5, 2], [6, 2], [6, 3], [5, 3]],
                tone: "ink",
              },
              {
                points: [[0, 1], [1, 1], [1, 2], [0, 2]],
                tone: "ink",
              },
              {
                points: [[1, 1], [2, 1], [2, 2], [1, 2]],
                tone: "ink",
              },
              {
                points: [[2, 1], [3, 1], [3, 2], [2, 2]],
                tone: "ink",
              },
              {
                points: [[3, 1], [4, 1], [4, 2], [3, 2]],
                tone: "ink",
              },
              {
                points: [[4, 1], [5, 1], [5, 2], [4, 2]],
                tone: "ink",
              },
              {
                points: [[5, 1], [6, 1], [6, 2], [5, 2]],
                tone: "ink",
              },
              {
                points: [[0, 0], [1, 0], [1, 1], [0, 1]],
                tone: "ink",
              },
              {
                points: [[1, 0], [2, 0], [2, 1], [1, 1]],
                tone: "ink",
              },
              {
                points: [[2, 0], [3, 0], [3, 1], [2, 1]],
                tone: "ink",
              },
              {
                points: [[3, 0], [4, 0], [4, 1], [3, 1]],
                tone: "ink",
              },
              {
                points: [[4, 0], [5, 0], [5, 1], [4, 1]],
                tone: "ink",
              },
            ],
            alt: "A 6 by 6 board of squares with the top left and bottom right corner squares missing.",
          },
          difficulty: 2,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`Can a $6 \times 6$ board be covered exactly by nine $1 \times 4$ tiles (each tile covers 4 squares in a straight line, across or down), with no overlaps and nothing sticking out? Answer yes or no.`,
          figure: {
            type: "plot",
            x: [-0.3, 9.2],
            y: [-0.3, 6.3],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [[0, 5], [1, 5], [1, 6], [0, 6]],
                tone: "ink",
              },
              {
                points: [[1, 5], [2, 5], [2, 6], [1, 6]],
                tone: "ink",
              },
              {
                points: [[2, 5], [3, 5], [3, 6], [2, 6]],
                tone: "ink",
              },
              {
                points: [[3, 5], [4, 5], [4, 6], [3, 6]],
                tone: "ink",
              },
              {
                points: [[4, 5], [5, 5], [5, 6], [4, 6]],
                tone: "ink",
              },
              {
                points: [[5, 5], [6, 5], [6, 6], [5, 6]],
                tone: "ink",
              },
              {
                points: [[0, 4], [1, 4], [1, 5], [0, 5]],
                tone: "ink",
              },
              {
                points: [[1, 4], [2, 4], [2, 5], [1, 5]],
                tone: "ink",
              },
              {
                points: [[2, 4], [3, 4], [3, 5], [2, 5]],
                tone: "ink",
              },
              {
                points: [[3, 4], [4, 4], [4, 5], [3, 5]],
                tone: "ink",
              },
              {
                points: [[4, 4], [5, 4], [5, 5], [4, 5]],
                tone: "ink",
              },
              {
                points: [[5, 4], [6, 4], [6, 5], [5, 5]],
                tone: "ink",
              },
              {
                points: [[0, 3], [1, 3], [1, 4], [0, 4]],
                tone: "ink",
              },
              {
                points: [[1, 3], [2, 3], [2, 4], [1, 4]],
                tone: "ink",
              },
              {
                points: [[2, 3], [3, 3], [3, 4], [2, 4]],
                tone: "ink",
              },
              {
                points: [[3, 3], [4, 3], [4, 4], [3, 4]],
                tone: "ink",
              },
              {
                points: [[4, 3], [5, 3], [5, 4], [4, 4]],
                tone: "ink",
              },
              {
                points: [[5, 3], [6, 3], [6, 4], [5, 4]],
                tone: "ink",
              },
              {
                points: [[0, 2], [1, 2], [1, 3], [0, 3]],
                tone: "ink",
              },
              {
                points: [[1, 2], [2, 2], [2, 3], [1, 3]],
                tone: "ink",
              },
              {
                points: [[2, 2], [3, 2], [3, 3], [2, 3]],
                tone: "ink",
              },
              {
                points: [[3, 2], [4, 2], [4, 3], [3, 3]],
                tone: "ink",
              },
              {
                points: [[4, 2], [5, 2], [5, 3], [4, 3]],
                tone: "ink",
              },
              {
                points: [[5, 2], [6, 2], [6, 3], [5, 3]],
                tone: "ink",
              },
              {
                points: [[0, 1], [1, 1], [1, 2], [0, 2]],
                tone: "ink",
              },
              {
                points: [[1, 1], [2, 1], [2, 2], [1, 2]],
                tone: "ink",
              },
              {
                points: [[2, 1], [3, 1], [3, 2], [2, 2]],
                tone: "ink",
              },
              {
                points: [[3, 1], [4, 1], [4, 2], [3, 2]],
                tone: "ink",
              },
              {
                points: [[4, 1], [5, 1], [5, 2], [4, 2]],
                tone: "ink",
              },
              {
                points: [[5, 1], [6, 1], [6, 2], [5, 2]],
                tone: "ink",
              },
              {
                points: [[0, 0], [1, 0], [1, 1], [0, 1]],
                tone: "ink",
              },
              {
                points: [[1, 0], [2, 0], [2, 1], [1, 1]],
                tone: "ink",
              },
              {
                points: [[2, 0], [3, 0], [3, 1], [2, 1]],
                tone: "ink",
              },
              {
                points: [[3, 0], [4, 0], [4, 1], [3, 1]],
                tone: "ink",
              },
              {
                points: [[4, 0], [5, 0], [5, 1], [4, 1]],
                tone: "ink",
              },
              {
                points: [[5, 0], [6, 0], [6, 1], [5, 1]],
                tone: "ink",
              },
              {
                points: [[7.5, 1], [8.5, 1], [8.5, 2], [7.5, 2]],
                fill: true,
                tone: "accent",
              },
              {
                points: [[7.5, 2], [8.5, 2], [8.5, 3], [7.5, 3]],
                fill: true,
                tone: "accent",
              },
              {
                points: [[7.5, 3], [8.5, 3], [8.5, 4], [7.5, 4]],
                fill: true,
                tone: "accent",
              },
              {
                points: [[7.5, 4], [8.5, 4], [8.5, 5], [7.5, 5]],
                fill: true,
                tone: "accent",
              },
            ],
            labels: [
              { x: 8, y: 0.6, text: "1 × 4 tile", pos: "c", style: "small" },
            ],
            alt: "A 6 by 6 board of squares, and beside it a tile made of 4 squares in a line.",
          },
          difficulty: 3,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`Which of these boards can be covered exactly by dominoes ($1 \times 2$ tiles), with no overlaps and nothing sticking out?`,
          choices: [String.raw`$4 \times 7$`, String.raw`$5 \times 7$`, String.raw`$5 \times 9$`, String.raw`$7 \times 7$`],
          difficulty: 1,
          answer: String.raw`(A) $4 \times 7$`,
        },
        {
          stem: String.raw`A bug sits on the bottom-left square S of the $4 \times 4$ board shown. Each minute it walks onto a square that shares a side with the square it is on. Can it visit every square of the board exactly once and finish on the top-right square F? Answer yes or no.`,
          figure: {
            type: "plot",
            x: [-0.3, 4.3],
            y: [-0.3, 4.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [4, 0], tone: "ink" },
              { from: [0, 1], to: [4, 1], tone: "ink" },
              { from: [0, 2], to: [4, 2], tone: "ink" },
              { from: [0, 3], to: [4, 3], tone: "ink" },
              { from: [0, 4], to: [4, 4], tone: "ink" },
              { from: [0, 0], to: [0, 4], tone: "ink" },
              { from: [1, 0], to: [1, 4], tone: "ink" },
              { from: [2, 0], to: [2, 4], tone: "ink" },
              { from: [3, 0], to: [3, 4], tone: "ink" },
              { from: [4, 0], to: [4, 4], tone: "ink" },
            ],
            labels: [
              { x: 0.5, y: 0.5, text: "S", pos: "c", style: "bold" },
              { x: 3.5, y: 3.5, text: "F", pos: "c", style: "bold" },
            ],
            alt: "A 4 by 4 board. The bottom-left square is marked S and the top-right square is marked F.",
          },
          difficulty: 2,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`One square is cut out of a $4 \times 4$ board, as shown. Can the remaining $15$ squares be covered exactly by five $1 \times 3$ tiles (each tile covers $3$ squares in a straight line, across or down), with no overlaps? Answer yes or no.`,
          figure: {
            type: "plot",
            x: [-0.3, 7.3],
            y: [-0.3, 4.3],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [1, 0], [1, 1], [0, 1]], tone: "ink" },
              { points: [[2, 0], [3, 0], [3, 1], [2, 1]], tone: "ink" },
              { points: [[3, 0], [4, 0], [4, 1], [3, 1]], tone: "ink" },
              { points: [[0, 1], [1, 1], [1, 2], [0, 2]], tone: "ink" },
              { points: [[1, 1], [2, 1], [2, 2], [1, 2]], tone: "ink" },
              { points: [[2, 1], [3, 1], [3, 2], [2, 2]], tone: "ink" },
              { points: [[3, 1], [4, 1], [4, 2], [3, 2]], tone: "ink" },
              { points: [[0, 2], [1, 2], [1, 3], [0, 3]], tone: "ink" },
              { points: [[1, 2], [2, 2], [2, 3], [1, 3]], tone: "ink" },
              { points: [[2, 2], [3, 2], [3, 3], [2, 3]], tone: "ink" },
              { points: [[3, 2], [4, 2], [4, 3], [3, 3]], tone: "ink" },
              { points: [[0, 3], [1, 3], [1, 4], [0, 4]], tone: "ink" },
              { points: [[1, 3], [2, 3], [2, 4], [1, 4]], tone: "ink" },
              { points: [[2, 3], [3, 3], [3, 4], [2, 4]], tone: "ink" },
              { points: [[3, 3], [4, 3], [4, 4], [3, 4]], tone: "ink" },
              { points: [[5.5, 1], [6.5, 1], [6.5, 2], [5.5, 2]], fill: true, tone: "accent" },
              { points: [[5.5, 2], [6.5, 2], [6.5, 3], [5.5, 3]], fill: true, tone: "accent" },
              { points: [[5.5, 3], [6.5, 3], [6.5, 4], [5.5, 4]], fill: true, tone: "accent" },
            ],
            labels: [
              { x: 6, y: 0.5, text: "1 × 3 tile", pos: "c", style: "small" },
            ],
            alt: "A 4 by 4 board with the second square from the left in the bottom row cut out, and beside it a tile made of 3 squares in a line.",
          },
          difficulty: 3,
          answer: String.raw`No`,
        },
        {
          stem: String.raw`A bug chooses a starting square on the $5 \times 5$ board shown. Each minute it walks onto a square that shares a side with the square it is on, and it must visit every square of the board exactly once. From how many of the $25$ squares can it start?`,
          figure: {
            type: "plot",
            x: [-0.3, 5.3],
            y: [-0.3, 5.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [0, 1], to: [5, 1], tone: "ink" },
              { from: [0, 2], to: [5, 2], tone: "ink" },
              { from: [0, 3], to: [5, 3], tone: "ink" },
              { from: [0, 4], to: [5, 4], tone: "ink" },
              { from: [0, 5], to: [5, 5], tone: "ink" },
              { from: [0, 0], to: [0, 5], tone: "ink" },
              { from: [1, 0], to: [1, 5], tone: "ink" },
              { from: [2, 0], to: [2, 5], tone: "ink" },
              { from: [3, 0], to: [3, 5], tone: "ink" },
              { from: [4, 0], to: [4, 5], tone: "ink" },
              { from: [5, 0], to: [5, 5], tone: "ink" },
            ],
            alt: "A 5 by 5 board of squares.",
          },
          difficulty: 4,
          answer: String.raw`$13$`,
        },
      ],
    },
  ],
});
