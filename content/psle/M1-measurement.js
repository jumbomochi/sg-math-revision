(function () {
  const T = (x, y, text, pos) => ({ x, y, text, pos: pos || "c", style: "plain" });
  const B = (x, y, text, pos) => ({ x, y, text, pos: pos || "c", style: "bold" });
  const S = (x, y, text, pos, tone) => Object.assign({ x, y, text, pos: pos || "c", style: "small" }, tone ? { tone } : {});
  const rad = (d) => (d * Math.PI) / 180;
  // one row of a unit-conversion ladder: big unit -> small unit
  const ladder = (y, x0, x1, factor) => [
    { from: [x0 + 0.55, y + 0.22], to: [x1 - 0.55, y + 0.22], arrow: true, tone: "accent", label: "× " + factor, pos: "n", style: "small" },
    { from: [x1 - 0.55, y - 0.22], to: [x0 + 0.55, y - 0.22], arrow: true, tone: "warn", label: "÷ " + factor, pos: "s", style: "small" },
  ];
  // a hop drawn as a half-ellipse above a timeline
  const hop = (a, b, h) => ({ param: `t => [${(a + b) / 2} - ${(b - a) / 2}*Math.cos(t), ${h}*Math.sin(t)]`, t: [0, Math.PI], tone: "accent" });
  // clock face: hands at hour h, minute m
  const clock = (h, m) => {
    const hourAng = 90 - 30 * ((h % 12) + m / 60), minAng = 90 - 6 * m;
    const ticks = [], nums = [];
    for (let i = 0; i < 60; i++) {
      const a = rad(90 - 6 * i), r0 = i % 5 === 0 ? 1.78 : 1.88;
      ticks.push({ from: [r0 * Math.cos(a), r0 * Math.sin(a)], to: [2 * Math.cos(a), 2 * Math.sin(a)], tone: "ink", thin: i % 5 !== 0 });
    }
    for (let k = 1; k <= 12; k++) {
      const a = rad(90 - 30 * k);
      nums.push({ x: 1.5 * Math.cos(a), y: 1.5 * Math.sin(a), text: String(k), pos: "c", style: "small" });
    }
    return {
      circles: [{ c: [0, 0], r: 2, tone: "ink" }],
      segments: ticks.concat([
        { from: [0, 0], to: [0.9 * Math.cos(rad(hourAng)), 0.9 * Math.sin(rad(hourAng))], tone: "ink" },
        { from: [0, 0], to: [1.3 * Math.cos(rad(minAng)), 1.3 * Math.sin(rad(minAng))], tone: "ink" },
      ]),
      points: [{ x: 0, y: 0 }],
      labels: nums,
    };
  };

  H2.addTopic({
    id: "M1",
    title: "Measurement, Time and Money",
    paper: "Paper 1 / Paper 2",
    summary: String.raw`Units of length, mass and volume and converting between them, time and the 24-hour clock, durations and timetables, money in decimal notation, and measurement word problems.`,
    syllabus: {
      include: [
        String.raw`P1–P2: measuring length in cm and m, mass in kg and g, and volume of liquid in $\ell$; comparing and ordering measurements`,
        String.raw`P3: measuring length in km and volume of liquid in ml; measurements in compound units (e.g. 3 m 25 cm)`,
        String.raw`P3: converting a measurement in compound units to the smaller unit, and vice versa (km and m, m and cm, kg and g, $\ell$ and ml)`,
        String.raw`P5: converting a measurement from a smaller unit to a larger unit in decimal form, and vice versa`,
        String.raw`P1–P2: telling time, a.m. and p.m., h and min; converting time in hours and minutes to minutes only, and vice versa`,
        String.raw`P3: measuring time in seconds; finding the starting time, finishing time or duration given the other two; the 24-hour clock`,
        String.raw`P1–P3: money: counting, reading and writing money in decimal notation, converting between dollars and cents, comparing, adding and subtracting money`,
        String.raw`P4: multiplying and dividing decimals by a whole number, used in money and measurement problems`,
      ],
      exclude: [
        String.raw`speed, distance and time (not in the 2021 syllabus)`,
        String.raw`converting units of area and volume (cm$^2$ and m$^2$, cm$^3$ and m$^3$)`,
      ],
    },
    concepts: [
      {
        title: String.raw`Units of length, mass and volume`,
        body: String.raw`| Measure | Units |
| --- | --- |
| Length | $1$ km $= 1000$ m, $\;1$ m $= 100$ cm |
| Mass | $1$ kg $= 1000$ g |
| Volume of liquid | $1\ \ell = 1000$ ml |

- Big unit $\to$ small unit: **multiply**. $4$ m $= 400$ cm.
- Small unit $\to$ big unit: **divide**. $6000$ g $= 6$ kg.
- **Check**: the number of small units is always **bigger** than the number of big units.`,
        figure: {
          type: "plot",
          x: [-1, 8], y: [-0.9, 5], equal: true, axes: false,
          segments: [].concat(ladder(4, 0, 3.5, 1000), ladder(4, 3.5, 7, 100), ladder(2, 0, 3.5, 1000), ladder(0, 0, 3.5, 1000)),
          labels: [B(0, 4, "km"), B(3.5, 4, "m"), B(7, 4, "cm"), B(0, 2, "kg"), B(3.5, 2, "g"), B(0, 0, "ℓ"), B(3.5, 0, "ml")],
          caption: String.raw`Big to small: multiply. Small to big: divide.`,
          alt: "A conversion chart. Kilometres to metres is times 1000 and metres to centimetres is times 100. Kilograms to grams and litres to millilitres are each times 1000. Going back the other way, divide by the same number.",
        },
      },
      {
        title: String.raw`Compound units and decimals`,
        body: String.raw`A **compound unit** uses two units together, like $3$ m $25$ cm.

| Compound unit | Small unit | Decimal of big unit |
| --- | --- | --- |
| $3$ m $25$ cm | $325$ cm | $3.25$ m |
| $3$ m $5$ cm | $305$ cm | $3.05$ m |
| $2$ kg $450$ g | $2450$ g | $2.45$ kg |
| $2$ kg $45$ g | $2045$ g | $2.045$ kg |
| $1\ \ell\ 8$ ml | $1008$ ml | $1.008\ \ell$ |

- For km, kg and $\ell$ there are **3** decimal places of small units ($1000$). For m and cm there are **2** ($100$).
- **Common mistake**: writing $3$ m $5$ cm as $35$ cm or $3.5$ m. It is $305$ cm $= 3.05$ m.`,
      },
      {
        title: String.raw`Comparing and calculating with measurements`,
        body: String.raw`- **Change everything to the same unit first**, usually the smaller unit. Then compare, add or subtract.
- Example: which is longer, $1.2$ m or $108$ cm? $1.2$ m $= 120$ cm, so $1.2$ m is longer.
- Adding: $2$ kg $750$ g $+ 1$ kg $400$ g $= 2750$ g $+ 1400$ g $= 4150$ g $= 4$ kg $150$ g.
- Read a **scale** carefully: find what **one small mark** stands for before you read the pointer or the water level.
- Give the answer in the unit the question asks for.`,
      },
      {
        title: String.raw`Hours, minutes and seconds`,
        body: String.raw`- $1$ h $= 60$ min and $1$ min $= 60$ s. Time does **not** work in tens and hundreds.
- $2$ h $15$ min $= 120 + 15 = 135$ min. And $200$ min $= 3$ h $20$ min, because $200 = 180 + 20$.
- Fractions of an hour: $\frac{1}{2}$ h $= 30$ min, $\frac{1}{4}$ h $= 15$ min, $\frac{3}{4}$ h $= 45$ min.
- **Common mistake**: thinking $1.5$ h is $1$ h $50$ min. It is $1$ h $30$ min, because $0.5$ of $60$ min is $30$ min.
- In the 12-hour clock, a.m. is from midnight to noon, and p.m. is from noon to midnight.`,
      },
      {
        title: String.raw`The 24-hour clock`,
        body: String.raw`The 24-hour clock uses **4 digits** and no a.m. or p.m. The first two digits are the hours after midnight.

- Morning: $7.05$ a.m. $\to 0705$. Keep the hours and put a $0$ in front if needed.
- Afternoon and evening: **add 12** to the hours. $3.20$ p.m. $\to 1520$, and $9.45$ p.m. $\to 2145$.
- Back again: $1830 \to 18 - 12 = 6$, so $6.30$ p.m.
- **Watch out**: $12.15$ p.m. (just after noon) is $1215$, but $12.15$ a.m. (just after midnight) is $0015$.`,
        figure: {
          type: "plot",
          x: [-2.6, 26.6], y: [-2.2, 1.8], height: 130, axes: false,
          polygons: [
            { points: [[0, -0.25], [12, -0.25], [12, 0.25], [0, 0.25]], fill: true, tone: "accent" },
            { points: [[12, -0.25], [24, -0.25], [24, 0.25], [12, 0.25]], fill: true, tone: "warn" },
          ],
          segments: [0, 3, 6, 9, 12, 15, 18, 21, 24].map((h) => ({ from: [h, -0.45], to: [h, 0.45], tone: "ink", thin: h % 6 !== 0 })),
          labels: [
            T(0, 0.45, "0000", "n"), T(6, 0.45, "0600", "n"), T(12, 0.45, "1200", "n"), T(18, 0.45, "1800", "n"), T(24, 0.45, "2400", "n"),
            S(0, -0.45, "12 midnight", "s"), S(6, -0.45, "6 a.m.", "s"), S(12, -0.45, "12 noon", "s"), S(18, -0.45, "6 p.m.", "s"), S(24, -0.45, "12 midnight", "s"),
            S(6, -1.55, "a.m.", "c", "accent"), S(18, -1.55, "p.m.: add 12 to the hours", "c", "warn"),
          ],
          caption: String.raw`One day: the 24-hour clock above, the 12-hour clock below. Midnight is usually written $0000$.`,
          alt: "A timeline of one day from midnight to midnight. Above it are 24-hour times 0000, 0600, 1200, 1800 and 2400. Below are 12 midnight, 6 a.m., 12 noon, 6 p.m. and 12 midnight. The morning half is a.m. and the afternoon and evening half is p.m.",
        },
      },
      {
        title: String.raw`Finding a duration, a start time or an end time`,
        body: String.raw`Draw a **timeline** and jump in easy steps: first to the next **whole hour**, then in whole hours, then the minutes that are left.

- Example: from $9.40$ p.m. to $1.15$ a.m. is $20$ min $+ 2$ h $+ 1$ h $15$ min $= 3$ h $35$ min.
- If the time passes **midnight**, stop at midnight first ($2400$ / $0000$). The day changes.
- Finding an end time: add the hours first, then the minutes. Finding a start time: count backwards.
- **Common mistake**: subtracting times like ordinary numbers. $1015 - 0940$ is **not** $75$ min; it is $35$ min.`,
        figure: {
          type: "plot",
          x: [-1.8, 12.6], y: [-1.2, 2.2], height: 150, axes: false,
          segments: [{ from: [-0.5, 0], to: [11.5, 0], tone: "ink" }].concat([0, 1, 7, 10.75].map((x) => ({ from: [x, -0.18], to: [x, 0.18], tone: "ink" }))),
          curves: [hop(0, 1, 0.7), hop(1, 7, 1.3), hop(7, 10.75, 1.3)],
          labels: [
            S(0.5, 0.7, "20 min", "n", "accent"), S(4, 1.3, "2 h", "n", "accent"), S(8.875, 1.3, "1 h 15 min", "n", "accent"),
            S(0, -0.18, "9.40 p.m.", "sw"), S(1, -0.18, "10 p.m.", "se"), S(7, -0.18, "12 midnight", "s"), S(10.75, -0.18, "1.15 a.m.", "s"),
          ],
          caption: String.raw`$20$ min $+ 2$ h $+ 1$ h $15$ min $= 3$ h $35$ min`,
          alt: "A timeline from 9.40 p.m. to 1.15 a.m. Jumps above it: 20 minutes to 10 p.m., 2 hours to midnight, then 1 hour 15 minutes to 1.15 a.m.",
        },
      },
      {
        title: String.raw`Money`,
        body: String.raw`- $\$1 = 100$ cents. Write money with **2 decimal places**: $\$3.50$, not $\$3.5$.
- Dollars to cents: multiply by $100$. $\$4.05 = 405$ cents. Cents to dollars: divide by $100$. $60$ cents $= \$0.60$.
- **Common mistake**: $5$ cents is $\$0.05$, not $\$0.5$ (that is $50$ cents).
- **Change** $=$ amount paid $-$ cost.
- To compare buys, find the cost of **one** item (or of the same number of items) for each.`,
      },
      {
        title: String.raw`Measurement word problems: draw a model`,
        body: String.raw`For "more than", "altogether" and "equal parts" problems, draw a bar model with the **amounts in the same unit**.

- Example: Ali and Ben have $\$12.40$ altogether. Ben has $\$3.60$ more than Ali.
- Take away the extra: $2$ units $= \$12.40 - \$3.60 = \$8.80$. So Ali has $1$ unit $= \$4.40$, and Ben has $\$4.40 + \$3.60 = \$8.00$.
- For "a full box" problems: the **difference** in mass between two weighings is the mass of the items taken out.
- Always write a statement with the unit at the end.`,
        figure: {
          type: "plot",
          x: [-1.6, 10.6], y: [-0.9, 2.6], equal: true, axes: false,
          polygons: [
            { points: [[0, 1.4], [4.4, 1.4], [4.4, 2.2], [0, 2.2]], fill: true, tone: "accent" },
            { points: [[0, 0], [4.4, 0], [4.4, 0.8], [0, 0.8]], fill: true, tone: "accent" },
            { points: [[4.4, 0], [8, 0], [8, 0.8], [4.4, 0.8]], fill: true, tone: "warn" },
          ],
          segments: [
            { from: [8.6, 2.2], to: [8.6, 0], tone: "ink" },
            { from: [8.4, 2.2], to: [8.6, 2.2], tone: "ink" },
            { from: [8.4, 0], to: [8.6, 0], tone: "ink" },
          ],
          labels: [
            T(0, 1.8, "Ali", "w"), T(0, 0.4, "Ben", "w"),
            S(2.2, 1.8, "1 unit"), S(2.2, 0.4, "1 unit"), S(6.2, 0, "$3.60", "s", "warn"), T(8.6, 1.1, "$12.40", "e"),
          ],
          caption: String.raw`Ben's bar is Ali's bar plus the extra $\$3.60$.`,
          alt: "A bar model. Ali's bar is one unit. Ben's bar is one unit plus an extra part of $3.60. A bracket on the right shows both bars together are $12.40.",
        },
      },
    ],
    archetypes: [
      {
        id: "M1-unit-conversion",
        name: String.raw`Converting units: compound units and decimals`,
        tests: String.raw`Changing between compound units, the smaller unit and decimals of the bigger unit for length, mass and volume. Watch for a zero place holder, as in 3 kg 40 g.`,
        questions: [
          {
            stem: String.raw`$3$ kg $40$ g $=$ ________ g`,
            calculator: false,
            marks: 1,
            choices: [String.raw`340`, String.raw`3040`, String.raw`3400`, String.raw`30 040`],
          },
          {
            stem: String.raw`Fill in the blanks.`,
            calculator: false,
            parts: [
              { label: "(a)", text: String.raw`$2.06\ \ell =$ ________ ml`, marks: 1 },
              { label: "(b)", text: String.raw`$4805$ m $=$ ________ km (give your answer as a decimal)`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M1-compare-read-scales",
        name: String.raw`Comparing measurements and reading scales`,
        tests: String.raw`Ordering measurements given in different units by changing them to the same unit, and reading a scale (a measuring beaker or weighing scale) by first finding the value of one small division.`,
        questions: [
          {
            stem: String.raw`Which one of the following is the heaviest?`,
            calculator: false,
            marks: 1,
            choices: [String.raw`$1.3$ kg`, String.raw`$1$ kg $250$ g`, String.raw`$1035$ g`, String.raw`$1.29$ kg`],
          },
          {
            stem: String.raw`The diagram shows the water in a measuring beaker.`,
            calculator: false,
            figure: {
              type: "plot",
              x: [-1.4, 7.4], y: [-0.8, 11.2], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [4, 0], [4, 6.5], [0, 6.5]], fill: true, tone: "accent" }],
              segments: [
                { from: [0, 10.6], to: [0, 0], tone: "ink" },
                { from: [0, 0], to: [4, 0], tone: "ink" },
                { from: [4, 0], to: [4, 10.6], tone: "ink" },
              ].concat(Array.from({ length: 20 }, (_, i) => {
                const y = 0.5 * (i + 1), major = (i + 1) % 4 === 0;
                return { from: [4 - (major ? 0.9 : (i + 1) % 2 === 0 ? 0.6 : 0.35), y], to: [4, y], tone: "ink", thin: !major };
              })),
              labels: [T(4, 2, "200 ml", "e"), T(4, 4, "400 ml", "e"), T(4, 6, "600 ml", "e"), T(4, 8, "800 ml", "e"), T(4, 10, "1 ℓ", "e")],
              alt: "A measuring beaker marked from 0 to 1 litre. Labels are at 200 ml, 400 ml, 600 ml, 800 ml and 1 litre, with 4 small divisions between labels. The water level is one small division above the 600 ml mark.",
            },
            parts: [
              { label: "(a)", text: String.raw`How much water is in the beaker? Give your answer in ml.`, marks: 1 },
              { label: "(b)", text: String.raw`Mrs Lee pours out 350 ml of the water. How much more water must she then add so that the beaker holds exactly $1\ \ell$? Give your answer in ml.`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M1-24-hour-clock",
        name: String.raw`The 24-hour clock and timetables`,
        tests: String.raw`Changing between the 12-hour and 24-hour clock (including just after noon and midnight), reading a clock face, and reading a timetable to find journey times and the next train or bus.`,
        questions: [
          {
            stem: String.raw`The clock shows the time Mei Ling finished her homework one evening. What is this time in the 24-hour clock?`,
            calculator: false,
            marks: 1,
            figure: Object.assign({ type: "plot", x: [-2.4, 2.4], y: [-2.4, 2.4], equal: true, axes: false, alt: "A clock face with numbers 1 to 12. The minute hand points at 7 and the hour hand is just past halfway between 8 and 9." }, clock(8, 35)),
            choices: [String.raw`0835`, String.raw`1935`, String.raw`2035`, String.raw`2135`],
          },
          {
            stem: String.raw`The table shows part of a train timetable.

| Station | Train A | Train B | Train C |
| --- | --- | --- | --- |
| Ashton | 0745 | 1020 | 1415 |
| Bayview | 0812 | 1047 | 1442 |
| Cedar Hill | 0905 | 1140 | 1535 |
| Dunmore | 0950 | 1225 | 1620 |`,
            parts: [
              { label: "(a)", text: String.raw`How long does Train A take to travel from Ashton to Dunmore? Give your answer in hours and minutes.`, marks: 1 },
              { label: "(b)", text: String.raw`Raju reaches Bayview station at 10.35 a.m. He takes the next train to Dunmore. At what time does he reach Dunmore? Give your answer in the 12-hour clock, using a.m. or p.m.`, marks: 1 },
              { label: "(c)", text: String.raw`How long is it from the time Raju reaches Bayview station to the time he reaches Dunmore? Give your answer in hours and minutes.`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M1-durations",
        name: String.raw`Durations, start times and end times`,
        tests: String.raw`Finding a duration, a start time or an end time given the other two, including times that pass noon or midnight (when the day changes).`,
        questions: [
          {
            stem: String.raw`A concert started at 7.45 p.m. and ended at 10.20 p.m. How long was the concert? Give your answer in hours and minutes.`,
            calculator: false,
            marks: 2,
          },
          {
            stem: String.raw`A plane left Singapore at 2250 on Monday. The flight took 13 h 35 min. (All times are Singapore time.)`,
            parts: [
              { label: "(a)", text: String.raw`At what time did the plane land? Give your answer in the 24-hour clock and state the day.`, marks: 2 },
              { label: "(b)", text: String.raw`Mr Ong left his home at 1955 on Monday to catch this plane. How much time passed from when he left home to when the plane landed? Give your answer in hours and minutes.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M1-money",
        name: String.raw`Money in decimal notation`,
        tests: String.raw`Changing between dollars and cents, and adding, subtracting and multiplying amounts of money, such as the change from a note after buying several items.`,
        questions: [
          {
            stem: String.raw`Which of the following is the same as 4005 cents?`,
            calculator: false,
            marks: 1,
            choices: [String.raw`\$4.05`, String.raw`\$40.05`, String.raw`\$40.50`, String.raw`\$400.50`],
          },
          {
            stem: String.raw`Mrs Tan bought 3 books at \$12.85 each. She paid with a \$50 note. How much change did she receive?`,
            calculator: false,
            marks: 2,
            choices: [String.raw`\$11.45`, String.raw`\$11.55`, String.raw`\$12.45`, String.raw`\$38.55`],
          },
        ],
      },
      {
        id: "M1-measurement-problems",
        name: String.raw`Measurement word problems`,
        tests: String.raw`Multi-step problems with length, mass or volume in mixed units: sharing liquid into containers, cutting lengths, and finding the mass of one item or an empty container from two weighings.`,
        questions: [
          {
            stem: String.raw`A jug contains 2 $\ell$ 250 ml of orange juice. Siti pours the juice into 6 cups. Each cup holds 280 ml of juice. How much juice is left in the jug? Give your answer in ml.`,
            calculator: false,
            marks: 2,
          },
          {
            stem: String.raw`A box containing 12 identical cans of beans has a mass of 5.4 kg. After 5 cans are taken out, the box and the remaining cans have a mass of 3.4 kg.`,
            parts: [
              { label: "(a)", text: String.raw`Find the mass of one can. Give your answer in grams.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the mass of the empty box. Give your answer in kilograms.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M1-money-problems",
        name: String.raw`Money word problems: charges and models`,
        tests: String.raw`Structured money problems: charges that depend on time (such as car park rates "for every half hour or part of it"), and "more than" problems solved with a bar model.`,
        questions: [
          {
            stem: String.raw`The table shows the parking charges at a car park.

| Time parked | Charge |
| --- | --- |
| First hour | \$1.50 |
| Every additional half hour or part of it | \$0.80 |

Mr Lim parked his car there from 0935 to 1250 on the same day. How much did he pay?`,
            marks: 3,
          },
          {
            stem: String.raw`Ali spent \$86.40 on 3 shirts and 2 ties. Each shirt cost \$6.30 more than each tie.`,
            parts: [
              { label: "(a)", text: String.raw`Find the cost of one tie.`, marks: 3 },
              { label: "(b)", text: String.raw`How much would 2 shirts and 3 ties cost?`, marks: 1 },
            ],
          },
        ],
      },
    ],
  });
})();
