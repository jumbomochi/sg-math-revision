H2.addTopic({
  id: "4.1",
  title: "Complex Numbers",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Complex numbers in cartesian form: arithmetic, modulus and argument, conjugate roots and the Argand diagram.`,
  syllabus: {
    include: [
      String.raw`extension of the number system from real numbers to complex numbers`,
      String.raw`complex roots of quadratic equations`,
      String.raw`modulus, argument and conjugate of a complex number`,
      String.raw`four operations of complex numbers`,
      String.raw`equality of complex numbers`,
      String.raw`conjugate roots of a polynomial equation with real coefficients`,
      String.raw`representation of complex numbers in the Argand diagram`,
      String.raw`geometrical effects of conjugation, negation, addition, subtraction, and multiplication by $\ii$`,
    ],
    exclude: [
      String.raw`complex numbers expressed in polar (or modulus-argument) form and exponential form`,
    ],
  },
  concepts: [
    {
      title: String.raw`Cartesian form and equality`,
      body: String.raw`A complex number is $z = x + \ii y$ with $x, y \in \mathbb{R}$ and $\ii^2 = -1$; $\Re(z) = x$, $\Im(z) = y$ (note $\Im(z)$ is the **real** number $y$, not $\ii y$).

**Equality:** $a + \ii b = c + \ii d \iff a = c$ and $b = d$. One complex equation gives **two** real equations.

- To solve an equation involving $z$ and $z^*$, substitute $z = x + \ii y$, $z^* = x - \ii y$, expand, and compare real and imaginary parts.
- $z$ is **real** $\iff \Im(z) = 0 \iff z = z^*$; $z$ is **purely imaginary** $\iff \Re(z) = 0$.`,
      figure: {
        type: "plot", x: [-0.8, 4.8], y: [-0.8, 3], equal: true, axisLabels: ["Re", "Im"],
        segments: [
          { from: [3, 0], to: [3, 2], tone: "muted", thin: true, dashed: true },
          { from: [0, 2], to: [3, 2], tone: "muted", thin: true, dashed: true },
        ],
        points: [{ x: 3, y: 2, label: "z = x + iy", pos: "ne", style: "italic" }],
        xTicks: [{ x: 3, label: "x" }],
        yTicks: [{ y: 2, label: "y" }],
        caption: String.raw`In the Argand diagram, $z = x + \ii y$ is the point $(x, y)$: $\Re(z)$ across, $\Im(z)$ up.`,
        alt: "Argand diagram with the point z = x + iy plotted at (x, y), with dashed lines to x on the real axis and y on the imaginary axis.",
      },
    },
    {
      title: String.raw`The four operations and the conjugate`,
      body: String.raw`Add/subtract component-wise; multiply by expanding and using $\ii^2 = -1$. To **divide**, multiply numerator and denominator by the conjugate of the denominator:

$$\frac{a + \ii b}{c + \ii d} = \frac{(a + \ii b)(c - \ii d)}{c^2 + d^2}.$$

Useful identities: $zz^* = |z|^2 = x^2 + y^2$, $\ z + z^* = 2\Re(z)$, $\ z - z^* = 2\ii\Im(z)$, $\ (zw)^* = z^* w^*$, $\ (z/w)^* = z^*/w^*$.

Powers of $\ii$ cycle with period 4: $\ii, -1, -\ii, 1$.`,
    },
    {
      title: String.raw`Complex roots of quadratics`,
      body: String.raw`For $az^2 + bz + c = 0$ with **real** coefficients and $b^2 - 4ac < 0$:

$$z = \frac{-b \pm \ii\sqrt{4ac - b^2}}{2a},$$

a conjugate pair. If the coefficients are **not** all real, the formula still works, but you need $\sqrt{\Delta}$ for complex $\Delta$: set $(x + \ii y)^2 = \Delta$ and compare parts ($x^2 - y^2 = \Re\Delta$, $2xy = \Im\Delta$). The roots are then usually **not** conjugates.`,
    },
    {
      title: String.raw`Modulus and argument`,
      body: String.raw`$|z| = \sqrt{x^2 + y^2}$ is the distance from $O$ to the point $(x, y)$. The **principal argument** $\arg z \in (-\pi, \pi]$ is the angle from the positive real axis.

- **Always sketch the point first** to see the quadrant; then use the basic angle $\alpha = \tan^{-1}\left|\dfrac{y}{x}\right|$.

| Quadrant | $\arg z$ |
| 1st ($x>0, y>0$) | $\alpha$ |
| 2nd ($x<0, y>0$) | $\pi - \alpha$ |
| 3rd ($x<0, y<0$) | $-(\pi - \alpha)$ |
| 4th ($x>0, y<0$) | $-\alpha$ |

- $\arg 0$ is undefined; on the axes, $\arg z \in \{0, \frac{\pi}{2}, \pi, -\frac{\pi}{2}\}$.
- Give exact values ($\frac{\pi}{6}$, $\frac{2\pi}{3}$, …) when the numbers allow; otherwise radians to 3 d.p. Set the GC to **radians**.
- Only cartesian form is in the syllabus: no polar or exponential form, and no de Moivre's theorem.`,
      figure: [
        {
          type: "plot", x: [-4, 4], y: [-3, 3], equal: true, axisLabels: ["Re", "Im"], originLabel: "sw",
          segments: [
            { from: [0, 0], to: [2.6, 1.8], tone: "accent", label: "|z|", pos: "nw", style: "italic" },
            { from: [2.6, 1.8], to: [2.6, 0], tone: "muted", thin: true, dashed: true },
          ],
          angles: [{ at: [0, 0], from: [1, 0], to: [2.6, 1.8], r: 0.9, label: "α" }],
          points: [{ x: 2.6, y: 1.8, label: "z", pos: "ne", style: "italic" }],
          caption: String.raw`1st quadrant: $\arg z = \alpha$, measured anticlockwise`,
          alt: "Argand diagram with z in the first quadrant joined to O; arg z is the angle alpha measured anticlockwise from the positive real axis.",
        },
        {
          type: "plot", x: [-4, 4], y: [-3, 3], equal: true, axisLabels: ["Re", "Im"], originLabel: "se",
          segments: [
            { from: [0, 0], to: [-2.6, 1.8], tone: "accent", label: "|z|", pos: "ne", style: "italic" },
            { from: [-2.6, 1.8], to: [-2.6, 0], tone: "muted", thin: true, dashed: true },
          ],
          angles: [{ at: [0, 0], from: [1, 0], to: [-2.6, 1.8], r: 0.8, label: "π − α" }, { at: [0, 0], from: [-2.6, 1.8], to: [-1, 0], r: 1.55, label: "α" }],
          points: [{ x: -2.6, y: 1.8, label: "z", pos: "nw", style: "italic" }],
          caption: String.raw`2nd quadrant: $\arg z = \pi - \alpha$, measured anticlockwise`,
          alt: "Argand diagram with z in the second quadrant; the basic angle alpha is between Oz and the negative real axis, and arg z, measured anticlockwise from the positive real axis, is pi minus alpha.",
        },
        {
          type: "plot", x: [-4, 4], y: [-3, 3], equal: true, axisLabels: ["Re", "Im"], originLabel: "ne",
          segments: [
            { from: [0, 0], to: [-2.6, -1.8], tone: "accent", label: "|z|", pos: "se", style: "italic" },
            { from: [-2.6, -1.8], to: [-2.6, 0], tone: "muted", thin: true, dashed: true },
          ],
          angles: [{ at: [0, 0], from: [-2.6, -1.8], to: [1, 0], r: 0.8, label: "π − α" }, { at: [0, 0], from: [-1, 0], to: [-2.6, -1.8], r: 1.55, label: "α" }],
          points: [{ x: -2.6, y: -1.8, label: "z", pos: "sw", style: "italic" }],
          caption: String.raw`3rd quadrant: $\arg z = -(\pi - \alpha)$, measured clockwise`,
          alt: "Argand diagram with z in the third quadrant; the basic angle alpha is between Oz and the negative real axis, and arg z is minus (pi minus alpha), measured clockwise from the positive real axis.",
        },
        {
          type: "plot", x: [-4, 4], y: [-3, 3], equal: true, axisLabels: ["Re", "Im"], originLabel: "nw",
          segments: [
            { from: [0, 0], to: [2.6, -1.8], tone: "accent", label: "|z|", pos: "sw", style: "italic" },
            { from: [2.6, -1.8], to: [2.6, 0], tone: "muted", thin: true, dashed: true },
          ],
          angles: [{ at: [0, 0], from: [2.6, -1.8], to: [1, 0], r: 0.9, label: "α" }],
          points: [{ x: 2.6, y: -1.8, label: "z", pos: "se", style: "italic" }],
          caption: String.raw`4th quadrant: $\arg z = -\alpha$, measured clockwise`,
          alt: "Argand diagram with z in the fourth quadrant; arg z is minus alpha, the angle alpha being measured clockwise from the positive real axis.",
        },
      ],
    },
    {
      title: String.raw`Conjugate root theorem`,
      body: String.raw`If a polynomial equation has **real coefficients** and $\alpha$ is a non-real root, then $\alpha^*$ is also a root. State this reason explicitly ("since all coefficients are real, $\alpha^*$ is also a root").

$$(z - \alpha)(z - \alpha^*) = z^2 - 2\Re(\alpha)\,z + |\alpha|^2,$$

a **real** quadratic factor. Find the remaining factor by comparing coefficients or long division.

- To find unknown real coefficients, substitute $z = \alpha$ and equate real and imaginary parts, *or* use the real quadratic factor.
- A real polynomial of odd degree always has at least one real root.`,
      figure: {
        type: "plot", x: [-2.4, 3.6], y: [-2.7, 2.7], equal: true, axisLabels: ["Re", "Im"],
        segments: [{ from: [1, 2], to: [1, -2], tone: "muted", thin: true, dashed: true }],
        rightAngles: [{ at: [1, 0], a: [0, 1], b: [1, 0], size: 0.22 }],
        points: [
          { x: 1, y: 2, label: "α = 1 + 2i", pos: "e", style: "italic" },
          { x: 1, y: -2, label: "α* = 1 − 2i", pos: "e", style: "italic" },
          { x: -1, y: 0, label: "−1", pos: "n" },
        ],
        caption: String.raw`Roots of $z^3 - z^2 + 3z + 5 = 0$ (real coefficients): the non-real roots form a conjugate pair, mirror images in the real axis.`,
        alt: "Argand diagram of the roots of a real cubic: a real root at -1 on the real axis, and the conjugate pair 1 + 2i and 1 - 2i placed symmetrically above and below the real axis, joined by a dashed line perpendicular to it.",
      },
    },
    {
      title: String.raw`Polynomials with non-real coefficients`,
      body: String.raw`The factor theorem still applies: if $\mathrm{P}(\beta) = 0$ then $(z - \beta)$ is a factor. But the conjugate root theorem does **not** — if any coefficient is non-real, $\beta^*$ need not be a root. Expect questions that ask you to explain this.

Substitutions such as $w = 1/z$, $w = 2z$ or $w = \ii z$ turn a solved equation into a new one: transform each root rather than re-solving.`,
    },
    {
      title: String.raw`Argand diagram and geometric effects`,
      body: String.raw`The point $(x, y)$ represents $x + \ii y$; equivalently the vector $\overrightarrow{OZ}$.

| Operation | Effect on the point $Z$ |
| $z^*$ | reflection in the real axis |
| $-z$ | rotation through $\pi$ about $O$ (half-turn) |
| $z + w$ | translation by $w$; $O$, $Z$, $W$, $Z + W$ form a parallelogram |
| $z - w$ | vector $\overrightarrow{WZ}$; $|z - w|$ is the distance $WZ$ |
| $\ii z$ | rotation through $\frac{\pi}{2}$ anticlockwise about $O$ |

So for a square $ABCD$ (labelled anticlockwise), $c - b = \ii(b - a)$ and $d - a = \ii(b - a)$.`,
      figure: [
        {
          type: "plot", x: [-3, 3], y: [-1.6, 1.6], equal: true, axisLabels: ["Re", "Im"],
          segments: [
            { from: [2.2, 0.75], to: [2.2, -0.75], tone: "muted", thin: true, dashed: true },
            { from: [0, 0], to: [2.2, 0.75], arrow: true, label: "z", pos: "ne", labelAt: [2.2, 0.75], style: "italic" },
            { from: [0, 0], to: [2.2, -0.75], arrow: true, tone: "good", label: "z*", pos: "se", labelAt: [2.2, -0.75], style: "italic" },
            { from: [0, 0], to: [-2.2, -0.75], arrow: true, tone: "good", label: "−z", pos: "sw", labelAt: [-2.2, -0.75], style: "italic" },
          ],
          caption: String.raw`$z^*$: reflection in the real axis. $-z$: half-turn about $O$.`,
          alt: "Argand diagram showing z, its conjugate z* as the reflection of z in the real axis, and -z as the half-turn of z about the origin.",
        },
        {
          type: "plot", x: [-2, 3], y: [-0.8, 2.6], equal: true, axisLabels: ["Re", "Im"],
          segments: [
            { from: [0, 0], to: [2, 1], arrow: true, label: "z", pos: "e", labelAt: [2, 1], style: "italic" },
            { from: [0, 0], to: [-1, 2], arrow: true, tone: "good", label: "iz", pos: "nw", labelAt: [-1, 2], style: "italic" },
          ],
          angles: [{ at: [0, 0], from: [2, 1], to: [-1, 2], r: 0.55, label: "π/2" }],
          caption: String.raw`$\ii z$: rotation through $\frac{\pi}{2}$ anticlockwise about $O$; $|\ii z| = |z|$.`,
          alt: "Argand diagram showing z and iz: iz is z rotated a quarter-turn anticlockwise about the origin, with the right angle between them marked pi/2.",
        },
        {
          type: "plot", x: [-0.7, 5.4], y: [-1.3, 3.7], equal: true, axisLabels: ["Re", "Im"],
          polygons: [{ points: [[0, 0], [3.4, 1.2], [4.4, 3.2], [1, 2]], fill: true, tone: "muted" }],
          segments: [
            { from: [0, 0], to: [3.4, 1.2], arrow: true, label: "z", pos: "se", style: "italic" },
            { from: [0, 0], to: [1, 2], arrow: true, tone: "good", label: "w", pos: "nw", style: "italic" },
            { from: [0, 0], to: [4.4, 3.2], arrow: true, tone: "ink", label: "z + w", pos: "e", labelAt: [4.4, 3.2], style: "italic" },
            { from: [1, 2], to: [3.4, 1.2], arrow: true, tone: "warn", label: "z − w", pos: "ne", labelAt: [2.4, 1.55], style: "italic" },
            { from: [0, 0], to: [2.4, -0.8], arrow: true, dashed: true, tone: "warn", label: "z − w", pos: "e", labelAt: [2.4, -0.8], style: "italic" },
          ],
          points: [{ x: 3.4, y: 1.2, label: "Z", pos: "e" }, { x: 1, y: 2, label: "W", pos: "w" }],
          caption: String.raw`$z + w$: diagonal of the parallelogram. $z - w = \overrightarrow{WZ}$, so $|z - w| = WZ$.`,
          alt: "Parallelogram with vertices O, Z, Z + W and W. The diagonal from O is z + w; the vector from W to Z is z - w, drawn again from the origin as a dashed arrow.",
        },
        {
          type: "plot", x: [-1.4, 4.4], y: [0, 4.4], equal: true, axes: false,
          polygons: [{ points: [[0.5, 0.5], [3, 1.3], [2.2, 3.8], [-0.3, 3]], fill: true, tone: "muted" }],
          segments: [
            { from: [0.5, 0.5], to: [3, 1.3], arrow: true, label: "b − a", pos: "s", style: "italic" },
            { from: [3, 1.3], to: [2.2, 3.8], arrow: true, tone: "good", label: "i(b − a)", pos: "e", style: "italic" },
            { from: [0.5, 0.5], to: [-0.3, 3], arrow: true, tone: "good", label: "i(b − a)", pos: "w", style: "italic" },
          ],
          rightAngles: [{ at: [0.5, 0.5], a: [2.5, 0.8], b: [-0.8, 2.5], size: 0.3 }],
          points: [
            { x: 0.5, y: 0.5, label: "A", pos: "sw" }, { x: 3, y: 1.3, label: "B", pos: "se" },
            { x: 2.2, y: 3.8, label: "C", pos: "ne" }, { x: -0.3, y: 3, label: "D", pos: "nw" },
          ],
          caption: String.raw`Square $ABCD$ (anticlockwise): $c - b = d - a = \ii(b - a)$.`,
          alt: "Square ABCD labelled anticlockwise. The side AB is the vector b - a; the sides BC and AD are both i(b - a), the quarter-turn of AB.",
        },
      ],
    },
    {
      title: String.raw`Calculator use and showing working`,
      body: String.raw`The GC handles complex arithmetic in $a + b\ii$ mode and can find polynomial roots — use it to **check**. Many complex-number questions say "without using a calculator", so full algebraic working (multiplying by conjugates, comparing parts) is required; a GC answer alone scores nothing. Leave answers exact (surds, $\pi$) unless told otherwise.`,
    },
  ],
  archetypes: [
    {
      id: "4.1-quadratic-complex-roots",
      name: String.raw`Complex roots of quadratic equations`,
      tests: String.raw`Solving quadratics with negative discriminant, and finding the square roots of a complex number by comparing parts in order to solve a quadratic with non-real coefficients.`,
      questions: [
        {
          stem: String.raw`The roots of the equation $z^2 - 6z + 13 = 0$ are $\alpha$ and $\beta$, where $\Im(\alpha) > 0$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $\alpha$ and $\beta$ in the form $x + \ii y$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\dfrac{\alpha}{\beta}$ in the form $x + \ii y$, where $x$ and $y$ are exact.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the range of values of the real constant $k$ for which the equation $z^2 - 6z + k = 0$ has non-real roots.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`By writing $(x + \ii y)^2 = 5 - 12\ii$, where $x$ and $y$ are real, find the two square roots of $5 - 12\ii$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve the equation $z^2 - z - 1 + 3\ii = 0$, giving your answers in the form $x + \ii y$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Explain why the roots found in part (ii) are not complex conjugates of each other.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "4.1-four-operations",
      name: String.raw`Four operations, including real and purely imaginary conditions`,
      tests: String.raw`Carrying out complex arithmetic exactly, especially division by the conjugate, and imposing "is real" or "is purely imaginary" to find an unknown. Includes contextual questions (e.g. impedance) where the formula is given.`,
      questions: [
        {
          stem: String.raw`The complex numbers $z$ and $w$ are given by $z = 2 + 3\ii$ and $w = 1 - \ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $zw^*$ and $\dfrac{z}{w}$, each in the form $x + \ii y$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the real number $a$ such that $\dfrac{z + a}{w}$ is purely imaginary.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find $\ii^{2027} z$ in the form $x + \ii y$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In an alternating-current circuit, the impedance of each component is a complex number, measured in ohms. When two components with impedances $Z_1$ and $Z_2$ are connected in parallel, the combined impedance $Z$ satisfies
$$\frac{1}{Z} = \frac{1}{Z_1} + \frac{1}{Z_2}.$$
When components are connected in series, their impedances add. Two components with impedances $Z_1 = 3 + 4\ii$ and $Z_2 = 4 - 3\ii$ are connected in parallel.`,
          parts: [
            { label: "(i)", text: String.raw`Without using a calculator, show that $Z = \frac{7}{2} + \frac{1}{2}\ii$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact value of $|Z|$, and find $\arg Z$ correct to 3 significant figures.`, marks: 2 },
            { label: "(iii)", text: String.raw`A third component with impedance $Z_3$ is connected in series with the parallel pair so that the total impedance of the circuit is real and equal to 6 ohms. Find $Z_3$ in the form $x + \ii y$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "4.1-equality-solve",
      name: String.raw`Equality of complex numbers: solving for $z$ (and $w$)`,
      tests: String.raw`Substituting $z = x + \ii y$ into equations involving $z$, $z^*$ and $zz^*$ and equating real and imaginary parts, or eliminating between simultaneous equations in two complex unknowns.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find the complex number $z$ such that $2z + \ii z^* = 4 + 5\ii$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the complex numbers $z$ satisfying $zz^* - 2\ii z = 7 - 4\ii$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The complex numbers $z$ and $w$ satisfy the simultaneous equations
$$\ii z + 2w = 2 - \ii, \qquad z + (1 + \ii)w = 4 + 3\ii.$$`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $z$ and $w$ in the form $x + \ii y$.`, marks: 5 },
            { label: "(ii)", text: String.raw`Find the exact distance between the points representing $z$ and $w$ in an Argand diagram.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "4.1-modulus-argument",
      name: String.raw`Modulus, argument and conjugate`,
      tests: String.raw`Finding $|z|$ and the principal argument with correct quadrant, exactly or to 3 d.p., and relating $\arg z^*$, $\arg(-z)$, $\arg(\ii z)$ to $\arg z$. Arguments of quotients are found by first converting to cartesian form.`,
      questions: [
        {
          stem: String.raw`The complex number $z$ is given by $z = 1 + \sqrt{3}\,\ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find the exact values of $|z|$ and $\arg z$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact values of $\arg(z^*)$, $\arg(-z)$ and $\arg(\ii z)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Show that $z^3 = -8$. Hence find $z^7$ in the form $x + \ii y$, where $x$ and $y$ are exact.`, marks: 3 },
            { label: "(iv)", text: String.raw`The complex number $u$ is given by $u = -3 - 4\ii$. Find $|u|$, and find $\arg u$ correct to 3 decimal places.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The complex number $w$ is given by $w = \dfrac{\sqrt{3} + \ii}{1 - \ii}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Express $w$ in the form $x + \ii y$, where $x$ and $y$ are exact.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact value of $|w|$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Show that $\tan(\arg w) = 2 + \sqrt{3}$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Given that $\tan\frac{5\pi}{12} = 2 + \sqrt{3}$, state the exact value of $\arg w$, justifying your answer.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "4.1-conjugate-roots",
      name: String.raw`Conjugate roots of real polynomials`,
      tests: String.raw`Given one non-real root of a polynomial with real coefficients, using the conjugate root theorem to find a real quadratic factor, the unknown coefficients and the remaining roots; often followed by a "hence" substitution.`,
      questions: [
        {
          stem: String.raw`It is given that $2 + \ii$ is a root of the equation $z^3 + az^2 + bz + 10 = 0$, where $a$ and $b$ are real constants.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Write down another root of the equation, giving a reason for your answer.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the values of $a$ and $b$, and find the third root of the equation.`, marks: 4 },
            { label: "(iii)", text: String.raw`Hence solve the equation $10w^3 - 3w^2 - 2w + 1 = 0$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The equation $z^4 - 4z^3 + 9z^2 - 16z + 20 = 0$ has a root $z = 2\ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find the other roots of the equation.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show the roots on an Argand diagram.`, marks: 1 },
            { label: "(iii)", text: String.raw`The points representing the roots are the vertices of a quadrilateral. Find the area of this quadrilateral.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "4.1-polynomial-known-root",
      name: String.raw`Factorising polynomials with a known root`,
      tests: String.raw`Using the factor theorem to factorise a cubic or quartic, including ones with non-real coefficients where the conjugate root theorem does not apply, and transforming roots under substitutions such as $w = 2z$.`,
      questions: [
        {
          stem: String.raw`The polynomial $\mathrm{P}(z)$ is given by
$$\mathrm{P}(z) = z^3 + (1 - 2\ii)z^2 - (3 + 3\ii)z - 2 + 2\ii.$$`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $z = -2$ is a root of the equation $\mathrm{P}(z) = 0$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Hence find the quadratic factor of $\mathrm{P}(z)$, and solve the equation $\mathrm{P}(z) = 0$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Explain why the non-real roots of $\mathrm{P}(z) = 0$ do not occur as a conjugate pair.`, marks: 1 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $z^4 + 4 = \left(z^2 + 2z + 2\right)\left(z^2 - 2z + 2\right)$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Hence solve the equation $z^4 + 4 = 0$, giving your answers in the form $x + \ii y$.`, marks: 3 },
            { label: "(iii)", text: String.raw`By using a suitable substitution, deduce the roots of the equation $w^4 + 64 = 0$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "4.1-argand-geometry",
      name: String.raw`Argand diagram and geometric effects`,
      tests: String.raw`Interpreting conjugation, negation, addition, subtraction and multiplication by $\ii$ as reflections, half-turns, translations and quarter-turns, e.g. to find the vertices of squares and parallelograms or to identify a shape.`,
      questions: [
        {
          stem: String.raw`The complex number $z$ is given by $z = 3 + \ii$. In an Argand diagram, the points $A$, $B$ and $C$ represent $z$, $\ii z$ and $z + \ii z$ respectively, and $O$ is the origin.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $\ii z$ and $z + \ii z$ in the form $x + \ii y$, and show $A$, $B$ and $C$ on an Argand diagram.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that $OACB$ is a square, and find its area.`, marks: 3 },
            { label: "(iii)", text: String.raw`The points $D$ and $E$ represent $z^*$ and $-z$ respectively. Describe fully the geometrical transformation that maps $A$ onto $D$, and the one that maps $A$ onto $E$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the exact value of $|z - \ii z|$ and state what it represents geometrically.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`The points $P$ and $Q$ represent the complex numbers $p = 2 + \ii$ and $q = -1 + 3\ii$. The point $R$ is such that $OPRQ$ is a parallelogram, where $O$ is the origin. Find the complex number represented by $R$, and find the exact length of the diagonal $PQ$.`, marks: 3 },
            { label: "(b)", text: String.raw`The points $A$ and $B$ represent the complex numbers $1 + 2\ii$ and $4 + 3\ii$ respectively. $ABCD$ is a square, with its vertices labelled in an anticlockwise direction. By considering multiplication by $\ii$, find the complex numbers represented by $C$ and $D$, and the complex number represented by the centre of the square.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
