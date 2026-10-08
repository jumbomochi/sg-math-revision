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
      ],
    },
    {
      id: "C3-colouring",
      name: String.raw`Covering boards: colouring arguments`,
      tests: String.raw`"Can this board be covered exactly by these tiles?" Count the squares, then colour the board (like a chessboard, or in another pattern) and compare the colours each tile covers. Answer yes or no.`,
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
      ],
    },
  ],
});
