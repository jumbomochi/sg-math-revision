H2.addTopic({
  id: "N2",
  title: "Fractions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Equivalent fractions, mixed numbers, fraction of a set, fractions and division, the four operations with fractions, and "remainder" word problems with models.`,
  syllabus: {
    include: [
      String.raw`P2: fraction as part of a whole; comparing and ordering unit fractions and like fractions`,
      String.raw`P3: equivalent fractions; expressing a fraction in its simplest form; comparing and ordering unlike fractions (denominators not exceeding 12)`,
      String.raw`P4: mixed numbers, improper fractions and their relationship`,
      String.raw`P4: fraction as part of a set`,
      String.raw`P4: adding and subtracting fractions (denominators not exceeding 12, not more than two different denominators)`,
      String.raw`P5: dividing a whole number by a whole number with quotient as a fraction; expressing fractions as decimals`,
      String.raw`P5: adding and subtracting mixed numbers`,
      String.raw`P5: multiplying a proper/improper fraction and a whole number, a proper fraction and a proper/improper fraction, and two improper fractions, without calculator; multiplying a mixed number and a whole number`,
      String.raw`P6: dividing a proper fraction by a whole number, and a whole number or proper fraction by a proper fraction, without calculator`,
      String.raw`P4–P6: word problems involving fractions`,
    ],
    exclude: [
      String.raw`dividing by an improper fraction or a mixed number`,
      String.raw`multiplying two mixed numbers`,
    ],
  },
  concepts: [
    {
      title: String.raw`Equivalent fractions and comparing`,
      body: String.raw`Multiply or divide the numerator and the denominator by the **same** number to get an equivalent fraction: $\frac{2}{3} = \frac{4}{6} = \frac{6}{9}$.

- **Simplest form**: divide the top and bottom by their common factors until only $1$ is left: $\frac{18}{24} = \frac{3}{4}$.
- To compare fractions, make the **denominators the same** (or the numerators the same): $\frac{3}{4} = \frac{9}{12}$ and $\frac{5}{6} = \frac{10}{12}$, so $\frac{5}{6}$ is bigger.
- With the same numerator, the **bigger** denominator gives the **smaller** fraction: $\frac{1}{8} < \frac{1}{5}$.
- Common mistake: thinking $\frac{2}{9}$ is bigger than $\frac{2}{5}$ because $9 > 5$.`,
      figure: {
        type: "plot",
        x: [-2.6, 12.4], y: [-0.4, 4.4], equal: true, axes: false,
        polygons: [
          ...Array.from({ length: 3 }, (_, i) => ({ points: [[4 * i, 2.6], [4 * i + 4, 2.6], [4 * i + 4, 4], [4 * i, 4]], fill: i < 2, tone: i < 2 ? "accent" : "muted" })),
          ...Array.from({ length: 6 }, (_, i) => ({ points: [[2 * i, 0.4], [2 * i + 2, 0.4], [2 * i + 2, 1.8], [2 * i, 1.8]], fill: i < 4, tone: i < 4 ? "accent" : "muted" })),
        ],
        labels: [
          { x: -0.4, y: 3.3, text: "2/3", pos: "w", style: "plain" },
          { x: -0.4, y: 1.1, text: "4/6", pos: "w", style: "plain" },
        ],
        caption: String.raw`The same length is shaded: $\frac{2}{3} = \frac{4}{6}$.`,
        alt: "Two bars of the same length. The top bar is cut into 3 equal parts with 2 shaded. The bottom bar is cut into 6 equal parts with 4 shaded. The shaded lengths are equal.",
      },
    },
    {
      title: String.raw`Mixed numbers and improper fractions`,
      body: String.raw`An **improper fraction** has a numerator at least as big as the denominator, e.g. $\frac{9}{4}$. A **mixed number** has a whole number part and a fraction part, e.g. $2\frac{1}{4}$.

- Improper to mixed: divide. $9 \div 4 = 2$ remainder $1$, so $\frac{9}{4} = 2\frac{1}{4}$.
- Mixed to improper: $2\frac{1}{4} = \frac{2 \times 4 + 1}{4} = \frac{9}{4}$.
- Give answers in **simplest form**: $2\frac{2}{8}$ should be written as $2\frac{1}{4}$.`,
      figure: {
        type: "plot",
        x: [-0.4, 18.4], y: [-0.4, 2.6], equal: true, axes: false,
        polygons: Array.from({ length: 12 }, (_, k) => {
          const b = Math.floor(k / 4), j = k % 4, x = 6.2 * b + 1.4 * j;
          return { points: [[x, 0.4], [x + 1.4, 0.4], [x + 1.4, 1.8], [x, 1.8]], fill: k < 9, tone: k < 9 ? "accent" : "muted" };
        }),
        labels: [
          { x: 2.8, y: 1.8, text: "1", pos: "n", style: "small" },
          { x: 9.0, y: 1.8, text: "1", pos: "n", style: "small" },
          { x: 15.2, y: 1.8, text: "1/4", pos: "n", style: "small" },
        ],
        caption: String.raw`Nine quarters make $2$ wholes and $1$ quarter: $\frac{9}{4} = 2\frac{1}{4}$.`,
        alt: "Three bars, each cut into 4 equal parts. 9 of the 12 parts are shaded: the first two bars are full and the third has 1 of its 4 parts shaded.",
      },
    },
    {
      title: String.raw`Fraction of a set or a quantity`,
      body: String.raw`To find a fraction **of** a number: divide by the denominator, then multiply by the numerator.

- $\frac{3}{5}$ of $40$: $1$ unit $= 40 \div 5 = 8$, so $3$ units $= 24$. (Same as $\frac{3}{5} \times 40$.)
- "What fraction of A is B?" means $\dfrac{B}{A}$. Example: $15$ min is $\frac{15}{60} = \frac{1}{4}$ of an hour.
- The two numbers must be in the **same unit** before you write the fraction.`,
      figure: {
        type: "plot",
        x: [-1, 26], y: [-2.6, 4.6], equal: true, axes: false,
        polygons: Array.from({ length: 5 }, (_, i) => ({ points: [[4 * i, 0], [4 * i + 4, 0], [4 * i + 4, 2.4], [4 * i, 2.4]], fill: i < 3, tone: i < 3 ? "accent" : "muted" })),
        segments: [
          { from: [0, 3.4], to: [20, 3.4], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "40", pos: "n", style: "plain" },
          { from: [0, -0.8], to: [12, -0.8], tone: "accent", thin: true, arrow: true, arrowStart: true, label: "3/5 of 40 = 3 units", pos: "s", style: "small" },
        ],
        labels: [{ x: 18, y: 1.2, text: "1 unit", pos: "c", style: "small" }],
        caption: String.raw`$5$ units $= 40$, so $1$ unit $= 8$ and $3$ units $= 24$.`,
        alt: "A bar of 5 equal units with a total of 40 marked above it. The first 3 units are shaded and labelled 3/5 of 40.",
      },
    },
    {
      title: String.raw`Fraction and division; fractions as decimals`,
      body: String.raw`A fraction is a division: $a \div b = \dfrac{a}{b}$.

- $3 \div 4 = \frac{3}{4}$ (3 pizzas shared by 4 children: each gets $\frac{3}{4}$ of a pizza).
- $7 \div 3 = \frac{7}{3} = 2\frac{1}{3}$.
- **Fraction to decimal**: make the denominator $10$, $100$ or $1000$, or divide. $\frac{3}{5} = \frac{6}{10} = 0.6$, $\frac{7}{20} = \frac{35}{100} = 0.35$, $\frac{5}{8} = 5 \div 8 = 0.625$.
- Learn these: $\frac{1}{2} = 0.5$, $\frac{1}{4} = 0.25$, $\frac{3}{4} = 0.75$, $\frac{1}{5} = 0.2$, $\frac{1}{8} = 0.125$.`,
    },
    {
      title: String.raw`Adding and subtracting fractions and mixed numbers`,
      body: String.raw`Change to the **same denominator** first. Then add or subtract the numerators only.

- $\frac{1}{4} + \frac{2}{3} = \frac{3}{12} + \frac{8}{12} = \frac{11}{12}$.
- Mixed numbers: deal with the wholes and the fractions, or change to improper fractions. $3\frac{1}{4} - 1\frac{3}{4} = \frac{13}{4} - \frac{7}{4} = \frac{6}{4} = 1\frac{1}{2}$.
- If the fraction part is too small to subtract from, **rename** one whole: $3\frac{1}{4} = 2\frac{5}{4}$.
- Common mistake: adding the denominators. $\frac{1}{4} + \frac{2}{3}$ is **not** $\frac{3}{7}$.`,
    },
    {
      title: String.raw`Multiplying fractions`,
      body: String.raw`Multiply the numerators, multiply the denominators, then simplify. **Cancel first** to keep numbers small.

- $\frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2}$.
- Fraction $\times$ whole number: $\frac{5}{6} \times 4 = \frac{20}{6} = 3\frac{1}{3}$.
- Mixed number $\times$ whole number: change to an improper fraction, $1\frac{1}{2} \times 6 = \frac{3}{2} \times 6 = 9$.
- "Of" means "$\times$": $\frac{2}{3}$ of $\frac{3}{4}$ is $\frac{2}{3} \times \frac{3}{4}$.
- Multiplying by a proper fraction makes the number **smaller**.`,
      figure: {
        type: "plot",
        x: [-1.4, 5.2], y: [-0.9, 3.5], equal: true, axes: false,
        polygons: [
          { points: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: true, tone: "accent" },
          { points: [[0, 1], [4, 1], [4, 3], [0, 3]], fill: true, tone: "good" },
          { points: [[0, 0], [4, 0], [4, 3], [0, 3]], tone: "ink" },
        ],
        segments: [
          ...[1, 2, 3].map((x) => ({ from: [x, 0], to: [x, 3], tone: "ink", thin: true })),
          ...[1, 2].map((y) => ({ from: [0, y], to: [4, y], tone: "ink", thin: true })),
        ],
        labels: [
          { x: 1.5, y: 0, text: "3/4", pos: "s", style: "plain" },
          { x: 0, y: 2, text: "2/3", pos: "w", style: "plain" },
        ],
        caption: String.raw`$\frac{3}{4}$ of the columns and $\frac{2}{3}$ of the rows overlap in $6$ of the $12$ squares: $\frac{2}{3} \times \frac{3}{4} = \frac{6}{12} = \frac{1}{2}$.`,
        alt: "A rectangle split into 4 columns and 3 rows, 12 small squares. 3 columns are shaded one colour and 2 rows another colour; the double-shaded overlap is 6 squares.",
      },
    },
    {
      title: String.raw`Dividing fractions (P6)`,
      body: String.raw`- **Fraction $\div$ whole number**: share into equal parts. $\frac{2}{3} \div 4 = \frac{2}{3} \times \frac{1}{4} = \frac{2}{12} = \frac{1}{6}$.
- **Whole number $\div$ fraction**: "how many of this fraction fit in?" $3 \div \frac{1}{4} = 12$, because there are $4$ quarters in each whole.
- **Rule**: to divide by a fraction, multiply by its **reciprocal** (turn it upside down): $\frac{2}{3} \div \frac{2}{9} = \frac{2}{3} \times \frac{9}{2} = 3$.
- Only turn over the fraction you are dividing **by**, never the first one.
- Dividing by a proper fraction makes the number **bigger**.`,
      figure: {
        type: "plot",
        x: [-0.4, 18.4], y: [-0.4, 2.4], equal: true, axes: false,
        polygons: Array.from({ length: 12 }, (_, k) => {
          const b = Math.floor(k / 4), j = k % 4, x = 6.2 * b + 1.4 * j;
          return { points: [[x, 0.4], [x + 1.4, 0.4], [x + 1.4, 1.8], [x, 1.8]], fill: k % 2 === 0, tone: "accent" };
        }),
        labels: Array.from({ length: 12 }, (_, k) => ({ x: 6.2 * Math.floor(k / 4) + 1.4 * (k % 4) + 0.7, y: 1.1, text: String(k + 1), pos: "c", style: "small" })),
        caption: String.raw`There are $12$ quarters in $3$ wholes: $3 \div \frac{1}{4} = 12$.`,
        alt: "Three whole bars, each cut into 4 quarters, numbered 1 to 12.",
      },
    },
    {
      title: String.raw`"Remainder" word problems: draw the model`,
      body: String.raw`Watch the words: "$\frac{1}{4}$ **of the remainder**" is a fraction of what is **left**, not of the whole.

- Draw a bar for the whole. Cut it for the first fraction. Then cut the **remainder** for the second fraction.
- Choose a number of units that works for both cuts. Example: spend $\frac{1}{3}$, then $\frac{1}{4}$ of the remainder. The remainder is $\frac{2}{3}$, so use $6$ units: first $2$ units, remainder $4$ units, then $1$ unit, leaving $3$ units.
- Or multiply: left at the end $= \frac{2}{3} \times \frac{3}{4} = \frac{1}{2}$ of the whole.
- Then match units to the number you are given, find $1$ unit, and answer the question asked.`,
      figure: {
        type: "plot",
        x: [-0.6, 24.6], y: [-2.6, 5.4], equal: true, axes: false,
        polygons: Array.from({ length: 6 }, (_, i) => ({ points: [[4 * i, 0], [4 * i + 4, 0], [4 * i + 4, 2.4], [4 * i, 2.4]], fill: i < 3, tone: i < 2 ? "accent" : i === 2 ? "warn" : "muted" })),
        segments: [
          { from: [0, 3.3], to: [7.85, 3.3], tone: "accent", thin: true, arrow: true, arrowStart: true, label: "1/3 of the whole", pos: "n", style: "small" },
          { from: [8.15, 3.3], to: [24, 3.3], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "remainder (4 units)", pos: "n", style: "small" },
          { from: [8, -0.8], to: [11.85, -0.8], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "1/4 of remainder", pos: "s", style: "small" },
          { from: [12.15, -0.8], to: [24, -0.8], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "left: 3 units", pos: "s", style: "small" },
        ],
        caption: String.raw`Using $6$ units: $2$ units, then $1$ unit of the $4$ units left, leaving $3$ units.`,
        alt: "A bar of 6 equal units. The first 2 units are the first fraction (1/3 of the whole). The remaining 4 units are the remainder; 1 of them is the second fraction (1/4 of the remainder), leaving 3 units.",
      },
    },
  ],
  archetypes: [
    {
      id: "N2-equivalent-compare",
      name: String.raw`Fraction of a figure, equivalent fractions and ordering`,
      tests: String.raw`Reading a fraction off a diagram and simplifying it, and comparing or ordering fractions by making the denominators the same.`,
      questions: [
        {
          stem: String.raw`The figure is made up of equal squares. What fraction of the figure is shaded?`,
          marks: 1,
          calculator: false,
          figure: {
            type: "plot",
            x: [-2.6, 6.6], y: [-0.4, 3.4], equal: true, axes: false,
            polygons: Array.from({ length: 12 }, (_, k) => {
              const c = k % 4, r = Math.floor(k / 4);
              const shaded = [0, 1, 2, 4, 5, 7, 9, 10].includes(k);
              return { points: [[c, r], [c + 1, r], [c + 1, r + 1], [c, r + 1]], fill: shaded, tone: shaded ? "accent" : "muted" };
            }),
            alt: "A rectangle of 12 equal squares in 3 rows of 4. 8 of the squares are shaded.",
          },
          choices: [String.raw`$\frac{1}{3}$`, String.raw`$\frac{1}{2}$`, String.raw`$\frac{2}{3}$`, String.raw`$\frac{3}{4}$`],
        },
        {
          stem: String.raw`Which of the following fractions is greater than $\frac{1}{2}$ but smaller than $\frac{3}{5}$?`,
          marks: 2,
          calculator: false,
          choices: [String.raw`$\frac{2}{5}$`, String.raw`$\frac{5}{9}$`, String.raw`$\frac{5}{8}$`, String.raw`$\frac{7}{11}$`],
        },
      ],
    },
    {
      id: "N2-mixed-numbers-division",
      name: String.raw`Mixed numbers, fraction and division, fractions as decimals`,
      tests: String.raw`Changing between improper fractions and mixed numbers, writing a division as a fraction in simplest form, and changing a fraction or mixed number into a decimal.`,
      questions: [
        {
          stem: String.raw`Express $\frac{23}{6}$ as a mixed number.`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$2\frac{5}{6}$`, String.raw`$3\frac{1}{6}$`, String.raw`$3\frac{5}{6}$`, String.raw`$4\frac{1}{6}$`],
        },
        {
          stem: String.raw`Answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Express $9 \div 12$ as a fraction in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`Express $2\frac{3}{8}$ as a decimal.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N2-fraction-of-set",
      name: String.raw`Fraction of a set or quantity`,
      tests: String.raw`Finding a fraction of a number of things, and writing one quantity as a fraction of another. Two-step versions take a fraction of a part (e.g. of the girls, not of the class).`,
      questions: [
        {
          stem: String.raw`What is $\frac{3}{8}$ of $56$?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$7$`, String.raw`$21$`, String.raw`$24$`, String.raw`$35$`],
        },
        {
          stem: String.raw`There are $40$ pupils in a class. $15$ of them are boys and the rest are girls.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`What fraction of the pupils are boys? Give your answer in its simplest form.`, marks: 1 },
            { label: "(b)", text: String.raw`$\frac{2}{5}$ of the girls wear glasses. How many girls wear glasses?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N2-add-subtract",
      name: String.raw`Adding and subtracting fractions and mixed numbers`,
      tests: String.raw`Making a common denominator (at most two different denominators, each up to 12), renaming a whole when subtracting mixed numbers, and simplifying the answer.`,
      questions: [
        {
          stem: String.raw`$\frac{5}{6} - \frac{1}{4} = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$\frac{1}{3}$`, String.raw`$\frac{7}{12}$`, String.raw`$\frac{2}{3}$`, String.raw`$1\frac{1}{12}$`],
        },
        {
          stem: String.raw`Find the value of $4\frac{1}{3} - 1\frac{5}{6}$. Give your answer as a mixed number in its simplest form.`,
          marks: 2,
          calculator: false,
        },
      ],
    },
    {
      id: "N2-multiply",
      name: String.raw`Multiplying fractions`,
      tests: String.raw`Multiplying a fraction by a whole number, by another fraction, or a mixed number by a whole number, without a calculator. Cancel common factors first.`,
      questions: [
        {
          stem: String.raw`$\frac{2}{3} \times \frac{9}{10} = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$\frac{3}{10}$`, String.raw`$\frac{3}{5}$`, String.raw`$\frac{20}{27}$`, String.raw`$1\frac{17}{30}$`],
        },
        {
          stem: String.raw`Find the value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$2\frac{2}{5} \times 15$`, marks: 1 },
            { label: "(b)", text: String.raw`$\frac{9}{4} \times \frac{10}{3}$. Give your answer as a mixed number.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N2-divide",
      name: String.raw`Dividing fractions (P6)`,
      tests: String.raw`Dividing a proper fraction by a whole number (equal sharing), and a whole number or proper fraction by a proper fraction ("how many pieces of this size?"), without a calculator.`,
      questions: [
        {
          stem: String.raw`$\frac{6}{7} \div 3 = $`,
          marks: 1,
          calculator: false,
          choices: [String.raw`$\frac{2}{21}$`, String.raw`$\frac{2}{7}$`, String.raw`$\frac{7}{18}$`, String.raw`$\frac{18}{7}$`],
        },
        {
          stem: String.raw`Mrs Lim had $\frac{3}{4}$ kg of flour.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`She divided it equally into $6$ bags. What was the mass of flour in each bag? Give your answer as a fraction in kg.`, marks: 1 },
            { label: "(b)", text: String.raw`Later, she bought another $6$ kg of flour. She uses $\frac{3}{8}$ kg of flour for each cake. How many cakes can she bake with the $6$ kg of flour?`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N2-remainder-problems",
      name: String.raw`"Fraction of the remainder" problems`,
      tests: String.raw`Money or items used in stages: a fraction of the whole, then a fraction of what is left. Draw the model in units, or multiply the fractions left, then use the number given to find 1 unit.`,
      questions: [
        {
          stem: String.raw`Ravi spent $\frac{3}{8}$ of his money on a book and $\frac{1}{5}$ of the remainder on a pen. He had \$$36$ left. How much money did he have at first?`,
          marks: 3,
        },
        {
          stem: String.raw`A baker had some eggs. He used $\frac{2}{5}$ of them on Monday and $\frac{3}{4}$ of the remainder on Tuesday.`,
          parts: [
            { label: "(a)", text: String.raw`What fraction of the eggs did he have left at the end of Tuesday?`, marks: 2 },
            { label: "(b)", text: String.raw`He used $18$ more eggs on Tuesday than on Monday. How many eggs did he have left at the end of Tuesday?`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N2-fraction-word-problems",
      name: String.raw`Other fraction word problems`,
      tests: String.raw`Adding or subtracting mixed numbers in a measurement story, and "a fraction of A equals a fraction of B" problems, solved by making the numerators the same so the units match.`,
      questions: [
        {
          stem: String.raw`A jug contained $2\frac{3}{4}$ ℓ of water. Sam poured out $1\frac{5}{6}$ ℓ of water. How much water was left in the jug? Give your answer in ℓ.`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`$\frac{2}{3}$ of Amy's beads is equal to $\frac{3}{4}$ of Ben's beads. Amy has $24$ more beads than Ben. How many beads do they have altogether?`,
          marks: 4,
        },
      ],
    },
  ],
});
