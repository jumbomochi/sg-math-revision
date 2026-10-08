H2.addTopic({
  id: "N7",
  title: "Algebra",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Using letters for unknown numbers, writing and simplifying expressions, substituting values, and solving simple equations.`,
  syllabus: {
    include: [
      String.raw`P6: using a letter to represent an unknown number`,
      String.raw`P6: notation, representations and interpretation of simple algebraic expressions such as $a \pm 3$, $a \times 3$ or $3a$, $a \div 3$ or $\frac{a}{3}$`,
      String.raw`P6: simplifying simple linear expressions excluding brackets`,
      String.raw`P6: evaluating simple linear expressions by substitution`,
      String.raw`P6: simple linear equations involving whole number coefficients only`,
      String.raw`P6: word problems leading to algebraic expressions or simple equations`,
    ],
    exclude: [
      String.raw`expanding or simplifying expressions with brackets`,
      String.raw`equations with fractional or decimal coefficients`,
      String.raw`expressions with powers such as $a^2$, and simultaneous equations (Secondary)`,
    ],
  },
  concepts: [
    {
      title: String.raw`Letters for unknown numbers`,
      body: String.raw`A **letter** such as $a$, $n$ or $y$ stands for a number we do not know yet. An **expression** like $a + 3$ shows what we do with it.

| Words | Expression |
| --- | --- |
| 3 more than $a$ | $a + 3$ |
| 3 less than $a$ | $a - 3$ |
| 3 times $a$ | $3 \times a = 3a$ |
| $a$ divided by 3 | $a \div 3 = \frac{a}{3}$ |

- Write the number **in front**: $3a$, not $a3$. $1a$ is just written $a$.
- $3a$ means $3 \times a$. It does **not** mean the two-digit number "3 and $a$".`,
      figure: {
        type: "plot",
        x: [-6, 20], y: [-0.6, 11.6], equal: true, axes: false,
        polygons: [
          { points: [[0, 9], [6, 9], [6, 11], [0, 11]], fill: true, tone: "accent" },
          { points: [[0, 6], [6, 6], [6, 8], [0, 8]], fill: true, tone: "accent" },
          { points: [[6, 6], [8, 6], [8, 8], [6, 8]], fill: true, tone: "good" },
        ].concat([0, 1, 2].map((i) => ({ points: [[6 * i, 3], [6 * i + 6, 3], [6 * i + 6, 5], [6 * i, 5]], fill: true, tone: "accent" })))
          .concat([
            { points: [[0, 0], [2, 0], [2, 2], [0, 2]], fill: true, tone: "warn" },
            { points: [[0, 0], [6, 0], [6, 2], [0, 2]], tone: "accent" },
          ]),
        segments: [
          { from: [2, 0], to: [2, 2], thin: true, tone: "accent", dashed: true },
          { from: [4, 0], to: [4, 2], thin: true, tone: "accent", dashed: true },
        ],
        labels: [
          { x: -0.6, y: 10, text: "a", pos: "w", style: "italic" },
          { x: -0.6, y: 7, text: "a + 3", pos: "w", style: "italic" },
          { x: -0.6, y: 4, text: "3a", pos: "w", style: "italic" },
          { x: -0.6, y: 1, text: "a ÷ 3", pos: "w", style: "italic" },
          { x: 3, y: 10, text: "a", pos: "c", style: "italic" },
          { x: 3, y: 7, text: "a", pos: "c", style: "italic" },
          { x: 7, y: 7, text: "3", pos: "c", style: "small" },
          { x: 3, y: 4, text: "a", pos: "c", style: "italic" },
          { x: 9, y: 4, text: "a", pos: "c", style: "italic" },
          { x: 15, y: 4, text: "a", pos: "c", style: "italic" },
        ],
        caption: String.raw`$a + 3$ adds a piece of 3. $3a$ is three $a$'s. $\frac{a}{3}$ is one of three equal parts of $a$.`,
        alt: "Four bar models. a is one bar. a + 3 is the bar a with a small piece 3 added. 3a is three bars of a joined end to end. a divided by 3 is the bar a cut into three equal parts with one part shaded.",
      },
    },
    {
      title: String.raw`Writing expressions from words`,
      body: String.raw`Turn each phrase into an operation.

- "more than", "older", "increase by" $\to +$
- "less than", "fewer", "younger", "spent" $\to -$
- "times", "each costs", "for every" $\to \times$
- "shared equally", "divided into" $\to \div$

**Order matters for $-$ and $\div$.** "5 less than $n$" is $n - 5$. "Subtract $n$ from 10" is $10 - n$. "$n$ shared equally among 4" is $\frac{n}{4}$.

*Example.* A cake costs \$$c$. A bun costs \$2 less than a cake. Then a bun costs \$$(c - 2)$, and 4 cakes cost \$$4c$.`,
    },
    {
      title: String.raw`Simplifying expressions`,
      body: String.raw`**Like terms** have the same letter, e.g. $2a$ and $5a$. Only like terms can be added or subtracted. Numbers on their own are collected together.

- $2a + 5a = 7a$
- $6b - b = 5b$ (remember $b$ is $1b$)
- $3k + 2 + k + 6 = 4k + 8$

- Keep the sign **in front of** each term with it: $9m - 4 - 2m + 1 = 7m - 3$.
- **Common mistake:** $4k + 8 = 12k$. A letter term and a number cannot be joined.`,
    },
    {
      title: String.raw`Evaluating by substitution`,
      body: String.raw`To **evaluate** an expression, replace the letter with the given number, then work it out using the order of operations ($\times$ and $\div$ before $+$ and $-$).

*Example.* When $a = 12$:

- $3a + 1 = 3 \times 12 + 1 = 37$
- $\frac{a}{4} + 5 = 12 \div 4 + 5 = 8$
- $20 - a = 20 - 12 = 8$

**Common mistake:** when $a = 5$, writing $3a$ as $35$. It is $3 \times 5 = 15$.`,
    },
    {
      title: String.raw`Solving simple equations`,
      body: String.raw`An **equation** says two things are equal, e.g. $2x + 5 = 17$. Solving it means finding the value of the letter that makes it true.

**Undo** the operations, last one first, doing the same thing to both sides.

- $2x + 5 = 17$
- Take away 5 from both sides: $2x = 12$
- Divide both sides by 2: $x = 6$

- Simplify first if you can: $3y + y = 20$ gives $4y = 20$, so $y = 5$.
- **Check** by substituting: $2 \times 6 + 5 = 17$. ✓`,
      figure: {
        type: "plot",
        x: [-1, 15], y: [-2.8, 2.8], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [5, 0], [5, 2], [0, 2]], fill: true, tone: "accent" },
          { points: [[5, 0], [10, 0], [10, 2], [5, 2]], fill: true, tone: "accent" },
          { points: [[10, 0], [13, 0], [13, 2], [10, 2]], fill: true, tone: "good" },
        ],
        segments: [
          { from: [0, -0.8], to: [13, -0.8], thin: true, tone: "ink", arrow: true, arrowStart: true, label: "17", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 2.5, y: 1, text: "x", pos: "c", style: "italic" },
          { x: 7.5, y: 1, text: "x", pos: "c", style: "italic" },
          { x: 11.5, y: 1, text: "5", pos: "c", style: "plain" },
        ],
        caption: String.raw`$2x + 5 = 17$: take away the 5, and two $x$'s make 12.`,
        alt: "A bar model: two equal boxes labelled x and a box labelled 5 together make 17.",
      },
    },
    {
      title: String.raw`Expressions in real situations`,
      body: String.raw`Many questions ask you to write an expression for a **cost**, an **age** or a **length**.

- $n$ pens at \$3 each cost \$$3n$. Change from \$20 is \$$(20 - 3n)$.
- If Ali is $m$ years old now, in 4 years he will be $m + 4$, and 2 years ago he was $m - 2$.
- **Perimeter**: add the lengths of all the sides, then simplify.

*Example.* The triangle below has perimeter $p + p + p + 3 = 3p + 3$ cm. When $p = 5$, the perimeter is $3 \times 5 + 3 = 18$ cm.`,
      figure: {
        type: "plot",
        x: [-4, 12], y: [-1.4, 3.8], equal: true, axes: false,
        polygons: [{ points: [[0, 0], [8, 0], [4, 3]], fill: true, tone: "accent" }],
        labels: [
          { x: 4, y: 0, text: "(p + 3) cm", pos: "s", style: "plain" },
          { x: 2, y: 1.5, text: "p cm", pos: "nw", style: "plain" },
          { x: 6, y: 1.5, text: "p cm", pos: "ne", style: "plain" },
        ],
        caption: String.raw`Perimeter $= 3p + 3$ cm`,
        alt: "An isosceles triangle with two equal sides of p cm and a base of p + 3 cm.",
      },
    },
    {
      title: String.raw`Forming and solving an equation`,
      body: String.raw`For a word problem:

1. Let the unknown be a letter (often the **smallest** amount).
2. Write the other amounts in terms of that letter.
3. Use the given fact (often the **total**) to write an equation.
4. Solve it, then answer **the question asked**, with units.

*Example.* Sam has $x$ stickers. Tom has 4 times as many as Sam. Together they have 45. Then $x + 4x = 45$, so $5x = 45$ and $x = 9$. Tom has $4 \times 9 = 36$ stickers.`,
    },
  ],
  archetypes: [
    {
      id: "N7-write-expressions",
      name: String.raw`Writing expressions from words`,
      tests: String.raw`Turning a short story into an expression with a letter, including more than, less than, times and shared equally. Watch the order in subtraction and division.`,
      questions: [
        {
          stem: String.raw`Raju is $n$ years old. His sister is 4 years younger than him. How old will his sister be in 6 years' time?`,
          choices: [String.raw`$n + 2$`, String.raw`$n + 10$`, String.raw`$n - 2$`, String.raw`$n - 10$`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`A pen costs \$$k$. A file costs \$3 more than a pen. Mei buys 2 pens and 1 file.`,
          parts: [
            { label: "(a)", text: String.raw`Express the cost of the file in terms of $k$.`, marks: 1 },
            { label: "(b)", text: String.raw`Express the total amount Mei pays in terms of $k$. Give your answer in its simplest form.`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "N7-simplify",
      name: String.raw`Simplifying expressions`,
      tests: String.raw`Collecting like terms and numbers in an expression without brackets. A common trap is joining a letter term and a number.`,
      questions: [
        {
          stem: String.raw`Simplify $7y - 2 + 3y + 5$.`,
          choices: [String.raw`$10y + 3$`, String.raw`$10y + 7$`, String.raw`$4y + 3$`, String.raw`$13y$`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Simplify each expression.`,
          parts: [
            { label: "(a)", text: String.raw`$9m - 4m + m$`, marks: 1 },
            { label: "(b)", text: String.raw`$12 + 5p - 7 - 2p$`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "N7-substitution",
      name: String.raw`Evaluating an expression by substitution`,
      tests: String.raw`Replacing the letter with a number and working out the value in the correct order, including terms like $3a$ and $\frac{a}{3}$.`,
      questions: [
        {
          stem: String.raw`Find the value of $5a - 7$ when $a = 4$.`,
          choices: [String.raw`13`, String.raw`20`, String.raw`27`, String.raw`47`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Find the value of $\frac{m}{3} + 4m - 5$ when $m = 6$.`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N7-solve-equations",
      name: String.raw`Solving simple linear equations`,
      tests: String.raw`Undoing the operations to find the unknown, with whole-number coefficients. Some equations need like terms collected first.`,
      questions: [
        {
          stem: String.raw`Solve the equation $4x + 6 = 30$.`,
          choices: [String.raw`$x = 6$`, String.raw`$x = 9$`, String.raw`$x = 24$`, String.raw`$x = 36$`],
          marks: 1,
          calculator: false,
        },
        {
          stem: String.raw`Solve each equation.`,
          parts: [
            { label: "(a)", text: String.raw`$4n - 7 = 25$`, marks: 1 },
            { label: "(b)", text: String.raw`$2p + 3p + 6 = 41$`, marks: 1 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "N7-expressions-in-context",
      name: String.raw`Expressions for perimeter, area and cost`,
      tests: String.raw`Writing an expression for a length, perimeter or total cost in a real situation, simplifying it, and then substituting a given value.`,
      questions: [
        {
          stem: String.raw`The figure shows a rectangle. Its length is $(y + 5)$ cm and its breadth is $y$ cm.`,
          figure: {
            type: "plot",
            x: [-3.5, 17.5], y: [-2, 9.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [13, 0], [13, 8], [0, 8]], fill: true, tone: "accent" }],
            labels: [
              { x: 6.5, y: 0, text: "(y + 5) cm", pos: "s", style: "plain" },
              { x: 13, y: 4, text: "y cm", pos: "e", style: "plain" },
            ],
            caption: "Not drawn to scale",
            alt: "A rectangle with length (y + 5) cm along the bottom and breadth y cm on the right side.",
          },
          parts: [
            { label: "(a)", text: String.raw`Express the perimeter of the rectangle in terms of $y$. Give your answer in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the area of the rectangle when $y = 8$. Give your answer in cm².`, marks: 1 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`At a museum, an adult ticket costs \$$3w$ and a child ticket costs \$$w$. Mr Tan bought 2 adult tickets and 3 child tickets. He paid with a \$50 note.`,
          parts: [
            { label: "(a)", text: String.raw`Express the total cost of the tickets in terms of $w$. Give your answer in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`Express the change Mr Tan received in terms of $w$.`, marks: 1 },
            { label: "(c)", text: String.raw`If $w = 4.50$, how much change did he receive?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N7-form-and-solve",
      name: String.raw`Forming and solving an equation from a word problem`,
      tests: String.raw`Letting a letter stand for the unknown, writing the other amounts in terms of it, and solving an equation from the given total.`,
      questions: [
        {
          stem: String.raw`When a number $n$ is multiplied by 4 and then 9 is subtracted, the answer is 31.`,
          parts: [
            { label: "(a)", text: String.raw`Write down an equation in $n$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $n$.`, marks: 1 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Ali has $x$ marbles. Ben has 3 times as many marbles as Ali. Cal has 15 fewer marbles than Ben.`,
          parts: [
            { label: "(a)", text: String.raw`Express the total number of marbles the three boys have in terms of $x$. Give your answer in its simplest form.`, marks: 2 },
            { label: "(b)", text: String.raw`The three boys have 139 marbles altogether. How many marbles does Cal have?`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
