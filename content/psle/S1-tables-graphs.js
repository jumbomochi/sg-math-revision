H2.addTopic({
  id: "S1",
  title: "Tables, Graphs and Pie Charts",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Reading and completing tables, reading bar graphs, line graphs and pie charts, and solving problems using the data.`,
  syllabus: {
    include: [
      String.raw`P2–P3: reading and interpreting data from picture graphs (with scales)`,
      String.raw`P3: reading and interpreting data from bar graphs`,
      String.raw`P3: using different scales on axis`,
      String.raw`P4: completing a table from given data`,
      String.raw`P4: reading and interpreting data from tables, line graphs and pie charts`,
      String.raw`P4–P6: solving problems using information from tables and graphs (with fractions, percentage, ratio and average)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Reading and completing a table`,
      body: String.raw`Read the **row** and **column** headings first. Find where the row and the column meet.

| Class | Boys | Girls | Total |
| --- | --- | --- | --- |
| 5A | 18 | 20 | 38 |
| 5B | 16 | ? | 35 |

- To fill a gap, use the **total**: $35 - 16 = 19$ girls in 5B.
- A "Total" row or column is the sum of the others. Add it up to check your answers.
- Read the units in the headings (\$, kg, minutes, "in thousands").`,
    },
    {
      title: String.raw`Picture graphs: read the key`,
      body: String.raw`In a picture graph, each picture stands for **more than one** item. The **key** tells you how many.

- Count the pictures, then multiply by the key.
- Half a picture stands for half the key.

*Example.* If each circle stands for 4 pupils, then $4\frac{1}{2}$ circles stand for $4\frac{1}{2} \times 4 = 18$ pupils.`,
      figure: {
        type: "plot",
        x: [-0.3, 7], y: [-0.7, 3.6], equal: true, axes: false,
        circles: [
          [0, 3], [1, 3], [2, 3],
          [0, 2], [1, 2],
          [0, 1], [1, 1], [2, 1], [3, 1],
          [4.3, -0.25],
        ].map(([k, y]) => ({ c: [y < 0 ? k : 1.8 + 0.9 * k, y], r: 0.33, fill: true, tone: "accent" })),
        polygons: [[3, 3], [4, 1]].map(([k, y]) => ({ points: Array.from({ length: 21 }, (_, i) => [1.8 + 0.9 * k + 0.33 * Math.cos(Math.PI / 2 + (Math.PI * i) / 20), y + 0.33 * Math.sin(Math.PI / 2 + (Math.PI * i) / 20)]), fill: true, tone: "accent" })),
        segments: [{ from: [1.3, 0.45], to: [1.3, 3.5], tone: "muted", thin: true }],
        labels: [
          { x: 1.2, y: 3, text: "Apple", pos: "w" },
          { x: 1.2, y: 2, text: "Banana", pos: "w" },
          { x: 1.2, y: 1, text: "Orange", pos: "w" },
          { x: 4.7, y: -0.25, text: "stands for 4 pupils", pos: "e", style: "small" },
          { x: 3.9, y: -0.25, text: "Key:", pos: "w", style: "small" },
        ],
        caption: String.raw`Apple: $3\frac{1}{2} \times 4 = 14$ pupils.`,
        alt: "Picture graph of favourite fruits. Apple has 3 and a half circles, Banana 2 circles, Orange 4 and a half circles. Key: each circle stands for 4 pupils.",
      },
    },
    {
      title: String.raw`Bar graphs: read the scale first`,
      body: String.raw`The height (or length) of each bar shows the amount. Before you read any bar, find **what one gridline stands for**.

- Gridlines may go up in 2s, 5s, 10s, 50s… not always 1s.
- A bar that ends **between** two gridlines is halfway: between 40 and 50 it shows 45.
- "How many more" means **subtract** the two bars. "Altogether" means **add**.

**Common mistake:** counting gridlines instead of reading the numbers on the axis.`,
      figure: {
        type: "plot",
        x: [-0.3, 5], y: [0, 86], height: 220,
        axisLabels: ["", "Number of pupils"], originLabel: false,
        polygons: [[1, 50, "accent"], [2, 70, "accent"], [3, 30, "accent"], [4, 45, "warn"]].map(([x, h, tone]) => ({ points: [[x - 0.28, 0], [x + 0.28, 0], [x + 0.28, h], [x - 0.28, h]], fill: true, tone })),
        segments: [10, 20, 30, 40, 50, 60, 70, 80].map((k) => ({ from: [0, k], to: [4.7, k], thin: true, tone: "muted" })),
        xTicks: [{ x: 1, label: "Red" }, { x: 2, label: "Blue" }, { x: 3, label: "Green" }, { x: 4, label: "Yellow" }],
        yTicks: [20, 40, 60, 80].map((y) => ({ y, label: String(y) })),
        labels: [{ x: 4, y: 45, text: "45", pos: "n", tone: "warn" }, { x: 0, y: 0, text: "0", pos: "sw", style: "small", tone: "muted" }],
        caption: String.raw`Each gridline is 10. The Yellow bar ends halfway between 40 and 50.`,
        alt: "Bar graph of favourite colours with gridlines every 10, labelled every 20: Red 50, Blue 70, Green 30, Yellow 45. The Yellow bar is highlighted and ends halfway between the 40 and 50 gridlines.",
      },
    },
    {
      title: String.raw`Line graphs: change over time`,
      body: String.raw`A line graph shows how something **changes** over time. Each point is a reading. The lines join the points in order.

- **Increase** or **decrease** between two times $=$ the difference of the two readings.
- The **steepest** line shows the **biggest change**. A **flat** line means **no change**.
- A line going down means the amount decreased.

**Common mistake:** giving a reading when the question asks for a change (or the other way round). Read the question twice.`,
      figure: {
        type: "plot",
        x: [-0.5, 5.7], y: [0, 14.5], height: 220,
        axisLabels: ["", "Height (cm)"], originLabel: false,
        segments: [2, 4, 6, 8, 10, 12, 14].map((k) => ({ from: [0, k], to: [5.4, k], thin: true, tone: "muted" }))
          .concat([[0, 2, 1, 5, "accent"], [1, 5, 2, 6, "accent"], [2, 6, 3, 6, "good"], [3, 6, 4, 10, "warn"], [4, 10, 5, 12, "accent"]].map(([a, p, b, q, tone]) => ({ from: [a, p], to: [b, q], tone }))),
        points: [[0, 2], [1, 5], [2, 6], [3, 6], [4, 10], [5, 12]].map(([x, y]) => ({ x, y })),
        xTicks: [0, 1, 2, 3, 4, 5].map((x) => ({ x, label: "Week " + x })),
        yTicks: [2, 4, 6, 8, 10, 12, 14].map((y) => ({ y, label: String(y) })),
        labels: [
          { x: 2.5, y: 6, text: "flat: no change", pos: "s", style: "small", tone: "good" },
          { x: 3.75, y: 10.6, text: "steepest = biggest increase", pos: "w", style: "small", tone: "warn" },
        ],
        caption: String.raw`The height of a plant. From Week 3 to Week 4 it grew $10 - 6 = 4$ cm.`,
        alt: "Line graph of a plant's height from Week 0 to Week 5: 2, 5, 6, 6, 10 and 12 cm. The flat part from Week 2 to 3 is marked no change; the steepest part from Week 3 to 4 is marked biggest increase.",
      },
    },
    {
      title: String.raw`Pie charts: parts of one whole`,
      body: String.raw`The **whole circle** stands for the **total**. Each sector is a fraction of that total.

- All the sectors add up to 1 whole (or $100\%$).
- Half a circle is $\frac{1}{2}$. A right angle at the centre is $\frac{1}{4}$. Half of a quarter is $\frac{1}{8}$.
- Three of those eighths make $\frac{3}{8}$.
- To find the fraction for the last sector: $1 -$ (all the others).

*Example.* Sectors of $\frac{1}{2}$, $\frac{1}{4}$ and $\frac{1}{8}$ leave $1 - \frac{7}{8} = \frac{1}{8}$ for the last one.`,
      figure: {
        type: "plot",
        x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
        polygons: [[0, 1 / 2, "accent"], [1 / 2, 3 / 4, "good"], [3 / 4, 7 / 8, "warn"], [7 / 8, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
        rightAngles: [{ at: [0, 0], a: [0, -1], b: [-1, 0], size: 0.3 }],
        labels: [
          { x: 1.2, y: 0, text: "½", pos: "c" },
          { x: -0.85, y: -0.85, text: "¼", pos: "c" },
          { x: -1.11, y: 0.46, text: "⅛", pos: "c" },
          { x: -0.46, y: 1.11, text: "⅛", pos: "c" },
        ],
        caption: String.raw`$\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{8} = 1$ whole.`,
        alt: "Pie chart: a half sector, a quarter sector marked with a right angle at the centre, and two eighth sectors.",
      },
    },
    {
      title: String.raw`Pie charts: from one part to the whole`,
      body: String.raw`If you know the **amount** for one sector, you can find the total, and then any other sector.

- Fraction: if $\frac{1}{4}$ of the pupils is 30 pupils, the total is $30 \times 4 = 120$ pupils.
- Percentage: the whole is $100\%$. If $20\%$ is \$50, then $1\%$ is \$2.50 and $100\%$ is \$250.
- Angles: the whole turn at the centre is $360^\circ$. A sector of $60^\circ$ is $\frac{60}{360} = \frac{1}{6}$ of the total.

**Common mistake:** finding the fraction of the wrong amount. The fraction in a pie chart is always of the **whole circle**.`,
      figure: {
        type: "plot",
        x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
        polygons: [[0, 0.4, "accent"], [0.4, 0.65, "good"], [0.65, 0.85, "warn"], [0.85, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
        rightAngles: [{ at: [0, 0], a: [0.588, -0.809], b: [-0.809, -0.588], size: 0.3 }],
        labels: [
          { x: 1.09, y: 0.36, text: "40%", pos: "c" },
          { x: -0.18, y: -1.14, text: "25%", pos: "c" },
          { x: -1.15, y: 0, text: "20%", pos: "c" },
          { x: -0.52, y: 1.02, text: "15%", pos: "c" },
        ],
        caption: String.raw`Whole $= 100\% = 360^\circ$. The $25\%$ sector is a quarter: a right angle.`,
        alt: "Pie chart with sectors of 40%, 25%, 20% and 15%. The 25% sector has a right angle at the centre.",
      },
    },
    {
      title: String.raw`Solving problems with data`,
      body: String.raw`Most data questions take two steps: **read** the numbers, then **work** with them.

1. Read the title, the labels and the scale.
2. Write down the numbers you need, e.g. "Tue: 90".
3. Do the working: difference, total, fraction of the total, percentage, average.

- Fraction or percentage "of all the …" uses the **grand total**, not one bar.
- Percentage increase $= \dfrac{\text{increase}}{\text{first amount}} \times 100\%$.
- Average from a graph $=$ total of the readings $\div$ number of readings.`,
    },
  ],
  archetypes: [
    {
      id: "S1-tables",
      name: String.raw`Reading and completing tables`,
      tests: String.raw`Finding a missing entry from row or column totals, and reading a table of charges or rates to work out a cost or a time.`,
      questions: [
        {
          stem: String.raw`The table shows how the pupils in three classes travel to school. Some of the numbers are missing.

| Class | Bus | Car | Walk | Total |
| --- | --- | --- | --- | --- |
| 6A | 14 | 9 |  | 36 |
| 6B | 11 |  | 8 | 32 |
| 6C | 17 | 6 | 9 |  |`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`How many pupils in 6B travel to school by car?`, marks: 1 },
            { label: "(b)", text: String.raw`How many pupils in the three classes walk to school altogether?`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The table shows the parking charges at a car park.

| Time | Charge |
| --- | --- |
| First hour | \$2.40 |
| Every additional $\frac{1}{2}$ hour or part of it | \$1.10 |`,
          parts: [
            { label: "(a)", text: String.raw`Mr Lee parked his car from 9.40 a.m. to 12.10 p.m. How much did he pay?`, marks: 2 },
            { label: "(b)", text: String.raw`Mrs Ong paid \$9.00 for parking. What was the longest time she could have parked her car? Give your answer in hours.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-bar-graphs",
      name: String.raw`Reading bar graphs`,
      tests: String.raw`Reading bars against a scale that is not in 1s, comparing bars ("how many more"), and using a total to find a missing bar. Often followed by a fraction or percentage of the total.`,
      questions: [
        {
          stem: String.raw`The bar graph shows the number of pupils who chose each sport. How many more pupils chose football than badminton?`,
          marks: 1,
          calculator: false,
          figure: {
            type: "plot",
            x: [-0.3, 4.8], y: [0, 53], height: 220,
            axisLabels: ["", "Number of pupils"], originLabel: false,
            segments: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((k) => ({ from: [0, k], to: [4.6, k], thin: true, tone: "muted" })),
            bars: [[0.9, 45], [1.9, 30], [2.9, 25], [3.9, 35]],
            barWidth: 0.5,
            xTicks: [{ x: 0.9, label: "Football" }, { x: 1.9, label: "Swimming" }, { x: 2.9, label: "Badminton" }, { x: 3.9, label: "Basketball" }],
            yTicks: [10, 20, 30, 40, 50].map((y) => ({ y, label: String(y) })),
            labels: [{ x: 0, y: 0, text: "0", pos: "sw", style: "small", tone: "muted" }],
            alt: "Bar graph with gridlines every 5 pupils, labelled every 10: Football 45, Swimming 30, Badminton 25, Basketball 35.",
          },
          choices: [String.raw`10`, String.raw`20`, String.raw`25`, String.raw`70`],
        },
        {
          stem: String.raw`The bar graph shows the number of books borrowed from a library from Monday to Thursday. The bar for Friday has not been drawn. A total of 600 books were borrowed from Monday to Friday.`,
          figure: {
            type: "plot",
            x: [-0.4, 5.8], y: [0, 168], height: 240,
            axisLabels: ["", "Number of books"], originLabel: false,
            segments: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160].map((k) => ({ from: [0, k], to: [5.6, k], thin: true, tone: "muted" })),
            bars: [[0.9, 120], [1.9, 90], [2.9, 110], [3.9, 130]],
            barWidth: 0.5,
            xTicks: [{ x: 0.9, label: "Mon" }, { x: 1.9, label: "Tue" }, { x: 2.9, label: "Wed" }, { x: 3.9, label: "Thu" }, { x: 4.9, label: "Fri" }],
            yTicks: [20, 40, 60, 80, 100, 120, 140, 160].map((y) => ({ y, label: String(y) })),
            labels: [{ x: 0, y: 0, text: "0", pos: "sw", style: "small", tone: "muted" }],
            alt: "Bar graph with gridlines every 10 books, labelled every 20: Monday 120, Tuesday 90, Wednesday 110, Thursday 130. There is no bar for Friday.",
          },
          parts: [
            { label: "(a)", text: String.raw`How many books were borrowed on Friday?`, marks: 1 },
            { label: "(b)", text: String.raw`What fraction of the 600 books were borrowed on Monday? Give your answer in its simplest form.`, marks: 1 },
            { label: "(c)", text: String.raw`What percentage of the 600 books were borrowed on Tuesday?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-line-graphs",
      name: String.raw`Reading line graphs`,
      tests: String.raw`Reading values at given times, finding the increase or decrease between two readings, spotting the greatest change or no change, and finding a percentage increase.`,
      questions: [
        {
          stem: String.raw`The line graph shows the number of customers in a shop at each hour from 8 a.m. to 2 p.m. Between which two times was the increase in the number of customers the greatest?`,
          marks: 2,
          calculator: false,
          figure: {
            type: "plot",
            x: [-0.5, 7.6], y: [0, 104], height: 240,
            axisLabels: ["", "Number of customers"], originLabel: false,
            segments: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((k) => ({ from: [0, k], to: [7.4, k], thin: true, tone: "muted" }))
              .concat([[1, 10, 2, 25], [2, 25, 3, 30], [3, 30, 4, 55], [4, 55, 5, 70], [5, 70, 6, 90], [6, 90, 7, 80]].map(([a, p, b, q]) => ({ from: [a, p], to: [b, q], tone: "accent" }))),
            points: [[1, 10], [2, 25], [3, 30], [4, 55], [5, 70], [6, 90], [7, 80]].map(([x, y]) => ({ x, y })),
            xTicks: ["8 am", "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm"].map((label, i) => ({ x: i + 1, label })),
            yTicks: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((y) => ({ y, label: String(y) })),
            labels: [{ x: 0, y: 0, text: "0", pos: "sw", style: "small", tone: "muted" }],
            alt: "Line graph of the number of customers: 8 am 10, 9 am 25, 10 am 30, 11 am 55, 12 pm 70, 1 pm 90, 2 pm 80. Gridlines every 5, labelled every 10.",
          },
          choices: [String.raw`8 a.m. and 9 a.m.`, String.raw`10 a.m. and 11 a.m.`, String.raw`12 p.m. and 1 p.m.`, String.raw`1 p.m. and 2 p.m.`],
        },
        {
          stem: String.raw`The line graph shows the amount of money in Ali's savings box at the end of each month from January to June.`,
          figure: {
            type: "plot",
            x: [-0.4, 6.6], y: [0, 275], height: 240,
            axisLabels: ["", "Amount (\$)"], originLabel: false,
            segments: [30, 60, 90, 120, 150, 180, 210, 240, 270].map((k) => ({ from: [0, k], to: [6.4, k], thin: true, tone: "muted" }))
              .concat([[1, 120, 2, 150], [2, 150, 3, 150], [3, 150, 4, 210], [4, 210, 5, 180], [5, 180, 6, 240]].map(([a, p, b, q]) => ({ from: [a, p], to: [b, q], tone: "accent" }))),
            points: [[1, 120], [2, 150], [3, 150], [4, 210], [5, 180], [6, 240]].map(([x, y]) => ({ x, y })),
            xTicks: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((label, i) => ({ x: i + 1, label })),
            yTicks: [60, 120, 180, 240].map((y) => ({ y, label: String(y) })),
            labels: [{ x: 0, y: 0, text: "0", pos: "sw", style: "small", tone: "muted" }],
            alt: "Line graph of savings at the end of each month: January 120 dollars, February 150, March 150, April 210, May 180, June 240. Gridlines every 30 dollars, labelled every 60.",
          },
          parts: [
            { label: "(a)", text: String.raw`Between which two months did the amount of money stay the same?`, marks: 1 },
            { label: "(b)", text: String.raw`In which month did Ali take money out of his savings box? How much did the amount decrease by?`, marks: 1 },
            { label: "(c)", text: String.raw`Find the percentage increase in the amount of money from the end of February to the end of April.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-pie-fractions",
      name: String.raw`Pie charts with fractions`,
      tests: String.raw`Using the fact that the sectors add up to 1 whole, finding the total from one sector, and then the amount in another sector. Quarters and eighths are shown by right angles and halves of them.`,
      questions: [
        {
          stem: String.raw`The pie chart shows the favourite fruits of a group of pupils. What fraction of the pupils chose grapes?`,
          marks: 1,
          calculator: false,
          figure: {
            type: "plot",
            x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
            polygons: [[0, 3 / 8, "accent"], [3 / 8, 5 / 8, "good"], [5 / 8, 3 / 4, "warn"], [3 / 4, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
            labels: [
              { x: 1.06, y: 0.61, text: "Orange", pos: "c", style: "small" },
              { x: 1.06, y: 0.24, text: "⅜", pos: "c" },
              { x: 0, y: -0.98, text: "Apple", pos: "c", style: "small" },
              { x: 0, y: -1.35, text: "¼", pos: "c" },
              { x: -1.06, y: -0.27, text: "Pear", pos: "c", style: "small" },
              { x: -1.06, y: -0.64, text: "⅛", pos: "c" },
              { x: -0.81, y: 0.81, text: "Grapes", pos: "c", style: "small" },
            ],
            alt: "Pie chart of favourite fruits: Orange three-eighths, Apple one quarter, Pear one eighth, and Grapes with no fraction given.",
          },
          choices: [String.raw`$\frac{1}{8}$`, String.raw`$\frac{1}{4}$`, String.raw`$\frac{3}{8}$`, String.raw`$\frac{3}{4}$`],
        },
        {
          stem: String.raw`The pie chart shows how a group of pupils travel to school. 36 pupils travel by car. How many pupils walk to school?`,
          marks: 2,
          calculator: false,
          figure: {
            type: "plot",
            x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
            polygons: [[0, 3 / 8, "accent"], [3 / 8, 1 / 2, "good"], [1 / 2, 5 / 8, "warn"], [5 / 8, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
            labels: [
              { x: 1.06, y: 0.61, text: "Bus", pos: "c", style: "small" },
              { x: 1.06, y: 0.24, text: "⅜", pos: "c" },
              { x: 0.44, y: -0.89, text: "Car", pos: "c", style: "small" },
              { x: 0.44, y: -1.26, text: "⅛", pos: "c" },
              { x: -0.44, y: -0.89, text: "MRT", pos: "c", style: "small" },
              { x: -0.44, y: -1.26, text: "⅛", pos: "c" },
              { x: -1.06, y: 0.44, text: "Walk", pos: "c", style: "small" },
            ],
            alt: "Pie chart of how pupils travel to school: Bus three-eighths, Car one eighth, MRT one eighth, and Walk with no fraction given.",
          },
        },
      ],
    },
    {
      id: "S1-pie-percent-angle",
      name: String.raw`Pie charts with percentages or angles`,
      tests: String.raw`Using the whole as $100\%$ or $360^\circ$ to find a missing sector, then changing a percentage or an angle into an amount (often money or a number of people).`,
      questions: [
        {
          stem: String.raw`The pie chart shows how Mrs Lim spends her monthly salary. She spends \$840 on food.`,
          figure: {
            type: "plot",
            x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
            polygons: [[0, 0.35, "accent"], [0.35, 0.65, "good"], [0.65, 0.8, "warn"], [0.8, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
            labels: [
              { x: 1.02, y: 0.69, text: "Food", pos: "c", style: "small" },
              { x: 1.02, y: 0.32, text: "35%", pos: "c" },
              { x: 0, y: -0.98, text: "Rent", pos: "c", style: "small" },
              { x: 0, y: -1.35, text: "30%", pos: "c" },
              { x: -1.14, y: 0, text: "Savings", pos: "c", style: "small" },
              { x: -1.14, y: -0.37, text: "15%", pos: "c" },
              { x: -0.68, y: 0.93, text: "Others", pos: "c", style: "small" },
            ],
            alt: "Pie chart of Mrs Lim's salary: Food 35%, Rent 30%, Savings 15%, and Others with no percentage given.",
          },
          parts: [
            { label: "(a)", text: String.raw`What percentage of her salary does she spend on others?`, marks: 1 },
            { label: "(b)", text: String.raw`How much does she save each month?`, marks: 1 },
          ],
        },
        {
          stem: String.raw`180 pupils were asked to choose their favourite colour. The pie chart shows the results.`,
          figure: {
            type: "plot",
            x: [-3.2, 3.2], y: [-2.3, 2.3], equal: true, axes: false,
            polygons: [[0, 1 / 3, "accent"], [1 / 3, 7 / 12, "good"], [7 / 12, 11 / 15, "warn"], [11 / 15, 1, "muted"]].map(([a, b, tone]) => ({ points: [[0, 0]].concat(Array.from({ length: 41 }, (_, i) => [2 * Math.sin(2 * Math.PI * (a + ((b - a) * i) / 40)), 2 * Math.cos(2 * Math.PI * (a + ((b - a) * i) / 40))])), fill: true, tone })),
            rightAngles: [{ at: [0, 0], a: [0.866, -0.5], b: [-0.5, -0.866], size: 0.3 }],
            labels: [
              { x: 1, y: 0.75, text: "Red", pos: "c", style: "small" },
              { x: 1, y: 0.38, text: "120°", pos: "c" },
              { x: 0.3, y: -1.11, text: "Blue", pos: "c", style: "small" },
              { x: -0.96, y: -0.46, text: "Green", pos: "c", style: "small" },
              { x: -0.96, y: -0.83, text: "54°", pos: "c" },
              { x: -0.85, y: 0.77, text: "Yellow", pos: "c", style: "small" },
            ],
            alt: "Pie chart of favourite colours: Red with an angle of 120 degrees at the centre, Blue with a right angle at the centre, Green 54 degrees, and Yellow with no angle given.",
          },
          parts: [
            { label: "(a)", text: String.raw`What fraction of the pupils chose red?`, marks: 1 },
            { label: "(b)", text: String.raw`How many pupils chose yellow?`, marks: 2 },
            { label: "(c)", text: String.raw`What percentage of the pupils chose green?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-data-problems",
      name: String.raw`Multi-step problems using tables and graphs`,
      tests: String.raw`Reading data from a graph or table and then using it with money, fractions, percentage or average. The data step is easy; the marks are in the working that follows.`,
      questions: [
        {
          stem: String.raw`The bar graph shows the number of raffle tickets sold by four pupils. Each ticket was sold for \$2.50.`,
          figure: {
            type: "plot",
            x: [-7.5, 50.5], y: [-0.9, 4.7], height: 200, axes: false,
            polygons: [[4, 36], [3, 24], [2, 44], [1, 16]].map(([y, w]) => ({ points: [[0, y - 0.28], [w, y - 0.28], [w, y + 0.28], [0, y + 0.28]], fill: true, tone: "accent" })),
            segments: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48].map((k) => ({ from: [k, 0], to: [k, 4.6], thin: true, tone: "muted" }))
              .concat([{ from: [0, 0], to: [49, 0], tone: "ink" }, { from: [0, 0], to: [0, 4.6], tone: "ink" }]),
            labels: [
              { x: -0.8, y: 4, text: "Amy", pos: "w" },
              { x: -0.8, y: 3, text: "Ben", pos: "w" },
              { x: -0.8, y: 2, text: "Cara", pos: "w" },
              { x: -0.8, y: 1, text: "Dev", pos: "w" },
            ].concat([0, 8, 16, 24, 32, 40, 48].map((x) => ({ x, y: 0, text: String(x), pos: "s", style: "small" })))
              .concat([{ x: 24, y: -0.55, text: "Number of tickets", pos: "s", style: "small" }]),
            alt: "Horizontal bar graph of tickets sold, with gridlines every 4 tickets labelled every 8: Amy 36, Ben 24, Cara 44, Dev 16.",
          },
          parts: [
            { label: "(a)", text: String.raw`What fraction of all the tickets sold were sold by Ben? Give your answer in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`How much more money did Cara collect than Dev?`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The table shows the number of adult and child tickets sold at a bird park on three days. Some of the numbers are missing.

| Day | Adult | Child | Total |
| --- | --- | --- | --- |
| Friday | 150 | 90 | 240 |
| Saturday |  | 210 | 450 |
| Sunday | 280 |  |  |`,
          parts: [
            { label: "(a)", text: String.raw`How many adult tickets were sold on Saturday?`, marks: 1 },
            { label: "(b)", text: String.raw`The number of child tickets sold on Sunday was $20\%$ more than on Saturday. How many tickets were sold altogether on Sunday?`, marks: 2 },
            { label: "(c)", text: String.raw`An adult ticket costs \$25 and a child ticket costs \$15. How much money was collected from ticket sales on Saturday?`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
