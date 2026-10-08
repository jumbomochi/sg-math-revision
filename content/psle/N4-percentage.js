H2.addTopic({
  id: "N4",
  title: "Percentage",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Percent as "out of 100", finding a part or the whole, discount, GST, annual interest, and percentage increase and decrease.`,
  syllabus: {
    include: [
      String.raw`P5: expressing a part of a whole as a percentage`,
      String.raw`P5: use of %`,
      String.raw`P5: finding a percentage part of a whole`,
      String.raw`P5: finding discount, GST and annual interest`,
      String.raw`P6: finding the whole given a part and the percentage`,
      String.raw`P6: finding percentage increase/decrease`,
      String.raw`P5–P6: solving up to 3-step word problems involving percentage`,
    ],
    exclude: [
      String.raw`compound interest (interest is for one year at a time)`,
      String.raw`profit and loss, commission and hire purchase (Secondary topics)`,
    ],
  },
  concepts: [
    {
      title: String.raw`Percent means "out of 100"`,
      body: String.raw`**Per cent** means "out of 100". The sign is %.

- $23\% = \dfrac{23}{100} = 0.23$
- $100\%$ is the **whole**. $50\% = \frac{1}{2}$, $25\% = \frac{1}{4}$, $10\% = \frac{1}{10}$, $1\% = \frac{1}{100}$.
- Fraction to percentage: multiply by $100\%$. For example, $\frac{3}{4} = \frac{3}{4} \times 100\% = 75\%$.
- Percentage to fraction: write it over 100, then simplify. $85\% = \frac{85}{100} = \frac{17}{20}$.`,
      figure: {
        type: "plot",
        x: [-6, 16], y: [-0.6, 10.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [3, 0], [3, 3], [2, 3], [2, 10], [0, 10]], fill: true, tone: "accent" },
          { points: [[0, 0], [10, 0], [10, 10], [0, 10]], tone: "ink" },
        ],
        segments: Array.from({ length: 9 }, (_, i) => ({ from: [i + 1, 0], to: [i + 1, 10], thin: true, tone: "muted" }))
          .concat(Array.from({ length: 9 }, (_, i) => ({ from: [0, i + 1], to: [10, i + 1], thin: true, tone: "muted" }))),
        labels: [
          { x: 10.4, y: 5.6, text: "23 out of 100", pos: "e" },
          { x: 10.4, y: 4.4, text: "= 23%", pos: "e" },
        ],
        caption: String.raw`23 of the 100 equal squares are shaded, so $23\%$ of the grid is shaded.`,
        alt: "A 10 by 10 grid of 100 small squares. 23 squares are shaded: two full columns of 10 and 3 more squares.",
      },
    },
    {
      title: String.raw`Part of a whole as a percentage`,
      body: String.raw`$$\text{percentage} = \frac{\text{part}}{\text{whole}} \times 100\%$$

*Example.* 9 out of 25 pupils walk to school: $\frac{9}{25} \times 100\% = 36\%$.

- Find the **whole** first. Read carefully: "percentage of the boys" and "percentage of the class" have different wholes.
- Both numbers must be in the **same unit**. To find 300 g as a percentage of 2 kg, use $\frac{300}{2000}$.
- **Common mistake:** writing the part as the answer, e.g. "9%". Always divide by the whole.`,
    },
    {
      title: String.raw`Finding a percentage of a quantity`,
      body: String.raw`To find a percentage of a quantity, **multiply**:

$$70\% \text{ of } 60 = \frac{70}{100} \times 60 = 42$$

- Or use "10% first": $10\%$ of 60 is 6, so $70\%$ is $7 \times 6 = 42$. This is quick without a calculator.
- The **rest** is $100\% - 70\% = 30\%$.
- "25% **of the remainder**" means 25% of what is left, **not** 25% of the original amount.`,
      figure: {
        type: "plot",
        x: [-2, 22], y: [-2.8, 4.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [14, 0], [14, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[0, 0], [20, 0], [20, 2], [0, 2]], tone: "ink" },
        ],
        segments: Array.from({ length: 9 }, (_, i) => ({ from: [2 * i + 2, 0], to: [2 * i + 2, 2], thin: true, tone: "ink" })).concat([
          { from: [0, 3], to: [20, 3], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "100% = 60", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [14, -0.8], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "70% = 42", pos: "s", style: "plain" },
        ]),
        caption: String.raw`The bar is cut into 10 parts. Each part is $10\% = 6$.`,
        alt: "A bar for 100% = 60 cut into 10 equal parts. The first 7 parts are shaded and marked 70% = 42.",
      },
    },
    {
      title: String.raw`Discount`,
      body: String.raw`A **discount** is the amount taken off the **usual price**. The percentage is always a percentage **of the usual price**.

- Discount $=$ discount % $\times$ usual price.
- Sale price $=$ usual price $-$ discount.
- Shortcut: with a $25\%$ discount you pay $75\%$ of the usual price.

*Example.* A cap usually costs \$40. With a $25\%$ discount, the discount is \$10 and the sale price is \$30.

**Common mistake:** taking the percentage of the **sale** price instead of the usual price.`,
      figure: {
        type: "plot",
        x: [-1, 21.4], y: [-2.8, 4.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [15, 0], [15, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[15, 0], [20, 0], [20, 2], [15, 2]], fill: true, tone: "warn" },
        ],
        segments: [
          { from: [0, 3], to: [20, 3], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "usual price = 100%", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [15, -0.8], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "sale price = 75%", pos: "s", style: "plain" },
          { from: [15, -0.8], to: [20, -0.8], thin: true, tone: "warn", arrow: true, arrowStart: true, label: "discount", pos: "s", style: "small" },
        ],
        labels: [
          { x: 17.5, y: 1, text: "25%", pos: "c", style: "small" },
        ],
        caption: String.raw`A $25\%$ discount: you pay the other $75\%$.`,
        alt: "A bar for the usual price, 100%. The last 25% is marked as the discount; the first 75% is the sale price.",
      },
    },
    {
      title: String.raw`GST`,
      body: String.raw`**GST** (Goods and Services Tax) is **added** to the price. The question tells you the rate (in Singapore it is now $9\%$).

- GST $=$ GST rate $\times$ price **before** GST.
- Price with GST $= 100\% + 9\% = 109\%$ of the price before GST.
- When there is a discount **and** GST, take the discount first. The GST is charged on the price **after** the discount.

*Example.* A fan costs \$200 before GST. GST at $9\%$ is \$18, so you pay \$218.`,
      figure: {
        type: "plot",
        x: [-1, 23.2], y: [-2.8, 4.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [20, 0], [20, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[20, 0], [21.8, 0], [21.8, 2], [20, 2]], fill: true, tone: "warn" },
        ],
        segments: [
          { from: [0, 3], to: [21.8, 3], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "price with GST = 109%", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [20, -0.8], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "price before GST = 100%", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 21.9, y: 1, text: "9%", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`GST is a small extra piece added on to the end of the price.`,
        alt: "A bar for the price before GST, 100%, with a small extra piece of 9% for GST added at the end. Together they make 109%.",
      },
    },
    {
      title: String.raw`Annual interest`,
      body: String.raw`A bank pays **interest** on money you save. "Interest of $2\%$ per year" (per annum) means each year the bank adds $2\%$ of the money in the account.

- Interest for one year $=$ interest rate $\times$ amount saved.
- Amount at the end of the year $=$ amount saved $+$ interest.

*Example.* \$600 at $3\%$ per year earns $\frac{3}{100} \times 600 = \$18$ in one year. The account then has \$618.

**Check** what is asked: the **interest** only, or the **total** amount in the bank.`,
    },
    {
      title: String.raw`Finding the whole (P6)`,
      body: String.raw`If you know a part **and** its percentage, go to $1\%$ (or $10\%$) first, then to $100\%$.

*Example.* $40\%$ of a number is 26.

- $10\% \to 26 \div 4 = 6.5$
- $100\% \to 6.5 \times 10 = 65$

- **Common mistake:** finding $40\%$ **of** 26. The 26 is the part, not the whole.
- Price **after** a $25\%$ discount is $75\%$ of the usual price. Price **with** $9\%$ GST is $109\%$ of the price before GST. Use these to work backwards.`,
      figure: {
        type: "plot",
        x: [-2, 22], y: [-2.8, 4.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [8, 0], [8, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[0, 0], [20, 0], [20, 2], [0, 2]], tone: "ink" },
        ],
        segments: Array.from({ length: 9 }, (_, i) => ({ from: [2 * i + 2, 0], to: [2 * i + 2, 2], thin: true, tone: "ink" })).concat([
          { from: [0, 3], to: [20, 3], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "100% = ?", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [8, -0.8], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "40% = 26", pos: "s", style: "plain" },
        ]),
        caption: String.raw`4 parts are 26, so 1 part ($10\%$) is 6.5 and 10 parts are 65.`,
        alt: "A bar cut into 10 equal parts of 10% each. The first 4 parts are shaded and marked 40% = 26. The whole bar is marked 100% = ?.",
      },
    },
    {
      title: String.raw`Percentage increase and decrease (P6)`,
      body: String.raw`$$\text{percentage increase} = \frac{\text{increase}}{\text{original value}} \times 100\%$$

The same rule works for a decrease: $\frac{\text{decrease}}{\text{original value}} \times 100\%$.

*Example.* A plant grows from 50 cm to 60 cm. The increase is 10 cm, so the percentage increase is $\frac{10}{50} \times 100\% = 20\%$.

- Always divide by the **original** (the "before") value, never by the new value.
- An increase of $10\%$ followed by a decrease of $10\%$ does **not** bring you back to the start, because the second $10\%$ is of a different amount.`,
      figure: {
        type: "plot",
        x: [-5, 22], y: [-0.6, 5.8], equal: true, axes: false,
        polygons: [
          { points: [[0, 3], [15, 3], [15, 5], [0, 5]], fill: true, tone: "muted" },
          { points: [[0, 0], [15, 0], [15, 2], [0, 2]], fill: true, tone: "muted" },
          { points: [[15, 0], [18, 0], [18, 2], [15, 2]], fill: true, tone: "warn" },
        ],
        segments: [{ from: [15, 2.6], to: [15, -0.4], dashed: true, thin: true, tone: "ink" }],
        labels: [
          { x: -0.4, y: 4, text: "Before", pos: "w" },
          { x: -0.4, y: 1, text: "After", pos: "w" },
          { x: 7.5, y: 4, text: "50 cm", pos: "c" },
          { x: 7.5, y: 1, text: "50 cm", pos: "c" },
          { x: 18.3, y: 1, text: "+10 cm", pos: "e", tone: "warn" },
        ],
        caption: String.raw`Compare the increase with the **before** bar: $\frac{10}{50} = 20\%$.`,
        alt: "Two bars. The before bar is 50 cm. The after bar is the same 50 cm plus an extra piece of 10 cm, which is one fifth of the before bar.",
      },
    },
  ],
  archetypes: [
    {
      id: "N4-part-of-whole",
      name: String.raw`Expressing a part of a whole as a percentage`,
      tests: String.raw`Writing part ÷ whole as a percentage, from numbers in a story or from a shaded figure. Watch for the correct whole and for changing units first.`,
      questions: [
        {
          stem: String.raw`There are 40 pupils in a class. 14 of them wear glasses. What percentage of the pupils wear glasses?`,
          choices: [String.raw`14%`, String.raw`26%`, String.raw`35%`, String.raw`65%`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`The figure is made up of 20 identical squares. Some parts of it are shaded. What percentage of the figure is shaded?`,
          figure: {
            type: "plot",
            x: [-2.5, 7.5], y: [-0.4, 4.4], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [4, 0], [4, 1], [3, 1], [3, 2], [2, 2], [2, 4], [0, 4]], fill: true, tone: "accent" },
              { points: [[3, 1], [4, 1], [3, 2]], fill: true, tone: "accent" },
              { points: [[2, 2], [3, 2], [2, 3]], fill: true, tone: "accent" },
              { points: [[0, 0], [5, 0], [5, 4], [0, 4]], tone: "ink" },
            ],
            segments: [1, 2, 3, 4].map((i) => ({ from: [i, 0], to: [i, 4], thin: true, tone: "ink" }))
              .concat([1, 2, 3].map((j) => ({ from: [0, j], to: [5, j], thin: true, tone: "ink" })))
              .concat([{ from: [4, 1], to: [3, 2], thin: true, tone: "ink" }, { from: [3, 2], to: [2, 3], thin: true, tone: "ink" }]),
            alt: "A 5 by 4 rectangle of 20 identical squares. Eleven whole squares in the lower left are shaded, and two more squares are each cut by a diagonal with the lower-left half shaded.",
          },
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N4-percentage-of-quantity",
      name: String.raw`Finding a percentage of a quantity, and of the remainder`,
      tests: String.raw`Multiplying a quantity by a percentage, and multi-step "spent x% of it, then y% of the remainder" problems where the whole changes after each step.`,
      questions: [
        {
          stem: String.raw`There are 260 pupils in a school hall. 15% of them are Primary 6 pupils. How many Primary 6 pupils are there in the hall?`,
          choices: [String.raw`15`, String.raw`39`, String.raw`221`, String.raw`245`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Mr Lim had \$1250. He spent 30% of his money on a television. He then spent 40% of the remaining money on a bicycle.`,
          parts: [
            { label: "(a)", text: String.raw`How much did he spend on the television?`, marks: 1 },
            { label: "(b)", text: String.raw`What percentage of his money did he have left at the end?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-discount-gst",
      name: String.raw`Discount and GST`,
      tests: String.raw`Finding a discount or sale price from the usual price, and adding GST on the price after any discount. Look for the order: discount first, then GST.`,
      questions: [
        {
          stem: String.raw`A bag usually costs \$80. During a sale, it is sold at a discount of 15%. What is the sale price of the bag?`,
          choices: [String.raw`\$12.00`, String.raw`\$65.00`, String.raw`\$68.00`, String.raw`\$92.00`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`A laptop has a usual price of \$1200 before GST. During a sale, Mr Ong bought the laptop at a discount of 20%. GST of 9% was then charged on the price after the discount.`,
          parts: [
            { label: "(a)", text: String.raw`Find the price of the laptop after the discount, before GST.`, marks: 1 },
            { label: "(b)", text: String.raw`How much did Mr Ong pay for the laptop?`, marks: 2 },
            { label: "(c)", text: String.raw`Mrs Ong bought the same laptop at its usual price, with 9% GST. How much more did she pay than Mr Ong?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N4-annual-interest",
      name: String.raw`Annual interest on savings`,
      tests: String.raw`Finding the interest for one year as a percentage of the amount saved, and the total in the account. Check whether the question asks for the interest or the total.`,
      questions: [
        {
          stem: String.raw`Siti saved \$3500 in a bank. The bank pays an interest of 2% per year. How much money will she have in the bank at the end of one year?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Mr Kumar had \$15 000. He saved 60% of it in Bank A and the rest in Bank B. Bank A pays an interest of 2.5% per year. Bank B pays an interest of 1.5% per year.`,
          parts: [
            { label: "(a)", text: String.raw`How much money did he save in Bank A?`, marks: 1 },
            { label: "(b)", text: String.raw`How much interest will he receive from the two banks altogether at the end of one year?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-finding-whole",
      name: String.raw`Finding the whole given a part and its percentage (P6)`,
      tests: String.raw`Working back from a part and its percentage to 100%, including finding the usual price from a sale price or the price before GST from the price with GST.`,
      questions: [
        {
          stem: String.raw`At a concert, 35% of the audience were children. There were 63 children. How many people were at the concert?`,
          choices: [String.raw`22`, String.raw`98`, String.raw`117`, String.raw`180`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Ali paid \$327 for a bicycle. This amount included GST of 9%.`,
          parts: [
            { label: "(a)", text: String.raw`What was the price of the bicycle before GST?`, marks: 2 },
            { label: "(b)", text: String.raw`The price before GST was the price after a 20% discount on the usual price. What was the usual price of the bicycle?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-increase-decrease",
      name: String.raw`Percentage increase and decrease (P6)`,
      tests: String.raw`Finding the change as a percentage of the original value, and following a value through two changes in a row. The trap is dividing by the new value.`,
      questions: [
        {
          stem: String.raw`The number of members in a club increased from 40 to 50. What was the percentage increase?`,
          choices: [String.raw`10%`, String.raw`20%`, String.raw`25%`, String.raw`125%`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`In 2024, there were 800 pupils in a school. In 2025, the number of pupils decreased by 15%. In 2026, the number of pupils increased by 15% from 2025.`,
          parts: [
            { label: "(a)", text: String.raw`How many pupils were there in 2025?`, marks: 1 },
            { label: "(b)", text: String.raw`How many pupils were there in 2026?`, marks: 1 },
            { label: "(c)", text: String.raw`Find the percentage decrease in the number of pupils from 2024 to 2026.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-word-problems",
      name: String.raw`Multi-step percentage word problems`,
      tests: String.raw`Combining percentages and fractions of one whole, and using a given difference between two groups to find the whole. Change everything to percentages of the same whole first.`,
      questions: [
        {
          stem: String.raw`There are 60 pens in a box. 25% of them are blue and $\frac{2}{5}$ of them are red. The rest are black. What percentage of the pens are black?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`At a funfair, 40% of the visitors were adults and the rest were children. 25% of the children were girls and the rest were boys.`,
          parts: [
            { label: "(a)", text: String.raw`What percentage of the visitors were boys?`, marks: 2 },
            { label: "(b)", text: String.raw`There were 60 more boys than adults. How many visitors were there altogether?`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
