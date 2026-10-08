H2.addTopic({
  id: "N8",
  title: "Set Language and Notation",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Set notation, subsets and complements, union and intersection, and Venn diagrams.`,
  syllabus: {
    include: [
      String.raw`use of set language and the following notation: union of $A$ and $B$, $A \cup B$; intersection of $A$ and $B$, $A \cap B$; number of elements in set $A$, $n(A)$; '… is an element of …', $\in$; '… is not an element of …', $\notin$; complement of set $A$, $A'$; the empty set, $\varnothing$; universal set, $\xi$; $A$ is a subset of $B$, $A \subseteq B$; $A$ is not a subset of $B$, $A \nsubseteq B$; $A$ is a (proper) subset of $B$, $A \subset B$; $A$ is not a (proper) subset of $B$, $A \not\subset B$`,
      String.raw`union and intersection of two sets`,
      String.raw`Venn diagrams`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Sets, elements and the notation`,
      body: String.raw`A **set** is a collection of objects, called **elements**. Write sets with curly brackets, e.g. $A = \{2, 3, 5, 7\}$, or in set-builder form, e.g. $A = \{x : x \text{ is a prime number less than } 10\}$.

| Symbol | Meaning |
| $\xi$ | the universal set (everything being considered) |
| $x \in A$ / $x \notin A$ | $x$ is / is not an element of $A$ |
| $n(A)$ | the number of elements in $A$ |
| $\varnothing$ or $\{\ \}$ | the empty set (no elements) |
| $A'$ | the complement of $A$ |
| $A \cup B$ / $A \cap B$ | the union / intersection of $A$ and $B$ |

- Read set-builder notation carefully: "$x$ is an integer" and the inequality decide exactly which elements are in. Check the end points ($<$ or $\le$).
- $n(A)$ is a **number**, not a set. $\varnothing$ is a set, so $\varnothing \ne \{0\}$ and $n(\varnothing) = 0$.
- List elements once only, and in order, so that nothing is missed.`,
    },
    {
      title: String.raw`Subsets: $\subseteq$ and $\subset$`,
      body: String.raw`- $B \subseteq A$: every element of $B$ is also an element of $A$ ($B$ may equal $A$).
- $B \subset A$: $B$ is a **proper** subset — $B \subseteq A$ and $B \ne A$.
- $\nsubseteq$ and $\not\subset$ mean "is not a subset of" and "is not a proper subset of".
- Every set is a subset of itself, and $\varnothing$ is a subset of every set.
- In a Venn diagram, $B \subset A$ is drawn as a circle **inside** another. Sets with no common element ($A \cap B = \varnothing$) are **disjoint** and are drawn apart.

**Common mistake**: $\in$ links an *element* to a set; $\subset$ links a *set* to a set. Write $3 \in A$ and $\{3\} \subset A$, never $\{3\} \in A$ or $3 \subset A$.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
          ],
          curves: [
            { param: "t => [5 + 2.5*Math.cos(t), 3 + 2.5*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [5.6 + 1.3*Math.cos(t), 2.8 + 1.3*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.85, y: 5, text: "A", style: "italic" },
            { x: 5.6, y: 2.8, text: "B", style: "italic" },
          ],
          caption: String.raw`$B \subset A$: every element of $B$ is in $A$.`,
          alt: "Venn diagram with circle B drawn completely inside circle A, inside the rectangle ξ.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
          ],
          curves: [
            { param: "t => [3.1 + 1.8*Math.cos(t), 3 + 1.8*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [7.1 + 1.8*Math.cos(t), 3 + 1.8*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 1.55, y: 4.85, text: "A", style: "italic" },
            { x: 8.65, y: 4.85, text: "B", style: "italic" },
          ],
          caption: String.raw`Disjoint sets: $A \cap B = \varnothing$.`,
          alt: "Venn diagram with two separate circles A and B that do not overlap.",
        },
      ],
    },
    {
      title: String.raw`The universal set and the complement`,
      body: String.raw`The **universal set** $\xi$ contains every element under discussion. It is drawn as the rectangle around the Venn diagram.

The **complement** $A'$ is the set of elements of $\xi$ that are **not** in $A$:
$$n(A') = n(\xi) - n(A).$$

- The complement depends on $\xi$. If $\xi$ changes, $A'$ changes.
- $(A')' = A$, $\xi' = \varnothing$ and $\varnothing' = \xi$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6],
        equal: true,
        axes: false,
        shade: [
          {
            upper: "x => 5.7",
            lower: "x => { const v = [(Math.abs(x-5)<2.2?3+Math.sqrt(4.84-(x-5)*(x-5)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 2.998; }",
            from: 0.3,
            to: 9.7,
            tone: "warn",
          },
          {
            upper: "x => { const v = [(Math.abs(x-5)<2.2?3-Math.sqrt(4.84-(x-5)*(x-5)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 3.003; }",
            lower: "x => 0.3",
            from: 0.3,
            to: 9.7,
            tone: "warn",
          },
        ],
        polygons: [
          { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
        ],
        curves: [
          { param: "t => [5 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
        ],
        labels: [
          { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
          { x: 3, y: 5, text: "A", style: "italic" },
        ],
        caption: String.raw`$A'$: everything in $\xi$ that is not in $A$.`,
        alt: "Venn diagram with one circle A; the region outside A but inside the rectangle is shaded.",
      },
    },
    {
      title: String.raw`Union and intersection`,
      body: String.raw`- **Intersection** $A \cap B$: elements in **both** $A$ and $B$ ("and").
- **Union** $A \cup B$: elements in $A$ or $B$ or both — **at least one** ("or").
- If $B \subseteq A$, then $A \cap B = B$ and $A \cup B = A$.
- If $A$ and $B$ are disjoint, $A \cap B = \varnothing$.

For two sets (memorise):
$$n(A \cup B) = n(A) + n(B) - n(A \cap B).$$
The overlap is counted twice in $n(A) + n(B)$, so subtract it once.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[5, 1.095], [5.126, 1.173], [5.247, 1.26], [5.361, 1.355], [5.469, 1.458], [5.569, 1.567], [5.662, 1.683], [5.747, 1.805], [5.824, 1.932], [5.891, 2.065], [5.95, 2.201], [5.999, 2.341], [6.039, 2.485], [6.069, 2.63], [6.089, 2.777], [6.099, 2.926], [6.099, 3.074], [6.089, 3.223], [6.069, 3.37], [6.039, 3.515], [5.999, 3.659], [5.95, 3.799], [5.891, 3.935], [5.824, 4.068], [5.747, 4.195], [5.662, 4.317], [5.569, 4.433], [5.469, 4.542], [5.361, 4.645], [5.247, 4.74], [5.126, 4.827], [5, 4.905], [4.87, 4.824], [4.746, 4.734], [4.628, 4.635], [4.517, 4.528], [4.415, 4.414], [4.32, 4.293], [4.234, 4.166], [4.158, 4.033], [4.09, 3.895], [4.033, 3.752], [3.985, 3.606], [3.948, 3.457], [3.921, 3.306], [3.905, 3.153], [3.9, 3], [3.905, 2.847], [3.921, 2.694], [3.948, 2.543], [3.985, 2.394], [4.033, 2.248], [4.09, 2.105], [4.158, 1.967], [4.234, 1.834], [4.32, 1.707], [4.415, 1.586], [4.517, 1.472], [4.628, 1.365], [4.746, 1.266], [4.87, 1.176]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.05, y: 5.2, text: "A", style: "italic" },
            { x: 7.95, y: 5.2, text: "B", style: "italic" },
          ],
          caption: String.raw`$A \cap B$: in **both**`,
          alt: "Two overlapping circles A and B with only the overlap shaded.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[5, 4.905], [4.867, 4.976], [4.729, 5.038], [4.587, 5.09], [4.442, 5.132], [4.294, 5.164], [4.145, 5.186], [3.994, 5.198], [3.843, 5.199], [3.693, 5.19], [3.543, 5.171], [3.395, 5.141], [3.249, 5.101], [3.106, 5.052], [2.967, 4.993], [2.833, 4.924], [2.703, 4.846], [2.58, 4.76], [2.462, 4.665], [2.351, 4.562], [2.248, 4.452], [2.152, 4.336], [2.064, 4.212], [1.985, 4.084], [1.916, 3.95], [1.855, 3.811], [1.804, 3.669], [1.763, 3.524], [1.732, 3.376], [1.712, 3.226], [1.701, 3.076], [1.701, 2.924], [1.712, 2.774], [1.732, 2.624], [1.763, 2.476], [1.804, 2.331], [1.855, 2.189], [1.916, 2.05], [1.985, 1.916], [2.064, 1.788], [2.152, 1.664], [2.248, 1.548], [2.351, 1.438], [2.462, 1.335], [2.58, 1.24], [2.703, 1.154], [2.833, 1.076], [2.967, 1.007], [3.106, 0.948], [3.249, 0.899], [3.395, 0.859], [3.543, 0.829], [3.693, 0.81], [3.843, 0.801], [3.994, 0.802], [4.145, 0.814], [4.294, 0.836], [4.442, 0.868], [4.587, 0.91], [4.729, 0.962], [4.867, 1.024], [5, 1.095], [5.133, 1.024], [5.271, 0.962], [5.413, 0.91], [5.558, 0.868], [5.706, 0.836], [5.855, 0.814], [6.006, 0.802], [6.157, 0.801], [6.307, 0.81], [6.457, 0.829], [6.605, 0.859], [6.751, 0.899], [6.894, 0.948], [7.033, 1.007], [7.167, 1.076], [7.297, 1.154], [7.42, 1.24], [7.538, 1.335], [7.649, 1.438], [7.752, 1.548], [7.848, 1.664], [7.936, 1.788], [8.015, 1.916], [8.084, 2.05], [8.145, 2.189], [8.196, 2.331], [8.237, 2.476], [8.268, 2.624], [8.288, 2.774], [8.299, 2.924], [8.299, 3.076], [8.288, 3.226], [8.268, 3.376], [8.237, 3.524], [8.196, 3.669], [8.145, 3.811], [8.084, 3.95], [8.015, 4.084], [7.936, 4.212], [7.848, 4.336], [7.752, 4.452], [7.649, 4.562], [7.538, 4.665], [7.42, 4.76], [7.297, 4.846], [7.167, 4.924], [7.033, 4.993], [6.894, 5.052], [6.751, 5.101], [6.605, 5.141], [6.457, 5.171], [6.307, 5.19], [6.157, 5.199], [6.006, 5.198], [5.855, 5.186], [5.706, 5.164], [5.558, 5.132], [5.413, 5.09], [5.271, 5.038], [5.133, 4.976]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.05, y: 5.2, text: "A", style: "italic" },
            { x: 7.95, y: 5.2, text: "B", style: "italic" },
          ],
          caption: String.raw`$A \cup B$: in **at least one**`,
          alt: "Two overlapping circles A and B with everything inside either circle shaded.",
        },
      ],
    },
    {
      title: String.raw`Shading and describing regions`,
      body: String.raw`To **shade** a set, build it up in steps. For $A \cap B'$: find $A$, find $B'$ (outside $B$), then keep only the part in **both**.

To **describe** a shaded region, say in words which sets it is inside and outside, then translate:

| In words | Set notation |
| in $A$ but not in $B$ | $A \cap B'$ |
| not in $B$ | $B'$ |
| in $A$, or not in $B$ | $A \cup B'$ |
| in neither $B$ nor $C$ | $(B \cup C)'$ or $B' \cap C'$ |
| not in all three of $A$, $B$, $C$ | $(A \cap B \cap C)'$ or $A' \cup B' \cup C'$ |
| in exactly one of $B$, $C$ | $(B \cap C') \cup (B' \cap C)$ |

- A region often has more than one correct description; any correct one scores.
- Check your answer by testing one point in each region: is it in your set or not?
- Shade clearly, and only the regions asked for.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[5, 4.905], [4.867, 4.976], [4.729, 5.038], [4.587, 5.09], [4.442, 5.132], [4.294, 5.164], [4.145, 5.186], [3.994, 5.198], [3.843, 5.199], [3.693, 5.19], [3.543, 5.171], [3.395, 5.141], [3.249, 5.101], [3.106, 5.052], [2.967, 4.993], [2.833, 4.924], [2.703, 4.846], [2.58, 4.76], [2.462, 4.665], [2.351, 4.562], [2.248, 4.452], [2.152, 4.336], [2.064, 4.212], [1.985, 4.084], [1.916, 3.95], [1.855, 3.811], [1.804, 3.669], [1.763, 3.524], [1.732, 3.376], [1.712, 3.226], [1.701, 3.076], [1.701, 2.924], [1.712, 2.774], [1.732, 2.624], [1.763, 2.476], [1.804, 2.331], [1.855, 2.189], [1.916, 2.05], [1.985, 1.916], [2.064, 1.788], [2.152, 1.664], [2.248, 1.548], [2.351, 1.438], [2.462, 1.335], [2.58, 1.24], [2.703, 1.154], [2.833, 1.076], [2.967, 1.007], [3.106, 0.948], [3.249, 0.899], [3.395, 0.859], [3.543, 0.829], [3.693, 0.81], [3.843, 0.801], [3.994, 0.802], [4.145, 0.814], [4.294, 0.836], [4.442, 0.868], [4.587, 0.91], [4.729, 0.962], [4.867, 1.024], [5, 1.095], [4.87, 1.176], [4.746, 1.266], [4.628, 1.365], [4.517, 1.472], [4.415, 1.586], [4.32, 1.707], [4.234, 1.834], [4.158, 1.967], [4.09, 2.105], [4.033, 2.248], [3.985, 2.394], [3.948, 2.543], [3.921, 2.694], [3.905, 2.847], [3.9, 3], [3.905, 3.153], [3.921, 3.306], [3.948, 3.457], [3.985, 3.606], [4.033, 3.752], [4.09, 3.895], [4.158, 4.033], [4.234, 4.166], [4.32, 4.293], [4.415, 4.414], [4.517, 4.528], [4.628, 4.635], [4.746, 4.734], [4.87, 4.824]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.05, y: 5.2, text: "A", style: "italic" },
            { x: 7.95, y: 5.2, text: "B", style: "italic" },
          ],
          caption: String.raw`$A \cap B'$ (in $A$ only)`,
          alt: "Two overlapping circles; only the part of A outside B is shaded.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          shade: [
            {
              upper: "x => 5.7",
              lower: "x => { const v = [(Math.abs(x-3.9)<2.2?3+Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3+Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 2.998; }",
              from: 0.3,
              to: 9.7,
              tone: "warn",
            },
            {
              upper: "x => { const v = [(Math.abs(x-3.9)<2.2?3-Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3-Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 3.003; }",
              lower: "x => 0.3",
              from: 0.3,
              to: 9.7,
              tone: "warn",
            },
          ],
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[5, 4.905], [4.867, 4.976], [4.729, 5.038], [4.587, 5.09], [4.442, 5.132], [4.294, 5.164], [4.145, 5.186], [3.994, 5.198], [3.843, 5.199], [3.693, 5.19], [3.543, 5.171], [3.395, 5.141], [3.249, 5.101], [3.106, 5.052], [2.967, 4.993], [2.833, 4.924], [2.703, 4.846], [2.58, 4.76], [2.462, 4.665], [2.351, 4.562], [2.248, 4.452], [2.152, 4.336], [2.064, 4.212], [1.985, 4.084], [1.916, 3.95], [1.855, 3.811], [1.804, 3.669], [1.763, 3.524], [1.732, 3.376], [1.712, 3.226], [1.701, 3.076], [1.701, 2.924], [1.712, 2.774], [1.732, 2.624], [1.763, 2.476], [1.804, 2.331], [1.855, 2.189], [1.916, 2.05], [1.985, 1.916], [2.064, 1.788], [2.152, 1.664], [2.248, 1.548], [2.351, 1.438], [2.462, 1.335], [2.58, 1.24], [2.703, 1.154], [2.833, 1.076], [2.967, 1.007], [3.106, 0.948], [3.249, 0.899], [3.395, 0.859], [3.543, 0.829], [3.693, 0.81], [3.843, 0.801], [3.994, 0.802], [4.145, 0.814], [4.294, 0.836], [4.442, 0.868], [4.587, 0.91], [4.729, 0.962], [4.867, 1.024], [5, 1.095], [4.87, 1.176], [4.746, 1.266], [4.628, 1.365], [4.517, 1.472], [4.415, 1.586], [4.32, 1.707], [4.234, 1.834], [4.158, 1.967], [4.09, 2.105], [4.033, 2.248], [3.985, 2.394], [3.948, 2.543], [3.921, 2.694], [3.905, 2.847], [3.9, 3], [3.905, 3.153], [3.921, 3.306], [3.948, 3.457], [3.985, 3.606], [4.033, 3.752], [4.09, 3.895], [4.158, 4.033], [4.234, 4.166], [4.32, 4.293], [4.415, 4.414], [4.517, 4.528], [4.628, 4.635], [4.746, 4.734], [4.87, 4.824]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.05, y: 5.2, text: "A", style: "italic" },
            { x: 7.95, y: 5.2, text: "B", style: "italic" },
          ],
          caption: String.raw`$B'$ (not in $B$)`,
          alt: "Two overlapping circles; everything outside B is shaded: the part of A outside B and the region outside both circles.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 6],
          equal: true,
          axes: false,
          shade: [
            {
              upper: "x => 5.7",
              lower: "x => { const v = [(Math.abs(x-3.9)<2.2?3+Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3+Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 2.998; }",
              from: 0.3,
              to: 9.7,
              tone: "warn",
            },
            {
              upper: "x => { const v = [(Math.abs(x-3.9)<2.2?3-Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3-Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 3.003; }",
              lower: "x => 0.3",
              from: 0.3,
              to: 9.7,
              tone: "warn",
            },
          ],
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            {
              points: [[5, 1.095], [5.126, 1.173], [5.247, 1.26], [5.361, 1.355], [5.469, 1.458], [5.569, 1.567], [5.662, 1.683], [5.747, 1.805], [5.824, 1.932], [5.891, 2.065], [5.95, 2.201], [5.999, 2.341], [6.039, 2.485], [6.069, 2.63], [6.089, 2.777], [6.099, 2.926], [6.099, 3.074], [6.089, 3.223], [6.069, 3.37], [6.039, 3.515], [5.999, 3.659], [5.95, 3.799], [5.891, 3.935], [5.824, 4.068], [5.747, 4.195], [5.662, 4.317], [5.569, 4.433], [5.469, 4.542], [5.361, 4.645], [5.247, 4.74], [5.126, 4.827], [5, 4.905], [4.87, 4.824], [4.746, 4.734], [4.628, 4.635], [4.517, 4.528], [4.415, 4.414], [4.32, 4.293], [4.234, 4.166], [4.158, 4.033], [4.09, 3.895], [4.033, 3.752], [3.985, 3.606], [3.948, 3.457], [3.921, 3.306], [3.905, 3.153], [3.9, 3], [3.905, 2.847], [3.921, 2.694], [3.948, 2.543], [3.985, 2.394], [4.033, 2.248], [4.09, 2.105], [4.158, 1.967], [4.234, 1.834], [4.32, 1.707], [4.415, 1.586], [4.517, 1.472], [4.628, 1.365], [4.746, 1.266], [4.87, 1.176]],
              fill: true,
              tone: "warn",
            },
            {
              points: [[5, 4.905], [4.867, 4.976], [4.729, 5.038], [4.587, 5.09], [4.442, 5.132], [4.294, 5.164], [4.145, 5.186], [3.994, 5.198], [3.843, 5.199], [3.693, 5.19], [3.543, 5.171], [3.395, 5.141], [3.249, 5.101], [3.106, 5.052], [2.967, 4.993], [2.833, 4.924], [2.703, 4.846], [2.58, 4.76], [2.462, 4.665], [2.351, 4.562], [2.248, 4.452], [2.152, 4.336], [2.064, 4.212], [1.985, 4.084], [1.916, 3.95], [1.855, 3.811], [1.804, 3.669], [1.763, 3.524], [1.732, 3.376], [1.712, 3.226], [1.701, 3.076], [1.701, 2.924], [1.712, 2.774], [1.732, 2.624], [1.763, 2.476], [1.804, 2.331], [1.855, 2.189], [1.916, 2.05], [1.985, 1.916], [2.064, 1.788], [2.152, 1.664], [2.248, 1.548], [2.351, 1.438], [2.462, 1.335], [2.58, 1.24], [2.703, 1.154], [2.833, 1.076], [2.967, 1.007], [3.106, 0.948], [3.249, 0.899], [3.395, 0.859], [3.543, 0.829], [3.693, 0.81], [3.843, 0.801], [3.994, 0.802], [4.145, 0.814], [4.294, 0.836], [4.442, 0.868], [4.587, 0.91], [4.729, 0.962], [4.867, 1.024], [5, 1.095], [4.87, 1.176], [4.746, 1.266], [4.628, 1.365], [4.517, 1.472], [4.415, 1.586], [4.32, 1.707], [4.234, 1.834], [4.158, 1.967], [4.09, 2.105], [4.033, 2.248], [3.985, 2.394], [3.948, 2.543], [3.921, 2.694], [3.905, 2.847], [3.9, 3], [3.905, 3.153], [3.921, 3.306], [3.948, 3.457], [3.985, 3.606], [4.033, 3.752], [4.09, 3.895], [4.158, 4.033], [4.234, 4.166], [4.32, 4.293], [4.415, 4.414], [4.517, 4.528], [4.628, 4.635], [4.746, 4.734], [4.87, 4.824]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
            { x: 2.05, y: 5.2, text: "A", style: "italic" },
            { x: 7.95, y: 5.2, text: "B", style: "italic" },
          ],
          caption: String.raw`$A \cup B'$ (in $A$, or not in $B$)`,
          alt: "Two overlapping circles; everything except the part of B outside A is shaded.",
        },
      ],
    },
    {
      title: String.raw`Venn diagrams with three sets`,
      body: String.raw`Three overlapping circles split $\xi$ into **8 regions**. Name each region by saying, for every set, whether it is inside or outside.

- "Only $C$" is $A' \cap B' \cap C$; "in all three" is $A \cap B \cap C$.
- "In exactly two" means the three regions 4, 5 and 6 below, **not** region 7.
- $A \cap B$ is the whole overlap of $A$ and $B$: regions 4 **and** 7.
- When one set is a subset of another, or two sets are disjoint, draw the circles that way instead of the standard picture.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 7.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
          ],
          curves: [
            { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
            { x: 2.15, y: 6.55, text: "A", style: "italic" },
            { x: 7.85, y: 6.55, text: "B", style: "italic" },
            { x: 7, y: 1, text: "C", style: "italic" },
            { x: 3.05, y: 5.15, text: "1", style: "plain" },
            { x: 3.75, y: 3.15, text: "5", style: "plain" },
            { x: 5, y: 5.75, text: "4", style: "plain" },
            { x: 5, y: 4.05, text: "7", style: "plain" },
            { x: 6.95, y: 5.15, text: "2", style: "plain" },
            { x: 5, y: 1.6, text: "3", style: "plain" },
            { x: 6.25, y: 3.15, text: "6", style: "plain" },
            { x: 8.9, y: 0.9, text: "8", style: "plain" },
          ],
          caption: String.raw`Three sets make 8 regions (numbered here).`,
          alt: "Venn diagram of three overlapping circles A, B and C with its eight regions numbered 1 to 8: 1 is A only, 2 is B only, 3 is C only, 4 is A and B only, 5 is A and C only, 6 is B and C only, 7 is all three, 8 is outside all circles.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 7.6],
          equal: true,
          axes: false,
          polygons: [
            { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
            {
              points: [[6.05, 4.561], [6.045, 4.696], [6.031, 4.83], [6.008, 4.964], [5.976, 5.095], [5.936, 5.224], [5.887, 5.351], [5.83, 5.473], [5.765, 5.592], [5.693, 5.706], [5.613, 5.815], [5.526, 5.919], [5.432, 6.017], [5.332, 6.108], [5.227, 6.192], [5.116, 6.27], [5, 6.34], [4.884, 6.27], [4.773, 6.192], [4.668, 6.108], [4.568, 6.017], [4.474, 5.919], [4.387, 5.815], [4.307, 5.706], [4.235, 5.592], [4.17, 5.473], [4.113, 5.351], [4.064, 5.224], [4.024, 5.095], [3.992, 4.964], [3.969, 4.83], [3.955, 4.696], [3.95, 4.561], [4.071, 4.627], [4.195, 4.686], [4.324, 4.735], [4.455, 4.776], [4.589, 4.808], [4.725, 4.832], [4.862, 4.845], [5, 4.85], [5.138, 4.845], [5.275, 4.832], [5.411, 4.808], [5.545, 4.776], [5.676, 4.735], [5.805, 4.686], [5.929, 4.627]],
              fill: true,
              tone: "warn",
            },
          ],
          curves: [
            { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          ],
          labels: [
            { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
            { x: 2.15, y: 6.55, text: "A", style: "italic" },
            { x: 7.85, y: 6.55, text: "B", style: "italic" },
            { x: 7, y: 1, text: "C", style: "italic" },
          ],
          caption: String.raw`$A \cap B \cap C'$: region 4 only`,
          alt: "Three overlapping circles with only the part common to A and B but outside C shaded.",
        },
      ],
    },
    {
      title: String.raw`Problems with numbers in regions`,
      body: String.raw`In a counting problem, write the **number of elements** in each region.

1. Start with the innermost region (the overlap). If it is unknown, call it $x$.
2. Work outwards: "only $A$" $= n(A) - x$, "only $B$" $= n(B) - x$.
3. Put the number in **neither** set outside the circles.
4. Add all the regions and set the total equal to $n(\xi)$. Solve for $x$.

- "Only $A$" is different from "$A$": $n(A)$ includes the overlap.
- For the **greatest** possible $n(A \cap B)$, make the smaller set a subset of the larger. For the **least**, make $A \cup B$ as large as possible: $n(A \cap B) \ge n(A) + n(B) - n(\xi)$, and never below 0.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
        ],
        curves: [
          { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
          { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
        ],
        labels: [
          { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
          { x: 2.05, y: 5.2, text: "A", style: "italic" },
          { x: 7.95, y: 5.2, text: "B", style: "italic" },
          { x: 2.65, y: 3, text: "21 − x", style: "italic" },
          { x: 5, y: 3, text: "x", style: "italic" },
          { x: 7.35, y: 3, text: "16 − x", style: "italic" },
          { x: 8.9, y: 0.9, text: "3", style: "plain" },
        ],
        caption: String.raw`$n(\xi) = 35$, $n(A) = 21$, $n(B) = 16$, 3 in neither. Put $x$ in the overlap first, then fill outwards.`,
        alt: "Venn diagram of A and B: the overlap contains x, A only contains 21 − x, B only contains 16 − x, and 3 lies outside both circles.",
      },
    },
    {
      title: String.raw`Full marks: what to write`,
      body: String.raw`- Answers that are sets need curly brackets: write $A \cap B = \{5, 10\}$, not just "5, 10".
- Answers to "find $n(\ldots)$" are numbers. Do not put brackets around them.
- If a set has no elements, write $\varnothing$ (or $\{\ \}$), not $\{\varnothing\}$ and not 0.
- When you draw a Venn diagram, always draw and label the rectangle $\xi$ and label every circle.
- When the question gives a Venn diagram, shade or write on **that** diagram.`,
    },
  ],
  archetypes: [
    {
      id: "N8-list-elements",
      name: String.raw`Listing elements from set-builder notation`,
      tests: String.raw`Turning set-builder descriptions (primes, factors, multiples, inequalities) into lists, then finding intersections, unions, complements and $n(\ldots)$. Recognise by "$\xi = \{x : x \text{ is an integer}, \ldots\}$" and "List the elements of…".`,
      questions: [
        {
          stem: String.raw`$\xi = \{x : x \text{ is an integer}, 1 \le x \le 15\}$

$A = \{x : x \text{ is a prime number}\}$

$B = \{x : x \text{ is a factor of } 30\}$`,
          parts: [
            { label: "(a)", text: String.raw`List the elements of $A \cap B$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $n(A \cup B)$.`, marks: 1 },
            { label: "(c)", text: String.raw`List the elements of $(A \cup B)'$.`, marks: 1 },
            { label: "(d)", text: String.raw`Explain why $1 \notin A$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$\xi = \{x : x \text{ is an integer}, -3 \le x \le 8\}$

$P = \{x : 3x - 2 > 4\}$

$Q = \{x : -2 < x \le 4\}$`,
          parts: [
            { label: "(a)", text: String.raw`List the elements of $P$.`, marks: 1 },
            { label: "(b)", text: String.raw`List the elements of $P \cap Q$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $n(P' \cap Q)$.`, marks: 1 },
            { label: "(d)", text: String.raw`Find $n\big((P \cup Q)'\big)$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N8-notation",
      name: String.raw`Using $\in$, $\subset$, $\subseteq$ and $\varnothing$ correctly`,
      tests: String.raw`Deciding whether statements written in set notation are true, choosing the correct symbol, and writing down sets with given properties. Recognise by "State whether each statement is true or false" or "Complete each statement using one of the symbols…".`,
      questions: [
        {
          stem: String.raw`$\xi = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$, $A = \{2, 4, 6, 8\}$, $B = \{4, 8\}$ and $C = \{1, 3, 9\}$.`,
          parts: [
            { label: "(a)", text: String.raw`State whether each of the following statements is true or false.

- (i) $6 \in B$
- (ii) $B \subset A$
- (iii) $A \cap C = \varnothing$
- (iv) $n(A') = 4$`, marks: 2 },
            { label: "(b)", text: String.raw`Write down a set $D$ such that $D \subset A$, $n(D) = 3$ and $8 \notin D$.`, marks: 1 },
            { label: "(c)", text: String.raw`A student writes "$\{4\} \in A$". Explain why this is incorrect and write a correct statement using $\{4\}$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$\xi = \{x : x \text{ is an integer}, 1 \le x \le 12\}$

$E = \{x : x \text{ is a multiple of } 4\}$

$F = \{x : x \text{ is a multiple of } 2\}$

$G = \{x : x \text{ is a factor of } 12\}$`,
          parts: [
            { label: "(a)", text: String.raw`Complete each statement using one of the symbols $\subset$, $\not\subset$, $\in$ or $\notin$.

- (i) $E \ \ldots\ F$
- (ii) $8 \ \ldots\ G$
- (iii) $G \ \ldots\ F$`, marks: 3 },
            { label: "(b)", text: String.raw`List the elements of $E \cap G'$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N8-shade-regions",
      name: String.raw`Shading a set on a Venn diagram`,
      tests: String.raw`Shading the region given by an expression such as $A' \cap B$, $(A \cap B)'$ or $(A \cup B) \cap C'$ on a diagram provided, sometimes with a subset or three sets. Recognise by "On the Venn diagram, shade the region which represents…".`,
      questions: [
        {
          stem: String.raw`On each Venn diagram, shade the region which represents the given set.`,
          parts: [
            { label: "(a)", text: String.raw`$A' \cap B$`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
              ],
              curves: [
                { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.05, y: 5.2, text: "A", style: "italic" },
                { x: 7.95, y: 5.2, text: "B", style: "italic" },
              ],
              alt: "Blank Venn diagram: two overlapping circles A and B inside a rectangle ξ.",
            } },
            { label: "(b)", text: String.raw`$(A \cap B)'$`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
              ],
              curves: [
                { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.05, y: 5.2, text: "A", style: "italic" },
                { x: 7.95, y: 5.2, text: "B", style: "italic" },
              ],
              alt: "Blank Venn diagram: two overlapping circles A and B inside a rectangle ξ.",
            } },
            { label: "(c)", text: String.raw`$A \cap B'$, where $B \subset A$`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
              ],
              curves: [
                { param: "t => [5 + 2.5*Math.cos(t), 3 + 2.5*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5.6 + 1.3*Math.cos(t), 2.8 + 1.3*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.85, y: 5, text: "A", style: "italic" },
                { x: 5.6, y: 2.8, text: "B", style: "italic" },
              ],
              alt: "Blank Venn diagram with circle B completely inside circle A.",
            } },
          ],
        },
        {
          stem: String.raw`On each Venn diagram, shade the region which represents the given set.`,
          parts: [
            { label: "(a)", text: String.raw`$(A \cup B) \cap C'$`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 7.6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
              ],
              curves: [
                { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
                { x: 2.15, y: 6.55, text: "A", style: "italic" },
                { x: 7.85, y: 6.55, text: "B", style: "italic" },
                { x: 7, y: 1, text: "C", style: "italic" },
              ],
              alt: "Blank Venn diagram: three overlapping circles A, B and C inside a rectangle ξ.",
            } },
            { label: "(b)", text: String.raw`$A \cap (B \cup C)$`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 7.6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
              ],
              curves: [
                { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
                { x: 2.15, y: 6.55, text: "A", style: "italic" },
                { x: 7.85, y: 6.55, text: "B", style: "italic" },
                { x: 7, y: 1, text: "C", style: "italic" },
              ],
              alt: "Blank Venn diagram: three overlapping circles A, B and C inside a rectangle ξ.",
            } },
          ],
        },
      ],
    },
    {
      id: "N8-describe-shaded",
      name: String.raw`Describing a shaded region in set notation`,
      tests: String.raw`Writing the shaded part of a given Venn diagram as a set, using $\cap$, $\cup$ and $'$. Recognise by "Use set notation to describe the shaded region".`,
      questions: [
        {
          stem: String.raw`Use set notation to describe the shaded region in each Venn diagram.`,
          parts: [
            { label: "(a)", text: String.raw`Diagram (a)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              shade: [
                {
                  upper: "x => 5.7",
                  lower: "x => { const v = [(Math.abs(x-3.9)<2.2?3+Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3+Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 2.998; }",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
                {
                  upper: "x => { const v = [(Math.abs(x-3.9)<2.2?3-Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3-Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 3.003; }",
                  lower: "x => 0.3",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
              ],
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
              ],
              curves: [
                { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.05, y: 5.2, text: "A", style: "italic" },
                { x: 7.95, y: 5.2, text: "B", style: "italic" },
              ],
              alt: "Two overlapping circles A and B; the region outside both circles is shaded.",
            } },
            { label: "(b)", text: String.raw`Diagram (b)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
                {
                  points: [[5, 4.905], [5.126, 4.827], [5.247, 4.74], [5.361, 4.645], [5.469, 4.542], [5.569, 4.433], [5.662, 4.317], [5.747, 4.195], [5.824, 4.068], [5.891, 3.935], [5.95, 3.799], [5.999, 3.659], [6.039, 3.515], [6.069, 3.37], [6.089, 3.223], [6.099, 3.074], [6.099, 2.926], [6.089, 2.777], [6.069, 2.63], [6.039, 2.485], [5.999, 2.341], [5.95, 2.201], [5.891, 2.065], [5.824, 1.932], [5.747, 1.805], [5.662, 1.683], [5.569, 1.567], [5.469, 1.458], [5.361, 1.355], [5.247, 1.26], [5.126, 1.173], [5, 1.095], [5.133, 1.024], [5.271, 0.962], [5.413, 0.91], [5.558, 0.868], [5.706, 0.836], [5.855, 0.814], [6.006, 0.802], [6.157, 0.801], [6.307, 0.81], [6.457, 0.829], [6.605, 0.859], [6.751, 0.899], [6.894, 0.948], [7.033, 1.007], [7.167, 1.076], [7.297, 1.154], [7.42, 1.24], [7.538, 1.335], [7.649, 1.438], [7.752, 1.548], [7.848, 1.664], [7.936, 1.788], [8.015, 1.916], [8.084, 2.05], [8.145, 2.189], [8.196, 2.331], [8.237, 2.476], [8.268, 2.624], [8.288, 2.774], [8.299, 2.924], [8.299, 3.076], [8.288, 3.226], [8.268, 3.376], [8.237, 3.524], [8.196, 3.669], [8.145, 3.811], [8.084, 3.95], [8.015, 4.084], [7.936, 4.212], [7.848, 4.336], [7.752, 4.452], [7.649, 4.562], [7.538, 4.665], [7.42, 4.76], [7.297, 4.846], [7.167, 4.924], [7.033, 4.993], [6.894, 5.052], [6.751, 5.101], [6.605, 5.141], [6.457, 5.171], [6.307, 5.19], [6.157, 5.199], [6.006, 5.198], [5.855, 5.186], [5.706, 5.164], [5.558, 5.132], [5.413, 5.09], [5.271, 5.038], [5.133, 4.976]],
                  fill: true,
                  tone: "warn",
                },
                {
                  points: [[5, 4.905], [4.867, 4.976], [4.729, 5.038], [4.587, 5.09], [4.442, 5.132], [4.294, 5.164], [4.145, 5.186], [3.994, 5.198], [3.843, 5.199], [3.693, 5.19], [3.543, 5.171], [3.395, 5.141], [3.249, 5.101], [3.106, 5.052], [2.967, 4.993], [2.833, 4.924], [2.703, 4.846], [2.58, 4.76], [2.462, 4.665], [2.351, 4.562], [2.248, 4.452], [2.152, 4.336], [2.064, 4.212], [1.985, 4.084], [1.916, 3.95], [1.855, 3.811], [1.804, 3.669], [1.763, 3.524], [1.732, 3.376], [1.712, 3.226], [1.701, 3.076], [1.701, 2.924], [1.712, 2.774], [1.732, 2.624], [1.763, 2.476], [1.804, 2.331], [1.855, 2.189], [1.916, 2.05], [1.985, 1.916], [2.064, 1.788], [2.152, 1.664], [2.248, 1.548], [2.351, 1.438], [2.462, 1.335], [2.58, 1.24], [2.703, 1.154], [2.833, 1.076], [2.967, 1.007], [3.106, 0.948], [3.249, 0.899], [3.395, 0.859], [3.543, 0.829], [3.693, 0.81], [3.843, 0.801], [3.994, 0.802], [4.145, 0.814], [4.294, 0.836], [4.442, 0.868], [4.587, 0.91], [4.729, 0.962], [4.867, 1.024], [5, 1.095], [4.87, 1.176], [4.746, 1.266], [4.628, 1.365], [4.517, 1.472], [4.415, 1.586], [4.32, 1.707], [4.234, 1.834], [4.158, 1.967], [4.09, 2.105], [4.033, 2.248], [3.985, 2.394], [3.948, 2.543], [3.921, 2.694], [3.905, 2.847], [3.9, 3], [3.905, 3.153], [3.921, 3.306], [3.948, 3.457], [3.985, 3.606], [4.033, 3.752], [4.09, 3.895], [4.158, 4.033], [4.234, 4.166], [4.32, 4.293], [4.415, 4.414], [4.517, 4.528], [4.628, 4.635], [4.746, 4.734], [4.87, 4.824]],
                  fill: true,
                  tone: "warn",
                },
              ],
              curves: [
                { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.05, y: 5.2, text: "A", style: "italic" },
                { x: 7.95, y: 5.2, text: "B", style: "italic" },
              ],
              alt: "Two overlapping circles A and B; A only and B only are shaded, the overlap is not.",
            } },
            { label: "(c)", text: String.raw`Diagram (c)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 6],
              equal: true,
              axes: false,
              shade: [
                {
                  upper: "x => 5.7",
                  lower: "x => { const v = [(Math.abs(x-3.9)<2.2?3+Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3+Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 2.998; }",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
                {
                  upper: "x => { const v = [(Math.abs(x-3.9)<2.2?3-Math.sqrt(4.84-(x-3.9)*(x-3.9)):null),(Math.abs(x-6.1)<2.2?3-Math.sqrt(4.84-(x-6.1)*(x-6.1)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 3.003; }",
                  lower: "x => 0.3",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
              ],
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
                {
                  points: [[5, 1.095], [5.133, 1.024], [5.271, 0.962], [5.413, 0.91], [5.558, 0.868], [5.706, 0.836], [5.855, 0.814], [6.006, 0.802], [6.157, 0.801], [6.307, 0.81], [6.457, 0.829], [6.605, 0.859], [6.751, 0.899], [6.894, 0.948], [7.033, 1.007], [7.167, 1.076], [7.297, 1.154], [7.42, 1.24], [7.538, 1.335], [7.649, 1.438], [7.752, 1.548], [7.848, 1.664], [7.936, 1.788], [8.015, 1.916], [8.084, 2.05], [8.145, 2.189], [8.196, 2.331], [8.237, 2.476], [8.268, 2.624], [8.288, 2.774], [8.299, 2.924], [8.299, 3.076], [8.288, 3.226], [8.268, 3.376], [8.237, 3.524], [8.196, 3.669], [8.145, 3.811], [8.084, 3.95], [8.015, 4.084], [7.936, 4.212], [7.848, 4.336], [7.752, 4.452], [7.649, 4.562], [7.538, 4.665], [7.42, 4.76], [7.297, 4.846], [7.167, 4.924], [7.033, 4.993], [6.894, 5.052], [6.751, 5.101], [6.605, 5.141], [6.457, 5.171], [6.307, 5.19], [6.157, 5.199], [6.006, 5.198], [5.855, 5.186], [5.706, 5.164], [5.558, 5.132], [5.413, 5.09], [5.271, 5.038], [5.133, 4.976], [5, 4.905], [4.87, 4.824], [4.746, 4.734], [4.628, 4.635], [4.517, 4.528], [4.415, 4.414], [4.32, 4.293], [4.234, 4.166], [4.158, 4.033], [4.09, 3.895], [4.033, 3.752], [3.985, 3.606], [3.948, 3.457], [3.921, 3.306], [3.905, 3.153], [3.9, 3], [3.905, 2.847], [3.921, 2.694], [3.948, 2.543], [3.985, 2.394], [4.033, 2.248], [4.09, 2.105], [4.158, 1.967], [4.234, 1.834], [4.32, 1.707], [4.415, 1.586], [4.517, 1.472], [4.628, 1.365], [4.746, 1.266], [4.87, 1.176]],
                  fill: true,
                  tone: "warn",
                },
              ],
              curves: [
                { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
                { x: 2.05, y: 5.2, text: "A", style: "italic" },
                { x: 7.95, y: 5.2, text: "B", style: "italic" },
              ],
              alt: "Two overlapping circles A and B; everything is shaded except the part of A outside B.",
            } },
          ],
        },
        {
          stem: String.raw`Use set notation to describe the shaded region in each Venn diagram.`,
          parts: [
            { label: "(a)", text: String.raw`Diagram (a)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 7.6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
                {
                  points: [[2.95, 2.789], [3.067, 2.724], [3.189, 2.667], [3.314, 2.618], [3.442, 2.578], [3.572, 2.545], [3.704, 2.522], [3.837, 2.506], [3.971, 2.5], [4.105, 2.503], [4.239, 2.514], [4.372, 2.534], [4.503, 2.563], [4.632, 2.6], [4.758, 2.645], [4.881, 2.699], [5, 2.76], [5.119, 2.699], [5.242, 2.645], [5.368, 2.6], [5.497, 2.563], [5.628, 2.534], [5.761, 2.514], [5.895, 2.503], [6.029, 2.5], [6.163, 2.506], [6.296, 2.522], [6.428, 2.545], [6.558, 2.578], [6.686, 2.618], [6.811, 2.667], [6.933, 2.724], [7.05, 2.789], [7.046, 2.931], [7.032, 3.072], [7.008, 3.212], [6.975, 3.35], [6.932, 3.485], [6.88, 3.617], [6.819, 3.745], [6.749, 3.869], [6.671, 3.987], [6.585, 4.1], [6.491, 4.207], [6.39, 4.306], [6.283, 4.399], [6.169, 4.484], [6.05, 4.561], [5.929, 4.627], [5.805, 4.686], [5.676, 4.735], [5.545, 4.776], [5.411, 4.808], [5.275, 4.832], [5.138, 4.845], [5, 4.85], [4.862, 4.845], [4.725, 4.832], [4.589, 4.808], [4.455, 4.776], [4.324, 4.735], [4.195, 4.686], [4.071, 4.627], [3.95, 4.561], [3.831, 4.484], [3.717, 4.399], [3.61, 4.306], [3.509, 4.207], [3.415, 4.1], [3.329, 3.987], [3.251, 3.869], [3.181, 3.745], [3.12, 3.617], [3.068, 3.485], [3.025, 3.35], [2.992, 3.212], [2.968, 3.072], [2.954, 2.931]],
                  fill: true,
                  tone: "warn",
                },
              ],
              curves: [
                { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
                { x: 2.15, y: 6.55, text: "A", style: "italic" },
                { x: 7.85, y: 6.55, text: "B", style: "italic" },
                { x: 7, y: 1, text: "C", style: "italic" },
              ],
              alt: "Three overlapping circles A, B and C; the parts of C that are also in A or in B are shaded.",
            } },
            { label: "(b)", text: String.raw`Diagram (b)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 7.6],
              equal: true,
              axes: false,
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
                {
                  points: [[5, 6.34], [4.874, 6.404], [4.744, 6.46], [4.61, 6.507], [4.473, 6.545], [4.334, 6.573], [4.193, 6.591], [4.052, 6.599], [3.91, 6.598], [3.769, 6.587], [3.628, 6.566], [3.49, 6.536], [3.354, 6.495], [3.221, 6.446], [3.092, 6.388], [2.967, 6.321], [2.847, 6.245], [2.732, 6.161], [2.624, 6.07], [2.522, 5.971], [2.428, 5.865], [2.34, 5.753], [2.261, 5.636], [2.19, 5.513], [2.128, 5.386], [2.075, 5.254], [2.031, 5.119], [1.996, 4.982], [1.971, 4.842], [1.956, 4.701], [1.95, 4.56], [1.954, 4.418], [1.968, 4.277], [1.992, 4.137], [2.025, 3.999], [2.068, 3.864], [2.12, 3.732], [2.181, 3.604], [2.251, 3.481], [2.329, 3.362], [2.415, 3.25], [2.509, 3.143], [2.61, 3.043], [2.717, 2.951], [2.831, 2.866], [2.95, 2.789], [2.954, 2.931], [2.968, 3.072], [2.992, 3.212], [3.025, 3.35], [3.068, 3.485], [3.12, 3.617], [3.181, 3.745], [3.251, 3.869], [3.329, 3.987], [3.415, 4.1], [3.509, 4.207], [3.61, 4.306], [3.717, 4.399], [3.831, 4.484], [3.95, 4.561], [3.955, 4.696], [3.969, 4.83], [3.992, 4.964], [4.024, 5.095], [4.064, 5.224], [4.113, 5.351], [4.17, 5.473], [4.235, 5.592], [4.307, 5.706], [4.387, 5.815], [4.474, 5.919], [4.568, 6.017], [4.668, 6.108], [4.773, 6.192], [4.884, 6.27]],
                  fill: true,
                  tone: "warn",
                },
              ],
              curves: [
                { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
                { x: 2.15, y: 6.55, text: "A", style: "italic" },
                { x: 7.85, y: 6.55, text: "B", style: "italic" },
                { x: 7, y: 1, text: "C", style: "italic" },
              ],
              alt: "Three overlapping circles A, B and C; only the part of A outside both B and C is shaded.",
            } },
            { label: "(c)", text: String.raw`Diagram (c)`, marks: 1, figure: {
              type: "plot",
              x: [0, 10],
              y: [0, 7.6],
              equal: true,
              axes: false,
              shade: [
                {
                  upper: "x => 7.3",
                  lower: "x => { const v = [(Math.abs(x-4)<2.05?4.55+Math.sqrt(4.203-(x-4)*(x-4)):null),(Math.abs(x-6)<2.05?4.55+Math.sqrt(4.203-(x-6)*(x-6)):null),(Math.abs(x-5)<2.05?2.8+Math.sqrt(4.203-(x-5)*(x-5)):null)].filter(t => t !== null); return v.length ? Math.max(...v) : 4.547; }",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
                {
                  upper: "x => { const v = [(Math.abs(x-4)<2.05?4.55-Math.sqrt(4.203-(x-4)*(x-4)):null),(Math.abs(x-6)<2.05?4.55-Math.sqrt(4.203-(x-6)*(x-6)):null),(Math.abs(x-5)<2.05?2.8-Math.sqrt(4.203-(x-5)*(x-5)):null)].filter(t => t !== null); return v.length ? Math.min(...v) : 4.553; }",
                  lower: "x => 0.3",
                  from: 0.3,
                  to: 9.7,
                  tone: "warn",
                },
              ],
              polygons: [
                { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
                {
                  points: [[5, 2.76], [5.117, 2.831], [5.229, 2.909], [5.336, 2.995], [5.436, 3.087], [5.53, 3.186], [5.618, 3.291], [5.698, 3.402], [5.771, 3.517], [5.836, 3.637], [5.892, 3.762], [5.941, 3.89], [5.98, 4.02], [6.011, 4.153], [6.033, 4.288], [6.046, 4.424], [6.05, 4.561], [6.045, 4.696], [6.031, 4.83], [6.008, 4.964], [5.976, 5.095], [5.936, 5.224], [5.887, 5.351], [5.83, 5.473], [5.765, 5.592], [5.693, 5.706], [5.613, 5.815], [5.526, 5.919], [5.432, 6.017], [5.332, 6.108], [5.227, 6.192], [5.116, 6.27], [5, 6.34], [4.884, 6.27], [4.773, 6.192], [4.668, 6.108], [4.568, 6.017], [4.474, 5.919], [4.387, 5.815], [4.307, 5.706], [4.235, 5.592], [4.17, 5.473], [4.113, 5.351], [4.064, 5.224], [4.024, 5.095], [3.992, 4.964], [3.969, 4.83], [3.955, 4.696], [3.95, 4.561], [3.954, 4.424], [3.967, 4.288], [3.989, 4.153], [4.02, 4.02], [4.059, 3.89], [4.108, 3.762], [4.164, 3.637], [4.229, 3.517], [4.302, 3.402], [4.382, 3.291], [4.47, 3.186], [4.564, 3.087], [4.664, 2.995], [4.771, 2.909], [4.883, 2.831]],
                  fill: true,
                  tone: "warn",
                },
              ],
              curves: [
                { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
                { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              ],
              labels: [
                { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
                { x: 2.15, y: 6.55, text: "A", style: "italic" },
                { x: 7.85, y: 6.55, text: "B", style: "italic" },
                { x: 7, y: 1, text: "C", style: "italic" },
              ],
              alt: "Three overlapping circles A, B and C; the whole overlap of A and B is shaded, and so is the region outside all three circles.",
            } },
          ],
        },
      ],
    },
    {
      id: "N8-venn-unknowns",
      name: String.raw`Counting problems: finding the overlap`,
      tests: String.raw`Using a Venn diagram to find how many are in both, exactly one or neither set from survey totals, or solving for $x$ when regions contain expressions. Recognise by "In a group of … students, … play …" or a Venn diagram with expressions in $x$.`,
      questions: [
        {
          stem: String.raw`In a group of 40 students, 24 play badminton, 18 play football and 7 play neither game.`,
          parts: [
            { label: "(a)", text: String.raw`Draw a Venn diagram to illustrate this information.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the number of students who play both games.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the number of students who play exactly one of the two games.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The Venn diagram shows the number of elements in each region. It is given that $n(\xi) = 48$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" },
            ],
            curves: [
              { param: "t => [3.9 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              { param: "t => [6.1 + 2.2*Math.cos(t), 3 + 2.2*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            ],
            labels: [
              { x: 0.75, y: 5.25, text: "ξ", style: "italic" },
              { x: 2.05, y: 5.2, text: "A", style: "italic" },
              { x: 7.95, y: 5.2, text: "B", style: "italic" },
              { x: 2.75, y: 3, text: "3x", style: "italic" },
              { x: 5, y: 3, text: "x + 2", style: "italic" },
              { x: 7.25, y: 3, text: "2x + 1", style: "italic" },
              { x: 8.9, y: 0.9, text: "9", style: "plain" },
            ],
            alt: "Venn diagram of A and B: A only contains 3x, the overlap contains x + 2, B only contains 2x + 1, and 9 lies outside both circles.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $x$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find $n(B)$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $n(A \cup B')$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N8-greatest-least",
      name: String.raw`Greatest and least possible values`,
      tests: String.raw`Finding the largest and smallest possible size of an intersection, a union or a complement when only $n(\xi)$, $n(A)$ and $n(B)$ are known. Recognise by "greatest possible value of $n(A \cap B)$" or "least possible number of…".`,
      questions: [
        {
          stem: String.raw`$\xi$ is a set with $n(\xi) = 40$. $A$ and $B$ are sets with $n(A) = 25$ and $n(B) = 18$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the greatest possible value of $n(A \cap B)$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the least possible value of $n(A \cap B)$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the greatest possible value of $n\big((A \cup B)'\big)$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`In a class of 30 students, 17 like tea and 20 like coffee.`,
          parts: [
            { label: "(a)", text: String.raw`Find the least possible number of students who like both tea and coffee.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the greatest possible number of students who like both tea and coffee.`, marks: 1 },
            { label: "(c)", text: String.raw`It is now given that 4 students like neither drink. Find the number of students who like both drinks.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "N8-relationships",
      name: String.raw`Drawing a Venn diagram from relationships between sets`,
      tests: String.raw`Deciding whether sets are subsets of one another, overlap or are disjoint, and drawing the Venn diagram to show this — often with sets of numbers or shapes. Recognise by "Draw a Venn diagram to show the relationship between…".`,
      questions: [
        {
          stem: String.raw`$\xi = \{x : x \text{ is an integer}, 1 \le x \le 20\}$

$A = \{x : x \text{ is a multiple of } 4\}$

$B = \{x : x \text{ is a multiple of } 8\}$

$C = \{x : x \text{ is an odd number}\}$`,
          parts: [
            { label: "(a)", text: String.raw`Draw a Venn diagram to show the relationship between the sets $A$, $B$ and $C$.`, marks: 2 },
            { label: "(b)", text: String.raw`Use set notation to describe the relationship between $B$ and $C$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find $n\big((A \cup C)'\big)$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`$\xi = \{\text{triangles}\}$, $I = \{\text{isosceles triangles}\}$, $E = \{\text{equilateral triangles}\}$ and $R = \{\text{right-angled triangles}\}$.`,
          parts: [
            { label: "(a)", text: String.raw`Draw a Venn diagram to show the relationship between the sets $I$, $E$ and $R$.`, marks: 2 },
            { label: "(b)", text: String.raw`Describe in words the members of $I \cap R$.`, marks: 1 },
            { label: "(c)", text: String.raw`Write down a statement, in set notation, about the sets $E$ and $R$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "N8-three-sets",
      name: String.raw`Three-set Venn diagram problems`,
      tests: String.raw`Reading and using a Venn diagram of three sets with numbers in its regions: finding an unknown region, and counting "exactly two", "only one" or a set written in notation. Recognise by a three-circle diagram with numbers.`,
      questions: [
        {
          stem: String.raw`60 students were asked which school clubs they belong to. $A$ is the set of students in the art club, $B$ is the set of students in the band and $C$ is the set of students in the chess club. The Venn diagram shows the number of students in each region.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 7.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0.3, 0.3], [9.7, 0.3], [9.7, 7.3], [0.3, 7.3]], tone: "ink" },
            ],
            curves: [
              { param: "t => [4 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              { param: "t => [6 + 2.05*Math.cos(t), 4.55 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
              { param: "t => [5 + 2.05*Math.cos(t), 2.8 + 2.05*Math.sin(t)]", t: [0, 6.283], tone: "ink", samples: 240 },
            ],
            labels: [
              { x: 0.75, y: 6.85, text: "ξ", style: "italic" },
              { x: 2.15, y: 6.55, text: "A", style: "italic" },
              { x: 7.85, y: 6.55, text: "B", style: "italic" },
              { x: 7, y: 1, text: "C", style: "italic" },
              { x: 3.05, y: 5.15, text: "12", style: "plain" },
              { x: 3.75, y: 3.15, text: "3", style: "plain" },
              { x: 5, y: 5.75, text: "4", style: "plain" },
              { x: 5, y: 4.05, text: "2", style: "plain" },
              { x: 6.95, y: 5.15, text: "9", style: "plain" },
              { x: 5, y: 1.6, text: "x", style: "italic" },
              { x: 6.25, y: 3.15, text: "5", style: "plain" },
              { x: 8.9, y: 0.9, text: "7", style: "plain" },
            ],
            alt: "Venn diagram of three clubs A (art), B (band) and C (chess). A only 12, B only 9, C only x, A and B only 4, A and C only 3, B and C only 5, all three 2, none 7.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $x$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find $n(A \cap B)$.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the number of students who belong to exactly two clubs.`, marks: 1 },
            { label: "(d)", text: String.raw`Find $n\big(A' \cap (B \cup C)\big)$.`, marks: 1 },
            { label: "(e)", text: String.raw`Describe in words the students in the set $A' \cap B' \cap C'$.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
