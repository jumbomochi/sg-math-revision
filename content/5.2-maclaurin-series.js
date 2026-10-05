H2.addTopic({
  id: "5.2",
  title: "Maclaurin Series",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Building polynomial approximations to functions from the MF27 standard series or by repeated differentiation, with their ranges of validity, small angle approximations and numerical use.`,
  syllabus: {
    include: [
      String.raw`standard series expansion of $(1 + x)^n$ for any rational $n$, $\ee^x$, $\sin x$, $\cos x$ and $\ln(1 + x)$`,
      String.raw`derivation of the first few terms of the Maclaurin series by repeated differentiation, e.g. $\sec x$`,
      String.raw`derivation of the first few terms of the Maclaurin series by repeated implicit differentiation, e.g. $y^3 + y^2 + y = x^2 - 2x$`,
      String.raw`derivation of the first few terms of the Maclaurin series using standard series, e.g. $\ee^x\cos 2x$, $\ln\left(\dfrac{1 + x}{1 - x}\right)$`,
      String.raw`range of values of $x$ for which a standard series converges`,
      String.raw`concept of Maclaurin's series as an approximation of a function`,
      String.raw`small angle approximations: $\sin x \approx x$, $\cos x \approx 1 - \frac{1}{2}x^2$, $\tan x \approx x$`,
    ],
    exclude: [
      String.raw`problems involving derivation of the general term of a series`,
    ],
  },
  concepts: [
    {
      title: String.raw`Maclaurin's series`,
      body: String.raw`**(MF27)**
$$\mathrm{f}(x) = \mathrm{f}(0) + x\,\mathrm{f}'(0) + \frac{x^2}{2!}\mathrm{f}''(0) + \cdots + \frac{x^r}{r!}\mathrm{f}^{(r)}(0) + \cdots$$

The series is a polynomial that matches f and its derivatives at $x = 0$, so it approximates $\mathrm{f}(x)$ **well for $x$ close to 0** and generally worse further away. "Up to and including the term in $x^3$" means the term in $x^3$ must be found even if its coefficient is zero — say so.`,
    },
    {
      title: String.raw`Standard series and their validity`,
      body: String.raw`All in **(MF27)** — know where to find them and copy carefully.

| Series | Valid for |
| --- | --- |
| $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \cdots$ | $\lvert x\rvert < 1$ (all $x$ if $n$ is a positive integer) |
| $\ee^x = 1 + x + \frac{x^2}{2!} + \cdots$ | all $x$ |
| $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | all $x$ |
| $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | all $x$ |
| $\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ | $-1 < x \le 1$ |

$x$ is in **radians** throughout.`,
    },
    {
      title: String.raw`Adapting the binomial series`,
      body: String.raw`The binomial series needs the form $(1 + \text{small})^n$. Factor out the constant first:
$$(a + bx)^n = a^n\left(1 + \frac{b}{a}x\right)^n, \qquad \text{valid for } \left\lvert \frac{b}{a}x \right\rvert < 1 \iff \lvert x\rvert < \left\lvert\frac{a}{b}\right\rvert.$$

- Put brackets round the whole "$x$": $(1 - \frac{x}{2})^{-1/2}$ needs $\left(-\frac{x}{2}\right)^2$, not $-\frac{x^2}{2}$.
- For rational functions, split into **partial fractions** first, expand each, then add.`,
    },
    {
      title: String.raw`Combining series: products, quotients, logs`,
      body: String.raw`- **Products**: multiply truncated series and keep only terms up to the required power — no need to expand fully.
- **Quotients**: write $\frac{\mathrm{g}(x)}{1 + \mathrm{h}(x)} = \mathrm{g}(x)\,(1 + \mathrm{h}(x))^{-1}$ and use the binomial series.
- **Logs**: use log laws first, e.g. $\ln\frac{1+x}{1-x} = \ln(1+x) - \ln(1-x)$, or factorise $\ln(1 + 2x - 3x^2) = \ln(1+3x) + \ln(1-x)$.
- **Range of validity** of a combination is the **intersection** of the ranges of the parts. Watch the end-points of $\ln$: $\ln(1 - x)$ is valid for $-1 \le x < 1$.`,
    },
    {
      title: String.raw`Composite functions`,
      body: String.raw`To expand $\mathrm{f}(\mathrm{g}(x))$ with standard series, substitute the series of $\mathrm{g}$ into the series of $\mathrm{f}$, where $\mathrm{g}(x)$ must be **small** when $x$ is small.

- $\ee^{\sin x}$: let $u = \sin x \approx x - \frac{x^3}{6}$, then use $\ee^u = 1 + u + \frac{u^2}{2} + \cdots$.
- $\ee^{\cos x}$: $\cos x \to 1$, not 0, so write $\ee^{\cos x} = \ee \cdot \ee^{\cos x - 1}$ with $u = \cos x - 1 \approx -\frac{x^2}{2}$.
- Decide in advance how many terms of $u$ you need: if $u$ starts at $x^2$, then $u^3$ only contributes from $x^6$.`,
    },
    {
      title: String.raw`Repeated (and implicit) differentiation`,
      body: String.raw`When standard series are awkward (e.g. $\sec x$), find $\mathrm{f}(0), \mathrm{f}'(0), \mathrm{f}''(0), \ldots$ and use Maclaurin's formula.

- Work with a **relation** rather than explicit derivatives: from $y = \sec x$, show $\frac{\dd^2 y}{\dd x^2} = 2y^3 - y$, then differentiate that implicitly.
- Each differentiation of a product like $y\frac{\dd y}{\dd x}$ needs the product rule: $\frac{\dd}{\dd x}\left(y\frac{\dd y}{\dd x}\right) = \left(\frac{\dd y}{\dd x}\right)^2 + y\frac{\dd^2 y}{\dd x^2}$.
- Substitute $x = 0$ **after** each differentiation to get the values in order: $y(0)$, then $y'(0)$, then $y''(0)$…
- For an implicitly defined curve, first find $y$ when $x = 0$ (and justify the root you choose).`,
    },
    {
      title: String.raw`Small angle approximations`,
      body: String.raw`For small $x$ (radians), from the series:
$$\sin x \approx x, \qquad \cos x \approx 1 - \tfrac{1}{2}x^2, \qquad \tan x \approx x.$$
Memorise these (they follow from MF27).

- Replace the angle carefully: $\cos 2\theta \approx 1 - 2\theta^2$, $\sin 3\theta \approx 3\theta$.
- For angles like $\frac{\pi}{3} + \theta$, use the **addition formulae** (MF27) first, then approximate $\sin\theta$ and $\cos\theta$.
- In triangles, small angle questions usually go through the cosine rule or sine rule, then a binomial expansion of a square root or reciprocal.
- Keep terms only up to the order requested ("neglect $\theta^3$ and higher powers").`,
    },
    {
      title: String.raw`Series as approximations`,
      body: String.raw`- Using a series to estimate a value or integral: integrate/evaluate the **polynomial**, and compare with the GC value of the original function.
- The approximation is good when $x$ (or the whole interval of integration) is **close to 0**, because the neglected terms $x^4, x^5, \ldots$ are then very small.
- Outside the range of validity the series does not converge, so more terms do **not** help — explain using the stated range.
- A good explanation names the interval: "the approximation is good because every $x$ in the interval is close to 0, so the neglected higher powers of $x$ are negligible."
- Derivation of the general ($r$th) term is **not** required.`,
    },
  ],
  archetypes: [
    {
      id: "5.2-standard-products",
      name: String.raw`Products and quotients of standard series`,
      tests: String.raw`Multiplying truncated MF27 series (or rewriting a quotient with a negative power) and collecting terms to a stated power, with the combined range of validity.`,
      questions: [
        {
          stem: String.raw`Using standard series from the List of Formulae (MF27),`,
          parts: [
            { label: "(i)", text: String.raw`find the Maclaurin series for $\ee^{x}\cos 2x$, up to and including the term in $x^3$,`, marks: 3 },
            { label: "(ii)", text: String.raw`hence find the Maclaurin series for $\left(\ee^{x} - \ee^{-x}\right)\cos 2x$, up to and including the term in $x^3$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \dfrac{\cos x}{\sqrt{1 + 2x}}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the series expansion of $\mathrm{f}(x)$ in ascending powers of $x$, up to and including the term in $x^2$.`, marks: 4 },
            { label: "(ii)", text: String.raw`State the set of values of $x$ for which the expansion is valid.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "5.2-binomial-adapted",
      name: String.raw`Binomial series for $(a + bx)^n$ and partial fractions`,
      tests: String.raw`Rewriting as $a^n(1 + \frac{b}{a}x)^n$ (often after partial fractions), expanding, stating the range of validity, and substituting a suitable value of $x$ to approximate a surd.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \dfrac{x + 5}{(1 - x)(2 + x)}$.`,
          parts: [
            { label: "(i)", text: String.raw`Express $\mathrm{f}(x)$ in partial fractions.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the series expansion of $\mathrm{f}(x)$ in ascending powers of $x$, up to and including the term in $x^3$.`, marks: 4 },
            { label: "(iii)", text: String.raw`State the set of values of $x$ for which the expansion is valid.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`It is given that $\mathrm{g}(x) = \dfrac{1}{\sqrt{2 - x}}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that, for small $x$, $\mathrm{g}(x) \approx \dfrac{1}{\sqrt{2}}\left(1 + \dfrac{1}{4}x + \dfrac{3}{32}x^2\right)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State the range of values of $x$ for which the expansion of $\mathrm{g}(x)$ is valid.`, marks: 1 },
            { label: "(iii)", text: String.raw`By substituting $x = -\frac{1}{4}$ into your expansion, show that $\sqrt{2} \approx \dfrac{1449}{1024}$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.2-log-series",
      name: String.raw`Logarithmic series and their validity`,
      tests: String.raw`Using log laws (quotients, factorised quadratics) to reduce to $\ln(1 + kx)$ series, intersecting the ranges of validity with care at the end-points, and using the result to approximate a logarithm.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \ln\left(\dfrac{1 + x}{1 - x}\right)$.`,
          parts: [
            { label: "(i)", text: String.raw`Using the standard series for $\ln(1 + x)$, find the first three non-zero terms in the Maclaurin series for $\mathrm{f}(x)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`State the range of values of $x$ for which the series is valid.`, marks: 1 },
            { label: "(iii)", text: String.raw`By choosing a suitable value of $x$, use your series to find an approximation for $\ln 2$, giving your answer correct to 4 decimal places. Compare your answer with the value given by your calculator.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`It is given that $y = \ln(1 + 2x - 3x^2)$.`,
          parts: [
            { label: "(i)", text: String.raw`By first factorising $1 + 2x - 3x^2$, find the Maclaurin series for $y$, up to and including the term in $x^3$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the range of values of $x$ for which the series is valid.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.2-composite-first-nonzero",
      name: String.raw`Composite functions, first non-zero terms and limits`,
      tests: String.raw`Substituting one standard series into another (choosing a small "inner" quantity), truncating correctly, and using leading non-zero terms to evaluate a limit as $x \to 0$.`,
      questions: [
        {
          stem: String.raw`Using standard series from the List of Formulae (MF27),`,
          parts: [
            { label: "(i)", text: String.raw`show that, for small $x$, $\ee^{\cos x} \approx \ee\left(1 - \frac{1}{2}x^2 + \frac{1}{6}x^4\right)$,`, marks: 4 },
            { label: "(ii)", text: String.raw`hence, by differentiating, find the first two non-zero terms in the Maclaurin series for $\ee^{\cos x}\sin x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Using standard series,`,
          parts: [
            { label: "(i)", text: String.raw`find the Maclaurin series for $\ee^{2x} - 1 - 2x$, up to and including the term in $x^3$,`, marks: 2 },
            { label: "(ii)", text: String.raw`write down the first two non-zero terms in the Maclaurin series for $1 - \cos x$,`, marks: 1 },
            { label: "(iii)", text: String.raw`hence find the value of $\displaystyle\lim_{x \to 0} \frac{\ee^{2x} - 1 - 2x}{1 - \cos x}$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.2-repeated-differentiation",
      name: String.raw`Maclaurin series by repeated differentiation`,
      tests: String.raw`Establishing a derivative relation ("show that") and differentiating it repeatedly to evaluate $y(0), y'(0), \ldots$, then using Maclaurin's formula; often followed by a deduced series or a check with standard series.`,
      questions: [
        {
          stem: String.raw`It is given that $y = \sec x$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd^2 y}{\dd x^2} = 2y^3 - y$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the Maclaurin series for $\sec x$, up to and including the term in $x^4$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Deduce the first two non-zero terms in the Maclaurin series for $\sec x\tan x$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`It is given that $y = \ee^{\sin x}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd^2 y}{\dd x^2} = \dfrac{\dd y}{\dd x}\cos x - y\sin x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`By further differentiation, find the Maclaurin series for $y$, up to and including the term in $x^4$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Verify the first three terms of your series by using standard series from the List of Formulae (MF27).`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.2-implicit-repeated-differentiation",
      name: String.raw`Repeated implicit differentiation`,
      tests: String.raw`Differentiating an implicit equation (or a relation derived from an explicit one, e.g. via $\ee^y$) several times, finding the values of $y$ and its derivatives at $x = 0$, and deducing related series.`,
      questions: [
        {
          stem: String.raw`The variables $x$ and $y$ are related by $y^3 + y^2 + 2y = x^2 + 2x$, and $y = 0$ when $x = 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $(3y^2 + 2y + 2)\dfrac{\dd^2 y}{\dd x^2} + (6y + 2)\left(\dfrac{\dd y}{\dd x}\right)^2 = 2$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the first two non-zero terms in the Maclaurin series for $y$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`It is given that $y = \ln(1 + \sin x)$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd^2 y}{\dd x^2} + \ee^{-y} = 0$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find the Maclaurin series for $y$, up to and including the term in $x^4$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Write down the Maclaurin series for $\ln(1 - \sin x)$, up to and including the term in $x^4$.`, marks: 1 },
            { label: "(iv)", text: String.raw`Hence find the Maclaurin series for $\ln(\cos x)$, up to and including the term in $x^4$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.2-unknown-constants",
      name: String.raw`Finding unknown constants from a given expansion`,
      tests: String.raw`Expanding in terms of unknown constants and comparing coefficients with a given series to set up and solve simultaneous equations, then using the constants for a further coefficient and the range of validity.`,
      questions: [
        {
          stem: String.raw`The first three terms in the series expansion of $(1 + ax)^n$, in ascending powers of $x$, are $1 - 6x + 27x^2$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the values of the constants $a$ and $n$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the coefficient of $x^3$ in the expansion.`, marks: 2 },
            { label: "(iii)", text: String.raw`State the set of values of $x$ for which the expansion is valid.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The series expansion of $\ee^{ax}\sqrt{1 + bx}$, where $a$ and $b$ are non-zero constants, begins $1 + 2x + x^2$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $a^2 - 4a + 3 = 0$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Given further that $b > 0$, find the values of $a$ and $b$, and the coefficient of $x^3$ in the expansion.`, marks: 3 },
            { label: "(iii)", text: String.raw`For these values of $a$ and $b$, state the range of values of $x$ for which the expansion is valid.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "5.2-small-angle",
      name: String.raw`Small angle approximations`,
      tests: String.raw`Replacing $\sin$, $\cos$, $\tan$ of small angles by their approximations (after addition formulae if needed), often inside a triangle via the cosine rule, then tidying with a binomial expansion.`,
      questions: [
        {
          stem: String.raw`It is given that $x$ is sufficiently small for $x^3$ and higher powers of $x$ to be neglected.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\cos x}{1 + \sin 2x} \approx 1 - 2x + \dfrac{7}{2}x^2$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Use this approximation to estimate $\dfrac{\cos 0.1}{1 + \sin 0.2}$, and find the percentage error in your estimate compared with the value given by your calculator.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In triangle $PQR$, $PQ = 2$ cm, $PR = 1$ cm and angle $QPR = \left(\frac{\pi}{3} + \theta\right)$ radians, where $\theta$ is a small angle.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $QR^2 \approx 3 + 2\sqrt{3}\,\theta + \theta^2$.`, marks: 4 },
            { label: "(ii)", text: String.raw`Hence find an approximation for $QR$ in the form $a + b\theta$, where $a$ and $b$ are exact constants to be determined.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "5.2-approximation-accuracy",
      name: String.raw`Series as an approximation: integrals, accuracy and GC comparison`,
      tests: String.raw`Using a truncated series to estimate an integral or value, comparing with the GC, explaining why the approximation is good for small $x$ and fails outside the range of validity, and finding graphically where the error is within a tolerance.`,
      questions: [
        {
          stem: String.raw`It is given that $\mathrm{f}(x) = \dfrac{\cos x}{1 + x}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the Maclaurin series for $\mathrm{f}(x)$, up to and including the term in $x^3$, is $1 - x + \frac{1}{2}x^2 - \frac{1}{2}x^3$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Use this series to find an approximate value of $\displaystyle\int_0^{0.2} \frac{\cos x}{1 + x}\,\dd x$, giving your answer correct to 4 decimal places.`, marks: 2 },
            { label: "(iii)", text: String.raw`Use your calculator to find $\displaystyle\int_0^{0.2} \frac{\cos x}{1 + x}\,\dd x$ correct to 4 decimal places, and explain why the approximation in part (ii) is good.`, marks: 2 },
            { label: "(iv)", text: String.raw`Explain why the series in part (i) should not be used to approximate $\displaystyle\int_0^{2} \frac{\cos x}{1 + x}\,\dd x$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Let $\mathrm{P}(x)$ denote the first three non-zero terms of the Maclaurin series for $\ln(1 + 2x)$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down $\mathrm{P}(x)$ and state the range of values of $x$ for which the series for $\ln(1 + 2x)$ is valid.`, marks: 2 },
            { label: "(ii)", text: String.raw`On the same diagram, sketch the graphs of $y = \ln(1 + 2x)$ and $y = \mathrm{P}(x)$ for $-0.5 < x \le 0.5$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Use your calculator to find the set of values of $x$, for $-0.5 < x \le 0.5$, for which $\mathrm{P}(x)$ differs from $\ln(1 + 2x)$ by less than 0.05. Give the end-points correct to 3 decimal places.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
