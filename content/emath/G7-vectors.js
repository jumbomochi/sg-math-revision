H2.addTopic({
  id: "G7",
  title: "Vectors in Two Dimensions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Vector notation, column vectors and magnitude, addition and scalar multiples, position vectors, translations and geometric problems with vectors.`,
  syllabus: {
    include: [
      String.raw`use of notations: $\begin{pmatrix}x\\y\end{pmatrix}$, $\overrightarrow{AB}$, $\mathbf{a}$, $|\overrightarrow{AB}|$ and $|\mathbf{a}|$`,
      String.raw`representing a vector as a directed line segment`,
      String.raw`translation by a vector`,
      String.raw`position vectors`,
      String.raw`magnitude of a vector $\begin{pmatrix}x\\y\end{pmatrix}$ as $\sqrt{x^2 + y^2}$`,
      String.raw`use of sum and difference of two vectors to express given vectors in terms of two coplanar vectors`,
      String.raw`multiplication of a vector by a scalar`,
      String.raw`geometric problems involving the use of vectors`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Vectors and notation`,
      body: String.raw`A **vector** has both **size** (magnitude) and **direction**. It is drawn as a directed line segment — an arrow.

- $\overrightarrow{AB}$ is the vector from $A$ to $B$. A single letter vector is printed in bold, $\mathbf{a}$; in handwriting, underline it: $\underset{\sim}{a}$ or $\underline{a}$.
- **Column vector** $\begin{pmatrix}x\\y\end{pmatrix}$: move $x$ units right and $y$ units up (negative means left or down).
- **Equal vectors** have the same magnitude **and** the same direction, wherever they are drawn.
- $-\mathbf{a}$ has the same magnitude as $\mathbf{a}$ but the **opposite** direction: $\overrightarrow{BA} = -\overrightarrow{AB}$.
- A vector is **not** a point. $\overrightarrow{AB} = \begin{pmatrix}3\\2\end{pmatrix}$ does not mean $B$ is at $(3, 2)$.`,
      figure: {
        type: "plot",
        x: [-0.3, 10.3], y: [-0.3, 5.3], equal: true, axes: false,
        segments: [
          ...Array.from({ length: 11 }, (_, i) => ({ from: [i, 0], to: [i, 5], tone: "muted", thin: true })),
          ...Array.from({ length: 6 }, (_, j) => ({ from: [0, j], to: [10, j], tone: "muted", thin: true })),
          { from: [1, 1], to: [4, 3], arrow: true, label: "a", pos: "nw" },
          { from: [5, 2], to: [8, 4], arrow: true, label: "a", pos: "nw" },
          { from: [9, 3], to: [6, 1], arrow: true, tone: "good", label: "−a", pos: "se" },
        ],
        caption: String.raw`The two vectors $\mathbf{a} = \begin{pmatrix}3\\2\end{pmatrix}$ are equal. The vector $-\mathbf{a} = \begin{pmatrix}-3\\-2\end{pmatrix}$ points the other way.`,
        alt: "A square grid with two equal arrows labelled a, each 3 right and 2 up, and an arrow labelled minus a, 3 left and 2 down.",
      },
    },
    {
      title: String.raw`Magnitude of a vector`,
      body: String.raw`The **magnitude** (length) of $\begin{pmatrix}x\\y\end{pmatrix}$ is (memorise)
$$\left|\begin{pmatrix}x\\y\end{pmatrix}\right| = \sqrt{x^2 + y^2}.$$

- $|\overrightarrow{AB}|$ is the length of the line segment $AB$.
- Magnitude is never negative. $|-\mathbf{a}| = |\mathbf{a}|$ and $|k\mathbf{a}| = |k|\,|\mathbf{a}|$.
- Add the vectors **first**, then find the magnitude: $|\mathbf{a} + \mathbf{b}|$ is usually **not** $|\mathbf{a}| + |\mathbf{b}|$.`,
      figure: {
        type: "plot",
        x: [-0.4, 6.4], y: [-0.4, 4.6], equal: true, axes: false,
        segments: [
          ...Array.from({ length: 7 }, (_, i) => ({ from: [i, 0], to: [i, 4.5], tone: "muted", thin: true })),
          ...Array.from({ length: 5 }, (_, j) => ({ from: [0, j], to: [6, j], tone: "muted", thin: true })),
          { from: [1, 0], to: [5, 0], dashed: true, tone: "ink", label: "4", pos: "s", style: "plain" },
          { from: [5, 0], to: [5, 3], dashed: true, tone: "ink", label: "3", pos: "e", style: "plain" },
          { from: [1, 0], to: [5, 3], arrow: true, label: "|AB| = 5", pos: "nw", style: "plain" },
        ],
        points: [
          { x: 1, y: 0, label: "A", pos: "sw", style: "italic" },
          { x: 5, y: 3, label: "B", pos: "ne", style: "italic" },
        ],
        caption: String.raw`$\overrightarrow{AB} = \begin{pmatrix}4\\3\end{pmatrix}$, so $|\overrightarrow{AB}| = \sqrt{4^2 + 3^2} = 5$.`,
        alt: "On a grid, the vector AB goes 4 right and 3 up. Its length is 5 by Pythagoras.",
      },
    },
    {
      title: String.raw`Adding and subtracting vectors`,
      body: String.raw`**Triangle law**: go along one vector, then the next. The **result** joins the start to the end.
$$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$$

- With column vectors, add or subtract the components: $\begin{pmatrix}4\\1\end{pmatrix} + \begin{pmatrix}1\\3\end{pmatrix} = \begin{pmatrix}5\\4\end{pmatrix}$.
- Subtracting means adding the negative: $\mathbf{a} - \mathbf{b} = \mathbf{a} + (-\mathbf{b})$.
- The middle letters must match to chain vectors: $\overrightarrow{PQ} + \overrightarrow{QR} + \overrightarrow{RS} = \overrightarrow{PS}$.
- Going **against** an arrow gives a minus sign.`,
      figure: {
        type: "plot",
        x: [-0.8, 6.6], y: [-0.7, 4.7], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [4, 1], arrow: true, label: "a", pos: "se" },
          { from: [4, 1], to: [5, 4], arrow: true, label: "b", pos: "e" },
          { from: [0, 0], to: [5, 4], arrow: true, tone: "good", label: "a + b", pos: "nw" },
        ],
        points: [
          { x: 0, y: 0, label: "A", pos: "sw", style: "italic" },
          { x: 4, y: 1, label: "B", pos: "se", style: "italic" },
          { x: 5, y: 4, label: "C", pos: "n", style: "italic" },
        ],
        caption: String.raw`$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$: $\mathbf{a}$ followed by $\mathbf{b}$ gives $\mathbf{a} + \mathbf{b}$.`,
        alt: "Triangle law: arrow a from A to B, then arrow b from B to C. The resultant arrow a + b goes directly from A to C.",
      },
    },
    {
      title: String.raw`Scalar multiples and parallel vectors`,
      body: String.raw`$k\mathbf{a}$ is parallel to $\mathbf{a}$ and $|k|$ times as long.

- $k > 0$: same direction. $k < 0$: opposite direction.
- $k\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}kx\\ky\end{pmatrix}$.
- **Key fact**: if $\overrightarrow{PQ} = k\,\overrightarrow{RS}$, then $PQ$ is **parallel** to $RS$ and $PQ = |k| \times RS$ in length.
- To show two vectors are parallel, write one as a number times the other, e.g. $\begin{pmatrix}6\\-9\end{pmatrix} = 3\begin{pmatrix}2\\-3\end{pmatrix}$.`,
      figure: {
        type: "plot",
        x: [-0.5, 12], y: [-0.7, 3.0], equal: true, axes: false,
        segments: [
          { from: [0, 0.4], to: [2, 1.4], arrow: true, label: "a", pos: "nw" },
          { from: [3.5, 0.4], to: [7.5, 2.4], arrow: true, tone: "good", label: "2a", pos: "nw" },
          { from: [11.5, 2.2], to: [8.5, 0.7], arrow: true, tone: "warn", label: "−1.5a", pos: "se" },
        ],
        caption: String.raw`$2\mathbf{a}$ is twice as long in the same direction; $-1.5\mathbf{a}$ is 1.5 times as long in the opposite direction.`,
        alt: "Three parallel arrows: a, then 2a twice as long in the same direction, then minus 1.5 a, one and a half times as long and pointing the opposite way.",
      },
    },
    {
      title: String.raw`Position vectors`,
      body: String.raw`The **position vector** of a point $A$ is $\overrightarrow{OA}$, the vector from the origin $O$ to $A$. If $A$ is $(x, y)$, then $\overrightarrow{OA} = \begin{pmatrix}x\\y\end{pmatrix}$.

$$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \mathbf{b} - \mathbf{a}$$

- Read it as "go back from $A$ to $O$, then out to $B$": $\overrightarrow{AB} = -\mathbf{a} + \mathbf{b}$.
- "End minus start" — a very common error is to write $\mathbf{a} - \mathbf{b}$.
- To find a point: $\overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{AB}$, then read off the coordinates.`,
      figure: {
        type: "plot",
        x: [-0.8, 6.4], y: [-0.7, 4.8], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [5, 1], arrow: true, label: "a", pos: "s" },
          { from: [0, 0], to: [2, 4], arrow: true, label: "b", pos: "w" },
          { from: [5, 1], to: [2, 4], arrow: true, tone: "good", label: "b − a", pos: "ne" },
        ],
        points: [
          { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
          { x: 5, y: 1, label: "A", pos: "e", style: "italic" },
          { x: 2, y: 4, label: "B", pos: "n", style: "italic" },
        ],
        caption: String.raw`$\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$: end minus start.`,
        alt: "Origin O with position vectors a to point A and b to point B. The vector from A to B is b minus a.",
      },
    },
    {
      title: String.raw`Translation by a vector`,
      body: String.raw`A **translation** by $\begin{pmatrix}x\\y\end{pmatrix}$ moves **every** point of a shape $x$ units right and $y$ units up. The image is congruent to the original and faces the same way.

- Image of the point $(p, q)$ under translation by $\begin{pmatrix}x\\y\end{pmatrix}$ is $(p + x,\ q + y)$.
- To find the translation vector, pick one point and its image, and work out "image minus original".
- Two translations one after the other: **add** the vectors.
- To undo a translation by $\mathbf{v}$, translate by $-\mathbf{v}$.`,
    },
    {
      title: String.raw`Expressing vectors in terms of two vectors`,
      body: String.raw`In a figure where $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$, every other vector can be written as a combination of $\mathbf{a}$ and $\mathbf{b}$.

- Find a **route** along known vectors, e.g. $\overrightarrow{OP} = \overrightarrow{OA} + \overrightarrow{AP}$.
- **Ratios**: if $P$ is on $AB$ with $AP : PB = 1 : 2$, then $AP$ is $\frac{1}{3}$ of $AB$, so $\overrightarrow{AP} = \frac{1}{3}\overrightarrow{AB}$.
- Midpoint $M$ of $AB$: $\overrightarrow{AM} = \frac{1}{2}\overrightarrow{AB}$.
- Use the given parallel sides: in a parallelogram $OABC$, $\overrightarrow{CB} = \overrightarrow{OA}$.
- Simplify fully: collect the $\mathbf{a}$ terms and the $\mathbf{b}$ terms.`,
      figure: {
        type: "plot",
        x: [-0.8, 7.4], y: [-0.8, 4.9], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [6, 0], arrow: true, label: "a", pos: "s" },
          { from: [0, 0], to: [2, 4], arrow: true, label: "b", pos: "w" },
          { from: [6, 0], to: [2, 4], tone: "ink" },
          { from: [0, 0], to: [4.667, 1.333], arrow: true, tone: "good" },
        ],
        points: [
          { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
          { x: 6, y: 0, label: "A", pos: "se", style: "italic" },
          { x: 2, y: 4, label: "B", pos: "n", style: "italic" },
          { x: 4.667, y: 1.333, label: "P", pos: "ne", style: "italic" },
        ],
        labels: [
          { x: 5.33, y: 0.67, text: "1", pos: "ne", style: "small" },
          { x: 3.33, y: 2.67, text: "2", pos: "ne", style: "small" },
        ],
        caption: String.raw`$AP : PB = 1 : 2$, so $\overrightarrow{OP} = \mathbf{a} + \frac{1}{3}(\mathbf{b} - \mathbf{a}) = \frac{2}{3}\mathbf{a} + \frac{1}{3}\mathbf{b}$.`,
        alt: "Triangle OAB with OA = a and OB = b. P divides AB in the ratio 1 to 2, and the vector OP is drawn.",
      },
    },
    {
      title: String.raw`Proving parallel lines and collinear points`,
      body: String.raw`- **Parallel**: show $\overrightarrow{PQ} = k\,\overrightarrow{RS}$ for a number $k$. Then $PQ \parallel RS$, and $PQ : RS = |k| : 1$.
- **Collinear** (on one straight line): show, for example, $\overrightarrow{OY} = k\,\overrightarrow{OX}$. Then $OY$ and $OX$ are parallel **and share the point** $O$, so $O$, $X$ and $Y$ lie on a straight line.
- Always write the full reason: "$\overrightarrow{OY} = 4\overrightarrow{OX}$, so $OY$ is parallel to $OX$; since $O$ is a common point, $O$, $X$, $Y$ are collinear."
- The number $k$ also gives the ratio: $\overrightarrow{OY} = 4\overrightarrow{OX}$ means $OX : XY = 1 : 3$.`,
      figure: {
        type: "plot",
        x: [-0.8, 9.2], y: [-0.8, 4.4], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [8.4, 3.6], tone: "muted", dashed: true, thin: true },
          { from: [0, 0], to: [2.1, 0.9], arrow: true, label: "OX", pos: "n", style: "plain" },
          { from: [2.1, 0.9], to: [8.4, 3.6], arrow: true, tone: "good", label: "XY = 3 OX", pos: "nw", style: "plain" },
        ],
        points: [
          { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
          { x: 2.1, y: 0.9, label: "X", pos: "se", style: "italic" },
          { x: 8.4, y: 3.6, label: "Y", pos: "ne", style: "italic" },
        ],
        caption: String.raw`$\overrightarrow{OY} = 4\overrightarrow{OX}$ with common point $O$: $O$, $X$, $Y$ are collinear and $OX : XY = 1 : 3$.`,
        alt: "Three points O, X and Y on one straight line. The vector from X to Y is three times the vector from O to X.",
      },
    },
    {
      title: String.raw`Ratio of areas in vector problems`,
      body: String.raw`Two common results:

- **Same height**: triangles with bases on the same line and the same apex have areas in the ratio of their **bases**.
- **Similar triangles**: if $PQ \parallel AB$ and $PQ = k \times AB$, the triangles are similar and their areas are in the ratio $k^2 : 1$.
- Find the length ratio from the vectors first (e.g. $\overrightarrow{PQ} = \frac{3}{4}\overrightarrow{AB}$), then square it for areas.
- For a region such as a trapezium, subtract: area $PABQ$ $=$ area $OAB$ $-$ area $OPQ$.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 9.8], y: [-0.8, 6.8], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [8, 0], [4, 6]], fill: true, tone: "muted" },
            { points: [[0, 0], [6, 0], [3, 4.5]], fill: true, tone: "accent" },
          ],
          points: [
            { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
            { x: 6, y: 0, label: "P", pos: "s", style: "italic" },
            { x: 8, y: 0, label: "A", pos: "se", style: "italic" },
            { x: 3, y: 4.5, label: "Q", pos: "w", style: "italic" },
            { x: 4, y: 6, label: "B", pos: "n", style: "italic" },
          ],
          caption: String.raw`$PQ \parallel AB$, $PQ = \frac{3}{4}AB$: area ratio $9 : 16$.`,
          alt: "Triangle OAB with P on OA and Q on OB such that PQ is parallel to AB and three-quarters of its length. The smaller triangle OPQ is shaded.",
        },
        {
          type: "plot",
          x: [-0.6, 9.8], y: [-0.8, 6.8], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [3, 0], [4, 5]], fill: true, tone: "accent" },
            { points: [[3, 0], [9, 0], [4, 5]], fill: true, tone: "good" },
          ],
          segments: [{ from: [4, 5], to: [4, 0], dashed: true, thin: true, tone: "muted" }],
          points: [
            { x: 0, y: 0, label: "A", pos: "sw", style: "italic" },
            { x: 3, y: 0, label: "D", pos: "s", style: "italic" },
            { x: 9, y: 0, label: "B", pos: "se", style: "italic" },
            { x: 4, y: 5, label: "C", pos: "n", style: "italic" },
          ],
          caption: String.raw`Same height: area $ACD$ : area $DCB$ $= AD : DB = 1 : 2$.`,
          alt: "Triangle ABC split by a line from C to D on AB, where AD is one third of AB. The two triangles share the same height, so their areas are in the ratio 1 to 2.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "G7-column-vectors-magnitude",
      name: String.raw`Column vector arithmetic and magnitude`,
      tests: String.raw`Adding, subtracting and multiplying column vectors by scalars, finding magnitudes, and finding unknowns from a given magnitude or from a parallel condition.`,
      questions: [
        {
          stem: String.raw`$\mathbf{a} = \begin{pmatrix}3\\-4\end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix}-1\\2\end{pmatrix}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find $2\mathbf{a} - 3\mathbf{b}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $|\mathbf{a}|$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the value of $k$ for which $\mathbf{a} + k\mathbf{b}$ is parallel to the $x$-axis.`, marks: 2 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`$\mathbf{p} = \begin{pmatrix}5\\t\end{pmatrix}$, where $t$ is a constant, and $|\mathbf{p}| = 13$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the possible values of $t$.`, marks: 2 },
            { label: "(b)", text: String.raw`$\mathbf{q} = \begin{pmatrix}10\\-24\end{pmatrix}$. For one of the values of $t$ found in part (a), $\mathbf{q}$ is parallel to $\mathbf{p}$. State this value of $t$ and explain your answer.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G7-position-vectors",
      name: String.raw`Position vectors and coordinates`,
      tests: String.raw`Moving between coordinates and position vectors, using $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$, finding lengths, and finding a missing vertex of a parallelogram.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(2, -1)$, $(5, 3)$ and $(-1, 5)$ respectively.`,
          parts: [
            { label: "(a)", text: String.raw`Write down $\overrightarrow{OA}$ as a column vector.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $\overrightarrow{AB}$ and $|\overrightarrow{AB}|$.`, marks: 2 },
            { label: "(c)", text: String.raw`$ABCD$ is a parallelogram. Find the coordinates of $D$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find $|\overrightarrow{AC}|$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G7-translation",
      name: String.raw`Translation by a vector`,
      tests: String.raw`Describing a translation shown on a grid by its column vector, finding images of points, and combining two translations into one.`,
      questions: [
        {
          stem: String.raw`The diagram shows triangle $T$ with vertices $(1, 2)$, $(3, 2)$ and $(1, 5)$, and triangle $T'$, which is the image of $T$ under a translation.`,
          figure: {
            type: "plot",
            x: [-1, 9.6], y: [-2.6, 6.6], equal: true, ticks: true,
            polygons: [
              { points: [[1, 2], [3, 2], [1, 5]], fill: true, tone: "accent", label: "T", labelAt: [1.6, 2.9] },
              { points: [[6, -1], [8, -1], [6, 2]], fill: true, tone: "good", label: "T′", labelAt: [6.55, 0.55] },
            ],
            caption: String.raw`Each square is 1 unit.`,
            alt: "On coordinate axes, triangle T has vertices (1, 2), (3, 2) and (1, 5). Triangle T′ has vertices (6, −1), (8, −1) and (6, 2).",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the column vector of the translation that maps $T$ onto $T'$.`, marks: 1 },
            { label: "(b)", text: String.raw`$T'$ is then translated by $\begin{pmatrix}-2\\4\end{pmatrix}$ to give triangle $T''$. Find the coordinates of the vertices of $T''$.`, marks: 2 },
            { label: "(c)", text: String.raw`Write down the column vector of the single translation that maps $T$ onto $T''$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G7-express-in-terms",
      name: String.raw`Expressing vectors in terms of two given vectors`,
      tests: String.raw`Finding routes through a figure such as a parallelogram or triangle, using midpoints and given ratios, to write vectors as combinations of $\mathbf{a}$ and $\mathbf{c}$ (or $\mathbf{a}$ and $\mathbf{b}$) in simplest form.`,
      questions: [
        {
          stem: String.raw`In the diagram, $OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. $M$ is the midpoint of $CB$, and $N$ is the point on $AB$ such that $AN : NB = 3 : 1$.`,
          figure: {
            type: "plot",
            x: [-0.8, 9.2], y: [-0.8, 4.8], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [6, 0], arrow: true, label: "a", pos: "s" },
              { from: [0, 0], to: [2, 4], arrow: true, label: "c", pos: "w" },
              { from: [6, 0], to: [8, 4], tone: "ink" },
              { from: [2, 4], to: [8, 4], tone: "ink" },
              { from: [5, 4], to: [7.5, 3], tone: "ink", dashed: true, thin: true },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
              { x: 6, y: 0, label: "A", pos: "se", style: "italic" },
              { x: 8, y: 4, label: "B", pos: "ne", style: "italic" },
              { x: 2, y: 4, label: "C", pos: "nw", style: "italic" },
              { x: 5, y: 4, label: "M", pos: "n", style: "italic" },
              { x: 7.5, y: 3, label: "N", pos: "e", style: "italic" },
            ],
            caption: "Not drawn to scale",
            alt: "Parallelogram OABC with OA = a along the bottom and OC = c up the left side. M is the midpoint of CB and N is on AB, three quarters of the way from A to B. M and N are joined by a dashed line.",
          },
          parts: [
            { label: "(a)", text: String.raw`Express $\overrightarrow{OB}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Express $\overrightarrow{OM}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 1 },
            { label: "(c)", text: String.raw`Express $\overrightarrow{ON}$ in terms of $\mathbf{a}$ and $\mathbf{c}$.`, marks: 1 },
            { label: "(d)", text: String.raw`Express $\overrightarrow{MN}$ in terms of $\mathbf{a}$ and $\mathbf{c}$, in its simplest form.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $M$ is the midpoint of $OA$, and $N$ is the point on $AB$ such that $AN : NB = 1 : 3$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $\overrightarrow{MB}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Express $\overrightarrow{AN}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(c)", text: String.raw`Show that $\overrightarrow{MN} = \frac{1}{4}(\mathbf{a} + \mathbf{b})$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G7-parallel-collinear",
      name: String.raw`Showing lines are parallel or points are collinear`,
      tests: String.raw`Writing one vector as a scalar multiple of another to prove parallel lines or collinear points, stating the full geometric reason, and deducing length ratios.`,
      questions: [
        {
          stem: String.raw`In the diagram, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. $X$ is the point on $AB$ such that $AX : XB = 2 : 1$, and $Y$ is the point such that $\overrightarrow{OY} = \mathbf{a} + 2\mathbf{b}$.`,
          figure: {
            type: "plot",
            x: [-0.8, 10.2], y: [-0.8, 9.6], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [6, 0.8], arrow: true, label: "a", pos: "s" },
              { from: [0, 0], to: [1.5, 4], arrow: true, label: "b", pos: "w" },
              { from: [6, 0.8], to: [1.5, 4], tone: "ink" },
              { from: [0, 0], to: [9, 8.8], tone: "muted", dashed: true, thin: true },
              { from: [6, 0.8], to: [9, 8.8], tone: "muted", dashed: true, thin: true },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
              { x: 6, y: 0.8, label: "A", pos: "se", style: "italic" },
              { x: 1.5, y: 4, label: "B", pos: "nw", style: "italic" },
              { x: 3, y: 2.933, label: "X", pos: "ne", style: "italic" },
              { x: 9, y: 8.8, label: "Y", pos: "ne", style: "italic" },
            ],
            caption: "Not drawn to scale",
            alt: "Triangle OAB with OA = a and OB = b. X lies on AB, two thirds of the way from A to B. Y is a point further out, joined to O and to A by dashed lines.",
          },
          parts: [
            { label: "(a)", text: String.raw`Express $\overrightarrow{AB}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Show that $\overrightarrow{OX} = \frac{1}{3}(\mathbf{a} + 2\mathbf{b})$.`, marks: 2 },
            { label: "(c)", text: String.raw`Explain why $O$, $X$ and $Y$ lie on a straight line.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the ratio $OX : XY$.`, marks: 1 },
            { label: "(e)", text: String.raw`Express $\overrightarrow{AY}$ in terms of $\mathbf{b}$, and hence state two facts about the lines $AY$ and $OB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G7-ratio-of-areas",
      name: String.raw`Geometric problems with ratio of areas`,
      tests: String.raw`A structured Paper 2 vector question: expressing vectors, using a scalar multiple to show sides are parallel, then using similar triangles or equal heights to find ratios of areas.`,
      questions: [
        {
          stem: String.raw`In the diagram, $P$ lies on $OA$ and $Q$ lies on $OB$. $\overrightarrow{OP} = 2\mathbf{a}$, $\overrightarrow{PA} = \mathbf{a}$, $\overrightarrow{OQ} = 2\mathbf{b}$ and $\overrightarrow{QB} = \mathbf{b}$. The lines $AQ$ and $BP$ meet at $R$.`,
          figure: {
            type: "plot",
            x: [-0.8, 10], y: [-0.9, 6.8], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [9, 0], [3, 6]], tone: "ink" }],
            segments: [
              { from: [6, 0], to: [2, 4], tone: "ink" },
              { from: [9, 0], to: [2, 4], tone: "muted", thin: true },
              { from: [3, 6], to: [6, 0], tone: "muted", thin: true },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "sw", style: "italic" },
              { x: 6, y: 0, label: "P", pos: "s", style: "italic" },
              { x: 9, y: 0, label: "A", pos: "se", style: "italic" },
              { x: 2, y: 4, label: "Q", pos: "w", style: "italic" },
              { x: 3, y: 6, label: "B", pos: "n", style: "italic" },
              { x: 4.8, y: 2.4, label: "R", pos: "e", style: "italic" },
            ],
            labels: [
              { x: 3, y: 0, text: "2a", pos: "s", style: "bold" },
              { x: 7.5, y: 0, text: "a", pos: "s", style: "bold" },
              { x: 1, y: 2, text: "2b", pos: "w", style: "bold" },
              { x: 2.5, y: 5, text: "b", pos: "w", style: "bold" },
            ],
            caption: "Not drawn to scale",
            alt: "Triangle OAB. P is on OA with OP = 2a and PA = a; Q is on OB with OQ = 2b and QB = b. PQ is drawn, and the lines AQ and BP cross at R.",
          },
          parts: [
            { label: "(a)", text: String.raw`Express $\overrightarrow{AB}$ and $\overrightarrow{PQ}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 2 },
            { label: "(b)", text: String.raw`Write down two facts about the lines $PQ$ and $AB$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the ratio $\text{area of triangle } OPQ : \text{area of triangle } OAB$.`, marks: 1 },
            { label: "(d)", text: String.raw`Find the ratio $\text{area of quadrilateral } PABQ : \text{area of triangle } OAB$.`, marks: 1 },
            { label: "(e)", text: String.raw`Explain why triangles $PQR$ and $BAR$ are similar, and hence find the ratio $\text{area of triangle } PQR : \text{area of triangle } BAR$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G7-vectors-on-grid",
      name: String.raw`Vectors drawn on a grid`,
      tests: String.raw`Reading column vectors from arrows on a square grid, finding the magnitude of a combination, and writing a third vector as a combination $h\mathbf{p} + k\mathbf{q}$ by comparing components.`,
      questions: [
        {
          stem: String.raw`The vectors $\mathbf{p}$, $\mathbf{q}$ and $\mathbf{r}$ are drawn on the square grid. Each square has side 1 unit.`,
          figure: {
            type: "plot",
            x: [-0.3, 11.3], y: [-0.3, 7.3], equal: true, axes: false,
            segments: [
              ...Array.from({ length: 12 }, (_, i) => ({ from: [i, 0], to: [i, 7], tone: "muted", thin: true })),
              ...Array.from({ length: 8 }, (_, j) => ({ from: [0, j], to: [11, j], tone: "muted", thin: true })),
              { from: [1, 1], to: [4, 2], arrow: true, label: "p", pos: "nw" },
              { from: [6, 1], to: [5, 3], arrow: true, tone: "good", label: "q", pos: "e", labelAt: [5.75, 2.1] },
              { from: [8, 1], to: [9, 6], arrow: true, tone: "warn", label: "r", pos: "e" },
            ],
            alt: "A square grid with three arrows: p goes 3 right and 1 up; q goes 1 left and 2 up; r goes 1 right and 5 up.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write $\mathbf{p}$ and $\mathbf{q}$ as column vectors.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $|\mathbf{p} + \mathbf{q}|$.`, marks: 2 },
            { label: "(c)", text: String.raw`Given that $\mathbf{r} = h\mathbf{p} + k\mathbf{q}$, find the values of $h$ and $k$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
