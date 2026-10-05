H2.addTopic({
  id: "3.1",
  title: "Basic Properties of Vectors",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Vector algebra, position vectors, magnitude, collinearity and the ratio theorem.`,
  syllabus: {
    include: [
      String.raw`addition and subtraction of vectors, multiplication of a vector by a scalar, and their geometrical interpretations`,
      String.raw`position vectors, displacement vectors and direction vectors`,
      String.raw`magnitude of a vector`,
      String.raw`unit vectors`,
      String.raw`distance between two points`,
      String.raw`collinearity`,
      String.raw`use of the ratio theorem in geometrical applications`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Vector algebra and its geometry`,
      body: String.raw`- **Addition**: triangle law $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$; equivalently the parallelogram law. Any route from $A$ to $C$ gives the same vector.
- **Subtraction**: $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \mathbf{b} - \mathbf{a}$ ("end minus start").
- **Scalar multiple**: $\lambda\mathbf{a}$ is parallel to $\mathbf{a}$, with magnitude $|\lambda||\mathbf{a}|$; same direction if $\lambda > 0$, opposite if $\lambda < 0$.
- $\mathbf{a}$ and $\mathbf{b}$ (non-zero) are **parallel** $\iff \mathbf{a} = \lambda\mathbf{b}$ for some scalar $\lambda$.
- In column form, $\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$; operations are done component by component.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6.2],
          equal: true,
          axes: false,
          segments: [
            { from: [1, 1], to: [6.6, 1.6], arrow: true, label: "a", pos: "s" },
            { from: [6.6, 1.6], to: [8.4, 5.2], arrow: true, label: "b", pos: "e" },
            { from: [1, 1], to: [8.4, 5.2], arrow: true, tone: "good", label: "a + b", pos: "nw" },
          ],
          points: [
            { x: 1, y: 1, label: "A", pos: "sw" },
          ],
          labels: [
            { x: 6.6, y: 1.6, text: "B", pos: "se" },
            { x: 8.4, y: 5.2, text: "C", pos: "n" },
          ],
          caption: String.raw`Triangle law: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$`,
          alt: "Triangle law: vector a from A to B followed by vector b from B to C gives the resultant a + b from A to C.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6.2],
          equal: true,
          axes: false,
          segments: [
            { from: [6.6, 1.6], to: [8.4, 5.8], dashed: true, tone: "muted", label: "b", pos: "e", style: "bold" },
            { from: [2.8, 5.2], to: [8.4, 5.8], dashed: true, tone: "muted", label: "a", pos: "n", style: "bold" },
            { from: [1, 1], to: [6.6, 1.6], arrow: true, label: "a", pos: "s" },
            { from: [1, 1], to: [2.8, 5.2], arrow: true, label: "b", pos: "w" },
            { from: [1, 1], to: [8.4, 5.8], arrow: true, tone: "good", label: "a + b", pos: "se", labelAt: [5.59, 3.98] },
          ],
          points: [
            { x: 1, y: 1, label: "O", pos: "sw" },
          ],
          caption: String.raw`Parallelogram law: the diagonal from the common tail is $\mathbf{a} + \mathbf{b}$`,
          alt: "Parallelogram law: vectors a and b drawn from the same point O; the diagonal of the parallelogram from O is a + b.",
        },
      ],
    },
    {
      title: String.raw`Position, displacement and direction vectors`,
      body: String.raw`- **Position vector** of $A$: $\overrightarrow{OA} = \mathbf{a}$, fixed relative to the origin $O$.
- **Displacement vector** $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$: describes the move from $A$ to $B$, independent of $O$.
- **Direction vector**: any non-zero vector giving a direction only; any non-zero scalar multiple will do, so simplify (e.g. $\begin{pmatrix}4\\-2\\6\end{pmatrix} \to \begin{pmatrix}2\\-1\\3\end{pmatrix}$).

Do not mix up points and vectors in your notation: write $A(1, 2, 3)$ but $\overrightarrow{OA} = \begin{pmatrix}1\\2\\3\end{pmatrix}$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6.2],
        equal: true,
        axes: false,
        segments: [
          { from: [1, 1], to: [7.4, 2], arrow: true, label: "a", pos: "s" },
          { from: [1, 1], to: [3.4, 5.4], arrow: true, label: "b", pos: "w" },
          { from: [7.4, 2], to: [3.4, 5.4], arrow: true, tone: "good", label: "b − a", pos: "ne" },
        ],
        points: [
          { x: 1, y: 1, label: "O", pos: "sw" },
        ],
        labels: [
          { x: 7.4, y: 2, text: "A", pos: "se" },
          { x: 3.4, y: 5.4, text: "B", pos: "n" },
        ],
        caption: String.raw`$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$: "end minus start", whatever the position of $O$`,
        alt: "Origin O with position vectors a to A and b to B; the displacement vector from A to B is b minus a.",
      },
    },
    {
      title: String.raw`Magnitude, unit vectors and distance`,
      body: String.raw`$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}, \qquad \hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}, \qquad AB = |\mathbf{b} - \mathbf{a}|.$$

- A vector of magnitude $k$ parallel to $\mathbf{a}$ is $\pm k\hat{\mathbf{a}}$ — remember **both** signs unless the direction is specified.
- $|\lambda\mathbf{a}| = |\lambda||\mathbf{a}|$, but in general $|\mathbf{a} + \mathbf{b}| \ne |\mathbf{a}| + |\mathbf{b}|$.
- Unknowns in a magnitude condition lead to a quadratic: square both sides and keep both roots unless one is ruled out.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5],
          equal: true,
          axes: false,
          segments: [
            { from: [1.2, 1.3], to: [7.29, 3.58], arrow: true, label: "a", pos: "nw", labelAt: [4.57, 2.56] },
            { from: [1.46, 0.6], to: [2.77, 1.09], arrow: true, tone: "good", label: "â", pos: "se", labelAt: [2.31, 0.91] },
          ],
          labels: [
            { x: 7.44, y: 3.63, text: "length |a|", pos: "e", style: "small", tone: "accent" },
            { x: 2.87, y: 0.99, text: "length 1", pos: "se", style: "small", tone: "good" },
          ],
          caption: String.raw`$\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}$: same direction as $\mathbf{a}$, length 1`,
          alt: "A long vector a and, parallel to it, a short unit vector a-hat of length 1 in the same direction.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5],
          equal: true,
          axes: false,
          segments: [
            { from: [0.59, 1.28], to: [9.41, 3.92], tone: "muted", thin: true, dashed: true },
            { from: [4.77, 3.37], to: [6.88, 4], arrow: true, label: "a", pos: "n" },
            { from: [5, 2.6], to: [8.64, 3.69], arrow: true, tone: "good", label: "kâ", pos: "s", labelAt: [7.49, 3.35] },
            { from: [5, 2.6], to: [1.36, 1.51], arrow: true, tone: "good", label: "−kâ", pos: "s", labelAt: [2.51, 1.85] },
          ],
          points: [
            { x: 5, y: 2.6 },
          ],
          caption: String.raw`Vectors of magnitude $k$ parallel to $\mathbf{a}$: $\pm k\hat{\mathbf{a}}$ (both directions)`,
          alt: "A vector a, and two vectors of length k along the same line: k a-hat in the direction of a and minus k a-hat in the opposite direction.",
        },
      ],
    },
    {
      title: String.raw`Collinearity`,
      body: String.raw`$A$, $B$ and $C$ are **collinear** $\iff \overrightarrow{AB} = \lambda\overrightarrow{AC}$ for some scalar $\lambda$.

For full marks state **both** facts: the vectors are parallel **and** they share a common point ($A$). Parallel alone only shows the lines are parallel.

The value of $\lambda$ gives the ratio and order: e.g. $\overrightarrow{AC} = 3\overrightarrow{AB}$ means $B$ lies between $A$ and $C$ with $AB : BC = 1 : 2$. A negative $\lambda$ means $A$ lies between the other two points.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 5.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.43, 1.09], to: [8.7, 4.15], tone: "muted", thin: true },
          { from: [0.83, 1.77], to: [3.13, 2.62], arrow: true, label: "AB", pos: "nw", style: "plain", labelAt: [1.86, 2.15] },
          { from: [0.6, 2.38], to: [7.5, 4.93], arrow: true, tone: "good", label: "AC = 3AB", pos: "nw", style: "plain", labelAt: [4.4, 3.78] },
        ],
        labels: [
          { x: 2.31, y: 1.3, text: "1", style: "small" },
          { x: 5.76, y: 2.58, text: "2", style: "small" },
        ],
        points: [
          { x: 1, y: 1.3, label: "A", pos: "se" },
          { x: 3.3, y: 2.15, label: "B", pos: "se" },
          { x: 7.9, y: 3.85, label: "C", pos: "se" },
        ],
        caption: String.raw`$\overrightarrow{AC} = 3\overrightarrow{AB}$ and common point $A$ $\Rightarrow$ collinear, with $AB : BC = 1 : 2$`,
        alt: "Points A, B, C on a straight line. The vector AC is three times the vector AB, so AB to BC is 1 to 2.",
      },
    },
    {
      title: String.raw`Ratio theorem (MF27)`,
      body: String.raw`If $P$ divides $AB$ internally in the ratio $AP : PB = \lambda : \mu$, then
$$\overrightarrow{OP} = \frac{\mu\mathbf{a} + \lambda\mathbf{b}}{\lambda + \mu}.$$

- Note the "cross-over": the coefficient of $\mathbf{a}$ is the part of the ratio **next to $B$**. Midpoint: $\tfrac{1}{2}(\mathbf{a} + \mathbf{b})$.
- Read the ratio carefully: $AP : PB$ is not $AP : AB$. Draw a quick line diagram.
- Conversely, $\overrightarrow{OP} = s\mathbf{a} + t\mathbf{b}$ with $s + t = 1$ means $P$ lies on line $AB$; if also $s, t > 0$, then $AP : PB = t : s$.
- For a point outside the segment ("$AB$ produced"), write the condition as a displacement, e.g. $\overrightarrow{BQ} = k\overrightarrow{AB}$, rather than forcing the formula.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6.2],
        equal: true,
        axes: false,
        segments: [
          { from: [2.6, 5.2], to: [9.2, 1.6], tone: "ink", thin: true },
          { from: [1, 0.8], to: [2.6, 5.2], arrow: true, label: "a", pos: "w" },
          { from: [1, 0.8], to: [9.2, 1.6], arrow: true, label: "b", pos: "s" },
          { from: [1, 0.8], to: [5.24, 3.76], arrow: true, tone: "good", label: "OP", pos: "se", style: "plain", labelAt: [3.33, 2.43] },
        ],
        labels: [
          { x: 4.11, y: 4.83, text: "λ", style: "italic" },
          { x: 7.41, y: 3.03, text: "μ", style: "italic" },
          { x: 2.6, y: 5.2, text: "A", pos: "n" },
          { x: 9.2, y: 1.6, text: "B", pos: "e" },
          { x: 5.24, y: 3.76, text: "P", pos: "ne" },
        ],
        points: [
          { x: 1, y: 0.8, label: "O", pos: "sw" },
        ],
        caption: String.raw`$AP : PB = \lambda : \mu \Rightarrow \overrightarrow{OP} = \frac{\mu\mathbf{a} + \lambda\mathbf{b}}{\lambda + \mu}$ (drawn with $\lambda : \mu = 2 : 3$)`,
        alt: "Triangle OAB with P on AB dividing it in the ratio lambda to mu; OP is drawn from the origin.",
      },
    },
    {
      title: String.raw`Intersections via two expressions`,
      body: String.raw`To find where two lines in a figure meet:

1. Express the point $X$ in two ways, e.g. $\overrightarrow{OX} = \overrightarrow{OA} + \lambda\overrightarrow{AP}$ and $\overrightarrow{OX} = \overrightarrow{OB} + \mu\overrightarrow{BM}$.
2. Write both in terms of the same two **non-zero, non-parallel** vectors $\mathbf{a}$ and $\mathbf{b}$.
3. Compare coefficients (valid **because** $\mathbf{a}$ and $\mathbf{b}$ are non-parallel — say so) and solve for $\lambda$ and $\mu$.

The parameter values give ratios directly: $\lambda = \tfrac{3}{5}$ above means $AX : XP = 3 : 2$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[1, 1], [9, 1], [3.6, 5.6]], tone: "ink" },
        ],
        segments: [
          { from: [9, 1], to: [2.3, 3.3], tone: "ink", thin: true },
          { from: [3.6, 5.6], to: [6.33, 1], tone: "ink", thin: true },
          { from: [1, 1], to: [5.4, 1], arrow: true, label: "a", pos: "s", labelAt: [5, 1] },
          { from: [5.4, 1], to: [9, 1], tone: "accent" },
          { from: [9, 1], to: [7.16, 1.63], arrow: true, label: "λAP", pos: "n", style: "plain", labelAt: [7.99, 1.35] },
          { from: [7.16, 1.63], to: [5.65, 2.15], tone: "accent" },
          { from: [1, 1], to: [1.86, 2.52], arrow: true, tone: "good", label: "b", pos: "w", labelAt: [2.87, 4.31] },
          { from: [1.86, 2.52], to: [3.6, 5.6], tone: "good" },
          { from: [3.6, 5.6], to: [4.73, 3.7], arrow: true, tone: "good", label: "μBM", pos: "e", style: "plain", labelAt: [4.17, 4.63] },
          { from: [4.73, 3.7], to: [5.65, 2.15], tone: "good" },
        ],
        points: [
          { x: 1, y: 1, label: "O", pos: "sw" },
          { x: 9, y: 1, label: "A", pos: "se" },
          { x: 3.6, y: 5.6, label: "B", pos: "n" },
          { x: 6.33, y: 1, label: "M", pos: "s" },
          { x: 2.3, y: 3.3, label: "P", pos: "w" },
          { x: 5.65, y: 2.15, label: "X", pos: "ne" },
        ],
        caption: String.raw`Reach $X$ by two routes, $\mathbf{a} + \lambda\overrightarrow{AP}$ and $\mathbf{b} + \mu\overrightarrow{BM}$, then compare coefficients`,
        alt: "Triangle OAB with lines AP and BM meeting at X. One route goes O to A then along AP to X; the other goes O to B then along BM to X.",
      },
    },
    {
      title: String.raw`Parallelograms and trapeziums`,
      body: String.raw`- $ABCD$ is a parallelogram $\iff \overrightarrow{AB} = \overrightarrow{DC}$ (equivalently $\mathbf{d} = \mathbf{a} + \mathbf{c} - \mathbf{b}$). Watch the vertex order.
- The diagonals of a parallelogram bisect each other: both have midpoint $\tfrac{1}{2}(\mathbf{a} + \mathbf{c}) = \tfrac{1}{2}(\mathbf{b} + \mathbf{d})$.
- A rhombus additionally has $|\overrightarrow{AB}| = |\overrightarrow{BC}|$.
- Trapezium $ABCD$ with $AB \parallel DC$: $\overrightarrow{DC} = k\overrightarrow{AB}$, where $k$ is the ratio of the parallel sides.
- In "show that" proofs, end with a clear concluding statement linking the vector equation to the geometric property.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1, 1], [6.4, 1], [8.8, 4.8], [3.4, 4.8]], tone: "ink" },
          ],
          segments: [
            { from: [1, 1], to: [8.8, 4.8], tone: "muted", thin: true, dashed: true },
            { from: [6.4, 1], to: [3.4, 4.8], tone: "muted", thin: true, dashed: true },
            { from: [1, 1], to: [3.97, 1], arrow: true },
            { from: [3.4, 4.8], to: [6.37, 4.8], arrow: true },
            { from: [2.88, 2.09], to: [3.02, 1.81], tone: "muted", thin: true },
            { from: [6.78, 3.99], to: [6.92, 3.71], tone: "muted", thin: true },
            { from: [5.57, 1.79], to: [5.83, 1.99], tone: "muted", thin: true },
            { from: [5.47, 1.91], to: [5.73, 2.11], tone: "muted", thin: true },
            { from: [4.07, 3.69], to: [4.33, 3.89], tone: "muted", thin: true },
            { from: [3.97, 3.81], to: [4.23, 4.01], tone: "muted", thin: true },
          ],
          points: [
            { x: 1, y: 1, label: "A", pos: "sw" },
            { x: 6.4, y: 1, label: "B", pos: "se" },
            { x: 8.8, y: 4.8, label: "C", pos: "ne" },
            { x: 3.4, y: 4.8, label: "D", pos: "nw" },
            { x: 4.9, y: 2.9 },
          ],
          caption: String.raw`Parallelogram: $\overrightarrow{AB} = \overrightarrow{DC}$; diagonals bisect each other`,
          alt: "Parallelogram ABCD with equal arrows on AB and DC; the diagonals cross at their common midpoint.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.8, 1], [9.2, 1], [7.2, 4.8], [3, 4.8]], tone: "ink" },
          ],
          segments: [
            { from: [0.8, 1], to: [5.42, 1], arrow: true },
            { from: [3, 4.8], to: [5.31, 4.8], arrow: true },
          ],
          points: [
            { x: 0.8, y: 1, label: "A", pos: "sw" },
            { x: 9.2, y: 1, label: "B", pos: "se" },
            { x: 7.2, y: 4.8, label: "C", pos: "ne" },
            { x: 3, y: 4.8, label: "D", pos: "nw" },
          ],
          caption: String.raw`Trapezium: $\overrightarrow{DC} = k\overrightarrow{AB}$ (here $k = \tfrac{1}{2}$)`,
          alt: "Trapezium ABCD with AB parallel to DC; DC is half the length of AB.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "3.1-vectors-in-figures",
      name: String.raw`Expressing vectors in a geometric figure`,
      tests: String.raw`Using the triangle law, parallel sides and midpoints to write vectors in a polygon in terms of two given vectors, and interpreting the resulting expressions geometrically.`,
      questions: [
        {
          stem: String.raw`The diagram shows a regular hexagon $ABCDEF$. It is given that $\overrightarrow{AB} = \mathbf{p}$ and $\overrightarrow{BC} = \mathbf{q}$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[3.65, 0.66], [6.35, 0.66], [7.7, 3], [6.35, 5.34], [3.65, 5.34], [2.3, 3]], tone: "ink" },
            ],
            segments: [
              { from: [3.65, 0.66], to: [5.14, 0.66], arrow: true, label: "p", pos: "s", labelAt: [5, 0.66] },
              { from: [5.14, 0.66], to: [6.35, 0.66], tone: "accent" },
              { from: [6.35, 0.66], to: [7.09, 1.95], arrow: true, label: "q", pos: "e", labelAt: [6.76, 1.36] },
              { from: [7.09, 1.95], to: [7.7, 3], tone: "accent" },
            ],
            points: [
              { x: 3.65, y: 0.66, label: "A", pos: "sw" },
              { x: 6.35, y: 0.66, label: "B", pos: "se" },
              { x: 7.7, y: 3, label: "C", pos: "e" },
              { x: 6.35, y: 5.34, label: "D", pos: "ne" },
              { x: 3.65, y: 5.34, label: "E", pos: "nw" },
              { x: 2.3, y: 3, label: "F", pos: "w" },
            ],
            alt: "Regular hexagon ABCDEF with vector p along AB and vector q along BC.",
          },
          parts: [
            { label: "(i)", text: String.raw`Explain why $\overrightarrow{AD} = 2\mathbf{q}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Express $\overrightarrow{CD}$ and $\overrightarrow{AE}$ in terms of $\mathbf{p}$ and $\mathbf{q}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`The point $M$ is the midpoint of $DE$. Find $\overrightarrow{AM}$ in terms of $\mathbf{p}$ and $\mathbf{q}$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Given that $|\mathbf{p}| = 2$, write down the value of $|\overrightarrow{AD}|$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a quadrilateral $OABC$ with $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OB} = \mathbf{b}$ and $\overrightarrow{OC} = \mathbf{c}$. The points $P$, $Q$, $R$ and $S$ are the midpoints of $OA$, $AB$, $BC$ and $CO$ respectively.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6.2],
            equal: true,
            axes: false,
            polygons: [
              { points: [[4.7, 0.75], [8.8, 2.6], [5.8, 5], [1.7, 3.15]], tone: "muted", dashed: true },
            ],
            segments: [
              { from: [8.4, 0.6], to: [9.2, 4.6], tone: "ink" },
              { from: [9.2, 4.6], to: [2.4, 5.4], tone: "ink" },
              { from: [1, 0.9], to: [3.52, 0.8], arrow: true, label: "a", pos: "s", labelAt: [2.63, 0.83] },
              { from: [3.52, 0.8], to: [8.4, 0.6], tone: "accent" },
              { from: [1, 0.9], to: [5.51, 2.94], arrow: true, label: "b", pos: "nw", labelAt: [5.51, 2.94] },
              { from: [5.51, 2.94], to: [9.2, 4.6], tone: "accent" },
              { from: [1, 0.9], to: [1.48, 2.43], arrow: true, label: "c", pos: "w", labelAt: [1.31, 1.89] },
              { from: [1.48, 2.43], to: [2.4, 5.4], tone: "accent" },
            ],
            points: [
              { x: 1, y: 0.9, label: "O", pos: "sw" },
              { x: 8.4, y: 0.6, label: "A", pos: "se" },
              { x: 9.2, y: 4.6, label: "B", pos: "ne" },
              { x: 2.4, y: 5.4, label: "C", pos: "nw" },
              { x: 4.7, y: 0.75, label: "P", pos: "s" },
              { x: 8.8, y: 2.6, label: "Q", pos: "e" },
              { x: 5.8, y: 5, label: "R", pos: "n" },
              { x: 1.7, y: 3.15, label: "S", pos: "w" },
            ],
            alt: "Quadrilateral OABC with position vectors a, b, c from O, and the midpoints P, Q, R, S of OA, AB, BC, CO joined by dashed lines.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{PQ}$ and $\overrightarrow{SR}$ in terms of $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$. Hence show that $PQRS$ is a parallelogram.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show that if the diagonals $OB$ and $AC$ of $OABC$ are equal in length, then $PQRS$ is a rhombus.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.1-magnitude-unit-distance",
      name: String.raw`Magnitude, unit vectors and distance between points`,
      tests: String.raw`Computing $|\overrightarrow{AB}|$, unit vectors and vectors of a given length parallel to a given direction, and solving for an unknown coordinate from a distance condition.`,
      questions: [
        {
          stem: String.raw`The points $A$ and $B$ have coordinates $(1, -2, 3)$ and $(3, 1, -3)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the distance $AB$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the unit vector in the direction of $\overrightarrow{AB}$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the vectors of magnitude 21 which are parallel to $\overrightarrow{AB}$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $2\mathbf{i} + p\mathbf{j} - \mathbf{k}$ and $5\mathbf{i} + \mathbf{j} + 3\mathbf{k}$ respectively, where $p$ is a constant. Given that the distance $AB$ is 13 units, find the possible values of $p$.`,
          marks: 3,
        },
      ],
    },
    {
      id: "3.1-collinearity",
      name: String.raw`Collinearity: showing it, or finding unknowns`,
      tests: String.raw`Showing three points are collinear (parallel vectors with a common point), deducing the ratio in which one divides the others, or finding unknown coordinates or coefficients so that points are collinear.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 2, -1)$, $(3, -1, 4)$ and $(7, -7, 14)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $A$, $B$ and $C$ are collinear.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the ratio $AB : BC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The point $D$ with coordinates $(p, 11, q)$ lies on the line passing through $A$ and $B$. Find the values of $p$ and $q$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, where $\mathbf{a}$ and $\mathbf{b}$ are non-zero and non-parallel. The point $C$ has position vector $3\mathbf{a} - 2\mathbf{b}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $A$, $B$ and $C$ are collinear.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the ratio $BA : AC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The point $D$ has position vector $k\mathbf{a} + 4\mathbf{b}$. Given that $D$ also lies on the line $AB$, find the value of $k$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.1-ratio-theorem",
      name: String.raw`Ratio theorem: point dividing a line segment`,
      tests: String.raw`Applying the ratio theorem to find the position vector of a dividing point (including midpoints and points on a line produced), and reading off a ratio from a given position vector.`,
      questions: [
        {
          stem: String.raw`The points $A$ and $B$ have coordinates $(-1, 4, 2)$ and $(4, -1, 7)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`The point $P$ lies on $AB$ such that $AP : PB = 2 : 3$. Find the coordinates of $P$.`, marks: 2 },
            { label: "(ii)", text: String.raw`The point $C$ is such that $B$ is the midpoint of $AC$. Find the coordinates of $C$.`, marks: 2 },
            { label: "(iii)", text: String.raw`The point $Q$ lies on $AB$ produced such that $AB : BQ = 5 : 1$. Find the coordinates of $Q$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively. The point $M$ lies on $OA$ such that $OM : MA = 1 : 2$, and the point $N$ lies on $AB$ such that $AN : NB = 3 : 1$, as shown in the diagram.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6.2],
            equal: true,
            axes: false,
            segments: [
              { from: [3, 5.4], to: [9.2, 1.4], tone: "ink" },
              { from: [1.67, 2.4], to: [7.65, 2.4], tone: "ink", thin: true },
              { from: [1, 0.9], to: [2.4, 4.05], arrow: true, label: "a", pos: "w", labelAt: [2, 3.15] },
              { from: [2.4, 4.05], to: [3, 5.4], tone: "accent" },
              { from: [1, 0.9], to: [5.51, 1.18], arrow: true, label: "b", pos: "s", labelAt: [5.1, 1.15] },
              { from: [5.51, 1.18], to: [9.2, 1.4], tone: "accent" },
            ],
            points: [
              { x: 1, y: 0.9, label: "O", pos: "sw" },
              { x: 3, y: 5.4, label: "A", pos: "n" },
              { x: 9.2, y: 1.4, label: "B", pos: "e" },
              { x: 1.67, y: 2.4, label: "M", pos: "w" },
              { x: 7.65, y: 2.4, label: "N", pos: "ne" },
            ],
            alt: "Triangle OAB with M on OA one third of the way from O, and N on AB three quarters of the way from A; M and N are joined.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{ON}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\overrightarrow{MN}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 2 },
            { label: "(iii)", text: String.raw`The point $P$ has position vector $\frac{2}{7}\mathbf{a} + \frac{5}{7}\mathbf{b}$. Show that $P$ lies on $AB$ and find the ratio $AP : PB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.1-intersection-two-expressions",
      name: String.raw`Intersection of lines in a figure via two expressions`,
      tests: String.raw`Writing the position vector of an intersection point in two ways, comparing coefficients of non-parallel vectors, and deducing ratios — typically in a triangle or parallelogram.`,
      questions: [
        {
          stem: String.raw`In the triangle $OAB$ shown in the diagram, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. The point $M$ is the midpoint of $OA$ and the point $P$ lies on $OB$ such that $OP : PB = 1 : 2$. The lines $AP$ and $BM$ meet at the point $X$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6.2],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1, 1], [9, 1], [3.8, 5.6]], tone: "ink" },
            ],
            segments: [
              { from: [9, 1], to: [1.93, 2.53], tone: "ink", thin: true },
              { from: [3.8, 5.6], to: [5, 1], tone: "ink", thin: true },
              { from: [1, 1], to: [3.4, 1], arrow: true, label: "a", pos: "s" },
              { from: [1, 1], to: [3.1, 4.45], arrow: true, label: "b", pos: "w", labelAt: [2.74, 3.85] },
            ],
            points: [
              { x: 1, y: 1, label: "O", pos: "sw" },
              { x: 9, y: 1, label: "A", pos: "se" },
              { x: 3.8, y: 5.6, label: "B", pos: "n" },
              { x: 5, y: 1, label: "M", pos: "s" },
              { x: 1.93, y: 2.53, label: "P", pos: "w" },
              { x: 4.76, y: 1.92, label: "X", pos: "n" },
            ],
            alt: "Triangle OAB with M the midpoint of OA and P one third of the way along OB from O; lines AP and BM cross at X.",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that $\overrightarrow{OX} = \frac{2}{5}\mathbf{a} + \frac{1}{5}\mathbf{b}$.`, marks: 5 },
            { label: "(ii)", text: String.raw`Find the ratio $AX : XP$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The line $OX$ produced meets $AB$ at $Q$. Show that $AQ : QB = 1 : 2$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The diagram shows a parallelogram $OABC$ with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. The point $M$ is the midpoint of $BC$, and the lines $OM$ and $AC$ intersect at $X$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 5.8],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1, 1], [7.2, 1], [9, 4.8], [2.8, 4.8]], tone: "ink" },
            ],
            segments: [
              { from: [1, 1], to: [5.9, 4.8], tone: "ink", thin: true },
              { from: [7.2, 1], to: [2.8, 4.8], tone: "ink", thin: true },
              { from: [1, 1], to: [3.48, 1], arrow: true, label: "a", pos: "s" },
              { from: [1, 1], to: [1.9, 2.9], arrow: true, label: "c", pos: "w" },
            ],
            points: [
              { x: 1, y: 1, label: "O", pos: "sw" },
              { x: 7.2, y: 1, label: "A", pos: "se" },
              { x: 9, y: 4.8, label: "B", pos: "ne" },
              { x: 2.8, y: 4.8, label: "C", pos: "nw" },
              { x: 5.9, y: 4.8, label: "M", pos: "n" },
              { x: 4.27, y: 3.53, label: "X", pos: "e" },
            ],
            alt: "Parallelogram OABC with M the midpoint of BC; the lines OM and AC cross at X.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{OM}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\overrightarrow{OX}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Hence show that $X$ divides both $OM$ and $AC$ in the ratio $2 : 1$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.1-parallelogram-trapezium",
      name: String.raw`Parallelogram and trapezium properties`,
      tests: String.raw`Using $\overrightarrow{AB} = \overrightarrow{DC}$ (or $\overrightarrow{DC} = k\overrightarrow{AB}$) to find a missing vertex, the intersection of diagonals, or to prove a property of the shape.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 0, 2)$, $(4, 1, -1)$ and $(6, 5, 1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the point $D$ such that $ABCD$ is a parallelogram.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the coordinates of the point where the diagonals of $ABCD$ meet.`, marks: 1 },
            { label: "(iii)", text: String.raw`Determine whether $ABCD$ is a rhombus, justifying your answer.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows a trapezium $OABC$ in which $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OC} = \mathbf{c}$ and $\overrightarrow{CB} = 2\mathbf{a}$. The diagonals $OB$ and $AC$ intersect at $X$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 5.8],
            equal: true,
            axes: false,
            polygons: [
              { points: [[2, 1], [5.1, 1], [7.2, 4.8], [1, 4.8]], tone: "ink" },
            ],
            segments: [
              { from: [2, 1], to: [7.2, 4.8], tone: "ink", thin: true },
              { from: [5.1, 1], to: [1, 4.8], tone: "ink", thin: true },
              { from: [2, 1], to: [3.86, 1], arrow: true, label: "a", pos: "s" },
              { from: [2, 1], to: [1.5, 2.9], arrow: true, label: "c", pos: "w" },
              { from: [1, 4.8], to: [4.41, 4.8], arrow: true, label: "2a", pos: "n" },
            ],
            points: [
              { x: 2, y: 1, label: "O", pos: "sw" },
              { x: 5.1, y: 1, label: "A", pos: "se" },
              { x: 7.2, y: 4.8, label: "B", pos: "ne" },
              { x: 1, y: 4.8, label: "C", pos: "nw" },
              { x: 3.73, y: 2.27, label: "X", pos: "e" },
            ],
            alt: "Trapezium OABC with OA parallel to CB, where CB is twice OA; the diagonals OB and AC cross at X.",
          },
          parts: [
            { label: "(i)", text: String.raw`Express $\overrightarrow{OB}$ and $\overrightarrow{AC}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\overrightarrow{OX}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Show that $OX : XB = AX : XC$, and state this ratio.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
