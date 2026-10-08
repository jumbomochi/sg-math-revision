H2.addTopic({
  id: "X1",
  title: "Complex Numbers in Polar and Exponential Form",
  paper: "FM 9649 · pre-2025 H2",
  tags: ["IP"],
  summary: String.raw`Not in 9758 from 2025 (polar and exponential form removed; de Moivre and roots are in H2 Further Mathematics 9649). Modulus–argument and exponential form, products and quotients, de Moivre's theorem, $n$th roots and simple loci.`,
  syllabus: {
    include: [
      String.raw`complex numbers in the form $r(\cos\theta + \ii\sin\theta)$ and $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$`,
      String.raw`multiplication and division in polar form: $|zw| = |z||w|$, $\arg(zw) = \arg z + \arg w$, $\arg\left(\frac{z}{w}\right) = \arg z - \arg w$ (adjusted by $\pm 2\pi$), and their geometrical meaning`,
      String.raw`de Moivre's theorem for integer powers: finding $z^n$, and conditions such as "$z^n$ is real" or "$z^n$ is purely imaginary"`,
      String.raw`using $z^n \pm z^{-n}$ and de Moivre's theorem to derive trigonometric identities`,
      String.raw`$n$th roots of a complex number and roots of unity, shown on the Argand diagram`,
      String.raw`simple loci $|z - a| = r$ and $\arg(z - a) = \theta$`,
    ],
    exclude: [
      String.raw`loci such as $|z - a| = k|z - b|$ with $k \ne 1$, and $\arg(z - a) - \arg(z - b) = \alpha$`,
      String.raw`complex powers and logarithms of complex numbers`,
    ],
  },
  concepts: [
    {
      title: String.raw`Polar (modulus–argument) and exponential form`,
      body: String.raw`If $|z| = r$ and $\arg z = \theta$, then $x = r\cos\theta$, $y = r\sin\theta$, so

$$z = r(\cos\theta + \ii\sin\theta) = r\ee^{\ii\theta}, \qquad \text{using Euler's formula } \ee^{\ii\theta} = \cos\theta + \ii\sin\theta.$$

- **Principal argument:** $-\pi < \theta \le \pi$. Sketch the point first to get the quadrant right. For example, $-1 + \ii = \sqrt{2}\,\ee^{\ii 3\pi/4}$.
- $r$ must be **positive**: $-2\ee^{\ii\pi/6}$ is not in polar form; write it as $2\ee^{\ii(\pi/6 - \pi)} = 2\ee^{-\ii 5\pi/6}$.
- $z^* = r\ee^{-\ii\theta}$, $\ -z = r\ee^{\ii(\theta \pm \pi)}$, $\ \dfrac{1}{z} = \dfrac{1}{r}\ee^{-\ii\theta}$.
- $\ee^{\ii\theta}$ always has modulus 1, so it lies on the unit circle; $\ee^{\ii\pi} = -1$, $\ee^{\ii\pi/2} = \ii$.
- A useful trick: $1 + \ee^{\ii\phi} = \ee^{\ii\phi/2}\left(\ee^{-\ii\phi/2} + \ee^{\ii\phi/2}\right) = 2\cos\frac{\phi}{2}\,\ee^{\ii\phi/2}$ ("take out the half-angle").`,
      figure: {
        type: "plot", x: [-0.8, 3.4], y: [-0.7, 3.1], equal: true, axisLabels: ["Re", "Im"],
        segments: [
          { from: [0, 0], to: [1.865, 2.35], tone: "accent", label: "r", pos: "nw", style: "italic" },
          { from: [1.865, 2.35], to: [1.865, 0], tone: "muted", thin: true, dashed: true },
          { from: [0, 2.35], to: [1.865, 2.35], tone: "muted", thin: true, dashed: true },
        ],
        angles: [{ at: [0, 0], from: [1, 0], to: [1.865, 2.35], r: 0.6, label: "θ" }],
        points: [{ x: 1.865, y: 2.35, label: "z", pos: "ne", style: "italic" }],
        xTicks: [{ x: 1.865, label: "r cos θ" }],
        yTicks: [{ y: 2.35, label: "r sin θ" }],
        caption: String.raw`$z = r(\cos\theta + \ii\sin\theta) = r\ee^{\ii\theta}$: distance $r$ from $O$, angle $\theta$ from the positive real axis.`,
        alt: "Argand diagram with z at distance r from O at angle theta to the positive real axis; dashed lines drop to r cos theta on the real axis and r sin theta on the imaginary axis.",
      },
    },
    {
      title: String.raw`Multiplication and division`,
      body: String.raw`With $z = r_1\ee^{\ii\alpha}$ and $w = r_2\ee^{\ii\beta}$:

$$zw = r_1 r_2\,\ee^{\ii(\alpha + \beta)}, \qquad \frac{z}{w} = \frac{r_1}{r_2}\,\ee^{\ii(\alpha - \beta)}.$$

So $|zw| = |z||w|$, $\left|\frac{z}{w}\right| = \frac{|z|}{|w|}$, $\arg(zw) = \arg z + \arg w$ and $\arg\left(\frac{z}{w}\right) = \arg z - \arg w$, **then add or subtract $2\pi$** to bring the answer into $(-\pi, \pi]$. Similarly $|z^n| = |z|^n$.

- **Geometry:** multiplying by $w = r_2\ee^{\ii\beta}$ enlarges by factor $r_2$ about $O$ and rotates anticlockwise through $\beta$. In particular $\ee^{\ii\beta}$ is a pure rotation: if $OAB$ is equilateral (anticlockwise), $b = a\,\ee^{\ii\pi/3}$; more generally $c - p = (a - p)\ee^{\ii\beta}$ rotates $A$ about $P$.
- **Exact trig values:** work out a product both in polar form and in cartesian form, then compare. For example $(-1 + \ii)(\sqrt{3} + \ii)$ has argument $\frac{3\pi}{4} + \frac{\pi}{6} = \frac{11\pi}{12}$ and modulus $2\sqrt{2}$, so its real part divided by $2\sqrt{2}$ is $\cos\frac{11\pi}{12}$.`,
      figure: {
        type: "plot", x: [-0.6, 2.6], y: [-0.5, 2.6], equal: true, axisLabels: ["Re", "Im"],
        segments: [
          { from: [0, 0], to: [1.44, 0.696], arrow: true, label: "z", pos: "se", labelAt: [1.44, 0.696], style: "italic" },
          { from: [0, 0], to: [1.024, 0.954], arrow: true, tone: "good", label: "w", pos: "e", labelAt: [1.024, 0.954], style: "italic" },
          { from: [0, 0], to: [0.812, 2.088], arrow: true, tone: "warn", label: "zw", pos: "ne", labelAt: [0.812, 2.088], style: "italic" },
        ],
        angles: [
          { at: [0, 0], from: [1, 0], to: [1.44, 0.696], r: 0.55, label: "α" },
          { at: [0, 0], from: [1.44, 0.696], to: [0.812, 2.088], r: 1.15, label: "β" },
        ],
        caption: String.raw`Multiplying $z$ by $w = r_2\ee^{\ii\beta}$ rotates it through $\beta = \arg w$ and scales it by $|w|$.`,
        alt: "Argand diagram with vectors z at angle alpha, w, and zw. The angle from z to zw is beta, equal to arg w, and zw is longer than z.",
      },
    },
    {
      title: String.raw`De Moivre's theorem`,
      body: String.raw`For every integer $n$ (positive, zero or negative):

$$(\cos\theta + \ii\sin\theta)^n = \cos n\theta + \ii\sin n\theta, \qquad \text{i.e. } \left(r\ee^{\ii\theta}\right)^n = r^n\ee^{\ii n\theta}.$$

- **Powers:** convert to polar form, raise, reduce $n\theta$ into $(-\pi, \pi]$, then convert back if asked. For example $(1 + \ii)^8 = \left(\sqrt{2}\right)^8\ee^{\ii 2\pi} = 16$.
- **Real / purely imaginary conditions:** $z^n$ is real $\iff \sin n\theta = 0 \iff n\theta = k\pi$; real and **positive** needs $n\theta = 2k\pi$. $z^n$ is purely imaginary $\iff \cos n\theta = 0 \iff n\theta = \frac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$). Solve for the integer $n$; it may be that no integer works.
- Negative powers: $z^{-n} = r^{-n}\ee^{-\ii n\theta}$.
- The modulus grows like $r^n$, so the powers of $z$ spiral outwards ($r > 1$), stay on the unit circle ($r = 1$) or spiral in ($r < 1$).`,
      figure: {
        type: "plot", x: [-1.6, 1.8], y: [-0.4, 2.1], equal: true, axisLabels: ["Re", "Im"],
        curves: [{ param: "t => [Math.cos(t), Math.sin(t)]", t: [0, 3.1416], dashed: true, tone: "muted" }],
        segments: [
          { from: [0, 0], to: [1.022, 0.59], tone: "accent", thin: true },
          { from: [0, 0], to: [0.696, 1.206], tone: "accent", thin: true },
          { from: [0, 0], to: [0, 1.643], tone: "accent", thin: true },
          { from: [0, 0], to: [-0.97, 1.679], tone: "accent", thin: true },
        ],
        points: [
          { x: 1.022, y: 0.59, label: "z", pos: "e", style: "italic" },
          { x: 0.696, y: 1.206, label: "z²", pos: "ne", style: "italic" },
          { x: 0, y: 1.643, label: "z³", pos: "ne", style: "italic" },
          { x: -0.97, y: 1.679, label: "z⁴", pos: "nw", style: "italic" },
        ],
        angles: [{ at: [0, 0], from: [1, 0], to: [1.022, 0.59], r: 0.45, label: "θ" }],
        caption: String.raw`Powers of $z = r\ee^{\ii\theta}$ with $r$ slightly above 1: each step turns through $\theta$ and multiplies the modulus by $r$. The dashed curve is the unit circle.`,
        alt: "Argand diagram showing z, z squared, z cubed and z to the fourth, each a further angle theta round from the last and slightly further from O, spiralling outwards beyond the dashed unit circle.",
      },
    },
    {
      title: String.raw`Trigonometric identities from de Moivre`,
      body: String.raw`**Multiple angles in powers:** expand $(\cos\theta + \ii\sin\theta)^n$ by the binomial theorem and compare with $\cos n\theta + \ii\sin n\theta$. Real parts give $\cos n\theta$; imaginary parts give $\sin n\theta$. Example: $\cos 3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta - 3\cos\theta$.

**Powers in multiple angles:** with $z = \ee^{\ii\theta}$,

$$z^n + \frac{1}{z^n} = 2\cos n\theta, \qquad z^n - \frac{1}{z^n} = 2\ii\sin n\theta.$$

Expand $\left(z + \frac{1}{z}\right)^n = 2^n\cos^n\theta$ (pair terms symmetrically), e.g. $\cos^3\theta = \frac{1}{4}(\cos 3\theta + 3\cos\theta)$. This is the standard way to integrate $\cos^n\theta$ or $\sin^n\theta$.

- Use $\sin^2\theta = 1 - \cos^2\theta$ to finish in powers of $\cos\theta$ only.
- Follow-ups: solve $\cos n\theta = 0$ (or a known value) to find exact roots of the resulting polynomial in $\cos\theta$, and pick the root that matches the angle.`,
    },
    {
      title: String.raw`$n$th roots of a complex number`,
      body: String.raw`To solve $z^n = w$ where $w = R\ee^{\ii\phi}$, write $w = R\ee^{\ii(\phi + 2k\pi)}$ ($k \in \mathbb{Z}$) **before** taking the root:

$$z = R^{1/n}\,\ee^{\ii(\phi + 2k\pi)/n}, \qquad k = 0, 1, \dots, n - 1 \ \text{(or any } n \text{ consecutive integers)}.$$

- There are exactly $n$ distinct roots. Choose the values of $k$ so every argument lies in $(-\pi, \pi]$.
- All roots have modulus $R^{1/n}$: they lie on a circle centre $O$, spaced $\frac{2\pi}{n}$ apart, at the vertices of a **regular $n$-gon**.
- If $w$ is real, the roots come in conjugate pairs; pairing them gives **real quadratic factors** $z^2 - 2\rho\cos\alpha\,z + \rho^2$.
- Equations such as $z^6 + az^3 + b = 0$: solve the quadratic in $z^3$ first, then take cube roots of each answer.
- Example: $z^3 = 8\ii = 8\ee^{\ii(\pi/2 + 2k\pi)}$ gives $z = 2\ee^{\ii\pi/6}, 2\ee^{\ii 5\pi/6}, 2\ee^{-\ii\pi/2}$.`,
      figure: {
        type: "plot", x: [-2.7, 2.7], y: [-2.5, 2.5], equal: true, axisLabels: ["Re", "Im"],
        circles: [{ c: [0, 0], r: 2, tone: "muted", dashed: true }],
        polygons: [{ points: [[1.732, 1], [-1.732, 1], [0, -2]], fill: true, tone: "accent" }],
        segments: [
          { from: [0, 0], to: [1.732, 1], tone: "muted", thin: true },
          { from: [0, 0], to: [0, -2], tone: "muted", thin: true },
        ],
        angles: [{ at: [0, 0], from: [0, -2], to: [1.732, 1], r: 0.55, label: "2π/3" }],
        points: [
          { x: 1.732, y: 1, label: "√3 + i", pos: "ne" },
          { x: -1.732, y: 1, label: "−√3 + i", pos: "nw" },
          { x: 0, y: -2, label: "−2i", pos: "se" },
        ],
        caption: String.raw`The cube roots of $8\ii$ lie on the circle $|z| = 2$, $\frac{2\pi}{3}$ apart: an equilateral triangle.`,
        alt: "Argand diagram with a dashed circle of radius 2 centred at O. The three cube roots of 8i, at root 3 plus i, minus root 3 plus i and minus 2i, form an equilateral triangle; adjacent roots subtend 2 pi over 3 at O.",
      },
    },
    {
      title: String.raw`Roots of unity`,
      body: String.raw`The roots of $z^n = 1$ are $1, \omega, \omega^2, \dots, \omega^{n-1}$ where $\omega = \ee^{\ii 2\pi/n}$. They are the vertices of a regular $n$-gon inscribed in the unit circle, with one vertex at 1.

- **Sum of the roots is zero:** $1 + \omega + \dots + \omega^{n-1} = \dfrac{\omega^n - 1}{\omega - 1} = 0$ (GP with $\omega \ne 1$). Equivalently, the coefficient of $z^{n-1}$ in $z^n - 1$ is zero.
- $\omega^{n-k} = \left(\omega^k\right)^* = \omega^{-k}$, so $\omega^k + \omega^{n-k} = 2\cos\frac{2k\pi}{n}$. This turns sums of roots into sums of cosines.
- Real factorisation: $z^n - 1$ = $(z - 1)$ (and $(z + 1)$ if $n$ is even) times quadratics $z^2 - 2\cos\frac{2k\pi}{n}\,z + 1$.
- **Transformed equations:** $(z + a)^n = (z + b)^n$ becomes $\left(\frac{z + a}{z + b}\right)^n = 1$; set $\frac{z + a}{z + b} = \ee^{\ii 2k\pi/n}$ and make $z$ the subject, using the half-angle trick to simplify.`,
      figure: {
        type: "plot", x: [-1.6, 1.6], y: [-1.45, 1.45], equal: true, axisLabels: ["Re", "Im"], originLabel: false,
        circles: [{ c: [0, 0], r: 1, tone: "muted", dashed: true }],
        polygons: [{ points: [[1, 0], [0.7071, 0.7071], [0, 1], [-0.7071, 0.7071], [-1, 0], [-0.7071, -0.7071], [0, -1], [0.7071, -0.7071]], fill: true, tone: "accent" }],
        angles: [{ at: [0, 0], from: [1, 0], to: [0.7071, 0.7071], r: 0.35, label: "π/4" }],
        segments: [{ from: [0, 0], to: [0.7071, 0.7071], tone: "muted", thin: true }],
        points: [
          { x: 1, y: 0, label: "1", pos: "se" },
          { x: 0.7071, y: 0.7071, label: "ω", pos: "ne", style: "italic" },
          { x: 0, y: 1, label: "ω²", pos: "ne", style: "italic" },
          { x: -0.7071, y: 0.7071, label: "ω³", pos: "nw", style: "italic" },
          { x: -1, y: 0, label: "ω⁴", pos: "sw", style: "italic" },
          { x: -0.7071, y: -0.7071, label: "ω⁵", pos: "sw", style: "italic" },
          { x: 0, y: -1, label: "ω⁶", pos: "se", style: "italic" },
          { x: 0.7071, y: -0.7071, label: "ω⁷", pos: "se", style: "italic" },
        ],
        caption: String.raw`The eighth roots of unity, $\omega = \ee^{\ii\pi/4}$: a regular octagon on the unit circle. Roots opposite each other in the real axis are conjugates.`,
        alt: "Unit circle with the eight eighth roots of unity 1, omega, omega squared up to omega to the seventh, equally spaced at angles of 2 pi over 8 and joined to form a regular octagon.",
      },
    },
    {
      title: String.raw`Simple loci: $|z - a| = r$ and $\arg(z - a) = \theta$`,
      body: String.raw`$|z - a|$ is the distance from the point $A$ (representing $a$) to $Z$, and $\arg(z - a)$ is the angle that $\overrightarrow{AZ}$ makes with the positive real direction.

- $|z - a| = r$: **circle**, centre $A$, radius $r$. ($|z - a| \le r$: the disc; $<$: draw the circle dashed.)
- $\arg(z - a) = \theta$: **half-line** from $A$ at angle $\theta$, **excluding** $A$ itself (mark it with an open circle).
- Watch signs: $|z + 2 - \ii| = |z - (-2 + \ii)|$, so the centre is $(-2, 1)$.
- **Greatest / least values on a circle** (centre $C$, radius $r$): $|z|$ ranges from $OC - r$ to $OC + r$ (along the line $OC$); $\arg z$ is extreme where the line from $O$ is a **tangent**, found with right-angled triangle trigonometry ($\sin\alpha = r/OC$).
- Intersections: convert to cartesian equations, e.g. the half-line $\arg(z - a) = \frac{\pi}{4}$ lies on $y - \Im(a) = x - \Re(a)$, then check which solutions are actually on the half-line.`,
      figure: [
        {
          type: "plot", x: [-0.5, 3.2], y: [-0.6, 2.6], equal: true, axisLabels: ["Re", "Im"],
          circles: [{ c: [1.6, 1], r: 1.2, tone: "accent" }],
          segments: [{ from: [1.6, 1], to: [2.639, 1.6], tone: "muted", thin: true, label: "r", pos: "n", style: "italic" }],
          points: [{ x: 1.6, y: 1, label: "A", pos: "sw" }],
          caption: String.raw`$|z - a| = r$: circle, centre $A$, radius $r$.`,
          alt: "Argand diagram with a circle of radius r centred at the point A.",
        },
        {
          type: "plot", x: [-0.5, 3.2], y: [-0.6, 2.6], equal: true, axisLabels: ["Re", "Im"],
          segments: [
            { from: [0.8, 0.6], to: [2.8, 2.6], tone: "accent" },
            { from: [0.8, 0.6], to: [2.2, 0.6], tone: "muted", thin: true, dashed: true },
          ],
          circles: [{ c: [0.8, 0.6], r: 0.07, tone: "accent" }],
          angles: [{ at: [0.8, 0.6], from: [1.8, 0.6], to: [1.8, 1.6], r: 0.55, label: "θ" }],
          labels: [{ x: 0.8, y: 0.6, text: "A", pos: "w" }],
          caption: String.raw`$\arg(z - a) = \theta$: half-line from $A$, with $A$ excluded.`,
          alt: "Argand diagram with a half-line starting at the point A, shown as an open circle, making angle theta with a dashed horizontal line through A.",
        },
      ],
    },
    {
      title: String.raw`Exam technique`,
      body: String.raw`- Questions are usually "without using a calculator": show the polar form of each number, the addition of arguments and the adjustment by $2\pi$. The GC (complex mode, $r\ee^{\theta\ii}$ display) is for checking only.
- State arguments in the principal range $(-\pi, \pi]$ unless told otherwise, and give exact values ($\frac{7\pi}{12}$, not 1.83).
- "Express in the form $r\ee^{\ii\theta}$" needs $r > 0$ and $\theta$ stated exactly; "in the form $x + \ii y$" needs exact surds.
- For $n$th roots, write the general argument $\phi + 2k\pi$ **first**, then list the $n$ values; a list of roots with one missing loses most of the marks.
- "Show on an Argand diagram": mark each root with its modulus and argument (or coordinates), draw the circle, and keep the scale equal on both axes.`,
    },
  ],
  archetypes: [
    {
      id: "X1-convert-forms",
      name: String.raw`Converting between cartesian, polar and exponential form`,
      tests: String.raw`Not in 9758 from 2025. Finding the modulus and principal argument and writing $z$ as $r(\cos\theta + \ii\sin\theta)$ or $r\ee^{\ii\theta}$ (and back), including $z^*$, $-z$ and expressions such as $1 \pm \ee^{\ii\theta}$ where the modulus and argument depend on $\theta$.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Express $z_1 = -3\sqrt{3} - 3\ii$ and $z_2 = -4\ii$ in the form $r(\cos\theta + \ii\sin\theta)$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence write down $z_1^{\,*}$ and $-z_1$ in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 2 },
            { label: "(iii)", text: String.raw`The complex number $z_3$ is given by $z_3 = 4\ee^{-\ii 2\pi/3}$. Express $z_3$ in the form $x + \ii y$, where $x$ and $y$ are exact.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that $0 < \theta < \pi$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $1 + \ee^{\ii\theta} = 2\cos\frac{\theta}{2}\,\ee^{\ii\theta/2}$. Hence state the modulus and argument of $1 + \ee^{\ii\theta}$ in terms of $\theta$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find, in terms of $\theta$, the modulus and argument of $1 - \ee^{\ii\theta}$, giving the argument in the interval $(-\pi, \pi]$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence show that $\dfrac{1 + \ee^{\ii\theta}}{1 - \ee^{\ii\theta}} = \ii\cot\frac{\theta}{2}$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X1-product-quotient",
      name: String.raw`Products, quotients and rotations using modulus and argument`,
      tests: String.raw`Not in 9758 from 2025. Using $|zw| = |z||w|$ and $\arg(zw) = \arg z + \arg w$ (and the quotient versions) with the $\pm 2\pi$ adjustment, comparing polar and cartesian forms to find exact trigonometric values, and using multiplication by $\ee^{\ii\alpha}$ as a rotation in Argand-diagram geometry.`,
      questions: [
        {
          stem: String.raw`The complex numbers $z$ and $w$ are given by $z = 1 + \ii$ and $w = \sqrt{3} - \ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find the modulus and argument of $z$ and of $w$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the exact values of $|zw|$, $\arg(zw)$, $\left|\dfrac{z}{w}\right|$ and $\arg\left(\dfrac{z}{w}\right)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`By expressing $zw$ in the form $x + \ii y$, find the exact values of $\cos\frac{\pi}{12}$ and $\sin\frac{\pi}{12}$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The diagram shows an equilateral triangle $OAB$ in an Argand diagram, where $O$ is the origin and the vertices are labelled anticlockwise. The points $A$ and $B$ represent the complex numbers $a$ and $b$ respectively, where $a = 2 + 2\ii$.`,
          figure: {
            type: "plot", x: [-1.6, 3.2], y: [-0.6, 3.3], equal: true, axisLabels: ["Re", "Im"], originLabel: "sw",
            polygons: [{ points: [[0, 0], [2, 2], [-0.732, 2.732]], fill: true, tone: "accent" }],
            points: [
              { x: 2, y: 2, label: "A", pos: "e" },
              { x: -0.732, y: 2.732, label: "B", pos: "nw" },
            ],
            alt: "Argand diagram showing an equilateral triangle with vertices at the origin O, the point A in the first quadrant, and the point B in the second quadrant, labelled anticlockwise.",
          },
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Express $a$ in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Explain why $b = a\,\ee^{\ii\pi/3}$, and hence find $b$ in the form $r\ee^{\ii\theta}$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $b$ in the form $x + \ii y$, where $x$ and $y$ are exact. Hence find the exact value of $\cos\frac{7\pi}{12}$.`, marks: 3 },
            { label: "(iv)", text: String.raw`The point $C$, representing $c$, is such that $OACB$ is a rhombus. Find the exact values of $|c|$ and $\arg c$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-de-moivre-powers",
      name: String.raw`De Moivre's theorem: powers and real or imaginary conditions`,
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Raising a complex number to an integer power by converting to polar form, reducing the argument into the principal range, and finding the integers $n$ for which $z^n$ (or a product such as $u^n v^m$) is real, real and positive, or purely imaginary.`,
      questions: [
        {
          stem: String.raw`The complex number $z$ is given by $z = 1 - \sqrt{3}\,\ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Express $z$ in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Use de Moivre's theorem to find $z^{10}$ in the form $x + \ii y$, where $x$ and $y$ are exact.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the set of positive integers $n$ for which $z^n$ is real.`, marks: 2 },
            { label: "(iv)", text: String.raw`Show that $z^n$ is not purely imaginary for any positive integer $n$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The complex numbers $u$ and $v$ are given by $u = \sqrt{3} + \ii$ and $v = 1 - \ii$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find $\dfrac{u^4}{v^3}$ in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the smallest positive integer $n$ for which $(uv)^n$ is purely imaginary, and find $(uv)^n$ for this value of $n$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the values of $n$, where $1 \le n \le 50$, for which $(uv)^n$ is a negative real number.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "X1-trig-identities",
      name: String.raw`Using de Moivre's theorem to derive trigonometric identities`,
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Expanding $(\cos\theta + \ii\sin\theta)^n$ to write $\cos n\theta$ or $\sin n\theta$ in powers of $\cos\theta$ or $\sin\theta$, or expanding $\left(z \pm \frac{1}{z}\right)^n$ with $z = \ee^{\ii\theta}$ to write a power in multiple angles, followed by solving a polynomial exactly or evaluating an integral.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Use de Moivre's theorem to show that $\cos 5\theta = 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$.`, marks: 4 },
            { label: "(ii)", text: String.raw`By considering the equation $\cos 5\theta = 0$, show that $\cos\frac{\pi}{10} = \sqrt{\dfrac{5 + \sqrt{5}}{8}}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence write down the exact value of $\cos^2\frac{3\pi}{10}$, justifying your answer.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that $z = \cos\theta + \ii\sin\theta$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $z^n + \dfrac{1}{z^n} = 2\cos n\theta$ for positive integers $n$.`, marks: 2 },
            { label: "(ii)", text: String.raw`By expanding $\left(z + \dfrac{1}{z}\right)^4$, show that $\cos^4\theta = \frac{1}{8}\left(\cos 4\theta + 4\cos 2\theta + 3\right)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence find the exact value of $\displaystyle\int_0^{\pi/4} \cos^4\theta \,\dd\theta$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-nth-roots",
      name: String.raw`$n$th roots of a complex number`,
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Solving $z^n = w$ by writing $w$ with general argument $\phi + 2k\pi$, listing all $n$ roots in the principal range, showing them on an Argand diagram as a regular polygon, and using conjugate pairs to form real quadratic factors.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the equation $z^4 = -8 + 8\sqrt{3}\,\ii$, giving the roots in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show the roots on an Argand diagram. The points representing the roots are the vertices of a polygon. State the type of polygon and find its exact area.`, marks: 3 },
            { label: "(iii)", text: String.raw`Express the root in the first quadrant in the form $x + \ii y$.`, marks: 1 },
            { label: "(iv)", text: String.raw`Deduce the roots of the equation $z^4 = -8 - 8\sqrt{3}\,\ii$.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`By first solving a quadratic equation in $z^3$, find the six roots of $z^6 - 2z^3 + 4 = 0$, giving them in the form $r\ee^{\ii\theta}$, where $r > 0$ and $-\pi < \theta \le \pi$.`, marks: 5 },
            { label: "(ii)", text: String.raw`Show the six roots on an Argand diagram.`, marks: 2 },
            { label: "(iii)", text: String.raw`Hence express $z^6 - 2z^3 + 4$ as the product of three quadratic factors with real coefficients, giving the coefficients in trigonometric form.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "X1-roots-of-unity",
      name: String.raw`Roots of unity and equations that reduce to them`,
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Finding the $n$th roots of unity, proving that their sum is zero, factorising $z^n - 1$ into real quadratics to obtain cosine identities, and solving equations such as $(z + a)^n = (z + b)^n$ by reducing them to roots of unity.`,
      questions: [
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Solve the equation $z^5 = 1$, giving the roots in the form $\ee^{\ii\theta}$, where $-\pi < \theta \le \pi$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Let $\omega = \ee^{\ii 2\pi/5}$. Show that $1 + \omega + \omega^2 + \omega^3 + \omega^4 = 0$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Show that $z^5 - 1 = (z - 1)\left(z^2 - 2\cos\frac{2\pi}{5}\,z + 1\right)\left(z^2 - 2\cos\frac{4\pi}{5}\,z + 1\right)$.`, marks: 3 },
            { label: "(iv)", text: String.raw`Hence show that $\cos\frac{2\pi}{5} + \cos\frac{4\pi}{5} = -\frac{1}{2}$.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Find the six roots of the equation $w^6 = 1$, giving them in the form $\ee^{\ii\phi}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Given that $\dfrac{z + \ii}{z - \ii} = \ee^{\ii\phi}$, where $\phi$ is not a multiple of $2\pi$, show that $z = \cot\frac{\phi}{2}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence solve the equation $(z + \ii)^6 = (z - \ii)^6$, giving your answers exactly, and explain why the equation has only five roots.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "X1-simple-loci",
      name: String.raw`Simple loci: circles and half-lines`,
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Sketching $|z - a| = r$ and $\arg(z - a) = \theta$ on one Argand diagram, finding the complex numbers on both loci, and finding greatest or least values of $|z|$, $|z - b|$ or $\arg z$ for points on a circle using distances and tangents.`,
      questions: [
        {
          stem: String.raw`Two loci in an Argand diagram are given by $|z - 2 - 2\ii| = 2$ and $\arg(z + 2) = \frac{\pi}{4}$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`On a single Argand diagram, sketch the loci $|z - 2 - 2\ii| = 2$ and $\arg(z + 2) = \frac{\pi}{4}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the complex numbers represented by the points of intersection of the two loci.`, marks: 3 },
            { label: "(iii)", text: String.raw`For points on the locus $|z - 2 - 2\ii| = 2$, find the exact least value of $|z|$, and state the least and greatest values of $\arg z$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The complex number $z$ satisfies $|z - 4\ii| = 2$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Sketch the locus of the point representing $z$ on an Argand diagram.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the greatest value of $\arg z$, and find the complex number $z$, in the form $x + \ii y$, for which this greatest value occurs.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find, in the form $x + \ii y$, the complex number $z$ on the locus for which $\arg(z - 4\ii) = -\frac{\pi}{6}$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the exact greatest value of $|z - 4|$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
