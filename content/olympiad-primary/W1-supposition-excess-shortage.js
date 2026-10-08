H2.addTopic({
  id: "W1",
  title: "Supposition and Excess–Shortage",
  summary: String.raw`Solve "two kinds of things" problems by pretending everything is the same kind and then fixing the difference, and solve sharing problems by comparing what is left over or short.`,
  concepts: [
    {
      title: String.raw`Supposition: pretend they are all the same kind`,
      body: String.raw`When there are two kinds of things and you know the **total number** and the **total of something else** (legs, wheels, money), pretend they are **all the first kind**.

1. Work out the total you would get.
2. Find how far you are from the real total.
3. Each time you swap one thing for the other kind, the total changes by the **difference per item**. Divide to find how many swaps.

*Example.* 8 bicycles and tricycles have 19 wheels. If all were bicycles: $8 \times 2 = 16$ wheels. We are $3$ wheels short. Each tricycle has $1$ extra wheel, so there are $3$ tricycles and $5$ bicycles.`,
      figure: {
        type: "plot",
        x: [-0.8, 8.8],
        y: [-1.5, 4.1],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [8, 0], [8, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[5, 2], [8, 2], [8, 3], [5, 3]], fill: true, tone: "warn" },
        ],
        segments: [
          { from: [1, 0], to: [1, 2], tone: "muted", thin: true },
          { from: [2, 0], to: [2, 2], tone: "muted", thin: true },
          { from: [3, 0], to: [3, 2], tone: "muted", thin: true },
          { from: [4, 0], to: [4, 2], tone: "muted", thin: true },
          { from: [5, 0], to: [5, 2], tone: "muted", thin: true },
          { from: [6, 0], to: [6, 3], tone: "muted", thin: true },
          { from: [7, 0], to: [7, 3], tone: "muted", thin: true },
          { from: [0, -0.5], to: [8, -0.5], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "8 vehicles", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 2.5, y: 2, text: "2 wheels each", pos: "n" },
          { x: 6.5, y: 3, text: "3 extra wheels", pos: "n", tone: "warn" },
        ],
        caption: String.raw`Each column is one vehicle. Pretend all are bicycles (2 wheels each). The 3 missing wheels sit on top of the tricycles.`,
        alt: "A rectangle 8 columns wide and 2 high stands for 8 bicycles with 16 wheels. A strip 1 high sits on top of the last 3 columns, showing the 3 extra wheels of the tricycles.",
      },
    },
    {
      title: String.raw`Check with a table`,
      body: String.raw`If you are not sure, make a table. Start from "all of one kind" and change **one at a time**. The total changes by the same amount each step, so you can jump straight to the right row.

| Bicycles | Tricycles | Wheels |
|---|---|---|
| 8 | 0 | 16 |
| 7 | 1 | 17 |
| 6 | 2 | 18 |
| 5 | 3 | 19 ✓ |

Each row adds $1$ wheel, so from $16$ to $19$ takes $3$ steps.`,
    },
    {
      title: String.raw`Extra items or groups: remove them first`,
      body: String.raw`- If one kind has **some more** than the other, take the extras away first. What is left can be put into equal **pairs**.
- If one kind is **twice as many** (or 3 times as many) as another, bundle them into **groups**, then use supposition on the groups.

*Example.* Cars (4 wheels) and bikes (2 wheels): there are 5 more bikes than cars and 46 wheels. Take away the 5 extra bikes ($10$ wheels). The other $36$ wheels come in car-and-bike pairs of $6$ wheels, so there are $6$ pairs: $6$ cars and $11$ bikes.`,
    },
    {
      title: String.raw`Scoring with penalties`,
      body: String.raw`When a right answer earns marks and a wrong answer **loses** marks, suppose **everything was right** first.

A wrong answer does not just miss the marks for a right answer, it also loses the penalty. So each wrong answer costs **(marks for right) + (penalty)** compared with full marks.

*Example.* 10 questions, $+3$ for right, $-1$ for wrong, score $22$. Full marks would be $30$. We lost $8$. Each wrong answer costs $3 + 1 = 4$, so $2$ were wrong.

If questions can be left **blank** (0 marks), there may be more than one possibility. List them carefully.`,
    },
    {
      title: String.raw`Excess and shortage`,
      body: String.raw`Sharing the **same pile** in two ways, one leaving some **left over** (excess) and one being **short**. The change in total comes from every person getting a bit more.

- One excess, one shortage: number of people $=$ (excess $+$ shortage) $\div$ (difference per person).
- Both excess: (bigger excess $-$ smaller excess) $\div$ difference per person.
- Both short: (bigger shortage $-$ smaller shortage) $\div$ difference per person.

*Example.* 5 sweets each leaves 4. 6 sweets each is 3 short. Giving each child 1 more sweet needs $4 + 3 = 7$ more sweets, so there are $7$ children and $7 \times 5 + 4 = 39$ sweets.`,
      figure: {
        type: "plot",
        x: [-7, 50],
        y: [-3.5, 15.5],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 9], [35, 9], [35, 13], [0, 13]], fill: true, tone: "accent" },
          { points: [[35, 9], [39, 9], [39, 13], [35, 13]], fill: true, tone: "good" },
          { points: [[0, 2.5], [39, 2.5], [39, 6.5], [0, 6.5]], fill: true, tone: "accent" },
          { points: [[39, 2.5], [42, 2.5], [42, 6.5], [39, 6.5]], dashed: true, tone: "warn" },
        ],
        segments: [
          { from: [5, 9], to: [5, 13], tone: "ink", thin: true },
          { from: [10, 9], to: [10, 13], tone: "ink", thin: true },
          { from: [15, 9], to: [15, 13], tone: "ink", thin: true },
          { from: [20, 9], to: [20, 13], tone: "ink", thin: true },
          { from: [25, 9], to: [25, 13], tone: "ink", thin: true },
          { from: [30, 9], to: [30, 13], tone: "ink", thin: true },
          { from: [6, 2.5], to: [6, 6.5], tone: "ink", thin: true },
          { from: [12, 2.5], to: [12, 6.5], tone: "ink", thin: true },
          { from: [18, 2.5], to: [18, 6.5], tone: "ink", thin: true },
          { from: [24, 2.5], to: [24, 6.5], tone: "ink", thin: true },
          { from: [30, 2.5], to: [30, 6.5], tone: "ink", thin: true },
          { from: [36, 2.5], to: [36, 6.5], tone: "ink", thin: true },
          { from: [39, 0.8], to: [39, 14.5], tone: "muted", dashed: true },
          { from: [0, 0.8], to: [39, 0.8], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "all the sweets", pos: "s", style: "plain" },
        ],
        labels: [
          { x: -0.5, y: 11, text: "5 each", pos: "w" },
          { x: -0.5, y: 4.5, text: "6 each", pos: "w" },
          { x: 37, y: 13, text: "4 left", pos: "n", tone: "good" },
          { x: 42, y: 4.5, text: "3 short", pos: "e", tone: "warn" },
        ],
        caption: String.raw`Each box is one child's share. Both rows use the same pile of sweets. Going from 5 to 6 each uses the 4 left over and needs 3 more.`,
        alt: "Two bars of the same pile of sweets. Top: 7 boxes of 5 with 4 left over. Bottom: 7 boxes of 6 that go 3 past the end of the pile.",
      },
    },
    {
      title: String.raw`Supposition works for any two rates`,
      body: String.raw`The same idea works whenever there are two "rates": marks per pupil, metres per minute, dollars per ticket.

*Example.* Tom walked and ran for 10 minutes and covered $1600$ m. He walks $100$ m per minute and runs $200$ m per minute. Suppose he walked all the time: $1000$ m. He is $600$ m short. Each minute of running instead of walking adds $100$ m, so he ran for $6$ minutes.

For averages: suppose **every** person had the lower average, then share out the extra.`,
    },
  ],
  archetypes: [
    {
      id: "W1-heads-and-legs",
      name: String.raw`Heads and legs`,
      tests: String.raw`Animals (or vehicles) of two or three kinds with a given number of heads and a total number of legs (or wheels). Recognise it by "altogether there are … heads and … legs".`,
      questions: [
        {
          stem: String.raw`A farm has some chickens and goats. There are $20$ heads and $56$ legs altogether. How many goats are there?`,
          difficulty: 1,
          answer: String.raw`8 goats`,
        },
        {
          stem: String.raw`In a pet shop there are $12$ more chickens than rabbits. The animals have $120$ legs altogether. How many rabbits are there?`,
          difficulty: 2,
          choices: [String.raw`(A) $14$`, String.raw`(B) $16$`, String.raw`(C) $18$`, String.raw`(D) $20$`, String.raw`(E) $28$`],
          answer: String.raw`(B) $16$`,
        },
        {
          stem: String.raw`A nature display has $21$ creatures: spiders, dragonflies and cicadas. A spider has $8$ legs and no wings. A dragonfly has $6$ legs and $2$ pairs of wings. A cicada has $6$ legs and $1$ pair of wings. Altogether there are $140$ legs and $20$ pairs of wings. How many dragonflies are there?`,
          difficulty: 3,
          answer: String.raw`6 dragonflies`,
        },
      ],
    },
    {
      id: "W1-coins-of-two-values",
      name: String.raw`Coins and notes of different values`,
      tests: String.raw`A number of coins or notes of two or three values with a known total value. Recognise it by "some 20-cent and 50-cent coins … worth \$… altogether".`,
      questions: [
        {
          stem: String.raw`Mina has $25$ coins. Some are $20$-cent coins and the rest are $50$-cent coins. Their total value is \$$8.60$. How many $50$-cent coins does she have?`,
          difficulty: 1,
          answer: String.raw`12`,
        },
        {
          stem: String.raw`Amy has some $10$-cent coins and $50$-cent coins. She has $6$ more $10$-cent coins than $50$-cent coins. The total value of her coins is \$$5.40$. How many coins does she have altogether?`,
          difficulty: 2,
          answer: String.raw`22 coins`,
        },
        {
          stem: String.raw`Ben has $50$ coins made up of $10$-cent, $20$-cent and $50$-cent coins. Their total value is \$$12$. He has twice as many $20$-cent coins as $10$-cent coins. How many $50$-cent coins does he have?`,
          difficulty: 3,
          answer: String.raw`11`,
        },
      ],
    },
    {
      id: "W1-scoring-with-penalties",
      name: String.raw`Scoring with penalties`,
      tests: String.raw`Marks are gained for each success and lost for each failure (quizzes, games, deliveries). Recognise it by "… marks for each correct answer and … marks taken away for each wrong answer".`,
      questions: [
        {
          stem: String.raw`A quiz has $20$ questions. Each correct answer scores $5$ marks and each wrong answer loses $2$ marks. Jia Hui answered all the questions and scored $72$ marks. How many questions did she answer correctly?`,
          difficulty: 1,
          choices: [String.raw`(A) $4$`, String.raw`(B) $14$`, String.raw`(C) $15$`, String.raw`(D) $16$`, String.raw`(E) $18$`],
          answer: String.raw`(D) $16$`,
        },
        {
          stem: String.raw`A worker delivers $200$ glasses. He is paid \$$6$ for each glass that arrives safely, but he must pay \$$10$ for each glass that breaks. He receives \$$1104$ in total. How many glasses broke?`,
          difficulty: 2,
          answer: String.raw`6`,
        },
        {
          stem: String.raw`A contest has $20$ questions. A correct answer scores $5$ marks, a wrong answer loses $2$ marks and an unanswered question scores $0$. Ali and Bala both scored $58$ marks, but Ali left more questions unanswered than Bala. How many more questions did Bala answer correctly than Ali?`,
          difficulty: 3,
          answer: String.raw`2`,
        },
      ],
    },
    {
      id: "W1-excess-and-shortage",
      name: String.raw`Excess and shortage`,
      tests: String.raw`The same number of items is shared in two different ways, with some left over or some short each time. Recognise it by "if each … gets 6, there are 10 left; if each gets 8, there are 4 too few".`,
      questions: [
        {
          stem: String.raw`A teacher shares some pencils among her pupils. If each pupil gets $6$ pencils, there are $10$ pencils left over. If each pupil gets $8$ pencils, she is short of $4$ pencils. How many pencils does she have?`,
          difficulty: 1,
          answer: String.raw`52 pencils`,
        },
        {
          stem: String.raw`Some pupils sit on benches. If $4$ pupils sit on each bench, $6$ pupils have no seat. If $6$ pupils sit on each bench, every bench used is full and $2$ benches are left empty. How many pupils are there?`,
          difficulty: 2,
          choices: [String.raw`(A) $36$`, String.raw`(B) $40$`, String.raw`(C) $42$`, String.raw`(D) $48$`, String.raw`(E) $54$`],
          answer: String.raw`(C) $42$`,
        },
        {
          stem: String.raw`Some apples are packed into boxes. If $8$ apples are put in each box, $5$ apples are left over. If $10$ apples are put in each box, then one box has only $3$ apples, two boxes are empty and all the other boxes are full. How many apples are there?`,
          difficulty: 3,
          answer: String.raw`133 apples`,
        },
      ],
    },
    {
      id: "W1-tickets-and-prices",
      name: String.raw`Tickets, prices and swapped orders`,
      tests: String.raw`Items at two or more prices with a known number bought and a known total cost, including orders where the numbers were swapped and choosing the cheapest mix. Recognise it by ticket prices, boat or bus sizes, or "he mixed up the numbers".`,
      questions: [
        {
          stem: String.raw`Adult tickets for a show cost \$$12$ each and child tickets cost \$$7$ each. $30$ tickets were sold for \$$295$. How many adult tickets were sold?`,
          difficulty: 1,
          answer: String.raw`17`,
        },
        {
          stem: String.raw`Pens cost \$$3$ each and notebooks cost \$$5$ each. Ravi planned to buy some pens and some notebooks for \$$68$. The cashier mixed up the two numbers, so Ravi got the planned number of notebooks as pens and the planned number of pens as notebooks. He paid \$$60$. How many notebooks did Ravi plan to buy?`,
          difficulty: 2,
          choices: [String.raw`(A) $6$`, String.raw`(B) $8$`, String.raw`(C) $10$`, String.raw`(D) $12$`],
          answer: String.raw`(C) $10$`,
        },
        {
          stem: String.raw`A group of $38$ pupils hires boats. A big boat holds $6$ people and costs \$$40$ to hire. A small boat holds $4$ people and costs \$$30$ to hire. A boat may carry fewer people than it holds. What is the least total cost so that every pupil has a seat?`,
          difficulty: 3,
          answer: String.raw`\$$260$`,
        },
      ],
    },
    {
      id: "W1-two-rates",
      name: String.raw`Two rates: speeds and averages`,
      tests: String.raw`Supposition or excess–shortage with rates such as metres per minute or average marks. Recognise it by two speeds over a known total time, two group averages with an overall average, or "arrives 5 minutes late … 3 minutes early".`,
      questions: [
        {
          stem: String.raw`Jun walked and jogged for $50$ minutes and covered $6.4$ km. He walks at $80$ m per minute and jogs at $160$ m per minute. For how many minutes did he jog?`,
          difficulty: 1,
          answer: String.raw`30 minutes`,
        },
        {
          stem: String.raw`A class of $40$ pupils took a test. The average mark of the whole class was $68$. The boys' average was $62$ and the girls' average was $72$. How many girls are in the class?`,
          difficulty: 2,
          choices: [String.raw`(A) $16$`, String.raw`(B) $20$`, String.raw`(C) $24$`, String.raw`(D) $26$`],
          answer: String.raw`(C) $24$`,
        },
        {
          stem: String.raw`Lina walks from home to school. If she walks at $60$ m per minute, she arrives $5$ minutes late. If she walks at $80$ m per minute, she arrives $3$ minutes early. How far is the school from her home?`,
          difficulty: 3,
          answer: String.raw`1920 m`,
        },
      ],
    },
  ],
});
