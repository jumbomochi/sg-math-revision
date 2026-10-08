H2.addTopic({
  id: "N6",
  title: "Rate",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Rate as an amount per unit, finding the rate, the total or the number of units, comparing rates, and charges given in tables.`,
  syllabus: {
    include: [
      String.raw`P5: rate as the amount of a quantity per unit of another quantity`,
      String.raw`P5: finding rate, total amount or number of units given the other two quantities`,
      String.raw`P5–P6: word problems involving rate, including charges and rates given in tables (e.g. parking, taxi fares, water and electricity usage) and rates of flow into a tank`,
    ],
    exclude: [
      String.raw`speed, distance and time (removed from the 2021 syllabus)`,
      String.raw`average speed`,
    ],
  },
  concepts: [
    {
      title: String.raw`What is a rate?`,
      body: String.raw`A **rate** tells you how much of one quantity there is for **each one unit** of another quantity.

- "\$3 **per** kg", "8 ℓ **per** minute", "45 pages **per** minute", "\$2.50 **for each** hour".
- It can be written with a slash: \$3/kg, 8 ℓ/min.
- The word after "per" is the **one unit**. "\$3 per kg" means 1 kg costs \$3.

*Example.* Water flows from a tap at 8 ℓ per minute. In 5 minutes, $5 \times 8 = 40$ ℓ flows out.`,
      figure: {
        type: "plot",
        x: [-1, 21], y: [-2.8, 4.6], equal: true, axes: false,
        polygons: [0, 1, 2, 3, 4].map((i) => ({ points: [[4 * i, 0], [4 * i + 4, 0], [4 * i + 4, 2], [4 * i, 2]], fill: true, tone: i === 0 ? "accent" : "muted" })),
        segments: [
          { from: [0, 3], to: [4, 3], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "1 min", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [20, -0.8], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "5 min: 5 × 8 = 40 ℓ", pos: "s", style: "plain" },
        ],
        labels: [0, 1, 2, 3, 4].map((i) => ({ x: 4 * i + 2, y: 1, text: "8 ℓ", pos: "c", style: "small" })),
        caption: String.raw`A rate of 8 ℓ per minute: every minute adds the same 8 ℓ.`,
        alt: "Five equal boxes, one for each minute, each holding 8 litres. The first box is marked 1 min. Together the 5 boxes make 40 litres.",
      },
    },
    {
      title: String.raw`Rate, total and number of units`,
      body: String.raw`Three quantities are linked. If you know two of them, you can find the third.

| To find | Use |
| --- | --- |
| total amount | rate $\times$ number of units |
| rate | total amount $\div$ number of units |
| number of units | total amount $\div$ rate |

*Example.* A machine fills 120 bottles in 4 minutes. The rate is $120 \div 4 = 30$ bottles per minute. To fill 450 bottles it needs $450 \div 30 = 15$ minutes.

- Write the **units** of a rate: "bottles per minute", not just "30".
- Check that the time units match: a rate per **minute** with a time in **hours** must be changed first ($1$ h $= 60$ min).`,
    },
    {
      title: String.raw`The unitary method`,
      body: String.raw`When you are not given the rate, **find the value for 1 unit first**, then multiply.

*Example.* 6 files cost \$9. How much do 10 files cost?

- 1 file costs $\$9 \div 6 = \$1.50$.
- 10 files cost $10 \times \$1.50 = \$15$.

- You can also scale in steps: 6 files $\to$ \$9, 2 files $\to$ \$3, 10 files $\to$ \$15.
- **Common mistake:** dividing the wrong way round. "\$9 for 6 files" gives dollars per file $= 9 \div 6$, not $6 \div 9$.`,
    },
    {
      title: String.raw`Comparing rates: the better buy`,
      body: String.raw`To compare offers, change each one to the **same 1 unit** (cost of 1 item, cost of 1 kg, or words typed in 1 minute).

*Example.* Shop A: 3 cans for \$2.40, so 1 can costs \$0.80. Shop B: 5 cans for \$3.75, so 1 can costs \$0.75. Shop B is cheaper per can.

- The cheaper offer has the **smaller** cost per unit.
- The faster worker has the **larger** amount per minute.
- The offer with the smaller total price is not always the better buy.`,
    },
    {
      title: String.raw`Charges in a table: "or part thereof"`,
      body: String.raw`Parking and taxi charges are often given in a table: a **first** block at one price, then **every additional** block at another price.

- "Every additional half hour **or part thereof**" means a **part** of a half hour is charged as a **full** half hour.
- **Steps:** find the total time (or distance). Take away the first block. Find how many extra blocks are needed, **rounding up**. Then add up the charges.

*Example.* Parking costs \$2 for the first hour and \$1 for every additional half hour or part thereof. From 2.00 p.m. to 4.10 p.m. is 2 h 10 min. After the first hour, 1 h 10 min is left. That is 2 full half hours plus 10 min, so 3 half hours are charged. Cost $= \$2 + 3 \times \$1 = \$5$.`,
      figure: {
        type: "plot",
        x: [-1, 16.4], y: [-2.4, 4.4], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [6, 0], [6, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[6, 0], [9, 0], [9, 2], [6, 2]], fill: true, tone: "good" },
          { points: [[9, 0], [12, 0], [12, 2], [9, 2]], fill: true, tone: "good" },
          { points: [[12, 0], [13, 0], [13, 2], [12, 2]], fill: true, tone: "warn" },
          { points: [[12, 0], [15, 0], [15, 2], [12, 2]], dashed: true, tone: "warn" },
        ],
        segments: [
          { from: [13, 2.6], to: [13, -0.4], thin: true, tone: "ink", label: "4.10", pos: "n", style: "small", labelAt: [13, 2.6] },
        ],
        labels: [
          { x: 0, y: 0, text: "2.00", pos: "s", style: "small" },
          { x: 6, y: 0, text: "3.00", pos: "s", style: "small" },
          { x: 9, y: 0, text: "3.30", pos: "s", style: "small" },
          { x: 12, y: 0, text: "4.00", pos: "s", style: "small" },
          { x: 15, y: 0, text: "4.30", pos: "s", style: "small" },
          { x: 3, y: 1, text: "first hour", pos: "c", style: "small" },
          { x: 7.5, y: 1, text: "$1", pos: "c", style: "small" },
          { x: 10.5, y: 1, text: "$1", pos: "c", style: "small" },
          { x: 14, y: 1, text: "$1", pos: "c", style: "small" },
        ],
        caption: String.raw`Only 10 min of the last half hour is used, but the whole half hour is charged.`,
        alt: "A timeline from 2.00 to 4.30 p.m. made of blocks: the first hour, then half hours from 3.00 to 3.30, 3.30 to 4.00 and 4.00 to 4.30. The car leaves at 4.10, only partly into the last half hour, which is still charged 1 dollar.",
      },
    },
    {
      title: String.raw`Charges in bands (water, electricity)`,
      body: String.raw`Some charges change after a certain amount. The first part is charged at one rate and only the part **above** it at the second rate.

*Example.* Water costs \$2 per m³ for the first 30 m³ and \$3 per m³ for any amount above 30 m³. For 34 m³: $30 \times \$2 + 4 \times \$3 = \$60 + \$12 = \$72$.

- **Common mistake:** charging all 34 m³ at \$3.
- Working backwards from a bill: first take away the cost of the first band, then divide what is left by the second rate.`,
    },
    {
      title: String.raw`Rate of flow: filling a tank`,
      body: String.raw`Water flowing into a tank is a rate, such as **10 ℓ per minute**.

- Time to fill $=$ volume needed $\div$ rate of flow.
- Volume of water in a rectangular tank $=$ length $\times$ breadth $\times$ height of water.
- $1$ ℓ $= 1000$ cm³ and $1$ ℓ $= 1000$ ml. Change the volume to litres before dividing by a rate in litres per minute.
- Two taps turned on **together** fill at the **sum** of their rates: 5 ℓ/min and 3 ℓ/min together give 8 ℓ/min.
- If the tank is already partly full, only the **empty** part has to be filled.`,
      figure: {
        type: "plot",
        x: [-36, 76], y: [-6, 52], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [50, 0], [50, 24], [0, 24]], fill: true, tone: "accent" },
          { points: [[50, 0], [63, 7.5], [63, 31.5], [50, 24]], fill: true, tone: "accent" },
          { points: [[0, 24], [50, 24], [63, 31.5], [13, 31.5]], fill: true, tone: "accent" },
          { points: [[0, 0], [50, 0], [50, 40], [0, 40]], tone: "ink" },
          { points: [[0, 40], [50, 40], [63, 47.5], [13, 47.5]], tone: "ink" },
        ],
        segments: [
          { from: [50, 0], to: [63, 7.5], tone: "ink" },
          { from: [63, 7.5], to: [63, 47.5], tone: "ink" },
          { from: [0, 0], to: [13, 7.5], tone: "ink", dashed: true, thin: true },
          { from: [13, 7.5], to: [63, 7.5], tone: "ink", dashed: true, thin: true },
          { from: [13, 7.5], to: [13, 47.5], tone: "ink", dashed: true, thin: true },
          { from: [-3, 0], to: [-3, 24], thin: true, tone: "accent", arrow: true, arrowStart: true, label: "height of water", pos: "w", style: "small" },
        ],
        labels: [
          { x: 25, y: 0, text: "length", pos: "s", style: "small" },
          { x: 57, y: 3.5, text: "breadth", pos: "se", style: "small" },
        ],
        caption: String.raw`Volume of water $=$ length $\times$ breadth $\times$ height of water.`,
        alt: "A rectangular tank drawn in 3D, partly filled with water. The water fills the bottom part of the tank up to a height marked height of water.",
      },
    },
  ],
  archetypes: [
    {
      id: "N6-rate-total-units",
      name: String.raw`Finding the rate, the total or the number of units`,
      tests: String.raw`Using total $=$ rate $\times$ number of units, or dividing to find the rate or the number of units. Usually a one- or two-step question with money, pages or litres.`,
      questions: [
        {
          stem: String.raw`A printer prints 18 pages per minute. How many pages can it print in 15 minutes?`,
          choices: [String.raw`33`, String.raw`180`, String.raw`270`, String.raw`300`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Mrs Goh paid \$14.40 for 1.8 kg of grapes.`,
          parts: [
            { label: "(a)", text: String.raw`What is the cost of 1 kg of grapes?`, marks: 1 },
            { label: "(b)", text: String.raw`At this rate, how much would 2.5 kg of grapes cost?`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "N6-unitary-method",
      name: String.raw`Unitary method and changing the unit of time`,
      tests: String.raw`Finding the amount for one unit from a given pair of values, then scaling up, often with a change between minutes and hours or a second step with money.`,
      questions: [
        {
          stem: String.raw`A machine makes 360 buttons in 8 minutes. At this rate, how many buttons can it make in 1 hour?`,
          choices: [String.raw`45`, String.raw`368`, String.raw`2700`, String.raw`2880`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Mr Tan's car uses 6 ℓ of petrol for every 75 km it travels.`,
          parts: [
            { label: "(a)", text: String.raw`How much petrol does the car use to travel 300 km?`, marks: 1 },
            { label: "(b)", text: String.raw`Petrol costs \$2.50 per litre. Mr Tan spent \$45 on petrol. What is the greatest distance the car can travel with this petrol?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-compare-rates",
      name: String.raw`Comparing rates and the better buy`,
      tests: String.raw`Changing each offer or each worker to the same one unit (per item, per kg, per minute) and comparing. Recognise it from "which is cheaper" or "who is faster".`,
      questions: [
        {
          stem: String.raw`A shop sells the same brand of juice in packs of different sizes. Which pack has the lowest cost per bottle?`,
          choices: [String.raw`4 bottles for \$5.60`, String.raw`6 bottles for \$7.80`, String.raw`3 bottles for \$4.05`, String.raw`5 bottles for \$7.25`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Ann typed 280 words in 7 minutes. Bea typed 405 words in 9 minutes. Each of them types at a steady rate.`,
          parts: [
            { label: "(a)", text: String.raw`Who types more words per minute, and by how many words per minute?`, marks: 2 },
            { label: "(b)", text: String.raw`How long would Bea take to type 1800 words? Give your answer in minutes.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N6-parking-taxi",
      name: String.raw`Parking charges and taxi fares from a table`,
      tests: String.raw`Reading a table with a first block and "every additional ... or part thereof", finding the time or distance, and rounding the number of extra blocks up. Harder parts work backwards from the amount paid.`,
      questions: [
        {
          stem: String.raw`The table shows the parking charges at a car park.

| Time | Charge |
| --- | --- |
| First hour | \$2.50 |
| Every additional half hour or part thereof | \$1.20 |

Mr Lee parked his car from 9.45 a.m. to 12.20 p.m. on the same day. How much did he pay?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The table shows the taxi fares charged by a taxi company.

| Distance | Fare |
| --- | --- |
| First 1 km | \$4.20 |
| Every additional 400 m or part thereof | \$0.25 |`,
          parts: [
            { label: "(a)", text: String.raw`Find the fare for a trip of 5 km.`, marks: 2 },
            { label: "(b)", text: String.raw`Mrs Wong paid \$9.20 for a trip. What is the greatest distance she could have travelled? Give your answer in kilometres.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-banded-charges",
      name: String.raw`Water and electricity charges in bands`,
      tests: String.raw`Charging the first band at one rate and only the amount above it at a second rate, and working backwards from a bill to the amount used.`,
      questions: [
        {
          stem: String.raw`The table shows the charges for water at a town.

| Water used in a month | Charge |
| --- | --- |
| First 40 m³ | \$2.70 per m³ |
| Above 40 m³ | \$3.30 per m³ |

The Tan family used 46 m³ of water in March. How much did they pay for the water?`,
          choices: [String.raw`\$124.20`, String.raw`\$127.80`, String.raw`\$132.00`, String.raw`\$151.80`],
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The table shows the electricity charges for a household.

| Electricity used in a month | Charge |
| --- | --- |
| First 300 kWh | 28 cents per kWh |
| Above 300 kWh | 32 cents per kWh |`,
          parts: [
            { label: "(a)", text: String.raw`The Lim family used 420 kWh of electricity in June. How much did they pay?`, marks: 2 },
            { label: "(b)", text: String.raw`In July, their electricity bill was \$141.60. How much electricity did they use in July?`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N6-filling-tank",
      name: String.raw`Rate of flow: filling a tank`,
      tests: String.raw`Using litres per minute with the volume of a rectangular tank, including changing cm³ to litres, finding a height of water, and two taps working together then one alone.`,
      questions: [
        {
          stem: String.raw`The diagram shows an empty rectangular tank measuring 80 cm by 50 cm by 60 cm. Water flows into the tank from a tap at 12 ℓ per minute.`,
          figure: {
            type: "plot",
            x: [-14, 116], y: [-10, 78], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [80, 0], [80, 60], [0, 60]], tone: "ink" },
              { points: [[0, 60], [80, 60], [101.7, 72.5], [21.7, 72.5]], tone: "ink" },
            ],
            segments: [
              { from: [80, 0], to: [101.7, 12.5], tone: "ink" },
              { from: [101.7, 12.5], to: [101.7, 72.5], tone: "ink" },
              { from: [0, 0], to: [21.7, 12.5], tone: "ink", dashed: true, thin: true },
              { from: [21.7, 12.5], to: [101.7, 12.5], tone: "ink", dashed: true, thin: true },
              { from: [21.7, 12.5], to: [21.7, 72.5], tone: "ink", dashed: true, thin: true },
            ],
            labels: [
              { x: 40, y: 0, text: "80 cm", pos: "s" },
              { x: 91, y: 6, text: "50 cm", pos: "se" },
              { x: 0, y: 30, text: "60 cm", pos: "w" },
            ],
            caption: "Not drawn to scale",
            alt: "A rectangular tank drawn in 3D, 80 cm long, 50 cm wide and 60 cm high. Hidden edges are dashed.",
          },
          parts: [
            { label: "(a)", text: String.raw`How long will it take to fill the tank completely? Give your answer in minutes.`, marks: 1 },
            { label: "(b)", text: String.raw`What is the height of the water in the tank after 5 minutes? Give your answer in cm.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A tank can hold 300 ℓ of water. It is empty at first. Tap A lets in 9 ℓ of water per minute and Tap B lets in 6 ℓ of water per minute. Both taps are turned on together. After 8 minutes, Tap A is turned off and Tap B continues to fill the tank.`,
          parts: [
            { label: "(a)", text: String.raw`How much water is in the tank after 8 minutes?`, marks: 1 },
            { label: "(b)", text: String.raw`How many more minutes does Tap B take to fill the tank completely?`, marks: 2 },
            { label: "(c)", text: String.raw`If both taps had been left on until the tank was full, how many minutes earlier would the tank have been filled?`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
