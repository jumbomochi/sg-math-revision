H2.addTopic({
  id: "C7",
  title: "Combinatorial Geometry",
  summary: String.raw`Regions cut out by lines and circles, diagonals and triangulations of polygons, convex hulls and convex position, lattice-point arguments, covering and packing, and colouring the plane.`,
  concepts: [
    {
      title: String.raw`Lines, curves and regions`,
      body: String.raw`Add the lines (or curves) one at a time. A new line crossed by the earlier ones at $k$ distinct points is cut into $k + 1$ pieces, and each piece splits one region into two, so it adds $k + 1$ regions.

- $n$ lines in **general position** (no two parallel, no three through a point): $1 + n + \binom{n}{2}$ regions.
- With parallels or concurrences, count the actual crossing points on each new line.
- A closed curve (circle, triangle) that crosses the earlier curves at $k \ge 1$ points is cut into $k$ arcs and adds $k$ regions.
- Two circles meet in at most $2$ points, and so do a line and a circle; for the largest number of regions, make every pair of curves cross as often as possible.`,
      figure: {"type": "plot", "x": [-3.2, 3.2], "y": [-2.6, 2.6], "equal": true, "axes": false, "segments": [{"from": [-3.0, -1.65], "to": [3.0, -0.15], "tone": "ink"}, {"from": [1.92, -2.4], "to": [-0.719, 2.399], "tone": "ink"}, {"from": [-2.26, -2.4], "to": [0.62, 2.4], "tone": "accent"}], "caption": "Three lines in general position make $7$ regions. The two black lines cut the third (blue) line into $3$ pieces, and each piece splits a region in two.", "alt": "Three lines crossing in three different points; the third line is highlighted."},
    },
    {
      title: String.raw`Euler's formula`,
      body: String.raw`For a connected drawing in the plane (or on a sphere) with $V$ vertices, $E$ edges and $F$ regions (counting the outside region),
$$V - E + F = 2.$$

- Make the crossing points the vertices and the pieces of curves between them the edges. For $n$ lines, add one vertex "at infinity" where all the rays meet.
- **Degree count**: $2E$ = sum of the vertex degrees; at a simple crossing of two curves the degree is $4$.
- **Side count**: $2E$ = sum over regions of the number of sides (each edge borders two regions).
- Example: three circles, every two meeting twice: $V = 6$, each circle is cut into $4$ arcs so $E = 12$, and $F = 2 - 6 + 12 = 8$.`,
    },
    {
      title: String.raw`Diagonals and triangulations`,
      body: String.raw`- A convex $n$-gon has $\frac{n(n-3)}{2}$ diagonals. Two diagonals cross inside it exactly when their four endpoints are distinct and alternate around the polygon, so each crossing point is fixed by a choice of four vertices.
- Any way of cutting a convex $n$-gon into triangles by non-crossing diagonals uses $n - 3$ diagonals and gives $n - 2$ triangles.
- **Interior points**: count triangles by angle sum. Each triangle has angle sum $180^\circ$; the polygon corners give $(n - 2)180^\circ$ in total and each interior vertex gives $360^\circ$.
- An **ear** is a triangle with two sides on the polygon. Every triangulation of a convex $n$-gon ($n \ge 4$) has at least two ears.
- The number of triangulations of a convex $(n+2)$-gon is the Catalan number $C_{n} = \frac{1}{n+1}\binom{2n}{n}$ (fix one side and split by its third vertex).`,
      figure: {"type": "plot", "x": [-2.4, 2.4], "y": [-2.0, 2.4], "equal": true, "axes": false, "segments": [{"from": [0.0, 2.0], "to": [-1.902, 0.618], "tone": "ink"}, {"from": [0.0, 2.0], "to": [1.902, 0.618], "tone": "ink"}, {"from": [0.0, 2.0], "to": [-0.6, -0.8], "tone": "muted"}, {"from": [0.0, 2.0], "to": [0.6, -0.8], "tone": "muted"}, {"from": [-1.902, 0.618], "to": [-1.176, -1.618], "tone": "ink"}, {"from": [-1.902, 0.618], "to": [-0.6, -0.8], "tone": "muted"}, {"from": [-1.176, -1.618], "to": [1.176, -1.618], "tone": "ink"}, {"from": [-1.176, -1.618], "to": [-0.6, -0.8], "tone": "muted"}, {"from": [-1.176, -1.618], "to": [0.6, -0.8], "tone": "muted"}, {"from": [1.176, -1.618], "to": [1.902, 0.618], "tone": "ink"}, {"from": [1.176, -1.618], "to": [0.6, -0.8], "tone": "muted"}, {"from": [1.902, 0.618], "to": [0.6, -0.8], "tone": "muted"}, {"from": [-0.6, -0.8], "to": [0.6, -0.8], "tone": "muted"}], "points": [{"x": 0.0, "y": 2.0}, {"x": -1.902, "y": 0.618}, {"x": -1.176, "y": -1.618}, {"x": 1.176, "y": -1.618}, {"x": 1.902, "y": 0.618}, {"x": -0.6, "y": -0.8}, {"x": 0.6, "y": -0.8}], "caption": "A pentagon with $2$ interior points cut into $7$ triangles: angle sum $3 \\times 180^\\circ + 2 \\times 360^\\circ = 7 \\times 180^\\circ$.", "alt": "A convex pentagon with two marked interior points, cut into seven triangles whose vertices are the seven points."},
    },
    {
      title: String.raw`Convex hulls and convex position`,
      body: String.raw`The **convex hull** of a finite set is the smallest convex polygon containing it. Points are in **convex position** if every one of them is a vertex of the hull.

- Four points (no three collinear) form a convex quadrilateral exactly when none of them lies inside the triangle of the other three, that is, when the two "diagonals" cross.
- **Five points**, no three collinear, always contain a convex quadrilateral (the first case of the Erdős–Szekeres "happy ending" theorem); prove it by cases on the number of hull vertices.
- **Extreme points**: a leftmost point (or any hull vertex) lies inside no triangle of other points, and the other points are seen from it within an angle less than $180^\circ$, so they can be sorted by angle.
- A triangle with vertices on a circle (or a convex polygon) **misses** an inner point $O$ exactly when its vertices lie in an open half-plane through $O$. For a regular $7$-gon: each vertex is the first of $\binom{3}{2} = 3$ such triangles, so $35 - 21 = 14$ triangles contain the centre.`,
      figure: {"type": "plot", "x": [-1.5, 5], "y": [-1.1, 3.8], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [3, -0.5], [4.2, 1.5], [3, 3.2], [0.6, 3], [-0.8, 1.4]], "fill": true, "tone": "accent"}], "points": [{"x": 0, "y": 0}, {"x": 3, "y": -0.5}, {"x": 4.2, "y": 1.5}, {"x": 3, "y": 3.2}, {"x": 0.6, "y": 3}, {"x": -0.8, "y": 1.4}, {"x": 1.2, "y": 1.1}, {"x": 2.4, "y": 1.8}, {"x": 1.6, "y": 2.4}, {"x": 2.6, "y": 0.6}], "caption": "The convex hull: the smallest convex polygon containing all the points. Its vertices are the points that lie in no triangle formed by three others.", "alt": "Ten points; six of them are the vertices of a shaded convex hexagon and the other four lie inside it."},
    },
    {
      title: String.raw`Lattice points: parity and Pick`,
      body: String.raw`A **lattice point** has integer coordinates.

- **Parity classes**: in the plane there are $4$ classes (even/odd $x$, even/odd $y$). Two lattice points in the same class have a lattice midpoint. Modulo $3$ there are $9$ classes, and three points with the same pair of residues have a lattice centroid.
- **Pick's theorem**: a lattice polygon with $I$ lattice points inside and $B$ on the boundary has area $I + \frac{B}{2} - 1$. A lattice triangle with no lattice points other than its vertices has area $\frac{1}{2}$; every lattice triangle has area at least $\frac{1}{2}$.
- A lattice segment from $(a, b)$ to $(c, d)$ contains $\gcd(|c - a|, |d - b|) + 1$ lattice points.
- A tilted square with lattice vertices sits inside an axis-parallel lattice square: side vector $(p, q)$ gives a bounding square of side $p + q$.`,
      figure: {"type": "plot", "x": [-0.6, 5.6], "y": [-0.8, 3.6], "equal": true, "axes": false, "circles": [{"c": [0, 0], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [0, 1], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [0, 2], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [0, 3], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [1, 0], "r": 0.16, "fill": true, "tone": "good"}, {"c": [1, 1], "r": 0.16, "fill": true, "tone": "muted"}, {"c": [1, 2], "r": 0.16, "fill": true, "tone": "good"}, {"c": [1, 3], "r": 0.16, "fill": true, "tone": "muted"}, {"c": [2, 0], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [2, 1], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [2, 2], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [2, 3], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [3, 0], "r": 0.16, "fill": true, "tone": "good"}, {"c": [3, 1], "r": 0.16, "fill": true, "tone": "muted"}, {"c": [3, 2], "r": 0.16, "fill": true, "tone": "good"}, {"c": [3, 3], "r": 0.16, "fill": true, "tone": "muted"}, {"c": [4, 0], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [4, 1], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [4, 2], "r": 0.16, "fill": true, "tone": "accent"}, {"c": [4, 3], "r": 0.16, "fill": true, "tone": "warn"}, {"c": [5, 0], "r": 0.16, "fill": true, "tone": "good"}, {"c": [5, 1], "r": 0.16, "fill": true, "tone": "muted"}, {"c": [5, 2], "r": 0.16, "fill": true, "tone": "good"}, {"c": [5, 3], "r": 0.16, "fill": true, "tone": "muted"}], "segments": [{"from": [1, 0], "to": [5, 2], "tone": "accent", "dashed": true}], "points": [{"x": 3, "y": 1, "label": "M", "pos": "se"}], "caption": "Colour each lattice point by the parities of its coordinates: $4$ classes. Two points of the same class have a lattice midpoint $M$.", "alt": "A 6 by 4 array of lattice points coloured in four colours by the parity of x and y; two points of the same colour are joined and their midpoint M is a lattice point."},
    },
    {
      title: String.raw`Covering and packing`,
      body: String.raw`- **Witness points** (lower bounds for covers): find $k$ points of the figure, no two of which can lie in one piece; then at least $k$ pieces are needed.
- **Measure**: if each piece covers at most $a$ of the area (or of the length of a curve that must be covered) and the total is $T$, at least $T/a$ pieces are needed. Example: discs of radius $1$ meet a line in chords of length at most $2$, so covering a segment of length $7$ needs at least $4$ of them.
- **Packing bound**: non-overlapping pieces inside a figure have total area at most the figure's area; for discs, bound the region where the **centres** may lie and how close they may be.
- **Projections**: project onto a line. If the projections have total length more than $k$ times the length of the line segment they lie in, some point of it is covered by at least $k + 1$ of them, and the perpendicular line there meets $k + 1$ objects.
- A disc contains a segment exactly when it contains both endpoints; a **diameter** of a disc is its longest chord.`,
    },
    {
      title: String.raw`Colouring the plane`,
      body: String.raw`- **Rigid configurations**: to force a monochromatic pair or triangle, find a finite set of points whose "conflict graph" (pairs at the forbidden distances) cannot be coloured with the given colours. With two colours, an equilateral triangle of side $d$ already forces two points at distance $d$ of the same colour.
- Useful configurations: equilateral triangles, rhombi made of two equilateral triangles, regular hexagons, and circles with a diameter.
- **Right angles on a circle**: if $PQ$ is a diameter, every other point $X$ of the circle gives $\angle PXQ = 90^\circ$ (Thales).
- **Constructions** (colourings avoiding a pattern): stripes, chessboard or hexagonal tilings, and for lattice points **linear colourings** $ax + by \bmod m$, which give different colours to $P$ and $P + v$ exactly when $a v_{1} + b v_{2} \not\equiv 0 \pmod m$.
- For lattice points, a set of points that are pairwise at forbidden distances (a "clique") gives a lower bound on the number of colours.`,
      figure: {"type": "plot", "x": [-0.8, 2.8], "y": [-0.6, 2.3], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [2, 0], [1, 1.732]], "tone": "ink"}], "circles": [{"c": [0, 0], "r": 0.14, "fill": true, "tone": "warn"}, {"c": [2, 0], "r": 0.14, "fill": true, "tone": "warn"}, {"c": [1, 1.732], "r": 0.14, "fill": true, "tone": "accent"}], "labels": [{"x": 1, "y": -0.05, "text": "d", "pos": "s", "style": "italic"}, {"x": 0.42, "y": 0.95, "text": "d", "pos": "nw", "style": "italic"}, {"x": 1.58, "y": 0.95, "text": "d", "pos": "ne", "style": "italic"}], "caption": "Two colours, three vertices at mutual distance $d$: two of them share a colour.", "alt": "An equilateral triangle of side d whose vertices are coloured; two vertices have the same colour."},
    },
    {
      title: String.raw`Extremal choices in geometry`,
      body: String.raw`Many existence proofs start from an extreme object:

- the **closest** pair of points, or the intersection point closest to a given line;
- the **leftmost** point, or a vertex of the convex hull;
- the triangle of **smallest** (or largest) area, or the line through the most points.

Then show that a counterexample would produce something even more extreme. Example (Sylvester–Gallai): for finitely many points not all on one line, choose a point $P$ and a line $\ell$ through two of the others so that the distance from $P$ to $\ell$ is positive and as small as possible. Then $\ell$ contains only two of the points: if it contained three, two of them would lie on the same side of the foot of the perpendicular from $P$, and they would give a smaller distance.`,
    },
  ],
  archetypes: [
    {
      id: "C7-lines-regions",
      name: String.raw`Lines, circles and regions`,
      tests: String.raw`Counting the regions or crossing points made by lines, circles or other closed curves, in general position or with some parallels; largest possible counts; and proofs about the shapes of the regions. Add curves one at a time, or use Euler's formula.`,
      questions: [
        {
          stem: String.raw`Eight lines are drawn in the plane so that no two are parallel and no three pass through one point. Into how many regions do they divide the plane?`,
          difficulty: 1,
          choices: [String.raw`$29$`, String.raw`$36$`, String.raw`$37$`, String.raw`$64$`, String.raw`$256$`],
          answer: String.raw`(C) $37$`,
        },
        {
          stem: String.raw`Five circles are drawn in the plane so that every two of them meet in exactly two points and no three of them pass through one point. Into how many regions do they divide the plane?`,
          difficulty: 1,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`Six lines are drawn in the plane. Three of them are parallel to one another, no other two of the six lines are parallel, and no three of the lines pass through one point. Into how many regions do the six lines divide the plane?`,
          difficulty: 2,
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`Three lines and four circles are drawn in the plane. No two of the lines are parallel, every line meets every circle in two points, every two circles meet in two points, and no three of the seven lines and circles pass through one point. Into how many regions do they divide the plane?`,
          difficulty: 2,
          answer: String.raw`$43$`,
        },
        {
          stem: String.raw`The boundaries of three triangles and two circles are drawn in the plane. What is the largest possible number of regions into which they can divide the plane?`,
          difficulty: 3,
          answer: String.raw`$58$`,
        },
        {
          stem: String.raw`Let $n \ge 3$. Some $n$ lines are drawn in the plane so that no two are parallel and no three pass through one point. Let $\ell$ be one of the lines, and suppose that on each side of $\ell$ there is a point where two of the other lines cross. Prove that at least two of the regions that have a side on $\ell$ are triangles.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: on each side of $\ell$ separately, take the crossing point $X = m \cap m'$ of two other lines that is closest to $\ell$; a line entering the triangle bounded by $\ell$, $m$, $m'$ would cross $m$ or $m'$ at a point on the same side of $\ell$ and closer to it than $X$, so that triangle is a region, and the two sides give two different triangles.`,
        },
        {
          stem: String.raw`Let $n \ge 3$. Some $n$ great circles are drawn on a sphere (circles whose centre is the centre of the sphere), no three passing through one point. Prove that at least $8$ of the regions into which they divide the sphere are triangles.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: Euler's formula with $V = n(n-1)$ vertices of degree $4$ gives $E = 2V$ and $F = V + 2$, so $\sum (4 - s) = 4F - 2E = 8$ over all regions, where $s$ is the number of sides; there are no $2$-sided regions (a third great circle separates the two antipodal corners of such a region), so every term is at most $1$ and at least $8$ regions have $s = 3$.`,
        },
      ],
    },
    {
      id: "C7-diagonals-triangulations",
      name: String.raw`Diagonals and triangulations`,
      tests: String.raw`Convex polygons with diagonals drawn: counting crossing points, regions or special triangles, and cutting a polygon (possibly with marked interior points) into triangles. Four vertices fix a crossing; angle sums count triangles; ears and fans drive the proofs.`,
      questions: [
        {
          stem: String.raw`All the diagonals of a convex $10$-gon are drawn, and no three of them pass through one point inside the polygon. How many points inside the polygon are crossing points of two diagonals?`,
          difficulty: 1,
          choices: [String.raw`$35$`, String.raw`$45$`, String.raw`$120$`, String.raw`$210$`, String.raw`$252$`],
          answer: String.raw`(D) $210$`,
        },
        {
          stem: String.raw`All nine diagonals of a convex hexagon are drawn, and no three of them pass through one point inside the hexagon. Into how many regions do they divide the inside of the hexagon?`,
          difficulty: 1,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`How many triangles have all three vertices among the vertices of a convex $10$-gon but no side in common with the $10$-gon?`,
          difficulty: 2,
          answer: String.raw`$50$`,
        },
        {
          stem: String.raw`Inside a convex $20$-gon, $10$ points are marked so that no three of the $30$ points (the vertices and the marked points) are collinear. The $20$-gon is cut into triangles whose vertices are among the $30$ points, so that no triangle has any of the $30$ points inside it or on its sides other than its own vertices. How many triangles are there?`,
          difficulty: 2,
          answer: String.raw`$38$`,
        },
        {
          stem: String.raw`A convex octagon is cut into triangles by non-crossing diagonals. In how many of these triangulations does every triangle have at least one side that is a side of the octagon?`,
          figure: {"type": "plot", "x": [-2.6, 2.6], "y": [-2.4, 2.4], "equal": true, "axes": false, "polygons": [{"points": [[-0.765, 1.848], [0.765, 1.848], [1.848, 0.765], [1.848, -0.765], [0.765, -1.848], [-0.765, -1.848], [-1.848, -0.765], [-1.848, 0.765]], "tone": "ink"}], "segments": [{"from": [0.765, 1.848], "to": [-1.848, 0.765], "tone": "accent"}, {"from": [0.765, 1.848], "to": [-1.848, -0.765], "tone": "accent"}, {"from": [1.848, 0.765], "to": [-1.848, -0.765], "tone": "accent"}, {"from": [1.848, 0.765], "to": [-0.765, -1.848], "tone": "accent"}, {"from": [1.848, -0.765], "to": [-0.765, -1.848], "tone": "accent"}], "caption": "One triangulation of this kind.", "alt": "A convex octagon cut into six triangles by five non-crossing diagonals in a zigzag; every triangle has a side on the octagon."},
          difficulty: 3,
          answer: String.raw`$64$`,
        },
        {
          stem: String.raw`A convex $n$-gon ($n \ge 4$) is cut into triangles by non-crossing diagonals. Prove that the number of triangles with two sides on the polygon is exactly $2$ more than the number of triangles with no side on the polygon.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: if $t_{0}$, $t_{1}$, $t_{2}$ triangles have $0$, $1$, $2$ sides on the polygon, then $t_{0} + t_{1} + t_{2} = n - 2$, and counting polygon sides (each lies in exactly one triangle) gives $t_{1} + 2t_{2} = n$; subtract.`,
        },
        {
          stem: String.raw`Let $n \ge 7$. A convex $n$-gon is triangulated by non-crossing diagonals. A **flip** removes one diagonal, which is the common side of two triangles forming a quadrilateral, and replaces it by the other diagonal of that quadrilateral. Prove that any triangulation can be changed into any other by at most $2n - 9$ flips.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: a triangulation with $d$ diagonals ending at a vertex $v$ reaches the fan of all diagonals from $v$ in at most $n - 3 - d$ flips (flipping the side $xy$ of a triangle $vxy$ adds a diagonal at $v$), and the two triangulations have $4(n-3) > 2n$ diagonal ends in total, so some vertex is an end of at least $3$ of them and going through its fan takes at most $2(n-3) - 3$ flips.`,
        },
      ],
    },
    {
      id: "C7-convex-position",
      name: String.raw`Convex hulls and convex position`,
      tests: String.raw`Points in general position: which subsets form convex polygons, how many triangles contain a given point or no other point, and the fewest convex quadrilaterals. Look at the convex hull, an extreme point, the angular order around a point, or a half-plane through it.`,
      questions: [
        {
          stem: String.raw`Five points in the plane, no three collinear, are placed so that four of them are the vertices of a convex quadrilateral and the fifth lies inside it. How many of the five sets of four of these points are the vertex sets of convex quadrilaterals?`,
          difficulty: 1,
          choices: [String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`$4$`, String.raw`$5$`],
          answer: String.raw`(C) $3$`,
        },
        {
          stem: String.raw`How many triangles whose vertices are vertices of a regular $9$-gon contain the centre $O$ of the $9$-gon in their interior?`,
          figure: {"type": "plot", "x": [-2.5, 2.5], "y": [-2.2, 2.5], "equal": true, "axes": false, "polygons": [{"points": [[0.0, 2.0], [-1.286, 1.532], [-1.97, 0.347], [-1.732, -1.0], [-0.684, -1.879], [0.684, -1.879], [1.732, -1.0], [1.97, 0.347], [1.286, 1.532]], "tone": "ink"}], "points": [{"x": 0, "y": 0, "label": "O", "pos": "e"}, {"x": 0.0, "y": 2.0}, {"x": -1.286, "y": 1.532}, {"x": -1.97, "y": 0.347}, {"x": -1.732, "y": -1.0}, {"x": -0.684, "y": -1.879}, {"x": 0.684, "y": -1.879}, {"x": 1.732, "y": -1.0}, {"x": 1.97, "y": 0.347}, {"x": 1.286, "y": 1.532}], "alt": "A regular 9-gon with its centre O marked."},
          difficulty: 1,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`Five points in the plane, no three collinear, are placed so that three of them are the vertices of a triangle and the other two lie inside that triangle. How many of the five sets of four of these points are the vertex sets of convex quadrilaterals?`,
          difficulty: 2,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`The $16$ points $(x, y)$ with $x, y \in \{0, 1, 2, 3\}$ form a $4 \times 4$ grid. What is the largest number of these points that are the vertices of a convex polygon? (Every interior angle of the polygon must be less than $180^\circ$.)`,
          figure: {"type": "plot", "x": [-0.5, 3.5], "y": [-0.5, 3.5], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [3, 0], "tone": "muted", "thin": true}, {"from": [0, 1], "to": [3, 1], "tone": "muted", "thin": true}, {"from": [0, 2], "to": [3, 2], "tone": "muted", "thin": true}, {"from": [0, 3], "to": [3, 3], "tone": "muted", "thin": true}, {"from": [0, 0], "to": [0, 3], "tone": "muted", "thin": true}, {"from": [1, 0], "to": [1, 3], "tone": "muted", "thin": true}, {"from": [2, 0], "to": [2, 3], "tone": "muted", "thin": true}, {"from": [3, 0], "to": [3, 3], "tone": "muted", "thin": true}], "points": [{"x": 0, "y": 0}, {"x": 0, "y": 1}, {"x": 0, "y": 2}, {"x": 0, "y": 3}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}, {"x": 2, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}, {"x": 2, "y": 3}, {"x": 3, "y": 0}, {"x": 3, "y": 1}, {"x": 3, "y": 2}, {"x": 3, "y": 3}], "alt": "A 4 by 4 array of lattice points, one unit apart."},
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Six points are placed in the plane, no three collinear. What is the smallest possible number of sets of four of them that are the vertex sets of convex quadrilaterals?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Let $S$ be a set of $n \ge 3$ points in the plane, no three collinear. A triangle with vertices in $S$ is **empty** if no point of $S$ lies inside it. Prove that there are at least $\frac{(n-1)(n-2)}{2}$ empty triangles.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: let $A$ be the leftmost point and sort the others by angle around $A$ as $B_{1}, \ldots, B_{n-1}$; the $n - 2$ triangles $AB_{i}B_{i+1}$ are empty, and since $A$ lies inside no triangle of the other points, induction on the set without $A$ adds $(n-3) + (n-4) + \cdots + 1$ more.`,
        },
        {
          stem: String.raw`Let $m \ge 2$, let $P$ be a convex polygon with $2m$ vertices, and let $O$ be a point inside $P$ that lies on none of its diagonals. Prove that $O$ lies inside at most $\frac{m(m-1)(m+1)}{3}$ of the triangles whose vertices are vertices of $P$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: a triangle misses $O$ exactly when its vertices lie in an open half-plane through $O$; if $k_{i}$ vertices lie within the half-turn anticlockwise from the ray $OV_{i}$, each pair of vertices is counted once, so $\sum k_{i} = \binom{2m}{2}$, and the triangles missing $O$ number $\sum \binom{k_{i}}{2} \ge m\binom{m-1}{2} + m\binom{m}{2} = m(m-1)^{2}$ by convexity; subtract from $\binom{2m}{3}$.`,
        },
      ],
    },
    {
      id: "C7-lattice-arguments",
      name: String.raw`Lattice-point arguments`,
      tests: String.raw`Points with integer coordinates in grids and polygons: parity or residue classes force lattice midpoints and centroids, small lattice triangles have area $\frac12$, and tilted squares sit in axis-parallel ones. Classify points by their coordinates modulo $2$ or $3$.`,
      questions: [
        {
          stem: String.raw`The $25$ points $(x, y)$ with $x, y \in \{0, 1, 2, 3, 4\}$ form a $5 \times 5$ grid. For how many of the pairs of these points is the midpoint of the pair also a lattice point?`,
          figure: {"type": "plot", "x": [-0.5, 4.5], "y": [-0.5, 4.5], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [4, 0], "tone": "muted", "thin": true}, {"from": [0, 1], "to": [4, 1], "tone": "muted", "thin": true}, {"from": [0, 2], "to": [4, 2], "tone": "muted", "thin": true}, {"from": [0, 3], "to": [4, 3], "tone": "muted", "thin": true}, {"from": [0, 4], "to": [4, 4], "tone": "muted", "thin": true}, {"from": [0, 0], "to": [0, 4], "tone": "muted", "thin": true}, {"from": [1, 0], "to": [1, 4], "tone": "muted", "thin": true}, {"from": [2, 0], "to": [2, 4], "tone": "muted", "thin": true}, {"from": [3, 0], "to": [3, 4], "tone": "muted", "thin": true}, {"from": [4, 0], "to": [4, 4], "tone": "muted", "thin": true}], "points": [{"x": 0, "y": 0}, {"x": 0, "y": 1}, {"x": 0, "y": 2}, {"x": 0, "y": 3}, {"x": 0, "y": 4}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}, {"x": 1, "y": 4}, {"x": 2, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}, {"x": 2, "y": 3}, {"x": 2, "y": 4}, {"x": 3, "y": 0}, {"x": 3, "y": 1}, {"x": 3, "y": 2}, {"x": 3, "y": 3}, {"x": 3, "y": 4}, {"x": 4, "y": 0}, {"x": 4, "y": 1}, {"x": 4, "y": 2}, {"x": 4, "y": 3}, {"x": 4, "y": 4}], "alt": "A 5 by 5 array of lattice points, one unit apart."},
          difficulty: 1,
          answer: String.raw`$72$`,
        },
        {
          stem: String.raw`What is the smallest $n$ such that among any $n$ lattice points in the plane there are always two, $P$ and $Q$, for which both points that divide the segment $PQ$ into three equal parts are lattice points?`,
          difficulty: 1,
          choices: [String.raw`$5$`, String.raw`$9$`, String.raw`$10$`, String.raw`$13$`, String.raw`$19$`],
          answer: String.raw`(C) $10$`,
        },
        {
          stem: String.raw`How many lattice points lie strictly inside the triangle with vertices $(0, 0)$, $(24, 0)$ and $(9, 30)$?`,
          difficulty: 2,
          answer: String.raw`$340$`,
        },
        {
          stem: String.raw`How many squares, of any size and in any orientation, have all four vertices among the $36$ points $(x, y)$ with $x, y \in \{0, 1, 2, 3, 4, 5\}$?`,
          figure: {"type": "plot", "x": [-0.5, 5.5], "y": [-0.5, 5.5], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [5, 0], "tone": "muted", "thin": true}, {"from": [0, 1], "to": [5, 1], "tone": "muted", "thin": true}, {"from": [0, 2], "to": [5, 2], "tone": "muted", "thin": true}, {"from": [0, 3], "to": [5, 3], "tone": "muted", "thin": true}, {"from": [0, 4], "to": [5, 4], "tone": "muted", "thin": true}, {"from": [0, 5], "to": [5, 5], "tone": "muted", "thin": true}, {"from": [0, 0], "to": [0, 5], "tone": "muted", "thin": true}, {"from": [1, 0], "to": [1, 5], "tone": "muted", "thin": true}, {"from": [2, 0], "to": [2, 5], "tone": "muted", "thin": true}, {"from": [3, 0], "to": [3, 5], "tone": "muted", "thin": true}, {"from": [4, 0], "to": [4, 5], "tone": "muted", "thin": true}, {"from": [5, 0], "to": [5, 5], "tone": "muted", "thin": true}], "points": [{"x": 0, "y": 0}, {"x": 0, "y": 1}, {"x": 0, "y": 2}, {"x": 0, "y": 3}, {"x": 0, "y": 4}, {"x": 0, "y": 5}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}, {"x": 1, "y": 4}, {"x": 1, "y": 5}, {"x": 2, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}, {"x": 2, "y": 3}, {"x": 2, "y": 4}, {"x": 2, "y": 5}, {"x": 3, "y": 0}, {"x": 3, "y": 1}, {"x": 3, "y": 2}, {"x": 3, "y": 3}, {"x": 3, "y": 4}, {"x": 3, "y": 5}, {"x": 4, "y": 0}, {"x": 4, "y": 1}, {"x": 4, "y": 2}, {"x": 4, "y": 3}, {"x": 4, "y": 4}, {"x": 4, "y": 5}, {"x": 5, "y": 0}, {"x": 5, "y": 1}, {"x": 5, "y": 2}, {"x": 5, "y": 3}, {"x": 5, "y": 4}, {"x": 5, "y": 5}], "alt": "A 6 by 6 array of lattice points, one unit apart."},
          difficulty: 2,
          answer: String.raw`$105$`,
        },
        {
          stem: String.raw`How many triangles with all three vertices among the $9$ points $(x, y)$ with $x, y \in \{0, 1, 2\}$ have area exactly $\frac{1}{2}$?`,
          figure: {"type": "plot", "x": [-0.5, 2.5], "y": [-0.5, 2.5], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [2, 0], "tone": "muted", "thin": true}, {"from": [0, 1], "to": [2, 1], "tone": "muted", "thin": true}, {"from": [0, 2], "to": [2, 2], "tone": "muted", "thin": true}, {"from": [0, 0], "to": [0, 2], "tone": "muted", "thin": true}, {"from": [1, 0], "to": [1, 2], "tone": "muted", "thin": true}, {"from": [2, 0], "to": [2, 2], "tone": "muted", "thin": true}], "points": [{"x": 0, "y": 0}, {"x": 0, "y": 1}, {"x": 0, "y": 2}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 2, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}], "polygons": [{"points": [[0, 0], [1, 0], [2, 1]], "fill": true, "tone": "accent"}], "caption": "For example, the shaded triangle has area $\\frac{1}{2}$.", "alt": "A 3 by 3 array of lattice points; the triangle with vertices (0, 0), (1, 0), (2, 1) is shaded."},
          difficulty: 3,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`Five lattice points are given in the plane, no three of them collinear. Prove that some three of them are the vertices of a triangle of area at least $1$. Show also that "at least $1$" cannot be replaced by "at least $2$".`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: two of the points, $A$ and $B$, agree in the parity of both coordinates, so the midpoint $M$ of $AB$ is a lattice point and, for any third point $C$, $[ABC] = 2[AMC] \ge 2 \cdot \frac{1}{2}$. The points $(0, 0)$, $(1, 0)$, $(0, 1)$, $(2, 1)$, $(1, 2)$ have no three collinear and every triangle they form has area at most $\frac{3}{2}$.`,
        },
        {
          stem: String.raw`Prove that among any $9$ lattice points in the plane there are three whose centroid is also a lattice point.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: classify the points by their coordinates modulo $3$; if some class holds three points, their centroid is a lattice point; otherwise each of the $9$ classes holds at most $2$ points, so at least $5$ classes occur, and any $5$ of the $9$ classes contain three distinct ones lying on a line of the $3 \times 3$ grid of residues (wrapping round), whose coordinate sums are $\equiv 0 \pmod 3$.`,
        },
      ],
    },
    {
      id: "C7-covering-packing",
      name: String.raw`Covering and packing`,
      tests: String.raw`The fewest squares or discs that cover a figure (or its boundary), the most pieces that fit inside one, and statements forced by total length or area. Lower bounds come from witness points, area or length counts, and projections; upper bounds from explicit arrangements.`,
      questions: [
        {
          stem: String.raw`What is the smallest number of $2 \times 2$ squares, with sides parallel to the sides of a $5 \times 5$ square, needed to cover the $5 \times 5$ square? (The small squares may overlap and may stick out.)`,
          figure: {"type": "plot", "x": [-0.5, 5.5], "y": [-0.5, 5.5], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [5, 0], [5, 5], [0, 5]], "tone": "ink"}, {"points": [[0, 0], [2, 0], [2, 2], [0, 2]], "tone": "accent", "fill": true}], "labels": [{"x": 2.5, "y": -0.05, "text": "5", "pos": "s"}, {"x": -0.05, "y": 2.5, "text": "5", "pos": "w"}, {"x": 1, "y": 1, "text": "2 × 2", "style": "small"}], "alt": "A 5 by 5 square with one 2 by 2 square shaded in a corner."},
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`What is the largest number of discs of radius $1$ that can be placed inside a $4 \times 4$ square without overlapping (touching is allowed)?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`, String.raw`$8$`],
          answer: String.raw`(B) $4$`,
        },
        {
          stem: String.raw`What is the largest number of $2 \times 3$ rectangles that can be cut from a $7 \times 7$ square of paper? (The rectangles may be placed in any position, but may not overlap.)`,
          figure: {"type": "plot", "x": [-0.6, 7.5], "y": [-0.6, 7.5], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [7, 0], [7, 7], [0, 7]], "tone": "ink"}, {"points": [[0, 0], [3, 0], [3, 2], [0, 2]], "tone": "accent", "fill": true}], "labels": [{"x": 3.5, "y": -0.05, "text": "7", "pos": "s"}, {"x": -0.05, "y": 3.5, "text": "7", "pos": "w"}, {"x": 1.5, "y": 1, "text": "2 × 3", "style": "small"}], "alt": "A 7 by 7 square with one 2 by 3 rectangle shaded in a corner."},
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`What is the smallest $r$ such that a $1 \times 1$ square can be covered by two discs of radius $r$?`,
          difficulty: 2,
          answer: String.raw`$\frac{\sqrt5}{4}$`,
        },
        {
          stem: String.raw`What is the smallest number of discs of radius $1$ needed to cover the boundary (the four sides) of a $3 \times 3$ square?`,
          figure: {"type": "plot", "x": [-0.6, 3.6], "y": [-0.6, 3.6], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [3, 0], [3, 3], [0, 3]], "tone": "ink"}], "circles": [{"c": [1.5, 1.6], "r": 1, "tone": "accent", "dashed": true}], "segments": [{"from": [1.5, 1.6], "to": [2.5, 1.6], "tone": "muted"}], "labels": [{"x": 1.5, "y": -0.05, "text": "3", "pos": "s"}, {"x": -0.05, "y": 1.5, "text": "3", "pos": "w"}, {"x": 2.0, "y": 1.6, "text": "1", "pos": "n", "style": "small"}], "alt": "A 3 by 3 square, with a dashed circle of radius 1 drawn inside it to show the scale."},
          difficulty: 3,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Several line segments with total length $19$ lie inside a $1 \times 1$ square. Prove that some line parallel to a side of the square meets at least $10$ of the segments.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: a segment of length $\ell$ projects onto two adjacent sides with lengths $a$, $b$ where $a + b \ge \ell$, so the projections onto one of the sides have total length at least $9.5 > 9$; some point of that side lies in at least $10$ projections, and the perpendicular through it meets those $10$ segments.`,
        },
        {
          stem: String.raw`Prove that a $1 \times 1$ square cannot be covered by three discs of radius $\frac{1}{2}$, but can be covered by three discs of radius $\frac{51}{100}$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: one of the three discs must contain two corners, so it is the disc on a side of the square as diameter and covers no other boundary point; a disc of diameter $1$ meets the boundary in pieces on at most two adjacent sides with lengths $a, b$, $a^{2} + b^{2} \le 1$, so two discs cover at most $2\sqrt2 < 3$ of the other three sides. For the cover, split the square into a $1 \times \frac{1}{8}$ strip and two $\frac{1}{2} \times \frac{7}{8}$ rectangles, each of circumradius $\frac{\sqrt{65}}{16} < \frac{51}{100}$.`,
        },
      ],
    },
    {
      id: "C7-colouring-plane",
      name: String.raw`Colouring the plane`,
      tests: String.raw`Points of the plane, lattice points or vertices of a regular polygon are coloured; show that some pair or triangle is monochromatic, count the colourings that avoid one, or find the fewest colours avoiding a forbidden distance. Use small rigid configurations for proofs and modular colourings for constructions.`,
      questions: [
        {
          stem: String.raw`Every point of the plane is coloured red or blue. Which of the following must exist, whatever the colouring?`,
          difficulty: 1,
          choices: [
            String.raw`two points at distance $1$ with the same colour`,
            String.raw`two red points at distance $1$`,
            String.raw`a red point and a blue point at distance $1$`,
            String.raw`three points of the same colour forming an equilateral triangle of side $1$`,
            String.raw`three red points forming an equilateral triangle of side $1$`,
          ],
          answer: String.raw`(A) two points at distance $1$ with the same colour`,
        },
        {
          stem: String.raw`Each vertex of a regular hexagon is coloured red or blue. In how many of the $64$ colourings are there no three vertices of the same colour forming an equilateral triangle?`,
          figure: {"type": "plot", "x": [-2.2, 2.2], "y": [-1.8, 1.8], "equal": true, "axes": false, "polygons": [{"points": [[1.6, 0.0], [0.8, 1.386], [-0.8, 1.386], [-1.6, 0.0], [-0.8, -1.386], [0.8, -1.386]], "tone": "ink"}], "points": [{"x": 1.6, "y": 0.0}, {"x": 0.8, "y": 1.386}, {"x": -0.8, "y": 1.386}, {"x": -1.6, "y": 0.0}, {"x": -0.8, "y": -1.386}, {"x": 0.8, "y": -1.386}], "alt": "A regular hexagon with its six vertices marked."},
          difficulty: 1,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`Every lattice point of the plane is to be coloured so that any two lattice points at distance $1$, $2$ or $\sqrt5$ from each other have different colours. What is the smallest number of colours needed?`,
          figure: {"type": "plot", "x": [-2.6, 2.6], "y": [-2.6, 2.6], "equal": true, "axes": false, "circles": [{"c": [-2, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-2, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-2, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-2, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-2, 2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-1, -2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-1, -1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-1, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-1, 1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-1, 2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, -2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, 0], "r": 0.17, "fill": true, "tone": "warn"}, {"c": [0, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, 2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, -2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, -1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [1, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, 1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [1, 2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [2, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [2, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [2, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [2, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [2, 2], "r": 0.08, "fill": true, "tone": "muted"}], "labels": [{"x": 0.15, "y": 0.15, "text": "P", "pos": "ne", "style": "italic"}], "caption": "The lattice points at distance $1$, $2$ or $\\sqrt5$ from $P$ (shaded) must get colours different from $P$.", "alt": "A 5 by 5 block of lattice points centred at P; the points at distance $1$, $2$ or $\\sqrt5$ from P are highlighted."},
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Each vertex of a regular octagon is coloured red or blue. In how many of the $256$ colourings are there no four vertices of the same colour that are the vertices of a rectangle?`,
          figure: {"type": "plot", "x": [-2.3, 2.3], "y": [-2.2, 2.2], "equal": true, "axes": false, "polygons": [{"points": [[0.0, 1.8], [1.273, 1.273], [1.8, 0.0], [1.273, -1.273], [0.0, -1.8], [-1.273, -1.273], [-1.8, -0.0], [-1.273, 1.273]], "tone": "ink"}, {"points": [[0.0, 1.8], [1.273, 1.273], [0.0, -1.8], [-1.273, -1.273]], "tone": "accent", "dashed": true}], "points": [{"x": 0.0, "y": 1.8}, {"x": 1.273, "y": 1.273}, {"x": 1.8, "y": 0.0}, {"x": 1.273, "y": -1.273}, {"x": 0.0, "y": -1.8}, {"x": -1.273, "y": -1.273}, {"x": -1.8, "y": -0.0}, {"x": -1.273, "y": 1.273}], "caption": "One of the rectangles with vertices among the vertices of the octagon.", "alt": "A regular octagon; four of its vertices, two adjacent ones and the two opposite them, are joined by a dashed rectangle."},
          difficulty: 2,
          answer: String.raw`$128$`,
        },
        {
          stem: String.raw`Every point of the plane is coloured with one of three colours. Prove that there are two points of the same colour whose distance is $1$ or $\sqrt3$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: take a regular hexagon of side $1$ and its centre; the two triangles of alternate vertices have side $\sqrt3$, so without a bad pair each uses all three colours, and then the centre, at distance $1$ from all six vertices, has no colour left.`,
        },
        {
          stem: String.raw`Every lattice point of the plane is to be coloured so that any two lattice points at distance $1$, $\sqrt2$ or $2$ from each other have different colours. What is the smallest number of colours needed?`,
          figure: {"type": "plot", "x": [-2.6, 2.6], "y": [-2.6, 2.6], "equal": true, "axes": false, "circles": [{"c": [-2, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-2, -1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-2, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-2, 1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-2, 2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-1, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [-1, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-1, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-1, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [-1, 2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [0, -2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, 0], "r": 0.17, "fill": true, "tone": "warn"}, {"c": [0, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [0, 2], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [1, -1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, 1], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [1, 2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [2, -2], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [2, -1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [2, 0], "r": 0.17, "fill": true, "tone": "accent"}, {"c": [2, 1], "r": 0.08, "fill": true, "tone": "muted"}, {"c": [2, 2], "r": 0.08, "fill": true, "tone": "muted"}], "labels": [{"x": 0.15, "y": 0.15, "text": "P", "pos": "ne", "style": "italic"}], "caption": "The lattice points at distance $1$, $\\sqrt2$ or $2$ from $P$ (shaded) must get colours different from $P$.", "alt": "A 5 by 5 block of lattice points centred at P; the points at distance $1$, $\\sqrt2$ or $2$ from P are highlighted."},
          difficulty: 3,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Every lattice point of the plane is to be coloured so that any two lattice points at distance $1$, $2\sqrt2$ or $3$ from each other have different colours. Prove that three colours are not enough but four colours are.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: colouring $(x, y)$ by $x + 2y \bmod 4$ works, while in a $4 \times 4$ block of lattice points (which has no three points pairwise at forbidden distances) one colour holds at most $5$ points, since if a row holds two points of that colour, at $x$ and $x + 2$, all its other points lie in columns $x + 1$ and $x + 3$ of the other three rows, at most two per column and not two in both; so three colours cover at most $15 < 16$ points.`,
        },
      ],
    },
  ],
});
