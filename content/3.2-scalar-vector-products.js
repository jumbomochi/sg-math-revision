H2.addTopic({
  id: "3.2",
  title: "Scalar and Vector Products",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`The scalar product for angles and projections; the vector product for normals, areas and distances.`,
  syllabus: {
    include: [
      String.raw`concepts of scalar product and vector product of vectors and their properties`,
      String.raw`angle between two vectors`,
      String.raw`geometrical meanings of $\mathbf{a} \cdot \hat{\mathbf{n}}$ and $\mathbf{a} \times \hat{\mathbf{n}}$, where $\hat{\mathbf{n}}$ is a unit vector`,
    ],
    exclude: [
      String.raw`triple products $\mathbf{a} \cdot \mathbf{b} \times \mathbf{c}$ and $\mathbf{a} \times \mathbf{b} \times \mathbf{c}$`,
    ],
  },
  concepts: [
    {
      title: String.raw`Scalar (dot) product`,
      body: String.raw`$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3,$$
where $\theta$ ($0 \le \theta \le \pi$) is the angle between $\mathbf{a}$ and $\mathbf{b}$. **Not in MF27 — memorise.** The result is a **scalar**.

- Commutative and distributive: $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$, $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$.
- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$, so $|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + 2\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2$ — the standard way to handle magnitudes of abstract vectors.
- $\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = \mathbf{k} \cdot \mathbf{k} = 1$ and $\mathbf{i} \cdot \mathbf{j} = \mathbf{j} \cdot \mathbf{k} = \mathbf{k} \cdot \mathbf{i} = 0$.`,
    },
    {
      title: String.raw`Angles and perpendicularity`,
      body: String.raw`$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}.$$

- For non-zero vectors, $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0$. Sign of $\mathbf{a} \cdot \mathbf{b}$: positive means acute, negative means obtuse.
- For $\angle BAC$ in a triangle use $\overrightarrow{AB}$ and $\overrightarrow{AC}$ — **both pointing away from $A$**. Using $\overrightarrow{BA}$ with $\overrightarrow{AC}$ gives the supplementary angle.
- Angle with the $x$-axis: use $\mathbf{i}$, so $\cos\alpha = a_1 / |\mathbf{a}|$.
- When an unknown appears, squaring $\cos\theta$ can introduce a false root — check the sign of $\mathbf{a} \cdot \mathbf{b}$.`,
    },
    {
      title: String.raw`Vector (cross) product (MF27)`,
      body: String.raw`$$\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\,\hat{\mathbf{n}} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix},$$
where $\hat{\mathbf{n}}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$ (right-hand rule). The result is a **vector**.

- $\mathbf{a} \times \mathbf{b} = -\,\mathbf{b} \times \mathbf{a}$ (not commutative); distributive over addition; $(\lambda\mathbf{a}) \times \mathbf{b} = \lambda(\mathbf{a} \times \mathbf{b})$.
- $\mathbf{a} \times \mathbf{a} = \mathbf{0}$; for non-zero vectors, $\mathbf{a} \times \mathbf{b} = \mathbf{0} \iff \mathbf{a} \parallel \mathbf{b}$.
- $\mathbf{a} \times \mathbf{b}$ is the quickest way to find a vector perpendicular to two given directions (a normal). Check your answer by dotting with both.`,
    },
    {
      title: String.raw`Areas`,
      body: String.raw`| Shape | Area |
| --- | --- |
| Parallelogram with adjacent sides $\mathbf{a}$, $\mathbf{b}$ | $|\mathbf{a} \times \mathbf{b}|$ |
| Triangle $ABC$ | $\tfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$ |

The two vectors must start from the **same vertex**. Equating $\tfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$ with $\tfrac{1}{2} \times AB \times h$ gives the perpendicular distance $h$ from $C$ to $AB$.`,
    },
    {
      title: String.raw`Geometrical meaning of $\mathbf{a} \cdot \hat{\mathbf{n}}$`,
      body: String.raw`$|\mathbf{a} \cdot \hat{\mathbf{n}}|$ is the **length of the projection** of $\mathbf{a}$ onto a line parallel to $\hat{\mathbf{n}}$.

- The **projection vector** (vector component of $\mathbf{a}$ along $\hat{\mathbf{n}}$) is $(\mathbf{a} \cdot \hat{\mathbf{n}})\hat{\mathbf{n}}$; it points along $\hat{\mathbf{n}}$ or opposite to it according to the sign of $\mathbf{a} \cdot \hat{\mathbf{n}}$.
- If $N$ is the foot of the perpendicular from $A$ to the line through $O$ in direction $\hat{\mathbf{n}}$, then $\overrightarrow{ON} = (\mathbf{a} \cdot \hat{\mathbf{n}})\hat{\mathbf{n}}$.
- Remember to **divide by $|\mathbf{n}|$** if the given direction is not a unit vector.`,
    },
    {
      title: String.raw`Geometrical meaning of $\mathbf{a} \times \hat{\mathbf{n}}$`,
      body: String.raw`$|\mathbf{a} \times \hat{\mathbf{n}}| = |\mathbf{a}|\sin\theta$ is the **length of the component of $\mathbf{a}$ perpendicular to $\hat{\mathbf{n}}$**, i.e. the perpendicular distance from $A$ to the line through $O$ parallel to $\hat{\mathbf{n}}$.

Together with the projection, Pythagoras gives
$$|\mathbf{a} \cdot \hat{\mathbf{n}}|^2 + |\mathbf{a} \times \hat{\mathbf{n}}|^2 = |\mathbf{a}|^2,$$
a useful check. In interpretation questions, name the specific points and line, e.g. "the perpendicular distance from $A$ to the line $OB$".`,
    },
    {
      title: String.raw`Deductions with abstract vectors`,
      body: String.raw`You **cannot divide** by a vector or "cancel" it. Instead, collect terms:

- $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c} \Rightarrow \mathbf{a} \times (\mathbf{b} - \mathbf{c}) = \mathbf{0} \Rightarrow \mathbf{b} - \mathbf{c} = \lambda\mathbf{a}$ (given $\mathbf{a} \ne \mathbf{0}$ and $\mathbf{b} \ne \mathbf{c}$), i.e. $\mathbf{a}$ is parallel to $\mathbf{b} - \mathbf{c}$.
- $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c} \Rightarrow \mathbf{a} \cdot (\mathbf{b} - \mathbf{c}) = 0 \Rightarrow \mathbf{a} \perp (\mathbf{b} - \mathbf{c})$.
- $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = |\mathbf{a}|^2 - |\mathbf{b}|^2$.

State the conditions you use (non-zero, non-parallel) — they carry marks.`,
    },
  ],
  archetypes: [
    {
      id: "3.2-angle-between-vectors",
      name: String.raw`Angle between two vectors`,
      tests: String.raw`Using the scalar product to find an angle in a triangle or with a coordinate axis, or to find an unknown component given an angle (with rejection of a false root).`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 2, 0)$, $(3, 1, 2)$ and $(-1, 4, 1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find angle $BAC$, giving your answer in degrees correct to 1 decimal place.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact value of $\sin BAC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the angle between $\overrightarrow{AB}$ and the positive $x$-axis.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The vectors $\mathbf{a}$ and $\mathbf{b}$ are given by $\mathbf{a} = \mathbf{i} + \mathbf{k}$ and $\mathbf{b} = p\mathbf{i} + \mathbf{j} + \mathbf{k}$, where $p$ is a real constant. Given that the angle between $\mathbf{a}$ and $\mathbf{b}$ is $60^\circ$, find the value of $p$, explaining clearly why any other value is rejected.`,
          marks: 4,
          calculator: false,
        },
      ],
    },
    {
      id: "3.2-perpendicularity",
      name: String.raw`Perpendicularity and magnitudes using the scalar product`,
      tests: String.raw`Applying $\mathbf{a} \cdot \mathbf{b} = 0$ to find unknowns, and expanding $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b})$ to find angles and magnitudes when only $|\mathbf{a}|$, $|\mathbf{b}|$ and a perpendicularity condition are known.`,
      questions: [
        {
          stem: String.raw`The vectors $\mathbf{a}$ and $\mathbf{b}$ are such that $|\mathbf{a}| = 3$ and $|\mathbf{b}| = 2$. It is given that $\mathbf{a} + \mathbf{b}$ is perpendicular to $\mathbf{a} - 4\mathbf{b}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\mathbf{a} \cdot \mathbf{b} = -\frac{7}{3}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the angle between $\mathbf{a}$ and $\mathbf{b}$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the exact value of $|\mathbf{a} + \mathbf{b}|$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 2, 3)$, $(2, 0, 1)$ and $(t, 1, 2)$ respectively, where $t$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Given that angle $ABC = 90^\circ$, find the value of $t$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the set of values of $t$ for which angle $ABC$ is obtuse.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "3.2-vector-product-area",
      name: String.raw`Vector product: normals and areas`,
      tests: String.raw`Computing $\mathbf{a} \times \mathbf{b}$ to obtain a perpendicular vector, the area of a triangle or parallelogram, and hence a perpendicular height; includes abstract area ratios.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 0, 2)$, $(3, 1, 0)$ and $(2, -1, 4)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{AB} \times \overrightarrow{AC}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find a unit vector perpendicular to the plane containing $A$, $B$ and $C$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the exact area of triangle $ABC$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Hence find the exact perpendicular distance from $C$ to the line $AB$.`, marks: 2 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, where $\mathbf{a}$ and $\mathbf{b}$ are non-zero and non-parallel. The point $P$ lies on $AB$ such that $AP : PB = 1 : 2$, and the point $Q$ is such that $\overrightarrow{OQ} = 3\mathbf{b}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{OP}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Show that the area of triangle $OPQ$ is $k|\mathbf{a} \times \mathbf{b}|$, where $k$ is a constant to be found.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence find the ratio of the area of triangle $OPQ$ to the area of triangle $OAB$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "3.2-projection-geometric-meaning",
      name: String.raw`Projections: geometrical meaning of $\mathbf{a} \cdot \hat{\mathbf{n}}$ and $\mathbf{a} \times \hat{\mathbf{n}}$`,
      tests: String.raw`Finding the length of projection, the projection vector, and the perpendicular component, and giving a precise geometrical interpretation of $|\mathbf{a} \cdot \hat{\mathbf{n}}|$ or $|\mathbf{a} \times \hat{\mathbf{n}}|$ in context.`,
      questions: [
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a} = 6\mathbf{i} + 6\mathbf{k}$ and $\mathbf{b} = \mathbf{i} + 2\mathbf{j} + 2\mathbf{k}$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the length of projection of $\mathbf{a}$ onto $\mathbf{b}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the position vector of the foot of the perpendicular from $A$ to the line $OB$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $|\mathbf{a} \times \hat{\mathbf{b}}|$ and give a geometrical interpretation of this value.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, where $\mathbf{b}$ is a unit vector and $\mathbf{a}$ is not parallel to $\mathbf{b}$. The point $N$ lies on the line $OB$ such that $AN$ is perpendicular to $OB$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\overrightarrow{ON} = (\mathbf{a} \cdot \mathbf{b})\mathbf{b}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Give a geometrical meaning of $|\mathbf{a} \times \mathbf{b}|$ in terms of the points $O$, $A$, $B$ and $N$. Hence show that the area of triangle $OAN$ is $\frac{1}{2}|\mathbf{a} \cdot \mathbf{b}|\,|\mathbf{a} \times \mathbf{b}|$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that $\mathbf{a} = 2\mathbf{i} + \mathbf{j} - 2\mathbf{k}$ and $\mathbf{b} = \frac{1}{5}(3\mathbf{j} + 4\mathbf{k})$, find the exact area of triangle $OAN$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.2-deducing-relationships",
      name: String.raw`Deducing relationships between abstract vectors`,
      tests: String.raw`Manipulating scalar and vector products of unspecified vectors (no "cancelling") to deduce parallel or perpendicular relationships, collinearity, or equality of vectors.`,
      questions: [
        {
          stem: String.raw`The non-zero vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ are such that $\mathbf{b} \ne \mathbf{c}$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$, show that $\mathbf{b} - \mathbf{c} = \lambda\mathbf{a}$ for some scalar $\lambda$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that it is not possible to have both $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$ and $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Simplify $(\mathbf{a} - \mathbf{b}) \times (\mathbf{a} + \mathbf{b})$, and hence state the relationship between the area of a parallelogram with adjacent sides $\mathbf{a}$ and $\mathbf{b}$ and the area of a parallelogram whose adjacent sides are its diagonals.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$, $B$ and $C$ have position vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a}) = \mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Give a geometrical interpretation of $|\mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a}|$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Given that $\mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a} = \mathbf{0}$, where $A$, $B$ and $C$ are distinct points, what can be deduced about $A$, $B$ and $C$? Justify your answer.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.2-geometric-proofs",
      name: String.raw`Geometric proofs using the scalar product`,
      tests: String.raw`Proving geometric results (angle in a semicircle, diagonals of a rhombus, squares) by showing a scalar product is zero, using $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$.`,
      questions: [
        {
          stem: String.raw`$O$ is the centre of a circle and $AB$ is a diameter. Relative to $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $-\mathbf{a}$ respectively. The point $P$, distinct from $A$ and $B$, lies on the circle and has position vector $\mathbf{p}$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down the relationship between $|\mathbf{p}|$ and $|\mathbf{a}|$.`, marks: 1 },
            { label: "(ii)", text: String.raw`By considering $\overrightarrow{AP} \cdot \overrightarrow{BP}$, prove that angle $APB$ is a right angle.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $OABC$ is a rhombus, prove that its diagonals are perpendicular.`, marks: 3 },
            { label: "(ii)", text: String.raw`Given instead that the diagonals of $OABC$ are equal in length, show that $\mathbf{a} \cdot \mathbf{c} = 0$, and state what type of quadrilateral $OABC$ must be.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
