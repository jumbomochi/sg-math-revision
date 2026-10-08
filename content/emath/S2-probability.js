H2.addTopic({
  id: "S2",
  title: "Probability",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Probability of single and combined events using lists, possibility diagrams and tree diagrams.`,
  syllabus: {
    include: [
      String.raw`probability as a measure of chance`,
      String.raw`probability of single events (including listing all the possible outcomes in a simple chance situation to calculate the probability)`,
      String.raw`probability of simple combined events (including using possibility diagrams and tree diagrams, where appropriate)`,
      String.raw`addition and multiplication of probabilities (mutually exclusive events and independent events)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Probability as a measure of chance`,
      body: String.raw`If all outcomes are **equally likely**,
$$\P(E) = \frac{\text{number of outcomes in } E}{\text{total number of possible outcomes}}.$$

- $0 \le \P(E) \le 1$. $\P(E) = 0$ means $E$ is impossible; $\P(E) = 1$ means $E$ is certain.
- The set of all possible outcomes is the **sample space**.
- "At random" and "fair" tell you the outcomes are equally likely.
- Give answers as fractions in their simplest form (or exact decimals). Never give a probability greater than 1.`,
      figure: {
        type: "plot",
        x: [-0.08, 1.08],
        y: [-0.5, 0.45],
        height: 120,
        axes: false,
        segments: [
          { from: [0, 0], to: [1, 0], tone: "ink" },
          { from: [0, -0.06], to: [0, 0.06], tone: "ink" },
          { from: [0.25, -0.06], to: [0.25, 0.06], tone: "ink" },
          { from: [0.5, -0.06], to: [0.5, 0.06], tone: "ink" },
          { from: [0.75, -0.06], to: [0.75, 0.06], tone: "ink" },
          { from: [1, -0.06], to: [1, 0.06], tone: "ink" },
        ],
        labels: [
          { x: 0, y: 0.1, text: "0", pos: "n", style: "plain" },
          { x: 0.5, y: 0.1, text: "½", pos: "n", style: "plain" },
          { x: 1, y: 0.1, text: "1", pos: "n", style: "plain" },
          { x: 0, y: -0.12, text: "impossible", pos: "s", style: "small" },
          { x: 0.25, y: -0.12, text: "unlikely", pos: "s", style: "small" },
          { x: 0.5, y: -0.12, text: "even chance", pos: "s", style: "small" },
          { x: 0.75, y: -0.12, text: "likely", pos: "s", style: "small" },
          { x: 1, y: -0.12, text: "certain", pos: "s", style: "small" },
        ],
        caption: String.raw`Every probability lies between 0 and 1.`,
        alt: "A probability scale from 0 to 1 with marks at 0 (impossible), one quarter (unlikely), one half (even chance), three quarters (likely) and 1 (certain).",
      },
    },
    {
      title: String.raw`Complementary events`,
      body: String.raw`The event "not $E$" happens exactly when $E$ does not:
$$\P(\text{not } E) = 1 - \P(E).$$

- Use it for "**at least one**": $\P(\text{at least one}) = 1 - \P(\text{none})$. This is usually much quicker than adding many cases.
- The probabilities of all the possible outcomes of an experiment add up to 1. Use this to find a missing probability, e.g. on a spinner.`,
    },
    {
      title: String.raw`Listing outcomes`,
      body: String.raw`For a simple experiment, **list every outcome systematically** so none is missed or repeated.

- Three coins: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT — 8 outcomes. $\P(\text{exactly two heads}) = \frac{3}{8}$.
- Decide whether order matters. Choosing a captain **and** a vice-captain: (Ali, Ben) and (Ben, Ali) are different. Choosing **two** members of a team: they are the same.
- Count the outcomes in the event from your list, then divide by the total.`,
    },
    {
      title: String.raw`Possibility diagrams`,
      body: String.raw`When two things happen (two dice, two spinners), draw a **possibility diagram**: a grid with one experiment across and the other up.

- Each cell or dot is one equally likely outcome. Two dice give $6 \times 6 = 36$ outcomes.
- Write the total (or product, or difference) in each cell when the question is about a score.
- Ring or shade the outcomes in the event and count them.`,
      figure: {
        type: "plot",
        x: [-0.6, 7.2],
        y: [-1.2, 7],
        equal: true,
        axisLabels: ["", ""],
        originLabel: false,
        xTicks: [
          { x: 1, label: "1" },
          { x: 2, label: "2" },
          { x: 3, label: "3" },
          { x: 4, label: "4" },
          { x: 5, label: "5" },
          { x: 6, label: "6" },
        ],
        yTicks: [
          { y: 1, label: "1" },
          { y: 2, label: "2" },
          { y: 3, label: "3" },
          { y: 4, label: "4" },
          { y: 5, label: "5" },
          { y: 6, label: "6" },
        ],
        points: [
          { x: 1, y: 1 },
          { x: 1, y: 2 },
          { x: 1, y: 3 },
          { x: 1, y: 4 },
          { x: 1, y: 5 },
          { x: 1, y: 6 },
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 3 },
          { x: 2, y: 4 },
          { x: 2, y: 5 },
          { x: 2, y: 6 },
          { x: 3, y: 1 },
          { x: 3, y: 2 },
          { x: 3, y: 3 },
          { x: 3, y: 4 },
          { x: 3, y: 5 },
          { x: 3, y: 6 },
          { x: 4, y: 1 },
          { x: 4, y: 2 },
          { x: 4, y: 3 },
          { x: 4, y: 4 },
          { x: 4, y: 5 },
          { x: 4, y: 6 },
          { x: 5, y: 1 },
          { x: 5, y: 2 },
          { x: 5, y: 3 },
          { x: 5, y: 4 },
          { x: 5, y: 5 },
          { x: 5, y: 6 },
          { x: 6, y: 1 },
          { x: 6, y: 2 },
          { x: 6, y: 3 },
          { x: 6, y: 4 },
          { x: 6, y: 5 },
          { x: 6, y: 6 },
        ],
        labels: [
          { x: 3.5, y: -1, text: "First die", style: "small" },
          { x: 0.2, y: 6.75, text: "Second die", pos: "e", style: "small" },
        ],
        polygons: [
          { points: [[0.38, 5.98], [5.98, 0.38], [6.62, 1.02], [1.02, 6.62]], fill: true, tone: "warn" },
        ],
        caption: String.raw`36 equally likely outcomes. Total of 7: 6 outcomes, so $\P(\text{total } 7) = \frac{6}{36} = \frac{1}{6}$.`,
        alt: "Possibility diagram for two dice: a 6 by 6 grid of dots. The six dots on the diagonal where the two scores add to 7, from (1, 6) to (6, 1), are enclosed by a shaded band.",
      },
    },
    {
      title: String.raw`Mutually exclusive and independent events`,
      body: String.raw`**Mutually exclusive** events cannot happen at the same time (e.g. getting a 2 and getting a 5 on one throw of a die). For these, **add**:
$$\P(A \text{ or } B) = \P(A) + \P(B).$$

**Independent** events do not affect each other (e.g. the results of two different dice, or draws **with replacement**). For these, **multiply**:
$$\P(A \text{ and } B) = \P(A) \times \P(B).$$

- "and" $\to$ multiply along a path; "or" between separate outcomes $\to$ add.
- Do **not** add events that can happen together, e.g. "a prime number or an odd number" on a die: list the outcomes instead.
- These rules are not on the formula sheet — memorise them.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[4.9, 3], [4.896, 3.126], [4.882, 3.251], [4.861, 3.374], [4.83, 3.496], [4.791, 3.616], [4.744, 3.732], [4.689, 3.845], [4.626, 3.954], [4.556, 4.058], [4.479, 4.157], [4.395, 4.25], [4.304, 4.338], [4.208, 4.418], [4.107, 4.492], [4, 4.559], [3.889, 4.618], [3.774, 4.669], [3.656, 4.712], [3.535, 4.747], [3.413, 4.773], [3.288, 4.79], [3.163, 4.799], [3.037, 4.799], [2.912, 4.79], [2.787, 4.773], [2.665, 4.747], [2.544, 4.712], [2.426, 4.669], [2.311, 4.618], [2.2, 4.559], [2.093, 4.492], [1.992, 4.418], [1.896, 4.338], [1.805, 4.25], [1.721, 4.157], [1.644, 4.058], [1.574, 3.954], [1.511, 3.845], [1.456, 3.732], [1.409, 3.616], [1.37, 3.496], [1.339, 3.374], [1.318, 3.251], [1.304, 3.126], [1.3, 3], [1.304, 2.874], [1.318, 2.749], [1.339, 2.626], [1.37, 2.504], [1.409, 2.384], [1.456, 2.268], [1.511, 2.155], [1.574, 2.046], [1.644, 1.942], [1.721, 1.843], [1.805, 1.75], [1.896, 1.662], [1.992, 1.582], [2.093, 1.508], [2.2, 1.441], [2.311, 1.382], [2.426, 1.331], [2.544, 1.288], [2.665, 1.253], [2.787, 1.227], [2.912, 1.21], [3.037, 1.201], [3.163, 1.201], [3.288, 1.21], [3.413, 1.227], [3.535, 1.253], [3.656, 1.288], [3.774, 1.331], [3.889, 1.382], [4, 1.441], [4.107, 1.508], [4.208, 1.582], [4.304, 1.662], [4.395, 1.75], [4.479, 1.843], [4.556, 1.942], [4.626, 2.046], [4.689, 2.155], [4.744, 2.268], [4.791, 2.384], [4.83, 2.504], [4.861, 2.626], [4.882, 2.749], [4.896, 2.874]],
              fill: true,
              tone: "warn",
            },
            {
              points: [[8.9, 3], [8.896, 3.126], [8.882, 3.251], [8.861, 3.374], [8.83, 3.496], [8.791, 3.616], [8.744, 3.732], [8.689, 3.845], [8.626, 3.954], [8.556, 4.058], [8.479, 4.157], [8.395, 4.25], [8.304, 4.338], [8.208, 4.418], [8.107, 4.492], [8, 4.559], [7.889, 4.618], [7.774, 4.669], [7.656, 4.712], [7.535, 4.747], [7.413, 4.773], [7.288, 4.79], [7.163, 4.799], [7.037, 4.799], [6.912, 4.79], [6.787, 4.773], [6.665, 4.747], [6.544, 4.712], [6.426, 4.669], [6.311, 4.618], [6.2, 4.559], [6.093, 4.492], [5.992, 4.418], [5.896, 4.338], [5.805, 4.25], [5.721, 4.157], [5.644, 4.058], [5.574, 3.954], [5.511, 3.845], [5.456, 3.732], [5.409, 3.616], [5.37, 3.496], [5.339, 3.374], [5.318, 3.251], [5.304, 3.126], [5.3, 3], [5.304, 2.874], [5.318, 2.749], [5.339, 2.626], [5.37, 2.504], [5.409, 2.384], [5.456, 2.268], [5.511, 2.155], [5.574, 2.046], [5.644, 1.942], [5.721, 1.843], [5.805, 1.75], [5.896, 1.662], [5.992, 1.582], [6.093, 1.508], [6.2, 1.441], [6.311, 1.382], [6.426, 1.331], [6.544, 1.288], [6.665, 1.253], [6.787, 1.227], [6.912, 1.21], [7.037, 1.201], [7.163, 1.201], [7.288, 1.21], [7.413, 1.227], [7.535, 1.253], [7.656, 1.288], [7.774, 1.331], [7.889, 1.382], [8, 1.441], [8.107, 1.508], [8.208, 1.582], [8.304, 1.662], [8.395, 1.75], [8.479, 1.843], [8.556, 1.942], [8.626, 2.046], [8.689, 2.155], [8.744, 2.268], [8.791, 2.384], [8.83, 2.504], [8.861, 2.626], [8.882, 2.749], [8.896, 2.874]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.1 + 1.8*Math.cos(t), 3 + 1.8*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [7.1 + 1.8*Math.cos(t), 3 + 1.8*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 1.55, y: 4.85, text: "A", style: "italic" },
            { x: 8.65, y: 4.85, text: "B", style: "italic" },
            { x: 0.75, y: 5.25, text: "S", style: "italic" },
          ],
          caption: String.raw`Mutually exclusive: cannot happen together. Add: $\P(A \text{ or } B) = \P(A) + \P(B)$.`,
          alt: "Two separate, non-overlapping circles A and B inside a rectangle S; both are shaded.",
        },
      ],
    },
    {
      title: String.raw`Tree diagrams`,
      body: String.raw`A tree diagram shows the outcomes of two or more stages.

- Write the probability on each branch. The branches from one point add up to 1.
- **Multiply** along the branches to get the probability of a path. **Add** the paths that give the event.
- **With replacement**: the probabilities are the same at every stage.
- **Without replacement**: after one item is removed, both the number of that kind and the **total** go down by 1.
- Two outcomes in a different order (red then blue, blue then red) are **different paths** — include both.`,
      figure: {
        type: "plot",
        x: [0, 12],
        y: [0.2, 7.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.3, 3.5], to: [3.6, 5.3], tone: "ink", label: "4/7", pos: "nw", style: "plain" },
          { from: [4.3, 5.3], to: [7.6, 6.3], tone: "ink", label: "3/6", pos: "nw", style: "plain" },
          { from: [4.3, 5.3], to: [7.6, 4.3], tone: "ink", label: "3/6", pos: "sw", style: "plain" },
          { from: [0.3, 3.5], to: [3.6, 1.7], tone: "ink", label: "3/7", pos: "sw", style: "plain" },
          { from: [4.3, 1.7], to: [7.6, 2.7], tone: "ink", label: "4/6", pos: "nw", style: "plain" },
          { from: [4.3, 1.7], to: [7.6, 0.7], tone: "ink", label: "2/6", pos: "sw", style: "plain" },
        ],
        labels: [
          { x: 3.95, y: 5.3, text: "R", style: "italic" },
          { x: 7.95, y: 6.3, text: "R", style: "italic" },
          { x: 8.4, y: 6.3, text: "4/7 × 3/6 = 12/42", pos: "e", style: "small" },
          { x: 7.95, y: 4.3, text: "B", style: "italic" },
          { x: 8.4, y: 4.3, text: "4/7 × 3/6 = 12/42", pos: "e", style: "small" },
          { x: 3.95, y: 1.7, text: "B", style: "italic" },
          { x: 7.95, y: 2.7, text: "R", style: "italic" },
          { x: 8.4, y: 2.7, text: "3/7 × 4/6 = 12/42", pos: "e", style: "small" },
          { x: 7.95, y: 0.7, text: "B", style: "italic" },
          { x: 8.4, y: 0.7, text: "3/7 × 2/6 = 6/42", pos: "e", style: "small" },
          { x: 2, y: 7.2, text: "First marble", style: "small" },
          { x: 6, y: 7.2, text: "Second marble", style: "small" },
        ],
        caption: String.raw`4 red and 3 blue marbles, two taken **without replacement**: the second-stage fractions change. The four end results add up to 1.`,
        alt: "Tree diagram for taking two marbles without replacement from 4 red and 3 blue. First stage: R with 4/7, B with 3/7. After R: R 3/6, B 3/6. After B: R 4/6, B 2/6. End results: 12/42, 12/42, 12/42 and 6/42.",
      },
    },
    {
      title: String.raw`Full marks: method and answers`,
      body: String.raw`- Show the working that leads to the probability, e.g. $\frac{4}{7} \times \frac{3}{6} + \frac{3}{7} \times \frac{2}{6}$, not just the final answer.
- Leave answers as exact fractions in simplest form. If you use decimals, give them exactly or correct to 3 significant figures.
- Check that your answer is between 0 and 1, and that the paths you added are all different.
- When a question gives an unknown number of items, write the probabilities in terms of $n$, form an equation, and solve it (often a quadratic). Reject values that do not make sense, such as negative or non-integer numbers of items.`,
    },
  ],
  archetypes: [
    {
      id: "S2-single-event",
      name: String.raw`Single events and finding an unknown number of items`,
      tests: String.raw`Finding the probability of one event from counts (cards, balls, people), including complements, and finding how many items there are from a given probability. Recognise by "One card is taken at random…" or "The probability that a ball is blue is $\frac{1}{3}$. Find $x$".`,
      questions: [
        {
          stem: String.raw`Twenty cards are numbered 1 to 20. One card is taken at random. Find the probability that the number on the card is`,
          parts: [
            { label: "(a)", text: String.raw`a prime number,`, marks: 1 },
            { label: "(b)", text: String.raw`a multiple of 3 or a multiple of 5,`, marks: 1 },
            { label: "(c)", text: String.raw`not a perfect square,`, marks: 1 },
            { label: "(d)", text: String.raw`greater than 20.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A bag contains 6 red balls, $x$ blue balls and 4 green balls. A ball is taken at random from the bag. The probability that it is blue is $\frac{1}{3}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Some more red balls are added to the bag. The probability of taking a red ball is now $\frac{1}{2}$. Find the number of red balls added.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-listing-outcomes",
      name: String.raw`Listing all the possible outcomes`,
      tests: String.raw`Writing the sample space of a simple experiment in an organised list and using it to find probabilities. Recognise by "List all the possible outcomes".`,
      questions: [
        {
          stem: String.raw`The names of four students, Ali, Bala, Chen and Devi, are put into a box. Two names are taken out at random, one after the other. The first name taken is the captain and the second is the vice-captain. Ali, Bala and Chen are boys and Devi is a girl.`,
          parts: [
            { label: "(a)", text: String.raw`List all the possible outcomes.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the probability that Devi is chosen as captain or as vice-captain.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the probability that Ali is the captain and a boy is the vice-captain.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S2-possibility-diagram",
      name: String.raw`Possibility diagrams for two dice or spinners`,
      tests: String.raw`Completing or using a possibility diagram for two independent experiments, then finding the probability of a total, product or other condition. Recognise by two dice or two spinners and "Complete the possibility diagram".`,
      questions: [
        {
          stem: String.raw`Spinner $A$ has four equal sectors numbered 1, 2, 3 and 4. Spinner $B$ has three equal sectors numbered 1, 2 and 3. Both spinners are spun and the **product** of the two numbers is recorded. The possibility diagram, with spinner $A$ across and spinner $B$ down, is partly completed.

| $\times$ | 1 | 2 | 3 | 4 |
| 1 | 1 | 2 | | |
| 2 | 2 | | | 8 |
| 3 | | 6 | | |`,
          parts: [
            { label: "(a)", text: String.raw`Complete the possibility diagram.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that the product is`, parts: [
              { label: "(i)", text: String.raw`an even number,`, marks: 1 },
              { label: "(ii)", text: String.raw`greater than 6,`, marks: 1 },
              { label: "(iii)", text: String.raw`a perfect square.`, marks: 1 },
            ] },
          ],
        },
        {
          stem: String.raw`Two fair six-sided dice are thrown. The possibility diagram shows the 36 possible outcomes.`,
          figure: {
            type: "plot",
            x: [-0.6, 7.2],
            y: [-1.2, 7],
            equal: true,
            axisLabels: ["", ""],
            originLabel: false,
            xTicks: [
              { x: 1, label: "1" },
              { x: 2, label: "2" },
              { x: 3, label: "3" },
              { x: 4, label: "4" },
              { x: 5, label: "5" },
              { x: 6, label: "6" },
            ],
            yTicks: [
              { y: 1, label: "1" },
              { y: 2, label: "2" },
              { y: 3, label: "3" },
              { y: 4, label: "4" },
              { y: 5, label: "5" },
              { y: 6, label: "6" },
            ],
            points: [
              { x: 1, y: 1 },
              { x: 1, y: 2 },
              { x: 1, y: 3 },
              { x: 1, y: 4 },
              { x: 1, y: 5 },
              { x: 1, y: 6 },
              { x: 2, y: 1 },
              { x: 2, y: 2 },
              { x: 2, y: 3 },
              { x: 2, y: 4 },
              { x: 2, y: 5 },
              { x: 2, y: 6 },
              { x: 3, y: 1 },
              { x: 3, y: 2 },
              { x: 3, y: 3 },
              { x: 3, y: 4 },
              { x: 3, y: 5 },
              { x: 3, y: 6 },
              { x: 4, y: 1 },
              { x: 4, y: 2 },
              { x: 4, y: 3 },
              { x: 4, y: 4 },
              { x: 4, y: 5 },
              { x: 4, y: 6 },
              { x: 5, y: 1 },
              { x: 5, y: 2 },
              { x: 5, y: 3 },
              { x: 5, y: 4 },
              { x: 5, y: 5 },
              { x: 5, y: 6 },
              { x: 6, y: 1 },
              { x: 6, y: 2 },
              { x: 6, y: 3 },
              { x: 6, y: 4 },
              { x: 6, y: 5 },
              { x: 6, y: 6 },
            ],
            labels: [
              { x: 3.5, y: -1, text: "First die", style: "small" },
              { x: 0.2, y: 6.75, text: "Second die", pos: "e", style: "small" },
            ],
            alt: "Possibility diagram for two fair six-sided dice: a 6 by 6 grid of 36 dots, first die score 1 to 6 across, second die score 1 to 6 up.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the probability that the total score is 8.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that the total score is a prime number.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the probability that the two dice show the same number.`, marks: 1 },
            { label: "(d)", text: String.raw`Find the probability that the total score is at least 10.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S2-tree-independent",
      name: String.raw`Tree diagrams for two stages`,
      tests: String.raw`Completing a tree diagram from given probabilities, then multiplying along paths and adding paths for "both", "exactly one" and "at least one". Recognise by two events in sequence and "Complete the tree diagram".`,
      questions: [
        {
          stem: String.raw`Alice and Bina each shoot one arrow at a target. The probability that Alice hits the target is 0.7 and the probability that Bina hits the target is 0.6, independently. The tree diagram, where H means "hits" and M means "misses", is incomplete.`,
          figure: {
            type: "plot",
            x: [0, 12],
            y: [0.2, 7.6],
            equal: true,
            axes: false,
            segments: [
              { from: [0.3, 3.5], to: [3.6, 5.3], tone: "ink", label: "0.7", pos: "nw", style: "plain" },
              { from: [4.3, 5.3], to: [7.6, 6.3], tone: "ink", label: "0.6", pos: "nw", style: "plain" },
              { from: [4.3, 5.3], to: [7.6, 4.3], tone: "ink", label: "…", pos: "sw", style: "plain" },
              { from: [0.3, 3.5], to: [3.6, 1.7], tone: "ink", label: "…", pos: "sw", style: "plain" },
              { from: [4.3, 1.7], to: [7.6, 2.7], tone: "ink", label: "…", pos: "nw", style: "plain" },
              { from: [4.3, 1.7], to: [7.6, 0.7], tone: "ink", label: "…", pos: "sw", style: "plain" },
            ],
            labels: [
              { x: 3.95, y: 5.3, text: "H", style: "italic" },
              { x: 7.95, y: 6.3, text: "H", style: "italic" },
              { x: 7.95, y: 4.3, text: "M", style: "italic" },
              { x: 3.95, y: 1.7, text: "M", style: "italic" },
              { x: 7.95, y: 2.7, text: "H", style: "italic" },
              { x: 7.95, y: 0.7, text: "M", style: "italic" },
              { x: 2, y: 7.2, text: "Alice", style: "small" },
              { x: 6, y: 7.2, text: "Bina", style: "small" },
            ],
            alt: "Incomplete tree diagram. First stage, Alice: H (hit) with 0.7 and M (miss) with a blank. Second stage, Bina: after Alice's H, H with 0.6 and M blank; after Alice's M, H and M both blank.",
          },
          parts: [
            { label: "(a)", text: String.raw`Complete the tree diagram.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that both of them hit the target.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the probability that exactly one of them hits the target.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the probability that at least one of them hits the target.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`On any day, the probability that it rains is 0.3. If it rains, the probability that Mr Tan is late for work is 0.4. If it does not rain, the probability that he is late is 0.1. In the tree diagram, $R$ is the event that it rains and $L$ is the event that Mr Tan is late.`,
          figure: {
            type: "plot",
            x: [0, 12],
            y: [0.2, 7.6],
            equal: true,
            axes: false,
            segments: [
              { from: [0.3, 3.5], to: [3.6, 5.3], tone: "ink", label: "0.3", pos: "nw", style: "plain" },
              { from: [4.3, 5.3], to: [7.6, 6.3], tone: "ink", label: "0.4", pos: "nw", style: "plain" },
              { from: [4.3, 5.3], to: [7.6, 4.3], tone: "ink", label: "…", pos: "sw", style: "plain" },
              { from: [0.3, 3.5], to: [3.6, 1.7], tone: "ink", label: "…", pos: "sw", style: "plain" },
              { from: [4.3, 1.7], to: [7.6, 2.7], tone: "ink", label: "0.1", pos: "nw", style: "plain" },
              { from: [4.3, 1.7], to: [7.6, 0.7], tone: "ink", label: "…", pos: "sw", style: "plain" },
            ],
            labels: [
              { x: 3.95, y: 5.3, text: "R", style: "italic" },
              { x: 7.95, y: 6.3, text: "L", style: "italic" },
              { x: 7.95, y: 4.3, text: "L′", style: "italic" },
              { x: 3.95, y: 1.7, text: "R′", style: "italic" },
              { x: 7.95, y: 2.7, text: "L", style: "italic" },
              { x: 7.95, y: 0.7, text: "L′", style: "italic" },
              { x: 2, y: 7.2, text: "Weather", style: "small" },
              { x: 6, y: 7.2, text: "Mr Tan", style: "small" },
            ],
            alt: "Incomplete tree diagram. First stage: R (rain) 0.3, R-prime (no rain) blank. After R: L (late) 0.4, L-prime blank. After R-prime: L 0.1, L-prime blank.",
          },
          parts: [
            { label: "(a)", text: String.raw`Complete the tree diagram.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that Mr Tan is late on a given day.`, marks: 2 },
            { label: "(c)", text: String.raw`Assuming that different days are independent, find the probability that Mr Tan is not late on either of two days.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-without-replacement",
      name: String.raw`Taking items without replacement`,
      tests: String.raw`Drawing two or three items from a bag or box without replacement, with second-stage fractions that change, and finding "same colour", "one of each" or "at least one". Recognise by "taken at random, without replacement".`,
      questions: [
        {
          stem: String.raw`A bag contains 5 red marbles and 3 green marbles. Two marbles are taken at random from the bag, without replacement.`,
          parts: [
            { label: "(a)", text: String.raw`Draw a tree diagram to show the possible outcomes and their probabilities.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the probability that both marbles are the same colour.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the probability that at least one marble is green.`, marks: 2 },
            { label: "(d)", text: String.raw`A third marble is now taken from the bag, without replacing the first two. Find the probability that all three marbles are red.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A box contains 6 milk chocolates and 4 dark chocolates, which all look the same from the outside. Sam takes two chocolates at random and eats them.`,
          parts: [
            { label: "(a)", text: String.raw`Find the probability that both are milk chocolates.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that he eats one milk chocolate and one dark chocolate.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-unknown-quadratic",
      name: String.raw`Forming an equation for an unknown number`,
      tests: String.raw`Writing a probability without replacement in terms of $n$, showing it leads to a given quadratic equation, and solving it. Recognise by "a bag contains $n$ balls…" with a given combined probability.`,
      questions: [
        {
          stem: String.raw`A bag contains $n$ balls, of which 3 are red and the rest are white. Two balls are taken at random from the bag, without replacement. The probability that both balls are red is $\frac{1}{15}$.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $n^2 - n - 90 = 0$.`, marks: 2 },
            { label: "(b)", text: String.raw`Solve the equation and hence find the number of white balls in the bag.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the probability that the two balls taken are of different colours.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-add-multiply",
      name: String.raw`Adding and multiplying probabilities`,
      tests: String.raw`Using the sum of all probabilities equal to 1, the addition rule for mutually exclusive outcomes, and the multiplication rule for independent repeats (spinners, three-stage events). Recognise by a table of probabilities or several independent stages.`,
      questions: [
        {
          stem: String.raw`A biased spinner can land on red, blue, green or yellow. The probability that it lands on red is 0.35 and the probability that it lands on blue is 0.2. It is twice as likely to land on green as on yellow.`,
          parts: [
            { label: "(a)", text: String.raw`Find the probability that it lands on yellow.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the probability that it lands on red or blue.`, marks: 1 },
            { label: "(c)", text: String.raw`The spinner is spun twice. Find the probability that it lands on the same colour both times.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`On her way to school, Mei passes three traffic lights. The probabilities that she has to stop at the first, second and third lights are 0.4, 0.5 and 0.3 respectively, independently of each other.`,
          parts: [
            { label: "(a)", text: String.raw`Find the probability that she has to stop at all three lights.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the probability that she has to stop at least once.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the probability that she has to stop at exactly one of the lights.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "S2-venn-tables",
      name: String.raw`Probability from Venn diagrams and tables`,
      tests: String.raw`Choosing a person at random from a group described by a Venn diagram or a table, including choosing two people one after the other. Recognise by a Venn diagram with numbers and "A student is chosen at random".`,
      questions: [
        {
          stem: String.raw`The Venn diagram shows the numbers of students in a class of 36 who are in the Science club ($S$) and the Mathematics club ($M$).`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            ],
            curves: [
              { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            ],
            labels: [
              { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
              { x: 2.05, y: 5.2, text: "S", style: "italic" },
              { x: 7.95, y: 5.2, text: "M", style: "italic" },
              { x: 2.75, y: 3, text: "10", style: "plain" },
              { x: 5, y: 3, text: "6", style: "plain" },
              { x: 7.25, y: 3, text: "12", style: "plain" },
              { x: 8.9, y: 0.9, text: "8", style: "plain" },
            ],
            alt: "Venn diagram of 36 students: S only 10, both S and M 6, M only 12, neither 8.",
          },
          parts: [
            { label: "(a)", text: String.raw`A student is chosen at random. Find the probability that the student is in both clubs.`, marks: 1 },
            { label: "(b)", text: String.raw`A student is chosen at random. Find the probability that the student is in exactly one club.`, marks: 1 },
            { label: "(c)", text: String.raw`Two students are chosen at random. Find the probability that neither of them is in either club.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The table shows the numbers of students in Secondary 3 who walk or take the bus to school.

| | Walk | Bus |
| Boys | 28 | 52 |
| Girls | 36 | 44 |`,
          parts: [
            { label: "(a)", text: String.raw`A student is chosen at random. Find the probability that the student is a girl who takes the bus.`, marks: 1 },
            { label: "(b)", text: String.raw`A boy is chosen at random. Find the probability that he walks to school.`, marks: 1 },
            { label: "(c)", text: String.raw`Two different students are chosen at random. Find the probability that both of them walk to school.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
