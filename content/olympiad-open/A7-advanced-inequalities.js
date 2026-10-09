H2.addTopic({
  id: "A7",
  title: "Advanced Inequalities",
  summary: String.raw`Schur's inequality, Jensen and convexity, power means and Hölder, majorisation with Karamata and Muirhead, the pqr (uvw) method with homogenisation and normalisation, and SOS for cyclic sums.`,
  concepts: [
    {
      title: String.raw`Schur's inequality`,
      body: String.raw`For non-negative $a, b, c$ and $t > 0$:
$$a^t(a - b)(a - c) + b^t(b - c)(b - a) + c^t(c - a)(c - b) \ge 0,$$
with equality when $a = b = c$, or when two of them are equal and the third is $0$.

- **Proof idea**: if $a \ge b \ge c$, the first two terms together are $(a - b)\big[a^t(a - c) - b^t(b - c)\big] \ge 0$, and the last term is $\ge 0$.
- $t = 1$: $\ a^3 + b^3 + c^3 + 3abc \ge ab(a + b) + bc(b + c) + ca(c + a)$.
- $t = 2$: $\ a^4 + b^4 + c^4 + abc(a + b + c) \ge ab(a^2 + b^2) + bc(b^2 + c^2) + ca(c^2 + a^2)$.
- With $p = a + b + c$, $q = ab + bc + ca$, $r = abc$ these read $p^3 - 4pq + 9r \ge 0$ and $p^4 - 5p^2q + 4q^2 + 6pr \ge 0$. The first is a **lower bound for** $r$, which AM-GM can never give.
- **Recognise it**: a symmetric inequality whose equality cases are both $(1, 1, 1)$ and $(1, 1, 0)$ is usually Schur in disguise. Testing these two cases is also how to find a best constant.
- Example ($t = 1$, $(a, b, c) = (2, 1, 0)$): $2 \cdot 1 \cdot 2 + 1 \cdot (-1) \cdot 1 + 0 = 3 \ge 0$.`,
    },
    {
      title: String.raw`Jensen's inequality and convexity`,
      body: String.raw`If $f$ is **convex** on an interval ($f'' \ge 0$, so every chord lies above the graph), then for points $x_i$ in it and weights $w_i \ge 0$ with $\sum w_i = 1$:
$$f(w_1x_1 + \cdots + w_nx_n) \le w_1 f(x_1) + \cdots + w_n f(x_n).$$
For **concave** $f$ ($f'' \le 0$) the inequality reverses. Equality holds when all $x_i$ are equal (for strictly convex $f$).

- Convex: $e^x$, $x^p$ ($p \ge 1$, $x > 0$), $\frac{1}{x}$ and $x\ln x$ ($x > 0$). Concave: $\ln x$, $\sqrt{x}$, $\sin x$ on $[0, \pi]$.
- Example: $\frac1x$ is convex, so $\frac1a + \frac1b + \frac1c \ge \frac{3}{(a + b + c)/3} = \frac{9}{a + b + c}$ for $a, b, c > 0$.
- **Weighted AM-GM** is Jensen for $\ln$: $x^{w_1}y^{w_2} \le w_1x + w_2y$ when $w_1 + w_2 = 1$; e.g. $\sqrt[3]{x y^2} \le \frac{x + 2y}{3}$.
- **Endpoints**: a convex function on $[m, M]$ is largest at an endpoint. With a fixed total, $\sum f(x_i)$ for convex $f$ is maximised by pushing as many variables as possible to the ends of the interval; for concave $f$, variables in the same region should be made equal.`,
      figure: {
        type: "plot",
        x: [-0.4, 4.6],
        y: [-0.7, 4.6],
        equal: true,
        axes: false,
        curves: [{ fn: "x => 0.22*x*x + 0.35", domain: [0, 4.3] }],
        segments: [
          { from: [0.5, 0.405], to: [3.8, 3.5268], tone: "warn" },
          { from: [2.15, 1.36695], to: [2.15, 1.96589], tone: "muted", dashed: true },
          { from: [-0.2, 0], to: [4.4, 0], tone: "muted" },
          { from: [0.5, 0], to: [0.5, 0.405], tone: "muted", dashed: true },
          { from: [3.8, 0], to: [3.8, 3.5268], tone: "muted", dashed: true },
          { from: [2.15, 0], to: [2.15, 1.36695], tone: "muted", dashed: true },
        ],
        points: [
          { x: 0.5, y: 0.405 },
          { x: 3.8, y: 3.5268 },
          { x: 2.15, y: 1.36695 },
          { x: 2.15, y: 1.96589 },
        ],
        labels: [
          { x: 0.5, y: 0, text: "x", pos: "s", style: "italic" },
          { x: 3.8, y: 0, text: "y", pos: "s", style: "italic" },
          { x: 2.15, y: 0, text: "(x + y)/2", pos: "s", style: "small" },
          { x: 2.15, y: 1.96589, text: "(f(x) + f(y))/2", pos: "nw", style: "small", tone: "warn" },
          { x: 2.15, y: 1.36695, text: "f((x + y)/2)", pos: "se", style: "small" },
        ],
        caption: String.raw`For a convex $f$ the chord lies above the graph, so the average of the values is at least the value at the average.`,
        alt: "An upward-curving graph with a chord joining the points above x and y. Above the midpoint (x+y)/2 the chord is higher than the curve: the chord height is the average of f(x) and f(y), the curve height is f of the average.",
      },
    },
    {
      title: String.raw`Power means`,
      body: String.raw`For positive $x_1, \ldots, x_n$ the power mean of order $p \ne 0$ is
$$M_p = \left(\frac{x_1^p + \cdots + x_n^p}{n}\right)^{1/p},$$
and $M_0$ is the geometric mean. **$M_p$ increases with $p$**, with equality only when all $x_i$ are equal:
$$\min \le \cdots \le M_{-1} \le M_0 \le M_1 \le M_2 \le M_3 \le \cdots \le \max.$$

- $M_{-1}$, $M_0$, $M_1$, $M_2$ are HM, GM, AM, QM.
- Example: for $1$ and $7$, $M_{-1} = \frac{7}{4}$, $M_0 = \sqrt7$, $M_1 = 4$, $M_2 = 5$.
- Use it to bound one power sum by another, by raising both sides to a suitable power; equality (all variables equal) tells you whether the bound is attained.`,
    },
    {
      title: String.raw`Hölder's inequality`,
      body: String.raw`For non-negative reals, with three factors:
$$(a_1 + a_2 + \cdots)(b_1 + b_2 + \cdots)(c_1 + c_2 + \cdots) \ge \left(\sqrt[3]{a_1b_1c_1} + \sqrt[3]{a_2b_2c_2} + \cdots\right)^3,$$
with equality when the three sequences are proportional. The same holds with $k$ factors and $k$-th roots; two factors is Cauchy-Schwarz.

- Example: $(x^3 + y^3)(1 + 1)(1 + 1) \ge (x + y)^3$, so $x^3 + y^3 \ge \frac{(x + y)^3}{4}$.
- Hölder works in both directions: it bounds a sum of cube roots from **above**, and, by multiplying a sum by itself and by a well-chosen third sum, it bounds a sum of fractions with roots from **below**. Choose the factors so that the products of matching terms are simple and each sum is known.`,
    },
    {
      title: String.raw`Majorisation, Karamata and Muirhead`,
      body: String.raw`Sort $x_1 \ge \cdots \ge x_n$ and $y_1 \ge \cdots \ge y_n$. Say $(x_i)$ **majorises** $(y_i)$, written $x \succ y$, if
$$x_1 \ge y_1,\quad x_1 + x_2 \ge y_1 + y_2,\quad \ldots,\quad x_1 + \cdots + x_n = y_1 + \cdots + y_n.$$
So $x$ is "more spread out", e.g. $(3, 1, 0) \succ (2, 1, 1) \succ (\frac43, \frac43, \frac43)$.

- **Karamata**: if $x \succ y$ and $f$ is convex, then $\sum f(x_i) \ge \sum f(y_i)$ (reversed for concave $f$).
- **Box constraints**: if every $x_i$ lies in $[m, M]$ with a fixed sum, the vector with as many entries as possible equal to $M$ or $m$ (and one entry in between) majorises all the others.
- **Muirhead**: for positive $a, b, c$, let $\sum_{\text{sym}} a^{\alpha}b^{\beta}c^{\gamma}$ be the sum over all $6$ orderings of the exponents. If $(\alpha, \beta, \gamma) \succ (\alpha', \beta', \gamma')$ then $\sum_{\text{sym}} a^{\alpha}b^{\beta}c^{\gamma} \ge \sum_{\text{sym}} a^{\alpha'}b^{\beta'}c^{\gamma'}$. Both sides must have the same total degree, so homogenise first.
- Example: $(2, 0, 0) \succ (1, 1, 0)$ gives $a^2 + b^2 + c^2 \ge ab + bc + ca$.`,
    },
    {
      title: String.raw`The pqr (uvw) method`,
      body: String.raw`Every symmetric polynomial in $a, b, c$ is a polynomial in $p = a + b + c$, $q = ab + bc + ca$, $r = abc$:
$$a^2 + b^2 + c^2 = p^2 - 2q, \quad a^3 + b^3 + c^3 = p^3 - 3pq + 3r, \quad a^2b^2 + b^2c^2 + c^2a^2 = q^2 - 2pr.$$

- $a, b, c$ are the roots of $t^3 - pt^2 + qt - r$, so they are **real** exactly when this cubic has three real roots. Hence $p^2 \ge 3q$, with equality only when $a = b = c$.
- **uvw principle**: for fixed $p$ and $q$, the possible values of $r$ form an interval whose ends occur when **two of the variables are equal** (and, for non-negative variables, possibly when one is $0$). So an expression that is linear (or monotone, or convex) in $r$ is extreme in those cases.
- Example: if $a + b + c = 4$ and $ab + bc + ca = 5$, putting $a = b = t$ gives $3t^2 - 8t + 5 = 0$, so $t = 1$ or $\frac53$, and $abc$ ranges over $\left[\frac{50}{27}, 2\right]$.
- Two equal variables is a one-variable problem: always factor out the known equality case.`,
    },
    {
      title: String.raw`Homogenisation and normalisation`,
      body: String.raw`An inequality is **homogeneous** if every term has the same degree; then scaling all variables does not change it.

- **Normalise** a homogeneous inequality by choosing a convenient scale, e.g. $a + b + c = 3$, $abc = 1$ or $ab + bc + ca = 3$. This turns it into a problem with a constraint.
- **Homogenise** a constrained inequality by using the constraint to give every term the same degree. With $a + b + c = 1$, the claim $a^2 + b^2 + c^2 \ge \frac13$ becomes $3(a^2 + b^2 + c^2) \ge (a + b + c)^2$; with $abc = 1$, the claim $a + b + c \ge 3$ becomes $a + b + c \ge 3\sqrt[3]{abc}$.
- After homogenising, Muirhead, Schur and SOS can be applied term by term.`,
    },
    {
      title: String.raw`SOS for cyclic sums`,
      body: String.raw`Write the difference of the two sides in terms of $(a - b)^2$, $(b - c)^2$, $(c - a)^2$:

- $a^2 + b^2 + c^2 - ab - bc - ca = \frac12\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big]$, and $\frac{a^2}{b} + \frac{b^2}{c} + \frac{c^2}{a} - (a + b + c) = \frac{(a - b)^2}{b} + \frac{(b - c)^2}{c} + \frac{(c - a)^2}{a}$.
- **Cyclic but not symmetric** sums also contain the product of differences: $(ab^2 + bc^2 + ca^2) - (a^2b + b^2c + c^2a) = (a - b)(b - c)(c - a)$. Its sign depends only on the order of $a, b, c$.
- **SOS criterion**: if $F = S_a(b - c)^2 + S_b(c - a)^2 + S_c(a - b)^2$ with $a \ge b \ge c$, it is enough that $S_b \ge 0$, $S_a + S_b \ge 0$ and $S_c + S_b \ge 0$, because $(a - c)^2 \ge (a - b)^2 + (b - c)^2$.
- **Differences as variables**: $x = a - b$, $y = b - c$, $z = c - a$ satisfy $x + y + z = 0$, so pqr ideas apply to them.
- A quartic that vanishes at $a = b = c$ may be a sum of squares of quadratics that also vanish there.`,
    },
  ],
  archetypes: [
    {
      id: "A7-schur",
      name: String.raw`Schur's inequality`,
      tests: String.raw`Symmetric inequalities in non-negative variables with equality both at $a = b = c$ and at $(t, t, 0)$. Use Schur (degree $3$ or $4$), its pqr form $p^3 - 4pq + 9r \ge 0$, or test those two cases to find a best constant.`,
      questions: [
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $abc = 1$. What is the largest possible value of $(a + b - c)(b + c - a)(c + a - b)$?`,
          difficulty: 1,
          choices: [String.raw`$\tfrac18$`, String.raw`$\tfrac12$`, String.raw`$1$`, String.raw`$2$`, String.raw`$8$`],
          answer: String.raw`(C) $1$`,
        },
        {
          stem: String.raw`Non-negative real numbers $a, b, c$ satisfy $a + b + c = 6$. Find the maximum value of $8(ab + bc + ca) - 3abc$.`,
          difficulty: 1,
          answer: String.raw`$72$`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that
$$a^2 + b^2 + c^2 + k\,abc \ge 3 + k$$
for all non-negative real numbers $a, b, c$ with $a + b + c = 3$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac32$`,
        },
        {
          stem: String.raw`Prove that for all real numbers $x, y, z$,
$$x^6 + y^6 + z^6 + 3x^2y^2z^2 \ge 2\left(x^3y^3 + y^3z^3 + z^3x^3\right).$$`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: Schur's inequality ($t = 1$) for the non-negative numbers $x^2, y^2, z^2$ bounds the left side below by $\sum x^2y^2(x^2 + y^2)$, and $x^4y^2 + x^2y^4 \ge 2|x|^3|y|^3 \ge 2x^3y^3$ by AM-GM.`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that
$$a^4 + b^4 + c^4 + k\,(3abc - ab - bc - ca) \ge ab + bc + ca$$
for all non-negative real numbers $a, b, c$ with $a + b + c = 3$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac72$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $abc = 1$. Prove that
$$a^2 + b^2 + c^2 + 3 \ge a + b + c + ab + bc + ca.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: with $p = a + b + c \ge 3$ and $q = ab + bc + ca$ the claim is $3q \le p^2 - p + 3$; Schur gives $4pq \le p^3 + 9$, and $\frac{4p(p^2 - p + 3)}{3} - (p^3 + 9) = \frac{(p - 3)(p^2 - p + 9)}{3} \ge 0$.`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that
$$a^3 + b^3 + c^3 + k\,abc \ge 3 + k$$
for all non-negative real numbers $a, b, c$ with $ab + bc + ca = 3$.`,
          difficulty: 4,
          answer: String.raw`$k = 6\sqrt3 - 3$. Key idea: $(a, b, c) = (\sqrt3, \sqrt3, 0)$ shows $k \le 6\sqrt3 - 3$. Conversely, with $p = a + b + c \ge 3$ the left side is $p^3 - 9p + (3 + k)r$; for $p \ge 2\sqrt3$ use $r \ge 0$, and for $3 \le p \le 2\sqrt3$ use Schur's $r \ge \frac{p(12 - p^2)}{9}$, which leaves a concave cubic in $p$ that vanishes at both $p = 3$ and $p = 2\sqrt3$.`,
        },
      ],
    },
    {
      id: "A7-jensen",
      name: String.raw`Jensen and convexity`,
      tests: String.raw`A sum $f(x_1) + \cdots + f(x_n)$ (possibly weighted) with a fixed total, where $f$ is convex or concave on the allowed range. Check $f''$; with mixed convexity, the convex part goes to the endpoints and the concave part is equalised.`,
      questions: [
        {
          stem: String.raw`Real numbers $x, y, z$ satisfy $x + y + z = 6$. Find the minimum value of $2^x + 2^y + 2^z$.`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Non-negative real numbers $x, y, z$ satisfy $x + y + z = 12$. Find the maximum value of
$$\sqrt{2x + 1} + \sqrt{2y + 1} + \sqrt{2z + 1}.$$`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Positive real numbers $x, y, z$ satisfy $x + y + z = 1$. Find the minimum value of $x^x\, y^y\, z^z$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac13$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $a + 2b + 3c = 6$. Find the minimum value of $a^3 + 2b^3 + 3c^3$.`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Ten real numbers, each between $-1$ and $2$ inclusive, have sum $0$. Find the largest possible value of the sum of their cubes.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{960}{49}$`,
        },
        {
          stem: String.raw`Positive real numbers $x, y, z$ satisfy $x + y + z = 3$. Prove that
$$x^{y + z}\, y^{z + x}\, z^{x + y} \le 1.$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: weighted AM-GM (Jensen for $\ln$) with weights $\frac{y + z}{6}, \frac{z + x}{6}, \frac{x + y}{6}$ gives $\left(x^{y + z}y^{z + x}z^{x + y}\right)^{1/6} \le \frac{x(y + z) + y(z + x) + z(x + y)}{6} = \frac{xy + yz + zx}{3} \le \frac{(x + y + z)^2}{9} = 1$.`,
        },
        {
          stem: String.raw`Prove that for all positive real numbers $a, b, c$,
$$a^a\, b^b\, c^c \left(\frac{a + b + c}{3}\right)^{a + b + c} \ge \left(\frac{a + b}{2}\right)^{a + b}\left(\frac{b + c}{2}\right)^{b + c}\left(\frac{c + a}{2}\right)^{c + a}.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: after taking logarithms this is $f(a) + f(b) + f(c) + 3f(m) \ge 2\big[f(\frac{a + b}{2}) + f(\frac{b + c}{2}) + f(\frac{c + a}{2})\big]$ for the convex $f(t) = t\ln t$ and $m = \frac{a + b + c}{3}$; it follows from Karamata, since $(a, b, c, m, m, m)$ majorises the six half-sums (check the cases $b \ge m$ and $b \le m$ when $a \ge b \ge c$).`,
        },
      ],
    },
    {
      id: "A7-power-mean-holder",
      name: String.raw`Power means and Hölder`,
      tests: String.raw`Comparing sums of different powers, or bounding sums of fractions and roots. Use the power mean chain, or Hölder with three factors chosen so that the products of matching terms are simple and the sums are known.`,
      questions: [
        {
          stem: String.raw`Positive real numbers $x, y, z$ satisfy $x^2 + y^2 + z^2 = 12$. Find the maximum value of $x + y + z$.`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Positive real numbers $x, y, z$ satisfy $x + y + z = 1$. Find the maximum value of $\sqrt[3]{x} + \sqrt[3]{y} + \sqrt[3]{z}$.`,
          difficulty: 1,
          answer: String.raw`$\sqrt[3]{9}$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c, d$ satisfy $a^2 + b^2 + c^2 + d^2 = 1$. Find the minimum value of $a^3 + b^3 + c^3 + d^3$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac12$`,
        },
        {
          stem: String.raw`Positive real numbers $x$ and $y$ satisfy $x + y = 1$. Find the minimum value of $\dfrac{1}{x^2} + \dfrac{8}{y^2}$.`,
          difficulty: 2,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`Positive real numbers $a, b, c$ satisfy $a + b + c = 3$. Find the maximum value of
$$\sqrt[3]{a(a + 2b)} + \sqrt[3]{b(b + 2c)} + \sqrt[3]{c(c + 2a)}.$$`,
          difficulty: 3,
          answer: String.raw`$3\sqrt[3]{3}$`,
        },
        {
          stem: String.raw`Prove that for all positive real numbers $a, b, c$,
$$(a^3 + 1)(b^3 + 1)(c^3 + 1) \ge (a^2b + 1)(b^2c + 1)(c^2a + 1).$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: Hölder gives $(a^3 + 1)(a^3 + 1)(b^3 + 1) \ge (a \cdot a \cdot b + 1)^3$; multiply this by its two cyclic versions and take cube roots.`,
        },
        {
          stem: String.raw`Prove that for all positive real numbers $a, b, c$,
$$\frac{a}{\sqrt{a^2 + 7b^2 + 7c^2 + 3bc}} + \frac{b}{\sqrt{b^2 + 7c^2 + 7a^2 + 3ca}} + \frac{c}{\sqrt{c^2 + 7a^2 + 7b^2 + 3ab}} \ge \frac{1}{\sqrt2}.$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: by Hölder, $S^2 \cdot \sum a(a^2 + 7b^2 + 7c^2 + 3bc) \ge (a + b + c)^3$ where $S$ is the left side, and the remaining claim $\sum a(a^2 + 7b^2 + 7c^2 + 3bc) \le 2(a + b + c)^3$ is exactly Schur's inequality $a^3 + b^3 + c^3 + 3abc \ge ab(a + b) + bc(b + c) + ca(c + a)$ after expanding.`,
        },
      ],
    },
    {
      id: "A7-majorisation",
      name: String.raw`Majorisation, Karamata and Muirhead`,
      tests: String.raw`Symmetric sums of the same total degree (compare exponent vectors with Muirhead), or sums $\sum f(x_i)$ under box or partial-sum constraints (find the most spread-out vector and apply Karamata).`,
      questions: [
        {
          stem: String.raw`Which of the following is greater than or equal to each of the other four for all positive real numbers $a, b, c$?`,
          difficulty: 1,
          choices: [
            String.raw`$abc(a + b + c)$`,
            String.raw`$a^2b^2 + b^2c^2 + c^2a^2$`,
            String.raw`$a^4 + b^4 + c^4$`,
            String.raw`$\tfrac12\big[ab(a^2 + b^2) + bc(b^2 + c^2) + ca(c^2 + a^2)\big]$`,
            String.raw`$3(abc)^{4/3}$`,
          ],
          answer: String.raw`(C) $a^4 + b^4 + c^4$`,
        },
        {
          stem: String.raw`Five real numbers, each between $1$ and $3$ inclusive, have sum $11$. Find the largest possible value of the sum of their squares.`,
          difficulty: 1,
          answer: String.raw`$29$`,
        },
        {
          stem: String.raw`Prove that for all positive real numbers $a, b, c$,
$$(a + b + c)(a^4 + b^4 + c^4) \ge (a^2 + b^2 + c^2)(a^3 + b^3 + c^3).$$`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: after expanding, the claim is $\sum_{\text{sym}} a^4b \ge \sum_{\text{sym}} a^3b^2$, which is Muirhead for $(4, 1, 0) \succ (3, 2, 0)$ (or use $a^4b + ab^4 - a^3b^2 - a^2b^3 = ab(a + b)(a - b)^2$).`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that $a^5 + b^5 + c^5 \ge k(a^2 + b^2 + c^2)$ for all positive real numbers $a, b, c$ with $abc = 1$.`,
          difficulty: 2,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`Positive real numbers $x \ge y \ge z$ satisfy $x \ge 4$, $xy \ge 12$ and $xyz = 24$. Prove that $x + y + z \ge 9$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the conditions say $(\ln x, \ln y, \ln z) \succ (\ln 4, \ln 3, \ln 2)$, so Karamata for the convex function $e^t$ gives $x + y + z \ge 4 + 3 + 2$.`,
        },
        {
          stem: String.raw`Every angle of triangle $ABC$ is between $30^\circ$ and $90^\circ$ inclusive. Find the smallest possible value of $\sin A + \sin B + \sin C$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{3 + \sqrt3}{2}$`,
        },
        {
          stem: String.raw`Let $n \ge 2$ be an integer. Find all real numbers $p$ such that
$$x_1^p + x_2^p + \cdots + x_n^p \ge x_1 + x_2 + \cdots + x_n$$
for all positive real numbers $x_1, \ldots, x_n$ with $x_1x_2\cdots x_n = 1$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Exactly $p \ge 1$ or $p \le 1 - n$. **Proof.** Key idea: homogenise the right side to $\sum x_i \cdot (x_1\cdots x_n)^{(p-1)/n}$; Muirhead applies because $(p, 0, \ldots, 0) \succ \left(1 + u, u, \ldots, u\right)$ with $u = \frac{p - 1}{n}$ precisely when $p \ge 1$ or $p \le 1 - n$, and otherwise $x_1 = t$, $x_2 = \cdots = x_n = t^{-1/(n-1)}$ with $t \to \infty$ is a counterexample.`,
        },
      ],
    },
    {
      id: "A7-pqr-uvw",
      name: String.raw`pqr, uvw and normalisation`,
      tests: String.raw`Symmetric expressions in three variables under symmetric conditions. Rewrite in $p, q, r$; for fixed $p$ and $q$ the value of $r$ lies in an interval whose ends come from two equal variables (or one zero variable).`,
      questions: [
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 6$ and $a^2 + b^2 + c^2 = 12$. Find $abc$.`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 5$ and $ab + bc + ca = 7$. Find the largest possible value of $c$.`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 6$ and $ab + bc + ca = 9$. Find the largest possible value of $abc$.`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 0$ and $a^2 + b^2 + c^2 = 6$. Find the largest possible value of $a^5 + b^5 + c^5$.`,
          difficulty: 2,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`Non-negative real numbers $a, b, c$ satisfy $a + b + c = 3$. Find the largest possible value of $a^2b^2 + b^2c^2 + c^2a^2$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{81}{16}$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 3$ and $ab + bc + ca = 0$. Prove that $a^4 + b^4 + c^4 \ge 33$, and find when equality holds.`,
          difficulty: 3,
          answer: String.raw`Equality when $(a, b, c)$ is a permutation of $(2, 2, -1)$. **Proof.** Key idea: here $a^4 + b^4 + c^4 = 81 + 12abc$, and $a, b, c$ are the three real roots of $t^3 - 3t^2 = abc$, which forces $abc$ to lie between the local extreme values $-4$ and $0$ of $t^3 - 3t^2$.`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 3$. Find the minimum value of $(a^2 + 1)(b^2 + 1)(c^2 + 1)$.`,
          difficulty: 4,
          answer: String.raw`$\dfrac{125}{16}$, at $(a, b, c) = \left(\frac12, \frac12, 2\right)$ and permutations. Key idea: $(a^2 + 1)(b^2 + 1)(c^2 + 1) = |(a + i)(b + i)(c + i)|^2 = (abc - 3)^2 + (ab + bc + ca - 1)^2$; for fixed $ab + bc + ca$ the first square is smallest when $abc$ is as close to $3$ as possible, which (as $abc = 3$ would need $ab + bc + ca < -6$) happens at an end of the range of $abc$, i.e. with two equal variables, where the product becomes $(t^2 + 1)^2\big((3 - 2t)^2 + 1\big)$, minimised at $t = \frac12$.`,
        },
      ],
    },
    {
      id: "A7-sos-cyclic",
      name: String.raw`SOS and cyclic sums`,
      tests: String.raw`Expressions in the differences $a - b$, $b - c$, $c - a$, and cyclic (not symmetric) inequalities. Write the difference as $\sum S\,(a - b)^2$ plus a multiple of $(a - b)(b - c)(c - a)$, or as a sum of squares of quadratic forms.`,
      questions: [
        {
          stem: String.raw`Find the constant $k$ such that
$$a^3 + b^3 + c^3 - 3abc = k\,(a + b + c)\big[(a - b)^2 + (b - c)^2 + (c - a)^2\big]$$
for all real numbers $a, b, c$.`,
          difficulty: 1,
          answer: String.raw`$\dfrac12$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $a + b + c = 7$ and $ab + bc + ca = 13$. Find $(a - b)^2 + (b - c)^2 + (c - a)^2$.`,
          difficulty: 1,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that
$$a^2 + b^2 + c^2 - ab - bc - ca \ge k(a - c)^2$$
for all real numbers $a \ge b \ge c$.`,
          difficulty: 2,
          answer: String.raw`$\dfrac34$`,
        },
        {
          stem: String.raw`Real numbers $a, b, c$ satisfy $(a - b)(b - c)(c - a) = 2$. Find the minimum value of $a^2 + b^2 + c^2 - ab - bc - ca$.`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Find the largest real number $k$ such that
$$a^3 + b^3 + c^3 - 3abc \ge k\left(a^2b + b^2c + c^2a - 3abc\right)$$
for all non-negative real numbers $a, b, c$.`,
          difficulty: 3,
          answer: String.raw`$\dfrac{3}{\sqrt[3]{4}}$`,
        },
        {
          stem: String.raw`Prove that for all non-negative real numbers $a, b, c$,
$$a^3 + b^3 + c^3 + 2\left(ab^2 + bc^2 + ca^2\right) \ge 3\left(a^2b + b^2c + c^2a\right).$$`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the difference equals $b(a - b)^2 + c(b - c)^2 + a(c - a)^2 + 4(a - b)(b - c)(c - a)$; the last term is negative only when, after a cyclic shift, $a > b > c$, and then AM-GM gives $4(a - b)(b - c)(a - c) \le (a - c)^3 \le a(a - c)^2$.`,
        },
        {
          stem: String.raw`Prove that for all real numbers $a, b, c$,
$$(a^2 + b^2 + c^2)^2 + 3(a + b + c)(a - b)(b - c)(c - a) \ge 3abc(a + b + c).$$`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: twice the difference of the two sides is the sum of squares $\sum_{\text{cyc}}\left(a^2 - b^2 - 2ab + bc + ca\right)^2$.`,
        },
      ],
    },
  ],
});
