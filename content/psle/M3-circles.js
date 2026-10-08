(function () {
  // helpers: arc points (angles in degrees, anticlockwise from a0 to a1) and labels
  const arc = (cx, cy, r, a0, a1, n) => {
    const k = n || 48;
    return Array.from({ length: k + 1 }, (_, i) => {
      const t = ((a0 + ((a1 - a0) * i) / k) * Math.PI) / 180;
      return [cx + r * Math.cos(t), cy + r * Math.sin(t)];
    });
  };
  const curve = (cx, cy, r, a0, a1, extra) => Object.assign({ param: `t => [${cx} + ${r}*Math.cos(t), ${cy} + ${r}*Math.sin(t)]`, t: [(a0 * Math.PI) / 180, (a1 * Math.PI) / 180], tone: "ink" }, extra || {});
  const T = (x, y, text, pos) => ({ x, y, text, pos: pos || "c", style: "plain" });
  const V = (x, y, text, pos) => ({ x, y, text, pos, style: "italic" });
  const S = (x, y, text, pos, tone) => Object.assign({ x, y, text, pos: pos || "c", style: "small" }, tone ? { tone } : {});
  // a ring (centre 0,0) as borderless shading between radius r and R
  const ring = (r, R, tone) => {
    const up = (q) => `x => Math.sqrt(Math.max(0, ${q * q} - x*x))`, dn = (q) => `x => -Math.sqrt(Math.max(0, ${q * q} - x*x))`;
    return [
      { upper: up(R), lower: dn(R), from: -R, to: -r, tone },
      { upper: up(R), lower: up(r), from: -r, to: r, tone },
      { upper: dn(r), lower: dn(R), from: -r, to: r, tone },
      { upper: up(R), lower: dn(R), from: r, to: R, tone },
    ];
  };

  H2.addTopic({
    id: "M3",
    title: "Circles",
    paper: "Paper 1 / Paper 2",
    summary: String.raw`Radius, diameter, circumference and area of circles, semicircles and quarter circles, and the area and perimeter of composite figures and shaded regions made with them.`,
    syllabus: {
      include: [
        String.raw`P1: identifying and naming circles, half circles and quarter circles`,
        String.raw`P6: area and circumference of a circle`,
        String.raw`P6: finding the area and perimeter of a semicircle and a quarter circle`,
        String.raw`P6: finding the area and perimeter of composite figures made up of square, rectangle, triangle, semicircle and quarter circle`,
      ],
      exclude: [
        String.raw`parts of a circle other than semicircles and quarter circles (general arc length and sector area are in Secondary school)`,
        String.raw`any value of $\pi$ not stated in the question`,
      ],
    },
    concepts: [
      {
        title: String.raw`Parts of a circle`,
        body: String.raw`- The **centre** is the point in the middle. Every point on the circle is the same distance from it.
- The **radius** $r$ is a line from the centre to the circle.
- The **diameter** $d$ is a line across the circle **through the centre**. It is 2 radii: $d = 2 \times r$, so $r = d \div 2$.
- The **circumference** is the distance all the way round the circle (its perimeter).
- **Common mistake**: a question gives the diameter and you use it as the radius. Circle the word "radius" or "diameter" when you read the question.`,
        figure: {
          type: "plot",
          x: [-3.2, 3.2], y: [-2.5, 2.5], equal: true, axes: false,
          circles: [{ c: [0, 0], r: 2, fill: true, tone: "accent" }],
          segments: [
            { from: [-2, 0], to: [2, 0], tone: "warn" },
            { from: [0, 0], to: [1.414, 1.414], tone: "good" },
          ],
          points: [{ x: 0, y: 0 }],
          labels: [
            V(0, 0, "O", "s"),
            S(-1, 0, "diameter", "n", "warn"),
            S(0.85, 0.85, "radius", "nw", "good"),
            S(-1.45, -1.45, "circumference", "sw", "accent"),
          ],
          caption: String.raw`Centre $O$, radius and diameter`,
          alt: "A circle with centre O. A diameter goes across through O and a radius goes from O to the circle.",
        },
      },
      {
        title: String.raw`Circumference of a circle`,
        body: String.raw`$$\text{Circumference} = \pi \times d = 2 \times \pi \times r$$

- $\pi$ (pi) is a little more than 3. The circumference is just over **3 diameters**.
- Use the value of $\pi$ the question gives: $\pi = 3.14$, or $\pi = \frac{22}{7}$, or the $\pi$ button on the calculator (Paper 2 only).
- With $\frac{22}{7}$, look for a diameter or radius that is a multiple of 7, then cancel the 7 first. Example: $d = 21$ cm gives $\frac{22}{7} \times 21 = 22 \times 3 = 66$ cm.
- The answer is a **length**: give it in cm or m.`,
        figure: {
          type: "plot",
          x: [-1.3, 9.0], y: [-0.8, 1.6], equal: true, axes: false,
          circles: [{ c: [0, 0.5], r: 1, fill: true, tone: "accent" }],
          segments: [
            { from: [-1, 0.5], to: [1, 0.5], tone: "warn", label: "d", pos: "n", style: "italic" },
            { from: [2.2, 0.5], to: [2.2 + Math.PI * 2, 0.5], tone: "accent" },
            { from: [2.2, 0.35], to: [2.2, 0.65], tone: "accent" },
            { from: [4.2, 0.35], to: [4.2, 0.65], tone: "warn", thin: true },
            { from: [6.2, 0.35], to: [6.2, 0.65], tone: "warn", thin: true },
            { from: [8.2, 0.35], to: [8.2, 0.65], tone: "warn", thin: true },
            { from: [2.2 + Math.PI * 2, 0.35], to: [2.2 + Math.PI * 2, 0.65], tone: "accent" },
          ],
          labels: [S(3.2, 0.5, "d", "s", "warn"), S(5.2, 0.5, "d", "s", "warn"), S(7.2, 0.5, "d", "s", "warn"), S(5.3, 0.5, "circumference ≈ 3.14 × d", "n", "accent")],
          caption: String.raw`Unroll the circle: the circumference is just over 3 diameters.`,
          alt: "A circle of diameter d next to a straight line of the same length as its circumference. The line is a little more than three diameters long.",
        },
      },
      {
        title: String.raw`Area of a circle`,
        body: String.raw`$$\text{Area} = \pi \times r \times r$$

- Use the **radius**. If you are given the diameter, halve it first.
- Example: $r = 3$ cm and $\pi = 3.14$ give $3.14 \times 3 \times 3 = 28.26$ cm$^2$.
- The answer is an **area**: give it in cm$^2$ or m$^2$.
- **Common mistakes**: using the diameter in the formula (the answer comes out 4 times too big), or working out $2 \times r$ instead of $r \times r$.`,
      },
      {
        title: String.raw`Semicircles`,
        body: String.raw`A semicircle is **half** a circle.

- Area of semicircle $= \frac{1}{2} \times \pi \times r \times r$.
- **Perimeter** of semicircle $=$ curved part $+$ straight part $= \frac{1}{2} \times \pi \times d + d$.
- **Common mistake**: forgetting the straight edge (the diameter). The curved part alone is only half the circumference.`,
        figure: {
          type: "plot",
          x: [-2.8, 2.8], y: [-0.8, 2.5], equal: true, axes: false,
          polygons: [{ points: arc(0, 0, 2, 0, 180), fill: true, tone: "accent" }],
          curves: [curve(0, 0, 2, 0, 180, { tone: "accent" })],
          segments: [{ from: [-2, 0], to: [2, 0], tone: "warn" }],
          labels: [S(0, 2, "½ × π × d", "n", "accent"), S(0, 0, "d", "s", "warn")],
          caption: String.raw`Perimeter $= \frac{1}{2}\pi d + d$`,
          alt: "A semicircle. Its curved edge is half of the circumference of the circle and its straight edge is the diameter d.",
        },
      },
      {
        title: String.raw`Quarter circles`,
        body: String.raw`A quarter circle is **one quarter** of a circle. Its corner is the centre and the angle there is a right angle.

- Area of quarter circle $= \frac{1}{4} \times \pi \times r \times r$.
- **Perimeter** of quarter circle $= \frac{1}{4} \times 2 \times \pi \times r + r + r$.
- **Common mistake**: adding only one radius. A quarter circle has **two** straight edges, and both are radii.`,
        figure: {
          type: "plot",
          x: [-0.8, 3.2], y: [-0.7, 3.1], equal: true, axes: false,
          polygons: [{ points: [[0, 0]].concat(arc(0, 0, 2.4, 0, 90)), fill: true, tone: "accent" }],
          curves: [curve(0, 0, 2.4, 0, 90, { tone: "accent" })],
          segments: [
            { from: [0, 0], to: [2.4, 0], tone: "warn" },
            { from: [0, 0], to: [0, 2.4], tone: "warn" },
          ],
          rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.25 }],
          labels: [V(1.2, 0, "r", "s"), V(0, 1.2, "r", "w"), S(1.75, 1.75, "¼ × 2 × π × r", "ne", "accent")],
          caption: String.raw`Perimeter $= \frac{1}{4} \times 2\pi r + 2r$`,
          alt: "A quarter circle with its two straight edges, each a radius r, meeting at a right angle at the centre.",
        },
      },
      {
        title: String.raw`Composite figures`,
        body: String.raw`Break the figure into squares, rectangles, triangles, semicircles and quarter circles.

- **Area**: add the pieces, or subtract a piece that is cut out.
- **Perimeter**: go round the **outside** only. Add each curved part and each straight edge. Lines where two pieces join are **inside**, so leave them out.
- Find radii from the other lengths: a semicircle on the side of a square has diameter $=$ side of the square.
- Write each piece on its own line ("rectangle $= 60$ cm$^2$, semicircle $= 39.25$ cm$^2$") so the marker can follow.`,
        figure: {
          type: "plot",
          x: [-0.8, 4.8], y: [-0.7, 6.4], equal: true, axes: false,
          polygons: [{ points: [[4, 0], [4, 4]].concat(arc(2, 4, 2, 0, 180)).concat([[0, 4], [0, 0]]), fill: true, tone: "accent" }],
          segments: [{ from: [0, 4], to: [4, 4], dashed: true, thin: true, tone: "muted" }],
          labels: [S(2, 4, "inside: not in the perimeter", "s", "muted")],
          caption: String.raw`Perimeter $=$ 3 sides of the square $+ \frac{1}{2}\pi d$`,
          alt: "A square with a semicircle on top. The dashed line where they join is inside the figure and is not part of its perimeter.",
        },
      },
      {
        title: String.raw`Shaded regions you should know`,
        body: String.raw`Most shaded regions are "whole $-$ part".

- **Corner piece**: square $-$ quarter circle.
- **Leaf** (two quarter circles in a square): quarter circle $+$ quarter circle $-$ square. Its perimeter is two quarter-circle arcs.
- **Ring** (path round a pond): big circle $-$ small circle. Find **both** radii first.
- The perimeter of a shaded region is every edge round it, curved and straight. Check which arcs are part of its edge.`,
        figure: [
          {
            type: "plot",
            x: [-0.4, 3.4], y: [-0.4, 3.4], equal: true, axes: false,
            polygons: [
              { points: [[3, 0], [3, 3], [0, 3]].concat(arc(0, 0, 3, 90, 0)), fill: true, tone: "accent" },
              { points: [[0, 0], [3, 0], [3, 3], [0, 3]], tone: "ink" },
            ],
            curves: [curve(0, 0, 3, 0, 90)],
            caption: String.raw`Square $-$ quarter circle`,
            alt: "A square with a quarter circle centred at its bottom-left corner. The corner piece outside the quarter circle is shaded.",
          },
          {
            type: "plot",
            x: [-0.4, 3.4], y: [-0.4, 3.4], equal: true, axes: false,
            polygons: [
              { points: arc(0, 3, 3, -90, 0).concat(arc(3, 0, 3, 90, 180)), fill: true, tone: "accent" },
              { points: [[0, 0], [3, 0], [3, 3], [0, 3]], tone: "ink" },
            ],
            curves: [curve(0, 3, 3, -90, 0), curve(3, 0, 3, 90, 180)],
            caption: String.raw`Leaf $= 2$ quarter circles $-$ square`,
            alt: "A square with two quarter circles, centred at the top-left and bottom-right corners. They overlap in a leaf shape, which is shaded.",
          },
          {
            type: "plot",
            x: [-1.9, 1.9], y: [-1.9, 1.9], equal: true, axes: false,
            shade: ring(1, 1.7, "accent"),
            circles: [{ c: [0, 0], r: 1.7, tone: "ink" }, { c: [0, 0], r: 1, tone: "ink" }],
            caption: String.raw`Ring $=$ big circle $-$ small circle`,
            alt: "Two circles with the same centre. The ring between them is shaded.",
          },
        ],
      },
      {
        title: String.raw`Working backwards`,
        body: String.raw`- From the **circumference**: $d = \text{circumference} \div \pi$. With $\pi = \frac{22}{7}$: circumference $110$ cm gives $d = 110 \div \frac{22}{7} = 110 \times \frac{7}{22} = 35$ cm.
- From the **area**: $r \times r = \text{area} \div \pi$, then find the number that times itself gives this. Area $1386$ cm$^2$ with $\pi = \frac{22}{7}$: $r \times r = 1386 \div \frac{22}{7} = 441$, so $r = 21$ cm.
- From the **perimeter of a semicircle**: perimeter $= \frac{1}{2}\pi d + d$. Write it as a number of $d$s, then divide. With $\pi = 3.14$, it is $1.57d + d = 2.57d$.
- The same piece of wire bent into a new shape keeps its **length**, so the perimeter stays the same.`,
      },
    ],
    archetypes: [
      {
        id: "M3-circumference",
        name: String.raw`Circumference of a circle`,
        tests: String.raw`Using $\pi d$ or $2\pi r$ with the given value of $\pi$, including wheels: one complete turn moves the wheel forward by one circumference.`,
        questions: [
          {
            stem: String.raw`The diameter of a circle is 14 cm. Take $\pi = \frac{22}{7}$. What is the circumference of the circle?`,
            calculator: false,
            marks: 1,
            figure: {
              type: "plot",
              x: [-3, 3], y: [-2.4, 2.4], equal: true, axes: false,
              circles: [{ c: [0, 0], r: 2, fill: true, tone: "accent" }],
              segments: [{ from: [-2, 0], to: [2, 0], tone: "ink" }],
              points: [{ x: 0, y: 0 }],
              labels: [T(0, 0, "14 cm", "n")],
              alt: "A circle with a diameter of 14 cm drawn across it through the centre.",
            },
            choices: [String.raw`22 cm`, String.raw`44 cm`, String.raw`88 cm`, String.raw`154 cm`],
          },
          {
            stem: String.raw`The wheel of a bicycle has a diameter of 70 cm. Take $\pi = \frac{22}{7}$.`,
            figure: {
              type: "plot",
              x: [-3, 3], y: [-2.5, 2.4], equal: true, axes: false,
              circles: [{ c: [0, 0], r: 2, tone: "ink" }, { c: [0, 0], r: 1.8, tone: "muted" }],
              segments: [0, 45, 90, 135].map((a) => ({ from: [1.8 * Math.cos(a * Math.PI / 180), 1.8 * Math.sin(a * Math.PI / 180)], to: [-1.8 * Math.cos(a * Math.PI / 180), -1.8 * Math.sin(a * Math.PI / 180)], thin: true, tone: "muted" }))
                .concat([{ from: [-2, -2.25], to: [2, -2.25], tone: "ink", arrow: true, arrowStart: true, thin: true }]),
              points: [{ x: 0, y: 0 }],
              labels: [T(0, -2.25, "70 cm", "s")],
              alt: "A bicycle wheel with spokes. Its diameter of 70 cm is marked below it.",
            },
            parts: [
              { label: "(a)", text: String.raw`How far does the bicycle move forward when the wheel makes one complete turn? Give your answer in cm.`, marks: 1 },
              { label: "(b)", text: String.raw`How many complete turns does the wheel make when the bicycle travels 1.1 km?`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-circle-area",
        name: String.raw`Area of a circle`,
        tests: String.raw`Using $\pi \times r \times r$, including finding the radius first when the diameter or the circumference is given.`,
        questions: [
          {
            stem: String.raw`The radius of a circle is 10 cm. Take $\pi = 3.14$. What is the area of the circle?`,
            calculator: false,
            marks: 1,
            figure: {
              type: "plot",
              x: [-3, 3], y: [-2.4, 2.4], equal: true, axes: false,
              circles: [{ c: [0, 0], r: 2, fill: true, tone: "accent" }],
              segments: [{ from: [0, 0], to: [2, 0], tone: "ink" }],
              points: [{ x: 0, y: 0 }],
              labels: [T(1, 0, "10 cm", "n")],
              alt: "A circle with a radius of 10 cm drawn from the centre.",
            },
            choices: [String.raw`31.4 cm$^2$`, String.raw`62.8 cm$^2$`, String.raw`314 cm$^2$`, String.raw`1256 cm$^2$`],
          },
          {
            stem: String.raw`The circumference of a circular table top is 88 cm. Take $\pi = \frac{22}{7}$. Find the area of the table top.`,
            calculator: false,
            marks: 2,
          },
        ],
      },
      {
        id: "M3-semicircle-quarter",
        name: String.raw`Semicircles and quarter circles`,
        tests: String.raw`Finding the area and the perimeter of a single semicircle or quarter circle. The perimeter must include the straight edges: one diameter for a semicircle, two radii for a quarter circle.`,
        questions: [
          {
            stem: String.raw`The figure shows a semicircle with diameter 20 cm. Take $\pi = 3.14$.`,
            calculator: false,
            figure: {
              type: "plot",
              x: [-2.8, 2.8], y: [-0.9, 2.4], equal: true, axes: false,
              polygons: [{ points: arc(0, 0, 2, 0, 180), fill: true, tone: "accent" }],
              points: [{ x: 0, y: 0 }],
              labels: [T(0, 0, "20 cm", "s")],
              alt: "A semicircle with its straight edge, the diameter of 20 cm, along the bottom.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of the semicircle.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the perimeter of the semicircle.`, marks: 1 },
            ],
          },
          {
            stem: String.raw`$OAB$ is a quarter circle with centre $O$ and radius 21 cm. Take $\pi = \frac{22}{7}$.`,
            figure: {
              type: "plot",
              x: [-0.9, 3.0], y: [-0.7, 2.9], equal: true, axes: false,
              polygons: [{ points: [[0, 0]].concat(arc(0, 0, 2.4, 0, 90)), fill: true, tone: "accent" }],
              rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.22 }],
              labels: [V(0, 0, "O", "sw"), V(2.4, 0, "B", "se"), V(0, 2.4, "A", "nw"), T(1.2, 0, "21 cm", "s")],
              alt: "Quarter circle OAB with centre O. OB is a radius of 21 cm along the bottom and OA is the radius going up.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of the quarter circle.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the perimeter of the quarter circle.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-composite-figures",
        name: String.raw`Composite figures with semicircles and quarter circles`,
        tests: String.raw`Area and perimeter of a figure made of a rectangle, square or triangle joined to a semicircle or quarter circle. Pupils must leave out the join lines from the perimeter.`,
        questions: [
          {
            stem: String.raw`A window is made up of a rectangle 14 cm wide and 20 cm tall, with a semicircle on top. Take $\pi = \frac{22}{7}$.`,
            figure: {
              type: "plot",
              x: [-3.6, 17.6], y: [-2, 28.4], equal: true, axes: false,
              polygons: [{ points: [[14, 0], [14, 20]].concat(arc(7, 20, 7, 0, 180)).concat([[0, 20], [0, 0]]), fill: true, tone: "accent" }],
              segments: [{ from: [0, 20], to: [14, 20], dashed: true, thin: true, tone: "muted" }],
              labels: [T(7, 0, "14 cm", "s"), T(0, 10, "20 cm", "w")],
              caption: "Not drawn to scale",
              alt: "A window shape: a rectangle 14 cm wide and 20 cm tall with a semicircle of diameter 14 cm on top.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the window.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the window.`, marks: 2 },
            ],
          },
          {
            stem: String.raw`The figure is made up of a right-angled triangle $AOC$ and a quarter circle $OAB$ with centre $O$. $OC = 24$ cm, $OB = 10$ cm and $AC = 26$ cm. Take $\pi = 3.14$.`,
            figure: {
              type: "plot",
              x: [-26.4, 13], y: [-3, 13], equal: true, axes: false,
              polygons: [{ points: [[-24, 0]].concat(arc(0, 0, 10, 0, 90)), fill: true, tone: "accent" }],
              segments: [{ from: [0, 0], to: [0, 10], dashed: true, thin: true, tone: "muted" }],
              rightAngles: [{ at: [0, 0], a: [-1, 0], b: [0, 1], size: 1 }],
              labels: [
                V(-24, 0, "C", "sw"), V(0, 0, "O", "s"), V(10, 0, "B", "se"), V(0, 10, "A", "n"),
                T(-12, 0, "24 cm", "s"), T(5, 0, "10 cm", "s"), T(-12, 5, "26 cm", "nw"),
              ],
              caption: "Not drawn to scale",
              alt: "A right-angled triangle AOC with OC = 24 cm along the bottom and AC = 26 cm, joined along OA to a quarter circle OAB with centre O and radius OB = 10 cm. The right angle is at O.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the figure.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the figure.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-shaded-quarter-circles",
        name: String.raw`Shaded regions: squares and quarter circles`,
        tests: String.raw`The corner piece (square $-$ quarter circle) and the leaf (two quarter circles $-$ square): finding the area by subtraction and the perimeter from the arcs that bound the region.`,
        questions: [
          {
            stem: String.raw`$ABCD$ is a square of side 10 cm. $ABD$ is a quarter circle with centre $A$. Take $\pi = 3.14$. What is the area of the shaded part?`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-1.4, 11.4], y: [-1.6, 11.4], equal: true, axes: false,
              polygons: [
                { points: [[10, 0], [10, 10], [0, 10]].concat(arc(0, 0, 10, 90, 0)), fill: true, tone: "accent" },
                { points: [[0, 0], [10, 0], [10, 10], [0, 10]], tone: "ink" },
              ],
              curves: [curve(0, 0, 10, 0, 90)],
              labels: [V(0, 0, "A", "sw"), V(10, 0, "B", "se"), V(10, 10, "C", "ne"), V(0, 10, "D", "nw"), T(5, 0, "10 cm", "s")],
              alt: "Square ABCD of side 10 cm with a quarter circle centred at A passing through B and D. The part of the square outside the quarter circle, near C, is shaded.",
            },
            choices: [String.raw`21.5 cm$^2$`, String.raw`43 cm$^2$`, String.raw`57 cm$^2$`, String.raw`78.5 cm$^2$`],
          },
          {
            stem: String.raw`$ABCD$ is a square of side 12 cm. Two quarter circles are drawn inside it, one with centre $B$ and one with centre $D$. Use the calculator value of $\pi$.`,
            figure: {
              type: "plot",
              x: [-1.4, 13.4], y: [-1.6, 13.4], equal: true, axes: false,
              polygons: [
                { points: arc(0, 12, 12, -90, 0).concat(arc(12, 0, 12, 90, 180)), fill: true, tone: "accent" },
                { points: [[0, 0], [12, 0], [12, 12], [0, 12]], tone: "ink" },
              ],
              curves: [curve(0, 12, 12, -90, 0), curve(12, 0, 12, 90, 180)],
              labels: [V(0, 0, "A", "sw"), V(12, 0, "B", "se"), V(12, 12, "C", "ne"), V(0, 12, "D", "nw"), T(6, 0, "12 cm", "s")],
              alt: "Square ABCD of side 12 cm with two quarter circles, centred at B and at D, both passing through A and C. The leaf shape where they overlap is shaded.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the shaded part. Give your answer correct to 2 decimal places.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the shaded part. Give your answer correct to 2 decimal places.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-shaded-semicircles",
        name: String.raw`Shaded regions: semicircles with triangles and smaller semicircles`,
        tests: String.raw`Subtracting a triangle or smaller semicircles from a semicircle, using the radius as the height of the triangle, and adding all the arcs that bound the shaded region for its perimeter.`,
        questions: [
          {
            stem: String.raw`The figure shows a semicircle with centre $O$ and diameter $AB = 20$ cm. $C$ is a point on the curve such that $OC$ is perpendicular to $AB$. Take $\pi = 3.14$.`,
            calculator: false,
            figure: {
              type: "plot",
              x: [-12.6, 12.6], y: [-2, 11.6], equal: true, axes: false,
              polygons: [
                { points: arc(0, 0, 10, 0, 90), fill: true, tone: "accent" },
                { points: arc(0, 0, 10, 90, 180), fill: true, tone: "accent" },
                { points: [[-10, 0], [10, 0], [0, 10]], tone: "ink" },
              ],
              curves: [curve(0, 0, 10, 0, 180)],
              segments: [{ from: [0, 0], to: [0, 10], dashed: true, tone: "ink" }],
              rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.8 }],
              labels: [V(-10, 0, "A", "sw"), V(10, 0, "B", "se"), V(0, 10, "C", "n"), V(0, 0, "O", "s")],
              alt: "A semicircle on diameter AB with centre O. C is the top of the curve, directly above O. Triangle ABC is unshaded and the two parts of the semicircle outside the triangle are shaded.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of triangle $ABC$.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the total area of the shaded parts.`, marks: 2 },
            ],
          },
          {
            stem: String.raw`The figure shows a big semicircle of diameter 28 cm. Two identical small semicircles are drawn inside it, side by side along its diameter. Take $\pi = \frac{22}{7}$.`,
            figure: {
              type: "plot",
              x: [-15.6, 15.6], y: [-2.4, 15.6], equal: true, axes: false,
              polygons: [{ points: arc(0, 0, 14, 0, 180).concat(arc(-7, 0, 7, 180, 0)).concat(arc(7, 0, 7, 180, 0)), fill: true, tone: "accent" }],
              segments: [{ from: [-14, 0], to: [14, 0], tone: "ink" }],
              labels: [T(0, -0.4, "28 cm", "s")],
              caption: "Not drawn to scale",
              alt: "A big semicircle on a diameter of 28 cm. Inside it, two equal small semicircles stand side by side on the same diameter, each with diameter half of the big one. The region inside the big semicircle but outside the two small ones is shaded.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the shaded part.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the shaded part.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-working-backwards",
        name: String.raw`Working backwards to the radius or diameter`,
        tests: String.raw`Finding the diameter or radius from a given circumference, area or perimeter, often when one piece of wire is bent from one shape into another so the length stays the same.`,
        questions: [
          {
            stem: String.raw`The perimeter of a semicircle is 72 cm. Take $\pi = \frac{22}{7}$. Find the diameter of the semicircle.`,
            calculator: false,
            marks: 2,
          },
          {
            stem: String.raw`A piece of wire is bent to form a square of area 121 cm$^2$. The wire is then straightened and bent to form a circle. Take $\pi = \frac{22}{7}$.`,
            parts: [
              { label: "(a)", text: String.raw`Find the length of the wire.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the radius of the circle.`, marks: 1 },
              { label: "(c)", text: String.raw`How much bigger is the area of the circle than the area of the square?`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M3-real-world",
        name: String.raw`Circles in real-world contexts: paths and grazing areas`,
        tests: String.raw`Applying circle areas to a context: a path round a circular pond (ring = big circle $-$ small circle) with a cost, or the area an animal tied at a corner can reach (part of a circle outside a building).`,
        questions: [
          {
            stem: String.raw`A circular pond has a radius of 7 m. A path 3.5 m wide is built all round the pond. Take $\pi = \frac{22}{7}$.`,
            figure: {
              type: "plot",
              x: [-12, 12], y: [-11.6, 11.6], equal: true, axes: false,
              shade: ring(7, 10.5, "muted"),
              circles: [{ c: [0, 0], r: 7, fill: true, tone: "accent" }, { c: [0, 0], r: 10.5, tone: "ink" }],
              segments: [{ from: [0, 0], to: [0, 7], tone: "ink" }, { from: [7, 0], to: [10.5, 0], tone: "ink" }],
              points: [{ x: 0, y: 0 }],
              labels: [T(0, 3.5, "7 m", "e"), T(8.75, 0, "3.5 m", "n"), S(0, -3.5, "pond", "c"), S(-6.3, -6.3, "path", "c")],
              caption: "Not drawn to scale",
              alt: "A circular pond of radius 7 m with a path 3.5 m wide all round it, shown as a ring.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of the path.`, marks: 3 },
              { label: "(b)", text: String.raw`It costs \$15 to tile each square metre of the path. How much does it cost to tile the whole path?`, marks: 1 },
            ],
          },
          {
            stem: String.raw`A goat is tied with a rope 7 m long to the corner $P$ of a rectangular shed. The shed is 10 m long and 8 m wide. The goat cannot go into the shed. Take $\pi = \frac{22}{7}$.

Find the area of the ground outside the shed that the goat can reach.`,
            marks: 3,
            figure: {
              type: "plot",
              x: [-8, 12], y: [-6.6, 10], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [10, 0], [10, 8], [0, 8]], fill: true, tone: "muted" }],
              segments: [{ from: [0, 0], to: [-4.95, -4.95], tone: "warn" }],
              points: [{ x: 0, y: 0 }, { x: -4.95, y: -4.95, label: "goat", pos: "w" }],
              labels: [V(0, 0, "P", "nw"), T(5, 0, "10 m", "s"), T(10, 4, "8 m", "e"), S(5, 4.6, "shed"), T(-2.5, -2.5, "7 m", "se")],
              caption: "Not drawn to scale",
              alt: "A rectangular shed, 10 m by 8 m, seen from above. A goat is tied to its bottom-left corner P with a rope 7 m long.",
            },
          },
        ],
      },
    ],
  });
})();
