H2.addTopic({
  id: "N1",
  title: "Whole Numbers",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Place value up to 10 million, rounding and estimation, factors and multiples, the four operations, order of operations, and word problems with whole numbers.`,
  syllabus: {
    include: [
      String.raw`P1–P3: place values, reading and writing numbers in numerals and in words, comparing and ordering numbers, patterns in number sequences`,
      String.raw`P1–P3: addition and subtraction algorithms, multiplication tables, division with remainder`,
      String.raw`P4: numbers up to 100 000; rounding numbers to the nearest 10, 100 or 1000; use of $\approx$`,
      String.raw`P4: factors, multiples and their relationship; finding the common factors of two given numbers; finding the common multiples of two given 1-digit numbers`,
      String.raw`P4: multiplication algorithm (up to 4 digits by 1 digit, up to 3 digits by 2 digits) and division algorithm (up to 4 digits by 1 digit)`,
      String.raw`P5: numbers up to 10 million — reading and writing in numerals and in words`,
      String.raw`P5: multiplying and dividing by 10, 100, 1000 and their multiples without calculator`,
      String.raw`P5: order of operations and use of brackets without calculator`,
      String.raw`P1–P6: word problems involving the four operations`,
    ],
    exclude: [
      String.raw`negative numbers`,
      String.raw`prime factorisation and index notation (Secondary 1)`,
    ],
  },
  concepts: [
    {
      title: String.raw`Place value up to 10 million`,
      body: String.raw`Each place is **10 times** the place on its right.

- In $4\,307\,250$, the **digit** $3$ is in the hundred thousands place. Its **value** is $300\,000$.
- To write a number in words, split the digits into groups of three from the right: $4\,307\,250$ is "four million, three hundred and seven thousand, two hundred and fifty".
- To write a number from words, fill every empty place with a **zero**. "Two million and sixty thousand" is $2\,060\,000$.
- Common mistake: leaving out a zero. Count the digits — a number in the millions has **7 digits**.`,
      figure: {
        type: "plot",
        x: [-0.2, 14.2], y: [-0.3, 4.3], equal: true, axes: false,
        polygons: [
          ...[0, 1, 2, 3, 4, 5, 6].map((i) => ({ points: [[2 * i, 2.6], [2 * i + 2, 2.6], [2 * i + 2, 4], [2 * i, 4]], tone: "muted" })),
          ...[0, 1, 2, 3, 4, 5, 6].map((i) => ({ points: [[2 * i, 0.4], [2 * i + 2, 0.4], [2 * i + 2, 2.6], [2 * i, 2.6]], fill: i === 1, tone: i === 1 ? "accent" : "muted" })),
        ],
        labels: [
          ...["M", "HTh", "TTh", "Th", "H", "T", "O"].map((t, i) => ({ x: 2 * i + 1, y: 3.3, text: t, pos: "c", style: "small" })),
          ...["4", "3", "0", "7", "2", "5", "0"].map((t, i) => ({ x: 2 * i + 1, y: 1.5, text: t, pos: "c", style: "bold" })),
        ],
        caption: String.raw`$4\,307\,250$ in a place value chart. The digit $3$ stands for $300\,000$. (M = millions, HTh = hundred thousands, TTh = ten thousands, Th = thousands, H = hundreds, T = tens, O = ones)`,
        alt: "A place value chart with seven columns M, HTh, TTh, Th, H, T, O holding the digits 4, 3, 0, 7, 2, 5, 0. The column holding 3 (hundred thousands) is shaded.",
      },
    },
    {
      title: String.raw`Rounding and estimation`,
      body: String.raw`To round, look at the digit **just to the right** of the place you are rounding to.

- $5, 6, 7, 8$ or $9$: round **up**. $0, 1, 2, 3$ or $4$: round **down**.
- Example: $4\,637 \approx 4\,600$ (nearest hundred), because the tens digit is $3$.
- The numbers that round to $4\,600$ (nearest hundred) go from $4\,550$ up to $4\,649$.
- To **estimate**, round the numbers first so they are easy to work with: $398 \times 21 \approx 400 \times 20 = 8\,000$.
- Common mistake: forgetting to carry. $2\,961$ to the nearest hundred is $3\,000$, not $2\,900$.`,
      figure: {
        type: "plot",
        x: [-1.2, 11.2], y: [-1.6, 2.4], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [10, 0], tone: "ink" },
          ...Array.from({ length: 11 }, (_, i) => ({ from: [i, -0.15], to: [i, 0.15], tone: "ink", thin: true })),
          { from: [0, -0.35], to: [0, 0.35], tone: "ink" },
          { from: [10, -0.35], to: [10, 0.35], tone: "ink" },
          { from: [5, -0.6], to: [5, 1.0], tone: "muted", dashed: true, thin: true },
          { from: [3.5, 1.2], to: [0.4, 1.2], tone: "warn", arrow: true, label: "nearer to 4 600", pos: "n", style: "small", labelAt: [1.9, 1.2] },
        ],
        points: [{ x: 3.7, y: 0, label: "4 637", pos: "n" }],
        labels: [
          { x: 0, y: -0.35, text: "4 600", pos: "s", style: "plain" },
          { x: 10, y: -0.35, text: "4 700", pos: "s", style: "plain" },
          { x: 5, y: -0.6, text: "4 650", pos: "s", style: "small" },
        ],
        caption: String.raw`$4\,637$ is to the left of the halfway mark $4\,650$, so it rounds down to $4\,600$.`,
        alt: "A number line from 4 600 to 4 700 with ticks every 10. The halfway mark 4 650 is dashed. The point 4 637 lies left of it, closer to 4 600.",
      },
    },
    {
      title: String.raw`Factors and multiples`,
      body: String.raw`If $3 \times 4 = 12$, then $3$ and $4$ are **factors** of $12$, and $12$ is a **multiple** of $3$ and of $4$.

- Find factors in **pairs**: $12 = 1 \times 12 = 2 \times 6 = 3 \times 4$. The factors are $1, 2, 3, 4, 6, 12$.
- Multiples go on for ever: multiples of $4$ are $4, 8, 12, 16, \ldots$
- $1$ is a factor of every number. Every number is a factor **and** a multiple of itself.
- A **common factor** divides both numbers. A **common multiple** is in both lists. The **smallest** common multiple of $4$ and $6$ is $12$.
- Quick checks: a multiple of $2$ ends in $0, 2, 4, 6, 8$; of $5$ ends in $0$ or $5$; of $10$ ends in $0$; of $3$ has digits that add up to a multiple of $3$.
- Common mistake: mixing the two words. Factors are **small** (at most the number). Multiples are **big** (at least the number).`,
      figure: {
        type: "plot",
        x: [-4.2, 4.2], y: [-2.6, 3.0], equal: true, axes: false,
        circles: [
          { c: [-1.15, 0], r: 2.2, fill: true, tone: "accent" },
          { c: [1.15, 0], r: 2.2, fill: true, tone: "good" },
        ],
        labels: [
          { x: -2.0, y: 2.4, text: "Factors of 12", pos: "c", style: "small" },
          { x: 2.0, y: 2.4, text: "Factors of 18", pos: "c", style: "small" },
          { x: -2.2, y: 0.5, text: "4", pos: "c" },
          { x: -2.2, y: -0.5, text: "12", pos: "c" },
          { x: 2.2, y: 0.5, text: "9", pos: "c" },
          { x: 2.2, y: -0.5, text: "18", pos: "c" },
          { x: -0.4, y: 0.5, text: "1", pos: "c" },
          { x: 0.4, y: 0.5, text: "2", pos: "c" },
          { x: -0.4, y: -0.5, text: "3", pos: "c" },
          { x: 0.4, y: -0.5, text: "6", pos: "c" },
        ],
        caption: String.raw`The common factors of $12$ and $18$ are in the overlap: $1, 2, 3, 6$.`,
        alt: "Two overlapping circles. Left: factors of 12 (4 and 12 only in the left part). Right: factors of 18 (9 and 18 only in the right part). The overlap holds the common factors 1, 2, 3 and 6.",
      },
    },
    {
      title: String.raw`The four operations and remainders`,
      body: String.raw`Know the words: **sum** ($+$), **difference** ($-$), **product** ($\times$), **quotient** ($\div$).

- $\text{dividend} = \text{divisor} \times \text{quotient} + \text{remainder}$, and the remainder is always **smaller** than the divisor. $50 \div 8 = 6$ remainder $2$, because $8 \times 6 + 2 = 50$.
- In a story, think about what the remainder means:
  - "How many buses are **needed**?" — the leftover people still need a bus, so **round up**.
  - "How many boxes can be **filled**?" — a part-filled box does not count, so **round down**.
- Check a subtraction by adding back, and a division by multiplying back.`,
    },
    {
      title: String.raw`Order of operations`,
      body: String.raw`Work in this order:

1. **Brackets** first.
2. Then $\times$ and $\div$, from **left to right**.
3. Then $+$ and $-$, from **left to right**.

- Example: $20 - 8 \div 2 \times 3 = 20 - 4 \times 3 = 20 - 12 = 8$.
- $\times$ does **not** come before $\div$. Go left to right: $24 \div 4 \times 2 = 6 \times 2 = 12$, not $24 \div 8 = 3$.
- Common mistake: working from left to right with everything, e.g. $5 + 3 \times 4 = 8 \times 4$. Multiply first: $5 + 12 = 17$.`,
    },
    {
      title: String.raw`Multiplying and dividing by 10, 100, 1000 and their multiples`,
      body: String.raw`- $\times 10$, $\times 100$, $\times 1000$: every digit moves $1$, $2$ or $3$ places to the **left**, so add $1$, $2$ or $3$ zeros: $56 \times 100 = 5\,600$.
- $\div 10$, $\div 100$, $\div 1000$: every digit moves to the **right**, so remove zeros: $78\,000 \div 1000 = 78$.
- **Multiples** such as $30$ or $400$: split them up. $12 \times 400 = 12 \times 4 \times 100 = 4\,800$.
- Dividing: $36\,000 \div 400 = 360 \div 4 = 90$ (take two zeros off both numbers first).
- Common mistake: losing a zero, e.g. $50 \times 40 = 200$. It is $5 \times 4 = 20$, then add **two** zeros: $2\,000$.`,
    },
    {
      title: String.raw`Word problems: draw a model`,
      body: String.raw`Draw one bar for each person or item. Put the numbers you know on the model.

- **Total and difference**: take away the difference, then share equally. Smaller $= (\text{total} - \text{difference}) \div 2$.
- **Times as many**: "A has 3 times as many as B" means B is $1$ unit and A is $3$ units. Find $1$ unit first.
- **Multi-step** problems: write a short sentence for each step (e.g. "Number of boxes $= 96 \div 8 = 12$"). Method marks are given for working.
- Read the question again at the end. Did it ask for the smaller number, the larger number, or the total?`,
      figure: {
        type: "plot",
        x: [-7, 39], y: [-1.5, 11.5], equal: true, axes: false,
        polygons: [
          { points: [[0, 6], [20, 6], [20, 9], [0, 9]], fill: true, tone: "accent" },
          { points: [[20, 6], [30, 6], [30, 9], [20, 9]], fill: true, tone: "warn" },
          { points: [[0, 1], [20, 1], [20, 4], [0, 4]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [20, 10], to: [30, 10], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "difference 10", pos: "n", style: "small" },
          { from: [0, 0], to: [20, 0], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "(50 − 10) ÷ 2 = 20", pos: "s", style: "small" },
          { from: [32, 1], to: [32, 9], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "total 50", pos: "e", style: "small" },
        ],
        labels: [
          { x: -0.5, y: 7.5, text: "Larger", pos: "w" },
          { x: -0.5, y: 2.5, text: "Smaller", pos: "w" },
        ],
        caption: String.raw`Two numbers have a total of $50$ and a difference of $10$. Without the extra part, the two bars are equal.`,
        alt: "Two bars. The larger bar is the smaller bar plus an extra part marked difference 10. The total of both bars is 50, so the smaller bar is (50 − 10) ÷ 2 = 20.",
      },
    },
  ],
  archetypes: [
    {
      id: "N1-place-value-words",
      name: String.raw`Place value, numerals and words`,
      tests: String.raw`Reading the value of a digit in a number up to 10 million, and changing between numerals and words. Look out for zeros that hold empty places.`,
      questions: [
        {
          stem: String.raw`What is the value of the digit $4$ in $6\,049\,315$?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$400$`, String.raw`$4\,000$`, String.raw`$40\,000$`, String.raw`$400\,000$`],
        },
        {
          stem: String.raw`Answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Write $2\,406\,050$ in words.`, marks: 1 },
            { label: "(b)", text: String.raw`What is the missing number in the box? $$3\,000\,000 + 50\,000 + \square + 70 = 3\,058\,070$$`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-rounding",
      name: String.raw`Rounding to the nearest 10, 100 or 1000`,
      tests: String.raw`Rounding a large number to a given place, and the reverse: finding the smallest or largest whole number that rounds to a given value.`,
      questions: [
        {
          stem: String.raw`Round $2\,864\,509$ to the nearest thousand.`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$2\,860\,000$`, String.raw`$2\,864\,000$`, String.raw`$2\,865\,000$`, String.raw`$2\,900\,000$`],
        },
        {
          stem: String.raw`A whole number is $47\,300$ when rounded to the nearest hundred.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`What is the smallest possible value of the number?`, marks: 1 },
            { label: "(b)", text: String.raw`What is the largest possible value of the number?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-factors-multiples",
      name: String.raw`Factors, multiples, common factors and common multiples`,
      tests: String.raw`Listing factors in pairs and multiples in order, then picking out the common ones. Harder questions give two or three clues about one mystery number.`,
      questions: [
        {
          stem: String.raw`Which of the following is a common factor of $24$ and $40$?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$3$`, String.raw`$5$`, String.raw`$6$`, String.raw`$8$`],
        },
        {
          stem: String.raw`A number is between $40$ and $80$. It is a multiple of $7$. It is also a factor of $112$. What is the number?`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N1-order-of-operations",
      name: String.raw`Order of operations and brackets`,
      tests: String.raw`Working out an expression with mixed operations without a calculator: brackets first, then $\times$ and $\div$ from left to right, then $+$ and $-$.`,
      questions: [
        {
          stem: String.raw`Find the value of $36 - 12 \div 4 \times 2$.`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$3$`, String.raw`$12$`, String.raw`$30$`, String.raw`$48$`],
        },
        {
          stem: String.raw`Find the value of $120 - (35 + 5 \times 9) \div 4$.`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N1-times-divide-10-100-1000",
      name: String.raw`Multiplying and dividing by 10, 100, 1000 and their multiples`,
      tests: String.raw`Mental work with zeros, e.g. $70 \times 600$ or $54\,000 \div 900$, and finding a missing number in such a statement.`,
      questions: [
        {
          stem: String.raw`$70 \times 600 = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$4\,200$`, String.raw`$42\,000$`, String.raw`$420\,000$`, String.raw`$4\,200\,000$`],
        },
        {
          stem: String.raw`Answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $54\,000 \div 900$.`, marks: 1 },
            { label: "(b)", text: String.raw`What is the missing number in the box? $$\square \times 300 = 2\,400\,000$$`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-estimation-remainders",
      name: String.raw`Estimation and division with remainder`,
      tests: String.raw`Choosing a sensible estimate by rounding first, and deciding whether a remainder in a story means rounding up ("how many are needed") or rounding down ("how many can be filled").`,
      questions: [
        {
          stem: String.raw`Which of the following is the best estimate of $4\,916 \div 7$?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$600$`, String.raw`$700$`, String.raw`$800$`, String.raw`$900$`],
        },
        {
          stem: String.raw`$1\,000$ pupils are going on a school trip. Each bus can carry $45$ pupils.`,
          parts: [
            { label: "(a)", text: String.raw`What is the least number of buses needed?`, marks: 1 },
            { label: "(b)", text: String.raw`If the least number of buses is used, how many seats will be empty?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-multi-step-word-problems",
      name: String.raw`Multi-step word problems with the four operations`,
      tests: String.raw`A story with two or three steps (packing, selling, filling seats). Write a short statement for each step; the answer is often money or a count.`,
      questions: [
        {
          stem: String.raw`A baker made $1\,260$ cookies. He packed all of them into boxes of $9$. He sold each box for \$$4$. At the end of the day, $15$ boxes were not sold. How much money did he receive from the boxes he sold?`,
          marks: 3,
        },
        {
          stem: String.raw`A theatre has $1\,500$ seats. On Friday, $1\,286$ seats were filled. On Saturday, $128$ more seats were filled than on Friday.`,
          parts: [
            { label: "(a)", text: String.raw`How many seats were empty on Saturday?`, marks: 1 },
            { label: "(b)", text: String.raw`Each ticket cost \$$18$. How much money was collected from the tickets on the two days altogether?`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N1-model-total-difference",
      name: String.raw`Model method: total, difference and units`,
      tests: String.raw`Two quantities with a known total and a known difference, or one given in terms of the other ("\$150 more than"). Draw a bar for each, remove the extra part, and find one unit.`,
      questions: [
        {
          stem: String.raw`A shop sold $2\,345$ more pens on Saturday than on Sunday. It sold $9\,105$ pens on the two days altogether. How many pens did it sell on Saturday?`,
          marks: 3,
        },
        {
          stem: String.raw`Mr Tan paid \$$1\,220$ for $3$ tables and $8$ chairs. Each table cost \$$150$ more than each chair.`,
          parts: [
            { label: "(a)", text: String.raw`Find the cost of one chair.`, marks: 3 },
            { label: "(b)", text: String.raw`How much more did the $3$ tables cost than the $8$ chairs?`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
