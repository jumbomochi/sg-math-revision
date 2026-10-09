H2.addTopic({
  id: "C2",
  title: "Logic Puzzles",
  summary: String.raw`Solve truth-and-lie, ordering, grid, calendar, clock, weighing and measuring puzzles by testing cases and keeping careful records.`,
  concepts: [
    {
      title: String.raw`Truth-tellers and liars: test each case`,
      body: String.raw`Pick one person and **suppose** they tell the truth. Follow what that means. If you reach something impossible, the guess was wrong, so try the other case.

Example: A says "B is a liar." B says "We both tell the truth."

- Suppose B tells the truth. Then A tells the truth too, so B is a liar. Impossible!
- So B is a liar. Then A's words are true, so A tells the truth.

Always check your final answer against **every** statement.`,
    },
    {
      title: String.raw`Ordering clues: draw a line`,
      body: String.raw`For "taller than", "finished before", "older than" clues, draw a line (tallest at the top, or first on the left) and place people on it one clue at a time.

- Start with the clue that fixes someone exactly ("came first", "lives at an end").
- "Immediately after" or "next to" glues two people together.
- "Exactly one house between" means their numbers differ by 2.

Example: Ann is taller than Bo, and Cy is shorter than Bo. The line from tallest is Ann, Bo, Cy.`,
    },
    {
      title: String.raw`Who has what: use a grid`,
      body: String.raw`Make a table with people down the side and things across the top. Put ✗ where a clue rules something out and ✓ when you are sure. Each row and each column has exactly **one** ✓, so once you place a ✓, cross out the rest of its row and column.

Example: Ria, Sam and Tia each play a different instrument: drum, flute or piano. Sam plays neither the drum nor the piano, and Ria does not play the drum. So Sam plays the flute, then Ria plays the piano and Tia plays the drum.

A clue like "Bala and the swimmer are cousins" tells you that Bala is **not** the swimmer.`,
      figure: {
        type: "plot",
        x: [-0.3, 5.3],
        y: [-0.3, 4.3],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [5, 0], tone: "ink", thin: true },
          { from: [0, 1], to: [5, 1], tone: "ink", thin: true },
          { from: [0, 2], to: [5, 2], tone: "ink", thin: true },
          { from: [0, 3], to: [5, 3], tone: "ink", thin: true },
          { from: [2, 4], to: [5, 4], tone: "ink", thin: true },
          { from: [2, 0], to: [2, 4], tone: "ink", thin: true },
          { from: [3, 0], to: [3, 4], tone: "ink", thin: true },
          { from: [4, 0], to: [4, 4], tone: "ink", thin: true },
          { from: [5, 0], to: [5, 4], tone: "ink", thin: true },
          { from: [0, 0], to: [0, 3], tone: "ink", thin: true },
        ],
        labels: [
          { x: 2.5, y: 3.5, text: "drum", pos: "c", style: "small" },
          { x: 3.5, y: 3.5, text: "flute", pos: "c", style: "small" },
          { x: 4.5, y: 3.5, text: "piano", pos: "c", style: "small" },
          { x: 1, y: 2.5, text: "Ria", pos: "c", style: "plain" },
          { x: 2.5, y: 2.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
          { x: 3.5, y: 2.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
          { x: 4.5, y: 2.5, text: "✓", pos: "c", style: "bold", tone: "good" },
          { x: 1, y: 1.5, text: "Sam", pos: "c", style: "plain" },
          { x: 2.5, y: 1.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
          { x: 3.5, y: 1.5, text: "✓", pos: "c", style: "bold", tone: "good" },
          { x: 4.5, y: 1.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
          { x: 1, y: 0.5, text: "Tia", pos: "c", style: "plain" },
          { x: 2.5, y: 0.5, text: "✓", pos: "c", style: "bold", tone: "good" },
          { x: 3.5, y: 0.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
          { x: 4.5, y: 0.5, text: "✗", pos: "c", style: "bold", tone: "muted" },
        ],
        caption: String.raw`The finished grid: one ✓ in each row and each column.`,
        alt: "A grid with rows Ria, Sam, Tia and columns drum, flute, piano. Ria has a tick under piano, Sam under flute, Tia under drum; all other cells have crosses.",
      },
    },
    {
      title: String.raw`Calendars: count in sevens`,
      body: String.raw`The days of the week repeat every $7$ days, so only the **remainder** after dividing by $7$ matters.

- Days in the months: Jan 31, Feb 28 (29 in a leap year), Mar 31, Apr 30, May 31, Jun 30, Jul 31, Aug 31, Sep 30, Oct 31, Nov 30, Dec 31.
- Between 2001 and 2099, a leap year is a year divisible by $4$ (2024, 2028, …).
- A normal year has $365 = 52 \times 7 + 1$ days, so the same date next year is $1$ day of the week later (2 days later if 29 February comes in between).

Example: if 1 March is a Monday, 1 April is $31$ days later. $31 = 4 \times 7 + 3$, so 1 April is $3$ days after Monday: Thursday.`,
    },
    {
      title: String.raw`Clocks: angles and clocks that run fast or slow`,
      body: String.raw`- The $12$ numbers are $360° \div 12 = 30°$ apart.
- The minute hand turns $6°$ every minute. The hour hand turns $30°$ every hour, which is $\tfrac{1}{2}°$ every minute — so at half past, the hour hand is halfway between two numbers.
- At exactly 3 o'clock the hands are $3 \times 30° = 90°$ apart.

A clock that **gains** 2 minutes every hour is $10$ minutes fast after $5$ hours. Be careful which time you are given: the clock's time or the real time. In $1$ real hour that clock shows $62$ minutes passing.`,
      figure: {
        type: "plot",
        x: [-3.6, 3.6],
        y: [-2.3, 2.3],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2, tone: "ink" },
        ],
        segments: [
          { from: [0, 1.82], to: [0, 2], tone: "ink", thin: true },
          { from: [0.91, 1.576], to: [1, 1.732], tone: "ink", thin: true },
          { from: [1.576, 0.91], to: [1.732, 1], tone: "ink", thin: true },
          { from: [1.82, 0], to: [2, 0], tone: "ink", thin: true },
          { from: [1.576, -0.91], to: [1.732, -1], tone: "ink", thin: true },
          { from: [0.91, -1.576], to: [1, -1.732], tone: "ink", thin: true },
          { from: [0, -1.82], to: [0, -2], tone: "ink", thin: true },
          { from: [-0.91, -1.576], to: [-1, -1.732], tone: "ink", thin: true },
          { from: [-1.576, -0.91], to: [-1.732, -1], tone: "ink", thin: true },
          { from: [-1.82, 0], to: [-2, 0], tone: "ink", thin: true },
          { from: [-1.576, 0.91], to: [-1.732, 1], tone: "ink", thin: true },
          { from: [-0.91, 1.576], to: [-1, 1.732], tone: "ink", thin: true },
          { from: [0, 0], to: [0.95, 0], tone: "ink" },
          { from: [0, 0], to: [0, 1.3], tone: "ink" },
        ],
        points: [
          { x: 0, y: 0 },
        ],
        labels: [
          { x: 0, y: 1.5, text: "12", pos: "c", style: "small" },
          { x: 0.75, y: 1.299, text: "1", pos: "c", style: "small" },
          { x: 1.299, y: 0.75, text: "2", pos: "c", style: "small" },
          { x: 1.5, y: 0, text: "3", pos: "c", style: "small" },
          { x: 1.299, y: -0.75, text: "4", pos: "c", style: "small" },
          { x: 0.75, y: -1.299, text: "5", pos: "c", style: "small" },
          { x: 0, y: -1.5, text: "6", pos: "c", style: "small" },
          { x: -0.75, y: -1.299, text: "7", pos: "c", style: "small" },
          { x: -1.299, y: -0.75, text: "8", pos: "c", style: "small" },
          { x: -1.5, y: 0, text: "9", pos: "c", style: "small" },
          { x: -1.299, y: 0.75, text: "10", pos: "c", style: "small" },
          { x: -0.75, y: 1.299, text: "11", pos: "c", style: "small" },
        ],
        angles: [
          { at: [0, 0], from: [1, 0], to: [0, 1], r: 0.45, label: "90°" },
        ],
        caption: String.raw`At 3 o'clock the hands are 3 spaces of $30°$ apart.`,
        alt: "A clock face showing 3 o'clock, with the right angle between the hands marked 90 degrees.",
      },
    },
    {
      title: String.raw`Weighing puzzles: three outcomes`,
      body: String.raw`A balance has **three** results: left side heavier, right side heavier, or balanced. So split the coins into **three** groups, not two.

Example: 3 coins, one is heavier. Put one coin on each pan. If one side goes down, that coin is heavier. If they balance, the third coin is the heavy one. One weighing is enough.

- 1 weighing can find the heavy coin among up to $3$ coins, 2 weighings among up to $3 \times 3 = 9$, 3 weighings among up to $27$.
- When measuring with weights, a weight may go on the **same** pan as the object (it takes away) or on the other pan (it adds). With 1 g and 3 g weights you can measure 2 g: put the 3 g weight on one pan and the object with the 1 g weight on the other.`,
    },
    {
      title: String.raw`Measuring and crossing puzzles: keep a record`,
      body: String.raw`For jugs and river crossings, write down the **state** after every step (how much is in each jug, who is on each bank). Count every single move. Look for a shorter way before giving your answer.

Example: get exactly 4 litres using a 3-litre jug and a 5-litre jug.

| Step | 3 L jug | 5 L jug |
| --- | --- | --- |
| Fill the 5 L jug | 0 | 5 |
| Pour 5 L into 3 L | 3 | 2 |
| Empty the 3 L jug | 0 | 2 |
| Pour 5 L into 3 L | 2 | 0 |
| Fill the 5 L jug | 2 | 5 |
| Pour 5 L into 3 L | 3 | 4 |

That takes $6$ steps, and no shorter way exists.`,
    },
    {
      title: String.raw`Hands that meet: use the gap speed`,
      body: String.raw`When two hands turn (or two runners go round a track), look at how fast the **gap** between them changes.

- Same direction: the gap changes by the **difference** of the speeds. On a normal clock the minute hand gains $6° - \tfrac12° = 5\tfrac12°$ on the hour hand every minute.
- Opposite directions: the gap changes by the **sum** of the speeds.

The two hands point the same way each time the gap grows by a whole $360°$.

Example: two hands start together and turn opposite ways at $2°$ and $3°$ per minute. The gap grows by $5°$ each minute, so they point the same way again after $360 \div 5 = 72$ minutes.`,
    },
    {
      title: String.raw`Two repeating cycles at once`,
      body: String.raw`When two things repeat with different cycle lengths (days of the week and a timetable, two bus routes), list both side by side, or use remainders. They line up again after a common multiple of the two cycle lengths.

Example: a rota repeats every 3 days (A, B, C, A, B, C, …), and today is a Monday and an A-day. A-days come 0, 3, 6, 9, … days from today; Mondays come 0, 7, 14, 21, … days from today. The first number after 0 in both lists is 21, so the next Monday that is an A-day is 21 days from today.`,
    },
  ],
  archetypes: [
    {
      id: "C2-truth-liars",
      name: String.raw`Truth-tellers and liars`,
      tests: String.raw`People make statements and some of them lie (or exactly one tells the truth). Test each possible case and keep the one that does not lead to a contradiction.`,
      questions: [
        {
          stem: String.raw`One of Ahmad, Bryan and Chloe broke a vase. Ahmad says, "Bryan did it." Bryan says, "I did not do it." Chloe says, "I did not do it." Exactly one of the three is telling the truth. Who broke the vase?`,
          choices: [String.raw`Ahmad`, String.raw`Bryan`, String.raw`Chloe`, String.raw`It cannot be decided`],
          difficulty: 1,
          answer: String.raw`(C) Chloe`,
        },
        {
          stem: String.raw`On an island, every person is either a knight, who always tells the truth, or a knave, who always lies. You meet Pam, Quin and Rex. Pam says, "Quin is a knave." Quin says, "Pam and Rex are both knaves." Rex says, "Quin is a knight." Which of the three are knights?`,
          difficulty: 2,
          answer: String.raw`Only Pam`,
        },
        {
          stem: String.raw`Six people sit around a table. Each of them either always tells the truth or always lies. The first person says, "At least $1$ of us is a liar." The second says, "At least $2$ of us are liars." The third says, "At least $3$ of us are liars," and so on, until the sixth says, "At least $6$ of us are liars." How many liars are at the table?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`One of Ali, Bala, Chen and Devi ate the last piece of cake. Ali says, "Devi ate it." Bala says, "Ali did not eat it." Chen says, "Bala or I ate it." Devi says, "Ali is lying." Exactly one of the four is telling the truth. Who ate the cake?`,
          choices: [String.raw`Ali`, String.raw`Bala`, String.raw`Chen`, String.raw`Devi`],
          difficulty: 1,
          answer: String.raw`(A) Ali`,
        },
        {
          stem: String.raw`On an island, every person is either a knight, who always tells the truth, or a knave, who always lies. Four islanders say:

- Wen: "Xavier and Yusuf are the same type."
- Xavier: "Wen is a knave."
- Yusuf: "Zara is a knight."
- Zara: "Xavier and I are different types."

How many of the four are knights?`,
          difficulty: 2,
          answer: String.raw`$1$ (only Wen)`,
        },
        {
          stem: String.raw`Eleven people stand in a queue. Each of them either always tells the truth or always lies. The person at the front of the queue says, "At least $5$ of us are liars." Each of the other ten people says, "The person just in front of me is a liar." How many liars are in the queue?`,
          difficulty: 3,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Twelve people sit around a round table. Each of them is a knight, who always tells the truth, or a knave, who always lies, and at least one of them is a knight. Every one of them says, "Exactly one of the two people sitting next to me is a knight." How many knights are at the table?`,
          difficulty: 4,
          answer: String.raw`$8$`,
        },
      ],
    },
    {
      id: "C2-ordering",
      name: String.raw`Ordering and ranking from clues`,
      tests: String.raw`Clues compare people (faster, older, next to, one house between) and you must find a position. Place the fixed clues first and build the order on a line.`,
      questions: [
        {
          stem: String.raw`Five children ran a race and there were no ties. Eva came first and Chen came last. Ben finished immediately after Ali. Dan finished before Ali. Who came third?`,
          difficulty: 1,
          answer: String.raw`Ali`,
        },
        {
          stem: String.raw`Kai, Lin, Mia, Ned and Omar all have different ages. Kai is older than Lin. Mia is younger than Lin but older than Ned. Omar is younger than Lin but older than Mia. Who is the third oldest?`,
          choices: [String.raw`Kai`, String.raw`Lin`, String.raw`Mia`, String.raw`Omar`],
          difficulty: 2,
          answer: String.raw`(D) Omar`,
        },
        {
          stem: String.raw`Six friends, Aaron, Bella, Chloe, Darren, Eli and Farah, live in the six houses shown, one in each house.

- Bella and Darren both live in end houses.
- There is exactly one house between Chloe's house and Darren's house.
- Eli lives next door to Bella.
- Aaron lives next door to Eli.
- Farah's house number is smaller than Aaron's.

Who lives in house 2?`,
          figure: {
            type: "plot",
            x: [-0.4, 8.9],
            y: [-0.3, 1.9],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [[0, 0], [1, 0], [1, 1], [0.5, 1.6], [0, 1]],
                tone: "ink",
              },
              {
                points: [[1.5, 0], [2.5, 0], [2.5, 1], [2, 1.6], [1.5, 1]],
                tone: "ink",
              },
              {
                points: [[3, 0], [4, 0], [4, 1], [3.5, 1.6], [3, 1]],
                tone: "ink",
              },
              {
                points: [[4.5, 0], [5.5, 0], [5.5, 1], [5, 1.6], [4.5, 1]],
                tone: "ink",
              },
              {
                points: [[6, 0], [7, 0], [7, 1], [6.5, 1.6], [6, 1]],
                tone: "ink",
              },
              {
                points: [[7.5, 0], [8.5, 0], [8.5, 1], [8, 1.6], [7.5, 1]],
                tone: "ink",
              },
            ],
            labels: [
              { x: 0.5, y: 0.55, text: "1", pos: "c", style: "plain" },
              { x: 2, y: 0.55, text: "2", pos: "c", style: "plain" },
              { x: 3.5, y: 0.55, text: "3", pos: "c", style: "plain" },
              { x: 5, y: 0.55, text: "4", pos: "c", style: "plain" },
              { x: 6.5, y: 0.55, text: "5", pos: "c", style: "plain" },
              { x: 8, y: 0.55, text: "6", pos: "c", style: "plain" },
            ],
            alt: "Six houses in a row, numbered 1 to 6 from left to right.",
          },
          difficulty: 3,
          answer: String.raw`Farah`,
        },
        {
          stem: String.raw`Some children stand in a row. Ali is $4$th from the left and $6$th from the right. How many children are in the row?`,
          choices: [String.raw`$9$`, String.raw`$10$`, String.raw`$11$`, String.raw`$24$`],
          difficulty: 1,
          answer: String.raw`(A) $9$`,
        },
        {
          stem: String.raw`Some children stand in a row. Ben is $7$th from the left. Cai stands somewhere to the right of Ben and is $5$th from the right. There are exactly $3$ children between Ben and Cai. How many children are in the row?`,
          difficulty: 2,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Six friends, Ali, Bea, Cal, Dan, Eve and Fay, sit around a round table with $6$ equally spaced seats.

- Ali sits directly opposite Bea.
- Cal sits next to Ali.
- Dan does not sit next to Bea.
- Eve sits next to Cal.

Who sits directly opposite Dan?`,
          difficulty: 3,
          answer: String.raw`Eve`,
        },
        {
          stem: String.raw`Pei, Qasim, Ravi, Siti and Tom ran a race, and there were no ties. A reporter wrote five sentences about the race, but **exactly one** of them is false.

1. Pei finished 4th.
2. Ravi finished immediately after Siti.
3. Siti finished ahead of Qasim.
4. Ravi and Pei finished one right after the other (in either order).
5. Tom finished ahead of Siti.

In what order did they finish, from first to last?`,
          difficulty: 4,
          answer: String.raw`Tom, Siti, Qasim, Pei, Ravi`,
        },
      ],
    },
    {
      id: "C2-grid-logic",
      name: String.raw`Who owns what (grid logic)`,
      tests: String.raw`Each person is matched with exactly one item (and sometimes a second item such as a colour). Record the clues in a grid of ✓ and ✗ until only one choice is left in each row.`,
      questions: [
        {
          stem: String.raw`Amy, Ben and Cal each own one pet: a cat, a dog or a fish, all different. Amy's pet has no fur. Ben's pet does not bark. Who owns the dog?`,
          difficulty: 1,
          answer: String.raw`Cal`,
        },
        {
          stem: String.raw`Ali, Bala, Cindy and Dina each take a different CCA: badminton, chess, football or swimming.

- Ali does not play football and does not swim.
- Neither Bala nor Cindy swims.
- Cindy plays neither chess nor badminton.
- Bala and the badminton player are cousins.

What is Bala's CCA?`,
          difficulty: 2,
          answer: String.raw`Chess`,
        },
        {
          stem: String.raw`Hana, Ivan, Jess and Kumar each own a different pet (a cat, a dog, a hamster or a rabbit) and each has a different favourite colour (red, blue, green or yellow).

- The dog's owner likes blue.
- Hana likes neither red nor blue.
- Ivan owns the cat, and his favourite colour is not red.
- The person who likes green owns the hamster.
- Kumar does not like green and does not own the dog.

Who owns the rabbit, and what is that person's favourite colour?`,
          difficulty: 3,
          answer: String.raw`Kumar; red`,
        },
        {
          stem: String.raw`Pam, Quinn and Rosa each wear a shirt of a different colour: red, blue or green.

- Rosa and the girl in green are sisters.
- The girl in red is younger than Quinn.
- Neither Pam nor Quinn wears blue.

What colour is Rosa's shirt?`,
          difficulty: 1,
          answer: String.raw`Blue`,
        },
        {
          stem: String.raw`Ethan, Farah, Gopal and Hui Min have $10$, $20$, $30$ and $40$ stickers, in some order.

- Farah has $20$ more stickers than Gopal.
- Ethan has more stickers than Hui Min.
- Hui Min does not have the fewest stickers.

How many stickers does Ethan have?`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`Jia, Kiran, Leon and Maya live in four houses in a row, numbered $1$ to $4$ from left to right. Each of them owns a different pet: a cat, a dog, a fish or a rabbit.

- Maya owns the dog.
- Kiran lives in a house at one end of the row.
- The rabbit's owner lives in the house just to the right of Leon's house.
- There is exactly one house between Jia's house and Maya's house.
- Jia's house number is smaller than the house number of the fish's owner.

Who lives in house $2$, and which pet does that person own?`,
          difficulty: 3,
          answer: String.raw`Leon; the cat`,
        },
        {
          stem: String.raw`Nora, Omar, Priya, Rui and Sam live in five houses in a row, numbered $1$ to $5$ from left to right. The houses are painted red, blue, green, yellow and white, one colour each, and each person owns a different pet: a cat, a dog, a fish, a bird and a hamster.

- The dog lives in the white house.
- Nora owns the bird.
- Priya lives in the green house.
- Priya's house is just to the right of the white house.
- Rui's house is just to the right of the bird owner's house.
- The blue house is just to the right of the fish owner's house.
- The red house is just to the right of Sam's house.
- The cat's owner lives next door to the yellow house.

Who lives in house $1$, and which pet does that person own?`,
          difficulty: 4,
          answer: String.raw`Omar; the fish`,
        },
      ],
    },
    {
      id: "C2-calendars",
      name: String.raw`Calendars and days of the week`,
      tests: String.raw`Find the day of the week of a date from another known date, using the number of days in each month and the remainder after dividing by 7.`,
      questions: [
        {
          stem: String.raw`5 May is a Tuesday. What day of the week is 30 May of the same year?`,
          difficulty: 1,
          answer: String.raw`Saturday`,
        },
        {
          stem: String.raw`In a certain year that is not a leap year, 1 January is a Wednesday. What day of the week is 1 March of that year?`,
          choices: [String.raw`Friday`, String.raw`Saturday`, String.raw`Sunday`, String.raw`Monday`],
          difficulty: 2,
          answer: String.raw`(B) Saturday`,
        },
        {
          stem: String.raw`In a certain year that is not a leap year, 13 January is a Friday. In which other month of that year does the 13th fall on a Friday?`,
          difficulty: 3,
          answer: String.raw`October`,
        },
        {
          stem: String.raw`A year that is not a leap year begins on a Tuesday (1 January is a Tuesday). On which day of the week does the year end (31 December)?`,
          choices: [String.raw`Monday`, String.raw`Tuesday`, String.raw`Wednesday`, String.raw`Thursday`],
          difficulty: 1,
          answer: String.raw`(B) Tuesday`,
        },
        {
          stem: String.raw`Ming was born on Sunday, 7 August 2016. On which day of the week was his $10$th birthday, 7 August 2026? (The leap years in between are 2020 and 2024.)`,
          difficulty: 2,
          answer: String.raw`Friday`,
        },
        {
          stem: String.raw`29 February 2024 was a Thursday. In which year will 29 February next fall on a Thursday? (From 2024 to 2096, every year divisible by $4$ is a leap year.)`,
          difficulty: 3,
          answer: String.raw`2052`,
        },
        {
          stem: String.raw`A school uses a 6-day timetable: the school days are called Day 1, Day 2, …, Day 6, then Day 1 again, and so on. There is school every Monday to Friday, and no school on Saturdays and Sundays (ignore holidays). Monday 5 January is a Day 1. What is the date of the first Friday that is a Day 1?`,
          difficulty: 4,
          answer: String.raw`Friday 6 February`,
        },
      ],
    },
    {
      id: "C2-clocks",
      name: String.raw`Clocks: angles and fast or slow clocks`,
      tests: String.raw`Find the angle between the hands at a simple time, or work out what a clock that gains or loses time shows (or what the real time is). Harder ones use clocks seen in a mirror or broken clocks whose hands meet.`,
      questions: [
        {
          stem: String.raw`The clock shows 5 o'clock. What is the smaller angle between the hour hand and the minute hand?`,
          figure: {
            type: "plot",
            x: [-3.6, 3.6],
            y: [-2.3, 2.3],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 2, tone: "ink" },
            ],
            segments: [
              { from: [0, 1.82], to: [0, 2], tone: "ink", thin: true },
              { from: [0.91, 1.576], to: [1, 1.732], tone: "ink", thin: true },
              { from: [1.576, 0.91], to: [1.732, 1], tone: "ink", thin: true },
              { from: [1.82, 0], to: [2, 0], tone: "ink", thin: true },
              { from: [1.576, -0.91], to: [1.732, -1], tone: "ink", thin: true },
              { from: [0.91, -1.576], to: [1, -1.732], tone: "ink", thin: true },
              { from: [0, -1.82], to: [0, -2], tone: "ink", thin: true },
              { from: [-0.91, -1.576], to: [-1, -1.732], tone: "ink", thin: true },
              { from: [-1.576, -0.91], to: [-1.732, -1], tone: "ink", thin: true },
              { from: [-1.82, 0], to: [-2, 0], tone: "ink", thin: true },
              { from: [-1.576, 0.91], to: [-1.732, 1], tone: "ink", thin: true },
              { from: [-0.91, 1.576], to: [-1, 1.732], tone: "ink", thin: true },
              { from: [0, 0], to: [0.475, -0.823], tone: "ink" },
              { from: [0, 0], to: [0, 1.3], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
            ],
            labels: [
              { x: 0, y: 1.5, text: "12", pos: "c", style: "small" },
              { x: 0.75, y: 1.299, text: "1", pos: "c", style: "small" },
              { x: 1.299, y: 0.75, text: "2", pos: "c", style: "small" },
              { x: 1.5, y: 0, text: "3", pos: "c", style: "small" },
              { x: 1.299, y: -0.75, text: "4", pos: "c", style: "small" },
              { x: 0.75, y: -1.299, text: "5", pos: "c", style: "small" },
              { x: 0, y: -1.5, text: "6", pos: "c", style: "small" },
              { x: -0.75, y: -1.299, text: "7", pos: "c", style: "small" },
              { x: -1.299, y: -0.75, text: "8", pos: "c", style: "small" },
              { x: -1.5, y: 0, text: "9", pos: "c", style: "small" },
              { x: -1.299, y: 0.75, text: "10", pos: "c", style: "small" },
              { x: -0.75, y: 1.299, text: "11", pos: "c", style: "small" },
            ],
            alt: "A clock face showing 5 o'clock: the minute hand points to 12 and the hour hand points to 5.",
          },
          choices: [String.raw`$120°$`, String.raw`$135°$`, String.raw`$150°$`, String.raw`$165°$`],
          difficulty: 1,
          answer: String.raw`(C) $150°$`,
        },
        {
          stem: String.raw`A clock loses $2$ minutes every hour. It is set to the correct time at 9:00 a.m. What time does the clock show when the correct time is 9:00 p.m. on the same day?`,
          difficulty: 2,
          answer: String.raw`8:36 p.m.`,
        },
        {
          stem: String.raw`A clock gains $3$ minutes every hour. It is set to the correct time at 8:00 a.m. Later that day the clock shows 3:00 p.m. What is the correct time then?`,
          difficulty: 3,
          answer: String.raw`2:40 p.m.`,
        },
        {
          stem: String.raw`Ken looks at a clock in a mirror. The clock has no numbers on it, only marks. In the mirror, the clock seems to show 3:15. What is the real time?`,
          choices: [String.raw`9:45`, String.raw`8:45`, String.raw`3:45`, String.raw`9:15`],
          difficulty: 1,
          answer: String.raw`(B) 8:45`,
        },
        {
          stem: String.raw`A clock with hands gains exactly $1$ minute every hour. It is set to the correct time. After how many days will it next show the correct time again?`,
          difficulty: 2,
          answer: String.raw`$30$ days`,
        },
        {
          stem: String.raw`Clock A gains $4$ minutes every hour and clock B loses $2$ minutes every hour. Both are set to the correct time at 12:00 noon. Later that day, clock A shows 8:00 p.m. What time does clock B show at that moment?`,
          difficulty: 3,
          answer: String.raw`7:15 p.m.`,
        },
        {
          stem: String.raw`A toy clock is broken. Its minute hand turns the normal way at the normal speed, but its hour hand turns **backwards** (anticlockwise) at the normal speed of an hour hand. At 12:00 noon both hands point straight up. From just after 12:00 noon up to and including 12:00 midnight (real time), how many times do the two hands point in exactly the same direction?`,
          difficulty: 4,
          answer: String.raw`$13$`,
        },
      ],
    },
    {
      id: "C2-weighing",
      name: String.raw`Weighing puzzles`,
      tests: String.raw`Find a fake coin with the fewest weighings on a balance, or count the masses that a set of weights can measure. Remember that each weighing has three possible results.`,
      questions: [
        {
          stem: String.raw`There are $8$ coins that look the same. One of them is a fake and is heavier than the others, which all have the same mass. Using only a balance (no weights), what is the smallest number of weighings that is sure to find the fake coin?`,
          choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`$4$`],
          difficulty: 1,
          answer: String.raw`(B) $2$`,
        },
        {
          stem: String.raw`There are $28$ coins that look the same. One of them is a fake and is heavier than the others, which all have the same mass. Using only a balance (no weights), what is the smallest number of weighings that is sure to find the fake coin?`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Lina has a balance and three weights of $2$ g, $3$ g and $7$ g. She puts an object on one pan, and she may put any of the weights on either pan. How many different whole-number masses can she measure in one weighing?`,
          difficulty: 3,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Siti has a balance and three weights of $1$ g, $2$ g and $5$ g. She puts an object on the left pan and some of the weights on the right pan. (The weights may only go on the right pan.) How many different whole-number masses can she measure in one weighing?`,
          choices: [String.raw`$6$`, String.raw`$7$`, String.raw`$8$`, String.raw`$9$`],
          difficulty: 1,
          answer: String.raw`(B) $7$`,
        },
        {
          stem: String.raw`All circles have the same mass, all squares have the same mass and all triangles have the same mass. On a balance, $2$ circles balance $3$ squares, and $1$ triangle balances $1$ circle and $1$ square together. How many squares balance $2$ triangles?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Ravi has four weights: $1$ g, $3$ g, $10$ g and $12$ g. He puts an object on one pan of a balance, and he may put any of the weights on either pan. Exactly one whole-number mass from $1$ g to $26$ g **cannot** be measured in one weighing. Which mass is it?`,
          difficulty: 3,
          answer: String.raw`$17$ g`,
        },
        {
          stem: String.raw`There are $8$ coins that look the same. Exactly two of them are fake. The two fake coins have the same mass as each other and are heavier than the real coins, which all have the same mass. Using only a balance (no weights), what is the smallest number of weighings that is sure to find both fake coins?`,
          difficulty: 4,
          answer: String.raw`$4$`,
        },
      ],
    },
    {
      id: "C2-measuring-crossing",
      name: String.raw`Measuring and crossing puzzles`,
      tests: String.raw`Jugs, boats or a narrow bridge: find the fewest steps (or the shortest time) to reach a goal. Record the state after each move and look for a shorter way.`,
      questions: [
        {
          stem: String.raw`Zoe has a 4-litre jug, a 9-litre jug and a tap. The jugs have no markings. Each time she fills a jug from the tap, empties a jug, or pours water from one jug into the other, that counts as one step. What is the smallest number of steps she needs so that one of the jugs holds exactly $1$ litre of water?`,
          difficulty: 1,
          answer: String.raw`$4$ steps`,
        },
        {
          stem: String.raw`Two adults and two children want to cross a river. Their small boat can carry one adult, or one child, or two children, but never an adult together with a child, and someone must be in the boat each time it crosses. Each trip from one bank to the other counts as one crossing. What is the smallest number of crossings needed for all four to reach the other bank?`,
          difficulty: 2,
          answer: String.raw`$9$ crossings`,
        },
        {
          stem: String.raw`Four friends must cross a narrow bridge at night. At most two people can be on the bridge at a time, and they have one torch, which must be carried on every crossing. Alone, they take $1$, $3$, $6$ and $8$ minutes to cross. When two cross together they walk at the slower person's speed. What is the shortest time for all four to get across?`,
          difficulty: 3,
          answer: String.raw`$18$ minutes`,
        },
        {
          stem: String.raw`Seven scouts must cross a river in a small boat that holds at most $2$ people. Someone must be in the boat each time it crosses, and each trip from one bank to the other counts as one crossing. What is the smallest number of crossings needed to get all seven scouts across?`,
          difficulty: 1,
          answer: String.raw`$11$ crossings`,
        },
        {
          stem: String.raw`A family must cross a river: Dad ($75$ kg), Mum ($55$ kg) and three children of $40$ kg, $30$ kg and $20$ kg. Their boat can carry any number of people, as long as their total mass is at most $90$ kg, and someone must be in the boat each time it crosses. Each trip from one bank to the other counts as one crossing. What is the smallest number of crossings needed for all five to reach the other bank?`,
          difficulty: 2,
          answer: String.raw`$7$ crossings`,
        },
        {
          stem: String.raw`Five hikers must cross a rope bridge at night. At most $3$ people can be on the bridge at a time, and they have one torch, which must be carried on every crossing. Alone, they take $1$, $2$, $4$, $6$ and $9$ minutes to cross. A group walks at the speed of its slowest member. What is the shortest time needed to get all five across?`,
          difficulty: 3,
          answer: String.raw`$14$ minutes`,
        },
        {
          stem: String.raw`Zoe has a 4-litre jug, a 7-litre jug, a tap and a large empty tank. The jugs have no markings. Each of these counts as one step: filling a jug from the tap; emptying a jug onto the ground; pouring from one jug into the other until the first jug is empty or the second jug is full; emptying all the water in a jug into the tank. Water in the tank cannot be taken out again. What is the smallest number of steps needed so that the tank holds exactly $9$ litres?`,
          difficulty: 4,
          answer: String.raw`$9$ steps`,
        },
      ],
    },
  ],
});
