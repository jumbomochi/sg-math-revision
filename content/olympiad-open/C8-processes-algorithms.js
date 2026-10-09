H2.addTopic({
  id: "C8",
  title: "Processes, Algorithms and Constructions",
  summary: String.raw`Operations repeated on a configuration: how far it is from the goal, whether and where it stops, the fewest moves with a construction and a matching bound, weighing and searching with information-theoretic limits, spreading processes on grids, and strategies that must work in every case.`,
  concepts: [
    {
      title: String.raw`Experiment first, then explain`,
      body: String.raw`- Run the process by hand on small cases and **tabulate**: number of moves, final state, period. Guess the pattern, then look for the reason.
- Think of the positions as **states** and the moves as arrows between them. "The least number of moves" is a distance in this state graph, and "can it be reached?" asks whether two states are connected.
- Example: three lamps in a row, all off; a move switches two neighbouring lamps. Of the $8$ states only the $4$ with an even number of lamps on can be reached. "First and third on" needs $2$ moves: switch lamps $1, 2$, then lamps $2, 3$.
- Find a **description** that makes the process transparent: read coins as a binary number, a rearrangement as a permutation, a number as its list of prime exponents.`,
    },
    {
      title: String.raw`How far from sorted? Three measures`,
      body: String.raw`For a row of the numbers $1, 2, \ldots, n$ in some order:

| Allowed move | Least number of moves |
| swap two **neighbours** | number of **inversions** (pairs in the wrong order) |
| swap **any two** numbers | $n - c$, where $c$ is the number of **cycles** |
| take one number out and reinsert it anywhere | $n - L$, where $L$ is the length of the longest **increasing subsequence** |

- **Cycles**: if the number in position $i$ is $p_i$, follow $i \to p_i \to p_{p_i} \to \cdots$ until you return to $i$. A swap inside one cycle splits it into two; a swap between two cycles joins them. So each swap changes $c$ by exactly $1$, and the sorted row has $c = n$.
- Example: $2, 3, 1, 5, 4$ has $3$ inversions $(2,1), (3,1), (5,4)$; cycles $1 \to 2 \to 3 \to 1$ and $4 \to 5 \to 4$, so $5 - 2 = 3$ arbitrary swaps; and longest increasing subsequence $2, 3, 5$, so $2$ reinsertions.
- For a new kind of move, ask: which cards are **never moved** in a best solution, and what must be true of them?`,
    },
    {
      title: String.raw`The fewest moves: construction plus bound`,
      body: String.raw`An answer "the least number of moves is $N$" needs **two** arguments.

1. **Construction**: an explicit procedure that always succeeds in $N$ moves.
2. **Bound**: no procedure uses fewer. Find a quantity $Q$ that one move changes by at most $d$, while the start and the goal differ by $D$; then at least $D/d$ moves are needed.

- Good choices for $Q$: a sum of positions or distances, a count of "bad" pairs, a weighted sum, the number of cells still to be visited.
- If the construction never wastes anything ($Q$ changes by exactly $d$ each move) the two arguments meet.
- If the effect of a move does not depend on when it is made, record only **how many times** each kind of move is used; the start and the goal then give equations for these numbers.
- Example: ten counters on squares $1$ to $10$ of a strip must move to squares $11$ to $20$; a move slides one counter onto the next empty square. The sum of positions rises by exactly $1$ per move and must rise by $100$, so $100$ moves are needed, and moving the front counter first always works.`,
    },
    {
      title: String.raw`Monovariants: termination and perimeter`,
      body: String.raw`- A quantity that only moves one way shows a process **stops**, and how fast: if a positive integer drops by at least $1$ each move, the number of moves is at most its starting value. (See also Theme C4.)
- **Perimeter** is the classic monovariant for spreading on a grid. Rule: a square becomes infected once at least two of its four side-neighbours are infected. When a square is infected through two infected neighbours, at least two edges of the boundary disappear and at most two new ones appear, so the perimeter of the infected region **never increases**.
- Consequence: to infect a whole $n \times n$ board (perimeter $4n$) you need at least $n$ initially infected squares (perimeter at most $4$ each).
- The same idea works on other boards and rules: compare the number of new boundary edges with the number of disappearing ones.`,
      figure: {"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 4.3], "equal": true, "axes": false, "polygons": [{"points": [[1, 2], [2, 2], [2, 3], [1, 3]], "fill": true, "tone": "accent"}, {"points": [[2, 1], [3, 1], [3, 2], [2, 2]], "fill": true, "tone": "accent"}, {"points": [[3, 1], [4, 1], [4, 2], [3, 2]], "fill": true, "tone": "accent"}, {"points": [[0, 2], [1, 2], [1, 3], [0, 3]], "fill": true, "tone": "accent"}, {"points": [[2, 2], [3, 2], [3, 3], [2, 3]], "fill": true, "tone": "warn"}], "segments": [{"from": [0, 0], "to": [0, 4], "tone": "muted"}, {"from": [1, 0], "to": [1, 4], "tone": "muted"}, {"from": [2, 0], "to": [2, 4], "tone": "muted"}, {"from": [3, 0], "to": [3, 4], "tone": "muted"}, {"from": [4, 0], "to": [4, 4], "tone": "muted"}, {"from": [5, 0], "to": [5, 4], "tone": "muted"}, {"from": [0, 0], "to": [5, 0], "tone": "muted"}, {"from": [0, 1], "to": [5, 1], "tone": "muted"}, {"from": [0, 2], "to": [5, 2], "tone": "muted"}, {"from": [0, 3], "to": [5, 3], "tone": "muted"}, {"from": [0, 4], "to": [5, 4], "tone": "muted"}], "labels": [{"x": 2.5, "y": 2.5, "text": "new", "pos": "c", "style": "small"}], "caption": "The new cell has two infected neighbours: two boundary edges disappear and at most two appear.", "alt": "A 5 by 4 grid with four infected cells shaded and a newly infected cell, marked new, that shares a side with two of them."},
    },
    {
      title: String.raw`Switching puzzles are linear algebra mod 2`,
      body: String.raw`When a move switches a fixed set of lamps (or turns over a fixed set of coins):

- the **order** of moves does not matter, and doing the same move twice does nothing. So a solution is just a **set** of moves, each used once or not at all;
- write $x_i \in \{0, 1\}$ for "move $i$ is used"; each lamp gives an equation mod $2$;
- if the solution is **unique**, its size is the least number of moves; if not, minimise over all solutions.
- **Forcing**: in a row, decide the moves from left to right; each lamp's equation often forces the next move.
- Example: four lamps in a row, pressing a lamp switches it and its neighbours; to light only the first lamp, the equations force presses $1$, $3$ and $4$ (and no others), so $3$ presses.`,
    },
    {
      title: String.raw`Periods and repeating processes`,
      body: String.raw`- A deterministic process on finitely many states must eventually **repeat**, and from then on it is periodic.
- If every state has exactly one predecessor (the process is **reversible**, such as a shuffle of a deck), the process is a permutation of the states, so it returns to the **start**. The number of steps is the **lcm of the cycle lengths**.
- Track one position: if a shuffle sends position $p$ to $ap \bmod m$, the period is the **order** of $a$ modulo $m$. Example: positions $1, \ldots, 8$ with $p \mapsto 2p \bmod 9$ cycle with period $6$, since $2$ has order $6$ modulo $9$.
- For processes where a choice is made each step, look for what **does not depend** on the choices: the final state, the total number of moves, or a quantity like the multiset of prime exponents.`,
    },
    {
      title: String.raw`Information-theoretic lower bounds`,
      body: String.raw`- A weighing on a balance has $3$ outcomes (left, right, balance) and a yes/no question has $2$. So $k$ weighings distinguish at most $3^{k}$ cases, and $k$ questions at most $2^{k}$.
- **Count the cases carefully**: "one of $n$ coins is heavier" has $n$ cases, "one is heavier or lighter" has $2n$, "two of them are heavier" has $\binom{n}{2}$.
- The bound is about the **outcome sequences**: two cases that give the same answers to every question can never be told apart. If extra rules restrict the possible answer sequences, count those instead.
- A good first step splits the cases as **evenly as possible** among the outcomes. Example: with $9$ coins, one heavier, weigh $3$ against $3$: each outcome leaves $3$ candidates, and one more weighing finishes.`,
    },
    {
      title: String.raw`Adversaries and best-strategy recursions`,
      body: String.raw`- To prove that $k$ steps are **not** enough, play the opponent: answer every question (or move the hidden object) so as to keep as many possibilities alive as possible.
- Let $f(k)$ be the largest number of cases that can be handled in $k$ steps. One step splits the cases into parts, each handled in $k - 1$ steps, giving a **recursion**. Example: questions "is it at most $a$?" give $f(k) = 2f(k - 1)$, $f(0) = 1$, so $f(k) = 2^{k}$.
- When the steps have different costs or restrictions, the recursion changes; set it up from scratch.
- A **fixed** list of commands (chosen in advance) must work for every starting state **simultaneously**: follow all possible starts in parallel. Two starts that are ever in the same state behave identically from then on.`,
    },
  ],
  archetypes: [
    {
      id: "C8-sorting",
      name: String.raw`Sorting with restricted moves`,
      tests: String.raw`A row of numbered cards must be put in order with a given kind of move, and you want the least number of moves. Match the move to the right measure of disorder (inversions, cycles, a longest increasing run) and show that one move improves it by at most one.`,
      questions: [
        {
          stem: String.raw`The numbers $1$ to $9$ are written in a row in the order
$$4, \ 7, \ 1, \ 9, \ 2, \ 8, \ 3, \ 6, \ 5.$$
A move swaps any two of the numbers (not necessarily neighbours). What is the least number of moves needed to arrange them as $1, 2, \ldots, 9$?`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Eight books numbered $1$ to $8$ stand on a shelf in the order $3, 1, 6, 2, 7, 4, 8, 5$ from left to right. A move consists of taking one book out and putting it back anywhere on the shelf. What is the least number of moves needed to put the books in the order $1, 2, \ldots, 8$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`, String.raw`$8$`],
          answer: String.raw`(B) $4$`,
        },
        {
          stem: String.raw`Ten cards numbered $1$ to $10$ lie in a row in the order
$$6, \ 3, \ 9, \ 4, \ 1, \ 7, \ 5, \ 10, \ 8, \ 2.$$
A move consists of taking any one card and putting it at the left end or at the right end of the row. What is the least number of moves needed to obtain $1, 2, \ldots, 10$?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A move swaps any two numbers in a row. For how many of the $720$ arrangements of $1, 2, 3, 4, 5, 6$ is the least number of moves needed to reach $1, 2, 3, 4, 5, 6$ exactly $3$?`,
          difficulty: 2,
          answer: String.raw`$225$`,
        },
        {
          stem: String.raw`Cards numbered $1, 2, \ldots, N$ lie in a row. A move consists of choosing three neighbouring cards and reversing their order. Let $m$ be a positive integer. Prove that the row $2m, 2m - 1, \ldots, 2, 1$ can never be turned into $1, 2, \ldots, 2m$, and that the row $2m + 1, 2m, \ldots, 2, 1$ can be turned into $1, 2, \ldots, 2m + 1$, where the least number of moves needed is exactly $m^{2}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: reversing three neighbours just swaps the two outer cards, so every card stays on positions of one parity and only swaps neighbours within its parity class; the reversed row of $2m + 1$ cards needs $\binom{m+1}{2} + \binom{m}{2} = m^{2}$ such swaps (the inversions inside each class), while for $2m$ cards card $1$ must move from an even to an odd position.`,
        },
        {
          stem: String.raw`A **pass** through a row of numbers works as follows: compare the 1st and 2nd numbers and swap them if the first is larger; then do the same with the (new) 2nd and 3rd numbers; and so on, up to the 7th and 8th numbers. For how many of the $40\,320$ arrangements of $1, 2, \ldots, 8$ is the row in increasing order after two passes?`,
          difficulty: 3,
          answer: String.raw`$1458$`,
        },
        {
          stem: String.raw`Cards numbered $1$ to $100$ lie in a row in some order. A move consists of swapping two cards, one with an odd number and one with an even number (they need not be neighbours). Find the least number $N$ such that every arrangement can be put in the order $1, 2, \ldots, 100$ using at most $N$ moves, and prove your answer.`,
          difficulty: 4,
          answer: String.raw`$N = 124$. **Proof.** Key idea: the least number of moves is $\Phi = 100 - c + 2\max(a, b)$, where $c$ counts all cycles and $a$, $b$ count the cycles of length at least $2$ made only of odd numbers, respectively only of even numbers, because a move lowers $\Phi$ by at most $1$ and a suitable move always lowers it by exactly $1$; if $a \ge b$, then $c \ge a + 1$ and $a \le 25$ give $\Phi \le 99 + a \le 124$, with equality when the odd cards form $25$ swapped pairs and the even cards one $50$-cycle.`,
        },
      ],
    },
    {
      id: "C8-fewest-moves",
      name: String.raw`Fewest moves: a construction and a matching bound`,
      tests: String.raw`Find the least number of moves that reaches a target. Exhibit a procedure that uses $N$ moves, then prove that nothing shorter works: count what one move can change, or show that the moves are forced.`,
      questions: [
        {
          stem: String.raw`Start with the number $1$. A move either doubles the current number or adds $1$ to it. What is the least number of moves needed to reach $2026$?`,
          difficulty: 1,
          answer: String.raw`$17$`,
        },
        {
          stem: String.raw`Ten lamps stand in a row, all switched off. Pressing a lamp switches it and its neighbours (one neighbour for an end lamp, two otherwise) from off to on or from on to off. What is the least number of presses needed to have all ten lamps on?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Seven boxes stand in a row and contain $3, 11, 2, 9, 0, 8, 2$ marbles, in this order. A move consists of moving one marble from a box to a neighbouring box. What is the least number of moves needed to make the numbers of marbles in all boxes equal?`,
          difficulty: 2,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Twelve coins lie in a row, all showing heads. A move consists of turning over three neighbouring coins. What is the least number of moves needed to obtain the alternating row H T H T H T H T H T H T (starting with heads on the left)?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Eight children sit around a round table. Going round the table, they hold $6, 11, 0, 7, 10, 2, 6, 6$ sweets. A move consists of one child who has at least two sweets giving one sweet to each of their two neighbours. What is the least number of moves needed so that all eight children hold the same number of sweets?`,
          difficulty: 3,
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`Each cell of a $6 \times 6$ board holds a lamp, and all lamps are off. Pressing a cell switches all $11$ lamps in its row and its column (including its own lamp). What is the least number of presses needed to have the six lamps of the top row on and the other $30$ lamps off?`,
          difficulty: 3,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`A strip of squares, numbered $1, 2, 3, \ldots$, goes on for ever to the right. There are counters on squares $1, 2, \ldots, k$, as shown. A move is one of the following:

- a counter moves one square to the right, onto an empty square;
- a counter jumps to the right over a counter on the next square, landing on the square just beyond it, which must be empty.

Let $m$ be a positive integer. In terms of $k$ and $m$, find the least number of moves needed to have the counters on squares $m + 1, m + 2, \ldots, m + k$, and prove your answer.`,
          figure: {"type": "plot", "x": [-0.3, 13.1], "y": [-0.9, 1.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [12, 0], "tone": "ink"}, {"from": [0, 1], "to": [12, 1], "tone": "ink"}, {"from": [0, 0], "to": [0, 1], "tone": "ink"}, {"from": [1, 0], "to": [1, 1], "tone": "ink"}, {"from": [2, 0], "to": [2, 1], "tone": "ink"}, {"from": [3, 0], "to": [3, 1], "tone": "ink"}, {"from": [4, 0], "to": [4, 1], "tone": "ink"}, {"from": [5, 0], "to": [5, 1], "tone": "ink"}, {"from": [6, 0], "to": [6, 1], "tone": "ink"}, {"from": [7, 0], "to": [7, 1], "tone": "ink"}, {"from": [8, 0], "to": [8, 1], "tone": "ink"}, {"from": [9, 0], "to": [9, 1], "tone": "ink"}, {"from": [10, 0], "to": [10, 1], "tone": "ink"}, {"from": [11, 0], "to": [11, 1], "tone": "ink"}, {"from": [12, 0], "to": [12, 1], "tone": "ink"}], "circles": [{"c": [0.5, 0.5], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [1.5, 0.5], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [2.5, 0.5], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [3.5, 0.5], "r": 0.32, "fill": true, "tone": "accent"}, {"c": [4.5, 0.5], "r": 0.32, "fill": true, "tone": "accent"}], "labels": [{"x": 0.5, "y": 0, "text": "1", "pos": "s", "style": "small"}, {"x": 1.5, "y": 0, "text": "2", "pos": "s", "style": "small"}, {"x": 2.5, "y": 0, "text": "3", "pos": "s", "style": "small"}, {"x": 3.5, "y": 0, "text": "4", "pos": "s", "style": "small"}, {"x": 4.5, "y": 0, "text": "5", "pos": "s", "style": "small"}, {"x": 5.5, "y": 0, "text": "6", "pos": "s", "style": "small"}, {"x": 6.5, "y": 0, "text": "7", "pos": "s", "style": "small"}, {"x": 7.5, "y": 0, "text": "8", "pos": "s", "style": "small"}, {"x": 8.5, "y": 0, "text": "9", "pos": "s", "style": "small"}, {"x": 9.5, "y": 0, "text": "10", "pos": "s", "style": "small"}, {"x": 10.5, "y": 0, "text": "11", "pos": "s", "style": "small"}, {"x": 11.5, "y": 0, "text": "12", "pos": "s", "style": "small"}, {"x": 12.5, "y": 0.5, "text": "…", "pos": "c", "style": "plain"}], "caption": "The start when $k = 5$.", "alt": "A strip of squares numbered 1, 2, 3 and so on to the right, with counters on squares 1 to 5."},
          difficulty: 4,
          answer: String.raw`$m\left\lceil \frac{k}{2} \right\rceil$. **Proof.** Key idea: each move adds at most $2$ to the sum of positions, which must grow by $km$; for odd $k$, with positions $x_1 < x_2 < \cdots < x_k$, a jump raises two consecutive $x_i$ by $1$ each, so $x_1 - x_2 + x_3 - \cdots + x_k$ changes only by one-square moves, by $1$ each, and must grow by $m$, forcing at least $m$ one-square moves; to advance all counters by one square, let the counters jump in pairs from the front backwards (for odd $k$, after first moving the front counter one square), which meets the bound.`,
        },
      ],
    },
    {
      id: "C8-final-state",
      name: String.raw`Where does the process end? Final states and periods`,
      tests: String.raw`A rule is applied over and over: find the final state, how long the process lasts, or after how many steps it first repeats. Find a description in which the process becomes transparent: binary numbers, permutations and their cycles, prime exponents, or 0s and 1s.`,
      questions: [
        {
          stem: String.raw`Seven coins lie in a row, all showing tails. A step is: find the leftmost coin showing tails, turn it to heads, and turn every coin to its left (all of which show heads) to tails. How many steps are made before all seven coins show heads?`,
          difficulty: 1,
          choices: [String.raw`$49$`, String.raw`$64$`, String.raw`$127$`, String.raw`$128$`, String.raw`$5040$`],
          answer: String.raw`(C) $127$`,
        },
        {
          stem: String.raw`A pile of ten cards is numbered $1$ to $10$ from top to bottom. A shuffle is done as follows: deal the cards one at a time from the top, alternately onto a left pile and a right pile (left first), each card going on top of its pile; then put the left pile on top of the right pile. How many shuffles are needed before the cards are back in the order $1$ to $10$ for the first time?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`The numbers $12, 18, 20, 45, 50$ are written on a board. A move consists of choosing two numbers on the board, neither of which divides the other, and replacing them by their greatest common divisor and their least common multiple. When no move is possible, what is the sum of the five numbers on the board?`,
          difficulty: 2,
          answer: String.raw`$1113$`,
        },
        {
          stem: String.raw`Eight children stand in a row. From left to right, their heights rank $5, 8, 2, 7, 1, 6, 3, 4$ (where $1$ is the shortest). In the 1st second, each of the pairs in positions $(1, 2)$, $(3, 4)$, $(5, 6)$, $(7, 8)$ swaps places if the left child is taller than the right one. In the 2nd second the same is done for the pairs $(2, 3)$, $(4, 5)$, $(6, 7)$; in the 3rd second for the first set of pairs again, and so on, alternately. After how many seconds are the children in increasing order of height for the first time?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A **three-way shuffle** of a deck of $3n$ cards cuts it into the top $n$, the middle $n$ and the bottom $n$ cards and interleaves the three packets, so that the top card stays on top: the new order is the $1$st, $(n + 1)$th, $(2n + 1)$th, $2$nd, $(n + 2)$th, $(2n + 2)$th, $\ldots$, $n$th, $2n$th, $3n$th card of the old order. What is the least positive number of three-way shuffles that brings a deck of $2025$ cards back to its original order?`,
          difficulty: 3,
          answer: String.raw`$110$`,
        },
        {
          stem: String.raw`$2027$ coins lie around a circle, each showing heads or tails. Every minute, all coins are updated at the same time: each coin is turned (if necessary) so that it shows the face shown by the majority of the three coins consisting of itself and its two neighbours. Prove that after $1013$ minutes no coin ever changes again.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: two neighbouring coins showing the same face never change again, and since $2027$ is odd such a pair exists; between such blocks the coins alternate, and every minute each alternating stretch loses its two end coins to the blocks beside it, so a stretch of at most $2025$ coins is gone within $1013$ minutes.`,
        },
        {
          stem: String.raw`Let $n \ge 2$. Some $n$ positive integers are written on a board. A move consists of choosing two numbers on the board, neither of which divides the other, and replacing them by their greatest common divisor and their least common multiple. Find, in terms of $n$, the greatest number of moves that can be made before no move is possible (over all choices of the starting numbers and of the moves), and prove your answer.`,
          difficulty: 4,
          answer: String.raw`$\binom{n}{2}$. **Proof.** Key idea: write the numbers in a row and always put the gcd in the left one of the two chosen places; then the number of pairs of places in which the left number divides the right one goes up by at least $1$ with every move (for each third place, the two pairs it forms with the chosen places do not lose any such divisibility), so there are at most $\binom{n}{2}$ moves; with $2^{i}3^{n - i}$ ($1 \le i \le n$) the exponents of $3$ form a reversed row, and gcd/lcm moves on neighbouring places sort it like neighbour swaps, one inversion at a time.`,
        },
      ],
    },
    {
      id: "C8-grid-processes",
      name: String.raw`Spreading and cellular processes on grids`,
      tests: String.raw`Cells of a board or line change colour every minute by a local rule: infection that spreads, or switching rules based on the neighbours. Simulate small cases, use the perimeter of the infected region as a monovariant, and treat "odd number of neighbours" rules as addition mod $2$.`,
      questions: [
        {
          stem: String.raw`On the $7 \times 7$ board shown, only the centre cell is shaded. Every minute, at the same time, each unshaded cell that shares a side with **exactly one** shaded cell becomes shaded; shaded cells stay shaded. How many cells are shaded when no more changes happen?`,
          figure: {"type": "plot", "x": [-0.3, 7.3], "y": [-0.3, 7.3], "equal": true, "axes": false, "polygons": [{"points": [[3, 3], [4, 3], [4, 4], [3, 4]], "fill": true, "tone": "accent"}], "segments": [{"from": [0, 0], "to": [0, 7], "tone": "ink"}, {"from": [0, 0], "to": [7, 0], "tone": "ink"}, {"from": [1, 0], "to": [1, 7], "tone": "ink"}, {"from": [0, 1], "to": [7, 1], "tone": "ink"}, {"from": [2, 0], "to": [2, 7], "tone": "ink"}, {"from": [0, 2], "to": [7, 2], "tone": "ink"}, {"from": [3, 0], "to": [3, 7], "tone": "ink"}, {"from": [0, 3], "to": [7, 3], "tone": "ink"}, {"from": [4, 0], "to": [4, 7], "tone": "ink"}, {"from": [0, 4], "to": [7, 4], "tone": "ink"}, {"from": [5, 0], "to": [5, 7], "tone": "ink"}, {"from": [0, 5], "to": [7, 5], "tone": "ink"}, {"from": [6, 0], "to": [6, 7], "tone": "ink"}, {"from": [0, 6], "to": [7, 6], "tone": "ink"}, {"from": [7, 0], "to": [7, 7], "tone": "ink"}, {"from": [0, 7], "to": [7, 7], "tone": "ink"}], "alt": "A 7 by 7 board with only the centre cell shaded."},
          difficulty: 1,
          answer: String.raw`$21$`,
        },
        {
          stem: String.raw`On a $7 \times 9$ board, the four corner cells are black and all others are white. Every minute, each white cell that shares a side with a black cell turns black. After how many minutes is the whole board black?`,
          difficulty: 1,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A row of lamps goes on for ever in both directions. At time $0$ exactly one lamp is on. Every second, all lamps are updated at the same time: a lamp is on in the next second exactly when exactly one of its two neighbours is on now (its own state does not matter). How many lamps are on after $100$ seconds?`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Finitely many cells of an infinite grid of squares are black. Every minute, each white cell that shares a side with at least two black cells turns black, and black cells stay black. Prove that no cell outside the smallest rectangle (made of cells) containing all the initial black cells ever turns black.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: a cell outside the rectangle shares a side with at most one cell of the rectangle, so as long as all black cells lie in the rectangle, no outside cell can have two black neighbours.`,
        },
        {
          stem: String.raw`At time $0$ exactly one cell of an infinite grid of squares is black. Every second, all cells are updated at the same time: a cell is black in the next second exactly when an odd number of its four side-neighbours are black now (its own colour does not matter). How many cells are black after $2026$ seconds?`,
          difficulty: 3,
          answer: String.raw`$65\,536$`,
        },
        {
          stem: String.raw`An equilateral triangle of side $5$ is divided into $25$ small equilateral triangles of side $1$, as shown. Some of the small triangles are infected. Every minute, each small triangle that shares a side with at least two infected small triangles becomes infected, and infected triangles stay infected. Prove that if all $25$ small triangles are eventually infected, then at least $10$ were infected at the start.`,
          figure: {"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 4.65], "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [5.0, 0.0], "tone": "ink"}, {"from": [0, 0], "to": [2.5, 4.33], "tone": "ink"}, {"from": [0, 0], "to": [0.0, 0.0], "tone": "ink"}, {"from": [0.5, 0.866], "to": [4.5, 0.866], "tone": "ink"}, {"from": [1, 0], "to": [3.0, 3.464], "tone": "ink"}, {"from": [1, 0], "to": [0.5, 0.866], "tone": "ink"}, {"from": [1.0, 1.732], "to": [4.0, 1.732], "tone": "ink"}, {"from": [2, 0], "to": [3.5, 2.598], "tone": "ink"}, {"from": [2, 0], "to": [1.0, 1.732], "tone": "ink"}, {"from": [1.5, 2.598], "to": [3.5, 2.598], "tone": "ink"}, {"from": [3, 0], "to": [4.0, 1.732], "tone": "ink"}, {"from": [3, 0], "to": [1.5, 2.598], "tone": "ink"}, {"from": [2.0, 3.464], "to": [3.0, 3.464], "tone": "ink"}, {"from": [4, 0], "to": [4.5, 0.866], "tone": "ink"}, {"from": [4, 0], "to": [2.0, 3.464], "tone": "ink"}, {"from": [5, 0], "to": [5.0, 0.0], "tone": "ink"}, {"from": [5, 0], "to": [2.5, 4.33], "tone": "ink"}], "alt": "An equilateral triangle of side 5 divided by lines parallel to its sides into 25 small equilateral triangles of side 1."},
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: when a small triangle is infected through at least two infected neighbours, at least two edges leave the boundary of the infected region and at most one joins it, so the perimeter drops by at least $1$; with $k$ triangles infected at the start, $3k - (25 - k) \ge 15$, so $k \ge 10$.`,
        },
        {
          stem: String.raw`The board for the game of Hex is the rhombus of $121$ hexagonal cells shown ($11$ rows of $11$ cells). Some cells are infected. Every minute, each cell that shares a side with at least **three** infected cells becomes infected, and infected cells stay infected. Find, with proof, the least number of cells that must be infected at the start so that the whole board can eventually become infected.`,
          figure: {"type": "plot", "x": [-1.266, 27.247], "y": [-16.4, 1.4], "equal": true, "axes": false, "polygons": [{"points": [[0.866, 0.5], [0.0, 1.0], [-0.866, 0.5], [-0.866, -0.5], [-0.0, -1.0], [0.866, -0.5]], "tone": "ink"}, {"points": [[2.598, 0.5], [1.732, 1.0], [0.866, 0.5], [0.866, -0.5], [1.732, -1.0], [2.598, -0.5]], "tone": "ink"}, {"points": [[4.33, 0.5], [3.464, 1.0], [2.598, 0.5], [2.598, -0.5], [3.464, -1.0], [4.33, -0.5]], "tone": "ink"}, {"points": [[6.062, 0.5], [5.196, 1.0], [4.33, 0.5], [4.33, -0.5], [5.196, -1.0], [6.062, -0.5]], "tone": "ink"}, {"points": [[7.794, 0.5], [6.928, 1.0], [6.062, 0.5], [6.062, -0.5], [6.928, -1.0], [7.794, -0.5]], "tone": "ink"}, {"points": [[9.526, 0.5], [8.66, 1.0], [7.794, 0.5], [7.794, -0.5], [8.66, -1.0], [9.526, -0.5]], "tone": "ink"}, {"points": [[11.258, 0.5], [10.392, 1.0], [9.526, 0.5], [9.526, -0.5], [10.392, -1.0], [11.258, -0.5]], "tone": "ink"}, {"points": [[12.99, 0.5], [12.124, 1.0], [11.258, 0.5], [11.258, -0.5], [12.124, -1.0], [12.99, -0.5]], "tone": "ink"}, {"points": [[14.722, 0.5], [13.856, 1.0], [12.99, 0.5], [12.99, -0.5], [13.856, -1.0], [14.722, -0.5]], "tone": "ink"}, {"points": [[16.454, 0.5], [15.588, 1.0], [14.722, 0.5], [14.722, -0.5], [15.588, -1.0], [16.454, -0.5]], "tone": "ink"}, {"points": [[18.187, 0.5], [17.321, 1.0], [16.454, 0.5], [16.454, -0.5], [17.321, -1.0], [18.187, -0.5]], "tone": "ink"}, {"points": [[1.732, -1.0], [0.866, -0.5], [-0.0, -1.0], [0.0, -2.0], [0.866, -2.5], [1.732, -2.0]], "tone": "ink"}, {"points": [[3.464, -1.0], [2.598, -0.5], [1.732, -1.0], [1.732, -2.0], [2.598, -2.5], [3.464, -2.0]], "tone": "ink"}, {"points": [[5.196, -1.0], [4.33, -0.5], [3.464, -1.0], [3.464, -2.0], [4.33, -2.5], [5.196, -2.0]], "tone": "ink"}, {"points": [[6.928, -1.0], [6.062, -0.5], [5.196, -1.0], [5.196, -2.0], [6.062, -2.5], [6.928, -2.0]], "tone": "ink"}, {"points": [[8.66, -1.0], [7.794, -0.5], [6.928, -1.0], [6.928, -2.0], [7.794, -2.5], [8.66, -2.0]], "tone": "ink"}, {"points": [[10.392, -1.0], [9.526, -0.5], [8.66, -1.0], [8.66, -2.0], [9.526, -2.5], [10.392, -2.0]], "tone": "ink"}, {"points": [[12.124, -1.0], [11.258, -0.5], [10.392, -1.0], [10.392, -2.0], [11.258, -2.5], [12.124, -2.0]], "tone": "ink"}, {"points": [[13.856, -1.0], [12.99, -0.5], [12.124, -1.0], [12.124, -2.0], [12.99, -2.5], [13.856, -2.0]], "tone": "ink"}, {"points": [[15.588, -1.0], [14.722, -0.5], [13.856, -1.0], [13.856, -2.0], [14.722, -2.5], [15.588, -2.0]], "tone": "ink"}, {"points": [[17.321, -1.0], [16.454, -0.5], [15.588, -1.0], [15.588, -2.0], [16.454, -2.5], [17.321, -2.0]], "tone": "ink"}, {"points": [[19.053, -1.0], [18.187, -0.5], [17.321, -1.0], [17.321, -2.0], [18.187, -2.5], [19.053, -2.0]], "tone": "ink"}, {"points": [[2.598, -2.5], [1.732, -2.0], [0.866, -2.5], [0.866, -3.5], [1.732, -4.0], [2.598, -3.5]], "tone": "ink"}, {"points": [[4.33, -2.5], [3.464, -2.0], [2.598, -2.5], [2.598, -3.5], [3.464, -4.0], [4.33, -3.5]], "tone": "ink"}, {"points": [[6.062, -2.5], [5.196, -2.0], [4.33, -2.5], [4.33, -3.5], [5.196, -4.0], [6.062, -3.5]], "tone": "ink"}, {"points": [[7.794, -2.5], [6.928, -2.0], [6.062, -2.5], [6.062, -3.5], [6.928, -4.0], [7.794, -3.5]], "tone": "ink"}, {"points": [[9.526, -2.5], [8.66, -2.0], [7.794, -2.5], [7.794, -3.5], [8.66, -4.0], [9.526, -3.5]], "tone": "ink"}, {"points": [[11.258, -2.5], [10.392, -2.0], [9.526, -2.5], [9.526, -3.5], [10.392, -4.0], [11.258, -3.5]], "tone": "ink"}, {"points": [[12.99, -2.5], [12.124, -2.0], [11.258, -2.5], [11.258, -3.5], [12.124, -4.0], [12.99, -3.5]], "tone": "ink"}, {"points": [[14.722, -2.5], [13.856, -2.0], [12.99, -2.5], [12.99, -3.5], [13.856, -4.0], [14.722, -3.5]], "tone": "ink"}, {"points": [[16.454, -2.5], [15.588, -2.0], [14.722, -2.5], [14.722, -3.5], [15.588, -4.0], [16.454, -3.5]], "tone": "ink"}, {"points": [[18.187, -2.5], [17.321, -2.0], [16.454, -2.5], [16.454, -3.5], [17.321, -4.0], [18.187, -3.5]], "tone": "ink"}, {"points": [[19.919, -2.5], [19.053, -2.0], [18.187, -2.5], [18.187, -3.5], [19.053, -4.0], [19.919, -3.5]], "tone": "ink"}, {"points": [[3.464, -4.0], [2.598, -3.5], [1.732, -4.0], [1.732, -5.0], [2.598, -5.5], [3.464, -5.0]], "tone": "ink"}, {"points": [[5.196, -4.0], [4.33, -3.5], [3.464, -4.0], [3.464, -5.0], [4.33, -5.5], [5.196, -5.0]], "tone": "ink"}, {"points": [[6.928, -4.0], [6.062, -3.5], [5.196, -4.0], [5.196, -5.0], [6.062, -5.5], [6.928, -5.0]], "tone": "ink"}, {"points": [[8.66, -4.0], [7.794, -3.5], [6.928, -4.0], [6.928, -5.0], [7.794, -5.5], [8.66, -5.0]], "tone": "ink"}, {"points": [[10.392, -4.0], [9.526, -3.5], [8.66, -4.0], [8.66, -5.0], [9.526, -5.5], [10.392, -5.0]], "tone": "ink"}, {"points": [[12.124, -4.0], [11.258, -3.5], [10.392, -4.0], [10.392, -5.0], [11.258, -5.5], [12.124, -5.0]], "tone": "ink"}, {"points": [[13.856, -4.0], [12.99, -3.5], [12.124, -4.0], [12.124, -5.0], [12.99, -5.5], [13.856, -5.0]], "tone": "ink"}, {"points": [[15.588, -4.0], [14.722, -3.5], [13.856, -4.0], [13.856, -5.0], [14.722, -5.5], [15.588, -5.0]], "tone": "ink"}, {"points": [[17.321, -4.0], [16.454, -3.5], [15.588, -4.0], [15.588, -5.0], [16.454, -5.5], [17.321, -5.0]], "tone": "ink"}, {"points": [[19.053, -4.0], [18.187, -3.5], [17.321, -4.0], [17.321, -5.0], [18.187, -5.5], [19.053, -5.0]], "tone": "ink"}, {"points": [[20.785, -4.0], [19.919, -3.5], [19.053, -4.0], [19.053, -5.0], [19.919, -5.5], [20.785, -5.0]], "tone": "ink"}, {"points": [[4.33, -5.5], [3.464, -5.0], [2.598, -5.5], [2.598, -6.5], [3.464, -7.0], [4.33, -6.5]], "tone": "ink"}, {"points": [[6.062, -5.5], [5.196, -5.0], [4.33, -5.5], [4.33, -6.5], [5.196, -7.0], [6.062, -6.5]], "tone": "ink"}, {"points": [[7.794, -5.5], [6.928, -5.0], [6.062, -5.5], [6.062, -6.5], [6.928, -7.0], [7.794, -6.5]], "tone": "ink"}, {"points": [[9.526, -5.5], [8.66, -5.0], [7.794, -5.5], [7.794, -6.5], [8.66, -7.0], [9.526, -6.5]], "tone": "ink"}, {"points": [[11.258, -5.5], [10.392, -5.0], [9.526, -5.5], [9.526, -6.5], [10.392, -7.0], [11.258, -6.5]], "tone": "ink"}, {"points": [[12.99, -5.5], [12.124, -5.0], [11.258, -5.5], [11.258, -6.5], [12.124, -7.0], [12.99, -6.5]], "tone": "ink"}, {"points": [[14.722, -5.5], [13.856, -5.0], [12.99, -5.5], [12.99, -6.5], [13.856, -7.0], [14.722, -6.5]], "tone": "ink"}, {"points": [[16.454, -5.5], [15.588, -5.0], [14.722, -5.5], [14.722, -6.5], [15.588, -7.0], [16.454, -6.5]], "tone": "ink"}, {"points": [[18.187, -5.5], [17.321, -5.0], [16.454, -5.5], [16.454, -6.5], [17.321, -7.0], [18.187, -6.5]], "tone": "ink"}, {"points": [[19.919, -5.5], [19.053, -5.0], [18.187, -5.5], [18.187, -6.5], [19.053, -7.0], [19.919, -6.5]], "tone": "ink"}, {"points": [[21.651, -5.5], [20.785, -5.0], [19.919, -5.5], [19.919, -6.5], [20.785, -7.0], [21.651, -6.5]], "tone": "ink"}, {"points": [[5.196, -7.0], [4.33, -6.5], [3.464, -7.0], [3.464, -8.0], [4.33, -8.5], [5.196, -8.0]], "tone": "ink"}, {"points": [[6.928, -7.0], [6.062, -6.5], [5.196, -7.0], [5.196, -8.0], [6.062, -8.5], [6.928, -8.0]], "tone": "ink"}, {"points": [[8.66, -7.0], [7.794, -6.5], [6.928, -7.0], [6.928, -8.0], [7.794, -8.5], [8.66, -8.0]], "tone": "ink"}, {"points": [[10.392, -7.0], [9.526, -6.5], [8.66, -7.0], [8.66, -8.0], [9.526, -8.5], [10.392, -8.0]], "tone": "ink"}, {"points": [[12.124, -7.0], [11.258, -6.5], [10.392, -7.0], [10.392, -8.0], [11.258, -8.5], [12.124, -8.0]], "tone": "ink"}, {"points": [[13.856, -7.0], [12.99, -6.5], [12.124, -7.0], [12.124, -8.0], [12.99, -8.5], [13.856, -8.0]], "tone": "ink"}, {"points": [[15.588, -7.0], [14.722, -6.5], [13.856, -7.0], [13.856, -8.0], [14.722, -8.5], [15.588, -8.0]], "tone": "ink"}, {"points": [[17.321, -7.0], [16.454, -6.5], [15.588, -7.0], [15.588, -8.0], [16.454, -8.5], [17.321, -8.0]], "tone": "ink"}, {"points": [[19.053, -7.0], [18.187, -6.5], [17.321, -7.0], [17.321, -8.0], [18.187, -8.5], [19.053, -8.0]], "tone": "ink"}, {"points": [[20.785, -7.0], [19.919, -6.5], [19.053, -7.0], [19.053, -8.0], [19.919, -8.5], [20.785, -8.0]], "tone": "ink"}, {"points": [[22.517, -7.0], [21.651, -6.5], [20.785, -7.0], [20.785, -8.0], [21.651, -8.5], [22.517, -8.0]], "tone": "ink"}, {"points": [[6.062, -8.5], [5.196, -8.0], [4.33, -8.5], [4.33, -9.5], [5.196, -10.0], [6.062, -9.5]], "tone": "ink"}, {"points": [[7.794, -8.5], [6.928, -8.0], [6.062, -8.5], [6.062, -9.5], [6.928, -10.0], [7.794, -9.5]], "tone": "ink"}, {"points": [[9.526, -8.5], [8.66, -8.0], [7.794, -8.5], [7.794, -9.5], [8.66, -10.0], [9.526, -9.5]], "tone": "ink"}, {"points": [[11.258, -8.5], [10.392, -8.0], [9.526, -8.5], [9.526, -9.5], [10.392, -10.0], [11.258, -9.5]], "tone": "ink"}, {"points": [[12.99, -8.5], [12.124, -8.0], [11.258, -8.5], [11.258, -9.5], [12.124, -10.0], [12.99, -9.5]], "tone": "ink"}, {"points": [[14.722, -8.5], [13.856, -8.0], [12.99, -8.5], [12.99, -9.5], [13.856, -10.0], [14.722, -9.5]], "tone": "ink"}, {"points": [[16.454, -8.5], [15.588, -8.0], [14.722, -8.5], [14.722, -9.5], [15.588, -10.0], [16.454, -9.5]], "tone": "ink"}, {"points": [[18.187, -8.5], [17.321, -8.0], [16.454, -8.5], [16.454, -9.5], [17.321, -10.0], [18.187, -9.5]], "tone": "ink"}, {"points": [[19.919, -8.5], [19.053, -8.0], [18.187, -8.5], [18.187, -9.5], [19.053, -10.0], [19.919, -9.5]], "tone": "ink"}, {"points": [[21.651, -8.5], [20.785, -8.0], [19.919, -8.5], [19.919, -9.5], [20.785, -10.0], [21.651, -9.5]], "tone": "ink"}, {"points": [[23.383, -8.5], [22.517, -8.0], [21.651, -8.5], [21.651, -9.5], [22.517, -10.0], [23.383, -9.5]], "tone": "ink"}, {"points": [[6.928, -10.0], [6.062, -9.5], [5.196, -10.0], [5.196, -11.0], [6.062, -11.5], [6.928, -11.0]], "tone": "ink"}, {"points": [[8.66, -10.0], [7.794, -9.5], [6.928, -10.0], [6.928, -11.0], [7.794, -11.5], [8.66, -11.0]], "tone": "ink"}, {"points": [[10.392, -10.0], [9.526, -9.5], [8.66, -10.0], [8.66, -11.0], [9.526, -11.5], [10.392, -11.0]], "tone": "ink"}, {"points": [[12.124, -10.0], [11.258, -9.5], [10.392, -10.0], [10.392, -11.0], [11.258, -11.5], [12.124, -11.0]], "tone": "ink"}, {"points": [[13.856, -10.0], [12.99, -9.5], [12.124, -10.0], [12.124, -11.0], [12.99, -11.5], [13.856, -11.0]], "tone": "ink"}, {"points": [[15.588, -10.0], [14.722, -9.5], [13.856, -10.0], [13.856, -11.0], [14.722, -11.5], [15.588, -11.0]], "tone": "ink"}, {"points": [[17.321, -10.0], [16.454, -9.5], [15.588, -10.0], [15.588, -11.0], [16.454, -11.5], [17.321, -11.0]], "tone": "ink"}, {"points": [[19.053, -10.0], [18.187, -9.5], [17.321, -10.0], [17.321, -11.0], [18.187, -11.5], [19.053, -11.0]], "tone": "ink"}, {"points": [[20.785, -10.0], [19.919, -9.5], [19.053, -10.0], [19.053, -11.0], [19.919, -11.5], [20.785, -11.0]], "tone": "ink"}, {"points": [[22.517, -10.0], [21.651, -9.5], [20.785, -10.0], [20.785, -11.0], [21.651, -11.5], [22.517, -11.0]], "tone": "ink"}, {"points": [[24.249, -10.0], [23.383, -9.5], [22.517, -10.0], [22.517, -11.0], [23.383, -11.5], [24.249, -11.0]], "tone": "ink"}, {"points": [[7.794, -11.5], [6.928, -11.0], [6.062, -11.5], [6.062, -12.5], [6.928, -13.0], [7.794, -12.5]], "tone": "ink"}, {"points": [[9.526, -11.5], [8.66, -11.0], [7.794, -11.5], [7.794, -12.5], [8.66, -13.0], [9.526, -12.5]], "tone": "ink"}, {"points": [[11.258, -11.5], [10.392, -11.0], [9.526, -11.5], [9.526, -12.5], [10.392, -13.0], [11.258, -12.5]], "tone": "ink"}, {"points": [[12.99, -11.5], [12.124, -11.0], [11.258, -11.5], [11.258, -12.5], [12.124, -13.0], [12.99, -12.5]], "tone": "ink"}, {"points": [[14.722, -11.5], [13.856, -11.0], [12.99, -11.5], [12.99, -12.5], [13.856, -13.0], [14.722, -12.5]], "tone": "ink"}, {"points": [[16.454, -11.5], [15.588, -11.0], [14.722, -11.5], [14.722, -12.5], [15.588, -13.0], [16.454, -12.5]], "tone": "ink"}, {"points": [[18.187, -11.5], [17.321, -11.0], [16.454, -11.5], [16.454, -12.5], [17.321, -13.0], [18.187, -12.5]], "tone": "ink"}, {"points": [[19.919, -11.5], [19.053, -11.0], [18.187, -11.5], [18.187, -12.5], [19.053, -13.0], [19.919, -12.5]], "tone": "ink"}, {"points": [[21.651, -11.5], [20.785, -11.0], [19.919, -11.5], [19.919, -12.5], [20.785, -13.0], [21.651, -12.5]], "tone": "ink"}, {"points": [[23.383, -11.5], [22.517, -11.0], [21.651, -11.5], [21.651, -12.5], [22.517, -13.0], [23.383, -12.5]], "tone": "ink"}, {"points": [[25.115, -11.5], [24.249, -11.0], [23.383, -11.5], [23.383, -12.5], [24.249, -13.0], [25.115, -12.5]], "tone": "ink"}, {"points": [[8.66, -13.0], [7.794, -12.5], [6.928, -13.0], [6.928, -14.0], [7.794, -14.5], [8.66, -14.0]], "tone": "ink"}, {"points": [[10.392, -13.0], [9.526, -12.5], [8.66, -13.0], [8.66, -14.0], [9.526, -14.5], [10.392, -14.0]], "tone": "ink"}, {"points": [[12.124, -13.0], [11.258, -12.5], [10.392, -13.0], [10.392, -14.0], [11.258, -14.5], [12.124, -14.0]], "tone": "ink"}, {"points": [[13.856, -13.0], [12.99, -12.5], [12.124, -13.0], [12.124, -14.0], [12.99, -14.5], [13.856, -14.0]], "tone": "ink"}, {"points": [[15.588, -13.0], [14.722, -12.5], [13.856, -13.0], [13.856, -14.0], [14.722, -14.5], [15.588, -14.0]], "tone": "ink"}, {"points": [[17.321, -13.0], [16.454, -12.5], [15.588, -13.0], [15.588, -14.0], [16.454, -14.5], [17.321, -14.0]], "tone": "ink"}, {"points": [[19.053, -13.0], [18.187, -12.5], [17.321, -13.0], [17.321, -14.0], [18.187, -14.5], [19.053, -14.0]], "tone": "ink"}, {"points": [[20.785, -13.0], [19.919, -12.5], [19.053, -13.0], [19.053, -14.0], [19.919, -14.5], [20.785, -14.0]], "tone": "ink"}, {"points": [[22.517, -13.0], [21.651, -12.5], [20.785, -13.0], [20.785, -14.0], [21.651, -14.5], [22.517, -14.0]], "tone": "ink"}, {"points": [[24.249, -13.0], [23.383, -12.5], [22.517, -13.0], [22.517, -14.0], [23.383, -14.5], [24.249, -14.0]], "tone": "ink"}, {"points": [[25.981, -13.0], [25.115, -12.5], [24.249, -13.0], [24.249, -14.0], [25.115, -14.5], [25.981, -14.0]], "tone": "ink"}, {"points": [[9.526, -14.5], [8.66, -14.0], [7.794, -14.5], [7.794, -15.5], [8.66, -16.0], [9.526, -15.5]], "tone": "ink"}, {"points": [[11.258, -14.5], [10.392, -14.0], [9.526, -14.5], [9.526, -15.5], [10.392, -16.0], [11.258, -15.5]], "tone": "ink"}, {"points": [[12.99, -14.5], [12.124, -14.0], [11.258, -14.5], [11.258, -15.5], [12.124, -16.0], [12.99, -15.5]], "tone": "ink"}, {"points": [[14.722, -14.5], [13.856, -14.0], [12.99, -14.5], [12.99, -15.5], [13.856, -16.0], [14.722, -15.5]], "tone": "ink"}, {"points": [[16.454, -14.5], [15.588, -14.0], [14.722, -14.5], [14.722, -15.5], [15.588, -16.0], [16.454, -15.5]], "tone": "ink"}, {"points": [[18.187, -14.5], [17.321, -14.0], [16.454, -14.5], [16.454, -15.5], [17.321, -16.0], [18.187, -15.5]], "tone": "ink"}, {"points": [[19.919, -14.5], [19.053, -14.0], [18.187, -14.5], [18.187, -15.5], [19.053, -16.0], [19.919, -15.5]], "tone": "ink"}, {"points": [[21.651, -14.5], [20.785, -14.0], [19.919, -14.5], [19.919, -15.5], [20.785, -16.0], [21.651, -15.5]], "tone": "ink"}, {"points": [[23.383, -14.5], [22.517, -14.0], [21.651, -14.5], [21.651, -15.5], [22.517, -16.0], [23.383, -15.5]], "tone": "ink"}, {"points": [[25.115, -14.5], [24.249, -14.0], [23.383, -14.5], [23.383, -15.5], [24.249, -16.0], [25.115, -15.5]], "tone": "ink"}, {"points": [[26.847, -14.5], [25.981, -14.0], [25.115, -14.5], [25.115, -15.5], [25.981, -16.0], [26.847, -15.5]], "tone": "ink"}], "alt": "An 11 by 11 Hex board: a rhombus made of 121 regular hexagonal cells, 11 in each row, each row shifted half a cell to the right of the row above."},
          difficulty: 4,
          answer: String.raw`$15$. **Proof.** Key idea: a cell infected through at least three infected neighbours removes at least three edges from the boundary of the infected region and adds at most three, so the perimeter (counting edges on the edge of the board) never increases; the full board has perimeter $86 > 6 \times 14$, so $14$ cells are not enough, and a suitable set of $15$ cells exists (for example, numbering rows from the top and cells from the left, the cells $(1,1)$, $(1,5)$, $(2,2)$, $(3,4)$, $(4,5)$, $(5,3)$, $(5,6)$, $(6,6)$, $(7,6)$, $(7,9)$, $(8,7)$, $(9,8)$, $(10,10)$, $(11,7)$, $(11,11)$).`,
        },
      ],
    },
    {
      id: "C8-weighing-searching",
      name: String.raw`Weighing and searching: information bounds`,
      tests: String.raw`Find a fake coin, a hidden number or a hidden matching with as few weighings or questions as possible. Count the cases (or the possible answer sequences) for the lower bound, and split the cases as evenly as the rules allow for the strategy.`,
      questions: [
        {
          stem: String.raw`Among $27$ coins that look alike, **at most one** is fake: a fake coin is slightly heavier than a genuine one, and all genuine coins have the same weight. Using a balance with two pans (and no weights), what is the least number of weighings that is always enough to find the fake coin or to be sure that there is none?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`Bob thinks of an integer from $1$ to $100$. Alice may name any integer $a$, and Bob answers "smaller", "equal" or "larger", comparing his number with $a$. What is the least number of questions that always lets Alice know Bob's number?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Among $100$ coins that look alike, one is fake and slightly heavier than the others, which all have the same weight. The balance used is small: each pan can hold at most $5$ coins. What is the least number of weighings that is always enough to find the fake coin?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`$2026$ switches in one room control $2026$ light bulbs in another room, each switch controlling exactly one bulb, but you do not know which. A **trip** consists of setting each switch on or off as you wish and then walking to the other room to see which bulbs are on. Prove that $11$ trips are always enough to find out which switch controls which bulb, but $10$ trips are not.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: give the switches different on/off patterns over $11$ trips (possible as $2^{11} = 2048 \ge 2026$), so each bulb's record names its switch; with $10$ trips, two switches get identical settings in every trip (as $2^{10} < 2026$), and swapping their bulbs would change nothing you see.`,
        },
        {
          stem: String.raw`Among $7$ coins that look alike, exactly two are fake. The two fakes have the same weight, heavier than the five genuine coins, which all have the same weight. Using a balance with two pans, what is the least number of weighings that is always enough to identify both fakes?`,
          difficulty: 3,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Bob thinks of an integer from $1$ to $1000$. Alice may ask questions of the form "Is your number at most $a$?". For each answer "yes" she pays $\$1$, and for each answer "no" she pays $\$2$. Find, with proof, the least amount of money that guarantees Alice can find Bob's number.`,
          difficulty: 3,
          answer: String.raw`$\$16$. **Proof.** Key idea: if $f(c)$ is the largest number of candidates Alice can always handle with $\$c$, a question splits them into a "yes" part handled with $\$(c - 1)$ and a "no" part handled with $\$(c - 2)$, so $f(c) = f(c - 1) + f(c - 2)$ with $f(0) = f(1) = 1$; these are Fibonacci numbers, and $f(15) = 987 < 1000 \le 1597 = f(16)$.`,
        },
        {
          stem: String.raw`Among $2026$ coins that look alike, one is fake and slightly heavier than the others, which all have the same weight. A balance with two pans is used, but each coin may be put on the balance at most twice altogether. Find, with proof, the least number of weighings that is always enough to find the fake coin.`,
          difficulty: 4,
          answer: String.raw`$32$. **Proof.** Key idea: if a given coin is the fake, the balance tips only in weighings where that coin is on a pan, so its sequence of outcomes has at most two entries that are not "balance"; with $k$ weighings there are only $1 + 2k + 4\binom{k}{2} = 2k^{2} + 1$ such sequences, which is $1923 < 2026$ for $k = 31$, while for $k = 32$ one can give the coins different such sequences, closed under swapping left and right, to make every weighing use equal numbers of coins on the two pans.`,
        },
      ],
    },
    {
      id: "C8-guaranteed-strategies",
      name: String.raw`Strategies that must work in every case`,
      tests: String.raw`You must reach a goal without knowing the hidden situation: a key, a ship, a code, a starting cell. Find a plan that works whatever the situation is, and prove that no shorter plan can, usually by exhibiting many cases that each need their own step, or by following all possible situations in parallel.`,
      questions: [
        {
          stem: String.raw`There are $6$ locked suitcases and $3$ keys. Each key opens exactly two of the suitcases, and each suitcase is opened by exactly one key, but you do not know which. A trial consists of trying one key in one suitcase. What is the least number of trials that is always enough to find out which key opens which suitcase?`,
          difficulty: 1,
          choices: [String.raw`$6$`, String.raw`$7$`, String.raw`$8$`, String.raw`$9$`, String.raw`$10$`],
          answer: String.raw`(C) $8$`,
        },
        {
          stem: String.raw`A ship in the shape of a $2 \times 2$ square of cells is hidden on a $7 \times 7$ board. A shot is fired at one cell and hits if the ship covers that cell. What is the least number of shots, chosen in advance, that is sure to hit the ship wherever it is?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`A ship in the shape of an L made of three cells (a $2 \times 2$ square with one cell removed), in any of its four orientations, is hidden on an $8 \times 8$ board. A shot is fired at one cell and hits if the ship covers that cell. What is the least number of shots, chosen in advance, that is sure to hit the ship wherever it is?`,
          difficulty: 2,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`A door has a keypad with six buttons. Its code consists of two different buttons, and the door opens as soon as the last two buttons pressed are the two code buttons, in either order. You do not know the code. What is the least number of button presses that is sure to open the door?`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`A robot stands on an unknown cell of a $3 \times 3$ board. You must write down in advance a list of commands, each one of U, D, L, R (one cell up, down, left or right). The robot carries out the commands in order; a command that would take it off the board is ignored. What is the length of the shortest list which guarantees that the robot visits every cell of the board, whatever its starting cell?`,
          difficulty: 3,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Bob lays the cards $1, 2, 3, 4, 5$ face down in a row in some order, not $1, 2, 3, 4, 5$. Alice cannot see the cards. Each turn, Alice names two positions, Bob swaps the cards in those positions, and then he tells Alice whether the row now reads $1, 2, 3, 4, 5$. Find, with proof, the least number of turns that guarantees Alice gets the answer "yes".`,
          difficulty: 3,
          answer: String.raw`$119$. **Proof.** Key idea: after $t$ turns the row is Bob's arrangement rearranged by the product of Alice's first $t$ swaps, and each of the $119$ possible arrangements needs its own product, so at least $119$ turns are needed; and $119$ suffice by listing all $120$ rearrangements so that consecutive ones differ by one swap (built by induction on the number of cards).`,
        },
        {
          stem: String.raw`A robot stands on an unknown cell of a $2 \times n$ board ($2$ rows, $n$ columns). You must write down in advance a list of commands, each one of U, D, L, R. The robot carries out the commands in order; a command that would take it off the board is ignored. Find, with proof, the length of the shortest list which guarantees that the robot visits every cell, whatever its starting cell.`,
          difficulty: 4,
          answer: String.raw`$3n - 1$. **Proof.** Key idea: U, then L repeated $n - 1$ times, then a zigzag D R U R D $\cdots$ works; conversely, the two robots starting in the left column always share a column and become one robot at the first U or D, and so do the two starting in the right column; if $h$ commands came before that, these two robots are in the same row at distance at least $n - 1 - h$, each must still visit every cell, and this needs at least $2n - 1$ further commands plus one for each unit of that distance.`,
        },
      ],
    },
  ],
});
