H2.addTopic({
  id: "A8",
  title: "Complex Numbers in Algebra",
  summary: String.raw`Roots of unity and their sums and products, trigonometric sums and products, binomial sums by roots of unity, polynomials with complex roots, modulus inequalities, and recurrences solved with complex numbers.`,
  concepts: [
    {
      title: String.raw`Polar form and De Moivre`,
      body: String.raw`Every non-zero complex number is $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$ with $r = |z|$.

- Multiplying multiplies moduli and adds arguments, so $z^n = r^n e^{in\theta}$ (**De Moivre**).
- $z\bar z = |z|^2$, and on the unit circle $\bar z = \dfrac1z$.
- If $P$ has real coefficients then $P(\bar z) = \overline{P(z)}$, so $P(z)P(\bar z) = |P(z)|^2$.
- Example: $1 + i = \sqrt2\, e^{i\pi/4}$, so $(1 + i)^8 = 16e^{2\pi i} = 16$.`,
    },
    {
      title: String.raw`Roots of unity`,
      body: String.raw`Let $\omega = e^{2\pi i/n}$. The $n$-th roots of unity $1, \omega, \ldots, \omega^{n-1}$ are the vertices of a regular $n$-gon on the unit circle, and
$$x^n - 1 = \prod_{k=0}^{n-1}(x - \omega^k), \qquad 1 + x + \cdots + x^{n-1} = \prod_{k=1}^{n-1}(x - \omega^k).$$

- **Power sums**: $\displaystyle\sum_{k=0}^{n-1} \omega^{jk} = n$ if $n \mid j$, and $0$ otherwise.
- $\omega^k$ is a **primitive** $n$-th root (no smaller power equals $1$) exactly when $\gcd(k, n) = 1$.
- Example ($n = 4$): $x^4 - 1 = (x - 1)(x - i)(x + 1)(x + i)$, and putting $x = 1$ in $1 + x + x^2 + x^3$ gives $(1 - i)(1 + 1)(1 + i) = 4$.`,
      figure: {
        type: "plot",
        x: [-1.6, 1.6],
        y: [-1.35, 1.35],
        equal: true,
        axisLabels: ["Re", "Im"],
        originLabel: false,
        circles: [{ c: [0, 0], r: 1, tone: "muted" }],
        polygons: [{ points: [[1, 0], [0.7071, 0.7071], [0, 1], [-0.7071, 0.7071], [-1, 0], [-0.7071, -0.7071], [0, -1], [0.7071, -0.7071]], tone: "accent", dashed: true }],
        segments: [{ from: [1, 0], to: [-0.7071, 0.7071], tone: "warn" }],
        points: [
          { x: 1, y: 0, label: "1", pos: "se" },
          { x: 0.7071, y: 0.7071, label: "ω", pos: "ne" },
          { x: 0, y: 1, label: "ω²", pos: "ne" },
          { x: -0.7071, y: 0.7071, label: "ω³", pos: "nw" },
          { x: -1, y: 0, label: "ω⁴", pos: "sw" },
          { x: -0.7071, y: -0.7071, label: "ω⁵", pos: "sw" },
          { x: 0, y: -1, label: "ω⁶", pos: "se" },
          { x: 0.7071, y: -0.7071, label: "ω⁷", pos: "se" },
        ],
        caption: String.raw`The eighth roots of unity, $\omega = e^{2\pi i/8}$. The chord from $1$ to $\omega^k$ has length $|1 - \omega^k| = 2\sin\frac{k\pi}{8}$.`,
        alt: "Unit circle in the complex plane with eight equally spaced points 1, omega, omega squared up to omega to the seventh, joined by a dashed regular octagon. A solid chord joins 1 to omega cubed.",
      },
    },
    {
      title: String.raw`Products and sums over all the roots`,
      body: String.raw`If $P(x) = (x - r_1)(x - r_2)\cdots(x - r_n)$, then for any number $\alpha$
$$\prod_{k}(\alpha - r_k) = P(\alpha), \qquad \sum_k \frac{1}{\alpha - r_k} = \frac{P'(\alpha)}{P(\alpha)}.$$

- To find $\prod_k f(r_k)$ for a quadratic $f(x) = (x - \alpha)(x - \beta)$, use $\prod_k (r_k - \alpha)(r_k - \beta) = P(\alpha)P(\beta)$. The roots $\alpha, \beta$ of $f$ are often roots of unity themselves, so their powers simplify.
- Over roots of unity, $\prod_{k=0}^{n-1}(\alpha - \omega^k) = \alpha^n - 1$.
- For a sum $\sum_k \frac{1}{f(r_k)}$, split $\frac{1}{f}$ into partial fractions first.
- Example: the roots of $x^4 - 1$ are $\pm 1, \pm i$, and $\prod (r + 2) = \prod(-2 - r) = (-2)^4 - 1 = 15$; indeed $3 \cdot 1 \cdot (2 + i)(2 - i) = 15$.`,
    },
    {
      title: String.raw`Trigonometric sums and products`,
      body: String.raw`With $z = e^{i\theta}$:
$$\cos\theta = \frac{z + z^{-1}}{2}, \qquad \sin\theta = \frac{z - z^{-1}}{2i}, \qquad \cos n\theta = \operatorname{Re} z^n.$$

- **Sums**: $\sum \cos k\theta = \operatorname{Re}\sum z^k$, a geometric series. For $n \ge 2$ equally spaced angles, $\sum_{k=0}^{n-1}\cos\left(\varphi + \frac{2\pi k}{n}\right) = 0$.
- **Powers**: expand $(z + z^{-1})^m$; e.g. $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$ and $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$.
- **Half angles**: $|1 - e^{i\theta}| = 2\left|\sin\frac\theta2\right|$ and $|1 + e^{i\theta}| = 2\left|\cos\frac\theta2\right|$.
- **Products**: taking moduli in $\prod_{k=1}^{n-1}(1 - \omega^k) = n$ gives
$$\prod_{k=1}^{n-1} 2\sin\frac{k\pi}{n} = n.$$
Example ($n = 3$): $2\sin 60^\circ \cdot 2\sin 120^\circ = \sqrt3 \cdot \sqrt3 = 3$.`,
    },
    {
      title: String.raw`Roots-of-unity filter and binomial sums`,
      body: String.raw`For $P(x) = \sum c_k x^k$ and $\omega = e^{2\pi i/m}$, the coefficients with $k \equiv r \pmod m$ add up to
$$\sum_{k \equiv r} c_k = \frac1m\sum_{j=0}^{m-1}\omega^{-jr}P(\omega^j).$$

- Useful values: $1 + i = \sqrt2\,e^{i\pi/4}$, and $1 + e^{i\theta} = 2\cos\frac\theta2\, e^{i\theta/2}$.
- The real and imaginary parts of $(1 + i)^n = \sum \binom nk i^k$ are the alternating sums $\binom n0 - \binom n2 + \binom n4 - \cdots$ and $\binom n1 - \binom n3 + \cdots$.
- Weighted sums such as $\sum \binom nk \cos k\theta$ are $\operatorname{Re}(1 + e^{i\theta})^n$.
- Example: $(1 + i)^4 = -4$, so $\binom40 - \binom42 + \binom44 = -4$ and $\binom41 - \binom43 = 0$.`,
    },
    {
      title: String.raw`Polynomials with complex roots`,
      body: String.raw`- With **real coefficients**, non-real roots come in conjugate pairs $a \pm bi$, each pair giving a real quadratic factor $x^2 - 2ax + a^2 + b^2$.
- **Divisibility**: a polynomial with real coefficients is divisible by $x^2 + x + 1$ exactly when $P(\omega) = 0$ for $\omega = e^{2\pi i/3}$. To test divisibility by a product of such factors, test each root.
- **Roots on the unit circle**: then $\bar r = \frac1r$, so for a real polynomial the roots are closed under $r \mapsto \frac1r$ and the coefficients are symmetric up to sign.
- **Palindromic** polynomials: divide by $x^m$ and put $t = x + \frac1x$. For real $t$, the roots of $x^2 - tx + 1$ lie on the unit circle exactly when $-2 \le t \le 2$.
- Example: $x^4 + 1 = (x^2 + \sqrt2x + 1)(x^2 - \sqrt2x + 1)$, the two conjugate pairs among the primitive eighth roots of unity.`,
    },
    {
      title: String.raw`Modulus and the triangle inequality`,
      body: String.raw`- $|z - w|$ is the distance between $z$ and $w$, so $|z - a| = R$ is a circle. Hence $\big||z| - |w|\big| \le |z \pm w| \le |z| + |w|$, with equality when $z$ and $w$ point in the same (or opposite) direction.
- On the unit circle, simplify with $\bar z = \frac1z$ and $|z| = 1$; for example, with $z = e^{i\theta}$, $|1 + z| = 2\left|\cos\frac\theta2\right|$.
- **Factorise first**: $|f(z)|$ is the product of the distances from $z$ to the roots of $f$ (times the leading coefficient).
- **Parallelogram law**: $|z + w|^2 + |z - w|^2 = 2|z|^2 + 2|w|^2$.
- **Root bounds**: if a root had $|z| \ge 1$ (or $|z| \le 1$), compare the size of the largest term with the sum of the sizes of the others.`,
    },
    {
      title: String.raw`Recurrences through complex numbers`,
      body: String.raw`- If $a_{n+2} = s\,a_{n+1} - t\,a_n$ has non-real characteristic roots $\rho e^{\pm i\theta}$ (so $s^2 < 4t$, $\rho = \sqrt t$, $\cos\theta = \frac{s}{2\sqrt t}$), then $a_n = \rho^n(A\cos n\theta + B\sin n\theta)$. If $\theta$ is a rational multiple of $\pi$ and $\rho = 1$, the sequence is periodic.
- A pair $x_{n+1} = ax_n - by_n$, $y_{n+1} = bx_n + ay_n$ is one complex sequence: $x_n + iy_n = (a + bi)^n(x_0 + iy_0)$.
- A step $z \mapsto \alpha z + \beta$ (rotate and scale, then translate) has fixed point $w = \frac{\beta}{1 - \alpha}$, and $z_n - w = \alpha^n(z_0 - w)$.
- For $x_{n+1} = x_n^2 - 2$, put $x = z + \frac1z$: then $x^2 - 2 = z^2 + \frac1{z^2}$, so the recurrence just squares $z$.
- Example: $a_{n+2} = a_{n+1} - a_n$ has characteristic roots $e^{\pm i\pi/3}$, so every solution has period $6$.`,
    },
  ],
  archetypes: [
    {
      id: "A8-roots-of-unity",
      name: String.raw`Sums and products over roots of unity`,
      tests: String.raw`An expression summed or multiplied over all $n$-th roots of unity. Use $x^n - 1 = \prod (x - \omega^k)$ and the power sums, and evaluate $\prod f(\omega^k)$ by factorising $f$ over its own roots.`,
      questions: [
        {
          stem: String.raw`Let $\omega = e^{2\pi i/7}$. What is $\omega + \omega^2 + \omega^3 + \omega^4 + \omega^5 + \omega^6$?`,
          difficulty: 1,
          choices: [String.raw`$-7$`, String.raw`$-6$`, String.raw`$-1$`, String.raw`$0$`, String.raw`$1$`],
          answer: String.raw`(C) $-1$`,
        },
        {
          stem: String.raw`Let $\omega = e^{2\pi i/5}$. Find $(2 - \omega)(2 - \omega^2)(2 - \omega^3)(2 - \omega^4)$.`,
          difficulty: 1,
          answer: String.raw`$31$`,
        },
        {
          stem: String.raw`Let $\omega = e^{2\pi i/9}$. Find
$$\prod_{k=1}^{8}\left(\omega^{2k} - \omega^k + 1\right).$$`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Let $\omega = e^{2\pi i/5}$. Find
$$\sum_{k=0}^{4}\frac{1}{2 - \omega^k}.$$`,
          difficulty: 2,
          answer: String.raw`$\dfrac{80}{31}$`,
        },
        {
          stem: String.raw`Let $\omega = e^{2\pi i/7}$. Find
$$\sum_{k=1}^{6}\frac{1}{1 + \omega^k + \omega^{2k}}.$$`,
          difficulty: 3,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ for which there exist three distinct $n$-th roots of unity whose sum is $1$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`All even $n \ge 4$. **Proof.** Key idea: if $|a| = |b| = |c| = 1$ and $a + b + c = 1$, conjugating gives $\frac1a + \frac1b + \frac1c = 1$, so $ab + bc + ca = abc$ and $(x - a)(x - b)(x - c) = (x - 1)(x^2 + abc)$; thus the numbers are $1, w, -w$, which needs $-1$ to be an $n$-th root of unity and $w \ne \pm1$.`,
        },
        {
          stem: String.raw`Let $p$ be an odd prime and $\omega = e^{2\pi i/p}$. Prove that
$$N = \prod_{k=1}^{p-1}\left(1 + \omega^k - \omega^{2k}\right)$$
is a positive integer and that $N \equiv 1 \pmod p$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: $1 + x - x^2 = -(x - \varphi)(x - \psi)$ with $\varphi, \psi = \frac{1 \pm \sqrt5}{2}$, so $\prod_{k=0}^{p-1}(\omega^k - \varphi)(\omega^k - \psi) = (\varphi^p - 1)(\psi^p - 1)$ gives $N = \varphi^p + \psi^p$ (a Lucas number); then $2^{p-1}N = \sum_m \binom{p}{2m}5^m \equiv 1 \pmod p$, and Fermat finishes.`,
        },
      ],
    },
    {
      id: "A8-trig-sums-products",
      name: String.raw`Trigonometric sums and products`,
      tests: String.raw`Sums or products of sines and cosines at equally spaced angles. Write $\cos\theta = \frac{z + z^{-1}}{2}$, then use roots of unity, geometric series, or $|1 - \omega^k| = 2\sin\frac{k\pi}{n}$.`,
      questions: [
        {
          stem: String.raw`Find the exact value of $\cos\dfrac{2\pi}{5} + \cos\dfrac{4\pi}{5}$.`,
          difficulty: 1,
          answer: String.raw`$-\dfrac12$`,
        },
        {
          stem: String.raw`Find the exact value of
$$\cos^2\frac{\pi}{9} + \cos^2\frac{2\pi}{9} + \cos^2\frac{3\pi}{9} + \cdots + \cos^2\frac{8\pi}{9}.$$`,
          difficulty: 1,
          answer: String.raw`$\dfrac72$`,
        },
        {
          stem: String.raw`Find the exact value of
$$\sin\frac{\pi}{15}\,\sin\frac{2\pi}{15}\,\sin\frac{3\pi}{15}\cdots\sin\frac{7\pi}{15}.$$`,
          difficulty: 2,
          answer: String.raw`$\dfrac{\sqrt{15}}{128}$`,
        },
        {
          stem: String.raw`Find the exact value of
$$\sum_{k=1}^{6} k\cos\frac{2k\pi}{7}.$$`,
          difficulty: 2,
          answer: String.raw`$-\dfrac72$`,
        },
        {
          stem: String.raw`Find the exact value of
$$\prod_{k=1}^{2026}\left(1 + 2\cos\frac{2k\pi}{2026}\right).$$`,
          difficulty: 3,
          answer: String.raw`$-3$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\sum_{k=0}^{n-1}\frac{1}{5 - 4\cos\frac{2k\pi}{n}} = \frac{n\,(2^n + 1)}{3\,(2^n - 1)}.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $z = e^{i\theta}$, $\frac{1}{5 - 4\cos\theta} = \frac{1}{(2 - z)(2 - z^{-1})} = \frac23\cdot\frac{1}{2 - z} + \frac13\cdot\frac{1}{2z - 1}$, and over the $n$-th roots of unity $\sum\frac{1}{2 - \omega^k} = \frac{n2^{n-1}}{2^n - 1}$ (logarithmic derivative of $x^n - 1$) and $\sum\frac{1}{2\omega^k - 1} = \frac{n}{2^n - 1}$.`,
        },
        {
          stem: String.raw`Let $n$ be an odd positive integer. Prove that for every positive integer $m$,
$$S_m = \sum_{k=0}^{n-1}\frac{1}{\cos^m\frac{2k\pi}{n}}$$
is an integer divisible by $n$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: if $\zeta^n = 1$ with $n$ odd then $(1 + \zeta)(1 - \zeta + \zeta^2 - \cdots + \zeta^{n-1}) = 1 + \zeta^n = 2$, so at $z = e^{2k\pi i/n}$ the value $\frac{1}{\cos\theta} = \frac{2z}{1 + z^2}$ equals a fixed polynomial in $z$ with integer coefficients, hence so does its $m$-th power, and summing a polynomial over all $n$-th roots of unity gives $n$ times the sum of its coefficients on exponents divisible by $n$.`,
        },
      ],
    },
    {
      id: "A8-binomial-sums",
      name: String.raw`Binomial sums with roots of unity`,
      tests: String.raw`Sums of binomial coefficients with a repeating pattern of signs or steps (every fourth term, every third term with signs, weights $\cos k\theta$). Expand $(1 + \zeta)^n$ for suitable roots of unity $\zeta$ and take real or imaginary parts.`,
      questions: [
        {
          stem: String.raw`Find
$$\binom{12}{0} - \binom{12}{2} + \binom{12}{4} - \binom{12}{6} + \binom{12}{8} - \binom{12}{10} + \binom{12}{12}.$$`,
          difficulty: 1,
          answer: String.raw`$-64$`,
        },
        {
          stem: String.raw`Find $\dbinom91 - \dbinom93 + \dbinom95 - \dbinom97 + \dbinom99$.`,
          difficulty: 1,
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`Find $\dbinom{13}{1} + \dbinom{13}{5} + \dbinom{13}{9} + \dbinom{13}{13}$ using roots of unity (or otherwise).`,
          difficulty: 2,
          answer: String.raw`$2016$`,
        },
        {
          stem: String.raw`Find the exact value of
$$\sum_{k=0}^{10}\binom{10}{k}\cos\frac{k\pi}{3}.$$`,
          difficulty: 2,
          answer: String.raw`$\dfrac{243}{2}$`,
        },
        {
          stem: String.raw`Find
$$\sum_{k=0}^{675}(-1)^k\binom{2026}{3k} = \binom{2026}{0} - \binom{2026}{3} + \binom{2026}{6} - \cdots - \binom{2026}{2025}.$$`,
          difficulty: 3,
          answer: String.raw`$3^{1012}$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that
$$\binom n0 + \binom n3 + \binom n6 + \cdots = \binom n1 + \binom n4 + \binom n7 + \cdots,$$
and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly the $n$ with $n \equiv 1 \pmod 3$. **Proof.** Key idea: by the filter with $\omega = e^{2\pi i/3}$, the difference of the two sums is $\frac13\left[(1 - \omega^2)(1 + \omega)^n + (1 - \omega)(1 + \omega^2)^n\right] = \frac{2}{\sqrt3}\cos\frac{(2n + 1)\pi}{6}$, using $1 + \omega = e^{i\pi/3}$.`,
        },
        {
          stem: String.raw`Let $n$ be a positive integer. Find, in terms of $n$, the number of subsets of $\{1, 2, \ldots, 3n\}$ (including the empty set) whose number of elements and whose sum of elements are both divisible by $3$.`,
          difficulty: 4,
          answer: String.raw`$\dfrac{8^n + 6 \cdot 2^n + 2(-1)^n}{9}$. Key idea: filter the generating function $\prod_{j=1}^{3n}(1 + xy^j)$ by averaging over $x, y \in \{1, \omega, \omega^2\}$; the nine terms are $8^n$, $(-1)^n$ twice (when $y = 1 \ne x$) and $2^n$ six times (when $y \ne 1$, since $x y^j$ then runs through all cube roots of unity).`,
        },
      ],
    },
    {
      id: "A8-complex-roots",
      name: String.raw`Polynomials and their complex roots`,
      tests: String.raw`Polynomials with non-real roots or roots on the unit circle: conjugate pairs, divisibility tested at roots of unity, products over the roots found by evaluating at complex points, and counting polynomials whose roots satisfy a condition.`,
      questions: [
        {
          stem: String.raw`The cubic $x^3 + ax^2 + bx + 10$, where $a$ and $b$ are real, has $2 + i$ as a root. What is its real root?`,
          difficulty: 1,
          choices: [String.raw`$-10$`, String.raw`$-5$`, String.raw`$-4$`, String.raw`$-2$`, String.raw`$2$`],
          answer: String.raw`(D) $-2$`,
        },
        {
          stem: String.raw`Find all complex numbers $z$ with $z^2 = -5 + 12i$.`,
          difficulty: 1,
          answer: String.raw`$z = 2 + 3i$ and $z = -2 - 3i$`,
        },
        {
          stem: String.raw`For how many integers $n$ with $1 \le n \le 100$ is $x^{2n} + x^n + 1$ divisible by $x^4 + x^2 + 1$?`,
          difficulty: 2,
          answer: String.raw`$34$`,
        },
        {
          stem: String.raw`Let $r_1, r_2, r_3$ be the roots of $x^3 - 2x + 4 = 0$. Find $(r_1^2 + 1)(r_2^2 + 1)(r_3^2 + 1)$.`,
          difficulty: 2,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`How many polynomials
$$x^{11} + a_{10}x^{10} + a_9x^9 + \cdots + a_1x + a_0,$$
with every $a_i \in \{1, -1\}$, are divisible by $x^2 + x + 1$?`,
          difficulty: 3,
          answer: String.raw`$173$`,
        },
        {
          stem: String.raw`Find all pairs $(m, n)$ of positive integers for which the equation $z^n = z^m + i$ has a solution $z$ with $|z| = 1$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly the pairs for which $\dfrac{m + n}{\gcd(m, n)}$ is divisible by $12$. **Proof.** Key idea: if $|z| = 1$ then $|z^m + i| = 1$ forces $z^m = e^{-i\pi/6}$ or $e^{-5i\pi/6}$, and in both cases $z^m + i = \frac{1}{z^m}$, so the equation becomes $z^{m+n} = 1$ with $z^m$ of order $12$; as $z$ runs over the $(m+n)$-th roots of unity, $z^m$ runs over the roots of unity of order dividing $\frac{m+n}{\gcd(m,n)}$.`,
        },
        {
          stem: String.raw`Let $\omega = e^{2\pi i/3}$. Find the number of monic cubic polynomials $P$ with complex coefficients such that
$$P(x^3) = P(x)\,P(\omega x)\,P(\omega^2 x)$$
for all $x$.`,
          difficulty: 4,
          answer: String.raw`$27$. Key idea: $(x - r)(\omega x - r)(\omega^2 x - r) = x^3 - r^3$, so the condition says that cubing maps the multiset of roots onto itself; the roots then lie on cubing-cycles of length $1$ ($0, \pm1$), $2$ ($r^8 = 1$, $r \ne \pm1$: three cycles) or $3$ ($r^{26} = 1$, $r \ne \pm1$: eight cycles), with equal multiplicity along a cycle, giving $10 + 3 \cdot 3 + 8 = 27$.`,
        },
      ],
    },
    {
      id: "A8-modulus",
      name: String.raw`Modulus: extreme values and root bounds`,
      tests: String.raw`The largest or smallest value of $|f(z)|$ when $z$ moves on a circle, and bounds on where the roots of a polynomial lie. Use the triangle inequality, $\bar z = \frac1z$ on the unit circle, factorisation, and averaging over roots of unity.`,
      questions: [
        {
          stem: String.raw`The complex number $z$ satisfies $|z| = 3$. Find the maximum value of $|z - 4i|$.`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`The complex number $z$ satisfies $|z - 3 - 4i| = 2$. Find the minimum value of $|z|$.`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`The complex number $z$ satisfies $|z| = 1$. Find the maximum value of $|z^2 - z + 1|$.`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`A non-zero complex number $z$ satisfies $\left|z + \dfrac2z\right| = 1$. Find the maximum value of $|z|$.`,
          difficulty: 2,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`The complex number $z$ satisfies $|z| = 1$. Find the maximum value of $|z^3 + z^2 - z - 1|$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{16\sqrt3}{9}$`,
        },
        {
          stem: String.raw`Prove that every complex root $z$ of
$$6z^5 + 5z^4 + 4z^3 + 3z^2 + 2z + 1 = 0$$
satisfies $|z| < 1$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: multiply by $z - 1$ to get $6z^6 = z^5 + z^4 + z^3 + z^2 + z + 1$ for a root; if $|z| \ge 1$ the triangle inequality gives $6|z|^6 \le 6|z|^5$, so $|z| = 1$ with all six terms pointing the same way, i.e. $z = 1$, which is not a root.`,
        },
        {
          stem: String.raw`Let $P(z) = a_nz^n + a_{n-1}z^{n-1} + \cdots + a_0$ be a polynomial with complex coefficients and $n \ge 1$. Prove that there is a complex number $z$ with $|z| = 1$ and
$$|P(z)| \ge |a_0| + |a_n|.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: for $|\zeta| = 1$ and $\omega = e^{2\pi i/n}$, the average of $P(\zeta\omega^k)$ over $k = 0, \ldots, n - 1$ is $a_0 + a_n\zeta^n$ (all other powers cancel); choose $\zeta$ so that $a_n\zeta^n$ points in the same direction as $a_0$, and then some $|P(\zeta\omega^k)|$ is at least $|a_0| + |a_n|$.`,
        },
      ],
    },
    {
      id: "A8-recurrences",
      name: String.raw`Recurrences through complex numbers`,
      tests: String.raw`Linear recurrences with non-real characteristic roots, pairs $(x_n, y_n)$ that are the real and imaginary parts of a power, rotate-and-translate steps, and $x_{n+1} = x_n^2 - 2$ via $x = z + \frac1z$.`,
      questions: [
        {
          stem: String.raw`What is $\left(1 + i\sqrt3\right)^9 + \left(1 - i\sqrt3\right)^9$?`,
          difficulty: 1,
          choices: [String.raw`$-1024$`, String.raw`$-512$`, String.raw`$0$`, String.raw`$512$`, String.raw`$1024$`],
          answer: String.raw`(A) $-1024$`,
        },
        {
          stem: String.raw`Sequences are defined by $x_0 = 1$, $y_0 = 0$ and
$$x_{n+1} = 2x_n - y_n, \qquad y_{n+1} = x_n + 2y_n \qquad (n \ge 0).$$
Find $x_4^2 + y_4^2$.`,
          difficulty: 1,
          answer: String.raw`$625$`,
        },
        {
          stem: String.raw`A sequence has $a_0 = 0$, $a_1 = 1$ and $a_{n+2} = 2a_{n+1} - 2a_n$ for $n \ge 0$. Find $a_{2026}$.`,
          difficulty: 2,
          answer: String.raw`$2^{1013}$`,
        },
        {
          stem: String.raw`The point $P_0$ is the origin. For each $n \ge 0$, the point $P_{n+1}$ is obtained by rotating $P_n$ through $60^\circ$ anticlockwise about the origin and then moving the image $1$ unit in the positive $x$-direction. Find the coordinates of $P_{2026}$.`,
          difficulty: 2,
          answer: String.raw`$\left(0, \sqrt3\right)$`,
        },
        {
          stem: String.raw`A sequence has $x_1 = 2\cos\dfrac{\pi}{9}$ and $x_{n+1} = x_n^2 - 2$ for $n \ge 1$. Find $x_{2026}$.`,
          difficulty: 3,
          answer: String.raw`$-2\cos\dfrac{\pi}{9}$`,
        },
        {
          stem: String.raw`A sequence has $b_0 = 0$, $b_1 = 2$ and $b_{n+2} = 2b_{n+1} - 5b_n$ for $n \ge 0$. Prove that $b_n \ne 0$ for every $n \ge 1$, and deduce that $\arctan 2$ is not a rational multiple of $\pi$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $b_n = \operatorname{Im}(1 + 2i)^n$, and $(1 + 2i)^2 = -3 + 4i \equiv 2(1 + 2i) \pmod 5$, so $(1 + 2i)^n \equiv 2^{n-1}(1 + 2i)$ and $b_n \equiv 2^n \not\equiv 0 \pmod 5$; if $\arctan 2 = \frac{m\pi}{k}$ then $b_k = 5^{k/2}\sin(m\pi) = 0$.`,
        },
        {
          stem: String.raw`Find the number of real numbers $t$ for which the sequence $x_0 = t$, $x_{n+1} = x_n^2 - 2$ satisfies $x_6 = x_0$ but $x_k \ne x_0$ for $k = 1, 2, 3, 4, 5$.`,
          difficulty: 4,
          answer: String.raw`$54$. Key idea: if $|t| > 2$ the sequence increases, and if $t = 2\cos\theta$ then $x_n = 2\cos(2^n\theta)$; so $x_6 = x_0$ has exactly the $64$ solutions $\theta = \frac{2k\pi}{63}$ or $\frac{2k\pi}{65}$ in $[0, \pi]$, and removing those of period $1$, $2$ or $3$ leaves $64 - 8 - 4 + 2 = 54$.`,
        },
      ],
    },
  ],
});
