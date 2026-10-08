H2.addTopic({
  id: "N1",
  title: "Numbers and their Operations",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Primes, HCF and LCM, roots, real numbers, rounding and estimation, standard form and the laws of indices.`,
  syllabus: {
    include: [
      String.raw`primes and prime factorisation`,
      String.raw`finding highest common factor (HCF) and lowest common multiple (LCM), squares, cubes, square roots and cube roots by prime factorisation`,
      String.raw`negative numbers, integers, rational numbers, real numbers, and their four operations`,
      String.raw`calculations with calculator`,
      String.raw`representation and ordering of numbers on the number line`,
      String.raw`use of the symbols $<$, $>$, $\leqslant$, $\geqslant$`,
      String.raw`approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures and estimating the results of computation)`,
      String.raw`use of standard form $A \times 10^n$, where $n$ is an integer, and $1 \leqslant A < 10$`,
      String.raw`positive, negative, zero and fractional indices`,
      String.raw`laws of indices`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Primes and prime factorisation`,
      body: String.raw`A **prime number** has exactly two different factors: 1 and itself.

- 1 is **not** prime. 2 is the only even prime.
- The primes below 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.
- Every whole number greater than 1 can be written as a product of primes in exactly one way. Find it with a factor tree or by repeated division (the "ladder").
- Write the answer in **index notation**, primes in increasing order: $360 = 2^3 \times 3^2 \times 5$.
- Check by multiplying back. A common slip is leaving a non-prime such as 9 or 15 in the answer.`,
      figure: {
        type: "plot",
        x: [0.1, 7.9], y: [1.3, 9.7], equal: true, axes: false,
        segments: [
          { from: [1.8, 8.6], to: [1.15, 7.95], tone: "muted" },
          { from: [2.2, 8.6], to: [2.85, 7.95], tone: "muted" },
          { from: [2.8, 7.2], to: [2.15, 6.55], tone: "muted" },
          { from: [3.2, 7.2], to: [3.85, 6.55], tone: "muted" },
          { from: [3.8, 5.8], to: [3.15, 5.15], tone: "muted" },
          { from: [4.2, 5.8], to: [4.85, 5.15], tone: "muted" },
          { from: [4.8, 4.4], to: [4.15, 3.75], tone: "muted" },
          { from: [5.2, 4.4], to: [5.85, 3.75], tone: "muted" },
          { from: [5.8, 3.0], to: [5.15, 2.35], tone: "muted" },
          { from: [6.2, 3.0], to: [6.85, 2.35], tone: "muted" },
        ],
        circles: [
          { c: [1, 7.6], r: 0.36, tone: "accent" },
          { c: [2, 6.2], r: 0.36, tone: "accent" },
          { c: [3, 4.8], r: 0.36, tone: "accent" },
          { c: [4, 3.4], r: 0.36, tone: "accent" },
          { c: [5, 2.0], r: 0.36, tone: "accent" },
          { c: [7, 2.0], r: 0.36, tone: "accent" },
        ],
        labels: [
          { x: 2, y: 9.0, text: "360", style: "bold" },
          { x: 1, y: 7.6, text: "2" }, { x: 3, y: 7.6, text: "180" },
          { x: 2, y: 6.2, text: "2" }, { x: 4, y: 6.2, text: "90" },
          { x: 3, y: 4.8, text: "2" }, { x: 5, y: 4.8, text: "45" },
          { x: 4, y: 3.4, text: "3" }, { x: 6, y: 3.4, text: "15" },
          { x: 5, y: 2.0, text: "3" }, { x: 7, y: 2.0, text: "5" },
        ],
        caption: String.raw`A factor tree for 360. The circled numbers are prime, so $360 = 2^3 \times 3^2 \times 5$.`,
        alt: "Factor tree: 360 splits into 2 and 180; 180 into 2 and 90; 90 into 2 and 45; 45 into 3 and 15; 15 into 3 and 5. The prime leaves 2, 2, 2, 3, 3 and 5 are circled.",
      },
    },
    {
      title: String.raw`HCF and LCM by prime factorisation`,
      body: String.raw`Write each number as a product of primes, then:

- **HCF**: take the primes common to all the numbers, each to the **lowest** power.
- **LCM**: take every prime that appears, each to the **highest** power.

| | $84 = 2^2 \times 3 \times 7$ | $90 = 2 \times 3^2 \times 5$ |
|---|---|---|
| HCF | $2 \times 3 = 6$ | |
| LCM | $2^2 \times 3^2 \times 5 \times 7 = 1260$ | |

Check: for two numbers, HCF $\times$ LCM = product of the numbers ($6 \times 1260 = 84 \times 90$).

Word problems: "largest equal pieces / largest square tiles / greatest number of identical groups" → **HCF**. "Next time together / smallest number divisible by both" → **LCM**.`,
      figure: {
        type: "plot",
        x: [0, 10], y: [0, 5.6], equal: true, axes: false,
        circles: [
          { c: [3.8, 2.6], r: 2.2, fill: true, tone: "accent", label: "84", labelAt: [2.2, 5.05] },
          { c: [6.2, 2.6], r: 2.2, fill: true, tone: "good", label: "90", labelAt: [7.8, 5.05] },
        ],
        labels: [
          { x: 2.6, y: 3.1, text: "2" }, { x: 2.6, y: 2.1, text: "7" },
          { x: 5.0, y: 3.1, text: "2" }, { x: 5.0, y: 2.1, text: "3" },
          { x: 7.4, y: 3.1, text: "3" }, { x: 7.4, y: 2.1, text: "5" },
          { x: 5.0, y: 0.05, text: "HCF = 2 × 3 = 6", style: "small" },
        ],
        caption: String.raw`The common primes (the overlap) multiply to the HCF. All the primes in the diagram multiply to the LCM: $2 \times 7 \times 2 \times 3 \times 3 \times 5 = 1260$.`,
        alt: "Venn diagram of the prime factors of 84 and 90. Only in 84: 2 and 7. In both: 2 and 3. Only in 90: 3 and 5. The HCF is the product of the overlap, 6.",
      },
    },
    {
      title: String.raw`Squares, cubes and their roots`,
      body: String.raw`From the prime factorisation:

- A number is a **perfect square** when every index is even. A **perfect cube** when every index is a multiple of 3.
- $\sqrt{\ }$: halve every index. $\sqrt[3]{\ }$: divide every index by 3. E.g. $1296 = 2^4 \times 3^4$, so $\sqrt{1296} = 2^2 \times 3^2 = 36$.
- "Smallest integer $k$ such that $nk$ is a perfect square": multiply by just enough of each prime to make every index even. For a perfect cube, make every index a multiple of 3.

Show the prime factorisation as working — an answer found by trial on the calculator usually gets no method marks.`,
    },
    {
      title: String.raw`Types of numbers and the number line`,
      body: String.raw`- **Integers**: $\dots, -2, -1, 0, 1, 2, \dots$
- **Rational numbers**: can be written as $\dfrac{a}{b}$ with $a, b$ integers, $b \ne 0$. All terminating and recurring decimals are rational, e.g. $0.\dot{3} = \frac{1}{3}$, $-2.5 = -\frac{5}{2}$.
- **Irrational numbers**: cannot be written as a fraction. Their decimals never end and never repeat, e.g. $\sqrt{2}$, $\sqrt{5}$, $\pi$. Note $\sqrt{9} = 3$ is rational, and $\frac{22}{7}$ is rational (it is only an approximation to $\pi$).
- **Real numbers**: all the rational and irrational numbers. Every real number is a point on the number line.

On the number line, numbers increase to the right: $-3 < -2$ because $-3$ is further left. To order numbers, change them all to decimals first.`,
      figure: {
        type: "plot",
        x: [-3.6, 4.6], y: [-1.0, 1.1], height: 140, axes: false,
        segments: [
          { from: [-3.5, 0], to: [4.5, 0], arrow: true, arrowStart: true, tone: "ink", thin: true },
          ...[-3, -2, -1, 0, 1, 2, 3, 4].map((k) => ({ from: [k, -0.12], to: [k, 0.12], tone: "ink", thin: true })),
        ],
        labels: [-3, -2, -1, 0, 1, 2, 3, 4].map((k) => ({ x: k, y: -0.42, text: String(k).replace("-", "−"), style: "small" })).concat([
          { x: -2.5, y: 0.5, text: "−2.5", style: "small", tone: "accent" },
          { x: -1.414, y: 0.5, text: "−√2", style: "small", tone: "accent" },
          { x: 0.333, y: 0.5, text: "⅓", style: "small", tone: "accent" },
          { x: 2.236, y: 0.5, text: "√5", style: "small", tone: "accent" },
          { x: 3.1416, y: 0.5, text: "π", style: "small", tone: "accent" },
        ]),
        points: [{ x: -2.5, y: 0 }, { x: -1.414, y: 0 }, { x: 0.333, y: 0 }, { x: 2.236, y: 0 }, { x: 3.1416, y: 0 }],
        caption: String.raw`Rational and irrational numbers both have a place on the number line: $-2.5 < -\sqrt{2} < \frac{1}{3} < \sqrt{5} < \pi$.`,
        alt: "Number line from −3 to 4 with five marked points: −2.5, −√2 (about −1.41), one third, √5 (about 2.24) and π (about 3.14).",
      },
    },
    {
      title: String.raw`Negative numbers and inequality symbols`,
      body: String.raw`- Same signs give a positive result, different signs give a negative result, for both $\times$ and $\div$: $(-6) \times (-3) = 18$, $(-20) \div 4 = -5$.
- Subtracting a negative is adding: $5 - (-3) = 8$.
- Watch brackets on the calculator: $(-3)^2 = 9$ but $-3^2 = -9$.
- Order of operations: brackets, then indices, then $\times \div$ (left to right), then $+ -$ (left to right).

Symbols: $<$ "less than", $>$ "greater than", $\leqslant$ "less than or equal to", $\geqslant$ "greater than or equal to". On a number line an **open circle** means the end value is not included ($<$ or $>$); a **filled dot** means it is included ($\leqslant$ or $\geqslant$).`,
      figure: {
        type: "plot",
        x: [-3.6, 4.6], y: [-0.9, 0.7], height: 120, axes: false,
        segments: [
          { from: [-3.5, 0], to: [4.5, 0], arrow: true, arrowStart: true, tone: "ink", thin: true },
          ...[-3, -2, -1, 0, 1, 2, 3, 4].map((k) => ({ from: [k, -0.1], to: [k, 0.1], tone: "ink", thin: true })),
          { from: [-0.9, 0.3], to: [2, 0.3], tone: "accent" },
        ],
        circles: [{ c: [-1, 0.3], r: 0.1, tone: "accent" }],
        points: [{ x: 2, y: 0.3 }],
        labels: [-3, -2, -1, 0, 1, 2, 3, 4].map((k) => ({ x: k, y: -0.38, text: String(k).replace("-", "−"), style: "small" })),
        caption: String.raw`$-1 < x \leqslant 2$: open circle at $-1$ (not included), filled dot at $2$ (included).`,
        alt: "Number line from −3 to 4. A bar runs from an open circle at −1 to a filled dot at 2, showing −1 < x ≤ 2.",
      },
    },
    {
      title: String.raw`Rounding: decimal places and significant figures`,
      body: String.raw`- **Decimal places (d.p.)**: count digits after the decimal point.
- **Significant figures (s.f.)**: count from the **first non-zero digit**. Zeros between non-zero digits count ($4.05$ has 3 s.f.); leading zeros never count ($0.00208$ has 3 s.f.); trailing zeros after the decimal point count ($8.00$ has 3 s.f.).
- Look at the next digit: 5 or more, round up; otherwise leave it.
- Keep the place value: $48\,562 \approx 49\,000$ (2 s.f.), not $49$.
- Keep the zeros the accuracy needs: $3.0972 \approx 3.10$ (2 d.p.), not $3.1$.
- Round **once, at the end**. Carry full calculator values (or at least 5 s.f.) through the working. Rounding in steps can change the final digit.
- Exam default: give non-exact answers to **3 s.f.**, angles to 1 d.p., money to 2 d.p. (the nearest cent).`,
      figure: {
        type: "plot",
        x: [3.385, 3.515], y: [-0.9, 0.8], height: 130, axes: false,
        segments: [
          { from: [3.39, 0], to: [3.51, 0], tone: "ink", thin: true },
          ...[3.40, 3.41, 3.42, 3.43, 3.44, 3.46, 3.47, 3.48, 3.49, 3.50].map((k) => ({ from: [k, -0.07], to: [k, 0.07], tone: "ink", thin: true })),
          { from: [3.45, -0.25], to: [3.45, 0.45], dashed: true, tone: "muted" },
          { from: [3.468, 0.3], to: [3.498, 0.3], arrow: true, tone: "good" },
        ],
        points: [{ x: 3.47, y: 0 }],
        labels: [
          { x: 3.40, y: -0.4, text: "3.4", style: "small" },
          { x: 3.45, y: -0.4, text: "3.45", style: "small" },
          { x: 3.50, y: -0.4, text: "3.5", style: "small" },
          { x: 3.47, y: -0.4, text: "3.47", style: "small", tone: "accent" },
          { x: 3.45, y: 0.62, text: "halfway", style: "small" },
        ],
        caption: String.raw`$3.47$ is past the halfway mark $3.45$, so $3.47 \approx 3.5$ (1 d.p.).`,
        alt: "Number line from 3.4 to 3.5 with a dashed halfway mark at 3.45. The point 3.47 lies to the right of halfway, with an arrow pointing to 3.5.",
      },
    },
    {
      title: String.raw`Estimation`,
      body: String.raw`To estimate, round **every** number to 1 significant figure (unless told otherwise), then work out the simpler calculation by hand.

$$\frac{59.3 \times 0.0207}{\sqrt{3.87}} \approx \frac{60 \times 0.02}{\sqrt{4}} = \frac{1.2}{2} = 0.6$$

- Write down the rounded values — the working earns the marks, not just the answer.
- Choose a nearby perfect square inside a square root when that is the natural 1 s.f. choice, e.g. $\sqrt{3.87} \approx \sqrt{4}$.
- Use an estimate to check a calculator answer is sensible (place value, decimal point).`,
    },
    {
      title: String.raw`Standard form`,
      body: String.raw`A number in **standard form** is written $A \times 10^n$ where $1 \leqslant A < 10$ and $n$ is an integer.

- Large numbers: $n > 0$. $384\,000\,000 = 3.84 \times 10^8$.
- Small numbers: $n < 0$. $0.000\,048\,1 = 4.81 \times 10^{-5}$ (the decimal point moves 5 places).
- $45 \times 10^6$ is **not** in standard form; rewrite it as $4.5 \times 10^7$.
- Multiplying/dividing: deal with the $A$ parts and the powers of 10 separately, then adjust so that $1 \leqslant A < 10$. Adding/subtracting: use the calculator ($\times 10^x$ key) or write both with the same power first.
- Prefixes: kilo $= 10^3$, mega $= 10^6$, giga $= 10^9$, milli $= 10^{-3}$, micro $= 10^{-6}$, nano $= 10^{-9}$.`,
    },
    {
      title: String.raw`Laws of indices (memorise)`,
      body: String.raw`For $a, b > 0$ and rational $m, n$:

| Law | Example |
|---|---|
| $a^m \times a^n = a^{m+n}$ | $x^5 \times x^{-2} = x^3$ |
| $a^m \div a^n = a^{m-n}$ | $x^2 \div x^6 = x^{-4}$ |
| $(a^m)^n = a^{mn}$ | $(2^3)^4 = 2^{12}$ |
| $a^n \times b^n = (ab)^n$ | $2^5 \times 5^5 = 10^5$ |
| $a^0 = 1$ | $7^0 = 1$ |
| $a^{-n} = \dfrac{1}{a^n}$ | $\left(\frac{2}{3}\right)^{-2} = \frac{9}{4}$ |
| $a^{\frac{1}{n}} = \sqrt[n]{a}$, $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$ | $8^{\frac{2}{3}} = 2^2 = 4$ |

- "Simplify" usually means: one term for each letter, **positive indices** only.
- For a fractional index, take the root first — the numbers stay small: $27^{\frac{4}{3}} = 3^4 = 81$.
- To solve $2^x = \frac{1}{32}$, write both sides as powers of the same base: $2^x = 2^{-5}$, so $x = -5$.
- Common errors: $2^3 \times 2^4 \ne 4^7$; $(3x)^2 \ne 3x^2$; $a^{-2} \ne -a^2$.`,
    },
    {
      title: String.raw`Calculator work and money`,
      body: String.raw`- Use brackets around whole numerators, denominators and roots, e.g. $\dfrac{\sqrt{5.6^2 + 3.17}}{2.4^3 - 1.09}$ is keyed in as √(5.6² + 3.17) ÷ (2.4³ − 1.09).
- If asked for "the first five digits on your calculator display", copy them exactly, then round separately.
- Money: give answers in dollars to 2 d.p. ($\$12.50$, not $\$12.5$).
- **Exchange rates**: "S\$1 = ¥113.20" means multiply S\$ by 113.20 to get yen, and divide yen by 113.20 to get S\$. Write the rate as a ratio and check the answer is sensible (there should be more yen than dollars).
- Compare prices in different currencies by converting to the **same** currency first.`,
    },
  ],
  archetypes: [
    {
      id: "N1-prime-factors-hcf-lcm",
      name: String.raw`Prime factorisation, HCF and LCM`,
      tests: String.raw`Writing numbers as products of primes in index notation, finding HCF and LCM, and spotting which one a word problem needs (largest equal pieces → HCF; next time together → LCM).`,
      questions: [
        {
          stem: String.raw`Written as a product of its prime factors, $1260 = 2^2 \times 3^2 \times 5 \times 7$.`,
          parts: [
            { label: "(a)", text: String.raw`Express 450 as a product of its prime factors.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the highest common factor of 1260 and 450.`, marks: 1 },
            { label: "(c)", text: String.raw`The lowest common multiple of 1260 and the integer $n$ is 6300. The highest common factor of 1260 and $n$ is 90. Find $n$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Three warning lights flash at regular intervals. The first flashes every 12 seconds, the second every 18 seconds and the third every 30 seconds. They all flash together at 08 00.`,
          parts: [
            { label: "(a)", text: String.raw`Find the next time at which all three lights flash together.`, marks: 2 },
            { label: "(b)", text: String.raw`A rectangular floor measures 3.6 m by 2.88 m. It is to be covered completely with identical square tiles, without cutting any tile. Find the largest possible side length of a tile, in centimetres, and the number of these tiles needed.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N1-squares-cubes-roots",
      name: String.raw`Perfect squares, cubes and roots from prime factors`,
      tests: String.raw`Using the indices in a prime factorisation to find square and cube roots, or the smallest multiplier that makes a number a perfect square or cube. Often set without a calculator.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, answer the whole of this question.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Express 1764 as a product of its prime factors.`, marks: 1 },
            { label: "(b)", text: String.raw`Hence find $\sqrt{1764}$.`, marks: 1 },
            { label: "(c)", text: String.raw`Given that $74\,088 = 1764 \times 42$, find $\sqrt[3]{74\,088}$, showing your working clearly.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Written as a product of its prime factors, $4704 = 2^5 \times 3 \times 7^2$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the smallest positive integer $k$ such that $4704k$ is a perfect square.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the smallest positive integer $m$ such that $4704m$ is a perfect cube.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the largest integer that is a factor of both 4704 and 1764.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-real-numbers-ordering",
      name: String.raw`Types of numbers, ordering and negative numbers`,
      tests: String.raw`Classifying numbers as integers, rational or irrational; ordering numbers (change to decimals first); reading inequalities from a number line; arithmetic with negative numbers.`,
      questions: [
        {
          stem: String.raw`Consider the numbers
$$-\frac{7}{2}, \quad \sqrt{9}, \quad 0.\dot{3}, \quad \pi, \quad \sqrt{12}, \quad -4, \quad \frac{22}{7}, \quad 0.$$`,
          parts: [
            { label: "(a)", text: String.raw`Write down all the integers.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down all the irrational numbers.`, marks: 1 },
            { label: "(c)", text: String.raw`Write down the numbers that are rational but are not integers.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The number line shows the values of $x$ that satisfy an inequality.`,
          figure: {
            type: "plot",
            x: [-4.6, 5.6], y: [-0.9, 0.7], height: 120, axes: false,
            segments: [
              { from: [-4.5, 0], to: [5.5, 0], arrow: true, arrowStart: true, tone: "ink", thin: true },
              ...[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((k) => ({ from: [k, -0.1], to: [k, 0.1], tone: "ink", thin: true })),
              { from: [-1.88, 0.3], to: [3, 0.3], tone: "accent" },
            ],
            circles: [{ c: [-2, 0.3], r: 0.12, tone: "accent" }],
            points: [{ x: 3, y: 0.3 }],
            labels: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((k) => ({ x: k, y: -0.38, text: String(k).replace("-", "−"), style: "small" })),
            alt: "Number line from −4 to 5 with a bar from an open circle at −2 to a filled dot at 3.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the inequality shown, in terms of $x$.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the integer values of $x$ that satisfy this inequality.`, marks: 1 },
            { label: "(c)", text: String.raw`Arrange these numbers in increasing order: $\ -0.6, \ -\frac{2}{3}, \ -\sqrt{0.5}, \ -0.65$.`, marks: 2 },
            { label: "(d)", text: String.raw`Without using a calculator, evaluate $(-3)^2 - 4 \times (-2) \times 5 \div (-10)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N1-rounding-estimation",
      name: String.raw`Rounding, calculator work and estimation`,
      tests: String.raw`Rounding to a given number of decimal places or significant figures (zeros and place value), evaluating an expression on the calculator, and estimating by rounding each number to 1 significant figure with working shown.`,
      questions: [
        {
          stem: String.raw`Write each number correct to the accuracy stated.`,
          parts: [
            { label: "(a)", text: String.raw`$0.004\,059\,6$, correct to 3 significant figures.`, marks: 1 },
            { label: "(b)", text: String.raw`$30\,649$, correct to 2 significant figures.`, marks: 1 },
            { label: "(c)", text: String.raw`$7.9963$, correct to 2 decimal places.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Use your calculator to evaluate
$$\frac{\sqrt{5.6^2 + 3.17}}{2.4^3 - 1.09}.$$
Write down the first five digits on your calculator display.`, marks: 1 },
            { label: "(b)", text: String.raw`Write your answer to part (a) correct to 3 significant figures.`, marks: 1 },
            { label: "(c)", text: String.raw`By writing each number correct to 1 significant figure, estimate the value of
$$\frac{41.7 \times 0.0298}{\sqrt{8.91}}.$$
Show your working clearly.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N1-standard-form",
      name: String.raw`Standard form`,
      tests: String.raw`Converting to and from standard form, calculating with numbers in standard form, and using it in context (very large or very small measurements, unit prefixes).`,
      questions: [
        {
          stem: String.raw`Answer the whole of this question.`,
          parts: [
            { label: "(a)", text: String.raw`Write $0.000\,037\,2$ in standard form.`, marks: 1 },
            { label: "(b)", text: String.raw`Evaluate $\dfrac{6.4 \times 10^{8}}{1.6 \times 10^{-3}}$, giving your answer in standard form.`, marks: 1 },
            { label: "(c)", text: String.raw`The diameter of a virus is 120 nanometres, where 1 nanometre $= 10^{-9}$ metres. Express this diameter in metres, in standard form.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The mass of the Earth is $5.97 \times 10^{24}$ kg and the mass of the Moon is $7.35 \times 10^{22}$ kg.`,
          parts: [
            { label: "(a)", text: String.raw`Find the total mass of the Earth and the Moon, giving your answer in standard form correct to 3 significant figures.`, marks: 2 },
            { label: "(b)", text: String.raw`How many times as heavy as the Moon is the Earth? Give your answer correct to the nearest whole number.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N1-laws-of-indices",
      name: String.raw`Laws of indices: evaluate, simplify, solve`,
      tests: String.raw`Using zero, negative and fractional indices without a calculator, simplifying algebraic expressions to positive indices, and solving equations by writing both sides as powers of the same base.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, answer the whole of this question.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Evaluate $5^0 + 4^{-\frac{1}{2}}$.`, marks: 1 },
            { label: "(b)", text: String.raw`Evaluate $\left(\dfrac{27}{8}\right)^{-\frac{2}{3}}$.`, marks: 2 },
            { label: "(c)", text: String.raw`Simplify $\dfrac{(2x^3y^{-2})^3}{4x^{-1}y^2}$, giving your answer with positive indices.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, solve each equation.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$3^x = \dfrac{1}{81}$`, marks: 1 },
            { label: "(b)", text: String.raw`$8^x = 4^{x+1}$`, marks: 2 },
            { label: "(c)", text: String.raw`$9^{2x} \times 27^{1-x} = 3$`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N1-money-exchange",
      name: String.raw`Money and exchange rates`,
      tests: String.raw`Converting between currencies in both directions, changing money back at a different rate, and comparing prices in different currencies. Money answers to the nearest cent.`,
      questions: [
        {
          stem: String.raw`Mei is going on holiday to Japan. On the day she changes her money, the exchange rate is S\$1 = ¥113.20.`,
          parts: [
            { label: "(a)", text: String.raw`Mei changes S\$1500 into yen. How many yen does she receive?`, marks: 1 },
            { label: "(b)", text: String.raw`She spends ¥142 350 in Japan. When she returns, she changes the remaining yen back into Singapore dollars at the rate S\$1 = ¥115.50. How much does she receive? Give your answer correct to the nearest cent.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A handbag costs US\$289 in New York and S\$415 in Singapore. The exchange rate is S\$1 = US\$0.742.`,
          parts: [
            { label: "(a)", text: String.raw`Convert US\$289 to Singapore dollars, correct to the nearest cent.`, marks: 1 },
            { label: "(b)", text: String.raw`In which city is the handbag cheaper, and by how many Singapore dollars?`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
