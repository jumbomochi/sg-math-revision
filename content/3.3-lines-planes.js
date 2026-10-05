H2.addTopic({
  id: "3.3",
  title: "Lines and Planes",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Equations of lines and planes, and the angles, distances, intersections and reflections between them.`,
  syllabus: {
    include: [
      String.raw`vector and cartesian equations of lines and planes`,
      String.raw`foot of the perpendicular and distance from a point to a line or to a plane`,
      String.raw`angle between two lines, between a line and a plane, or between two planes`,
      String.raw`relationships between (i) two lines (coplanar or skew), (ii) a line and a plane, (iii) two planes`,
    ],
    exclude: [
      String.raw`shortest distance between two skew lines`,
      String.raw`common perpendicular to two skew lines`,
    ],
  },
  concepts: [
    {
      title: String.raw`Equations of a line`,
      body: String.raw`Line through the point with position vector $\mathbf{a}$, parallel to $\mathbf{d}$:
$$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d},\ \lambda \in \mathbb{R} \qquad\Longleftrightarrow\qquad \frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3}.$$

- Always write "$\mathbf{r} = $" and state $\lambda \in \mathbb{R}$; a vector equation without $\mathbf{r}$ loses marks.
- If a component of $\mathbf{d}$ is zero, the cartesian form has that coordinate **constant**, e.g. $\frac{x - 1}{2} = \frac{y + 3}{5},\ z = 4$.
- Watch signs when converting: $\frac{3 - y}{2} = \frac{y - 3}{-2}$, and $\frac{2x - 1}{4} = \frac{x - \frac{1}{2}}{2}$ (make the coefficient of $x$ equal to 1 first).
- To check a point lies on a line, find one $\lambda$ that satisfies **all three** components.`,
    },
    {
      title: String.raw`Two lines: parallel, intersecting or skew`,
      body: String.raw`| Directions parallel? | Common point? | Relationship |
| --- | --- | --- |
| Yes | Yes | Same line |
| Yes | No | Parallel (distinct) |
| No | Yes | Intersecting |
| No | No | Skew |

To test for intersection, equate the two vector equations, solve **two** components for $\lambda$ and $\mu$, then **check the third**. Skew lines need both facts stated: not parallel **and** no common point. Parallel or intersecting lines are coplanar.

Acute angle between lines: $\cos\theta = \dfrac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1||\mathbf{d}_2|}$. (Not in MF27.)`,
    },
    {
      title: String.raw`Point and line: foot, distance, reflection`,
      body: String.raw`For a point $P$ and the line $l: \mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$:

1. Let the foot be $N$ with $\overrightarrow{ON} = \mathbf{a} + \lambda\mathbf{d}$.
2. Solve $\overrightarrow{PN} \cdot \mathbf{d} = 0$ for $\lambda$.
3. Distance $= |\overrightarrow{PN}|$; reflection of $P$ in $l$: $\overrightarrow{OP'} = 2\overrightarrow{ON} - \overrightarrow{OP}$ (midpoint theorem).

Shortcut for the distance only: $|\overrightarrow{AP} \times \hat{\mathbf{d}}|$, where $A$ is any point on $l$. The length of projection of $\overrightarrow{AP}$ onto $l$ is $|\overrightarrow{AP} \cdot \hat{\mathbf{d}}|$.`,
    },
    {
      title: String.raw`Equations of a plane`,
      body: String.raw`| Form | Equation |
| --- | --- |
| Parametric (vector) | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$, $\lambda, \mu \in \mathbb{R}$ |
| Scalar-product | $\mathbf{r} \cdot \mathbf{n} = \mathbf{a} \cdot \mathbf{n}$ |
| Cartesian | $n_1x + n_2y + n_3z = D$ |

- $\mathbf{b}$ and $\mathbf{c}$ are non-parallel directions **in** the plane; the normal is $\mathbf{n} = \mathbf{b} \times \mathbf{c}$.
- Plane through $A$, $B$, $C$: $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$, then $D = \mathbf{a} \cdot \mathbf{n}$. Check with the other two points.
- Plane containing a line $l$ and a point $P$ not on $l$: use $\mathbf{d}$ and $\overrightarrow{AP}$ as the two directions.
- Perpendicular distance from $O$ to $\mathbf{r} \cdot \hat{\mathbf{n}} = d$ is $|d|$ — normalise first.`,
    },
    {
      title: String.raw`Line and plane`,
      body: String.raw`For $l: \mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ and $\pi: \mathbf{r} \cdot \mathbf{n} = D$:

- $\mathbf{d} \cdot \mathbf{n} \ne 0$: they meet at exactly one point — substitute the line into the plane and solve for $\lambda$.
- $\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a} \cdot \mathbf{n} = D$: the line **lies in** the plane.
- $\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a} \cdot \mathbf{n} \ne D$: the line is **parallel** to the plane, with no common point.

Acute angle between line and plane: $\sin\theta = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$ — **sine**, because $\mathbf{n}$ is perpendicular to the plane. Using cosine gives the complement, a very common error.`,
    },
    {
      title: String.raw`Point and plane: foot, distance, reflection`,
      body: String.raw`For a point $P$ and the plane $\pi: \mathbf{r} \cdot \mathbf{n} = D$:

- Foot $N$: the line through $P$ parallel to $\mathbf{n}$, $\mathbf{r} = \mathbf{p} + t\mathbf{n}$, meets $\pi$ at $N$.
- Distance $= |\overrightarrow{PN}|$, or directly $\dfrac{|\mathbf{p} \cdot \mathbf{n} - D|}{|\mathbf{n}|} = |\overrightarrow{AP} \cdot \hat{\mathbf{n}}|$ for any $A$ on $\pi$.
- Reflection of $P$ in $\pi$: $\overrightarrow{OP'} = 2\overrightarrow{ON} - \overrightarrow{OP}$.
- **Reflection of a line** $l$ in $\pi$ (when $l$ meets $\pi$ at $B$): reflect any other point $P$ of $l$ to $P'$; the image line passes through $B$ and $P'$. If $l$ is parallel to $\pi$, the image is parallel to $l$ through $P'$.
- Planes $\mathbf{r} \cdot \mathbf{n} = D_1$ and $\mathbf{r} \cdot \mathbf{n} = D_2$ (same $\mathbf{n}$) are parallel, a distance $|D_1 - D_2| / |\mathbf{n}|$ apart.`,
    },
    {
      title: String.raw`Two planes: angle and line of intersection`,
      body: String.raw`- Acute angle between planes = acute angle between their normals: $\cos\theta = \dfrac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}$. In context (e.g. the angle between two roof faces) the required angle may be the **obtuse** one — read the question.
- Non-parallel planes meet in a line with direction $\mathbf{n}_1 \times \mathbf{n}_2$. Find a point by setting one coordinate (e.g. $z = 0$) and solving the other two equations.
- With a GC: solve the two cartesian equations as a system; the GC returns, e.g., $x = 1 - \frac{2}{5}z$, $y = 2 + z$; let $z = \lambda$ to write $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$. Show this working step.
- Parallel planes: $\mathbf{n}_1 \parallel \mathbf{n}_2$ (coincident if the equations are multiples of each other).`,
    },
    {
      title: String.raw`Exam technique`,
      body: String.raw`- "Acute angle" means take the modulus of the dot product; give angles to $0.1^\circ$ unless told otherwise.
- None of the line and plane formulae are in MF27 — memorise them, and the sine/cosine distinction above.
- When a part says "Hence", reuse your earlier normal, foot or intersection point.
- In real-world contexts (roofs, ramps, lasers, flight paths) translate first: "shortest rod to the roof" = perpendicular distance to a plane; "the beam hits the mirror" = line–plane intersection; "the reflected ray" = reflection in a plane. Give units and answer in context.`,
    },
  ],
  archetypes: [
    {
      id: "3.3-line-equations",
      name: String.raw`Vector and cartesian equations of lines`,
      tests: String.raw`Writing the equation of a line through two points, converting between vector and cartesian forms (including awkward signs and zero components), and checking whether a point lies on a line.`,
      questions: [
        {
          stem: String.raw`The points $A$ and $B$ have coordinates $(2, -1, 3)$ and $(4, 0, 1)$ respectively. The line $l$ passes through $A$ and $B$.`,
          parts: [
            { label: "(i)", text: String.raw`Find a vector equation of $l$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Write down a cartesian equation of $l$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Show that the point $C(8, 2, -3)$ lies on $l$.`, marks: 2 },
            { label: "(iv)", text: String.raw`The point $D(p, q, 7)$ also lies on $l$. Find the values of $p$ and $q$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The line $l$ has cartesian equation
$$\frac{x - 1}{2} = 3 - y = \frac{z + 2}{3},$$
and the line $m$ has vector equation $\mathbf{r} = \mathbf{j} + \mathbf{k} + \mu(\mathbf{i} + \mathbf{j} + \mathbf{k})$, $\mu \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find a vector equation of $l$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the acute angle between $l$ and $m$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the point where $l$ meets the $x$-$y$ plane.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-foot-perpendicular-line",
      name: String.raw`Foot of perpendicular, distance and reflection: point and line`,
      tests: String.raw`Finding the foot of the perpendicular from a point to a line via $\overrightarrow{PN} \cdot \mathbf{d} = 0$, then the perpendicular distance, the reflection of the point in the line, or points on the line at a given distance.`,
      questions: [
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\0\\2\end{pmatrix} + \lambda\begin{pmatrix}1\\2\\-1\end{pmatrix}$, $\lambda \in \mathbb{R}$, and the point $P$ has coordinates $(4, 5, -3)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $P$ to $l$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the exact perpendicular distance from $P$ to $l$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the coordinates of the reflection of $P$ in $l$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the coordinates of the two points on $l$ which are a distance $\sqrt{29}$ from $P$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, -2, 0)$, $(3, -1, 2)$ and $(5, 4, -1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the length of projection of $\overrightarrow{AC}$ onto the line $AB$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the exact perpendicular distance from $C$ to the line $AB$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the position vector of the foot of the perpendicular from $C$ to the line $AB$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-two-lines",
      name: String.raw`Relationship between two lines`,
      tests: String.raw`Deciding whether two lines are parallel, intersecting or skew; finding the point of intersection or an unknown constant that makes lines meet; and the acute angle between lines.`,
      questions: [
        {
          stem: String.raw`The lines $l_1$ and $l_2$ have equations
$$l_1: \mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + \lambda\begin{pmatrix}1\\-1\\2\end{pmatrix}, \qquad l_2: \mathbf{r} = \begin{pmatrix}3\\-1\\4\end{pmatrix} + \mu\begin{pmatrix}2\\1\\-1\end{pmatrix},$$
where $\lambda, \mu \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $l_1$ and $l_2$ are skew.`, marks: 3 },
            { label: "(ii)", text: String.raw`The line $l_3$ has equation $\mathbf{r} = \begin{pmatrix}2\\a\\0\end{pmatrix} + t\begin{pmatrix}0\\1\\1\end{pmatrix}$, $t \in \mathbb{R}$, where $a$ is a constant. Given that $l_1$ and $l_3$ intersect, find the value of $a$ and the coordinates of the point of intersection.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the acute angle between $l_1$ and $l_3$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The lines $l_1$ and $l_2$ have equations
$$l_1: \frac{x - 1}{2} = \frac{y + 1}{-1} = \frac{z - 3}{2}, \qquad l_2: \mathbf{r} = \begin{pmatrix}4\\0\\1\end{pmatrix} + \mu\begin{pmatrix}-4\\2\\-4\end{pmatrix},\ \mu \in \mathbb{R}.$$`,
          parts: [
            { label: "(i)", text: String.raw`Show that $l_1$ and $l_2$ are parallel and distinct.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact distance between $l_1$ and $l_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a cartesian equation of the plane containing $l_1$ and $l_2$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-plane-equations",
      name: String.raw`Equations of planes in different forms`,
      tests: String.raw`Obtaining a normal via a vector product, writing a plane in parametric, scalar-product and cartesian forms (including the plane through three points or containing a line), and converting between them.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(2, 1, 0)$, $(0, 3, 1)$ and $(1, 0, 3)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a vector equation of the plane $\pi$ containing $A$, $B$ and $C$ in the form $\mathbf{r} = \mathbf{a} + \lambda\mathbf{b} + \mu\mathbf{c}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find an equation of $\pi$ in scalar-product form, and hence write down its cartesian equation.`, marks: 3 },
            { label: "(iii)", text: String.raw`The point $D(3, k, 2)$ lies in $\pi$. Find the value of $k$.`, marks: 1 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The line $l$ has cartesian equation $x - 1 = y$, $z = -1$. The plane $\Pi$ contains $l$ and is parallel to the vector $\mathbf{j} + 2\mathbf{k}$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a vector equation of $l$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find a cartesian equation of $\Pi$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the exact perpendicular distance from the origin to $\Pi$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-line-plane",
      name: String.raw`Line and plane: intersection, angle, parallel or lying in`,
      tests: String.raw`Finding where a line meets a plane and the acute angle between them (using sine), the projection of a line onto a plane, and using $\mathbf{d} \cdot \mathbf{n} = 0$ to decide whether a line is parallel to or lies in a plane.`,
      questions: [
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\-2\\3\end{pmatrix} + \lambda\begin{pmatrix}1\\1\\2\end{pmatrix}$, $\lambda \in \mathbb{R}$, and the plane $p$ has equation $x + 2y + 3z = 15$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the point of intersection of $l$ and $p$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the acute angle between $l$ and $p$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a vector equation of the line $l'$, the projection of $l$ onto $p$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The line $l$ has equation $\mathbf{r} = \begin{pmatrix}1\\a\\2\end{pmatrix} + \lambda\begin{pmatrix}2\\-1\\b\end{pmatrix}$, $\lambda \in \mathbb{R}$, where $a$ and $b$ are constants, and the plane $p$ has equation $3x + y - z = 4$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $l$ lies in $p$, find the values of $a$ and $b$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Given instead that $b$ takes the value found in part (i) and $a = 0$, describe the geometrical relationship between $l$ and $p$, and find the exact distance between them.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-point-plane-distance",
      name: String.raw`Foot of perpendicular and distance: point and plane`,
      tests: String.raw`Finding the foot of the perpendicular from a point to a plane and the perpendicular distance, and using the distance formula to find unknown constants, points on a line at a given distance, or parallel planes.`,
      questions: [
        {
          stem: String.raw`The plane $p$ has equation $2x - y + 2z = 5$ and the point $A$ has coordinates $(5, -1, 6)$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $A$ to $p$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the perpendicular distance from $A$ to $p$.`, marks: 1 },
            { label: "(iii)", text: String.raw`The plane $q$ has equation $2x - y + 2z = k$, where $k$ is a constant. Given that the perpendicular distance from $A$ to $q$ is 3, find the possible values of $k$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`The plane $p$ has equation $x + 2y - 2z = 4$ and the line $l$ has equation $\mathbf{r} = \mathbf{i} + \mathbf{j} + \mathbf{k} + \lambda(2\mathbf{i} + \mathbf{j} + \mathbf{k})$, $\lambda \in \mathbb{R}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the perpendicular distance from the origin to $p$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the coordinates of the points on $l$ which are a distance 3 units from $p$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the cartesian equations of the two planes which are parallel to $p$ and a distance 2 units from $p$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.3-reflection-in-plane",
      name: String.raw`Reflection of a point and of a line in a plane`,
      tests: String.raw`Using the foot of the perpendicular and the midpoint theorem to reflect a point in a plane, then combining with the line–plane intersection to find the equation of the reflected line.`,
      questions: [
        {
          stem: String.raw`The plane $\pi$ has equation $\mathbf{r} \cdot \begin{pmatrix}1\\1\\-1\end{pmatrix} = 2$. The line $l$ passes through the point $A(4, 3, -1)$ and is parallel to $\mathbf{i} + 2\mathbf{j} + \mathbf{k}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of the foot of the perpendicular from $A$ to $\pi$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the coordinates of the point $A'$, the reflection of $A$ in $\pi$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the point $B$ where $l$ meets $\pi$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Hence find a vector equation of the line $l'$, the reflection of $l$ in $\pi$.`, marks: 2 },
            { label: "(v)", text: String.raw`Verify that $l$ and $l'$ make the same acute angle with $\pi$.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "3.3-two-planes",
      name: String.raw`Two planes: angle and line of intersection`,
      tests: String.raw`Finding the acute angle between two planes via their normals, the line of intersection (by vector product or GC), and planes defined through that line; includes finding an unknown from a given angle.`,
      questions: [
        {
          stem: String.raw`The planes $p_1$ and $p_2$ have equations $x + y - z = 2$ and $2x - y + 3z = 1$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the acute angle between $p_1$ and $p_2$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find a vector equation of the line of intersection of $p_1$ and $p_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find a cartesian equation of the plane which passes through the point $(1, 2, 3)$ and is perpendicular to both $p_1$ and $p_2$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The planes $p_1$ and $p_2$ have equations $x + z = 3$ and $y + kz = 0$ respectively, where $k$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Given that the acute angle between $p_1$ and $p_2$ is $60^\circ$, find the possible values of $k$.`, marks: 3 },
            { label: "(ii)", text: String.raw`For the positive value of $k$, find a vector equation of the line of intersection, $l$, of $p_1$ and $p_2$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the acute angle between $l$ and the $x$-$y$ plane.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.3-real-world-application",
      name: String.raw`Real-world applications: mirrors, roofs, ramps and flight paths`,
      tests: String.raw`Translating a physical situation into line and plane geometry — a beam meeting and reflecting off a mirror, angles between roof faces or with the ground, shortest supports as perpendicular distances — and interpreting answers in context.`,
      questions: [
        {
          stem: String.raw`In a laboratory, a flat mirror lies in the plane $\Pi$ with equation $x + 2y + 2z = 21$, where units are in metres. A laser at the point $L(1, -1, 2)$ emits a beam in the direction $3\mathbf{i} + \mathbf{j} + 2\mathbf{k}$, which strikes the mirror at the point $P$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the coordinates of $P$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the acute angle between the beam and the mirror.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the coordinates of the foot of the perpendicular from $L$ to $\Pi$.`, marks: 3 },
            { label: "(iv)", text: String.raw`The reflected beam lies along the line through $P$ and $L'$, where $L'$ is the reflection of $L$ in $\Pi$. Show that the reflected beam travels in the direction $\mathbf{i} - 3\mathbf{j} - 2\mathbf{k}$.`, marks: 3 },
            { label: "(v)", text: String.raw`The floor of the laboratory is the plane $z = 0$. Find the coordinates of the point where the reflected beam hits the floor.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The roof of a shed consists of two rectangular faces $ABFE$ and $EFCD$ meeting along a horizontal ridge $EF$. Relative to an origin $O$ on the horizontal ground $z = 0$, the corners have coordinates $A(0, 0, 6)$, $B(10, 0, 6)$, $C(10, 8, 6)$, $D(0, 8, 6)$, $E(0, 4, 9)$ and $F(10, 4, 9)$, where units are in metres.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the face $ABFE$ lies in the plane with cartesian equation $-3y + 4z = 24$.`, marks: 3 },
            { label: "(ii)", text: String.raw`The face $EFCD$ lies in the plane $3y + 4z = 48$. Find the angle between the two faces of the roof, measured inside the shed.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the angle that the face $ABFE$ makes with the horizontal ground.`, marks: 2 },
            { label: "(iv)", text: String.raw`A light fitting at the point $L(5, 4, 4)$ is to be attached to the face $ABFE$ by the shortest possible straight rod. Find the length of the rod and the coordinates of the point where it meets the roof.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
