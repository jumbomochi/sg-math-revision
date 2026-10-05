H2.addTopic({
  id: "6.2",
  title: "Discrete Random Variables",
  paper: "Paper 2B",
  summary: String.raw`Probability distributions, expectation and variance of discrete random variables, and the binomial distribution as a probability model.`,
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

"State, in context, two assumptions" means rewrite conditions 3 and 4 in the words of the question, e.g. "the probability that a seed germinates is the same for every seed" and "whether one seed germinates is independent of whether any other seed germinates". Generic statements earn no credit.

Binomial is unsuitable when sampling without replacement from a small population (p changes), or when outcomes influence each other (e.g. weather on consecutive days).`,
    },
    {
      title: String.raw`Binomial probabilities and the GC`,
      body: String.raw`$$\P(X = x) = \binom{n}{x} p^x (1 - p)^{n - x}, \quad x = 0, 1, \ldots, n \quad \text{(MF27)}$$

- GC: binompdf$(n, p, x)$ gives $\P(X = x)$; binomcdf$(n, p, x)$ gives $\P(X \le x)$.
- Translate inequalities carefully before using binomcdf: $\P(X \ge k) = 1 - \P(X \le k - 1)$, $\P(X < k) = \P(X \le k - 1)$, $\P(a < X \le b) = \P(X \le b) - \P(X \le a)$.
- Always write the distribution (e.g. "$X \sim \B(20, 0.35)$") and the probability statement before the numerical answer.`,
    },
    {
      title: String.raw`Mean, variance and mode of $\B(n, p)$`,
      body: String.raw`$$\E(X) = np, \qquad \Var(X) = np(1 - p) \quad \text{(MF27)}$$

- Given $\E(X)$ and $\Var(X)$, divide to get $1 - p$ first.
- $\E(X^2) = \Var(X) + [\E(X)]^2$.
- **Most likely value** (mode): tabulate $\P(X = x)$ on the GC near $np$ and pick the largest, quoting the neighbouring probabilities as justification. If two adjacent values have equal probability, both are modes.`,
    },
    {
      title: String.raw`Finding $n$ or $p$`,
      body: String.raw`- **Least $n$** such that, e.g., $\P(X \ge 1) > 0.95$: rewrite as $1 - (1-p)^n > 0.95$ and solve with logarithms (reverse the inequality when dividing by a negative $\ln$), or tabulate on the GC. Show the values either side of the boundary, e.g. "$n = 35$: 0.9460; $n = 36$: 0.9503".
- **Finding $p$**: form an equation in $p$ and solve with the GC (graph/solver). There may be two roots — use the given condition (e.g. $p < 0.2$) to choose.
- Integer answers are required for $n$; state the conclusion clearly ("least $n$ is 36").`,
    },
    {
      title: String.raw`Binomial within binomial`,
      body: String.raw`When items come in boxes (or days, or batches), first find the probability $q$ that **one box** satisfies the condition, using $X \sim \B(n, p)$. Then the number of such boxes among $m$ boxes is $Y \sim \B(m, q)$. Keep $q$ to at least 5 significant figures in the second stage to avoid rounding errors.`,
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
  ],
});
