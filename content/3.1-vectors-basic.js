H2.addTopic({
  id: "3.1",
  title: "Basic Properties of Vectors",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Vector algebra, position and displacement vectors, magnitude, collinearity and the ratio theorem — the toolkit behind every later vectors question.`,
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
    },
    {
      title: String.raw`Position, displacement and direction vectors`,
      body: String.raw`- **Position vector** of $A$: $\overrightarrow{OA} = \mathbf{a}$, fixed relative to the origin $O$.
- **Displacement vector** $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$: describes the move from $A$ to $B$, independent of $O$.
- **Direction vector**: any non-zero vector giving a direction only; any non-zero scalar multiple will do, so simplify (e.g. $\begin{pmatrix}4\\-2\\6\end{pmatrix} \to \begin{pmatrix}2\\-1\\3\end{pmatrix}$).

Do not mix up points and vectors in your notation: write $A(1, 2, 3)$ but $\overrightarrow{OA} = \begin{pmatrix}1\\2\\3\end{pmatrix}$.`,
    },
    {
      title: String.raw`Magnitude, unit vectors and distance`,
      body: String.raw`$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}, \qquad \hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}, \qquad AB = |\mathbf{b} - \mathbf{a}|.$$

- A vector of magnitude $k$ parallel to $\mathbf{a}$ is $\pm k\hat{\mathbf{a}}$ — remember **both** signs unless the direction is specified.
- $|\lambda\mathbf{a}| = |\lambda||\mathbf{a}|$, but in general $|\mathbf{a} + \mathbf{b}| \ne |\mathbf{a}| + |\mathbf{b}|$.
- Unknowns in a magnitude condition lead to a quadratic: square both sides and keep both roots unless one is ruled out.`,
    },
    {
      title: String.raw`Collinearity`,
      body: String.raw`$A$, $B$ and $C$ are **collinear** $\iff \overrightarrow{AB} = \lambda\overrightarrow{AC}$ for some scalar $\lambda$.

For full marks state **both** facts: the vectors are parallel **and** they share a common point ($A$). Parallel alone only shows the lines are parallel.

The value of $\lambda$ gives the ratio and order: e.g. $\overrightarrow{AC} = 3\overrightarrow{AB}$ means $B$ lies between $A$ and $C$ with $AB : BC = 1 : 2$. A negative $\lambda$ means $A$ lies between the other two points.`,
    },
    {
      title: String.raw`Ratio theorem (MF27)`,
      body: String.raw`If $P$ divides $AB$ internally in the ratio $AP : PB = \lambda : \mu$, then
$$\overrightarrow{OP} = \frac{\mu\mathbf{a} + \lambda\mathbf{b}}{\lambda + \mu}.$$

- Note the "cross-over": the coefficient of $\mathbf{a}$ is the part of the ratio **next to $B$**. Midpoint: $\tfrac{1}{2}(\mathbf{a} + \mathbf{b})$.
- Read the ratio carefully: $AP : PB$ is not $AP : AB$. Draw a quick line diagram.
- Conversely, $\overrightarrow{OP} = s\mathbf{a} + t\mathbf{b}$ with $s + t = 1$ means $P$ lies on line $AB$; if also $s, t > 0$, then $AP : PB = t : s$.
- For a point outside the segment ("$AB$ produced"), write the condition as a displacement, e.g. $\overrightarrow{BQ} = k\overrightarrow{AB}$, rather than forcing the formula.`,
    },
    {
      title: String.raw`Intersections via two expressions`,
      body: String.raw`To find where two lines in a figure meet:

1. Express the point $X$ in two ways, e.g. $\overrightarrow{OX} = \overrightarrow{OA} + \lambda\overrightarrow{AP}$ and $\overrightarrow{OX} = \overrightarrow{OB} + \mu\overrightarrow{BM}$.
2. Write both in terms of the same two **non-zero, non-parallel** vectors $\mathbf{a}$ and $\mathbf{b}$.
3. Compare coefficients (valid **because** $\mathbf{a}$ and $\mathbf{b}$ are non-parallel — say so) and solve for $\lambda$ and $\mu$.

The parameter values give ratios directly: $\lambda = \tfrac{3}{5}$ above means $AX : XP = 3 : 2$.`,
    },
    {
      title: String.raw`Parallelograms and trapeziums`,
      body: String.raw`- $ABCD$ is a parallelogram $\iff \overrightarrow{AB} = \overrightarrow{DC}$ (equivalently $\mathbf{d} = \mathbf{a} + \mathbf{c} - \mathbf{b}$). Watch the vertex order.
- The diagonals of a parallelogram bisect each other: both have midpoint $\tfrac{1}{2}(\mathbf{a} + \mathbf{c}) = \tfrac{1}{2}(\mathbf{b} + \mathbf{d})$.
- A rhombus additionally has $|\overrightarrow{AB}| = |\overrightarrow{BC}|$.
- Trapezium $ABCD$ with $AB \parallel DC$: $\overrightarrow{DC} = k\overrightarrow{AB}$, where $k$ is the ratio of the parallel sides.
- In "show that" proofs, end with a clear concluding statement linking the vector equation to the geometric property.`,
    },
  ],
  archetypes: [
    {
      id: "3.1-vectors-in-figures",
      name: String.raw`Expressing vectors in a geometric figure`,
      tests: String.raw`Using the triangle law, parallel sides and midpoints to write vectors in a polygon in terms of two given vectors, and interpreting the resulting expressions geometrically.`,
      questions: [
        {
          stem: String.raw`$ABCDEF$ is a regular hexagon. It is given that $\overrightarrow{AB} = \mathbf{p}$ and $\overrightarrow{BC} = \mathbf{q}$.`,
          parts: [
            { label: "(i)", text: String.raw`Explain why $\overrightarrow{AD} = 2\mathbf{q}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Express $\overrightarrow{CD}$ and $\overrightarrow{AE}$ in terms of $\mathbf{p}$ and $\mathbf{q}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`The point $M$ is the midpoint of $DE$. Find $\overrightarrow{AM}$ in terms of $\mathbf{p}$ and $\mathbf{q}$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Given that $|\mathbf{p}| = 2$, write down the value of $|\overrightarrow{AD}|$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$OABC$ is a quadrilateral with $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OB} = \mathbf{b}$ and $\overrightarrow{OC} = \mathbf{c}$. The points $P$, $Q$, $R$ and $S$ are the midpoints of $OA$, $AB$, $BC$ and $CO$ respectively.`,
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
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively. The point $M$ lies on $OA$ such that $OM : MA = 1 : 2$, and the point $N$ lies on $AB$ such that $AN : NB = 3 : 1$.`,
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
          stem: String.raw`In the triangle $OAB$, $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OB} = \mathbf{b}$. The point $M$ is the midpoint of $OA$ and the point $P$ lies on $OB$ such that $OP : PB = 1 : 2$. The lines $AP$ and $BM$ meet at the point $X$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\overrightarrow{OX} = \frac{2}{5}\mathbf{a} + \frac{1}{5}\mathbf{b}$.`, marks: 5 },
            { label: "(ii)", text: String.raw`Find the ratio $AX : XP$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The line $OX$ produced meets $AB$ at $Q$. Show that $AQ : QB = 1 : 2$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$. The point $M$ is the midpoint of $BC$, and the lines $OM$ and $AC$ intersect at $X$.`,
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
          stem: String.raw`$OABC$ is a trapezium in which $\overrightarrow{OA} = \mathbf{a}$, $\overrightarrow{OC} = \mathbf{c}$ and $\overrightarrow{CB} = 2\mathbf{a}$. The diagonals $OB$ and $AC$ intersect at $X$.`,
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
