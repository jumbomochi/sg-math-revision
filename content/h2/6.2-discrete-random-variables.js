H2.addTopic({
  id: "6.2",
  title: "Discrete Random Variables",
  paper: "Paper 2B",
  summary: String.raw`Probability distributions, expectation and variance, and the binomial distribution.`,
  syllabus: {
    include: [
      String.raw`concept of discrete random variables, probability distributions, expectations and variances`,
      String.raw`concept of binomial distribution $\B(n, p)$ as an example of a discrete probability distribution and use of $\B(n, p)$ as a probability model, including conditions under which the binomial distribution is a suitable model`,
      String.raw`use of mean and variance of binomial distribution (without proof)`,
    ],
    exclude: [
      String.raw`finding cumulative distribution function of a discrete random variable`,
    ],
  },
  concepts: [
    {
      title: String.raw`Probability distributions`,
      body: String.raw`A discrete random variable $X$ takes isolated values $x_1, x_2, \ldots$ with probabilities $\P(X = x_i)$ satisfying

- $0 \le \P(X = x_i) \le 1$ for every $i$, and
- $\sum \P(X = x_i) = 1$.

Present the distribution as a **table** of $x$ against $\P(X = x)$. When building it from a context, list every possible value first (check the smallest and largest carefully), find each probability with a tree diagram or P&C, and check that the probabilities sum to 1.`,
      figure: {
        type: "plot", x: [0, 6], y: [0, 0.42], height: 220, axisLabels: ["x", "P(X = x)"],
        polygons: [{ points: [[0.7, 0], [1.3, 0], [1.3, 0.1000], [0.7, 0.1000]], fill: true, tone: "accent" },
          { points: [[1.7, 0], [2.3, 0], [2.3, 0.3500], [1.7, 0.3500]], fill: true, tone: "accent" },
          { points: [[2.7, 0], [3.3, 0], [3.3, 0.2500], [2.7, 0.2500]], fill: true, tone: "accent" },
          { points: [[3.7, 0], [4.3, 0], [4.3, 0.2000], [3.7, 0.2000]], fill: true, tone: "accent" },
          { points: [[4.7, 0], [5.3, 0], [5.3, 0.1000], [4.7, 0.1000]], fill: true, tone: "accent" }],
        lines: [{ x: 2.85, label: "E(X) = 2.85" }],
        labels: [{ x: 1, y: 0.1, text: "0.1", pos: "n", style: "small" }, { x: 2, y: 0.35, text: "0.35", pos: "n", style: "small" }, { x: 3, y: 0.25, text: "0.25", pos: "n", style: "small" }, { x: 4, y: 0.2, text: "0.2", pos: "n", style: "small" }, { x: 5, y: 0.1, text: "0.1", pos: "n", style: "small" }],
        xTicks: [{ x: 1, label: "1" }, { x: 2, label: "2" }, { x: 3, label: "3" }, { x: 4, label: "4" }, { x: 5, label: "5" }],
        caption: String.raw`Bar heights are the probabilities and sum to 1. $\E(X) = 2.85$ is the balance point — not a possible value of $X$.`,
        alt: "Bar chart of a probability distribution on x = 1 to 5 with probabilities 0.1, 0.35, 0.25, 0.2 and 0.1; a dashed line at 2.85 marks the expectation, the balance point.",
      },
    },
    {
      title: String.raw`Expectation and variance`,
      body: String.raw`$$\E(X) = \sum x\,\P(X = x), \qquad \E(X^2) = \sum x^2\,\P(X = x),$$
$$\Var(X) = \E(X^2) - [\E(X)]^2.$$
Memorise these. Also $\E(\mathrm{g}(X)) = \sum \mathrm{g}(x)\,\P(X = x)$, and
$$\E(aX + b) = a\E(X) + b, \qquad \Var(aX + b) = a^2 \Var(X).$$

- $\E(X)$ need not be a possible value of $X$.
- $\E(X^2) \ne [\E(X)]^2$ in general — a very common error.
- Exact fractions are expected when the probabilities are simple fractions.`,
      figure: [
        {
          type: "plot", x: [0, 6], y: [0, 0.62], height: 200, axisLabels: ["x", "P(X = x)"],
          polygons: [{ points: [[0.7, 0], [1.3, 0], [1.3, 0.0500], [0.7, 0.0500]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.2000], [1.7, 0.2000]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.5000], [2.7, 0.5000]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.2000], [3.7, 0.2000]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.0500], [4.7, 0.0500]], fill: true, tone: "accent" }],
          lines: [{ x: 3, label: "E(X)" }],
          xTicks: [{ x: 1, label: "1" }, { x: 2, label: "2" }, { x: 3, label: "3" }, { x: 4, label: "4" }, { x: 5, label: "5" }],
          caption: String.raw`$\E(X) = 3$, $\Var(X) = 0.8$: concentrated near the mean.`,
          alt: "Symmetric distribution on 1 to 5 with probabilities 0.05, 0.2, 0.5, 0.2, 0.05; mean 3 marked by a dashed line, variance 0.8.",
        },
        {
          type: "plot", x: [0, 6], y: [0, 0.62], height: 200, axisLabels: ["x", "P(X = x)"],
          polygons: [{ points: [[0.7, 0], [1.3, 0], [1.3, 0.3000], [0.7, 0.3000]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.1000], [1.7, 0.1000]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.2000], [2.7, 0.2000]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.1000], [3.7, 0.1000]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.3000], [4.7, 0.3000]], fill: true, tone: "accent" }],
          lines: [{ x: 3, label: "E(X)" }],
          xTicks: [{ x: 1, label: "1" }, { x: 2, label: "2" }, { x: 3, label: "3" }, { x: 4, label: "4" }, { x: 5, label: "5" }],
          caption: String.raw`$\E(X) = 3$, $\Var(X) = 2.6$: same balance point, more spread.`,
          alt: "Symmetric distribution on 1 to 5 with probabilities 0.3, 0.1, 0.2, 0.1, 0.3; mean 3 marked by a dashed line, variance 2.6.",
        },
      ],
    },
    {
      title: String.raw`Unknown probabilities`,
      body: String.raw`If a table contains unknowns, form equations from
$$\sum \P(X = x) = 1 \quad \text{and} \quad \E(X) = \text{given value}$$
(or a given variance), then solve simultaneously. Check that the solutions give probabilities in $[0, 1]$ and reject any that do not.`,
    },
    {
      title: String.raw`Expected gain and fair games`,
      body: String.raw`Define the random variable clearly — usually the **net gain** = prize $-$ cost to play.

- A game is **fair** if $\E(\text{net gain}) = 0$, i.e. expected prize $=$ cost to play.
- From the organiser's point of view, profit per game $= -(\text{player's net gain})$; over $n$ games the expected profit is $n$ times the expected profit per game.
- Interpret answers in context: a negative expected gain means the player loses money on average in the long run.`,
    },
    {
      title: String.raw`Binomial distribution and its conditions`,
      body: String.raw`$X \sim \B(n, p)$ counts the number of "successes" in $n$ trials when

1. there is a **fixed** number $n$ of trials,
2. each trial has only **two** outcomes ("success"/"failure"),
3. the probability of success $p$ is **constant** for every trial,
4. the trials are **independent** of one another.

"State, in context, two assumptions" means rewrite conditions 3 and 4 in the words of the question, e.g. "the probability that a patient recovers is the same for every patient" and "whether one patient recovers is independent of whether any other patient recovers". Generic statements earn no credit.

Binomial is unsuitable when sampling without replacement from a small population (p changes), or when outcomes influence each other (e.g. members of one household catching an infectious illness).`,
    },
    {
      title: String.raw`Binomial probabilities and the GC`,
      body: String.raw`$$\P(X = x) = \binom{n}{x} p^x (1 - p)^{n - x}, \quad x = 0, 1, \ldots, n \quad \text{(MF27)}$$

- GC: binompdf$(n, p, x)$ gives $\P(X = x)$; binomcdf$(n, p, x)$ gives $\P(X \le x)$.
- Translate inequalities carefully before using binomcdf: $\P(X \ge k) = 1 - \P(X \le k - 1)$, $\P(X < k) = \P(X \le k - 1)$, $\P(a < X \le b) = \P(X \le b) - \P(X \le a)$.
- Always write the distribution (e.g. "$X \sim \B(15, 0.3)$") and the probability statement before the numerical answer.`,
      figure: {
        type: "plot", x: [-0.8, 10.8], y: [0, 0.37], height: 220, axisLabels: ["x", null],
        polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.0060], [-0.3, 0.0060]], fill: true, tone: "muted" },
          { points: [[0.7, 0], [1.3, 0], [1.3, 0.0403], [0.7, 0.0403]], fill: true, tone: "muted" },
          { points: [[1.7, 0], [2.3, 0], [2.3, 0.1209], [1.7, 0.1209]], fill: true, tone: "muted" },
          { points: [[2.7, 0], [3.3, 0], [3.3, 0.2150], [2.7, 0.2150]], fill: true, tone: "muted" },
          { points: [[3.7, 0], [4.3, 0], [4.3, 0.2508], [3.7, 0.2508]], fill: true, tone: "warn" },
          { points: [[4.7, 0], [5.3, 0], [5.3, 0.2007], [4.7, 0.2007]], fill: true, tone: "warn" },
          { points: [[5.7, 0], [6.3, 0], [6.3, 0.1115], [5.7, 0.1115]], fill: true, tone: "warn" },
          { points: [[6.7, 0], [7.3, 0], [7.3, 0.0425], [6.7, 0.0425]], fill: true, tone: "warn" },
          { points: [[7.7, 0], [8.3, 0], [8.3, 0.0106], [7.7, 0.0106]], fill: true, tone: "warn" },
          { points: [[8.7, 0], [9.3, 0], [9.3, 0.0016], [8.7, 0.0016]], fill: true, tone: "warn" },
          { points: [[9.7, 0], [10.3, 0], [10.3, 0.0001], [9.7, 0.0001]], fill: true, tone: "warn" }],
        xTicks: [{ x: 0, label: "0" }, { x: 1, label: "1" }, { x: 2, label: "2" }, { x: 3, label: "3" }, { x: 4, label: "4" }, { x: 5, label: "5" }, { x: 6, label: "6" }, { x: 7, label: "7" }, { x: 8, label: "8" }, { x: 9, label: "9" }, { x: 10, label: "10" }],
        labels: [{ x: 1.5, y: 0.27, text: "P(X ≤ 3)", style: "small", tone: "muted" }, { x: 7.3, y: 0.24, text: "P(X ≥ 4) = 1 − P(X ≤ 3)", style: "small", tone: "warn" }],
        caption: String.raw`$X \sim \B(10, 0.4)$: "at least 4" is everything except $0, 1, 2, 3$, so use $1 - $ binomcdf$(10, 0.4, 3)$.`,
        alt: "Bar chart of the binomial distribution B(10, 0.4). Bars for x = 0 to 3 are grey and labelled P(X at most 3); bars for x = 4 to 10 are highlighted and labelled P(X at least 4) = 1 minus P(X at most 3).",
      },
    },
    {
      title: String.raw`Mean, variance and mode of $\B(n, p)$`,
      body: String.raw`$$\E(X) = np, \qquad \Var(X) = np(1 - p) \quad \text{(MF27)}$$

- Given $\E(X)$ and $\Var(X)$, divide to get $1 - p$ first.
- $\E(X^2) = \Var(X) + [\E(X)]^2$.
- **Most likely value** (mode): tabulate $\P(X = x)$ on the GC near $np$ and pick the largest, quoting the neighbouring probabilities as justification. If two adjacent values have equal probability, both are modes.`,
      figure: [
        {
          type: "plot", x: [-0.8, 10.8], y: [0, 0.34], height: 190, axisLabels: ["x", null],
          polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.0563], [-0.3, 0.0563]], fill: true, tone: "accent" },
            { points: [[0.7, 0], [1.3, 0], [1.3, 0.1877], [0.7, 0.1877]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.2816], [1.7, 0.2816]], fill: true, tone: "warn" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.2503], [2.7, 0.2503]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.1460], [3.7, 0.1460]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.0584], [4.7, 0.0584]], fill: true, tone: "accent" },
            { points: [[5.7, 0], [6.3, 0], [6.3, 0.0162], [5.7, 0.0162]], fill: true, tone: "accent" },
            { points: [[6.7, 0], [7.3, 0], [7.3, 0.0031], [6.7, 0.0031]], fill: true, tone: "accent" },
            { points: [[7.7, 0], [8.3, 0], [8.3, 0.0004], [7.7, 0.0004]], fill: true, tone: "accent" },
            { points: [[8.7, 0], [9.3, 0], [9.3, 0.0000], [8.7, 0.0000]], fill: true, tone: "accent" },
            { points: [[9.7, 0], [10.3, 0], [10.3, 0.0000], [9.7, 0.0000]], fill: true, tone: "accent" }],
          lines: [{ x: 2.5 }],
          xTicks: [{ x: 0, label: "0" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }, { x: 10, label: "10" }],
          labels: [{ x: 2.5, y: 0.325, text: "np = 2.5", pos: "e", style: "small" }],
          caption: String.raw`$\B(10, 0.25)$: skewed right (positive skew), mode 2.`,
          alt: "Bar chart of B(10, 0.25), positively skewed with its peak at x = 2 highlighted; a dashed line marks np = 2.5.",
        },
        {
          type: "plot", x: [-0.8, 10.8], y: [0, 0.34], height: 190, axisLabels: ["x", null],
          polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.0010], [-0.3, 0.0010]], fill: true, tone: "accent" },
            { points: [[0.7, 0], [1.3, 0], [1.3, 0.0098], [0.7, 0.0098]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.0439], [1.7, 0.0439]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.1172], [2.7, 0.1172]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.2051], [3.7, 0.2051]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.2461], [4.7, 0.2461]], fill: true, tone: "warn" },
            { points: [[5.7, 0], [6.3, 0], [6.3, 0.2051], [5.7, 0.2051]], fill: true, tone: "accent" },
            { points: [[6.7, 0], [7.3, 0], [7.3, 0.1172], [6.7, 0.1172]], fill: true, tone: "accent" },
            { points: [[7.7, 0], [8.3, 0], [8.3, 0.0439], [7.7, 0.0439]], fill: true, tone: "accent" },
            { points: [[8.7, 0], [9.3, 0], [9.3, 0.0098], [8.7, 0.0098]], fill: true, tone: "accent" },
            { points: [[9.7, 0], [10.3, 0], [10.3, 0.0010], [9.7, 0.0010]], fill: true, tone: "accent" }],
          lines: [{ x: 5 }],
          xTicks: [{ x: 0, label: "0" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }, { x: 10, label: "10" }],
          labels: [{ x: 5, y: 0.325, text: "np = 5", pos: "e", style: "small" }],
          caption: String.raw`$\B(10, 0.5)$: symmetric about $np = 5$, mode 5.`,
          alt: "Bar chart of B(10, 0.5), symmetric about x = 5, with the peak at x = 5 highlighted.",
        },
        {
          type: "plot", x: [-0.8, 10.8], y: [0, 0.34], height: 190, axisLabels: ["x", null],
          polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.0000], [-0.3, 0.0000]], fill: true, tone: "accent" },
            { points: [[0.7, 0], [1.3, 0], [1.3, 0.0000], [0.7, 0.0000]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.0004], [1.7, 0.0004]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.0031], [2.7, 0.0031]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.0162], [3.7, 0.0162]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.0584], [4.7, 0.0584]], fill: true, tone: "accent" },
            { points: [[5.7, 0], [6.3, 0], [6.3, 0.1460], [5.7, 0.1460]], fill: true, tone: "accent" },
            { points: [[6.7, 0], [7.3, 0], [7.3, 0.2503], [6.7, 0.2503]], fill: true, tone: "accent" },
            { points: [[7.7, 0], [8.3, 0], [8.3, 0.2816], [7.7, 0.2816]], fill: true, tone: "warn" },
            { points: [[8.7, 0], [9.3, 0], [9.3, 0.1877], [8.7, 0.1877]], fill: true, tone: "accent" },
            { points: [[9.7, 0], [10.3, 0], [10.3, 0.0563], [9.7, 0.0563]], fill: true, tone: "accent" }],
          lines: [{ x: 7.5 }],
          xTicks: [{ x: 0, label: "0" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }, { x: 10, label: "10" }],
          labels: [{ x: 7.5, y: 0.325, text: "np = 7.5", pos: "e", style: "small" }],
          caption: String.raw`$\B(10, 0.75)$: skewed left (negative skew), mode 8.`,
          alt: "Bar chart of B(10, 0.75), negatively skewed with its peak at x = 8 highlighted; a dashed line marks np = 7.5.",
        },
      ],
    },
    {
      title: String.raw`Finding $n$ or $p$`,
      body: String.raw`- **Least $n$** such that, e.g., $\P(X \ge 1) > 0.9$: rewrite as $1 - (1-p)^n > 0.9$ and solve with logarithms (reverse the inequality when dividing by a negative $\ln$), or tabulate on the GC. Show the values either side of the boundary, e.g. "$n = 21$: 0.8906; $n = 22$: 0.9015".
- **Finding $p$**: form an equation in $p$ and solve with the GC (graph/solver). There may be two roots — use the given condition (e.g. $p < 0.5$) to choose.
- Integer answers are required for $n$; state the conclusion clearly ("least $n$ is 22").`,
      figure: {
        type: "plot", x: [11, 35], y: [0.7, 1.02], height: 220, axisLabels: ["n", "P(X ≥ 1)"],
        scatter: [[12, 0.7176], [13, 0.7458], [14, 0.7712], [15, 0.7941], [16, 0.8147], [17, 0.8332], [18, 0.8499], [19, 0.8649], [20, 0.8784], [23, 0.9114], [24, 0.9202], [25, 0.9282], [26, 0.9354], [27, 0.9419], [28, 0.9477], [29, 0.9529], [30, 0.9576], [31, 0.9618], [32, 0.9657], [33, 0.9691], [34, 0.9722]],
        lines: [{ y: 0.9, label: "0.9" }],
        points: [{ x: 21, y: 0.8906, label: "n = 21: 0.8906", pos: "se", style: "small" }, { x: 22, y: 0.9015, label: "n = 22: 0.9015", pos: "nw", style: "small" }],
        xTicks: [{ x: 15, label: "15" }, { x: 20, label: "20" }, { x: 25, label: "25" }, { x: 30, label: "30" }],
        caption: String.raw`$X \sim \B(n, 0.1)$: $\P(X \ge 1) = 1 - 0.9^n$ first exceeds 0.9 at $n = 22$, so the least $n$ is 22.`,
        alt: "Plot of 1 minus 0.9 to the power n against n from 12 to 34, rising towards 1. The dashed line at 0.9 is crossed between n = 21 (0.8906) and n = 22 (0.9015).",
      },
    },
    {
      title: String.raw`Binomial within binomial`,
      body: String.raw`When items come in boxes (or days, or batches), first find the probability $q$ that **one box** satisfies the condition, using $X \sim \B(n, p)$. Then the number of such boxes among $m$ boxes is $Y \sim \B(m, q)$. Keep $q$ to at least 5 significant figures in the second stage to avoid rounding errors.`,
      figure: {
        type: "plot", x: [0, 12], y: [0.6, 3.6], equal: true, axes: false,
        polygons: [{ points: [[0.4, 1.4], [2.8, 1.4], [2.8, 3.0], [0.4, 3.0]], tone: "ink" },
          { points: [[3.3, 1.4], [5.7, 1.4], [5.7, 3.0], [3.3, 3.0]], tone: "ink" },
          { points: [[6.2, 1.4], [8.6, 1.4], [8.6, 3.0], [6.2, 3.0]], tone: "ink" },
          { points: [[9.1, 1.4], [11.5, 1.4], [11.5, 3.0], [9.1, 3.0]], tone: "warn" }],
        circles: [{ c: [0.7, 2.55], r: 0.12, tone: "muted" },
          { c: [1.15, 2.55], r: 0.12, tone: "muted" },
          { c: [1.6, 2.55], r: 0.12, tone: "muted" },
          { c: [2.05, 2.55], r: 0.12, tone: "muted" },
          { c: [2.5, 2.55], r: 0.12, tone: "muted" },
          { c: [0.7, 1.85], r: 0.12, tone: "muted" },
          { c: [1.15, 1.85], r: 0.12, tone: "muted" },
          { c: [1.6, 1.85], r: 0.12, tone: "muted" },
          { c: [2.05, 1.85], r: 0.12, tone: "muted" },
          { c: [2.5, 1.85], r: 0.12, tone: "muted" },
          { c: [3.6, 2.55], r: 0.12, tone: "muted" },
          { c: [4.05, 2.55], r: 0.12, fill: true, tone: "warn" },
          { c: [4.5, 2.55], r: 0.12, tone: "muted" },
          { c: [4.95, 2.55], r: 0.12, tone: "muted" },
          { c: [5.4, 2.55], r: 0.12, tone: "muted" },
          { c: [3.6, 1.85], r: 0.12, tone: "muted" },
          { c: [4.05, 1.85], r: 0.12, tone: "muted" },
          { c: [4.5, 1.85], r: 0.12, tone: "muted" },
          { c: [4.95, 1.85], r: 0.12, fill: true, tone: "warn" },
          { c: [5.4, 1.85], r: 0.12, tone: "muted" },
          { c: [6.5, 2.55], r: 0.12, tone: "muted" },
          { c: [6.95, 2.55], r: 0.12, tone: "muted" },
          { c: [7.4, 2.55], r: 0.12, tone: "muted" },
          { c: [7.85, 2.55], r: 0.12, tone: "muted" },
          { c: [8.3, 2.55], r: 0.12, fill: true, tone: "warn" },
          { c: [6.5, 1.85], r: 0.12, tone: "muted" },
          { c: [6.95, 1.85], r: 0.12, tone: "muted" },
          { c: [7.4, 1.85], r: 0.12, tone: "muted" },
          { c: [7.85, 1.85], r: 0.12, tone: "muted" },
          { c: [8.3, 1.85], r: 0.12, tone: "muted" },
          { c: [9.4, 2.55], r: 0.12, fill: true, tone: "warn" },
          { c: [9.85, 2.55], r: 0.12, tone: "muted" },
          { c: [10.3, 2.55], r: 0.12, tone: "muted" },
          { c: [10.75, 2.55], r: 0.12, tone: "muted" },
          { c: [11.2, 2.55], r: 0.12, tone: "muted" },
          { c: [9.4, 1.85], r: 0.12, tone: "muted" },
          { c: [9.85, 1.85], r: 0.12, tone: "muted" },
          { c: [10.3, 1.85], r: 0.12, fill: true, tone: "warn" },
          { c: [10.75, 1.85], r: 0.12, tone: "muted" },
          { c: [11.2, 1.85], r: 0.12, fill: true, tone: "warn" }],
        labels: [{ x: 1.6, y: 1.4, text: "0 faulty: accept", pos: "s", style: "small" },
          { x: 1.6, y: 3.0, text: "X ~ B(10, p)", pos: "n", style: "small", tone: "muted" },
          { x: 4.5, y: 1.4, text: "2 faulty: accept", pos: "s", style: "small" },
          { x: 4.5, y: 3.0, text: "X ~ B(10, p)", pos: "n", style: "small", tone: "muted" },
          { x: 7.4, y: 1.4, text: "1 faulty: accept", pos: "s", style: "small" },
          { x: 7.4, y: 3.0, text: "X ~ B(10, p)", pos: "n", style: "small", tone: "muted" },
          { x: 10.3, y: 1.4, text: "3 faulty: reject", pos: "s", style: "small", tone: "warn" },
          { x: 10.3, y: 3.0, text: "X ~ B(10, p)", pos: "n", style: "small", tone: "muted" }],
        caption: String.raw`Stage 1: each box of 10 is rejected (more than two faulty) with probability $q = \P(X \ge 3)$. Stage 2: the number of rejected boxes out of $m$ is $\B(m, q)$.`,
        alt: "Four boxes of 10 items each, with faulty items highlighted. Boxes with 0, 1 and 2 faulty items are accepted; the box with 3 faulty items is rejected. Each box is one trial of the second-stage binomial distribution.",
      },
    },
    {
      title: String.raw`Poisson distribution $\mathrm{Po}(\mu)$`,
      tags: ["IP"],
      body: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). $X \sim \mathrm{Po}(\mu)$ models the **number of events** in a fixed interval of time or space:

$$\P(X = x) = \frac{\ee^{-\mu}\mu^x}{x!}, \quad x = 0, 1, 2, \ldots \qquad \E(X) = \Var(X) = \mu.$$

- **Conditions** (state them in context): events occur **singly**, **independently** of one another, and **at random** at a constant average rate, so the mean number in an interval is proportional to its length.
- **Scaling**: if calls arrive at an average of 2 per hour, the number in 3 hours is $\mathrm{Po}(6)$ and the number in 15 minutes is $\mathrm{Po}(0.5)$.
- **Additive property**: if $X \sim \mathrm{Po}(\mu_1)$ and $Y \sim \mathrm{Po}(\mu_2)$ are independent, then $X + Y \sim \mathrm{Po}(\mu_1 + \mu_2)$. (There is no such result for $X - Y$ or $2X$.)
- **Checking a model**: since the mean equals the variance, a sample with $\bar{x} \approx s^2$ supports a Poisson model; a variance much larger than the mean suggests events cluster (not independent).
- GC: poissonpdf$(\mu, x)$ gives $\P(X = x)$; poissoncdf$(\mu, x)$ gives $\P(X \le x)$. Translate "at least", "more than" as for the binomial.
- Unlike $\B(n, p)$, there is **no upper limit** on $X$.`,
      figure: [
        {
          type: "plot", x: [-0.8, 9.8], y: [0, 0.37], height: 190, axisLabels: ["x", null],
          polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.2231], [-0.3, 0.2231]], fill: true, tone: "accent" },
            { points: [[0.7, 0], [1.3, 0], [1.3, 0.3347], [0.7, 0.3347]], fill: true, tone: "warn" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.2510], [1.7, 0.2510]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.1255], [2.7, 0.1255]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.0471], [3.7, 0.0471]], fill: true, tone: "accent" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.0141], [4.7, 0.0141]], fill: true, tone: "accent" },
            { points: [[5.7, 0], [6.3, 0], [6.3, 0.0035], [5.7, 0.0035]], fill: true, tone: "accent" },
            { points: [[6.7, 0], [7.3, 0], [7.3, 0.0008], [6.7, 0.0008]], fill: true, tone: "accent" },
            { points: [[7.7, 0], [8.3, 0], [8.3, 0.0001], [7.7, 0.0001]], fill: true, tone: "accent" },
            { points: [[8.7, 0], [9.3, 0], [9.3, 0.0000], [8.7, 0.0000]], fill: true, tone: "accent" }],
          lines: [{ x: 1.5 }],
          xTicks: [{ x: 0, label: "0" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }],
          labels: [{ x: 1.5, y: 0.355, text: "μ = 1.5", pos: "e", style: "small" }],
          caption: String.raw`$\mathrm{Po}(1.5)$: positively skewed, mode 1.`,
          alt: "Bar chart of the Poisson distribution with mean 1.5 for x = 0 to 9: the tallest bar is at x = 1 (about 0.33) and the bars tail off to the right; a dashed line marks the mean 1.5.",
        },
        {
          type: "plot", x: [-0.8, 13.8], y: [0, 0.37], height: 190, axisLabels: ["x", null],
          polygons: [{ points: [[-0.3, 0], [0.3, 0], [0.3, 0.0067], [-0.3, 0.0067]], fill: true, tone: "accent" },
            { points: [[0.7, 0], [1.3, 0], [1.3, 0.0337], [0.7, 0.0337]], fill: true, tone: "accent" },
            { points: [[1.7, 0], [2.3, 0], [2.3, 0.0842], [1.7, 0.0842]], fill: true, tone: "accent" },
            { points: [[2.7, 0], [3.3, 0], [3.3, 0.1404], [2.7, 0.1404]], fill: true, tone: "accent" },
            { points: [[3.7, 0], [4.3, 0], [4.3, 0.1755], [3.7, 0.1755]], fill: true, tone: "warn" },
            { points: [[4.7, 0], [5.3, 0], [5.3, 0.1755], [4.7, 0.1755]], fill: true, tone: "warn" },
            { points: [[5.7, 0], [6.3, 0], [6.3, 0.1462], [5.7, 0.1462]], fill: true, tone: "accent" },
            { points: [[6.7, 0], [7.3, 0], [7.3, 0.1044], [6.7, 0.1044]], fill: true, tone: "accent" },
            { points: [[7.7, 0], [8.3, 0], [8.3, 0.0653], [7.7, 0.0653]], fill: true, tone: "accent" },
            { points: [[8.7, 0], [9.3, 0], [9.3, 0.0363], [8.7, 0.0363]], fill: true, tone: "accent" },
            { points: [[9.7, 0], [10.3, 0], [10.3, 0.0181], [9.7, 0.0181]], fill: true, tone: "accent" },
            { points: [[10.7, 0], [11.3, 0], [11.3, 0.0082], [10.7, 0.0082]], fill: true, tone: "accent" },
            { points: [[11.7, 0], [12.3, 0], [12.3, 0.0034], [11.7, 0.0034]], fill: true, tone: "accent" },
            { points: [[12.7, 0], [13.3, 0], [13.3, 0.0013], [12.7, 0.0013]], fill: true, tone: "accent" }],
          lines: [{ x: 5 }],
          xTicks: [{ x: 0, label: "0" }, { x: 2, label: "2" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }, { x: 10, label: "10" }, { x: 12, label: "12" }],
          labels: [{ x: 5, y: 0.355, text: "μ = 5", pos: "e", style: "small" }],
          caption: String.raw`$\mathrm{Po}(5)$: more symmetric as $\mu$ grows; modes 4 and 5.`,
          alt: "Bar chart of the Poisson distribution with mean 5 for x = 0 to 13: bars rise to equal tallest bars at x = 4 and x = 5 (about 0.18) and fall away more slowly to the right; a dashed line marks the mean 5.",
        },
      ],
    },
    {
      title: String.raw`Geometric distribution $\mathrm{Geo}(p)$`,
      tags: ["IP"],
      body: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). In a sequence of independent trials, each with the same probability $p$ of success, let $X$ be the number of trials **up to and including the first success**. Then $X \sim \mathrm{Geo}(p)$:

$$\P(X = x) = (1 - p)^{x-1}p, \quad x = 1, 2, 3, \ldots \qquad \E(X) = \frac{1}{p}, \quad \Var(X) = \frac{1 - p}{p^2}.$$

- **Tail probability**: $\P(X > x) = (1 - p)^x$, because the first $x$ trials must all be failures. So $\P(X \le x) = 1 - (1 - p)^x$ — much quicker than adding terms.
- **Least $n$** problems ("how many attempts so that the probability of at least one success exceeds 0.95?") reduce to $1 - (1 - p)^n > 0.95$; solve with logarithms or a GC table.
- **No memory**: $\P(X > a + b \mid X > a) = \P(X > b)$. Past failures do not make a success "due".
- The probabilities form a GP with ratio $1 - p$, so sums such as $\P(X \text{ is odd})$ come from a sum to infinity.
- **Binomial vs geometric**: $\B(n, p)$ counts successes in a **fixed** number of trials; $\mathrm{Geo}(p)$ counts trials until the **first** success, with no upper limit.`,
      figure: {
        type: "plot", x: [0, 12.8], y: [0, 0.33], height: 210, axisLabels: ["x", null],
        polygons: [{ points: [[0.7, 0], [1.3, 0], [1.3, 0.3000], [0.7, 0.3000]], fill: true, tone: "muted" },
          { points: [[1.7, 0], [2.3, 0], [2.3, 0.2100], [1.7, 0.2100]], fill: true, tone: "muted" },
          { points: [[2.7, 0], [3.3, 0], [3.3, 0.1470], [2.7, 0.1470]], fill: true, tone: "muted" },
          { points: [[3.7, 0], [4.3, 0], [4.3, 0.1029], [3.7, 0.1029]], fill: true, tone: "warn" },
          { points: [[4.7, 0], [5.3, 0], [5.3, 0.0720], [4.7, 0.0720]], fill: true, tone: "warn" },
          { points: [[5.7, 0], [6.3, 0], [6.3, 0.0504], [5.7, 0.0504]], fill: true, tone: "warn" },
          { points: [[6.7, 0], [7.3, 0], [7.3, 0.0353], [6.7, 0.0353]], fill: true, tone: "warn" },
          { points: [[7.7, 0], [8.3, 0], [8.3, 0.0247], [7.7, 0.0247]], fill: true, tone: "warn" },
          { points: [[8.7, 0], [9.3, 0], [9.3, 0.0173], [8.7, 0.0173]], fill: true, tone: "warn" },
          { points: [[9.7, 0], [10.3, 0], [10.3, 0.0121], [9.7, 0.0121]], fill: true, tone: "warn" },
          { points: [[10.7, 0], [11.3, 0], [11.3, 0.0085], [10.7, 0.0085]], fill: true, tone: "warn" },
          { points: [[11.7, 0], [12.3, 0], [12.3, 0.0059], [11.7, 0.0059]], fill: true, tone: "warn" }],
        xTicks: [{ x: 1, label: "1" }, { x: 2, label: "2" }, { x: 3, label: "3" }, { x: 4, label: "4" }, { x: 6, label: "6" }, { x: 8, label: "8" }, { x: 10, label: "10" }, { x: 12, label: "12" }],
        labels: [{ x: 2, y: 0.27, text: "first 3 trials", pos: "e", style: "small", tone: "muted" }, { x: 6.5, y: 0.12, text: "P(X > 3) = 0.7³", pos: "e", style: "small", tone: "warn" }],
        caption: String.raw`$X \sim \mathrm{Geo}(0.3)$: each bar is 0.7 times the one before. The highlighted tail is $\P(X > 3) = 0.7^3 = 0.343$.`,
        alt: "Bar chart of the geometric distribution with p = 0.3 for x = 1 to 12, with bars decreasing by a factor of 0.7 each step from 0.3 at x = 1. Bars for x = 1 to 3 are grey; bars from x = 4 onwards are highlighted and labelled P(X > 3) = 0.7 cubed.",
      },
    },
  ],
  archetypes: [
    {
      id: "6.2-distribution-from-context",
      name: String.raw`Building a probability distribution from a context`,
      tests: String.raw`Deriving the probability distribution of a random variable defined by a game, draws from a bag or dice, then computing $\E(X)$ and $\Var(X)$. Recognise by "find the probability distribution of $X$" after a description of an experiment.`,
      questions: [
        {
          stem: String.raw`A bag contains 3 red balls and 2 blue balls. Balls are taken from the bag at random, one at a time and without replacement, until a red ball is obtained. The random variable $X$ denotes the number of balls taken.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability distribution of $X$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact values of $\E(X)$ and $\Var(X)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`The experiment is carried out twice, the bag being restored to its original contents before the second experiment. Find the probability that the total number of balls taken in the two experiments is 4.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Two fair six-sided dice are thrown. The random variable $X$ is the larger of the two numbers shown (if the numbers are equal, $X$ is that number).`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\P(X = x) = \dfrac{2x - 1}{36}$ for $x = 1, 2, \ldots, 6$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the exact value of $\E(X)$ and find $\Var(X)$, giving your answer correct to 3 significant figures.`, marks: 3 },
            { label: "(iii)", text: String.raw`In a game, a player scores $3X - 2$ points. Find the expected score and the variance of the score.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.2-unknown-probabilities",
      name: String.raw`Distributions with unknown constants`,
      tests: String.raw`Finding unknown probabilities or a constant $k$ from $\sum \P(X = x) = 1$ and a given expectation, then using the distribution. Recognise by a table with letters $a$, $b$ or a formula $\P(X = x) = k\,\mathrm{g}(x)$.`,
      questions: [
        {
          stem: String.raw`The random variable $X$ has the probability distribution shown in the table.

| $x$ | 1 | 2 | 3 | 4 |
| $\P(X = x)$ | 0.1 | $a$ | $b$ | 0.2 |

It is given that $\E(X) = 2.6$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $a$ and $b$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find $\Var(X)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $\P(X > \E(X))$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The random variable $Y$ takes the values 1, 2, 3 and 4 only, with $\P(Y = y) = k(5 - y)$, where $k$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $k = \frac{1}{10}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\E(Y)$ and $\Var(Y)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Two independent observations $Y_1$ and $Y_2$ of $Y$ are taken. Find $\P(Y_1 > Y_2)$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.2-expected-gain",
      name: String.raw`Expected gain, fair games and expected profit`,
      tests: String.raw`Defining the net gain (or profit) of a game or business decision as a random variable, finding its expectation and variance, and adjusting a prize or price to make the game fair or to hit a target profit. Recognise by money: "pays \$… to play", "premium", "expected profit".`,
      questions: [
        {
          stem: String.raw`At a charity fair, a player pays \$2 to play a game. The player takes 3 balls at random, without replacement, from a bag containing 4 red balls and 6 white balls. The player receives \$10 if all 3 balls are red, \$3 if exactly 2 balls are red, and nothing otherwise. The random variable $G$ denotes the player's net gain in dollars.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability distribution of $G$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find $\E(G)$ and $\Var(G)$, and interpret $\E(G)$ in context.`, marks: 3 },
            { label: "(iii)", text: String.raw`The organiser wishes to make the game fair by changing only the prize for drawing 3 red balls. Find the new prize.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`An insurance company sells one-year policies on mobile phones for a premium of \$120. During the year, a policy results in a total-loss claim of \$1500 with probability 0.03, or a repair claim of \$300 with probability 0.12, and otherwise no claim. At most one claim is made on each policy. The random variable $P$ denotes the company's profit, in dollars, on one policy (ignoring all other costs).`,
          parts: [
            { label: "(i)", text: String.raw`Find $\E(P)$ and the standard deviation of $P$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the premium the company should charge for its expected profit per policy to be \$50.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.2-binomial-conditions",
      name: String.raw`Binomial model: assumptions in context`,
      tests: String.raw`Stating the conditions for a binomial model in the words of the context, explaining when a binomial model is not appropriate, and computing basic binomial probabilities. Recognise by "state, in context, two assumptions needed for $X$ to be well modelled by a binomial distribution".`,
      questions: [
        {
          stem: String.raw`A gardener plants seeds in trays of 20. The number of seeds in a tray that germinate is denoted by $X$. On average, 85% of the seeds germinate.`,
          parts: [
            { label: "(i)", text: String.raw`State, in context, two assumptions needed for $X$ to be well modelled by a binomial distribution.`, marks: 2 },
            { label: "(ii)", text: String.raw`Using a binomial model, find the probability that at least 18 seeds in a tray germinate.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the probability that fewer than 15 seeds in a tray germinate.`, marks: 1 },
            { label: "(iv)", text: String.raw`The gardener notices that seeds near the edge of a tray dry out more quickly than those in the middle. Explain how this might affect the validity of the binomial model.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A multiple-choice quiz has 25 questions, each with 4 options of which exactly one is correct. A student guesses the answer to every question at random.`,
          parts: [
            { label: "(i)", text: String.raw`Explain why the number of questions answered correctly can be modelled by a binomial distribution.`, marks: 2 },
            { label: "(ii)", text: String.raw`The pass mark is 10 correct answers. Find the probability that the student passes.`, marks: 2 },
            { label: "(iii)", text: String.raw`A different random variable $R$ is the number of days in a 30-day month on which it rains in a certain city. Give a reason why a binomial distribution may not be a suitable model for $R$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.2-binomial-probabilities-mode",
      name: String.raw`Binomial probabilities and the most likely value`,
      tests: String.raw`Translating inequalities such as "at least", "more than", "between" into binomcdf calculations, and finding the most likely number of successes by tabulation. Recognise by a stated $\B(n, p)$ model and "find the most probable value".`,
      questions: [
        {
          stem: String.raw`In a large population, 35% of adults have a particular blood type. A random sample of 20 adults is taken, and $X$ denotes the number in the sample with this blood type.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\P(X \ge 8)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\P(5 < X \le 10)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the most likely value of $X$, justifying your answer.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The random variable $Y$ has the distribution $\B\left(n, \frac{1}{3}\right)$, and it is given that $\P(Y = 4) = \P(Y = 5)$.`,
          parts: [
            { label: "(i)", text: String.raw`Without using a calculator, show that $n = 14$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find $\P(Y = 4)$ and state the most likely values of $Y$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.2-find-n-or-p",
      name: String.raw`Finding $n$ or $p$ from a probability condition`,
      tests: String.raw`Finding the least number of trials so that a probability exceeds a threshold, or finding $p$ from a given probability using the GC. Recognise by "find the least value of $n$ such that…" or "find the value of $p$".`,
      questions: [
        {
          stem: String.raw`The probability that a randomly chosen light bulb from a factory is faulty is 0.08, independently of other bulbs.`,
          parts: [
            { label: "(i)", text: String.raw`Find the least number of bulbs that must be tested for the probability that at least one faulty bulb is found to exceed 0.95.`, marks: 3 },
            { label: "(ii)", text: String.raw`The factory improves its process so that the probability that a bulb is faulty is $p$. In a random sample of 15 bulbs, the probability that at most one is faulty is 0.8. Find $p$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The random variable $W$ has the distribution $\B(10, p)$, where $p < 0.2$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $\P(W = 2) = 0.25$, find the value of $p$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Explain why there is a second value of $p$, with $p > 0.2$, satisfying $\P(W = 2) = 0.25$, and find it.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.2-binomial-within-binomial",
      name: String.raw`Repeated sampling: binomial within binomial`,
      tests: String.raw`A two-stage model where each box, batch or day is classified using one binomial distribution, and the number of such boxes is then a second binomial distribution; often with a conditional probability. Recognise by "boxes of 12 … a box is rejected if…, find the probability that out of 10 boxes…".`,
      questions: [
        {
          stem: String.raw`Eggs are packed in boxes of 12. The probability that an egg is cracked is 0.05, independently of all other eggs. A box is rejected if it contains more than one cracked egg.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen box is rejected.`, marks: 2 },
            { label: "(ii)", text: String.raw`A shop receives 10 boxes. Find the probability that at most 2 of these boxes are rejected.`, marks: 2 },
            { label: "(iii)", text: String.raw`Given that a box contains at least one cracked egg, find the probability that it contains exactly one cracked egg.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Biscuits are sold in packets of 8. The probability that a biscuit is broken is 0.1, independently of all other biscuits. A packet is described as "perfect" if none of its biscuits is broken. Packets are delivered to shops in cartons of 24.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen packet is perfect.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the probability that a carton contains at least 10 perfect packets.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the expected number of perfect packets in a carton.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.2-binomial-mean-variance",
      name: String.raw`Mean and variance of a binomial distribution`,
      tests: String.raw`Using $\E(X) = np$ and $\Var(X) = np(1-p)$ to find $n$ and $p$, $\E(X^2)$, probabilities within one standard deviation of the mean, or the mean and variance of a linear score. Recognise by a given mean and variance, or a score such as "+4 for correct, $-1$ for wrong".`,
      questions: [
        {
          stem: String.raw`The random variable $X$ has a binomial distribution with mean 6 and variance 4.2.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of $n$ and $p$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\E(X^2)$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the probability that $X$ lies within one standard deviation of its mean.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A test consists of 20 multiple-choice questions, each with 4 options, exactly one of which is correct. A candidate scores 4 marks for each correct answer and loses 1 mark for each wrong answer. A candidate guesses every answer at random. The random variable $X$ is the number of correct answers and $S$ is the total score.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $S = 5X - 20$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\E(S)$ and $\Var(S)$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find the probability that the candidate's total score is positive.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.2-poisson",
      name: String.raw`Poisson distribution as a model`,
      tags: ["IP"],
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Stating the conditions for a Poisson model in context, rescaling the mean to a different interval, using mean $=$ variance to judge suitability, and adding independent Poisson variables. Recognise it by "on average, $\mu$ per hour / per metre / per page" with no fixed number of trials.`,
      questions: [
        {
          stem: String.raw`Calls arrive at a helpline at random, at an average rate of 3 calls per 10-minute period.`,
          parts: [
            { label: "(i)", text: String.raw`State, in context, two assumptions needed for the number of calls in a 10-minute period to be well modelled by a Poisson distribution.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that exactly 4 calls arrive in a 10-minute period.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the probability that more than 8 calls arrive in a 30-minute period.`, marks: 2 },
            { label: "(iv)", text: String.raw`An hour is divided into six 10-minute periods. Find the probability that at least one call arrives in every one of these periods.`, marks: 2 },
            { label: "(v)", text: String.raw`Find the greatest length of time, $t$ minutes, for which the probability that no calls arrive in $t$ minutes is more than 0.5. Give your answer correct to 3 significant figures.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`The numbers of flaws found in 80 randomly chosen 1-metre lengths of fabric are summarised below.

| Number of flaws | 0 | 1 | 2 | 3 | 4 | 5 |
| Number of lengths | 18 | 27 | 20 | 10 | 4 | 1 |

Find unbiased estimates of the population mean and variance of the number of flaws in a 1-metre length, and explain whether your answers support a Poisson model.`, marks: 3 },
            { label: "(b)", text: String.raw`The numbers of emails received in an hour by Ali and by Ben are independent random variables with distributions $\mathrm{Po}(2.4)$ and $\mathrm{Po}(1.6)$ respectively.`, parts: [
              { label: "(i)", text: String.raw`Find the probability that Ali and Ben receive a total of exactly 5 emails in a particular hour.`, marks: 2 },
              { label: "(ii)", text: String.raw`Given that they receive a total of 5 emails in a particular hour, find the probability that Ali receives exactly 3 of them.`, marks: 3 },
            ] },
          ],
        },
      ],
    },
    {
      id: "6.2-geometric",
      name: String.raw`Geometric distribution: waiting for the first success`,
      tags: ["IP"],
      tests: String.raw`Beyond 9758 (in H2 Further Mathematics 9649). Recognising "the number of attempts up to and including the first success", using $\P(X = x) = (1 - p)^{x-1}p$, the tail result $\P(X > x) = (1 - p)^x$ and $\E(X) = \frac{1}{p}$, and summing a GP of probabilities.`,
      questions: [
        {
          stem: String.raw`Each time Priya throws a dart, the probability that she hits the bullseye is 0.15, independently of all other throws. She throws darts until she first hits the bullseye. The number of throws she makes, including the throw that hits the bullseye, is $X$.`,
          parts: [
            { label: "(i)", text: String.raw`State the distribution of $X$, including the value of its parameter.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find $\P(X = 4)$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the probability that she needs more than 6 throws.`, marks: 2 },
            { label: "(iv)", text: String.raw`Find the expected number of throws she makes.`, marks: 1 },
            { label: "(v)", text: String.raw`Find the least number of throws, $n$, for which the probability that she has hit the bullseye within her first $n$ throws exceeds 0.9.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The random variable $X$ has the distribution $\mathrm{Geo}(p)$, where $0 < p < 1$. It is given that $\P(X \le 2) = 0.64$.`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`Show that $p = 0.4$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that $\P(X \text{ is even}) = \dfrac{1 - p}{2 - p}$, and evaluate this probability.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find $\P(X > 5 \mid X > 2)$, and comment on your answer.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
