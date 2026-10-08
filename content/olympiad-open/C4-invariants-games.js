H2.addTopic({
  id: "C4",
  title: "Invariants, Monovariants and Games",
  summary: String.raw`Decide what is possible by finding quantities that never change or only move one way, colour boards to rule out tilings, and analyse combinatorial games through winning and losing positions, symmetry and Nim.`,
  concepts: [
    {
      title: String.raw`Invariants: what never changes`,
      body: String.raw`An **invariant** is a quantity that no move can change. If the start and the target give different values, the target can never be reached.

1. Write down exactly what one move does.
2. Test simple candidates: a sum, the parity of a count, a sum mod $m$, a product, a sum of squares.
3. Compare the start with the target.

- An invariant only proves **impossibility**. To show that something **is** possible, give a construction.
- Example: three numbers; a move adds $3$ to one of them and subtracts $1$ from each of the other two. Every pairwise difference changes by $0$ or $\pm 4$, so the differences mod $4$ never change. From $1, 2, 3$ (differences $1, 1, 2$) the three numbers can never all become equal.`,
    },
    {
      title: String.raw`Parity and residues`,
      body: String.raw`- If every move changes a quantity by an even amount, its **parity** is invariant. Turning over two coins at a time never changes the parity of the number of heads.
- More generally, if every move changes a quantity by a multiple of $m$, the quantity mod $m$ is invariant. Look at differences too: if all numbers change by the same amount mod $m$, their pairwise differences mod $m$ are fixed.
- **Permutations have a parity.** Every rearrangement is a product of swaps, and the number of swaps used is always even or always odd. A swap is odd; a $3$-cycle $a \to b \to c \to a$ is even, since it is two swaps.
- Example: in a row $2, 1, 4, 3$, count the **inversions** (pairs in the wrong order): $(2,1)$ and $(4,3)$, so $2$ inversions, an even arrangement. Any single swap of two entries changes the number of inversions by an odd amount.`,
    },
    {
      title: String.raw`Algebraic invariants: sums, products and cleverer ones`,
      body: String.raw`When a move replaces two numbers $a, b$ by a single number $c$, look for a function $f$ with
$$f(c) = f(a) + f(b) \quad\text{or}\quad f(c) = f(a)\,f(b).$$
Then $\sum f(x)$ (or $\prod f(x)$) over the board is invariant, so the last number is forced, whatever the order of the moves.

- Candidates to try: $x + k$, $kx$, $\dfrac{1}{x}$, $x^{2}$, and fractions such as $\dfrac{x - k}{x + k}$. Test on two or three small numbers first.
- Example: replacing $a, b$ by $\dfrac{ab}{a + b}$ keeps $\sum \dfrac{1}{x}$ fixed, because $\dfrac{a + b}{ab} = \dfrac{1}{a} + \dfrac{1}{b}$. Starting from $1, 2, 3, 6$ (reciprocals add to $2$), the last number is $\dfrac{1}{2}$.
- For pairs of numbers replaced by pairs, the sum of squares is a common invariant: $(a + b)^{2} + (a - b)^{2} = 2(a^{2} + b^{2})$.`,
    },
    {
      title: String.raw`Monovariants and termination`,
      body: String.raw`- A **monovariant** is a quantity that moves in one direction only, for example strictly increases with every move.
- If it is an integer that rises by at least $1$ per move and always stays between $L$ and $U$, there can be at most $U - L$ moves. So the process must stop.
- If one part of the position gets better while another gets worse, **weight** the parts so that the important one dominates: give position $k$ weight $2^{k}$ (since $2^{k} > 2^{0} + 2^{1} + \cdots + 2^{k-1}$), or compare positions in dictionary order.
- Combine with an invariant to pin down the final state: the invariant says where the process can end, the monovariant says that it ends and how many moves it takes.
- Example: a move replaces a number $x \ge 2$ on the board by the two numbers $x - 1$ and $x - 2$. The count of numbers grows, but $S = \sum 2^{x}$ strictly decreases, because $2^{x-1} + 2^{x-2} < 2^{x}$. As $S$ is a positive integer, the process stops.`,
    },
    {
      title: String.raw`Colouring arguments for tilings`,
      body: String.raw`- Colour the board so that **every tile covers a fixed pattern of colours**, then count each colour.
- **Dominoes** on a chessboard colouring: each domino covers one dark and one light cell, so a tiled region has equally many of each.
- **Straight $1 \times k$ tiles**: colour cell $(i, j)$ with colour $(i + j) \bmod k$. Every $1 \times k$ tile, horizontal or vertical, covers exactly one cell of each colour. (Other useful colourings: by row $i \bmod k$, or a checkerboard of $2 \times 2$ blocks.)
- Colouring proves **impossibility**. When the counts do match, you still need to find a tiling (or a better colouring).`,
      figure: [{"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 5.3], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [1, 0], [1, 1], [0, 1]], "fill": true, "tone": "accent"}, {"points": [[0, 0], [1, 0], [1, 1], [0, 1]], "tone": "ink"}, {"points": [[0, 1], [1, 1], [1, 2], [0, 2]], "tone": "ink"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "fill": true, "tone": "accent"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "tone": "ink"}, {"points": [[0, 3], [1, 3], [1, 4], [0, 4]], "tone": "ink"}, {"points": [[0, 4], [1, 4], [1, 5], [0, 5]], "fill": true, "tone": "accent"}, {"points": [[0, 4], [1, 4], [1, 5], [0, 5]], "tone": "ink"}, {"points": [[1, 0], [2, 0], [2, 1], [1, 1]], "tone": "ink"}, {"points": [[1, 1], [2, 1], [2, 2], [1, 2]], "fill": true, "tone": "accent"}, {"points": [[1, 1], [2, 1], [2, 2], [1, 2]], "tone": "ink"}, {"points": [[1, 2], [2, 2], [2, 3], [1, 3]], "tone": "ink"}, {"points": [[1, 3], [2, 3], [2, 4], [1, 4]], "fill": true, "tone": "accent"}, {"points": [[1, 3], [2, 3], [2, 4], [1, 4]], "tone": "ink"}, {"points": [[2, 0], [3, 0], [3, 1], [2, 1]], "fill": true, "tone": "accent"}, {"points": [[2, 0], [3, 0], [3, 1], [2, 1]], "tone": "ink"}, {"points": [[2, 1], [3, 1], [3, 2], [2, 2]], "tone": "ink"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "fill": true, "tone": "accent"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "tone": "ink"}, {"points": [[2, 3], [3, 3], [3, 4], [2, 4]], "tone": "ink"}, {"points": [[2, 4], [3, 4], [3, 5], [2, 5]], "fill": true, "tone": "accent"}, {"points": [[2, 4], [3, 4], [3, 5], [2, 5]], "tone": "ink"}, {"points": [[3, 0], [4, 0], [4, 1], [3, 1]], "tone": "ink"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "fill": true, "tone": "accent"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "tone": "ink"}, {"points": [[3, 2], [4, 2], [4, 3], [3, 3]], "tone": "ink"}, {"points": [[3, 3], [4, 3], [4, 4], [3, 4]], "fill": true, "tone": "accent"}, {"points": [[3, 3], [4, 3], [4, 4], [3, 4]], "tone": "ink"}, {"points": [[3, 4], [4, 4], [4, 5], [3, 5]], "tone": "ink"}, {"points": [[4, 0], [5, 0], [5, 1], [4, 1]], "fill": true, "tone": "accent"}, {"points": [[4, 0], [5, 0], [5, 1], [4, 1]], "tone": "ink"}, {"points": [[4, 1], [5, 1], [5, 2], [4, 2]], "tone": "ink"}, {"points": [[4, 2], [5, 2], [5, 3], [4, 3]], "fill": true, "tone": "accent"}, {"points": [[4, 2], [5, 2], [5, 3], [4, 3]], "tone": "ink"}, {"points": [[4, 3], [5, 3], [5, 4], [4, 4]], "tone": "ink"}, {"points": [[4, 4], [5, 4], [5, 5], [4, 5]], "fill": true, "tone": "accent"}, {"points": [[4, 4], [5, 4], [5, 5], [4, 5]], "tone": "ink"}, {"points": [[1, 4], [2, 4], [2, 5], [1, 5]], "tone": "muted", "dashed": true}], "labels": [{"x": 1.5, "y": 4.5, "text": "×", "style": "plain", "tone": "warn"}], "alt": "A 5 by 5 board coloured like a chessboard with dark corners; the cell next to the top-left corner is removed.", "caption": "Remove a cell next to a corner: $13$ dark and $11$ light cells remain, so no domino tiling."}, {"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 5.3], "equal": true, "axes": false, "polygons": [{"points": [[0, 0], [1, 0], [1, 1], [0, 1]], "fill": true, "tone": "accent"}, {"points": [[0, 1], [1, 1], [1, 2], [0, 2]], "fill": true, "tone": "good"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "fill": true, "tone": "warn"}, {"points": [[0, 3], [1, 3], [1, 4], [0, 4]], "fill": true, "tone": "accent"}, {"points": [[0, 4], [1, 4], [1, 5], [0, 5]], "fill": true, "tone": "good"}, {"points": [[1, 0], [2, 0], [2, 1], [1, 1]], "fill": true, "tone": "good"}, {"points": [[1, 1], [2, 1], [2, 2], [1, 2]], "fill": true, "tone": "warn"}, {"points": [[1, 2], [2, 2], [2, 3], [1, 3]], "fill": true, "tone": "accent"}, {"points": [[1, 3], [2, 3], [2, 4], [1, 4]], "fill": true, "tone": "good"}, {"points": [[1, 4], [2, 4], [2, 5], [1, 5]], "fill": true, "tone": "warn"}, {"points": [[2, 0], [3, 0], [3, 1], [2, 1]], "fill": true, "tone": "warn"}, {"points": [[2, 1], [3, 1], [3, 2], [2, 2]], "fill": true, "tone": "accent"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "fill": true, "tone": "good"}, {"points": [[2, 3], [3, 3], [3, 4], [2, 4]], "fill": true, "tone": "warn"}, {"points": [[2, 4], [3, 4], [3, 5], [2, 5]], "fill": true, "tone": "accent"}, {"points": [[3, 0], [4, 0], [4, 1], [3, 1]], "fill": true, "tone": "accent"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "fill": true, "tone": "good"}, {"points": [[3, 2], [4, 2], [4, 3], [3, 3]], "fill": true, "tone": "warn"}, {"points": [[3, 3], [4, 3], [4, 4], [3, 4]], "fill": true, "tone": "accent"}, {"points": [[3, 4], [4, 4], [4, 5], [3, 5]], "fill": true, "tone": "good"}, {"points": [[4, 0], [5, 0], [5, 1], [4, 1]], "fill": true, "tone": "good"}, {"points": [[4, 1], [5, 1], [5, 2], [4, 2]], "fill": true, "tone": "warn"}, {"points": [[4, 2], [5, 2], [5, 3], [4, 3]], "fill": true, "tone": "accent"}, {"points": [[4, 3], [5, 3], [5, 4], [4, 4]], "fill": true, "tone": "good"}, {"points": [[4, 4], [5, 4], [5, 5], [4, 5]], "fill": true, "tone": "warn"}, {"points": [[0, 0], [1, 0], [1, 1], [0, 1]], "tone": "ink"}, {"points": [[0, 1], [1, 1], [1, 2], [0, 2]], "tone": "ink"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "tone": "ink"}, {"points": [[0, 3], [1, 3], [1, 4], [0, 4]], "tone": "ink"}, {"points": [[0, 4], [1, 4], [1, 5], [0, 5]], "tone": "ink"}, {"points": [[1, 0], [2, 0], [2, 1], [1, 1]], "tone": "ink"}, {"points": [[1, 1], [2, 1], [2, 2], [1, 2]], "tone": "ink"}, {"points": [[1, 2], [2, 2], [2, 3], [1, 3]], "tone": "ink"}, {"points": [[1, 3], [2, 3], [2, 4], [1, 4]], "tone": "ink"}, {"points": [[1, 4], [2, 4], [2, 5], [1, 5]], "tone": "ink"}, {"points": [[2, 0], [3, 0], [3, 1], [2, 1]], "tone": "ink"}, {"points": [[2, 1], [3, 1], [3, 2], [2, 2]], "tone": "ink"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "tone": "ink"}, {"points": [[2, 3], [3, 3], [3, 4], [2, 4]], "tone": "ink"}, {"points": [[2, 4], [3, 4], [3, 5], [2, 5]], "tone": "ink"}, {"points": [[3, 0], [4, 0], [4, 1], [3, 1]], "tone": "ink"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "tone": "ink"}, {"points": [[3, 2], [4, 2], [4, 3], [3, 3]], "tone": "ink"}, {"points": [[3, 3], [4, 3], [4, 4], [3, 4]], "tone": "ink"}, {"points": [[3, 4], [4, 4], [4, 5], [3, 5]], "tone": "ink"}, {"points": [[4, 0], [5, 0], [5, 1], [4, 1]], "tone": "ink"}, {"points": [[4, 1], [5, 1], [5, 2], [4, 2]], "tone": "ink"}, {"points": [[4, 2], [5, 2], [5, 3], [4, 3]], "tone": "ink"}, {"points": [[4, 3], [5, 3], [5, 4], [4, 4]], "tone": "ink"}, {"points": [[4, 4], [5, 4], [5, 5], [4, 5]], "tone": "ink"}], "labels": [{"x": 0.5, "y": 0.5, "text": "0", "style": "small"}, {"x": 0.5, "y": 1.5, "text": "1", "style": "small"}, {"x": 0.5, "y": 2.5, "text": "2", "style": "small"}, {"x": 0.5, "y": 3.5, "text": "0", "style": "small"}, {"x": 0.5, "y": 4.5, "text": "1", "style": "small"}, {"x": 1.5, "y": 0.5, "text": "1", "style": "small"}, {"x": 1.5, "y": 1.5, "text": "2", "style": "small"}, {"x": 1.5, "y": 2.5, "text": "0", "style": "small"}, {"x": 1.5, "y": 3.5, "text": "1", "style": "small"}, {"x": 1.5, "y": 4.5, "text": "2", "style": "small"}, {"x": 2.5, "y": 0.5, "text": "2", "style": "small"}, {"x": 2.5, "y": 1.5, "text": "0", "style": "small"}, {"x": 2.5, "y": 2.5, "text": "1", "style": "small"}, {"x": 2.5, "y": 3.5, "text": "2", "style": "small"}, {"x": 2.5, "y": 4.5, "text": "0", "style": "small"}, {"x": 3.5, "y": 0.5, "text": "0", "style": "small"}, {"x": 3.5, "y": 1.5, "text": "1", "style": "small"}, {"x": 3.5, "y": 2.5, "text": "2", "style": "small"}, {"x": 3.5, "y": 3.5, "text": "0", "style": "small"}, {"x": 3.5, "y": 4.5, "text": "1", "style": "small"}, {"x": 4.5, "y": 0.5, "text": "1", "style": "small"}, {"x": 4.5, "y": 1.5, "text": "2", "style": "small"}, {"x": 4.5, "y": 2.5, "text": "0", "style": "small"}, {"x": 4.5, "y": 3.5, "text": "1", "style": "small"}, {"x": 4.5, "y": 4.5, "text": "2", "style": "small"}], "alt": "A 5 by 5 board whose cells are coloured 0, 1, 2 according to (row + column) mod 3, so the colours run in diagonal stripes.", "caption": "Colour $(i+j) \\bmod 3$: every $1 \\times 3$ tile covers one cell of each colour."}],
    },
    {
      title: String.raw`Winning and losing positions`,
      body: String.raw`In a two-player game with no luck and no hidden information, where the player who cannot move **loses**, every position is either

- a **P-position**: the **P**revious player (who just moved) wins with best play, or
- an **N-position**: the **N**ext player (whose turn it is) wins.

Rules: a position with no moves is P; a position is **N** if **some** move leads to a P-position; it is **P** if **every** move leads to an N-position. A winning strategy is "always move to a P-position".

- Work upwards from the end, tabulate small cases, spot the pattern, then prove it by checking the two rules.
- Example: one pile, take $1$ or $2$ stones, taking the last stone wins. From a multiple of $3$ you must leave a non-multiple, and from a non-multiple you can always leave a multiple of $3$.
- Some games are decided before they start: breaking an $m \times n$ chocolate bar into single squares always takes exactly $mn - 1$ breaks, so the parity of $mn - 1$ decides the winner.`,
      figure: {"type": "plot", "x": [-0.8, 12.8], "y": [-1.6, 1.4], "equal": true, "axes": false, "circles": [{"c": [0, 0], "r": 0.32, "fill": true, "tone": "warn"}, {"c": [1, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [2, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [3, 0], "r": 0.32, "fill": true, "tone": "warn"}, {"c": [4, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [5, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [6, 0], "r": 0.32, "fill": true, "tone": "warn"}, {"c": [7, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [8, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [9, 0], "r": 0.32, "fill": true, "tone": "warn"}, {"c": [10, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [11, 0], "r": 0.32, "fill": false, "tone": "muted"}, {"c": [12, 0], "r": 0.32, "fill": true, "tone": "warn"}], "labels": [{"x": 0, "y": -0.45, "text": "0", "pos": "s", "style": "small"}, {"x": 1, "y": -0.45, "text": "1", "pos": "s", "style": "small"}, {"x": 2, "y": -0.45, "text": "2", "pos": "s", "style": "small"}, {"x": 3, "y": -0.45, "text": "3", "pos": "s", "style": "small"}, {"x": 4, "y": -0.45, "text": "4", "pos": "s", "style": "small"}, {"x": 5, "y": -0.45, "text": "5", "pos": "s", "style": "small"}, {"x": 6, "y": -0.45, "text": "6", "pos": "s", "style": "small"}, {"x": 7, "y": -0.45, "text": "7", "pos": "s", "style": "small"}, {"x": 8, "y": -0.45, "text": "8", "pos": "s", "style": "small"}, {"x": 9, "y": -0.45, "text": "9", "pos": "s", "style": "small"}, {"x": 10, "y": -0.45, "text": "10", "pos": "s", "style": "small"}, {"x": 11, "y": -0.45, "text": "11", "pos": "s", "style": "small"}, {"x": 12, "y": -0.45, "text": "12", "pos": "s", "style": "small"}, {"x": 0, "y": 0.45, "text": "P", "pos": "n", "style": "small", "tone": "warn"}, {"x": 1, "y": 0.45, "text": "N", "pos": "n", "style": "small", "tone": "muted"}, {"x": 2, "y": 0.45, "text": "N", "pos": "n", "style": "small", "tone": "muted"}, {"x": 3, "y": 0.45, "text": "P", "pos": "n", "style": "small", "tone": "warn"}], "caption": "Take $1$ or $2$ stones: the P-positions (filled) are $0, 3, 6, 9, 12, \\ldots$", "alt": "Pile sizes 0 to 12 in a row; 0, 3, 6, 9 and 12 are filled and marked P, the others are hollow and marked N."},
    },
    {
      title: String.raw`Symmetry, pairing and strategy stealing`,
      body: String.raw`- **Mirror strategy**: answer every move by the "symmetric" move. Then whenever the opponent can move, so can you, and you make the last move. Always check that the mirror move is **legal** (it might clash with the move just made).
- Often the first player must make one central move first to create the symmetry, and then copies.
- Example: two piles of equal size; a move takes any number of stones from one pile; taking the last stone wins. The second player takes the same amount from the other pile and keeps the piles equal.
- **Pairing**: split the possible moves into pairs so that every move of the opponent can be answered by its partner.
- **Strategy stealing**: in a game that cannot be drawn, if an extra move can never hurt you, the first player wins: otherwise the first player could make any move and then pretend to be second, using the second player's winning strategy.`,
    },
    {
      title: String.raw`Nim and the nim-sum`,
      body: String.raw`**Nim**: several heaps of stones; a move removes any positive number of stones from one heap; whoever takes the last stone wins.

- Write the heap sizes in binary and add them **without carrying**: this is the **nim-sum** $a \oplus b \oplus c \oplus \cdots$ (bitwise XOR).
- **Bouton's theorem**: a position is a P-position exactly when its nim-sum is $0$. From nim-sum $0$ every move makes it non-zero; from non-zero nim-sum $s$ there is a move to nim-sum $0$.
- **Winning move**: pick a heap $h$ whose binary has a $1$ in the leading place of $s$; then $h \oplus s < h$, and reduce that heap to $h \oplus s$.
- Example: heaps $2, 5, 6$: $010 \oplus 101 \oplus 110 = 001$, so reduce $5$ to $5 \oplus 1 = 4$. Check: $2 \oplus 4 \oplus 6 = 0$.
- Many games are **Nim in disguise**: identify what plays the role of each heap (a distance, a gap, a count) and check that a move changes exactly one "heap" and can reduce it to any smaller value.`,
    },
  ],
  archetypes: [
    {
      id: "C4-parity-residues",
      name: String.raw`Parity and modular invariants`,
      tests: String.raw`Numbers on a board, piles or arrangements change by fixed moves; you are asked which final states are possible. Find a sum, count or arrangement parity that each move preserves mod $m$.`,
      questions: [
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 10$ are written on a board. A move consists of erasing two numbers and writing either their sum or the larger minus the smaller. After nine moves one number is left. Which of the following could it be?`,
          choices: [String.raw`$0$`, String.raw`$12$`, String.raw`$20$`, String.raw`$37$`, String.raw`$56$`],
          difficulty: 1,
          answer: String.raw`(D) $37$`,
        },
        {
          stem: String.raw`Three boxes contain $4$, $9$ and $14$ marbles. A move consists of taking one marble from each of two boxes and putting both of them into the third box. What is the largest number of marbles that can ever be in one box?`,
          difficulty: 2,
          answer: String.raw`$26$`,
        },
        {
          stem: String.raw`The numbers $1$ to $9$ are placed in a $3 \times 3$ grid as shown. A move is one of the following: choose a row and shift its three numbers one place to the right, the rightmost number moving to the left end; or choose a column and shift its three numbers one place down, the bottom number moving to the top. How many different arrangements of the grid, including the starting one, can be obtained by sequences of moves?`,
          figure: {"type": "plot", "x": [-1.2, 4.2], "y": [-0.3, 3.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [0, 3], "tone": "ink"}, {"from": [1, 0], "to": [1, 3], "tone": "ink"}, {"from": [2, 0], "to": [2, 3], "tone": "ink"}, {"from": [3, 0], "to": [3, 3], "tone": "ink"}, {"from": [0, 0], "to": [3, 0], "tone": "ink"}, {"from": [0, 1], "to": [3, 1], "tone": "ink"}, {"from": [0, 2], "to": [3, 2], "tone": "ink"}, {"from": [0, 3], "to": [3, 3], "tone": "ink"}], "labels": [{"x": 0.5, "y": 2.5, "text": "1", "style": "plain"}, {"x": 1.5, "y": 2.5, "text": "2", "style": "plain"}, {"x": 2.5, "y": 2.5, "text": "3", "style": "plain"}, {"x": 0.5, "y": 1.5, "text": "4", "style": "plain"}, {"x": 1.5, "y": 1.5, "text": "5", "style": "plain"}, {"x": 2.5, "y": 1.5, "text": "6", "style": "plain"}, {"x": 0.5, "y": 0.5, "text": "7", "style": "plain"}, {"x": 1.5, "y": 0.5, "text": "8", "style": "plain"}, {"x": 2.5, "y": 0.5, "text": "9", "style": "plain"}], "alt": "A 3 by 3 grid with 1, 2, 3 in the top row, 4, 5, 6 in the middle row and 7, 8, 9 in the bottom row."},
          difficulty: 3,
          answer: String.raw`$181\,440$`,
        },
      ],
    },
    {
      id: "C4-algebraic-invariants",
      name: String.raw`The last number on the board`,
      tests: String.raw`Two numbers are repeatedly replaced by one according to a formula, and you must find the final number. Find a function $f$ with $f(\text{new}) = f(a) + f(b)$ or $f(a)\,f(b)$, so that a sum or product over the board is invariant.`,
      questions: [
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 30$ are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $a + b - 1$. After $29$ moves one number is left. What is it?`,
          difficulty: 1,
          answer: String.raw`$436$`,
        },
        {
          stem: String.raw`The $24$ numbers $1, \dfrac{1}{2}, \dfrac{1}{3}, \ldots, \dfrac{1}{24}$ are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $a + b + ab$. After $23$ moves one number is left. What is it?`,
          difficulty: 2,
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`The $99$ numbers $\dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}, \ldots, \dfrac{1}{100}$ are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $\dfrac{a + b}{1 + ab}$. After $98$ moves one number is left. What is it?`,
          difficulty: 3,
          answer: String.raw`$\dfrac{5049}{5051}$`,
        },
      ],
    },
    {
      id: "C4-monovariants",
      name: String.raw`Monovariants: does the process stop, and when?`,
      tests: String.raw`A process repeats a local move and you must count the moves or prove it terminates. Find an integer quantity that changes by a fixed amount, or strictly in one direction, every move; weighted sums such as $\sum 2^{k}$ handle trade-offs.`,
      questions: [
        {
          stem: String.raw`Eight cards numbered $1$ to $8$ lie in a row in the order $8, 7, 6, 5, 4, 3, 2, 1$. A move consists of choosing two neighbouring cards where the left card has the larger number, and swapping them. Moves are made until no move is possible. How many moves are made?`,
          difficulty: 1,
          answer: String.raw`$28$`,
        },
        {
          stem: String.raw`Eleven chips are placed on the point $0$ of a number line. A move consists of choosing an integer point holding at least two chips, removing two chips from it and placing one chip on each of the two neighbouring integer points. The process stops when every point holds at most one chip. When it stops, the chips occupy eleven consecutive integers. How many moves were made?`,
          difficulty: 2,
          answer: String.raw`$55$`,
        },
        {
          stem: String.raw`There are $n$ lamps in a row, each on or off. A move consists of choosing two neighbouring lamps where the left one is on and the right one is off, switching the left one off and the right one on, and also switching every lamp to the left of the chosen pair (on to off, off to on). Prove that, however the moves are chosen, fewer than $2^{n}$ moves can be made.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: read the row as a binary number with the $k$-th lamp from the left worth $2^{k-1}$ when on; a move on lamps $k, k+1$ gains $2^{k}-2^{k-1}=2^{k-1}$ and loses at most $2^{k-1}-1$ on the lamps to the left, so the number rises by at least $1$ each move and stays between $0$ and $2^{n}-1$.`,
        },
      ],
    },
    {
      id: "C4-colouring-tilings",
      name: String.raw`Colouring arguments for tilings`,
      tests: String.raw`"Can this board be tiled by these pieces?" or "where can the missing cell be?" Colour the board (chessboard, or $(i + j) \bmod k$ for $1 \times k$ pieces) so each piece covers a fixed colour pattern, then compare colour counts.`,
      questions: [
        {
          stem: String.raw`Two cells are removed from the $6 \times 6$ board shown, whose columns are labelled a to f and rows $1$ to $6$. In which case can the remaining $34$ cells **not** be tiled by $17$ dominoes ($1 \times 2$ rectangles)?`,
          figure: {"type": "plot", "x": [-1.0, 6.6], "y": [-1.0, 6.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [0, 6], "tone": "ink"}, {"from": [1, 0], "to": [1, 6], "tone": "ink"}, {"from": [2, 0], "to": [2, 6], "tone": "ink"}, {"from": [3, 0], "to": [3, 6], "tone": "ink"}, {"from": [4, 0], "to": [4, 6], "tone": "ink"}, {"from": [5, 0], "to": [5, 6], "tone": "ink"}, {"from": [6, 0], "to": [6, 6], "tone": "ink"}, {"from": [0, 0], "to": [6, 0], "tone": "ink"}, {"from": [0, 1], "to": [6, 1], "tone": "ink"}, {"from": [0, 2], "to": [6, 2], "tone": "ink"}, {"from": [0, 3], "to": [6, 3], "tone": "ink"}, {"from": [0, 4], "to": [6, 4], "tone": "ink"}, {"from": [0, 5], "to": [6, 5], "tone": "ink"}, {"from": [0, 6], "to": [6, 6], "tone": "ink"}], "labels": [{"x": 0.5, "y": -0.05, "text": "a", "pos": "s", "style": "italic"}, {"x": 1.5, "y": -0.05, "text": "b", "pos": "s", "style": "italic"}, {"x": 2.5, "y": -0.05, "text": "c", "pos": "s", "style": "italic"}, {"x": 3.5, "y": -0.05, "text": "d", "pos": "s", "style": "italic"}, {"x": 4.5, "y": -0.05, "text": "e", "pos": "s", "style": "italic"}, {"x": 5.5, "y": -0.05, "text": "f", "pos": "s", "style": "italic"}, {"x": -0.1, "y": 0.5, "text": "1", "pos": "w", "style": "plain"}, {"x": -0.1, "y": 1.5, "text": "2", "pos": "w", "style": "plain"}, {"x": -0.1, "y": 2.5, "text": "3", "pos": "w", "style": "plain"}, {"x": -0.1, "y": 3.5, "text": "4", "pos": "w", "style": "plain"}, {"x": -0.1, "y": 4.5, "text": "5", "pos": "w", "style": "plain"}, {"x": -0.1, "y": 5.5, "text": "6", "pos": "w", "style": "plain"}], "alt": "A plain 6 by 6 board; columns are labelled a to f from left to right and rows 1 to 6 from bottom to top."},
          choices: [String.raw`a1 and f1`, String.raw`b2 and e4`, String.raw`a2 and f6`, String.raw`c1 and f4`, String.raw`c3 and c4`],
          difficulty: 1,
          answer: String.raw`(D) c1 and f4`,
        },
        {
          stem: String.raw`Prove that a $6 \times 6$ board cannot be tiled by nine $1 \times 4$ rectangles.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: give cell $(i, j)$ the colour $(i + j) \bmod 4$; every $1 \times 4$ rectangle covers one cell of each colour, so a tiling needs $9$ cells of each colour, but the four colours occur $9, 10, 9, 8$ times.`,
        },
        {
          stem: String.raw`One cell is removed from a $5 \times 9$ board, and the remaining $44$ cells are tiled by eleven $1 \times 4$ rectangles. How many of the $45$ cells could the removed cell be?`,
          difficulty: 3,
          answer: String.raw`$6$`,
        },
      ],
    },
    {
      id: "C4-winning-positions",
      name: String.raw`Winning and losing positions`,
      tests: String.raw`A take-away or number game where the player who cannot move (or who reaches a target) decides the result. Label small positions P or N, find the pattern, and verify it with the two P/N rules.`,
      questions: [
        {
          stem: String.raw`A pile has $n$ stones. Two players take turns to remove $1$, $3$ or $4$ stones from the pile, and the player who takes the last stone wins. For how many values of $n$ with $1 \le n \le 50$ can the second player guarantee a win?`,
          difficulty: 1,
          answer: String.raw`$14$`,
        },
        {
          stem: String.raw`An integer $n \ge 2$ is written on a board. Two players take turns. On each turn the player replaces the number $m$ on the board by $m - d$, where $d$ is a divisor of $m$ with $1 \le d < m$. The player who writes the number $1$ loses. Find all $n$ for which the first player has a winning strategy, and prove there are no others.`,
          difficulty: 2,
          answer: String.raw`$n = 3$ and every even $n \ge 4$. **Proof.** Key idea: the losing positions for the player to move are $2$ and the odd numbers $m \ge 5$, because from an odd $m \ge 5$ every move subtracts an odd $d \le m/3$ and leaves an even number at least $4$, while the moves $3 \to 2$, $4 \to 2$ and $m \to m - 1$ (for even $m \ge 6$) each hand over a losing position.`,
        },
        {
          stem: String.raw`A game starts with the number $1$. Two players take turns to multiply the current number by any whole number from $2$ to $9$. The first player to make the number at least $N$ wins. For how many integers $N$ with $100 \le N \le 1000$ does the second player have a winning strategy?`,
          difficulty: 3,
          answer: String.raw`$162$`,
        },
      ],
    },
    {
      id: "C4-symmetry-nim",
      name: String.raw`Symmetry strategies and Nim`,
      tests: String.raw`Games on symmetric boards and arrangements, and games made of independent parts. Look for a mirror move that is always legal, or translate the game into Nim heaps and use the nim-sum.`,
      questions: [
        {
          stem: String.raw`Twenty sweets are placed in a $4 \times 5$ rectangular array, as shown. Two players take turns. On each turn a player takes either one sweet, or two sweets that were next to each other in the same row or the same column of the original array and are both still there. The player who takes the last sweet wins. Which player can guarantee a win?`,
          figure: {"type": "plot", "x": [-0.7, 4.7], "y": [-0.7, 3.7], "equal": true, "axes": false, "circles": [{"c": [0, 3], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [1, 3], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [2, 3], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [3, 3], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [4, 3], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [0, 2], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [1, 2], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [2, 2], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [3, 2], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [4, 2], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [0, 1], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [1, 1], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [2, 1], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [3, 1], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [4, 1], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [0, 0], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [1, 0], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [2, 0], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [3, 0], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [4, 0], "r": 0.32, "fill": true, "tone": "accent"}], "alt": "Twenty sweets in a rectangular array of 4 rows and 5 columns."},
          difficulty: 1,
          answer: String.raw`The first player`,
        },
        {
          stem: String.raw`A board has four separate rows of squares, with one counter in each row. The counters can move left by at most $5$, $9$, $12$ and $14$ squares respectively before reaching the left end of their row. Two players take turns; a move consists of sliding one counter any positive number of squares to the left, without going past the end of its row. The player who cannot move loses. How many different first moves guarantee a win for the first player?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Two players take turns to shade one unshaded cell of a $2025 \times 2025$ board. A cell may not be shaded if it shares a side with a cell that is already shaded. The player who cannot move loses. Prove that the first player has a winning strategy.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: shade the centre cell first, then always shade the cell symmetric (through the centre) to the opponent's last cell; a cell and its mirror image are never adjacent, so by symmetry this reply is always legal.`,
        },
      ],
    },
  ],
});
