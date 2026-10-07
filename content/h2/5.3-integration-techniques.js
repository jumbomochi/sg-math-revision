H2.addTopic({
  id: "5.3",
  title: "Integration Techniques",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Standard integrals, trig identities, partial fractions, substitution and integration by parts.`,
  syllabus: {
    include: [
      String.raw`integration of $\mathrm{f}'(x)[\mathrm{f}(x)]^n$ (including $n = -1$) and $\mathrm{f}'(x)\,\ee^{\mathrm{f}(x)}$`,
      String.raw`integration of $\sin^2 x$, $\cos^2 x$ and $\tan^2 x$`,
      String.raw`integration of $\dfrac{1}{a^2 + x^2}$, $\dfrac{1}{\sqrt{a^2 - x^2}}$, $\dfrac{1}{a^2 - x^2}$ and $\dfrac{1}{x^2 - a^2}$`,
      String.raw`integration by a given substitution`,
      String.raw`integration by parts`,
    ],
    exclude: [
      String.raw`reduction formulae`,
    ],
  },
  concepts: [
    {
      title: String.raw`Reverse chain rule: spot $\mathrm{f}'$ next to a function of $\mathrm{f}$`,
      body: String.raw`Before reaching for substitution or parts, check whether the integrand is (a constant multiple of) a derivative times a function of the inside:

$$\int \mathrm{f}'(x)[\mathrm{f}(x)]^n \,\dd x = \frac{[\mathrm{f}(x)]^{n+1}}{n+1} + C \ (n \ne -1), \qquad \int \frac{\mathrm{f}'(x)}{\mathrm{f}(x)}\,\dd x = \ln|\mathrm{f}(x)| + C, \qquad \int \mathrm{f}'(x)\,\ee^{\mathrm{f}(x)}\,\dd x = \ee^{\mathrm{f}(x)} + C.$$

- Adjust constants only: $\int x\,\ee^{x^2}\,\dd x = \frac{1}{2}\ee^{x^2} + C$. You **cannot** fix a missing $x$ this way — $\int \ee^{x^2}\,\dd x$ has no elementary answer.
- Keep the modulus in $\ln|\mathrm{f}(x)|$ unless $\mathrm{f}(x) > 0$ is clear (e.g. $\ln(x^2 + 1)$). Drop it only with a reason.
- Linear inside: $\int \mathrm{f}(ax + b)\,\dd x = \frac{1}{a}\mathrm{F}(ax + b) + C$.
- $\int \tan x\,\dd x = \ln|\sec x| + C$ and $\int \sec x\,\dd x = \ln|\sec x + \tan x| + C$ are in **(MF27)**.`,
    },
    {
      title: String.raw`Trigonometric integrands: use identities first`,
      body: String.raw`Powers and products of trig functions are rewritten as sums before integrating.

| Integrand | Rewrite as | Source |
| $\sin^2 x$ | $\frac{1}{2}(1 - \cos 2x)$ | from $\cos 2A$ (MF27) |
| $\cos^2 x$ | $\frac{1}{2}(1 + \cos 2x)$ | from $\cos 2A$ (MF27) |
| $\tan^2 x$ | $\sec^2 x - 1$ | memorise |
| $\sin mx \cos nx$ etc. | sum/difference of sines or cosines | factor formulae — memorise, or add $\sin(A + B)$ and $\sin(A - B)$ from (MF27) |

- $\cos^4 x$: square $\frac{1}{2}(1 + \cos 2x)$, then use the identity again on $\cos^2 2x$.
- Odd powers such as $\sin^3 x$ or $\sin x \cos^4 x$: peel off one factor and use $\mathrm{f}'(x)[\mathrm{f}(x)]^n$, e.g. $\sin^3 x = \sin x - \sin x \cos^2 x$.
- Work in **radians**; $\int \cos kx \,\dd x = \frac{1}{k}\sin kx + C$ — the $\frac{1}{k}$ is the most common slip.`,
      figure: {
        type: "plot",
        x: [-0.4, 7.2], y: [-0.35, 1.4],
        height: 210,
        curves: [
          { fn: "x => Math.sin(x)**2", domain: [0, 6.9] },
          { fn: "x => Math.cos(x)**2", domain: [0, 6.9], tone: "good", dashed: true },
        ],
        lines: [{ y: 0.5 }],
        xTicks: [{ x: 1.5708, label: "π/2" }, { x: 3.1416, label: "π" }, { x: 4.7124, label: "3π/2" }, { x: 6.2832, label: "2π" }],
        yTicks: [{ y: 0.5, label: "½" }, { y: 1, label: "1" }],
        labels: [
          { x: 1.5708, y: 1, text: "y = sin²x", pos: "n", style: "italic", tone: "accent" },
          { x: 3.1416, y: 1, text: "y = cos²x", pos: "n", style: "italic", tone: "good" },
        ],
        caption: String.raw`$\sin^2 x = \frac{1}{2}(1 - \cos 2x)$ and $\cos^2 x = \frac{1}{2}(1 + \cos 2x)$: cosine waves of period $\pi$ about $y = \frac{1}{2}$`,
        alt: "Graphs of y = sin squared x and y = cos squared x, each oscillating between 0 and 1 about the line y = 1/2 with period pi",
      },
    },
    {
      title: String.raw`Standard forms with $a^2 \pm x^2$ (MF27)`,
      body: String.raw`These four are given in **(MF27)** — quote them, do not derive them:

$$\int \frac{1}{x^2 + a^2}\,\dd x = \frac{1}{a}\tan^{-1}\frac{x}{a}, \qquad \int \frac{1}{\sqrt{a^2 - x^2}}\,\dd x = \sin^{-1}\frac{x}{a}\ (|x| < a),$$

$$\int \frac{1}{x^2 - a^2}\,\dd x = \frac{1}{2a}\ln\left(\frac{x - a}{x + a}\right)\ (x > a), \qquad \int \frac{1}{a^2 - x^2}\,\dd x = \frac{1}{2a}\ln\left(\frac{a + x}{a - x}\right)\ (|x| < a).$$

- **Coefficient of $x^2$ not 1**: factor it out first, e.g. $\dfrac{1}{9 + 4x^2} = \dfrac{1}{4}\cdot\dfrac{1}{\frac{9}{4} + x^2}$, so $a = \frac{3}{2}$.
- **Quadratic with an $x$ term**: complete the square, e.g. $x^2 + 4x + 13 = (x + 2)^2 + 3^2$ and $5 + 4x - x^2 = 3^2 - (x - 2)^2$, then use the form with $x$ replaced by $x + 2$ or $x - 2$.
- The $\ln$ forms are partial fractions in disguise; either route earns full credit.`,
    },
    {
      title: String.raw`Linear numerator over a quadratic`,
      body: String.raw`For $\displaystyle\int \frac{px + q}{ax^2 + bx + c}\,\dd x$ with a quadratic that does not factorise, split the numerator into a multiple of the derivative of the denominator plus a constant:

$$px + q = A(2ax + b) + B.$$

The first piece gives $A\ln|ax^2 + bx + c|$; the second needs completing the square and a $\tan^{-1}$ (or $\sin^{-1}$ when the denominator is $\sqrt{\ \cdot\ }$, using $\mathrm{f}'[\mathrm{f}]^{-1/2}$ for the first piece). Compare coefficients to find $A$ and $B$ — show this line.`,
    },
    {
      title: String.raw`Partial fractions, then integrate`,
      body: String.raw`O-level Additional Mathematics partial fractions are assumed knowledge.

The partial fraction forms for distinct linear, repeated linear and $x^2 + c^2$ factors are in **(MF27)**.

1. If the degree of the numerator $\ge$ degree of the denominator, **divide first** (improper fraction).
2. Decompose: $\dfrac{A}{x - a}$, $\dfrac{B}{x - b}$; repeated factor $\dfrac{A}{x - a} + \dfrac{B}{(x - a)^2}$; irreducible quadratic $\dfrac{Bx + C}{x^2 + c^2}$.
3. Integrate each piece: $\ln|\,\cdot\,|$, power rule ($\int (x - a)^{-2}\,\dd x = -(x - a)^{-1}$), or $\ln$ plus $\tan^{-1}$.

For definite integrals, combine the logarithms into a single $\ln$ when asked for "the form $a + \ln b$". Always check the decomposition by recombining or substituting a value of $x$.`,
    },
    {
      title: String.raw`Integration by a given substitution`,
      body: String.raw`The substitution is always given in the question. Change **everything**:

- the integrand, written in the new variable;
- $\dd x$, via $\dfrac{\dd x}{\dd \theta}$ or $\dfrac{\dd u}{\dd x}$ (e.g. $x = 2\sin\theta \Rightarrow \dd x = 2\cos\theta\,\dd\theta$);
- for a **definite** integral, the **limits** — then never return to $x$;
- for an **indefinite** integral, substitute back so the answer is in terms of $x$ (draw a right-angled triangle to rewrite $\sin 2\theta$, $\cos\theta$, etc.).

Simplify with care: $\sqrt{4 - 4\sin^2\theta} = 2\cos\theta$ is valid because $\cos\theta \ge 0$ on the chosen interval of $\theta$. "Exact value" means surds, $\pi$, $\ln$, $\ee$ — no decimals.`,
    },
    {
      title: String.raw`Integration by parts`,
      body: String.raw`$$\int u\,\frac{\dd v}{\dd x}\,\dd x = uv - \int v\,\frac{\dd u}{\dd x}\,\dd x \qquad \text{(memorise — not in MF27)}$$

Choose $u$ to become simpler on differentiation. Rough priority for $u$: **L**ogarithms, **I**nverse trig, **A**lgebraic (powers of $x$), **T**rig, **E**xponentials.

- $x^2\ee^{x}$, $x^2\sin x$: apply parts **twice**, keeping the same type of choice for $u$.
- $\ln x$, $\tan^{-1}x$, $\sin^{-1}x$ alone: write as $1 \cdot \ln x$ and take $u = \ln x$, $\dfrac{\dd v}{\dd x} = 1$.
- $x\sec^2 x$: $u = x$, $v = \tan x$, then $\int \tan x\,\dd x$ from (MF27).
- For definite integrals evaluate $[uv]_a^b$ straight away — it often vanishes or simplifies.`,
    },
    {
      title: String.raw`Cyclic integrals: $\ee^{ax}\sin bx$ and $\ee^{ax}\cos bx$`,
      body: String.raw`Let $I = \int \ee^{ax}\sin bx\,\dd x$. Integrate by parts twice (same choice of $u$ both times — e.g. always $u = $ the trig function); the original integral reappears:

$$I = (\text{expression}) - k I \ \Rightarrow\ I = \frac{\text{expression}}{1 + k} + C.$$

- Swapping the choice of $u$ on the second application simply undoes the first step and gives $I = I$.
- Add the constant $C$ only at the end, after solving for $I$.
- Integrands such as $\ee^{2x}\sin^2 x$ are first rewritten with $\sin^2 x = \frac{1}{2}(1 - \cos 2x)$.`,
    },
    {
      title: String.raw`Presentation and GC checks`,
      body: String.raw`- Every indefinite integral needs $+\,C$; one missing constant can cost a mark.
- In "Without using a calculator" questions, show every substitution, every limit and the simplification to the exact form.
- **Check any definite integral on the GC** (fnInt / $\int$ template): evaluate your exact answer as a decimal and compare. This catches sign errors and lost factors of $\frac{1}{2}$.
- "Hence" means use the previous result: a derivative found in part (i) is usually the integrand (or the $\dfrac{\dd v}{\dd x}$) needed in part (ii).
- Reduction formulae ($I_n$ in terms of $I_{n-1}$) are outside the syllabus.`,
    },
  ],
  archetypes: [
    {
      id: "5.3-recognition-fprime-f",
      name: String.raw`Recognition: $\mathrm{f}'[\mathrm{f}]^n$, $\mathrm{f}'/\mathrm{f}$ and $\mathrm{f}'\ee^{\mathrm{f}}$`,
      tests: String.raw`Spotting that the integrand is a derivative multiplied by a function of the inner expression, adjusting only constant factors, and handling $\ln|\,\cdot\,|$ correctly. Usually a short opening question with several unrelated integrals.`,
      questions: [
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int x(3x^2 + 1)^5\,\dd x$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\displaystyle\int x^2\,\ee^{x^3 + 1}\,\dd x$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\displaystyle\int \sin x\cos^3 x\,\dd x$,`, marks: 2 },
            { label: "(d)", text: String.raw`$\displaystyle\int \frac{4x + 2}{x^2 + x + 3}\,\dd x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, find the exact value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int_0^{\frac{\pi}{2}} \cos x\,\ee^{\sin x}\,\dd x$`, marks: 2 },
            { label: "(b)", text: String.raw`$\displaystyle\int_1^{\ee} \frac{(\ln x)^2}{x}\,\dd x$`, marks: 2 },
            { label: "(c)", text: String.raw`$\displaystyle\int_0^{\sqrt{3}} \frac{x}{\sqrt{1 + x^2}}\,\dd x$`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.3-trig-identities",
      name: String.raw`Trigonometric integrals via identities and factor formulae`,
      tests: String.raw`Converting $\sin^2$, $\cos^2$, $\tan^2$, higher even powers and products such as $\sin 3x\cos x$ into sums using the double-angle formulae (MF27) and the factor formulae (memorised, or built from the compound-angle formulae) before integrating. Recognise it whenever a power or product of trig functions has no obvious $\mathrm{f}'$ factor.`,
      questions: [
        {
          stem: String.raw`Without using a calculator,`,
          calculator: false,
          parts: [
            { label: "(i)", text: String.raw`show that $\displaystyle\int_0^{\frac{\pi}{4}} \tan^2 x\,\dd x = 1 - \frac{\pi}{4}$,`, marks: 2 },
            { label: "(ii)", text: String.raw`find $\displaystyle\int \sin^2 3x\,\dd x$,`, marks: 2 },
            { label: "(iii)", text: String.raw`find the exact value of $\displaystyle\int_0^{\frac{\pi}{2}} \sin 3x\cos x\,\dd x$.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(i)", text: String.raw`Show that $\cos^4 x = \dfrac{3}{8} + \dfrac{1}{2}\cos 2x + \dfrac{1}{8}\cos 4x$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the exact value of $\displaystyle\int_0^{\frac{\pi}{2}} \cos^4 x\,\dd x$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $\displaystyle\int \sin^2 x\cos^2 x\,\dd x$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.3-standard-forms-completing-square",
      name: String.raw`Standard forms $\frac{1}{a^2 \pm x^2}$, $\frac{1}{\sqrt{a^2 - x^2}}$, with completing the square`,
      tests: String.raw`Matching an integrand to an MF27 form after factoring out a coefficient or completing the square. Signalled by a constant over a quadratic (or the square root of one) that does not factorise nicely.`,
      questions: [
        {
          stem: String.raw`Find`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int \frac{1}{x^2 + 4x + 13}\,\dd x$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\displaystyle\int \frac{1}{\sqrt{5 + 4x - x^2}}\,\dd x$.`, marks: 3 },
            { label: "(c)", text: String.raw`Without using a calculator, find the exact value of $\displaystyle\int_0^{\frac{3}{4}} \frac{1}{\sqrt{9 - 4x^2}}\,\dd x$.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(i)", text: String.raw`Find the exact value of $\displaystyle\int_0^1 \frac{1}{4 - x^2}\,\dd x$, giving your answer in the form $k\ln 3$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $\displaystyle\int \frac{2x + 5}{x^2 + 2x + 5}\,\dd x$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.3-partial-fractions",
      name: String.raw`Partial fractions then integrate`,
      tests: String.raw`Decomposing a rational function (distinct linear, repeated linear, irreducible quadratic, or improper) and integrating each term, usually to an exact answer of the form $a + \ln b$ or involving $\pi$.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Express $\dfrac{x^2 + 2}{(x + 1)(x - 2)}$ in partial fractions.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence show that $\displaystyle\int_3^4 \frac{x^2 + 2}{(x + 1)(x - 2)}\,\dd x = 1 + \ln\frac{16}{5}$.`, marks: 3 },
          ],
        },
        {
          parts: [
            { label: "(a)", text: String.raw`Find the exact value of $\displaystyle\int_2^3 \frac{3x + 1}{(x + 1)^2(x - 1)}\,\dd x$.`, marks: 5 },
            { label: "(b)", text: String.raw`Express $\dfrac{x^2 + 2x + 5}{(x + 1)(x^2 + 1)}$ in partial fractions. Hence find the exact value of $\displaystyle\int_0^1 \frac{x^2 + 2x + 5}{(x + 1)(x^2 + 1)}\,\dd x$.`, marks: 6 },
          ],
        },
      ],
    },
    {
      id: "5.3-given-substitution",
      name: String.raw`Integration by a given substitution (exact answers)`,
      tests: String.raw`Carrying out a stated substitution completely — converting $\dd x$, changing the limits and simplifying — to obtain an exact value or an indefinite integral in terms of $x$. Trigonometric substitutions for $\sqrt{a^2 - x^2}$ and $(1 + x^2)^{-n}$ are common.`,
      questions: [
        {
          stem: String.raw`Without using a calculator, use the substitution $x = 2\sin\theta$ to find the exact value of
$$\int_0^1 \frac{x^2}{\sqrt{4 - x^2}}\,\dd x.$$`,
          calculator: false,
          marks: 5,
        },
        {
          parts: [
            { label: "(i)", text: String.raw`Using the substitution $u = \sqrt{x}$, find the exact value of $\displaystyle\int_1^4 \frac{1}{x + \sqrt{x}}\,\dd x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Using the substitution $x = \tan\theta$, show that $\displaystyle\int_0^1 \frac{1}{(1 + x^2)^2}\,\dd x = \frac{\pi}{8} + \frac{1}{4}$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Using the substitution $u = \ee^x + 1$, find $\displaystyle\int \frac{\ee^{2x}}{\ee^x + 1}\,\dd x$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.3-by-parts",
      name: String.raw`Integration by parts, including applying it twice`,
      tests: String.raw`Choosing $u$ and $\dfrac{\dd v}{\dd x}$ correctly for products such as $x^2\ee^{-x}$, $x^2\ln x$, $x\cos 2x$ and $x\sec^2 x$, applying the formula twice where needed, and evaluating exact definite values.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Find $\displaystyle\int x^2\ee^{-x}\,\dd x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the exact value of $\displaystyle\int_1^{\ee} x^2\ln x\,\dd x$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, find the exact value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int_0^{\frac{\pi}{2}} x\cos 2x\,\dd x$`, marks: 3 },
            { label: "(b)", text: String.raw`$\displaystyle\int_0^{\frac{\pi}{4}} x\sec^2 x\,\dd x$`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.3-by-parts-cyclic",
      name: String.raw`Cyclic integration by parts: $\ee^{ax}\sin bx$, $\ee^{ax}\cos bx$`,
      tests: String.raw`Applying parts twice so that the original integral reappears, then solving for it. Often extended by a trig identity, e.g. $\ee^{2x}\sin^2 x$.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Find $\displaystyle\int \ee^{2x}\cos x\,\dd x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence find $\displaystyle\int \ee^{2x}\sin^2\left(\frac{x}{2}\right)\dd x$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, show that $\displaystyle\int_0^{\pi} \ee^{x}\sin x\,\dd x = \frac{1}{2}(\ee^{\pi} + 1)$.`,
          calculator: false,
          marks: 5,
        },
      ],
    },
    {
      id: "5.3-by-parts-ln-inverse-trig",
      name: String.raw`Parts with $1 \cdot u$: $\ln x$ and inverse trigonometric functions`,
      tests: String.raw`Integrating a lone $\ln$ or inverse trig function by writing it as $1 \times$ the function, then dealing with the resulting algebraic integral (often by $\mathrm{f}'/\mathrm{f}$ or $\mathrm{f}'[\mathrm{f}]^n$).`,
      questions: [
        {
          stem: String.raw`Without using a calculator, find the exact value of each of the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int_0^1 \tan^{-1}x\,\dd x$`, marks: 4 },
            { label: "(b)", text: String.raw`$\displaystyle\int_0^{\frac{1}{2}} \sin^{-1}x\,\dd x$`, marks: 4 },
          ],
        },
        {
          parts: [
            { label: "(i)", text: String.raw`Find $\displaystyle\int x\tan^{-1}x\,\dd x$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Show that $\displaystyle\int_0^1 \ln(x^2 + 1)\,\dd x = \ln 2 - 2 + \frac{\pi}{2}$.`, marks: 5 },
          ],
        },
      ],
    },
    {
      id: "5.3-hence-and-mixed",
      name: String.raw`"Hence" integration and choosing the method`,
      tests: String.raw`Using a derivative found in an earlier part as the integrand or as $\dfrac{\dd v}{\dd x}$, and deciding between recognition, substitution and parts when integrals that look alike need different methods.`,
      questions: [
        {
          parts: [
            { label: "(i)", text: String.raw`Differentiate $\ee^{x^2}$ with respect to $x$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Hence find $\displaystyle\int x^3\ee^{x^2}\,\dd x$.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Find the exact value of`,
          parts: [
            { label: "(a)", text: String.raw`$\displaystyle\int_0^1 \frac{x^3}{1 + x^4}\,\dd x$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\displaystyle\int_0^1 \frac{x}{1 + x^4}\,\dd x$, using the substitution $u = x^2$,`, marks: 3 },
            { label: "(c)", text: String.raw`$\displaystyle\int_0^{\frac{\pi}{2}} x^2\sin x\,\dd x$.`, marks: 4 },
          ],
        },
      ],
    },
  ],
});
