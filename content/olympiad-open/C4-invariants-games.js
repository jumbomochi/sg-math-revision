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
    {
      title: String.raw`Weighted invariants: a weight $x^{k}$ for position $k$`,
      body: String.raw`When tokens move along a row of squares, give a token on square $k$ the weight $x^{k}$ and choose $x$ so that **one move does not change the total weight**.

- Write the move as an equation in $x$ and solve it. Example: a move replaces three tokens on square $k$ by one token on square $k + 1$. Then $3x^{k} = x^{k+1}$ gives $x = 3$, so $\sum 3^{(\text{square})}$ is invariant.
- If $x > 1$ and every weight is positive, the invariant total limits how far right a token can get: in the example, starting with $50$ tokens on square $0$ (total weight $50$), no token can reach square $4$, since $3^{4} = 81 > 50$.
- Pair the weight with a count (the number of tokens, or of moves) to prove that a process stops or to find how long it takes.`,
    },
    {
      title: String.raw`Grundy values: adding games together`,
      body: String.raw`When a game is made of independent parts (several piles, several rows), and a move is made in exactly one part, give each position of a part its **Grundy value**:

- the **mex** (minimum excluded value) of a set of non-negative integers is the least non-negative integer not in it, e.g. $\operatorname{mex}\{0, 1, 3\} = 2$;
- $g(\text{position}) = \operatorname{mex}\{g(Q) : Q \text{ reachable in one move}\}$; a position with no moves has value $0$.
- **Sprague–Grundy theorem**: a position made of parts with values $g_1, g_2, \ldots$ is a P-position exactly when $g_1 \oplus g_2 \oplus \cdots = 0$. Each part behaves like a Nim heap of size $g_i$.
- A winning move changes one part from value $g_i$ to $g_i \oplus s$, where $s$ is the total nim-sum; count the winning moves part by part.
- Example: piles where a move removes $1$ or $2$ stones from one pile. Tabulating gives $g(n) = n \bmod 3$, so piles $4$ and $5$ have values $1 \oplus 2 = 3 \ne 0$, and the first player wins by moving pile $5$ to value $1$ (take $1$ stone, leaving $4$ and $4$).`,
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
          choices: [String.raw`$0$`, String.raw`$12$`, String.raw`$20$`, String.raw`$28$`, String.raw`$37$`],
          difficulty: 1,
          answer: String.raw`(E) $37$`,
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
        {
          stem: String.raw`A frog sits at $0$ on the number line and makes $21$ jumps. The first jump has length $1$, the second has length $2$, and so on, up to the $21$st jump of length $21$; each jump goes to the left or to the right, as the frog chooses. How many different numbers can the frog be at after the $21$ jumps?`,
          difficulty: 1,
          answer: String.raw`$232$`,
        },
        {
          stem: String.raw`A robot starts at the point $(0, 0)$ of the coordinate plane. Each move takes it from $(x, y)$ to $(x + 2, y + 1)$, to $(x + 1, y + 3)$ or to $(x - 3, y - 4)$. How many of the $100$ points $(x, y)$ with $x, y \in \{0, 1, 2, \ldots, 9\}$ can the robot reach?`,
          difficulty: 2,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A **word** is a finite string of the letters A and B (the empty word, with no letters, is allowed). A move consists of inserting one of the blocks AAA, BB or ABAB anywhere in a word (at the start, at the end or between two letters), or deleting one of these blocks where it appears as consecutive letters. How many of the $1024$ words of length $10$ can be turned into the empty word by a sequence of moves?`,
          difficulty: 3,
          answer: String.raw`$171$`,
        },
        {
          stem: String.raw`Let $n \ge 3$. Around a circle stand $n$ boxes, each containing one stone. A move consists of choosing a box whose two neighbouring boxes are both non-empty, taking one stone from each of these two neighbours, and putting both stones into the chosen box. Find all $n$ for which it is possible to gather all $n$ stones in one box, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`All odd $n$. **Proof.** Key idea: number the boxes $0, 1, \ldots, n - 1$ round the circle; if box $k$ holds $a_k$ stones, then $\sum k\,a_k \pmod n$ never changes, which rules out even $n$; for odd $n$, run the moves backwards: each becomes a move in which a box with at least two stones sends one stone to each neighbour, and spreading one pile of $n$ stones in this way along a line ends with one stone on each of $n$ consecutive points, so wrapping the line round the circle does it.`,
        },
      ],
    },
    {
      id: "C4-algebraic-invariants",
      name: String.raw`The last number on the board`,
      tests: String.raw`Two numbers are repeatedly replaced by one according to a formula, and you must find the final number. Find a function $f$ with $f(\text{new}) = f(a) + f(b)$ or $f(a)\,f(b)$, so that a sum or product over the board is invariant. Harder versions move tokens along a strip; weight a token on square $k$ by $x^{k}$.`,
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
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 24$ are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $\sqrt{a^{2} + b^{2}}$. After $23$ moves one number is left. What is it?`,
          difficulty: 1,
          answer: String.raw`$70$`,
        },
        {
          stem: String.raw`The six numbers $2, 4, 8, 16, 32, 64$ are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $a^{\log_{2} b}$. After five moves one number is left. What is it?`,
          difficulty: 2,
          answer: String.raw`$2^{720}$`,
        },
        {
          stem: String.raw`The $20$ numbers $2, \dfrac{3}{2}, \dfrac{4}{3}, \ldots, \dfrac{21}{20}$ (that is, $1 + \dfrac{1}{k}$ for $k = 1, 2, \ldots, 20$) are written on a board. A move consists of erasing two numbers $a$ and $b$ and writing $\dfrac{ab - 1}{a + b - 2}$. After $19$ moves one number is left. What is it?`,
          difficulty: 3,
          answer: String.raw`$\dfrac{211}{210}$`,
        },
        {
          stem: String.raw`The squares of an infinite strip are numbered by all the integers, from left to right. Initially there are $100$ stones on square $0$ and no other stones. A move consists of choosing a square $k$ with at least two stones, removing two stones from it, and putting one stone on square $k + 1$ and one stone on square $k - 2$. Prove that, however the moves are made, no stone ever reaches square $9$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: give a stone on square $k$ the weight $\varphi^{k}$, where $\varphi = \frac{1 + \sqrt5}{2}$, so that $2\varphi^{k} = \varphi^{k+1} + \varphi^{k-2}$ and the total weight stays $100$; a first stone on square $9$ needs two stones on square $8$, and just before the second of these arrives there are one stone on square $8$ and two on square $7$, of total weight $\varphi^{8} + 2\varphi^{7} = \varphi^{9} + \varphi^{7} > 105$.`,
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
        {
          stem: String.raw`The boxes of a row are numbered $0, 1, 2, \ldots$ from left to right, and box $0$ contains $100$ tokens; the other boxes are empty. A move consists of taking two tokens from one box, putting one of them into the next box to the right and throwing the other one away. Moves are made until every box contains at most one token. How many moves are made?`,
          difficulty: 1,
          answer: String.raw`$97$`,
        },
        {
          stem: String.raw`Twelve coins lie in a row, all showing heads. A move consists of choosing a coin that shows heads and is not the rightmost coin, and turning over both it and the coin immediately to its right. Moves are made until no move is possible. What is the largest possible number of moves?`,
          difficulty: 2,
          answer: String.raw`$66$`,
        },
        {
          stem: String.raw`The numbers $1, 2, 3, \ldots, 10$ are written on a board. A move consists of choosing two numbers $a$ and $b$ on the board with $a \ge b + 2$ and replacing them by $a - 1$ and $b + 1$. Moves are made until no move is possible. How many different values can the total number of moves take?`,
          difficulty: 3,
          answer: String.raw`$31$`,
        },
        {
          stem: String.raw`A word is written using the letters A, B and C. A move consists of replacing two consecutive letters AB by the three letters BBA, or replacing two consecutive letters BC by the three letters CCB. Prove that, whatever the starting word and however the moves are chosen, only finitely many moves can be made.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the sum over all letters B of $2^{(\text{number of A's to its left})}$ never changes, so the number of B's is bounded and only finitely many AB-moves happen; between two AB-moves the sum over all letters C of $2^{(\text{number of B's to its left})}$ is constant, which bounds the number of BC-moves.`,
        },
      ],
    },
    {
      id: "C4-colouring-tilings",
      name: String.raw`Colouring arguments for tilings`,
      tests: String.raw`"Can this board be tiled by these pieces?" or "where can the missing cell be?" Colour the board (chessboard, or $(i + j) \bmod k$ for $1 \times k$ pieces) so each piece covers a fixed colour pattern, then compare colour counts. Near a corner, follow the placements that are forced.`,
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
        {
          stem: String.raw`An equilateral triangle of side $6$ is divided by lines parallel to its sides into $36$ small equilateral triangles of side $1$, as shown. A **rhombus** is a piece made of two small triangles that share a side. What is the largest number of rhombuses that can be cut from the big triangle along the grid lines?`,
          figure: {"type": "plot", "x": [-0.4, 6.4], "y": [-0.4, 5.596], "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [6.0, 0.0], "tone": "ink"}, {"from": [0, 0], "to": [3.0, 5.196], "tone": "ink"}, {"from": [0.5, 0.866], "to": [5.5, 0.866], "tone": "ink"}, {"from": [1, 0], "to": [3.5, 4.33], "tone": "ink"}, {"from": [1, 0], "to": [0.5, 0.866], "tone": "ink"}, {"from": [1.0, 1.732], "to": [5.0, 1.732], "tone": "ink"}, {"from": [2, 0], "to": [4.0, 3.464], "tone": "ink"}, {"from": [2, 0], "to": [1.0, 1.732], "tone": "ink"}, {"from": [1.5, 2.598], "to": [4.5, 2.598], "tone": "ink"}, {"from": [3, 0], "to": [4.5, 2.598], "tone": "ink"}, {"from": [3, 0], "to": [1.5, 2.598], "tone": "ink"}, {"from": [2.0, 3.464], "to": [4.0, 3.464], "tone": "ink"}, {"from": [4, 0], "to": [5.0, 1.732], "tone": "ink"}, {"from": [4, 0], "to": [2.0, 3.464], "tone": "ink"}, {"from": [2.5, 4.33], "to": [3.5, 4.33], "tone": "ink"}, {"from": [5, 0], "to": [5.5, 0.866], "tone": "ink"}, {"from": [5, 0], "to": [2.5, 4.33], "tone": "ink"}, {"from": [6, 0], "to": [3.0, 5.196], "tone": "ink"}], "alt": "An equilateral triangle of side 6 divided by lines parallel to its sides into 36 small equilateral triangles."},
          difficulty: 1,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Let $n \ge 1$. The **staircase** of size $n$ consists of $n$ rows of unit cells; from top to bottom the rows contain $1, 2, \ldots, n$ cells, and all rows start at the same left edge (the figure shows $n = 5$). Prove that for no $n$ can the staircase be tiled by $1 \times 3$ rectangles, placed horizontally or vertically.`,
          figure: {"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 5.3], "equal": true, "axes": false, "polygons": [{"points": [[0, 4], [1, 4], [1, 5], [0, 5]], "tone": "ink"}, {"points": [[0, 3], [1, 3], [1, 4], [0, 4]], "tone": "ink"}, {"points": [[1, 3], [2, 3], [2, 4], [1, 4]], "tone": "ink"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "tone": "ink"}, {"points": [[1, 2], [2, 2], [2, 3], [1, 3]], "tone": "ink"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "tone": "ink"}, {"points": [[0, 1], [1, 1], [1, 2], [0, 2]], "tone": "ink"}, {"points": [[1, 1], [2, 1], [2, 2], [1, 2]], "tone": "ink"}, {"points": [[2, 1], [3, 1], [3, 2], [2, 2]], "tone": "ink"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "tone": "ink"}, {"points": [[0, 0], [1, 0], [1, 1], [0, 1]], "tone": "ink"}, {"points": [[1, 0], [2, 0], [2, 1], [1, 1]], "tone": "ink"}, {"points": [[2, 0], [3, 0], [3, 1], [2, 1]], "tone": "ink"}, {"points": [[3, 0], [4, 0], [4, 1], [3, 1]], "tone": "ink"}, {"points": [[4, 0], [5, 0], [5, 1], [4, 1]], "tone": "ink"}], "alt": "A staircase of cells: rows of 1, 2, 3, 4 and 5 cells from top to bottom, all starting at the same left edge.", "caption": "The staircase for $n = 5$."},
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: the right-hand cell of each row can only be covered by a vertical rectangle hanging down from it, since the cell to its left is already covered by the rectangle hanging down from the row above; so the last cell of row $n - 1$ would need a rectangle reaching row $n + 1$.`,
        },
        {
          stem: String.raw`The rows and the columns of a $12 \times 12$ board are numbered $1$ to $12$. The board is tiled by $1 \times 3$ rectangles (placed horizontally or vertically) together with exactly nine $2 \times 2$ squares. For how many of the nine squares is the sum $r + c$ divisible by $3$, where $(r, c)$ is the cell in the top-left corner of the square (row $r$, column $c$)?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`The rows and the columns of a $2026 \times 2026$ board are numbered $1$ to $2026$. The board is tiled by $1 \times 4$ rectangles (placed horizontally or vertically) and $2 \times 2$ squares. Prove that some $2 \times 2$ square has its top-left cell in row $r$ and column $c$, where $r$ and $c$ are odd and $r \equiv c \pmod 4$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: colour cell $(r, c)$ by $(r + c) \bmod 4$, and separately by $(r - c) \bmod 4$; each rectangle covers every colour once, so comparing colour counts shows that squares with top-left $r + c \equiv 2$ outnumber those with $r + c \equiv 0$ by exactly one, and squares with $r - c \equiv 0$ outnumber those with $r - c \equiv 2$ by exactly one, and adding these two equations shows that the squares of the required kind outnumber those with $r, c$ odd and $r \not\equiv c \pmod 4$ by exactly one.`,
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
        {
          stem: String.raw`A token stands in the top-right cell of a board with $m$ columns and $n$ rows. Two players take turns to move the token one cell to the left, one cell down, or one cell diagonally down and to the left. The player who moves the token into the bottom-left cell wins. For how many of the $81$ boards with $2 \le m \le 10$ and $2 \le n \le 10$ can the second player guarantee a win?`,
          difficulty: 1,
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`A positive integer $n$ is written on a board. Two players take turns. On each turn the player replaces the number $m$ on the board by $m - 1$ or, if $m$ is even, by $\dfrac{m}{2}$. The player who writes $0$ wins. For how many values of $n$ with $1 \le n \le 100$ can the second player guarantee a win?`,
          difficulty: 2,
          answer: String.raw`$49$`,
        },
        {
          stem: String.raw`There are two piles of stones, with $a$ and $b$ stones. Two players take turns. On each turn a player either takes any positive number of stones from one pile, or takes exactly one stone from each pile. The player who takes the last stone wins. For how many of the $400$ starting positions with $1 \le a \le 20$ and $1 \le b \le 20$ can the second player guarantee a win?`,
          difficulty: 3,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A pile has $n \ge 2$ stones. Two players take turns. On the first turn, the first player removes any number of stones, but not all of them. On every later turn, the player must remove a number of stones that divides the number of stones the opponent removed on the turn before. The player who takes the last stone wins. Find all $n$ for which the second player has a winning strategy, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`The powers of $2$. **Proof.** Key idea: if $n = 2^{a}b$ with $b > 1$ odd, the first player removes $2^{a}$, while if $n = 2^{a}$ the second player answers a first removal of $2^{j}c$ ($c$ odd) by removing $2^{j}$; from then on this player copies every removal of the opponent, which keeps the number of stones left a multiple of twice the last removal (always a power of $2$), so this player is never stuck.`,
        },
      ],
    },
    {
      id: "C4-symmetry-nim",
      name: String.raw`Symmetry strategies and Nim`,
      tests: String.raw`Games on symmetric boards and arrangements, and games made of independent parts. Look for a mirror move that is always legal, or translate the game into Nim heaps and use the nim-sum; for other games made of independent parts, use Grundy values.`,
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
        {
          stem: String.raw`In the game of Nim, which of the following positions (sizes of three heaps) is a losing position for the player who is about to move?`,
          choices: [String.raw`$4, 7, 9$`, String.raw`$5, 9, 12$`, String.raw`$6, 10, 13$`, String.raw`$7, 8, 14$`, String.raw`$8, 9, 14$`],
          difficulty: 1,
          answer: String.raw`(B) $5, 9, 12$`,
        },
        {
          stem: String.raw`There are $2026$ points equally spaced around a circle. Two players take turns. On each turn a player draws a chord joining two points that are not yet endpoints of a chord; the new chord may not cross or touch any chord already drawn. The player who cannot move loses. Which player can guarantee a win?`,
          difficulty: 2,
          answer: String.raw`The first player`,
        },
        {
          stem: String.raw`There are four piles with $7$, $9$, $13$ and $18$ stones. Two players take turns. On each turn a player removes $1$, $2$ or $3$ stones from one pile. The player who takes the last stone wins. How many different first moves guarantee a win for the first player?`,
          difficulty: 3,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`There are four piles with $12$, $20$, $40$ and $48$ stones. Two players take turns. On each turn a player chooses a pile and removes from it a number of stones that divides the current number of stones in that pile (the whole pile may be removed). The player who takes the last stone wins. How many different first moves guarantee a win for the first player?`,
          difficulty: 4,
          answer: String.raw`$6$`,
        },
      ],
    },
  ],
});
