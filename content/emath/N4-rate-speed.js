H2.addTopic({
  id: "N4",
  title: "Rate and Speed",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Average rate and average speed, converting units such as km/h to m/s, and reading distance–time and speed–time graphs.`,
  syllabus: {
    include: [
      String.raw`average rate and average speed`,
      String.raw`conversion of units (e.g. km/h to m/s)`,
      String.raw`interpreting and analysing distance–time and speed–time graphs (from the syllabus section *Problems in real-world contexts*)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Rates`,
      body: String.raw`A **rate** compares two quantities of **different** kinds: how much of one quantity for each unit of another.

- Examples: 12 litres per minute (12 L/min), \$18 per hour, 6.4 litres per 100 km, 0.8 g/cm$^3$.
- The units tell you the calculation: L/min means litres $\div$ minutes.
- **Average rate** $= \dfrac{\text{total amount}}{\text{total time}}$ (or total of whatever the rate is "per").
- **Combined rates**: two taps filling one tank together have a combined rate equal to the sum of their rates. Work with the rates, not the times — $\frac{1}{2}(40 + 60)$ minutes is not the time for two taps together.
- Best value: compare the price **per unit** (per 100 g, per litre) for each option.`,
    },
    {
      title: String.raw`Speed, distance and time (memorise)`,
      body: String.raw`$$\text{speed} = \frac{\text{distance}}{\text{time}}, \qquad \text{distance} = \text{speed} \times \text{time}, \qquad \text{time} = \frac{\text{distance}}{\text{speed}}$$

$$\text{average speed} = \frac{\text{total distance travelled}}{\text{total time taken}}$$

- Total time **includes** stops and rests.
- Average speed is **not** the average of the speeds. Going 24 km at 12 km/h and back at 8 km/h takes $\frac{24}{12} + \frac{24}{8} = 5$ h, so the average speed is $48 \div 5 = 9.6$ km/h, not 10 km/h. The journey spends longer at the slower speed.
- Keep units consistent: km with hours, m with seconds.`,
    },
    {
      title: String.raw`Converting units`,
      body: String.raw`**Speed**: $1$ km/h $= \dfrac{1000\text{ m}}{3600\text{ s}} = \dfrac{1}{3.6}$ m/s.

- km/h $\to$ m/s: divide by 3.6. $\ 90$ km/h $= 25$ m/s.
- m/s $\to$ km/h: multiply by 3.6. $\ 8$ m/s $= 28.8$ km/h.
- If you forget, convert the top and bottom separately: $\dfrac{90 \times 1000\text{ m}}{3600\text{ s}}$.

**Other units** (memorise):

| Length | Area | Volume and capacity |
|---|---|---|
| 1 km $= 1000$ m | 1 m$^2$ $= 10\,000$ cm$^2$ | 1 m$^3$ $= 1\,000\,000$ cm$^3$ |
| 1 m $= 100$ cm | 1 km$^2$ $= 1\,000\,000$ m$^2$ | 1 litre $= 1000$ cm$^3$ |
| 1 cm $= 10$ mm | 1 hectare $= 10\,000$ m$^2$ | 1 m$^3$ $= 1000$ litres |`,
      figure: {
        type: "plot",
        x: [0, 10], y: [0.2, 3.0], equal: true, axes: false,
        polygons: [
          { points: [[0.6, 1.1], [3.2, 1.1], [3.2, 2.1], [0.6, 2.1]], fill: true, tone: "accent" },
          { points: [[6.8, 1.1], [9.4, 1.1], [9.4, 2.1], [6.8, 2.1]], fill: true, tone: "good" },
        ],
        segments: [
          { from: [3.5, 1.85], to: [6.5, 1.85], arrow: true, tone: "ink" },
          { from: [6.5, 1.35], to: [3.5, 1.35], arrow: true, tone: "ink" },
        ],
        labels: [
          { x: 1.9, y: 1.6, text: "km/h", style: "bold" },
          { x: 8.1, y: 1.6, text: "m/s", style: "bold" },
          { x: 5.0, y: 1.95, text: "÷ 3.6", pos: "n", style: "small" },
          { x: 5.0, y: 1.25, text: "× 3.6", pos: "s", style: "small" },
        ],
        caption: String.raw`Divide by 3.6 to go from km/h to m/s; multiply by 3.6 to go back. A speed in m/s is always the smaller number.`,
        alt: "Two boxes, km/h and m/s. An arrow from km/h to m/s is labelled divide by 3.6; an arrow back is labelled multiply by 3.6.",
      },
    },
    {
      title: String.raw`Time and the 24-hour clock`,
      body: String.raw`- Minutes to hours: divide by 60. $\ 2$ h 24 min $= 2 + \frac{24}{60} = 2.4$ h. A common error is writing 2.24 h.
- Hours to minutes: $0.45$ h $= 0.45 \times 60 = 27$ min.
- 24-hour clock: 3.15 p.m. is 15 15; 3.15 a.m. is 03 15. Midnight is 00 00.
- Time taken across midnight: count up to 00 00 and then on. From 23 35 to 02 10 is $25$ min $+ 2$ h $10$ min $= 2$ h $35$ min.
- Give a final time in the form the question uses (24-hour clock or a.m./p.m.).`,
    },
    {
      title: String.raw`Distance–time graphs`,
      body: String.raw`The **gradient** of a distance–time graph is the **speed**.

- Straight line: constant speed. Steeper line: faster.
- Horizontal line: the object is **at rest** (distance not changing).
- Line going back down: travelling back towards the starting point.
- Two journeys on one graph: where the lines cross, the two objects are at the same place at the same time (they meet or pass).
- Read scales carefully. If time is in minutes, change to hours before giving a speed in km/h.`,
      figure: {
        type: "plot",
        x: [-0.4, 6.6], y: [-0.5, 5.2], height: 220,
        axisLabels: ["t", "distance"],
        segments: [
          { from: [0, 0], to: [2, 4], tone: "accent" },
          { from: [2, 4], to: [3.2, 4], tone: "accent" },
          { from: [3.2, 4], to: [6, 0], tone: "accent" },
        ],
        labels: [
          { x: 1.15, y: 1.25, text: "speed = gradient", pos: "e", style: "small" },
          { x: 2.6, y: 4.1, text: "at rest", pos: "n", style: "small", tone: "warn" },
          { x: 4.8, y: 2.0, text: "returning", pos: "e", style: "small" },
        ],
        caption: String.raw`Out at a constant speed, a stop (horizontal), then back to the start more slowly (a gentler slope).`,
        alt: "Distance–time graph: a straight line rising from the origin, then a horizontal section labelled at rest, then a straight line falling back to zero distance with a smaller gradient.",
      },
    },
    {
      title: String.raw`Speed–time graphs`,
      body: String.raw`On a speed–time graph:

- The **gradient** is the **acceleration**: $\text{acceleration} = \dfrac{\text{change in speed}}{\text{time taken}}$, in m/s$^2$. A negative gradient is a **deceleration** (retardation).
- Horizontal line: constant speed (zero acceleration).
- The **area under the graph** is the **distance travelled**. Split it into triangles, rectangles and trapeziums (area of trapezium $= \frac{1}{2}(a + b)h$, memorise).
- Average speed over a journey $=$ total area $\div$ total time.
- Do not confuse the two graphs: on a distance–time graph a horizontal line means "stopped"; on a speed–time graph it means "moving at a steady speed".`,
      figure: {
        type: "plot",
        x: [-0.5, 8.8], y: [-0.6, 5.4], height: 220,
        axisLabels: ["t", "v"],
        shade: [{ upper: "x => x < 2 ? 2*x : (x < 6 ? 4 : 4 - 2*(x - 6))", from: 0, to: 8, tone: "accent" }],
        segments: [
          { from: [0, 0], to: [2, 4], tone: "accent" },
          { from: [2, 4], to: [6, 4], tone: "accent" },
          { from: [6, 4], to: [8, 0], tone: "accent" },
        ],
        labels: [
          { x: 1.0, y: 4.4, text: "acceleration", pos: "c", style: "small" },
          { x: 4, y: 4.15, text: "constant speed", pos: "n", style: "small" },
          { x: 7.2, y: 4.4, text: "deceleration", pos: "c", style: "small" },
          { x: 4, y: 1.8, text: "area = distance", style: "small", tone: "accent" },
        ],
        caption: String.raw`Speeding up, steady speed, slowing to rest. The shaded trapezium is the total distance travelled.`,
        alt: "Speed–time graph shaped like a trapezium: speed rises in a straight line from zero, stays constant, then falls in a straight line to zero. The region under the graph is shaded and labelled area = distance.",
      },
    },
    {
      title: String.raw`Real-world rate problems`,
      body: String.raw`Paper 2 often ends with a travel plan, a timetable, a fuel or water bill, or a choice between options.

- Pull the numbers you need out of the table or text and write each step with units.
- Fuel consumption: "6.4 L per 100 km" means fuel used $= \frac{\text{distance}}{100} \times 6.4$ litres.
- Flow rate: time to fill $= \dfrac{\text{volume}}{\text{rate}}$. Change m$^3$ to litres first if the rate is in litres.
- Work out arrival times by adding the journey time to the departure time, then check the answer makes sense (did you cross midnight?).
- End with a clear sentence that answers the question asked.`,
    },
  ],
  archetypes: [
    {
      id: "N4-average-speed",
      name: String.raw`Average speed over a journey with several stages`,
      tests: String.raw`Finding total distance and total time for a journey in stages, then the average speed; recognising that average speed is not the mean of the speeds.`,
      questions: [
        {
          stem: String.raw`A car travels 120 km at an average speed of 80 km/h. It then travels a further 90 km at an average speed of 60 km/h.`,
          parts: [
            { label: "(a)", text: String.raw`Find the total time taken for the whole journey.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the average speed of the car for the whole journey.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Siti cycles from her home to a park, 30 km away, at an average speed of 18 km/h. She cycles back home along the same route at an average speed of 12 km/h.`,
          parts: [
            { label: "(a)", text: String.raw`Find the average speed for the whole journey.`, marks: 2 },
            { label: "(b)", text: String.raw`Her friend says the average speed is $\frac{18 + 12}{2} = 15$ km/h. Explain why this is wrong.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N4-unit-conversion",
      name: String.raw`Converting units of speed and other rates`,
      tests: String.raw`Changing km/h to m/s and back, and converting compound units such as litres per second to m$^3$ per hour or g/cm$^3$ to kg/m$^3$.`,
      questions: [
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Express 72 km/h in m/s.`, marks: 1 },
            { label: "(b)", text: String.raw`Express 15 m/s in km/h.`, marks: 1 },
            { label: "(c)", text: String.raw`A sprinter runs 100 m in 10.4 s. Find his average speed in km/h, correct to 3 significant figures.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Water flows through a pipe at a rate of 2.5 litres per second. Express this rate in m$^3$ per hour.`, marks: 2 },
            { label: "(b)", text: String.raw`The density of a type of oil is 0.8 g/cm$^3$. Express this density in kg/m$^3$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-rates-real-world",
      name: String.raw`Rates of flow, work and fuel consumption`,
      tests: String.raw`Using a rate to find a time, a quantity or a cost; combining two rates working together; changing units of volume along the way.`,
      questions: [
        {
          stem: String.raw`An empty tank in the shape of a cuboid measures 1.2 m by 0.8 m by 0.5 m.`,
          parts: [
            { label: "(a)", text: String.raw`Find the capacity of the tank, in litres.`, marks: 1 },
            { label: "(b)", text: String.raw`Tap A fills the tank at a rate of 12 litres per minute. Find the time taken for tap A alone to fill the tank.`, marks: 1 },
            { label: "(c)", text: String.raw`Tap B fills water at a rate of 8 litres per minute. Find the time taken to fill the empty tank when taps A and B are both turned on.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Mr Goh's car uses 6.4 litres of petrol for every 100 km travelled. Petrol costs \$2.85 per litre.`,
          parts: [
            { label: "(a)", text: String.raw`Find the cost of the petrol used on a journey of 350 km.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the greatest distance the car can travel on \$50 worth of petrol, correct to the nearest kilometre.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-timetable",
      name: String.raw`Timetables and the 24-hour clock`,
      tests: String.raw`Finding journey times from departure and arrival times (including across midnight), converting hours and minutes to decimal hours, and finding speeds or arrival times.`,
      questions: [
        {
          stem: String.raw`An overnight train leaves City P at 22 47 and arrives at City Q at 01 23 the next day. The distance between the two cities is 312 km.`,
          parts: [
            { label: "(a)", text: String.raw`Find the time taken for the journey, in hours and minutes.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the average speed of the train, in km/h.`, marks: 2 },
            { label: "(c)", text: String.raw`The return train leaves City Q at 06 15 and travels at an average speed of 104 km/h. Find the time at which it arrives at City P.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N4-distance-time-graph",
      name: String.raw`Interpreting distance–time graphs`,
      tests: String.raw`Reading speeds as gradients, rest times as horizontal sections, average speed for the whole journey, and where two journeys on one graph meet.`,
      questions: [
        {
          stem: String.raw`Ravi cycles from his home to a beach and back. The diagram shows the distance–time graph of his journey. He leaves home at 09 00.`,
          figure: {
            type: "plot",
            x: [-14, 134], y: [0, 21.5], height: 260,
            axisLabels: ["", "distance from home (km)"], originLabel: false,
            segments: [
              { from: [0, 12], to: [30, 12], dashed: true, thin: true, tone: "muted" },
              { from: [0, 18], to: [75, 18], dashed: true, thin: true, tone: "muted" },
              { from: [0, 0], to: [30, 12], tone: "accent" },
              { from: [30, 12], to: [45, 12], tone: "accent" },
              { from: [45, 12], to: [75, 18], tone: "accent" },
              { from: [75, 18], to: [120, 0], tone: "accent" },
            ],
            xTicks: [0, 15, 30, 45, 60, 75, 90, 105, 120].map((m) => ({ x: m, label: { 0: "09 00", 30: "09 30", 60: "10 00", 90: "10 30", 120: "11 00" }[m] || "" })),
            yTicks: [3, 6, 9, 12, 15, 18].map((k) => ({ y: k, label: String(k) })),
            labels: [{ x: 129, y: 1.2, text: "Time", pos: "c", style: "small" }],
            alt: "Distance–time graph. From 09 00 the line rises to 12 km at 09 30, stays at 12 km until 09 45, rises to 18 km at 10 15, then falls back to 0 km at 11 00. Time is marked every 15 minutes and distance every 3 km.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find Ravi's speed, in km/h, for the first 30 minutes.`, marks: 1 },
            { label: "(b)", text: String.raw`For how many minutes did Ravi stop?`, marks: 1 },
            { label: "(c)", text: String.raw`Find his speed, in km/h, on the way back home.`, marks: 2 },
            { label: "(d)", text: String.raw`Find his average speed for the whole journey, in km/h.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Town A and town B are 150 km apart. A lorry leaves A at 09 00 and travels to B at a constant speed. A car leaves B at 09 30 and travels to A at a constant speed of 90 km/h. The diagram shows the distance–time graphs of both journeys.`,
          figure: {
            type: "plot",
            x: [-16, 162], y: [0, 168], height: 270,
            axisLabels: ["", "distance from A (km)"], originLabel: false,
            segments: [
              { from: [0, 0], to: [150, 150], tone: "accent" },
              { from: [30, 150], to: [130, 0], tone: "good" },
            ],
            xTicks: [0, 30, 60, 90, 120, 150].map((m) => ({ x: m, label: ["09 00", "09 30", "10 00", "10 30", "11 00", "11 30"][m / 30] })),
            yTicks: [25, 50, 75, 100, 125, 150].map((k) => ({ y: k, label: String(k) })),
            labels: [
              { x: 125, y: 118, text: "lorry", pos: "se", style: "small", tone: "accent" },
              { x: 46, y: 126, text: "car", pos: "ne", style: "small", tone: "good" },
              { x: 156, y: 9, text: "Time", pos: "c", style: "small" },
            ],
            alt: "Distance from A against time from 09 00 to 11 30. The lorry's line rises from 0 km at 09 00 to 150 km at 11 30. The car's line falls from 150 km at 09 30 to 0 km. The two lines cross.",
          },
          parts: [
            { label: "(a)", text: String.raw`Use the graph to find the speed of the lorry.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the time at which the car arrives at A.`, marks: 2 },
            { label: "(c)", text: String.raw`Calculate the time at which the lorry and the car pass each other, and their distance from A at that time.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N4-speed-time-graph",
      name: String.raw`Interpreting speed–time graphs`,
      tests: String.raw`Finding acceleration and deceleration from gradients, distance from the area under the graph, average speed, and an unknown speed from a given total distance.`,
      questions: [
        {
          stem: String.raw`The diagram shows the speed–time graph of a car over 34 seconds. At time $t$ seconds its speed is $v$ m/s. The car starts from rest, reaches a speed of 12 m/s after 8 seconds, travels at this speed until $t = 28$ and then slows down uniformly to rest at $t = 34$.`,
          figure: {
            type: "plot",
            x: [-3, 37.5], y: [-1.8, 15], height: 230,
            axisLabels: ["t", "speed (m/s)"], originLabel: "sw",
            segments: [
              { from: [0, 0], to: [8, 12], tone: "accent" },
              { from: [8, 12], to: [28, 12], tone: "accent" },
              { from: [28, 12], to: [34, 0], tone: "accent" },
              { from: [0, 12], to: [8, 12], dashed: true, thin: true, tone: "muted" },
              { from: [8, 12], to: [8, 0], dashed: true, thin: true, tone: "muted" },
              { from: [28, 12], to: [28, 0], dashed: true, thin: true, tone: "muted" },
            ],
            xTicks: [{ x: 8, label: "8" }, { x: 28, label: "28" }, { x: 34, label: "34" }],
            yTicks: [{ y: 12, label: "12" }],
            alt: "Speed–time graph: a straight line from the origin up to 12 m/s at t = 8, a horizontal line at 12 m/s until t = 28, then a straight line down to 0 at t = 34.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the acceleration of the car during the first 8 seconds.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the total distance travelled by the car.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the average speed of the car for the 34 seconds, correct to 3 significant figures.`, marks: 1 },
            { label: "(d)", text: String.raw`Find the speed of the car when $t = 31$.`, marks: 2 },
            { label: "(e)", text: String.raw`Express the greatest speed of the car in km/h.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A train starts from rest and accelerates uniformly for 40 s to a speed of $V$ m/s. It travels at this speed for 2 minutes and then decelerates uniformly to rest in 20 s. The diagram shows its speed–time graph, where $t$ is the time in seconds. The total distance travelled is 3.3 km.`,
          figure: {
            type: "plot",
            x: [-16, 198], y: [-4.5, 30], height: 220,
            axisLabels: ["t", "speed (m/s)"], originLabel: "sw",
            segments: [
              { from: [0, 0], to: [40, 22], tone: "accent" },
              { from: [40, 22], to: [160, 22], tone: "accent" },
              { from: [160, 22], to: [180, 0], tone: "accent" },
              { from: [0, 22], to: [40, 22], dashed: true, thin: true, tone: "muted" },
              { from: [40, 22], to: [40, 0], dashed: true, thin: true, tone: "muted" },
              { from: [160, 22], to: [160, 0], dashed: true, thin: true, tone: "muted" },
            ],
            xTicks: [{ x: 40, label: "40" }, { x: 160, label: "160" }, { x: 180, label: "180" }],
            yTicks: [{ y: 22, label: "V" }],
            caption: String.raw`Not drawn to scale`,
            alt: "Speed–time graph shaped like a trapezium: from rest up to speed V at t = 40, constant speed V until t = 160, then down to rest at t = 180.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $V$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the deceleration of the train.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the two times at which the speed of the train is 11 m/s.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
