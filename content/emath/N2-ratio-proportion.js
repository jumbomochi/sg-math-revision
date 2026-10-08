H2.addTopic({
  id: "N2",
  title: "Ratio and Proportion",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Simplifying and combining ratios, sharing in a ratio, map scales for distance and area, and direct and inverse proportion.`,
  syllabus: {
    include: [
      String.raw`ratios involving rational numbers`,
      String.raw`writing a ratio in its simplest form`,
      String.raw`map scales (distance and area)`,
      String.raw`direct and inverse proportion`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Ratios and simplest form`,
      body: String.raw`A ratio $a : b$ compares two quantities **of the same kind in the same units**. Multiplying or dividing every term by the same non-zero number gives an equivalent ratio.

**Simplest form** means whole numbers with no common factor:

- Fractions: multiply every term by the LCM of the denominators. $\ 1\frac{1}{3} : 2\frac{2}{5} = \frac{4}{3} : \frac{12}{5} = 20 : 36 = 5 : 9$.
- Decimals: multiply by a power of 10. $\ 0.45 : 1.2 = 45 : 120 = 3 : 8$.
- Units: convert first. $\ 450\text{ g} : 1.2\text{ kg} = 450 : 1200 = 3 : 8$. A ratio has **no units**.

The order matters: "boys to girls" is not the same as "girls to boys".`,
    },
    {
      title: String.raw`Ratio, fraction and equation forms`,
      body: String.raw`These statements all say the same thing:

$$a : b = 2 : 3 \iff \frac{a}{b} = \frac{2}{3} \iff 3a = 2b.$$

- If $a : b = 2 : 3$, then $a$ is $\frac{2}{5}$ of the total and $b$ is $\frac{3}{5}$ of the total.
- To find $a : b$ from an equation such as $4a = 7b$, divide both sides by $4b$: $\frac{a}{b} = \frac{7}{4}$, so $a : b = 7 : 4$.
- To find a ratio such as $(a + 2b) : (a - b)$, put $a = 7k$, $b = 4k$ and simplify.`,
    },
    {
      title: String.raw`Combining ratios`,
      body: String.raw`To combine $A : B$ and $B : C$ into $A : B : C$, make the **common term** ($B$) the same in both, using the LCM.

| | $A$ | $B$ | $C$ |
|---|---|---|---|
| $A : B = 2 : 3$ | 2 | 3 | |
| $B : C = 4 : 5$ | | 4 | 5 |
| Make $B = 12$ | 8 | 12 | 15 |

So $A : B : C = 8 : 12 : 15$. Never just write $2 : 3 : 4 : 5$ or $2 : 3 : 5$.`,
    },
    {
      title: String.raw`Dividing in a ratio; before-and-after problems`,
      body: String.raw`To share a quantity in the ratio $3 : 5$: there are $3 + 5 = 8$ equal parts. Find one part, then multiply.

**Before-and-after** problems (some people join or leave, money is spent): look for the quantity that **does not change** and write both ratios with the same number of units for it. If both quantities change, let the original amounts be $3k$ and $5k$ and form an equation from the new ratio.

Always check the answer: the new numbers should be whole and give the new ratio.`,
      figure: {
        type: "plot",
        x: [0, 9.8], y: [0.5, 3.6], equal: true, axes: false,
        polygons: [
          ...[0, 1, 2].map((i) => ({ points: [[1.6 + i * 1.05, 2.2], [2.65 + i * 1.05, 2.2], [2.65 + i * 1.05, 2.9], [1.6 + i * 1.05, 2.9]], fill: true, tone: "accent" })),
          ...[0, 1, 2, 3, 4].map((i) => ({ points: [[1.6 + i * 1.05, 0.9], [2.65 + i * 1.05, 0.9], [2.65 + i * 1.05, 1.6], [1.6 + i * 1.05, 1.6]], fill: true, tone: "good" })),
        ],
        segments: [
          { from: [7.25, 2.9], to: [7.25, 0.9], tone: "muted", thin: true },
          { from: [7.55, 2.9], to: [7.55, 0.9], arrow: true, arrowStart: true, thin: true, tone: "muted" },
        ],
        labels: [
          { x: 1.4, y: 2.55, text: "Ali", pos: "w", style: "small" },
          { x: 1.4, y: 1.25, text: "Ben", pos: "w", style: "small" },
          { x: 7.7, y: 1.9, text: "8 units = $240", pos: "e", style: "small" },
          { x: 3.175, y: 3.3, text: "1 unit = $30", style: "small", tone: "accent" },
        ],
        caption: String.raw`Sharing \$240 between Ali and Ben in the ratio $3 : 5$: 8 equal units, so 1 unit $= \$30$, Ali gets \$90 and Ben gets \$150.`,
        alt: "Bar model: Ali's bar has 3 equal boxes and Ben's bar has 5 equal boxes of the same size. Together the 8 units make $240, so 1 unit is $30.",
      },
    },
    {
      title: String.raw`Map scales: distance`,
      body: String.raw`A scale of $1 : n$ means 1 unit on the map stands for $n$ of the **same** units on the ground.

- $1 : 50\,000$ means $1\text{ cm} : 50\,000\text{ cm} = 1\text{ cm} : 500\text{ m} = 1\text{ cm} : 0.5\text{ km}$.
- Unit facts to memorise: $1\text{ m} = 100\text{ cm}$, $1\text{ km} = 1000\text{ m} = 100\,000\text{ cm}$.
- Map length to actual: multiply. Actual to map length: divide.
- To write a scale as $1 : n$ from "4 cm represents 1 km": $4\text{ cm} : 100\,000\text{ cm} = 1 : 25\,000$.`,
    },
    {
      title: String.raw`Map scales: area`,
      body: String.raw`Areas scale by the **square** of the length scale.

If $1\text{ cm}$ represents $0.5\text{ km}$, then $1\text{ cm}^2$ represents $(0.5\text{ km})^2 = 0.25\text{ km}^2$.

- Always write the length scale first, then square it — **do not** square the $1 : n$ ratio in your head and lose a zero.
- $1\text{ km}^2 = 1\,000\,000\text{ m}^2 = 10^{10}\text{ cm}^2$; $1\text{ ha} = 10\,000\text{ m}^2$.
- To find the scale from an area: take the square root of the area ratio to get the length ratio.`,
      figure: [
        {
          type: "plot",
          x: [-0.9, 2.3], y: [-0.7, 1.7], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [1, 0], [1, 1], [0, 1]], fill: true, tone: "accent" }],
          labels: [
            { x: 0.5, y: -0.12, text: "1 cm", pos: "s", style: "small" },
            { x: 1.08, y: 0.5, text: "1 cm", pos: "e", style: "small" },
            { x: 0.5, y: 0.5, text: "1 cm²", style: "small" },
            { x: 0.5, y: 1.35, text: "on the map", style: "small" },
          ],
          alt: "A 1 cm by 1 cm square on a map, area 1 square centimetre.",
        },
        {
          type: "plot",
          x: [-0.9, 2.3], y: [-0.7, 1.7], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [1, 0], [1, 1], [0, 1]], fill: true, tone: "good" }],
          labels: [
            { x: 0.5, y: -0.12, text: "0.5 km", pos: "s", style: "small" },
            { x: 1.08, y: 0.5, text: "0.5 km", pos: "e", style: "small" },
            { x: 0.5, y: 0.5, text: "0.25 km²", style: "small" },
            { x: 0.5, y: 1.35, text: "on the ground", style: "small" },
          ],
          alt: "The same square on the ground, 0.5 km by 0.5 km, area 0.25 square kilometres.",
        },
      ],
    },
    {
      title: String.raw`Direct proportion`,
      body: String.raw`$y$ is **directly proportional** to $x$, written $y \propto x$, when
$$y = kx \quad (k \text{ a non-zero constant}).$$

- When $x$ is doubled, $y$ is doubled. $\frac{y}{x}$ is constant.
- The graph of $y$ against $x$ is a **straight line through the origin**.
- Other forms: $y \propto x^2$ means $y = kx^2$; $y \propto x^3$ means $y = kx^3$; $y \propto \sqrt{x}$ means $y = k\sqrt{x}$. Then the graph of $y$ against $x^2$ (or $x^3$, $\sqrt{x}$) is a straight line through the origin.

**Method**: write the equation with $k$, substitute the given pair to find $k$, write the equation again with the value of $k$, then use it.`,
      figure: [
        {
          type: "plot",
          x: [-0.4, 4.4], y: [-0.5, 4.4], height: 200,
          curves: [{ fn: "x => 0.8*x", domain: [0, 4.3] }],
          labels: [{ x: 2.4, y: 2.6, text: "y = kx", pos: "w", style: "italic", tone: "accent" }],
          caption: String.raw`$y \propto x$: a straight line through $O$.`,
          alt: "Straight line through the origin with positive gradient, labelled y = kx.",
        },
        {
          type: "plot",
          x: [-0.4, 4.4], y: [-0.5, 4.4], height: 200,
          curves: [{ fn: "x => 0.3*x*x", domain: [0, 3.8] }],
          labels: [{ x: 3.2, y: 1.9, text: "y = kx²", pos: "e", style: "italic", tone: "accent" }],
          caption: String.raw`$y \propto x^2$: a curve through $O$, getting steeper.`,
          alt: "Half-parabola y = kx² for x ≥ 0, starting at the origin and getting steeper.",
        },
      ],
    },
    {
      title: String.raw`Inverse proportion`,
      body: String.raw`$y$ is **inversely proportional** to $x$, written $y \propto \dfrac{1}{x}$, when
$$y = \frac{k}{x} \quad \text{or equivalently} \quad xy = k.$$

- When $x$ is doubled, $y$ is halved. The product $xy$ is constant.
- The graph of $y$ against $x$ (for $x > 0$) is a curve that falls and never meets the axes. The graph of $y$ against $\frac{1}{x}$ is a straight line through the origin.
- Other forms: $y \propto \frac{1}{x^2}$ means $y = \frac{k}{x^2}$; $y \propto \frac{1}{\sqrt{x}}$ means $y = \frac{k}{\sqrt{x}}$.
- Workers and time: if all workers work at the same rate, the time taken is inversely proportional to the number of workers. Work out the total "worker-days" first.`,
      figure: {
        type: "plot",
        x: [-0.4, 6.4], y: [-0.5, 5.4], height: 220,
        curves: [{ fn: "x => 4/x", domain: [0.75, 6.3] }],
        labels: [{ x: 5.2, y: 1.5, text: "y = k/x", style: "italic", tone: "accent" }],
        points: [{ x: 1, y: 4, label: "(1, 4)", pos: "e" }, { x: 2, y: 2, label: "(2, 2)", pos: "ne" }, { x: 4, y: 1 }],
        caption: String.raw`$y \propto \frac{1}{x}$ with $k = 4$: doubling $x$ halves $y$, and $xy = 4$ at every point.`,
        alt: "Decreasing curve y = 4/x for x > 0, through the points (1, 4), (2, 2) and (4, 1). It approaches both axes but never meets them.",
      },
    },
    {
      title: String.raw`Effect of a change in one variable`,
      body: String.raw`When $x$ changes by a factor, use the equation to find the factor for $y$ — the value of $k$ is not needed.

| Relationship | $x$ is multiplied by 2 | $x$ is increased by 20% |
|---|---|---|
| $y = kx$ | $y \times 2$ | $y \times 1.2$ |
| $y = kx^2$ | $y \times 4$ | $y \times 1.2^2 = y \times 1.44$ |
| $y = \dfrac{k}{x}$ | $y \times \frac{1}{2}$ | $y \times \frac{1}{1.2}$ |
| $y = \dfrac{k}{x^2}$ | $y \times \frac{1}{4}$ | $y \times \frac{1}{1.44}$ |

Percentage change in $y$ = (multiplier $- 1$) $\times 100\%$. For example, $y \times 1.21$ is a 21% increase; $y \times 0.81$ is a 19% decrease.`,
    },
  ],
  archetypes: [
    {
      id: "N2-simplest-form",
      name: String.raw`Ratios with fractions, decimals and mixed units`,
      tests: String.raw`Writing a ratio in its simplest form after clearing fractions or decimals and converting to the same units; turning an equation such as $3a = 5b$ into a ratio.`,
      questions: [
        {
          stem: String.raw`Express each ratio in its simplest form.`,
          parts: [
            { label: "(a)", text: String.raw`$2\frac{1}{4} : 1\frac{7}{8}$`, marks: 1 },
            { label: "(b)", text: String.raw`$0.45$ kg : 750 g`, marks: 1 },
            { label: "(c)", text: String.raw`1 hour 20 minutes : 45 minutes`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Given that $3a = 5b$,`,
          parts: [
            { label: "(a)", text: String.raw`find the ratio $a : b$,`, marks: 1 },
            { label: "(b)", text: String.raw`find the ratio $(2a + b) : (a - b)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N2-combine-divide",
      name: String.raw`Combining ratios and sharing a quantity`,
      tests: String.raw`Combining two ratios through a common term, sharing an amount in a ratio, and before-and-after problems where the ratio changes.`,
      questions: [
        {
          stem: String.raw`Some money is shared among Amy, Bala and Chloe. The ratio of Amy's share to Bala's share is $3 : 4$. The ratio of Bala's share to Chloe's share is $6 : 5$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the ratio of Amy's share to Bala's share to Chloe's share.`, marks: 1 },
            { label: "(b)", text: String.raw`Chloe receives \$350. Find the total amount of money shared.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In a school choir, the ratio of sopranos to altos is $3 : 5$. After 18 more sopranos join the choir, the ratio of sopranos to altos becomes $6 : 7$. No altos join or leave.`,
          parts: [
            { label: "(a)", text: String.raw`Find the number of altos in the choir.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the total number of members in the choir after the sopranos join.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N2-map-scales",
      name: String.raw`Map scales for distance and area`,
      tests: String.raw`Converting map lengths to actual distances and back, using the squared scale for areas, and finding a scale in the form $1 : n$.`,
      questions: [
        {
          stem: String.raw`A map is drawn to a scale of $1 : 40\,000$.`,
          parts: [
            { label: "(a)", text: String.raw`Complete the statement: 1 cm on the map represents ______ km on the ground.`, marks: 1 },
            { label: "(b)", text: String.raw`The distance between two towns on the map is 7.4 cm. Find the actual distance between the towns, in kilometres.`, marks: 1 },
            { label: "(c)", text: String.raw`A reservoir has an actual area of 4 km$^2$. Find the area of the reservoir on the map, in square centimetres.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows the plan $ABCD$ of a park on a map drawn to a scale of $1 : 20\,000$. On the map, $AB = 6$ cm, $DC = 9$ cm and $AD = 4$ cm. $AB$ is parallel to $DC$, and angle $ADC = 90°$.`,
          figure: {
            type: "plot",
            x: [-1.4, 10.4], y: [-1.1, 5.0], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [9, 0], [6, 4], [0, 4]], fill: true, tone: "good" }],
            rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.4 }, { at: [0, 4], a: [1, 0], b: [0, -1], size: 0.4 }],
            labels: [
              { x: 0, y: 4, text: "A", pos: "nw" },
              { x: 6, y: 4, text: "B", pos: "ne" },
              { x: 9, y: 0, text: "C", pos: "se" },
              { x: 0, y: 0, text: "D", pos: "sw" },
              { x: 3, y: 4.05, text: "6 cm", pos: "n", style: "small" },
              { x: 4.5, y: -0.05, text: "9 cm", pos: "s", style: "small" },
              { x: -0.1, y: 2, text: "4 cm", pos: "w", style: "small" },
            ],
            alt: "A right trapezium ABCD: AB = 6 cm along the top, DC = 9 cm along the bottom, AD = 4 cm on the left, with right angles at A and D. BC is the slanted side.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the actual length of the side $DC$ of the park, in kilometres.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the actual area of the park, in square kilometres.`, marks: 3 },
            { label: "(c)", text: String.raw`On a second map, the area of the park is 4.8 cm$^2$. Find the scale of the second map, in the form $1 : n$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N2-direct-proportion",
      name: String.raw`Direct proportion, including squares and cubes`,
      tests: String.raw`Forming $y = kx^n$ from words, finding $k$ from one pair of values, then finding a missing value. Often in a context such as mass and radius.`,
      questions: [
        {
          stem: String.raw`$y$ is directly proportional to the square of $x$. When $x = 4$, $y = 40$.`,
          parts: [
            { label: "(a)", text: String.raw`Find an equation connecting $y$ and $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the value of $y$ when $x = 6$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the positive value of $x$ when $y = 160$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The mass, $m$ grams, of a solid metal ball is directly proportional to the cube of its radius, $r$ cm. A ball of radius 2 cm has a mass of 67.2 g.`,
          parts: [
            { label: "(a)", text: String.raw`Find the mass of a ball of radius 3 cm.`, marks: 2 },
            { label: "(b)", text: String.raw`Another ball made of the same metal has a mass of 537.6 g. Find its radius.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N2-inverse-proportion",
      name: String.raw`Inverse proportion, including workers and time`,
      tests: String.raw`Forming $y = \frac{k}{x^n}$ (or $y = \frac{k}{\sqrt{x}}$) and using it; workers-and-days problems where the total amount of work is fixed.`,
      questions: [
        {
          stem: String.raw`$y$ is inversely proportional to $\sqrt{x}$. When $x = 9$, $y = 4$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $y$ in terms of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the value of $y$ when $x = 16$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the value of $x$ when $y = 1.5$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`12 workers can paint a building in 15 days. Assume that all the workers paint at the same rate.`,
          parts: [
            { label: "(a)", text: String.raw`How many days would 20 workers take to paint the building?`, marks: 1 },
            { label: "(b)", text: String.raw`The 12 workers start painting. After 5 days, 8 more workers join them. Find the number of extra days needed to finish painting the building.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N2-percentage-effect",
      name: String.raw`Effect of a change in one variable on the other`,
      tests: String.raw`Finding the percentage change in $y$ when $x$ changes by a given percentage (or factor), using the multiplier rather than finding $k$.`,
      questions: [
        {
          stem: String.raw`$y$ is inversely proportional to $x^2$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the percentage change in $y$ when $x$ is increased by 25%.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the factor by which $x$ is multiplied when $y$ is multiplied by 9.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The time, $T$ seconds, for one swing of a pendulum is directly proportional to the square root of its length, $L$ cm.`,
          parts: [
            { label: "(a)", text: String.raw`The length of the pendulum is increased by 44%. Find the percentage increase in $T$.`, marks: 2 },
            { label: "(b)", text: String.raw`The length of another pendulum is changed so that its time for one swing is halved. Find the percentage decrease in its length.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N2-proportion-graphs-tables",
      name: String.raw`Recognising proportion from a table or graph`,
      tests: String.raw`Deciding whether data show direct or inverse proportion (constant $\frac{y}{x}$ or constant $xy$), and matching a relationship to the shape of its graph.`,
      questions: [
        {
          stem: String.raw`The table shows some values of two variables, $x$ and $y$.

| $x$ | 1 | 2 | 3 | 6 |
|---|---|---|---|---|
| $y$ | 18 | 9 | 6 | 3 |`,
          parts: [
            { label: "(a)", text: String.raw`State whether $y$ is directly proportional or inversely proportional to $x$. Give a reason for your answer.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down an equation connecting $x$ and $y$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the value of $y$ when $x = 7.2$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`For a fixed mass of gas at constant temperature, the pressure $P$ is inversely proportional to the volume $V$. Four sketch graphs, A, B, C and D, are shown.`,
          figure: [
            {
              type: "plot", x: [-0.3, 4.3], y: [-0.4, 4.3], height: 170, axisLabels: ["V", "P"],
              curves: [{ fn: "x => 0.9*x", domain: [0, 4.2] }],
              caption: String.raw`**A**`,
              alt: "Graph A: P against V, a straight line through the origin.",
            },
            {
              type: "plot", x: [-0.3, 4.3], y: [-0.4, 4.3], height: 170, axisLabels: ["V", "P"],
              curves: [{ fn: "x => 2/x", domain: [0.48, 4.2] }],
              caption: String.raw`**B**`,
              alt: "Graph B: P against V, a decreasing curve approaching both axes.",
            },
            {
              type: "plot", x: [-0.3, 4.3], y: [-0.4, 4.3], height: 170, axisLabels: ["", "P"],
              curves: [{ fn: "x => 0.9*x", domain: [0, 4.2] }],
              labels: [{ x: 4.0, y: -0.05, text: "1/V", pos: "s", style: "italic" }],
              caption: String.raw`**C**`,
              alt: "Graph C: P against 1/V, a straight line through the origin.",
            },
            {
              type: "plot", x: [-0.3, 4.3], y: [-0.4, 4.3], height: 170, axisLabels: ["V", "P"],
              curves: [{ fn: "x => 4 - 0.9*x", domain: [0, 4.2] }],
              caption: String.raw`**D**`,
              alt: "Graph D: P against V, a straight line with negative gradient cutting both axes.",
            },
          ],
          parts: [
            { label: "(a)", text: String.raw`Write down the letters of the **two** graphs that could show the relationship between $P$ and $V$.`, marks: 2 },
            { label: "(b)", text: String.raw`When $V = 250$, $P = 120$. Find $P$ when $V = 400$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
