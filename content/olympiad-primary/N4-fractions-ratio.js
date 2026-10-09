H2.addTopic({
  id: "N4",
  title: "Fraction, Ratio and Percentage Puzzles",
  summary: String.raw`Use bar models and units to solve fraction-of-the-rest, ratio-change and percentage puzzles, and compare or add fractions with clever shortcuts.`,
  concepts: [
    {
      title: String.raw`Fraction of the rest: draw the bar`,
      body: String.raw`"$\frac13$ of the rest" means $\frac13$ of what is **left**, not $\frac13$ of the whole. Draw one bar for the whole amount and cut it up step by step.

Spend $\frac12$, then $\frac13$ of the rest. The rest is $3$ units out of $6$; spend $1$ of them. $2$ units out of $6$ are left, which is $\frac13$ of the whole.

- Choose a number of units that every fraction can cut evenly (here $2 \times 3 = 6$ units).
- Quick check: what is left is $\frac12 \times \frac23 = \frac13$.`,
      figure: {
        type: "plot",
        x: [-0.4, 7.6],
        y: [-1.1, 1.7],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [1.2, 0], [1.2, 0.7], [0, 0.7]], fill: true, tone: "warn" },
          { points: [[1.2, 0], [2.4, 0], [2.4, 0.7], [1.2, 0.7]], fill: true, tone: "warn" },
          { points: [[2.4, 0], [3.6, 0], [3.6, 0.7], [2.4, 0.7]], fill: true, tone: "warn" },
          { points: [[3.6, 0], [4.8, 0], [4.8, 0.7], [3.6, 0.7]], fill: true, tone: "good" },
          { points: [[0, 0], [7.2, 0], [7.2, 0.7], [0, 0.7]], fill: false, tone: "ink" },
        ],
        segments: [
          { from: [1.2, 0], to: [1.2, 0.7], tone: "ink", thin: true },
          { from: [2.4, 0], to: [2.4, 0.7], tone: "ink", thin: true },
          { from: [3.6, 0], to: [3.6, 0.7], tone: "ink", thin: true },
          { from: [4.8, 0], to: [4.8, 0.7], tone: "ink", thin: true },
          { from: [6, 0], to: [6, 0.7], tone: "ink", thin: true },
          { from: [0, 1], to: [3.6, 1], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "spent ½", pos: "n", style: "small" },
          { from: [3.6, -0.3], to: [7.2, -0.3], tone: "muted", thin: true, arrow: true, arrowStart: true, label: "the rest", pos: "s", style: "small" },
        ],
        labels: [
          { x: 4.2, y: 1, text: "⅓ of rest", pos: "n", style: "small", tone: "good" },
          { x: 6, y: 1, text: "left", pos: "n", style: "small" },
        ],
        caption: String.raw`Cut the rest into $3$ equal parts. Make the whole bar $6$ units. $2$ of $6$ units are left, which is $\frac13$.`,
        alt: "A bar of 6 equal units. The first 3 units are shaded as spent (one half). Of the other 3 units, 1 is shaded as one third of the rest, and 2 units are left.",
      },
    },
    {
      title: String.raw`Work backwards from the end`,
      body: String.raw`When a problem gives the amount left at the end, undo each step in reverse order. Undo "gave away $4$ more" by **adding** $4$ back, and undo "gave away half" by **doubling**.

Ann gave away half of her stickers and then $4$ more. She had $10$ left.
- Before the $4$ more: $10 + 4 = 14$.
- $14$ is the half she kept, so at first she had $14 \times 2 = 28$.

Check by going forwards: $28 \to 14 \to 10$. ✓`,
    },
    {
      title: String.raw`Constant total: one gives to the other`,
      body: String.raw`When one person gives some to another, the **total stays the same**. Make the totals the same number of units before and after.

$A : B = 5 : 1$ (total $6$ units). After $A$ gives some to $B$, $A : B = 2 : 1$ (total $3$ units, which is $6$ units if we double: $4 : 2$). $A$ went from $5$ units to $4$ units, so $A$ gave $1$ unit.

- If the totals are different numbers of parts, use a common multiple (e.g. totals of $4$ and $6$ parts both become $12$ units).`,
      figure: {
        type: "plot",
        x: [-3, 7],
        y: [-0.5, 4.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 3.3], [0.9, 3.3], [0.9, 3.9], [0, 3.9]], fill: true, tone: "accent" },
          { points: [[0.9, 3.3], [1.8, 3.3], [1.8, 3.9], [0.9, 3.9]], fill: true, tone: "accent" },
          { points: [[1.8, 3.3], [2.7, 3.3], [2.7, 3.9], [1.8, 3.9]], fill: true, tone: "accent" },
          { points: [[2.7, 3.3], [3.6, 3.3], [3.6, 3.9], [2.7, 3.9]], fill: true, tone: "accent" },
          { points: [[3.6, 3.3], [4.5, 3.3], [4.5, 3.9], [3.6, 3.9]], fill: true, tone: "accent" },
          { points: [[0, 3.3], [4.5, 3.3], [4.5, 3.9], [0, 3.9]], fill: false, tone: "ink" },
          { points: [[0, 2.3], [0.9, 2.3], [0.9, 2.9], [0, 2.9]], fill: true, tone: "good" },
          { points: [[0, 2.3], [0.9, 2.3], [0.9, 2.9], [0, 2.9]], fill: false, tone: "ink" },
          { points: [[0, 0.9], [0.9, 0.9], [0.9, 1.5], [0, 1.5]], fill: true, tone: "accent" },
          { points: [[0.9, 0.9], [1.8, 0.9], [1.8, 1.5], [0.9, 1.5]], fill: true, tone: "accent" },
          { points: [[1.8, 0.9], [2.7, 0.9], [2.7, 1.5], [1.8, 1.5]], fill: true, tone: "accent" },
          { points: [[2.7, 0.9], [3.6, 0.9], [3.6, 1.5], [2.7, 1.5]], fill: true, tone: "accent" },
          { points: [[0, 0.9], [3.6, 0.9], [3.6, 1.5], [0, 1.5]], fill: false, tone: "ink" },
          { points: [[0, -0.1], [0.9, -0.1], [0.9, 0.5], [0, 0.5]], fill: true, tone: "good" },
          { points: [[0.9, -0.1], [1.8, -0.1], [1.8, 0.5], [0.9, 0.5]], fill: true, tone: "warn" },
          { points: [[0, -0.1], [1.8, -0.1], [1.8, 0.5], [0, 0.5]], fill: false, tone: "ink" },
          { points: [[3.6, 0.9], [4.5, 0.9], [4.5, 1.5], [3.6, 1.5]], fill: false, tone: "warn", dashed: true },
        ],
        segments: [
          { from: [0.9, 3.3], to: [0.9, 3.9], tone: "ink", thin: true },
          { from: [1.8, 3.3], to: [1.8, 3.9], tone: "ink", thin: true },
          { from: [2.7, 3.3], to: [2.7, 3.9], tone: "ink", thin: true },
          { from: [3.6, 3.3], to: [3.6, 3.9], tone: "ink", thin: true },
          { from: [0.9, 0.9], to: [0.9, 1.5], tone: "ink", thin: true },
          { from: [1.8, 0.9], to: [1.8, 1.5], tone: "ink", thin: true },
          { from: [2.7, 0.9], to: [2.7, 1.5], tone: "ink", thin: true },
          { from: [0.9, -0.1], to: [0.9, 0.5], tone: "ink", thin: true },
        ],
        labels: [
          { x: -0.15, y: 3.5999999999999996, text: "A", pos: "w", style: "plain" },
          { x: -0.15, y: 2.5999999999999996, text: "B", pos: "w", style: "plain" },
          { x: -0.15, y: 1.2, text: "A", pos: "w", style: "plain" },
          { x: -0.15, y: 0.19999999999999998, text: "B", pos: "w", style: "plain" },
          { x: -1.3, y: 3.6, text: "Before", pos: "w", style: "small" },
          { x: -1.3, y: 1.2, text: "After", pos: "w", style: "small" },
          { x: 1.95, y: 0.2, text: "given by A", pos: "e", style: "small", tone: "warn" },
          { x: 4.9, y: 2.9, text: "total 6 units", pos: "e", style: "small" },
          { x: 4.9, y: 0.5, text: "total 6 units", pos: "e", style: "small" },
        ],
        caption: String.raw`$A : B = 5 : 1$ before and $2 : 1$ after. The total stays $6$ units, so $A$ gave $B$ $1$ unit.`,
        alt: "Bar model. Before: A has 5 units and B has 1 unit. After: A has 4 units (one unit dashed, gone) and B has 2 units, the new unit marked as given by A. Both times the total is 6 units.",
      },
    },
    {
      title: String.raw`Constant difference: both change by the same amount`,
      body: String.raw`Ages are the classic case: in $5$ years, **everyone** is $5$ years older, so the **difference** in ages never changes. The same happens when two people each spend, or each receive, the same amount.

Kim is $5$ and Dad is $35$. When will Dad be $4$ times as old as Kim? The difference $30$ is $4 - 1 = 3$ units, so $1$ unit is $10$. Kim will be $10$, which is in $5$ years.

- Write the difference as units, find $1$ unit, then answer the question asked.`,
      figure: {
        type: "plot",
        x: [-3.2, 6.4],
        y: [-0.4, 4.3],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 3.4], [1.2, 3.4], [1.2, 4], [0, 4]], fill: true, tone: "good" },
          { points: [[0, 2.5], [1.2, 2.5], [1.2, 3.1], [0, 3.1]], fill: true, tone: "good" },
          { points: [[1.2, 2.5], [4.8, 2.5], [4.8, 3.1], [1.2, 3.1]], fill: true, tone: "accent" },
          { points: [[0, 1], [1.2, 1], [1.2, 1.6], [0, 1.6]], fill: true, tone: "good" },
          { points: [[1.2, 1], [1.8, 1], [1.8, 1.6], [1.2, 1.6]], fill: true, tone: "warn" },
          { points: [[0, 0.1], [1.2, 0.1], [1.2, 0.7], [0, 0.7]], fill: true, tone: "good" },
          { points: [[1.2, 0.1], [4.8, 0.1], [4.8, 0.7], [1.2, 0.7]], fill: true, tone: "accent" },
          { points: [[4.8, 0.1], [5.4, 0.1], [5.4, 0.7], [4.8, 0.7]], fill: true, tone: "warn" },
        ],
        segments: [],
        labels: [
          { x: -0.15, y: 3.6999999999999997, text: "Kim", pos: "w" },
          { x: -0.15, y: 2.8, text: "Dad", pos: "w" },
          { x: -0.15, y: 1.3, text: "Kim", pos: "w" },
          { x: -0.15, y: 0.4, text: "Dad", pos: "w" },
          { x: -1.5, y: 3.4, text: "Now", pos: "w", style: "small" },
          { x: -1.5, y: 1, text: "Later", pos: "w", style: "small" },
          { x: 3, y: 2.8, text: "difference", pos: "c", style: "small" },
          { x: 3, y: 0.4, text: "difference", pos: "c", style: "small" },
          { x: 1.9499999999999997, y: 1.3, text: "+ same years", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`Both people get older by the same number of years, so the difference (blue) never changes.`,
        alt: "Bar model of two ages. Now: Kim's bar, and Dad's bar which is Kim's length plus a difference block. Later: both bars get the same extra piece added, and the difference block is unchanged.",
      },
    },
    {
      title: String.raw`Constant part: one amount does not change`,
      body: String.raw`If only one of the two amounts changes, keep the **unchanged one** as the same number of units in both ratios.

Red : blue beads $= 2 : 3$. After $12$ blue beads are added, red : blue $= 1 : 2$. Red did not change, so write $1 : 2$ as $2 : 4$. Blue went from $3$ units to $4$ units, so $1$ unit $= 12$, and there are $24$ red beads.`,
      figure: {
        type: "plot",
        x: [-3.4, 6],
        y: [-0.5, 4.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 3.3], [0.9, 3.3], [0.9, 3.9], [0, 3.9]], fill: true, tone: "accent" },
          { points: [[0.9, 3.3], [1.8, 3.3], [1.8, 3.9], [0.9, 3.9]], fill: true, tone: "accent" },
          { points: [[0, 3.3], [1.8, 3.3], [1.8, 3.9], [0, 3.9]], fill: false, tone: "ink" },
          { points: [[0, 2.3], [0.9, 2.3], [0.9, 2.9], [0, 2.9]], fill: true, tone: "good" },
          { points: [[0.9, 2.3], [1.8, 2.3], [1.8, 2.9], [0.9, 2.9]], fill: true, tone: "good" },
          { points: [[1.8, 2.3], [2.7, 2.3], [2.7, 2.9], [1.8, 2.9]], fill: true, tone: "good" },
          { points: [[0, 2.3], [2.7, 2.3], [2.7, 2.9], [0, 2.9]], fill: false, tone: "ink" },
          { points: [[0, 0.9], [0.9, 0.9], [0.9, 1.5], [0, 1.5]], fill: true, tone: "accent" },
          { points: [[0.9, 0.9], [1.8, 0.9], [1.8, 1.5], [0.9, 1.5]], fill: true, tone: "accent" },
          { points: [[0, 0.9], [1.8, 0.9], [1.8, 1.5], [0, 1.5]], fill: false, tone: "ink" },
          { points: [[0, -0.1], [0.9, -0.1], [0.9, 0.5], [0, 0.5]], fill: true, tone: "good" },
          { points: [[0.9, -0.1], [1.8, -0.1], [1.8, 0.5], [0.9, 0.5]], fill: true, tone: "good" },
          { points: [[1.8, -0.1], [2.7, -0.1], [2.7, 0.5], [1.8, 0.5]], fill: true, tone: "good" },
          { points: [[2.7, -0.1], [3.6, -0.1], [3.6, 0.5], [2.7, 0.5]], fill: true, tone: "warn" },
          { points: [[0, -0.1], [3.6, -0.1], [3.6, 0.5], [0, 0.5]], fill: false, tone: "ink" },
        ],
        segments: [
          { from: [0.9, 3.3], to: [0.9, 3.9], tone: "ink", thin: true },
          { from: [0.9, 2.3], to: [0.9, 2.9], tone: "ink", thin: true },
          { from: [1.8, 2.3], to: [1.8, 2.9], tone: "ink", thin: true },
          { from: [0.9, 0.9], to: [0.9, 1.5], tone: "ink", thin: true },
          { from: [0.9, -0.1], to: [0.9, 0.5], tone: "ink", thin: true },
          { from: [1.8, -0.1], to: [1.8, 0.5], tone: "ink", thin: true },
          { from: [2.7, -0.1], to: [2.7, 0.5], tone: "ink", thin: true },
        ],
        labels: [
          { x: -0.15, y: 3.5999999999999996, text: "Red", pos: "w", style: "plain" },
          { x: -0.15, y: 2.5999999999999996, text: "Blue", pos: "w", style: "plain" },
          { x: -0.15, y: 1.2, text: "Red", pos: "w", style: "plain" },
          { x: -0.15, y: 0.19999999999999998, text: "Blue", pos: "w", style: "plain" },
          { x: -1.7, y: 3.6, text: "Before", pos: "w", style: "small" },
          { x: -1.7, y: 1.2, text: "After", pos: "w", style: "small" },
          { x: 3.75, y: 0.2, text: "12 added", pos: "e", style: "small", tone: "warn" },
          { x: 1.95, y: 3.6, text: "same", pos: "e", style: "small" },
          { x: 1.95, y: 1.2, text: "same", pos: "e", style: "small" },
        ],
        caption: String.raw`Red does not change, so keep red as $2$ units: $2 : 3$ becomes $2 : 4$. The extra unit of blue is the $12$ beads added.`,
        alt: "Bar model. Before: red has 2 units and blue has 3 units. After: red still has 2 units and blue has 4 units, the extra unit marked as 12 added.",
      },
    },
    {
      title: String.raw`Percentage changes: each one is of the new amount`,
      body: String.raw`A second percentage change is worked out on the **new** amount, so "up $20\%$ then down $20\%$" does **not** bring you back.

Start with $100$: up $20\%$ gives $120$; down $20\%$ of $120$ is $24$, giving $96$. That is $4\%$ less than at the start.

- Starting from $100$ makes percentages easy to read.
- Changes multiply: up $20\%$ is $\times 1.2$, down $20\%$ is $\times 0.8$, and $1.2 \times 0.8 = 0.96$.
- "Of the whole" can change while one part stays the same: then use the constant part idea.`,
    },
    {
      title: String.raw`Comparing fractions cleverly`,
      body: String.raw`You do not always need a common denominator.

- **Same numerator**: the bigger the denominator, the smaller the fraction. $\frac{2}{9} < \frac{2}{7}$.
- **Compare with $\frac12$**: $\frac{6}{13}$ is less than a half, $\frac{5}{8}$ is more than a half.
- **Distance from $1$**: $\frac{98}{99}$ is $\frac{1}{99}$ short of $1$, and $\frac{99}{100}$ is $\frac{1}{100}$ short, so $\frac{99}{100}$ is bigger.
- **Cross-multiply**: $\frac47$ vs $\frac59$: compare $4 \times 9 = 36$ with $5 \times 7 = 35$, so $\frac47 > \frac59$.`,
    },
    {
      title: String.raw`Unit fractions and telescoping sums`,
      body: String.raw`A **unit fraction** has numerator $1$. Two neighbouring unit fractions have a nice difference:
$$\frac13 - \frac14 = \frac{4 - 3}{3 \times 4} = \frac{1}{12}$$

- So $\frac{1}{12} = \frac13 - \frac14$, and also $\frac13 = \frac14 + \frac{1}{12}$.
- **Telescoping**: split every term, and the middle terms cancel in pairs.
$$\frac{1}{3 \times 4} + \frac{1}{4 \times 5} + \frac{1}{5 \times 6} = \Big(\frac13 - \frac14\Big) + \Big(\frac14 - \frac15\Big) + \Big(\frac15 - \frac16\Big) = \frac13 - \frac16 = \frac16$$
- Learn to spot $2 = 1 \times 2$, $6 = 2 \times 3$, $12 = 3 \times 4$, $20 = 4 \times 5$, …`,
    },
    {
      title: String.raw`Mixtures: find the part that stays the same`,
      body: String.raw`When something is added to or taken from a mixture, look for the ingredient that does **not** change, and work with it.

- A $60$ g bag of nuts is $25\%$ peanuts, so it has $15$ g of peanuts. Cashews are taken out until peanuts make up $50\%$. The peanuts are still $15$ g, so the bag now weighs $30$ g: $30$ g of cashews were taken out.
- Adding **water** keeps the salt or sugar the same. Adding **sugar** keeps the water the same.`,
    },
    {
      title: String.raw`Telescoping with three numbers multiplied`,
      body: String.raw`When three neighbouring numbers are multiplied, split using the two-number products:
$$\frac{1}{1 \times 2 \times 3} = \frac12 \times \Big(\frac{1}{1 \times 2} - \frac{1}{2 \times 3}\Big) = \frac12 \times \Big(\frac12 - \frac16\Big) = \frac16$$

- The $\frac12$ in front is there because the first and last numbers ($1$ and $3$) differ by $2$.
- In a long sum, split every term this way. The middle pieces cancel, leaving only the first and the last.`,
    },
  ],
  archetypes: [
    {
      id: "N4-remainder",
      name: String.raw`Fraction of a remainder`,
      tests: String.raw`Someone uses a fraction of an amount, then a fraction of what is left (sometimes with "and $5$ more"). Given what is left at the end, find the amount at first. Use a bar model or work backwards.`,
      questions: [
        {
          stem: String.raw`Mei had some money. She spent $\frac13$ of it on a book and $\frac14$ of the remaining money on a pen. She had \$30 left. How much money did she have at first?`,
          difficulty: 1,
          answer: String.raw`\$60`,
        },
        {
          stem: String.raw`A tank was full of water. On Monday, $\frac25$ of the water was used. On Tuesday, $\frac13$ of the remaining water was used. On Wednesday, another $18$ litres were used, and the tank was then $\frac14$ full. What is the capacity of the tank?`,
          difficulty: 2,
          answer: String.raw`$120$ litres`,
        },
        {
          stem: String.raw`In the morning, a farmer sold $\frac14$ of his eggs and $6$ more. In the afternoon, he sold $\frac13$ of the remaining eggs and $4$ more. He then had $52$ eggs left. How many eggs did he have at first?`,
          difficulty: 3,
          answer: String.raw`$120$`,
        },
        {
          stem: String.raw`Wei read $\frac25$ of a book on Monday. On Tuesday he read half of the remaining pages. What fraction of the book has he still not read?`,
          difficulty: 1,
          choices: [String.raw`$\frac{1}{10}$`, String.raw`$\frac15$`, String.raw`$\frac{3}{10}$`, String.raw`$\frac25$`, String.raw`$\frac12$`],
          answer: String.raw`(C) $\frac{3}{10}$`,
        },
        {
          stem: String.raw`Siti spent $\frac14$ of her money on a pair of shoes and $\frac23$ of the remaining money on a bag. The bag cost \$45 more than the shoes. How much money did she have at first?`,
          difficulty: 2,
          answer: String.raw`\$180`,
        },
        {
          stem: String.raw`A shop had some pens. On Day $1$ it sold $\frac12$ of them. On Day $2$ it sold $\frac13$ of the pens that were left. On Day $3$ it sold $\frac14$ of the pens that were left, and so on, until on Day $9$ it sold $\frac{1}{10}$ of the pens that were left. It then had $12$ pens. How many pens did the shop have at first?`,
          difficulty: 3,
          answer: String.raw`$120$`,
        },
        {
          stem: String.raw`A farmer had some durians. On Day $1$ he sold $\frac14$ of his durians and then some extra durians. On Day $2$ he sold $\frac13$ of the durians left, and then the same number of extra durians as on Day $1$. On Day $3$ he sold $\frac12$ of the durians left, and again the same number of extra durians. He then had $18$ durians left. He sold $10$ more durians on Day $1$ than on Day $3$. How many durians did he have at first?`,
          difficulty: 4,
          answer: String.raw`$160$`,
        },
      ],
    },
    {
      id: "N4-constant-total",
      name: String.raw`Giving and moving (constant total)`,
      tests: String.raw`One person gives some to another, or items are moved from one box to another, and the ratio changes. The total stays the same, so make the total the same number of units.`,
      questions: [
        {
          stem: String.raw`Ali and Ben had marbles in the ratio $5 : 3$. After Ali gave Ben $12$ marbles, they had the same number of marbles. How many marbles did they have altogether?`,
          difficulty: 1,
          answer: String.raw`$96$`,
        },
        {
          stem: String.raw`Box A and Box B have $240$ sweets altogether, in the ratio $7 : 5$. How many sweets must be moved from Box A to Box B so that the ratio becomes $3 : 5$?`,
          difficulty: 2,
          choices: [String.raw`$50$`, String.raw`$60$`, String.raw`$80$`, String.raw`$90$`, String.raw`$150$`],
          answer: String.raw`(A) $50$`,
        },
        {
          stem: String.raw`Jars P and Q contain beads in the ratio $4 : 1$. After $30$ beads are moved from P to Q, the ratio becomes $3 : 2$. Some beads are then moved from Q back to P so that the ratio becomes $7 : 3$. How many beads are moved back?`,
          difficulty: 3,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Ali had twice as many stickers as Ben. After Ali gave Ben $15$ stickers, Ben had twice as many stickers as Ali. How many stickers did they have altogether?`,
          difficulty: 1,
          answer: String.raw`$45$`,
        },
        {
          stem: String.raw`Jug A has $\frac34$ as much water as Jug B. After $150$ ml of water is poured from Jug B into Jug A, Jug A has $\frac43$ as much water as Jug B. How much water is there altogether?`,
          difficulty: 2,
          choices: [String.raw`$450$ ml`, String.raw`$700$ ml`, String.raw`$900$ ml`, String.raw`$1050$ ml`, String.raw`$1200$ ml`],
          answer: String.raw`(D) $1050$ ml`,
        },
        {
          stem: String.raw`Ann and Ben had some marbles. First, Ann gave Ben $\frac14$ of her marbles. Then Ben gave Ann $\frac13$ of the marbles he had at that time. In the end, each of them had $60$ marbles. How many marbles did Ben have at first?`,
          difficulty: 3,
          answer: String.raw`$80$`,
        },
        {
          stem: String.raw`Jars A, B and C held beads in the ratio $6 : 5 : 4$. First, some beads were moved from Jar A to Jar B. Then some beads were moved from Jar B to Jar C. The ratio then became $4 : 3 : 5$. In the second move, $45$ more beads were moved than in the first move. How many beads were there altogether?`,
          difficulty: 4,
          answer: String.raw`$540$`,
        },
      ],
    },
    {
      id: "N4-constant-difference",
      name: String.raw`Ages and equal changes (constant difference)`,
      tests: String.raw`Ages in the past or future, or two people who each add or take away the same amount. The difference stays the same, so match the difference in units.`,
      questions: [
        {
          stem: String.raw`Sam is $8$ years old and his father is $38$ years old. In how many years' time will his father be $3$ times as old as Sam?`,
          difficulty: 1,
          answer: String.raw`$7$ years`,
        },
        {
          stem: String.raw`Two ribbons are $85$ cm and $45$ cm long. The same length is cut off from each ribbon. The longer ribbon is now $3$ times as long as the shorter one. How much was cut off from each ribbon?`,
          difficulty: 2,
          choices: [String.raw`$5$ cm`, String.raw`$10$ cm`, String.raw`$15$ cm`, String.raw`$20$ cm`, String.raw`$25$ cm`],
          answer: String.raw`(E) $25$ cm`,
        },
        {
          stem: String.raw`Mother is now $4$ times as old as Jia Hui. In $6$ years' time, Mother will be $3$ times as old as Jia Hui. How old will Jia Hui be when Mother is twice as old as her?`,
          difficulty: 3,
          answer: String.raw`$36$ years old`,
        },
        {
          stem: String.raw`Ali has \$45 and Bala has \$15. They each add the same amount of money to their savings. Then Ali has twice as much money as Bala. How much did each of them add?`,
          difficulty: 1,
          answer: String.raw`\$15`,
        },
        {
          stem: String.raw`Grandpa is $66$ years old. His three grandchildren are $10$, $8$ and $6$ years old. In how many years' time will Grandpa's age be equal to the sum of the ages of his three grandchildren?`,
          difficulty: 2,
          answer: String.raw`$21$ years`,
        },
        {
          stem: String.raw`Mrs Tan and her son have the same birthday, and Mrs Tan is $36$ years older than her son. On how many of her son's birthdays, from his $1$st birthday onwards, is Mrs Tan's age an exact multiple of her son's age?`,
          difficulty: 3,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`My age is a two-digit number. Uncle Lim's age is my age with its two digits swapped. In $13$ years' time, Uncle Lim will be exactly twice as old as I will be then. How old is Uncle Lim now?`,
          difficulty: 4,
          answer: String.raw`$41$ years old`,
        },
      ],
    },
    {
      id: "N4-constant-part",
      name: String.raw`One amount stays the same (constant part)`,
      tests: String.raw`Only one of the two amounts changes (some are sold, eaten or added), and the ratio or fraction changes. Keep the unchanged amount as the same number of units.`,
      questions: [
        {
          stem: String.raw`A fruit seller had apples and oranges in the ratio $3 : 5$. After he sold $40$ oranges, the ratio of apples to oranges became $3 : 1$. How many apples did he have?`,
          difficulty: 1,
          choices: [String.raw`$30$`, String.raw`$40$`, String.raw`$50$`, String.raw`$60$`, String.raw`$80$`],
          answer: String.raw`(A) $30$`,
        },
        {
          stem: String.raw`In a class, $\frac37$ of the pupils are boys. After $6$ more girls join the class, $\frac13$ of the pupils are boys. How many boys are in the class?`,
          difficulty: 2,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`A jar had red and green sweets in the ratio $5 : 3$. Some red sweets were eaten, and the ratio became $5 : 4$. Then $90$ green sweets were added, and the ratio became $1 : 2$. How many red sweets were eaten?`,
          difficulty: 3,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`A bag has red and blue beads, and $\frac14$ of the beads are red. After $20$ blue beads are taken out, half of the beads in the bag are red. How many red beads are there?`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`A bottle holds $200$ g of salt water, and $10\%$ of it is salt. How much water must be added so that only $8\%$ of it is salt?`,
          difficulty: 2,
          answer: String.raw`$50$ g`,
        },
        {
          stem: String.raw`A jug holds $400$ g of sugar water, and $15\%$ of it is sugar. How much sugar must be added so that $20\%$ of it is sugar?`,
          difficulty: 3,
          answer: String.raw`$25$ g`,
        },
        {
          stem: String.raw`In a hall, $\frac59$ of the people were pupils and the rest were adults. Then $60$ pupils and some adults left, and $\frac47$ of the people still in the hall were pupils. After that, $30$ more adults left, and $\frac23$ of the people still in the hall were pupils. How many adults left the hall the first time?`,
          difficulty: 4,
          answer: String.raw`$54$`,
        },
      ],
    },
    {
      id: "N4-percent-changes",
      name: String.raw`Successive percentage changes`,
      tests: String.raw`An amount goes up or down by a percentage, then changes again by a percentage of the new amount. Or a percentage of a group changes when only one part changes.`,
      questions: [
        {
          stem: String.raw`A shirt cost \$40. Its price was increased by $10\%$. Later, the new price was decreased by $10\%$. What was the final price of the shirt?`,
          difficulty: 1,
          choices: [String.raw`\$36.00`, String.raw`\$39.60`, String.raw`\$40.00`, String.raw`\$40.40`, String.raw`\$44.00`],
          answer: String.raw`(B) \$39.60`,
        },
        {
          stem: String.raw`The number of members in a club increased by $20\%$ in 2024. In 2025, the number of members decreased by $25\%$. At the end of 2025, the club had $252$ members. How many members did it have at the start of 2024?`,
          difficulty: 2,
          answer: String.raw`$280$`,
        },
        {
          stem: String.raw`In a box, $40\%$ of the balls are red and the rest are blue. After $30$ more red balls are put in, $60\%$ of the balls are red. How many balls are in the box now?`,
          difficulty: 3,
          answer: String.raw`$90$`,
        },
        {
          stem: String.raw`After a price increase of $20\%$, a toy costs \$72. What was the price before the increase?`,
          difficulty: 1,
          answer: String.raw`\$60`,
        },
        {
          stem: String.raw`A shop gives a $20\%$ discount on a jacket. Club members get a further $10\%$ off the discounted price. For a club member, what is the total discount as a percentage of the original price?`,
          difficulty: 2,
          choices: [String.raw`$18\%$`, String.raw`$28\%$`, String.raw`$30\%$`, String.raw`$32\%$`, String.raw`$72\%$`],
          answer: String.raw`(B) $28\%$`,
        },
        {
          stem: String.raw`Town A has $20\%$ more people than Town B. After $300$ people move from Town A to Town B, Town B has $20\%$ more people than Town A. How many people are there in the two towns altogether?`,
          difficulty: 3,
          answer: String.raw`$3300$`,
        },
        {
          stem: String.raw`In a class, $60\%$ of the boys and $75\%$ of the girls passed a test. Altogether, $66\%$ of the pupils in the class passed. $14$ more boys than girls failed the test. How many pupils are in the class?`,
          difficulty: 4,
          answer: String.raw`$100$`,
        },
      ],
    },
    {
      id: "N4-compare-fractions",
      name: String.raw`Comparing and ordering fractions`,
      tests: String.raw`Pick the largest or smallest fraction, put fractions in order, or count the fractions that lie between two others. Use same numerators, compare with $\frac12$ or $1$, or cross-multiply.`,
      questions: [
        {
          stem: String.raw`Which fraction is the smallest?`,
          difficulty: 1,
          choices: [String.raw`$\frac34$`, String.raw`$\frac35$`, String.raw`$\frac37$`, String.raw`$\frac38$`, String.raw`$\frac{3}{10}$`],
          answer: String.raw`(E) $\frac{3}{10}$`,
        },
        {
          stem: String.raw`Arrange these fractions from the smallest to the largest:
$$\frac{5}{11}, \quad \frac{7}{12}, \quad \frac{4}{9}, \quad \frac{10}{19}$$`,
          difficulty: 2,
          answer: String.raw`$\frac49, \ \frac{5}{11}, \ \frac{10}{19}, \ \frac{7}{12}$`,
        },
        {
          stem: String.raw`How many whole numbers $n$ make this true?
$$\frac27 < \frac{n}{24} < \frac59$$`,
          difficulty: 3,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Which fraction is closest to $\frac12$?`,
          difficulty: 1,
          choices: [String.raw`$\frac37$`, String.raw`$\frac59$`, String.raw`$\frac{6}{11}$`, String.raw`$\frac{7}{15}$`, String.raw`$\frac49$`],
          answer: String.raw`(D) $\frac{7}{15}$`,
        },
        {
          stem: String.raw`Which of these fractions is the smallest?
$$\frac34, \quad \frac57, \quad \frac{7}{10}, \quad \frac{9}{13}, \quad \frac{11}{16}$$`,
          difficulty: 2,
          answer: String.raw`$\frac{11}{16}$`,
        },
        {
          stem: String.raw`Arrange these fractions from the smallest to the largest:
$$\frac{12}{37}, \quad \frac{9}{28}, \quad \frac{17}{53}, \quad \frac{7}{22}$$`,
          difficulty: 3,
          answer: String.raw`$\frac{7}{22}, \ \frac{17}{53}, \ \frac{9}{28}, \ \frac{12}{37}$`,
        },
        {
          stem: String.raw`A fraction lies between $\frac{2026}{2027}$ and $\frac{2027}{2028}$. Its numerator and denominator are whole numbers. What is the smallest possible denominator?`,
          difficulty: 4,
          answer: String.raw`$4055$`,
        },
      ],
    },
    {
      id: "N4-unit-fractions",
      name: String.raw`Splitting unit fractions`,
      tests: String.raw`Missing numbers in sums of fractions with numerator $1$, such as $\frac14 = \frac15 + \frac{1}{\square}$, or counting the ways to split a unit fraction into two.`,
      questions: [
        {
          stem: String.raw`Find the missing number.
$$\frac14 = \frac15 + \frac{1}{\square}$$`,
          difficulty: 1,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`Find the missing number.
$$\frac12 + \frac13 + \frac17 + \frac{1}{\square} = 1$$`,
          difficulty: 2,
          answer: String.raw`$42$`,
        },
        {
          stem: String.raw`In how many ways can $\frac16$ be written as $\frac1a + \frac1b$, where $a$ and $b$ are whole numbers and $a$ is not bigger than $b$? (For example, $\frac16 = \frac{1}{12} + \frac{1}{12}$ is one way.)`,
          difficulty: 3,
          answer: String.raw`5 ways`,
        },
        {
          stem: String.raw`The same number goes in both boxes. What is the number?
$$\frac{1}{\square} + \frac{1}{\square} = \frac15$$`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`In how many ways can $\frac{7}{12}$ be written as $\frac1a + \frac1b$, where $a$ and $b$ are whole numbers and $a$ is smaller than $b$?`,
          difficulty: 2,
          answer: String.raw`2 ways`,
        },
        {
          stem: String.raw`$\frac12$ is written as the sum of three unit fractions with different denominators:
$$\frac12 = \frac1a + \frac1b + \frac1c, \qquad a < b < c$$
What is the smallest possible value of $c$?`,
          difficulty: 3,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`In how many ways can $\frac35$ be written as $\frac1a + \frac1b + \frac1c$, where $a$, $b$ and $c$ are whole numbers and $a \le b \le c$? (For example, $\frac35 = \frac15 + \frac15 + \frac15$ is one way.)`,
          difficulty: 4,
          answer: String.raw`10 ways`,
        },
      ],
    },
    {
      id: "N4-telescoping",
      name: String.raw`Telescoping fraction sums`,
      tests: String.raw`Long sums like $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \dots$ where each fraction splits into a difference of two unit fractions and the middle terms cancel.`,
      questions: [
        {
          stem: String.raw`Find the value of
$$\frac12 + \frac16 + \frac{1}{12} + \frac{1}{20} + \frac{1}{30} + \frac{1}{42}$$`,
          difficulty: 1,
          answer: String.raw`$\frac67$`,
        },
        {
          stem: String.raw`What is the value of
$$\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \dots + \frac{1}{49 \times 50}?$$`,
          difficulty: 2,
          choices: [String.raw`$\frac{1}{50}$`, String.raw`$\frac{48}{49}$`, String.raw`$\frac{49}{50}$`, String.raw`$\frac{50}{51}$`, String.raw`$1$`],
          answer: String.raw`(C) $\frac{49}{50}$`,
        },
        {
          stem: String.raw`Find the value of
$$\frac{1}{2 \times 4} + \frac{1}{4 \times 6} + \frac{1}{6 \times 8} + \dots + \frac{1}{98 \times 100}$$`,
          difficulty: 3,
          answer: String.raw`$\frac{49}{200}$`,
        },
        {
          stem: String.raw`What is the value of $\frac12 + \frac14 + \frac18 + \frac{1}{16} + \frac{1}{32} + \frac{1}{64}$?`,
          difficulty: 1,
          choices: [String.raw`$\frac{1}{64}$`, String.raw`$\frac{31}{32}$`, String.raw`$\frac{63}{64}$`, String.raw`$1$`, String.raw`$\frac{127}{128}$`],
          answer: String.raw`(C) $\frac{63}{64}$`,
        },
        {
          stem: String.raw`Find the value of
$$\frac{3}{1 \times 4} + \frac{3}{4 \times 7} + \frac{3}{7 \times 10} + \dots + \frac{3}{28 \times 31}$$`,
          difficulty: 2,
          answer: String.raw`$\frac{30}{31}$`,
        },
        {
          stem: String.raw`Find the value of
$$\frac{1}{1 \times 3} + \frac{1}{2 \times 4} + \frac{1}{3 \times 5} + \dots + \frac{1}{9 \times 11}$$`,
          difficulty: 3,
          answer: String.raw`$\frac{36}{55}$`,
        },
        {
          stem: String.raw`Find the value of
$$\frac{1}{2 \times 3 \times 4} + \frac{2}{3 \times 4 \times 5} + \frac{3}{4 \times 5 \times 6} + \dots + \frac{9}{10 \times 11 \times 12}$$`,
          difficulty: 4,
          answer: String.raw`$\frac{15}{88}$`,
        },
      ],
    },
  ],
});
