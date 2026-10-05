H2.addTopic({
  id: "1.1",
  title: "Functions",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Domain, range, inverse and composite functions — the language used across the whole of Pure Mathematics.`,
  syllabus: {
    include: [
      String.raw`concepts of function, domain and range`,
      String.raw`inverse functions and composite functions`,
      String.raw`conditions for the existence of inverse functions and composite functions`,
      String.raw`domain restriction to obtain an inverse function`,
      String.raw`relationship between graphs of a one-to-one function and its inverse`,
    ],
    exclude: [
      String.raw`the use of the relation $(\mathrm{fg})^{-1} = \mathrm{g}^{-1}\mathrm{f}^{-1}$`,
      String.raw`restriction of domain to obtain a composite function`,
    ],
  },
  concepts: [
    {
      title: String.raw`Function, domain and range`,
      body: String.raw`A **function** $\mathrm{f}: x \mapsto \mathrm{f}(x),\ x \in D_\mathrm{f}$ assigns to every element of the domain $D_\mathrm{f}$ **exactly one** image. The **range** $R_\mathrm{f}$ is the set of all images.

- A rule is not a function unless the domain is stated — always write it down.
- Vertical line test: every vertical line through $D_\mathrm{f}$ meets the graph exactly once.
- To find a range, **sketch the graph over the given domain** and read off the $y$-values. Watch endpoints: is each one included ($\le$) or not ($<$)?`,
    },
    {
      title: String.raw`One-one functions and the inverse`,
      body: String.raw`$\mathrm{f}^{-1}$ exists $\iff$ $\mathrm{f}$ is **one-one**.

- Horizontal line test: every horizontal line $y = k,\ k \in R_\mathrm{f}$, meets the graph **exactly once**. To show f is *not* one-one, give a specific line, e.g. "$y = 2$ cuts the graph twice".
- $D_{\mathrm{f}^{-1}} = R_\mathrm{f}$ and $R_{\mathrm{f}^{-1}} = D_\mathrm{f}$.
- Finding $\mathrm{f}^{-1}$: let $y = \mathrm{f}(x)$, make $x$ the subject, choose the correct sign (from the domain of f), then replace $y$ by $x$.
- Domain restriction: for a quadratic, the largest domain $x \le k$ or $x \ge k$ starts at the turning point (complete the square).`,
    },
    {
      title: String.raw`Graphs of $\mathrm{f}$ and $\mathrm{f}^{-1}$`,
      body: String.raw`The graph of $y = \mathrm{f}^{-1}(x)$ is the reflection of $y = \mathrm{f}(x)$ in the line $y = x$. Use equal scales and draw $y = x$ when sketching both.

If f is **increasing**, the curves $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$ meet only on $y = x$, so

$$\mathrm{f}(x) = \mathrm{f}^{-1}(x) \iff \mathrm{f}(x) = x.$$

This shortcut fails for decreasing functions — check graphically.`,
    },
    {
      title: String.raw`Composite functions`,
      body: String.raw`$\mathrm{fg}(x) = \mathrm{f}(\mathrm{g}(x))$ — apply g first.

- $\mathrm{fg}$ exists $\iff R_\mathrm{g} \subseteq D_\mathrm{f}$. Always quote both sets in your answer.
- $D_\mathrm{fg} = D_\mathrm{g}$.
- To find $R_\mathrm{fg}$: take $R_\mathrm{g}$ as the input set of f, sketch $y = \mathrm{f}(x)$ over that set, and read off the outputs. (Do **not** just sketch the formula of fg over $\mathbb{R}$.)`,
    },
    {
      title: String.raw`Identities with inverses`,
      body: String.raw`- $\mathrm{f}^{-1}\mathrm{f}(x) = x$ for $x \in D_\mathrm{f}$, and $\mathrm{ff}^{-1}(x) = x$ for $x \in D_{\mathrm{f}^{-1}}$ — same rule, possibly **different domains**.
- If $\mathrm{ff}(x) = x$ then f is **self-inverse**: $\mathrm{f}^{-1} = \mathrm{f}$, and its graph is symmetric about $y = x$.
- Repeated composition: if $\mathrm{f}^2 = $ identity then $\mathrm{f}^n = \mathrm{f}$ for odd $n$ and the identity for even $n$.`,
    },
    {
      title: String.raw`Periodic and piecewise functions`,
      body: String.raw`$\mathrm{f}(x + p) = \mathrm{f}(x)$ for all $x$ means the graph repeats every $p$ units. To evaluate $\mathrm{f}(a)$, subtract multiples of $p$ until the input lands in the defining interval. For piecewise definitions, check carefully which interval each endpoint belongs to.`,
    },
  ],
  archetypes: [
    {
      id: "1.1-range-restricted-domain",
      name: String.raw`Range of a function on a restricted domain`,
      tests: String.raw`Sketching over the given domain only and reading off the range, with correct inclusion of endpoints. Usually the opening part of a longer functions question.`,
      questions: [
        {
          stem: String.raw`The function f is defined by
$$\mathrm{f} : x \mapsto x^2 - 4x + 1, \quad x \in \mathbb{R},\ 0 \le x \le 5.$$`,
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}(x)$, labelling the coordinates of the end-points and the turning point.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the range of f.`, marks: 1 },
            { label: "(iii)", text: String.raw`Explain why $\mathrm{f}^{-1}$ does not exist.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The function g is defined by $\mathrm{g} : x \mapsto 3 - \dfrac{2}{x + 1}$, $x \in \mathbb{R}$, $x > 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the range of g.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that g is one-one.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "1.1-inverse-domain-restriction",
      name: String.raw`Finding an inverse, including restricting the domain`,
      tests: String.raw`Choosing the largest domain so that f is one-one (often via completing the square), then finding $\mathrm{f}^{-1}(x)$ with the correct sign and stating its domain.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto x^2 - 6x + 10$, $x \in \mathbb{R}$, $x \le k$.`,
          parts: [
            { label: "(i)", text: String.raw`State the largest value of $k$ for which $\mathrm{f}^{-1}$ exists.`, marks: 1 },
            { label: "(ii)", text: String.raw`Using the value of $k$ found in part (i), find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`The function h is defined by $\mathrm{h} : x \mapsto \dfrac{2x + 1}{x - 3}$, $x \in \mathbb{R}$, $x \ne 3$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\mathrm{h}^{-1}(x)$ and state the domain of $\mathrm{h}^{-1}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact values of $x$ for which $\mathrm{h}(x) = x$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-composite-existence-range",
      name: String.raw`Existence and range of a composite function`,
      tests: String.raw`Checking $R_\mathrm{g} \subseteq D_\mathrm{f}$ with both sets quoted, writing down $\mathrm{fg}(x)$, and finding $R_\mathrm{fg}$ by feeding $R_\mathrm{g}$ into f.`,
      questions: [
        {
          stem: String.raw`The functions f and g are defined by
$$\mathrm{f} : x \mapsto \ln(x - 3),\ x \in \mathbb{R},\ x > 3, \qquad \mathrm{g} : x \mapsto x^2 + 2,\ x \in \mathbb{R}.$$`,
          parts: [
            { label: "(i)", text: String.raw`Explain why the composite function fg does not exist.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that the composite function gf exists, and find an expression for $\mathrm{gf}(x)$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the range of gf.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The functions p and q are defined by
$$\mathrm{p} : x \mapsto \frac{1}{x},\ x \in \mathbb{R},\ x \ge 1, \qquad \mathrm{q} : x \mapsto 4x - x^2,\ x \in \mathbb{R},\ 1 \le x \le 3.$$`,
          parts: [
            { label: "(i)", text: String.raw`Show that pq exists.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the range of pq.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-graph-f-and-inverse",
      name: String.raw`Graphs of f and $\mathrm{f}^{-1}$; solving $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$`,
      tests: String.raw`Sketching a curve and its inverse as reflections in $y = x$, and reducing $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$ to $\mathrm{f}(x) = x$ for an increasing function.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto x^2 - 2x + 2$, $x \in \mathbb{R}$, $x \ge 1$.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\mathrm{f}^{-1}(x)$ and state the domain of $\mathrm{f}^{-1}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`On the same diagram, sketch the graphs of $y = \mathrm{f}(x)$ and $y = \mathrm{f}^{-1}(x)$, making clear the relationship between the two graphs.`, marks: 3 },
            { label: "(iii)", text: String.raw`Solve the equation $\mathrm{f}(x) = \mathrm{f}^{-1}(x)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-self-inverse-repeated",
      name: String.raw`Self-inverse functions and repeated composition`,
      tests: String.raw`Simplifying $\mathrm{ff}(x)$, recognising $\mathrm{f}^{-1} = \mathrm{f}$, and using the pattern to evaluate $\mathrm{f}^n$ for large $n$.`,
      questions: [
        {
          stem: String.raw`The function f is defined by $\mathrm{f} : x \mapsto \dfrac{x + 1}{x - 1}$, $x \in \mathbb{R}$, $x \ne 1$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\mathrm{ff}(x) = x$. Hence state $\mathrm{f}^{-1}(x)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State a geometrical property of the graph of $y = \mathrm{f}(x)$ that follows from part (i).`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the value of $\mathrm{f}^{2027}(3)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "1.1-periodic-piecewise",
      name: String.raw`Periodic and piecewise-defined functions`,
      tests: String.raw`Sketching a piecewise function extended by $\mathrm{f}(x + p) = \mathrm{f}(x)$, evaluating at large inputs, and solving equations across several periods.`,
      questions: [
        {
          stem: String.raw`The function f is defined by
$$\mathrm{f}(x) = \begin{cases} x^2 & \text{for } 0 \le x < 1, \\ 2 - x & \text{for } 1 \le x < 2, \end{cases}$$
and $\mathrm{f}(x + 2) = \mathrm{f}(x)$ for all real values of $x$.`,
          parts: [
            { label: "(i)", text: String.raw`Sketch the graph of $y = \mathrm{f}(x)$ for $-2 \le x \le 4$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the value of $\mathrm{f}(7.5)$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find all the values of $x$, for $0 \le x \le 4$, for which $\mathrm{f}(x) = \frac{1}{4}$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
