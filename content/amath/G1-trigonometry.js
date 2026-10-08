H2.addTopic({
  id: "G1",
  title: "Trigonometric Functions, Identities and Equations",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`The six trigonometric functions for any angle, their graphs, identities, the $R$-formula, solving equations in a given interval, and trigonometric models.`,
  syllabus: {
    include: [
      String.raw`six trigonometric functions for angles of any magnitude (in degrees or radians)`,
      String.raw`principal values of $\sin^{-1} x$, $\cos^{-1} x$, $\tan^{-1} x$`,
      String.raw`exact values of the trigonometric functions for special angles ($30^\circ$, $45^\circ$, $60^\circ$) or ($\frac{\pi}{6}$, $\frac{\pi}{4}$, $\frac{\pi}{3}$)`,
      String.raw`amplitude, periodicity and symmetries related to sine and cosine functions`,
      String.raw`graphs of $y = a\sin(bx) + c$, $y = a\sin\left(\frac{x}{b}\right) + c$, $y = a\cos(bx) + c$, $y = a\cos\left(\frac{x}{b}\right) + c$ and $y = a\tan(bx)$, where $a$ is real, $b$ is a positive integer and $c$ is an integer`,
      String.raw`use of $\frac{\sin A}{\cos A} = \tan A$, $\frac{\cos A}{\sin A} = \cot A$, $\sin^2 A + \cos^2 A = 1$, $\sec^2 A = 1 + \tan^2 A$, $\operatorname{cosec}^2 A = 1 + \cot^2 A$`,
      String.raw`use of the expansions of $\sin(A \pm B)$, $\cos(A \pm B)$ and $\tan(A \pm B)$, and the formulae for $\sin 2A$, $\cos 2A$ and $\tan 2A$`,
      String.raw`expressing $a\cos\theta + b\sin\theta$ in the form $R\cos(\theta \pm \alpha)$ or $R\sin(\theta \pm \alpha)$`,
      String.raw`simplification of trigonometric expressions`,
      String.raw`solution of simple trigonometric equations in a given interval (excluding general solution)`,
      String.raw`proofs of simple trigonometric identities`,
      String.raw`using trigonometric functions as models`,
    ],
    exclude: [
      String.raw`general solution of trigonometric equations`,
    ],
  },
  concepts: [
    {
      title: String.raw`Angles of any size and the six functions`,
      body: String.raw`Angles are measured **anticlockwise** from the positive $x$-axis (clockwise gives a negative angle). For a point $P(x, y)$ on a circle of radius $r$:
$$\sin\theta = \frac{y}{r}, \quad \cos\theta = \frac{x}{r}, \quad \tan\theta = \frac{y}{x}.$$
The other three are reciprocals: $\operatorname{cosec}\theta = \dfrac{1}{\sin\theta}$, $\sec\theta = \dfrac{1}{\cos\theta}$, $\cot\theta = \dfrac{1}{\tan\theta} = \dfrac{\cos\theta}{\sin\theta}$.

- **ASTC**: in quadrant 1 **A**ll are positive; in 2 only **S**in; in 3 only **T**an; in 4 only **C**os. The reciprocal has the same sign as its partner.
- The **basic angle** $\alpha$ is the acute angle between $OP$ and the $x$-axis. Then e.g. $\sin 150^\circ = +\sin 30^\circ$, $\cos 240^\circ = -\cos 60^\circ$.
- $\sin(-\theta) = -\sin\theta$, $\cos(-\theta) = \cos\theta$, $\tan(-\theta) = -\tan\theta$.
- Radians: $\pi \text{ rad} = 180^\circ$ (memorise). Set your calculator to the right mode before every question.
- Given one ratio and the quadrant, draw a right-angled triangle for the basic angle, find the third side by Pythagoras, then attach the signs from ASTC.`,
      figure: {
        type: "plot",
        x: [-1.6, 1.6], y: [-1.35, 1.35], equal: true,
        circles: [{ c: [0, 0], r: 1, tone: "muted" }],
        segments: [
          { from: [0, 0], to: [-0.866, 0.5], tone: "accent" },
          { from: [-0.866, 0.5], to: [-0.866, 0], dashed: true, thin: true, tone: "muted" },
        ],
        angles: [
          { at: [0, 0], from: [1, 0], to: [-0.866, 0.5], r: 0.22, label: "θ" },
          { at: [0, 0], from: [-0.866, 0.5], to: [-1, 0], r: 0.45, label: "α" },
        ],
        points: [{ x: -0.866, y: 0.5, label: "P(x, y)", pos: "nw" }],
        labels: [
          { x: 1.15, y: 1.12, text: "A  all +", style: "bold" },
          { x: -1.15, y: 1.12, text: "S  sin +", style: "bold" },
          { x: -1.15, y: -1.12, text: "T  tan +", style: "bold" },
          { x: 1.15, y: -1.12, text: "C  cos +", style: "bold" },
          { x: -0.5, y: 0.38, text: "r", style: "italic", pos: "ne" },
        ],
        caption: String.raw`$\theta = 150^\circ$ lies in quadrant 2, basic angle $\alpha = 30^\circ$: $\sin 150^\circ = \sin 30^\circ$, $\cos 150^\circ = -\cos 30^\circ$.`,
        alt: "A circle centred at the origin with the four quadrants labelled A (all positive), S (sin positive), T (tan positive), C (cos positive). The radius OP makes angle theta of 150 degrees with the positive x-axis, and the basic angle alpha of 30 degrees with the negative x-axis.",
      },
    },
    {
      title: String.raw`Exact values for special angles`,
      body: String.raw`Know these without a calculator ("Without using a calculator…" questions are common):

| $\theta$ | $30^\circ = \frac{\pi}{6}$ | $45^\circ = \frac{\pi}{4}$ | $60^\circ = \frac{\pi}{3}$ |
| --- | --- | --- | --- |
| $\sin\theta$ | $\frac{1}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos\theta$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{1}{2}$ |
| $\tan\theta$ | $\frac{1}{\sqrt3} = \frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ |

Also $\sin 0 = 0$, $\cos 0 = 1$, $\sin 90^\circ = 1$, $\cos 90^\circ = 0$, and $\tan 90^\circ$ is undefined. Combine with ASTC for angles like $210^\circ$ or $\frac{7\pi}{4}$. Give answers with a rationalised denominator unless told otherwise.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 3.0], y: [-0.5, 2.5], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [2, 0], [2, 2]], tone: "accent" }],
          rightAngles: [{ at: [2, 0], a: [-1, 0], b: [0, 1], size: 0.22 }],
          angles: [
            { at: [0, 0], from: [2, 0], to: [2, 2], r: 0.55, label: "45°" },
            { at: [2, 2], from: [0, 0], to: [2, 0], r: 0.5, label: "45°" },
          ],
          labels: [
            { x: 1, y: 0, text: "1", pos: "s" },
            { x: 2, y: 1, text: "1", pos: "e" },
            { x: 0.95, y: 1.05, text: "√2", pos: "nw" },
          ],
          caption: "Half a square of side 1",
          alt: "A right-angled isosceles triangle with the two shorter sides 1 and hypotenuse root 2, and two angles of 45 degrees.",
        },
        {
          type: "plot",
          x: [-0.6, 3.6], y: [-0.5, 2.0], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [2.598, 0], [2.598, 1.5]], tone: "accent" }],
          rightAngles: [{ at: [2.598, 0], a: [-1, 0], b: [0, 1], size: 0.2 }],
          angles: [
            { at: [0, 0], from: [2.598, 0], to: [2.598, 1.5], r: 0.75, label: "30°" },
            { at: [2.598, 1.5], from: [0, 0], to: [2.598, 0], r: 0.4, label: "60°" },
          ],
          labels: [
            { x: 1.3, y: 0, text: "√3", pos: "s" },
            { x: 2.598, y: 0.75, text: "1", pos: "e" },
            { x: 1.25, y: 0.78, text: "2", pos: "nw" },
          ],
          caption: "Half an equilateral triangle of side 2",
          alt: "A right-angled triangle with sides root 3, 1 and hypotenuse 2; the angle opposite the side 1 is 30 degrees and the other acute angle is 60 degrees.",
        },
      ],
    },
    {
      title: String.raw`Principal values`,
      body: String.raw`An equation like $\sin x = 0.4$ has many solutions. The calculator gives only the **principal value**:

| Function | Principal value range |
| --- | --- |
| $\sin^{-1} x$ | $-90^\circ \le \sin^{-1} x \le 90^\circ$ $\left(-\frac{\pi}{2} \le \sin^{-1}x \le \frac{\pi}{2}\right)$ |
| $\cos^{-1} x$ | $0^\circ \le \cos^{-1} x \le 180^\circ$ $\left(0 \le \cos^{-1}x \le \pi\right)$ |
| $\tan^{-1} x$ | $-90^\circ < \tan^{-1} x < 90^\circ$ $\left(-\frac{\pi}{2} < \tan^{-1}x < \frac{\pi}{2}\right)$ |

So $\sin^{-1}\left(-\frac12\right) = -\frac{\pi}{6}$ (not $\frac{7\pi}{6}$) and $\cos^{-1}\left(-\frac{\sqrt3}{2}\right) = \frac{5\pi}{6}$. When solving equations, find the **basic angle** from a positive value, e.g. $\alpha = \sin^{-1}(0.4)$, then place the answers using ASTC.`,
    },
    {
      title: String.raw`Graphs of sine, cosine and tangent`,
      body: String.raw`- $y = \sin x$ and $y = \cos x$: period $360^\circ$ ($2\pi$), values between $-1$ and $1$. $\cos x$ is $\sin x$ shifted $90^\circ$ to the left.
- Symmetries: $\sin(180^\circ - x) = \sin x$, $\cos(360^\circ - x) = \cos x$, $\sin(x + 180^\circ) = -\sin x$.
- $y = \tan x$: period $180^\circ$ ($\pi$), no maximum or minimum, **asymptotes** at $x = 90^\circ, 270^\circ, \ldots$, and it passes through $(0, 0)$, $(180^\circ, 0)$, $(360^\circ, 0)$.
- When sketching, mark the scale on both axes, the end-points of the interval, and where the curve meets the axes. Draw asymptotes as dashed lines.`,
      figure: [
        {
          type: "plot",
          x: [-25, 395], y: [-1.5, 1.6], height: 200,
          curves: [
            { fn: "x => Math.sin(x*Math.PI/180)", domain: [0, 360] },
            { fn: "x => Math.cos(x*Math.PI/180)", domain: [0, 360], tone: "good" },
          ],
          labels: [
            { x: 90, y: 1.05, text: "y = sin x", pos: "n", style: "italic", tone: "accent" },
            { x: 330, y: 1.3, text: "y = cos x", pos: "c", style: "italic", tone: "good" },
          ],
          xTicks: [{ x: 90, label: "90°" }, { x: 180, label: "180°" }, { x: 270, label: "270°" }, { x: 360, label: "360°" }],
          yTicks: [{ y: 1, label: "1" }, { y: -1, label: "−1" }],
          caption: String.raw`Period $360^\circ$, amplitude 1`,
          alt: "Graphs of y = sin x and y = cos x for x from 0 to 360 degrees, both oscillating between −1 and 1. The sine curve starts at 0, the cosine curve starts at 1.",
        },
        {
          type: "plot",
          x: [-25, 395], y: [-3.2, 3.2], height: 200,
          curves: [
            { fn: "x => Math.tan(x*Math.PI/180)", domain: [0, 89] },
            { fn: "x => Math.tan(x*Math.PI/180)", domain: [91, 269] },
            { fn: "x => Math.tan(x*Math.PI/180)", domain: [271, 360] },
          ],
          lines: [{ x: 90 }, { x: 270 }],
          xTicks: [{ x: 180, label: "180°" }, { x: 360, label: "360°" }],
          labels: [{ x: 92, y: 2.8, text: "x = 90°", pos: "e", style: "small" }, { x: 272, y: 2.8, text: "x = 270°", pos: "e", style: "small" }, { x: 150, y: 2.2, text: "y = tan x", pos: "c", style: "italic", tone: "accent" }],
          caption: String.raw`Period $180^\circ$, asymptotes where $\cos x = 0$`,
          alt: "Graph of y = tan x for x from 0 to 360 degrees, with vertical dashed asymptotes at 90 and 270 degrees, crossing the x-axis at 0, 180 and 360 degrees.",
        },
      ],
    },
    {
      title: String.raw`Amplitude and period: $y = a\sin(bx) + c$`,
      body: String.raw`For $y = a\sin(bx) + c$ or $y = a\cos(bx) + c$:

| Feature | Value |
| --- | --- |
| Amplitude | $|a|$ |
| Period | $\dfrac{360^\circ}{b}$ or $\dfrac{2\pi}{b}$ |
| Centre line | $y = c$ |
| Maximum, minimum | $c + |a|$, $c - |a|$ |

- For $y = a\sin\left(\frac{x}{b}\right) + c$ the period is $360^\circ \times b$ (it is *stretched*).
- For $y = a\tan(bx)$ the period is $\dfrac{180^\circ}{b}$; there is no amplitude.
- If $a < 0$ the graph is reflected in the centre line: $y = -2\cos x$ starts at its **minimum**.
- To sketch: draw the centre line, mark the max and min levels, split one period into quarters, and plot the key points at each quarter.`,
      figure: {
        type: "plot",
        x: [-30, 400], y: [-1.8, 4], height: 230,
        lines: [{ y: 1, label: "y = 1 (centre line)" }],
        curves: [{ fn: "x => 2*Math.sin(2*x*Math.PI/180) + 1", domain: [0, 360] }],
        segments: [
          { from: [45, 1], to: [45, 3], arrow: true, arrowStart: true, thin: true, tone: "warn", label: "amplitude 2", pos: "e", style: "small", labelAt: [45, 2.2] },
          { from: [45, 3.55], to: [225, 3.55], arrow: true, arrowStart: true, thin: true, tone: "good", label: "period 180°", pos: "n", style: "small" },
        ],
        xTicks: [{ x: 90, label: "90°" }, { x: 180, label: "180°" }, { x: 270, label: "270°" }, { x: 360, label: "360°" }],
        yTicks: [{ y: 3, label: "3" }, { y: -1, label: "−1" }],
        caption: String.raw`$y = 2\sin 2x + 1$: amplitude 2, period $\frac{360^\circ}{2} = 180^\circ$, max $3$, min $-1$.`,
        alt: "Graph of y = 2 sin 2x + 1 for x from 0 to 360 degrees. It oscillates about the dashed centre line y = 1 between −1 and 3, completing two full cycles. Arrows mark the amplitude 2 and the period 180 degrees.",
      },
    },
    {
      title: String.raw`Counting solutions with graphs`,
      body: String.raw`The number of solutions of $\mathrm{f}(x) = \mathrm{g}(x)$ in an interval is the number of **intersection points** of $y = \mathrm{f}(x)$ and $y = \mathrm{g}(x)$ in that interval.

- Rearrange the equation so that each side is a graph you have already sketched (the "hence" in the question tells you which ones).
- Draw both curves on the **same axes** over the exact interval given, accurately enough to see every crossing near the end-points and near turning points.
- For "$\mathrm{f}(x) = k$ has exactly $n$ solutions", slide a horizontal line $y = k$ up and down the graph.`,
      figure: {
        type: "plot",
        x: [-0.5, 6.9], y: [-1.6, 1.6], height: 210,
        curves: [
          { fn: "x => Math.sin(x)", domain: [0, 2*Math.PI] },
          { fn: "x => Math.sin(2*x)", domain: [0, 2*Math.PI], tone: "good" },
        ],
        labels: [
          { x: 2.2, y: 1.35, text: "y = sin x", pos: "c", style: "italic", tone: "accent" },
          { x: 3.93, y: 1.32, text: "y = sin 2x", pos: "c", style: "italic", tone: "good" },
        ],
        points: [
          { x: 0, y: 0 },
          { x: Math.PI/3, y: Math.sin(Math.PI/3) },
          { x: Math.PI, y: 0 },
          { x: 5*Math.PI/3, y: Math.sin(5*Math.PI/3) },
          { x: 2*Math.PI, y: 0 },
        ],
        xTicks: [{ x: Math.PI, label: "π" }, { x: 2*Math.PI, label: "2π" }],
        yTicks: [{ y: 1, label: "1" }, { y: -1, label: "−1" }],
        caption: String.raw`$\sin 2x = \sin x$ has 5 solutions for $0 \le x \le 2\pi$, including both end-points.`,
        alt: "Graphs of y = sin x and y = sin 2x for x from 0 to 2 pi, intersecting at five marked points, including x = 0 and x = 2 pi.",
      },
    },
    {
      title: String.raw`Identities and formulae`,
      body: String.raw`**Given** on the formula sheet:
- $\sin^2 A + \cos^2 A = 1$, $\quad\sec^2 A = 1 + \tan^2 A$, $\quad\operatorname{cosec}^2 A = 1 + \cot^2 A$
- $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
- $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$ (note the sign flips)
- $\tan(A \pm B) = \dfrac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$
- $\sin 2A = 2\sin A\cos A$, $\quad\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$, $\quad\tan 2A = \dfrac{2\tan A}{1 - \tan^2 A}$

**Memorise**: $\tan A = \dfrac{\sin A}{\cos A}$, the reciprocal functions, and the rearranged forms $\cos^2 A = \frac12(1 + \cos 2A)$, $\sin^2 A = \frac12(1 - \cos 2A)$. Replacing $A$ by $\frac{A}{2}$ gives half-angle results, e.g. $\cos A = 1 - 2\sin^2\frac{A}{2}$.

Choose the form of $\cos 2A$ that leaves **one** type of function in the equation (e.g. use $1 - 2\sin^2 A$ if the rest of the equation is in $\sin A$).`,
    },
    {
      title: String.raw`Proving identities`,
      body: String.raw`- Start from **one side** (usually the more complicated one) and work to the other. Never "cross-multiply" both sides or treat the identity as an equation.
- Useful moves: change everything to $\sin$ and $\cos$; combine fractions over a common denominator; use $\sin^2 + \cos^2 = 1$; factorise; expand double angles; multiply by a conjugate such as $1 + \sin x$.
- Write each line as an equality, ending with "$=$ RHS (shown)". Every step must be visible — "Show that" marks are for the working.
- A "Hence…" part after an identity usually means: replace the expression by the simpler side, then solve.`,
    },
    {
      title: String.raw`The $R$-formula`,
      body: String.raw`$a\cos\theta + b\sin\theta$ can be written as a single wave (method **not** given — memorise):
$$a\cos\theta + b\sin\theta = R\cos(\theta - \alpha), \qquad R = \sqrt{a^2 + b^2},\ \tan\alpha = \frac{b}{a},$$
with $R > 0$ and $\alpha$ acute (for positive $a$, $b$). Other forms: $R\cos(\theta + \alpha)$, $R\sin(\theta \pm \alpha)$.

1. Expand the target form, e.g. $R\sin(\theta - \alpha) = R\sin\theta\cos\alpha - R\cos\theta\sin\alpha$.
2. Compare coefficients: $R\cos\alpha = \ldots$, $R\sin\alpha = \ldots$.
3. Square and add for $R$; divide for $\tan\alpha$. Keep $\alpha$ to 2 d.p. (or exact) for later parts.

Then the maximum is $R$ and the minimum is $-R$; find where they occur by setting the bracket equal to $0^\circ$, $90^\circ$, $180^\circ$, … as appropriate. For $\dfrac{k}{p + R\cos(\theta - \alpha)}$, the expression is greatest when the denominator is **least**.`,
      figure: {
        type: "plot",
        x: [-30, 400], y: [-17.2, 17.2], height: 230,
        lines: [{ y: 13, label: "y = 13" }, { y: -13, label: "y = −13" }],
        curves: [{ fn: "x => 5*Math.cos(x*Math.PI/180) + 12*Math.sin(x*Math.PI/180)", domain: [0, 360] }],
        segments: [{ from: [67.38, 13], to: [67.38, 0], dashed: true, thin: true, tone: "muted" }],
        points: [{ x: 67.38, y: 13 }, { x: 247.38, y: -13 }],
        xTicks: [{ x: 67.38, label: "67.4°" }, { x: 180, label: "180°" }, { x: 360, label: "360°" }],
        caption: String.raw`$5\cos\theta + 12\sin\theta = 13\cos(\theta - 67.4^\circ)$: a cosine wave of amplitude 13 shifted right by $67.4^\circ$.`,
        alt: "Graph of y = 5 cos theta + 12 sin theta for theta from 0 to 360 degrees. It oscillates between −13 and 13, with its maximum at 67.4 degrees and its minimum at 247.4 degrees.",
      },
    },
    {
      title: String.raw`Solving equations in a given interval`,
      body: String.raw`1. Make **one** trig function of **one** angle the subject, e.g. $\sin(2x + 20^\circ) = 0.6$. Use identities first if needed.
2. Find the basic angle $\alpha$ from the **positive** value.
3. Adjust the interval to the new angle: if $0^\circ \le x \le 360^\circ$ then $20^\circ \le 2x + 20^\circ \le 740^\circ$.
4. Use ASTC to list **all** angles in that interval, then solve back for $x$.

Common mistakes:
- **Dividing by** $\cos x$ (or $\sin x$) loses solutions. Factorise instead: $\sin 2x = \sin x \Rightarrow \sin x(2\cos x - 1) = 0$.
- Not rejecting impossible values: $\sin x = 2$ or $\sec x = \frac12$ have no solutions — say so.
- Mixing degrees and radians; if the interval is in radians, give answers in radians (exact multiples of $\pi$ where possible, otherwise 3 s.f.).`,
      figure: {
        type: "plot",
        x: [-25, 395], y: [-1.7, 1.6], height: 200,
        curves: [{ fn: "x => Math.sin(x*Math.PI/180)", domain: [0, 360] }],
        lines: [{ y: 0.5, label: "y = 0.5" }],
        segments: [
          { from: [30, 0.5], to: [30, 0], dashed: true, thin: true, tone: "muted" },
          { from: [150, 0.5], to: [150, 0], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: 30, y: 0.5 }, { x: 150, y: 0.5 }],
        labels: [{ x: 270, y: -1.42, text: "y = sin x", pos: "c", style: "italic", tone: "accent" }],
        xTicks: [{ x: 30, label: "30°" }, { x: 150, label: "150°" }, { x: 360, label: "360°" }],
        caption: String.raw`$\sin x = 0.5$: basic angle $30^\circ$; sine is positive in quadrants 1 and 2, so $x = 30^\circ$ or $180^\circ - 30^\circ = 150^\circ$.`,
        alt: "Graph of y = sin x for x from 0 to 360 degrees with the horizontal line y = 0.5, crossing the curve at x = 30 degrees and x = 150 degrees.",
      },
    },
    {
      title: String.raw`Trigonometric models`,
      body: String.raw`Repeating situations (tides, Ferris wheels, daylight hours, temperature) are modelled by
$$h = p + q\sin(kt) \quad\text{or}\quad h = p - q\cos(kt).$$

- **Greatest** value $p + |q|$, **least** value $p - |q|$, period $\dfrac{2\pi}{k}$ (if $kt$ is in radians).
- To find $p$, $q$, $k$ from information: $p$ = mean of greatest and least, $|q|$ = half the difference, $k$ from the period.
- "For how long is $h > H$?" — solve $h = H$ for the two times in one cycle, then subtract.
- Check the units of $t$ (hours or minutes) and convert answers to clock times if asked (e.g. $t = 2.25$ hours after midnight is 02 15).`,
      figure: {
        type: "plot",
        x: [-1.2, 26], y: [-1.5, 12], height: 210, axisLabels: ["t", "h"],
        lines: [{ y: 6, label: "y = p" }],
        curves: [{ fn: "x => 6 - 4*Math.cos(Math.PI*x/6)", domain: [0, 24] }],
        segments: [
          { from: [12, 11.2], to: [24, 11.2], arrow: true, arrowStart: true, thin: true, tone: "good", label: "period 2π/k", pos: "n", style: "small" },
          { from: [6, 6], to: [6, 10], arrow: true, arrowStart: true, thin: true, tone: "warn", label: "q", pos: "e", style: "italic", labelAt: [6, 8] },
        ],
        yTicks: [{ y: 10, label: "p + q" }, { y: 2, label: "p − q" }],
        caption: String.raw`$h = p - q\cos(kt)$ starts at its least value $p - q$ (e.g. a Ferris wheel capsule boarding at the bottom).`,
        alt: "Graph of h = p − q cos(kt) against t, starting at the minimum p − q, rising to the maximum p + q, and repeating. The centre line h = p, the amplitude q and one period are marked.",
      },
    },
  ],
  archetypes: [
    {
      id: "G1-exact-values-special-angles",
      name: String.raw`Exact values and principal values without a calculator`,
      tests: String.raw`Evaluating trig functions of angles of any size (degrees or radians) using basic angles, ASTC and the special-angle values, plus principal values of $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$. Always marked "Without using a calculator".`,
      questions: [
        {
          stem: String.raw`Without using a calculator, find the exact value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\sin 240^\circ$`, marks: 1 },
            { label: "(b)", text: String.raw`$\sec\dfrac{5\pi}{6}$, with a rationalised denominator`, marks: 2 },
            { label: "(c)", text: String.raw`$\cot 315^\circ + \tan\left(-\dfrac{3\pi}{4}\right)$`, marks: 2 },
            { label: "(d)", text: String.raw`$\cos^{-1}\left(-\dfrac{1}{2}\right)$ and $\tan^{-1}\left(-\sqrt3\right)$, giving each answer in radians as a multiple of $\pi$`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, express $\dfrac{1 + \tan 30^\circ}{1 - \tan 30^\circ}$ in the form $a + \sqrt{b}$, where $a$ and $b$ are integers.`,
          calculator: false,
          marks: 3,
        },
      ],
    },
    {
      id: "G1-ratios-given-quadrant",
      name: String.raw`Finding other ratios from one given ratio and the quadrant`,
      tests: String.raw`Using a right-angled triangle for the basic angle and the ASTC signs to find the other five functions, including $\sec$, $\operatorname{cosec}$ and $\cot$. Often the first part of a compound-angle question.`,
      questions: [
        {
          stem: String.raw`It is given that $\sin A = \dfrac{5}{13}$ and $\tan B = -\dfrac{4}{3}$, where $A$ and $B$ lie in the same quadrant.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`State which quadrant $A$ and $B$ lie in, giving a reason.`, marks: 1 },
            { label: "(ii)", text: String.raw`Without using a calculator, find the exact value of $\cos A$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Without using a calculator, find the exact value of $\operatorname{cosec} B$.`, marks: 1 },
            { label: "(iv)", text: String.raw`Without using a calculator, find the exact value of $\sec A + \cot B$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G1-amplitude-period-sketch",
      name: String.raw`Amplitude, period and sketching $y = a\sin(bx) + c$`,
      tests: String.raw`Stating amplitude, period, maximum and minimum of a transformed sine, cosine or tangent function and sketching it over a given interval, sometimes followed by a "number of solutions of $\mathrm{f}(x) = k$" part.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = 3\cos 2x - 1$ for $0 \le x \le \pi$.`,
          parts: [
            { label: "(i)", text: String.raw`State the amplitude and the period of f.`, marks: 2 },
            { label: "(ii)", text: String.raw`State the maximum and minimum values of $\mathrm{f}(x)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Sketch the graph of $y = \mathrm{f}(x)$ for $0 \le x \le \pi$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The equation of a curve is $y = 1 - 2\sin\dfrac{x}{2}$, for $0^\circ \le x \le 720^\circ$.`,
          parts: [
            { label: "(i)", text: String.raw`State the period and the amplitude of $y$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Sketch the curve, showing the coordinates of its maximum and minimum points.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the set of values of $k$ for which the equation $1 - 2\sin\dfrac{x}{2} = k$ has exactly two solutions for $0^\circ \le x \le 720^\circ$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G1-graphs-number-of-solutions",
      name: String.raw`Using two graphs to find the number of solutions`,
      tests: String.raw`Sketching two trigonometric graphs on the same axes and counting their intersections to state the number of solutions of a related equation. Look for "On the same axes, sketch… Hence state the number of solutions of…".`,
      questions: [
        {
          stem: String.raw`Consider the curves $y = 2\sin 2x$ and $y = 1 + \cos x$ for $0 \le x \le 2\pi$.`,
          parts: [
            { label: "(i)", text: String.raw`On the same axes, sketch the two curves for $0 \le x \le 2\pi$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence state the number of solutions of the equation $2\sin 2x - \cos x = 1$ for $0 \le x \le 2\pi$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Consider the curves $y = \tan 2x$ and $y = 2\cos x$ for $0 \le x \le \pi$.`,
          parts: [
            { label: "(i)", text: String.raw`State the period of $y = \tan 2x$ and the equations of its asymptotes for $0 \le x \le \pi$.`, marks: 2 },
            { label: "(ii)", text: String.raw`On the same axes, sketch the two curves for $0 \le x \le \pi$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence state the number of solutions of $\tan 2x = 2\cos x$ for $0 \le x \le \pi$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "G1-graph-find-constants",
      name: String.raw`Finding $a$, $b$ and $c$ from a given graph`,
      tests: String.raw`Reading the maximum, minimum and period from a drawn graph to find the constants in $y = a\sin(bx) + c$ or $y = a\cos\left(\frac{x}{b}\right) + c$, then using the equation. Remember $a$ can be negative.`,
      questions: [
        {
          stem: String.raw`The diagram shows part of the graph of $y = a\sin bx + c$, where $a$, $b$ and $c$ are positive integers. The curve has a maximum point at $\left(\frac{\pi}{4}, 4\right)$ and a minimum point at $\left(\frac{3\pi}{4}, -2\right)$.`,
          figure: {
            type: "plot",
            x: [-0.35, 3.6], y: [-3, 5], height: 230,
            curves: [{ fn: "x => 3*Math.sin(2*x) + 1", domain: [0, Math.PI] }],
            points: [
              { x: Math.PI/4, y: 4, label: "(π/4, 4)", pos: "e" },
              { x: 3*Math.PI/4, y: -2, label: "(3π/4, −2)", pos: "e" },
            ],
            xTicks: [{ x: Math.PI, label: "π" }],
            alt: "A sine-shaped curve drawn for x from 0 to pi, starting at a positive y-intercept, rising to a maximum at (pi/4, 4), falling through the x-axis to a minimum at (3 pi/4, −2), and rising again to x = pi.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$, $b$ and $c$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the $x$-coordinates of the points where the curve crosses the $x$-axis, for $0 \le x \le \pi$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The diagram shows the graph of $y = a\cos\dfrac{x}{b} + c$ for $0^\circ \le x \le 720^\circ$, where $a$ and $c$ are integers and $b$ is a positive integer. The curve passes through $(0^\circ, -1)$, $(360^\circ, 5)$ and $(720^\circ, -1)$.`,
          figure: {
            type: "plot",
            x: [-60, 800], y: [-2.6, 6.5], height: 220,
            curves: [{ fn: "x => 2 - 3*Math.cos(x*Math.PI/360)", domain: [0, 720] }],
            points: [
              { x: 0, y: -1, label: "(0°, −1)", pos: "se" },
              { x: 360, y: 5, label: "(360°, 5)", pos: "n" },
              { x: 720, y: -1, label: "(720°, −1)", pos: "sw" },
            ],
            originLabel: "nw",
            alt: "A curve for x from 0 to 720 degrees, starting at its minimum (0, −1), rising to a maximum at (360, 5) and falling back to a minimum at (720, −1).",
          },
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$, $b$ and $c$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the values of $x$ for which $y = 0$, giving your answers correct to 1 decimal place.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G1-proving-identities",
      name: String.raw`Proving identities (and "hence solve")`,
      tests: String.raw`Proving a given identity using the Pythagorean identities, reciprocal functions and double-angle formulae, often followed by using the identity to solve an equation.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Prove that $\dfrac{\cos x}{1 - \sin x} - \tan x = \sec x$.`, marks: 3 },
            { label: "(b)", text: String.raw`Prove that $(\sec x - \cos x)(\operatorname{cosec} x - \sin x) = \dfrac{\tan x}{1 + \tan^2 x}$.`, marks: 4 },
          ],
        },
        {
          parts: [
            { label: "(i)", text: String.raw`Prove that $\cot x - \tan x = 2\cot 2x$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence solve the equation $\cot x - \tan x = 4$ for $0 < x < \pi$, giving your answers in radians correct to 3 significant figures.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G1-addition-formulae",
      name: String.raw`Exact values with the addition formulae`,
      tests: String.raw`Using $\sin(A \pm B)$, $\cos(A \pm B)$, $\tan(A \pm B)$ (given) with known ratios of $A$ and $B$, or with angles such as $15^\circ = 45^\circ - 30^\circ$, to find exact values without a calculator.`,
      questions: [
        {
          stem: String.raw`It is given that $\sin A = \dfrac{4}{5}$ and $\cos B = -\dfrac{5}{13}$, where $A$ is acute and $B$ is obtuse. Without using a calculator, find the exact value of`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`$\sin(A + B)$,`, marks: 3 },
            { label: "(ii)", text: String.raw`$\tan(A - B)$.`, marks: 3 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`By writing $15^\circ$ as $45^\circ - 30^\circ$, show that $\tan 15^\circ = 2 - \sqrt3$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence, without using a calculator, find the exact value of $\tan 165^\circ$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Without using a calculator, express $\sec^2 15^\circ$ in the form $a + b\sqrt3$, where $a$ and $b$ are integers.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "G1-double-angle",
      name: String.raw`Double-angle and half-angle results`,
      tests: String.raw`Using $\sin 2A$, $\cos 2A$, $\tan 2A$ (given) to find exact values, to find ratios of $\frac{A}{2}$ with the correct sign, or to rewrite $\cos 3x$ or $\sin 3x$ and solve.`,
      questions: [
        {
          stem: String.raw`It is given that $\cos A = -\dfrac{1}{3}$, where $180^\circ < A < 270^\circ$. Without using a calculator, find the exact value of`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`$\sin 2A$,`, marks: 2 },
            { label: "(ii)", text: String.raw`$\tan 2A$,`, marks: 2 },
            { label: "(iii)", text: String.raw`$\cos\dfrac{A}{2}$.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(i)", text: String.raw`By writing $3x$ as $2x + x$, show that $\cos 3x = 4\cos^3 x - 3\cos x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence solve the equation $\cos 3x + 2\cos x = 0$ for $0 \le x \le 2\pi$, giving your answers in terms of $\pi$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "G1-equations-basic",
      name: String.raw`Solving equations with multiple or fractional angles`,
      tests: String.raw`Solving $\sin(bx + k) = c$ type equations in a given interval: finding the basic angle, adjusting the interval for the new angle, and listing every solution. Both degree and radian intervals appear.`,
      questions: [
        {
          stem: String.raw`Solve each of the following equations.`,
          parts: [
            { label: "(a)", text: String.raw`$2\cos(2x - 30^\circ) = -1$ for $0^\circ \le x \le 360^\circ$`, marks: 4 },
            { label: "(b)", text: String.raw`$3\sin\dfrac{x}{2} = 2$ for $0 \le x \le 4\pi$, giving your answers in radians correct to 3 significant figures`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "G1-equations-using-identities",
      name: String.raw`Equations needing identities`,
      tests: String.raw`Using $\sec^2 = 1 + \tan^2$, $\operatorname{cosec}^2 = 1 + \cot^2$ or a double-angle formula to get a quadratic in one function, or factorising (not dividing) to keep all solutions. Includes rejecting impossible values.`,
      questions: [
        {
          stem: String.raw`Solve each of the following equations for $0^\circ \le x \le 360^\circ$.`,
          parts: [
            { label: "(a)", text: String.raw`$2\sec^2 x = 5\tan x$`, marks: 4 },
            { label: "(b)", text: String.raw`$2\cot^2 x = 5\operatorname{cosec} x + 1$`, marks: 4 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, solve each of the following equations for $0 \le x \le 2\pi$, giving your answers in terms of $\pi$.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\sin 2x = \cos x$`, marks: 4 },
            { label: "(b)", text: String.raw`$\cos 2x + 5\sin x = 3$`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "G1-r-formula",
      name: String.raw`$R$-formula: maximum, minimum and solving`,
      tests: String.raw`Expressing $a\cos\theta + b\sin\theta$ as $R\cos(\theta \pm \alpha)$ or $R\sin(\theta \pm \alpha)$, then stating maximum or minimum values (and where they occur), solving an equation, or finding the greatest value of a related fraction.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Express $3\sin\theta - 4\cos\theta$ in the form $R\sin(\theta - \alpha)$, where $R > 0$ and $0^\circ < \alpha < 90^\circ$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence solve the equation $3\sin\theta - 4\cos\theta = 2$ for $0^\circ \le \theta \le 360^\circ$.`, marks: 3 },
            { label: "(iii)", text: String.raw`State the maximum value of $3\sin\theta - 4\cos\theta + 1$ and find the value of $\theta$, for $0^\circ \le \theta \le 360^\circ$, at which it occurs.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the greatest value of $\dfrac{10}{7 + 3\sin\theta - 4\cos\theta}$.`, marks: 2 },
          ],
        },
        {
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Without using a calculator, express $\sqrt3\cos x + \sin x$ in the form $R\cos(x - \alpha)$, where $R > 0$ and $0 < \alpha < \frac{\pi}{2}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence, without using a calculator, solve the equation $\sqrt3\cos x + \sin x = \sqrt2$ for $0 \le x \le 2\pi$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "G1-trig-models",
      name: String.raw`Real-world periodic models`,
      tests: String.raw`Interpreting $h = p \pm q\sin(kt)$ or $h = p - q\cos(kt)$ for a Ferris wheel, tide or temperature: greatest and least values, period, finding the constants from information, and the time spent above a given level.`,
      questions: [
        {
          stem: String.raw`A Ferris wheel turns at a constant speed. The height, $h$ metres, of a capsule above the ground $t$ minutes after it passes the lowest point is given by
$$h = 45 - 40\cos\left(\frac{\pi t}{15}\right).$$`,
          parts: [
            { label: "(i)", text: String.raw`Find the greatest and least heights of the capsule above the ground.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the time taken for the wheel to make one complete revolution.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the height of the capsule 7 minutes after it passes the lowest point.`, marks: 1 },
            { label: "(iv)", text: String.raw`Find the length of time, during one revolution, for which the capsule is more than 65 m above the ground.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`On a certain day, the depth of water, $d$ metres, at the entrance to a harbour $t$ hours after midnight is modelled by $d = p + q\sin(kt)$, where $p$, $q$ and $k$ are positive constants and $0 \le t \le 12$. The greatest depth, 8.5 m, first occurs at 03 00 and the least depth, 3.5 m, occurs at 09 00.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $p$, $q$ and $k$.`, marks: 3 },
            { label: "(ii)", text: String.raw`A ship can only enter the harbour when the depth of water is at least 7 m. Find the times between 00 00 and 12 00 during which the ship can enter, giving your answers to the nearest minute.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
