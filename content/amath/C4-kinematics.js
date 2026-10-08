H2.addTopic({
  id: "C4",
  title: "Kinematics",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Part of syllabus item C1 (Differentiation and integration): using differentiation and integration for the displacement, velocity and acceleration of a particle moving in a straight line.`,
  syllabus: {
    include: [
      String.raw`application of differentiation and integration to problems involving displacement, velocity and acceleration of a particle moving in a straight line`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Displacement, velocity and acceleration`,
      body: String.raw`A particle moves along a straight line through a fixed point $O$. At time $t$ seconds:

- **displacement** $s$ m is its position measured from $O$ (positive on one side, negative on the other);
- **velocity** $v = \dfrac{\dd s}{\dd t}$ m/s;
- **acceleration** $a = \dfrac{\dd v}{\dd t} = \dfrac{\dd^2 s}{\dd t^2}$ m/s².

Going the other way, $v = \displaystyle\int a\,\dd t$ and $s = \displaystyle\int v\,\dd t$. These relations are not on the formula sheet.`,
      figure: {
        type: "plot",
        x: [0, 10], y: [0, 3.2], equal: true, axes: false,
        polygons: [
          { points: [[0.4, 1.0], [2.0, 1.0], [2.0, 2.2], [0.4, 2.2]], fill: true, tone: "accent" },
          { points: [[4.2, 1.0], [5.8, 1.0], [5.8, 2.2], [4.2, 2.2]], fill: true, tone: "accent" },
          { points: [[8.0, 1.0], [9.6, 1.0], [9.6, 2.2], [8.0, 2.2]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [2.1, 1.9], to: [4.1, 1.9], arrow: true, tone: "good" },
          { from: [5.9, 1.9], to: [7.9, 1.9], arrow: true, tone: "good" },
          { from: [4.1, 1.3], to: [2.1, 1.3], arrow: true, tone: "warn" },
          { from: [7.9, 1.3], to: [5.9, 1.3], arrow: true, tone: "warn" },
        ],
        labels: [
          { x: 1.2, y: 1.6, text: "s", style: "italic" },
          { x: 5.0, y: 1.6, text: "v", style: "italic" },
          { x: 8.8, y: 1.6, text: "a", style: "italic" },
          { x: 3.1, y: 2.2, text: "differentiate", pos: "n", style: "small", tone: "good" },
          { x: 6.9, y: 2.2, text: "differentiate", pos: "n", style: "small", tone: "good" },
          { x: 3.1, y: 1.0, text: "integrate", pos: "s", style: "small", tone: "warn" },
          { x: 6.9, y: 1.0, text: "integrate", pos: "s", style: "small", tone: "warn" },
        ],
        caption: String.raw`Differentiate with respect to $t$ to go right; integrate (and find the constant) to go left.`,
        alt: "Three boxes s, v and a in a row. Arrows pointing right are labelled differentiate; arrows pointing left are labelled integrate.",
      },
    },
    {
      title: String.raw`Key words and what they mean`,
      body: String.raw`| The question says | Write |
| --- | --- |
| "initially", "at the start" | $t = 0$ |
| "passes through $O$", "returns to $O$" | $s = 0$ |
| "instantaneously at rest", "comes to rest" | $v = 0$ |
| "starts from rest" | $v = 0$ when $t = 0$ |
| "maximum / minimum velocity" | $a = 0$ |
| "moving with constant velocity" | $a = 0$ |
| "speed" | the size of $v$, ignoring the sign |

Velocity has a direction: $v > 0$ means moving in the positive direction (away from $O$ on the positive side), $v < 0$ means moving in the negative direction.`,
      figure: {
        type: "plot",
        x: [-3.4, 6.4], y: [-0.9, 1.4], equal: true, axes: false,
        segments: [
          { from: [-3.2, 0], to: [6.2, 0], tone: "ink", thin: true },
          { from: [2.6, 0.55], to: [4.4, 0.55], arrow: true, tone: "good", label: "v > 0", pos: "n", style: "small" },
          { from: [-0.6, 0.55], to: [-2.4, 0.55], arrow: true, tone: "warn", label: "v < 0", pos: "n", style: "small" },
        ],
        points: [{ x: 0, y: 0, label: "O", pos: "s" }, { x: 3.5, y: 0, label: "P", pos: "s" }],
        labels: [
          { x: 5.2, y: -0.45, text: "s > 0", style: "small" },
          { x: -2.2, y: -0.45, text: "s < 0", style: "small" },
        ],
        caption: String.raw`Displacement is measured from $O$; the sign of $v$ gives the direction of motion.`,
        alt: "A horizontal line with the fixed point O and a particle P to the right of O. To the right of O the displacement is positive and to the left negative. An arrow to the right is labelled v > 0 and an arrow to the left is labelled v < 0.",
      },
    },
    {
      title: String.raw`Integrating with initial conditions`,
      body: String.raw`Each integration gives a constant. Find it straight away from the information given.

- "The particle passes through $O$ when $t = 0$" gives $s = 0$ at $t = 0$.
- "Its initial velocity is $5$ m/s" gives $v = 5$ at $t = 0$.
- With exponentials, the constant is **not** zero just because the particle starts at $O$: $s = \int 6\ee^{-2t}\,\dd t = -3\ee^{-2t} + c$, and $s = 0$ at $t = 0$ gives $c = 3$.

Give answers with units: m, m/s, m/s².`,
    },
    {
      title: String.raw`Changing direction`,
      body: String.raw`A particle **changes direction** at an instant when $v = 0$ **and** $v$ changes sign.

- Solve $v = 0$ to find when the particle is instantaneously at rest.
- Check the sign of $v$ just before and just after. If $v = (t - 3)^2$, the particle is at rest at $t = 3$ but $v \ge 0$ on both sides, so it does **not** change direction.`,
      figure: [
        {
          type: "plot",
          x: [-0.5, 4.6], y: [-2.6, 3.4], height: 200, axisLabels: ["t", "v"],
          curves: [{ fn: "x => (x - 1)*(3 - x)", domain: [0, 4.3] }],
          points: [{ x: 1, y: 0 }, { x: 3, y: 0 }],
          labels: [{ x: 2, y: 1.5, text: "v > 0", style: "small", tone: "good" }, { x: 4.1, y: -1, text: "v < 0", style: "small", tone: "warn" }],
          caption: String.raw`$v$ crosses zero: direction changes.`,
          alt: "Velocity–time graph crossing the t-axis twice. At each crossing the velocity changes sign, so the particle changes direction.",
        },
        {
          type: "plot",
          x: [-0.5, 4.6], y: [-2.6, 3.4], height: 200, axisLabels: ["t", "v"],
          curves: [{ fn: "x => 0.8*(x - 2)*(x - 2)", domain: [0, 4.2] }],
          points: [{ x: 2, y: 0 }],
          labels: [{ x: 2, y: -0.8, text: "v = 0 but v ≥ 0 on both sides", style: "small" }],
          caption: String.raw`$v$ touches zero: no change of direction.`,
          alt: "Velocity–time graph touching the t-axis at one point and staying above it. The particle stops for an instant but keeps moving in the same direction.",
        },
      ],
    },
    {
      title: String.raw`Distance travelled is not displacement`,
      body: String.raw`**Displacement** is the change in position. **Distance travelled** is the total length of the path, counting every part as positive.

To find the distance travelled from $t = 0$ to $t = T$:
1. Find the times when $v = 0$ (and the particle changes direction) between $0$ and $T$.
2. Find $s$ at $t = 0$, at each of these times and at $t = T$.
3. Add the sizes of the changes in $s$ between consecutive times.

A sketch of the path along the line (as in the diagram) prevents most mistakes.`,
      figure: {
        type: "plot",
        x: [-1.0, 5.4], y: [-0.9, 2.5], equal: true, axes: false,
        segments: [
          { from: [-0.6, 0], to: [5.2, 0], tone: "ink", thin: true },
          { from: [0, 0.4], to: [4, 0.4], arrow: true, tone: "accent" },
          { from: [4, 0.4], to: [4, 1.0], thin: true, tone: "muted" },
          { from: [4, 1.0], to: [0, 1.0], arrow: true, tone: "warn" },
          { from: [0, 1.0], to: [0, 1.6], thin: true, tone: "muted" },
          { from: [0, 1.6], to: [4, 1.6], arrow: true, tone: "accent" },
        ],
        points: [{ x: 0, y: 0, label: "O", pos: "s" }, { x: 4, y: 0, label: "4", pos: "s" }],
        labels: [
          { x: 2, y: 0.4, text: "t = 0 to 1", pos: "n", style: "small" },
          { x: 2, y: 1.0, text: "t = 1 to 3", pos: "n", style: "small" },
          { x: 2, y: 1.6, text: "t = 3 to 4", pos: "n", style: "small" },
        ],
        caption: String.raw`$s = t^3 - 6t^2 + 9t$: at rest at $t = 1$ ($s = 4$) and $t = 3$ ($s = 0$). In the first 4 s the displacement is $4$ m but the distance travelled is $4 + 4 + 4 = 12$ m.`,
        alt: "A path diagram along a line from O. The particle moves from O to the point 4, turns back to O, then moves out to 4 again. Each leg is labelled with its time interval.",
      },
    },
    {
      title: String.raw`Greatest velocity and velocity–time graphs`,
      body: String.raw`- **Maximum or minimum velocity**: solve $a = \dfrac{\dd v}{\dd t} = 0$, then confirm with $\dfrac{\dd a}{\dd t}$ (second derivative test on $v$). Also check end-points of the time interval.
- On a velocity–time graph, the **gradient** is the acceleration and the **area** between the graph and the $t$-axis gives distance travelled; area below the axis is motion in the negative direction.
- So $\displaystyle\int_{t_1}^{t_2} v\,\dd t$ is the **displacement** between $t_1$ and $t_2$. For distance, split at the times when $v = 0$ and add the sizes.
- An acceleration that is always negative (e.g. $a = -4\ee^{-0.2t}$) means the velocity is always decreasing — it does not mean the particle is moving backwards.`,
      figure: {
        type: "plot",
        x: [-0.6, 7.8], y: [-21, 17], height: 240, axisLabels: ["t", "v"],
        shade: [
          { upper: "x => 10 + 3*x - x*x", from: 0, to: 5, tone: "accent" },
          { upper: "x => 0", lower: "x => 10 + 3*x - x*x", from: 5, to: 7, tone: "warn" },
        ],
        curves: [{ fn: "x => 10 + 3*x - x*x", domain: [0, 7.3] }],
        segments: [{ from: [0.5, 12.25], to: [2.5, 12.25], tone: "good", thin: true }],
        points: [{ x: 1.5, y: 12.25, label: "max v: a = 0", pos: "n" }],
        labels: [
          { x: 2.5, y: 5, text: "moving forwards", style: "small" },
          { x: 5.6, y: -9, text: "moving back", pos: "w", style: "small", tone: "warn" },
        ],
        caption: String.raw`At the maximum velocity the tangent to the $v$–$t$ graph is horizontal ($a = 0$). Shaded areas above and below the axis are distances in opposite directions.`,
        alt: "A velocity–time graph shaped like an upside-down parabola, with its highest point marked where the acceleration is zero. The region above the t-axis is shaded as forward motion and the region below the axis after the graph crosses zero is shaded as backward motion.",
      },
    },
  ],
  archetypes: [
    {
      id: "C4-from-displacement",
      name: String.raw`Given displacement: find velocity, acceleration and distance`,
      tests: String.raw`Differentiating $s$ to get $v$ and $a$, finding when the particle is at rest, and finding the distance travelled by splitting at the turning points.`,
      questions: [
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its displacement from $O$ is $s$ m, where $s = t^3 - 9t^2 + 24t$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the initial velocity of the particle.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the values of $t$ when the particle is instantaneously at rest.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the acceleration of the particle when $t = 5$.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the total distance travelled by the particle in the first 5 seconds.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C4-from-velocity",
      name: String.raw`Given velocity: find displacement and distance`,
      tests: String.raw`Integrating $v$ with the initial condition to find $s$, differentiating to find $a$, and dealing with exponential models where the time of rest needs logarithms.`,
      questions: [
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its velocity is $v$ m/s, where $v = 10\ee^{-0.5t} - 2$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the initial velocity of the particle.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the value of $t$ when the particle is instantaneously at rest.`, marks: 2 },
            { label: "(c)", text: String.raw`Find an expression for the acceleration of the particle and explain why the acceleration is always negative.`, marks: 2 },
            { label: "(d)", text: String.raw`Find the displacement of the particle from $O$ when it is instantaneously at rest.`, marks: 3 },
            { label: "(e)", text: String.raw`Find the total distance travelled by the particle in the first 5 seconds.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C4-from-acceleration",
      name: String.raw`Given acceleration: integrate twice`,
      tests: String.raw`Integrating $a$ to get $v$ and then $s$, using the initial velocity and starting position to find each constant.`,
      questions: [
        {
          stem: String.raw`A particle starts from a fixed point $O$ with a velocity of $12$ m/s and moves in a straight line. Its acceleration, $a$ m/s², $t$ seconds after leaving $O$ is given by $a = 2t - 8$.`,
          parts: [
            { label: "(a)", text: String.raw`Find an expression for the velocity of the particle in terms of $t$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the values of $t$ when the particle is instantaneously at rest.`, marks: 2 },
            { label: "(c)", text: String.raw`Show that the particle returns to $O$ when $t = 6$.`, marks: 3 },
            { label: "(d)", text: String.raw`Find the total distance travelled by the particle in the first 6 seconds.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its acceleration is $a$ m/s², where $a = -\ee^{-\frac{1}{2}t}$. The particle passes through $O$ with a velocity of $4$ m/s.`,
          parts: [
            { label: "(a)", text: String.raw`Show that the velocity, $v$ m/s, of the particle is given by $v = 2 + 2\ee^{-\frac{1}{2}t}$.`, marks: 3 },
            { label: "(b)", text: String.raw`Explain why the particle never comes to rest, and state the value that $v$ approaches as $t$ becomes very large.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the distance travelled by the particle in the first 4 seconds.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C4-distance-direction",
      name: String.raw`Direction of motion, distance and displacement`,
      tests: String.raw`Deciding whether the particle really changes direction when $v = 0$, and separating distance travelled from displacement over an interval.`,
      questions: [
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its velocity is $v$ m/s, where $v = t^2 - 4t + 4$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the value of $t$ when the particle is instantaneously at rest.`, marks: 1 },
            { label: "(b)", text: String.raw`Explain why the particle does not change its direction of motion.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the distance travelled by the particle in the first 4 seconds.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its velocity is $v$ m/s, where $v = t^2 - 6t + 8$. The diagram shows the velocity–time graph for $0 \le t \le 5$.`,
          figure: {
            type: "plot",
            x: [-0.5, 5.8], y: [-2, 9.2], height: 220, axisLabels: ["t", "v"],
            curves: [{ fn: "x => x*x - 6*x + 8", domain: [0, 5] }],
            segments: [{ from: [5, 3], to: [5, 0], dashed: true, thin: true, tone: "muted" }],
            xTicks: [{ x: 5, label: "5" }],
            yTicks: [{ y: 8, label: "8" }],
            alt: "A velocity–time graph: an upward parabola starting at v = 8 when t = 0, dipping below the t-axis between two times, and rising again up to t = 5.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the values of $t$ when the particle is instantaneously at rest.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the displacement of the particle from $O$ when $t = 5$.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the total distance travelled by the particle in the first 5 seconds.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "C4-max-velocity",
      name: String.raw`Maximum velocity and trigonometric motion`,
      tests: String.raw`Using $a = 0$ to find the greatest velocity, and handling velocities given by trigonometric functions, with exact times in radians.`,
      questions: [
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its velocity is $v$ m/s, where $v = 12 + 4t - t^2$.`,
          parts: [
            { label: "(a)", text: String.raw`Find the maximum velocity of the particle.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the value of $t$ when the particle comes to instantaneous rest.`, marks: 2 },
            { label: "(c)", text: String.raw`Find the total distance travelled by the particle in the first 8 seconds.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`A particle moves in a straight line so that, $t$ seconds after passing through a fixed point $O$, its velocity is $v$ m/s, where $v = 1 + 2\cos 2t$, for $0 \le t \le \pi$.`,
          calculator: false,
          parts: [
            { label: "(a)", text: String.raw`Find the exact values of $t$ when the particle is instantaneously at rest.`, marks: 3 },
            { label: "(b)", text: String.raw`Find the acceleration of the particle at the first instant when it is at rest.`, marks: 2 },
            { label: "(c)", text: String.raw`Find an expression for the displacement of the particle from $O$ at time $t$.`, marks: 2 },
            { label: "(d)", text: String.raw`Show that the total distance travelled by the particle for $0 \le t \le \pi$ is $\left(\dfrac{\pi}{3} + 2\sqrt{3}\right)$ m.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "C4-two-particles",
      name: String.raw`Two particles on the same line`,
      tests: String.raw`Finding the displacement of each particle from the same point, then solving $s_P = s_Q$ for when they meet, and studying the distance between them.`,
      questions: [
        {
          stem: String.raw`Two particles $P$ and $Q$ pass through a fixed point $O$ at the same instant and move in the same direction along a straight line. $t$ seconds later, the velocity of $P$ is $(4t - t^2)$ m/s and $Q$ moves with a constant velocity of $3$ m/s.`,
          parts: [
            { label: "(a)", text: String.raw`Find expressions for the displacements of $P$ and $Q$ from $O$ at time $t$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the value of $t$ when $P$ and $Q$ next meet.`, marks: 2 },
            { label: "(c)", text: String.raw`Show that $P$ and $Q$ have the same velocity at the instant they meet.`, marks: 1 },
            { label: "(d)", text: String.raw`Find the greatest distance between $P$ and $Q$ before they meet again.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
