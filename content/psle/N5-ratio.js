H2.addTopic({
  id: "N5",
  title: "Ratio",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Ratios of two or three whole-number quantities, equivalent ratios and simplest form, sharing in a ratio, ratio and fraction, and before-and-after problems with models.`,
  syllabus: {
    include: [
      String.raw`P6: notation, representations and interpretation of $a : b$ and $a : b : c$, where $a$, $b$ and $c$ are whole numbers`,
      String.raw`P6: equivalent ratios`,
      String.raw`P6: dividing a quantity in a given ratio`,
      String.raw`P6: expressing a ratio in its simplest form`,
      String.raw`P6: finding the ratio of two or three given quantities`,
      String.raw`P6: finding the missing term in a pair of equivalent ratios`,
      String.raw`P6: relationship between fraction and ratio`,
      String.raw`P6: solving up to 3-step word problems involving ratio, including before-and-after problems`,
    ],
    exclude: [
      String.raw`ratios involving fractions and decimals`,
      String.raw`map scales and direct or inverse proportion as a formal topic (Secondary)`,
    ],
  },
  concepts: [
    {
      title: String.raw`What a ratio means`,
      body: String.raw`A **ratio** compares two or more quantities of the same kind. "The ratio of A to B is $3 : 2$" means: for every 3 units of A, there are 2 units of B.

- A ratio has **no units**. It does not tell you the actual amounts, only how they compare.
- **Order matters.** "A to B" is $3 : 2$, but "B to A" is $2 : 3$.
- Use the **model method**: draw equal boxes called **units**. Every unit has the same value.
- To find a ratio of quantities, first change them to the **same unit** (e.g. both in cm, or both in minutes).`,
      figure: {
        type: "plot",
        x: [-3, 15], y: [-0.6, 5.6], equal: true, axes: false,
        polygons: [0, 1, 2].map((i) => ({ points: [[3 * i, 3], [3 * i + 3, 3], [3 * i + 3, 5], [3 * i, 5]], fill: true, tone: "accent" }))
          .concat([0, 1].map((i) => ({ points: [[3 * i, 0], [3 * i + 3, 0], [3 * i + 3, 2], [3 * i, 2]], fill: true, tone: "good" }))),
        labels: [
          { x: -0.4, y: 4, text: "A", pos: "w" },
          { x: -0.4, y: 1, text: "B", pos: "w" },
          { x: 9.6, y: 4, text: "3 units", pos: "e", style: "small" },
          { x: 6.6, y: 1, text: "2 units", pos: "e", style: "small" },
        ],
        caption: String.raw`$A : B = 3 : 2$. All the boxes are the same size.`,
        alt: "Two bars made of equal boxes. Bar A has 3 boxes and bar B has 2 boxes.",
      },
    },
    {
      title: String.raw`Equivalent ratios and simplest form`,
      body: String.raw`**Equivalent ratios**: multiply or divide **every** term by the **same** number.

$$3 : 4 = 6 : 8 = 9 : 12$$

- **Simplest form**: divide every term by the largest number that divides them all (their highest common factor). $18 : 24 = 3 : 4$ (divide by 6).
- A ratio is in simplest form when the terms have **no common factor** other than 1.
- **Missing term**: find what one term was multiplied by, then do the same to the other term. In $3 : 4 = \square : 20$, $4 \times 5 = 20$, so $\square = 3 \times 5 = 15$.
- **Common mistake:** adding the same number to both terms. $3 : 4$ is **not** equal to $5 : 6$.`,
    },
    {
      title: String.raw`Ratios of three quantities`,
      body: String.raw`$a : b : c$ works in the same way: multiply or divide **all three** terms by the same number. $6 : 9 : 12 = 2 : 3 : 4$.

To **combine** two ratios, make the shared quantity the **same number of units**.

*Example.* $A : B = 1 : 2$ and $B : C = 3 : 4$. B is 2 units in the first and 3 units in the second. Make B $6$ units in both.

| | A | B | C |
| --- | --- | --- | --- |
| $A : B$ | 1 | 2 | |
| $B : C$ | | 3 | 4 |
| $A : B$ ($\times 3$) | 3 | 6 | |
| $B : C$ ($\times 2$) | | 6 | 8 |

So $A : B : C = 3 : 6 : 8$.`,
    },
    {
      title: String.raw`Dividing a quantity in a ratio`,
      body: String.raw`To share a quantity in a given ratio:

1. Find the **total number of units**.
2. Find the value of **1 unit**: total $\div$ number of units.
3. Multiply to find each share.

*Example.* Share \$45 in the ratio $3 : 2$. There are $5$ units. $1$ unit $= 45 \div 5 = 9$. The shares are $3 \times 9 = \$27$ and $2 \times 9 = \$18$.

If the question gives the **difference** (e.g. "A has \$12 more than B"), then the **difference in units** stands for that amount.`,
      figure: {
        type: "plot",
        x: [-3, 15], y: [-0.6, 5.6], equal: true, axes: false,
        polygons: [0, 1, 2].map((i) => ({ points: [[3 * i, 3], [3 * i + 3, 3], [3 * i + 3, 5], [3 * i, 5]], fill: true, tone: "accent" }))
          .concat([0, 1].map((i) => ({ points: [[3 * i, 0], [3 * i + 3, 0], [3 * i + 3, 2], [3 * i, 2]], fill: true, tone: "good" }))),
        segments: [
          { from: [10.4, 0], to: [10.4, 5], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "$45", pos: "e", style: "plain" },
        ],
        labels: [
          { x: -0.4, y: 4, text: "A", pos: "w" },
          { x: -0.4, y: 1, text: "B", pos: "w" },
          { x: 1.5, y: 4, text: "9", pos: "c", style: "small" },
        ],
        caption: String.raw`5 units $=$ \$45, so 1 unit $=$ \$9.`,
        alt: "Bar A has 3 equal units and bar B has 2 equal units. A bracket shows that all 5 units together are 45 dollars; one unit is marked 9.",
      },
    },
    {
      title: String.raw`Ratio and fraction`,
      body: String.raw`If $A : B = 3 : 2$, the total is $3 + 2 = 5$ units.

- A is $\frac{3}{5}$ of the **total**, and B is $\frac{2}{5}$ of the total.
- A is $\frac{3}{2}$ of B, and B is $\frac{2}{3}$ of A.
- Going the other way: "A is $\frac{4}{7}$ of B" means $A : B = 4 : 7$.
- **Common mistake:** saying A is $\frac{3}{2}$ of the total. The bottom number for "of the total" is the **total units**.`,
      figure: {
        type: "plot",
        x: [-2, 17], y: [-2.8, 3.8], equal: true, axes: false,
        polygons: [0, 1, 2].map((i) => ({ points: [[3 * i, 0], [3 * i + 3, 0], [3 * i + 3, 2], [3 * i, 2]], fill: true, tone: "accent" }))
          .concat([3, 4].map((i) => ({ points: [[3 * i, 0], [3 * i + 3, 0], [3 * i + 3, 2], [3 * i, 2]], fill: true, tone: "good" }))),
        segments: [
          { from: [0, 2.8], to: [9, 2.8], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "A", pos: "n", style: "plain" },
          { from: [9, 2.8], to: [15, 2.8], thin: true, tone: "good", arrow: true, arrowStart: true, label: "B", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [15, -0.8], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "total: 5 units", pos: "s", style: "plain" },
        ],
        caption: String.raw`A is 3 of the 5 units, so A is $\frac{3}{5}$ of the total.`,
        alt: "One bar of 5 equal units: the first 3 units are A and the last 2 units are B. The whole bar is the total of 5 units.",
      },
    },
    {
      title: String.raw`Before and after: one quantity stays the same`,
      body: String.raw`When only **one** person's amount changes, the **other** amount is unchanged. Make the unchanged quantity the **same number of units** in the "before" and "after" ratios.

*Example.* $A : B = 2 : 3$. Then A gets 12 more and $A : B$ becomes $2 : 1$.

- B does not change. Before: $A : B = 2 : 3$. After: $2 : 1 = 6 : 3$.
- A went from 2 units to 6 units, so $4$ units $= 12$ and $1$ unit $= 3$.
- So at first A had $2 \times 3 = 6$ and B had $3 \times 3 = 9$.`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 13.4], y: [-0.6, 7.2], equal: true, axes: false,
          polygons: [0, 1].map((i) => ({ points: [[2 * i, 3], [2 * i + 2, 3], [2 * i + 2, 5], [2 * i, 5]], fill: true, tone: "accent" }))
            .concat([0, 1, 2].map((i) => ({ points: [[2 * i, 0], [2 * i + 2, 0], [2 * i + 2, 2], [2 * i, 2]], fill: true, tone: "good" }))),
          labels: [
            { x: -0.4, y: 4, text: "A", pos: "w" },
            { x: -0.4, y: 1, text: "B", pos: "w" },
          ],
          caption: String.raw`Before: $2 : 3$`,
          alt: "Before: bar A has 2 units and bar B has 3 units.",
        },
        {
          type: "plot",
          x: [-2.6, 13.4], y: [-0.6, 7.2], equal: true, axes: false,
          polygons: [0, 1].map((i) => ({ points: [[2 * i, 3], [2 * i + 2, 3], [2 * i + 2, 5], [2 * i, 5]], fill: true, tone: "accent" }))
            .concat([2, 3, 4, 5].map((i) => ({ points: [[2 * i, 3], [2 * i + 2, 3], [2 * i + 2, 5], [2 * i, 5]], fill: true, tone: "warn" })))
            .concat([0, 1, 2].map((i) => ({ points: [[2 * i, 0], [2 * i + 2, 0], [2 * i + 2, 2], [2 * i, 2]], fill: true, tone: "good" }))),
          labels: [
            { x: -0.4, y: 4, text: "A", pos: "w" },
            { x: -0.4, y: 1, text: "B", pos: "w" },
            { x: 6.4, y: 1, text: "same", pos: "e", style: "small", tone: "good" },
          ],
          segments: [{ from: [4, 5.8], to: [12, 5.8], thin: true, tone: "warn", arrow: true, arrowStart: true, label: "+12", pos: "n", style: "plain" }],
          caption: String.raw`After: $6 : 3$`,
          alt: "After: bar B still has the same 3 units. Bar A has its 2 units plus 4 new units, which stand for the 12 added.",
        },
      ],
    },
    {
      title: String.raw`Before and after: the total stays the same`,
      body: String.raw`When one person **gives** some to the other, the **total does not change**. Make the **total** the same number of units before and after.

*Example.* $A : B = 5 : 3$. A gives B 6 stickers, and then they have the same number.

- The total is $8$ units both times. After: $4 : 4$.
- A went from 5 units to 4 units, so A gave away $1$ unit $= 6$.
- At first A had $5 \times 6 = 30$ and B had $3 \times 6 = 18$.

If the totals before and after are different numbers of units (e.g. $5 + 3 = 8$ and $2 + 1 = 3$), change both ratios so the totals become the same (here $24$ units).`,
      figure: [
        {
          type: "plot",
          x: [-2.6, 13.4], y: [-0.6, 5.6], equal: true, axes: false,
          polygons: [0, 1, 2, 3, 4].map((i) => ({ points: [[2 * i, 3], [2 * i + 2, 3], [2 * i + 2, 5], [2 * i, 5]], fill: true, tone: i === 4 ? "warn" : "accent" }))
            .concat([0, 1, 2].map((i) => ({ points: [[2 * i, 0], [2 * i + 2, 0], [2 * i + 2, 2], [2 * i, 2]], fill: true, tone: "good" }))),
          segments: [{ from: [9, 2.9], to: [7, 2.1], tone: "warn", arrow: true }],
          labels: [
            { x: -0.4, y: 4, text: "A", pos: "w" },
            { x: -0.4, y: 1, text: "B", pos: "w" },
          ],
          caption: String.raw`Before: $5 : 3$`,
          alt: "Before: bar A has 5 units and bar B has 3 units. The last unit of A has an arrow showing it moving to B.",
        },
        {
          type: "plot",
          x: [-2.6, 13.4], y: [-0.6, 5.6], equal: true, axes: false,
          polygons: [0, 1, 2, 3].map((i) => ({ points: [[2 * i, 3], [2 * i + 2, 3], [2 * i + 2, 5], [2 * i, 5]], fill: true, tone: "accent" }))
            .concat([0, 1, 2, 3].map((i) => ({ points: [[2 * i, 0], [2 * i + 2, 0], [2 * i + 2, 2], [2 * i, 2]], fill: true, tone: i === 3 ? "warn" : "good" }))),
          labels: [
            { x: -0.4, y: 4, text: "A", pos: "w" },
            { x: -0.4, y: 1, text: "B", pos: "w" },
            { x: 8.4, y: 1, text: "1 unit = 6", pos: "e", style: "small", tone: "warn" },
          ],
          caption: String.raw`After: $4 : 4$, total still 8 units`,
          alt: "After: bar A has 4 units and bar B has 4 units. The unit that moved from A is now at the end of B and stands for 6 stickers.",
        },
      ],
    },
    {
      title: String.raw`Before and after: the difference stays the same`,
      body: String.raw`Two people's **ages** go up by the same amount every year, so the **difference in their ages never changes**. The same happens when both people get (or spend) the **same amount**.

*Example.* Mum is 40 and her son is 4. When will Mum be 4 times as old as her son?

- The difference is $40 - 4 = 36$ years. It stays $36$.
- Then Mum $:$ son $= 4 : 1$, and the difference is $3$ units. $3$ units $= 36$, so $1$ unit $= 12$.
- The son will be 12, which is $12 - 4 = 8$ years from now.

**Common mistake:** keeping the total the same. Both ages grow, so the total changes.`,
      figure: {
        type: "plot",
        x: [-3.6, 16], y: [-0.6, 7.2], equal: true, axes: false,
        polygons: [0, 1, 2, 3].map((i) => ({ points: [[3 * i, 3], [3 * i + 3, 3], [3 * i + 3, 5], [3 * i, 5]], fill: true, tone: i === 0 ? "accent" : "warn" }))
          .concat([{ points: [[0, 0], [3, 0], [3, 2], [0, 2]], fill: true, tone: "accent" }]),
        segments: [
          { from: [3, 5.8], to: [12, 5.8], thin: true, tone: "warn", arrow: true, arrowStart: true, label: "difference: 36 years", pos: "n", style: "plain" },
          { from: [3, 2.6], to: [3, -0.4], dashed: true, thin: true, tone: "ink" },
        ],
        labels: [
          { x: -0.4, y: 4, text: "Mum", pos: "w" },
          { x: -0.4, y: 1, text: "Son", pos: "w" },
        ],
        caption: String.raw`At the later time: Mum $:$ son $= 4 : 1$. The difference of 3 units is always 36 years.`,
        alt: "Mum's bar is 4 units and the son's bar is 1 unit. The extra 3 units in Mum's bar are marked as the difference of 36 years.",
      },
    },
  ],
  archetypes: [
    {
      id: "N5-simplest-form",
      name: String.raw`Writing a ratio in its simplest form`,
      tests: String.raw`Dividing all terms by their highest common factor, often after changing quantities to the same unit (m and cm, h and min, \$ and cents).`,
      questions: [
        {
          stem: String.raw`Express $24 : 36$ in its simplest form.`,
          choices: [String.raw`$2 : 3$`, String.raw`$3 : 2$`, String.raw`$4 : 6$`, String.raw`$12 : 18$`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Ribbon A is 1 m 20 cm long. Ribbon B is 75 cm long. Find the ratio of the length of Ribbon B to the length of Ribbon A. Give your answer in its simplest form.`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N5-missing-term",
      name: String.raw`Equivalent ratios and the missing term`,
      tests: String.raw`Finding an unknown term in a pair of equivalent ratios, either as a bare number sentence or from one known quantity in a story.`,
      questions: [
        {
          stem: String.raw`What is the missing number in the box? $$4 : 7 = \square : 63$$`,
          choices: [String.raw`9`, String.raw`28`, String.raw`36`, String.raw`60`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`The ratio of the length of a rectangle to its breadth is $7 : 4$. The breadth of the rectangle is 36 cm.`,
          parts: [
            { label: "(a)", text: String.raw`Find the length of the rectangle.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the perimeter of the rectangle.`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "N5-divide-in-ratio",
      name: String.raw`Dividing a quantity in a given ratio`,
      tests: String.raw`Using the total number of units, or the difference in units, to find the value of 1 unit and then each share. Includes three-way sharing $a : b : c$.`,
      questions: [
        {
          stem: String.raw`Amy and Bala shared \$84 in the ratio $3 : 4$. How much money did Bala get?`,
          choices: [String.raw`\$12`, String.raw`\$21`, String.raw`\$36`, String.raw`\$48`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Some money was shared among Ali, Ben and Cheng in the ratio $2 : 3 : 5$. Cheng received \$72 more than Ali.`,
          parts: [
            { label: "(a)", text: String.raw`How much money was shared altogether?`, marks: 2 },
            { label: "(b)", text: String.raw`How much money must Ben give to Ali so that they have the same amount of money?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N5-ratio-fraction",
      name: String.raw`Ratio and fraction`,
      tests: String.raw`Changing between a ratio and a fraction of the total or of the other quantity, including "a fraction of A equals a fraction of B".`,
      questions: [
        {
          stem: String.raw`The ratio of the number of boys to the number of girls in a class is $4 : 5$. What fraction of the class are boys?`,
          choices: [String.raw`$\frac{4}{5}$`, String.raw`$\frac{5}{4}$`, String.raw`$\frac{4}{9}$`, String.raw`$\frac{5}{9}$`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`$\frac{2}{3}$ of Ali's marbles is equal to $\frac{3}{4}$ of Ben's marbles.`,
          parts: [
            { label: "(a)", text: String.raw`Find the ratio of the number of Ali's marbles to the number of Ben's marbles.`, marks: 1 },
            { label: "(b)", text: String.raw`They have 340 marbles altogether. How many marbles does Ali have?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N5-three-quantities",
      name: String.raw`Combining two ratios into $a : b : c$`,
      tests: String.raw`Making the shared quantity the same number of units in both ratios, then using $a : b : c$ to find an actual amount. Look for two ratios that share one person or object.`,
      questions: [
        {
          stem: String.raw`The ratio of the number of Ann's stickers to Bob's stickers is $2 : 3$. The ratio of the number of Bob's stickers to Cal's stickers is $4 : 5$. Find the ratio of the number of Ann's stickers to Bob's stickers to Cal's stickers.`,
          choices: [String.raw`$2 : 3 : 5$`, String.raw`$2 : 7 : 5$`, String.raw`$8 : 12 : 15$`, String.raw`$12 : 8 : 15$`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The ratio of the mass of Parcel A to the mass of Parcel B is $3 : 4$. The ratio of the mass of Parcel B to the mass of Parcel C is $6 : 5$. The total mass of the three parcels is 1.55 kg.`,
          parts: [
            { label: "(a)", text: String.raw`Find the ratio of the mass of Parcel A to Parcel B to Parcel C.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the mass of Parcel C. Give your answer in grams.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N5-unchanged-quantity",
      name: String.raw`Before and after: one quantity unchanged`,
      tests: String.raw`Only one person's amount changes, so the other stays the same. Make the unchanged quantity the same number of units in both ratios.`,
      questions: [
        {
          stem: String.raw`The ratio of the number of boys to the number of girls in a choir was $3 : 4$. After 6 more boys joined the choir, there were as many boys as girls. How many girls were there in the choir?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The ratio of the number of stamps Ali had to the number of stamps Ben had was $7 : 4$. After Ali gave away 40 stamps to his friends, the ratio became $3 : 2$.`,
          parts: [
            { label: "(a)", text: String.raw`How many stamps did Ali have at first?`, marks: 2 },
            { label: "(b)", text: String.raw`After that, how many stamps must Ali give to Ben so that they have the same number of stamps?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N5-unchanged-total-difference",
      name: String.raw`Before and after: unchanged total or unchanged difference`,
      tests: String.raw`Transfers between two people keep the total the same; ages (or equal amounts added to both) keep the difference the same. Spot which one is fixed and make it the same number of units.`,
      questions: [
        {
          stem: String.raw`Mrs Lee is 36 years old. Her son is 8 years old. In how many years' time will the ratio of Mrs Lee's age to her son's age be $3 : 1$?`,
          choices: [String.raw`4`, String.raw`6`, String.raw`14`, String.raw`20`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The ratio of the amount of money Ali had to the amount of money Ben had was $7 : 5$. After Ali gave Ben \$30, the ratio became $1 : 2$.`,
          parts: [
            { label: "(a)", text: String.raw`How much money did Ali have at first?`, marks: 3 },
            { label: "(b)", text: String.raw`What fraction of their total amount of money did Ben have at the end?`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
