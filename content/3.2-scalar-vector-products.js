H2.addTopic({
  id: "3.2",
  title: "Scalar and Vector Products",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`The scalar product for angles and projections; the vector product for normals, areas and distances.`,
  syllabus: {
    include: [
      String.raw`concepts of scalar product and vector product of vectors and their properties`,
      String.raw`angle between two vectors`,
      String.raw`geometrical meanings of $\mathbf{a} \cdot \hat{\mathbf{n}}$ and $\mathbf{a} \times \hat{\mathbf{n}}$, where $\hat{\mathbf{n}}$ is a unit vector`,
    ],
    exclude: [
      String.raw`triple products $\mathbf{a} \cdot \mathbf{b} \times \mathbf{c}$ and $\mathbf{a} \times \mathbf{b} \times \mathbf{c}$`,
    ],
  },
  concepts: [
    {
      title: String.raw`Scalar (dot) product`,
      body: String.raw`$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3,$$
where $\theta$ ($0 \le \theta \le \pi$) is the angle between $\mathbf{a}$ and $\mathbf{b}$. **Not in MF27 — memorise.** The result is a **scalar**.

- Commutative and distributive: $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$, $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$.
- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$, so $|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + 2\mathbf{a} \cdot \mathbf{b} + |\mathbf{b}|^2$ — the standard way to handle magnitudes of abstract vectors.
- $\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = \mathbf{k} \cdot \mathbf{k} = 1$ and $\mathbf{i} \cdot \mathbf{j} = \mathbf{j} \cdot \mathbf{k} = \mathbf{k} \cdot \mathbf{i} = 0$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 5.6],
        equal: true,
        axes: false,
        segments: [
          { from: [4.6, 1.2], to: [9.6, 1.2], arrow: true, label: "a", pos: "s" },
          { from: [4.6, 1.2], to: [6.88, 4.12], arrow: true, tone: "good" },
          { from: [4.6, 1.2], to: [4.6, 4.9], arrow: true, tone: "good" },
          { from: [4.6, 1.2], to: [1.85, 3.68], arrow: true, tone: "good" },
        ],
        rightAngles: [
          { at: [4.6, 1.2], a: [1, 0], b: [0, 1], size: 0.38 },
        ],
        points: [
          { x: 4.6, y: 1.2, label: "O", pos: "s" },
        ],
        labels: [
          { x: 6.88, y: 4.12, text: "acute: a · b > 0", pos: "n" },
          { x: 4.6, y: 4.9, text: "right angle: a · b = 0", pos: "n" },
          { x: 1.85, y: 3.68, text: "obtuse: a · b < 0", pos: "n" },
        ],
        caption: String.raw`The sign of $\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$ tells you whether $\theta$ is acute, right or obtuse`,
        alt: "Vector a with three possible vectors b from the same point: at an acute angle (a dot b positive), at a right angle (a dot b zero), and at an obtuse angle (a dot b negative).",
      },
    },
    {
      title: String.raw`Angles and perpendicularity`,
      body: String.raw`$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}||\mathbf{b}|}.$$

- For non-zero vectors, $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0$. Sign of $\mathbf{a} \cdot \mathbf{b}$: positive means acute, negative means obtuse.
- For $\angle BAC$ in a triangle use $\overrightarrow{AB}$ and $\overrightarrow{AC}$ — **both pointing away from $A$**. Using $\overrightarrow{BA}$ with $\overrightarrow{AC}$ gives the supplementary angle.
- Angle with the $x$-axis: use $\mathbf{i}$, so $\cos\alpha = a_1 / |\mathbf{a}|$.
- When an unknown appears, squaring $\cos\theta$ can introduce a false root — check the sign of $\mathbf{a} \cdot \mathbf{b}$.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          segments: [
            { from: [9.4, 1.6], to: [5.2, 5], tone: "muted", thin: true },
            { from: [2.6, 1.2], to: [9.4, 1.6], arrow: true, label: "AB", pos: "s", style: "plain" },
            { from: [2.6, 1.2], to: [5.2, 5], arrow: true, label: "AC", pos: "nw", style: "plain" },
          ],
          angles: [
            { at: [2.6, 1.2], from: [9.4, 1.6], to: [5.2, 5], r: 1.1, label: "θ" },
          ],
          points: [
            { x: 2.6, y: 1.2, label: "A", pos: "sw" },
          ],
          labels: [
            { x: 9.4, y: 1.6, text: "B", pos: "e" },
            { x: 5.2, y: 5, text: "C", pos: "n" },
          ],
          caption: String.raw`Correct: $\overrightarrow{AB}$ and $\overrightarrow{AC}$ both start at $A$ — angle $\theta$`,
          alt: "Triangle ABC with vectors AB and AC both drawn starting from A; the angle between them is theta, the angle BAC.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.8],
          equal: true,
          axes: false,
          segments: [
            { from: [9.4, 1.6], to: [5.2, 5], tone: "muted", thin: true },
            { from: [2.6, 1.2], to: [0.4, 1.07], tone: "warn", dashed: true, thin: true },
            { from: [9.4, 1.6], to: [2.6, 1.2], arrow: true, tone: "warn", label: "BA", pos: "s", style: "plain" },
            { from: [2.6, 1.2], to: [5.2, 5], arrow: true, label: "AC", pos: "nw", style: "plain", labelAt: [4.16, 3.48] },
          ],
          angles: [
            { at: [2.6, 1.2], from: [5.2, 5], to: [0.4, 1.07], r: 0.9 },
          ],
          labels: [
            { x: 2.02, y: 2.85, text: "180° − θ", pos: "c", style: "italic" },
            { x: 2.6, y: 1.2, text: "A", pos: "s" },
            { x: 9.4, y: 1.6, text: "B", pos: "e" },
            { x: 5.2, y: 5, text: "C", pos: "n" },
          ],
          caption: String.raw`Wrong: $\overrightarrow{BA}$ with $\overrightarrow{AC}$ gives $180^\circ - \theta$`,
          alt: "The same triangle with vector BA pointing into A and vector AC leaving A; continuing BA beyond A shows that the angle between these two vectors is 180 degrees minus theta.",
        },
      ],
    },
    {
      title: String.raw`Vector (cross) product (MF27)`,
      body: String.raw`$$\mathbf{a} \times \mathbf{b} = |\mathbf{a}||\mathbf{b}|\sin\theta\,\hat{\mathbf{n}} = \begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix},$$
where $\hat{\mathbf{n}}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$ (right-hand rule). The result is a **vector**.

- $\mathbf{a} \times \mathbf{b} = -\,\mathbf{b} \times \mathbf{a}$ (not commutative); distributive over addition; $(\lambda\mathbf{a}) \times \mathbf{b} = \lambda(\mathbf{a} \times \mathbf{b})$.
- $\mathbf{a} \times \mathbf{a} = \mathbf{0}$; for non-zero vectors, $\mathbf{a} \times \mathbf{b} = \mathbf{0} \iff \mathbf{a} \parallel \mathbf{b}$.
- $\mathbf{a} \times \mathbf{b}$ is the quickest way to find a vector perpendicular to two given directions (a normal). Check your answer by dotting with both.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 5.6],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0.57, 0.93], [7.57, 0.93], [9.82, 3.68], [2.82, 3.68]], fill: true, tone: "muted" },
        ],
        segments: [
          { from: [2.6, 1.7], to: [2.6, 0.25], arrow: true, tone: "good", dashed: true, label: "b × a", pos: "e", style: "bold", labelAt: [2.6, 0.61] },
          { from: [2.6, 1.7], to: [6.73, 1.37], arrow: true, tone: "ink", label: "a", pos: "s", labelAt: [5.08, 1.5] },
          { from: [2.6, 1.7], to: [4.44, 3.46], arrow: true, tone: "ink", label: "b", pos: "nw", labelAt: [3.98, 3.02] },
          { from: [2.6, 1.7], to: [2.6, 5], arrow: true, label: "a × b", pos: "e", labelAt: [2.6, 4.51] },
        ],
        rightAngles: [
          { at: [2.6, 1.7], a: [0, 1], b: [4.13, -0.33], size: 0.5 },
          { at: [2.6, 1.7], a: [0, 1], b: [1.84, 1.76], size: 0.5 },
        ],
        angles: [
          { at: [2.6, 1.7], from: [6.73, 1.37], to: [4.44, 3.46], r: 1.5, label: "θ" },
        ],
        points: [
          { x: 2.6, y: 1.7, label: "", pos: "c" },
        ],
        caption: String.raw`$\mathbf{a} \times \mathbf{b}$ is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$ (right-hand rule: fingers curl from $\mathbf{a}$ to $\mathbf{b}$); $\mathbf{b} \times \mathbf{a} = -\,\mathbf{a} \times \mathbf{b}$`,
        alt: "Vectors a and b lying in a shaded plane, with a cross b pointing up perpendicular to the plane and b cross a pointing down, dashed, in the opposite direction.",
      },
    },
    {
      title: String.raw`Areas`,
      body: String.raw`| Shape | Area |
| --- | --- |
| Parallelogram with adjacent sides $\mathbf{a}$, $\mathbf{b}$ | $|\mathbf{a} \times \mathbf{b}|$ |
| Triangle $ABC$ | $\tfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$ |

The two vectors must start from the **same vertex**. Equating $\tfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$ with $\tfrac{1}{2} \times AB \times h$ gives the perpendicular distance $h$ from $C$ to $AB$.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.4],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1, 1], [6.6, 1], [8.8, 4.6], [3.2, 4.6]], fill: true, tone: "accent" },
          ],
          segments: [
            { from: [3.2, 4.6], to: [3.2, 1], dashed: true, tone: "ink", thin: true },
            { from: [1, 1], to: [6.6, 1], arrow: true, label: "a", pos: "s" },
            { from: [1, 1], to: [3.2, 4.6], arrow: true, label: "b", pos: "w" },
          ],
          rightAngles: [
            { at: [3.2, 1], a: [0, 1], b: [1, 0], size: 0.32 },
          ],
          angles: [
            { at: [1, 1], from: [6.6, 1], to: [3.2, 4.6], r: 0.8, label: "θ" },
          ],
          labels: [
            { x: 3.2, y: 2.98, text: "|b| sin θ", pos: "e", style: "italic" },
            { x: 6.9, y: 2.3, text: "area = |a × b|", pos: "c" },
          ],
          caption: String.raw`Parallelogram: base $|\mathbf{a}|$, height $|\mathbf{b}|\sin\theta$, area $|\mathbf{a} \times \mathbf{b}|$`,
          alt: "Parallelogram with adjacent sides a and b at angle theta; the perpendicular height is |b| sin theta, so the area is the magnitude of a cross b.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.4],
          equal: true,
          axes: false,
          polygons: [
            { points: [[1, 1], [9, 1.8], [3.8, 4.8]], fill: true, tone: "accent" },
          ],
          segments: [
            { from: [3.8, 4.8], to: [4.15, 1.31], dashed: true, tone: "ink", thin: true, label: "h", pos: "e", style: "italic" },
            { from: [1, 1], to: [9, 1.8], arrow: true, label: "AB", pos: "s", style: "plain" },
            { from: [1, 1], to: [3.8, 4.8], arrow: true, label: "AC", pos: "nw", style: "plain" },
          ],
          rightAngles: [
            { at: [4.15, 1.31], a: [-0.35, 3.49], b: [8, 0.8], size: 0.32 },
          ],
          labels: [
            { x: 1, y: 1, text: "A", pos: "sw" },
            { x: 9, y: 1.8, text: "B", pos: "e" },
            { x: 3.8, y: 4.8, text: "C", pos: "n" },
          ],
          caption: String.raw`Triangle: area $= \tfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \tfrac{1}{2} \times AB \times h$`,
          alt: "Triangle ABC with vectors AB and AC from the common vertex A and the perpendicular height h from C to AB.",
        },
      ],
    },
    {
      title: String.raw`Geometrical meaning of $\mathbf{a} \cdot \hat{\mathbf{n}}$`,
      body: String.raw`$|\mathbf{a} \cdot \hat{\mathbf{n}}|$ is the **length of the projection** of $\mathbf{a}$ onto a line parallel to $\hat{\mathbf{n}}$.

- The **projection vector** (vector component of $\mathbf{a}$ along $\hat{\mathbf{n}}$) is $(\mathbf{a} \cdot \hat{\mathbf{n}})\hat{\mathbf{n}}$; it points along $\hat{\mathbf{n}}$ or opposite to it according to the sign of $\mathbf{a} \cdot \hat{\mathbf{n}}$.
- If $N$ is the foot of the perpendicular from $A$ to the line through $O$ in direction $\hat{\mathbf{n}}$, then $\overrightarrow{ON} = (\mathbf{a} \cdot \hat{\mathbf{n}})\hat{\mathbf{n}}$.
- Remember to **divide by $|\mathbf{n}|$** if the given direction is not a unit vector.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.3, 1.6], to: [9.7, 1.6], tone: "ink", thin: true },
            { from: [6.3, 4.8], to: [6.3, 1.6], dashed: true, tone: "muted" },
            { from: [1.8, 1.6], to: [6.3, 1.6], arrow: true, tone: "good", label: "(a · n̂) n̂", pos: "s", style: "bold" },
            { from: [1.8, 1.6], to: [6.3, 4.8], arrow: true, label: "a", pos: "nw" },
            { from: [8.1, 1.6], to: [9.3, 1.6], arrow: true, tone: "ink", label: "n̂", pos: "n" },
          ],
          rightAngles: [
            { at: [6.3, 1.6], a: [0, 1], b: [-1, 0], size: 0.3 },
          ],
          angles: [
            { at: [1.8, 1.6], from: [3.8, 1.6], to: [6.3, 4.8], r: 1, label: "θ" },
          ],
          points: [
            { x: 1.8, y: 1.6, label: "O", pos: "sw" },
            { x: 6.3, y: 1.6, label: "N", pos: "se" },
          ],
          labels: [
            { x: 6.3, y: 4.8, text: "A", pos: "n" },
          ],
          caption: String.raw`$\mathbf{a} \cdot \hat{\mathbf{n}} > 0$: projection along $\hat{\mathbf{n}}$, length $|\mathbf{a} \cdot \hat{\mathbf{n}}| = ON$`,
          alt: "Vector a from O at an acute angle theta to a line in the direction of the unit vector n-hat. The foot of the perpendicular from A is N, and ON is the projection vector (a dot n-hat) n-hat.",
        },
        {
          type: "plot",
          x: [0, 10],
          y: [0, 5.6],
          equal: true,
          axes: false,
          segments: [
            { from: [0.3, 1.6], to: [9.7, 1.6], tone: "ink", thin: true },
            { from: [2.6, 4.8], to: [2.6, 1.6], dashed: true, tone: "muted" },
            { from: [6.6, 1.6], to: [2.6, 1.6], arrow: true, tone: "good", label: "(a · n̂) n̂", pos: "s", style: "bold" },
            { from: [6.6, 1.6], to: [2.6, 4.8], arrow: true, label: "a", pos: "sw" },
            { from: [8.1, 1.6], to: [9.3, 1.6], arrow: true, tone: "ink", label: "n̂", pos: "n" },
          ],
          rightAngles: [
            { at: [2.6, 1.6], a: [0, 1], b: [1, 0], size: 0.3 },
          ],
          angles: [
            { at: [6.6, 1.6], from: [8.6, 1.6], to: [2.6, 4.8], r: 0.7, label: "θ" },
          ],
          points: [
            { x: 6.6, y: 1.6, label: "O", pos: "se" },
            { x: 2.6, y: 1.6, label: "N", pos: "sw" },
          ],
          labels: [
            { x: 2.6, y: 4.8, text: "A", pos: "n" },
          ],
          caption: String.raw`$\mathbf{a} \cdot \hat{\mathbf{n}} < 0$: projection points opposite to $\hat{\mathbf{n}}$`,
          alt: "Vector a at an obtuse angle theta to n-hat; the projection vector from O to the foot N points in the direction opposite to n-hat.",
        },
      ],
    },
    {
      title: String.raw`Geometrical meaning of $\mathbf{a} \times \hat{\mathbf{n}}$`,
      body: String.raw`$|\mathbf{a} \times \hat{\mathbf{n}}| = |\mathbf{a}|\sin\theta$ is the **length of the component of $\mathbf{a}$ perpendicular to $\hat{\mathbf{n}}$**, i.e. the perpendicular distance from $A$ to the line through $O$ parallel to $\hat{\mathbf{n}}$.

Together with the projection, Pythagoras gives
$$|\mathbf{a} \cdot \hat{\mathbf{n}}|^2 + |\mathbf{a} \times \hat{\mathbf{n}}|^2 = |\mathbf{a}|^2,$$
a useful check. In interpretation questions, name the specific points and line, e.g. "the perpendicular distance from $A$ to the line $OB$".`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 5.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.3, 1.4], to: [9.7, 1.4], tone: "ink", thin: true },
          { from: [2.2, 1.4], to: [6.6, 1.4], tone: "good", thin: true },
          { from: [6.6, 4.8], to: [6.6, 1.4], tone: "warn" },
          { from: [2.2, 1.4], to: [6.6, 4.8], arrow: true, label: "a", pos: "nw" },
          { from: [2.2, 0.85], to: [6.6, 0.85], tone: "good", thin: true, arrow: true, arrowStart: true, label: "|a · n̂|", pos: "s", style: "plain" },
          { from: [7.05, 4.8], to: [7.05, 1.4], tone: "warn", thin: true, arrow: true, arrowStart: true, label: "|a × n̂| = |a| sin θ", pos: "e", style: "plain" },
          { from: [8.4, 1.4], to: [9.6, 1.4], arrow: true, tone: "ink", label: "n̂", pos: "s" },
        ],
        rightAngles: [
          { at: [6.6, 1.4], a: [0, 1], b: [-1, 0], size: 0.3 },
        ],
        angles: [
          { at: [2.2, 1.4], from: [4.2, 1.4], to: [6.6, 4.8], r: 1, label: "θ" },
        ],
        points: [
          { x: 2.2, y: 1.4, label: "O", pos: "sw" },
          { x: 6.6, y: 1.4, label: "N", pos: "se" },
        ],
        labels: [
          { x: 6.6, y: 4.8, text: "A", pos: "n" },
        ],
        caption: String.raw`Right-angled triangle $ONA$: $|\mathbf{a} \cdot \hat{\mathbf{n}}|^2 + |\mathbf{a} \times \hat{\mathbf{n}}|^2 = |\mathbf{a}|^2$`,
        alt: "Vector a from O to A at angle theta to the line through O in the direction n-hat. The perpendicular distance AN equals |a cross n-hat| = |a| sin theta, and ON equals |a dot n-hat|.",
      },
    },
    {
      title: String.raw`Deductions with abstract vectors`,
      body: String.raw`You **cannot divide** by a vector or "cancel" it. Instead, collect terms:

- $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c} \Rightarrow \mathbf{a} \times (\mathbf{b} - \mathbf{c}) = \mathbf{0} \Rightarrow \mathbf{b} - \mathbf{c} = \lambda\mathbf{a}$ (given $\mathbf{a} \ne \mathbf{0}$ and $\mathbf{b} \ne \mathbf{c}$), i.e. $\mathbf{a}$ is parallel to $\mathbf{b} - \mathbf{c}$.
- $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c} \Rightarrow \mathbf{a} \cdot (\mathbf{b} - \mathbf{c}) = 0 \Rightarrow \mathbf{a} \perp (\mathbf{b} - \mathbf{c})$.
- $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) = |\mathbf{a}|^2 - |\mathbf{b}|^2$.

State the conditions you use (non-zero, non-parallel) — they carry marks.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6.6],
        equal: true,
        axes: false,
        segments: [
          { from: [1, 1], to: [3.2, 1.6], arrow: true, tone: "warn", label: "a", pos: "s" },
          { from: [1, 1], to: [8.68, 6.04], arrow: true, label: "b", pos: "se", labelAt: [5.22, 3.77] },
          { from: [1, 1], to: [3.4, 4.6], arrow: true, label: "c", pos: "w" },
          { from: [3.4, 4.6], to: [8.68, 6.04], arrow: true, tone: "good", label: "b − c = λa", pos: "n", labelAt: [5.78, 5.25] },
        ],
        points: [
          { x: 1, y: 1, label: "O", pos: "sw" },
        ],
        caption: String.raw`$\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$ does **not** give $\mathbf{b} = \mathbf{c}$: only that $\mathbf{b} - \mathbf{c}$ is parallel to $\mathbf{a}$`,
        alt: "Vectors b and c from O, with the vector from the tip of c to the tip of b, b minus c, parallel to a.",
      },
    },
  ],
  archetypes: [
    {
      id: "3.2-angle-between-vectors",
      name: String.raw`Angle between two vectors`,
      tests: String.raw`Using the scalar product to find an angle in a triangle or with a coordinate axis, or to find an unknown component given an angle (with rejection of a false root).`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 2, 0)$, $(3, 1, 2)$ and $(-1, 4, 1)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find angle $BAC$, giving your answer in degrees correct to 1 decimal place.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the exact value of $\sin BAC$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the angle between $\overrightarrow{AB}$ and the positive $x$-axis.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The vectors $\mathbf{a}$ and $\mathbf{b}$ are given by $\mathbf{a} = \mathbf{i} + \mathbf{k}$ and $\mathbf{b} = p\mathbf{i} + \mathbf{j} + \mathbf{k}$, where $p$ is a real constant. Given that the angle between $\mathbf{a}$ and $\mathbf{b}$ is $60^\circ$, find the value of $p$, explaining clearly why any other value is rejected.`,
          marks: 4,
          calculator: false,
        },
      ],
    },
    {
      id: "3.2-perpendicularity",
      name: String.raw`Perpendicularity and magnitudes using the scalar product`,
      tests: String.raw`Applying $\mathbf{a} \cdot \mathbf{b} = 0$ to find unknowns, and expanding $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b})$ to find angles and magnitudes when only $|\mathbf{a}|$, $|\mathbf{b}|$ and a perpendicularity condition are known.`,
      questions: [
        {
          stem: String.raw`The vectors $\mathbf{a}$ and $\mathbf{b}$ are such that $|\mathbf{a}| = 3$ and $|\mathbf{b}| = 2$. It is given that $\mathbf{a} + \mathbf{b}$ is perpendicular to $\mathbf{a} - 4\mathbf{b}$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\mathbf{a} \cdot \mathbf{b} = -\frac{7}{3}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the angle between $\mathbf{a}$ and $\mathbf{b}$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the exact value of $|\mathbf{a} + \mathbf{b}|$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 2, 3)$, $(2, 0, 1)$ and $(t, 1, 2)$ respectively, where $t$ is a constant.`,
          parts: [
            { label: "(i)", text: String.raw`Given that angle $ABC = 90^\circ$, find the value of $t$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the set of values of $t$ for which angle $ABC$ is obtuse.`, marks: 2 },
          ],
          calculator: false,
        },
      ],
    },
    {
      id: "3.2-vector-product-area",
      name: String.raw`Vector product: normals and areas`,
      tests: String.raw`Computing $\mathbf{a} \times \mathbf{b}$ to obtain a perpendicular vector, the area of a triangle or parallelogram, and hence a perpendicular height; includes abstract area ratios.`,
      questions: [
        {
          stem: String.raw`The points $A$, $B$ and $C$ have coordinates $(1, 0, 2)$, $(3, 1, 0)$ and $(2, -1, 4)$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{AB} \times \overrightarrow{AC}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find a unit vector perpendicular to the plane containing $A$, $B$ and $C$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Find the exact area of triangle $ABC$.`, marks: 2 },
            { label: "(iv)", text: String.raw`Hence find the exact perpendicular distance from $C$ to the line $AB$.`, marks: 2 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, where $\mathbf{a}$ and $\mathbf{b}$ are non-zero and non-parallel. The point $P$ lies on $AB$ such that $AP : PB = 1 : 2$, and the point $Q$ is such that $\overrightarrow{OQ} = 3\mathbf{b}$, as shown in the diagram.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0.8, 0.8], [4.43, 1.25], [7.1, 5.45]], fill: true, tone: "warn" },
            ],
            segments: [
              { from: [5.2, 0.7], to: [2.9, 2.35], tone: "ink" },
              { from: [2.9, 2.35], to: [7.1, 5.45], tone: "ink" },
              { from: [0.8, 0.8], to: [5.2, 0.7], arrow: true, label: "a", pos: "s" },
              { from: [0.8, 0.8], to: [2.9, 2.35], arrow: true, label: "b", pos: "nw" },
            ],
            points: [
              { x: 0.8, y: 0.8, label: "O", pos: "sw" },
              { x: 4.43, y: 1.25, label: "P", pos: "e" },
              { x: 7.1, y: 5.45, label: "Q", pos: "n" },
            ],
            labels: [
              { x: 5.2, y: 0.7, text: "A", pos: "e" },
              { x: 2.9, y: 2.35, text: "B", pos: "nw" },
            ],
            alt: "Triangle OAB with P on AB one third of the way from A, and Q on OB produced with OQ three times OB; triangle OPQ is shaded.",
          },
          parts: [
            { label: "(i)", text: String.raw`Find $\overrightarrow{OP}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Show that the area of triangle $OPQ$ is $k|\mathbf{a} \times \mathbf{b}|$, where $k$ is a constant to be found.`, marks: 3 },
            { label: "(iii)", text: String.raw`Hence find the ratio of the area of triangle $OPQ$ to the area of triangle $OAB$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "3.2-projection-geometric-meaning",
      name: String.raw`Projections: geometrical meaning of $\mathbf{a} \cdot \hat{\mathbf{n}}$ and $\mathbf{a} \times \hat{\mathbf{n}}$`,
      tests: String.raw`Finding the length of projection, the projection vector, and the perpendicular component, and giving a precise geometrical interpretation of $|\mathbf{a} \cdot \hat{\mathbf{n}}|$ or $|\mathbf{a} \times \hat{\mathbf{n}}|$ in context.`,
      questions: [
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a} = 6\mathbf{i} + 6\mathbf{k}$ and $\mathbf{b} = \mathbf{i} + 2\mathbf{j} + 2\mathbf{k}$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Find the length of projection of $\mathbf{a}$ onto $\mathbf{b}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the position vector of the foot of the perpendicular from $A$ to the line $OB$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find $|\mathbf{a} \times \hat{\mathbf{b}}|$ and give a geometrical interpretation of this value.`, marks: 3 },
          ],
          calculator: false,
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $\mathbf{b}$ respectively, where $\mathbf{b}$ is a unit vector and $\mathbf{a}$ is not parallel to $\mathbf{b}$. The point $N$ lies on the line $OB$ such that $AN$ is perpendicular to $OB$, as shown in the diagram.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 5.6],
            equal: true,
            axes: false,
            segments: [
              { from: [1, 1.2], to: [9.34, 3.28], tone: "ink", thin: true },
              { from: [5.4, 4.9], to: [6.01, 2.45], tone: "ink" },
              { from: [1, 1.2], to: [5.4, 4.9], arrow: true, label: "a", pos: "nw" },
              { from: [1, 1.2], to: [2.84, 1.66], arrow: true, label: "b", pos: "s", labelAt: [1.92, 1.43] },
            ],
            rightAngles: [
              { at: [6.01, 2.45], a: [-0.61, 2.45], b: [-0.97, -0.24], size: 0.32 },
            ],
            points: [
              { x: 1, y: 1.2, label: "O", pos: "sw" },
              { x: 6.01, y: 2.45, label: "N", pos: "se" },
            ],
            labels: [
              { x: 5.4, y: 4.9, text: "A", pos: "n" },
              { x: 2.84, y: 1.66, text: "B", pos: "se" },
            ],
            alt: "Origin O with position vector a to the point A and unit vector b to the point B on a line through O; N is the foot of the perpendicular from A to the line OB.",
          },
          parts: [
            { label: "(i)", text: String.raw`Show that $\overrightarrow{ON} = (\mathbf{a} \cdot \mathbf{b})\mathbf{b}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Give a geometrical meaning of $|\mathbf{a} \times \mathbf{b}|$ in terms of the points $O$, $A$, $B$ and $N$. Hence show that the area of triangle $OAN$ is $\frac{1}{2}|\mathbf{a} \cdot \mathbf{b}|\,|\mathbf{a} \times \mathbf{b}|$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Given that $\mathbf{a} = 2\mathbf{i} + \mathbf{j} - 2\mathbf{k}$ and $\mathbf{b} = \frac{1}{5}(3\mathbf{j} + 4\mathbf{k})$, find the exact area of triangle $OAN$.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "3.2-deducing-relationships",
      name: String.raw`Deducing relationships between abstract vectors`,
      tests: String.raw`Manipulating scalar and vector products of unspecified vectors (no "cancelling") to deduce parallel or perpendicular relationships, collinearity, or equality of vectors.`,
      questions: [
        {
          stem: String.raw`The non-zero vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ are such that $\mathbf{b} \ne \mathbf{c}$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$, show that $\mathbf{b} - \mathbf{c} = \lambda\mathbf{a}$ for some scalar $\lambda$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that it is not possible to have both $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$ and $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c}$.`, marks: 3 },
            { label: "(iii)", text: String.raw`Simplify $(\mathbf{a} - \mathbf{b}) \times (\mathbf{a} + \mathbf{b})$, and hence state the relationship between the area of a parallelogram with adjacent sides $\mathbf{a}$ and $\mathbf{b}$ and the area of a parallelogram whose adjacent sides are its diagonals.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Relative to the origin $O$, the points $A$, $B$ and $C$ have position vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ respectively.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $(\mathbf{b} - \mathbf{a}) \times (\mathbf{c} - \mathbf{a}) = \mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Give a geometrical interpretation of $|\mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a}|$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Given that $\mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{c} + \mathbf{c} \times \mathbf{a} = \mathbf{0}$, where $A$, $B$ and $C$ are distinct points, what can be deduced about $A$, $B$ and $C$? Justify your answer.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "3.2-geometric-proofs",
      name: String.raw`Geometric proofs using the scalar product`,
      tests: String.raw`Proving geometric results (angle in a semicircle, diagonals of a rhombus, squares) by showing a scalar product is zero, using $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$.`,
      questions: [
        {
          stem: String.raw`The diagram shows a circle with centre $O$ and diameter $AB$. Relative to $O$, the points $A$ and $B$ have position vectors $\mathbf{a}$ and $-\mathbf{a}$ respectively. The point $P$, distinct from $A$ and $B$, lies on the circle and has position vector $\mathbf{p}$.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            circles: [
              { c: [5, 3], r: 2.5, tone: "muted" },
            ],
            segments: [
              { from: [2.65, 2.14], to: [4.23, 5.38], tone: "ink", thin: true },
              { from: [7.35, 3.86], to: [4.23, 5.38], tone: "ink", thin: true },
              { from: [5, 3], to: [2.65, 2.14], arrow: true, label: "a", pos: "s" },
              { from: [5, 3], to: [7.35, 3.86], arrow: true, label: "−a", pos: "s" },
              { from: [5, 3], to: [4.23, 5.38], arrow: true, label: "p", pos: "e", labelAt: [4.58, 4.31] },
            ],
            points: [
              { x: 5, y: 3, label: "O", pos: "s" },
            ],
            labels: [
              { x: 2.65, y: 2.14, text: "A", pos: "w" },
              { x: 7.35, y: 3.86, text: "B", pos: "e" },
              { x: 4.23, y: 5.38, text: "P", pos: "n" },
            ],
            alt: "Circle with centre O and diameter AB; a point P on the circle is joined to A and B. Position vectors a, minus a and p are drawn from O.",
          },
          parts: [
            { label: "(i)", text: String.raw`Write down the relationship between $|\mathbf{p}|$ and $|\mathbf{a}|$.`, marks: 1 },
            { label: "(ii)", text: String.raw`By considering $\overrightarrow{AP} \cdot \overrightarrow{BP}$, prove that angle $APB$ is a right angle.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`$OABC$ is a parallelogram with $\overrightarrow{OA} = \mathbf{a}$ and $\overrightarrow{OC} = \mathbf{c}$.`,
          parts: [
            { label: "(i)", text: String.raw`Given that $OABC$ is a rhombus, prove that its diagonals are perpendicular.`, marks: 3 },
            { label: "(ii)", text: String.raw`Given instead that the diagonals of $OABC$ are equal in length, show that $\mathbf{a} \cdot \mathbf{c} = 0$, and state what type of quadrilateral $OABC$ must be.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
