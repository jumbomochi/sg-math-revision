H2.addTopic({
  id: "6.4",
  title: "Sampling",
  paper: "Paper 2B",
  summary: String.raw`Random samples, the distribution of the sample mean, the Central Limit Theorem and unbiased estimates.`,
  syllabus: {
    include: [
      String.raw`concepts of population and simple random sample`,
      String.raw`concept of the sample mean $\overline{X}$ as a random variable with $\E(\overline{X}) = \mu$ and $\Var(\overline{X}) = \dfrac{\sigma^2}{n}$`,
      String.raw`distribution of sample mean from a normal population`,
      String.raw`use of the Central Limit Theorem to treat sample mean as having normal distribution when the sample size is sufficiently large (e.g. $n \ge 30$)`,
      String.raw`use of unbiased estimates of the population mean and variance from a sample, including cases where the data are given in summarised form $\sum x$ and $\sum x^2$, or $\sum (x - a)$ and $\sum (x - a)^2$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Population and random sample`,
      body: String.raw`The **population** is the whole set of items (people, objects, measurements) under study. A **(simple) random sample** of size $n$ is one in which **every member of the population has an equal chance of being selected, and the selections are independent** of one another (equivalently, every possible sample of size $n$ is equally likely).

- "Explain what is meant by a random sample **in this context**" — name the actual population and items: "every student in the college has the same chance of being chosen, independently of the others."
- A sample is **not random** when some members cannot be chosen or are more likely to be chosen: e.g. only those at one place/time, volunteers, the first $n$ off a production line, people who answer the phone. Name *who is excluded* and *why that matters* in context.
- To obtain a random sample: number the population $1$ to $N$ (a sampling frame), then use a random number generator to pick $n$ distinct numbers.`,
    },
    {
      title: String.raw`The sample mean as a random variable`,
      body: String.raw`If $X_1, X_2, \ldots, X_n$ is a random sample from a population with mean $\mu$ and variance $\sigma^2$, then $\overline{X} = \dfrac{X_1 + X_2 + \cdots + X_n}{n}$ is itself a random variable, with
$$\E(\overline{X}) = \mu, \qquad \Var(\overline{X}) = \frac{\sigma^2}{n}.$$

- The spread of $\overline{X}$ shrinks as $n$ grows: a sample mean is far less likely to be extreme than a single observation.
- Do not confuse $\overline{X}$ with the **total** $X_1 + \cdots + X_n$, which has mean $n\mu$ and variance $n\sigma^2$, or with $nX$ (variance $n^2\sigma^2$).`,
      figure: {
        type: "plot", x: [-3.6, 3.6], y: [-0.06, 1.75], height: 240, axisLabels: ["x", null],
        curves: [
          { fn: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))", tone: "muted" },
          { fn: "x => Math.exp(-0.5*((x-(0))/0.5)**2)/(0.5*Math.sqrt(2*Math.PI))", tone: "good" },
          { fn: "x => Math.exp(-0.5*((x-(0))/0.25)**2)/(0.25*Math.sqrt(2*Math.PI))" },
        ],
        lines: [{ x: 0 }],
        xTicks: [{ x: 0, label: "μ" }],
        labels: [
          { x: 0.42, y: 1.45, text: "X̄, n = 16", pos: "e", style: "italic", tone: "accent" },
          { x: 0.75, y: 0.62, text: "X̄, n = 4", pos: "e", style: "italic", tone: "good" },
          { x: 1.55, y: 0.2, text: "X", pos: "e", style: "italic", tone: "muted" },
        ],
        caption: String.raw`Same centre $\mu$; the spread $\sigma/\sqrt{n}$ shrinks as $n$ grows.`,
        alt: "Three normal curves centred at mu: the distribution of X is widest, the distribution of the sample mean for n = 4 is narrower and taller, and for n = 16 narrower and taller still.",
      },
    },
    {
      title: String.raw`Sampling from a normal population`,
      body: String.raw`If $X \sim \N(\mu, \sigma^2)$, then for **any** sample size $n$,
$$\overline{X} \sim \N\!\left(\mu, \frac{\sigma^2}{n}\right) \quad \text{exactly}.$$

No Central Limit Theorem is needed — say so when asked. Typical comparison: $\P(X > k)$ for one item versus $\P(\overline{X} > k)$ for the mean of $n$ items; explain the difference via the smaller variance of $\overline{X}$.`,
      figure: [
        {
          type: "plot", x: [-3.4, 3.4], y: [-0.04, 0.85], height: 190, axisLabels: ["x", null],
          curves: [{ fn: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))", from: 0.75, to: 3.4, tone: "warn" }],
          lines: [{ x: 0 }],
          xTicks: [{ x: 0, label: "μ" }, { x: 0.75, label: "k" }],
          segments: [{ from: [1.45, 0.2], to: [1.15, 0.13], tone: "warn", thin: true }],
          labels: [{ x: 1.45, y: 0.2, text: "P(X > k)", pos: "e", style: "italic", tone: "warn" }],
          caption: String.raw`One item: $X \sim \N(\mu, \sigma^2)$`,
          alt: "Normal curve of X with the tail to the right of k shaded; the shaded area is fairly large.",
        },
        {
          type: "plot", x: [-3.4, 3.4], y: [-0.04, 0.85], height: 190, axisLabels: ["x̄", null],
          curves: [{ fn: "x => Math.exp(-0.5*((x-(0))/0.5)**2)/(0.5*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-0.5*((x-(0))/0.5)**2)/(0.5*Math.sqrt(2*Math.PI))", from: 0.75, to: 3.4, tone: "warn" }],
          lines: [{ x: 0 }],
          xTicks: [{ x: 0, label: "μ" }, { x: 0.75, label: "k" }],
          segments: [{ from: [1.45, 0.2], to: [0.95, 0.06], tone: "warn", thin: true }],
          labels: [{ x: 1.45, y: 0.2, text: "P(X̄ > k)", pos: "e", style: "italic", tone: "warn" }],
          caption: String.raw`Mean of 4 items: $\overline{X} \sim \N\!\left(\mu, \frac{\sigma^2}{4}\right)$`,
          alt: "Narrower normal curve of the sample mean on the same scale, with the much smaller tail to the right of k shaded.",
        },
      ],
    },
    {
      title: String.raw`The Central Limit Theorem (CLT)`,
      body: String.raw`If the sample size $n$ is **large** (e.g. $n \ge 30$), then whatever the distribution of the population (with mean $\mu$, variance $\sigma^2$),
$$\overline{X} \sim \N\!\left(\mu, \frac{\sigma^2}{n}\right) \quad \textbf{approximately}.$$

- The CLT is needed when the population distribution is **not normal or unknown** (e.g. a discrete score, a skewed waiting time). It is not needed when the population is normal.
- The CLT is about the distribution of $\overline{X}$, **not** of $X$: a large sample does *not* make the population normal. A common wrong statement is "since $n$ is large, $X$ is normally distributed".
- With a small sample from a non-normal population, $\P(\overline{X} > k)$ cannot be found using a normal distribution.
- Always write "approximately" (or $\overset{\text{approx}}{\sim}$) when the CLT is used. No continuity correction is applied to $\overline{X}$.`,
      figure: [
        {
          type: "plot", x: [-0.6, 4.6], y: [0, 0.46], height: 180, axisLabels: ["x", null],
          bars: [[0, 0.4], [1, 0.3], [2, 0.15], [3, 0.1], [4, 0.05]], barWidth: 0.55,
          lines: [{ x: 1.1, label: "μ" }],
          xTicks: [0, 1, 2, 3, 4].map((k) => ({ x: k, label: String(k) })),
          caption: String.raw`Population $X$: discrete and skewed`,
          alt: "Bar chart of a skewed discrete population: P(X = x) is 0.4, 0.3, 0.15, 0.1, 0.05 for x = 0 to 4, with mean 1.1 marked.",
        },
        {
          type: "plot", x: [-0.6, 4.6], y: [0, 0.215], height: 180, axisLabels: ["x̄", null],
          bars: [[0.0, 0.0256], [0.25, 0.0768], [0.5, 0.1248], [0.75, 0.1552], [1.0, 0.1649], [1.25, 0.1494], [1.5, 0.1172], [1.75, 0.082], [2.0, 0.0515], [2.25, 0.0286], [2.5, 0.0142], [2.75, 0.0063], [3.0, 0.0024], [3.25, 0.0008], [3.5, 0.0002], [3.75, 0.0001]], barWidth: 0.19,
          lines: [{ x: 1.1, label: "μ" }],
          xTicks: [0, 1, 2, 3, 4].map((k) => ({ x: k, label: String(k) })),
          caption: String.raw`$\overline{X}$ for $n = 4$: still skewed`,
          alt: "Exact distribution of the sample mean of 4 observations from the same population: bars at multiples of 0.25, less skewed and more concentrated around 1.1.",
        },
        {
          type: "plot", x: [-0.6, 4.6], y: [0, 2.6], height: 180, axisLabels: ["x̄", null],
          curves: [{ fn: "x => Math.exp(-0.5*((x-(1.1))/0.21525)**2)/(0.21525*Math.sqrt(2*Math.PI))", samples: 1200 }],
          shade: [{ upper: "x => Math.exp(-0.5*((x-(1.1))/0.21525)**2)/(0.21525*Math.sqrt(2*Math.PI))", from: 0.2, to: 2.0 }],
          lines: [{ x: 1.1, label: "μ" }],
          xTicks: [0, 1, 2, 3, 4].map((k) => ({ x: k, label: String(k) })),
          caption: String.raw`$\overline{X}$ for $n = 30$: approximately $\N\!\left(\mu, \frac{\sigma^2}{30}\right)$`,
          alt: "Distribution of the sample mean of 30 observations: a narrow, symmetric bell-shaped curve centred at 1.1.",
        },
      ],
    },
    {
      title: String.raw`Unbiased estimates of $\mu$ and $\sigma^2$ ($s^2$ in MF27)`,
      body: String.raw`From a sample of size $n$:
$$\bar{x} = \frac{\sum x}{n}, \qquad s^2 = \frac{1}{n-1}\left[\sum x^2 - \frac{\left(\sum x\right)^2}{n}\right] = \frac{1}{n-1}\sum (x - \bar{x})^2 .$$

- Divide by $n - 1$, **not** $n$ — dividing by $n$ gives the (biased) sample variance.
- From raw data use the GC (1-Var Stats): $s^2 = (S_x)^2$, **not** $(\sigma_x)^2$.
- Show the substitution into the formula when data are summarised; a bare answer may lose a method mark.`,
    },
    {
      title: String.raw`Coded (summarised) data $\sum(x-a)$, $\sum(x-a)^2$`,
      body: String.raw`Let $y = x - a$. Subtracting a constant shifts the mean but **not** the variance, so
$$\bar{x} = a + \frac{\sum (x-a)}{n}, \qquad s^2 = \frac{1}{n-1}\left[\sum (x-a)^2 - \frac{\left(\sum (x-a)\right)^2}{n}\right].$$

These coded versions are **not** in MF27 — memorise them (or derive them from the MF27 formula with $y = x - a$). Watch the sign of $\sum (x - a)$, which is often negative.`,
    },
    {
      title: String.raw`Sample means from a discrete distribution`,
      body: String.raw`For the mean score over $n$ plays of a game (or mean number of items, etc.):

1. Find $\mu = \E(X)$ and $\sigma^2 = \Var(X) = \E(X^2) - [\E(X)]^2$ from the probability distribution.
2. State: since $n$ is large, by the CLT, $\overline{X} \sim \N\!\left(\mu, \dfrac{\sigma^2}{n}\right)$ approximately.
3. Compute the probability on the GC (normalcdf).

When population parameters are unknown, replace $\mu$ and $\sigma^2$ by the unbiased estimates $\bar{x}$ and $s^2$ from a (large) earlier sample, and say that you are doing so.`,
    },
    {
      title: String.raw`Finding the least sample size $n$`,
      body: String.raw`Standardise with $n$ unknown: e.g. $\P(\overline{X} > k) > 0.98 \iff \dfrac{k - \mu}{\sigma/\sqrt{n}} < -2.0537$.

- Solve for $\sqrt{n}$ and square, taking care with the direction of the inequality when dividing by a negative number; or tabulate $\P(\overline{X} > k)$ against $n$ on the GC and show the two values either side of the boundary.
- $n$ is an integer: round **up** to the least $n$ satisfying the condition, and quote the GC values that justify it.
- If the population is not normal, check the final $n$ is large enough for the CLT to apply.`,
      figure: {
        type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 210, axisLabels: ["x̄", null],
        curves: [{ fn: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))" }],
        shade: [{ upper: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))", from: -2.0537, to: 3.6 }, { upper: "x => Math.exp(-0.5*((x-(0))/1)**2)/(1*Math.sqrt(2*Math.PI))", from: -3.6, to: -2.0537, tone: "warn" }],
        xTicks: [{ x: -2.0537, label: "k" }, { x: 0, label: "μ" }],
        labels: [{ x: 0, y: 0.17, text: "0.98", style: "plain" }, { x: -2.75, y: 0.1, text: "0.02", style: "small", tone: "warn" }],
        caption: String.raw`$\P(\overline{X} > k) = 0.98$ exactly when $k$ is $2.0537$ standard deviations $\sigma/\sqrt{n}$ below $\mu$.`,
        alt: "Distribution of the sample mean with value k marked below mu; area 0.98 to the right of k and 0.02 to the left.",
      },
    },
  ],
  archetypes: [
    {
      id: "6.4-random-sample-context",
      name: String.raw`Population and random sampling in context`,
      tests: String.raw`Stating the population, explaining the meaning of a random sample in context, and criticising a proposed (non-random) sampling method. Usually short 1–2 mark parts at the start of a sampling or testing question.`,
      questions: [
        {
          stem: String.raw`A researcher wishes to estimate the mean amount of time per week that students at a junior college of 1800 students spend on co-curricular activities. She proposes to obtain her sample by asking the first 50 students who leave the main gate after lessons on a Monday afternoon.`,
          parts: [
            { label: "(i)", text: String.raw`State the population in this context.`, marks: 1 },
            { label: "(ii)", text: String.raw`Give a reason why the proposed sample is unlikely to be a random sample.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain what is meant by a random sample of 50 students in this context, and describe how the researcher could obtain such a sample.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A factory produces packets of biscuits on a production line that runs from 8 am to 8 pm. To monitor the mean mass of the packets, a quality-control officer weighs the first 40 packets produced each morning.`,
          parts: [
            { label: "(i)", text: String.raw`Explain why this method of sampling may not give a representative sample of the packets produced in a day.`, marks: 1 },
            { label: "(ii)", text: String.raw`Suggest an improved method of selecting 40 packets that would give a random sample of the day's production.`, marks: 1 },
            { label: "(iii)", text: String.raw`State, in context, one assumption needed for the masses of the 40 packets to be treated as independent observations.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.4-unbiased-estimates",
      name: String.raw`Unbiased estimates from raw, summarised or coded data`,
      tests: String.raw`Computing $\bar{x}$ and $s^2$ from raw data (GC), from $\sum x$ and $\sum x^2$, or from coded sums $\sum(x-a)$ and $\sum(x-a)^2$, then using them as population values in a sampling-distribution calculation.`,
      questions: [
        {
          stem: String.raw`The times, in minutes, taken by a random sample of 10 commuters to travel to work are as follows.
$$34.2 \quad 41.5 \quad 38.0 \quad 29.7 \quad 45.3 \quad 36.8 \quad 40.1 \quad 33.6 \quad 39.4 \quad 37.4$$`,
          parts: [
            { label: "(i)", text: String.raw`Find unbiased estimates of the population mean and variance of the travel times.`, marks: 2 },
            { label: "(ii)", text: String.raw`Using your answers to part (i), find the probability that the mean travel time of a random sample of 50 commuters exceeds 38.5 minutes.`, marks: 3 },
            { label: "(iii)", text: String.raw`Explain why it was not necessary to assume that the travel times are normally distributed in part (ii).`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The masses, $x$ grams, of a random sample of 60 mangoes from a large consignment are summarised by
$$\sum (x - 250) = -312, \qquad \sum (x - 250)^2 = 18\,540.$$`,
          parts: [
            { label: "(i)", text: String.raw`Find unbiased estimates of the population mean and variance of the masses of the mangoes.`, marks: 3 },
            { label: "(ii)", text: String.raw`A second random sample of 40 mangoes is taken from the consignment. Using your answers to part (i), find the probability that the mean mass of this sample is less than 240 grams.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.4-normal-population-mean",
      name: String.raw`Distribution of $\overline{X}$ from a normal population`,
      tests: String.raw`Using $\overline{X} \sim \N(\mu, \sigma^2/n)$ exactly, contrasting $\P(X > k)$ with $\P(\overline{X} > k)$, and working backwards from a given probability to an unknown parameter.`,
      questions: [
        {
          stem: String.raw`The volume of coffee, $X$ ml, dispensed into a cup by a vending machine is normally distributed with mean 330 ml and standard deviation 4 ml.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that a randomly chosen cup contains more than 333 ml.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the probability that the mean volume of a random sample of 12 cups is more than 333 ml.`, marks: 2 },
            { label: "(iii)", text: String.raw`Explain, in context, why your answer to part (ii) is smaller than your answer to part (i).`, marks: 1 },
            { label: "(iv)", text: String.raw`Find the value of $k$ such that the probability that the mean volume of a random sample of 12 cups lies between $(330 - k)$ ml and $(330 + k)$ ml is 0.95.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The lengths of steel rods made by a machine are normally distributed with mean $\mu$ cm and standard deviation 0.3 cm. The mean length of a random sample of 25 rods is denoted by $\overline{L}$ cm.`,
          parts: [
            { label: "(i)", text: String.raw`State the distribution of $\overline{L}$, giving its parameters in terms of $\mu$ where appropriate.`, marks: 1 },
            { label: "(ii)", text: String.raw`Given that $\P(\overline{L} > 50.1) = 0.02275$, find the value of $\mu$.`, marks: 3 },
            { label: "(iii)", text: String.raw`State, with a reason, whether the Central Limit Theorem was used in your working.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.4-clt-discrete-game",
      name: String.raw`CLT for the mean of a discrete random variable`,
      tests: String.raw`Finding $\E(X)$ and $\Var(X)$ from a probability distribution (often a game score), then applying the CLT to the mean of a large number of plays. Recognise it by a small table of outcomes followed by "the mean score of 50 games".`,
      questions: [
        {
          stem: String.raw`In a carnival game, a player throws a ball at a target and scores $X$ points. The probability distribution of $X$ is shown below.

| $x$ | 0 | 1 | 2 | 5 |
| $\P(X = x)$ | 0.3 | 0.4 | 0.2 | 0.1 |`,
          parts: [
            { label: "(i)", text: String.raw`Find $\E(X)$ and $\Var(X)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`A player plays the game 50 times. Find the probability that the player's mean score per game is more than 1.5.`, marks: 3 },
            { label: "(iii)", text: String.raw`State, with a reason, whether it was necessary to use the Central Limit Theorem in part (ii).`, marks: 1 },
            { label: "(iv)", text: String.raw`Each game costs \$2 to play and the player receives \$1 for each point scored. Find the probability that a player who plays 50 games makes an overall loss of more than \$40.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.4-clt-justify",
      name: String.raw`Justifying the CLT; unknown population distributions`,
      tests: String.raw`Deciding when the CLT is needed or valid, explaining why a probability cannot be found for a small sample from a non-normal population, and correcting the misconception that a large sample makes $X$ normal.`,
      questions: [
        {
          stem: String.raw`The waiting times, $t$ minutes, of a random sample of 80 patients at a clinic are summarised by
$$\sum t = 1720, \qquad \sum t^2 = 41\,950.$$`,
          parts: [
            { label: "(i)", text: String.raw`Find unbiased estimates of the population mean and variance of the waiting times.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that the mean waiting time of another random sample of 80 patients exceeds 23 minutes.`, marks: 2 },
            { label: "(iii)", text: String.raw`A clinic manager states: "Since the sample size of 80 is large, the waiting times of patients are normally distributed." Comment on this statement.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The masses of eggs from a farm have mean 58 g and standard deviation 6 g. The distribution of the masses is not known.`,
          parts: [
            { label: "(i)", text: String.raw`Explain why the probability that the mean mass of a random sample of 6 eggs exceeds 60 g cannot be found.`, marks: 1 },
            { label: "(ii)", text: String.raw`Eggs are packed in boxes of 50, which may be regarded as random samples. Find the probability that the mean mass of the eggs in a box exceeds 60 g.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the probability that, out of 5 randomly chosen boxes, at least one has a mean egg mass exceeding 60 g.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.4-least-sample-size",
      name: String.raw`Finding the least sample size $n$`,
      tests: String.raw`Setting up and solving an inequality in $n$ (or $\sqrt{n}$) from a probability condition on $\overline{X}$, rounding correctly to an integer, and confirming with GC values.`,
      questions: [
        {
          stem: String.raw`The lifetimes of a brand of battery have mean 120 hours and standard deviation 15 hours. A random sample of $n$ batteries is taken, where $n$ is large.`,
          parts: [
            { label: "(i)", text: String.raw`State the approximate distribution of the sample mean lifetime $\overline{X}$, giving its parameters in terms of $n$ where appropriate.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the least value of $n$ such that the probability that the sample mean lifetime is more than 117 hours exceeds 0.98.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The reaction times of adults to a visual signal are normally distributed with standard deviation 2.4 milliseconds and unknown mean $\mu$ milliseconds. A scientist wishes to take a random sample of $n$ adults so that the sample mean reaction time is within 0.5 milliseconds of $\mu$ with probability at least 0.95.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $n$ must satisfy $\P\!\left(|Z| < \dfrac{0.5\sqrt{n}}{2.4}\right) \ge 0.95$, where $Z \sim \N(0, 1)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the least possible value of $n$.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
