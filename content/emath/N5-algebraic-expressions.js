H2.addTopic({
  id: "N5",
  title: "Algebraic Expressions and Formulae",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Simplifying, expanding and factorising expressions, algebraic fractions, formulae and number patterns.`,
  syllabus: {
    include: [
      String.raw`using letters to represent numbers`,
      String.raw`interpreting notations: $ab$ as $a \times b$; $\frac{a}{b}$ as $a \div b$ or $a \times \frac{1}{b}$; $a^2$ as $a \times a$, $a^3$ as $a \times a \times a$, $a^2b$ as $a \times a \times b$, …; $3y$ as $y + y + y$ or $3 \times y$; $3(x + y)$ as $3 \times (x + y)$; $\frac{3 + y}{5}$ as $(3 + y) \div 5$ or $\frac{1}{5} \times (3 + y)$`,
      String.raw`evaluation of algebraic expressions and formulae`,
      String.raw`translation of simple real-world situations into algebraic expressions`,
      String.raw`recognising and representing patterns/relationships by finding an algebraic expression for the $n$th term`,
      String.raw`addition and subtraction of linear expressions`,
      String.raw`simplification of linear expressions such as $-2(3x - 5) + 4x$ and $\frac{2x}{3} - \frac{3(x - 5)}{2}$`,
      String.raw`use brackets and extract common factors`,
      String.raw`factorisation of linear expressions of the form $ax + bx + kay + kby$`,
      String.raw`expansion of the product of algebraic expressions`,
      String.raw`changing the subject of a formula`,
      String.raw`finding the value of an unknown quantity in a given formula`,
      String.raw`use of $(a + b)^2 = a^2 + 2ab + b^2$, $(a - b)^2 = a^2 - 2ab + b^2$ and $a^2 - b^2 = (a + b)(a - b)$`,
      String.raw`factorisation of quadratic expressions $ax^2 + bx + c$`,
      String.raw`multiplication and division of simple algebraic fractions such as $\left(\frac{3a}{4b^2}\right)\left(\frac{5ab}{3}\right)$ and $\frac{3a}{4} \div \frac{9a^2}{10}$`,
      String.raw`addition and subtraction of algebraic fractions with linear or quadratic denominator such as $\frac{1}{x - 2} + \frac{2}{x - 3}$, $\frac{1}{x^2 - 9} + \frac{2}{x - 3}$ and $\frac{1}{x - 3} + \frac{2}{(x - 3)^2}$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Notation, like terms and writing expressions`,
      body: String.raw`- $3y$ means $3 \times y$; $a^2b$ means $a \times a \times b$; $\frac{3 + y}{5}$ means $(3 + y) \div 5$ — the fraction line acts like a bracket.
- **Like terms** have exactly the same letters with the same powers: $3x^2$ and $-5x^2$ are like terms, $3x^2$ and $3x$ are not. Only like terms can be added or subtracted.
- Writing expressions from words: "5 more than $x$" is $x + 5$; "$x$ shared among 4" is $\frac{x}{4}$; "the cost of $n$ pens at $p$ cents each" is $np$ cents.
- Watch units: convert everything to the same unit (cents or dollars, m or cm) before writing the expression.`,
    },
    {
      title: String.raw`Simplifying linear expressions`,
      body: String.raw`- Expand brackets first, then collect like terms.
- A minus sign in front of a bracket changes **every** sign inside: $-2(3x - 5) = -6x + 10$. The most common mistake is $-2(3x - 5) = -6x - 10$.
- With fractions, put everything over the LCM of the denominators, keeping each numerator in a bracket:
$$\frac{2x}{3} - \frac{3(x - 5)}{2} = \frac{4x - 9(x - 5)}{6} = \frac{-5x + 45}{6}.$$
- An *expression* has no "$=$" sign, so you cannot multiply it by 6 to clear the fractions. That only works for an equation.`,
    },
    {
      title: String.raw`Expansion and the three special products`,
      body: String.raw`Multiply every term in the first bracket by every term in the second, then collect like terms:
$$(3x + 2)(x - 5) = 3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10.$$

Memorise these three (they are not given in the exam):
- $(a + b)^2 = a^2 + 2ab + b^2$
- $(a - b)^2 = a^2 - 2ab + b^2$
- $(a + b)(a - b) = a^2 - b^2$

Common mistake: $(a + b)^2 \ne a^2 + b^2$. The middle term $2ab$ is always there.

The identities also help with mental arithmetic, e.g. $53^2 - 47^2 = (53 + 47)(53 - 47) = 600$.`,
      figure: [
        {
          type: "plot",
          x: [-0.9, 5.6], y: [-0.4, 5.9], equal: true, axes: false,
          polygons: [
            { points: [[0, 1.8], [3.2, 1.8], [3.2, 5], [0, 5]], fill: true, tone: "accent" },
            { points: [[3.2, 1.8], [5, 1.8], [5, 5], [3.2, 5]], fill: true, tone: "muted" },
            { points: [[0, 0], [3.2, 0], [3.2, 1.8], [0, 1.8]], fill: true, tone: "muted" },
            { points: [[3.2, 0], [5, 0], [5, 1.8], [3.2, 1.8]], fill: true, tone: "good" },
          ],
          labels: [
            { x: 1.6, y: 3.4, text: "a²", style: "italic" },
            { x: 4.1, y: 3.4, text: "ab", style: "italic" },
            { x: 1.6, y: 0.9, text: "ab", style: "italic" },
            { x: 4.1, y: 0.9, text: "b²", style: "italic" },
            { x: 1.6, y: 5.35, text: "a", style: "italic" },
            { x: 4.1, y: 5.35, text: "b", style: "italic" },
            { x: -0.35, y: 3.4, text: "a", style: "italic" },
            { x: -0.35, y: 0.9, text: "b", style: "italic" },
          ],
          caption: String.raw`$(a + b)^2 = a^2 + 2ab + b^2$: the square has two $ab$ pieces, not none.`,
          alt: "A square of side a + b split into four pieces: a square a² in one corner, a square b² in the opposite corner, and two rectangles each of area ab.",
        },
        {
          type: "plot",
          x: [-0.9, 5.6], y: [-0.4, 5.9], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [5, 0], [5, 3.2], [3.2, 3.2], [3.2, 5], [0, 5]], fill: true, tone: "accent" },
            { points: [[3.2, 3.2], [5, 3.2], [5, 5], [3.2, 5]], dashed: true, tone: "muted" },
          ],
          segments: [{ from: [0, 3.2], to: [3.2, 3.2], dashed: true, thin: true, tone: "ink" }],
          labels: [
            { x: 2.5, y: -0.3, text: "a", style: "italic" },
            { x: -0.35, y: 2.5, text: "a", style: "italic" },
            { x: 4.1, y: 5.35, text: "b", style: "italic" },
            { x: 5.35, y: 4.1, text: "b", style: "italic" },
            { x: 4.1, y: 4.1, text: "b²", style: "italic", tone: "muted" },
            { x: 2.5, y: 1.6, text: "a(a − b)", style: "italic" },
            { x: 1.6, y: 4.1, text: "b(a − b)", style: "italic" },
          ],
          caption: String.raw`$a^2 - b^2$: the two strips of width $a - b$ placed end to end make a rectangle $(a + b)$ by $(a - b)$.`,
          alt: "A square of side a with a small square of side b removed from one corner, leaving an L-shape. A dashed line cuts the L-shape into a rectangle a by (a − b) and a rectangle b by (a − b).",
        },
      ],
    },
    {
      title: String.raw`Factorisation: common factor, grouping, special products`,
      body: String.raw`Factorising is expanding in reverse. Always try these in order:

1. **Take out the HCF** of all the terms: $8a^2b - 12ab^2 = 4ab(2a - 3b)$.
2. **Grouping** (four terms): pair the terms so that each pair has a common factor, then take out the common bracket:
$$ax + bx + kay + kby = x(a + b) + ky(a + b) = (a + b)(x + ky).$$
3. **Difference of two squares**: $9m^2 - 25 = (3m + 5)(3m - 5)$.
4. **Perfect squares**: $9x^2 - 12x + 4 = (3x - 2)^2$.

"Factorise completely" means keep going until no bracket can be factorised further: $2x^2 - 18 = 2(x^2 - 9) = 2(x + 3)(x - 3)$.`,
    },
    {
      title: String.raw`Factorising quadratics $ax^2 + bx + c$`,
      body: String.raw`Look for two brackets $(px + r)(qx + s)$ with $pq = a$, $rs = c$ and $ps + qr = b$. A multiplication frame keeps the working tidy. For $3x^2 + 5x - 2$:

| $\times$ | $x$ | $+2$ |
| $3x$ | $3x^2$ | $6x$ |
| $-1$ | $-x$ | $-2$ |

The four cells must add up to the expression: $3x^2 + 6x - x - 2 = 3x^2 + 5x - 2$. So $3x^2 + 5x - 2 = (3x - 1)(x + 2)$.

- Take out any common factor first: $2x^2 + 2x - 12 = 2(x^2 + x - 6) = 2(x + 3)(x - 2)$.
- If $c > 0$ the two numbers have the same sign as $b$; if $c < 0$ they have opposite signs.
- Always check by expanding.`,
    },
    {
      title: String.raw`Simplifying, multiplying and dividing algebraic fractions`,
      body: String.raw`- **Simplify**: factorise the numerator and denominator fully, then cancel common **factors**:
$$\frac{x^2 - 9}{x^2 + x - 6} = \frac{(x + 3)(x - 3)}{(x + 3)(x - 2)} = \frac{x - 3}{x - 2}.$$
- You may only cancel a factor of the whole top and the whole bottom. $\frac{x + 3}{x + 5}$ cannot be simplified — the $x$'s are terms, not factors.
- **Multiply**: factorise, cancel, then multiply tops and bottoms.
- **Divide**: multiply by the reciprocal of the second fraction: $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$.`,
    },
    {
      title: String.raw`Adding and subtracting algebraic fractions`,
      body: String.raw`1. Factorise each denominator.
2. Find the **lowest common denominator** (LCD). Use each different factor once, with its highest power.
3. Rewrite each fraction over the LCD, keeping numerators in brackets, then combine.
4. Expand and simplify the numerator only. Leave the denominator factorised.

| Denominators | LCD |
| $x - 2$ and $x - 3$ | $(x - 2)(x - 3)$ |
| $x^2 - 9$ and $x - 3$ | $(x + 3)(x - 3)$ |
| $x - 3$ and $(x - 3)^2$ | $(x - 3)^2$ |

Common mistake: subtracting a numerator without a bracket, e.g. $\frac{2}{x} - \frac{x - 1}{x} = \frac{2 - x - 1}{x}$ is wrong; it is $\frac{2 - (x - 1)}{x} = \frac{3 - x}{x}$.`,
    },
    {
      title: String.raw`Formulae: substitution and changing the subject`,
      body: String.raw`**Substitution**: replace each letter by its value **in brackets**, especially negatives: if $a = -3$, then $a^2 = (-3)^2 = 9$, not $-9$.

**Changing the subject** — undo what has been done to the new subject, in reverse order, doing the same to both sides:
- Clear fractions and square roots first (multiply up; square both sides).
- If the new subject appears **twice**, collect those terms on one side and **factorise** it out:
$$y = \frac{x + 2}{x - 1} \;\Rightarrow\; xy - y = x + 2 \;\Rightarrow\; x(y - 1) = y + 2 \;\Rightarrow\; x = \frac{y + 2}{y - 1}.$$
- Taking a square root gives $\pm$; keep only the sign that makes sense (e.g. a length is positive).

To find an unknown that is not the subject, you may either substitute first and then solve, or change the subject first. Substituting first is usually quicker.`,
    },
    {
      title: String.raw`Number patterns and the $n$th term`,
      body: String.raw`For a pattern that goes up (or down) by the **same amount** $d$ each time:
$$T_n = dn + (T_1 - d), \qquad \text{e.g. } 4, 7, 10, 13, \ldots \Rightarrow T_n = 3n + 1.$$

- Check your formula with $n = 1$ and $n = 2$.
- To decide if a number $N$ is in the pattern, solve $T_n = N$: it is in the pattern only if $n$ is a **positive whole number**.
- Some patterns are not linear. Compare them with patterns you know: square numbers $n^2$, $n(n + 1)$, powers $2^n$. For example, $2, 5, 10, 17, \ldots$ is $n^2 + 1$.
- For shape patterns, link the formula to the picture: each new square adds 3 sticks.`,
      figure: {
        type: "plot",
        x: [-0.4, 8.4], y: [-1.15, 1.35], equal: true, axes: false,
        segments: [
          { from: [0, 0], to: [1, 0] }, { from: [0, 1], to: [1, 1] }, { from: [0, 0], to: [0, 1] }, { from: [1, 0], to: [1, 1] },
          { from: [2, 0], to: [4, 0] }, { from: [2, 1], to: [4, 1] }, { from: [2, 0], to: [2, 1] }, { from: [3, 0], to: [3, 1] }, { from: [4, 0], to: [4, 1] },
          { from: [5, 0], to: [8, 0] }, { from: [5, 1], to: [8, 1] }, { from: [5, 0], to: [5, 1] }, { from: [6, 0], to: [6, 1] }, { from: [7, 0], to: [7, 1] }, { from: [8, 0], to: [8, 1] },
          { from: [7, 0], to: [8, 0], tone: "accent" }, { from: [7, 1], to: [8, 1], tone: "accent" }, { from: [8, 0], to: [8, 1], tone: "accent" },
        ],
        labels: [
          { x: 0.5, y: -0.4, text: "n = 1", style: "small" }, { x: 0.5, y: -0.85, text: "4 sticks", style: "small" },
          { x: 3, y: -0.4, text: "n = 2", style: "small" }, { x: 3, y: -0.85, text: "7 sticks", style: "small" },
          { x: 6.5, y: -0.4, text: "n = 3", style: "small" }, { x: 6.5, y: -0.85, text: "10 sticks", style: "small" },
          { x: 7.5, y: 1.25, text: "+3", style: "small", tone: "accent" },
        ],
        caption: String.raw`Each new square needs 3 more sticks, so $T_n = 3n + 1$.`,
        alt: "Matchstick pattern: one square made of 4 sticks, two squares in a row made of 7 sticks, three squares in a row made of 10 sticks. The 3 sticks added to make the third square are highlighted.",
      },
    },
  ],
  archetypes: [
    {
      id: "N5-simplify-linear",
      name: String.raw`Simplifying linear expressions`,
      tests: String.raw`Expanding brackets with negative multipliers and combining fractions over a common denominator. Short Paper 1 question; the sign of the second bracket is where marks are lost.`,
      questions: [
        {
          stem: String.raw`Simplify`,
          parts: [
            { label: "(a)", text: String.raw`$5(2x - 3) - 3(x - 4)$,`, marks: 2 },
            { label: "(b)", text: String.raw`$-(4y - 3x) - 2(x - 3y)$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\dfrac{3x}{4} - \dfrac{2(x - 1)}{3}$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Express $\dfrac{2x - 1}{3} - \dfrac{x - 5}{6}$ as a single fraction in its simplest form.`,
          marks: 2,
        },
      ],
    },
    {
      id: "N5-expand-special-products",
      name: String.raw`Expansion and the special products`,
      tests: String.raw`Expanding products of brackets and using $(a \pm b)^2$ and $a^2 - b^2$ to simplify or to evaluate quickly. Often a "without using a calculator" part.`,
      questions: [
        {
          stem: String.raw`Expand and simplify`,
          parts: [
            { label: "(a)", text: String.raw`$(2x - 3)(x + 4)$,`, marks: 2 },
            { label: "(b)", text: String.raw`$(3a - 2b)^2 - (3a + 2b)(3a - 2b)$,`, marks: 2 },
            { label: "(c)", text: String.raw`$(x + 2)(x^2 - 3x + 1)$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Use the identity $a^2 - b^2 = (a + b)(a - b)$ to find the value of $2027^2 - 2023^2$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given that $x + y = 9$ and $xy = 14$, find the value of $x^2 + y^2$.`, marks: 2 },
            { label: "(c)", text: String.raw`Given that $p^2 - q^2 = 45$ and $p - q = 5$, find the value of $p + q$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N5-factorise-completely",
      name: String.raw`Factorising completely`,
      tests: String.raw`Choosing the right method — common factor, grouping, difference of two squares, perfect square or quadratic trinomial — and factorising fully. Several short parts in Paper 1.`,
      questions: [
        {
          stem: String.raw`Factorise completely`,
          parts: [
            { label: "(a)", text: String.raw`$6x^2y - 9xy^2$,`, marks: 1 },
            { label: "(b)", text: String.raw`$2ax - 6bx + ay - 3by$,`, marks: 2 },
            { label: "(c)", text: String.raw`$12m^2 - 27n^2$,`, marks: 2 },
            { label: "(d)", text: String.raw`$3x^2 - 10x - 8$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Factorise completely`,
          parts: [
            { label: "(a)", text: String.raw`$4x^2 - 12x + 9$,`, marks: 1 },
            { label: "(b)", text: String.raw`$(x + 3)^2 - 16$,`, marks: 2 },
            { label: "(c)", text: String.raw`$6x^2 + 7xy - 3y^2$,`, marks: 2 },
            { label: "(d)", text: String.raw`$5px - 10py - qx + 2qy$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N5-fractions-simplify-multiply",
      name: String.raw`Simplifying, multiplying and dividing algebraic fractions`,
      tests: String.raw`Factorising before cancelling, and turning division into multiplication by the reciprocal. Recognise it by "Simplify" with a quadratic on top or bottom.`,
      questions: [
        {
          stem: String.raw`Simplify`,
          parts: [
            { label: "(a)", text: String.raw`$\dfrac{x^2 - 9}{2x^2 + 5x - 3}$,`, marks: 3 },
            { label: "(b)", text: String.raw`$\dfrac{3a}{4b^2} \times \dfrac{8b^3}{9a^2}$,`, marks: 2 },
            { label: "(c)", text: String.raw`$\dfrac{4a}{5} \div \dfrac{8a^2}{15}$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Simplify`,
          parts: [
            { label: "(a)", text: String.raw`$\dfrac{6x^2 - 3xy}{4x^2 - y^2}$,`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{x^2 - 4x}{x^2 - 16} \div \dfrac{3x}{x + 4}$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N5-fractions-add-subtract",
      name: String.raw`Adding and subtracting algebraic fractions`,
      tests: String.raw`Writing two fractions with linear or quadratic denominators as a single fraction: factorising denominators, finding the LCD and handling the minus sign. Phrased "Express as a single fraction in its simplest form".`,
      questions: [
        {
          stem: String.raw`Express each of the following as a single fraction in its simplest form.`,
          parts: [
            { label: "(a)", text: String.raw`$\dfrac{3}{x + 1} + \dfrac{2}{x - 4}$`, marks: 2 },
            { label: "(b)", text: String.raw`$\dfrac{3}{x^2 - 4} - \dfrac{1}{x + 2}$`, marks: 3 },
            { label: "(c)", text: String.raw`$\dfrac{2}{x + 5} - \dfrac{3}{(x + 5)^2}$`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Express each of the following as a single fraction in its simplest form.`,
          parts: [
            { label: "(a)", text: String.raw`$\dfrac{5}{2x + 1} - \dfrac{3}{x - 4}$`, marks: 3 },
            { label: "(b)", text: String.raw`$\dfrac{x}{x^2 - x - 6} - \dfrac{2}{x - 3}$`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "N5-change-subject",
      name: String.raw`Changing the subject of a formula`,
      tests: String.raw`Rearranging formulae with fractions, square roots, or the new subject appearing twice (collect and factorise). Usually followed by substituting values.`,
      questions: [
        {
          stem: String.raw`It is given that $y = \dfrac{3x + 2}{x - 4}$.`,
          parts: [
            { label: "(a)", text: String.raw`Express $x$ in terms of $y$.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the value of $x$ when $y = 5$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`It is given that $p = \sqrt{\dfrac{2q - r}{q}}$.`,
          parts: [
            { label: "(a)", text: String.raw`Make $q$ the subject of the formula.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the value of $q$ when $p = 0.8$ and $r = 6.8$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N5-substitution",
      name: String.raw`Evaluating expressions and finding an unknown in a formula`,
      tests: String.raw`Substituting values (including negatives and fractions) into an expression or a real-world formula, and finding an unknown that is not the subject.`,
      questions: [
        {
          stem: String.raw`The energy, $E$ joules, of a moving object is given by the formula
$$E = \frac{1}{2}mv^2 + mgh.$$`,
          parts: [
            { label: "(a)", text: String.raw`Find $E$ when $m = 2.5$, $v = 4$, $g = 9.8$ and $h = 3$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $h$ when $E = 200$, $m = 4$, $v = 6$ and $g = 9.8$. Give your answer correct to 3 significant figures.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Without using a calculator, answer the following.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Given that $a = -3$, $b = 2$ and $c = -\frac{1}{2}$, find the value of $\dfrac{a^2 - 4bc}{a - b}$.`, marks: 2 },
            { label: "(b)", text: String.raw`The formula $\dfrac{1}{u} + \dfrac{1}{v} = \dfrac{1}{f}$ is used in optics. Find $v$ when $u = 12$ and $f = 8$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N5-nth-term-patterns",
      name: String.raw`Number patterns and the $n$th term`,
      tests: String.raw`Continuing a pattern of shapes or numbers, finding an expression for the $n$th term, finding which term has a given value, and explaining why a number cannot appear.`,
      questions: [
        {
          stem: String.raw`The diagram shows a pattern of "houses" made from matchsticks.`,
          figure: {
            type: "plot",
            x: [-0.4, 8.4], y: [-0.85, 1.95], equal: true, axes: false,
            segments: [
              { from: [0, 0], to: [1, 0] }, { from: [0, 1], to: [1, 1] }, { from: [0, 0], to: [0, 1] }, { from: [1, 0], to: [1, 1] },
              { from: [0, 1], to: [0.5, 1.6] }, { from: [0.5, 1.6], to: [1, 1] },
              { from: [2, 0], to: [4, 0] }, { from: [2, 1], to: [4, 1] }, { from: [2, 0], to: [2, 1] }, { from: [3, 0], to: [3, 1] }, { from: [4, 0], to: [4, 1] },
              { from: [2, 1], to: [2.5, 1.6] }, { from: [2.5, 1.6], to: [3, 1] }, { from: [3, 1], to: [3.5, 1.6] }, { from: [3.5, 1.6], to: [4, 1] },
              { from: [5, 0], to: [8, 0] }, { from: [5, 1], to: [8, 1] }, { from: [5, 0], to: [5, 1] }, { from: [6, 0], to: [6, 1] }, { from: [7, 0], to: [7, 1] }, { from: [8, 0], to: [8, 1] },
              { from: [5, 1], to: [5.5, 1.6] }, { from: [5.5, 1.6], to: [6, 1] }, { from: [6, 1], to: [6.5, 1.6] }, { from: [6.5, 1.6], to: [7, 1] }, { from: [7, 1], to: [7.5, 1.6] }, { from: [7.5, 1.6], to: [8, 1] },
            ],
            labels: [
              { x: 0.5, y: -0.45, text: "Figure 1", style: "small" },
              { x: 3, y: -0.45, text: "Figure 2", style: "small" },
              { x: 6.5, y: -0.45, text: "Figure 3", style: "small" },
            ],
            alt: "Figure 1 is one house: a square with a triangular roof, 6 matchsticks. Figure 2 is two houses side by side sharing a wall, 11 matchsticks. Figure 3 is three houses in a row, 16 matchsticks.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the number of matchsticks in Figure 5.`, marks: 1 },
            { label: "(b)", text: String.raw`Find an expression, in terms of $n$, for the number of matchsticks in Figure $n$.`, marks: 1 },
            { label: "(c)", text: String.raw`Which figure is made from 201 matchsticks?`, marks: 1 },
            { label: "(d)", text: String.raw`Explain why no figure in the pattern is made from exactly 300 matchsticks.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The first four lines of a number pattern are shown below.
$$\begin{aligned} 1 \times 3 &= 3 \\ 2 \times 4 &= 8 \\ 3 \times 5 &= 15 \\ 4 \times 6 &= 24 \end{aligned}$$`,
          parts: [
            { label: "(a)", text: String.raw`Write down the 6th line of the pattern.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down an expression, in terms of $n$, for the result $T_n$ of the $n$th line.`, marks: 1 },
            { label: "(c)", text: String.raw`Show that $T_n + 1$ is always a perfect square.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the value of $n$ for which $T_n = 323$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N5-forming-expressions",
      name: String.raw`Writing expressions for real-world situations`,
      tests: String.raw`Translating a word description (costs, lengths, areas) into an algebraic expression, simplifying it, and using it to show a result or evaluate.`,
      questions: [
        {
          stem: String.raw`A shop sells pens at $x$ cents each and notebooks at $(2x + 30)$ cents each. Ali buys 5 pens and 3 notebooks.`,
          parts: [
            { label: "(a)", text: String.raw`Write down an expression, in terms of $x$, for the total cost in cents. Simplify your answer.`, marks: 1 },
            { label: "(b)", text: String.raw`Ali pays with a \$10 note. Find an expression, in terms of $x$, for his change in **dollars**.`, marks: 2 },
            { label: "(c)", text: String.raw`Find his change when $x = 45$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The diagram shows a rectangle with length $(3x + 2)$ cm and width $(x - 1)$ cm, where $x > 1$.`,
          figure: {
            type: "plot",
            x: [-0.5, 7.4], y: [-0.9, 2], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [5.5, 0], [5.5, 1], [0, 1]], fill: true, tone: "muted" }],
            labels: [
              { x: 2.75, y: -0.4, text: "(3x + 2) cm", style: "italic" },
              { x: 5.65, y: 0.5, text: "(x − 1) cm", pos: "e", style: "italic" },
            ],
            alt: "A long, thin rectangle with its length labelled (3x + 2) cm and its width labelled (x − 1) cm.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find an expression, in terms of $x$, for the perimeter of the rectangle.`, marks: 1 },
            { label: "(b)", text: String.raw`Find an expression, in terms of $x$, for the area of the rectangle. Give your answer in expanded form.`, marks: 2 },
            { label: "(c)", text: String.raw`A square has the same perimeter as the rectangle. Show that the area of the square is greater than the area of the rectangle by $\dfrac{(2x + 3)^2}{4}$ cm$^2$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
