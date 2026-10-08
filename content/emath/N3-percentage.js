H2.addTopic({
  id: "N3",
  title: "Percentage",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Percentages of quantities, percentage change, reverse percentages, and personal finance: interest, discounts, GST, hire purchase, tax and depreciation.`,
  syllabus: {
    include: [
      String.raw`expressing one quantity as a percentage of another`,
      String.raw`comparing two quantities by percentage`,
      String.raw`percentages greater than 100%`,
      String.raw`increasing/decreasing a quantity by a given percentage`,
      String.raw`reverse percentages`,
      String.raw`personal and household finance, including simple and compound interest, taxation, instalments, utilities bills and money exchange (from the syllabus section *Problems in real-world contexts*)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`One quantity as a percentage of another`,
      body: String.raw`$$\text{$A$ as a percentage of $B$} = \frac{A}{B} \times 100\%.$$

- Put both quantities in the **same units** first: 18 min as a percentage of 1.2 h is $\frac{18}{72} \times 100\% = 25\%$.
- To **compare** two results out of different totals, change each to a percentage: 27 out of 40 is 67.5%; 34 out of 50 is 68%.
- Fractions, decimals and percentages: $\frac{3}{8} = 0.375 = 37.5\%$. To find 15% of a quantity, multiply by $0.15$.`,
    },
    {
      title: String.raw`Percentages greater than 100%`,
      body: String.raw`A percentage greater than 100% means the quantity is **more than** the one it is compared with.

- A painting that is now worth \$56 000 and cost \$16 000 twenty years ago: the new value is $\frac{56\,000}{16\,000} \times 100\% = 350\%$ of the old value.
- This is a **250% increase**, not a 350% increase. "$x$% **of**" and "increased **by** $x$%" are different questions.
- 100% of a quantity is the whole quantity; 200% of it is double.`,
    },
    {
      title: String.raw`Increasing and decreasing by a percentage`,
      body: String.raw`Use a **multiplier**:

| Change | Multiplier | Example |
|---|---|---|
| increase by $r$% | $1 + \frac{r}{100}$ | \$3600 increased by 5%: $3600 \times 1.05 = \$3780$ |
| decrease by $r$% | $1 - \frac{r}{100}$ | 1800 decreased by 12%: $1800 \times 0.88 = 1584$ |

One multiplication gives the new value directly. This is quicker and safer than finding the change and then adding or subtracting.`,
    },
    {
      title: String.raw`Percentage change (memorise)`,
      body: String.raw`$$\text{percentage change} = \frac{\text{new value} - \text{original value}}{\text{original value}} \times 100\%$$

- Always divide by the **original** value, never the new one.
- A positive answer is an increase; a negative answer is a decrease. Say which in words.
- Profit and loss are percentage changes on the **cost price**: percentage profit $= \dfrac{\text{selling price} - \text{cost price}}{\text{cost price}} \times 100\%$.`,
    },
    {
      title: String.raw`Reverse percentages`,
      body: String.raw`When you know the value **after** a percentage change and want the original:

$$\text{original value} = \frac{\text{new value}}{\text{multiplier}}.$$

- After a 20% discount a shirt costs \$96. Then $80\% \to \$96$, so $100\% \to \frac{96}{0.8} = \$120$.
- A price of \$763 **including** 9% GST: the price before GST is $\frac{763}{1.09} = \$700$.
- Classic mistake: finding 20% of \$96 and adding it on. That gives \$115.20, which is wrong — the 20% was taken off the *original* price, not \$96.`,
      figure: {
        type: "plot",
        x: [0, 10.6], y: [0.4, 3.9], equal: true, axes: false,
        polygons: [
          ...[0, 1, 2, 3, 4].map((i) => ({ points: [[2.4 + i * 1.4, 2.4], [3.8 + i * 1.4, 2.4], [3.8 + i * 1.4, 3.1], [2.4 + i * 1.4, 3.1]], fill: true, tone: "muted" })),
          ...[0, 1, 2, 3].map((i) => ({ points: [[2.4 + i * 1.4, 1.1], [3.8 + i * 1.4, 1.1], [3.8 + i * 1.4, 1.8], [2.4 + i * 1.4, 1.8]], fill: true, tone: "accent" })),
          { points: [[8.0, 1.1], [9.4, 1.1], [9.4, 1.8], [8.0, 1.8]], dashed: true, tone: "warn" },
        ],
        segments: [
          { from: [2.4, 0.8], to: [8.0, 0.8], arrow: true, arrowStart: true, thin: true, tone: "accent" },
                  ],
        labels: [
          { x: 2.2, y: 2.75, text: "original", pos: "w", style: "small" },
          { x: 2.2, y: 1.45, text: "sale price", pos: "w", style: "small" },
          { x: 6.6, y: 3.45, text: "100% = ?", style: "small" },
          { x: 5.2, y: 0.5, text: "80% = $96", style: "small", tone: "accent" },
          { x: 8.7, y: 1.45, text: "20%", style: "small", tone: "warn" },
        ],
        caption: String.raw`Each block is 20%. Four blocks (80%) cost \$96, so one block is \$24 and the original price (five blocks) is \$120.`,
        alt: "Bar model: the original price is a bar of five equal blocks, 100%. The sale price is a bar of four of those blocks, 80%, worth $96. The missing fifth block is the 20% discount.",
      },
    },
    {
      title: String.raw`Successive percentage changes`,
      body: String.raw`For one change after another, **multiply the multipliers**. Do not add the percentages.

- Up 20% then down 20%: $1.2 \times 0.8 = 0.96$, an overall **decrease** of 4%, not "no change". The second change acts on a bigger amount.
- 10% off, then a further 10% off the discounted price: $0.9 \times 0.9 = 0.81$, so 19% off in total, not 20%.
- To reverse two changes, divide by both multipliers: original $= \dfrac{\text{final}}{1.1 \times 0.95}$.`,
    },
    {
      title: String.raw`Simple and compound interest`,
      body: String.raw`$P$ = principal (amount invested or borrowed), $R$ = rate (% per year), $T$ or $n$ = number of years.

- **Simple interest** (memorise): interest is paid on the original principal only, the same amount every year:
$$I = \frac{PRT}{100}.$$
- **Compound interest** (Given): the interest is added on and then also earns interest.
$$\text{Total amount } A = P\left(1 + \frac{r}{100}\right)^n$$
- The formula gives the **total amount**. Interest $= A - P$. Read the question to see which is asked.
- Compounded monthly at $R$% per annum: use $r = \frac{R}{12}$ and $n$ = number of **months**. Quarterly: $r = \frac{R}{4}$ and $n$ = number of quarters.
- **Depreciation** (value falls by $r$% each year) uses the same idea with $1 - \frac{r}{100}$.
- Money answers: to the nearest cent. Do not round the multiplier before raising it to a power.`,
      figure: {
        type: "plot",
        x: [-0.8, 11.2], y: [-0.35, 2.95], height: 230,
        axisLabels: ["n", "amount ($)"],
        curves: [
          { fn: "x => 1 + 0.1*x", domain: [0, 10], tone: "good" },
          { fn: "x => Math.pow(1.1, x)", domain: [0, 10], tone: "accent" },
        ],
        scatter: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [n, Math.pow(1.1, n)]),
        xTicks: [{ x: 5, label: "5" }, { x: 10, label: "10" }],
        yTicks: [{ y: 1, label: "1000" }, { y: 2, label: "2000" }],
        labels: [
          { x: 9.6, y: 2.75, text: "compound", pos: "w", style: "small", tone: "accent" },
          { x: 10.1, y: 1.85, text: "simple", pos: "se", style: "small", tone: "good" },
        ],
        caption: String.raw`\$1000 at 10% per year for $n$ years. Simple interest adds \$100 every year (a straight line). Compound interest grows faster because each year's interest is on a larger amount: $1000 \times 1.1^{10} \approx \$2593.74$.`,
        alt: "Graph of amount against years for $1000 at 10% per year. Simple interest is a straight line from 1000 to 2000 at 10 years. Compound interest is a curve through yearly points, reaching about 2594 at 10 years, above the line after year 1.",
      },
    },
    {
      title: String.raw`Shopping: discount, service charge, GST, profit`,
      body: String.raw`- **Discount** is a percentage of the **marked price**.
- **GST** in Singapore is 9%. A price "before GST" is multiplied by $1.09$.
- At restaurants, a **10% service charge** is added first, then **9% GST** is charged on the bill **plus** service charge: total $= \text{bill} \times 1.1 \times 1.09$.
- **Profit** = selling price $-$ cost price; percentage profit is on the cost price.
- When the question gives a total that includes charges, it is a reverse percentage problem: divide by the multipliers.`,
    },
    {
      title: String.raw`Household finance: instalments, commission, tax, bills`,
      body: String.raw`- **Hire purchase / instalments**: total paid $=$ deposit $+$ (number of instalments $\times$ instalment). Extra cost $=$ total paid $-$ cash price. A **flat rate** of interest is simple interest on the amount owed after the deposit, for the whole loan period.
- **Commission**: a percentage of sales, often only on sales above a fixed amount, added to a basic pay.
- **Income tax**: charged in bands. Work band by band and add, e.g. 0% on the first \$20 000, 2% on the next \$10 000, and so on.
- **Utilities bills**: usage $\times$ rate (watch cents vs dollars, e.g. 30.12 cents per kWh $= \$0.3012$ per kWh), then add GST.
- Lay the working out in steps with labels. In a long real-world question, state your conclusion in a sentence with the figures that support it.`,
    },
  ],
  archetypes: [
    {
      id: "N3-express-compare",
      name: String.raw`Expressing and comparing quantities as percentages`,
      tests: String.raw`Writing one quantity as a percentage of another (same units), comparing results with different totals, and percentages greater than 100%.`,
      questions: [
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Express 45 minutes as a percentage of 2 hours.`, marks: 1 },
            { label: "(b)", text: String.raw`In a test, Ali scored 42 marks out of 60 and Ben scored 51 marks out of 75. By expressing each score as a percentage, find who did better.`, marks: 2 },
            { label: "(c)", text: String.raw`The population of a town in 2025 was 135% of its population in 2015. The population in 2015 was 48 000. Find the population in 2025.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A flat was bought for \$450 000 in 2005 and sold for \$1 080 000 in 2025.`,
          parts: [
            { label: "(a)", text: String.raw`Express the selling price as a percentage of the buying price.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the percentage increase in the price of the flat.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-increase-decrease-change",
      name: String.raw`Percentage increase, decrease and change`,
      tests: String.raw`Using a multiplier to increase or decrease a quantity, and finding a percentage change with the original value as the base.`,
      questions: [
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Mr Tan's monthly salary of \$4250 is increased by 4%. Find his new monthly salary.`, marks: 1 },
            { label: "(b)", text: String.raw`The number of visitors to a museum fell from 2400 in May to 2040 in June. Find the percentage decrease.`, marks: 2 },
            { label: "(c)", text: String.raw`A household used 18.4 m$^3$ of water in March and 21.6 m$^3$ in April. Find the percentage increase in water usage, correct to 3 significant figures.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N3-reverse-percentage",
      name: String.raw`Reverse percentages`,
      tests: String.raw`Finding the original value when the value after a percentage change (discount, GST, profit) is given, by dividing by the multiplier.`,
      questions: [
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`After a discount of 12%, a television costs \$1716. Find the price before the discount.`, marks: 2 },
            { label: "(b)", text: String.raw`The price of a pair of shoes, including 9% GST, is \$654. Find the amount of GST paid.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A trader sells a bicycle for \$2340 and makes a profit of 30% on the cost price.`,
          parts: [
            { label: "(a)", text: String.raw`Find the cost price of the bicycle.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the selling price that would give the trader a profit of 40% on the cost price.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-successive-changes",
      name: String.raw`Successive percentage changes`,
      tests: String.raw`Combining two or more percentage changes by multiplying multipliers, explaining why the changes do not simply add, and reversing a chain of changes.`,
      questions: [
        {
          stem: String.raw`The price of a phone is \$860. The shop increases the price by 15%. A month later, the new price is reduced by 15%.`,
          parts: [
            { label: "(a)", text: String.raw`Find the price after both changes.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the overall percentage change in the price of the phone.`, marks: 1 },
            { label: "(c)", text: String.raw`Explain why the price does not return to \$860.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The population of a town increased by 5% in the first year and then decreased by 8% in the second year. At the end of the second year the population was 57 960.`,
          parts: [
            { label: "(a)", text: String.raw`Find the population at the start of the first year.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the single percentage change that has the same effect as the two changes.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-simple-compound-interest",
      name: String.raw`Simple and compound interest`,
      tests: String.raw`Using $I = \frac{PRT}{100}$ and $A = P\left(1 + \frac{r}{100}\right)^n$, including monthly compounding, comparing the two, and finding the rate from the amounts.`,
      questions: [
        {
          stem: String.raw`Mrs Lee has \$12 000 to invest for 4 years.`,
          parts: [
            { label: "(a)", text: String.raw`Bank A pays simple interest at 2.5% per annum. Find the interest she would receive.`, marks: 1 },
            { label: "(b)", text: String.raw`Bank B pays 2.4% per annum compound interest, compounded monthly. Find the interest she would receive, correct to the nearest cent.`, marks: 2 },
            { label: "(c)", text: String.raw`State which bank she should choose, giving a reason.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A sum of \$8000 is invested at $r$% per annum compound interest, compounded yearly. After 3 years the total amount is \$9261.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $r$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the total amount after 5 years, correct to the nearest cent.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-discount-gst-service",
      name: String.raw`Discounts, service charge and GST`,
      tests: String.raw`Applying a 10% service charge and 9% GST in the correct order, successive discounts, and working back from a total that already includes the charges.`,
      questions: [
        {
          stem: String.raw`At a restaurant, a 10% service charge is added to the bill. GST of 9% is then charged on the bill plus the service charge.`,
          parts: [
            { label: "(a)", text: String.raw`A family's bill before charges is \$120. Find the total amount they pay.`, marks: 2 },
            { label: "(b)", text: String.raw`Another group pays a total of \$215.82. Find their bill before the service charge and GST.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A shop offers a 20% discount on the marked price of all jackets. Members get a further 5% discount on the discounted price. A member pays \$228 for a jacket.`,
          parts: [
            { label: "(a)", text: String.raw`Find the marked price of the jacket.`, marks: 2 },
            { label: "(b)", text: String.raw`A member says, "I get 25% off the marked price." Explain why this is not correct.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-hire-purchase",
      name: String.raw`Hire purchase and instalments`,
      tests: String.raw`Finding the total cost of an instalment plan with a deposit, the extra amount paid compared with the cash price, and the flat rate of interest charged.`,
      questions: [
        {
          stem: String.raw`A sofa costs \$2400 in cash. It can also be bought on hire purchase by paying a deposit of 15% of the cash price, followed by 24 monthly instalments of \$93.50.`,
          parts: [
            { label: "(a)", text: String.raw`Find the total amount paid under the hire purchase plan.`, marks: 2 },
            { label: "(b)", text: String.raw`Express the extra amount paid as a percentage of the cash price.`, marks: 1 },
            { label: "(c)", text: String.raw`The extra amount is simple interest charged on the amount owed after the deposit. Find the rate of interest per annum.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N3-household-finance",
      name: String.raw`Utilities bills, commission, income tax and depreciation`,
      tests: String.raw`Reading rates from a table to work out a bill or a tax amount band by band, commission on sales above a threshold, and compound depreciation of a car or machine.`,
      questions: [
        {
          stem: String.raw`In one month, a household used 420 kWh of electricity and 18.6 m$^3$ of water. The rates charged are shown in the table. GST of 9% is added to the total.

| Item | Rate |
|---|---|
| Electricity | 30.12 cents per kWh |
| Water (including fees) | \$2.74 per m$^3$ |`,
          parts: [
            { label: "(a)", text: String.raw`Find the cost of the electricity before GST.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the total bill, including GST, correct to the nearest cent.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Ms Kaur is a salesperson. She is paid a basic monthly salary of \$1800, plus a commission of 3% on the value of her sales above \$20 000 in that month.`,
          parts: [
            { label: "(a)", text: String.raw`In March, her sales were \$46 500. Find her total pay for March.`, marks: 2 },
            { label: "(b)", text: String.raw`Her chargeable income for the year is \$52 400. Income tax is charged at the rates in the table. Find the income tax she pays.

| Chargeable income | Rate |
|---|---|
| First \$20 000 | 0% |
| Next \$10 000 | 2% |
| Next \$10 000 | 3.5% |
| Next \$40 000 | 7% |`, marks: 2 },
            { label: "(c)", text: String.raw`She buys a car for \$128 000. Its value depreciates by 12% each year. Find its value after 5 years, correct to the nearest dollar.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the number of complete years after which the value of the car first falls below half of what she paid for it.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N3-finance-decision",
      name: String.raw`Real-world task: choosing the best financial option`,
      tests: String.raw`The last question of Paper 2: comparing several savings, payment or pricing plans using percentages and interest, and justifying a recommendation with clear calculations.`,
      questions: [
        {
          stem: String.raw`Mrs Rao has \$50 000 to save for 3 years. She finds three options.

| Option | Details |
|---|---|
| A: Fixed deposit | 2.6% per annum compound interest, compounded yearly |
| B: Savings bond | Simple interest on \$50 000 at 2.2% in year 1, 2.6% in year 2 and 2.9% in year 3 |
| C: Savings account | 2.5% per annum compound interest, compounded monthly |

She will not withdraw any money before the end of the 3 years.`,
          parts: [
            { label: "(a)", text: String.raw`Find the total amount she would have at the end of 3 years for each option. Give each answer correct to the nearest cent.`, marks: 5 },
            { label: "(b)", text: String.raw`Mrs Rao needs at least \$54 000 at the end of the 3 years. Which option should she choose? Justify your answer.`, marks: 1 },
            { label: "(c)", text: String.raw`For Option A, find the overall percentage increase in her money over the 3 years, correct to 3 significant figures.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
