H2.addTopic({
  id: "6.3",
  title: "Normal Distribution",
  paper: "Paper 2B",
  summary: String.raw`Normal probabilities, finding $\mu$ and $\sigma$, and combinations of independent normal variables.`,
  syllabus: {
    include: [
      String.raw`concept of continuous random variables (for teaching and learning only)`,
      String.raw`concept of a normal distribution as an example of a continuous probability model and its mean and variance; use of $\N(\mu, \sigma^2)$ as a probability model`,
      String.raw`standard normal distribution`,
      String.raw`finding the value of $\P(X < x_1)$ or a related probability, given the values of $x_1$, $\mu$, $\sigma$`,
      String.raw`symmetry of the normal curve and its properties`,
      String.raw`finding a relationship between $x_1$, $\mu$, $\sigma$ given the value of $\P(X < x_1)$ or a related probability`,
      String.raw`solving problems involving the use of $\E(aX + b)$ and $\Var(aX + b)$`,
      String.raw`solving problems involving the use of $\E(aX + bY)$ and $\Var(aX + bY)$, where $X$ and $Y$ are independent`,
    ],
    exclude: [
      String.raw`normal approximation to binomial distribution`,
    ],
  },
  concepts: [
    {
      title: String.raw`Continuous random variables and the normal curve`,
      body: String.raw`For a continuous random variable, probabilities are **areas** under the probability density curve, so $\P(X = a) = 0$ and $\P(X < a) = \P(X \le a)$.

$X \sim \N(\mu, \sigma^2)$ has a bell-shaped curve that is

- symmetric about $x = \mu$ (mean = median = mode),
- with total area 1, and
- with about 68%, 95% and 99.7% of the area within $1\sigma$, $2\sigma$ and $3\sigma$ of $\mu$.

Note that the second parameter is the **variance**: $\N(50, 16)$ has $\sigma = 4$.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 210, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          lines: [{ x: 0 }],
          segments: [{ from: [0, 0.242], to: [1, 0.242], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "σ", pos: "n", style: "italic" }],
          points: [{ x: -1, y: 0.242 }, { x: 1, y: 0.242, label: "point of inflexion", pos: "e", style: "small" }],
          xTicks: [{ x: -1, label: "μ − σ" }, { x: 0, label: "μ" }, { x: 1, label: "μ + σ" }],
          caption: String.raw`Symmetric about $x = \mu$; the curve changes concavity at $\mu \pm \sigma$.`,
          alt: "Normal curve symmetric about the dashed line x = mu, with the points of inflexion marked at mu minus sigma and mu plus sigma; the horizontal distance from mu to a point of inflexion is sigma.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.19, 0.44], height: 260, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3, to: 3 },
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -2, to: 2 },
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -1, to: 1 },
          ],
          segments: [
            { from: [-1, -0.09], to: [1, -0.09], thin: true, arrow: true, arrowStart: true, label: "68%", labelAt: [1, -0.09], pos: "e", style: "small" },
            { from: [-2, -0.13], to: [2, -0.13], thin: true, arrow: true, arrowStart: true, label: "95%", labelAt: [2, -0.13], pos: "e", style: "small" },
            { from: [-3, -0.17], to: [3, -0.17], thin: true, arrow: true, arrowStart: true, label: "99.7%", labelAt: [3, -0.17], pos: "e", style: "small" },
          ],
          xTicks: [{ x: -3, label: "μ−3σ" }, { x: -2, label: "μ−2σ" }, { x: -1, label: "μ−σ" }, { x: 0, label: "μ" }, { x: 1, label: "μ+σ" }, { x: 2, label: "μ+2σ" }, { x: 3, label: "μ+3σ" }],
          caption: String.raw`About 68%, 95% and 99.7% of the area lies within $1\sigma$, $2\sigma$ and $3\sigma$ of $\mu$.`,
          alt: "Normal curve with nested shaded regions within one, two and three standard deviations of the mean, containing about 68%, 95% and 99.7% of the area.",
        },
        {
          type: "plot", x: [-3.2, 5.7], y: [-0.02, 0.46], height: 210, axisLabels: ["x", null],
          curves: [
            { fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" },
            { fn: "x => Math.exp(-(x-2.5)*(x-2.5)/2)/Math.sqrt(2*Math.PI)", tone: "good" },
          ],
          lines: [{ x: 0 }, { x: 2.5 }],
          xTicks: [{ x: 0, label: "μ₁" }, { x: 2.5, label: "μ₂" }],
          caption: String.raw`Same $\sigma$, different $\mu$: the curve slides along without changing shape.`,
          alt: "Two normal curves of identical shape, one centred at mu one and the other centred further right at mu two.",
        },
        {
          type: "plot", x: [-5, 5], y: [-0.02, 0.46], height: 210, axisLabels: ["x", null],
          curves: [
            { fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", label: "σ = 1", labelAt: 0.9 },
            { fn: "x => Math.exp(-x*x/8)/(2*Math.sqrt(2*Math.PI))", tone: "good", label: "σ = 2", labelAt: 2.4 },
          ],
          xTicks: [{ x: 0, label: "μ" }],
          caption: String.raw`Same $\mu$, larger $\sigma$: wider and flatter, but the total area is still 1.`,
          alt: "Two normal curves with the same mean; the one with sigma equal to 2 is twice as wide and half as tall as the one with sigma equal to 1.",
        },
      ],
    },
    {
      title: String.raw`Standardising and GC probabilities`,
      body: String.raw`If $X \sim \N(\mu, \sigma^2)$ then
$$Z = \frac{X - \mu}{\sigma} \sim \N(0, 1).$$

- GC: normalcdf(lower, upper, $\mu$, $\sigma$) — enter $\sigma$, **not** $\sigma^2$. Use a large bound such as $10^{99}$ for an open tail.
- Always write the probability statement, e.g. "$\P(X > 350) = 0.115$", and sketch the curve with the region shaded when the question is unfamiliar.
- Give probabilities to 3 significant figures, but keep more figures in intermediate working.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: 0.8, tone: "warn" }],
          xTicks: [{ x: 0, label: "μ" }, { x: 0.8, label: "a" }],
          labels: [{ x: -0.55, y: 0.14, text: "P(X < a)", style: "italic" }],
          caption: String.raw`$\P(X < a)$ = normalcdf$(-10^{99}, a, \mu, \sigma)$`,
          alt: "Normal curve with the area to the left of a, which is just above the mean, shaded.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 0.8, to: 3.6, tone: "warn" }],
          xTicks: [{ x: 0, label: "μ" }, { x: 0.8, label: "a" }],
          labels: [{ x: 2.35, y: 0.16, text: "P(X > a)", style: "italic" }],
          segments: [{ from: [2.0, 0.135], to: [1.45, 0.06], tone: "muted", thin: true }],
          caption: String.raw`$\P(X > a)$ = normalcdf$(a, 10^{99}, \mu, \sigma)$`,
          alt: "Normal curve with the area to the right of a shaded.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -0.7, to: 1.4, tone: "warn" }],
          xTicks: [{ x: -0.7, label: "a" }, { x: 0, label: "μ" }, { x: 1.4, label: "b" }],
          labels: [{ x: 0.35, y: 0.14, text: "P(a < X < b)", style: "italic" }],
          caption: String.raw`$\P(a < X < b)$ = normalcdf$(a, b, \mu, \sigma)$`,
          alt: "Normal curve with the area between a, below the mean, and b, above the mean, shaded.",
        },
        {
          type: "plot", x: [35, 65], y: [-0.062, 0.112], height: 250, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-((x-50)/4)*((x-50)/4)/2)/(4*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-((x-50)/4)*((x-50)/4)/2)/(4*Math.sqrt(2*Math.PI))", from: 35, to: 56, tone: "warn" }],
          xTicks: [38, 42, 46, 50, 54, 58, 62].map((v) => ({ x: v, label: String(v) })),
          segments: [
            { from: [35.5, -0.042], to: [64.3, -0.042], tone: "ink", thin: true, arrow: true },
            ...[-3, -2, -1, 0, 1, 2, 3].map((k) => ({ from: [50 + 4 * k, -0.0445], to: [50 + 4 * k, -0.0395], tone: "ink", thin: true })),
            { from: [56, 0.0324], to: [56, -0.042], tone: "muted", thin: true, dashed: true },
          ],
          labels: [
            ...[-3, -2, -1, 0, 1, 2, 3].map((k) => ({ x: 50 + 4 * k, y: -0.042, text: k < 0 ? "−" + -k : String(k), pos: "s", style: "small" })),
            { x: 64.6, y: -0.042, text: "z", pos: "se", style: "italic" },
            { x: 56, y: -0.042, text: "1.5", pos: "s", style: "small" },
            { x: 35.6, y: 0.085, text: "P(X < 56) = P(Z < 1.5)", pos: "e", style: "small", tone: "warn" },
          ],
          caption: String.raw`$X \sim \N(50, 4^2)$: $z = \dfrac{x - 50}{4}$, so $x = 56$ corresponds to $z = 1.5$.`,
          alt: "Normal curve for X with mean 50 and standard deviation 4, with a second scale for z underneath: x = 38, 42, ..., 62 line up with z = -3, -2, ..., 3. The area to the left of x = 56, which is z = 1.5, is shaded.",
        },
      ],
    },
    {
      title: String.raw`Inverse problems: finding $a$`,
      body: String.raw`Given $\P(X < a) = p$, use invNorm($p$, $\mu$, $\sigma$). The GC uses the **left-tail** area, so convert first:

- $\P(X > a) = p \Rightarrow \P(X < a) = 1 - p$.
- Symmetric interval containing a proportion $p$: $\mu \pm z\sigma$, where $\P(Z < z) = \frac{1 + p}{2}$.

Interpret the answer in context (e.g. "the least mean volume is 508.2 ml").`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 0.8416, to: 3.6, tone: "warn" }],
          xTicks: [{ x: 0, label: "μ" }, { x: 0.8416, label: "a" }],
          labels: [{ x: -0.4, y: 0.15, text: "0.8", style: "small" }, { x: 1.42, y: 0.055, text: "0.2", style: "small" }],
          caption: String.raw`$\P(X > a) = 0.2 \Rightarrow \P(X < a) = 0.8$, so $a = $ invNorm$(0.8, \mu, \sigma)$.`,
          alt: "Normal curve with an unknown value a above the mean; the right tail beyond a has area 0.2 and the area to the left of a is 0.8.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -1.96, to: 1.96, tone: "warn" }],
          xTicks: [{ x: -1.96, label: "μ − zσ" }, { x: 0, label: "μ" }, { x: 1.96, label: "μ + zσ" }],
          labels: [{ x: 0, y: 0.15, text: "0.95", style: "small" }, { x: -2.75, y: 0.06, text: "0.025", style: "small" }, { x: 2.75, y: 0.06, text: "0.025", style: "small" }],
          caption: String.raw`Middle 95%: each tail is 0.025, so $\P(Z < z) = 0.975$ and $z = 1.960$.`,
          alt: "Normal curve with the central 95% of the area shaded between mu minus z sigma and mu plus z sigma, leaving 0.025 in each tail.",
        },
      ],
    },
    {
      title: String.raw`Finding unknown $\mu$ and $\sigma$`,
      body: String.raw`Standardise each given probability and use invNorm on $\N(0,1)$:
$$\P(X < x_1) = p \;\Rightarrow\; \frac{x_1 - \mu}{\sigma} = z_p, \quad \P(Z < z_p) = p.$$

- One unknown: solve directly. Two unknowns: two such equations, solved simultaneously.
- Check signs: if $x_1 < \mu$ then $z_p < 0$.
- Keep $z$-values to at least 4 decimal places (e.g. $-1.2816$, $0.8416$) to avoid accumulated rounding errors.`,
      figure: {
        type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["x", null],
        curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
        shade: [
          { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.6449, tone: "warn" },
          { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 0.5244, to: 3.6, tone: "warn" },
        ],
        lines: [{ x: 0 }],
        xTicks: [{ x: -1.6449, label: "x₁" }, { x: 0, label: "μ" }, { x: 0.5244, label: "x₂" }],
        labels: [{ x: -2.6, y: 0.1, text: "0.05", style: "small", tone: "warn" }, { x: 1.15, y: 0.08, text: "0.3", style: "small" }],
        segments: [{ from: [-2.45, 0.085], to: [-1.95, 0.03], tone: "muted", thin: true }],
        caption: String.raw`$\dfrac{x_1 - \mu}{\sigma} = -1.6449$ (negative, as $x_1 < \mu$) and $\dfrac{x_2 - \mu}{\sigma} = 0.5244$.`,
        alt: "Normal curve with unknown mean mu. The left tail below x1 has area 0.05 and the right tail above x2 has area 0.3; x1 lies below mu and x2 above it.",
      },
    },
    {
      title: String.raw`Symmetry arguments`,
      body: String.raw`- $\P(X < \mu - a) = \P(X > \mu + a)$.
- If $\P(X < c) = \P(X > d)$, then $\mu = \dfrac{c + d}{2}$.
- $\P(\mu - a < X < \mu + a) = 1 - 2\P(X > \mu + a) = 2\P(X < \mu + a) - 1$.

These are used in "without using a calculator" questions — a clearly labelled sketch is the best justification.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.2, tone: "warn" },
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.2, to: 3.6, tone: "warn" },
          ],
          lines: [{ x: 0 }],
          segments: [
            { from: [-1.2, 0.06], to: [0, 0.06], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "a", pos: "n", style: "italic" },
            { from: [0, 0.06], to: [1.2, 0.06], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "a", pos: "n", style: "italic" },
          ],
          xTicks: [{ x: -1.2, label: "μ − a" }, { x: 0, label: "μ" }, { x: 1.2, label: "μ + a" }],
          caption: String.raw`The two shaded tails are equal: $\P(X < \mu - a) = \P(X > \mu + a)$.`,
          alt: "Normal curve with both tails shaded, below mu minus a and above mu plus a; the tails are mirror images in the line x = mu.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.5, tone: "warn" },
            { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.5, to: 3.6, tone: "warn" },
          ],
          lines: [{ x: 0 }],
          xTicks: [{ x: -1.5, label: "c" }, { x: 0, label: "μ = ½(c + d)" }, { x: 1.5, label: "d" }],
          labels: [{ x: -2.55, y: 0.11, text: "p", style: "italic", tone: "warn" }, { x: 2.55, y: 0.11, text: "p", style: "italic", tone: "warn" }],
          segments: [{ from: [-2.45, 0.095], to: [-1.95, 0.03], tone: "muted", thin: true }, { from: [2.45, 0.095], to: [1.95, 0.03], tone: "muted", thin: true }],
          caption: String.raw`If $\P(X < c) = \P(X > d)$, then $c$ and $d$ are equidistant from $\mu$.`,
          alt: "Normal curve with equal tail areas p below c and above d; the mean lies exactly halfway between c and d.",
        },
      ],
    },
    {
      title: String.raw`Linear transformations: $aX + b$`,
      body: String.raw`For any random variable $X$ and constants $a$, $b$:
$$\E(aX + b) = a\E(X) + b, \qquad \Var(aX + b) = a^2\Var(X).$$
If $X$ is normal then so is $aX + b$: $aX + b \sim \N(a\mu + b,\ a^2\sigma^2)$. Typical uses: unit conversions (°C to °F), fares and costs ("fixed charge + rate × distance"), scaling of marks. Adding a constant does not change the variance.`,
      figure: {
        type: "plot", x: [2, 42], y: [-0.012, 0.23], height: 200, axisLabels: ["x", null],
        curves: [
          { fn: "x => Math.exp(-((x-10)/2)*((x-10)/2)/2)/(2*Math.sqrt(2*Math.PI))", label: "X", labelAt: 11.6 },
          { fn: "x => Math.exp(-((x-25)/4)*((x-25)/4)/2)/(4*Math.sqrt(2*Math.PI))", tone: "good", label: "2X + 5", labelAt: 28.6 },
        ],
        lines: [{ x: 10 }, { x: 25 }],
        xTicks: [{ x: 10, label: "10" }, { x: 25, label: "25" }],
        caption: String.raw`$X \sim \N(10, 2^2)$ and $2X + 5 \sim \N(25, 4^2)$: the mean becomes $2(10) + 5$, the s.d. is only doubled.`,
        alt: "Normal curve of X centred at 10 with standard deviation 2, and a curve of 2X + 5 centred at 25 that is twice as wide and half as tall.",
      },
    },
    {
      title: String.raw`Linear combinations of independent normals`,
      body: String.raw`If $X$ and $Y$ are **independent**, then
$$\E(aX + bY) = a\E(X) + b\E(Y), \qquad \Var(aX + bY) = a^2\Var(X) + b^2\Var(Y),$$
and if $X$ and $Y$ are normal, $aX + bY$ is normal.

- Variances **add** even for a difference: $\Var(X - Y) = \Var(X) + \Var(Y)$.
- Turn comparisons into a single variable: $\P(X > 2Y) = \P(X - 2Y > 0)$; $\P(|X - Y| < 5) = \P(-5 < X - Y < 5)$.
- State the distribution in full, e.g. "$X - 2Y \sim \N(2, 8)$", before computing.`,
      figure: [
        {
          type: "plot", x: [12, 44], y: [-0.012, 0.155], height: 200, axisLabels: ["x", null],
          curves: [
            { fn: "x => Math.exp(-((x-30)/3)*((x-30)/3)/2)/(3*Math.sqrt(2*Math.PI))", label: "X", labelAt: 32.3 },
            { fn: "x => Math.exp(-((x-26)/4)*((x-26)/4)/2)/(4*Math.sqrt(2*Math.PI))", tone: "good" },
          ],
          labels: [{ x: 21, y: 0.065, text: "Y", pos: "w", style: "italic", tone: "good" }],
          xTicks: [{ x: 26, label: "26" }, { x: 30, label: "30" }],
          caption: String.raw`$X \sim \N(30, 3^2)$ and $Y \sim \N(26, 4^2)$ overlap: $\P(X > Y)$ is not an area on either curve…`,
          alt: "Two overlapping normal curves: X centred at 30 with standard deviation 3, and Y centred at 26 with standard deviation 4.",
        },
        {
          type: "plot", x: [-14, 22], y: [-0.006, 0.092], height: 200, axisLabels: ["d", null],
          curves: [{ fn: "x => Math.exp(-((x-4)/5)*((x-4)/5)/2)/(5*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-((x-4)/5)*((x-4)/5)/2)/(5*Math.sqrt(2*Math.PI))", from: 0, to: 22, tone: "warn" }],
          xTicks: [{ x: 0, label: "0" }, { x: 4, label: "4" }],
          labels: [{ x: 5, y: 0.03, text: "P(X − Y > 0)", style: "plain" }],
          caption: String.raw`…but it is one area for $D = X - Y \sim \N(4, 3^2 + 4^2)$.`,
          alt: "Normal curve of D = X minus Y, centred at 4 with standard deviation 5, with the area to the right of 0 shaded.",
        },
      ],
    },
    {
      title: String.raw`Totals: $X_1 + X_2$ versus $2X$`,
      body: String.raw`- $X_1 + X_2 + \cdots + X_n$ (total of $n$ **independent** items): mean $n\mu$, variance $n\sigma^2$.
- $nX$ (one item multiplied by $n$): mean $n\mu$, variance $n^2\sigma^2$.

Decide which one the context describes: "the total mass of 4 apples" is $A_1 + A_2 + A_3 + A_4$; "twice the mass of an apple" is $2A$. The two have the same mean but different spreads, so different probabilities.

A "box containing 12 items" has total mass $B + X_1 + \cdots + X_{12}$, where $B$ is the box's own mass.`,
      figure: {
        type: "plot", x: [62, 138], y: [-0.004, 0.064], height: 210, axisLabels: ["x", null],
        curves: [
          { fn: "x => Math.exp(-(x-100)*(x-100)/100)/(Math.sqrt(50)*Math.sqrt(2*Math.PI))", label: "X₁ + X₂", labelAt: 106.5 },
          { fn: "x => Math.exp(-((x-100)/10)*((x-100)/10)/2)/(10*Math.sqrt(2*Math.PI))", tone: "good", label: "2X", labelAt: 113 },
        ],
        lines: [{ x: 100 }],
        xTicks: [{ x: 100, label: "100" }],
        caption: String.raw`$X \sim \N(50, 5^2)$: $X_1 + X_2 \sim \N(100, 50)$ but $2X \sim \N(100, 100)$ — same mean, $2X$ more spread out.`,
        alt: "Two normal curves both centred at 100: X1 + X2 with variance 50 is taller and narrower; 2X with variance 100 is lower and wider.",
      },
    },
    {
      title: String.raw`Modelling: assumptions and suitability`,
      body: String.raw`- A normal model is doubtful when the variable cannot be negative but $\P(X < 0)$ is not negligible (mean less than about $2\sigma$ above 0), or when the data are clearly skewed.
- When combining variables, state the **independence** assumption in context (e.g. "the service times of different customers are independent").
- Questions often combine a normal probability with a binomial count: first find $p = \P(\text{one item satisfies the condition})$, then use $\B(n, p)$.`,
      figure: {
        type: "plot", x: [-7, 15], y: [-0.01, 0.15], height: 190, axisLabels: ["x", null],
        curves: [{ fn: "x => Math.exp(-((x-4)/3)*((x-4)/3)/2)/(3*Math.sqrt(2*Math.PI))" }],
        shade: [{ upper: "x => Math.exp(-((x-4)/3)*((x-4)/3)/2)/(3*Math.sqrt(2*Math.PI))", from: -7, to: 0, tone: "warn" }],
        lines: [{ x: 0 }],
        xTicks: [{ x: 0, label: "0" }, { x: 4, label: "4" }],
        labels: [{ x: -1.3, y: 0.075, text: "P(X < 0) ≈ 0.09", pos: "w", style: "small", tone: "warn" }],
        segments: [{ from: [-1.6, 0.068], to: [-0.6, 0.012], tone: "muted", thin: true }],
        caption: String.raw`A time with mean 4 and s.d. 3 cannot be normal: the model gives about 9% of times below 0.`,
        alt: "Normal curve with mean 4 and standard deviation 3; the part of the curve to the left of 0, about 9% of the area, is shaded to show impossible negative values.",
      },
    },
  ],
  archetypes: [
    {
      id: "6.3-standard-probabilities",
      name: String.raw`Normal probabilities in context`,
      tests: String.raw`Computing probabilities for a single normal variable, including conditional probabilities and a follow-up binomial count of items meeting a condition. Recognise by "masses are normally distributed with mean … and standard deviation …; find the probability that…".`,
      questions: [
        {
          stem: String.raw`The masses of mangoes from an orchard are normally distributed with mean 320 g and standard deviation 25 g. Mangoes with mass more than 350 g are graded as "premium".`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen mango has mass between 300 g and 340 g.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the probability that a randomly chosen mango is graded as premium.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the probability that, in a random sample of 8 mangoes, at least 2 are graded as premium.`, marks: 3 },
            { label: "(iv)", text: String.raw`Given that a randomly chosen mango has mass more than 320 g, find the probability that it is graded as premium.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The lifetime of a certain type of battery is normally distributed with mean 42 hours and standard deviation 5 hours.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen battery lasts between 38 and 50 hours.`, marks: 2 },
            { label: "(ii)", text: String.raw`A torch uses 3 such batteries and stops working as soon as any one battery fails. Assuming the lifetimes are independent, find the probability that the torch works for more than 40 hours.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.3-inverse-normal",
      name: String.raw`Inverse normal: finding a value or a mean`,
      tests: String.raw`Finding the value $a$ for which $\P(X < a)$ or $\P(X > a)$ takes a given value, a symmetric interval, or the mean or standard deviation a machine must be set to so that a given proportion meets a specification. Recognise by "find the value of $a$ such that…" or "the least value of $\mu$".`,
      questions: [
        {
          stem: String.raw`The heights of students in a college are normally distributed with mean 165 cm and standard deviation 8 cm.`,
          parts: [
            { label: "(i)", text: String.raw`Find the height $h$ such that 15% of students are taller than $h$ cm.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the interval, symmetric about the mean, that contains the heights of 90% of the students.`, marks: 2 },
            { label: "(iii)", text: String.raw`Given that a randomly chosen student is taller than 170 cm, find the probability that the student is taller than 180 cm.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A machine fills bottles with juice. The volume of juice in a bottle is normally distributed with mean $\mu$ ml and standard deviation 4 ml. Each bottle is labelled as containing 500 ml.`,
          parts: [
            { label: "(i)", text: String.raw`Find the least value of $\mu$ such that at most 2% of bottles contain less than 500 ml.`, marks: 3 },
            { label: "(ii)", text: String.raw`Using the value of $\mu$ found in part (i), find the probability that a randomly chosen bottle contains more than 515 ml.`, marks: 1 },
            { label: "(iii)", text: String.raw`The machine is adjusted so that $\mu = 505$. Find the greatest value of the standard deviation for which at most 2% of bottles contain less than 500 ml.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.3-find-mu-sigma",
      name: String.raw`Finding $\mu$ and $\sigma$ from given probabilities`,
      tests: String.raw`Standardising two given tail probabilities to form simultaneous equations in $\mu$ and $\sigma$, or one equation together with a given relationship. Recognise by "10% of … are less than …, 20% are more than …".`,
      questions: [
        {
          stem: String.raw`The time taken by contestants to complete a puzzle is normally distributed with mean $\mu$ minutes and standard deviation $\sigma$ minutes. It is found that 10% of contestants take less than 40 minutes and 20% of contestants take more than 70 minutes.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $\mu$ and $\sigma$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the probability that a randomly chosen contestant takes more than 60 minutes.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The random variable $X$ has the distribution $\N(\mu, \sigma^2)$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $\sigma = 3$ and $\P(X > 20) = 0.25$, find $\mu$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Given instead that $\mu = 2\sigma$ and $\P(X > 30) = 0.05$, find $\sigma$, and hence find $\P(X < 10)$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "6.3-symmetry",
      name: String.raw`Symmetry of the normal curve`,
      tests: String.raw`Using symmetry about $\mu$ to deduce probabilities without a calculator, or to find $\mu$ from equal tail probabilities. Recognise by "without using a calculator" with only $\P(X < \mu + a)$ given, or by $\P(X < c) = \P(X > d)$.`,
      questions: [
        {
          stem: String.raw`The random variable $X$ has the distribution $\N(\mu, \sigma^2)$, and $a$ is a positive constant such that $\P(X < \mu + a) = 0.85$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Write down $\P(X < \mu - a)$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\P(\mu - a < X < \mu + a)$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the exact value of $\P(X > \mu - a \mid X < \mu + a)$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The random variable $Y$ has the distribution $\N(\mu, \sigma^2)$. It is given that $\P(Y < 12) = \P(Y > 28) = 0.1$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down the value of $\mu$, explaining your reasoning.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\sigma$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $\P(16 < Y < 28)$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.3-linear-transformation",
      name: String.raw`Linear transformations $aX + b$`,
      tests: String.raw`Finding the distribution of a quantity defined linearly from a normal variable (a fare, a cost, a converted unit, a scaled mark) using $\E(aX + b)$ and $\Var(aX + b)$. Recognise by "the fare is \$3.20 plus \$0.70 per km" or "marks are scaled so that…".`,
      questions: [
        {
          stem: String.raw`The distance, $D$ km, of a taxi journey is normally distributed with mean 12 and standard deviation 3. The fare for a journey is \$3.20 plus \$0.70 per km.`,
          parts: [
            { label: "(i)", text: String.raw`Find the mean and variance of the fare for a randomly chosen journey.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that the fare for a randomly chosen journey exceeds \$15.`, marks: 1 },
            { label: "(iii)", text: String.raw`A driver makes 10 independent journeys in a shift. Find the probability that the total fare collected exceeds \$120.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The raw marks in an examination are normally distributed with mean 52 and standard deviation 12. The marks are scaled using the formula $Y = aX + b$, where $X$ is the raw mark, $Y$ is the scaled mark and $a > 0$, so that the scaled marks have mean 60 and standard deviation 10.`,
          parts: [
            { label: "(i)", text: String.raw`Find the exact values of $a$ and $b$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the proportion of candidates whose scaled mark exceeds 75.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.3-totals-sum-vs-multiple",
      name: String.raw`Totals of several items: $X_1 + X_2$ versus $2X$`,
      tests: String.raw`Distinguishing the total of $n$ independent items (variance $n\sigma^2$) from $n$ times one item (variance $n^2\sigma^2$), including packing problems with a container. Recognise by "the total mass of 4 apples", "a box containing 12 items", or "twice the mass of".`,
      questions: [
        {
          stem: String.raw`The masses of apples are normally distributed with mean 150 g and standard deviation 10 g. The masses of oranges are normally distributed with mean 200 g and standard deviation 15 g. All masses are independent.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that the total mass of 4 randomly chosen apples exceeds 620 g.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that the mass of a randomly chosen orange is more than 1.5 times the mass of a randomly chosen apple.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find $\P(A_1 + A_2 > 320)$ and $\P(2A > 320)$, where $A$, $A_1$ and $A_2$ denote the masses of randomly chosen apples. Explain why the two answers are different.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Tins of soup have masses that are normally distributed with mean 80 g and standard deviation 4 g. Empty cartons have masses that are normally distributed with mean 50 g and standard deviation 3 g. A full carton consists of an empty carton packed with 12 randomly chosen tins.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that the mass of a full carton exceeds 1030 g.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the mass $w$ g such that 99% of full cartons have mass less than $w$ g.`, marks: 2 },
            { label: "(iii)", text: String.raw`State an assumption needed for your calculations to be valid.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.3-comparisons-differences",
      name: String.raw`Comparing independent normal variables`,
      tests: String.raw`Rewriting comparisons such as $\P(X > Y)$, $\P(|X - Y| < k)$ or $\P(X > 2Y)$ as a probability for a single linear combination, with variances adding. Recognise by "find the probability that … takes longer than …" or "differ by less than".`,
      questions: [
        {
          stem: String.raw`Mei travels to work either by bus or by train. Her journey time by bus is normally distributed with mean 35 minutes and standard deviation 4 minutes. Her journey time by train is normally distributed with mean 28 minutes and standard deviation 3 minutes. All journey times are independent.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen bus journey takes longer than a randomly chosen train journey.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that the times for a randomly chosen bus journey and a randomly chosen train journey differ by less than 5 minutes.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the probability that a randomly chosen bus journey takes more than 20% longer than a randomly chosen train journey.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The independent random variables $X$ and $Y$ have distributions $\N(10, 4)$ and $\N(4, 1)$ respectively. $Y_1$ and $Y_2$ are two independent observations of $Y$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\P(X > 2Y)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\P(X > Y_1 + Y_2)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Explain why the answers to parts (i) and (ii) are different.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.3-modelling-suitability",
      name: String.raw`Real-world modelling: queues and suitability of the model`,
      tests: String.raw`Extended context questions combining sums of service or journey times with inverse normal, and judging whether a normal model is appropriate. Recognise by queues, waiting times, or summary statistics of a non-negative quantity with a large standard deviation.`,
      questions: [
        {
          stem: String.raw`At a bank counter, the time taken to serve a customer is normally distributed with mean 4 minutes and standard deviation 1.2 minutes, independently of other customers. Sara joins the queue when there are exactly 5 customers ahead of her, the first of whom is just starting to be served.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that Sara waits less than 18 minutes before she starts to be served.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the time $t$ minutes such that there is a probability of 0.95 that Sara has finished being served within $t$ minutes of joining the queue.`, marks: 3 },
            { label: "(iii)", text: String.raw`State, in context, an assumption needed for your calculations, and give a reason why it may not hold in practice.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A survey finds that the daily time spent on social media by teenagers in a city has mean 2.5 hours and standard deviation 2 hours.`,
          parts: [
            { label: "(i)", text: String.raw`Assuming that the daily time is normally distributed with this mean and standard deviation, find the probability that a randomly chosen teenager spends a negative amount of time on social media.`, marks: 1 },
            { label: "(ii)", text: String.raw`Hence explain why a normal distribution is not a suitable model for the daily time spent on social media, and suggest how the shape of the actual distribution is likely to differ from a normal curve.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
