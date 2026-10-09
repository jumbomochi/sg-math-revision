H2.addTopic({
  id: "C1",
  title: "Counting and Listing",
  summary: String.raw`Count choices, numbers, routes, handshakes, shapes and arrangements by listing in order, multiplying and adding.`,
  concepts: [
    {
      title: String.raw`List in a fixed order`,
      body: String.raw`To count without missing any or counting one twice, **make an organised list**. Fix the first choice, run through every second choice, then move the first choice on.

Example: arrange the letters A, B, C.

- Start with A: ABC, ACB
- Start with B: BAC, BCA
- Start with C: CAB, CBA

That is $6$ arrangements, and you can see none is missing.`,
    },
    {
      title: String.raw`"And" means multiply`,
      body: String.raw`If a job is done in **steps**, multiply the number of choices for each step.

Example: 3 shirts **and** 2 pairs of shorts give $3 \times 2 = 6$ outfits. A tree diagram shows why: each shirt branches into 2 outfits.

This works for routes too: 2 roads from P to Q **and then** 5 roads from Q to R give $2 \times 5 = 10$ routes through Q.`,
      figure: {
        type: "plot",
        x: [-0.5, 8.6],
        y: [0.1, 5.9],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 3], to: [2.6, 5], tone: "ink", thin: true },
          { from: [2.6, 5], to: [5.4, 5.5], tone: "muted", thin: true },
          { from: [2.6, 5], to: [5.4, 4.5], tone: "muted", thin: true },
          { from: [0, 3], to: [2.6, 3], tone: "ink", thin: true },
          { from: [2.6, 3], to: [5.4, 3.5], tone: "muted", thin: true },
          { from: [2.6, 3], to: [5.4, 2.5], tone: "muted", thin: true },
          { from: [0, 3], to: [2.6, 1], tone: "ink", thin: true },
          { from: [2.6, 1], to: [5.4, 1.5], tone: "muted", thin: true },
          { from: [2.6, 1], to: [5.4, 0.5], tone: "muted", thin: true },
        ],
        points: [
          { x: 0, y: 3 },
          { x: 2.6, y: 5 },
          { x: 5.4, y: 5.5 },
          { x: 5.4, y: 4.5 },
          { x: 2.6, y: 3 },
          { x: 5.4, y: 3.5 },
          { x: 5.4, y: 2.5 },
          { x: 2.6, y: 1 },
          { x: 5.4, y: 1.5 },
          { x: 5.4, y: 0.5 },
        ],
        labels: [
          { x: 2.6, y: 5, text: "red shirt", pos: "nw", style: "small" },
          { x: 5.4, y: 5.5, text: "black shorts", pos: "e", style: "small" },
          { x: 5.4, y: 4.5, text: "grey shorts", pos: "e", style: "small" },
          { x: 2.6, y: 3, text: "blue shirt", pos: "nw", style: "small" },
          { x: 5.4, y: 3.5, text: "black shorts", pos: "e", style: "small" },
          { x: 5.4, y: 2.5, text: "grey shorts", pos: "e", style: "small" },
          { x: 2.6, y: 1, text: "white shirt", pos: "sw", style: "small" },
          { x: 5.4, y: 1.5, text: "black shorts", pos: "e", style: "small" },
          { x: 5.4, y: 0.5, text: "grey shorts", pos: "e", style: "small" },
        ],
        caption: String.raw`$3$ shirts, each with $2$ choices of shorts: $3 \times 2 = 6$ outfits.`,
        alt: "Tree diagram: a starting point branches to 3 shirts, and each shirt branches to black shorts and grey shorts, giving 6 end points.",
      },
    },
    {
      title: String.raw`"Or" means add — and sometimes subtract`,
      body: String.raw`If the ways split into **separate cases**, count each case and add.

Example: to get to the zoo you can take one of 2 bus services **or** one of 3 train services: $2 + 3 = 5$ ways.

Sometimes it is easier to count what you **don't** want and subtract. Example: of the numbers 1 to 20, how many are not multiples of 5? There are 4 multiples of 5, so $20 - 4 = 16$.`,
    },
    {
      title: String.raw`Forming numbers from digits`,
      body: String.raw`- A number cannot start with $0$.
- Fill the **fussiest place first**: the last digit for even numbers (it must be 0, 2, 4, 6 or 8), the first digit when 0 is one of the digits.
- "Without repeating" means each place has one choice fewer. "Repeating allowed" means every place has all the choices.

Example: 2-digit numbers from 0, 1, 2 without repeating. The first digit is 1 or 2 (2 ways), then 2 digits are left for the second place: $2 \times 2 = 4$ numbers (10, 12, 20, 21).`,
    },
    {
      title: String.raw`Handshakes and games`,
      body: String.raw`With $n$ people, each person shakes $n - 1$ hands. Every handshake is counted twice (once by each person), so

$$\text{handshakes} = n \times (n - 1) \div 2$$

Example: 4 people give $4 \times 3 \div 2 = 6$ handshakes (the 6 lines in the picture).

The same rule counts games in a league where every two teams play once. If every two teams play **twice** (home and away), do not divide by 2.`,
      figure: {
        type: "plot",
        x: [-1.2, 4.2],
        y: [-0.7, 3.7],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [3, 0], tone: "accent" },
          { from: [0, 0], to: [3, 3], tone: "accent" },
          { from: [0, 0], to: [0, 3], tone: "accent" },
          { from: [3, 0], to: [3, 3], tone: "accent" },
          { from: [3, 0], to: [0, 3], tone: "accent" },
          { from: [3, 3], to: [0, 3], tone: "accent" },
        ],
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 0 },
          { x: 3, y: 3 },
          { x: 0, y: 3 },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 3, y: 0, text: "B", pos: "se" },
          { x: 3, y: 3, text: "C", pos: "ne" },
          { x: 0, y: 3, text: "D", pos: "nw" },
        ],
        caption: String.raw`4 people, 6 handshakes: AB, AC, AD, BC, BD, CD.`,
        alt: "Four points A, B, C, D at the corners of a square, with all 6 joining lines drawn.",
      },
    },
    {
      title: String.raw`Shortest paths on a grid: add as you go`,
      body: String.raw`When you may only move **right** or **up**, the number of ways to reach a corner = (ways to reach the corner on its left) + (ways to reach the corner below it).

Start with 1 at every corner along the bottom edge and the left edge, then fill in the rest, corner by corner.

If a corner is closed, write 0 there. If you must pass through a point P, count the ways to P, count the ways from P onwards, and multiply.`,
      figure: {
        type: "plot",
        x: [-0.7, 3.7],
        y: [-0.7, 2.7],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [0, 2], tone: "ink" },
          { from: [1, 0], to: [1, 2], tone: "ink" },
          { from: [2, 0], to: [2, 2], tone: "ink" },
          { from: [3, 0], to: [3, 2], tone: "ink" },
          { from: [0, 0], to: [3, 0], tone: "ink" },
          { from: [0, 1], to: [3, 1], tone: "ink" },
          { from: [0, 2], to: [3, 2], tone: "ink" },
        ],
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 2 },
        ],
        labels: [
          { x: 0, y: 0, text: "A", pos: "sw" },
          { x: 3, y: 2, text: "B", pos: "se" },
          { x: 0, y: 0, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 0, y: 1, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 0, y: 2, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 1, y: 0, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 1, y: 1, text: "2", pos: "ne", style: "small", tone: "accent" },
          { x: 1, y: 2, text: "3", pos: "ne", style: "small", tone: "accent" },
          { x: 2, y: 0, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 2, y: 1, text: "3", pos: "ne", style: "small", tone: "accent" },
          { x: 2, y: 2, text: "6", pos: "ne", style: "small", tone: "accent" },
          { x: 3, y: 0, text: "1", pos: "ne", style: "small", tone: "accent" },
          { x: 3, y: 1, text: "4", pos: "ne", style: "small", tone: "accent" },
          { x: 3, y: 2, text: "10", pos: "ne", style: "small", tone: "accent" },
        ],
        caption: String.raw`Each number is the sum of the number on its left and the number below it. There are $10$ shortest routes from A to B.`,
        alt: "A 3 by 2 grid of streets from A at the bottom left to B at the top right. Each corner is labelled with the number of routes to reach it: bottom row 1 1 1 1, middle row 1 2 3 4, top row 1 3 6 10.",
      },
    },
    {
      title: String.raw`Counting shapes: sort by size`,
      body: String.raw`Count the shapes **one size at a time**, then add.

- Squares in a 2 by 2 grid: four 1 by 1 squares and one 2 by 2 square: $4 + 1 = 5$.
- Rectangles in a strip of 3 squares: lengths 1, 2 and 3 give $3 + 2 + 1 = 6$.
- Triangles in a "fan" (lines from the top corner to the base): any two of the lines from the top, together with the base, make one triangle.`,
    },
    {
      title: String.raw`Arrangements in a row`,
      body: String.raw`- $n$ different things in a row: $n \times (n-1) \times \cdots \times 2 \times 1$ ways. Example: 3 books on a shelf: $3 \times 2 \times 1 = 6$ ways.
- **Must be together**: glue them into one block. Arrange the block with the others, then multiply by the ways to arrange inside the block.
- **Must not be together**: (all arrangements) $-$ (arrangements where they are together).
- **Fixed seat**: place the fussy person first.

Example: A, B, C, D in a row with A and B together. The block AB with C and D is 3 items: $6$ ways, and AB or BA: $\times 2$, so $12$ ways.`,
    },
    {
      title: String.raw`Same letters and the gap method`,
      body: String.raw`- If some things are **exactly the same**, swapping them gives nothing new. Count as if they were all different, then divide. Example: the letters of TOT. If the two Ts were different there would be $3 \times 2 \times 1 = 6$ orders, but each order is counted twice, so there are $6 \div 2 = 3$: TOT, TTO, OTT.
- **No two next to each other**: first line up everything else, then put the fussy things into the **gaps** (between them and at both ends), at most one in each gap.

Example: 2 red beads and 3 blue beads in a row (beads of the same colour look alike), with the red beads apart. B B B has 4 gaps: _ B _ B _ B _. Choose 2 of the 4 gaps for the red beads: 6 ways.`,
    },
    {
      title: String.raw`Counting routes by their turns`,
      body: String.raw`A route that only moves right (R) or up (U) can be written as a list of letters, such as R R U R U U. Group the letters into **runs**: RR, U, R, UU. Each change from one run to the next is a **turn**, so this route has 3 turns.

To count routes with a certain number of turns:

1. Decide how many runs of R and how many runs of U there are (they take turns, starting with R or with U).
2. Count the ways to split the Rs into that many runs, each at least 1 long. Do the same for the Us.
3. Multiply, then add the "start with R" and "start with U" cases.

Example: 3 Rs split into 2 runs: 1 + 2 or 2 + 1, so 2 ways.`,
    },
  ],
  archetypes: [
    {
      id: "C1-systematic-listing",
      name: String.raw`Systematic listing`,
      tests: String.raw`The answer is a small number found by writing every possibility in an organised list (coins, sums, steps). Recognise it when there is no simple multiplication because the choices affect each other.`,
      questions: [
        {
          stem: String.raw`Siti has plenty of 10-cent, 20-cent and 50-cent coins. In how many different ways can she pay exactly 60 cents? (The order of the coins does not matter.)`,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`],
          difficulty: 1,
          answer: String.raw`(C) $5$`,
        },
        {
          stem: String.raw`In how many ways can $10$ be written as the sum of three **different** whole numbers, each at least $1$? The order does not matter, so $1 + 2 + 7$ and $7 + 2 + 1$ count as the same way.`,
          difficulty: 2,
          answer: String.raw`$4$ ways`,
        },
        {
          stem: String.raw`A staircase has $8$ steps. Ravi climbs to the top by taking either $1$ step or $2$ steps at a time. For example, $2, 2, 2, 2$ and $1, 2, 2, 2, 1$ are two different ways. In how many different ways can he climb the staircase?`,
          difficulty: 3,
          answer: String.raw`$34$ ways`,
        },
        {
          stem: String.raw`Jamal throws $3$ darts at a board. Each dart lands in a ring worth $1$, $3$ or $5$ points, and two or more darts may land in the same ring. He adds up his points. How many different totals are possible?`,
          choices: [String.raw`$5$`, String.raw`$7$`, String.raw`$10$`, String.raw`$27$`],
          difficulty: 1,
          answer: String.raw`(B) $7$`,
        },
        {
          stem: String.raw`A box has plenty of rods of each of these lengths: $2$ cm, $3$ cm, $5$ cm and $8$ cm. Wei joins three rods end to end to make a triangle (two or all three rods may have the same length). How many different triangles can he make? Triangles with the same three side lengths count as the same. (Remember: in a triangle, the two shorter sides added together must be longer than the longest side.)`,
          difficulty: 2,
          answer: String.raw`$13$ triangles`,
        },
        {
          stem: String.raw`Mei has two 20-cent coins, two 50-cent coins and one \$1 coin. How many different amounts of money can she pay exactly, using one or more of these coins?`,
          difficulty: 3,
          answer: String.raw`$14$ amounts`,
        },
        {
          stem: String.raw`In a *doubling list*, each number is at least twice the number just before it. For example, $3, 7, 15$ is a doubling list, and a list with just one number also counts. How many doubling lists of whole numbers, each at least $1$, have a total of $20$?`,
          difficulty: 4,
          answer: String.raw`$17$ lists`,
        },
      ],
    },
    {
      id: "C1-multiplication-principle",
      name: String.raw`Choices in steps: outfits, routes and colourings`,
      tests: String.raw`A choice is made in several steps (one item of each kind, one road then the next, one colour per stripe). Multiply the choices for each step, and add separate cases.`,
      questions: [
        {
          stem: String.raw`Mei has $4$ T-shirts, $3$ skirts and $2$ pairs of shoes. An outfit is one T-shirt, one skirt and one pair of shoes. How many different outfits can she make?`,
          choices: [String.raw`$9$`, String.raw`$12$`, String.raw`$24$`, String.raw`$36$`],
          difficulty: 1,
          answer: String.raw`(C) $24$`,
        },
        {
          stem: String.raw`The diagram shows the roads joining three towns A, B and C. There are $3$ roads between A and B, $4$ roads between B and C, and $2$ roads that go straight from A to C. Jun travels from A to C without visiting any town twice. How many different routes can he take?`,
          figure: {
            type: "plot",
            x: [-0.8, 10.8],
            y: [-1.4, 3.2],
            equal: true,
            axes: false,
            curves: [
              { param: "t => [(1-t)*(1-t)*0 + 2*(1-t)*t*2.909 + t*t*5, (1-t)*(1-t)*0 + 2*(1-t)*t*-0.021 + t*t*2]", t: [0, 1], tone: "ink", samples: 120 },
              { fn: "x => 0.4*x", domain: [0, 5], tone: "ink" },
              { param: "t => [(1-t)*(1-t)*0 + 2*(1-t)*t*2.091 + t*t*5, (1-t)*(1-t)*0 + 2*(1-t)*t*2.021 + t*t*2]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*5 + 2*(1-t)*t*7.054 + t*t*10, (1-t)*(1-t)*2 + 2*(1-t)*t*-0.114 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*5 + 2*(1-t)*t*7.351 + t*t*10, (1-t)*(1-t)*2 + 2*(1-t)*t*0.629 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*5 + 2*(1-t)*t*7.649 + t*t*10, (1-t)*(1-t)*2 + 2*(1-t)*t*1.371 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*5 + 2*(1-t)*t*7.946 + t*t*10, (1-t)*(1-t)*2 + 2*(1-t)*t*2.114 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*0 + 2*(1-t)*t*5 + t*t*10, (1-t)*(1-t)*0 + 2*(1-t)*t*-1.1 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
              { param: "t => [(1-t)*(1-t)*0 + 2*(1-t)*t*5 + t*t*10, (1-t)*(1-t)*0 + 2*(1-t)*t*-2 + t*t*0]", t: [0, 1], tone: "ink", samples: 120 },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 5, y: 2 },
              { x: 10, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "w" },
              { x: 5, y: 2, text: "B", pos: "n" },
              { x: 10, y: 0, text: "C", pos: "e" },
            ],
            alt: "Three towns A, B and C. Three roads join A and B, four roads join B and C, and two roads run below from A straight to C.",
          },
          difficulty: 2,
          answer: String.raw`$14$ routes`,
        },
        {
          stem: String.raw`A flag has $4$ horizontal stripes. Each stripe is coloured red, blue, green or yellow. Stripes next to each other must have different colours, and the top stripe and the bottom stripe must also have different colours. How many different flags can be made?`,
          difficulty: 3,
          answer: String.raw`$84$ flags`,
        },
        {
          stem: String.raw`At a café, a sandwich is made with one of $3$ kinds of bread and one of $4$ fillings. The customer may also add one of $2$ sauces, or have no sauce at all. How many different sandwiches are possible?`,
          difficulty: 1,
          answer: String.raw`$36$ sandwiches`,
        },
        {
          stem: String.raw`Five houses stand in a row. Each house is painted red, blue or yellow, and houses next to each other must be different colours. In how many ways can the five houses be painted?`,
          choices: [String.raw`$15$`, String.raw`$48$`, String.raw`$81$`, String.raw`$243$`],
          difficulty: 2,
          answer: String.raw`(B) $48$`,
        },
        {
          stem: String.raw`The diagram shows how many roads join four towns A, B, C and D. For example, there are $2$ roads between A and B, and $1$ road between B and C. Wan travels from A to D without visiting any town more than once. How many different routes can he take?`,
          figure: {
            type: "plot",
            x: [-1, 9.2],
            y: [-3.3, 3.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [4, 2.4], tone: "ink" },
              { from: [4, 2.4], to: [8, 0], tone: "ink" },
              { from: [0, 0], to: [4, -2.4], tone: "ink" },
              { from: [4, -2.4], to: [8, 0], tone: "ink" },
              { from: [4, 2.4], to: [4, -2.4], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 4, y: 2.4 },
              { x: 4, y: -2.4 },
              { x: 8, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "w" },
              { x: 4, y: 2.4, text: "B", pos: "n" },
              { x: 4, y: -2.4, text: "C", pos: "s" },
              { x: 8, y: 0, text: "D", pos: "e" },
              { x: 2, y: 1.2, text: "2 roads", pos: "nw", style: "small" },
              { x: 6, y: 1.2, text: "3 roads", pos: "ne", style: "small" },
              { x: 2, y: -1.2, text: "3 roads", pos: "sw", style: "small" },
              { x: 6, y: -1.2, text: "2 roads", pos: "se", style: "small" },
              { x: 4, y: 0, text: "1 road", pos: "e", style: "small" },
            ],
            alt: "Four towns: A on the left, B at the top, C at the bottom and D on the right. Lines join A to B (2 roads), B to D (3 roads), A to C (3 roads), C to D (2 roads) and B to C (1 road).",
          },
          difficulty: 3,
          answer: String.raw`$25$ routes`,
        },
        {
          stem: String.raw`The target shown is made of a small circle in the middle and a ring split into $5$ parts, so it has $6$ regions. Each region is painted one of $4$ colours. Regions that share a border must be different colours (the middle circle shares a border with every part of the ring, and each part of the ring shares a border with the two parts next to it). The target is fixed on a wall, so two paintings that differ only by turning the target count as different. In how many ways can it be painted?`,
          figure: {
            type: "plot",
            x: [-2.9, 2.9],
            y: [-2.9, 2.9],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1, tone: "ink" },
              { c: [0, 0], r: 2.5, tone: "ink" },
            ],
            segments: [
              { from: [0, 1], to: [0, 2.5], tone: "ink" },
              { from: [-0.951, 0.309], to: [-2.378, 0.773], tone: "ink" },
              { from: [-0.588, -0.809], to: [-1.469, -2.023], tone: "ink" },
              { from: [0.588, -0.809], to: [1.469, -2.023], tone: "ink" },
              { from: [0.951, 0.309], to: [2.378, 0.773], tone: "ink" },
            ],
            alt: "A target: a small circle in the middle, surrounded by a ring that is split by five straight lines into five equal parts.",
          },
          difficulty: 4,
          answer: String.raw`$120$ ways`,
        },
      ],
    },
    {
      id: "C1-forming-numbers",
      name: String.raw`Forming numbers from digits`,
      tests: String.raw`Count the numbers that can be made from given digits, with or without repeating, sometimes with a condition (even, a digit 0 that cannot go first, contains a 7). Fill the fussiest place first, or count the opposite and subtract.`,
      questions: [
        {
          stem: String.raw`How many different 3-digit numbers can be formed using the digits $2$, $5$, $7$ and $9$ if no digit may be used more than once?`,
          difficulty: 1,
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`How many 3-digit **even** numbers can be formed using the digits $0$, $1$, $2$, $3$ and $4$ if no digit may be repeated?`,
          choices: [String.raw`$24$`, String.raw`$30$`, String.raw`$36$`, String.raw`$48$`],
          difficulty: 2,
          answer: String.raw`(B) $30$`,
        },
        {
          stem: String.raw`How many 3-digit numbers (from $100$ to $999$) contain at least one digit $7$?`,
          difficulty: 3,
          answer: String.raw`$252$`,
        },
        {
          stem: String.raw`How many 4-digit numbers greater than $6000$ can be formed using each of the digits $1$, $3$, $6$ and $8$ exactly once?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Using the digits $1$, $2$, $3$, $4$ and $5$, with no digit repeated, how many 3-digit numbers can be made that are multiples of $3$?`,
          choices: [String.raw`$12$`, String.raw`$18$`, String.raw`$24$`, String.raw`$60$`],
          difficulty: 2,
          answer: String.raw`(C) $24$`,
        },
        {
          stem: String.raw`In the number $1358$, each digit is bigger than the digit just before it. How many whole numbers from $1$ to $999$ have this property? (Every one-digit number counts.)`,
          difficulty: 3,
          answer: String.raw`$129$`,
        },
        {
          stem: String.raw`How many 4-digit numbers have four different digits and are multiples of $4$?`,
          difficulty: 4,
          answer: String.raw`$1120$`,
        },
      ],
    },
    {
      id: "C1-handshakes-games",
      name: String.raw`Handshakes and league games`,
      tests: String.raw`Everyone meets everyone (handshakes, greetings, league matches). Use $n \times (n-1) \div 2$, or work backwards from the total to find the number of people or teams.`,
      questions: [
        {
          stem: String.raw`At a meeting, each of the $8$ people shakes hands once with every other person. How many handshakes are there?`,
          choices: [String.raw`$16$`, String.raw`$28$`, String.raw`$56$`, String.raw`$64$`],
          difficulty: 1,
          answer: String.raw`(B) $28$`,
        },
        {
          stem: String.raw`In a football league, every team plays every other team twice, once at home and once away. A total of $90$ matches were played. How many teams are in the league?`,
          difficulty: 2,
          answer: String.raw`$10$ teams`,
        },
        {
          stem: String.raw`In a chess tournament, every player plays every other player exactly once. A win scores $2$ points, a draw scores $1$ point for each player and a loss scores $0$ points. When the tournament ended, the scores of all the players added up to $156$ points. How many players took part?`,
          difficulty: 3,
          answer: String.raw`$13$ players`,
        },
        {
          stem: String.raw`Each of $6$ friends sends a New Year card to every one of the other friends. How many cards are sent altogether?`,
          choices: [String.raw`$12$`, String.raw`$15$`, String.raw`$30$`, String.raw`$36$`],
          difficulty: 1,
          answer: String.raw`(C) $30$`,
        },
        {
          stem: String.raw`At a party, every two guests shook hands exactly once, except for two guests who had quarrelled and did not shake hands with each other. There were $44$ handshakes in all. How many guests were at the party?`,
          difficulty: 2,
          answer: String.raw`$10$ guests`,
        },
        {
          stem: String.raw`There are $12$ children at a party. Every boy shook hands once with every girl, and every two girls shook hands once with each other, but no two boys shook hands. There were $60$ handshakes in all. How many girls were at the party?`,
          difficulty: 3,
          answer: String.raw`$8$ girls`,
        },
        {
          stem: String.raw`Five teams A, B, C, D and E play a tournament in which every two teams play each other once. A win scores $3$ points, a draw scores $1$ point for each team and a loss scores $0$ points. At the end, A has $10$ points, B has $7$ points, C has $5$ points and D has $4$ points. How many points does E have?`,
          difficulty: 4,
          answer: String.raw`$1$ point`,
        },
      ],
    },
    {
      id: "C1-grid-paths",
      name: String.raw`Shortest paths on a grid`,
      tests: String.raw`Count the routes along a grid of streets moving only right or up, sometimes through a given point or avoiding a closed crossing, or with extra rules such as diagonal steps or a fixed number of turns. Write the number of ways at each corner and add.`,
      questions: [
        {
          stem: String.raw`The diagram shows a grid of roads. Ali walks from A to B along the roads, always moving right or up. How many different routes can he take?`,
          figure: {
            type: "plot",
            x: [-0.7, 3.7],
            y: [-0.7, 3.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 3], tone: "ink" },
              { from: [1, 0], to: [1, 3], tone: "ink" },
              { from: [2, 0], to: [2, 3], tone: "ink" },
              { from: [3, 0], to: [3, 3], tone: "ink" },
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [0, 1], to: [3, 1], tone: "ink" },
              { from: [0, 2], to: [3, 2], tone: "ink" },
              { from: [0, 3], to: [3, 3], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 3, y: 3 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 3, y: 3, text: "B", pos: "ne" },
            ],
            alt: "A 3 by 3 grid of roads with A at the bottom left corner and B at the top right corner.",
          },
          difficulty: 1,
          answer: String.raw`$20$ routes`,
        },
        {
          stem: String.raw`The diagram shows a grid of roads. Ben walks from A to B along the roads, always moving right or up, and he must pass through the point P. How many different routes can he take?`,
          figure: {
            type: "plot",
            x: [-0.7, 4.7],
            y: [-0.7, 3.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 3], tone: "ink" },
              { from: [1, 0], to: [1, 3], tone: "ink" },
              { from: [2, 0], to: [2, 3], tone: "ink" },
              { from: [3, 0], to: [3, 3], tone: "ink" },
              { from: [4, 0], to: [4, 3], tone: "ink" },
              { from: [0, 0], to: [4, 0], tone: "ink" },
              { from: [0, 1], to: [4, 1], tone: "ink" },
              { from: [0, 2], to: [4, 2], tone: "ink" },
              { from: [0, 3], to: [4, 3], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 4, y: 3 },
              { x: 2, y: 1 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 4, y: 3, text: "B", pos: "ne" },
              { x: 2, y: 1, text: "P", pos: "se" },
            ],
            alt: "A 4 by 3 grid of roads with A at the bottom left, B at the top right, and P two blocks right and one block up from A.",
          },
          difficulty: 2,
          answer: String.raw`$18$ routes`,
        },
        {
          stem: String.raw`The diagram shows a grid of roads. The crossing marked with a cross is closed, so no one can pass through it. Cara walks from A to B along the roads, always moving right or up. How many different routes can she take?`,
          figure: {
            type: "plot",
            x: [-0.7, 4.7],
            y: [-0.7, 4.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [0, 4], tone: "ink" },
              { from: [1, 0], to: [1, 4], tone: "ink" },
              { from: [2, 0], to: [2, 4], tone: "ink" },
              { from: [3, 0], to: [3, 4], tone: "ink" },
              { from: [4, 0], to: [4, 4], tone: "ink" },
              { from: [0, 0], to: [4, 0], tone: "ink" },
              { from: [0, 1], to: [4, 1], tone: "ink" },
              { from: [0, 2], to: [4, 2], tone: "ink" },
              { from: [0, 3], to: [4, 3], tone: "ink" },
              { from: [0, 4], to: [4, 4], tone: "ink" },
              { from: [1.82, 1.82], to: [2.18, 2.18], tone: "warn" },
              { from: [1.82, 2.18], to: [2.18, 1.82], tone: "warn" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 4, y: 4 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 4, y: 4, text: "B", pos: "ne" },
            ],
            alt: "A 4 by 4 grid of roads with A at the bottom left, B at the top right, and a cross on the crossing two blocks right and two blocks up from A.",
          },
          difficulty: 3,
          answer: String.raw`$34$ routes`,
        },
        {
          stem: String.raw`The diagram shows a grid of roads. One piece of road is missing, so no one can walk along it. Siti walks from A to B along the roads, always moving right or up. How many different routes can she take?`,
          figure: {
            type: "plot",
            x: [-0.7, 3.7],
            y: [-0.7, 2.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [0, 1], to: [1, 1], tone: "ink" },
              { from: [2, 1], to: [3, 1], tone: "ink" },
              { from: [0, 2], to: [3, 2], tone: "ink" },
              { from: [0, 0], to: [0, 2], tone: "ink" },
              { from: [1, 0], to: [1, 2], tone: "ink" },
              { from: [2, 0], to: [2, 2], tone: "ink" },
              { from: [3, 0], to: [3, 2], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 3, y: 2 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 3, y: 2, text: "B", pos: "ne" },
            ],
            alt: "A 3 by 2 grid of roads with A at the bottom left and B at the top right. The middle piece of road on the middle horizontal line is missing.",
          },
          difficulty: 1,
          answer: String.raw`$6$ routes`,
        },
        {
          stem: String.raw`The diagram shows the roads in a town. The shaded part is a park with no roads inside it, but people can walk along its edges. Dan walks from A to B along the roads, always moving right or up. How many different routes can he take?`,
          figure: {
            type: "plot",
            x: [-0.7, 5.7],
            y: [-0.7, 4.7],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1, 1], [4, 1], [4, 3], [1, 3]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [0, 1], to: [5, 1], tone: "ink" },
              { from: [0, 2], to: [1, 2], tone: "ink" },
              { from: [4, 2], to: [5, 2], tone: "ink" },
              { from: [0, 3], to: [5, 3], tone: "ink" },
              { from: [0, 4], to: [5, 4], tone: "ink" },
              { from: [0, 0], to: [0, 4], tone: "ink" },
              { from: [1, 0], to: [1, 4], tone: "ink" },
              { from: [2, 0], to: [2, 1], tone: "ink" },
              { from: [2, 3], to: [2, 4], tone: "ink" },
              { from: [3, 0], to: [3, 1], tone: "ink" },
              { from: [3, 3], to: [3, 4], tone: "ink" },
              { from: [4, 0], to: [4, 4], tone: "ink" },
              { from: [5, 0], to: [5, 4], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 5, y: 4 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 5, y: 4, text: "B", pos: "ne" },
              { x: 2.5, y: 2, text: "park", pos: "c", style: "small" },
            ],
            alt: "A 5 by 4 grid of roads with A at the bottom left and B at the top right. A shaded rectangular park, 3 blocks wide and 2 blocks tall, sits in the middle, one block in from the left, right and bottom edges; there are no roads inside it, only along its edges.",
          },
          difficulty: 2,
          answer: String.raw`$42$ routes`,
        },
        {
          stem: String.raw`The diagram shows a $3$ by $3$ grid of paths. Every small square also has a path along its diagonal, from its bottom-left corner to its top-right corner. Lily walks from A to B along the paths, each time moving right, up, or up-and-right along a diagonal. How many different routes can she take?`,
          figure: {
            type: "plot",
            x: [-0.7, 3.7],
            y: [-0.7, 3.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [0, 1], to: [3, 1], tone: "ink" },
              { from: [0, 2], to: [3, 2], tone: "ink" },
              { from: [0, 3], to: [3, 3], tone: "ink" },
              { from: [0, 0], to: [0, 3], tone: "ink" },
              { from: [1, 0], to: [1, 3], tone: "ink" },
              { from: [2, 0], to: [2, 3], tone: "ink" },
              { from: [3, 0], to: [3, 3], tone: "ink" },
              { from: [0, 0], to: [1, 1], tone: "ink", thin: true },
              { from: [0, 1], to: [1, 2], tone: "ink", thin: true },
              { from: [0, 2], to: [1, 3], tone: "ink", thin: true },
              { from: [1, 0], to: [2, 1], tone: "ink", thin: true },
              { from: [1, 1], to: [2, 2], tone: "ink", thin: true },
              { from: [1, 2], to: [2, 3], tone: "ink", thin: true },
              { from: [2, 0], to: [3, 1], tone: "ink", thin: true },
              { from: [2, 1], to: [3, 2], tone: "ink", thin: true },
              { from: [2, 2], to: [3, 3], tone: "ink", thin: true },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 3, y: 3 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 3, y: 3, text: "B", pos: "ne" },
            ],
            alt: "A 3 by 3 grid of paths with A at the bottom left and B at the top right. Every small square also has a path along its diagonal from bottom left to top right.",
          },
          difficulty: 3,
          answer: String.raw`$63$ routes`,
        },
        {
          stem: String.raw`Ali walks along the grid of roads shown from A to B, always moving right or up. Each time he changes from going right to going up, or from going up to going right, he makes a *turn*. How many of his possible routes have exactly $4$ turns?`,
          figure: {
            type: "plot",
            x: [-0.7, 6.7],
            y: [-0.7, 4.7],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [0, 1], to: [6, 1], tone: "ink" },
              { from: [0, 2], to: [6, 2], tone: "ink" },
              { from: [0, 3], to: [6, 3], tone: "ink" },
              { from: [0, 4], to: [6, 4], tone: "ink" },
              { from: [0, 0], to: [0, 4], tone: "ink" },
              { from: [1, 0], to: [1, 4], tone: "ink" },
              { from: [2, 0], to: [2, 4], tone: "ink" },
              { from: [3, 0], to: [3, 4], tone: "ink" },
              { from: [4, 0], to: [4, 4], tone: "ink" },
              { from: [5, 0], to: [5, 4], tone: "ink" },
              { from: [6, 0], to: [6, 4], tone: "ink" },
            ],
            points: [
              { x: 0, y: 0 },
              { x: 6, y: 4 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw" },
              { x: 6, y: 4, text: "B", pos: "ne" },
            ],
            alt: "A 6 by 4 grid of roads, 6 blocks wide and 4 blocks tall, with A at the bottom left and B at the top right.",
          },
          difficulty: 4,
          answer: String.raw`$45$ routes`,
        },
      ],
    },
    {
      id: "C1-counting-shapes",
      name: String.raw`Counting shapes in a figure`,
      tests: String.raw`"How many squares / rectangles / triangles are there in the figure?" Count by size (or by which lines form the shape) so that big shapes made of smaller pieces are not missed.`,
      questions: [
        {
          stem: String.raw`The figure is a strip made of $4$ equal squares. How many rectangles of any size are there in the figure? (A square counts as a rectangle.)`,
          figure: {
            type: "plot",
            x: [-0.3, 4.3],
            y: [-0.3, 1.3],
            equal: true,
            axes: false,
            polygons: [
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
            alt: "A row of 4 equal squares joined side by side.",
          },
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`The figure is a rectangle made of $3$ rows of $5$ equal squares. How many squares of any size are there in the figure?`,
          figure: {
            type: "plot",
            x: [-0.3, 5.3],
            y: [-0.3, 3.3],
            equal: true,
            axes: false,
            polygons: [
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
            alt: "A rectangle divided into 3 rows of 5 equal squares.",
          },
          choices: [String.raw`$15$`, String.raw`$23$`, String.raw`$26$`, String.raw`$30$`],
          difficulty: 2,
          answer: String.raw`(C) $26$`,
        },
        {
          stem: String.raw`In the figure, three lines are drawn from the top corner of a triangle to its base, and one line is drawn across the triangle, parallel to the base. How many triangles of any size are there in the figure?`,
          figure: {
            type: "plot",
            x: [-0.4, 6.4],
            y: [-0.3, 4.3],
            equal: true,
            axes: false,
            segments: [
              { from: [3, 4], to: [0, 0], tone: "ink" },
              { from: [3, 4], to: [1.2, 0], tone: "ink" },
              { from: [3, 4], to: [2.6, 0], tone: "ink" },
              { from: [3, 4], to: [4.4, 0], tone: "ink" },
              { from: [3, 4], to: [6, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [1.5, 2], to: [4.5, 2], tone: "ink" },
            ],
            alt: "A triangle with three extra lines from its top corner down to the base, and one line across the middle parallel to the base.",
          },
          difficulty: 3,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A square has both of its diagonals drawn, as shown. How many triangles of any size are there in the figure?`,
          figure: {
            type: "plot",
            x: [-0.4, 4.4],
            y: [-0.4, 4.4],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [4, 0], [4, 4], [0, 4]], tone: "ink" },
            ],
            segments: [
              { from: [0, 0], to: [4, 4], tone: "ink" },
              { from: [4, 0], to: [0, 4], tone: "ink" },
            ],
            alt: "A square with both of its diagonals drawn.",
          },
          choices: [String.raw`$4$`, String.raw`$6$`, String.raw`$8$`, String.raw`$10$`],
          difficulty: 1,
          answer: String.raw`(C) $8$`,
        },
        {
          stem: String.raw`The figure is a $3$ by $3$ grid of equal squares. How many rectangles in the figure are **not** squares?`,
          figure: {
            type: "plot",
            x: [-0.3, 3.3],
            y: [-0.3, 3.3],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [0, 1], to: [3, 1], tone: "ink" },
              { from: [0, 2], to: [3, 2], tone: "ink" },
              { from: [0, 3], to: [3, 3], tone: "ink" },
              { from: [0, 0], to: [0, 3], tone: "ink" },
              { from: [1, 0], to: [1, 3], tone: "ink" },
              { from: [2, 0], to: [2, 3], tone: "ink" },
              { from: [3, 0], to: [3, 3], tone: "ink" },
            ],
            alt: "A 3 by 3 grid of equal squares.",
          },
          difficulty: 2,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`The figure shows $12$ equally spaced dots: a $4$ by $4$ array of dots with the four corner dots taken away. How many squares have all four of their corners on these dots? (The squares may be tilted.)`,
          figure: {
            type: "plot",
            x: [-0.5, 3.5],
            y: [-0.5, 3.5],
            equal: true,
            axes: false,
            points: [
              { x: 1, y: 0 },
              { x: 2, y: 0 },
              { x: 0, y: 1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 3, y: 1 },
              { x: 0, y: 2 },
              { x: 1, y: 2 },
              { x: 2, y: 2 },
              { x: 3, y: 2 },
              { x: 1, y: 3 },
              { x: 2, y: 3 },
            ],
            alt: "Twelve dots: a 4 by 4 array of equally spaced dots with the four corner dots missing.",
          },
          difficulty: 3,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`The staircase shape is made of $10$ equal squares, in rows of $4$, $3$, $2$ and $1$, as shown. How many rectangles of any size (squares included) are there in the figure?`,
          figure: {
            type: "plot",
            x: [-0.3, 4.3],
            y: [-0.3, 4.3],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [1, 0], [1, 1], [0, 1]], tone: "ink" },
              { points: [[1, 0], [2, 0], [2, 1], [1, 1]], tone: "ink" },
              { points: [[2, 0], [3, 0], [3, 1], [2, 1]], tone: "ink" },
              { points: [[3, 0], [4, 0], [4, 1], [3, 1]], tone: "ink" },
              { points: [[0, 1], [1, 1], [1, 2], [0, 2]], tone: "ink" },
              { points: [[1, 1], [2, 1], [2, 2], [1, 2]], tone: "ink" },
              { points: [[2, 1], [3, 1], [3, 2], [2, 2]], tone: "ink" },
              { points: [[0, 2], [1, 2], [1, 3], [0, 3]], tone: "ink" },
              { points: [[1, 2], [2, 2], [2, 3], [1, 3]], tone: "ink" },
              { points: [[0, 3], [1, 3], [1, 4], [0, 4]], tone: "ink" },
            ],
            alt: "A staircase of 10 equal squares: a bottom row of 4, then rows of 3, 2 and 1 above it, all lined up on the left.",
          },
          difficulty: 4,
          answer: String.raw`$35$`,
        },
      ],
    },
    {
      id: "C1-arrangements",
      name: String.raw`Arrangements in a row`,
      tests: String.raw`People or objects are lined up in a row, sometimes with conditions such as "must sit together", "must not sit together" or "must be at an end". Place the fussy ones first, glue "together" groups into a block, and subtract for "not together".`,
      questions: [
        {
          stem: String.raw`In how many different ways can $4$ children stand in a line for a photograph?`,
          difficulty: 1,
          answer: String.raw`$24$ ways`,
        },
        {
          stem: String.raw`Five friends, Amir, Beth, Chen, Devi and Eric, sit in a row of $5$ chairs. Amir and Beth must sit next to each other. In how many different ways can the five friends sit?`,
          difficulty: 2,
          answer: String.raw`$48$ ways`,
        },
        {
          stem: String.raw`Five friends, Amir, Beth, Chen, Devi and Eric, sit in a row of $5$ chairs. Amir and Beth refuse to sit next to each other, and Chen must sit in a chair at one end of the row. In how many different ways can the five friends sit?`,
          difficulty: 3,
          answer: String.raw`$24$ ways`,
        },
        {
          stem: String.raw`Five runners take part in a race and there are no ties. In how many different ways can the gold, silver and bronze medals be given out?`,
          difficulty: 1,
          answer: String.raw`$60$ ways`,
        },
        {
          stem: String.raw`How many different arrangements of all five letters of the word LEVEL are there? (An arrangement does not have to be a real word.)`,
          choices: [String.raw`$15$`, String.raw`$30$`, String.raw`$60$`, String.raw`$120$`],
          difficulty: 2,
          answer: String.raw`(B) $30$`,
        },
        {
          stem: String.raw`Four boys and three girls stand in a row for a photograph. No two girls may stand next to each other. In how many different ways can they stand?`,
          difficulty: 3,
          answer: String.raw`$1440$ ways`,
        },
        {
          stem: String.raw`In how many ways can the eight letters of the word COOKBOOK be arranged in a row so that no two letters O are next to each other?`,
          difficulty: 4,
          answer: String.raw`$60$ ways`,
        },
      ],
    },
  ],
});
