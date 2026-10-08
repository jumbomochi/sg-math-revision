H2.addTopic({
  id: "6.5",
  title: "Hypothesis Testing",
  paper: "Paper 2B",
  summary: String.raw`$z$-tests for a population mean, with known variance or a large sample, and interpreting the result.`,
  syllabus: {
    include: [
      String.raw`concepts of null hypothesis $(\mathrm{H}_0)$ and alternative hypothesis $(\mathrm{H}_1)$, test statistic, critical region, critical value, level of significance, and $p$-value`,
      String.raw`formulation of hypotheses and testing for a population mean based on a sample from a normal population of known variance, or a large sample from any population`,
      String.raw`1-tail and 2-tail tests`,
      String.raw`interpretation of the results of a hypothesis test in the context of the problem`,
    ],
    exclude: [
      String.raw`the use of the term 'Type I error'`,
      String.raw`concept of Type II error`,
      String.raw`testing the difference between two population means`,
    ],
  },
  concepts: [
    {
      title: String.raw`The language of a test`,
      body: String.raw`- **Null hypothesis** $\mathrm{H}_0$: the claim assumed true, always with "=", e.g. $\mathrm{H}_0: \mu = 500$.
- **Alternative hypothesis** $\mathrm{H}_1$: what is suspected — $\mu < 500$, $\mu > 500$ (**1-tail**) or $\mu \ne 500$ (**2-tail**, "has changed", "is different").
- **Test statistic**: the quantity computed from the sample, here $Z = \dfrac{\overline{X} - \mu_0}{\sigma/\sqrt{n}}$.
- **Level of significance** $\alpha\%$: the probability of rejecting $\mathrm{H}_0$ when $\mathrm{H}_0$ is true.
- **Critical region**: the set of values of the test statistic (or of $\bar{x}$) for which $\mathrm{H}_0$ is rejected; its boundary is the **critical value**.
- **$p$-value**: the probability, assuming $\mathrm{H}_0$ is true, of obtaining a value of the test statistic at least as extreme as the one observed.

Always define $\mu$ in context: "Let $\mu$ be the population mean mass, in grams, of a bag of flour."`,
      figure: {
        type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 220, axisLabels: ["z", null],
        curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
        shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.645, to: 3.6, tone: "warn" }],
        xTicks: [{ x: 0, label: "0" }, { x: 1.645, label: "1.645" }],
        segments: [{ from: [2.2, 0.3], to: [1.7, 0.125], tone: "muted", thin: true, arrow: true }, { from: [2.45, 0.075], to: [2.1, 0.02], tone: "warn", thin: true }],
        labels: [
          { x: -0.3, y: 0.16, text: "Do not reject H₀", style: "small" },
          { x: 2.2, y: 0.3, text: "critical value", pos: "n", style: "small", tone: "muted" },
          { x: 2.85, y: 0.19, text: "critical region", style: "small", tone: "warn" },
          { x: 2.85, y: 0.145, text: "(reject H₀)", style: "small", tone: "warn" },
          { x: 2.85, y: 0.09, text: "area α = 5%", style: "small", tone: "warn" },
        ],
        caption: String.raw`Distribution of $Z$ under $\mathrm{H}_0$ for $\mathrm{H}_1: \mu > \mu_0$ at the 5% level: the shaded area is the significance level.`,
        alt: "Standard normal curve of the test statistic under H0, with the right tail beyond the critical value 1.645 shaded as the critical region of area 5 percent; the rest is the do-not-reject region.",
      },
    },
    {
      title: String.raw`Which test statistic?`,
      body: String.raw`| Situation | Distribution of test statistic under $\mathrm{H}_0$ |
| Normal population, **known** $\sigma^2$, any $n$ | $Z = \dfrac{\overline{X} - \mu_0}{\sigma/\sqrt{n}} \sim \N(0,1)$ exactly |
| Any population, **large** $n$ (e.g. $n \ge 30$), $\sigma^2$ unknown | $Z = \dfrac{\overline{X} - \mu_0}{S/\sqrt{n}} \sim \N(0,1)$ approximately, by the CLT |

In the large-sample case, compute the unbiased estimate $s^2$ first (see 6.4) and use it in place of $\sigma^2$. Small samples with unknown variance are not tested in H2.`,
    },
    {
      title: String.raw`Carrying out the test: the full answer`,
      body: String.raw`1. Define $\mu$ in context; state $\mathrm{H}_0$ and $\mathrm{H}_1$.
2. State the distribution under $\mathrm{H}_0$, e.g. "Under $\mathrm{H}_0$, $\overline{X} \sim \N\!\left(500, \frac{12^2}{30}\right)$" (add "approximately, by CLT" if relevant).
3. State the level of significance and the test statistic; compute $z$ and the $p$-value on the GC (Z-Test), or compare $z$ with the critical value.
4. Decision: reject $\mathrm{H}_0$ if $p$-value $\le \alpha$.
5. **Conclusion in context**: "There is sufficient evidence at the 5% level of significance to conclude that the mean mass of a bag is less than 500 g." Or "insufficient evidence … to conclude that …".

Never write "accept $\mathrm{H}_0$" or "$\mathrm{H}_0$ is proved true" — not rejecting $\mathrm{H}_0$ only means there is not enough evidence against it.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 2.2, to: 3.6 }],
          lines: [{ x: 1.645, label: "1.645" }],
          xTicks: [{ x: 0, label: "0" }, { x: 2.2, label: "z = 2.2" }],
          segments: [{ from: [2.6, 0.25], to: [2.55, 0.02], tone: "accent", thin: true }],
          labels: [{ x: 2.6, y: 0.25, text: "p-value = 0.014", pos: "n", style: "small", tone: "accent" }],
          caption: String.raw`$z$ in the critical region: $p$-value $< 0.05$, reject $\mathrm{H}_0$`,
          alt: "Right-tailed test at 5 percent: observed z = 2.2 lies beyond the critical value 1.645, and the shaded p-value area beyond it is 0.014, smaller than 0.05.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.3, to: 3.6 }],
          lines: [{ x: 1.645, label: "1.645" }],
          xTicks: [{ x: 0, label: "0" }, { x: 1.3, label: "z = 1.3" }],
          segments: [{ from: [2.75, 0.2], to: [1.85, 0.03], tone: "accent", thin: true }],
          labels: [{ x: 2.75, y: 0.2, text: "p-value = 0.097", pos: "n", style: "small", tone: "accent" }],
          caption: String.raw`$z$ not in the critical region: $p$-value $> 0.05$, do not reject $\mathrm{H}_0$`,
          alt: "Right-tailed test at 5 percent: observed z = 1.3 lies before the critical value 1.645, and the shaded p-value area beyond it is 0.097, larger than 0.05.",
        },
      ],
    },
    {
      title: String.raw`Critical values to know`,
      body: String.raw`| Level | 1-tail $z$ | 2-tail $z$ |
| 10% | $1.282$ | $\pm 1.645$ |
| 5% | $1.645$ | $\pm 1.960$ |
| 2.5% | $1.960$ | $\pm 2.241$ |
| 1% | $2.326$ | $\pm 2.576$ |

These come from invNorm on the GC (not MF27). For a critical region in terms of $\bar{x}$, rearrange, e.g. for $\mathrm{H}_1: \mu > \mu_0$ at 5%: reject $\mathrm{H}_0$ if $\bar{x} \ge \mu_0 + 1.645\dfrac{\sigma}{\sqrt{n}}$.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.645, tone: "warn" }],
          xTicks: [{ x: -1.645, label: "−1.645" }, { x: 0, label: "0" }],
          labels: [{ x: -2.75, y: 0.15, text: "Reject H₀", style: "small", tone: "warn" }, { x: -2.65, y: 0.075, text: "5%", style: "small", tone: "warn" }],
          caption: String.raw`$\mathrm{H}_1: \mu < \mu_0$ (1-tail, 5%): reject if $z \le -1.645$`,
          alt: "Standard normal curve with the left tail below -1.645 shaded: area 5 percent, reject H0.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.645, to: 3.6, tone: "warn" }],
          xTicks: [{ x: 0, label: "0" }, { x: 1.645, label: "1.645" }],
          labels: [{ x: 2.75, y: 0.15, text: "Reject H₀", style: "small", tone: "warn" }, { x: 2.65, y: 0.075, text: "5%", style: "small", tone: "warn" }],
          caption: String.raw`$\mathrm{H}_1: \mu > \mu_0$ (1-tail, 5%): reject if $z \ge 1.645$`,
          alt: "Standard normal curve with the right tail above 1.645 shaded: area 5 percent, reject H0.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.96, tone: "warn" }, { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.96, to: 3.6, tone: "warn" }],
          xTicks: [{ x: -1.96, label: "−1.960" }, { x: 0, label: "0" }, { x: 1.96, label: "1.960" }],
          labels: [{ x: -2.75, y: 0.15, text: "Reject H₀", style: "small", tone: "warn" }, { x: 2.75, y: 0.15, text: "Reject H₀", style: "small", tone: "warn" }, { x: -2.7, y: 0.075, text: "2.5%", style: "small", tone: "warn" }, { x: 2.7, y: 0.075, text: "2.5%", style: "small", tone: "warn" }],
          caption: String.raw`$\mathrm{H}_1: \mu \ne \mu_0$ (2-tail, 5%): reject if $|z| \ge 1.960$`,
          alt: "Standard normal curve with both tails beyond -1.960 and 1.960 shaded, 2.5 percent each: reject H0.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 190, axisLabels: ["x̄", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.645, to: 3.6, tone: "warn" }],
          lines: [{ x: 0 }],
          xTicks: [{ x: 0, label: "μ₀" }, { x: 1.645, label: "μ₀ + 1.645σ/√n" }],
          labels: [{ x: 2.75, y: 0.15, text: "Reject H₀", style: "small", tone: "warn" }, { x: 2.65, y: 0.075, text: "5%", style: "small", tone: "warn" }],
          caption: String.raw`The same right-tailed test in terms of $\bar{x}$: $\overline{X} \sim \N\!\left(\mu_0, \frac{\sigma^2}{n}\right)$ under $\mathrm{H}_0$`,
          alt: "Distribution of the sample mean under H0, centred at mu0, with the region above mu0 + 1.645 sigma over root n shaded as the critical region.",
        },
      ],
    },
    {
      title: String.raw`Interpreting the $p$-value and the significance level`,
      body: String.raw`Answers must be **in context** and must mention the "assuming $\mathrm{H}_0$ is true" condition.

- "$p$-value $= 0.0122$" means: assuming the population mean commute time is 40 minutes, the probability of obtaining a sample mean of 41.8 minutes or more is 0.0122.
- "5% significance level" means: there is a probability of 0.05 that the test concludes the mean commute time is more than 40 minutes when it is in fact 40 minutes.
- The $p$-value is the **smallest** significance level at which $\mathrm{H}_0$ would be rejected — useful for "find the range of values of $\alpha$" questions.`,
      figure: {
        type: "plot", x: [37.12, 42.88], y: [-0.02, 0.57], height: 210, axisLabels: ["x̄", null],
        curves: [{ fn: "x => Math.exp(-0.5*((x-(40))/0.8)**2)/(0.8*Math.sqrt(2*Math.PI))" }],
        shade: [{ upper: "x => Math.exp(-0.5*((x-(40))/0.8)**2)/(0.8*Math.sqrt(2*Math.PI))", from: 41.8, to: 42.88 }],
        lines: [{ x: 40 }],
        xTicks: [{ x: 40, label: "40" }, { x: 41.8, label: "41.8" }],
        segments: [{ from: [42.15, 0.19], to: [41.95, 0.012], tone: "accent", thin: true }],
        labels: [{ x: 42.15, y: 0.19, text: "p-value = 0.0122", pos: "n", style: "small", tone: "accent" }],
        caption: String.raw`Assuming $\mathrm{H}_0$ ($\mu = 40$), the $p$-value is $\P(\overline{X} \ge 41.8) = 0.0122$, the area beyond the observed $\bar{x}$.`,
        alt: "Distribution of the sample mean commute time under H0, centred at 40 minutes, with the small right tail beyond the observed sample mean 41.8 shaded: the p-value 0.0122.",
      },
    },
    {
      title: String.raw`When (and why) the CLT is needed`,
      body: String.raw`- Population **normal** with known $\sigma^2$: $\overline{X}$ is exactly normal — the CLT is **not** needed, even for small $n$.
- Population distribution **unknown or not normal**, $n$ large: the CLT is needed to say $\overline{X}$ is approximately normal, so nothing need be assumed about the distribution of $X$.
- Population not known to be normal and $n$ small: a $z$-test is not valid unless we assume the population is normal.
- Always say the CLT applies to the **sample mean**, not to the individual values.
- A random sample is needed so that the observations are independent and representative of the population.`,
    },
    {
      title: String.raw`1-tail versus 2-tail tests`,
      body: String.raw`For the same data, the 2-tail $p$-value is **twice** the 1-tail $p$-value (in the direction of the observed $\bar{x}$).

- A 2-tail test at $\alpha\%$ rejects $\mathrm{H}_0$ $\iff$ a 1-tail test at $\frac{\alpha}{2}\%$ in the direction of $\bar{x}$ rejects $\mathrm{H}_0$.
- Hence it is possible for a 1-tail test at 5% to reject $\mathrm{H}_0$ while a 2-tail test at 5% does not: the 1-tail test places the whole 5% in one tail, so its critical value is less extreme.
- If $\bar{x} > \mu_0$, a test against $\mathrm{H}_1: \mu < \mu_0$ can never reject $\mathrm{H}_0$ at any sensible level.
- Choose the tail from the **wording of the suspicion**, never from the data.`,
      figure: [
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.645, to: 3.6, tone: "warn" }],
          xTicks: [{ x: 0, label: "0" }, { x: 1.645, label: "1.645" }],
          segments: [{ from: [1.75, 0], to: [1.75, 0.27], tone: "accent" }],
          labels: [{ x: 1.75, y: 0.27, text: "z = 1.75", pos: "n", style: "small", tone: "accent" }, { x: 2.9, y: 0.16, text: "5%", style: "small", tone: "warn" }],
          caption: String.raw`1-tail at 5%: $1.75 > 1.645$, so $\mathrm{H}_0$ is rejected ($p = 0.040$)`,
          alt: "Right-tailed test at 5 percent: the whole 5 percent is in the right tail beyond 1.645, and the observed z = 1.75 falls inside the critical region.",
        },
        {
          type: "plot", x: [-3.6, 3.6], y: [-0.02, 0.46], height: 200, axisLabels: ["z", null],
          curves: [{ fn: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)" }],
          shade: [{ upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: -3.6, to: -1.96, tone: "warn" }, { upper: "x => Math.exp(-x*x/2)/Math.sqrt(2*Math.PI)", from: 1.96, to: 3.6, tone: "warn" }],
          xTicks: [{ x: -1.96, label: "−1.960" }, { x: 0, label: "0" }, { x: 1.96, label: "1.960" }],
          segments: [{ from: [1.75, 0], to: [1.75, 0.27], tone: "accent" }],
          labels: [{ x: 1.75, y: 0.27, text: "z = 1.75", pos: "n", style: "small", tone: "accent" }, { x: -2.9, y: 0.16, text: "2.5%", style: "small", tone: "warn" }, { x: 2.9, y: 0.16, text: "2.5%", style: "small", tone: "warn" }],
          caption: String.raw`2-tail at 5%: $1.75 < 1.960$, so $\mathrm{H}_0$ is not rejected ($p = 0.080$)`,
          alt: "Two-tailed test at 5 percent: 2.5 percent in each tail beyond plus and minus 1.960; the same observed z = 1.75 falls just short of the right critical region.",
        },
      ],
    },
    {
      title: String.raw`Unknown $n$, $\alpha$, $\mu_0$ or $\bar{x}$`,
      body: String.raw`Write down the rejection condition as an inequality, e.g. for $\mathrm{H}_1: \mu < \mu_0$ at 5%: $\dfrac{\bar{x} - \mu_0}{\sigma/\sqrt{n}} \le -1.645$, then solve for the unknown.

- Keep track of the inequality direction when multiplying or dividing by negatives.
- $n$ must be an integer — round in the direction that keeps the condition satisfied.
- "$\mathrm{H}_0$ is **not** rejected" gives the complementary (strict) inequality.
- For an unknown significance level: $\mathrm{H}_0$ is rejected $\iff \alpha \ge p$-value.`,
      figure: [
        {
          type: "plot", x: [-2.4, 2.4], y: [-0.06, 1.3], height: 200, axisLabels: ["x̄", null],
          curves: [{ fn: "x => Math.exp(-0.5*((x-(0))/0.6)**2)/(0.6*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-0.5*((x-(0))/0.6)**2)/(0.6*Math.sqrt(2*Math.PI))", from: -2.4, to: -0.987, tone: "warn" }],
          lines: [{ x: 0 }],
          xTicks: [{ x: -0.7, label: "x̄" }, { x: 0, label: "μ₀" }],
          points: [{ x: -0.7, y: 0 }],
          labels: [{ x: -1.75, y: 0.3, text: "Reject H₀", style: "small", tone: "warn" }],
          caption: String.raw`Smaller $n$: the observed $\bar{x}$ is not in the critical region`,
          alt: "Left-tailed test: a wide distribution of the sample mean under H0 with critical region below mu0 minus 1.645 sigma over root n; the observed sample mean lies outside it.",
        },
        {
          type: "plot", x: [-2.4, 2.4], y: [-0.06, 1.3], height: 200, axisLabels: ["x̄", null],
          curves: [{ fn: "x => Math.exp(-0.5*((x-(0))/0.35)**2)/(0.35*Math.sqrt(2*Math.PI))" }],
          shade: [{ upper: "x => Math.exp(-0.5*((x-(0))/0.35)**2)/(0.35*Math.sqrt(2*Math.PI))", from: -2.4, to: -0.5758, tone: "warn" }],
          lines: [{ x: 0 }],
          xTicks: [{ x: -0.7, label: "x̄" }, { x: 0, label: "μ₀" }],
          points: [{ x: -0.7, y: 0 }],
          labels: [{ x: -1.75, y: 0.3, text: "Reject H₀", style: "small", tone: "warn" }],
          caption: String.raw`Larger $n$: smaller $\sigma/\sqrt{n}$ moves the critical value towards $\mu_0$, and the same $\bar{x}$ is now in the critical region`,
          alt: "Left-tailed test with a larger sample: a narrower distribution of the sample mean, critical value closer to mu0, and the same observed sample mean now lies inside the critical region.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "6.5-one-tail-known-variance",
      name: String.raw`1-tail $z$-test, normal population with known variance`,
      tests: String.raw`The core test: hypotheses in context, the exact distribution of $\overline{X}$ under $\mathrm{H}_0$, $p$-value or critical value, and a conclusion in context. Signalled by "normally distributed with standard deviation …" and a suspicion of "more than" or "less than".`,
      questions: [
        {
          stem: String.raw`A manufacturer claims that the mean lifetime of its LED bulbs is 2000 hours. The lifetimes are known to be normally distributed with standard deviation 120 hours. A consumer group suspects that the mean lifetime is less than claimed. A random sample of 20 bulbs is tested and the mean lifetime is found to be 1951 hours.`,
          parts: [
            { label: "(i)", text: String.raw`State appropriate hypotheses for a test of the consumer group's suspicion, defining any symbols you use.`, marks: 2 },
            { label: "(ii)", text: String.raw`Carry out the test at the 5% level of significance.`, marks: 3 },
            { label: "(iii)", text: String.raw`Explain why it was not necessary to use the Central Limit Theorem in carrying out the test.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Packets of rice are labelled as containing 5 kg. The masses of rice in the packets filled by a machine are normally distributed with standard deviation 0.04 kg. A quality controller suspects that the machine is overfilling the packets. She weighs a random sample of 8 packets, with the following results, in kg.
$$5.03 \quad 4.99 \quad 5.06 \quad 5.02 \quad 4.98 \quad 5.04 \quad 5.05 \quad 5.01$$`,
          parts: [
            { label: "(i)", text: String.raw`Find the mean mass of rice in the 8 packets.`, marks: 1 },
            { label: "(ii)", text: String.raw`Test, at the 10% level of significance, whether the quality controller's suspicion is justified.`, marks: 4 },
            { label: "(iii)", text: String.raw`State, with a reason, whether the conclusion would be the same if the test were carried out at the 5% level of significance.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-two-tail-test",
      name: String.raw`2-tail $z$-test: "has the mean changed?"`,
      tests: String.raw`Setting up $\mathrm{H}_1: \mu \ne \mu_0$ from wording such as "changed" or "different", doubling the tail probability (or using $\pm$ critical values), and concluding in context.`,
      questions: [
        {
          stem: String.raw`The diameters of ball bearings produced by a machine are normally distributed. When the machine is correctly set, the mean diameter is 12.00 mm and the standard deviation is 0.05 mm. After maintenance, an engineer wishes to check whether the mean diameter has changed; the standard deviation is unchanged. A random sample of 15 ball bearings has a mean diameter of 12.026 mm.`,
          parts: [
            { label: "(i)", text: String.raw`State the null and alternative hypotheses for the engineer's test.`, marks: 1 },
            { label: "(ii)", text: String.raw`Carry out the test at the 5% level of significance, stating your conclusion in context.`, marks: 4 },
            { label: "(iii)", text: String.raw`State, with a reason, whether the conclusion would be different if the test were carried out at the 1% level of significance.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-large-sample-summarised",
      name: String.raw`Large-sample test from summarised data (CLT)`,
      tests: String.raw`Computing unbiased estimates from $\sum(x-a)$, $\sum(x-a)^2$ or $\sum x$, $\sum x^2$, then testing using the CLT with $s^2$ in place of $\sigma^2$. Signalled by a large $n$ and no statement that the population is normal.`,
      questions: [
        {
          stem: String.raw`A courier company claims that the mean time taken to deliver a parcel within the city is 30 minutes. A customer suspects that the mean delivery time is more than 30 minutes. The delivery times, $x$ minutes, of a random sample of 50 parcels are summarised by
$$\sum (x - 30) = 64, \qquad \sum (x - 30)^2 = 1940.$$`,
          parts: [
            { label: "(i)", text: String.raw`Find unbiased estimates of the population mean and variance of the delivery times.`, marks: 2 },
            { label: "(ii)", text: String.raw`Test, at the 5% level of significance, whether the customer's suspicion is justified.`, marks: 4 },
            { label: "(iii)", text: String.raw`Explain why the customer did not need to know anything about the distribution of the delivery times to carry out the test.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Bottles of shampoo are labelled as containing 400 ml. A consumer association measures the volumes, $x$ ml, of a random sample of 64 bottles and obtains
$$\sum x = 25\,472, \qquad \sum x^2 = 10\,140\,124.$$`,
          parts: [
            { label: "(i)", text: String.raw`Calculate unbiased estimates of the population mean and variance of the volume of shampoo in a bottle.`, marks: 2 },
            { label: "(ii)", text: String.raw`Test, at the 1% level of significance, whether the mean volume of shampoo in a bottle is less than 400 ml.`, marks: 4 },
            { label: "(iii)", text: String.raw`State, in the context of the question, the meaning of the $p$-value obtained in part (ii).`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-critical-region",
      name: String.raw`Critical region for the sample mean`,
      tests: String.raw`Finding the set of values of $\bar{x}$ for which $\mathrm{H}_0$ is (or is not) rejected, by rearranging the critical value condition; then applying it to an observed sample mean.`,
      questions: [
        {
          stem: String.raw`The fuel consumption of a model of car, measured in km per litre, is normally distributed with mean 15.2 and standard deviation 1.1. A modified engine is fitted, and the manufacturer claims that the mean fuel consumption has increased. The standard deviation is unchanged. A random sample of 12 cars with the modified engine is tested, and the mean fuel consumption is $\bar{x}$ km per litre.`,
          parts: [
            { label: "(i)", text: String.raw`State suitable hypotheses to test the manufacturer's claim.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the critical region for $\bar{x}$ for a test at the 5% level of significance.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that $\bar{x} = 15.68$, state the conclusion of the test in context.`, marks: 1 },
            { label: "(iv)", text: String.raw`Given instead that $\bar{x} = 15.68$ was obtained from a random sample of $n$ cars, find the least value of $n$ for which the manufacturer's claim would be supported at the 5% level of significance.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A random sample of 40 observations of a random variable $X$ gives an unbiased estimate of the population variance of 2.25. A test is to be carried out at the 5% level of significance of whether the population mean of $X$ differs from 20.`,
          parts: [
            { label: "(i)", text: String.raw`Find the set of values of the sample mean $\bar{x}$ for which the null hypothesis is not rejected.`, marks: 4 },
            { label: "(ii)", text: String.raw`State, with a reason, whether the test remains valid if $X$ is not normally distributed.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-unknown-parameter",
      name: String.raw`Finding an unknown $n$, significance level or $\mu_0$`,
      tests: String.raw`Working backwards from a stated test outcome to the least sample size, the range of significance levels, or the range of hypothesised means for which $\mathrm{H}_0$ is rejected.`,
      questions: [
        {
          stem: String.raw`The masses of chocolate bars produced by a machine are normally distributed with standard deviation 2.5 g. The manufacturer claims that the mean mass is 50 g. A test is carried out of the null hypothesis $\mu = 50$ against the alternative hypothesis $\mu < 50$, where $\mu$ g is the population mean mass. A random sample of $n$ bars has mean mass 49.3 g.`,
          parts: [
            { label: "(i)", text: String.raw`Given that the test is carried out at the 5% level of significance, find the least value of $n$ for which the null hypothesis is rejected.`, marks: 3 },
            { label: "(ii)", text: String.raw`Given instead that $n = 25$, find the set of values of $\alpha$ for which the null hypothesis is rejected at the $\alpha\%$ level of significance.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A random sample of 50 observations of the time, $t$ hours, that a type of phone battery lasts on a single charge gives $\bar{t} = 12.6$ and an unbiased estimate of the population variance of 4.5. The null hypothesis $\mathrm{H}_0: \mu = \mu_0$ is tested against $\mathrm{H}_1: \mu > \mu_0$ at the 2.5% level of significance, where $\mu$ hours is the population mean time.`,
          parts: [
            { label: "(i)", text: String.raw`Find the set of values of $\mu_0$ for which the null hypothesis is rejected, giving your answer correct to 3 decimal places.`, marks: 3 },
            { label: "(ii)", text: String.raw`Explain why the Central Limit Theorem is required in your working.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-interpretation",
      name: String.raw`Interpreting $p$-values, significance levels and conclusions`,
      tests: String.raw`Explaining, in context, the meaning of a given $p$-value or significance level, and criticising wrongly worded conclusions ("proves", "accepts $\mathrm{H}_0$"). Usually 1-mark parts; the answer must refer to the context.`,
      questions: [
        {
          stem: String.raw`A health researcher believes that students in a country sleep more than 6.5 hours per night on average. She records the nightly sleep times of a random sample of 60 students and carries out a test of $\mathrm{H}_0: \mu = 6.5$ against $\mathrm{H}_1: \mu > 6.5$, where $\mu$ hours is the population mean nightly sleep time. The sample mean is 6.8 hours and the $p$-value of the test is 0.0312.`,
          parts: [
            { label: "(i)", text: String.raw`Explain, in the context of the question, the meaning of the $p$-value 0.0312.`, marks: 1 },
            { label: "(ii)", text: String.raw`State the conclusion of the test at the 5% level of significance, in context.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain what is meant by "a 5% level of significance" in this context.`, marks: 1 },
            { label: "(iv)", text: String.raw`A colleague says, "The test proves that students sleep more than 6.5 hours per night on average." Comment on this statement.`, marks: 1 },
            { label: "(v)", text: String.raw`Explain why the students in the sample should be chosen randomly.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-clt-justification",
      name: String.raw`Justifying the test: when the CLT is needed`,
      tests: String.raw`Deciding whether a normality assumption or the CLT is required, explaining why a small sample from a skewed population cannot be tested, and carrying out the large-sample test.`,
      questions: [
        {
          stem: String.raw`A company states that the mean time taken by its technicians to service an air-conditioner is 45 minutes. Past records indicate that the distribution of service times is positively skewed. A manager suspects that the mean service time has increased. The service times, $t$ minutes, of a random sample of 40 services are summarised by
$$\sum t = 1880, \qquad \sum t^2 = 90\,271.$$`,
          parts: [
            { label: "(i)", text: String.raw`Explain why the manager is able to carry out a hypothesis test even though the service times are not normally distributed.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find unbiased estimates of the population mean and variance of the service times.`, marks: 2 },
            { label: "(iii)", text: String.raw`Test, at the 5% level of significance, whether the manager's suspicion is justified.`, marks: 4 },
            { label: "(iv)", text: String.raw`Explain why the test could not validly be carried out in the same way had the manager recorded only 8 services.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.5-one-vs-two-tail",
      name: String.raw`Consistency between 1-tail and 2-tail conclusions`,
      tests: String.raw`Relating 1-tail and 2-tail $p$-values and critical values, explaining how the same data can lead to different conclusions, and deducing one test's outcome from another's without recalculating.`,
      questions: [
        {
          stem: String.raw`The scores of candidates in an aptitude test are normally distributed with mean 80 and standard deviation 9. After a new training programme is introduced, a random sample of 36 candidates who completed the programme has a mean score of 82.7. The standard deviation may be assumed unchanged. Researcher A tests whether the mean score has changed. Researcher B tests whether the mean score has increased. Both use a 5% level of significance.`,
          parts: [
            { label: "(i)", text: String.raw`Carry out both tests, stating each conclusion in context.`, marks: 5 },
            { label: "(ii)", text: String.raw`Explain why the two researchers reach different conclusions from the same data.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the range of values of $\alpha$ for which the two researchers would reach different conclusions if both tests were carried out at the $\alpha\%$ level of significance.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In a test of $\mathrm{H}_0: \mu = 50$ against $\mathrm{H}_1: \mu \ne 50$, based on a random sample from a normal population of known variance, the null hypothesis is rejected at the 4% level of significance. The sample mean is 52.1.`,
          parts: [
            { label: "(i)", text: String.raw`Deduce, with a reason, the outcome of a test of $\mathrm{H}_0: \mu = 50$ against $\mathrm{H}_1: \mu > 50$ at the 2% level of significance, using the same sample.`, marks: 2 },
            { label: "(ii)", text: String.raw`State, with a reason, whether $\mathrm{H}_0: \mu = 50$ would be rejected in favour of $\mathrm{H}_1: \mu < 50$ at the 5% level of significance, using the same sample.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
