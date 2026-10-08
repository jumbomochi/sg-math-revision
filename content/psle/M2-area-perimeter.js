(function () {
  // small helpers for labels
  const T = (x, y, text, pos) => ({ x, y, text, pos: pos || "c", style: "plain" });
  const V = (x, y, text, pos) => ({ x, y, text, pos, style: "italic" });
  const S = (x, y, text, pos) => ({ x, y, text, pos: pos || "c", style: "small" });
  const grid = (w, h) => {
    const g = [];
    for (let i = 1; i < w; i++) g.push({ from: [i, 0], to: [i, h], thin: true, tone: "muted" });
    for (let j = 1; j < h; j++) g.push({ from: [0, j], to: [w, j], thin: true, tone: "muted" });
    return g;
  };

  H2.addTopic({
    id: "M2",
    title: "Area and Perimeter",
    paper: "Paper 1 / Paper 2",
    summary: String.raw`Area and perimeter of rectangles, squares and composite rectilinear figures, base and height of a triangle, area of triangles, composite figures and shaded regions, and finding unknown lengths.`,
    syllabus: {
      include: [
        String.raw`P3: concepts of area and perimeter of a plane figure`,
        String.raw`P3: measuring area in square units, cm$^2$ and m$^2$`,
        String.raw`P3: perimeter of a rectilinear figure, a rectangle and a square`,
        String.raw`P3: area of a rectangle and a square`,
        String.raw`P4: finding one dimension of a rectangle given the other dimension and its area or perimeter`,
        String.raw`P4: finding the length of one side of a square given its area or perimeter`,
        String.raw`P4: finding the area and perimeter of composite figures made up of rectangles and squares`,
        String.raw`P5: concepts of base and height of a triangle`,
        String.raw`P5: area of a triangle`,
        String.raw`P5: finding the area of composite figures made up of rectangles, squares and triangles`,
      ],
      exclude: [
        String.raw`conversion between cm$^2$ and m$^2$`,
        String.raw`finding a slanted length by calculation (any slanted side you need is given in the question)`,
      ],
    },
    concepts: [
      {
        title: String.raw`Area and perimeter`,
        body: String.raw`- **Perimeter** is the distance all the way **round** a figure. It is a length, so its unit is cm or m.
- **Area** is the amount of flat surface a figure **covers**. We count it in unit squares, so its unit is cm$^2$ or m$^2$.
- Example: a 4 cm by 2 cm rectangle covers 8 squares of side 1 cm. Its area is 8 cm$^2$. Its perimeter is $4 + 2 + 4 + 2 = 12$ cm.
- **Common mistake**: adding only two sides for the perimeter, or writing an area in cm.`,
        figure: {
          type: "plot",
          x: [-0.8, 5.6], y: [-0.8, 2.6], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [4, 0], [4, 2], [0, 2]], fill: true, tone: "accent" }],
          segments: grid(4, 2),
          labels: [T(2, 0, "4 cm", "s"), T(4, 1, "2 cm", "e")],
          caption: String.raw`8 unit squares: area $= 8$ cm$^2$. Distance round: perimeter $= 12$ cm.`,
          alt: "A 4 cm by 2 cm rectangle divided into 8 unit squares of side 1 cm.",
        },
      },
      {
        title: String.raw`Rectangles and squares`,
        body: String.raw`| Shape | Perimeter | Area |
| --- | --- | --- |
| Rectangle | $2 \times (\text{length} + \text{breadth})$ | $\text{length} \times \text{breadth}$ |
| Square | $4 \times \text{side}$ | $\text{side} \times \text{side}$ |

**Working backwards**

- Length $=$ area $\div$ breadth.
- Perimeter $\div 2$ gives **length $+$ breadth**. Then take away the side you know.
- Side of a square $=$ perimeter $\div 4$. From the area, find the number that times itself gives the area: area $49$ cm$^2$ means side $7$ cm, because $7 \times 7 = 49$.
- **Common mistake**: thinking perimeter $\div 2$ is the length. It is length $+$ breadth.`,
      },
      {
        title: String.raw`Composite rectilinear figures`,
        body: String.raw`A rectilinear figure has only straight sides that meet at right angles.

- **Area**: cut the figure into rectangles and add. Or take a big rectangle and subtract the missing piece. Use whichever is quicker.
- Find the missing lengths first. Opposite sides balance: the lengths going right add up to the lengths going left, and up balances down.
- **Perimeter**: add every outside edge. For a "staircase" shape, push the steps out: the perimeter is the same as the rectangle round it.
- A notch cut **into** a side adds extra edges, so the perimeter is **more** than that rectangle.
- **Common mistake**: adding the dashed cutting line into the perimeter. It is inside the figure.`,
        figure: [
          {
            type: "plot",
            x: [-0.6, 8.6], y: [-0.6, 6.6], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [8, 0], [8, 3], [4, 3], [4, 6], [0, 6]], fill: true, tone: "accent" }],
            segments: [{ from: [4, 0], to: [4, 3], dashed: true, thin: true, tone: "muted" }],
            labels: [V(2, 3, "A", "c"), V(6, 1.5, "B", "c")],
            caption: String.raw`Area $=$ A $+$ B`,
            alt: "An L-shaped figure split by a dashed line into two rectangles, A and B.",
          },
          {
            type: "plot",
            x: [-0.6, 7.6], y: [-0.6, 6.6], equal: true, axes: false,
            polygons: [
              { points: [[0, 0], [7, 0], [7, 6], [0, 6]], dashed: true, tone: "muted" },
              { points: [[0, 0], [7, 0], [7, 2], [5, 2], [5, 4], [3, 4], [3, 6], [0, 6]], fill: true, tone: "accent" },
            ],
            caption: String.raw`Same perimeter as the dashed rectangle`,
            alt: "A staircase-shaped figure inside a dashed rectangle. Pushing the steps out to the corner gives the dashed rectangle, which has the same perimeter.",
          },
        ],
      },
      {
        title: String.raw`Base and height of a triangle`,
        body: String.raw`- **Any side** of a triangle can be the base.
- The **height** is the line from the opposite corner that meets the base at a **right angle**.
- In a right-angled triangle, the two sides at the right angle are the base and the height.
- In an obtuse-angled triangle, the height can be **outside** the triangle. Extend the base with a dashed line to meet it.
- **Common mistake**: using a slanted side as the height. The height always makes a right angle with the base.`,
        figure: [
          {
            type: "plot",
            x: [-0.4, 4.4], y: [-0.8, 3.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [4, 0], [1.5, 3]], fill: true, tone: "accent" }],
            segments: [{ from: [1.5, 3], to: [1.5, 0], dashed: true, tone: "warn" }],
            rightAngles: [{ at: [1.5, 0], a: [1, 0], b: [0, 1], size: 0.3 }],
            labels: [S(2.8, 0, "base", "s"), S(1.5, 1.3, "height", "e")],
            caption: String.raw`Height inside`,
            alt: "An acute-angled triangle with a dashed height from the top corner meeting the base at a right angle inside the triangle.",
          },
          {
            type: "plot",
            x: [-1.4, 4.4], y: [-0.8, 3.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [4, 0], [0, 3]], fill: true, tone: "accent" }],
            segments: [{ from: [0, 3], to: [0, 0], tone: "warn" }],
            rightAngles: [{ at: [0, 0], a: [1, 0], b: [0, 1], size: 0.3 }],
            labels: [S(2, 0, "base", "s"), S(0, 1.5, "height", "w")],
            caption: String.raw`A side is the height`,
            alt: "A right-angled triangle. The side at the right angle is the height for the base along the bottom.",
          },
          {
            type: "plot",
            x: [-2.2, 3.4], y: [-0.8, 3.4], equal: true, axes: false,
            polygons: [{ points: [[0, 0], [3, 0], [-1.5, 3]], fill: true, tone: "accent" }],
            segments: [
              { from: [-1.5, 3], to: [-1.5, 0], dashed: true, tone: "warn" },
              { from: [-1.5, 0], to: [0, 0], dashed: true, thin: true, tone: "muted" },
            ],
            rightAngles: [{ at: [-1.5, 0], a: [1, 0], b: [0, 1], size: 0.3 }],
            labels: [S(1.5, 0, "base", "s"), S(-1.5, 1.3, "height", "w")],
            caption: String.raw`Height outside`,
            alt: "An obtuse-angled triangle. The base is extended to the left with a dashed line, and the dashed height from the top corner meets this extension at a right angle outside the triangle.",
          },
        ],
      },
      {
        title: String.raw`Area of a triangle`,
        body: String.raw`$$\text{Area of triangle} = \tfrac{1}{2} \times \text{base} \times \text{height}$$

- A triangle is **half** of a rectangle with the same base and height.
- So a triangle drawn inside a rectangle, with its base on one side and its top corner on the opposite side, is always **half** of the rectangle.
- Example: base 6 cm and height 5 cm give $\tfrac{1}{2} \times 6 \times 5 = 15$ cm$^2$.
- **Common mistake**: forgetting the $\tfrac{1}{2}$.`,
        figure: {
          type: "plot",
          x: [-0.5, 6.5], y: [-0.7, 4.5], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [6, 0], [2, 4]], fill: true, tone: "accent" },
            { points: [[0, 0], [6, 0], [6, 4], [0, 4]], tone: "ink" },
          ],
          segments: [{ from: [2, 4], to: [2, 0], dashed: true, thin: true, tone: "muted" }],
          rightAngles: [{ at: [2, 0], a: [1, 0], b: [0, 1], size: 0.3 }],
          labels: [S(3, 0, "base", "s"), S(2, 2.6, "height", "e")],
          caption: String.raw`Shaded triangle $= \tfrac{1}{2}$ of the rectangle.`,
          alt: "A rectangle with a shaded triangle inside. The triangle's base is the bottom of the rectangle and its top corner is on the top side, so it has the same base and height as the rectangle.",
        },
      },
      {
        title: String.raw`Composite figures and shaded regions`,
        body: String.raw`- **Add**: cut the figure into rectangles, squares and triangles, and add their areas.
- **Subtract**: shaded area $=$ area of the whole figure $-$ area of the unshaded parts. This is often quicker when the shaded part has an odd shape.
- Write each piece on its own line, for example "rectangle $= 80$ cm$^2$, triangle $= 12$ cm$^2$". This earns method marks.
- **Perimeter** is the outer edge only. Every slanted side you need will be given.`,
        figure: {
          type: "plot",
          x: [-0.5, 8.5], y: [-0.6, 5.6], equal: true, axes: false,
          polygons: [
            { points: [[0, 0], [5, 0], [8, 3], [8, 5], [3, 5], [0, 2]], fill: true, tone: "accent" },
            { points: [[0, 0], [8, 0], [8, 5], [0, 5]], tone: "ink" },
          ],
          caption: String.raw`Shaded area $=$ rectangle $-$ the two white triangles.`,
          alt: "A rectangle with a white right-angled triangle cut off the top-left corner and another off the bottom-right corner. The rest of the rectangle is shaded.",
        },
      },
      {
        title: String.raw`Finding unknown lengths`,
        body: String.raw`Work backwards from the area.

- Rectangle: missing side $=$ area $\div$ known side.
- Triangle: area $= \tfrac{1}{2} \times$ base $\times$ height, so **base $\times$ height $= 2 \times$ area**. Then height $= 2 \times \text{area} \div \text{base}$.
- The same triangle has a different height for each base, but the **area is the same**. So $BC \times AD = AC \times BE$ in the figure.
- Example: a triangle has area 30 cm$^2$ and base 12 cm. Its height is $2 \times 30 \div 12 = 5$ cm.`,
        figure: {
          type: "plot",
          x: [-0.8, 6.8], y: [-0.8, 4.6], equal: true, axes: false,
          polygons: [{ points: [[0, 0], [6, 0], [2, 4]], fill: true, tone: "accent" }],
          segments: [
            { from: [2, 4], to: [2, 0], dashed: true, tone: "warn" },
            { from: [0, 0], to: [3, 3], dashed: true, tone: "good" },
          ],
          rightAngles: [
            { at: [2, 0], a: [1, 0], b: [0, 1], size: 0.28 },
            { at: [3, 3], a: [1, -1], b: [-1, -1], size: 0.28 },
          ],
          labels: [V(2, 4, "A", "n"), V(0, 0, "B", "sw"), V(6, 0, "C", "se"), V(2, 0, "D", "s"), V(3, 3, "E", "ne")],
          caption: String.raw`Area $= \tfrac{1}{2} \times BC \times AD = \tfrac{1}{2} \times AC \times BE$`,
          alt: "Triangle ABC with two heights: AD from A meeting BC at a right angle, and BE from B meeting AC at a right angle.",
        },
      },
    ],
    archetypes: [
      {
        id: "M2-rectangle-square",
        name: String.raw`Rectangles and squares: area, perimeter and a missing side`,
        tests: String.raw`Using the area and perimeter of rectangles and squares, and working backwards from one of them to a missing side. Often in a context such as a garden, a floor or a piece of wire.`,
        questions: [
          {
            stem: String.raw`The perimeter of a square is 36 cm. What is its area?`,
            calculator: false,
            marks: 1,
            choices: [String.raw`9 cm$^2$`, String.raw`36 cm$^2$`, String.raw`81 cm$^2$`, String.raw`144 cm$^2$`],
          },
          {
            stem: String.raw`Mrs Lim has a rectangular garden. It is 15 m long and its perimeter is 48 m. She covers the whole garden with grass. The grass costs \$6 for every square metre.

How much does she pay for the grass?`,
            calculator: false,
            marks: 3,
            figure: {
              type: "plot",
              x: [-1.5, 17.5], y: [-2, 10.5], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [15, 0], [15, 9], [0, 9]], fill: true, tone: "good" }],
              labels: [T(7.5, 0, "15 m", "s")],
              caption: "Not drawn to scale",
              alt: "A rectangular garden with its length of 15 m marked along the bottom.",
            },
          },
        ],
      },
      {
        id: "M2-rectilinear-figures",
        name: String.raw`Composite rectilinear figures`,
        tests: String.raw`Finding the area and perimeter of a figure made of rectangles and squares. Pupils must first work out the lengths that are not marked, and must not count inside lines in the perimeter.`,
        questions: [
          {
            stem: String.raw`The figure is made up of rectangles. All its angles are right angles.`,
            calculator: false,
            figure: {
              type: "plot",
              x: [-2.6, 16.6], y: [-1.6, 11.4], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [14, 0], [14, 6], [8, 6], [8, 10], [0, 10]], fill: true, tone: "accent" }],
              labels: [T(7, 0, "14 cm", "s"), T(0, 5, "10 cm", "w"), T(4, 10, "8 cm", "n"), T(14, 3, "6 cm", "e")],
              caption: "Not drawn to scale",
              alt: "An L-shaped figure. The bottom is 14 cm, the left side is 10 cm, the top edge is 8 cm and the lower right side is 6 cm. A rectangular piece is missing from the top right corner.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the figure.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the area of the figure.`, marks: 1 },
            ],
          },
          {
            stem: String.raw`The figure is made up of three squares of sides 9 cm, 4 cm and 6 cm placed side by side.`,
            figure: {
              type: "plot",
              x: [-2.4, 21.4], y: [-1.4, 10.4], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [19, 0], [19, 6], [13, 6], [13, 4], [9, 4], [9, 9], [0, 9]], fill: true, tone: "accent" }],
              segments: [
                { from: [9, 0], to: [9, 4], dashed: true, thin: true, tone: "muted" },
                { from: [13, 0], to: [13, 4], dashed: true, thin: true, tone: "muted" },
              ],
              labels: [T(0, 4.5, "9 cm", "w"), T(11, 4, "4 cm", "n"), T(19, 3, "6 cm", "e")],
              caption: "Not drawn to scale",
              alt: "Three squares side by side along a straight line: a 9 cm square on the left, a 4 cm square in the middle and a 6 cm square on the right. The small square makes a dip in the top edge of the figure.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of the figure.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the figure.`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M2-base-height",
        name: String.raw`Identifying the base and height of a triangle`,
        tests: String.raw`Picking out the height that goes with a given base, especially in an obtuse-angled triangle where the height falls outside, and not using a slanted side as the height.`,
        questions: [
          {
            stem: String.raw`In the figure, $PS$ is perpendicular to $RQ$ extended, and $QT$ is perpendicular to $PR$. Which line is the height of triangle $PQR$ when $QR$ is its base?`,
            calculator: false,
            marks: 1,
            figure: {
              type: "plot",
              x: [-4.2, 8.2], y: [-1, 6], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [7, 0], [-3, 5]], fill: true, tone: "accent" }],
              segments: [
                { from: [-3, 5], to: [-3, 0], dashed: true, tone: "ink" },
                { from: [-3, 0], to: [0, 0], dashed: true, tone: "ink" },
                { from: [0, 0], to: [1.4, 2.8], dashed: true, tone: "ink" },
              ],
              rightAngles: [
                { at: [-3, 0], a: [1, 0], b: [0, 1], size: 0.35 },
                { at: [1.4, 2.8], a: [2, -1], b: [-1, -2], size: 0.35 },
              ],
              labels: [V(-3, 5, "P", "n"), V(0, 0, "Q", "s"), V(7, 0, "R", "se"), V(-3, 0, "S", "sw"), V(1.4, 2.8, "T", "ne")],
              alt: "Obtuse-angled triangle PQR with the obtuse angle at Q. A dashed line PS drops from P to meet RQ extended at S at a right angle. A dashed line QT goes from Q to meet PR at T at a right angle.",
            },
            choices: [String.raw`$PQ$`, String.raw`$PS$`, String.raw`$PR$`, String.raw`$QT$`],
          },
          {
            stem: String.raw`In triangle $ABC$, $BC = 9$ cm and $AB = 13$ cm. $AD$ is perpendicular to $CB$ extended. $AD = 12$ cm and $DB = 5$ cm. What is the area of triangle $ABC$?`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-7.6, 11.4], y: [-1.6, 13.4], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [9, 0], [-5, 12]], fill: true, tone: "accent" }],
              segments: [
                { from: [-5, 12], to: [-5, 0], dashed: true, tone: "ink" },
                { from: [-5, 0], to: [0, 0], dashed: true, tone: "ink" },
              ],
              rightAngles: [{ at: [-5, 0], a: [1, 0], b: [0, 1], size: 0.6 }],
              labels: [
                V(-5, 12, "A", "n"), V(0, 0, "B", "s"), V(9, 0, "C", "se"), V(-5, 0, "D", "sw"),
                T(4.5, 0, "9 cm", "s"), T(-2.5, 0, "5 cm", "s"), T(-5, 6, "12 cm", "w"), T(-2.5, 6, "13 cm", "e"),
              ],
              caption: "Not drawn to scale",
              alt: "Obtuse-angled triangle ABC with the obtuse angle at B. BC = 9 cm and AB = 13 cm. A dashed line AD of 12 cm drops from A to meet CB extended at D, with DB = 5 cm.",
            },
            choices: [String.raw`54 cm$^2$`, String.raw`58.5 cm$^2$`, String.raw`84 cm$^2$`, String.raw`108 cm$^2$`],
          },
        ],
      },
      {
        id: "M2-triangle-area",
        name: String.raw`Area of a triangle`,
        tests: String.raw`Using $\tfrac{1}{2} \times$ base $\times$ height for a triangle drawn inside a rectangle, where the height is a side of the rectangle and may lie outside the triangle.`,
        questions: [
          {
            stem: String.raw`$ABCD$ is a rectangle with $AB = 16$ cm and $BC = 9$ cm. $E$ is a point on $DC$. Find the area of the shaded triangle $ABE$.`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-1.8, 18.6], y: [-1.6, 10.6], equal: true, axes: false,
              polygons: [
                { points: [[0, 9], [16, 9], [5, 0]], fill: true, tone: "accent" },
                { points: [[0, 0], [16, 0], [16, 9], [0, 9]], tone: "ink" },
              ],
              labels: [V(0, 9, "A", "nw"), V(16, 9, "B", "ne"), V(16, 0, "C", "se"), V(0, 0, "D", "sw"), V(5, 0, "E", "s"), T(8, 9, "16 cm", "n"), T(16, 4.5, "9 cm", "e")],
              caption: "Not drawn to scale",
              alt: "Rectangle ABCD with AB = 16 cm along the top and BC = 9 cm on the right. E is a point on the bottom side DC. Triangle ABE is shaded.",
            },
          },
          {
            stem: String.raw`$ABCD$ is a rectangle with $AB = 20$ cm and $BC = 9$ cm. $E$ and $F$ are points on $AB$ such that $AE = 4$ cm and $EF = 7$ cm.`,
            figure: {
              type: "plot",
              x: [-1.6, 22.6], y: [-1.8, 10.6], equal: true, axes: false,
              polygons: [
                { points: [[4, 0], [11, 0], [20, 9]], fill: true, tone: "accent" },
                { points: [[0, 0], [20, 0], [20, 9], [0, 9]], tone: "ink" },
              ],
              labels: [
                V(0, 0, "A", "sw"), V(20, 0, "B", "se"), V(20, 9, "C", "ne"), V(0, 9, "D", "nw"), V(4, 0, "E", "s"), V(11, 0, "F", "s"),
                T(2, 0, "4 cm", "s"), T(7.5, 0, "7 cm", "s"), T(20, 4.5, "9 cm", "e"),
              ],
              caption: "Not drawn to scale",
              alt: "Rectangle ABCD with AB along the bottom and BC = 9 cm on the right. E and F are on AB with AE = 4 cm and EF = 7 cm. Triangle EFC, joining E and F to the top-right corner C, is shaded.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of the shaded triangle $EFC$.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the unshaded part of the rectangle.`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M2-composite-figures",
        name: String.raw`Composite figures of rectangles, squares and triangles`,
        tests: String.raw`Splitting a figure into rectangles, squares and triangles to find its area and perimeter, and then using a fraction of that area to find an unknown length.`,
        questions: [
          {
            stem: String.raw`The figure is made up of a square of side 10 cm and a triangle. The height of the triangle is 6 cm. Find the area of the figure.`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-2, 12.4], y: [-1.6, 17], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [10, 0], [10, 10], [5, 16], [0, 10]], fill: true, tone: "accent" }],
              segments: [
                { from: [0, 10], to: [10, 10], dashed: true, thin: true, tone: "muted" },
                { from: [5, 16], to: [5, 10], dashed: true, tone: "ink" },
              ],
              rightAngles: [{ at: [5, 10], a: [1, 0], b: [0, 1], size: 0.55 }],
              labels: [T(5, 0, "10 cm", "s"), T(5, 13, "6 cm", "e")],
              caption: "Not drawn to scale",
              alt: "A house shape: a square of side 10 cm with a triangle on top. A dashed height of 6 cm goes from the top corner of the triangle down to the top of the square.",
            },
          },
          {
            stem: String.raw`In the figure, $ABCD$ is made up of a rectangle and a triangle. $\angle DAB = \angle ADC = 90^\circ$. $AB = 20$ cm, $BC = 10$ cm, $DC = 12$ cm and $AD = 6$ cm.`,
            figure: {
              type: "plot",
              x: [-2.6, 22.4], y: [-1.8, 7.8], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [20, 0], [12, 6], [0, 6]], fill: true, tone: "accent" }],
              segments: [{ from: [12, 6], to: [12, 0], dashed: true, thin: true, tone: "muted" }],
              rightAngles: [
                { at: [0, 0], a: [1, 0], b: [0, 1], size: 0.6 },
                { at: [0, 6], a: [1, 0], b: [0, -1], size: 0.6 },
              ],
              labels: [
                V(0, 0, "A", "sw"), V(20, 0, "B", "se"), V(12, 6, "C", "ne"), V(0, 6, "D", "nw"),
                T(10, 0, "20 cm", "s"), T(6, 6, "12 cm", "n"), T(0, 3, "6 cm", "w"), T(16.2, 3, "10 cm", "ne"),
              ],
              caption: "Not drawn to scale",
              alt: "Figure ABCD with AB = 20 cm along the bottom, AD = 6 cm on the left, DC = 12 cm along the top and the slanted side BC = 10 cm. The angles at A and D are right angles. A dashed line from C down to AB splits it into a rectangle and a triangle.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the perimeter of $ABCD$.`, marks: 1 },
              { label: "(b)", text: String.raw`Find the area of $ABCD$.`, marks: 2 },
              { label: "(c)", text: String.raw`$E$ is a point on $AB$. The area of triangle $CEB$ is $\tfrac{3}{8}$ of the area of $ABCD$. Find the length of $AE$.`, marks: 2 },
            ],
          },
        ],
      },
      {
        id: "M2-shaded-regions",
        name: String.raw`Shaded regions: whole minus unshaded`,
        tests: String.raw`Finding the area of an awkward shaded shape by taking the unshaded triangles away from the whole figure, and expressing the shaded part as a fraction of the whole.`,
        questions: [
          {
            stem: String.raw`The figure is made up of two squares of sides 10 cm and 6 cm. What is the area of the shaded triangle?`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-2.6, 18.6], y: [-1, 11], equal: true, axes: false,
              polygons: [
                { points: [[0, 10], [10, 6], [16, 0]], fill: true, tone: "accent" },
                { points: [[0, 0], [16, 0], [16, 6], [10, 6], [10, 10], [0, 10]], tone: "ink" },
              ],
              segments: [{ from: [10, 0], to: [10, 6], tone: "ink" }],
              labels: [T(0, 5, "10 cm", "w"), T(16, 3, "6 cm", "e")],
              caption: "Not drawn to scale",
              alt: "A 10 cm square with a 6 cm square beside it on the right, bottoms in line. The shaded triangle joins the top-left corner of the big square, the top-left corner of the small square and the bottom-right corner of the small square.",
            },
            choices: [String.raw`18 cm$^2$`, String.raw`30 cm$^2$`, String.raw`48 cm$^2$`, String.raw`50 cm$^2$`],
          },
          {
            stem: String.raw`$ABCD$ is a rectangle with $AB = 24$ cm and $AD = 15$ cm. $E$ is a point on $AB$ and $F$ is a point on $BC$. $AE = 8$ cm and $BF = 9$ cm.`,
            figure: {
              type: "plot",
              x: [-2.6, 26.6], y: [-1.8, 16.8], equal: true, axes: false,
              polygons: [
                { points: [[0, 15], [8, 0], [24, 9]], fill: true, tone: "accent" },
                { points: [[0, 0], [24, 0], [24, 15], [0, 15]], tone: "ink" },
              ],
              labels: [
                V(0, 0, "A", "sw"), V(24, 0, "B", "se"), V(24, 15, "C", "ne"), V(0, 15, "D", "nw"), V(8, 0, "E", "s"), V(24, 9, "F", "e"),
                T(4, 0, "8 cm", "s"), T(24, 4.5, "9 cm", "e"), T(12, 15, "24 cm", "n"), T(0, 7.5, "15 cm", "w"),
              ],
              caption: "Not drawn to scale",
              alt: "Rectangle ABCD, 24 cm by 15 cm, with AB along the bottom. E is on AB with AE = 8 cm and F is on BC with BF = 9 cm. Triangle DEF is shaded.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the area of the shaded triangle $DEF$.`, marks: 3 },
              { label: "(b)", text: String.raw`What fraction of the rectangle is shaded? Give your answer in its simplest form.`, marks: 1 },
            ],
          },
        ],
      },
      {
        id: "M2-unknown-lengths",
        name: String.raw`Finding unknown lengths from area and perimeter`,
        tests: String.raw`Working backwards from a known area or perimeter: a second height of the same triangle, or the sides of identical rectangles that fit together into a bigger one.`,
        questions: [
          {
            stem: String.raw`In triangle $ABC$, $AD$ is perpendicular to $BC$ and $BE$ is perpendicular to $AC$. $BC = 14$ cm, $AD = 12$ cm and $AC = 15$ cm. Find the length of $BE$.`,
            calculator: false,
            marks: 2,
            figure: {
              type: "plot",
              x: [-1.6, 16], y: [-3, 13.4], equal: true, axes: false,
              polygons: [{ points: [[0, 0], [14, 0], [5, 12]], fill: true, tone: "accent" }],
              segments: [
                { from: [5, 12], to: [5, 0], dashed: true, tone: "ink" },
                { from: [0, 0], to: [8.96, 6.72], dashed: true, tone: "ink" },
                { from: [0, -1.4], to: [14, -1.4], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "14 cm", pos: "s", style: "plain" },
              ],
              rightAngles: [
                { at: [5, 0], a: [1, 0], b: [0, 1], size: 0.55 },
                { at: [8.96, 6.72], a: [3, -4], b: [-4, -3], size: 0.55 },
              ],
              labels: [
                V(5, 12, "A", "n"), V(0, 0, "B", "sw"), V(14, 0, "C", "se"), V(5, 0, "D", "s"), V(8.96, 6.72, "E", "ne"),
                T(5, 9, "12 cm", "e"), T(11.9, 4, "15 cm", "ne"),
              ],
              caption: "Not drawn to scale",
              alt: "Triangle ABC with BC = 14 cm along the bottom and AC = 15 cm. AD = 12 cm is a dashed height from A to BC. BE is a dashed line from B meeting AC at E at a right angle.",
            },
          },
          {
            stem: String.raw`The figure shows a big rectangle made up of 5 identical small rectangles. The perimeter of the big rectangle is 66 cm.`,
            figure: {
              type: "plot",
              x: [-1, 19], y: [-1, 16], equal: true, axes: false,
              polygons: [
                { points: [[0, 6], [6, 6], [6, 15], [0, 15]], fill: true, tone: "accent" },
                { points: [[6, 6], [12, 6], [12, 15], [6, 15]], fill: true, tone: "accent" },
                { points: [[12, 6], [18, 6], [18, 15], [12, 15]], fill: true, tone: "accent" },
                { points: [[0, 0], [9, 0], [9, 6], [0, 6]], fill: true, tone: "accent" },
                { points: [[9, 0], [18, 0], [18, 6], [9, 6]], fill: true, tone: "accent" },
              ],
              caption: "Not drawn to scale",
              alt: "A big rectangle made of 5 identical small rectangles: 3 standing upright side by side along the top, and 2 lying flat side by side along the bottom.",
            },
            parts: [
              { label: "(a)", text: String.raw`Find the breadth of one small rectangle.`, marks: 2 },
              { label: "(b)", text: String.raw`Find the area of the big rectangle.`, marks: 2 },
            ],
          },
        ],
      },
    ],
  });
})();
