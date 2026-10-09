H2.addTopic({
  id: "C4",
  title: "Chance and Probability",
  summary: String.raw`List all the outcomes, write a chance as a fraction, use tables for two dice or spinners, draw from bags with and without putting back, decide whether a game is fair, and predict about how many times something will happen.`,
  concepts: [
    {
      title: String.raw`List every outcome in order`,
      body: String.raw`An **outcome** is one possible result. Before finding a chance, list all the outcomes in an organised way so none is missed.

- For coins, use a **tree**: each toss splits every branch into H and T. $2$ coins give $2 \times 2 = 4$ outcomes, $3$ coins give $8$.
- HT (head first, then tail) and TH are **different** outcomes. With two dice, (2, 5) and (5, 2) are different too. Think of one red die and one blue die.
- For several dice, the number of outcomes multiplies: $1$ die has $6$, $2$ dice have $36$.`,
      figure: {
        type: "plot",
        x: [-0.6, 7.6],
        y: [-0.1, 4.3],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 2.1], to: [2.4, 3.2], tone: "ink", thin: true },
          { from: [0, 2.1], to: [2.4, 1.0], tone: "ink", thin: true },
          { from: [2.4, 3.2], to: [4.8, 3.8], tone: "muted", thin: true },
          { from: [2.4, 3.2], to: [4.8, 2.6], tone: "muted", thin: true },
          { from: [2.4, 1.0], to: [4.8, 1.6], tone: "muted", thin: true },
          { from: [2.4, 1.0], to: [4.8, 0.4], tone: "muted", thin: true },
        ],
        points: [{ x: 0, y: 2.1 }],
        labels: [
          { x: 2.4, y: 3.2, text: "H", pos: "n", style: "bold" },
          { x: 2.4, y: 1.0, text: "T", pos: "s", style: "bold" },
          { x: 4.8, y: 3.8, text: "H", pos: "e", style: "bold" },
          { x: 4.8, y: 2.6, text: "T", pos: "e", style: "bold" },
          { x: 4.8, y: 1.6, text: "H", pos: "e", style: "bold" },
          { x: 4.8, y: 0.4, text: "T", pos: "e", style: "bold" },
          { x: 6.6, y: 3.8, text: "HH", style: "small" },
          { x: 6.6, y: 2.6, text: "HT", style: "small" },
          { x: 6.6, y: 1.6, text: "TH", style: "small" },
          { x: 6.6, y: 0.4, text: "TT", style: "small" },
          { x: 2.4, y: 4.2, text: "1st toss", style: "small" },
          { x: 4.8, y: 4.2, text: "2nd toss", style: "small" },
        ],
        caption: String.raw`Two coins: $2 \times 2 = 4$ equally likely outcomes.`,
        alt: "A tree diagram. The first toss branches into H and T; each of these branches into H and T again, giving the outcomes HH, HT, TH and TT.",
      },
    },
    {
      title: String.raw`Probability is a fraction`,
      body: String.raw`When all the outcomes are **equally likely**:

$$\text{probability} = \frac{\text{number of outcomes you want}}{\text{total number of outcomes}}$$

- Example: roll a die. Numbers greater than $4$ are $5$ and $6$, so the probability is $\tfrac{2}{6} = \tfrac13$.
- A probability is from $0$ (**impossible**) to $1$ (**certain**). Always simplify the fraction.
- **Not happening**: probability that it does not happen $= 1 -$ probability that it happens. The chance of **not** rolling a $6$ is $1 - \tfrac16 = \tfrac56$.`,
    },
    {
      title: String.raw`Two dice or two spinners: make a table`,
      body: String.raw`Put the first spinner (or die) down the side and the second along the top. Every box is one equally likely outcome.

Example: two spinners, each numbered $1$, $2$, $3$. Table of totals:

| $+$ | $1$ | $2$ | $3$ |
| $1$ | $2$ | $3$ | $4$ |
| $2$ | $3$ | $4$ | $5$ |
| $3$ | $4$ | $5$ | $6$ |

There are $3 \times 3 = 9$ boxes. A total of $4$ appears $3$ times, so P(total $4$) $= \tfrac39 = \tfrac13$. For two dice the table has $6 \times 6 = 36$ boxes.`,
    },
    {
      title: String.raw`Unequal spinners: count in equal parts`,
      body: String.raw`If a spinner's parts are **not** the same size, split it into equal parts first.

- A spinner that is half red and half blue is like $2$ equal parts: $1$ red, $1$ blue.
- A spinner that is $\tfrac12$ red, $\tfrac13$ blue and $\tfrac16$ green is like $6$ equal parts: $3$ red, $2$ blue, $1$ green.
- Then list or tabulate the equal parts as usual.`,
      figure: {
        type: "plot",
        x: [-3.2, 3.2],
        y: [-2.4, 2.4],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [0, 2], [-0.209, 1.989], [-0.416, 1.956], [-0.618, 1.902], [-0.813, 1.827], [-1, 1.732], [-1.176, 1.618], [-1.338, 1.486], [-1.486, 1.338], [-1.618, 1.176], [-1.732, 1], [-1.827, 0.813], [-1.902, 0.618], [-1.956, 0.416], [-1.989, 0.209], [-2, 0], [-1.989, -0.209], [-1.956, -0.416], [-1.902, -0.618], [-1.827, -0.813], [-1.732, -1], [-1.618, -1.176], [-1.486, -1.338], [-1.338, -1.486], [-1.176, -1.618], [-1, -1.732], [-0.813, -1.827], [-0.618, -1.902], [-0.416, -1.956], [-0.209, -1.989], [0, -2]], fill: true, tone: "warn" },
          { points: [[0, 0], [1.732, -1], [1.827, -0.813], [1.902, -0.618], [1.956, -0.416], [1.989, -0.209], [2, 0], [1.989, 0.209], [1.956, 0.416], [1.902, 0.618], [1.827, 0.813], [1.732, 1], [1.618, 1.176], [1.486, 1.338], [1.338, 1.486], [1.176, 1.618], [1, 1.732], [0.813, 1.827], [0.618, 1.902], [0.416, 1.956], [0.209, 1.989], [0, 2]], fill: true, tone: "accent" },
          { points: [[0, 0], [0, -2], [0.209, -1.989], [0.416, -1.956], [0.618, -1.902], [0.813, -1.827], [1, -1.732], [1.176, -1.618], [1.338, -1.486], [1.486, -1.338], [1.618, -1.176], [1.732, -1]], fill: true, tone: "good" },
        ],
        circles: [{ c: [0, 0], r: 2, tone: "ink" }],
        segments: [
          { from: [0, 0], to: [-1.732, 1], tone: "muted", dashed: true },
          { from: [0, 0], to: [-1.732, -1], tone: "muted", dashed: true },
          { from: [0, 0], to: [1.732, 1], tone: "muted", dashed: true },
        ],
        labels: [
          { x: -0.6, y: 1.04, text: "R" },
          { x: -1.2, y: 0, text: "R" },
          { x: -0.6, y: -1.04, text: "R" },
          { x: 1.2, y: 0, text: "B" },
          { x: 0.6, y: 1.04, text: "B" },
          { x: 0.6, y: -1.04, text: "G" },
        ],
        caption: String.raw`Half red, a third blue, a sixth green: think of $6$ equal parts R, R, R, B, B, G.`,
        alt: "A circular spinner. The left half is red, split by dashed lines into three equal parts marked R. The blue third is split into two equal parts marked B, and the green sixth is one part marked G.",
      },
    },
    {
      title: String.raw`Drawing from a bag: put back or not?`,
      body: String.raw`- **With replacement** (the ball is put back): the bag is the same for every draw.
- **Without replacement** (the ball is kept): the bag has one ball fewer for the next draw, and one fewer of that colour.
- For two draws in a row, **multiply** the chances: example, a bag has $3$ red and $1$ blue. Take two balls without putting back. P(red, then red) $= \tfrac34 \times \tfrac23 = \tfrac12$.
- Or count pairs: there are $4 \times 3 = 12$ ordered ways to take two of the $4$ balls, and $3 \times 2 = 6$ of them are red then red.`,
    },
    {
      title: String.raw`Fair games and comparing chances`,
      body: String.raw`- A game is **fair** if every player has the **same chance** of winning.
- If one player is less likely to win, the game can be made fair with points: (chance of winning) $\times$ (points per win) must be the same for each player. Example: Ali wins with chance $\tfrac13$, Ben with chance $\tfrac23$. If Ben gets $1$ point a win, Ali needs $2$ points a win.
- To **compare chances**, write them with the same denominator (or as decimals): $\tfrac25 = \tfrac{14}{35}$ and $\tfrac37 = \tfrac{15}{35}$, so $\tfrac37$ is the better chance.`,
    },
    {
      title: String.raw`About how many times?`,
      body: String.raw`If something has probability $p$ and you try it $n$ times, you **expect** it to happen **about** $p \times n$ times.

- Example: toss a coin $50$ times. Expect about $\tfrac12 \times 50 = 25$ heads. You might get $23$ or $27$, but about $25$ is the best guess.
- It works backwards too: if a ball drawn (and put back) is red $1$ time in $4$, then about $\tfrac14$ of the balls in the bag are red.
- In a game, multiply each prize by the number of times you expect to win it, to see who gains money in the long run.`,
    },
  ],
  archetypes: [
    {
      id: "C4-listing-outcomes",
      name: String.raw`Listing outcomes`,
      tests: String.raw`"How many possible results / in how many ways ...?" for coins, dice or spinners. Make an organised list, a tree or a table, and remember that order matters (first die, second die).`,
      questions: [
        {
          stem: String.raw`Ali tosses a coin three times and writes down the results in order, for example HTH. Of all the possible results, how many have exactly two heads?`,
          difficulty: 1,
          choices: [String.raw`$2$`, String.raw`$3$`, String.raw`$4$`, String.raw`$6$`],
          answer: String.raw`(B) $3$`,
        },
        {
          stem: String.raw`A red die and a blue die are rolled. In how many different ways can the total of the two numbers be $9$?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Spinner A is numbered $1$, $2$, $3$, $4$ and spinner B is numbered $2$, $4$, $6$. Both are spun and the two numbers are multiplied. How many different products are possible?`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`A die is rolled three times and the three numbers are written down in order. How many of the possible results have a total of $10$?`,
          difficulty: 2,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`A coin is tossed $6$ times and the results are written down in order, for example HTTHTT. How many of the possible results never have two heads one right after the other?`,
          difficulty: 3,
          answer: String.raw`$21$`,
        },
        {
          stem: String.raw`A die is rolled three times and the numbers are written down in order. In how many of the possible results is each number bigger than the one before it?`,
          difficulty: 3,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A die is rolled three times and the numbers are written down in order, for example $2, 5, 3$. In how many of the possible results is one of the three numbers equal to the sum of the other two?`,
          difficulty: 4,
          answer: String.raw`$45$`,
        },
      ],
    },
    {
      id: "C4-probability-fraction",
      name: String.raw`Probability as a fraction`,
      tests: String.raw`One card, letter, number or ball is picked at random. Count the outcomes you want and the total, then simplify. Harder ones work backwards from a probability to the number of balls, or need careful counting of numbers.`,
      questions: [
        {
          stem: String.raw`Twenty cards are numbered $1$ to $20$. One card is picked at random. What is the probability that its number is a multiple of $3$?`,
          difficulty: 1,
          choices: [String.raw`$\tfrac13$`, String.raw`$\tfrac{3}{10}$`, String.raw`$\tfrac14$`, String.raw`$\tfrac{7}{20}$`],
          answer: String.raw`(B) $\tfrac{3}{10}$`,
        },
        {
          stem: String.raw`Each letter of the word SINGAPORE is written on a card. One card is picked at random. What is the probability that it shows a vowel (A, E, I, O or U)?`,
          difficulty: 1,
          answer: String.raw`$\tfrac49$`,
        },
        {
          stem: String.raw`A whole number from $1$ to $50$ is chosen at random. What is the probability that the sum of its digits is $5$?`,
          difficulty: 2,
          answer: String.raw`$\tfrac{3}{25}$`,
        },
        {
          stem: String.raw`A bag contains only red, blue and green balls. A ball is taken at random. The probability that it is red is $\tfrac13$ and the probability that it is blue is $\tfrac14$. There are $10$ green balls. How many balls are in the bag?`,
          difficulty: 2,
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`A bag contains red and white balls. The probability of taking a red ball at random is $\tfrac25$. After $6$ more red balls are put into the bag, the probability becomes $\tfrac12$. How many balls were in the bag at first?`,
          difficulty: 3,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`A three-digit number (from $100$ to $999$) is chosen at random. What is the probability that its three digits are all different?`,
          difficulty: 3,
          answer: String.raw`$\tfrac{18}{25}$`,
        },
        {
          stem: String.raw`A whole number from $1$ to $999$ is chosen at random. What is the probability that the sum of its digits is $10$?`,
          difficulty: 4,
          answer: String.raw`$\tfrac{7}{111}$`,
        },
      ],
    },
    {
      id: "C4-dice-spinners",
      name: String.raw`Two dice and two spinners`,
      tests: String.raw`Two (or three) dice or spinners are used together. Draw a table of all the equally likely outcomes, or split an uneven spinner into equal parts first.`,
      questions: [
        {
          stem: String.raw`Two dice are rolled. What is the probability that the total is $7$?`,
          difficulty: 1,
          choices: [String.raw`$\tfrac{1}{12}$`, String.raw`$\tfrac{1}{11}$`, String.raw`$\tfrac{5}{36}$`, String.raw`$\tfrac16$`],
          answer: String.raw`(D) $\tfrac16$`,
        },
        {
          stem: String.raw`Spinner P has $4$ equal parts numbered $1$ to $4$. Spinner Q has $3$ equal parts numbered $1$ to $3$. Both are spun and the two numbers are multiplied. What is the probability that the product is even?`,
          difficulty: 1,
          answer: String.raw`$\tfrac23$`,
        },
        {
          stem: String.raw`Two dice are rolled. What is the probability that the difference between the two numbers is $3$ or more?`,
          difficulty: 2,
          answer: String.raw`$\tfrac13$`,
        },
        {
          stem: String.raw`Die A is an ordinary die. Die B has faces $1, 1, 2, 2, 3, 3$. Both are rolled. What is the probability that die A shows a bigger number than die B?`,
          difficulty: 2,
          answer: String.raw`$\tfrac23$`,
        },
        {
          stem: String.raw`The spinner shown is half red, a quarter blue and a quarter green. It is spun twice. What is the probability that both spins land on the same colour?`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-3.2, 3.2],
            y: [-2.4, 2.4],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [0, 2], [-0.209, 1.989], [-0.416, 1.956], [-0.618, 1.902], [-0.813, 1.827], [-1, 1.732], [-1.176, 1.618], [-1.338, 1.486], [-1.486, 1.338], [-1.618, 1.176], [-1.732, 1], [-1.827, 0.813], [-1.902, 0.618], [-1.956, 0.416], [-1.989, 0.209], [-2, 0], [-1.989, -0.209], [-1.956, -0.416], [-1.902, -0.618], [-1.827, -0.813], [-1.732, -1], [-1.618, -1.176], [-1.486, -1.338], [-1.338, -1.486], [-1.176, -1.618], [-1, -1.732], [-0.813, -1.827], [-0.618, -1.902], [-0.416, -1.956], [-0.209, -1.989], [0, -2]], fill: true, tone: "warn" },
              { points: [[0, 0], [2, 0], [1.989, 0.209], [1.956, 0.416], [1.902, 0.618], [1.827, 0.813], [1.732, 1], [1.618, 1.176], [1.486, 1.338], [1.338, 1.486], [1.176, 1.618], [1, 1.732], [0.813, 1.827], [0.618, 1.902], [0.416, 1.956], [0.209, 1.989], [0, 2]], fill: true, tone: "accent" },
              { points: [[0, 0], [0, -2], [0.209, -1.989], [0.416, -1.956], [0.618, -1.902], [0.813, -1.827], [1, -1.732], [1.176, -1.618], [1.338, -1.486], [1.486, -1.338], [1.618, -1.176], [1.732, -1], [1.827, -0.813], [1.902, -0.618], [1.956, -0.416], [1.989, -0.209], [2, 0]], fill: true, tone: "good" },
            ],
            circles: [{ c: [0, 0], r: 2, tone: "ink" }],
            labels: [
              { x: -1, y: 0, text: "Red" },
              { x: 0.95, y: 0.95, text: "Blue" },
              { x: 0.95, y: -0.95, text: "Green" },
            ],
            alt: "A circular spinner. The left half is red, the top-right quarter is blue and the bottom-right quarter is green.",
          },
          answer: String.raw`$\tfrac38$`,
        },
        {
          stem: String.raw`Two dice are rolled and the two numbers are multiplied. What is the probability that the product is a multiple of $6$?`,
          difficulty: 3,
          answer: String.raw`$\tfrac{5}{12}$`,
        },
        {
          stem: String.raw`Three dice are rolled. What is the probability that the total is $12$ or more?`,
          difficulty: 4,
          answer: String.raw`$\tfrac38$`,
        },
      ],
    },
    {
      id: "C4-bags",
      name: String.raw`Drawing from a bag`,
      tests: String.raw`Balls or sweets are taken from a bag one after another, with or without putting them back. Ask: what is in the bag at each draw? Multiply the chances along the way, or count ordered pairs.`,
      questions: [
        {
          stem: String.raw`A bag has $4$ red balls and $6$ blue balls. Ali takes out a red ball and keeps it. Ben then takes a ball at random from the bag. What is the probability that Ben's ball is red?`,
          difficulty: 1,
          choices: [String.raw`$\tfrac13$`, String.raw`$\tfrac25$`, String.raw`$\tfrac49$`, String.raw`$\tfrac23$`],
          answer: String.raw`(A) $\tfrac13$`,
        },
        {
          stem: String.raw`A bag has $2$ red balls and $3$ white balls. Mei takes a ball at random, puts it back, and then takes a ball at random again. What is the probability that both balls are red?`,
          difficulty: 1,
          answer: String.raw`$\tfrac{4}{25}$`,
        },
        {
          stem: String.raw`A bag has $4$ red sweets and $2$ green sweets. Two sweets are taken at random, one after the other, without putting the first one back. What is the probability that both are green?`,
          difficulty: 2,
          answer: String.raw`$\tfrac{1}{15}$`,
        },
        {
          stem: String.raw`A bag has $3$ red balls and $2$ blue balls. Two balls are taken out at random together. What is the probability that they are the same colour?`,
          difficulty: 2,
          answer: String.raw`$\tfrac25$`,
        },
        {
          stem: String.raw`A bag has $10$ balls, some red and the rest white. Two balls are taken at random without putting the first back. The probability that both are red is $\tfrac{1}{15}$. How many red balls are in the bag?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`A bag has $3$ red balls and $2$ blue balls. Jun takes out balls one at a time at random, without putting any back, until he gets a blue ball. What is the probability that he takes out exactly $3$ balls?`,
          difficulty: 3,
          answer: String.raw`$\tfrac15$`,
        },
        {
          stem: String.raw`A bag has $5$ red balls and $2$ blue balls. Ali and Ben take turns to take out one ball at random, without putting any back. Ali goes first. The first person to take out a blue ball wins. What is the probability that Ali wins?`,
          difficulty: 4,
          answer: String.raw`$\tfrac47$`,
        },
      ],
    },
    {
      id: "C4-fair-games",
      name: String.raw`Fair games and comparing chances`,
      tests: String.raw`Is the game fair? Who is more likely to win? How many points make it fair? Work out each player's chance and compare, using equal denominators.`,
      questions: [
        {
          stem: String.raw`Ali and Ben play a game with one die. Which of these games is fair?`,
          difficulty: 1,
          choices: [
            String.raw`Ali wins on $1$ or $2$; Ben wins on $3$, $4$, $5$ or $6$.`,
            String.raw`Ali wins on a multiple of $3$; Ben wins on any other number.`,
            String.raw`Ali wins on an even number; Ben wins on an odd number.`,
            String.raw`Ali wins on a number greater than $4$; Ben wins on any other number.`,
          ],
          answer: String.raw`(C) Ali wins on an even number`,
        },
        {
          stem: String.raw`Bag A has $3$ red and $5$ blue marbles. Bag B has $4$ red and $7$ blue marbles. You win if you pick a red marble. Which bag gives you the better chance?`,
          difficulty: 1,
          choices: [String.raw`Bag A`, String.raw`Bag B`, String.raw`Both bags give the same chance`],
          answer: String.raw`(A) Bag A`,
        },
        {
          stem: String.raw`Two dice are rolled. Ali wins if the total is $6$, $7$ or $8$. Ben wins otherwise. What is the probability that Ali wins?`,
          difficulty: 2,
          answer: String.raw`$\tfrac49$`,
        },
        {
          stem: String.raw`A spinner has $5$ equal parts numbered $1$ to $5$. If it lands on $1$, Mei scores some points. If it lands on any other number, Jun scores $1$ point. How many points should Mei score each time so that the game is fair?`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Two dice are rolled. Before rolling, Raj chooses some of the possible totals $2, 3, \ldots, 12$. He wins if the total is one of his chosen totals. What is the smallest number of totals he must choose so that his chance of winning is more than $\tfrac12$?`,
          difficulty: 3,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Which is more likely: a total of $9$ when two dice are rolled, or a total of $10$ when three dice are rolled?`,
          difficulty: 3,
          choices: [String.raw`A total of $9$ with two dice`, String.raw`A total of $10$ with three dice`, String.raw`They are equally likely`],
          answer: String.raw`(B) A total of $10$ with three dice`,
        },
        {
          stem: String.raw`Mei and Jun play a game with two dice. Mei chooses the total $8$. Jun then chooses a different total from $2$ to $12$. The two dice are rolled again and again until Mei's total or Jun's total comes up. The player whose total comes up first wins. Jun chooses his total to give himself the best chance. What is the probability that Jun wins?`,
          difficulty: 4,
          answer: String.raw`$\tfrac{6}{11}$`,
        },
      ],
    },
    {
      id: "C4-expected-counts",
      name: String.raw`About how many times?`,
      tests: String.raw`Predict how many times an outcome will happen in many tries (probability $\times$ number of tries), estimate what is in a bag from results, or decide who gains in a game in the long run.`,
      questions: [
        {
          stem: String.raw`A fair die is rolled $300$ times. About how many times would you expect it to show a $5$?`,
          difficulty: 1,
          choices: [String.raw`$50$`, String.raw`$60$`, String.raw`$100$`, String.raw`$150$`],
          answer: String.raw`(A) $50$`,
        },
        {
          stem: String.raw`The spinner shown has $4$ equal parts. It is spun $200$ times. About how many times would you expect it **not** to land on red?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-3.2, 3.2],
            y: [-2.4, 2.4],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [2, 0], [1.989, 0.209], [1.956, 0.416], [1.902, 0.618], [1.827, 0.813], [1.732, 1], [1.618, 1.176], [1.486, 1.338], [1.338, 1.486], [1.176, 1.618], [1, 1.732], [0.813, 1.827], [0.618, 1.902], [0.416, 1.956], [0.209, 1.989], [0, 2]], fill: true, tone: "warn" },
            ],
            circles: [{ c: [0, 0], r: 2, tone: "ink" }],
            segments: [
              { from: [-2, 0], to: [2, 0], tone: "ink" },
              { from: [0, -2], to: [0, 2], tone: "ink" },
            ],
            labels: [
              { x: 0.95, y: 0.95, text: "Red" },
              { x: -0.95, y: 0.95, text: "Blue" },
              { x: -0.95, y: -0.95, text: "Green" },
              { x: 0.95, y: -0.95, text: "Yellow" },
            ],
            alt: "A circular spinner divided into four equal quarters: red, blue, green and yellow.",
          },
          answer: String.raw`About $150$ times`,
        },
        {
          stem: String.raw`Two dice are rolled $180$ times. About how many times would you expect the total to be $8$?`,
          difficulty: 2,
          answer: String.raw`About $25$ times`,
        },
        {
          stem: String.raw`A bag has $20$ balls, some red and the rest blue. Wei takes a ball at random, notes its colour and puts it back. He does this $100$ times and gets a red ball $35$ times. What is the best estimate of the number of red balls in the bag?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Three coins are tossed together $400$ times. About how many times would you expect to get exactly two heads?`,
          difficulty: 3,
          answer: String.raw`About $150$ times`,
        },
        {
          stem: String.raw`At a fun fair stall, each game costs $50$ cents. The player rolls two dice. If both dice show the same number, the player wins a prize of \$2 (the $50$ cents is not given back). Otherwise the player gets nothing. About how much money would the stall expect to gain after $360$ games?`,
          difficulty: 3,
          answer: String.raw`About \$60`,
        },
        {
          stem: String.raw`A die is rolled $218$ times in a row. A roll that is not the first or the last roll is called a **peak** if its number is bigger than both the roll just before it and the roll just after it. About how many peaks would you expect?`,
          difficulty: 4,
          answer: String.raw`About $55$`,
        },
      ],
    },
  ],
});
