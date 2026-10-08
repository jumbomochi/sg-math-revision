H2.addTopic({
  id: "A6",
  title: "Exponential and Logarithmic Functions",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Graphs of $a^x$, $\mathrm{e}^x$, $\log_a x$ and $\ln x$, the laws of logarithms, change of base, solving exponential and logarithmic equations, and growth and decay models.`,
  syllabus: {
    include: [
      String.raw`Exponential and logarithmic functions $a^x$, $\mathrm{e}^x$, $\log_a x$, $\ln x$ and their graphs, including laws of logarithms, equivalence of $y = a^x$ and $x = \log_a y$, and change of base of logarithms`,
      String.raw`Simplifying expressions and solving simple equations involving exponential and logarithmic functions`,
      String.raw`Using exponential and logarithmic functions as models`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Exponential functions and their graphs`,
      body: String.raw`For $a > 0$, $a \ne 1$, the graph of $y = a^x$:
- passes through $(0, 1)$, since $a^0 = 1$;
- lies entirely **above** the $x$-axis: $a^x > 0$ for all $x$;
- has the $x$-axis ($y = 0$) as an asymptote;
- is increasing if $a > 1$ (growth) and decreasing if $0 < a < 1$ (decay).

$\mathrm{e} \approx 2.718$ is a special base; $y = \mathrm{e}^x$ is "the" exponential function. $y = \mathrm{e}^{-x}$ is its reflection in the $y$-axis.

The laws of indices from E-Math still apply: $a^m \times a^n = a^{m+n}$, $\dfrac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$, $a^{-n} = \dfrac{1}{a^n}$.`,
      figure: {
        type: "plot",
        x: [-3, 3], y: [-0.7, 6.2], height: 230,
        curves: [
          { fn: "x => Math.pow(2, x)" },
          { fn: "x => Math.pow(0.5, x)", tone: "good" },
        ],
        points: [{ x: 0, y: 1 }],
        labels: [
          { x: -2.15, y: 4.6, text: "y = (½)ˣ", pos: "e", style: "italic", tone: "good" },
          { x: 2.1, y: 5, text: "y = 2ˣ", pos: "w", style: "italic", tone: "accent" },
        ],
        caption: String.raw`$y = 2^x$ (growth) and $y = \left(\frac{1}{2}\right)^x$ (decay): both pass through $(0, 1)$ (marked) and approach the $x$-axis without touching it.`,
        alt: "Graphs of y = 2ˣ, increasing, and y = (½)ˣ, decreasing. They cross at (0, 1) and each approaches the x-axis on one side without touching it.",
      },
    },
    {
      title: String.raw`Logarithms: definition`,
      body: String.raw`$$y = a^x \iff x = \log_a y \qquad (a > 0,\ a \ne 1,\ y > 0).$$
A logarithm is a **power**: $\log_a y$ is the power of $a$ that gives $y$. For example $\log_2 32 = 5$ because $2^5 = 32$.

- $\lg x$ means $\log_{10} x$ and $\ln x$ means $\log_\mathrm{e} x$.
- $\log_a 1 = 0$, $\log_a a = 1$, $\log_a a^x = x$, $a^{\log_a x} = x$. In particular $\ln \mathrm{e}^x = x$ and $\mathrm{e}^{\ln x} = x$.
- $\log_a x$ is defined only for $x > 0$: you cannot take the log of zero or of a negative number.`,
    },
    {
      title: String.raw`Graphs of logarithmic functions`,
      body: String.raw`$y = \log_a x$ is the inverse of $y = a^x$, so its graph is the reflection of $y = a^x$ in the line $y = x$. For $a > 1$, the graph of $y = \log_a x$ (e.g. $y = \ln x$):
- passes through $(1, 0)$;
- exists only for $x > 0$;
- has the $y$-axis ($x = 0$) as an asymptote;
- is increasing, but more and more slowly.`,
      figure: {
        type: "plot",
        x: [-3, 4.6], y: [-3, 4.6], equal: true,
        lines: [{ fn: "x => x" }],
        curves: [
          { fn: "x => Math.exp(x)", domain: [-3, 1.6], label: "y = eˣ", labelAt: 1.2 },
          { fn: "x => Math.log(x)", domain: [0.04, 4.6], tone: "good" },
        ],
        points: [{ x: 0, y: 1, label: "(0, 1)", pos: "nw" }, { x: 1, y: 0, label: "(1, 0)", pos: "se" }],
        labels: [{ x: 4.5, y: 1.15, text: "y = ln x", pos: "w", style: "italic", tone: "good" }, { x: 3.6, y: 3.6, text: "y = x", pos: "se", style: "italic" }],
        caption: String.raw`$y = \ln x$ is the reflection of $y = \mathrm{e}^x$ in $y = x$. The asymptote $y = 0$ of one becomes the asymptote $x = 0$ of the other.`,
        alt: "Equal-scale graphs of y = eˣ through (0, 1) and y = ln x through (1, 0), mirror images of each other in the dashed line y = x. eˣ approaches the negative x-axis; ln x approaches the negative y-axis.",
      },
    },
    {
      title: String.raw`Laws of logarithms`,
      body: String.raw`For $M, N > 0$ (memorise — not on the formula sheet):
$$\log_a MN = \log_a M + \log_a N, \qquad \log_a \frac{M}{N} = \log_a M - \log_a N, \qquad \log_a M^k = k\log_a M.$$

Example: $\log_3 6 + \log_3 4.5 = \log_3 27 = 3$.

Common mistakes:
- $\log_a (M + N) \ne \log_a M + \log_a N$.
- $\dfrac{\log_a M}{\log_a N} \ne \log_a \dfrac{M}{N}$.
- $(\log_a M)^2 \ne 2\log_a M$; only the power **inside** the log comes out to the front.`,
    },
    {
      title: String.raw`Change of base`,
      body: String.raw`Memorise:
$$\log_a b = \frac{\log_c b}{\log_c a}, \qquad \text{in particular} \qquad \log_a b = \frac{1}{\log_b a}.$$

- Use it to bring all logs in an equation to the **same base**: $\log_4 x = \dfrac{\log_2 x}{\log_2 4} = \dfrac{1}{2}\log_2 x$.
- Use it with a calculator to evaluate any log: $\log_3 20 = \dfrac{\lg 20}{\lg 3}$.
- An equation such as $\log_2 x = k\log_x 2$ becomes a quadratic in $\log_2 x$ after writing $\log_x 2 = \dfrac{1}{\log_2 x}$.`,
    },
    {
      title: String.raw`Solving exponential equations`,
      body: String.raw`- **Same base:** write both sides as powers of the same number and equate the powers: $8^x = 4^{x+2} \Rightarrow 2^{3x} = 2^{2x+4} \Rightarrow x = 4$.
- **Different bases:** take $\lg$ (or $\ln$) of both sides and bring the powers down: $2^x = 7 \Rightarrow x \lg 2 = \lg 7 \Rightarrow x = \dfrac{\lg 7}{\lg 2} \approx 2.81$.
- **Hidden quadratic:** terms like $9^x$ and $3^x$, or $\mathrm{e}^x$ and $\mathrm{e}^{-x}$, suggest a substitution. With $u = 3^x$, $9^x = u^2$ and $3^{x+1} = 3u$:
$$9^x - 4(3^x) + 3 = 0 \Rightarrow u^2 - 4u + 3 = 0 \Rightarrow u = 1 \text{ or } 3 \Rightarrow x = 0 \text{ or } 1.$$
Since $a^x > 0$, **reject** any negative or zero value of $u$ — and say why.`,
    },
    {
      title: String.raw`Solving logarithmic equations`,
      body: String.raw`1. Use the laws to combine the logs on each side into a **single** log (same base).
2. Change to exponential form: $\log_a X = k \iff X = a^k$, or use $\log_a X = \log_a Y \Rightarrow X = Y$.
3. Solve the resulting equation.
4. **Check** each answer in the original equation: every log argument must be positive. Reject the others.

Example: $\log_3 x + \log_3 (x - 2) = 1 \Rightarrow x(x - 2) = 3 \Rightarrow x = 3$ or $x = -1$. Reject $x = -1$, since $\log_3(-1)$ is undefined. So $x = 3$.`,
    },
    {
      title: String.raw`Sketching transformed graphs`,
      body: String.raw`For graphs such as $y = 1 + \mathrm{e}^{-x}$, $y = 3 - \mathrm{e}^{x}$ or $y = \ln(x + 2)$, show:
- the **asymptote**, as a dashed line labelled with its equation;
- the axis intercepts, exactly (e.g. $x = \ln 3$, not $1.10$);
- the correct shape on each side.

Find the asymptote by asking what happens to the exponential part: $\mathrm{e}^{-x} \to 0$ as $x \to \infty$, so $y = 1 + \mathrm{e}^{-x}$ approaches $y = 1$. For $\ln(x + 2)$, the argument must be positive, so $x > -2$ and $x = -2$ is the asymptote.`,
      figure: [
        {
          type: "plot",
          x: [-1.6, 4], y: [-0.6, 4.6], height: 200,
          lines: [{ y: 1, label: "y = 1" }],
          curves: [{ fn: "x => 1 + Math.exp(-x)" }],
          points: [{ x: 0, y: 2, label: "(0, 2)", pos: "ne" }],
          caption: String.raw`$y = 1 + \mathrm{e}^{-x}$`,
          alt: "Graph of y = 1 + e^(−x), decreasing through (0, 2) and approaching the dashed horizontal asymptote y = 1 as x increases.",
        },
        {
          type: "plot",
          x: [-2.8, 4], y: [-2.6, 2.2], height: 200,
          lines: [{ x: -2 }],
          curves: [{ fn: "x => Math.log(x + 2)", domain: [-1.99, 4] }],
          points: [{ x: -1, y: 0, label: "(−1, 0)", pos: "nw" }, { x: 0, y: Math.log(2), label: "(0, ln 2)", pos: "nw" }],
          labels: [{ x: -1.95, y: 1.9, text: "x = −2", pos: "e", style: "italic" }],
          caption: String.raw`$y = \ln(x + 2)$`,
          alt: "Graph of y = ln(x + 2), increasing, crossing the x-axis at (−1, 0) and the y-axis at (0, ln 2), approaching the dashed vertical asymptote x = −2 from the right.",
        },
      ],
    },
    {
      title: String.raw`Exponential models: growth and decay`,
      body: String.raw`Models such as $N = N_0\mathrm{e}^{kt}$ or $N = N_0 a^t$:
- $N_0$ is the **initial** value (put $t = 0$).
- $k > 0$: growth; $k < 0$: decay.
- **Half-life**: the time for the quantity to halve. Solve $\mathrm{e}^{kt} = \frac{1}{2}$ by taking $\ln$ of both sides.
- For $T = A + B\mathrm{e}^{-kt}$ ($k > 0$), $T \to A$ as $t \to \infty$: e.g. a hot drink cools towards room temperature $A$.

To find an unknown constant from given data, substitute, isolate the exponential, then take $\ln$. Keep the unrounded value in your calculator for later parts, and answer in context with units.`,
      figure: {
        type: "plot",
        x: [-2, 22], y: [-12, 112], height: 220,
        axisLabels: ["t", "N"],
        curves: [{ fn: "t => 100*Math.pow(0.5, t/5)", domain: [0, 22] }],
        segments: [
          { from: [5, 50], to: [5, 0], dashed: true, thin: true, tone: "muted" },
          { from: [5, 50], to: [0, 50], dashed: true, thin: true, tone: "muted" },
          { from: [10, 25], to: [10, 0], dashed: true, thin: true, tone: "muted" },
          { from: [10, 25], to: [0, 25], dashed: true, thin: true, tone: "muted" },
        ],
        points: [{ x: 0, y: 100 }, { x: 5, y: 50 }, { x: 10, y: 25 }],
        xTicks: [{ x: 5, label: "5" }, { x: 10, label: "10" }],
        yTicks: [{ y: 100, label: "100" }, { y: 50, label: "50" }, { y: 25, label: "25" }],
        caption: String.raw`Decay with a half-life of 5 units of time: the amount halves every 5 units, from 100 to 50 to 25.`,
        alt: "A decay curve N against t starting at 100 when t = 0, falling to 50 at t = 5 and 25 at t = 10, marked with dashed lines, and approaching the t-axis.",
      },
    },
  ],
  archetypes: [
    {
      id: "A6-laws-simplify",
      name: String.raw`Using the laws of logarithms`,
      tests: String.raw`Evaluating or simplifying combinations of logs without a calculator, and expressing logs in terms of given letters such as $\log_a 2 = p$.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, find the value of`,
          parts: [
            { label: "(a)", text: String.raw`$\lg 25 + \lg 8 - \lg 2$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\log_2 48 - \log_2 3$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\dfrac{\log_3 81}{\log_3 9}$.`, marks: 1 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`It is given that $\log_a 2 = p$ and $\log_a 3 = q$. Express each of the following in terms of $p$ and $q$.`,
          parts: [
            { label: "(a)", text: String.raw`$\log_a 12$`, marks: 2 },
            { label: "(b)", text: String.raw`$\log_a \dfrac{9a}{2}$`, marks: 3 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "A6-change-of-base",
      name: String.raw`Equations needing a change of base`,
      tests: String.raw`Converting logs to a common base (often $\log_{a^2} x = \frac{1}{2}\log_a x$ or $\log_x a = \frac{1}{\log_a x}$) before solving.`,
      questions: [
        {
          parts: [
            { label: "(a)", text: String.raw`Show that $\log_9 x = \frac{1}{2}\log_3 x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Hence solve the equation $\log_3 x + \log_9 x = 6$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Solve the equation $\log_2 x = 9\log_x 2$.`,
          marks: 4,
          calculator: false,
        },
      ],
    },
    {
      id: "A6-exponential-equations",
      name: String.raw`Solving exponential equations`,
      tests: String.raw`Equating powers of a common base, or taking logarithms of both sides when the bases differ.`,
      questions: [
        {
          stem: String.raw`Solve the equation $3^{2x + 1} = 5^x$, giving your answer correct to 3 significant figures.`,
          marks: 4,
        },
        {
          stem: String.raw`Without using a calculator, solve the equation $4^x \times 2^{x + 3} = 8^{2x - 1}$.`,
          marks: 3,
          calculator: false,
        },
      ],
    },
    {
      id: "A6-hidden-quadratic",
      name: String.raw`Equations reducing to a quadratic`,
      tests: String.raw`Using a substitution such as $u = 2^x$, $u = \mathrm{e}^x$ or $u = \lg x$ to obtain a quadratic, then rejecting impossible values (e.g. $u \le 0$ for an exponential).`,
      questions: [
        {
          stem: String.raw`Using the substitution $u = 2^x$, solve the equation $4^x - 3(2^{x + 1}) + 8 = 0$.`,
          marks: 4,
          calculator: false,
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Solve the equation $\mathrm{e}^x - 6\mathrm{e}^{-x} = 1$, giving your answer in exact form.`, marks: 4 },
            { label: "(b)", text: String.raw`Solve the equation $(\lg x)^2 - \lg x^3 + 2 = 0$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "A6-log-equations",
      name: String.raw`Solving logarithmic equations`,
      tests: String.raw`Combining logs into one, converting to exponential form, solving, and rejecting answers that make a log argument zero or negative; sometimes as a pair of simultaneous equations with an exponential equation.`,
      questions: [
        {
          stem: String.raw`Solve the equations`,
          parts: [
            { label: "(a)", text: String.raw`$\log_2 (x + 1) + \log_2 (x - 1) = 3$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\lg x + \lg (x + 21) = 2$.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Solve the simultaneous equations
$$\log_2 x + \log_2 y = 5, \qquad 3^x = 9^y.$$`,
          marks: 5,
          calculator: false,
        },
      ],
    },
    {
      id: "A6-graphs",
      name: String.raw`Graphs of exponential and logarithmic functions`,
      tests: String.raw`Sketching graphs such as $y = A + B\mathrm{e}^{-x}$ with the asymptote and exact intercepts, using a sketch to count solutions, or finding the constants of $y = a\mathrm{e}^{bx}$ from points on a given graph.`,
      questions: [
        {
          stem: String.raw`The equation of a curve is $y = 4 - 2\mathrm{e}^{-x}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the coordinates of the points where the curve meets the axes, giving exact values.`, marks: 2 },
            { label: "(b)", text: String.raw`State the equation of the asymptote of the curve.`, marks: 1 },
            { label: "(c)", text: String.raw`Sketch the curve.`, marks: 2 },
            { label: "(d)", text: String.raw`By drawing a suitable straight line on your sketch, state the number of solutions of the equation $4 - 2\mathrm{e}^{-x} = x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The diagram shows part of the graph of $y = a\mathrm{e}^{bx}$, where $a$ and $b$ are constants. The graph passes through the points $(0, 3)$ and $(2, 12)$.`,
          figure: {
            type: "plot",
            x: [-1.5, 3.2], y: [-1.5, 15], height: 230,
            curves: [{ fn: "x => 3*Math.pow(2, x)", domain: [-1.5, 2.3] }],
            points: [{ x: 0, y: 3, label: "(0, 3)", pos: "nw" }, { x: 2, y: 12, label: "(2, 12)", pos: "e" }],
            alt: "An increasing exponential curve passing through (0, 3) and (2, 12), approaching the negative x-axis on the left.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $a$ and the exact value of $b$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the value of $x$ for which $y = 48$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "A6-growth-decay-models",
      name: String.raw`Exponential growth and decay models`,
      tests: String.raw`Using a model such as $m = m_0\mathrm{e}^{-kt}$ or $T = A + B\mathrm{e}^{-kt}$: finding the constant from data, the half-life, the time to reach a value, and the long-term behaviour, with answers in context.`,
      questions: [
        {
          stem: String.raw`The mass, $m$ grams, of a radioactive substance $t$ years after it is first measured is given by $m = 80\mathrm{e}^{-kt}$, where $k$ is a positive constant. After 5 years the mass is 60 grams.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $\mathrm{e}^{-5k} = \frac{3}{4}$, and hence find the value of $k$, correct to 3 significant figures.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the half-life of the substance, correct to the nearest year.`, marks: 2 },
            { label: "(c)", text: String.raw`Find, to the nearest year, the time taken for the mass to fall to 10 grams.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A cup of hot tea is left to cool in a room. Its temperature, $T\ ^\circ$C, $t$ minutes after it is poured is given by $T = 25 + 70\mathrm{e}^{-0.04t}$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the temperature of the tea when it is poured.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the time taken for the temperature to fall to $50^\circ$C, giving your answer correct to 3 significant figures.`, marks: 3 },
            { label: "(c)", text: String.raw`Explain why the temperature of the tea can never fall to $20^\circ$C according to this model.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
