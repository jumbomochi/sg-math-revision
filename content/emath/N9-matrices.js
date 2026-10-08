H2.addTopic({
  id: "N9",
  title: "Matrices",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Storing information in matrices, adding and multiplying matrices, and interpreting the results in context.`,
  syllabus: {
    include: [
      String.raw`display of information in the form of a matrix of any order`,
      String.raw`interpreting the data in a given matrix`,
      String.raw`product of a scalar quantity and a matrix`,
      String.raw`problems involving the calculation of the sum and product (where appropriate) of two matrices`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Matrices, order and elements`,
      body: String.raw`A **matrix** is a rectangular array of numbers in brackets. Each number is an **element**.

- A matrix with $m$ rows and $n$ columns has **order** $m \times n$ (rows first, then columns).
- A **row matrix** has one row, e.g. $\begin{pmatrix} 1 & 4 & 2 \end{pmatrix}$ is $1 \times 3$. A **column matrix** has one column. A **square matrix** has as many rows as columns.
- A **zero matrix** has every element 0.
- Two matrices are **equal** only if they have the same order and every pair of corresponding elements is equal. Use this to find unknowns: compare element by element.`,
      figure: {
        type: "plot",
        x: [0, 7.5],
        y: [0.4, 3.4],
        equal: true,
        axes: false,
        polygons: [
          { points: [[2.58, 1.135], [5.42, 1.135], [5.42, 1.815], [2.58, 1.815]], fill: true, tone: "warn" },
          { points: [[4.64, 1.095], [5.36, 1.095], [5.36, 2.705], [4.64, 2.705]], fill: true, tone: "accent" },
        ],
        curves: [
          {
            param: "t => [2.3 + 0.18*(1 - Math.cos(t)), 1.9 + 0.97*Math.sin(t) * -1]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [5.7 - 0.18*(1 - Math.cos(t)), 1.9 + 0.97*Math.sin(t)]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
        ],
        labels: [
          { x: 3, y: 2.325, text: "4", style: "plain" },
          { x: 4, y: 2.325, text: "0", style: "plain" },
          { x: 5, y: 2.325, text: "−2", style: "plain" },
          { x: 3, y: 1.475, text: "1", style: "plain" },
          { x: 4, y: 1.475, text: "6", style: "plain" },
          { x: 5, y: 1.475, text: "7", style: "plain" },
          { x: 2, y: 1.9, text: "A =", pos: "w", style: "italic" },
          { x: 5.85, y: 1.475, text: "row 2", pos: "e", style: "small", tone: "warn" },
          { x: 5, y: 2.75, text: "column 3", pos: "n", style: "small", tone: "accent" },
        ],
        caption: String.raw`$A$ has 2 rows and 3 columns: order $2 \times 3$. The element in row 2, column 3 is 7.`,
        alt: "The matrix A with rows 4, 0, −2 and 1, 6, 7. The second row is highlighted and labelled row 2; the third column is highlighted and labelled column 3. They cross at the element 7.",
      },
    },
    {
      title: String.raw`Storing information in a matrix`,
      body: String.raw`A table of numbers can be written as a matrix. Each row stands for one item (e.g. a shop) and each column for another (e.g. a product).

| | Pens | Files | Books |
| Shop P | 40 | 25 | 12 |
| Shop Q | 30 | 18 | 20 |

becomes $\begin{pmatrix} 40 & 25 & 12 \\ 30 & 18 & 20 \end{pmatrix}$, a $2 \times 3$ matrix.

- Keep the **same order of items** in every matrix you write for a question.
- When asked to "write down a matrix", give exactly the order asked for (e.g. "a $2 \times 3$ matrix" or "a column matrix").`,
    },
    {
      title: String.raw`Addition, subtraction and scalar multiples`,
      body: String.raw`- **Add or subtract** matrices of the **same order** by adding or subtracting corresponding elements. Matrices of different orders cannot be added.
- **Scalar multiple**: $kA$ multiplies every element of $A$ by the number $k$.
$$4\begin{pmatrix} 1 & -3 \\ 2 & 5 \end{pmatrix} = \begin{pmatrix} 4 & -12 \\ 8 & 20 \end{pmatrix}$$
- In context, adding matrices combines two time periods (e.g. January $+$ February). A scalar multiple scales every value, e.g. a 5% price increase is $1.05P$.
- To find an unknown matrix $X$ from, say, $2X + A = B$, work with whole matrices: $X = \frac{1}{2}(B - A)$.`,
    },
    {
      title: String.raw`Multiplying two matrices`,
      body: String.raw`The product $AB$ exists only when the number of **columns of $A$** equals the number of **rows of $B$**:
$$(m \times n)(n \times p) \to (m \times p).$$

- Each element of $AB$ is "row of $A$ times column of $B$": multiply the pairs of elements and add.
- Write the orders side by side first. If the middle numbers differ, the product cannot be found — say so and give the reason.
- In general $AB \ne BA$. Even when both exist, they may have different orders.
- $A^2$ means $AA$. It exists only for a square matrix. Do **not** square each element.`,
      figure: {
        type: "plot",
        x: [0, 11.5],
        y: [0.3, 3.5],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0.48, 1.235], [2.32, 1.235], [2.32, 1.915], [0.48, 1.915]], fill: true, tone: "warn" },
          { points: [[3.64, 1.195], [4.36, 1.195], [4.36, 2.805], [3.64, 2.805]], fill: true, tone: "accent" },
          { points: [[8.24, 1.235], [8.96, 1.235], [8.96, 1.915], [8.24, 1.915]], fill: true, tone: "good" },
        ],
        curves: [
          {
            param: "t => [0.20000000000000007 + 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t) * -1]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [2.5999999999999996 - 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t)]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [3.3 + 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t) * -1]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [6.7 - 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t)]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [7.8999999999999995 + 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t) * -1]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
          {
            param: "t => [11.299999999999999 - 0.18*(1 - Math.cos(t)), 2 + 0.97*Math.sin(t)]",
            t: [-1.571, 1.571],
            tone: "ink",
            samples: 80,
          },
        ],
        labels: [
          { x: 0.9, y: 2.425, text: "1", style: "plain" },
          { x: 1.9, y: 2.425, text: "2", style: "plain" },
          { x: 0.9, y: 1.575, text: "3", style: "plain" },
          { x: 1.9, y: 1.575, text: "4", style: "plain" },
          { x: 4, y: 2.425, text: "5", style: "plain" },
          { x: 5, y: 2.425, text: "0", style: "plain" },
          { x: 6, y: 2.425, text: "1", style: "plain" },
          { x: 4, y: 1.575, text: "2", style: "plain" },
          { x: 5, y: 1.575, text: "3", style: "plain" },
          { x: 6, y: 1.575, text: "−1", style: "plain" },
          { x: 8.6, y: 2.425, text: "9", style: "plain" },
          { x: 9.6, y: 2.425, text: "6", style: "plain" },
          { x: 10.6, y: 2.425, text: "−1", style: "plain" },
          { x: 8.6, y: 1.575, text: "23", style: "plain" },
          { x: 9.6, y: 1.575, text: "12", style: "plain" },
          { x: 10.6, y: 1.575, text: "−1", style: "plain" },
          { x: 7.2, y: 2, text: "=", style: "plain" },
          { x: 1.4, y: 0.75, text: "row 2", style: "small", tone: "warn" },
          { x: 4, y: 0.75, text: "column 1", style: "small", tone: "accent" },
          { x: 8.6, y: 0.75, text: "row 2, column 1", style: "small", tone: "good" },
        ],
        caption: String.raw`Row 2 of the first matrix with column 1 of the second: $3 \times 5 + 4 \times 2 = 23$. $(2 \times 2)(2 \times 3)$ gives $2 \times 3$.`,
        alt: "The product of the 2 by 2 matrix with rows 1, 2 and 3, 4 and the 2 by 3 matrix with rows 5, 0, 1 and 2, 3, −1 equals the 2 by 3 matrix with rows 9, 6, −1 and 23, 12, −1. Row 2 of the first matrix, column 1 of the second and the element 23 of the answer are highlighted.",
      },
    },
    {
      title: String.raw`Interpreting a product in context`,
      body: String.raw`A product is meaningful when the **column labels of the first matrix match the row labels of the second**.

- If $N$ is (shops $\times$ items) giving numbers sold and $P$ is (items $\times$ 1) giving the price of each item, then $NP$ is (shops $\times$ 1): the **total takings of each shop**.
- A row of 1s adds up columns: $\begin{pmatrix} 1 & 1 \end{pmatrix} N$ gives the total sold of each item across both shops. A column of 1s on the right adds up rows.
- When asked "what do the elements represent", answer in words with the context, e.g. "the total amount, in dollars, collected by each shop on Saturday".`,
    },
    {
      title: String.raw`Common mistakes`,
      body: String.raw`- Writing the order as columns $\times$ rows. It is always rows $\times$ columns.
- Multiplying element by element instead of row by column.
- Writing a product the wrong way round: $NP$ and $PN$ are different (and one may not exist).
- Forgetting units in context answers, or giving a matrix when a single total is asked for.
- Matrix algebra rules (orders, addition, multiplication) are **not** on the formula sheet — memorise them.`,
    },
  ],
  archetypes: [
    {
      id: "N9-order-equal",
      name: String.raw`Order, elements and equal matrices`,
      tests: String.raw`Stating the order of a matrix, picking out a given element, and finding unknowns by equating corresponding elements. Recognise by "State the order of…" or "Given that the matrices are equal, find $x$ and $y$".`,
      questions: [
        {
          stem: String.raw`$A = \begin{pmatrix} 3 & -1 & 0 \\ 2 & 5 & 4 \end{pmatrix}$.`,
          parts: [
            { label: "(a)", text: String.raw`State the order of $A$.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the element in the second row and first column of $A$.`, marks: 1 },
            { label: "(c)", text: String.raw`Given that $\begin{pmatrix} x + 3 & 4 \\ 2 & y \end{pmatrix} = \begin{pmatrix} 7 & 4 \\ 2 & 3y - 8 \end{pmatrix}$, find the value of $x$ and the value of $y$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N9-add-scalar",
      name: String.raw`Sums, differences and scalar multiples`,
      tests: String.raw`Working out expressions such as $3A - 2B$, finding an unknown matrix $X$ from a matrix equation, and finding unknown elements. Recognise by matrices of the same order combined with numbers.`,
      questions: [
        {
          stem: String.raw`$A = \begin{pmatrix} 2 & -1 \\ 0 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 4 & 5 \\ -2 & 1 \end{pmatrix}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $3A - 2B$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the matrix $X$ such that $2X - A = B$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that

$$3\begin{pmatrix} x & 2 \\ -1 & y \end{pmatrix} - \begin{pmatrix} 4 & y \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 11 & 1 \\ -5 & 14 \end{pmatrix}.$$`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $x$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $y$, showing that your value satisfies both equations in $y$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N9-product-exists",
      name: String.raw`When does a product exist?`,
      tests: String.raw`Using the orders of matrices to decide which products can be found and what order the answer has. Recognise by "Which of the following products can be found?" or "Explain why $BA$ cannot be found".`,
      questions: [
        {
          stem: String.raw`$A$ is a $2 \times 3$ matrix, $B$ is a $3 \times 3$ matrix, $C$ is a $1 \times 2$ matrix and $D$ is a $3 \times 1$ matrix.`,
          parts: [
            { label: "(a)", text: String.raw`For each of the products $AB$, $BA$, $CA$ and $BD$, state whether it can be found. If it can, write down its order.`, marks: 3 },
            { label: "(b)", text: String.raw`Write down the order of the matrix $CAD$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N9-multiply",
      name: String.raw`Calculating products of matrices`,
      tests: String.raw`Multiplying matrices row by column, including $A^2$, a row matrix times a column matrix, and finding unknowns from a product. Recognise by "Find $PQ$", "Find $P^2$" or a product equal to a given matrix.`,
      questions: [
        {
          stem: String.raw`$P = \begin{pmatrix} 2 & 1 \\ -3 & 4 \end{pmatrix}$ and $Q = \begin{pmatrix} 1 & 0 & 2 \\ 5 & -1 & 3 \end{pmatrix}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $PQ$.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain why $QP$ cannot be found.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $P^2$.`, marks: 2 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Evaluate $\begin{pmatrix} 3 & -1 & 2 \end{pmatrix} \begin{pmatrix} 4 \\ 5 \\ 1 \end{pmatrix}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Given that $\begin{pmatrix} x & 3 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 2 \\ y \end{pmatrix} = \begin{pmatrix} 16 \\ -2 \end{pmatrix}$, find the value of $x$ and the value of $y$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N9-represent-information",
      name: String.raw`Writing information as matrices and finding totals`,
      tests: String.raw`Setting up matrices from a description or table, choosing the order so that a product gives the totals wanted, and stating what the elements mean. Recognise by a context with quantities and prices (or points, marks, costs) and "Write down a matrix…".`,
      questions: [
        {
          stem: String.raw`A shop sells T-shirts in three sizes: small, medium and large. On Saturday it sold 12 small, 20 medium and 15 large T-shirts. On Sunday it sold 18 small, 25 medium and 10 large T-shirts. The prices of a small, a medium and a large T-shirt are \$15, \$18 and \$20 respectively.`,
          parts: [
            { label: "(a)", text: String.raw`Write down a $2 \times 3$ matrix, $S$, to represent the numbers of T-shirts sold.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down a column matrix, $P$, so that the product $SP$ can be found.`, marks: 1 },
            { label: "(c)", text: String.raw`Evaluate $SP$.`, marks: 2 },
            { label: "(d)", text: String.raw`State what the elements of $SP$ represent.`, marks: 1 },
            { label: "(e)", text: String.raw`Evaluate $\begin{pmatrix} 1 & 1 \end{pmatrix} SP$ and explain what your answer represents.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N9-interpret-matrix",
      name: String.raw`Interpreting a given matrix and its products`,
      tests: String.raw`Reading a matrix of results, forming products with a given column or row matrix, and explaining the meaning of each element in context. Recognise by a matrix with labelled rows and columns (teams, results, subjects) and "Explain what … represents".`,
      questions: [
        {
          stem: String.raw`Three football teams, Ace, Bolt and Comet, each played 8 matches. The matrix $M$ shows the numbers of matches won, drawn and lost.

| | Won | Drawn | Lost |
| Ace | 5 | 2 | 1 |
| Bolt | 3 | 4 | 1 |
| Comet | 2 | 1 | 5 |

$$M = \begin{pmatrix} 5 & 2 & 1 \\ 3 & 4 & 1 \\ 2 & 1 & 5 \end{pmatrix}$$

A team scores 3 points for a win, 1 point for a draw and 0 points for a loss. $N = \begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix}$.`,
          parts: [
            { label: "(a)", text: String.raw`Evaluate $MN$.`, marks: 2 },
            { label: "(b)", text: String.raw`Explain what the elements of $MN$ represent.`, marks: 1 },
            { label: "(c)", text: String.raw`Evaluate $\begin{pmatrix} 1 & 1 & 1 \end{pmatrix} M$ and explain what your answer represents.`, marks: 2 },
            { label: "(d)", text: String.raw`The league decides to award 2 points for a draw instead. Write down the new column matrix of points and find which team would then have the most points.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N9-real-world",
      name: String.raw`Matrices in a longer real-world problem`,
      tests: String.raw`A Paper 2 style problem combining a sum of matrices (two time periods), a scalar multiple (a percentage change) and a product (total cost or takings). Recognise by sales or costs over several months or branches and a price change.`,
      questions: [
        {
          stem: String.raw`A café has two branches, East and West. It sells coffee, tea and juice. The numbers of cups sold in January and February are shown by the matrices $J$ and $F$, where the rows represent East and West and the columns represent coffee, tea and juice.

$$J = \begin{pmatrix} 120 & 80 & 60 \\ 90 & 110 & 70 \end{pmatrix}, \qquad F = \begin{pmatrix} 100 & 95 & 50 \\ 85 & 120 & 65 \end{pmatrix}$$

In January and February, a cup of coffee costs \$3.20, a cup of tea costs \$2.50 and a cup of juice costs \$4.00.`,
          parts: [
            { label: "(a)", text: String.raw`Find $J + F$.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down a column matrix $C$ for the prices and evaluate $(J + F)C$.`, marks: 2 },
            { label: "(c)", text: String.raw`State what the elements of $(J + F)C$ represent.`, marks: 1 },
            { label: "(d)", text: String.raw`In March, every price is increased by 10%. The numbers of cups sold in March are the same as in February. Using matrices, find the amount collected by each branch in March.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
