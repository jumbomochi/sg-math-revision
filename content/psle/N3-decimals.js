H2.addTopic({
  id: "N3",
  title: "Decimals",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Place value to 3 decimal places, comparing and rounding decimals, the four operations, multiplying and dividing by 10, 100 and 1000, measurement in decimal form, and money problems.`,
  syllabus: {
    include: [
      String.raw`P2–P3: money in decimal notation; converting between dollars and cents; adding and subtracting money`,
      String.raw`P4: decimals up to 3 decimal places — notation, representations and place values (tenths, hundredths, thousandths)`,
      String.raw`P4: comparing and ordering decimals; expressing decimals as fractions; expressing fractions as decimals when the denominator is a factor of 10 or 100`,
      String.raw`P4: rounding decimals to the nearest whole number, 1 decimal place or 2 decimal places; rounding answers to a specified degree of accuracy`,
      String.raw`P4: adding and subtracting decimals (up to 2 decimal places); multiplying and dividing decimals (up to 2 decimal places) by a 1-digit whole number; dividing a whole number by a whole number with quotient as a decimal`,
      String.raw`P5: multiplying and dividing decimals (up to 3 decimal places) by 10, 100, 1000 and their multiples without calculator`,
      String.raw`P5: converting a measurement from a smaller unit to a larger unit in decimal form, and vice versa (km and m, m and cm, kg and g, ℓ and ml)`,
      String.raw`P4–P6: word problems involving decimals and money`,
    ],
    exclude: [
      String.raw`multiplying or dividing a decimal by a decimal without a calculator (such working appears only where a calculator is allowed)`,
    ],
  },
  concepts: [
    {
      title: String.raw`Place value: tenths, hundredths, thousandths`,
      body: String.raw`After the decimal point, the places are **tenths**, **hundredths** and **thousandths**.

- $0.1 = \frac{1}{10}$, $0.01 = \frac{1}{100}$, $0.001 = \frac{1}{1000}$.
- In $3.072$, the digit $7$ is in the hundredths place. Its value is $0.07$, or $\frac{7}{100}$.
- $3 + \frac{4}{10} + \frac{6}{1000} = 3.406$. The empty hundredths place needs a **zero**.
- On a number line between $2.3$ and $2.4$, each of the $10$ small steps is $0.01$.`,
      figure: {
        type: "plot",
        x: [-0.2, 12.8], y: [-0.2, 3.9], equal: true, axes: false,
        polygons: [
          ...[0, 1, 2, 3].map((i) => { const x = 3 * i + (i > 0 ? 0.6 : 0); return { points: [[x, 2.4], [x + 3, 2.4], [x + 3, 3.6], [x, 3.6]], tone: "muted" }; }),
          ...[0, 1, 2, 3].map((i) => { const x = 3 * i + (i > 0 ? 0.6 : 0); return { points: [[x, 0.2], [x + 3, 0.2], [x + 3, 2.4], [x, 2.4]], fill: i === 2, tone: i === 2 ? "accent" : "muted" }; }),
        ],
        points: [{ x: 3.3, y: 0.95 }],
        labels: [
          ...["Ones", "Tenths", "Hundredths", "Thousandths"].map((t, i) => ({ x: 3 * i + 1.5 + (i > 0 ? 0.6 : 0), y: 3.0, text: t, pos: "c", style: "small" })),
          ...["3", "0", "7", "2"].map((t, i) => ({ x: 3 * i + 1.5 + (i > 0 ? 0.6 : 0), y: 1.3, text: t, pos: "c", style: "bold" })),
        ],
        caption: String.raw`$3.072$: the $7$ is in the hundredths place, so it stands for $0.07$.`,
        alt: "A place value chart with columns Ones, Tenths, Hundredths and Thousandths holding 3, 0, 7 and 2, with the decimal point after the ones. The hundredths column is shaded.",
      },
    },
    {
      title: String.raw`Comparing decimals; decimals and fractions`,
      body: String.raw`To compare, line up the **decimal points** and compare place by place from the left. Add zeros so all have the same number of places.

- $0.5 = 0.500$, $0.45 = 0.450$, $0.405$: in order from smallest, $0.405 < 0.45 < 0.5$.
- Common mistake: thinking a longer decimal is bigger. $0.405$ is **smaller** than $0.5$.
- **Decimal to fraction**: use the last place as the denominator, then simplify. $0.35 = \frac{35}{100} = \frac{7}{20}$, $0.008 = \frac{8}{1000} = \frac{1}{125}$.
- **Fraction to decimal**: make the denominator $10$ or $100$. $\frac{3}{25} = \frac{12}{100} = 0.12$.`,
    },
    {
      title: String.raw`Rounding decimals`,
      body: String.raw`Look at the digit **just after** the place you round to. $5$ or more: round up. Less than $5$: round down.

- To the nearest whole number: $7.62 \approx 8$.
- To 1 decimal place: $3.57 \approx 3.6$.
- To 2 decimal places: $4.395 \approx 4.40$. **Keep the zero** — it shows the answer is correct to 2 decimal places.
- For a division that does not end, work out **one more** place than you need, then round: $10 \div 3 = 3.333\ldots \approx 3.33$.`,
      figure: {
        type: "plot",
        x: [-1.2, 11.2], y: [-1.6, 2.4], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [10, 0], tone: "ink" },
          ...Array.from({ length: 11 }, (_, i) => ({ from: [i, -0.15], to: [i, 0.15], tone: "ink", thin: true })),
          { from: [0, -0.35], to: [0, 0.35], tone: "ink" },
          { from: [10, -0.35], to: [10, 0.35], tone: "ink" },
          { from: [5, -0.6], to: [5, 1.0], tone: "muted", dashed: true, thin: true },
          { from: [7.3, 1.2], to: [9.6, 1.2], tone: "warn", arrow: true, label: "nearer to 3.6", pos: "n", style: "small", labelAt: [8.4, 1.2] },
        ],
        points: [{ x: 7, y: 0, label: "3.57", pos: "n" }],
        labels: [
          { x: 0, y: -0.35, text: "3.5", pos: "s", style: "plain" },
          { x: 10, y: -0.35, text: "3.6", pos: "s", style: "plain" },
          { x: 5, y: -0.6, text: "3.55", pos: "s", style: "small" },
        ],
        caption: String.raw`$3.57$ is past the halfway mark $3.55$, so $3.57 \approx 3.6$ (to 1 decimal place).`,
        alt: "A number line from 3.5 to 3.6 with ticks every 0.01. The halfway mark 3.55 is dashed. The point 3.57 lies right of it, closer to 3.6.",
      },
    },
    {
      title: String.raw`Adding, subtracting, multiplying and dividing decimals`,
      body: String.raw`- **Add or subtract**: line up the decimal points. A whole number has its point at the end: $8 - 2.75 = 8.00 - 2.75 = 5.25$.
- **Multiply by a 1-digit number**: multiply as whole numbers, then put back the same number of decimal places. $1.24 \times 3$: $124 \times 3 = 372$, so $3.72$.
- **Divide by a 1-digit number**: keep the decimal point in the same place in the answer. $6.48 \div 4 = 1.62$.
- **Whole $\div$ whole as a decimal**: add zeros after the point and keep dividing. $7 \div 4 = 7.00 \div 4 = 1.75$.
- Check with estimation: $1.24 \times 3$ is about $1 \times 3 = 3$, so $3.72$ is sensible, but $37.2$ is not.`,
    },
    {
      title: String.raw`Multiplying and dividing by 10, 100, 1000 and their multiples`,
      body: String.raw`- $\times 10$, $\times 100$, $\times 1000$: digits move $1$, $2$, $3$ places to the **left** (the number gets bigger). $3.45 \times 100 = 345$.
- $\div 10$, $\div 100$, $\div 1000$: digits move to the **right** (the number gets smaller). $62.5 \div 100 = 0.625$.
- Multiples: split them. $0.36 \times 400 = 0.36 \times 4 \times 100 = 1.44 \times 100 = 144$.
- $2.4 \div 300 = 2.4 \div 3 \div 100 = 0.8 \div 100 = 0.008$.
- Fill empty places with zeros: $0.7 \times 1000 = 700$.`,
      figure: {
        type: "plot",
        x: [-2.6, 10.4], y: [-0.4, 5.2], equal: true, axes: false,
        polygons: [
          ...[0, 1, 2, 3, 4].map((i) => ({ points: [[2 * i, 3.8], [2 * i + 2, 3.8], [2 * i + 2, 4.8], [2 * i, 4.8]], tone: "muted" })),
        ],
        segments: [
          { from: [4.75, 2.25], to: [1.25, 1.05], tone: "accent", arrow: true, thin: true },
          { from: [6.75, 2.25], to: [3.25, 1.05], tone: "accent", arrow: true, thin: true },
          { from: [8.75, 2.25], to: [5.25, 1.05], tone: "accent", arrow: true, thin: true },
        ],
        points: [{ x: 6, y: 2.6 }],
        labels: [
          ...["H", "T", "O", "t", "h"].map((t, i) => ({ x: 2 * i + 1, y: 4.3, text: t, pos: "c", style: "small" })),
          { x: 5, y: 2.9, text: "3", pos: "c", style: "bold" },
          { x: 7, y: 2.9, text: "4", pos: "c", style: "bold" },
          { x: 9, y: 2.9, text: "5", pos: "c", style: "bold" },
          { x: 1, y: 0.5, text: "3", pos: "c", style: "bold" },
          { x: 3, y: 0.5, text: "4", pos: "c", style: "bold" },
          { x: 5, y: 0.5, text: "5", pos: "c", style: "bold" },
          { x: -0.3, y: 2.9, text: "3.45", pos: "w", style: "plain" },
          { x: -0.3, y: 0.5, text: "× 100", pos: "w", style: "plain" },
        ],
        caption: String.raw`$3.45 \times 100 = 345$: every digit moves $2$ places to the left. (H = hundreds, T = tens, O = ones, t = tenths, h = hundredths)`,
        alt: "A place value chart with columns H, T, O, t, h. The digits 3, 4, 5 of 3.45 sit in O, t and h. Arrows move each digit two places left to H, T and O, giving 345.",
      },
    },
    {
      title: String.raw`Measurements in decimal form`,
      body: String.raw`| Units | Rule |
| --- | --- |
| km and m | $1$ km $= 1000$ m |
| m and cm | $1$ m $= 100$ cm |
| kg and g | $1$ kg $= 1000$ g |
| ℓ and ml | $1$ ℓ $= 1000$ ml |

- **Big unit $\to$ small unit**: multiply. $2.05$ km $= 2.05 \times 1000 = 2050$ m.
- **Small unit $\to$ big unit**: divide. $350$ g $= 350 \div 1000 = 0.35$ kg.
- Compound units: $4$ m $6$ cm $= 4$ m $+ 0.06$ m $= 4.06$ m. Common mistake: writing $4.6$ m. ($6$ cm is $0.06$ m, but $60$ cm is $0.6$ m.)
- Change everything to the **same unit** before adding, subtracting or comparing.`,
    },
    {
      title: String.raw`Money`,
      body: String.raw`- \$$1 = 100$ cents. $85$ cents $=$ \$$0.85$, and \$$4.05 = 405$ cents.
- Always write dollars with **2 decimal places**: \$$4.50$, not \$$4.5$.
- **Change** $=$ amount paid $-$ total cost.
- **Cost of many** $=$ cost of one $\times$ number. **Cost of one** $=$ total cost $\div$ number.
- "How many can she buy?" — round **down**: she cannot buy part of an item.
- Common mistake: mixing dollars and cents. Change everything to dollars (or to cents) first.`,
    },
  ],
  archetypes: [
    {
      id: "N3-place-value",
      name: String.raw`Place value and number lines`,
      tests: String.raw`Reading a decimal marked on a number line by working out the size of each small step, and writing a decimal from its tenths, hundredths and thousandths.`,
      questions: [
        {
          stem: String.raw`What is the number marked by the arrow on the number line?`,
          marks: 1,
          calculator: false,
          figure: {
            type: "plot",
            x: [-1, 11], y: [-1.4, 2.0], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [10, 0], tone: "ink" },
              ...Array.from({ length: 11 }, (_, i) => ({ from: [i, -0.2], to: [i, 0.2], tone: "ink", thin: true })),
              { from: [0, -0.4], to: [0, 0.4], tone: "ink" },
              { from: [10, -0.4], to: [10, 0.4], tone: "ink" },
              { from: [4, 1.6], to: [4, 0.3], tone: "accent", arrow: true },
            ],
            labels: [
              { x: 0, y: -0.4, text: "1.6", pos: "s", style: "plain" },
              { x: 10, y: -0.4, text: "1.7", pos: "s", style: "plain" },
            ],
            alt: "A number line from 1.6 to 1.7 divided into 10 equal steps. An arrow points to the 4th tick after 1.6.",
          },
          choices: [String.raw`$1.604$`, String.raw`$1.64$`, String.raw`$1.66$`, String.raw`$2.0$`],
        },
        {
          stem: String.raw`Which of the following is equal to $4 + \frac{7}{10} + \frac{9}{1000}$?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$4.79$`, String.raw`$4.709$`, String.raw`$4.079$`, String.raw`$4.0709$`],
        },
      ],
    },
    {
      id: "N3-compare-convert",
      name: String.raw`Comparing decimals; changing between fractions and decimals`,
      tests: String.raw`Ordering a mix of fractions and decimals by changing them all to decimals, and writing a decimal as a fraction in simplest form (or a fraction with denominator a factor of 100 as a decimal).`,
      questions: [
        {
          stem: String.raw`Which of the following has the greatest value?`,
          marks: 2,
          calculator: false,
          choices: [String.raw`$\frac{3}{8}$`, String.raw`$0.38$`, String.raw`$\frac{37}{100}$`, String.raw`$0.308$`],
        },
        {
          stem: String.raw`Answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Express $0.65$ as a fraction in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`Express $\frac{7}{25}$ as a decimal.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-rounding",
      name: String.raw`Rounding decimals`,
      tests: String.raw`Rounding to the nearest whole number, 1 or 2 decimal places (keeping a final zero), and the reverse: the smallest and largest decimals that round to a given value.`,
      questions: [
        {
          stem: String.raw`Round $12.396$ to 2 decimal places.`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$12.30$`, String.raw`$12.39$`, String.raw`$12.40$`, String.raw`$12.50$`],
        },
        {
          stem: String.raw`A number has 2 decimal places. When it is rounded to 1 decimal place, the answer is $6.4$.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`What is the smallest possible value of the number?`, marks: 1 },
            { label: "(b)", text: String.raw`What is the largest possible value of the number?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-four-operations",
      name: String.raw`Four operations with decimals`,
      tests: String.raw`Adding and subtracting with the decimal points lined up, multiplying or dividing a decimal by a 1-digit number, and dividing two whole numbers to give a rounded decimal, all without a calculator.`,
      questions: [
        {
          stem: String.raw`$6 - 2.47 = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$3.53$`, String.raw`$3.63$`, String.raw`$4.47$`, String.raw`$4.53$`],
        },
        {
          stem: String.raw`Answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $3.08 \times 7$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $23 \div 6$. Give your answer correct to 2 decimal places.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-times-divide-10-100-1000",
      name: String.raw`Multiplying and dividing decimals by 10, 100, 1000 and their multiples`,
      tests: String.raw`Moving digits left or right by the right number of places, and splitting a multiple such as $400$ or $60$ into a 1-digit number and a power of ten.`,
      questions: [
        {
          stem: String.raw`$0.054 \times 1000 = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$0.54$`, String.raw`$5.4$`, String.raw`$54$`, String.raw`$540$`],
        },
        {
          stem: String.raw`Find the value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$2.7 \times 400$`, marks: 1 },
            { label: "(b)", text: String.raw`$4.2 \div 60$`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N3-measurement-conversion",
      name: String.raw`Converting measurements in decimal form`,
      tests: String.raw`Changing between km and m, m and cm, kg and g, ℓ and ml, including compound units such as 3 kg 45 g, often inside a short story where the units must first be made the same.`,
      questions: [
        {
          stem: String.raw`Express $3$ kg $45$ g in kilograms.`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$3.0045$ kg`, String.raw`$3.045$ kg`, String.raw`$3.45$ kg`, String.raw`$30.45$ kg`],
        },
        {
          stem: String.raw`Siti had a ribbon $4.2$ m long. She cut off $3$ pieces, each $85$ cm long. What was the length of the ribbon left? Give your answer in m.`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N3-money-problems",
      name: String.raw`Money word problems`,
      tests: String.raw`Multi-step shopping problems: total cost, change, cost of one, and the greatest number of items that can be bought (round down). Answers in dollars to 2 decimal places.`,
      questions: [
        {
          stem: String.raw`Mrs Ong bought $3$ kg of prawns at \$$18.90$ per kg and $2.5$ kg of fish at \$$12.40$ per kg. She paid with a \$$100$ note. How much change did she receive?`,
          marks: 3,
        },
        {
          stem: String.raw`A shop sells pens at \$$1.35$ each and files at \$$2.80$ each.`,
          parts: [
            { label: "(a)", text: String.raw`Ali bought $4$ pens and some files. He paid \$$16.60$ altogether. How many files did he buy?`, marks: 2 },
            { label: "(b)", text: String.raw`Mei has \$$20$. She wants to buy the same number of pens and files. What is the greatest number of pens she can buy, and how much money will she have left?`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
