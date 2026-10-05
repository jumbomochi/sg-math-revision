H2.addTopic({
  id: "6.1",
  title: "Probability",
  paper: "Paper 2B",
  summary: String.raw`Permutations and combinations, Venn and tree diagrams, conditional probability and independence.`,
  syllabus: {
    include: [
      String.raw`addition and multiplication principles for counting`,
      String.raw`concepts of permutation ($^n\mathrm{P}_r$) and combination ($^n\mathrm{C}_r$)`,
      String.raw`arrangements of objects in a line or in a circle, including cases involving repetition and restriction`,
      String.raw`addition and multiplication of probabilities`,
      String.raw`mutually exclusive events and independent events`,
      String.raw`use of tables of outcomes, Venn diagrams, tree diagrams, and permutations and combinations techniques to calculate probabilities`,
      String.raw`calculation of conditional probabilities in simple cases`,
      String.raw`use of $\P(A') = 1 - \P(A)$, $\P(A \cup B) = \P(A) + \P(B) - \P(A \cap B)$ and $\P(A \mid B) = \dfrac{\P(A \cap B)}{\P(B)}$`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Counting principles, $^n\mathrm{P}_r$ and $^n\mathrm{C}_r$`,
      body: String.raw`- **Multiplication principle**: stages done one after another (AND) — multiply. **Addition principle**: mutually exclusive cases (OR) — add.
- $^n\mathrm{P}_r = \dfrac{n!}{(n-r)!}$ counts **ordered** arrangements of $r$ from $n$ distinct objects; $^n\mathrm{C}_r = \dfrac{n!}{r!\,(n-r)!}$ counts **unordered** selections. The $^n\mathrm{C}_r$ formula is in MF27 (with the binomial expansion); memorise $^n\mathrm{P}_r$.
- Decide first: does order matter (arrangement) or not (selection)? Many questions are "select, then arrange".
- Always state the method in words, e.g. "number of ways $= {}^5\mathrm{C}_2 \times 3!$", not just the final number.`,
    },
    {
      title: String.raw`Arrangements in a line with restrictions`,
      body: String.raw`- **Together**: glue the group into one block, arrange the blocks, then multiply by the internal arrangements of the block.
- **Not together / no two adjacent (slotting)**: arrange the *other* objects first, then choose and order slots in the gaps (including both ends): $n$ objects create $n + 1$ gaps.
- **Restricted positions (ends, first digit)**: fill the restricted positions first, then the rest.
- **Complement**: "not all together" $=$ total $-$ "all together". Note that "not all together" is **not** the same as "no two together".
- Digit problems: watch for overlapping conditions (e.g. a first digit that is also even) — split into cases.`,
      figure: [
        {
          type: "plot", x: [0, 10], y: [0.5, 2.5], equal: true, axes: false,
          polygons: [{ points: [[0.85, 0.85], [3.15, 0.85], [3.15, 2.15], [0.85, 2.15]], tone: "warn" },
            { points: [[1, 1], [2, 1], [2, 2], [1, 2]], tone: "ink", label: "A", labelAt: [1.5, 1.5], style: "plain" },
            { points: [[2, 1], [3, 1], [3, 2], [2, 2]], tone: "ink", label: "B", labelAt: [2.5, 1.5], style: "plain" },
            { points: [[3.8, 1], [4.8, 1], [4.8, 2], [3.8, 2]], tone: "ink", label: "C", labelAt: [4.3, 1.5], style: "plain" },
            { points: [[5.1, 1], [6.1, 1], [6.1, 2], [5.1, 2]], tone: "ink", label: "D", labelAt: [5.6, 1.5], style: "plain" },
            { points: [[6.4, 1], [7.4, 1], [7.4, 2], [6.4, 2]], tone: "ink", label: "E", labelAt: [6.9, 1.5], style: "plain" },
            { points: [[7.7, 1], [8.7, 1], [8.7, 2], [7.7, 2]], tone: "ink", label: "F", labelAt: [8.2, 1.5], style: "plain" }],
          caption: String.raw`**Together**: the block counts as one unit, then arrange inside it: $5! \times 2!$.`,
          alt: "Six people in a row where A and B are glued into one block, shown by a shaded box around them, followed by C, D, E and F.",
        },
        {
          type: "plot", x: [0, 10], y: [0, 2.3], equal: true, axes: false,
          polygons: [{ points: [[1.4, 1.1], [2.4, 1.1], [2.4, 2.1], [1.4, 2.1]], tone: "ink", label: "C", labelAt: [1.9, 1.6], style: "plain" },
            { points: [[2.9, 1.1], [3.9, 1.1], [3.9, 2.1], [2.9, 2.1]], tone: "ink", label: "D", labelAt: [3.4, 1.6], style: "plain" },
            { points: [[4.4, 1.1], [5.4, 1.1], [5.4, 2.1], [4.4, 2.1]], tone: "ink", label: "E", labelAt: [4.9, 1.6], style: "plain" },
            { points: [[5.9, 1.1], [6.9, 1.1], [6.9, 2.1], [5.9, 2.1]], tone: "ink", label: "F", labelAt: [6.4, 1.6], style: "plain" },
            { points: [[7.4, 1.1], [8.4, 1.1], [8.4, 2.1], [7.4, 2.1]], tone: "ink", label: "G", labelAt: [7.9, 1.6], style: "plain" }],
          segments: [{ from: [1.15, 0.25], to: [1.15, 1.0], arrow: true, thin: true, tone: "warn" },
            { from: [2.65, 0.25], to: [2.65, 1.0], arrow: true, thin: true, tone: "warn" },
            { from: [4.15, 0.25], to: [4.15, 1.0], arrow: true, thin: true, tone: "warn" },
            { from: [5.65, 0.25], to: [5.65, 1.0], arrow: true, thin: true, tone: "warn" },
            { from: [7.15, 0.25], to: [7.15, 1.0], arrow: true, thin: true, tone: "warn" },
            { from: [8.65, 0.25], to: [8.65, 1.0], arrow: true, thin: true, tone: "warn" }],
          caption: String.raw`**Slotting**: arrange the others first; $n$ objects leave $n + 1$ gaps, ends included.`,
          alt: "Five people C, D, E, F, G in a row with arrows pointing to the six gaps: one before C, one between each adjacent pair, and one after G.",
        },
      ],
    },
    {
      title: String.raw`Identical objects and repetition`,
      body: String.raw`$n$ objects with $p$ alike of one kind, $q$ alike of another, … can be arranged in
$$\frac{n!}{p!\,q!\,\cdots}$$
ways. When the identical letters are glued or slotted, divide only by the repeats that remain.

**Selections** from a word with repeated letters cannot be done with a single $^n\mathrm{C}_r$: split into cases by the pattern of repeats (e.g. all different / one pair / two pairs) and add.`,
    },
    {
      title: String.raw`Circular arrangements`,
      body: String.raw`- $n$ distinct objects around a round table (unnumbered seats): $(n-1)!$ — fix one person to remove rotations.
- **Numbered / distinguishable seats**: multiply by $n$ (giving $n!$), since rotations are now different.
- **Alternate** seating of $k$ men and $k$ women: seat the men first, $(k-1)!$, then the women in the $k$ gaps, $k!$.
- **Separated** in a circle: seat the others first; $m$ people in a circle create $m$ gaps (not $m + 1$).
- Splitting into two tables: choose who sits at each table, then arrange each circle.`,
      figure: [
        {
          type: "plot", x: [0, 10], y: [0.35, 4.35], equal: true, axes: false,
          circles: [{ c: [2.4, 2.3], r: 1.3, fill: true, tone: "muted" }, { c: [7.6, 2.3], r: 1.3, fill: true, tone: "muted" }],
          points: [{ x: 2.400, y: 3.600 }, { x: 3.636, y: 2.702 }, { x: 3.164, y: 1.248 }, { x: 1.636, y: 1.248 }, { x: 1.164, y: 2.702 }, { x: 7.600, y: 3.600 }, { x: 8.836, y: 2.702 }, { x: 8.364, y: 1.248 }, { x: 6.836, y: 1.248 }, { x: 6.364, y: 2.702 }],
          labels: [{ x: 2.400, y: 4.080, text: "A", style: "italic" },
            { x: 4.093, y: 2.850, text: "B", style: "italic" },
            { x: 3.446, y: 0.860, text: "C", style: "italic" },
            { x: 1.354, y: 0.860, text: "D", style: "italic" },
            { x: 0.707, y: 2.850, text: "E", style: "italic" },
            { x: 7.600, y: 4.080, text: "E", style: "italic" },
            { x: 9.293, y: 2.850, text: "A", style: "italic" },
            { x: 8.646, y: 0.860, text: "B", style: "italic" },
            { x: 6.554, y: 0.860, text: "C", style: "italic" },
            { x: 5.907, y: 2.850, text: "D", style: "italic" },
            { x: 5, y: 2.3, text: "=", style: "plain" }],
          caption: String.raw`Moving everyone one seat round gives the **same** arrangement, so fix one person: $(n-1)!$.`,
          alt: "Two round tables with five people. On the left, clockwise from the top: A, B, C, D, E. On the right everyone has moved one seat clockwise: E, A, B, C, D. The neighbours of every person are unchanged, so the two arrangements are the same.",
        },
        {
          type: "plot", x: [0, 10], y: [0, 4.6], equal: true, axes: false,
          circles: [{ c: [5, 2.3], r: 1.3, fill: true, tone: "muted" }],
          points: [{ x: 5.000, y: 3.600 }, { x: 6.300, y: 2.300 }, { x: 5.000, y: 1.000 }, { x: 3.700, y: 2.300 }],
          segments: [{ from: [6.520, 3.820], to: [6.096, 3.396], arrow: true, thin: true, tone: "warn" },
            { from: [6.520, 0.780], to: [6.096, 1.204], arrow: true, thin: true, tone: "warn" },
            { from: [3.480, 0.780], to: [3.904, 1.204], arrow: true, thin: true, tone: "warn" },
            { from: [3.480, 3.820], to: [3.904, 3.396], arrow: true, thin: true, tone: "warn" }],
          caption: String.raw`In a circle, $m$ people leave only $m$ gaps (here 4), not $m + 1$.`,
          alt: "Four people seated around a round table, with arrows pointing to the four gaps between neighbouring people.",
        },
      ],
    },
    {
      title: String.raw`Selections: "at least" and cases`,
      body: String.raw`- "At least one" — usually fastest as total $-$ none.
- Otherwise list the **cases** exhaustively and add, e.g. "more women than men" in a committee of 5 means 3W2M, 4W1M or 5W0M.
- **Overcounting trap**: "choose one man, one woman, then any 3 others" counts the same committee many times. Always split into cases instead.
- A particular person included: fix them in and choose the rest from the remaining people.`,
    },
    {
      title: String.raw`Grouping and distribution`,
      body: String.raw`- Divide $n$ distinct objects into groups of **different** sizes $a, b, c$: $\dfrac{n!}{a!\,b!\,c!}$.
- Groups of the **same** size that are unlabelled: divide further by the number of ways of ordering those equal groups, e.g. 9 people into three groups of 3: $\dfrac{9!}{3!\,3!\,3!\,3!}$.
- If the groups are **labelled** (given to named people, rooms, teams A/B/C), do not divide by that extra factor.
- "Each person receives at least one": split by the possible group sizes, e.g. 6 into 3 nonempty groups: $(4,1,1), (3,2,1), (2,2,2)$.`,
    },
    {
      title: String.raw`Probability rules; mutually exclusive vs independent`,
      body: String.raw`- $\P(A') = 1 - \P(A)$; $\P(A \cup B) = \P(A) + \P(B) - \P(A \cap B)$ (memorise).
- **Mutually exclusive**: $\P(A \cap B) = 0$, so $\P(A \cup B) = \P(A) + \P(B)$.
- **Independent**: $\P(A \cap B) = \P(A)\,\P(B)$, equivalently $\P(A \mid B) = \P(A)$. To *show* independence, compute both sides numerically and compare.
- Two events with nonzero probabilities cannot be both mutually exclusive and independent.
- Range of $\P(A \cap B)$: $\max(0,\ \P(A) + \P(B) - 1) \le \P(A \cap B) \le \min(\P(A), \P(B))$. Justify using a Venn diagram (largest when one set is inside the other; smallest when the union is as large as possible).
- Venn diagrams: fill the **innermost** region first and work outwards; label unknowns $x$, $y$ and form equations.`,
      figure: [
        {
          type: "plot", x: [0, 10], y: [0, 6], equal: true, axes: false,
          shade: [{ upper: "x => 3 + Math.min(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1))))", lower: "x => 3 - Math.min(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1))))", from: 3.9, to: 6.1, tone: "warn" }],
          polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink", label: "S", labelAt: [0.75, 5.25] }],
          circles: [{ c: [3.9, 3], r: 2.2, tone: "ink", label: "A", labelAt: [2.1, 5.15] }, { c: [6.1, 3], r: 2.2, tone: "ink", label: "B", labelAt: [7.9, 5.15] }],
          caption: String.raw`$A \cap B$`,
          alt: "Venn diagram of two overlapping events A and B with only the overlap shaded.",
        },
        {
          type: "plot", x: [0, 10], y: [0, 6], equal: true, axes: false,
          shade: [{ upper: "x => 3 + Math.max(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1))))", lower: "x => 3 - Math.max(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1))))", from: 1.7, to: 8.3, tone: "warn" }],
          polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink", label: "S", labelAt: [0.75, 5.25] }],
          circles: [{ c: [3.9, 3], r: 2.2, tone: "ink", label: "A", labelAt: [2.1, 5.15] }, { c: [6.1, 3], r: 2.2, tone: "ink", label: "B", labelAt: [7.9, 5.15] }],
          caption: String.raw`$A \cup B$`,
          alt: "Venn diagram of two overlapping events A and B with everything inside either circle shaded.",
        },
        {
          type: "plot", x: [0, 10], y: [0, 6], equal: true, axes: false,
          shade: [{ upper: "x => 3 + Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1)))", lower: "x => x < 6.1 ? 3 + Math.min(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1)))) : 3 - Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1)))", from: 3.9, to: 8.3, tone: "warn" },
            { upper: "x => 3 - Math.min(Math.sqrt(Math.max(0, 4.84-(x-3.9)*(x-3.9))), Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1))))", lower: "x => 3 - Math.sqrt(Math.max(0, 4.84-(x-6.1)*(x-6.1)))", from: 3.9, to: 6.1, tone: "warn" }],
          polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink", label: "S", labelAt: [0.75, 5.25] }],
          circles: [{ c: [3.9, 3], r: 2.2, tone: "ink", label: "A", labelAt: [2.1, 5.15] }, { c: [6.1, 3], r: 2.2, tone: "ink", label: "B", labelAt: [7.9, 5.15] }],
          caption: String.raw`$A' \cap B$: in $B$ but not in $A$`,
          alt: "Venn diagram with the part of circle B outside circle A shaded, a crescent shape.",
        },
        {
          type: "plot", x: [0, 10], y: [0, 6], equal: true, axes: false,
          shade: [{ upper: "x => 3 + Math.sqrt(Math.max(0, 3.24-(x-2.9)*(x-2.9)))", lower: "x => 3 - Math.sqrt(Math.max(0, 3.24-(x-2.9)*(x-2.9)))", from: 1.1, to: 4.7, tone: "warn" },
            { upper: "x => 3 + Math.sqrt(Math.max(0, 3.24-(x-7.1)*(x-7.1)))", lower: "x => 3 - Math.sqrt(Math.max(0, 3.24-(x-7.1)*(x-7.1)))", from: 5.3, to: 8.9, tone: "warn" }],
          polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink", label: "S", labelAt: [0.75, 5.25] }],
          circles: [{ c: [2.9, 3], r: 1.8, tone: "ink", label: "A", labelAt: [1.2, 4.9] }, { c: [7.1, 3], r: 1.8, tone: "ink", label: "B", labelAt: [8.8, 4.9] }],
          caption: String.raw`Mutually exclusive: no overlap, so $\P(A \cup B) = \P(A) + \P(B)$`,
          alt: "Venn diagram with two separate circles A and B that do not overlap; both are shaded.",
        },
      ],
    },
    {
      title: String.raw`Conditional probability and tree diagrams`,
      body: String.raw`$$\P(A \mid B) = \frac{\P(A \cap B)}{\P(B)}.$$

- On a tree, the branches after the first stage are **conditional** probabilities; multiply along a path, add across paths.
- "Given that…" questions asked in reverse (e.g. P(disease | positive test)): numerator is one path, denominator is the sum of all paths giving the condition.
- Without replacement, the second-stage probabilities change — redraw or recount.
- Read the wording: "P(A and B)" vs "P(A given B)" vs "P(B given A)" are three different numbers.`,
      figure: {
        type: "plot", x: [0, 12], y: [0.2, 6.8], equal: true, axes: false,
        segments: [{ from: [0.3, 3.5], to: [3.6, 5.3], tone: "accent", label: "P(A)", pos: "nw", style: "plain" },
          { from: [0.3, 3.5], to: [3.6, 1.7], tone: "ink", label: "P(A′)", pos: "sw", style: "plain" },
          { from: [4.3, 5.3], to: [7.6, 6.3], tone: "accent", label: "P(B | A)", pos: "nw", style: "plain" },
          { from: [4.3, 5.3], to: [7.6, 4.3], tone: "ink", label: "P(B′ | A)", pos: "sw", style: "plain" },
          { from: [4.3, 1.7], to: [7.6, 2.7], tone: "ink", label: "P(B | A′)", pos: "nw", style: "plain" },
          { from: [4.3, 1.7], to: [7.6, 0.7], tone: "ink", label: "P(B′ | A′)", pos: "sw", style: "plain" }],
        labels: [{ x: 3.95, y: 5.3, text: "A", style: "italic" },
          { x: 3.95, y: 1.7, text: "A′", style: "italic" },
          { x: 7.95, y: 6.3, text: "B", style: "italic" },
          { x: 7.95, y: 4.3, text: "B′", style: "italic" },
          { x: 7.95, y: 2.7, text: "B", style: "italic" },
          { x: 7.95, y: 0.7, text: "B′", style: "italic" },
          { x: 8.4, y: 6.3, text: "P(A ∩ B)", pos: "e", style: "small", tone: "accent" },
          { x: 8.4, y: 4.3, text: "P(A ∩ B′)", pos: "e", style: "small" },
          { x: 8.4, y: 2.7, text: "P(A′ ∩ B)", pos: "e", style: "small" },
          { x: 8.4, y: 0.7, text: "P(A′ ∩ B′)", pos: "e", style: "small" }],
        caption: String.raw`Second-stage branches are conditional. Multiply along a path: $\P(A \cap B) = \P(A)\,\P(B \mid A)$.`,
        alt: "Tree diagram: the first stage branches to A and A-prime with probabilities P(A) and P(A-prime); each then branches to B and B-prime with conditional probabilities such as P(B given A). The path A then B is highlighted and ends at P(A and B).",
      },
    },
    {
      title: String.raw`Probability by counting (P&C)`,
      body: String.raw`When outcomes are equally likely, $\P(E) = \dfrac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$.

- Count numerator and denominator **in the same way** — both ordered (arrangements) or both unordered (selections).
- Drawing $r$ items without replacement: $\dfrac{{}^{a}\mathrm{C}_{x}\ {}^{b}\mathrm{C}_{r-x}}{{}^{a+b}\mathrm{C}_{r}}$.
- For conditional probability from counts, the denominator is the number of outcomes in the given event.`,
    },
    {
      title: String.raw`Turns and games: geometric series`,
      body: String.raw`If players take turns until someone wins, list the first few winning sequences: $\P(A \text{ wins}) = p + rp + r^2 p + \cdots$ where $r$ is the probability that a full round passes with no winner. Then
$$\P(A \text{ wins}) = \frac{p}{1 - r} \quad (|r| < 1).$$
Alternatively, use a recursive argument: $\P(A \text{ wins}) = p + r\,\P(A \text{ wins})$. State clearly which events are being summed.`,
      figure: {
        type: "plot", x: [0, 12], y: [-0.4, 4.1], equal: true, axes: false,
        circles: [{ c: [0.8, 1.6], r: 0.4, tone: "ink", label: "A", labelAt: [0.8, 1.6], style: "plain" },
          { c: [5.2, 1.6], r: 0.4, tone: "ink", label: "A", labelAt: [5.2, 1.6], style: "plain" },
          { c: [9.6, 1.6], r: 0.4, tone: "ink", label: "A", labelAt: [9.6, 1.6], style: "plain" },
          { c: [3, 1.6], r: 0.4, tone: "ink", label: "B", labelAt: [3, 1.6], style: "plain" },
          { c: [7.4, 1.6], r: 0.4, tone: "ink", label: "B", labelAt: [7.4, 1.6], style: "plain" }],
        segments: [{ from: [1.25, 1.6], to: [2.55, 1.6], arrow: true, thin: true, tone: "ink", label: "miss", pos: "s", style: "small" },
          { from: [3.45, 1.6], to: [4.75, 1.6], arrow: true, thin: true, tone: "ink", label: "miss", pos: "s", style: "small" },
          { from: [5.65, 1.6], to: [6.95, 1.6], arrow: true, thin: true, tone: "ink", label: "miss", pos: "s", style: "small" },
          { from: [7.85, 1.6], to: [9.15, 1.6], arrow: true, thin: true, tone: "ink", label: "miss", pos: "s", style: "small" },
          { from: [10.05, 1.6], to: [11.5, 1.6], arrow: true, thin: true, tone: "ink", label: "miss", pos: "s", style: "small" },
          { from: [0.8, 2.05], to: [0.8, 3.3], arrow: true, tone: "accent", label: "p", labelAt: [0.8, 3.3], pos: "n", style: "italic" },
          { from: [5.2, 2.05], to: [5.2, 3.3], arrow: true, tone: "accent", label: "rp", labelAt: [5.2, 3.3], pos: "n", style: "italic" },
          { from: [9.6, 2.05], to: [9.6, 3.3], arrow: true, tone: "accent", label: "r²p", labelAt: [9.6, 3.3], pos: "n", style: "italic" },
          { from: [3, 1.15], to: [3, 0.3], arrow: true, thin: true, tone: "muted" },
          { from: [7.4, 1.15], to: [7.4, 0.3], arrow: true, thin: true, tone: "muted" }],
        labels: [{ x: 11.75, y: 1.6, text: "…", style: "plain" },
          { x: 3, y: 0.3, text: "B wins", pos: "s", style: "small", tone: "muted" },
          { x: 7.4, y: 0.3, text: "B wins", pos: "s", style: "small", tone: "muted" },
          { x: 0.8, y: 2.6, text: "A wins", pos: "w", style: "small", tone: "accent" }],
        caption: String.raw`Each return to $A$ multiplies by $r = \P(\text{both miss})$: $\P(A \text{ wins}) = p + rp + r^2 p + \cdots$`,
        alt: "Chain of turns A, B, A, B, A joined by 'miss' arrows. From each of A's turns an upward arrow means A wins, with probabilities p, rp and r squared p; from each of B's turns a downward arrow means B wins.",
      },
    },
  ],
  archetypes: [
    {
      id: "6.1-line-restrictions",
      name: String.raw`Arrangements in a line with restrictions`,
      tests: String.raw`Arranging distinct people or digits in a row when some must be together, apart, or in fixed positions. Recognise by phrases like "sit together", "no two … next to each other", "at the ends", "even numbers greater than…".`,
      questions: [
        {
          stem: String.raw`Four boys and three girls are to be seated in a row of seven chairs. Find the number of different arrangements in which`,
          parts: [
            { label: "(i)", text: String.raw`there are no restrictions,`, marks: 1 },
            { label: "(ii)", text: String.raw`the three girls sit together,`, marks: 2 },
            { label: "(iii)", text: String.raw`no two girls sit next to each other,`, marks: 2 },
            { label: "(iv)", text: String.raw`a particular boy, Adam, and a particular girl, Beth, occupy the two end chairs.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Four-digit numbers are to be formed using the digits 1, 2, 3, 4, 5, 6 and 7.`,
          parts: [
            { label: "(i)", text: String.raw`Find how many four-digit numbers can be formed if no digit may be repeated.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find how many of the numbers in part (i) are even and greater than 5000.`, marks: 3 },
            { label: "(iii)", text: String.raw`Find how many even four-digit numbers greater than 5000 can be formed if digits may be repeated.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.1-identical-letters",
      name: String.raw`Repeated letters: arrangements and selections`,
      tests: String.raw`Arranging the letters of a word with repeated letters (dividing by factorials of the repeats), combined with together/apart restrictions, and selecting letters by cases. Recognise by "the letters of the word …".`,
      questions: [
        {
          stem: String.raw`The nine letters of the word COMMITTEE are to be arranged in a line.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of different arrangements.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the number of different arrangements in which the two Es are next to each other.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the number of different arrangements in which no two vowels are next to each other.`, marks: 3 },
            { label: "(iv)", text: String.raw`Find the number of different arrangements which begin and end with the same letter.`, marks: 3 },
            { label: "(v)", text: String.raw`Four letters are selected from the nine letters of the word COMMITTEE. Find the number of different selections that can be made.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.1-circular",
      name: String.raw`Circular arrangements`,
      tests: String.raw`Seating around round tables: $(n-1)!$ for unnumbered seats, multiplying by $n$ for numbered seats, alternate seating, and keeping people together or apart in a circle. Recognise by "round table" or "seated in a circle".`,
      questions: [
        {
          stem: String.raw`Five men and five women, including Mr and Mrs Tan, are to be seated at a round table with ten seats.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of different arrangements if there are no restrictions.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the number of different arrangements in which men and women sit alternately.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the number of different arrangements in which men and women sit alternately and Mr and Mrs Tan sit next to each other.`, marks: 3 },
            { label: "(iv)", text: String.raw`The seats are now numbered from 1 to 10. Find the number of different arrangements in which men and women sit alternately.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Nine people, including Ali, Ben and Chloe, attend a dinner.`,
          parts: [
            { label: "(i)", text: String.raw`All nine people sit at one round table. Find the number of different arrangements in which Ali, Ben and Chloe sit together.`, marks: 2 },
            { label: "(ii)", text: String.raw`All nine people sit at one round table. Find the number of different arrangements in which no two of Ali, Ben and Chloe sit next to each other.`, marks: 3 },
            { label: "(iii)", text: String.raw`The nine people are instead seated at two round tables, one with 4 seats and one with 5 seats. Find the number of different ways in which this can be done.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.1-selections-committees",
      name: String.raw`Selections and committees`,
      tests: String.raw`Choosing a committee or team with conditions such as "at least one", "more women than men", "from each class" or "two people refuse to serve together", by cases or complement. Recognise by "a committee of … is to be chosen".`,
      questions: [
        {
          stem: String.raw`A committee of 5 people is to be chosen from 6 men and 7 women.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of different committees that can be chosen.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the number of different committees with at least one man and at least one woman.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the number of different committees with more women than men.`, marks: 3 },
            { label: "(iv)", text: String.raw`One of the men and one of the women refuse to serve on the committee together. Find the number of different committees that can be chosen.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A school is choosing 4 student leaders from three classes. Class A has 5 candidates, class B has 4 candidates and class C has 6 candidates.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of ways of choosing the 4 student leaders if there is at least one from each class.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the number of ways of choosing the 4 student leaders if all of them come from the same class.`, marks: 2 },
            { label: "(iii)", text: String.raw`A student explains that the answer to part (i) is $5 \times 4 \times 6 \times 12$, choosing one candidate from each class and then one more from the remaining 12 candidates. Explain why this method is incorrect.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.1-grouping",
      name: String.raw`Dividing into groups and distributing objects`,
      tests: String.raw`Splitting distinct objects into groups of equal or unequal sizes, distinguishing labelled from unlabelled groups, and "each receives at least one". Recognise by "divided into groups", "shared among", "assigned to rooms".`,
      questions: [
        {
          stem: String.raw`Nine different books are to be divided up.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of ways in which the books can be divided into three groups of 3.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the number of ways in which the books can be given to three students, Daniel, Emma and Farah, so that each receives 3 books.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the number of ways in which the books can be divided into three groups of sizes 2, 3 and 4.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`Six different toys are to be given to three children, Gina, Hari and Ivan, so that each child receives at least one toy.`,
          parts: [
            { label: "(i)", text: String.raw`Find the number of ways in which this can be done.`, marks: 4 },
            { label: "(ii)", text: String.raw`Find the number of ways in which this can be done if Gina receives exactly 3 toys.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.1-pc-probability",
      name: String.raw`Probability using permutations and combinations`,
      tests: String.raw`Finding probabilities of random arrangements or random selections as a ratio of counts, sometimes conditional. Recognise by "arranged at random", "chosen at random", "drawn without replacement".`,
      questions: [
        {
          stem: String.raw`Twelve people, including three friends Jia, Kai and Lena, stand in a queue in a random order.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that the three friends stand next to one another.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that no two of the three friends stand next to each other.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A bag contains 5 red, 4 blue and 3 green balls. Four balls are taken at random from the bag, without replacement.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that all four balls are the same colour.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the probability that there is at least one ball of each colour.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that at least one of the four balls is red, find the probability that exactly two of them are red.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.1-table-of-outcomes",
      name: String.raw`Tables of outcomes and independence of events`,
      tests: String.raw`Listing a sample space for two dice or spinners in a table, then finding probabilities of combined events and checking whether events are independent or mutually exclusive. Recognise by two simultaneous random experiments with small numbers of outcomes.`,
      questions: [
        {
          stem: String.raw`A fair tetrahedral die with faces numbered 1, 2, 3, 4 and a fair six-sided die with faces numbered 1 to 6 are thrown together. The number on the face on which the tetrahedral die lands, and the number on the uppermost face of the six-sided die, are noted.

Event $A$ is "the sum of the two numbers is 7".
Event $B$ is "the product of the two numbers is even".
Event $C$ is "the number on the tetrahedral die is greater than the number on the six-sided die".`,
          parts: [
            { label: "(i)", text: String.raw`Find $\P(A)$, $\P(B)$ and $\P(C)$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Determine whether $A$ and $B$ are independent, justifying your answer.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $\P(A \mid B)$.`, marks: 1 },
            { label: "(iv)", text: String.raw`State, with a reason, whether $A$ and $C$ are mutually exclusive.`, marks: 1 },
            { label: "(v)", text: String.raw`Find $\P(B \cup C)$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.1-venn-set-algebra",
      name: String.raw`Venn diagrams and probability algebra`,
      tests: String.raw`Using $\P(A \cup B)$, $\P(A')$ and conditional probability with given values, testing independence, and finding the greatest and least possible values of $\P(A \cap B)$. Recognise by events $A$, $B$, $C$ with given probabilities and no physical context, or a Venn diagram to be completed.`,
      questions: [
        {
          stem: String.raw`For events $A$ and $B$, it is given that $\P(A) = 0.7$ and $\P(B) = 0.4$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $A$ and $B$ are independent, find $\P(A \cup B)$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Given instead that $\P(A' \cap B') = 0.1$, find $\P(A \cap B)$ and determine whether $A$ and $B$ are independent.`, marks: 3 },
            { label: "(iii)", text: String.raw`With no further information about $A$ and $B$, find the greatest and least possible values of $\P(A \cap B)$. Illustrate each case with a Venn diagram.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`For events $A$, $B$ and $C$, it is given that $\P(A) = 0.5$, $\P(B) = 0.4$, $\P(C) = 0.3$ and $\P(A \cap B) = 0.2$. The events $A$ and $C$ are mutually exclusive, and the events $B$ and $C$ are independent.`,
          parts: [
            { label: "(i)", text: String.raw`Draw a Venn diagram showing the probability of each region.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find $\P(A' \cap B' \cap C')$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find $\P(B \mid A \cup C)$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Hence determine whether the events $B$ and $A \cup C$ are independent.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.1-tree-conditional",
      name: String.raw`Tree diagrams and conditional probability`,
      tests: String.raw`Multi-stage experiments where later probabilities depend on earlier outcomes, including "reverse" conditional probabilities such as P(cause | observed result). Recognise by "if …, the probability that … is …" or a screening test.`,
      questions: [
        {
          stem: String.raw`A screening test is used for a disease that affects 2% of a population. If a person has the disease, the probability that the test is positive is 0.95. If a person does not have the disease, the probability that the test is positive is 0.04.`,
          parts: [
            { label: "(i)", text: String.raw`Draw a tree diagram to represent this information.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the probability that a randomly chosen person tests positive.`, marks: 2 },
            { label: "(iii)", text: String.raw`Given that a randomly chosen person tests positive, find the probability that the person has the disease.`, marks: 2 },
            { label: "(iv)", text: String.raw`A person who tests positive is tested a second time. Assuming that, for a given person, the results of the two tests are independent, find the probability that a person who tests positive on both occasions has the disease.`, marks: 3 },
            { label: "(v)", text: String.raw`Comment on your answers to parts (iii) and (iv) in the context of the question.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In a certain town, if it rains on a particular day, the probability that it rains on the next day is 0.6. If it does not rain on a particular day, the probability that it rains on the next day is 0.2. It rains on a Monday.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that it rains on Wednesday.`, marks: 2 },
            { label: "(ii)", text: String.raw`Given that it rains on Wednesday, find the probability that it rained on Tuesday.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the probability that it rains on exactly one of the days Tuesday, Wednesday and Thursday.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.1-games-geometric",
      name: String.raw`Turn-based games and geometric series`,
      tests: String.raw`Players taking turns until someone succeeds, so that the probability of winning is the sum to infinity of a geometric series. Recognise by "take turns … the first to … wins" or a game that can continue indefinitely.`,
      questions: [
        {
          stem: String.raw`Amir and Bala take turns to throw a ball at a target, with Amir going first. The first player to hit the target wins. On each of his throws, Amir hits the target with probability $\frac{1}{3}$; on each of his throws, Bala hits the target with probability $\frac{1}{4}$. All throws are independent.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that Amir wins on his second throw.`, marks: 2 },
            { label: "(ii)", text: String.raw`Show that the probability that Amir wins is $\frac{2}{3}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that Amir wins, find the probability that he wins on his first or second throw.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`In a game of tennis, the score reaches "deuce". From deuce, a player wins the game by winning two consecutive points; if each player wins one of the next two points, the score returns to deuce. Player $P$ wins any point against player $Q$ with probability 0.6, independently of all other points.`,
          parts: [
            { label: "(i)", text: String.raw`Find the probability that, starting from deuce, $P$ wins the game within the next four points.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that the probability that $P$ eventually wins the game, starting from deuce, is $\frac{9}{13}$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
