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
      ],
    },
    {
      id: "C2-clocks",
      name: String.raw`Clocks: angles and fast or slow clocks`,
      tests: String.raw`Find the angle between the hands at a simple time, or work out what a clock that gains or loses time shows (or what the real time is).`,
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
      ],
    },
  ],
});
