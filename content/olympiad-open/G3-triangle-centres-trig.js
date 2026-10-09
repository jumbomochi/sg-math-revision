H2.addTopic({
  id: "G3",
  title: "Triangle Centres and Trigonometry",
  summary: String.raw`Incentre and excentres with tangent lengths, circumcentre and the extended sine rule, centroid and medians, orthocentre, the Euler line, and the trigonometric identities that hold in every triangle.`,
  concepts: [
    {
      title: String.raw`Incircle, tangent lengths and inradius`,
      body: String.raw`Write $a = BC$, $b = CA$, $c = AB$ and $s = \tfrac12(a + b + c)$ (the semiperimeter).

- The angle bisectors meet at the **incentre** $I$, the centre of the circle touching all three sides.
- **Tangents from a point are equal.** If the incircle touches $BC, CA, AB$ at $D, E, F$, then $AE = AF = s - a$, $BD = BF = s - b$, $CD = CE = s - c$.
- Splitting the triangle into $IBC$, $ICA$, $IAB$ gives $\text{Area} = \tfrac12 r(a + b + c) = rs$, so $r = \dfrac{\text{Area}}{s}$. Example: the $3$-$4$-$5$ triangle has $s = 6$, area $6$, so $r = 1$. With **Heron**, $\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}$, this finds $r$ from the sides alone.
- In right triangle $AIF$: $\tan \dfrac{A}{2} = \dfrac{r}{s - a}$. For a right angle at $C$: $r = s - c$.
- $\angle BIC = 90^\circ + \tfrac12 A$.`,
      figure: {
        type: "plot",
        x: [-0.6, 5.8],
        y: [-0.64, 4.2],
        equal: true,
        axes: false,
        circles: [
          { c: [1.914, 1.309], r: 1.309, tone: "accent" },
        ],
        segments: [
          { from: [1.4, 3.6], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [5.2, 0], tone: "ink" },
          { from: [5.2, 0], to: [1.4, 3.6], tone: "ink" },
          { from: [1.914, 1.309], to: [1.914, 0], tone: "muted", dashed: true },
        ],
        rightAngles: [
          { at: [1.914, 0], a: [0, 1.309], b: [3.286, 0], size: 0.18 },
        ],
        points: [
          { x: 1.914, y: 1.309, label: "I", pos: "n" },
        ],
        labels: [
          { x: 1.4, y: 3.6, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 5.2, y: 0, text: "C", pos: "e", style: "italic" },
          { x: 1.914, y: 0, text: "D", pos: "s", style: "italic" },
          { x: 2.815, y: 2.26, text: "E", pos: "ne", style: "italic" },
          { x: 0.694, y: 1.784, text: "F", pos: "w", style: "italic" },
          { x: 1.02, y: 2.734, text: "x", pos: "nw", style: "italic", tone: "warn" },
          { x: 2.113, y: 2.98, text: "x", pos: "n", style: "italic", tone: "warn" },
          { x: 0.299, y: 0.879, text: "y", pos: "w", style: "italic", tone: "warn" },
          { x: 0.928, y: -0.04, text: "y", pos: "sw", style: "italic", tone: "warn" },
          { x: 3.596, y: -0.031, text: "z", pos: "se", style: "italic", tone: "warn" },
          { x: 4.057, y: 1.126, text: "z", pos: "e", style: "italic", tone: "warn" },
          { x: 1.914, y: 0.655, text: "r", pos: "e", style: "italic" },
        ],
        caption: String.raw`Tangents from a vertex are equal: $x = s - a$, $y = s - b$, $z = s - c$, and $r = \dfrac{\text{Area}}{s}$.`,
        alt: "Triangle ABC with its incircle, centre I, touching BC at D, CA at E and AB at F. The two tangents from A have length x, from B length y, from C length z.",
      },
    },
    {
      title: String.raw`Excircles and exradii`,
      body: String.raw`- The **excircle opposite $A$** touches $BC$ and the extensions of $AB$ and $AC$. Its centre $I_A$ lies on the internal bisector of $A$ and the external bisectors of $B$ and $C$.
- The two tangents from $A$ to this excircle have length $s$ (they add up to $AB + BC + CA$). Hence it touches $BC$ at $E$ with $BE = s - c$ and $CE = s - b$.
- The incircle touches $BC$ at $D$ with $BD = s - b$, so $BD = CE$: the two touch points are symmetric about the midpoint of $BC$.
- **Exradius**: $r_a = \dfrac{\text{Area}}{s - a}$, and similarly $r_b$, $r_c$. Example: in the $3$-$4$-$5$ triangle the excircle on the side of length $4$ has radius $\dfrac{6}{6 - 4} = 3$.
- **Incentre–excentre lemma**: the midpoint $M$ of arc $BC$ not containing $A$ satisfies $MB = MC = MI = MI_A$.`,
      figure: {
        type: "plot",
        x: [-1.093, 4.993],
        y: [-5.486, 5],
        equal: true,
        axes: false,
        circles: [
          { c: [1.95, -2.443], r: 2.443, tone: "good" },
          { c: [1.45, 1.158], r: 1.158, tone: "accent" },
        ],
        segments: [
          { from: [1, 4.4], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [3.4, 0], tone: "ink" },
          { from: [3.4, 0], to: [1, 4.4], tone: "ink" },
          { from: [0, 0], to: [-0.432, -1.901], tone: "ink" },
          { from: [3.4, 0], to: [4.094, -1.273], tone: "ink" },
        ],
        points: [
          { x: 1.95, y: -2.443, label: "Iₐ", pos: "e" },
          { x: 1.45, y: 1.158 },
          { x: 1.45, y: 0, label: "D", pos: "n" },
          { x: 1.95, y: 0, label: "E", pos: "n" },
          { x: -0.432, y: -1.901 },
          { x: 4.094, y: -1.273 },
        ],
        labels: [
          { x: 1, y: 4.4, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "nw", style: "italic" },
          { x: 3.4, y: 0, text: "C", pos: "ne", style: "italic" },
          { x: 0.112, y: 0.493, text: "s", pos: "w", style: "italic", tone: "good" },
          { x: 2.919, y: 0.883, text: "s", pos: "e", style: "italic", tone: "good" },
        ],
        caption: String.raw`The tangents from $A$ to the excircle have length $s$, so $BE = s - c$ and $CE = s - b$; the incircle gives $BD = s - b$, so $BD = CE$.`,
        alt: "Triangle ABC with its incircle touching BC at D and its A-excircle, below BC, touching BC at E and the extensions of AB and AC. The tangents from A to the excircle both have length s.",
      },
    },
    {
      title: String.raw`Circumcentre and the extended sine rule`,
      body: String.raw`- The perpendicular bisectors of the sides meet at the **circumcentre** $O$, the centre of the circle through $A, B, C$ (radius $R$).
- **Extended sine rule**: $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$. (Draw the diameter $BA'$: $\angle BA'C = A$ and $\angle BCA' = 90^\circ$.)
- Combining with $\text{Area} = \tfrac12 bc\sin A$: $\text{Area} = \dfrac{abc}{4R}$, i.e. $R = \dfrac{abc}{4\,\text{Area}}$. Example: sides $13, 14, 15$ have area $84$, so $R = \dfrac{13 \cdot 14 \cdot 15}{336} = \dfrac{65}{8}$.
- $O$ is inside, on, or outside the triangle according as it is acute, right-angled or obtuse; for a right angle, $R$ is half the hypotenuse.
- The sine rule turns statements about sides into statements about angles and back: $a : b : c = \sin A : \sin B : \sin C$.`,
      figure: {
        type: "plot",
        x: [-3, 3],
        y: [-3, 3],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2.4, tone: "muted" },
        ],
        segments: [
          { from: [-0.742, 2.283], to: [-2.035, -1.272], tone: "ink" },
          { from: [-2.035, -1.272], to: [2.119, -1.127], tone: "ink" },
          { from: [2.119, -1.127], to: [-0.742, 2.283], tone: "ink" },
          { from: [-2.035, -1.272], to: [2.035, 1.272], tone: "accent" },
          { from: [2.035, 1.272], to: [2.119, -1.127], tone: "accent" },
        ],
        angles: [
          { at: [-0.742, 2.283], from: [-2.035, -1.272], to: [2.119, -1.127], r: 0.45, label: "A" },
          { at: [2.035, 1.272], from: [-2.035, -1.272], to: [2.119, -1.127], r: 0.45, label: "A" },
        ],
        rightAngles: [
          { at: [2.119, -1.127], a: [-4.154, -0.145], b: [-0.084, 2.399], size: 0.22 },
        ],
        points: [
          { x: 0, y: 0, label: "O", pos: "nw" },
        ],
        labels: [
          { x: -0.742, y: 2.283, text: "A", pos: "n", style: "italic" },
          { x: -2.035, y: -1.272, text: "B", pos: "sw", style: "italic" },
          { x: 2.119, y: -1.127, text: "C", pos: "se", style: "italic" },
          { x: 2.035, y: 1.272, text: "A′", pos: "ne", style: "italic" },
          { x: 1.018, y: 0.636, text: "R", pos: "se", style: "italic" },
          { x: 0.042, y: -1.199, text: "a", pos: "s", style: "italic" },
        ],
        caption: String.raw`$\angle BA'C = \angle A$ (same arc) and $\angle BCA' = 90^\circ$, so $a = BC = 2R\sin A$.`,
        alt: "Triangle ABC inscribed in a circle with centre O and radius R. BA′ is a diameter, so angle BCA′ is a right angle and angle BA′C equals angle A.",
      },
    },
    {
      title: String.raw`Centroid and medians`,
      body: String.raw`- The three **medians** meet at the **centroid** $G$, which divides each median in the ratio $2 : 1$ from the vertex. In vectors or coordinates, $G = \tfrac13(A + B + C)$.
- The medians cut the triangle into **six triangles of equal area**; in particular $[GBC] = [GCA] = [GAB] = \tfrac13[ABC]$.
- **Apollonius**: the median to side $a$ has length $m_a$ with $m_a^2 = \dfrac{2b^2 + 2c^2 - a^2}{4}$. Example: in the triangle with sides $5, 7, 8$, the median to the side $8$ has $m^2 = \dfrac{50 + 98 - 64}{4} = 21$.
- Useful construction: extend the median $AD$ beyond $D$ to $G'$ with $DG' = GD$. Then $BGCG'$ is a parallelogram, and triangle $BGG'$ has sides $\tfrac23$ of the three medians.`,
      figure: {
        type: "plot",
        x: [-0.6, 6],
        y: [-0.6, 4.4],
        equal: true,
        axes: false,
        polygons: [
          { points: [[1.3, 3.8], [2.233, 1.267], [0.65, 1.9]], fill: true, tone: "accent" },
          { points: [[0, 0], [2.233, 1.267], [2.7, 0]], fill: true, tone: "accent" },
          { points: [[5.4, 0], [2.233, 1.267], [3.35, 1.9]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [1.3, 3.8], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [5.4, 0], tone: "ink" },
          { from: [5.4, 0], to: [1.3, 3.8], tone: "ink" },
          { from: [1.3, 3.8], to: [2.7, 0], tone: "ink" },
          { from: [0, 0], to: [3.35, 1.9], tone: "ink" },
          { from: [5.4, 0], to: [0.65, 1.9], tone: "ink" },
        ],
        points: [
          { x: 2.233, y: 1.267, label: "G", pos: "e" },
        ],
        labels: [
          { x: 1.3, y: 3.8, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 5.4, y: 0, text: "C", pos: "e", style: "italic" },
          { x: 2.7, y: 0, text: "D", pos: "s", style: "italic" },
          { x: 3.35, y: 1.9, text: "E", pos: "ne", style: "italic" },
          { x: 0.65, y: 1.9, text: "F", pos: "w", style: "italic" },
          { x: 1.767, y: 2.533, text: "2k", pos: "w", style: "italic", tone: "warn" },
          { x: 2.467, y: 0.633, text: "k", pos: "w", style: "italic", tone: "warn" },
        ],
        caption: String.raw`The medians meet at $G$ with $AG : GD = 2 : 1$, and they cut the triangle into six pieces of equal area.`,
        alt: "Triangle ABC with medians AD, BE, CF meeting at the centroid G. AG is twice GD.",
      },
    },
    {
      title: String.raw`Orthocentre and altitudes`,
      body: String.raw`- The three altitudes meet at the **orthocentre** $H$.
- In an acute triangle, $\angle BHC = 180^\circ - A$ (quadrilateral $AFHE$ has two right angles).
- **Distances**: $AH = 2R\cos A$, which is twice the distance from $O$ to $BC$.
- The reflection of $H$ in $BC$ lies on the circumcircle; so does the reflection of $H$ in the midpoint of $BC$ (it is the point diametrically opposite $A$).
- Altitudes create many cyclic quadrilaterals: $B, C, E, F$ lie on the circle with diameter $BC$, and $A, F, H, E$ on the circle with diameter $AH$. These give equal angles for angle chasing.`,
      figure: {
        type: "plot",
        x: [-3, 3],
        y: [-3, 3],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 2.4, tone: "muted" },
        ],
        segments: [
          { from: [-0.417, 2.364], to: [-1.966, -1.377], tone: "ink" },
          { from: [-1.966, -1.377], to: [2.035, -1.272], tone: "ink" },
          { from: [2.035, -1.272], to: [-0.417, 2.364], tone: "ink" },
          { from: [-0.417, 2.364], to: [-0.32, -1.333], tone: "accent" },
          { from: [-1.966, -1.377], to: [0.833, 0.511], tone: "accent" },
          { from: [2.035, -1.272], to: [-1.343, 0.128], tone: "accent" },
          { from: [-0.32, -1.333], to: [-0.292, -2.382], tone: "muted", dashed: true },
          { from: [-1.966, -1.377], to: [-0.292, -2.382], tone: "muted", dashed: true },
          { from: [2.035, -1.272], to: [-0.292, -2.382], tone: "muted", dashed: true },
        ],
        rightAngles: [
          { at: [-0.32, -1.333], a: [2.355, 0.062], b: [-0.097, 3.697], size: 0.2 },
          { at: [0.833, 0.511], a: [-1.249, 1.852], b: [-2.799, -1.888], size: 0.2 },
          { at: [-1.343, 0.128], a: [-0.623, -1.504], b: [3.378, -1.399], size: 0.2 },
        ],
        points: [
          { x: -0.347, y: -0.285, label: "H", pos: "e" },
          { x: -0.292, y: -2.382, label: "H′", pos: "s" },
        ],
        labels: [
          { x: -0.417, y: 2.364, text: "A", pos: "n", style: "italic" },
          { x: -1.966, y: -1.377, text: "B", pos: "sw", style: "italic" },
          { x: 2.035, y: -1.272, text: "C", pos: "se", style: "italic" },
          { x: -0.32, y: -1.333, text: "D", pos: "se", style: "italic" },
          { x: 0.833, y: 0.511, text: "E", pos: "ne", style: "italic" },
          { x: -1.343, y: 0.128, text: "F", pos: "w", style: "italic" },
        ],
        caption: String.raw`The altitudes meet at $H$. Then $\angle BHC = 180^\circ - A$, $AH = 2R\cos A$, and the reflection $H'$ of $H$ in $BC$ lies on the circumcircle.`,
        alt: "Acute triangle ABC with altitudes AD, BE, CF meeting at the orthocentre H. The reflection H′ of H in BC lies on the circumcircle.",
      },
    },
    {
      title: String.raw`Euler line and nine-point circle`,
      body: String.raw`- $O$, $G$, $H$ are collinear (the **Euler line**), with $G$ between them and $OG : GH = 1 : 2$. With $O$ as origin, $\vec{OH} = \vec{OA} + \vec{OB} + \vec{OC}$.
- The **nine-point circle** passes through the three midpoints of the sides, the three feet of the altitudes and the midpoints of $AH$, $BH$, $CH$. Its centre $N$ is the midpoint of $OH$ and its radius is $\tfrac{R}{2}$.
- $OH^2 = 9R^2 - (a^2 + b^2 + c^2)$.
- **Euler's formula** $OI^2 = R^2 - 2Rr$ gives $R \ge 2r$, with equality only for an equilateral triangle. Example: the $3$-$4$-$5$ triangle has $R = 2.5 \ge 2 = 2r$.`,
      figure: {
        type: "plot",
        x: [-0.6, 7.6],
        y: [-0.909, 4.1],
        equal: true,
        axes: false,
        circles: [
          { c: [2.5, 1.464], r: 1.773, tone: "good" },
        ],
        segments: [
          { from: [4.395, -0.228], to: [0.754, 3.023], tone: "warn", dashed: true },
          { from: [1.5, 3.5], to: [0, 0], tone: "ink" },
          { from: [0, 0], to: [7, 0], tone: "ink" },
          { from: [7, 0], to: [1.5, 3.5], tone: "ink" },
        ],
        points: [
          { x: 3.5, y: 0 },
          { x: 4.25, y: 1.75 },
          { x: 0.75, y: 1.75 },
          { x: 3.5, y: 0.571, label: "O", pos: "ne" },
          { x: 2.833, y: 1.167, label: "G", pos: "ne" },
          { x: 1.5, y: 2.357, label: "H", pos: "ne" },
          { x: 2.5, y: 1.464, label: "N", pos: "ne" },
        ],
        labels: [
          { x: 1.5, y: 3.5, text: "A", pos: "nw", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
          { x: 7, y: 0, text: "C", pos: "e", style: "italic" },
        ],
        caption: String.raw`$O$, $G$, $N$, $H$ lie on the **Euler line** with $OG : GH = 1 : 2$; $N$ is the midpoint of $OH$ and the nine-point circle has radius $\tfrac{R}{2}$.`,
        alt: "Triangle ABC with circumcentre O, centroid G, orthocentre H and nine-point centre N all on one dashed line, the Euler line. The nine-point circle passes through the midpoints of the sides.",
      },
    },
    {
      title: String.raw`Trigonometric identities in a triangle`,
      body: String.raw`Since $A + B + C = 180^\circ$, one angle can always be eliminated: $\sin(B + C) = \sin A$, $\cos(B + C) = -\cos A$.

- **Tangent identity** (no right angle): $\tan A + \tan B + \tan C = \tan A \tan B \tan C$. Example: $\tan A = 3$, $\tan B = 4$ give $\tan C = -\dfrac{3 + 4}{1 - 12} = \dfrac{7}{11}$, and indeed $3 + 4 + \tfrac{7}{11} = 3 \cdot 4 \cdot \tfrac{7}{11}$.
- **Cosine rule** $a^2 = b^2 + c^2 - 2bc\cos A$ recognises angles from side relations: $b^2 + c^2 - a^2 = bc$ means $\cos A = \tfrac12$, so $A = 60^\circ$.
- **Areas**: $\tfrac12 ab\sin C = rs = \dfrac{abc}{4R}$.
- $\cos A + \cos B + \cos C = 1 + \dfrac{r}{R}$ and $r = 4R\sin\dfrac{A}{2}\sin\dfrac{B}{2}\sin\dfrac{C}{2}$.
- To prove a symmetric identity, convert everything to sides (sine and cosine rules) or everything to angles, then use $C = 180^\circ - A - B$.`,
    },
    {
      title: String.raw`Weighted cosine sums: a vector trick`,
      body: String.raw`Let $\mathbf u$, $\mathbf v$, $\mathbf w$ be unit vectors perpendicular to $BC$, $CA$, $AB$, pointing out of the triangle. The angle between $\mathbf v$ and $\mathbf w$ is $180^\circ - A$, so $\mathbf v \cdot \mathbf w = -\cos A$, and similarly for the other pairs.

- For any real $x$, $y$, $z$: $0 \le |x\mathbf u + y\mathbf v + z\mathbf w|^2 = x^2 + y^2 + z^2 - 2yz\cos A - 2zx\cos B - 2xy\cos C$.
- Example: $x = y = z = 1$ gives $\cos A + \cos B + \cos C \le \tfrac32$.
- **Equality** needs $x\mathbf u + y\mathbf v + z\mathbf w = \mathbf 0$. Since $a\mathbf u + b\mathbf v + c\mathbf w = \mathbf 0$ (the sides, turned through $90^\circ$, close up), this happens exactly when $x : y : z = a : b : c$, which is possible only if $x$, $y$, $z$ can be the sides of a triangle.
- To bound $p\cos A + q\cos B + r\cos C$, choose $x, y, z$ with $yz : zx : xy = p : q : r$.`,
    },
  ],
  archetypes: [
    {
      id: "G3-incircle-tangents",
      name: String.raw`Incircle, inradius and tangent lengths`,
      tests: String.raw`Finding the inradius from $r = \text{Area}/s$, using equal tangent lengths $s - a$, $s - b$, $s - c$, or describing all triangles with a given inradius. Look for an inscribed circle or its touch points.`,
      questions: [
        {
          stem: String.raw`The diagram shows triangle $ABC$ with $AB = 13$, $BC = 21$, $CA = 20$ and its inscribed circle. Find the radius of the circle.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-1.5, 22.5],
            y: [-1.5, 13.5],
            equal: true,
            axes: false,
            circles: [
              { c: [7, 4.667], r: 4.667, tone: "accent" },
            ],
            segments: [
              { from: [5, 12], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [21, 0], tone: "ink" },
              { from: [21, 0], to: [5, 12], tone: "ink" },
            ],
            labels: [
              { x: 5, y: 12, text: "A", pos: "nw", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 21, y: 0, text: "C", pos: "e", style: "italic" },
              { x: 2.5, y: 6, text: "13", pos: "w", style: "plain" },
              { x: 10.5, y: 0, text: "21", pos: "se", style: "plain" },
              { x: 13, y: 6, text: "20", pos: "ne", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 13, BC = 21, CA = 20 and its inscribed circle.",
          },
          answer: String.raw`$\dfrac{14}{3}$`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ touches $BC$ at $D$, where $BD = 5$ and $DC = 8$. Given that $\angle BAC = 60^\circ$, find the area of triangle $ABC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.3, 14.3],
            y: [-1.3, 11.959],
            equal: true,
            axes: false,
            circles: [
              { c: [5, 3.601], r: 3.601, tone: "accent" },
            ],
            segments: [
              { from: [3.561, 10.659], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [13, 0], tone: "ink" },
              { from: [13, 0], to: [3.561, 10.659], tone: "ink" },
            ],
            angles: [
              { at: [3.561, 10.659], from: [0, 0], to: [13, 0], r: 1.4, label: "60°" },
            ],
            points: [
              { x: 5, y: 0, label: "D", pos: "n" },
            ],
            labels: [
              { x: 3.561, y: 10.659, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 13, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.5, y: 0, text: "5", pos: "s", style: "plain" },
              { x: 9, y: 0, text: "8", pos: "s", style: "plain" },
            ],
            alt: "Triangle ABC with angle A = 60 degrees and its incircle touching BC at D, where BD = 5 and DC = 8.",
          },
          answer: String.raw`$40\sqrt{3}$`,
        },
        {
          stem: String.raw`Find all triangles with integer side lengths whose inradius is $2$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`The sides are $(5, 12, 13)$, $(6, 8, 10)$, $(6, 25, 29)$, $(7, 15, 20)$ or $(9, 10, 17)$. **Proof.** Key idea: with $x = s - a$, $y = s - b$, $z = s - c$ (integers by a parity check), $r^2 = \dfrac{xyz}{x + y + z}$ gives $xyz = 4(x + y + z)$; if $x \le y \le z$ then $xy \le 12$, so $x \le 3$ and only finitely many cases remain.`,
        },
        {
          stem: String.raw`A right-angled triangle has hypotenuse $29$ and inradius $6$. Find its area.`,
          difficulty: 1,
          answer: String.raw`$210$`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ has radius $4$ and touches $AB$ at $F$, where $AF = 6$ and $FB = 8$, as shown. Find $BC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.4, 15.4],
            y: [-1.6, 13.3],
            equal: true,
            axes: false,
            circles: [
              { c: [6, 4], r: 4, tone: "accent" },
            ],
            segments: [
              { from: [0, 0], to: [14, 0], tone: "ink" },
              { from: [14, 0], to: [5, 12], tone: "ink" },
              { from: [5, 12], to: [0, 0], tone: "ink" },
              { from: [6, 4], to: [6, 0], tone: "muted", dashed: true },
            ],
            rightAngles: [
              { at: [6, 0], a: [1, 0], b: [0, 1], size: 0.5 },
            ],
            points: [
              { x: 6, y: 4, label: "I", pos: "n" },
              { x: 6, y: 0 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 14, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 5, y: 12, text: "C", pos: "n", style: "italic" },
              { x: 6, y: 0, text: "F", pos: "s", style: "italic" },
              { x: 3, y: 0, text: "6", pos: "s", style: "plain" },
              { x: 10, y: 0, text: "8", pos: "s", style: "plain" },
              { x: 6, y: 2, text: "4", pos: "e", style: "plain" },
            ],
            alt: "Triangle ABC with its incircle, centre I, touching AB at F. AF = 6, FB = 8 and the radius IF = 4.",
          },
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ touches $BC$, $CA$, $AB$ at $D$, $E$, $F$, as shown. Prove that $AD > BE$ if and only if $CA > CB$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.6, 6.8],
            y: [-0.7, 4.9],
            equal: true,
            axes: false,
            circles: [
              { c: [2.192, 1.557], r: 1.557, tone: "muted" },
            ],
            segments: [
              { from: [1.5, 4.3], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6.2, 0], tone: "ink" },
              { from: [6.2, 0], to: [1.5, 4.3], tone: "ink" },
              { from: [1.5, 4.3], to: [2.192, 0], tone: "accent" },
              { from: [0, 0], to: [3.243, 2.705], tone: "accent" },
            ],
            points: [
              { x: 2.192, y: 0 },
              { x: 3.243, y: 2.705 },
              { x: 0.722, y: 2.07 },
            ],
            labels: [
              { x: 1.5, y: 4.3, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6.2, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.192, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.243, y: 2.705, text: "E", pos: "ne", style: "italic" },
              { x: 0.722, y: 2.07, text: "F", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with its incircle touching BC at D, CA at E and AB at F; the segments AD and BE are drawn.",
          },
          answer: String.raw`**Proof.** Key idea: with the tangent lengths $x = s - a$, $y = s - b$, $z = s - c$, Stewart's theorem gives $AD^2 = x^2 + \dfrac{4xyz}{y + z}$ and $BE^2 = y^2 + \dfrac{4xyz}{x + z}$; their difference is $(x - y)$ times a positive quantity, and $x - y = (x + z) - (y + z) = CA - CB$.`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ touches $BC$, $CA$, $AB$ at $D$, $E$, $F$, as shown. Prove that
$$DE + EF + FD \le \tfrac12(AB + BC + CA),$$
with equality only for an equilateral triangle.`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-0.6, 6.2],
            y: [-0.7, 4.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1.915, 0], [2.873, 2.479], [0.55, 1.834]], fill: true, tone: "warn" },
            ],
            circles: [
              { c: [1.915, 1.425], r: 1.425, tone: "accent" },
            ],
            segments: [
              { from: [1.2, 4], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5.6, 0], tone: "ink" },
              { from: [5.6, 0], to: [1.2, 4], tone: "ink" },
            ],
            labels: [
              { x: 1.2, y: 4, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 5.6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 1.915, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 2.873, y: 2.479, text: "E", pos: "ne", style: "italic" },
              { x: 0.55, y: 1.834, text: "F", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with its incircle touching BC at D, CA at E and AB at F; triangle DEF is shaded.",
          },
          answer: String.raw`**Proof.** Key idea: $AE = AF = s - a$ gives $EF = 2(s - a)\sin\frac{A}{2}$, and $\sin\frac{A}{2} \le \dfrac{a}{b + c}$ (the feet of the perpendiculars from $B$ and $C$ to the bisector of angle $A$ are at distances $c\sin\frac{A}{2}$, $b\sin\frac{A}{2}$ from it, adding to at most $a$); with $x = s - a$, $y = s - b$, $z = s - c$ this makes $EF \le \dfrac{2x(y + z)}{2x + y + z} \le \dfrac{2x + y + z}{4}$ (HM–AM), and the three bounds add to $x + y + z = s$.`,
        },
      ],
    },
    {
      id: "G3-excircles",
      name: String.raw`Excircles and exradii`,
      tests: String.raw`Problems with a circle touching one side and the extensions of the other two: use tangent length $s$ from the opposite vertex, $r_a = \text{Area}/(s - a)$, and the symmetry of the incircle and excircle touch points.`,
      questions: [
        {
          stem: String.raw`A right-angled triangle has sides $8$, $15$ and $17$. Find the radius of its excircle that touches the hypotenuse.`,
          difficulty: 1,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 12$, $BC = 10$ and $CA = 16$. The incircle touches $BC$ at $D$, and the excircle opposite $A$ touches $BC$ at $E$, as shown. Find $DE$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.8, 14.858],
            y: [-14.517, 13.185],
            equal: true,
            axes: false,
            circles: [
              { c: [3, 3.154], r: 3.154, tone: "accent" },
              { c: [7, -6.658], r: 6.658, tone: "good" },
            ],
            segments: [
              { from: [-0.6, 11.985], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [10, 0], tone: "ink" },
              { from: [10, 0], to: [-0.6, 11.985], tone: "ink" },
              { from: [0, 0], to: [0.38, -7.59], tone: "ink" },
              { from: [10, 0], to: [12.385, -2.697], tone: "ink" },
            ],
            points: [
              { x: 3, y: 0, label: "D", pos: "n" },
              { x: 7, y: 0, label: "E", pos: "n" },
            ],
            labels: [
              { x: -0.6, y: 11.985, text: "A", pos: "nw", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "nw", style: "italic" },
              { x: 10, y: 0, text: "C", pos: "ne", style: "italic" },
              { x: -0.3, y: 5.992, text: "12", pos: "nw", style: "plain" },
              { x: 4.7, y: 5.992, text: "16", pos: "ne", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 12, BC = 10, CA = 16. Its incircle touches BC at D; the excircle opposite A touches BC at E and the extensions of AB and AC.",
          },
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Let $r_a$, $r_b$, $r_c$ be the exradii of a triangle with semiperimeter $s$. Prove that $r_a r_b + r_b r_c + r_c r_a = s^2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $r_a = \dfrac{K}{s - a}$ and Heron's $K^2 = s(s-a)(s-b)(s-c)$, each product simplifies, e.g. $r_a r_b = s(s - c)$, and the three terms add to $s(3s - 2s) = s^2$.`,
        },
        {
          stem: String.raw`The three exradii of a triangle are $3$, $4$ and $6$. Find the inradius of the triangle.`,
          difficulty: 1,
          answer: String.raw`$\dfrac{4}{3}$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 6$, $AC = 8$, and the incentre $I$ satisfies $AI = 4$. The centre of the excircle opposite $A$ is $I_A$, as shown. Find $AI_A$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.5, 11.4],
            y: [-12.3, 6.6],
            equal: true,
            axes: false,
            circles: [
              { c: [4.5, -5.809], r: 5.809, tone: "good" },
              { c: [2.5, 1.936], r: 1.936, tone: "muted" },
            ],
            segments: [
              { from: [1.5, 5.809], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [7, 0], tone: "ink" },
              { from: [7, 0], to: [1.5, 5.809], tone: "ink" },
              { from: [0, 0], to: [-1.125, -4.357], tone: "ink" },
              { from: [7, 0], to: [8.719, -1.815], tone: "ink" },
              { from: [1.5, 5.809], to: [4.5, -5.809], tone: "accent", dashed: true },
            ],
            points: [
              { x: 2.5, y: 1.936, label: "I", pos: "e" },
              { x: 4.5, y: -5.809, label: "Iₐ", pos: "e" },
            ],
            labels: [
              { x: 1.5, y: 5.809, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 7, y: 0, text: "C", pos: "ne", style: "italic" },
              { x: 0.75, y: 2.905, text: "6", pos: "w", style: "plain" },
              { x: 4.25, y: 2.905, text: "8", pos: "ne", style: "plain" },
              { x: 1.78, y: 4.725, text: "4", pos: "e", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 6 and AC = 8, its incentre I with AI = 4, and the excircle opposite A with centre Iₐ on the ray AI beyond BC.",
          },
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Find all triangles whose inradius is $1$ and whose three exradii are all integers, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly three: the $3$-$4$-$5$ triangle (exradii $2, 3, 6$), the isosceles triangle with sides $2\sqrt2, 3\sqrt2, 3\sqrt2$ (exradii $2, 4, 4$) and the equilateral triangle with side $2\sqrt3$ (exradii $3, 3, 3$). **Proof.** Key idea: $r_a = \dfrac{K}{s - a}$ (and similarly) give $\dfrac{1}{r_a} + \dfrac{1}{r_b} + \dfrac{1}{r_c} = \dfrac{s}{K} = \dfrac{1}{r} = 1$, whose positive integer solutions are $\{2, 3, 6\}$, $\{2, 4, 4\}$, $\{3, 3, 3\}$; each determines one triangle, since $K^2 = r\,r_ar_br_c$ by Heron and then $s - a = K/r_a$, and so on.`,
        },
        {
          stem: String.raw`Triangle $ABC$ has circumcentre $O$, circumradius $R$, incentre $I$ and excentres $I_A$, $I_B$, $I_C$. Prove that
$$OI_A + OI_B + OI_C \le 6R,$$
with equality only for an equilateral triangle.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the power of $I_A$ with respect to the circumcircle is $I_AM \cdot I_AA = 2R\sin\frac{A}{2}\cdot\dfrac{r_a}{\sin\frac{A}{2}}$ ($M$ the midpoint of arc $BC$), so $OI_A^2 = R^2 + 2Rr_a$; with $r_a + r_b + r_c = 4R + r$ (from $r_a = \dfrac{K}{s - a}$ and $abc = 4RK$) and Euler's $r \le \frac{R}{2}$ the three squares add to $11R^2 + 2Rr \le 12R^2$, and the QM–AM inequality finishes.`,
        },
      ],
    },
    {
      id: "G3-circumradius",
      name: String.raw`Circumradius and the extended sine rule`,
      tests: String.raw`Finding $R$ from $R = \dfrac{abc}{4\,\text{Area}}$ or $a = 2R\sin A$, and turning angle conditions into side relations. Look for a circle through the three vertices or a condition linking angles and sides.`,
      questions: [
        {
          stem: String.raw`What is the radius of the circle passing through the vertices of a triangle with sides $5$, $5$ and $6$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$\dfrac{25}{8}$`, String.raw`$\dfrac{13}{4}$`, String.raw`$\dfrac{10}{3}$`, String.raw`$4$`],
          answer: String.raw`(B) $\dfrac{25}{8}$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 8$, $AC = 5$ and the altitude from $A$ to $BC$ has length $4$, as shown. Find the radius of the circumcircle of triangle $ABC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.836, 10.764],
            y: [-6.398, 5.202],
            equal: true,
            axes: false,
            circles: [
              { c: [4.964, -0.598], r: 5, tone: "muted" },
            ],
            segments: [
              { from: [6.928, 4], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [9.928, 0], tone: "ink" },
              { from: [9.928, 0], to: [6.928, 4], tone: "ink" },
              { from: [6.928, 4], to: [6.928, 0], tone: "accent", dashed: true },
            ],
            rightAngles: [
              { at: [6.928, 0], a: [3, 0], b: [0, 4], size: 0.4 },
            ],
            labels: [
              { x: 6.928, y: 4, text: "A", pos: "ne", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 9.928, y: 0, text: "C", pos: "e", style: "italic" },
              { x: 6.928, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.464, y: 2, text: "8", pos: "w", style: "plain" },
              { x: 8.428, y: 2, text: "5", pos: "e", style: "plain" },
              { x: 6.928, y: 2, text: "4", pos: "w", style: "plain" },
            ],
            alt: "Triangle ABC inscribed in a circle, with AB = 8, AC = 5 and the altitude AD = 4 drawn to BC.",
          },
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle BAC = 2\angle ABC$, $BC = 12$ and $CA = 9$. Find $AB$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-1, 13],
            y: [-1, 6.217],
            equal: true,
            axes: false,
            segments: [
              { from: [4.667, 5.217], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [12, 0], tone: "ink" },
              { from: [12, 0], to: [4.667, 5.217], tone: "ink" },
            ],
            angles: [
              { at: [4.667, 5.217], from: [0, 0], to: [12, 0], r: 0.9, label: "2θ" },
              { at: [0, 0], from: [12, 0], to: [4.667, 5.217], r: 1.6, label: "θ" },
            ],
            labels: [
              { x: 4.667, y: 5.217, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 12, y: 0, text: "C", pos: "e", style: "italic" },
              { x: 6, y: 0, text: "12", pos: "s", style: "plain" },
              { x: 8.667, y: 2.713, text: "9", pos: "e", style: "plain" },
            ],
            alt: "Triangle ABC with BC = 12 and CA = 9, where angle A is marked 2θ and angle B is marked θ.",
          },
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Triangle $ABC$ is inscribed in a circle of radius $4$, with $\angle ABC = 45^\circ$ and $\angle ACB = 60^\circ$, as shown. Find $BC$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-4.7, 4.7],
            y: [-4.7, 4.7],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 4, tone: "muted" },
            ],
            segments: [
              { from: [1.035, 3.864], to: [-3.864, -1.035], tone: "ink" },
              { from: [-3.864, -1.035], to: [3.864, -1.035], tone: "ink" },
              { from: [3.864, -1.035], to: [1.035, 3.864], tone: "ink" },
              { from: [0, 0], to: [1.035, 3.864], tone: "muted", dashed: true },
            ],
            angles: [
              { at: [-3.864, -1.035], from: [3.864, -1.035], to: [1.035, 3.864], r: 0.9, label: "45°" },
              { at: [3.864, -1.035], from: [1.035, 3.864], to: [-3.864, -1.035], r: 0.8, label: "60°" },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "sw" },
            ],
            labels: [
              { x: 1.035, y: 3.864, text: "A", pos: "n", style: "italic" },
              { x: -3.864, y: -1.035, text: "B", pos: "w", style: "italic" },
              { x: 3.864, y: -1.035, text: "C", pos: "e", style: "italic" },
              { x: 0.518, y: 1.932, text: "4", pos: "w", style: "plain" },
            ],
            alt: "Triangle ABC inscribed in a circle with centre O and radius 4; angle ABC is 45 degrees and angle ACB is 60 degrees.",
          },
          answer: String.raw`$2\left(\sqrt6 + \sqrt2\right)$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $AB = 12$, $AC = 16$ and circumradius $10$, and it is not right-angled. Find $BC$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{28}{5}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $BC = 8$, circumradius $5$ and an acute angle at $A$. Its incentre is $I$. Find the radius of the circle through $B$, $C$ and $I$ (dashed in the diagram).`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-5.6, 5.6],
            y: [-10.1, 5.6],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 5, tone: "muted" },
              { c: [0, -5], r: 4.472, tone: "accent", dashed: true },
            ],
            segments: [
              { from: [-2.347, 4.415], to: [-4, -3], tone: "ink" },
              { from: [-4, -3], to: [4, -3], tone: "ink" },
              { from: [4, -3], to: [-2.347, 4.415], tone: "ink" },
              { from: [0, 0], to: [4, -3], tone: "muted", dashed: true },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "n" },
              { x: -1.082, y: -0.661, label: "I", pos: "ne" },
            ],
            labels: [
              { x: -2.347, y: 4.415, text: "A", pos: "n", style: "italic" },
              { x: -4, y: -3, text: "B", pos: "w", style: "italic" },
              { x: 4, y: -3, text: "C", pos: "e", style: "italic" },
              { x: 0, y: -3, text: "8", pos: "n", style: "plain" },
              { x: 2, y: -1.5, text: "5", pos: "nw", style: "plain" },
            ],
            alt: "Triangle ABC in a circle with centre O and radius 5, BC = 8, angle A acute, its incentre I, and a dashed circle through B, I and C.",
          },
          answer: String.raw`$2\sqrt5$`,
        },
        {
          stem: String.raw`A triangle has integer side lengths and an integer circumradius. Prove that its inradius is also an integer.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $u_a = 2R\cos A = \dfrac{R(b^2 + c^2 - a^2)}{bc}$ is rational and $u_a^2 = 4R^2 - a^2$ is an integer, so $u_a$ is an integer, and $a^2 + u_a^2 = 4R^2 \equiv 0 \pmod 4$ forces $a$ and $u_a$ to be even; then $\cos A + \cos B + \cos C = 1 + \dfrac{r}{R}$ gives $2r = u_a + u_b + u_c - 2R$, an even integer.`,
        },
      ],
    },
    {
      id: "G3-centroid-medians",
      name: String.raw`Centroid and medians`,
      tests: String.raw`Area and length problems about medians: the $2 : 1$ ratio, the six equal areas, Apollonius' formula, and building a triangle out of the medians.`,
      questions: [
        {
          stem: String.raw`Triangle $ABC$ has area $60$. $D$ and $E$ are the midpoints of $BC$ and $CA$, and the medians $AD$ and $BE$ meet at $G$. Find the area of triangle $GDE$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.6, 5],
            equal: true,
            axes: false,
            polygons: [
              { points: [[2.533, 1.467], [3, 0], [3.8, 2.2]], fill: true, tone: "warn" },
            ],
            segments: [
              { from: [1.6, 4.4], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [1.6, 4.4], tone: "ink" },
              { from: [1.6, 4.4], to: [3, 0] },
              { from: [0, 0], to: [3.8, 2.2] },
              { from: [3, 0], to: [3.8, 2.2], tone: "ink", thin: true },
            ],
            labels: [
              { x: 2.533, y: 1.467, text: "G", pos: "w", style: "italic" },
              { x: 1.6, y: 4.4, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.8, y: 2.2, text: "E", pos: "ne", style: "italic" },
            ],
            alt: "Triangle ABC with D the midpoint of BC, E the midpoint of CA, and the medians AD and BE meeting at G. Triangle GDE is shaded.",
          },
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $BC = 6$ and $CA = 8$, and the medians from $A$ and $B$ are perpendicular, as shown. Find $AB$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.8, 6.167],
            y: [-0.8, 6.733],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [4.472, 0], tone: "ink" },
              { from: [4.472, 0], to: [5.367, 5.933], tone: "ink" },
              { from: [5.367, 5.933], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [4.919, 2.966], tone: "accent" },
              { from: [4.472, 0], to: [2.683, 2.966], tone: "accent" },
            ],
            rightAngles: [
              { at: [3.28, 1.978], a: [1.64, 0.989], b: [-0.596, 0.989], size: 0.3 },
            ],
            labels: [
              { x: 3.28, y: 1.978, text: "G", pos: "s", style: "italic" },
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 4.472, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 5.367, y: 5.933, text: "C", pos: "ne", style: "italic" },
              { x: 4.919, y: 2.966, text: "D", pos: "ne", style: "italic" },
              { x: 2.683, y: 2.966, text: "E", pos: "nw", style: "italic" },
              { x: 4.696, y: 1.483, text: "6", pos: "e", style: "plain" },
              { x: 1.61, y: 1.78, text: "8", pos: "nw", style: "plain" },
            ],
            alt: "Triangle ABC with BC = 6 and CA = 8. The medians AD and BE meet at G at a right angle.",
          },
          answer: String.raw`$2\sqrt{5}$`,
        },
        {
          stem: String.raw`The three medians of a triangle have lengths $15$, $36$ and $39$. Find the area of the triangle.`,
          difficulty: 3,
          answer: String.raw`$360$`,
        },
        {
          stem: String.raw`A triangle has sides $7$, $8$ and $9$. Find the length of the median to the side of length $8$.`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $D$ is the midpoint of $BC$, $AB = 3$, $AD = 4$ and $\angle BAD = 90^\circ$, as shown. Find $AC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-3.9, 3.9],
            y: [-0.8, 8.8],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [3, 0], tone: "ink" },
              { from: [3, 0], to: [-3, 8], tone: "ink" },
              { from: [-3, 8], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [0, 4], tone: "accent" },
            ],
            rightAngles: [
              { at: [0, 0], a: [1, 0], b: [0, 1], size: 0.35 },
            ],
            points: [
              { x: 0, y: 4 },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 3, y: 0, text: "B", pos: "se", style: "italic" },
              { x: -3, y: 8, text: "C", pos: "n", style: "italic" },
              { x: 0, y: 4, text: "D", pos: "ne", style: "italic" },
              { x: 1.5, y: 0, text: "3", pos: "s", style: "plain" },
              { x: 0, y: 2, text: "4", pos: "w", style: "plain" },
            ],
            alt: "Triangle ABC with D the midpoint of BC; AB = 3, the median AD = 4, and angle BAD is a right angle.",
          },
          answer: String.raw`$\sqrt{73}$`,
        },
        {
          stem: String.raw`$G$ is the centroid of triangle $ABC$. Prove that if the circumcircles of triangles $GBC$, $GCA$ and $GAB$ all have the same radius, then triangle $ABC$ is equilateral.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $GB = \tfrac23 m_b$, $GC = \tfrac23 m_c$ and $[GBC] = \tfrac13[ABC]$ give the circumradius of $GBC$ as $\dfrac{a\,m_b m_c}{3[ABC]}$, so equal radii mean $\dfrac{a}{m_a} = \dfrac{b}{m_b} = \dfrac{c}{m_c}$; by Apollonius $a^2 m_b^2 - b^2 m_a^2 = \tfrac12(a^2 - b^2)(a^2 + b^2 + c^2)$, so $a = b$, and likewise $b = c$.`,
        },
        {
          stem: String.raw`The medians $AD$, $BE$, $CF$ of triangle $ABC$ are extended to meet its circumcircle again at $A'$, $B'$, $C'$. Prove that
$$AA' + BB' + CC' \ge \tfrac43(AD + BE + CF),$$
with equality only for an equilateral triangle.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the power of $D$ gives $DA' = \dfrac{a^2}{4m_a}$, so $AA' - \tfrac43 m_a = \dfrac{a^2}{4m_a} - \dfrac{m_a}{3} = \dfrac{2a^2 - b^2 - c^2}{6m_a}$ by Apollonius; the three numerators add to $0$ and, since a longer side has a shorter median, they are ordered the same way as $\dfrac{1}{m_a}$, $\dfrac{1}{m_b}$, $\dfrac{1}{m_c}$, so Chebyshev's inequality makes the sum $\ge 0$.`,
        },
      ],
    },
    {
      id: "G3-orthocentre",
      name: String.raw`Orthocentre and altitudes`,
      tests: String.raw`Angle and length problems about the point where the altitudes meet: $\angle BHC = 180^\circ - A$, $AH = 2R\cos A$, and the cyclic quadrilaterals formed by the feet of the altitudes.`,
      questions: [
        {
          stem: String.raw`In acute triangle $ABC$, the altitudes $BE$ and $CF$ meet at $H$. Given that $\angle HBC = 22^\circ$ and $\angle HCB = 35^\circ$, find $\angle BAC$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.7, 6.7],
            y: [-0.7, 6.134],
            equal: true,
            axes: false,
            segments: [
              { from: [3.805, 5.434], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [3.805, 5.434], tone: "ink" },
              { from: [0, 0], to: [5.158, 2.084], tone: "accent" },
              { from: [6, 0], to: [1.974, 2.819], tone: "accent" },
            ],
            angles: [
              { at: [0, 0], from: [6, 0], to: [3.805, 1.537], r: 1.3, label: "22°" },
              { at: [6, 0], from: [3.805, 1.537], to: [0, 0], r: 1.1, label: "35°" },
            ],
            rightAngles: [
              { at: [5.158, 2.084], a: [0.842, -2.084], b: [-5.158, -2.084], size: 0.25 },
              { at: [1.974, 2.819], a: [-1.974, -2.819], b: [4.026, -2.819], size: 0.25 },
            ],
            labels: [
              { x: 3.805, y: 1.537, text: "H", pos: "n", style: "italic" },
              { x: 3.805, y: 5.434, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 5.158, y: 2.084, text: "E", pos: "e", style: "italic" },
              { x: 1.974, y: 2.819, text: "F", pos: "nw", style: "italic" },
            ],
            alt: "Acute triangle ABC with the altitudes BE and CF meeting at H. Angle HBC is 22 degrees and angle HCB is 35 degrees.",
          },
          answer: String.raw`$57^\circ$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$ with orthocentre $H$, the length $AH$ is $\sqrt{3}$ times the length $BC$. Find $\angle BAC$.`,
          difficulty: 2,
          answer: String.raw`$30^\circ$`,
        },
        {
          stem: String.raw`Let $H$ be the orthocentre of an acute triangle $ABC$ with circumradius $R$. Prove that $HA + HB + HC \le 3R$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $HA = 2R\cos A$ (and similarly), so $HA + HB + HC = 2R(\cos A + \cos B + \cos C) = 2(R + r)$, and Euler's inequality $R \ge 2r$ finishes it.`,
        },
        {
          stem: String.raw`In acute triangle $ABC$ with orthocentre $H$, $\angle BHC = 3\angle BAC$, as shown. Find $\angle BAC$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.7, 6.7],
            y: [-0.6, 7.1],
            equal: true,
            axes: false,
            segments: [
              { from: [4.098, 7.098], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [4.098, 7.098], tone: "ink" },
              { from: [0, 0], to: [5.598, 1.5], tone: "accent" },
              { from: [6, 0], to: [1.5, 2.598], tone: "accent" },
            ],
            angles: [
              { at: [4.098, 7.098], from: [0, 0], to: [6, 0], r: 0.9, label: "θ" },
              { at: [4.098, 1.098], from: [0, 0], to: [6, 0], r: 0.55, label: "3θ" },
            ],
            rightAngles: [
              { at: [5.598, 1.5], a: [0.402, -1.5], b: [-5.598, -1.5], size: 0.25 },
              { at: [1.5, 2.598], a: [2.598, 4.5], b: [4.5, -2.598], size: 0.25 },
            ],
            labels: [
              { x: 4.098, y: 7.098, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 5.598, y: 1.5, text: "E", pos: "e", style: "italic" },
              { x: 1.5, y: 2.598, text: "F", pos: "w", style: "italic" },
              { x: 4.098, y: 1.098, text: "H", pos: "n", style: "italic" },
            ],
            alt: "Acute triangle ABC with altitudes BE and CF meeting at H; angle BAC is marked θ and angle BHC is marked 3θ.",
          },
          answer: String.raw`$45^\circ$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has orthocentre $H$, with $AH = 6$ and $BC = 8$, as shown. Find the circumradius of triangle $ABC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.7, 8.7],
            y: [-0.9, 8.6],
            equal: true,
            axes: false,
            segments: [
              { from: [4.598, 7.964], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [8, 0], tone: "ink" },
              { from: [8, 0], to: [4.598, 7.964], tone: "ink" },
              { from: [4.598, 7.964], to: [4.598, 0], tone: "accent" },
              { from: [0, 0], to: [6.766, 2.89], tone: "muted" },
              { from: [8, 0], to: [2, 3.464], tone: "muted" },
            ],
            rightAngles: [
              { at: [4.598, 0], a: [3.402, 0], b: [0, 7.964], size: 0.3 },
            ],
            points: [
              { x: 4.598, y: 1.964, label: "H", pos: "e" },
            ],
            labels: [
              { x: 4.598, y: 7.964, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 8, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 4.598, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.598, y: 4.964, text: "6", pos: "w", style: "plain" },
              { x: 6.6, y: 0, text: "8", pos: "s", style: "plain" },
            ],
            alt: "Acute triangle ABC with its three altitudes meeting at the orthocentre H; AH = 6 and BC = 8.",
          },
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, the orthocentre $H$ is the midpoint of the altitude $AD$, as shown. Find the largest possible value of $\cos\angle BAC$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.8, 5.6],
            equal: true,
            axes: false,
            segments: [
              { from: [3.508, 4.181], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [3.508, 4.181], tone: "ink" },
              { from: [3.508, 4.181], to: [3.508, 0], tone: "accent" },
              { from: [0, 0], to: [4.428, 2.638], tone: "muted" },
            ],
            rightAngles: [
              { at: [3.508, 0], a: [2.492, 0], b: [0, 4.181], size: 0.28 },
            ],
            points: [
              { x: 3.508, y: 2.091, label: "H", pos: "e" },
            ],
            labels: [
              { x: 3.508, y: 4.181, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3.508, y: 0, text: "D", pos: "s", style: "italic" },
            ],
            alt: "Acute triangle ABC with the altitude AD; the orthocentre H is the midpoint of AD.",
          },
          answer: String.raw`$\dfrac{1}{3}$`,
        },
        {
          stem: String.raw`Acute triangle $ABC$ has altitudes $AD$, $BE$, $CF$, as shown. Prove that the inradius of triangle $DEF$ is at most half the inradius of triangle $ABC$, with equality only for an equilateral triangle.`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.7, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[2.463, 0], [4.026, 2.819], [1.153, 2.364]], fill: true, tone: "warn" },
            ],
            segments: [
              { from: [2.463, 5.051], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [6, 0], tone: "ink" },
              { from: [6, 0], to: [2.463, 5.051], tone: "ink" },
              { from: [2.463, 5.051], to: [2.463, 0], tone: "muted", dashed: true },
              { from: [0, 0], to: [4.026, 2.819], tone: "muted", dashed: true },
              { from: [6, 0], to: [1.153, 2.364], tone: "muted", dashed: true },
            ],
            labels: [
              { x: 2.463, y: 5.051, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.463, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.026, y: 2.819, text: "E", pos: "ne", style: "italic" },
              { x: 1.153, y: 2.364, text: "F", pos: "nw", style: "italic" },
            ],
            alt: "Acute triangle ABC with altitudes AD, BE, CF; the triangle DEF formed by their feet is shaded.",
          },
          answer: String.raw`**Proof.** Key idea: the orthocentre $H$ is the incentre of $DEF$, at distance $2R\cos A\cos B\cos C$ from its sides, while $r = 4R\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}$; and $\cos A\cos B = \tfrac12\left(\cos(A - B) - \cos C\right) \le \sin^2\frac{C}{2}$, so multiplying the three such inequalities (all sides positive in an acute triangle) gives $(\cos A\cos B\cos C)^2 \le \left(\sin\frac{A}{2}\sin\frac{B}{2}\sin\frac{C}{2}\right)^2$.`,
        },
      ],
    },
    {
      id: "G3-euler-line",
      name: String.raw`Euler line and nine-point circle`,
      tests: String.raw`Problems about the line through $O$, $G$, $H$ and the nine-point centre $N$: the ratios $OG : GH = 1 : 2$ and $ON = NH$, and conditions for the Euler line to have a special position.`,
      questions: [
        {
          stem: String.raw`In a triangle, $O$ is the circumcentre, $G$ the centroid, $H$ the orthocentre and $N$ the centre of the nine-point circle. Given that $OH = 12$, find $GN$.`,
          difficulty: 1,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`In acute triangle $ABC$, the Euler line is parallel to $BC$. Given that $\tan B = 2$, find $\tan C$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{3}{2}$`,
        },
        {
          stem: String.raw`Find all non-equilateral triangles $ABC$ whose Euler line passes through the vertex $A$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly those with $AB = AC$ or $\angle BAC = 90^\circ$. **Proof.** Key idea: $\angle BAH = \angle OAC = 90^\circ - B$, so lines $AH$ and $AO$ are reflections of each other in the bisector of angle $A$; they coincide only if both are that bisector (forcing $AB = AC$), unless $H = A$ (a right angle at $A$).`,
        },
        {
          stem: String.raw`Triangle $ABC$ has orthocentre $H$. Which of the following points does **not** always lie on the nine-point circle of the triangle?`,
          difficulty: 1,
          choices: [String.raw`the midpoint of $AB$`, String.raw`the foot of the altitude from $C$`, String.raw`the midpoint of $AH$`, String.raw`the centroid`, String.raw`the midpoint of $BH$`],
          answer: String.raw`(D) the centroid`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle BAC = 60^\circ$, $AB = 8$ and $AC = 5$. Find the distance between the circumcentre $O$ and the orthocentre $H$, shown in the diagram.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.7, 7.7],
            y: [-0.8, 5.7],
            equal: true,
            axes: false,
            segments: [
              { from: [6.286, 4.949], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [7, 0], tone: "ink" },
              { from: [7, 0], to: [6.286, 4.949], tone: "ink" },
              { from: [3.5, 2.021], to: [6.286, 0.907], tone: "warn", dashed: true },
            ],
            angles: [
              { at: [6.286, 4.949], from: [0, 0], to: [7, 0], r: 0.7, label: "60°" },
            ],
            points: [
              { x: 3.5, y: 2.021, label: "O", pos: "s" },
              { x: 6.286, y: 0.907, label: "H", pos: "w" },
            ],
            labels: [
              { x: 6.286, y: 4.949, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 7, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3.143, y: 2.474, text: "8", pos: "nw", style: "plain" },
              { x: 6.643, y: 2.474, text: "5", pos: "e", style: "plain" },
            ],
            alt: "Triangle ABC with angle A = 60 degrees, AB = 8 and AC = 5, its circumcentre O and orthocentre H joined by a dashed segment.",
          },
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Let $N$ be the centre of the nine-point circle of triangle $ABC$ (in the diagram $N$ lies on line $BC$). Prove that $N$ lies on line $BC$ if and only if $|\angle B - \angle C| = 90^\circ$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.7, 7.5],
            y: [-3.3, 4.1],
            equal: true,
            axes: false,
            circles: [
              { c: [4.445, 0], r: 1.945, tone: "good" },
            ],
            segments: [
              { from: [6.389, 2.979], to: [0, 0], tone: "ink" },
              { from: [0, 0], to: [5, 0], tone: "ink" },
              { from: [5, 0], to: [6.389, 2.979], tone: "ink" },
              { from: [2.5, 2.979], to: [6.389, -2.979], tone: "warn", dashed: true },
            ],
            points: [
              { x: 2.5, y: 2.979, label: "O", pos: "s" },
              { x: 6.389, y: -2.979, label: "H", pos: "e" },
              { x: 4.445, y: 0, label: "N", pos: "sw" },
            ],
            labels: [
              { x: 6.389, y: 2.979, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 5, y: 0, text: "C", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC with an obtuse angle at C, its circumcentre O, orthocentre H and nine-point centre N; here N lies on line BC, and the nine-point circle is drawn.",
          },
          answer: String.raw`**Proof.** Key idea: measured on $A$'s side of $BC$, the signed distances of $O$ and $H$ from $BC$ are $R\cos A$ and $2R\cos B\cos C$, so that of $N$ is $\tfrac{R}{2}(\cos A + 2\cos B\cos C) = \tfrac{R}{2}\cos(B - C)$, using $\cos A = -\cos(B + C)$.`,
        },
        {
          stem: String.raw`The Euler line of a non-equilateral triangle $ABC$ is parallel to the tangent to its circumcircle at $A$. Find all possible values of $\angle BAC$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Every angle strictly between $0^\circ$ and $60^\circ$. **Proof.** Key idea: with the circumcentre $O$ as origin, $\vec{OH} = \vec{OA} + \vec{OB} + \vec{OC}$, so the condition $OA \perp OH$ reads $1 + \cos 2B + \cos 2C = 0$, i.e. $\cos A\cos(B - C) = \tfrac12$; this forces $\cos A > \tfrac12$ (equality needs $B = C$, the equilateral case), and conversely any $\angle A < 60^\circ$ works with $B - C$ chosen so that $\cos(B - C) = \dfrac{1}{2\cos A}$.`,
        },
      ],
    },
    {
      id: "G3-trig-identities",
      name: String.raw`Trigonometric identities in a triangle`,
      tests: String.raw`Using $A + B + C = 180^\circ$ with the sine and cosine rules: ratios of sines are ratios of sides, the tangent identity, and proving symmetric identities.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $\sin A : \sin B : \sin C = 3 : 5 : 7$. What is the largest angle of the triangle?`,
          difficulty: 1,
          choices: [String.raw`$60^\circ$`, String.raw`$84^\circ$`, String.raw`$90^\circ$`, String.raw`$105^\circ$`, String.raw`$120^\circ$`],
          answer: String.raw`(E) $120^\circ$`,
        },
        {
          stem: String.raw`The angles of triangle $ABC$ satisfy $\tan A : \tan B : \tan C = 1 : 2 : 3$. Find $\angle A$.`,
          difficulty: 2,
          answer: String.raw`$45^\circ$`,
        },
        {
          stem: String.raw`Prove that in every triangle $ABC$,
$$\sin^2 A + \sin^2 B + \sin^2 C = 2 + 2\cos A\cos B\cos C,$$
and deduce that the triangle is right-angled if and only if $\sin^2 A + \sin^2 B + \sin^2 C = 2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: write $\sin^2 A + \sin^2 B = 1 - \tfrac12(\cos 2A + \cos 2B) = 1 - \cos(A + B)\cos(A - B) = 1 + \cos C\cos(A - B)$, add $\sin^2 C = 1 - \cos^2 C$ with $\cos C = -\cos(A + B)$, and factor; then the sum is $2$ exactly when one cosine is $0$.`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\cos A = \dfrac35$ and $\cos B = \dfrac{5}{13}$. Find $\cos C$.`,
          difficulty: 1,
          answer: String.raw`$\dfrac{33}{65}$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\tan\dfrac{A}{2} = \dfrac13$ and $\tan\dfrac{B}{2} = \dfrac25$. The side lengths are whole numbers with no common factor greater than $1$. Find the perimeter of the triangle.`,
          difficulty: 2,
          answer: String.raw`$330$`,
        },
        {
          stem: String.raw`Prove that triangle $ABC$ is right-angled if and only if
$$\sin A + \sin B + \sin C = 1 + \cos A + \cos B + \cos C.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: using sum-to-product on $\sin A + \sin B$ and $\cos A + \cos B$, the difference of the two sides factors as $2\left(\cos\frac{C}{2} - \sin\frac{C}{2}\right)\left(\cos\frac{A - B}{2} - \cos\frac{C}{2}\right)$, which vanishes exactly when $C = 90^\circ$ or $|A - B| = C$.`,
        },
        {
          stem: String.raw`Find the smallest number $M$ such that $2\cos A + 3\cos B + 12\cos C \le M$ for every triangle $ABC$, and prove that it is the smallest.`,
          difficulty: 4,
          answer: String.raw`$M = 13$ (approached as $A \to 180^\circ$, but never reached). **Proof.** Key idea: the vector inequality with $x = \tfrac52$, $y = 2$, $z = \tfrac12$ gives $2\cos A + \tfrac52\cos B + 10\cos C \le \tfrac{21}{2}$, and $\tfrac12\cos B + 2\cos C < \tfrac52$; the choice $yz : zx : xy = 2 : 3 : 12$ only gives $\tfrac{53}{4}$, which is never approached because $3$, $2$, $\tfrac12$ are not the sides of a triangle.`,
        },
      ],
    },
  ],
});
