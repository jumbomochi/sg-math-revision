H2.addTopic({
  id: "N8",
  title: "Problem Solving: Models and Heuristics",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Choosing a method for word problems: bar models, units and parts, before-and-after, supposition, working backwards, systematic listing and patterns.`,
  syllabus: {
    include: [
      String.raw`Mathematical problem solving: general problem-solving strategies, e.g. Pólya's 4 steps to problem solving and the use of heuristics, to tackle non-routine tasks systematically and effectively`,
      String.raw`Metacognition: selecting and using problem-solving strategies, and monitoring one's own thinking`,
      String.raw`Processes: representing a problem (e.g. with a model or a table), reasoning, and checking that the answer is reasonable in the context of the problem`,
      String.raw`PSLE assessment objective AO3: reason mathematically, analyse information and make inferences, and select appropriate strategies to solve problems`,
      String.raw`P1–P4: four operations on whole numbers; patterns in number sequences`,
      String.raw`P4–P5: fraction of a set; four operations with fractions (fraction of a remainder)`,
      String.raw`P6: ratio — dividing a quantity in a given ratio, finding the missing term, and the relationship between fraction and ratio`,
      String.raw`P6: algebra — using a letter to represent an unknown number and solving simple linear equations (an alternative to a model)`,
    ],
    exclude: [
      String.raw`ratios involving fractions and decimals`,
      String.raw`linear equations with coefficients that are not whole numbers`,
    ],
  },
  concepts: [
    {
      title: String.raw`Four steps, and choosing a method`,
      body: String.raw`Every word problem: **Understand → Plan → Do → Check.** Underline what is given and what is asked. Then pick a method from the clues.

| If the question says… | Try… |
| --- | --- |
| "more than", "times as many", "altogether" | a model (part-whole or comparison) |
| fractions or ratios of **different** wholes | units and parts |
| "… of the **remainder**" | a model with the remainder cut up |
| "gave … to" (between the same people) | before-after: **total** stays the same |
| ages, or "the same number added to each" | before-after: **difference** stays the same |
| only **one** person spends or gets more | before-after: the **other** stays the same |
| two kinds, a total number and a total value (legs, coins, marks) | supposition |
| you know the **end** of the story | work backwards |
| "how many ways", "Figure 20" | systematic list, or look for a pattern |

**Check** by putting your answer back into the story.`,
    },
    {
      title: String.raw`The model method: part-whole and comparison`,
      body: String.raw`Draw bars to show what you know. Put a **?** where the answer goes.

- **Part-whole**: one bar for the whole, cut into parts. Whole $=$ sum of parts.
- **Comparison**: one bar for each person, lined up on the left. The **difference** is the extra piece.

*Example.* A 30 m ribbon is cut into pieces of 8 m, 12 m and one more piece. The last piece is $30 - 8 - 12 = 10$ m.

*Example.* Ann has 14 stickers. Ben has 6 more than Ann. Ben has $14 + 6 = 20$.

**Common mistake:** bars that start at different places. Always line them up on the left.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 10.6], y: [0.4, 3.8], height: 120, axes: false,
          polygons: [[0, 8 / 3, "accent"], [8 / 3, 20 / 3, "accent"], [20 / 3, 10, "warn"]].map(([a, b, tone]) => ({ points: [[a, 1.4], [b, 1.4], [b, 2.4], [a, 2.4]], fill: true, tone })),
          segments: [{ from: [0, 3.0], to: [10, 3.0], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "30 m", pos: "n", style: "plain" }],
          labels: [
            { x: 4 / 3, y: 1.9, text: "8 m", pos: "c" },
            { x: 14 / 3, y: 1.9, text: "12 m", pos: "c" },
            { x: 25 / 3, y: 1.9, text: "?", pos: "c" },
          ],
          caption: String.raw`Part-whole`,
          alt: "Part-whole model: a bar of 30 m cut into parts of 8 m, 12 m and an unknown part.",
        },
        {
          type: "plot",
          x: [-2.2, 10.8], y: [-0.4, 3.6], height: 120, axes: false,
          polygons: [
            { points: [[0, 2.2], [7, 2.2], [7, 3.1], [0, 3.1]], fill: true, tone: "accent" },
            { points: [[0, 0.9], [7, 0.9], [7, 1.8], [0, 1.8]], fill: true, tone: "accent" },
            { points: [[7, 0.9], [10, 0.9], [10, 1.8], [7, 1.8]], fill: true, tone: "warn" },
          ],
          segments: [{ from: [0, 0.3], to: [10, 0.3], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "?", pos: "s", style: "plain" }],
          labels: [
            { x: -0.2, y: 2.65, text: "Ann", pos: "w" },
            { x: -0.2, y: 1.35, text: "Ben", pos: "w" },
            { x: 3.5, y: 2.65, text: "14", pos: "c" },
            { x: 8.5, y: 1.35, text: "6", pos: "c" },
          ],
          caption: String.raw`Comparison`,
          alt: "Comparison model: Ann's bar is 14. Ben's bar is the same length plus an extra part of 6. Ben's total is marked with a question mark.",
        },
      ],
    },
    {
      title: String.raw`Units and parts`,
      body: String.raw`Let **1 unit** be the smallest equal part. Write every quantity in units.

- "A has 4 times as many as B": B $= 1$ unit, A $= 4$ units.
- Ratio $4 : 5$: 4 units and 5 units.
- Find what **1 unit** is worth, then multiply.

*Example.* A has 4 times as many as B. Together they have 45. $5$ units $= 45$, so $1$ unit $= 9$ and A has $36$.

**Equal fractions of two amounts**: make the **numerators** the same. If $\frac{1}{2}$ of A $= \frac{2}{5}$ of B, write $\frac{1}{2} = \frac{2}{4}$. Now 2 parts of A $=$ 2 parts of B, with A in 4 parts and B in 5 parts. So A : B $= 4 : 5$.

**Common mistake:** $\frac{1}{2}$ of A and $\frac{2}{5}$ of B are equal amounts, but A and B are **not** equal. Units from different wholes are only the same size after you make the numerators equal.`,
      figure: [
        {
          type: "plot",
          x: [-1.4, 8.6], y: [0.3, 3.6], height: 120, axes: false,
          polygons: [[0, 2.2], [1.6, 2.2], [3.2, 2.2], [4.8, 2.2], [0, 0.9]].map(([a, y]) => ({ points: [[a, y], [a + 1.6, y], [a + 1.6, y + 0.9], [a, y + 0.9]], fill: true, tone: "accent" })),
          segments: [{ from: [7.0, 0.9], to: [7.0, 3.1], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "45", pos: "e", style: "plain" }],
          labels: [
            { x: -0.2, y: 2.65, text: "A", pos: "w" },
            { x: -0.2, y: 1.35, text: "B", pos: "w" },
            { x: 0.8, y: 1.35, text: "1 u", pos: "c" },
          ],
          caption: String.raw`4 units $+$ 1 unit $=$ 45`,
          alt: "Model: A is 4 equal units, B is 1 unit of the same size. A bracket on the right shows both bars together are 45.",
        },
        {
          type: "plot",
          x: [-1.4, 8.6], y: [0.3, 3.6], height: 120, axes: false,
          polygons: [[0, 2.2], [1.5, 2.2], [3, 2.2], [4.5, 2.2], [0, 0.9], [1.5, 0.9], [3, 0.9], [4.5, 0.9], [6, 0.9]].map(([a, y], i) => ({ points: [[a, y], [a + 1.5, y], [a + 1.5, y + 0.9], [a, y + 0.9]], fill: true, tone: i === 0 || i === 1 || i === 4 || i === 5 ? "warn" : "accent" })),
          labels: [
            { x: -0.2, y: 2.65, text: "A", pos: "w" },
            { x: -0.2, y: 1.35, text: "B", pos: "w" },
            { x: 1.5, y: 3.1, text: "½ of A", pos: "n", style: "small", tone: "warn" },
            { x: 1.5, y: 0.9, text: "⅖ of B", pos: "s", style: "small", tone: "warn" },
          ],
          caption: String.raw`Shaded parts are equal, so A : B $= 4 : 5$`,
          alt: "Model: A is 4 equal units with 2 shaded (half of A). B is 5 units of the same size with 2 shaded (two-fifths of B). The shaded parts are the same length.",
        },
      ],
    },
    {
      title: String.raw`Fraction of the remainder`,
      body: String.raw`"$\frac{1}{3}$ **of the remainder**" is a fraction of what is **left**, not of the whole.

- Draw the whole bar. Cut off the first part.
- Cut the **remainder** into the new number of equal parts.
- If the parts are not all the same size, cut them smaller until they are.

*Example.* Lina spent $\frac{1}{4}$ of her money, then $\frac{1}{3}$ of the remainder. She had \$30 left. The bar has 4 units: 1 unit spent first, the remainder is 3 units, 1 unit spent next, 2 units left. $2$ units $=$ \$30, so she had $4 \times \$15 = \$60$ at first.`,
      figure: {
        type: "plot",
        x: [-0.5, 10.5], y: [0.2, 3.9], height: 130, axes: false,
        polygons: [[0, "warn"], [2.5, "good"], [5, "accent"], [7.5, "accent"]].map(([a, tone]) => ({ points: [[a, 1.2], [a + 2.5, 1.2], [a + 2.5, 2.3], [a, 2.3]], fill: true, tone })),
        segments: [
          { from: [2.5, 2.9], to: [10, 2.9], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "remainder", pos: "n", style: "plain" },
          { from: [5, 0.6], to: [10, 0.6], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "\$30 left", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 1.25, y: 1.75, text: "¼", pos: "c" },
          { x: 3.75, y: 1.75, text: "⅓ of rest", pos: "c", style: "small" },
        ],
        caption: String.raw`The second fraction is taken from the remainder only.`,
        alt: "A bar of 4 equal units. The first unit (one quarter) is spent. A bracket marks the other 3 units as the remainder. The next unit is one third of the remainder. The last 2 units are marked as 30 dollars left.",
      },
    },
    {
      title: String.raw`Before and after: what stays the same?`,
      body: String.raw`Draw a "before" model and an "after" model. Find the quantity that **does not change**, and use it to link the two.

| What happens | What stays the same |
| --- | --- |
| One person gives some to another | the **total** |
| Ages; or both get (or lose) the **same** amount | the **difference** |
| Only one person spends or gets more | the **other** person's amount |

*Example (total).* Ravi has 50 cards and Sue has 30. Ravi gives Sue 10. Now both have 40. The total is 80 before and after.

*Example (difference).* Mum is 38 and her son is 6. The difference is 32 years — now, and in every year to come.

With ratios, make the unchanged quantity the **same number of units** before and after.`,
      figure: [
        {
          type: "plot",
          x: [-2.2, 12.4], y: [0.3, 4.4], height: 130, axes: false,
          polygons: [
            { points: [[0, 2.4], [4, 2.4], [4, 3.2], [0, 3.2]], fill: true, tone: "accent" },
            { points: [[4, 2.4], [5, 2.4], [5, 3.2], [4, 3.2]], fill: true, tone: "warn" },
            { points: [[0, 1.0], [3, 1.0], [3, 1.8], [0, 1.8]], fill: true, tone: "good" },
            { points: [[7.4, 2.4], [11.4, 2.4], [11.4, 3.2], [7.4, 3.2]], fill: true, tone: "accent" },
            { points: [[7.4, 1.0], [10.4, 1.0], [10.4, 1.8], [7.4, 1.8]], fill: true, tone: "good" },
            { points: [[10.4, 1.0], [11.4, 1.0], [11.4, 1.8], [10.4, 1.8]], fill: true, tone: "warn" },
          ],
          labels: [
            { x: -0.2, y: 2.8, text: "Ravi", pos: "w" },
            { x: -0.2, y: 1.4, text: "Sue", pos: "w" },
            { x: 2.5, y: 3.2, text: "Before", pos: "n", style: "bold" },
            { x: 9.4, y: 3.2, text: "After", pos: "n", style: "bold" },
            { x: 4.5, y: 2.8, text: "10", pos: "c" },
            { x: 10.9, y: 1.4, text: "10", pos: "c" },
            { x: 6.2, y: 0.5, text: "total 80 before and after", pos: "c", style: "small" },
          ],
          caption: String.raw`Giving: the total stays the same.`,
          alt: "Before: Ravi's bar of 50 with a part of 10 shaded, Sue's bar of 30. After: both bars are 40; the shaded 10 has moved to the end of Sue's bar. Total 80 before and after.",
        },
        {
          type: "plot",
          x: [-2.6, 9.4], y: [0.1, 4.9], height: 140, axes: false,
          polygons: [
            { points: [[0, 3.5], [1.2, 3.5], [1.2, 4.1], [0, 4.1]], fill: true, tone: "accent" },
            { points: [[1.2, 3.5], [7.6, 3.5], [7.6, 4.1], [1.2, 4.1]], fill: true, tone: "warn" },
            { points: [[0, 2.8], [1.2, 2.8], [1.2, 3.4], [0, 3.4]], fill: true, tone: "good" },
            { points: [[0, 1.2], [2.0, 1.2], [2.0, 1.8], [0, 1.8]], fill: true, tone: "accent" },
            { points: [[2.0, 1.2], [8.4, 1.2], [8.4, 1.8], [2.0, 1.8]], fill: true, tone: "warn" },
            { points: [[0, 0.5], [2.0, 0.5], [2.0, 1.1], [0, 1.1]], fill: true, tone: "good" },
          ],
          labels: [
            { x: -0.2, y: 3.8, text: "Mum", pos: "w" },
            { x: -0.2, y: 3.1, text: "Son", pos: "w" },
            { x: -0.2, y: 1.5, text: "Mum", pos: "w" },
            { x: -0.2, y: 0.8, text: "Son", pos: "w" },
            { x: 4.4, y: 3.8, text: "32", pos: "c" },
            { x: 5.2, y: 1.5, text: "32", pos: "c" },
            { x: 0, y: 4.1, text: "Now", pos: "ne", style: "bold" },
            { x: 0, y: 1.8, text: "4 years later", pos: "ne", style: "bold" },
          ],
          caption: String.raw`Ages: the difference stays the same.`,
          alt: "Now: Mum's bar is the son's bar plus a shaded difference of 32. Four years later: both bars are longer by the same amount, and the shaded difference is still 32.",
        },
      ],
    },
    {
      title: String.raw`Supposition: assume all are one kind`,
      body: String.raw`Use this when there are **two kinds** of things, and you know the **total number** and the **total value** (legs, money, marks).

1. Suppose **all** are the cheaper (or smaller) kind. Work out the total value.
2. Find the **shortfall**: real total $-$ supposed total.
3. Each swap to the other kind adds the **difference in value**. Number of swaps $=$ shortfall $\div$ difference.

*Example.* 10 coins are 20¢ and 50¢ coins, worth \$3.20 altogether. Suppose all are 20¢: $10 \times 20$¢ $= \$2.00$. Short by \$1.20. Each swap adds 30¢. $120 \div 30 = 4$, so there are four 50¢ coins.

**Check:** $4 \times 50$¢ $+ 6 \times 20$¢ $= \$3.20$. ✓`,
    },
    {
      title: String.raw`Working backwards`,
      body: String.raw`When you know the **end** and the steps, start from the end and **undo** each step in reverse order.

| Step forwards | Undo it with |
| --- | --- |
| $+$ | $-$ |
| $\times$ | $\div$ |
| spent half | double |
| gave away $\frac{1}{3}$ (so $\frac{2}{3}$ is left) | $\div 2 \times 3$ |

*Example.* A number is multiplied by 3, then 5 is subtracted, then the result is halved. The answer is 11. Backwards: $11 \times 2 = 22$, $22 + 5 = 27$, $27 \div 3 = 9$.

**Common mistake:** undoing the steps in the same order as the story. The **last** step is undone **first**.`,
      figure: {
        type: "plot",
        x: [-0.4, 12.6], y: [-0.2, 3.2], height: 130, axes: false,
        polygons: [0, 3.6, 7.2, 10.8].map((a) => ({ points: [[a, 1], [a + 1.6, 1], [a + 1.6, 2], [a, 2]], fill: true, tone: "muted" })),
        segments: [[1.6, "× 3", "÷ 3"], [5.2, "− 5", "+ 5"], [8.8, "÷ 2", "× 2"]].flatMap(([a, f, b]) => [
          { from: [a + 0.2, 1.75], to: [a + 1.8, 1.75], arrow: true, tone: "accent", label: f, pos: "n", style: "plain", labelAt: [a + 1, 1.95] },
          { from: [a + 1.8, 1.25], to: [a + 0.2, 1.25], arrow: true, tone: "warn", label: b, pos: "s", style: "plain", labelAt: [a + 1, 1.05] },
        ]),
        labels: [
          { x: 0.8, y: 1.5, text: "9", pos: "c" },
          { x: 4.4, y: 1.5, text: "27", pos: "c" },
          { x: 8, y: 1.5, text: "22", pos: "c" },
          { x: 11.6, y: 1.5, text: "11", pos: "c" },
          { x: 6.2, y: 2.85, text: "forwards", pos: "c", style: "small", tone: "accent" },
          { x: 6.2, y: 0.15, text: "backwards: undo, starting from 11", pos: "c", style: "small", tone: "warn" },
        ],
        caption: String.raw`Go forwards along the top. Undo along the bottom.`,
        alt: "Four boxes 9, 27, 22, 11. Arrows forwards along the top: times 3, minus 5, divide by 2. Arrows backwards along the bottom: times 2, plus 5, divide by 3.",
      },
    },
    {
      title: String.raw`Guess and check, systematic lists and patterns`,
      body: String.raw`**Systematic list**: when the question asks "how many ways" or "find all", list in order so nothing is missed.

*Example.* Ways to make 50¢ with 10¢ and 20¢ coins: start with the most 20¢ coins.

| 20¢ coins | 10¢ coins |
| --- | --- |
| 2 | 1 |
| 1 | 3 |
| 0 | 5 |

That is 3 ways.

**Guess and check**: make a sensible guess, check it, and use the result to make a better guess. Show each try in a table.

**Patterns**: write the numbers in a table and see how they grow. Triangles in a row need 3, 5, 7, … sticks: 2 more each time, so Figure $n$ needs $2 \times n + 1$ sticks. Figure 10 needs 21.`,
    },
  ],
  archetypes: [
    {
      id: "N8-model-comparison",
      name: String.raw`Part-whole and comparison models`,
      tests: String.raw`Drawing bars for "more than", "times as many" and "altogether", then finding 1 unit. Recognise by two or three people compared with each other and a total or a difference given.`,
      questions: [
        {
          stem: String.raw`The model shows the number of stickers Ali and Ben have. How many stickers do they have altogether?`,
          marks: 2,
          calculator: false,
          figure: {
            type: "plot",
            x: [-1.6, 10.6], y: [0.2, 3.7], height: 130, axes: false,
            polygons: [[0, 2.4], [2.4, 2.4], [4.8, 2.4], [0, 1.2]].map(([a, y]) => ({ points: [[a, y], [a + 2.4, y], [a + 2.4, y + 0.9], [a, y + 0.9]], fill: true, tone: "accent" })),
            segments: [
              { from: [2.4, 1.65], to: [7.2, 1.65], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "56", pos: "s", style: "plain" },
              { from: [8.2, 1.2], to: [8.2, 3.3], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "?", pos: "e", style: "plain" },
            ],
            labels: [
              { x: -0.2, y: 2.85, text: "Ali", pos: "w" },
              { x: -0.2, y: 1.65, text: "Ben", pos: "w" },
            ],
            alt: "Model: Ali's bar is 3 equal units, Ben's bar is 1 unit. The part of Ali's bar beyond Ben's (2 units) is marked 56. A bracket on the right covering both bars is marked with a question mark.",
          },
          choices: [String.raw`84`, String.raw`112`, String.raw`140`, String.raw`168`],
        },
        {
          stem: String.raw`Ann, Bala and Chen have 295 stamps altogether. Bala has 25 more stamps than Ann. Chen has twice as many stamps as Bala. How many stamps does Chen have?`,
          marks: 3,
        },
      ],
    },
    {
      id: "N8-units-fractions",
      name: String.raw`Units and parts with fractions`,
      tests: String.raw`Turning fractions of two different wholes, or "fraction of the remainder", into equal units. Recognise by "$\frac{2}{3}$ of the boys is equal to …" or "… of the remainder".`,
      questions: [
        {
          stem: String.raw`There are 66 pupils in a hall. $\frac{2}{3}$ of the boys is equal to $\frac{4}{5}$ of the girls. How many boys are there?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`A baker made some tarts. He sold $\frac{3}{5}$ of them in the morning and $\frac{1}{4}$ of the remainder in the afternoon. He sold 140 more tarts in the morning than in the afternoon.`,
          parts: [
            { label: "(a)", text: String.raw`How many tarts did he make?`, marks: 3 },
            { label: "(b)", text: String.raw`He packed all the tarts that were left into boxes of 8. How many boxes could he fill completely?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N8-constant-total",
      name: String.raw`Before and after: the total stays the same`,
      tests: String.raw`One person gives some of their things to another, so the total does not change. With ratios, make the total the same number of units before and after.`,
      questions: [
        {
          stem: String.raw`Pam and Quek have 84 marbles altogether. After Pam gives Quek 9 marbles, they have the same number of marbles. How many marbles did Pam have at first?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`At first, the ratio of the amount of money Kumar had to the amount Lina had was $7 : 3$. After Kumar gave Lina \$36, the ratio became $3 : 2$. How much money did Kumar have at first?`,
          marks: 4,
        },
      ],
    },
    {
      id: "N8-constant-difference",
      name: String.raw`Before and after: the difference stays the same`,
      tests: String.raw`Age problems, and problems where the same amount is added to or taken from both people, so the difference does not change. Recognise by "in … years' time" or "the same number of … was removed from each".`,
      questions: [
        {
          stem: String.raw`Mr Lim is 41 years old and his son is 11 years old. In how many years' time will Mr Lim be 3 times as old as his son?`,
          marks: 2,
          calculator: false,
          choices: [String.raw`4`, String.raw`5`, String.raw`8`, String.raw`15`],
        },
        {
          stem: String.raw`Jar A has 120 beads and Jar B has 45 beads. The same number of beads is removed from each jar. Then Jar A has 4 times as many beads as Jar B. How many beads were removed from each jar?`,
          marks: 3,
        },
      ],
    },
    {
      id: "N8-constant-part",
      name: String.raw`Before and after: one quantity stays the same`,
      tests: String.raw`Only one quantity changes, so the other is unchanged. With ratios, make the unchanged quantity the same number of units in both ratios.`,
      questions: [
        {
          stem: String.raw`At a camp, the ratio of the number of boys to the number of girls was $4 : 5$. After 18 more boys joined the camp, the ratio became $7 : 5$. How many girls were at the camp?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`At first, the ratio of the number of stamps Jun had to the number Kai had was $5 : 3$. Then Kai bought 48 more stamps, and the ratio became $5 : 7$.`,
          parts: [
            { label: "(a)", text: String.raw`How many stamps did Jun have?`, marks: 2 },
            { label: "(b)", text: String.raw`How many stamps must Kai then give to Jun so that they have the same number of stamps?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N8-supposition",
      name: String.raw`Supposition: assume all are one kind`,
      tests: String.raw`Two kinds of items with a known total number and total value (legs, money, marks). Suppose all are one kind, find the shortfall, and divide by the difference per item.`,
      questions: [
        {
          stem: String.raw`A farmer keeps chickens and goats. The animals have 30 heads and 84 legs altogether. How many goats are there?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`A quiz has 25 questions. A pupil gets 4 marks for each correct answer, and 1 mark is taken away for each wrong answer. Siti answered all 25 questions and scored 70 marks. How many questions did she answer correctly?`,
          marks: 3,
        },
      ],
    },
    {
      id: "N8-working-backwards",
      name: String.raw`Working backwards`,
      tests: String.raw`The final amount is given after a chain of steps (spent, gave away, a fraction of the remainder). Undo each step from the last one.`,
      questions: [
        {
          stem: String.raw`Jia Hui spent \$12 on a book. She then spent $\frac{1}{2}$ of her remaining money on a bag. She had \$19 left. How much money did she have at first?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Tom gave half of his marbles and 4 more to Ali. He then gave $\frac{1}{3}$ of his remaining marbles to Ben. He had 30 marbles left. How many marbles did Tom have at first?`,
          marks: 4,
        },
      ],
    },
    {
      id: "N8-lists-patterns",
      name: String.raw`Systematic listing and patterns`,
      tests: String.raw`Finding all possible answers by listing in order, or finding the rule of a growing pattern and using it for a large figure number.`,
      questions: [
        {
          stem: String.raw`Figures are made with sticks in a pattern. Figure 1 has 4 sticks, Figure 2 has 7 sticks and Figure 3 has 10 sticks. How many sticks are needed for Figure 20?`,
          marks: 2,
          calculator: false,
          figure: {
            type: "plot",
            x: [-0.4, 9.4], y: [-0.9, 1.4], equal: true, axes: false,
            segments: [[0, 1], [2.2, 2], [5.4, 3]].flatMap(([a, n]) => [
              { from: [a, 0], to: [a + n, 0], tone: "accent" },
              { from: [a, 1], to: [a + n, 1], tone: "accent" },
            ].concat(Array.from({ length: n + 1 }, (_, k) => ({ from: [a + k, 0], to: [a + k, 1], tone: "accent" })))),
            labels: [
              { x: 0.5, y: 0, text: "Figure 1", pos: "s", style: "small" },
              { x: 3.2, y: 0, text: "Figure 2", pos: "s", style: "small" },
              { x: 6.9, y: 0, text: "Figure 3", pos: "s", style: "small" },
            ],
            alt: "Three figures made of sticks: Figure 1 is one square, Figure 2 is two squares in a row, Figure 3 is three squares in a row.",
          },
          choices: [String.raw`60`, String.raw`61`, String.raw`64`, String.raw`80`],
        },
        {
          stem: String.raw`Pens cost \$3 each and files cost \$5 each. Mei spent exactly \$47 on some pens and files. She bought more pens than files.`,
          parts: [
            { label: "(a)", text: String.raw`List all the possible numbers of pens and files she could have bought.`, marks: 2 },
            { label: "(b)", text: String.raw`Mei bought 13 items altogether. How many files did she buy?`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
