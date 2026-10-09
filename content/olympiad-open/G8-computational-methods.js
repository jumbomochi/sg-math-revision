H2.addTopic({
  id: "G8",
  title: "Computational Methods in Geometry",
  summary: String.raw`Trigonometric Ceva and the sine-rule bash, complex numbers on the unit circle, barycentric coordinates, vectors with a smart origin, choosing a coordinate frame, and length bashing with Stewart, Ptolemy and power of a point — plus when to bash and when to look for a synthetic proof.`,
  concepts: [
    {
      title: String.raw`Trigonometric Ceva and the ratio lemma`,
      body: String.raw`Cevians $AD$, $BE$, $CF$ of triangle $ABC$ (with $D$, $E$, $F$ on the sides) are concurrent if and only if
$$\frac{\sin\angle BAD}{\sin\angle DAC}\cdot\frac{\sin\angle CBE}{\sin\angle EBA}\cdot\frac{\sin\angle ACF}{\sin\angle FCB} = 1.$$

- Go round the triangle in one direction: at each vertex, the part of the angle next to the side you came along goes on top.
- It turns an angle problem into a trigonometric equation. If the splits at $B$ and $C$ are known, the split $x$, $A - x$ at $A$ satisfies $\dfrac{\sin x}{\sin(A - x)} = k$. The left side increases with $x$, so there is exactly one solution: guess it, then prove it with identities.
- **Ratio lemma**: for $D$ on $BC$, $\dfrac{BD}{DC} = \dfrac{AB\sin\angle BAD}{AC\sin\angle DAC}$ (compare the areas of triangles $ABD$ and $ADC$).
- Identities that come up: $\sin 2x = 2\sin x\cos x$, $\sin x = \cos(90^\circ - x)$, and $\sin x\sin(60^\circ - x)\sin(60^\circ + x) = \tfrac14\sin 3x$.`,
      figure: {
        type: "plot",
        x: [-0.7, 6.7],
        y: [-0.7, 5],
        equal: true,
        axes: false,
        polygons: [
          {
            points: [
              [1.9, 4.3],
              [0, 0],
              [6, 0],
            ],
            fill: true,
            tone: "muted",
          },
        ],
        segments: [
          { from: [1.9, 4.3], to: [2.824, 0], tone: "accent" },
          { from: [0, 0], to: [3.95, 2.15], tone: "accent" },
          { from: [6, 0], to: [0.894, 2.024], tone: "accent" },
        ],
        angles: [
          { at: [1.9, 4.3], from: [0, 0], to: [2.528, 1.376], r: 1, label: "α₁" },
          { at: [1.9, 4.3], from: [2.528, 1.376], to: [6, 0], r: 0.7, label: "α₂" },
          { at: [0, 0], from: [6, 0], to: [2.528, 1.376], r: 1.25, label: "β₁" },
          { at: [0, 0], from: [2.528, 1.376], to: [1.9, 4.3], r: 0.8, label: "β₂" },
          { at: [6, 0], from: [1.9, 4.3], to: [2.528, 1.376], r: 1.25, label: "γ₁" },
          { at: [6, 0], from: [2.528, 1.376], to: [0, 0], r: 0.85, label: "γ₂" },
        ],
        points: [
          { x: 2.528, y: 1.376, label: "P", pos: "se" },
        ],
        labels: [
          { x: 1.9, y: 4.3, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
          { x: 2.824, y: 0, text: "D", pos: "s", style: "italic" },
          { x: 3.95, y: 2.15, text: "E", pos: "ne", style: "italic" },
          { x: 0.894, y: 2.024, text: "F", pos: "nw", style: "italic" },
        ],
        caption: String.raw`Concurrent at $P$ exactly when $\dfrac{\sin\alpha_1}{\sin\alpha_2}\cdot\dfrac{\sin\beta_1}{\sin\beta_2}\cdot\dfrac{\sin\gamma_1}{\sin\gamma_2} = 1$, where $\alpha_1 = \angle BAD$, $\beta_1 = \angle CBE$, $\gamma_1 = \angle ACF$.`,
        alt: "Triangle ABC with cevians AD, BE, CF meeting at P. At each vertex the angle is split into two parts labelled alpha 1 and alpha 2 at A, beta 1 and beta 2 at B, gamma 1 and gamma 2 at C.",
      },
    },
    {
      title: String.raw`The sine-rule bash`,
      body: String.raw`- Call the unknown angle $x$. Then every angle in the figure is a simple expression in $x$ and the given angles.
- Use the sine rule $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C} = 2R$ in two triangles that share a side, and write that side (or a given pair of equal lengths) in two ways. This gives one equation in $x$.
- Simplify with $2\sin u\sin v = \cos(u - v) - \cos(u + v)$ and $2\sin u\cos v = \sin(u + v) + \sin(u - v)$.
- Check that the equation has only one solution in the allowed range (typically one side increases and the other decreases in $x$), so a guessed value really is the answer.
- For a cevian $AD$: $\dfrac{BD}{\sin\angle BAD} = \dfrac{AD}{\sin B}$ and $\dfrac{DC}{\sin\angle DAC} = \dfrac{AD}{\sin C}$; dividing removes $AD$.`,
      figure: {
        type: "plot",
        x: [-0.7, 7.1],
        y: [-0.7, 4.3],
        equal: true,
        axes: false,
        polygons: [
          {
            points: [
              [2.2, 3.6],
              [0, 0],
              [3.9, 0],
            ],
            fill: true,
            tone: "muted",
          },
          {
            points: [
              [2.2, 3.6],
              [3.9, 0],
              [6.4, 0],
            ],
            fill: true,
            tone: "good",
          },
        ],
        segments: [
          { from: [2.2, 3.6], to: [3.9, 0], tone: "accent" },
        ],
        angles: [
          { at: [2.2, 3.6], from: [3.9, 0], to: [6.4, 0], r: 0.8, label: "x" },
          { at: [0, 0], from: [6.4, 0], to: [2.2, 3.6], r: 0.8, label: "β" },
          { at: [6.4, 0], from: [2.2, 3.6], to: [0, 0], r: 0.9, label: "γ" },
        ],
        labels: [
          { x: 2.2, y: 3.6, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 6.4, y: 0, text: "C", pos: "se", style: "italic" },
          { x: 3.9, y: 0, text: "D", pos: "s", style: "italic" },
          { x: 3.05, y: 1.8, text: "AD", pos: "e", style: "plain", tone: "accent" },
        ],
        caption: String.raw`Write the shared side $AD$ with the sine rule in triangle $ABD$ and again in triangle $ADC$; equating the two expressions gives one equation in $x$.`,
        alt: "Triangle ABC split by a cevian AD into triangles ABD and ADC that share the side AD. The unknown angle x is marked at A in triangle ADC; the angles beta at B and gamma at C are marked.",
      },
    },
    {
      title: String.raw`Complex numbers on the unit circle`,
      body: String.raw`Make the important circle the unit circle with centre $0$. Every point $a$ on it has $\bar a = \dfrac1a$, so conjugates are easy to compute.

- Chords: $AB \parallel CD \iff ab = cd$ and $AB \perp CD \iff ab + cd = 0$.
- Chords $AB$ and $CD$ meet at $\dfrac{ab(c + d) - cd(a + b)}{ab - cd}$; the tangents at $A$ and $B$ meet at $\dfrac{2ab}{a + b}$.
- The foot of the perpendicular from any point $z$ to chord $AB$ is $\tfrac12\left(a + b + z - ab\,\bar z\right)$.
- For a triangle $ABC$ on the circle: centroid $\tfrac13(a + b + c)$, orthocentre $h = a + b + c$, nine-point centre $\tfrac12(a + b + c)$.
- A regular $n$-gon has vertices at the roots of $z^n = 1$ (after a rotation), so $\prod_k (z - \omega^k) = z^n - 1$ and products of distances become $|z^n - 1|$.`,
      figure: {
        type: "plot",
        x: [-1.35, 1.35],
        y: [-2.03, 1.35],
        equal: true,
        axes: false,
        circles: [
          { c: [0, 0], r: 1, tone: "accent" },
        ],
        segments: [
          { from: [-0.643, -0.766], to: [0.94, -0.342], tone: "ink" },
          { from: [-0.342, 0.94], to: [0.064, -0.577], tone: "warn", dashed: true },
          { from: [-0.643, -0.766], to: [0.451, -1.684], tone: "good" },
          { from: [0.94, -0.342], to: [0.451, -1.684], tone: "good" },
        ],
        rightAngles: [
          { at: [0.064, -0.577], a: [-0.406, 1.516], b: [0.875, 0.235], size: 0.09 },
        ],
        points: [
          { x: 0, y: 0, label: "0", pos: "ne" },
          { x: 0.064, y: -0.577 },
          { x: 0.451, y: -1.684 },
        ],
        labels: [
          { x: -0.643, y: -0.766, text: "a", pos: "w", style: "italic" },
          { x: 0.94, y: -0.342, text: "b", pos: "e", style: "italic" },
          { x: -0.342, y: 0.94, text: "p", pos: "n", style: "italic" },
          { x: 0.064, y: -0.577, text: "F", pos: "s", style: "italic" },
          { x: 0.451, y: -1.684, text: "T", pos: "s", style: "italic" },
        ],
        caption: String.raw`On the unit circle: the foot from $p$ to chord $ab$ is $F = \tfrac12\left(a + b + p - ab\,\bar p\right)$, and the tangents at $a$ and $b$ meet at $T = \dfrac{2ab}{a + b}$.`,
        alt: "Unit circle centred at 0 with a chord ab, a point p on the circle and the foot F of the perpendicular from p to the chord; the tangents at a and b meet at T below the circle.",
      },
    },
    {
      title: String.raw`Barycentric coordinates`,
      body: String.raw`Every point of the plane can be written $P = uA + vB + wC$ with $u + v + w = 1$; we write $P = (u : v : w)$, and any multiple $(ku : kv : kw)$ names the same point. For $P$ inside, $u : v : w = [PBC] : [PCA] : [PAB]$.

- Centroid $(1 : 1 : 1)$; incentre $(a : b : c)$; the point $D$ on $BC$ with $BD : DC = m : n$ is $(0 : n : m)$.
- The cevian $AP$ meets $BC$ at $(0 : v : w)$, so $BD : DC = w : v$. Cevians to $(0 : v : w)$, $(u : 0 : w)$, $(u : v : 0)$ always meet at $(u : v : w)$ — this is Ceva's theorem.
- **Area**: for normalised points $P_i = (u_i, v_i, w_i)$, $\dfrac{[P_1P_2P_3]}{[ABC]}$ is the determinant of the $3 \times 3$ matrix with rows $(u_i, v_i, w_i)$ (up to sign). It is $0$ exactly when the three points are collinear.
- A line is $\{(x : y : z) : px + qy + rz = 0\}$, and three lines are concurrent when the determinant of their coefficients is $0$.`,
      figure: {
        type: "plot",
        x: [-0.6, 6.6],
        y: [-0.6, 4.8],
        equal: true,
        axes: false,
        polygons: [
          {
            points: [
              [2.9, 1.05],
              [0, 0],
              [6, 0],
            ],
            fill: true,
            tone: "accent",
          },
          {
            points: [
              [2.9, 1.05],
              [6, 0],
              [2, 4.2],
            ],
            fill: true,
            tone: "good",
          },
          {
            points: [
              [2.9, 1.05],
              [2, 4.2],
              [0, 0],
            ],
            fill: true,
            tone: "warn",
          },
        ],
        points: [
          { x: 2.9, y: 1.05, label: "P", pos: "ne" },
        ],
        labels: [
          { x: 2, y: 4.2, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
          { x: 2.967, y: 0.35, text: "u", pos: "c", style: "italic" },
          { x: 3.633, y: 1.75, text: "v", pos: "c", style: "italic" },
          { x: 1.633, y: 1.75, text: "w", pos: "c", style: "italic" },
        ],
        caption: String.raw`$P = (u : v : w)$ with $u : v : w = [PBC] : [PCA] : [PAB]$, and $P = uA + vB + wC$ when $u + v + w = 1$.`,
        alt: "Triangle ABC with an interior point P joined to the vertices. The three triangles PBC, PCA and PAB are shaded in different colours and labelled u, v and w.",
      },
    },
    {
      title: String.raw`Vectors with a smart origin`,
      body: String.raw`- Write $\mathbf a, \mathbf b, \ldots$ for position vectors from an origin you choose. Midpoint $\tfrac12(\mathbf a + \mathbf b)$; centroid $\tfrac13(\mathbf a + \mathbf b + \mathbf c)$; the point dividing $AB$ in the ratio $m : n$ is $\dfrac{n\mathbf a + m\mathbf b}{m + n}$.
- **Collinearity**: $X$ is on line $AB$ iff $\mathbf x = (1 - t)\mathbf a + t\mathbf b$ for some real $t$. To find where two lines meet, write the point both ways and compare coefficients of two non-parallel vectors.
- **Dot product**: $|\mathbf x - \mathbf y|^2 = |\mathbf x|^2 - 2\,\mathbf x\cdot\mathbf y + |\mathbf y|^2$, and two directions are perpendicular iff their dot product is $0$.
- **Circumcentre as origin**: $|\mathbf a| = |\mathbf b| = |\mathbf c| = R$, $2\,\mathbf a\cdot\mathbf b = 2R^2 - AB^2$, and the orthocentre is $\mathbf h = \mathbf a + \mathbf b + \mathbf c$ (Euler line: $OG : GH = 1 : 2$).
- **Sums of squares**: for every point $P$, $PA^2 + PB^2 + PC^2 = 3PG^2 + GA^2 + GB^2 + GC^2$, and $GA^2 + GB^2 + GC^2 = \tfrac13(a^2 + b^2 + c^2)$.`,
      figure: {
        type: "plot",
        x: [-0.7, 7.7],
        y: [-0.7, 5.3],
        equal: true,
        axes: false,
        polygons: [
          {
            points: [
              [1, 4.6],
              [0, 0],
              [7, 0],
            ],
            fill: true,
            tone: "muted",
          },
        ],
        segments: [
          { from: [4.392, 1.77], to: [-0.09, 1.155], tone: "warn", dashed: true },
        ],
        points: [
          { x: 3.5, y: 1.648, label: "O", pos: "s" },
          { x: 2.667, y: 1.533, label: "G", pos: "n" },
          { x: 1, y: 1.304, label: "H", pos: "n" },
        ],
        labels: [
          { x: 1, y: 4.6, text: "A", pos: "n", style: "italic" },
          { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
          { x: 7, y: 0, text: "C", pos: "se", style: "italic" },
        ],
        caption: String.raw`With the circumcentre $O$ as origin, $\mathbf g = \tfrac13(\mathbf a + \mathbf b + \mathbf c)$ and $\mathbf h = \mathbf a + \mathbf b + \mathbf c$, so $O$, $G$, $H$ lie on one line with $OG : GH = 1 : 2$.`,
        alt: "Acute triangle ABC with its circumcentre O, centroid G and orthocentre H on a dashed line, the Euler line, with G between O and H.",
      },
    },
    {
      title: String.raw`Choosing a coordinate frame`,
      body: String.raw`- **A triangle**: put the foot of an altitude at the origin, so $A = (0, a)$, $B = (b, 0)$, $C = (c, 0)$. Then the orthocentre is $\left(0, -\dfrac{bc}{a}\right)$ and the circumcentre is $\left(\dfrac{b + c}{2}, \dfrac{a^2 + bc}{2a}\right)$.
- **A circle**: centre at the origin. **Perpendicular lines** (chords, diagonals, a rectangle's axes of symmetry): use them as the axes.
- **Loci from squared distances**: in $k_1PA_1^2 + k_2PA_2^2 + \cdots = \text{const}$ the $x^2 + y^2$ terms have total coefficient $k_1 + k_2 + \cdots$. If this is not $0$ the locus is a circle; if it is $0$ the locus is a line (or empty, or the whole plane).
- So $PA^2 - PB^2 = \text{const}$ is a line perpendicular to $AB$, and $PA = kPB$ with $k \ne 1$ is a circle (the Apollonius circle).`,
      figure: {
        type: "plot",
        x: [-3, 5.2],
        y: [-0.8, 5.9],
        equal: true,
        originLabel: false,
        polygons: [
          {
            points: [
              [0, 5],
              [-2, 0],
              [4, 0],
            ],
            fill: true,
            tone: "muted",
          },
        ],
        segments: [
          { from: [0, 5], to: [0, 0], tone: "warn", dashed: true },
          { from: [-2, 0], to: [1.659, 2.927], tone: "warn", dashed: true },
        ],
        rightAngles: [
          { at: [0, 0], a: [1, 0], b: [0, 1], size: 0.22 },
        ],
        points: [
          { x: 0, y: 5, label: "A(0, a)", pos: "ne" },
          { x: -2, y: 0, label: "B(b, 0)", pos: "nw" },
          { x: 4, y: 0, label: "C(c, 0)", pos: "n" },
          { x: 0, y: 1.6, label: "H", pos: "w" },
        ],
        caption: String.raw`Origin at the foot of the altitude from $A$: the orthocentre is $H = \left(0, -\dfrac{bc}{a}\right)$. Here $a = 5$, $b = -2$, $c = 4$ give $H = \left(0, \tfrac85\right)$.`,
        alt: "Coordinate axes with A on the positive y-axis, B on the negative x-axis and C on the positive x-axis. The altitude from A lies along the y-axis and the altitude from B meets it at the orthocentre H.",
      },
    },
    {
      title: String.raw`Length bashing: Stewart, Ptolemy, power of a point`,
      body: String.raw`- **Stewart**: for $D$ on $BC$ with $BD = m$, $DC = n$, $AD = d$: $b^2m + c^2n = a(d^2 + mn)$. Special cases: the median $m_a^2 = \tfrac14(2b^2 + 2c^2 - a^2)$, and the angle bisector $AD^2 = bc - BD\cdot DC$.
- **Ptolemy**: in a cyclic quadrilateral $ABCD$, $AC\cdot BD = AB\cdot CD + AD\cdot BC$ (for any quadrilateral, $\le$ holds). Together with $\dfrac{AC}{BD} = \dfrac{AB\cdot AD + CB\cdot CD}{BA\cdot BC + DA\cdot DC}$ it gives both diagonals from the four sides.
- **Power of a point**: chords $AB$ and $CD$ through $X$ satisfy $XA\cdot XB = XC\cdot XD$ (and $XT^2$ for a tangent $XT$).
- **Chords**: a chord that subtends an inscribed angle $\theta$ has length $2R\sin\theta$, so in a regular polygon every length is a sine.
- Chain the tools: Stewart gives a cevian's length, then power of a point gives where the cevian meets a circle again.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 6.6],
          y: [-0.6, 4.2],
          equal: true,
          axes: false,
          polygons: [
            {
              points: [
                [2.1, 3.6],
                [0, 0],
                [6, 0],
              ],
              fill: true,
              tone: "muted",
            },
          ],
          segments: [
            { from: [2.1, 3.6], to: [3.6, 0], tone: "accent" },
          ],
          labels: [
            { x: 2.1, y: 3.6, text: "A", pos: "n", style: "italic" },
            { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
            { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
            { x: 3.6, y: 0, text: "D", pos: "s", style: "italic" },
            { x: 1.05, y: 1.8, text: "c", pos: "nw", style: "italic" },
            { x: 4.05, y: 1.8, text: "b", pos: "ne", style: "italic" },
            { x: 2.85, y: 1.8, text: "d", pos: "e", style: "italic", tone: "accent" },
            { x: 1.8, y: 0, text: "m", pos: "s", style: "italic" },
            { x: 4.8, y: 0, text: "n", pos: "s", style: "italic" },
          ],
          alt: "Stewart's theorem: triangle ABC with a cevian AD of length d; D splits BC into BD = m and DC = n; AB = c and AC = b.",
        },
        {
          type: "plot",
          x: [-2.45, 2.45],
          y: [-2.45, 2.45],
          equal: true,
          axes: false,
          circles: [
            { c: [0, 0], r: 2, tone: "muted" },
          ],
          polygons: [
            {
              points: [
                [-0.684, 1.879],
                [-1.879, -0.684],
                [0.518, -1.932],
                [1.879, 0.684],
              ],
              fill: true,
              tone: "accent",
            },
          ],
          segments: [
            { from: [-0.684, 1.879], to: [0.518, -1.932], tone: "warn", dashed: true },
            { from: [-1.879, -0.684], to: [1.879, 0.684], tone: "warn", dashed: true },
          ],
          labels: [
            { x: -0.684, y: 1.879, text: "A", pos: "n", style: "italic" },
            { x: -1.879, y: -0.684, text: "B", pos: "w", style: "italic" },
            { x: 0.518, y: -1.932, text: "C", pos: "s", style: "italic" },
            { x: 1.879, y: 0.684, text: "D", pos: "e", style: "italic" },
          ],
          caption: String.raw`Stewart: $b^2m + c^2n = a(d^2 + mn)$ with $a = m + n$. Ptolemy: $AC\cdot BD = AB\cdot CD + AD\cdot BC$ for a cyclic quadrilateral.`,
          alt: "Ptolemy's theorem: a cyclic quadrilateral ABCD with its two diagonals dashed.",
        },
      ],
    },
    {
      title: String.raw`When to bash and when to look for a synthetic proof`,
      body: String.raw`- **Bash** when the figure is fixed by a few free quantities and the claim is an equation (a length, an angle, a collinearity, a concurrency, a perpendicularity).
- Match the method to the data: given **angles** → trig Ceva or the sine rule; points on **one circle** → complex numbers; **ratios on the sides** and areas → barycentrics; **right angles**, squared lengths, loci → vectors or Cartesian coordinates.
- Be wary when there are several circles with unrelated centres, or tangencies between circles: the algebra grows quickly, and a synthetic idea (similar triangles, spiral similarity, inversion) is usually shorter.
- Before a long computation, test the claim on a special case (equilateral, isosceles, right-angled). It checks your algebra and sometimes reveals the synthetic idea.
- Write a bash up cleanly: state the set-up, show the key identity, and justify every division (no zero denominators, which points are distinct).`,
    },
  ],
  archetypes: [
    {
      id: "G8-trig-ceva",
      name: String.raw`Trig Ceva and the sine-rule bash`,
      tests: String.raw`Finding an angle at a point inside a triangle (or at a point on a side given equal lengths), and proving that cevians defined by angles are concurrent. The data are angles: call the unknown $x$, apply trig Ceva or the sine rule twice, and solve the trigonometric equation.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $AB = 6$ and $AC = 4\sqrt2$. A point $D$ on side $BC$ satisfies $\angle BAD = 30^\circ$ and $\angle DAC = 45^\circ$, as shown. Find $\dfrac{BD}{DC}$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-3.7, 4.7],
            y: [-5.9, 0.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 0],
                  [-3, -5.196],
                  [4, -4],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [0, -4.684], tone: "accent" },
            ],
            angles: [
              { at: [0, 0], from: [-3, -5.196], to: [0, -4.684], r: 1.3, label: "30°" },
              { at: [0, 0], from: [0, -4.684], to: [4, -4], r: 1, label: "45°" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "n", style: "italic" },
              { x: -3, y: -5.196, text: "B", pos: "sw", style: "italic" },
              { x: 4, y: -4, text: "C", pos: "se", style: "italic" },
              { x: 0, y: -4.684, text: "D", pos: "s", style: "italic" },
              { x: -1.5, y: -2.598, text: "6", pos: "nw", style: "plain" },
              { x: 2, y: -2, text: "4√2", pos: "ne", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 6 and AC = 4 root 2. A segment from A to the point D on BC makes angle 30 degrees with AB and 45 degrees with AC.",
          },
          answer: String.raw`$\dfrac34$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = AC$ and $\angle BAC = 100^\circ$. A point $P$ inside the triangle satisfies $\angle PBC = 20^\circ$ and $\angle PCB = 10^\circ$, as shown. What is $\angle PAB$?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.6, 3.12],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [3, 2.517],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [1.958, 0.713], tone: "accent" },
              { from: [6, 0], to: [1.958, 0.713], tone: "accent" },
              { from: [3, 2.517], to: [1.958, 0.713], tone: "accent", dashed: true },
            ],
            angles: [
              { at: [3, 2.517], from: [0, 0], to: [6, 0], r: 0.6, label: "100°" },
              { at: [0, 0], from: [6, 0], to: [1.958, 0.713], r: 1.6, label: "20°" },
              { at: [6, 0], from: [1.958, 0.713], to: [0, 0], r: 2, label: "10°" },
            ],
            points: [
              { x: 1.958, y: 0.713, label: "P", pos: "n" },
            ],
            labels: [
              { x: 3, y: 2.517, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
            ],
            alt: "Isosceles triangle ABC with AB = AC and angle A = 100 degrees. A point P inside is joined to B and C with angle PBC = 20 degrees and angle PCB = 10 degrees; P is also joined to A by a dashed segment.",
          },
          choices: [
            String.raw`$10^\circ$`,
            String.raw`$15^\circ$`,
            String.raw`$20^\circ$`,
            String.raw`$25^\circ$`,
            String.raw`$30^\circ$`,
          ],
          answer: String.raw`(C) $20^\circ$`,
        },
        {
          stem: String.raw`A point $P$ inside triangle $ABC$ satisfies $\angle PBA = 20^\circ$, $\angle PBC = 10^\circ$, $\angle PCB = 30^\circ$ and $\angle PCA = 40^\circ$, as shown. Find $\angle PAB$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.6, 3.46],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [4.958, 2.863],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [4.596, 0.81], tone: "accent" },
              { from: [6, 0], to: [4.596, 0.81], tone: "accent" },
              { from: [4.958, 2.863], to: [4.596, 0.81], tone: "accent", dashed: true },
            ],
            angles: [
              { at: [0, 0], from: [6, 0], to: [4.596, 0.81], r: 1.9, label: "10°" },
              { at: [0, 0], from: [4.596, 0.81], to: [4.958, 2.863], r: 1.3, label: "20°" },
              { at: [6, 0], from: [4.596, 0.81], to: [0, 0], r: 1.15, label: "30°" },
              { at: [6, 0], from: [4.958, 2.863], to: [4.596, 0.81], r: 0.65, label: "40°" },
            ],
            points: [
              { x: 4.596, y: 0.81, label: "P", pos: "n" },
            ],
            labels: [
              { x: 4.958, y: 2.863, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
            ],
            alt: "Triangle ABC with a point P inside. At B, angle PBA = 20 degrees and angle PBC = 10 degrees; at C, angle PCB = 30 degrees and angle PCA = 40 degrees. P is joined to A by a dashed segment.",
          },
          answer: String.raw`$50^\circ$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $\angle ABC = 30^\circ$ and $\angle ACB = 40^\circ$. The point $D$ on side $BC$ satisfies $BD = AC$, as shown. Find $\angle DAC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.6, 2.65],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [3.554, 2.052],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [3.554, 2.052], to: [3.193, 0], tone: "accent" },
              { from: [1.596, -0.12], to: [1.596, 0.12], tone: "ink" },
              { from: [4.7, 0.934], to: [4.854, 1.118], tone: "ink" },
            ],
            angles: [
              { at: [0, 0], from: [6, 0], to: [3.554, 2.052], r: 1, label: "30°" },
              { at: [6, 0], from: [3.554, 2.052], to: [0, 0], r: 0.8, label: "40°" },
            ],
            labels: [
              { x: 3.554, y: 2.052, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3.193, y: 0, text: "D", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC with angle B = 30 degrees and angle C = 40 degrees. D lies on BC, joined to A; tick marks show BD = AC.",
          },
          answer: String.raw`$60^\circ$`,
        },
        {
          stem: String.raw`Let $ABC$ be an acute triangle and $P$ a point inside it such that $\angle PAB = \angle PCB$ and $\angle PAC = \angle PBC$. Prove that $P$ is the orthocentre of triangle $ABC$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $x = \angle PAB = \angle PCB$ and $y = \angle PAC = \angle PBC$, trig Ceva collapses to $\sin(C - x) = \sin(B - y)$; the two angles add up to less than $180^\circ$, so $C - x = B - y$, and with $x + y = A$ this gives $x = 90^\circ - B$ and $y = 90^\circ - C$, so $AP$ and $BP$ are altitudes.`,
        },
        {
          stem: String.raw`$A_1A_2\ldots A_{18}$ is a regular $18$-gon, as shown. Prove that the diagonals $A_1A_6$, $A_4A_{13}$ and $A_3A_9$ are concurrent.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-1.3, 1.3],
            y: [-1.3, 1.3],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 1],
                  [-0.342, 0.94],
                  [-0.643, 0.766],
                  [-0.866, 0.5],
                  [-0.985, 0.174],
                  [-0.985, -0.174],
                  [-0.866, -0.5],
                  [-0.643, -0.766],
                  [-0.342, -0.94],
                  [0, -1],
                  [0.342, -0.94],
                  [0.643, -0.766],
                  [0.866, -0.5],
                  [0.985, -0.174],
                  [0.985, 0.174],
                  [0.866, 0.5],
                  [0.643, 0.766],
                  [0.342, 0.94],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 1], to: [-0.985, -0.174], tone: "accent" },
              { from: [-0.866, 0.5], to: [0.866, -0.5], tone: "accent" },
              { from: [-0.342, -0.94], to: [-0.643, 0.766], tone: "accent" },
            ],
            labels: [
              { x: 0, y: 1, text: "A₁", pos: "n", style: "italic" },
              { x: -0.643, y: 0.766, text: "A₃", pos: "nw", style: "italic" },
              { x: -0.866, y: 0.5, text: "A₄", pos: "nw", style: "italic" },
              { x: -0.985, y: -0.174, text: "A₆", pos: "w", style: "italic" },
              { x: -0.342, y: -0.94, text: "A₉", pos: "s", style: "italic" },
              { x: 0.866, y: -0.5, text: "A₁₃", pos: "se", style: "italic" },
            ],
            alt: "Regular 18-gon with vertices A1 to A18 labelled anticlockwise starting from the top; the diagonals A1A6, A4A13 and A9A3 are drawn.",
          },
          answer: String.raw`**Proof.** Key idea: they are cevians of triangle $A_1A_4A_9$, whose angles are split into inscribed angles $20^\circ + 30^\circ$, $40^\circ + 60^\circ$ and $20^\circ + 10^\circ$; trig Ceva needs $\sin 20^\circ\sin 40^\circ\sin 20^\circ = \sin 30^\circ\sin 60^\circ\sin 10^\circ$, which follows from $\sin 20^\circ\sin 40^\circ\sin 80^\circ = \tfrac14\sin 60^\circ$ and $\sin 20^\circ = 2\sin 10^\circ\cos 10^\circ$.`,
        },
        {
          stem: String.raw`Points $P$ and $Q$ inside triangle $ABC$ satisfy $\angle PAB = \angle PBC = \angle PCA$ and $\angle QBA = \angle QCB = \angle QAC$. Prove that $PA\cdot PB\cdot PC = QA\cdot QB\cdot QC$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: by trig Ceva both common angles $t$ satisfy $\dfrac{\sin(A - t)}{\sin t}\cdot\dfrac{\sin(B - t)}{\sin t}\cdot\dfrac{\sin(C - t)}{\sin t} = 1$, whose left side is strictly decreasing in $t$, so the two angles are equal, say to $\theta$; the sine rule in triangles $PAB$, $PBC$, $PCA$ (and in $QAB$, $QBC$, $QCA$) then shows that both products equal $(2R\sin\theta)^3$.`,
        },
      ],
    },
    {
      id: "G8-complex-unit-circle",
      name: String.raw`Complex numbers on the unit circle`,
      tests: String.raw`Points on one circle: a triangle with its circumcircle or a regular polygon. Orthocentres, tangents, feet of perpendiculars and products of distances all have short formulas once the circle is $|z| = 1$ and $\bar z = 1/z$.`,
      questions: [
        {
          stem: String.raw`Triangle $ABC$ is inscribed in the unit circle $x^2 + y^2 = 1$, with $A = (1, 0)$, $B = (0, 1)$ and $C = \left(-\tfrac35, -\tfrac45\right)$, as shown. Find the coordinates of its orthocentre.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-1.4, 1.6],
            y: [-1.25, 1.35],
            equal: true,
            originLabel: "sw",
            circles: [
              { c: [0, 0], r: 1, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [1, 0],
                  [0, 1],
                  [-0.6, -0.8],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            points: [
              { x: 1, y: 0, label: "A", pos: "se" },
              { x: 0, y: 1, label: "B", pos: "ne" },
              { x: -0.6, y: -0.8, label: "C", pos: "sw" },
            ],
            alt: "Unit circle centred at the origin with the inscribed triangle ABC, where A = (1, 0), B = (0, 1) and C = (−3/5, −4/5).",
          },
          answer: String.raw`$\left(\tfrac25, \tfrac15\right)$`,
        },
        {
          stem: String.raw`The points $B = \left(\tfrac35, \tfrac45\right)$ and $C = \left(-\tfrac45, \tfrac35\right)$ lie on the unit circle $x^2 + y^2 = 1$. The tangents to the circle at $B$ and at $C$ meet at $T$. Find the coordinates of $T$.`,
          difficulty: 1,
          answer: String.raw`$\left(-\tfrac15, \tfrac75\right)$`,
        },
        {
          stem: String.raw`A regular decagon $A_1A_2\ldots A_{10}$ is inscribed in a circle of radius $1$, and $P$ is the midpoint of the minor arc $A_1A_2$, as shown. Find $PA_1\cdot PA_2\cdot PA_3\cdots PA_{10}$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.3, 1.3],
            y: [-1.3, 1.3],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [-0.309, 0.951],
                  [0.309, 0.951],
                  [0.809, 0.588],
                  [1, 0],
                  [0.809, -0.588],
                  [0.309, -0.951],
                  [-0.309, -0.951],
                  [-0.809, -0.588],
                  [-1, 0],
                  [-0.809, 0.588],
                ],
                fill: false,
                tone: "accent",
              },
            ],
            segments: [
              { from: [0, 1], to: [-0.309, 0.951], tone: "warn", thin: true },
              { from: [0, 1], to: [0.309, 0.951], tone: "warn", thin: true },
              { from: [0, 1], to: [0.809, 0.588], tone: "warn", thin: true },
              { from: [0, 1], to: [1, 0], tone: "warn", thin: true },
              { from: [0, 1], to: [0.809, -0.588], tone: "warn", thin: true },
              { from: [0, 1], to: [0.309, -0.951], tone: "warn", thin: true },
              { from: [0, 1], to: [-0.309, -0.951], tone: "warn", thin: true },
              { from: [0, 1], to: [-0.809, -0.588], tone: "warn", thin: true },
              { from: [0, 1], to: [-1, 0], tone: "warn", thin: true },
              { from: [0, 1], to: [-0.809, 0.588], tone: "warn", thin: true },
            ],
            points: [
              { x: 0, y: 1, label: "P", pos: "n" },
            ],
            labels: [
              { x: -0.309, y: 0.951, text: "A₁", pos: "n", style: "italic" },
              { x: 0.309, y: 0.951, text: "A₂", pos: "n", style: "italic" },
              { x: 0.809, y: 0.588, text: "A₃", pos: "ne", style: "italic" },
              { x: 1, y: 0, text: "A₄", pos: "e", style: "italic" },
              { x: 0.809, y: -0.588, text: "A₅", pos: "se", style: "italic" },
              { x: 0.309, y: -0.951, text: "A₆", pos: "s", style: "italic" },
              { x: -0.309, y: -0.951, text: "A₇", pos: "s", style: "italic" },
              { x: -0.809, y: -0.588, text: "A₈", pos: "sw", style: "italic" },
              { x: -1, y: 0, text: "A₉", pos: "w", style: "italic" },
              { x: -0.809, y: 0.588, text: "A₁₀", pos: "nw", style: "italic" },
            ],
            alt: "Regular decagon A1 to A10 inscribed in a circle of radius 1. P is the midpoint of the minor arc A1A2 and is joined to all ten vertices.",
          },
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`A regular dodecagon $A_1A_2\ldots A_{12}$ has centre $O$ and circumradius $1$, as shown. Find the distance from $O$ to the orthocentre of triangle $A_1A_2A_5$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.3, 1.3],
            y: [-1.3, 1.3],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [0, 1],
                  [0.5, 0.866],
                  [0.866, 0.5],
                  [1, 0],
                  [0.866, -0.5],
                  [0.5, -0.866],
                  [0, -1],
                  [-0.5, -0.866],
                  [-0.866, -0.5],
                  [-1, 0],
                  [-0.866, 0.5],
                  [-0.5, 0.866],
                ],
                fill: false,
                tone: "muted",
              },
              {
                points: [
                  [0, 1],
                  [0.5, 0.866],
                  [0.866, -0.5],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "sw" },
            ],
            labels: [
              { x: 0, y: 1, text: "A₁", pos: "n", style: "italic" },
              { x: 0.5, y: 0.866, text: "A₂", pos: "ne", style: "italic" },
              { x: 0.866, y: 0.5, text: "A₃", pos: "ne", style: "italic" },
              { x: 1, y: 0, text: "A₄", pos: "e", style: "italic" },
              { x: 0.866, y: -0.5, text: "A₅", pos: "se", style: "italic" },
              { x: 0.5, y: -0.866, text: "A₆", pos: "se", style: "italic" },
              { x: 0, y: -1, text: "A₇", pos: "s", style: "italic" },
              { x: -0.5, y: -0.866, text: "A₈", pos: "sw", style: "italic" },
              { x: -0.866, y: -0.5, text: "A₉", pos: "sw", style: "italic" },
              { x: -1, y: 0, text: "A₁₀", pos: "w", style: "italic" },
              { x: -0.866, y: 0.5, text: "A₁₁", pos: "nw", style: "italic" },
              { x: -0.5, y: 0.866, text: "A₁₂", pos: "nw", style: "italic" },
            ],
            alt: "Regular dodecagon A1 to A12 with centre O inscribed in a circle of radius 1; triangle A1A2A5 is shaded.",
          },
          answer: String.raw`$\dfrac{\sqrt2 + \sqrt6}{2}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has circumradius $R$ and orthocentre $H$. For a point $P$ on its circumcircle, let $P_a$, $P_b$, $P_c$ be the reflections of $P$ in the midpoints of $BC$, $CA$, $AB$ respectively. Prove that $P_a$, $P_b$, $P_c$ and $H$ lie on a circle of radius $R$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with the circumcircle as the unit circle, $P_a = b + c - p = (h - p) - a$, and similarly $P_b = (h - p) - b$, $P_c = (h - p) - c$, so all three lie on the circle with centre $h - p$ and radius $1$; and $|h - (h - p)| = |p| = 1$ puts $H$ on it too.`,
        },
        {
          stem: String.raw`$ABCD$ is a square of side $1$, and $P$ is a point on its boundary, as shown. Find the largest possible value of $PA\cdot PB\cdot PC\cdot PD$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.25, 1.25],
            y: [-0.25, 1.25],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 0],
                  [1, 0],
                  [1, 1],
                  [0, 1],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0.32, 0], to: [0, 0], tone: "accent" },
              { from: [0.32, 0], to: [1, 0], tone: "accent" },
              { from: [0.32, 0], to: [1, 1], tone: "accent" },
              { from: [0.32, 0], to: [0, 1], tone: "accent" },
            ],
            points: [
              { x: 0.32, y: 0, label: "P", pos: "s" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 1, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 1, y: 1, text: "C", pos: "ne", style: "italic" },
              { x: 0, y: 1, text: "D", pos: "nw", style: "italic" },
            ],
            alt: "Unit square ABCD with a point P on side AB joined to all four vertices.",
          },
          answer: String.raw`$\dfrac{5}{16}$`,
        },
        {
          stem: String.raw`Triangle $ABC$ is inscribed in circle $\Gamma$. Two distinct points $P$ and $Q$ on $\Gamma$ satisfy $PQ \parallel BC$. Prove that the Simson lines of $P$ and $Q$ meet on the altitude from $A$, as shown. (The Simson line of a point on $\Gamma$ is the line through the feet of its perpendiculars to $BC$, $CA$ and $AB$.)`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-1.25, 1.25],
            y: [-1.25, 1.25],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 1, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [-0.423, 0.906],
                  [-0.866, -0.5],
                  [0.866, -0.5],
                ],
                fill: false,
                tone: "accent",
              },
            ],
            segments: [
              { from: [-0.866, -0.5], to: [0.866, -0.5], tone: "accent" },
              { from: [-0.966, 0.259], to: [0.966, 0.259], tone: "warn" },
              { from: [-0.423, 0.906], to: [-0.423, -0.5], tone: "muted", dashed: true },
              { from: [-1.017, -0.609], to: [-0.297, 0.934], tone: "good", thin: true },
              { from: [1.058, -0.577], to: [-0.575, 0.793], tone: "good", thin: true },
            ],
            points: [
              { x: -0.966, y: -0.5 },
              { x: -0.348, y: 0.825 },
              { x: -0.657, y: 0.162 },
              { x: 0.966, y: -0.5 },
              { x: 0.534, y: -0.137 },
              { x: -0.483, y: 0.716 },
            ],
            labels: [
              { x: -0.423, y: 0.906, text: "A", pos: "n", style: "italic" },
              { x: -0.866, y: -0.5, text: "B", pos: "sw", style: "italic" },
              { x: 0.866, y: -0.5, text: "C", pos: "se", style: "italic" },
              { x: -0.966, y: 0.259, text: "P", pos: "nw", style: "italic" },
              { x: 0.966, y: 0.259, text: "Q", pos: "ne", style: "italic" },
              { x: -0.423, y: -0.5, text: "D", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC inscribed in a circle, with a chord PQ parallel to BC. The feet of the perpendiculars from P and from Q to the sides are marked and lie on the two Simson lines. The altitude AD is dashed.",
          },
          answer: String.raw`**Proof.** Key idea: with $\Gamma$ the unit circle, the Simson line of $p$ is $2pz - 2abc\,\bar z = p^2 + (a + b + c)p - (ab + bc + ca) - \dfrac{abc}{p}$; $PQ \parallel BC$ means $pq = bc$, and solving the two line equations gives the intersection $z = a + \tfrac12(b + c + p + q)$, which satisfies $z - bc\,\bar z = a - \dfrac{bc}{a}$, the equation of the altitude from $A$.`,
        },
      ],
    },
    {
      id: "G8-barycentric",
      name: String.raw`Barycentric coordinates: areas and concurrency`,
      tests: String.raw`Points given by ratios on the sides, cevians and where they meet, areas of inner triangles, and lines through triangle centres. Write every point as $(u : v : w)$ and use the area determinant.`,
      questions: [
        {
          stem: String.raw`Points $D$, $E$, $F$ lie on sides $BC$, $CA$, $AB$ of triangle $ABC$ with $BD : DC = 1 : 2$, $CE : EA = 1 : 3$ and $AF : FB = 2 : 1$, as shown. What fraction of the area of triangle $ABC$ is the area of triangle $DEF$?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
              {
                points: [
                  [2, 0],
                  [4.9, 1.05],
                  [0.533, 1.4],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.9, y: 1.05, text: "E", pos: "ne", style: "italic" },
              { x: 0.533, y: 1.4, text: "F", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with D on BC, E on CA and F on AB; triangle DEF is shaded.",
          },
          answer: String.raw`$\dfrac29$`,
        },
        {
          stem: String.raw`Point $P$ lies inside triangle $ABC$, and the areas of triangles $PBC$, $PCA$, $PAB$ are in the ratio $2 : 3 : 5$. The line $AP$ meets $BC$ at $D$. What is $BD : DC$?`,
          difficulty: 1,
          choices: [
            String.raw`$2 : 3$`,
            String.raw`$3 : 2$`,
            String.raw`$3 : 5$`,
            String.raw`$5 : 3$`,
            String.raw`$5 : 2$`,
          ],
          answer: String.raw`(D) $5 : 3$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has area $60$. Point $D$ lies on $BC$ with $BD : DC = 2 : 3$, point $E$ lies on $CA$ with $CE : EA = 1 : 2$, and $AD$ meets $BE$ at $P$, as shown. Find the area of quadrilateral $PDCE$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
              {
                points: [
                  [2.267, 0.7],
                  [2.4, 0],
                  [6, 0],
                  [4.533, 1.4],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            segments: [
              { from: [1.6, 4.2], to: [2.4, 0], tone: "ink" },
              { from: [0, 0], to: [4.533, 1.4], tone: "ink" },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.4, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.533, y: 1.4, text: "E", pos: "ne", style: "italic" },
              { x: 2.267, y: 0.7, text: "P", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with cevians AD and BE meeting at P; the quadrilateral PDCE is shaded.",
          },
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has area $70$. $D$ is the midpoint of $BC$, $E$ lies on $CA$ with $CE : EA = 1 : 2$, and $F$ lies on $AB$ with $AF : FB = 1 : 3$. Find the area of the triangle bounded by the lines $AD$, $BE$ and $CF$ (shaded).`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
              {
                points: [
                  [2.72, 0.84],
                  [4.08, 1.26],
                  [2.16, 2.52],
                ],
                fill: true,
                tone: "warn",
              },
            ],
            segments: [
              { from: [1.6, 4.2], to: [3, 0], tone: "ink" },
              { from: [0, 0], to: [4.533, 1.4], tone: "ink" },
              { from: [6, 0], to: [1.2, 3.15], tone: "ink" },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 3, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 4.533, y: 1.4, text: "E", pos: "ne", style: "italic" },
              { x: 1.2, y: 3.15, text: "F", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with the three cevians AD, BE and CF, which bound a small shaded triangle in the middle.",
          },
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Points $D$, $E$, $F$ lie anywhere on the sides $BC$, $CA$, $AB$ of triangle $ABC$, and $X$, $Y$, $Z$ are the midpoints of $AD$, $BE$, $CF$, as shown. Prove that the area of triangle $XYZ$ is one quarter of the area of triangle $DEF$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: false,
                tone: "muted",
              },
              {
                points: [
                  [2.7, 0],
                  [3.58, 2.31],
                  [0.96, 2.52],
                ],
                fill: true,
                tone: "good",
              },
              {
                points: [
                  [2.15, 2.1],
                  [1.79, 1.155],
                  [3.48, 1.26],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            segments: [
              { from: [1.6, 4.2], to: [2.7, 0], tone: "muted", thin: true },
              { from: [0, 0], to: [3.58, 2.31], tone: "muted", thin: true },
              { from: [6, 0], to: [0.96, 2.52], tone: "muted", thin: true },
            ],
            points: [
              { x: 2.15, y: 2.1 },
              { x: 1.79, y: 1.155 },
              { x: 3.48, y: 1.26 },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.7, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.58, y: 2.31, text: "E", pos: "ne", style: "italic" },
              { x: 0.96, y: 2.52, text: "F", pos: "w", style: "italic" },
              { x: 2.15, y: 2.1, text: "X", pos: "e", style: "italic" },
              { x: 1.79, y: 1.155, text: "Y", pos: "w", style: "italic" },
              { x: 3.48, y: 1.26, text: "Z", pos: "e", style: "italic" },
            ],
            alt: "Triangle ABC with points D, E, F on its sides and the segments AD, BE, CF drawn thinly. Triangle DEF is shaded, and so is triangle XYZ formed by the midpoints X, Y, Z of AD, BE, CF.",
          },
          answer: String.raw`**Proof.** Key idea: with $D = (0, 1 - d, d)$, $E = (e, 0, 1 - e)$, $F = (1 - f, f, 0)$ and $X = \tfrac12(A + D)$ and so on, the area determinants give $[DEF] = 4[XYZ] = (1 - d - e - f + de + ef + fd)[ABC]$.`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $BC = 9$, $CA = 7$ and $AB = 8$. The line through its incentre and its centroid meets line $BC$ at $X$. Find $BX$.`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Points $D$, $E$, $F$ lie inside the sides $BC$, $CA$, $AB$ of triangle $ABC$. The segments $AD$, $BE$, $CF$ bound a triangle $T$ (which shrinks to a single point if they are concurrent), as shown. Prove that the area of $T$ is less than the area of triangle $DEF$.`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: false,
                tone: "muted",
              },
              {
                points: [
                  [2, 0],
                  [3.8, 2.1],
                  [1.2, 3.15],
                ],
                fill: true,
                tone: "good",
              },
              {
                points: [
                  [1.9, 1.05],
                  [3.257, 1.8],
                  [1.733, 2.8],
                ],
                fill: true,
                tone: "warn",
              },
            ],
            segments: [
              { from: [1.6, 4.2], to: [2, 0], tone: "ink" },
              { from: [0, 0], to: [3.8, 2.1], tone: "ink" },
              { from: [6, 0], to: [1.2, 3.15], tone: "ink" },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.8, y: 2.1, text: "E", pos: "ne", style: "italic" },
              { x: 1.2, y: 3.15, text: "F", pos: "w", style: "italic" },
              { x: 2.297, y: 1.883, text: "T", pos: "c", style: "italic" },
            ],
            alt: "Triangle ABC with points D, E, F on its sides. Triangle DEF is shaded, and the segments AD, BE, CF bound a smaller shaded triangle T.",
          },
          answer: String.raw`**Proof.** Key idea: with $x = \tfrac{BD}{DC}$, $y = \tfrac{CE}{EA}$, $z = \tfrac{AF}{FB}$, the area determinant gives $\dfrac{[DEF]}{[ABC]} = \dfrac{1 + xyz}{(1 + x)(1 + y)(1 + z)}$ and (intersecting the cevians in pairs) $\dfrac{[T]}{[ABC]} = \dfrac{(xyz - 1)^2}{(1 + x + xy)(1 + y + yz)(1 + z + zx)}$; since $(xyz - 1)^2 < (xyz + 1)^2$ it is enough that $(1 + x + xy)(1 + y + yz)(1 + z + zx) > (1 + xyz)(1 + x)(1 + y)(1 + z)$, and expanding with $p = x(1 + y)$, $q = y(1 + z)$, $r = z(1 + x)$ the difference is $pq + qr + rp - xyz > 0$.`,
        },
      ],
    },
    {
      id: "G8-vectors",
      name: String.raw`Vectors: centroids, collinearity and dot products`,
      tests: String.raw`Centroids and midpoints, where two lines cross, perpendicular medians, sums of squared distances and the Euler line. Choose the origin (a vertex, the centroid or the circumcentre) so that the vectors are as simple as possible.`,
      questions: [
        {
          stem: String.raw`In quadrilateral $ABCD$ the diagonal $BD$ has length $12$. Let $G_1$ and $G_2$ be the centroids of triangles $ABC$ and $ACD$. Find $G_1G_2$.`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`$ABCD$ is a parallelogram. Point $E$ lies on $AB$ with $AE : EB = 1 : 2$, and segment $DE$ meets the diagonal $AC$ at $P$, as shown. Find $AP : PC$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.5, 7.1],
            y: [-0.5, 3.5],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 0],
                  [5, 0],
                  [6.6, 3],
                  [1.6, 3],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [6.6, 3], tone: "ink" },
              { from: [1.6, 3], to: [1.667, 0], tone: "accent" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 5, y: 0, text: "B", pos: "se", style: "italic" },
              { x: 6.6, y: 3, text: "C", pos: "ne", style: "italic" },
              { x: 1.6, y: 3, text: "D", pos: "nw", style: "italic" },
              { x: 1.667, y: 0, text: "E", pos: "s", style: "italic" },
              { x: 1.65, y: 0.75, text: "P", pos: "se", style: "italic" },
            ],
            alt: "Parallelogram ABCD with a point E on AB; segment DE crosses the diagonal AC at P.",
          },
          answer: String.raw`$1 : 3$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 9$ and $AC = 13$, and the medians from $B$ and from $C$ are perpendicular, as shown. Find $BC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-3.39, 7.77],
            y: [-0.7, 9.29],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [-2.687, 8.59],
                  [0, 0],
                  [7.071, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [2.192, 4.295], tone: "accent" },
              { from: [7.071, 0], to: [-1.344, 4.295], tone: "accent" },
            ],
            rightAngles: [
              { at: [1.461, 2.863], a: [0.731, 1.432], b: [-2.805, 1.432], size: 0.45 },
            ],
            labels: [
              { x: -2.687, y: 8.59, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 7.071, y: 0, text: "C", pos: "se", style: "italic" },
              { x: -1.344, y: 4.295, text: "9", pos: "w", style: "plain" },
              { x: 2.192, y: 4.295, text: "13", pos: "ne", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 9 and AC = 13. The medians from B and from C are drawn and meet at a right angle.",
          },
          answer: String.raw`$5\sqrt2$`,
        },
        {
          stem: String.raw`A triangle $ABC$ has sides of lengths $5$, $7$ and $8$. The points $P$ of its plane with $PA^2 + PB^2 + PC^2 = 73$ form a circle. Find the radius of this circle.`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Let $ABC$ be a triangle that is not equilateral, with circumcentre $O$ and centroid $G$. Prove that $\angle AGO = 90^\circ$ if and only if $AB^2 + AC^2 = 2BC^2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $O$ as origin, $\mathbf g = \tfrac13(\mathbf a + \mathbf b + \mathbf c)$ and $9\,\overrightarrow{GA}\cdot\overrightarrow{GO} = (\mathbf a + \mathbf b + \mathbf c)\cdot(\mathbf b + \mathbf c - 2\mathbf a) = 2\,\mathbf b\cdot\mathbf c - \mathbf a\cdot\mathbf b - \mathbf a\cdot\mathbf c$; substituting $2\,\mathbf x\cdot\mathbf y = 2R^2 - XY^2$ turns this into $\tfrac12(AB^2 + AC^2) - BC^2$.`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $AB = AC = 5$ and $BC = 6$. A point $P$ moves on the circumcircle of $ABC$. Find the largest possible value of $PA^2 + PB^2 + PC^2$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{1075}{16}$`,
        },
        {
          stem: String.raw`The diagonals of a convex quadrilateral $ABCD$ meet at $X$. Let $G$ be the centroid of the four vertices, $\mathbf g = \tfrac14(\mathbf a + \mathbf b + \mathbf c + \mathbf d)$, and let $K$ be the centre of mass of the quadrilateral region, $K = \dfrac{[ABC]\,G_1 + [ACD]\,G_2}{[ABC] + [ACD]}$, where $G_1$, $G_2$ are the centroids of triangles $ABC$ and $ACD$. Prove that $X$, $G$, $K$ are collinear with $XG = 3\,GK$, as shown.`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-0.5, 6.9],
            y: [-0.9, 4.9],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 0],
                  [6.4, -0.4],
                  [5.2, 4.4],
                  [0.9, 2],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 0], to: [5.2, 4.4], tone: "ink", thin: true },
              { from: [6.4, -0.4], to: [0.9, 2], tone: "ink", thin: true },
              { from: [1.067, 1.628], to: [4.543, 1.411], tone: "warn", dashed: true },
            ],
            points: [
              { x: 1.866, y: 1.579, label: "X", pos: "nw" },
              { x: 3.125, y: 1.5, label: "G", pos: "nw" },
              { x: 3.545, y: 1.474, label: "K", pos: "se" },
            ],
            labels: [
              { x: 0, y: 0, text: "A", pos: "sw", style: "italic" },
              { x: 6.4, y: -0.4, text: "B", pos: "se", style: "italic" },
              { x: 5.2, y: 4.4, text: "C", pos: "ne", style: "italic" },
              { x: 0.9, y: 2, text: "D", pos: "nw", style: "italic" },
            ],
            alt: "Convex quadrilateral ABCD with diagonals meeting at X; the vertex centroid G and the centre of mass K of the region lie on a dashed line through X.",
          },
          answer: String.raw`**Proof.** Key idea: take $X$ as origin; the weights satisfy $[ABC] : [ACD] = BX : XD = m : n$, and $X = 0$ on $BD$ means $n\mathbf b + m\mathbf d = \mathbf 0$, which gives $m\mathbf b + n\mathbf d = (m + n)(\mathbf b + \mathbf d)$; hence $\mathbf k = \tfrac13(\mathbf a + \mathbf b + \mathbf c + \mathbf d) = \tfrac43\,\mathbf g$.`,
        },
      ],
    },
    {
      id: "G8-coordinate-frames",
      name: String.raw`Choosing a coordinate frame`,
      tests: String.raw`An altitude, a right angle, perpendicular chords, a rectangle, or a locus defined by squared distances or a ratio of distances. With the right axes the algebra is short; with the wrong ones it is hopeless.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $AD$ is an altitude with $D$ on $BC$, $BD = 4$, $DC = 9$ and $AD = 12$, as shown. Let $H$ be the orthocentre of the triangle. Find $AH$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-5, 10],
            y: [-1, 13],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 12],
                  [-4, 0],
                  [9, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [0, 12], to: [0, 0], tone: "accent" },
            ],
            rightAngles: [
              { at: [0, 0], a: [1, 0], b: [0, 1], size: 0.6 },
            ],
            labels: [
              { x: 0, y: 12, text: "A", pos: "n", style: "italic" },
              { x: -4, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 9, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 0, y: 0, text: "D", pos: "s", style: "italic" },
              { x: -2, y: 0, text: "4", pos: "s", style: "plain" },
              { x: 4.5, y: 0, text: "9", pos: "s", style: "plain" },
              { x: 0, y: 6, text: "12", pos: "e", style: "plain" },
            ],
            alt: "Triangle ABC with the altitude AD of length 12; D lies on BC with BD = 4 and DC = 9.",
          },
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Points $A$ and $B$ are $10$ units apart. The points $P$ with $PA^2 - PB^2 = 40$ form a line, which crosses segment $AB$ at $X$. Find $AX$.`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Points $A$ and $B$ are $6$ units apart, and a point $P$ moves so that $PA = 2PB$. Find the largest possible area of triangle $PAB$.`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $AB = 2\sqrt5$, $AC = 2\sqrt{13}$ and $BC = 8$, as shown. Find the distance between its circumcentre and its orthocentre.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-2.7, 6.7],
            y: [-0.7, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [0, 4],
                  [-2, 0],
                  [6, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            labels: [
              { x: 0, y: 4, text: "A", pos: "n", style: "italic" },
              { x: -2, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: -1, y: 2, text: "2√5", pos: "nw", style: "plain" },
              { x: 3, y: 2, text: "2√13", pos: "ne", style: "plain" },
              { x: 2, y: 0, text: "8", pos: "s", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 2 root 5, AC = 2 root 13 and BC = 8.",
          },
          answer: String.raw`$\dfrac{\sqrt{41}}{2}$`,
        },
        {
          stem: String.raw`Let $ABC$ be a triangle with circumcentre $O$, and let $M$ be the midpoint of $AB$. Prove that the points $P$ with $PA^2 + PB^2 = 2PC^2$ form exactly the line through $O$ perpendicular to $CM$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: in coordinates, $PA^2 + PB^2 - 2PC^2 = -2\,\mathbf p\cdot(\mathbf a + \mathbf b - 2\mathbf c) + \left(|\mathbf a|^2 + |\mathbf b|^2 - 2|\mathbf c|^2\right)$ has no $|\mathbf p|^2$ term, so its zero set is a line perpendicular to $\mathbf a + \mathbf b - 2\mathbf c = 2\overrightarrow{CM}$, and the line passes through $O$ because $OA = OB = OC$.`,
        },
        {
          stem: String.raw`Point $P$ lies inside a circle of radius $5$, at distance $3$ from its centre. Two perpendicular chords $AC$ and $BD$ pass through $P$, as shown. Find the largest possible area of quadrilateral $ABCD$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-5.6, 5.6],
            y: [-5.6, 5.6],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 5, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [4.897, 1.009],
                  [0.348, 4.988],
                  [-3.575, -3.496],
                  [4.33, -2.501],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            segments: [
              { from: [4.897, 1.009], to: [-3.575, -3.496], tone: "ink" },
              { from: [0.348, 4.988], to: [4.33, -2.501], tone: "ink" },
              { from: [0, 0], to: [3, 0], tone: "warn", dashed: true },
            ],
            rightAngles: [
              { at: [3, 0], a: [0.883, 0.469], b: [-0.469, 0.883], size: 0.45 },
            ],
            points: [
              { x: 0, y: 0, label: "O", pos: "w" },
              { x: 3, y: 0, label: "P", pos: "se" },
            ],
            labels: [
              { x: 4.897, y: 1.009, text: "A", pos: "e", style: "italic" },
              { x: 0.348, y: 4.988, text: "B", pos: "n", style: "italic" },
              { x: -3.575, y: -3.496, text: "C", pos: "sw", style: "italic" },
              { x: 4.33, y: -2.501, text: "D", pos: "se", style: "italic" },
              { x: 1.5, y: 0, text: "3", pos: "s", style: "plain" },
            ],
            alt: "Circle of radius 5 with centre O and a point P at distance 3 from O. Two perpendicular chords AC and BD pass through P, forming quadrilateral ABCD.",
          },
          answer: String.raw`$41$`,
        },
        {
          stem: String.raw`$ABCD$ is a rectangle. Find all points $P$ in its plane such that $PA + PC = PB + PD$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`The two lines through the centre of the rectangle parallel to its sides. **Proof.** Key idea: with the centre as origin, $A = (-p, -q)$, $B = (p, -q)$, $C = (p, q)$, $D = (-p, q)$ and $P = (x, y)$, both $PA^2 - PB^2$ and $PD^2 - PC^2$ equal $4px$, so $PA + PC - PB - PD = 4px\left(\dfrac{1}{PA + PB} - \dfrac{1}{PC + PD}\right)$; and $PA + PB > PC + PD$ exactly when $y > 0$, because, for a fixed $x$, the sum of the distances to the ends of a horizontal segment grows with the distance from its line, so the expression vanishes only when $x = 0$ or $y = 0$.`,
        },
      ],
    },
    {
      id: "G8-length-bash",
      name: String.raw`Length bashing: Stewart, Ptolemy and chords`,
      tests: String.raw`Lengths of cevians, chords through a point of a circle, diagonals of cyclic quadrilaterals and distances in regular polygons. Chain Stewart's theorem, Ptolemy's theorem, power of a point and chord $= 2R\sin\theta$.`,
      questions: [
        {
          stem: String.raw`In triangle $ABC$, $AB = 12$, $AC = 10$ and $BC = 8$. Point $D$ lies on $BC$ with $BD = 2$, as shown. Find $AD$.`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.8, 8.8],
            y: [-0.8, 10.72],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [6.75, 9.922],
                  [0, 0],
                  [8, 0],
                ],
                fill: true,
                tone: "muted",
              },
            ],
            segments: [
              { from: [6.75, 9.922], to: [2, 0], tone: "accent" },
            ],
            labels: [
              { x: 6.75, y: 9.922, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 8, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.375, y: 4.961, text: "12", pos: "nw", style: "plain" },
              { x: 7.375, y: 4.961, text: "10", pos: "ne", style: "plain" },
              { x: 1, y: 0, text: "2", pos: "s", style: "plain" },
              { x: 5, y: 0, text: "6", pos: "s", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 12, AC = 10 and BC = 8; D on BC with BD = 2 and DC = 6 is joined to A.",
          },
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Equilateral triangle $ABC$ is inscribed in a circle, and $P$ is a point on the minor arc $BC$ with $PB = 3$ and $PC = 5$, as shown. What is $PA$?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-4.54, 4.54],
            y: [-4.54, 4.54],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 4.041, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [0, 4.041],
                  [-3.5, -2.021],
                  [3.5, -2.021],
                ],
                fill: false,
                tone: "accent",
              },
            ],
            segments: [
              { from: [-1.143, -3.876], to: [0, 4.041], tone: "warn", dashed: true },
              { from: [-1.143, -3.876], to: [-3.5, -2.021], tone: "ink" },
              { from: [-1.143, -3.876], to: [3.5, -2.021], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 4.041, text: "A", pos: "n", style: "italic" },
              { x: -3.5, y: -2.021, text: "B", pos: "w", style: "italic" },
              { x: 3.5, y: -2.021, text: "C", pos: "e", style: "italic" },
              { x: -1.143, y: -3.876, text: "P", pos: "s", style: "italic" },
              { x: -2.322, y: -2.949, text: "3", pos: "sw", style: "plain" },
              { x: 1.178, y: -2.949, text: "5", pos: "se", style: "plain" },
            ],
            alt: "Equilateral triangle ABC inscribed in a circle, with P on the minor arc BC, PB = 3 and PC = 5; PA is dashed.",
          },
          choices: [String.raw`$6$`, String.raw`$7$`, String.raw`$4\sqrt3$`, String.raw`$8$`, String.raw`$\sqrt{34}$`],
          answer: String.raw`(D) $8$`,
        },
        {
          stem: String.raw`In triangle $ABC$, $AB = 13$, $BC = 14$ and $CA = 15$. The bisector of $\angle BAC$ meets $BC$ at $D$ and the circumcircle again at $M$, as shown. Find $AM$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1.93, 15.93],
            y: [-4.8, 13.05],
            equal: true,
            axes: false,
            circles: [
              { c: [7, 4.125], r: 8.125, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [5, 12],
                  [0, 0],
                  [14, 0],
                ],
                fill: false,
                tone: "accent",
              },
            ],
            segments: [
              { from: [5, 12], to: [7, -4], tone: "warn" },
            ],
            labels: [
              { x: 5, y: 12, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 14, y: 0, text: "C", pos: "e", style: "italic" },
              { x: 6.5, y: 0, text: "D", pos: "ne", style: "italic" },
              { x: 7, y: -4, text: "M", pos: "s", style: "italic" },
              { x: 2.5, y: 6, text: "13", pos: "nw", style: "plain" },
              { x: 9.5, y: 6, text: "15", pos: "ne", style: "plain" },
              { x: 10.2, y: 0, text: "14", pos: "s", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 13, BC = 14 and CA = 15 inscribed in its circumcircle. The bisector of angle A crosses BC at D and meets the circle again at M.",
          },
          answer: String.raw`$2\sqrt{65}$`,
        },
        {
          stem: String.raw`A cyclic quadrilateral $ABCD$ has $AB = 13$, $BC = 15$, $CD = 21$ and $DA = 25$, as shown. Find the length of the diagonal $AC$.`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-14.37, 14.37],
            y: [-14.37, 14.37],
            equal: true,
            axes: false,
            circles: [
              { c: [0, 0], r: 13.568, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [-12.75, -4.641],
                  [-10.8, 8.212],
                  [3.366, 13.144],
                  [12.219, -5.899],
                ],
                fill: true,
                tone: "accent",
              },
            ],
            segments: [
              { from: [-12.75, -4.641], to: [3.366, 13.144], tone: "warn", dashed: true },
            ],
            labels: [
              { x: -12.75, y: -4.641, text: "A", pos: "w", style: "italic" },
              { x: -10.8, y: 8.212, text: "B", pos: "nw", style: "italic" },
              { x: 3.366, y: 13.144, text: "C", pos: "n", style: "italic" },
              { x: 12.219, y: -5.899, text: "D", pos: "se", style: "italic" },
              { x: -10.127, y: 1.536, text: "13", pos: "c", style: "plain" },
              { x: -3.197, y: 9.183, text: "15", pos: "c", style: "plain" },
              { x: 6.701, y: 3.115, text: "21", pos: "c", style: "plain" },
              { x: -0.228, y: -4.532, text: "25", pos: "c", style: "plain" },
            ],
            alt: "Cyclic quadrilateral ABCD with AB = 13, BC = 15, CD = 21 and DA = 25; the diagonal AC is dashed.",
          },
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`Triangle $ABC$ has $AB = 7$, $BC = 6$ and $CA = 5$. Its incircle touches $BC$ at $D$, and segment $AD$ meets the incircle first at $P$ (so $P$ lies between $A$ and $D$), as shown. Find $AP$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.6, 6.6],
            y: [-0.6, 5.5],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [5, 4.899],
                  [0, 0],
                  [6, 0],
                ],
                fill: false,
                tone: "muted",
              },
            ],
            circles: [
              { c: [4, 1.633], r: 1.633, tone: "accent" },
            ],
            segments: [
              { from: [5, 4.899], to: [4, 0], tone: "warn" },
            ],
            points: [
              { x: 4.64, y: 3.135, label: "P", pos: "w" },
            ],
            labels: [
              { x: 5, y: 4.899, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 4, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 2.5, y: 2.449, text: "7", pos: "nw", style: "plain" },
              { x: 5.5, y: 2.449, text: "5", pos: "e", style: "plain" },
              { x: 2, y: 0, text: "6", pos: "s", style: "plain" },
            ],
            alt: "Triangle ABC with AB = 7, BC = 6 and CA = 5 and its incircle, which touches BC at D. Segment AD crosses the incircle, meeting it first at P.",
          },
          answer: String.raw`$\dfrac95$`,
        },
        {
          stem: String.raw`In triangle $ABC$, the median from $A$ meets the circumcircle again at $X$, as shown. Prove that $AX \ge BC$.`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-0.63, 6.63],
            y: [-2.73, 4.54],
            equal: true,
            axes: false,
            circles: [
              { c: [3, 0.906], r: 3.134, tone: "muted" },
            ],
            polygons: [
              {
                points: [
                  [1.4, 3.6],
                  [0, 0],
                  [6, 0],
                ],
                fill: false,
                tone: "accent",
              },
            ],
            segments: [
              { from: [1.4, 3.6], to: [3.928, -2.088], tone: "warn" },
            ],
            points: [
              { x: 3, y: 0 },
            ],
            labels: [
              { x: 1.4, y: 3.6, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "w", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "e", style: "italic" },
              { x: 3, y: 0, text: "M", pos: "ne", style: "italic" },
              { x: 3.928, y: -2.088, text: "X", pos: "s", style: "italic" },
            ],
            alt: "Triangle ABC inscribed in a circle. The median from A passes through the midpoint M of BC and meets the circle again at X.",
          },
          answer: String.raw`**Proof.** Key idea: with $M$ the midpoint of $BC$, power of a point gives $AM\cdot MX = BM\cdot MC = \tfrac14BC^2$, so by AM–GM $AX = AM + MX \ge 2\sqrt{AM\cdot MX} = BC$.`,
        },
        {
          stem: String.raw`The incircle of triangle $ABC$ touches $BC$, $CA$, $AB$ at $D$, $E$, $F$. The segments $AD$, $BE$, $CF$ meet the incircle again at $P$, $Q$, $R$ respectively, as shown. Prove that
$$\frac{AP}{PD} + \frac{BQ}{QE} + \frac{CR}{RF} \ge \frac32,$$
with equality only for an equilateral triangle.`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [-0.5, 6.5],
            y: [-0.5, 4.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [
                  [1.6, 4.2],
                  [0, 0],
                  [6, 0],
                ],
                fill: false,
                tone: "muted",
              },
            ],
            circles: [
              { c: [2.206, 1.52], r: 1.52, tone: "accent" },
            ],
            segments: [
              { from: [1.6, 4.2], to: [2.206, 0], tone: "warn", thin: true },
              { from: [0, 0], to: [3.255, 2.62], tone: "warn", thin: true },
              { from: [6, 0], to: [0.785, 2.061], tone: "warn", thin: true },
            ],
            points: [
              { x: 1.776, y: 2.978, label: "P", pos: "w" },
              { x: 0.907, y: 0.73, label: "Q", pos: "nw" },
              { x: 3.612, y: 0.944, label: "R", pos: "ne" },
            ],
            labels: [
              { x: 1.6, y: 4.2, text: "A", pos: "n", style: "italic" },
              { x: 0, y: 0, text: "B", pos: "sw", style: "italic" },
              { x: 6, y: 0, text: "C", pos: "se", style: "italic" },
              { x: 2.206, y: 0, text: "D", pos: "s", style: "italic" },
              { x: 3.255, y: 2.62, text: "E", pos: "ne", style: "italic" },
              { x: 0.785, y: 2.061, text: "F", pos: "w", style: "italic" },
            ],
            alt: "Triangle ABC with its incircle touching BC at D, CA at E and AB at F. The segments AD, BE and CF each cross the incircle, meeting it first at P, Q and R.",
          },
          answer: String.raw`**Proof.** Key idea: with tangent lengths $x = s - a$, $y = s - b$, $z = s - c$ (so $BD = y$, $DC = z$), Stewart's theorem gives $AD^2 = x^2 + \dfrac{4xyz}{y + z}$ and the power of $A$ gives $AP\cdot AD = x^2$, so $\dfrac{AP}{PD} = \dfrac{x^2}{AD^2 - x^2} = \dfrac{x(y + z)}{4yz}$; the sum is then $\tfrac14\left(\tfrac xy + \tfrac yx + \tfrac yz + \tfrac zy + \tfrac zx + \tfrac xz\right) \ge \tfrac32$ by AM–GM, with equality only when $x = y = z$.`,
        },
      ],
    },
  ],
});
