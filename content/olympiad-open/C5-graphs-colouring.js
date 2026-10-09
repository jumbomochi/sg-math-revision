H2.addTopic({
  id: "C5",
  title: "Graphs and Colouring",
  summary: String.raw`Model people, cities, matches and board cells as graphs; count with degrees, use trees, Euler trails, two-colourings and Ramsey-type pigeonhole arguments, and colour grids to force or forbid patterns.`,
  concepts: [
    {
      title: String.raw`Graphs, degrees and the handshake lemma`,
      body: String.raw`- A **graph** is a set of **vertices** joined by **edges**. In a **simple** graph no edge joins a vertex to itself and two vertices are joined at most once. People and handshakes, cities and roads, teams and matches are all graphs.
- The **degree** $\deg v$ of a vertex is the number of edges at $v$.
- **Handshake lemma**: $\displaystyle\sum_{v} \deg v = 2E$, where $E$ is the number of edges, since every edge is counted once at each end.
- Consequence: the number of vertices of **odd** degree is **even**.
- Example: seven people cannot each know exactly three of the others, since $7 \times 3 = 21$ is odd.`,
      figure: {"type": "plot", "x": [-2.2, 5.2], "y": [-0.9, 4.8], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [3, 0], "tone": "ink"}, {"from": [3, 0], "to": [4, 2.4], "tone": "ink"}, {"from": [4, 2.4], "to": [1.5, 4], "tone": "ink"}, {"from": [1.5, 4], "to": [-1, 2.4], "tone": "ink"}, {"from": [-1, 2.4], "to": [0, 0], "tone": "ink"}, {"from": [0, 0], "to": [4, 2.4], "tone": "ink"}, {"from": [3, 0], "to": [1.5, 4], "tone": "ink"}], "points": [{"x": 0, "y": 0}, {"x": 3, "y": 0}, {"x": 4, "y": 2.4}, {"x": 1.5, "y": 4}, {"x": -1, "y": 2.4}], "alt": "A graph with five vertices and seven edges; four vertices have degree 3 and one has degree 2.", "labels": [{"x": 0, "y": 0, "text": "deg 3", "pos": "sw", "style": "small"}, {"x": 3, "y": 0, "text": "deg 3", "pos": "se", "style": "small"}, {"x": 4, "y": 2.4, "text": "deg 3", "pos": "e", "style": "small"}, {"x": 1.5, "y": 4, "text": "deg 3", "pos": "n", "style": "small"}, {"x": -1, "y": 2.4, "text": "deg 2", "pos": "w", "style": "small"}], "caption": "Degrees $3+3+3+3+2 = 14 = 2 \\times 7$ edges; four vertices have odd degree."},
    },
    {
      title: String.raw`Degree sequences`,
      body: String.raw`- In a simple graph with $n$ vertices every degree is between $0$ and $n - 1$, and $0$ and $n - 1$ cannot both occur. So only $n - 1$ values are available for $n$ vertices: **two vertices always have the same degree**.
- A vertex of degree $n - 1$ is joined to everyone. If $k$ vertices have degree $n - 1$, every vertex has degree at least $k$.
- **Complement**: replacing "joined" by "not joined" turns degree $d$ into $n - 1 - d$. Use it to move between small and large degrees.
- **Havel–Hakimi test**: a list is a degree sequence exactly when, after deleting a largest entry $d$ and subtracting $1$ from the next $d$ largest entries, the new list is a degree sequence. Example: $(3, 3, 2, 2, 2) \to (2, 2, 1, 1) \to (1, 1, 0) \to (0, 0)$, so $(3, 3, 2, 2, 2)$ is realisable.`,
    },
    {
      title: String.raw`Trees and connectivity`,
      body: String.raw`- A graph is **connected** if every two vertices are joined by a path. A **tree** is a connected graph with no cycles.
- For a graph with $n$ vertices, any two of these imply the third: connected; no cycles; exactly $n - 1$ edges. In a tree there is exactly one path between any two vertices, and removing any edge disconnects it.
- A tree has degree sum $2(n - 1)$, and every tree with at least $2$ vertices has at least $2$ **leaves** (vertices of degree $1$): the two ends of a longest path.
- Every connected graph contains a **spanning tree**, so it has at least $n - 1$ edges.
- To prove a graph is connected, show that any two vertices are joined, or that every split of the vertices into two non-empty groups has an edge across. Example: if a graph has $9$ vertices, each of degree at least $4$, two non-adjacent vertices send at least $8$ edges into the other $7$ vertices, so they have a common neighbour.`,
      figure: {"type": "plot", "x": [-2, 5.6], "y": [-1.3, 3.7], "equal": true, "axes": false, "segments": [{"from": [0, 1.5], "to": [1.5, 1.5], "tone": "ink"}, {"from": [1.5, 1.5], "to": [3, 3], "tone": "ink"}, {"from": [1.5, 1.5], "to": [3, 0], "tone": "ink"}, {"from": [3, 3], "to": [4.5, 3], "tone": "ink"}, {"from": [3, 0], "to": [4.5, 1], "tone": "ink"}, {"from": [3, 0], "to": [4.5, -0.6], "tone": "ink"}, {"from": [0, 1.5], "to": [-1.2, 2.8], "tone": "ink"}], "points": [{"x": 0, "y": 1.5}, {"x": 1.5, "y": 1.5}, {"x": 3, "y": 3}, {"x": 3, "y": 0}, {"x": 4.5, "y": 3}, {"x": 4.5, "y": 1}, {"x": 4.5, "y": -0.6}, {"x": -1.2, "y": 2.8}], "alt": "A tree with eight vertices and seven edges; the four vertices of degree 1 are shaded.", "circles": [{"c": [4.5, 3], "r": 0.22, "fill": true, "tone": "good"}, {"c": [4.5, 1], "r": 0.22, "fill": true, "tone": "good"}, {"c": [4.5, -0.6], "r": 0.22, "fill": true, "tone": "good"}, {"c": [-1.2, 2.8], "r": 0.22, "fill": true, "tone": "good"}], "caption": "A tree with $8$ vertices and $7$ edges; its $4$ leaves are shaded."},
    },
    {
      title: String.raw`Eulerian trails and route problems`,
      body: String.raw`- An **Eulerian trail** uses every edge exactly once. A connected graph has a **closed** one exactly when every degree is even, and an **open** one exactly when there are exactly two odd vertices; it must then start at one odd vertex and end at the other.
- At an odd vertex a trail must start or end. So a connected graph with $2k$ odd vertices ($k \ge 1$) needs exactly $k$ trails ("pen strokes") to cover every edge once.
- **Route inspection**: to walk along every edge and return to the start, some edges must be repeated. The repeated edges must make every degree even, so they join up the odd vertices in pairs; choose the cheapest pairing.
- Chains of dominoes are trails: numbers are vertices and a domino with ends $a, b$ is an edge $ab$ (a double is a loop, which never changes parity).`,
      figure: {"type": "plot", "x": [-1.6, 4.0], "y": [-0.9, 4.5], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [2.4, 0], "tone": "ink"}, {"from": [2.4, 0], "to": [2.4, 2.4], "tone": "ink"}, {"from": [2.4, 2.4], "to": [0, 2.4], "tone": "ink"}, {"from": [0, 2.4], "to": [0, 0], "tone": "ink"}, {"from": [0, 0], "to": [2.4, 2.4], "tone": "ink"}, {"from": [2.4, 0], "to": [0, 2.4], "tone": "ink"}, {"from": [0, 2.4], "to": [1.2, 3.8], "tone": "ink"}, {"from": [1.2, 3.8], "to": [2.4, 2.4], "tone": "ink"}], "points": [{"x": 0, "y": 0}, {"x": 2.4, "y": 0}, {"x": 2.4, "y": 2.4}, {"x": 0, "y": 2.4}, {"x": 1.2, "y": 3.8}], "alt": "A square with both diagonals and a triangular roof on top. Only the two bottom corners have odd degree (3).", "circles": [{"c": [0, 0], "r": 0.2, "fill": true, "tone": "warn"}, {"c": [2.4, 0], "r": 0.2, "fill": true, "tone": "warn"}], "labels": [{"x": 0, "y": 0, "text": "odd", "pos": "sw", "style": "small", "tone": "warn"}, {"x": 2.4, "y": 0, "text": "odd", "pos": "se", "style": "small", "tone": "warn"}], "caption": "Only the two bottom corners have odd degree, so the figure can be drawn in one stroke, starting at one of them and ending at the other."},
    },
    {
      title: String.raw`Bipartite graphs and two-colouring`,
      body: String.raw`- A graph is **bipartite** if its vertices can be coloured with two colours so that every edge joins different colours.
- A graph is bipartite **exactly when it has no cycle of odd length**. To 2-colour a connected graph, colour one vertex and propagate; a clash means an odd cycle.
- In a bipartite graph every walk alternates colours: a walk of odd length ends on the other colour, and a path through all vertices uses the colours alternately, so the two colour classes differ in size by at most $1$.
- Boards: cells with the chessboard colouring form a bipartite graph for rook steps (to a side-neighbour) and for knight moves; both always change the colour.
- Example: a rook stepping between side-neighbouring cells can never return to its starting cell after an odd number of steps.`,
      figure: [{"type": "plot", "x": [-2.4, 2.4], "y": [-2.2, 2.2], "equal": true, "axes": false, "segments": [{"from": [0.0, 1.6], "to": [1.386, 0.8], "tone": "ink"}, {"from": [1.386, 0.8], "to": [1.386, -0.8], "tone": "ink"}, {"from": [1.386, -0.8], "to": [0.0, -1.6], "tone": "ink"}, {"from": [0.0, -1.6], "to": [-1.386, -0.8], "tone": "ink"}, {"from": [-1.386, -0.8], "to": [-1.386, 0.8], "tone": "ink"}, {"from": [-1.386, 0.8], "to": [0.0, 1.6], "tone": "ink"}], "circles": [{"c": [0.0, 1.6], "r": 0.2, "fill": true, "tone": "accent"}, {"c": [1.386, 0.8], "r": 0.2, "fill": true, "tone": "good"}, {"c": [1.386, -0.8], "r": 0.2, "fill": true, "tone": "accent"}, {"c": [0.0, -1.6], "r": 0.2, "fill": true, "tone": "good"}, {"c": [-1.386, -0.8], "r": 0.2, "fill": true, "tone": "accent"}, {"c": [-1.386, 0.8], "r": 0.2, "fill": true, "tone": "good"}], "alt": "A hexagon whose vertices alternate between two colours, so every edge joins different colours."}, {"type": "plot", "x": [-2.4, 2.4], "y": [-2.2, 2.2], "equal": true, "axes": false, "segments": [{"from": [0.0, 1.6], "to": [1.522, 0.494], "tone": "ink"}, {"from": [1.522, 0.494], "to": [0.94, -1.294], "tone": "ink"}, {"from": [0.94, -1.294], "to": [-0.94, -1.294], "tone": "ink"}, {"from": [-0.94, -1.294], "to": [-1.522, 0.494], "tone": "ink"}, {"from": [-1.522, 0.494], "to": [0.0, 1.6], "tone": "warn"}], "circles": [{"c": [0.0, 1.6], "r": 0.2, "fill": true, "tone": "accent"}, {"c": [1.522, 0.494], "r": 0.2, "fill": true, "tone": "good"}, {"c": [0.94, -1.294], "r": 0.2, "fill": true, "tone": "accent"}, {"c": [-0.94, -1.294], "r": 0.2, "fill": true, "tone": "good"}, {"c": [-1.522, 0.494], "r": 0.2, "fill": true, "tone": "accent"}], "alt": "A pentagon with vertices coloured alternately; going round, the last edge joins two vertices of the same colour and is highlighted."}],
    },
    {
      title: String.raw`Ramsey: unavoidable monochromatic triangles`,
      body: String.raw`- Colour every edge of the complete graph $K_6$ red or blue. Then there is a **monochromatic triangle**: $R(3, 3) = 6$.
- Proof: a vertex $v$ has $5$ edges, so (pigeonhole) at least $3$ of the same colour, say red to $A, B, C$. Any red edge among $A, B, C$ makes a red triangle with $v$; otherwise $ABC$ is blue.
- $6$ is best possible: $K_5$ can be coloured with no monochromatic triangle. With three colours, $R(3, 3, 3) = 17$.
- **Counting** monochromatic triangles: call two edges of different colours at the same vertex a **two-coloured corner**. A non-monochromatic triangle has exactly $2$ such corners and a monochromatic one has none, so
$$\#\{\text{non-monochromatic triangles}\} = \tfrac{1}{2} \sum_{v} r_v b_v,$$
where $r_v, b_v$ are the numbers of red and blue edges at $v$. An upper bound for each $r_v b_v$ gives a lower bound for the number of monochromatic triangles.`,
      figure: {"type": "plot", "x": [-1.4, 6.0], "y": [-4.0, 3.4], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [2.8, 2.6], "tone": "warn", "dashed": false}, {"from": [0, 0], "to": [4.8, 0.9], "tone": "warn", "dashed": false}, {"from": [0, 0], "to": [3.0, -0.7], "tone": "warn", "dashed": false}, {"from": [0, 0], "to": [2.4, -3.0], "tone": "accent", "dashed": true}, {"from": [0, 0], "to": [0.6, -3.4], "tone": "accent", "dashed": true}, {"from": [2.8, 2.6], "to": [4.8, 0.9], "tone": "muted", "dashed": true, "thin": true}, {"from": [4.8, 0.9], "to": [3.0, -0.7], "tone": "muted", "dashed": true, "thin": true}, {"from": [2.8, 2.6], "to": [3.0, -0.7], "tone": "muted", "dashed": true, "thin": true}], "points": [{"x": 0, "y": 0, "label": "v", "pos": "w", "style": "italic"}, {"x": 2.8, "y": 2.6}, {"x": 4.8, "y": 0.9}, {"x": 3.0, "y": -0.7}, {"x": 2.4, "y": -3.0}, {"x": 0.6, "y": -3.4}], "labels": [{"x": 2.8, "y": 2.6, "text": "A", "pos": "ne", "style": "italic"}, {"x": 4.8, "y": 0.9, "text": "B", "pos": "e", "style": "italic"}, {"x": 3.0, "y": -0.7, "text": "C", "pos": "se", "style": "italic"}, {"x": 1.3, "y": 1.3, "text": "red", "pos": "nw", "style": "small", "tone": "warn"}, {"x": 0.4, "y": -2.0, "text": "blue", "pos": "w", "style": "small", "tone": "accent"}], "caption": "Vertex $v$ has at least $3$ edges of one colour, say red to $A, B, C$. A red edge among $A, B, C$ gives a red triangle with $v$; otherwise $ABC$ is blue.", "alt": "Vertex v joined to five vertices: three solid red edges to A, B, C and two dashed blue edges. Thin dashed lines join A, B and C."},
    },
    {
      title: String.raw`Extremal arguments in graphs`,
      body: String.raw`Look at an extreme object, then show that a better one would exist if the claim failed.

- **Longest path** $v_1 v_2 \ldots v_k$: every neighbour of $v_1$ lies on the path, otherwise the path could be extended. Example: if every degree is at least $2$, then $v_1$ has a neighbour $v_j$ with $j \ge 3$, and $v_1 v_2 \ldots v_j v_1$ is a cycle.
- **Best split**: among all ways to split the vertices into two groups, take one with the most edges between the groups (or with the fewest inside); moving one vertex across cannot improve it.
- **Triangle-free graphs**: if $uv$ is an edge, $u$ and $v$ have no common neighbour, so $\deg u + \deg v \le n$. The neighbours of any vertex are pairwise non-adjacent.
- **Maximum degree**: the vertex with the most neighbours (or the player with the most wins) is often the right place to start.`,
    },
    {
      title: String.raw`Tournaments`,
      body: String.raw`- In a **round-robin tournament** every two players meet once. With no draws it is a **tournament graph**: an arrow $X \to Y$ for each pair, meaning $X$ beat $Y$.
- Total number of games and of wins: $\binom{n}{2}$, so the average number of wins is $\dfrac{n - 1}{2}$.
- Points systems: with $3$ points for a win and $1$ each for a draw, a decisive game gives $3$ points in total and a drawn game gives $2$. Count total points game by game.
- Every tournament has a **Hamiltonian path** (a ranking in which each player beat the next one): insert the players one at a time.
- A player with the most wins is a **king**: for every other player $Y$, the king beat $Y$ or beat someone who beat $Y$. (If $Y$ beat the king and everyone the king beat, $Y$ would have more wins.)`,
      figure: {"type": "plot", "x": [-1.6, 4.6], "y": [-0.9, 3.9], "equal": true, "axes": false, "segments": [{"from": [0.32, 0.0], "to": [2.68, 0.0], "arrow": true, "tone": "warn"}, {"from": [3.0, 0.32], "to": [3.0, 2.68], "arrow": true, "tone": "warn"}, {"from": [2.774, 2.774], "to": [0.226, 0.226], "arrow": true, "tone": "warn"}, {"from": [0.0, 2.68], "to": [0.0, 0.32], "arrow": true, "tone": "ink"}, {"from": [0.226, 2.774], "to": [2.774, 0.226], "arrow": true, "tone": "ink"}, {"from": [2.68, 3.0], "to": [0.32, 3.0], "arrow": true, "tone": "ink"}], "points": [{"x": 0, "y": 0, "label": "P (1)", "pos": "sw", "style": "plain"}, {"x": 3, "y": 0, "label": "Q (1)", "pos": "se", "style": "plain"}, {"x": 3, "y": 3, "label": "R (2)", "pos": "ne", "style": "plain"}, {"x": 0, "y": 3, "label": "S (2)", "pos": "nw", "style": "plain"}], "caption": "Arrow $X \\to Y$ means $X$ beat $Y$; wins in brackets. The wins add up to $\\binom{4}{2} = 6$. $P \\to Q \\to R \\to P$ is a cyclic triple.", "alt": "Four players P, Q, R, S with arrows for results: P beat Q, Q beat R, R beat P (highlighted cycle), S beat P and Q, R beat S."},
    },
    {
      title: String.raw`Turán's theorem`,
      body: String.raw`- A graph on $n$ vertices containing no $r + 1$ pairwise adjacent vertices (no $K_{r+1}$) has at most as many edges as the **Turán graph**: split the $n$ vertices into $r$ groups whose sizes differ by at most $1$, and join every two vertices in different groups.
- For $r = 2$ this is Mantel's theorem: a triangle-free graph has at most $\left\lfloor \frac{n^{2}}{4} \right\rfloor$ edges.
- Example: with $7$ vertices and no $K_{4}$, the groups have sizes $3, 2, 2$, so there are at most $3 \cdot 2 + 3 \cdot 2 + 2 \cdot 2 = 16$ edges, and the Turán graph shows that $16$ is possible.
- Idea of proof: take a vertex $v$ of largest degree; its neighbours contain no $K_{r}$, so induct inside the neighbourhood and count the edges at the other vertices.`,
    },
    {
      title: String.raw`Distance layers (breadth-first search)`,
      body: String.raw`- Fix a vertex $v$ and let layer $L_{i}$ be the set of vertices at distance exactly $i$ from $v$. Every edge joins two vertices of the same layer or of consecutive layers.
- If the graph has **no cycle of length at most $2r$**, then no two vertices of $L_{1}, \ldots, L_{r}$ can be reached from $v$ along two different short routes, so the first $r$ layers form a tree: each vertex of $L_{i}$ ($i < r$) has all its other neighbours in $L_{i+1}$, and they are all different.
- This gives a lower bound for the number of vertices. Example: if every degree is at least $4$ and there is no cycle of length at most $4$, then $|L_{1}| \ge 4$ and $|L_{2}| \ge 4 \cdot 3$, so there are at least $1 + 4 + 12 = 17$ vertices.
- Layers starting from both ends of an edge, instead of one vertex, handle cycles of even length.
- In a tree, the vertices farthest from a "centre" (the middle of a longest path) control the longest distance.`,
    },
  ],
  archetypes: [
    {
      id: "C5-handshake-degrees",
      name: String.raw`Degree counting and handshakes`,
      tests: String.raw`Information about how many people each person met, or about the degrees of a graph, and a question about the number of vertices, edges or a missing degree. Use the handshake lemma, the range $0$ to $n - 1$ of degrees, and complements.`,
      questions: [
        {
          stem: String.raw`A simple graph has exactly $30$ edges. Twelve of its vertices have degree $3$ and every other vertex has degree $4$. How many vertices does the graph have?`,
          choices: [String.raw`$15$`, String.raw`$16$`, String.raw`$17$`, String.raw`$18$`, String.raw`$20$`],
          difficulty: 1,
          answer: String.raw`(D) $18$`,
        },
        {
          stem: String.raw`Eight people attend a party, and some pairs of them shake hands, no pair more than once. Seven of the people shook $7$, $7$, $6$, $6$, $5$, $4$ and $2$ hands respectively. How many hands did the eighth person shake?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`At a meeting of $9$ people, some pairs shook hands, no pair more than once. Among the nine numbers of handshakes made by the people, exactly one value occurs twice and every other value occurs once. How many hands did each of the two people with the repeated value shake?`,
          difficulty: 3,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`At a party of $15$ people, each person shook hands with exactly $k$ of the others, and no pair shook hands more than once. How many different values of $k$ are possible?`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`At a party of $21$ people, every man shook hands with exactly $2$ other men and exactly $4$ women, and every woman shook hands with exactly $3$ other women and exactly $3$ men. No pair shook hands more than once. How many handshakes were there in total?`,
          difficulty: 2,
          answer: String.raw`$63$`,
        },
        {
          stem: String.raw`A simple graph has $10$ vertices. For every whole number $d$, the number of vertices of degree $d$ is either $0$ or exactly $d$. What is the largest possible number of edges of the graph?`,
          difficulty: 3,
          answer: String.raw`$29$`,
        },
        {
          stem: String.raw`In a group of $10$ people there are exactly $31$ pairs of friends. Prove that there are at least $26$ sets of three people who are pairwise friends.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: friends $u, v$ have at least $\deg u + \deg v - 10$ common friends, so summing over the $31$ pairs (which counts each such set of three $3$ times) gives at least $\sum \deg^{2} - 310$, and since the degrees are whole numbers adding up to $62$, $\sum \deg^{2} \ge 8 \cdot 6^{2} + 2 \cdot 7^{2} = 386$, so there are at least $\frac{76}{3} > 25$ such sets.`,
        },
      ],
    },
    {
      id: "C5-trees-connectivity",
      name: String.raw`Trees, paths and connectivity`,
      tests: String.raw`Questions about road networks that must be connected, trees with given degrees, or paths and cycles that must exist. Use $E = n - 1$ for trees, the largest possible disconnected graph, and longest-path arguments.`,
      questions: [
        {
          stem: String.raw`A tree has exactly three vertices of degree $4$ and exactly two vertices of degree $3$; every other vertex has degree $1$ or $2$. How many vertices of degree $1$ does it have?`,
          difficulty: 1,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`A country has $20$ cities. Some pairs of cities are joined by a two-way road, with at most one road between any two cities. What is the smallest number $m$ such that every such road network with $m$ roads allows travel between any two cities?`,
          difficulty: 2,
          answer: String.raw`$172$`,
        },
        {
          stem: String.raw`Every vertex of a finite simple graph has degree at least $3$. Prove that the graph contains a cycle of even length.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: take a longest path $v_1 v_2 \ldots v_k$; all of the at least $3$ neighbours of $v_1$ lie on it, say $v_a, v_b, v_c$ with $1 < a < b < c$, and two of $a, b, c$ have the same parity, say $p < q$, so the cycle $v_1 v_p v_{p+1} \ldots v_q v_1$ has even length $q - p + 2$.`,
        },
        {
          stem: String.raw`A graph has $30$ vertices and $24$ edges and contains no cycle. Into how many connected pieces does it fall?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`A country has $12$ cities joined by two-way roads, with at most one road between any two cities. However any two of the roads are closed, it is still possible to travel between any two cities on the remaining roads. What is the least possible number of roads?`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`A tree has $15$ vertices, and every vertex has degree at most $3$. The **distance** between two vertices is the number of edges on the path joining them. What is the smallest possible value of the largest distance between two vertices of the tree?`,
          difficulty: 3,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`A country has $2025$ cities. Some pairs of cities are joined by two-way roads, with at most one road between any two cities, and every city has at least $3$ roads. Prove that there is a cycle of roads of length at most $19$ (a round trip through at most $19$ different cities, using no road twice).`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: if there is no cycle of length at most $19$, then for any road $uv$ the cities at distance at most $9$ from $u$ or $v$ are reached along a tree that doubles at every step, giving at least $2(1 + 2 + 4 + \cdots + 2^{9}) = 2046 > 2025$ different cities.`,
        },
      ],
    },
    {
      id: "C5-eulerian",
      name: String.raw`Eulerian trails and route problems`,
      tests: String.raw`Drawing figures without lifting the pen, walking every street, or laying dominoes in a chain. Count the odd-degree vertices; they decide the number of strokes and which edges must be repeated.`,
      questions: [
        {
          stem: String.raw`The figure consists of a $3 \times 2$ rectangle divided into six unit squares, with both diagonals drawn in the top middle square. A **stroke** is drawn without lifting the pen, and no segment may be drawn twice. What is the smallest number of strokes needed to draw the figure?`,
          figure: {"type": "plot", "x": [-0.4, 3.4], "y": [-0.3, 2.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [0, 2], "tone": "ink"}, {"from": [1, 0], "to": [1, 2], "tone": "ink"}, {"from": [2, 0], "to": [2, 2], "tone": "ink"}, {"from": [3, 0], "to": [3, 2], "tone": "ink"}, {"from": [0, 0], "to": [3, 0], "tone": "ink"}, {"from": [0, 1], "to": [3, 1], "tone": "ink"}, {"from": [0, 2], "to": [3, 2], "tone": "ink"}, {"from": [1, 1], "to": [2, 2], "tone": "ink"}, {"from": [2, 1], "to": [1, 2], "tone": "ink"}], "alt": "A 3 by 2 rectangle divided into six unit squares; the top middle square also has both diagonals drawn."},
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`The paths of a square park form a $3 \times 3$ grid of square blocks, as shown; each block has side $100$ m, so there are $24$ path segments of $100$ m. A gardener must walk along every path segment at least once, starting and finishing at the same corner of the park. What is the shortest possible length of the walk, in metres?`,
          figure: {"type": "plot", "x": [-0.9, 3.6], "y": [-0.9, 3.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [0, 3], "tone": "ink"}, {"from": [1, 0], "to": [1, 3], "tone": "ink"}, {"from": [2, 0], "to": [2, 3], "tone": "ink"}, {"from": [3, 0], "to": [3, 3], "tone": "ink"}, {"from": [0, 0], "to": [3, 0], "tone": "ink"}, {"from": [0, 1], "to": [3, 1], "tone": "ink"}, {"from": [0, 2], "to": [3, 2], "tone": "ink"}, {"from": [0, 3], "to": [3, 3], "tone": "ink"}], "points": [{"x": 0, "y": 0}, {"x": 0, "y": 1}, {"x": 0, "y": 2}, {"x": 0, "y": 3}, {"x": 1, "y": 0}, {"x": 1, "y": 1}, {"x": 1, "y": 2}, {"x": 1, "y": 3}, {"x": 2, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}, {"x": 2, "y": 3}, {"x": 3, "y": 0}, {"x": 3, "y": 1}, {"x": 3, "y": 2}, {"x": 3, "y": 3}], "labels": [{"x": 0.5, "y": 0, "text": "100 m", "pos": "s", "style": "small"}], "alt": "A square park whose paths form a 3 by 3 grid of square blocks; each block side is 100 m."},
          difficulty: 2,
          answer: String.raw`$2800$ m`,
        },
        {
          stem: String.raw`A double-seven domino set has one domino for each unordered pair of numbers from $0$ to $7$, including the doubles $0$–$0$, $1$–$1$, ..., $7$–$7$: $36$ dominoes in all. Dominoes are laid in a single line so that touching ends show the same number. What is the largest number of dominoes from the set that can be placed in one such line?`,
          difficulty: 3,
          answer: String.raw`$33$`,
        },
        {
          stem: String.raw`For each $n$ with $2 \le n \le 12$, draw $n$ points in the plane, no three on a line, and all $\binom{n}{2}$ segments joining them. The pen may change direction only at the $n$ points. For how many of these values of $n$ can the figure be drawn in one stroke, drawing each segment exactly once?`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`A wire model of a $2 \times 2 \times 2$ cube is made from all the edges of its eight unit cubes: $54$ pieces of wire, each of length $1$. An ant walks along the wires, covering every piece at least once, and finishes where it started. What is the shortest possible length of its walk?`,
          difficulty: 2,
          answer: String.raw`$68$`,
        },
        {
          stem: String.raw`A string of letters is made from the eight letters A, B, C, D, E, F, G, H (letters may be repeated). Every two different letters must stand next to each other, in some order, somewhere in the string. What is the shortest possible length of the string?`,
          difficulty: 3,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`A connected graph has exactly $2k$ vertices of odd degree, where $k \ge 1$. Prove that these $2k$ vertices can be split into $k$ pairs, and the two vertices of each pair joined by a **shortest** path (one with the fewest possible edges between them), so that no two of the $k$ paths have a common edge.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: choose the pairing with the smallest total distance between paired vertices; if shortest paths for the pairs $\{s_1, t_1\}$ and $\{s_2, t_2\}$ both used an edge $uv$, re-pairing $s_1$ with $s_2$ and $t_1$ with $t_2$ (or $s_1$ with $t_2$ and $s_2$ with $t_1$, according to the direction in which the second path crosses $uv$) would lower the total by at least $2$.`,
        },
      ],
    },
    {
      id: "C5-ramsey-extremal",
      name: String.raw`Ramsey-type and extremal arguments`,
      tests: String.raw`Edges of a complete graph are coloured, or a graph avoids triangles, and you must force or count a structure. Pigeonhole at one vertex, count two-coloured corners, or use $\deg u + \deg v \le n$ for edges of a triangle-free graph; Turán's theorem gives the largest graphs with no $K_{r+1}$.`,
      questions: [
        {
          stem: String.raw`The $10$ segments joining $5$ points are each coloured red or blue so that no triangle with vertices among the $5$ points has all three sides the same colour. How many red segments are there?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In a club of $11$ people, among any three of them at least two are friends. What is the smallest possible number of pairs of friends in the club?`,
          difficulty: 2,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`Each of the $28$ segments joining $8$ points, no three collinear, is coloured red or blue. Prove that there are at least $8$ triangles, with vertices among the $8$ points, whose three sides all have the same colour.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: count two-coloured corners; at each point $r + b = 7$ gives $rb \le 12$, so there are at most $\frac{1}{2} \cdot 8 \cdot 12 = 48$ non-monochromatic triangles among the $\binom{8}{3} = 56$.`,
        },
        {
          stem: String.raw`In a group of $9$ people, no three are pairwise friends, and Sam, one of the nine, has exactly $6$ friends in the group. What is the largest possible number of pairs of friends in the group?`,
          difficulty: 1,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Each side and each diagonal of a regular nonagon (a $9$-gon) is coloured: red if it joins two vertices that are $1$ or $2$ places apart around the nonagon, and blue otherwise. How many of the triangles whose vertices are vertices of the nonagon have all three sides of the same colour?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`In a group of $11$ people, no four are pairwise friends. What is the largest possible number of pairs of friends?`,
          difficulty: 3,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`Find the smallest $n$ such that, however the edges of the complete graph $K_n$ are coloured red and blue, there are three triangles, each of which has all three sides of one colour (the colours of the three triangles may differ), such that no two of the three triangles have a common side.`,
          difficulty: 4,
          answer: String.raw`$9$`,
        },
      ],
    },
    {
      id: "C5-bipartite",
      name: String.raw`Bipartite graphs and two-colouring`,
      tests: String.raw`Moves on a board, tours through rooms, or splitting people into two groups. Colour the positions in two colours so that every move changes colour, then use parity of the number of moves and the sizes of the colour classes.`,
      questions: [
        {
          stem: String.raw`A knight starts on the corner square a1 of an $8 \times 8$ chessboard and makes exactly $2025$ moves. How many different squares could it finish on?`,
          difficulty: 1,
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`A museum has $25$ square rooms arranged in a $5 \times 5$ grid, as shown, with a door between every two rooms that share a wall. A visitor wants to walk through the museum visiting every room exactly once, starting in any room and finishing in any room. In how many of the $25$ rooms can the visitor start?`,
          figure: {"type": "plot", "x": [-0.3, 5.3], "y": [-0.3, 5.3], "equal": true, "axes": false, "segments": [{"from": [0, 0], "to": [0, 5], "tone": "ink"}, {"from": [1, 0], "to": [1, 5], "tone": "ink"}, {"from": [2, 0], "to": [2, 5], "tone": "ink"}, {"from": [3, 0], "to": [3, 5], "tone": "ink"}, {"from": [4, 0], "to": [4, 5], "tone": "ink"}, {"from": [5, 0], "to": [5, 5], "tone": "ink"}, {"from": [0, 0], "to": [5, 0], "tone": "ink"}, {"from": [0, 1], "to": [5, 1], "tone": "ink"}, {"from": [0, 2], "to": [5, 2], "tone": "ink"}, {"from": [0, 3], "to": [5, 3], "tone": "ink"}, {"from": [0, 4], "to": [5, 4], "tone": "ink"}, {"from": [0, 5], "to": [5, 5], "tone": "ink"}], "alt": "A 5 by 5 grid of square rooms."},
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`In a group of people, some pairs are friends. Prove that the people can be split into two groups so that every person has at least as many friends in the other group as in their own group.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: choose the split with the largest number of friend pairs between the two groups; if someone had more friends in their own group, moving them to the other group would increase that number.`,
        },
        {
          stem: String.raw`A rook moves on an $n \times n$ board, each step going to a cell that shares a side with its current cell. For how many values of $n$ with $2 \le n \le 10$ can the rook visit every cell exactly once and return, with its last step, to the cell where it started?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`An equilateral triangle of side $3$ is divided into $9$ small equilateral triangles, as shown, giving $10$ points joined by $18$ unit segments. What is the least number of segments that must be erased so that the $10$ points can be coloured with two colours in such a way that every remaining segment joins points of different colours?`,
          figure: {"type": "plot", "x": [-0.4, 3.4], "y": [-0.4, 2.998], "equal": true, "axes": false, "segments": [{"from": [0.0, 0.0], "to": [3.0, 0.0], "tone": "ink"}, {"from": [0, 0], "to": [1.5, 2.598], "tone": "ink"}, {"from": [0.5, 0.866], "to": [2.5, 0.866], "tone": "ink"}, {"from": [1, 0], "to": [2.0, 1.732], "tone": "ink"}, {"from": [1, 0], "to": [0.5, 0.866], "tone": "ink"}, {"from": [1.0, 1.732], "to": [2.0, 1.732], "tone": "ink"}, {"from": [2, 0], "to": [2.5, 0.866], "tone": "ink"}, {"from": [2, 0], "to": [1.0, 1.732], "tone": "ink"}, {"from": [3, 0], "to": [1.5, 2.598], "tone": "ink"}], "points": [{"x": 0.0, "y": 0.0}, {"x": 1.0, "y": 0.0}, {"x": 2.0, "y": 0.0}, {"x": 3.0, "y": 0.0}, {"x": 0.5, "y": 0.866}, {"x": 1.5, "y": 0.866}, {"x": 2.5, "y": 0.866}, {"x": 1.0, "y": 1.732}, {"x": 2.0, "y": 1.732}, {"x": 1.5, "y": 2.598}], "alt": "An equilateral triangle of side 3 divided into 9 small equilateral triangles; the 10 grid points are marked and joined by 18 unit segments."},
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`In a country some pairs of cities are joined by two-way roads, and some of the roads are toll roads. Every round trip that uses each of its roads once and visits no city twice (a cycle) uses an even number of toll roads. Prove that the cities can be split into two groups so that a road is a toll road exactly when it joins two cities of different groups.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: in each connected part fix a city $O$ and put a city in the second group when a route from $O$ to it uses an odd number of toll roads; two routes of different parity would give a closed walk with an odd number of toll roads, and such a walk contains a cycle with an odd number of toll roads.`,
        },
        {
          stem: String.raw`In a group of $12$ people no three are pairwise friends, but the $12$ people cannot be split into two groups so that no two friends are in the same group. Find the largest possible number of pairs of friends, and prove that it cannot be exceeded.`,
          difficulty: 4,
          answer: String.raw`$31$. **Proof.** Key idea: a shortest odd cycle $C$, of length $2k + 1 \ge 5$, has no chord and every person off $C$ has at most $2$ friends on $C$ (three would close up a shorter odd cycle), so with Mantel's theorem for the other $11 - 2k$ people there are at most $(2k + 1) + 2(11 - 2k) + \left\lfloor \frac{(11 - 2k)^{2}}{4} \right\rfloor \le 31$ pairs; equality holds for a $5$-cycle $v_1 v_2 v_3 v_4 v_5$ plus $4$ people who are friends with $v_1$ and $v_3$ and $3$ people who are friends with $v_2$ and $v_4$, each of the $4$ being friends with each of the $3$.`,
        },
      ],
    },
    {
      id: "C5-grid-colouring",
      name: String.raw`Colouring grids and boards`,
      tests: String.raw`Cells or lattice points of a grid are coloured with constraints, and you must find the fewest colours, count the colourings, or force a monochromatic pattern. Look at small blocks, column types and pigeonhole.`,
      questions: [
        {
          stem: String.raw`The cells of a $5 \times 5$ grid are to be coloured so that any two cells that share a side or a corner have different colours. What is the least number of colours needed?`,
          difficulty: 1,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`In how many ways can each cell of a $4 \times 4$ grid be coloured black or white so that each of the nine $2 \times 2$ squares formed by adjacent cells contains exactly two black cells?`,
          difficulty: 2,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`Each cell of an $n \times n$ grid is coloured red or blue. Find the smallest $n$ such that, however the cells are coloured, there are always two rows and two columns whose four cells of intersection all have the same colour.`,
          difficulty: 3,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`What is the largest number of cells of a $6 \times 6$ board that can be coloured black so that no $2 \times 2$ square of four cells is entirely black?`,
          difficulty: 1,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`In how many ways can each cell of a $6 \times 6$ board be coloured red or blue so that every row and every column contains an odd number of red cells?`,
          difficulty: 2,
          answer: String.raw`$2^{25}$`,
        },
        {
          stem: String.raw`What is the least number of cells of a $7 \times 7$ board that must be coloured black so that every $1 \times 4$ rectangle of four cells in a row or in a column contains at least one black cell?`,
          difficulty: 3,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Some cells of a $7 \times 7$ board are coloured black so that no black cell shares a side with two or more black cells. What is the largest possible number of black cells?`,
          difficulty: 4,
          answer: String.raw`$26$`,
        },
      ],
    },
    {
      id: "C5-tournaments",
      name: String.raw`Round-robin tournaments`,
      tests: String.raw`Every pair of players or teams meets once; questions on points totals, rankings and cyclic triples. Count games, wins or points in total, and look at the player with the most wins.`,
      questions: [
        {
          stem: String.raw`Ten teams play a round-robin tournament, each pair of teams meeting once. A win earns $3$ points, a draw earns $1$ point for each team, and a loss earns $0$ points. At the end the ten teams have $130$ points in total. How many matches were drawn?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`In a round-robin chess tournament every two players played once and there were no draws. No player won all of their games. Prove that there are three players $A$, $B$, $C$ such that $A$ beat $B$, $B$ beat $C$ and $C$ beat $A$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: let $A$ have the most wins and let $B$ be a player who beat $A$; $B$ cannot also have beaten everyone that $A$ beat (or $B$ would have more wins), so some $C$ beaten by $A$ beat $B$, giving $A \to C \to B \to A$.`,
        },
        {
          stem: String.raw`Eight players play a round-robin tournament with no draws, and one of them, Anna, won exactly $6$ of her $7$ games. A set of three players is called **cyclic** if each of the three beat exactly one of the other two. Find the largest possible number of cyclic sets, and prove that it cannot be exceeded.`,
          difficulty: 3,
          answer: String.raw`$17$. **Proof.** Key idea: a non-cyclic set has exactly one player who beat both others, so there are $\sum \binom{w_i}{2}$ non-cyclic sets; Anna gives $\binom{6}{2} = 15$ and the other seven win $22$ games, so they give at least $6\binom{3}{2} + \binom{4}{2} = 24$, leaving at most $56 - 39 = 17$, with equality when Anna loses only to player $0$ and the seven players other than Anna, numbered $0$ to $6$, play so that $i$ beats $i + 1, i + 2, i + 3 \pmod 7$.`,
        },
        {
          stem: String.raw`Six football teams play a round-robin tournament, each pair of teams meeting once. A win earns $3$ points, a draw earns $1$ point for each team, and a loss earns $0$ points. How many different values can the total number of points of all six teams take?`,
          difficulty: 1,
          answer: String.raw`$16$`,
        },
        {
          stem: String.raw`Eight players play a round-robin chess tournament, each pair playing once, with no draws. What is the largest possible number of players who win at least $5$ games?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Ten teams play a round-robin tournament, each pair meeting once, with $3$ points for a win, $1$ point to each team for a draw and $0$ for a loss. What is the smallest number $P$ such that a team with at least $P$ points is certain that at most two other teams have as many points as it or more?`,
          difficulty: 3,
          answer: String.raw`$23$`,
        },
        {
          stem: String.raw`Fourteen players play a round-robin tournament, every two players meeting once, with no draws. Find the smallest $k$ such that, however the games turn out, one can choose $k$ players so that every other player lost to at least one of the $k$ chosen players, and prove your answer.`,
          difficulty: 4,
          answer: String.raw`$3$. **Proof.** Key idea: a player with the most wins beat at least $7$ others, so at most $6$ players remain, and repeating the step inside the remaining group leaves at most $2$ and then $0$; for $k = 2$ to fail, take the $7$ players $0, 1, \ldots, 6$ in which $i$ beat $i + 1, i + 2, i + 4 \pmod 7$ and replace each player by two players with the same results against everyone else.`,
        },
      ],
    },
  ],
});
