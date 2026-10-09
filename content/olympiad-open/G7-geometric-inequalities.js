H2.addTopic({
  id: "G7",
  title: "Geometric Inequalities and Extremal Geometry",
  summary: String.raw`Shortest paths by reflection, the triangle inequality, the Fermat point and Ptolemy's inequality, largest areas, inequalities between $R$, $r$ and the sides (Euler, Weitzenböck), and distances from a point inside a triangle (Erdős–Mordell).`,
  concepts: [
    {
      title: String.raw`The triangle inequality and broken lines`,
      body: String.raw`For any points $X, Y, Z$: $XY \le XZ + ZY$, with equality exactly when $Z$ lies on the segment $XY$. Also $|XZ - ZY| \le XY$.

- A **broken line** is never shorter than the segment joining its ends. To find a minimum, look for a way to turn the expression into one broken line between two fixed points.
- **Polygon inequality**: each side of a polygon is shorter than the sum of the other sides. In a convex quadrilateral, $AB + CD < AC + BD$ (the diagonals cross).
- For a fixed segment $AC$ and any point $P$: $PA + PC \ge AC$, with equality exactly when $P$ is on segment $AC$.
- **Doubling a median**: extend the median $AM$ to $A'$ with $MA' = AM$. Then $ABA'C$ is a parallelogram, so $|b - c| < 2m_a < b + c$. Example: if two sides are $4$ and $10$, the median between them is between $3$ and $7$.`,
      figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.3, 3.2], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.6, 0.0], "tone": "ink"}, {"from": [4.6, 0.0], "to": [1.3, 3.2], "tone": "ink"}, {"from": [1.3, 3.2], "to": [3.3, -3.2], "tone": "accent"}, {"from": [0.0, 0.0], "to": [3.3, -3.2], "tone": "muted", "dashed": true}, {"from": [4.6, 0.0], "to": [3.3, -3.2], "tone": "muted", "dashed": true}], "labels": [{"x": 1.3, "y": 3.2, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 4.6, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 2.3, "y": 0.0, "text": "M", "pos": "se", "style": "italic"}, {"x": 3.3, "y": -3.2, "text": "A′", "pos": "s", "style": "italic"}], "x": [-0.6, 5.2], "y": [-3.8, 3.8], "caption": "Doubling the median: $AA' = 2m_a < AB + BA' = c + b$.", "alt": "Triangle ABC with median AM extended to A′ so that AM = MA′; ABA′C is a parallelogram drawn with dashed sides BA′ and CA′."},
    },
    {
      title: String.raw`Reflection: shortest paths`,
      body: String.raw`- To minimise $AP + PB$ for $P$ on a line $\ell$ (with $A$, $B$ on the same side), reflect $B$ in $\ell$ to $B'$. Then $AP + PB = AP + PB' \ge AB'$, with equality where $AB'$ crosses $\ell$.
- If $A$ and $B$ are on **opposite** sides of $\ell$, then $|PA - PB| = |PA - PB'| \le AB'$, so reflecting also finds the **largest** difference.
- **Several lines**: a path that must touch line $\ell_1$ and then line $\ell_2$ becomes straight after reflecting the start in $\ell_1$ and the end in $\ell_2$. Check that the straight segment really meets the lines in the required order.
- **Inside an angle** $\alpha$ at $O$: reflecting $P$ in the two arms gives $P_1$, $P_2$ with $OP_1 = OP_2 = OP$ and $\angle P_1OP_2 = 2\alpha$.
- **Billiards and closed paths**: unfold the table by reflecting it in the walls; a bouncing path becomes a straight line.
- The distance from an outside point $X$ to a circle with centre $O$ and radius $\rho$ is $XO - \rho$.
- Example: for $A = (1, 1)$, $B = (3, 2)$ and $P$ on the $x$-axis, the minimum of $AP + PB$ is the distance from $(1, 1)$ to $(3, -2)$, namely $\sqrt{13}$.`,
      figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-0.3, 0.0], "to": [6.2, 0.0], "tone": "ink"}, {"from": [0.6, 2.2], "to": [3.491, 0.0], "tone": "accent"}, {"from": [3.491, 0.0], "to": [5.2, 1.3], "tone": "accent"}, {"from": [3.491, 0.0], "to": [5.2, -1.3], "tone": "accent", "dashed": true}, {"from": [5.2, 1.3], "to": [5.2, -1.3], "tone": "muted", "dashed": true}, {"from": [0.6, 2.2], "to": [2.0, 0.0], "tone": "muted"}, {"from": [2.0, 0.0], "to": [5.2, 1.3], "tone": "muted"}], "labels": [{"x": 6.2, "y": 0.0, "text": "ℓ", "pos": "ne", "style": "italic"}, {"x": 0.6, "y": 2.2, "text": "A", "pos": "nw", "style": "italic"}, {"x": 5.2, "y": 1.3, "text": "B", "pos": "ne", "style": "italic"}, {"x": 5.2, "y": -1.3, "text": "B′", "pos": "se", "style": "italic"}, {"x": 3.491, "y": 0.0, "text": "P", "pos": "s", "style": "italic"}, {"x": 2.0, "y": 0.0, "text": "Y", "pos": "s", "style": "italic"}], "points": [{"x": 0.6, "y": 2.2}, {"x": 5.2, "y": 1.3}, {"x": 5.2, "y": -1.3}, {"x": 3.491, "y": 0.0}, {"x": 2.0, "y": 0.0}], "x": [-0.8, 6.7], "y": [-1.8, 2.7], "caption": "$AY + YB = AY + YB' \\ge AB'$, with equality at $P$.", "alt": "Line l with points A and B on the same side. B′ is the reflection of B in l. The straight segment AB′ meets l at P; a longer broken path A–Y–B through another point Y of l is drawn in grey."},
    },
    {
      title: String.raw`Rotation and the Fermat point`,
      body: String.raw`In a triangle with all angles less than $120^\circ$, the sum $PA + PB + PC$ is smallest at the **Fermat point** $F$, where $\angle AFB = \angle BFC = \angle CFA = 120^\circ$.

- **Rotation proof**: rotate the plane by $60^\circ$ about $B$, taking $P \mapsto P'$ and $A \mapsto A'$. Triangle $BPP'$ is equilateral, so $PA + PB + PC = A'P' + P'P + PC$, a broken line from $A'$ to $C$. Hence $PA + PB + PC \ge A'C$.
- If one angle of the triangle is $120^\circ$ or more, the minimum is at that vertex.
- **Length formula**: when all angles are less than $120^\circ$,
$$(FA + FB + FC)^2 = \tfrac{1}{2}(a^2 + b^2 + c^2) + 2\sqrt{3}\,[ABC].$$
- The same rotation idea works whenever the distances from $P$ to two vertices of an equilateral or isosceles configuration appear together.`,
      figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [2.0, 3.8], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [5.4, 0.0], "tone": "ink"}, {"from": [5.4, 0.0], "to": [2.0, 3.8], "tone": "ink"}, {"from": [2.189, 1.517], "to": [2.0, 3.8], "tone": "accent"}, {"from": [2.189, 1.517], "to": [0.0, 0.0], "tone": "accent"}, {"from": [2.189, 1.517], "to": [5.4, 0.0], "tone": "accent"}], "points": [{"x": 2.189, "y": 1.517}], "labels": [{"x": 2.189, "y": 1.517, "text": "F", "pos": "w", "style": "italic"}, {"x": 2.0, "y": 3.8, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 5.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "angles": [{"at": [2.189, 1.517], "from": [2.0, 3.8], "to": [0.0, 0.0], "r": 0.6, "label": "120°"}, {"at": [2.189, 1.517], "from": [0.0, 0.0], "to": [5.4, 0.0], "r": 0.6, "label": "120°"}, {"at": [2.189, 1.517], "from": [5.4, 0.0], "to": [2.0, 3.8], "r": 0.6, "label": "120°"}], "x": [-0.6, 6.0], "y": [-0.6, 4.4], "caption": "At the Fermat point $F$ the sides subtend $120^\\circ$.", "alt": "Triangle ABC with its Fermat point F inside, joined to the three vertices; the three angles at F are each 120 degrees."},
    },
    {
      title: String.raw`Ptolemy's inequality`,
      body: String.raw`For **any** four points $A, B, C, D$:
$$AB \cdot CD + AD \cdot BC \ge AC \cdot BD,$$
with equality exactly when $ABCD$ is a convex quadrilateral inscribed in a circle (Ptolemy's theorem).

- **Proof with complex numbers**: $(a - b)(c - d) + (a - d)(b - c) = (a - c)(b - d)$ is an identity; take moduli and use $|u + v| \le |u| + |v|$.
- **Use**: it bounds a product of diagonals by the sides, and its equality case tells you that the extremal configuration is **cyclic**.
- **Corollary** (Pompeiu): if $ABC$ is equilateral, then $PB + PC \ge PA$ for every point $P$, with equality exactly on the arc $BC$ of the circumcircle not containing $A$.
- Example: in a square of side $s$, the diagonals give $s\sqrt{2} \cdot s\sqrt{2} = 2s^2 = s \cdot s + s \cdot s$, so equality holds, as it must for a cyclic quadrilateral.`,
      figure: {"type": "plot", "equal": true, "axes": false, "circles": [{"c": [0.0, 0.0], "r": 2.0, "tone": "muted"}], "segments": [{"from": [-0.845, 1.813], "to": [-1.879, -0.684], "tone": "ink"}, {"from": [-1.879, -0.684], "to": [0.684, -1.879], "tone": "ink"}, {"from": [0.684, -1.879], "to": [1.879, 0.684], "tone": "ink"}, {"from": [1.879, 0.684], "to": [-0.845, 1.813], "tone": "ink"}, {"from": [-0.845, 1.813], "to": [0.684, -1.879], "tone": "accent"}, {"from": [-1.879, -0.684], "to": [1.879, 0.684], "tone": "accent"}], "labels": [{"x": -0.845, "y": 1.813, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.879, "y": -0.684, "text": "B", "pos": "w", "style": "italic"}, {"x": 0.684, "y": -1.879, "text": "C", "pos": "s", "style": "italic"}, {"x": 1.879, "y": 0.684, "text": "D", "pos": "e", "style": "italic"}], "x": [-2.5, 2.5], "y": [-2.5, 2.5], "caption": "For four concyclic points, $AC \\cdot BD = AB \\cdot CD + AD \\cdot BC$.", "alt": "Cyclic quadrilateral ABCD inscribed in a circle, with diagonals AC and BD drawn."},
    },
    {
      title: String.raw`Largest areas`,
      body: String.raw`- **Two given sides** $a$, $b$: area $= \frac{1}{2}ab\sin C \le \frac{1}{2}ab$, with equality for a right angle between them.
- **Given base and perimeter**: the apex lies on an ellipse with the ends of the base as foci; the height, and so the area, is largest for the **isosceles** triangle.
- **Given perimeter**: among triangles, the equilateral one has the largest area; among $n$-gons, the regular $n$-gon.
- **Given side lengths of a polygon**: the area is largest when the polygon is **cyclic**. For a quadrilateral this is Brahmagupta's formula $\sqrt{(s - a)(s - b)(s - c)(s - d)}$, $s$ the semiperimeter.
- **Medians**: the three medians of a triangle can form a triangle, and its area is $\frac{3}{4}$ of the area of the original triangle.
- **Calculus-free tools**: AM-GM ($xy \le \left(\frac{x + y}{2}\right)^2$), Cauchy–Schwarz, and fixing all but one quantity at a time. Example: among rectangles with perimeter $20$, the $5 \times 5$ square has the largest area, $25$.`,
    },
    {
      title: String.raw`Euler's inequality $R \ge 2r$`,
      body: String.raw`**Euler's formula**: the distance between the circumcentre $O$ and the incentre $I$ satisfies
$$OI^2 = R^2 - 2Rr.$$
Since $OI^2 \ge 0$, we get $R \ge 2r$, with equality only for the equilateral triangle.

- Useful companions: $abc = 4RK$, $K = rs$, $r = 4R\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$, and $\cos A + \cos B + \cos C = 1 + \frac{r}{R}$.
- Example: for the $3$-$4$-$5$ triangle, $R = \frac{5}{2}$ and $r = 1$, so $OI^2 = \frac{25}{4} - 5 = \frac{5}{4}$.`,
      figure: {"type": "plot", "equal": true, "axes": false, "circles": [{"c": [2.2, 1.042], "r": 2.434, "tone": "muted"}, {"c": [1.476, 1.109], "r": 1.109, "tone": "accent"}], "segments": [{"from": [0.9, 3.1], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.4, 0.0], "tone": "ink"}, {"from": [4.4, 0.0], "to": [0.9, 3.1], "tone": "ink"}, {"from": [2.2, 1.042], "to": [1.476, 1.109], "tone": "warn", "dashed": true}], "points": [{"x": 2.2, "y": 1.042}, {"x": 1.476, "y": 1.109}], "labels": [{"x": 2.2, "y": 1.042, "text": "O", "pos": "e", "style": "italic"}, {"x": 1.476, "y": 1.109, "text": "I", "pos": "w", "style": "italic"}, {"x": 0.9, "y": 3.1, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "x": [-0.634, 5.034], "y": [-1.792, 3.876], "caption": "$OI^2 = R^2 - 2Rr \\ge 0$, so $R \\ge 2r$.", "alt": "Triangle ABC with its circumcircle (centre O) and incircle (centre I); the segment OI is dashed."},
    },
    {
      title: String.raw`Weitzenböck, Hadwiger–Finsler and Ravi substitution`,
      body: String.raw`- **Weitzenböck**: $a^2 + b^2 + c^2 \ge 4\sqrt{3}\,K$ for every triangle with area $K$, with equality for the equilateral triangle. Stronger (**Hadwiger–Finsler**): $a^2 + b^2 + c^2 \ge 4\sqrt{3}\,K + (a - b)^2 + (b - c)^2 + (c - a)^2$.
- **Ravi substitution**: write $a = y + z$, $b = z + x$, $c = x + y$ with $x, y, z > 0$ (the tangent lengths from the incircle). Every triangle gives such $x, y, z$ and vice versa, so a triangle inequality becomes an inequality for arbitrary positive numbers. Then
$$s = x + y + z,\quad K = \sqrt{xyz(x + y + z)},\quad r = \sqrt{\tfrac{xyz}{x + y + z}}.$$
- Symmetric expressions can then be written in $p = x + y + z$, $q = xy + yz + zx$, $t = xyz$, where $p^2 \ge 3q$ and $q^2 \ge 3pt$.
- Example: the $3$-$4$-$5$ triangle has $x, y, z = 1, 2, 3$, and Weitzenböck says $50 \ge 24\sqrt{3} \approx 41.6$.`,
    },
    {
      title: String.raw`Distances from a point inside a triangle`,
      body: String.raw`Let $P$ be inside triangle $ABC$, with distances $x, y, z$ to the sides $BC, CA, AB$ (lengths $a, b, c$).

- **Area split**: $ax + by + cz = 2[ABC]$. In an equilateral triangle, $x + y + z$ equals the height (Viviani).
- **Extremes at vertices**: a linear expression in the position of $P$ (such as $x + y + z$) takes its largest and smallest values over the triangle at vertices. A sum of distances $PA + PB + \cdots$ is convex, so its largest value over a segment or polygon is at an endpoint or vertex.
- **Sums of squares**: $PA^2 + PB^2 + PC^2 = GA^2 + GB^2 + GC^2 + 3PG^2$ ($G$ the centroid), so the minimum is at $G$. The same works for any set of points.
- **Erdős–Mordell**: $PA + PB + PC \ge 2(x + y + z)$, with equality only for the centre of an equilateral triangle. The key step is $a \cdot PA \ge c\,y + b\,z$, proved by reflecting $P$ in the bisector of angle $A$.`,
      figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.5, 3.8], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [5.0, 0.0], "tone": "ink"}, {"from": [5.0, 0.0], "to": [1.5, 3.8], "tone": "ink"}, {"from": [2.2, 1.3], "to": [2.2, 0.0], "tone": "good"}, {"from": [2.2, 1.3], "to": [3.067, 2.099], "tone": "good"}, {"from": [2.2, 1.3], "to": [0.741, 1.876], "tone": "good"}, {"from": [2.2, 1.3], "to": [1.5, 3.8], "tone": "accent", "dashed": true}, {"from": [2.2, 1.3], "to": [0.0, 0.0], "tone": "accent", "dashed": true}, {"from": [2.2, 1.3], "to": [5.0, 0.0], "tone": "accent", "dashed": true}], "rightAngles": [{"at": [2.2, 0.0], "a": [-2.2, 0.0], "b": [0.0, 1.3], "size": 0.18}, {"at": [3.067, 2.099], "a": [1.933, -2.099], "b": [-0.867, -0.799], "size": 0.18}, {"at": [0.741, 1.876], "a": [0.759, 1.924], "b": [1.459, -0.576], "size": 0.18}], "points": [{"x": 2.2, "y": 1.3}], "labels": [{"x": 2.2, "y": 1.3, "text": "P", "pos": "e", "style": "italic"}, {"x": 1.5, "y": 3.8, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 5.0, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "x": [-0.5, 5.5], "y": [-0.5, 4.3], "caption": "Distances to the vertices (dashed) and to the sides (green).", "alt": "Triangle ABC with an interior point P joined to the vertices by dashed segments and with perpendiculars from P to the three sides."},
    },
  ],
  archetypes: [
    {
      id: "G7-triangle-inequality",
      name: String.raw`Triangle inequality tricks`,
      tests: String.raw`Bounding lengths with $XY \le XZ + ZY$: sides of polygons, medians, diagonals and sums of distances. Look for a broken line to straighten, or double a median to make a parallelogram.`,
      questions: [
        {
          stem: String.raw`Four points $A$, $B$, $C$, $D$ in the plane satisfy $AB = 5$, $BC = 8$ and $CD = 20$. Which of the following can **not** be the length of $AD$?`,
          difficulty: 1,
          choices: [String.raw`$7$`, String.raw`$18$`, String.raw`$30$`, String.raw`$33$`, String.raw`$34$`],
          answer: String.raw`(E) $34$`,
        },
        {
          stem: String.raw`Convex quadrilateral $ABCD$ has diagonals $AC = 9$ and $BD = 14$, as shown. Find the smallest possible value of $PA + PB + PC + PD$ over all points $P$ in the plane.`,
          difficulty: 1,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-1.576, -0.278], "to": [-0.417, -2.364], "tone": "ink"}, {"from": [-0.417, -2.364], "to": [1.97, 0.347], "tone": "ink"}, {"from": [1.97, 0.347], "to": [0.556, 3.151], "tone": "ink"}, {"from": [0.556, 3.151], "to": [-1.576, -0.278], "tone": "ink"}, {"from": [-1.576, -0.278], "to": [1.97, 0.347], "tone": "accent"}, {"from": [-0.417, -2.364], "to": [0.556, 3.151], "tone": "accent"}, {"from": [1.0, -1.25], "to": [-1.576, -0.278], "tone": "muted", "dashed": true}, {"from": [1.0, -1.25], "to": [-0.417, -2.364], "tone": "muted", "dashed": true}, {"from": [1.0, -1.25], "to": [1.97, 0.347], "tone": "muted", "dashed": true}, {"from": [1.0, -1.25], "to": [0.556, 3.151], "tone": "muted", "dashed": true}], "points": [{"x": 1.0, "y": -1.25}], "labels": [{"x": 1.0, "y": -1.25, "text": "P", "pos": "s", "style": "italic"}, {"x": -1.576, "y": -0.278, "text": "A", "pos": "w", "style": "italic"}, {"x": -0.417, "y": -2.364, "text": "B", "pos": "s", "style": "italic"}, {"x": 1.97, "y": 0.347, "text": "C", "pos": "e", "style": "italic"}, {"x": 0.556, "y": 3.151, "text": "D", "pos": "n", "style": "italic"}, {"x": 1.28, "y": 0.226, "text": "9", "pos": "n", "style": "plain", "tone": "accent"}, {"x": 0.26, "y": 1.477, "text": "14", "pos": "w", "style": "plain", "tone": "accent"}], "x": [-2.076, 2.47], "y": [-2.864, 3.651], "alt": "Convex quadrilateral ABCD with diagonals AC = 9 and BD = 14, and a point P joined to the four vertices by dashed segments."},
          answer: String.raw`$23$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 9$ and $AC = 15$, and the median $AM$ has integer length. How many different values can $AM$ take?`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.65, 3.082], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.9, 0.0], "tone": "ink"}, {"from": [4.9, 0.0], "to": [0.65, 3.082], "tone": "ink"}, {"from": [0.65, 3.082], "to": [2.45, 0.0], "tone": "accent", "dashed": true}], "points": [{"x": 2.45, "y": 0.0}], "labels": [{"x": 2.45, "y": 0.0, "text": "M", "pos": "s", "style": "italic"}, {"x": 0.65, "y": 3.082, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.9, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 0.325, "y": 1.541, "text": "9", "pos": "nw", "style": "plain"}, {"x": 2.775, "y": 1.541, "text": "15", "pos": "ne", "style": "plain"}], "x": [-0.5, 5.4], "y": [-0.5, 3.582], "alt": "Triangle ABC with AB = 9 and AC = 15; M is the midpoint of BC and the median AM is dashed."},
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`A convex quadrilateral has perimeter $20$, and the sum of the lengths of its two diagonals is an integer. How many different values can this sum take?`,
          difficulty: 2,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`The diagonals of convex quadrilateral $ABCD$ are perpendicular, with $AC = 6$ and $BD = 8$. Find the smallest possible perimeter of $ABCD$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-1.2, 0.0], "to": [0.0, -1.8], "tone": "ink"}, {"from": [0.0, -1.8], "to": [2.4, 0.0], "tone": "ink"}, {"from": [2.4, 0.0], "to": [0.0, 3.0], "tone": "ink"}, {"from": [0.0, 3.0], "to": [-1.2, 0.0], "tone": "ink"}, {"from": [-1.2, 0.0], "to": [2.4, 0.0], "tone": "accent"}, {"from": [0.0, -1.8], "to": [0.0, 3.0], "tone": "accent"}], "rightAngles": [{"at": [0.0, 0.0], "a": [1.0, 0.0], "b": [0.0, 1.0], "size": 0.2}], "labels": [{"x": -1.2, "y": 0.0, "text": "A", "pos": "w", "style": "italic"}, {"x": 0.0, "y": -1.8, "text": "B", "pos": "s", "style": "italic"}, {"x": 2.4, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 0.0, "y": 3.0, "text": "D", "pos": "n", "style": "italic"}], "x": [-1.65, 2.85], "y": [-2.25, 3.45], "alt": "Convex quadrilateral ABCD whose diagonals AC and BD cross at right angles."},
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`In triangle $ABC$, the medians $BE$ and $CF$ are perpendicular, as shown. Prove that
$$3\,BC < AB + AC \le \sqrt{10}\,BC.$$`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [3.247, 5.869], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.0, 0.0], "tone": "ink"}, {"from": [4.0, 0.0], "to": [3.247, 5.869], "tone": "ink"}, {"from": [0.0, 0.0], "to": [3.624, 2.934], "tone": "accent"}, {"from": [4.0, 0.0], "to": [1.624, 2.934], "tone": "accent"}], "rightAngles": [{"at": [2.416, 1.956], "a": [-2.416, -1.956], "b": [1.584, -1.956], "size": 0.25}], "points": [{"x": 3.624, "y": 2.934}, {"x": 1.624, "y": 2.934}, {"x": 2.416, "y": 1.956}], "labels": [{"x": 3.247, "y": 5.869, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.0, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 3.624, "y": 2.934, "text": "E", "pos": "e", "style": "italic"}, {"x": 1.624, "y": 2.934, "text": "F", "pos": "w", "style": "italic"}, {"x": 2.416, "y": 1.956, "text": "G", "pos": "n", "style": "italic"}], "x": [-0.5, 4.5], "y": [-0.5, 6.369], "alt": "Triangle ABC with E the midpoint of CA and F the midpoint of AB; the medians BE and CF meet at G at a right angle."},
          answer: String.raw`**Proof.** Key idea: the medians meet at the centroid $G$ with $\angle BGC = 90^\circ$, so $GM = \frac{1}{2}BC$ for the midpoint $M$ of $BC$ and the third median is $AM = 3GM = \frac{3}{2}BC$; doubling it gives $AB + AC > 2AM = 3BC$, and the median formula $AB^2 + AC^2 = 2AM^2 + \frac{1}{2}BC^2 = 5BC^2$ with $AB + AC \le \sqrt{2(AB^2 + AC^2)}$ gives the upper bound.`,
        },
        {
          stem: String.raw`Triangle $ABC$ has centroid $G$, and $D$, $E$, $F$ are the midpoints of $BC$, $CA$, $AB$. Prove that for every point $P$ in the plane,
$$PA + PB + PC + 3PG \ge 2(PD + PE + PF).$$`,
          difficulty: 4,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.4, 3.4], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.8, 0.0], "tone": "ink"}, {"from": [4.8, 0.0], "to": [1.4, 3.4], "tone": "ink"}, {"from": [1.6, 0.45], "to": [1.4, 3.4], "tone": "muted", "dashed": true}, {"from": [1.6, 0.45], "to": [0.0, 0.0], "tone": "muted", "dashed": true}, {"from": [1.6, 0.45], "to": [4.8, 0.0], "tone": "muted", "dashed": true}, {"from": [1.6, 0.45], "to": [2.4, 0.0], "tone": "accent"}, {"from": [1.6, 0.45], "to": [3.1, 1.7], "tone": "accent"}, {"from": [1.6, 0.45], "to": [0.7, 1.7], "tone": "accent"}, {"from": [1.6, 0.45], "to": [2.067, 1.133], "tone": "good"}], "points": [{"x": 2.067, "y": 1.133}, {"x": 2.4, "y": 0.0}, {"x": 3.1, "y": 1.7}, {"x": 0.7, "y": 1.7}, {"x": 1.6, "y": 0.45}], "labels": [{"x": 2.067, "y": 1.133, "text": "G", "pos": "e", "style": "italic"}, {"x": 2.4, "y": 0.0, "text": "D", "pos": "s", "style": "italic"}, {"x": 3.1, "y": 1.7, "text": "E", "pos": "ne", "style": "italic"}, {"x": 0.7, "y": 1.7, "text": "F", "pos": "nw", "style": "italic"}, {"x": 1.6, "y": 0.45, "text": "P", "pos": "sw", "style": "italic"}, {"x": 1.4, "y": 3.4, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.8, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "x": [-0.5, 5.3], "y": [-0.5, 3.9], "alt": "Triangle ABC with midpoints D, E, F of BC, CA, AB and centroid G. A point P is joined to A, B, C (dashed), to D, E, F and to G."},
          answer: String.raw`**Proof.** Key idea: with $\mathbf{a}, \mathbf{b}, \mathbf{c}$ the vectors from $P$ to $A, B, C$, this is Hlawka's inequality $|\mathbf{a}| + |\mathbf{b}| + |\mathbf{c}| + |\mathbf{a} + \mathbf{b} + \mathbf{c}| \ge |\mathbf{a} + \mathbf{b}| + |\mathbf{b} + \mathbf{c}| + |\mathbf{c} + \mathbf{a}|$, which follows by multiplying the difference by $|\mathbf{a}| + |\mathbf{b}| + |\mathbf{c}| + |\mathbf{a} + \mathbf{b} + \mathbf{c}|$ and using $|\mathbf{a}|^2 + |\mathbf{b}|^2 + |\mathbf{c}|^2 + |\mathbf{a} + \mathbf{b} + \mathbf{c}|^2 = |\mathbf{a} + \mathbf{b}|^2 + |\mathbf{b} + \mathbf{c}|^2 + |\mathbf{c} + \mathbf{a}|^2$ to write the product as a sum of three products of non-negative factors such as $(|\mathbf{a}| + |\mathbf{b}| - |\mathbf{a} + \mathbf{b}|)(|\mathbf{c}| - |\mathbf{a} + \mathbf{b}| + |\mathbf{a} + \mathbf{b} + \mathbf{c}|)$.`,
        },
      ],
    },
    {
      id: "G7-reflection-paths",
      name: String.raw`Shortest paths by reflection`,
      tests: String.raw`A path must touch a line, several lines or a circle on the way, or a ball bounces off walls. Reflect the end points (or unfold the region) so that the path becomes a straight segment.`,
      questions: [
        {
          stem: String.raw`Let $A = (4, 3)$ and $B = (2, 5)$. A path goes in straight segments from $A$ to a point $P$ on the $x$-axis, then to a point $Q$ on the $y$-axis, then to $B$. Find the shortest possible length of the path.`,
          difficulty: 1,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-0.6, 0.0], "to": [6.4, 0.0], "tone": "ink"}, {"from": [0.0, -0.6], "to": [0.0, 6.4], "tone": "ink"}], "labels": [{"x": 6.4, "y": 0.0, "text": "x", "pos": "se", "style": "italic"}, {"x": 0.0, "y": 6.4, "text": "y", "pos": "nw", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "O", "pos": "sw", "style": "italic"}, {"x": 4.0, "y": 3.0, "text": "A (4, 3)", "pos": "e", "style": "plain"}, {"x": 2.0, "y": 5.0, "text": "B (2, 5)", "pos": "e", "style": "plain"}], "points": [{"x": 4.0, "y": 3.0}, {"x": 2.0, "y": 5.0}], "x": [-1.2, 8.6], "y": [-1.0, 7.0], "alt": "Coordinate axes with the points A(4, 3) and B(2, 5) in the first quadrant."},
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Let $A = (1, 2)$ and $B = (5, -5)$. Find the largest possible value of $|PA - PB|$ as $P$ ranges over the $x$-axis.`,
          difficulty: 1,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-3.0, 0.0], "to": [8.0, 0.0], "tone": "ink"}], "labels": [{"x": 8.0, "y": 0.0, "text": "x", "pos": "se", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "O", "pos": "sw", "style": "plain"}, {"x": 1.0, "y": 2.0, "text": "A (1, 2)", "pos": "e", "style": "plain"}, {"x": 5.0, "y": -5.0, "text": "B (5, −5)", "pos": "e", "style": "plain"}], "points": [{"x": 0.0, "y": 0.0}, {"x": 1.0, "y": 2.0}, {"x": 5.0, "y": -5.0}], "x": [-3.6, 9.6], "y": [-6.0, 3.0], "alt": "The x-axis with A(1, 2) above it and B(5, −5) below it."},
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`$P$ is a point inside a $12 \times 5$ rectangle. A path starts at $P$, touches all four sides of the rectangle and returns to $P$. Find the shortest possible length of such a path.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [5.4, 0.0], "tone": "ink"}, {"from": [5.4, 0.0], "to": [5.4, 2.25], "tone": "ink"}, {"from": [5.4, 2.25], "to": [0.0, 2.25], "tone": "ink"}, {"from": [0.0, 2.25], "to": [0.0, 0.0], "tone": "ink"}], "points": [{"x": 1.8, "y": 0.9}], "labels": [{"x": 1.8, "y": 0.9, "text": "P", "pos": "ne", "style": "italic"}, {"x": 2.7, "y": 0.0, "text": "12", "pos": "s", "style": "plain"}, {"x": 5.4, "y": 1.125, "text": "5", "pos": "e", "style": "plain"}], "x": [-0.5, 5.9], "y": [-0.5, 2.75], "alt": "A 12 by 5 rectangle with a point P inside it."},
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`Let $A = (0, 4)$, and let $\omega$ be the circle with centre $(12, 5)$ and radius $2$. Point $P$ lies on the $x$-axis and point $Q$ lies on $\omega$. Find the smallest possible value of $AP + PQ$.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [-1.0, 0.0], "to": [15.5, 0.0], "tone": "ink"}], "labels": [{"x": 15.5, "y": 0.0, "text": "x", "pos": "se", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "O", "pos": "sw", "style": "plain"}, {"x": 0.0, "y": 4.0, "text": "A (0, 4)", "pos": "e", "style": "plain"}, {"x": 12.0, "y": 5.0, "text": "(12, 5)", "pos": "n", "style": "plain"}], "points": [{"x": 0.0, "y": 0.0}, {"x": 0.0, "y": 4.0}, {"x": 12.0, "y": 5.0}], "circles": [{"c": [12.0, 5.0], "r": 2.0, "tone": "accent"}], "x": [-1.6, 16.6], "y": [-1.2, 7.8], "alt": "The x-axis, the point A(0, 4), and a circle with centre (12, 5) and radius 2 lying above the axis."},
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle BAC = 40^\circ$, $AB = 5$ and $AC = 3$. Points $P$ and $Q$ lie on the sides $AB$ and $AC$. Find the smallest possible value of $BQ + QP + PC$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [5.0, 0.0], "tone": "ink"}, {"from": [5.0, 0.0], "to": [2.298, 1.928], "tone": "ink"}, {"from": [2.298, 1.928], "to": [0.0, 0.0], "tone": "ink"}, {"from": [5.0, 0.0], "to": [1.149, 0.964], "tone": "accent"}, {"from": [1.149, 0.964], "to": [1.9, 0.0], "tone": "accent"}, {"from": [1.9, 0.0], "to": [2.298, 1.928], "tone": "accent"}], "angles": [{"at": [0.0, 0.0], "from": [5.0, 0.0], "to": [2.298, 1.928], "r": 0.85, "label": "40°"}], "points": [{"x": 1.9, "y": 0.0}, {"x": 1.149, "y": 0.964}], "labels": [{"x": 1.9, "y": 0.0, "text": "P", "pos": "s", "style": "italic"}, {"x": 1.149, "y": 0.964, "text": "Q", "pos": "nw", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "A", "pos": "sw", "style": "italic"}, {"x": 5.0, "y": 0.0, "text": "B", "pos": "se", "style": "italic"}, {"x": 2.298, "y": 1.928, "text": "C", "pos": "n", "style": "italic"}], "x": [-0.5, 5.5], "y": [-0.5, 2.428], "alt": "Triangle ABC with angle A = 40°, AB = 5 and AC = 3. P is on AB and Q is on AC, and the broken path B–Q–P–C is drawn."},
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`$ABC$ is an acute triangle and $P$ is a fixed point on side $BC$. Points $Q$ and $R$ move along the sides $CA$ and $AB$. Prove that the smallest possible perimeter of triangle $PQR$ is $2\,AP\sin A$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.8, 3.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.4, 0.0], "tone": "ink"}, {"from": [4.4, 0.0], "to": [1.8, 3.6], "tone": "ink"}, {"from": [2.9, 0.0], "to": [2.97, 1.98], "tone": "accent"}, {"from": [2.97, 1.98], "to": [0.99, 1.98], "tone": "accent"}, {"from": [0.99, 1.98], "to": [2.9, 0.0], "tone": "accent"}], "points": [{"x": 2.9, "y": 0.0}, {"x": 2.97, "y": 1.98}, {"x": 0.99, "y": 1.98}], "labels": [{"x": 2.9, "y": 0.0, "text": "P", "pos": "s", "style": "italic"}, {"x": 2.97, "y": 1.98, "text": "Q", "pos": "ne", "style": "italic"}, {"x": 0.99, "y": 1.98, "text": "R", "pos": "nw", "style": "italic"}, {"x": 1.8, "y": 3.6, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "x": [-0.45, 4.85], "y": [-0.45, 4.05], "alt": "Acute triangle ABC with P on BC, Q on CA and R on AB, and triangle PQR drawn inside."},
          answer: String.raw`**Proof.** Key idea: reflect $P$ in $AB$ and in $AC$ to $P_1$ and $P_2$; the perimeter equals the broken line $P_1R + RQ + QP_2 \ge P_1P_2$, and triangle $AP_1P_2$ is isosceles with $AP_1 = AP_2 = AP$ and apex angle $2A$, so $P_1P_2 = 2\,AP\sin A$ (acuteness makes $P_1P_2$ cross the two sides, so the bound is attained).`,
        },
        {
          stem: String.raw`Prove that every closed path lying in a regular hexagon of side $1$ that touches all six sides of the hexagon has length at least $3\sqrt{3}$.`,
          difficulty: 4,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.0, 0.0], "to": [0.5, 0.866], "tone": "ink"}, {"from": [0.5, 0.866], "to": [-0.5, 0.866], "tone": "ink"}, {"from": [-0.5, 0.866], "to": [-1.0, 0.0], "tone": "ink"}, {"from": [-1.0, 0.0], "to": [-0.5, -0.866], "tone": "ink"}, {"from": [-0.5, -0.866], "to": [0.5, -0.866], "tone": "ink"}, {"from": [0.5, -0.866], "to": [1.0, 0.0], "tone": "ink"}, {"from": [0.85, 0.26], "to": [-0.15, 0.866], "tone": "accent"}, {"from": [-0.15, 0.866], "to": [-0.7, 0.52], "tone": "accent"}, {"from": [-0.7, 0.52], "to": [-0.9, -0.173], "tone": "accent"}, {"from": [-0.9, -0.173], "to": [0.2, -0.866], "tone": "accent"}, {"from": [0.2, -0.866], "to": [0.75, -0.433], "tone": "accent"}, {"from": [0.75, -0.433], "to": [0.85, 0.26], "tone": "accent"}], "points": [{"x": 0.85, "y": 0.26}, {"x": -0.15, "y": 0.866}, {"x": -0.7, "y": 0.52}, {"x": -0.9, "y": -0.173}, {"x": 0.2, "y": -0.866}, {"x": 0.75, "y": -0.433}], "x": [-1.25, 1.25], "y": [-1.116, 1.116], "alt": "A regular hexagon with a closed broken path inside it that touches each of the six sides."},
          answer: String.raw`**Proof.** Key idea: the path is at least as long as the hexagon $X_1X_2 \cdots X_6$ formed by one touching point $X_i$ on each side $i$, taken in order around the boundary; unfolding (reflecting the hexagon in the sides through $X_2, X_3, \ldots, X_6$ in turn) straightens this perimeter into a path from $X_1$ to its image under the composite of the reflections in all six sides, which is a translation (its rotation angle is $3 \cdot 120^\circ$); its length is $3\sqrt{3}$ because the hexagon of side midpoints, of perimeter $3\sqrt{3}$, obeys the reflection law at every side and so unfolds into a straight segment.`,
        },
      ],
    },
    {
      id: "G7-ptolemy-fermat",
      name: String.raw`Ptolemy's inequality and the Fermat point`,
      tests: String.raw`Minimising $PA + PB + PC$, or bounding a diagonal or a product of diagonals by the sides. Rotate by $60^\circ$ to straighten the sum of distances; use Ptolemy's inequality, whose equality case is a cyclic quadrilateral.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $AB = 5$, $AC = 3$ and $\angle BAC = 120^\circ$. Find the smallest possible value of $PA + PB + PC$ over all points $P$ in the plane.`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Point $P$ inside triangle $ABC$ satisfies $\angle APB = \angle BPC = \angle CPA = 120^\circ$, and $PA = 2$, $PB = 3$, $PC = 5$, as shown. Find the area of triangle $ABC$.`,
          difficulty: 1,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 1.2], "to": [-1.559, -0.9], "tone": "ink"}, {"from": [-1.559, -0.9], "to": [2.598, -1.5], "tone": "ink"}, {"from": [2.598, -1.5], "to": [0.0, 1.2], "tone": "ink"}, {"from": [0.0, 0.0], "to": [0.0, 1.2], "tone": "accent"}, {"from": [0.0, 0.0], "to": [-1.559, -0.9], "tone": "accent"}, {"from": [0.0, 0.0], "to": [2.598, -1.5], "tone": "accent"}], "points": [{"x": 0.0, "y": 0.0}], "labels": [{"x": 0.0, "y": 0.0, "text": "P", "pos": "e", "style": "italic"}, {"x": 0.0, "y": 1.2, "text": "A", "pos": "n", "style": "italic"}, {"x": -1.559, "y": -0.9, "text": "B", "pos": "sw", "style": "italic"}, {"x": 2.598, "y": -1.5, "text": "C", "pos": "se", "style": "italic"}, {"x": 0.0, "y": 0.6, "text": "2", "pos": "e", "style": "plain"}, {"x": -0.779, "y": -0.45, "text": "3", "pos": "n", "style": "plain"}, {"x": 1.299, "y": -0.75, "text": "5", "pos": "n", "style": "plain"}], "angles": [{"at": [0.0, 0.0], "from": [0.0, 1.2], "to": [-1.559, -0.9], "r": 0.35, "label": "120°"}, {"at": [0.0, 0.0], "from": [-1.559, -0.9], "to": [2.598, -1.5], "r": 0.35, "label": "120°"}], "x": [-2.009, 3.048], "y": [-1.95, 1.65], "alt": "Triangle ABC with an interior point P joined to the vertices, PA = 2, PB = 3, PC = 5, and angles APB and BPC of 120 degrees."},
          answer: String.raw`$\dfrac{31\sqrt{3}}{4}$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = AC = 2$ and $\angle BAC = 30^\circ$. Find the smallest possible value of $PA + PB + PC$ over all points $P$ in the plane.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 3.091], "to": [-0.828, 0.0], "tone": "ink"}, {"from": [-0.828, 0.0], "to": [0.828, 0.0], "tone": "ink"}, {"from": [0.828, 0.0], "to": [0.0, 3.091], "tone": "ink"}], "angles": [{"at": [0.0, 3.091], "from": [-0.828, 0.0], "to": [0.828, 0.0], "r": 0.75, "label": "30°"}], "labels": [{"x": 0.0, "y": 3.091, "text": "A", "pos": "n", "style": "italic"}, {"x": -0.828, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 0.828, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": -0.414, "y": 1.545, "text": "2", "pos": "w", "style": "plain"}, {"x": 0.414, "y": 1.545, "text": "2", "pos": "e", "style": "plain"}], "x": [-1.328, 1.328], "y": [-0.5, 3.591], "alt": "Tall isosceles triangle ABC with AB = AC = 2 and apex angle 30 degrees at A."},
          answer: String.raw`$2\sqrt{2}$`,
        },
        {
          stem: String.raw`A convex quadrilateral $ABCD$ has $AB = 3$, $BC = 4$, $CD = 5$ and $DA = 6$, but its angles may vary. Find the largest possible value of $AC \cdot BD$.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [2.114, 2.129], "tone": "ink"}, {"from": [2.114, 2.129], "to": [5.5, 0.0], "tone": "ink"}, {"from": [5.5, 0.0], "to": [3.75, -4.684], "tone": "ink"}, {"from": [3.75, -4.684], "to": [0.0, 0.0], "tone": "ink"}], "labels": [{"x": 0.0, "y": 0.0, "text": "A", "pos": "w", "style": "italic"}, {"x": 2.114, "y": 2.129, "text": "B", "pos": "n", "style": "italic"}, {"x": 5.5, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 3.75, "y": -4.684, "text": "D", "pos": "s", "style": "italic"}, {"x": 1.057, "y": 1.064, "text": "3", "pos": "nw", "style": "plain"}, {"x": 3.807, "y": 1.064, "text": "4", "pos": "ne", "style": "plain"}, {"x": 4.625, "y": -2.342, "text": "5", "pos": "se", "style": "plain"}, {"x": 1.875, "y": -2.342, "text": "6", "pos": "sw", "style": "plain"}], "x": [-0.5, 6.0], "y": [-5.184, 2.629], "alt": "Convex quadrilateral ABCD with AB = 3, BC = 4, CD = 5 and DA = 6."},
          answer: String.raw`$39$`,
        },
        {
          stem: String.raw`In convex quadrilateral $ABCD$, $AB = AD$, $\angle BAD = 90^\circ$, $CB = 3$ and $CD = 5$. Find the largest possible length of $AC$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.8, 1.8], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [1.0, -1.497], "tone": "ink"}, {"from": [1.0, -1.497], "to": [3.6, 0.0], "tone": "ink"}, {"from": [3.6, 0.0], "to": [1.8, 1.8], "tone": "ink"}], "rightAngles": [{"at": [1.8, 1.8], "a": [-1.8, -1.8], "b": [1.8, -1.8], "size": 0.25}], "labels": [{"x": 1.8, "y": 1.8, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "w", "style": "italic"}, {"x": 1.0, "y": -1.497, "text": "C", "pos": "s", "style": "italic"}, {"x": 3.6, "y": 0.0, "text": "D", "pos": "e", "style": "italic"}, {"x": 0.5, "y": -0.748, "text": "3", "pos": "sw", "style": "plain"}, {"x": 2.3, "y": -0.748, "text": "5", "pos": "se", "style": "plain"}], "x": [-0.5, 4.1], "y": [-1.997, 2.3], "alt": "Convex quadrilateral ABCD with AB = AD and a right angle at A, CB = 3 and CD = 5."},
          answer: String.raw`$4\sqrt{2}$`,
        },
        {
          stem: String.raw`Prove that for any four points $A$, $B$, $C$, $D$ in space (not necessarily in one plane),
$$AB \cdot CD + AD \cdot BC \ge AC \cdot BD.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the map $X \mapsto X^{*} = A + \dfrac{X - A}{AX^2}$ satisfies $X^{*}Y^{*} = \dfrac{XY}{AX \cdot AY}$, so the triangle inequality $B^{*}D^{*} \le B^{*}C^{*} + C^{*}D^{*}$, multiplied by $AB \cdot AC \cdot AD$, is exactly the claim.`,
        },
        {
          stem: String.raw`Regular hexagon $A_1A_2A_3A_4A_5A_6$ has side $1$. Prove that for every point $P$ in the plane,
$$PA_1 \cdot PA_3 \cdot PA_5 + PA_2 \cdot PA_4 \cdot PA_6 \ge 2,$$
and find all points $P$ for which equality holds.`,
          difficulty: 4,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.0, 0.0], "to": [0.5, 0.866], "tone": "ink"}, {"from": [0.5, 0.866], "to": [-0.5, 0.866], "tone": "ink"}, {"from": [-0.5, 0.866], "to": [-1.0, 0.0], "tone": "ink"}, {"from": [-1.0, 0.0], "to": [-0.5, -0.866], "tone": "ink"}, {"from": [-0.5, -0.866], "to": [0.5, -0.866], "tone": "ink"}, {"from": [0.5, -0.866], "to": [1.0, 0.0], "tone": "ink"}, {"from": [0.22, -0.38], "to": [1.0, 0.0], "tone": "accent", "dashed": true}, {"from": [0.22, -0.38], "to": [0.5, 0.866], "tone": "good", "dashed": true}, {"from": [0.22, -0.38], "to": [-0.5, 0.866], "tone": "accent", "dashed": true}, {"from": [0.22, -0.38], "to": [-1.0, 0.0], "tone": "good", "dashed": true}, {"from": [0.22, -0.38], "to": [-0.5, -0.866], "tone": "accent", "dashed": true}, {"from": [0.22, -0.38], "to": [0.5, -0.866], "tone": "good", "dashed": true}], "points": [{"x": 0.22, "y": -0.38}], "labels": [{"x": 0.22, "y": -0.38, "text": "P", "pos": "s", "style": "italic"}, {"x": 1.0, "y": 0.0, "text": "A₁", "pos": "e", "style": "italic"}, {"x": 0.5, "y": 0.866, "text": "A₂", "pos": "ne", "style": "italic"}, {"x": -0.5, "y": 0.866, "text": "A₃", "pos": "nw", "style": "italic"}, {"x": -1.0, "y": 0.0, "text": "A₄", "pos": "w", "style": "italic"}, {"x": -0.5, "y": -0.866, "text": "A₅", "pos": "sw", "style": "italic"}, {"x": 0.5, "y": -0.866, "text": "A₆", "pos": "se", "style": "italic"}], "x": [-1.4, 1.4], "y": [-1.266, 1.266], "alt": "Regular hexagon A1A2A3A4A5A6 with a point P joined to all six vertices; segments to A1, A3, A5 in one colour and to A2, A4, A6 in another."},
          answer: String.raw`Equality exactly when $P$ lies on one of the three main diagonals $A_1A_4$, $A_2A_5$, $A_3A_6$. **Proof.** Key idea: with the centre at $0$ and $A_k$ at the complex number $\omega^{k-1}$, $\omega = e^{i\pi/3}$, the two products are $|z^3 - 1|$ and $|z^3 + 1|$, and $|z^3 + 1| + |1 - z^3| \ge 2$ with equality exactly when $z^3$ is a real number in $[-1, 1]$.`,
        },
      ],
    },
    {
      id: "G7-max-area",
      name: String.raw`Largest area under constraints`,
      tests: String.raw`Find the largest area of a triangle or polygon when some sides, the perimeter or the medians are fixed. Use $\frac{1}{2}ab\sin C$, symmetry (isosceles, regular), the fact that cyclic polygons are best, or a reflection that makes a free side into a symmetry axis.`,
      questions: [
        {
          stem: String.raw`A triangle has two sides of lengths $6$ and $10$. What is the largest possible area of the triangle?`,
          difficulty: 1,
          choices: [String.raw`$15$`, String.raw`$24$`, String.raw`$30$`, String.raw`$32$`, String.raw`$60$`],
          answer: String.raw`(C) $30$`,
        },
        {
          stem: String.raw`A triangle has one side of length $8$ and perimeter $18$. Find the largest possible area of the triangle.`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Quadrilateral $ABCD$ has $AB = 1$, $BC = 4$, $CD = 7$ and $DA = 8$. Find the largest possible area of $ABCD$.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [0.243, 0.548], "tone": "ink"}, {"from": [0.243, 0.548], "to": [2.58, 0.0], "tone": "ink"}, {"from": [2.58, 0.0], "to": [2.337, -4.193], "tone": "ink"}, {"from": [2.337, -4.193], "to": [0.0, 0.0], "tone": "ink"}], "labels": [{"x": 0.0, "y": 0.0, "text": "A", "pos": "w", "style": "italic"}, {"x": 0.243, "y": 0.548, "text": "B", "pos": "n", "style": "italic"}, {"x": 2.58, "y": 0.0, "text": "C", "pos": "e", "style": "italic"}, {"x": 2.337, "y": -4.193, "text": "D", "pos": "s", "style": "italic"}, {"x": 0.122, "y": 0.274, "text": "1", "pos": "nw", "style": "plain"}, {"x": 1.412, "y": 0.274, "text": "4", "pos": "n", "style": "plain"}, {"x": 2.458, "y": -2.096, "text": "7", "pos": "se", "style": "plain"}, {"x": 1.168, "y": -2.096, "text": "8", "pos": "sw", "style": "plain"}], "x": [-0.5, 3.08], "y": [-4.693, 1.048], "alt": "Quadrilateral ABCD with AB = 1, BC = 4, CD = 7 and DA = 8."},
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Two of the medians of a triangle have lengths $6$ and $9$. Find the largest possible area of the triangle.`,
          difficulty: 2,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`Convex pentagon $ABCDE$ has $AB = BC = CD = DE = 1$, while the side $EA$ may have any length. Find the largest possible area of the pentagon.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [1.6, 0.0], "tone": "ink"}, {"from": [1.6, 0.0], "to": [2.628, 1.226], "tone": "ink"}, {"from": [2.628, 1.226], "to": [2.489, 2.82], "tone": "ink"}, {"from": [2.489, 2.82], "to": [1.103, 3.62], "tone": "ink"}, {"from": [1.103, 3.62], "to": [0.0, 0.0], "tone": "ink"}], "labels": [{"x": 0.8, "y": 0.0, "text": "1", "pos": "s", "style": "plain"}, {"x": 2.114, "y": 0.613, "text": "1", "pos": "se", "style": "plain"}, {"x": 2.559, "y": 2.023, "text": "1", "pos": "ne", "style": "plain"}, {"x": 1.796, "y": 3.22, "text": "1", "pos": "n", "style": "plain"}, {"x": 0.0, "y": 0.0, "text": "A", "pos": "sw", "style": "italic"}, {"x": 1.6, "y": 0.0, "text": "B", "pos": "se", "style": "italic"}, {"x": 2.628, "y": 1.226, "text": "C", "pos": "e", "style": "italic"}, {"x": 2.489, "y": 2.82, "text": "D", "pos": "n", "style": "italic"}, {"x": 1.103, "y": 3.62, "text": "E", "pos": "w", "style": "italic"}], "x": [-0.45, 3.078], "y": [-0.45, 4.07], "alt": "Convex pentagon ABCDE with AB = BC = CD = DE = 1; side EA is unmarked."},
          answer: String.raw`$1 + \sqrt{2}$`,
        },
        {
          stem: String.raw`Prove that the area of every convex quadrilateral $ABCD$ is at most $\frac{1}{2}(AB \cdot CD + BC \cdot DA)$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.3, 2.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.2, 0.3], "tone": "ink"}, {"from": [4.2, 0.3], "to": [3.4, 3.2], "tone": "ink"}, {"from": [3.4, 3.2], "to": [0.3, 2.6], "tone": "ink"}, {"from": [0.3, 2.6], "to": [4.2, 0.3], "tone": "muted", "dashed": true}, {"from": [0.0, 0.0], "to": [3.4, 3.2], "tone": "muted", "dashed": true}], "labels": [{"x": 0.3, "y": 2.6, "text": "A", "pos": "nw", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.2, "y": 0.3, "text": "C", "pos": "se", "style": "italic"}, {"x": 3.4, "y": 3.2, "text": "D", "pos": "ne", "style": "italic"}], "x": [-0.45, 4.65], "y": [-0.45, 3.65], "alt": "Convex quadrilateral ABCD with its diagonals drawn dashed."},
          answer: String.raw`**Proof.** Key idea: the area equals $\frac{1}{2}AC \cdot BD \sin\theta \le \frac{1}{2}AC \cdot BD$, where $\theta$ is the angle between the diagonals, and Ptolemy's inequality gives $AC \cdot BD \le AB \cdot CD + BC \cdot DA$.`,
        },
        {
          stem: String.raw`Convex hexagon $ABCDEF$ has $AB = BC = CD = 1$ and $DE = EF = FA = 2$. Find the largest possible area of the hexagon.`,
          difficulty: 4,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [1.1, 0.0], "tone": "ink"}, {"from": [1.1, 0.0], "to": [1.943, 0.707], "tone": "ink"}, {"from": [1.943, 0.707], "to": [1.943, 1.807], "tone": "ink"}, {"from": [1.943, 1.807], "to": [0.387, 3.363], "tone": "ink"}, {"from": [0.387, 3.363], "to": [-1.203, 1.842], "tone": "ink"}, {"from": [-1.203, 1.842], "to": [0.0, 0.0], "tone": "ink"}], "labels": [{"x": 0.525, "y": -0.219, "text": "1", "pos": "c", "style": "plain"}, {"x": 1.667, "y": 0.189, "text": "1", "pos": "c", "style": "plain"}, {"x": 2.163, "y": 1.252, "text": "1", "pos": "c", "style": "plain"}, {"x": 1.24, "y": 2.792, "text": "2", "pos": "c", "style": "plain"}, {"x": -0.549, "y": 2.771, "text": "2", "pos": "c", "style": "plain"}, {"x": -0.813, "y": 0.861, "text": "2", "pos": "c", "style": "plain"}, {"x": -0.119, "y": -0.22, "text": "A", "pos": "c", "style": "italic"}, {"x": 1.175, "y": -0.238, "text": "B", "pos": "c", "style": "italic"}, {"x": 2.169, "y": 0.602, "text": "C", "pos": "c", "style": "italic"}, {"x": 2.173, "y": 1.903, "text": "D", "pos": "c", "style": "italic"}, {"x": 0.35, "y": 3.61, "text": "E", "pos": "c", "style": "italic"}, {"x": -1.443, "y": 1.912, "text": "F", "pos": "c", "style": "italic"}], "x": [-1.893, 2.623], "y": [-0.688, 4.06], "alt": "Convex hexagon ABCDEF with AB = BC = CD = 1 and DE = EF = FA = 2."},
          answer: String.raw`$\dfrac{13\sqrt{3}}{4}$`,
        },
      ],
    },
    {
      id: "G7-radii-sides",
      name: String.raw`Inequalities between $R$, $r$ and the sides`,
      tests: String.raw`Relations between the circumradius, the inradius, the sides and the area: Euler's $R \ge 2r$ and $OI^2 = R^2 - 2Rr$, Weitzenböck's inequality, half-angle formulas and Ravi substitution. Expect the equilateral triangle to be extremal unless a constraint rules it out.`,
      questions: [
        {
          stem: String.raw`A triangle has circumradius $10$. What is the largest possible inradius of the triangle?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`The sides $a$, $b$, $c$ of a triangle satisfy $a^2 + b^2 + c^2 = 48$. Find the largest possible area of the triangle.`,
          difficulty: 1,
          answer: String.raw`$4\sqrt{3}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $AB = 13$, $BC = 14$ and $CA = 15$. Its circumcentre is $O$ and its incentre is $I$, as shown. Find $OI$.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.5, 3.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.2, 0.0], "tone": "ink"}, {"from": [4.2, 0.0], "to": [1.5, 3.6], "tone": "ink"}], "circles": [{"c": [2.1, 1.237], "r": 2.438, "tone": "muted"}, {"c": [1.8, 1.2], "r": 1.2, "tone": "accent"}], "points": [{"x": 2.1, "y": 1.237}, {"x": 1.8, "y": 1.2}], "labels": [{"x": 2.1, "y": 1.237, "text": "O", "pos": "e", "style": "italic"}, {"x": 1.8, "y": 1.2, "text": "I", "pos": "w", "style": "italic"}, {"x": 1.5, "y": 3.6, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.2, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 0.75, "y": 1.8, "text": "13", "pos": "nw", "style": "plain"}, {"x": 2.7, "y": 0.0, "text": "14", "pos": "s", "style": "plain"}, {"x": 2.85, "y": 1.8, "text": "15", "pos": "ne", "style": "plain"}], "x": [-0.687, 4.887], "y": [-1.55, 4.025], "alt": "Triangle ABC with AB = 13, BC = 14, CA = 15, its circumcircle with centre O and its incircle with centre I."},
          answer: String.raw`$\dfrac{\sqrt{65}}{8}$`,
        },
        {
          stem: String.raw`A triangle has inradius $2$. Find the smallest possible perimeter of the triangle.`,
          difficulty: 2,
          answer: String.raw`$12\sqrt{3}$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle BAC = 120^\circ$. Find the largest possible value of $\dfrac{r}{R}$, where $r$ and $R$ are the inradius and the circumradius of the triangle.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.392, 1.168], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.6, 0.0], "tone": "ink"}, {"from": [4.6, 0.0], "to": [1.392, 1.168], "tone": "ink"}], "angles": [{"at": [1.392, 1.168], "from": [0.0, 0.0], "to": [4.6, 0.0], "r": 0.4, "label": "120°"}], "labels": [{"x": 1.392, "y": 1.168, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.6, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "x": [-0.45, 5.05], "y": [-0.45, 1.618], "alt": "Obtuse triangle ABC with angle A = 120 degrees."},
          answer: String.raw`$\sqrt{3} - \dfrac{3}{2}$`,
        },
        {
          stem: String.raw`$O$ is the circumcentre of an acute triangle $ABC$ with circumradius $R$. Prove that the sum of the distances from $O$ to the three sides of the triangle is at most $\frac{3}{2}R$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.7, 3.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.4, 0.0], "tone": "ink"}, {"from": [4.4, 0.0], "to": [1.7, 3.6], "tone": "ink"}, {"from": [2.2, 1.162], "to": [2.2, 0.0], "tone": "accent", "dashed": true}, {"from": [2.2, 1.162], "to": [3.05, 1.8], "tone": "accent", "dashed": true}, {"from": [2.2, 1.162], "to": [0.85, 1.8], "tone": "accent", "dashed": true}], "circles": [{"c": [2.2, 1.162], "r": 2.488, "tone": "muted"}], "points": [{"x": 2.2, "y": 1.162}], "labels": [{"x": 2.2, "y": 1.162, "text": "O", "pos": "e", "style": "italic"}, {"x": 1.7, "y": 3.6, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.4, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "rightAngles": [{"at": [2.2, 0.0], "a": [-2.2, 0.0], "b": [0.0, 1.162], "size": 0.18}, {"at": [3.05, 1.8], "a": [1.35, -1.8], "b": [-0.85, -0.638], "size": 0.18}, {"at": [0.85, 1.8], "a": [0.85, 1.8], "b": [1.35, -0.638], "size": 0.18}], "x": [-0.588, 4.988], "y": [-1.626, 3.951], "alt": "Acute triangle ABC with circumcentre O inside it and the perpendiculars from O to the three sides drawn dashed."},
          answer: String.raw`**Proof.** Key idea: the distance from $O$ to $BC$ is $R\cos A$ (and similarly for the other sides), so the sum is $R(\cos A + \cos B + \cos C) = R + r$, and Euler's inequality $r \le \frac{R}{2}$ finishes.`,
        },
        {
          stem: String.raw`Prove that every triangle with sides $a$, $b$, $c$, inradius $r$ and circumradius $R$ satisfies
$$\frac{R}{2r} \ge \frac{a^2 + b^2 + c^2}{ab + bc + ca}.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: with Ravi substitution $a = y + z$, $b = z + x$, $c = x + y$ and $p = x + y + z$, $q = xy + yz + zx$, $t = xyz$, the claim becomes $\dfrac{pq - t}{8t} \ge \dfrac{2(p^2 - q)}{p^2 + q}$, i.e. $pq(p^2 + q) \ge t(17p^2 - 15q)$, which follows from $t \le \dfrac{q^2}{3p}$ and $3p^4 - 14p^2q + 15q^2 = (p^2 - 3q)(3p^2 - 5q) \ge 0$.`,
        },
      ],
    },
    {
      id: "G7-interior-point",
      name: String.raw`Distances from a point inside a triangle`,
      tests: String.raw`A point inside a triangle or square, with its distances to the vertices or to the sides. Use $ax + by + cz = 2[ABC]$, extreme values at vertices, the centroid for sums of squares, AM-GM or Cauchy–Schwarz, and the Erdős–Mordell inequality.`,
      questions: [
        {
          stem: String.raw`$P$ is a point inside a square $ABCD$ of side $4$. What is the smallest possible value of $PA^2 + PB^2 + PC^2 + PD^2$?`,
          difficulty: 1,
          choices: [String.raw`$16$`, String.raw`$24$`, String.raw`$32$`, String.raw`$36$`, String.raw`$64$`],
          answer: String.raw`(C) $32$`,
        },
        {
          stem: String.raw`A point $P$ inside an equilateral triangle is at distances $1$, $2$ and $3$ from the three sides, as shown. Find the side length of the triangle.`,
          difficulty: 1,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [2.078, 3.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.157, 0.0], "tone": "ink"}, {"from": [4.157, 0.0], "to": [2.078, 3.6], "tone": "ink"}, {"from": [2.425, 0.6], "to": [2.425, 0.0], "tone": "accent"}, {"from": [2.425, 0.6], "to": [3.464, 1.2], "tone": "accent"}, {"from": [2.425, 0.6], "to": [0.866, 1.5], "tone": "accent"}], "points": [{"x": 2.425, "y": 0.6}], "labels": [{"x": 2.425, "y": 0.6, "text": "P", "pos": "ne", "style": "italic"}, {"x": 2.425, "y": 0.3, "text": "1", "pos": "e", "style": "plain", "tone": "accent"}, {"x": 2.944, "y": 0.9, "text": "2", "pos": "n", "style": "plain", "tone": "accent"}, {"x": 1.645, "y": 1.05, "text": "3", "pos": "n", "style": "plain", "tone": "accent"}, {"x": 2.078, "y": 3.6, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.157, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "rightAngles": [{"at": [2.425, 0.0], "a": [-2.425, 0.0], "b": [0.0, 0.6], "size": 0.16}, {"at": [3.464, 1.2], "a": [0.693, -1.2], "b": [-1.039, -0.6], "size": 0.16}, {"at": [0.866, 1.5], "a": [1.212, 2.1], "b": [1.559, -0.9], "size": 0.16}], "x": [-0.4, 4.557], "y": [-0.4, 4.0], "alt": "Equilateral triangle ABC with a point P inside; the perpendicular distances from P to BC, CA and AB are 1, 2 and 3."},
          answer: String.raw`$4\sqrt{3}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has sides $13$, $14$ and $15$. As $P$ ranges over the triangle, including its boundary, find the smallest possible value of the sum of the distances from $P$ to the three sides.`,
          difficulty: 2,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.5, 3.6], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.2, 0.0], "tone": "ink"}, {"from": [4.2, 0.0], "to": [1.5, 3.6], "tone": "ink"}, {"from": [2.0, 1.2], "to": [2.0, 0.0], "tone": "accent"}, {"from": [2.0, 1.2], "to": [2.832, 1.824], "tone": "accent"}, {"from": [2.0, 1.2], "to": [0.722, 1.733], "tone": "accent"}], "points": [{"x": 2.0, "y": 1.2}], "labels": [{"x": 2.0, "y": 1.2, "text": "P", "pos": "e", "style": "italic"}, {"x": 1.5, "y": 3.6, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.2, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}, {"x": 0.45, "y": 1.08, "text": "13", "pos": "nw", "style": "plain"}, {"x": 3.1, "y": 0.0, "text": "14", "pos": "s", "style": "plain"}, {"x": 3.39, "y": 1.08, "text": "15", "pos": "ne", "style": "plain"}], "rightAngles": [{"at": [2.0, 0.0], "a": [-2.0, 0.0], "b": [0.0, 1.2], "size": 0.15}, {"at": [2.832, 1.824], "a": [1.368, -1.824], "b": [-0.832, -0.624], "size": 0.15}, {"at": [0.722, 1.733], "a": [0.778, 1.867], "b": [1.278, -0.533], "size": 0.15}], "x": [-0.4, 4.6], "y": [-0.4, 4.0], "alt": "Triangle with sides 13, 14 and 15 and a point P inside, with perpendiculars from P to the three sides."},
          answer: String.raw`$\dfrac{56}{5}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has sides $6$, $8$ and $10$. For a point $P$ inside the triangle, let $x$, $y$, $z$ be the distances from $P$ to the three sides. Find the largest possible value of $xyz$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{128}{15}$`,
        },
        {
          stem: String.raw`A right-angled triangle has sides $3$, $4$ and $5$. For a point $P$ inside it, let $x$, $y$, $z$ be the distances from $P$ to the three sides. Find the smallest possible value of $x^2 + y^2 + z^2$.`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [0.0, 2.7], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [3.6, 0.0], "tone": "ink"}, {"from": [3.6, 0.0], "to": [0.0, 2.7], "tone": "ink"}, {"from": [1.26, 0.72], "to": [1.26, 0.0], "tone": "accent"}, {"from": [1.26, 0.72], "to": [1.757, 1.382], "tone": "accent"}, {"from": [1.26, 0.72], "to": [0.0, 0.72], "tone": "accent"}], "rightAngles": [{"at": [0.0, 0.0], "a": [1.0, 0.0], "b": [0.0, 1.0], "size": 0.2}, {"at": [1.26, 0.0], "a": [-1.26, 0.0], "b": [0.0, 0.72], "size": 0.13}, {"at": [1.757, 1.382], "a": [1.843, -1.382], "b": [-0.497, -0.662], "size": 0.13}, {"at": [0.0, 0.72], "a": [0.0, 1.98], "b": [1.26, -0.0], "size": 0.13}], "points": [{"x": 1.26, "y": 0.72}], "labels": [{"x": 1.26, "y": 0.72, "text": "P", "pos": "se", "style": "italic"}, {"x": 0.0, "y": 1.35, "text": "3", "pos": "w", "style": "plain"}, {"x": 1.8, "y": 0.0, "text": "4", "pos": "s", "style": "plain"}, {"x": 2.7, "y": 0.675, "text": "5", "pos": "ne", "style": "plain"}], "x": [-0.45, 4.05], "y": [-0.45, 3.15], "alt": "Right-angled triangle with legs 3 and 4 and hypotenuse 5, and a point P inside with perpendiculars to the three sides."},
          answer: String.raw`$\dfrac{72}{25}$`,
        },
        {
          stem: String.raw`Point $P$ lies inside triangle $ABC$, and $x$, $y$, $z$ are its distances to the sides $BC$, $CA$, $AB$. Prove that
$$PA \cdot PB \cdot PC \ge 8xyz.$$`,
          difficulty: 3,
          figure: {"type": "plot", "equal": true, "axes": false, "segments": [{"from": [1.2, 3.5], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.0, 0.0], "to": [4.8, 0.0], "tone": "ink"}, {"from": [4.8, 0.0], "to": [1.2, 3.5], "tone": "ink"}, {"from": [2.1, 1.2], "to": [1.2, 3.5], "tone": "muted", "dashed": true}, {"from": [2.1, 1.2], "to": [0.0, 0.0], "tone": "muted", "dashed": true}, {"from": [2.1, 1.2], "to": [4.8, 0.0], "tone": "muted", "dashed": true}, {"from": [2.1, 1.2], "to": [2.1, 0.0], "tone": "accent"}, {"from": [2.1, 1.2], "to": [2.812, 1.933], "tone": "accent"}, {"from": [2.1, 1.2], "to": [0.589, 1.718], "tone": "accent"}], "points": [{"x": 2.1, "y": 1.2}], "labels": [{"x": 2.1, "y": 1.2, "text": "P", "pos": "e", "style": "italic"}, {"x": 2.27, "y": 0.6, "text": "x", "pos": "c", "style": "italic", "tone": "accent"}, {"x": 2.334, "y": 1.685, "text": "y", "pos": "c", "style": "italic", "tone": "accent"}, {"x": 1.289, "y": 1.298, "text": "z", "pos": "c", "style": "italic", "tone": "accent"}, {"x": 1.2, "y": 3.5, "text": "A", "pos": "n", "style": "italic"}, {"x": 0.0, "y": 0.0, "text": "B", "pos": "sw", "style": "italic"}, {"x": 4.8, "y": 0.0, "text": "C", "pos": "se", "style": "italic"}], "rightAngles": [{"at": [2.1, 0.0], "a": [-2.1, 0.0], "b": [0.0, 1.2], "size": 0.15}, {"at": [2.812, 1.933], "a": [1.988, -1.933], "b": [-0.712, -0.733], "size": 0.15}, {"at": [0.589, 1.718], "a": [0.611, 1.782], "b": [1.511, -0.518], "size": 0.15}], "x": [-0.45, 5.25], "y": [-0.45, 3.95], "alt": "Triangle ABC with an interior point P joined to the vertices by dashed segments, and perpendiculars of lengths x, y, z from P to BC, CA, AB."},
          answer: String.raw`**Proof.** Key idea: $PA + x$ is at least the altitude from $A$, so $a \cdot PA \ge 2[ABC] - ax = by + cz \ge 2\sqrt{bc\,yz}$; multiplying the three such inequalities gives $abc \cdot PA \cdot PB \cdot PC \ge 8abc\,xyz$.`,
        },
        {
          stem: String.raw`Prove that for every triangle $ABC$ with inradius $r$ and every point $P$ in its plane,
$$PA + PB + PC \ge 6r.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the minimum of $PA + PB + PC$ is attained with $P$ in the triangle; there, with $x, y, z$ the distances to the sides and $h_a, h_b, h_c$ the altitudes, adding twice $\sum (PA + x) \ge \sum h_a$ to Erdős–Mordell $\sum PA \ge 2\sum x$ gives $3\sum PA \ge 2\sum h_a$, and $\sum h_a = 2[ABC]\left(\frac{1}{a} + \frac{1}{b} + \frac{1}{c}\right) \ge \frac{18[ABC]}{a + b + c} = 9r$.`,
        },
      ],
    },
  ],
});
