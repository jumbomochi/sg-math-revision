H2.addTopic({
  id: "6.3",
  title: "Normal Distribution",
  paper: "Paper 2 Section B",
  summary: String.raw`The normal distribution as a continuous probability model: standardising, inverse problems, symmetry, and linear combinations of independent normal variables.`,
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
    },
    {
      title: String.raw`Standardising and GC probabilities`,
      body: String.raw`If $X \sim \N(\mu, \sigma^2)$ then
$$Z = \frac{X - \mu}{\sigma} \sim \N(0, 1).$$

- GC: normalcdf(lower, upper, $\mu$, $\sigma$) — enter $\sigma$, **not** $\sigma^2$. Use a large bound such as $10^{99}$ for an open tail.
- Always write the probability statement, e.g. "$\P(X > 350) = 0.115$", and sketch the curve with the region shaded when the question is unfamiliar.
- Give probabilities to 3 significant figures, but keep more figures in intermediate working.`,
    },
    {
      title: String.raw`Inverse problems: finding $a$`,
      body: String.raw`Given $\P(X < a) = p$, use invNorm($p$, $\mu$, $\sigma$). The GC uses the **left-tail** area, so convert first:

- $\P(X > a) = p \Rightarrow \P(X < a) = 1 - p$.
- Symmetric interval containing a proportion $p$: $\mu \pm z\sigma$, where $\P(Z < z) = \frac{1 + p}{2}$.

Interpret the answer in context (e.g. "the least mean volume is 508.2 ml").`,
    },
    {
      title: String.raw`Finding unknown $\mu$ and $\sigma$`,
      body: String.raw`Standardise each given probability and use invNorm on $\N(0,1)$:
$$\P(X < x_1) = p \;\Rightarrow\; \frac{x_1 - \mu}{\sigma} = z_p, \quad \P(Z < z_p) = p.$$

- One unknown: solve directly. Two unknowns: two such equations, solved simultaneously.
- Check signs: if $x_1 < \mu$ then $z_p < 0$.
- Keep $z$-values to at least 4 decimal places (e.g. $-1.2816$, $0.8416$) to avoid accumulated rounding errors.`,
    },
    {
      title: String.raw`Symmetry arguments`,
      body: String.raw`- $\P(X < \mu - a) = \P(X > \mu + a)$.
- If $\P(X < c) = \P(X > d)$, then $\mu = \dfrac{c + d}{2}$.
- $\P(\mu - a < X < \mu + a) = 1 - 2\P(X > \mu + a) = 2\P(X < \mu + a) - 1$.

These are used in "without using a calculator" questions — a clearly labelled sketch is the best justification.`,
    },
    {
      title: String.raw`Linear transformations: $aX + b$`,
      body: String.raw`For any random variable $X$ and constants $a$, $b$:
$$\E(aX + b) = a\E(X) + b, \qquad \Var(aX + b) = a^2\Var(X).$$
If $X$ is normal then so is $aX + b$: $aX + b \sim \N(a\mu + b,\ a^2\sigma^2)$. Typical uses: unit conversions (°C to °F), fares and costs ("fixed charge + rate × distance"), scaling of marks. Adding a constant does not change the variance.`,
    },
    {
      title: String.raw`Linear combinations of independent normals`,
      body: String.raw`If $X$ and $Y$ are **independent**, then
$$\E(aX + bY) = a\E(X) + b\E(Y), \qquad \Var(aX + bY) = a^2\Var(X) + b^2\Var(Y),$$
and if $X$ and $Y$ are normal, $aX + bY$ is normal.

- Variances **add** even for a difference: $\Var(X - Y) = \Var(X) + \Var(Y)$.
- Turn comparisons into a single variable: $\P(X > 2Y) = \P(X - 2Y > 0)$; $\P(|X - Y| < 5) = \P(-5 < X - Y < 5)$.
- State the distribution in full, e.g. "$X - 2Y \sim \N(2, 8)$", before computing.`,
    },
    {
      title: String.raw`Totals: $X_1 + X_2$ versus $2X$`,
      body: String.raw`- $X_1 + X_2 + \cdots + X_n$ (total of $n$ **independent** items): mean $n\mu$, variance $n\sigma^2$.
- $nX$ (one item multiplied by $n$): mean $n\mu$, variance $n^2\sigma^2$.

Decide which one the context describes: "the total mass of 4 apples" is $A_1 + A_2 + A_3 + A_4$; "twice the mass of an apple" is $2A$. The two have the same mean but different spreads, so different probabilities.

A "box containing 12 items" has total mass $B + X_1 + \cdots + X_{12}$, where $B$ is the box's own mass.`,
    },
    {
      title: String.raw`Modelling: assumptions and suitability`,
      body: String.raw`- A normal model is doubtful when the variable cannot be negative but $\P(X < 0)$ is not negligible (mean less than about $2\sigma$ above 0), or when the data are clearly skewed.
- When combining variables, state the **independence** assumption in context (e.g. "the service times of different customers are independent").
- Questions often combine a normal probability with a binomial count: first find $p = \P(\text{one item satisfies the condition})$, then use $\B(n, p)$.`,
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
