H2.addTopic({
  id: "N5",
  title: "Arithmetic Puzzles and Clever Calculation",
  summary: String.raw`Put in signs and brackets to hit a target, calculate cleverly by grouping and compensating, solve magic squares, magic triangles and number pyramids, and estimate and compare large numbers.`,
  concepts: [
    {
      title: String.raw`Order of operations`,
      body: String.raw`Work out a calculation in this order:

1. **Brackets** first.
2. Then $\times$ and $\div$, from **left to right**.
3. Then $+$ and $-$, from **left to right**.

- $20 - 4 \times 3 = 20 - 12 = 8$, but $(20 - 4) \times 3 = 48$.
- $12 \div 3 \times 2 = 4 \times 2 = 8$ (left to right), **not** $12 \div 6 = 2$.
- When you fill in missing signs, check each try with this order, not just left to right.`,
    },
    {
      title: String.raw`Hitting a target with signs`,
      body: String.raw`- **Work backwards** from the target. To make $30$ from $\ldots \times 5$, the part before must make $6$.
- With only $+$ and $-$: start with all $+$. Changing a $+$ to a $-$ in front of a number makes the answer smaller by **twice** that number. Example: $1 + 2 + 3 + 4 = 10$. To make $4$ instead, take away $6$, so put $-$ in front of $3$: $1 + 2 - 3 + 4 = 4$.
- So the numbers with a $-$ in front must add up to (all-plus total $-$ target) $\div 2$. If that is not a whole number, it is impossible.
- To make a result **big**, multiply big numbers and divide by small ones; brackets around a sum before multiplying help too.`,
    },
    {
      title: String.raw`Friendly numbers: make 10, 100, 1000`,
      body: String.raw`- Remember the friendly pairs: $2 \times 5 = 10$, $4 \times 25 = 100$, $8 \times 125 = 1000$.
- In a product you can **change the order**: $25 \times 19 \times 4 = (25 \times 4) \times 19 = 1900$.
- In a sum, pair numbers that make round numbers: $36 + 58 + 64 = (36 + 64) + 58 = 158$.`,
    },
    {
      title: String.raw`Compensation and common factors`,
      body: String.raw`- **Compensation**: round to a friendly number, then fix. $98 \times 23 = 100 \times 23 - 2 \times 23 = 2300 - 46 = 2254$. Also $396 + 205 = 400 + 205 - 4 = 601$.
- **Common factor**: if the same number is multiplied in every part, take it out. $17 \times 6 + 17 \times 4 = 17 \times (6 + 4) = 170$. A lone $17$ is $17 \times 1$.
- Look for **hidden** common factors with decimals: $2.5 \times 8 = 25 \times 0.8$, since moving the decimal point one place each way keeps the product the same.`,
    },
    {
      title: String.raw`Magic squares`,
      body: String.raw`In a **magic square** every row, column and both diagonals have the same total (the **magic sum**).

- Magic sum $=$ (total of all the numbers) $\div 3$, because the three rows use every number once.
- In a $3 \times 3$ magic square the **centre** is the magic sum $\div 3$. For nine evenly spaced numbers, it is the middle one.
- Example: $5, 6, \ldots, 13$ add to $81$, so the magic sum is $27$ and the centre is $9$.
- Use any line with only one gap to fill it in, then keep going.`,
      figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "6", style:  "bold" }, { x:  1.5, y:  2.5, text:  "11", style:  "bold" }, { x:  2.5, y:  2.5, text:  "10", style:  "bold" }, { x:  0.5, y:  1.5, text:  "13", style:  "bold" }, { x:  1.5, y:  1.5, text:  "9", style:  "bold" }, { x:  2.5, y:  1.5, text:  "5", style:  "bold" }, { x:  0.5, y:  0.5, text:  "8", style:  "bold" }, { x:  1.5, y:  0.5, text:  "7", style:  "bold" }, { x:  2.5, y:  0.5, text:  "12", style:  "bold" }], caption:  "The numbers $5$ to $13$: every row, column and diagonal adds to $27$, and the centre is $27 \\div 3 = 9$.", alt:  "A 3 by 3 magic square: top row 6, 11, 10; middle row 13, 9, 5; bottom row 8, 7, 12. Every row, column and diagonal adds to 27." },
    },
    {
      title: String.raw`Magic triangles, stars and wheels`,
      body: String.raw`Numbers are placed in circles so that every line has the same total.

- Add up **all** the lines. A number on two lines (like a corner of a triangle) is counted **twice**; a number on one line is counted once.
- So (line total) $\times$ (number of lines) $=$ (sum of all the numbers) $+$ (sum of the numbers counted twice).
- This tells you the possible corner sums, then trial and improvement finishes the job.`,
      figure: { type:  "plot", x:  [-2.5, 8.5], y:  [-0.8, 5.9959999999999996], equal:  true, axes:  false, segments:  [{ from:  [0.5, 0.0], to:  [2.5, 0.0], tone:  "muted" }, { from:  [3.5, 0.0], to:  [5.5, 0.0], tone:  "muted" }, { from:  [5.75, 0.433], to:  [4.75, 2.165], tone:  "muted" }, { from:  [4.25, 3.031], to:  [3.25, 4.763], tone:  "muted" }, { from:  [2.75, 4.763], to:  [1.75, 3.031], tone:  "muted" }, { from:  [1.25, 2.165], to:  [0.25, 0.433], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [3.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [6.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [4.5, 2.598], r:  0.5, tone:  "accent" }, { c:  [3.0, 5.196], r:  0.5, tone:  "accent" }, { c:  [1.5, 2.598], r:  0.5, tone:  "accent" }], labels:  [{ x:  0.0, y:  0.0, text:  "3", style:  "bold" }, { x:  3.0, y:  0.0, text:  "6", style:  "bold" }, { x:  6.0, y:  0.0, text:  "5", style:  "bold" }, { x:  4.5, y:  2.598, text:  "2", style:  "bold" }, { x:  3.0, y:  5.196, text:  "7", style:  "bold" }, { x:  1.5, y:  2.598, text:  "4", style:  "bold" }], caption:  "Numbers $2$ to $7$, each side adds to $14$. Sides together: $42 = 27 + (3 + 5 + 7)$, because each corner is on two sides.", alt:  "A triangle of six circles holding the numbers 2 to 7: 3, 5 and 7 at the corners, with 6 between 3 and 5, 2 between 5 and 7, and 4 between 7 and 3. Each side adds to 14." },
    },
    {
      title: String.raw`Number pyramids and arrow chains`,
      body: String.raw`- In a **number pyramid** each brick is the sum of the two bricks under it.
- With $3$ bricks at the bottom, the top is (left) $+ \; 2 \times$ (middle) $+$ (right). Bricks in the middle of the bottom row count **more** times. Work out the pattern for bigger pyramids by drawing it.
- In an **arrow chain** (a number goes through $\times 3$, then $- 4$, ...) find the start by working **backwards** and **undoing** each step: $\times$ becomes $\div$, $-$ becomes $+$.
- When you may choose which arrow to use, work backwards from the target to find the shortest way.`,
      figure: { type:  "plot", x:  [-1.5, 7.5], y:  [-0.4, 3.4], equal:  true, axes:  false, polygons:  [{ points:  [[0.0, 0], [2.0, 0], [2.0, 1], [0.0, 1]], fill:  true, tone:  "accent" }, { points:  [[2.0, 0], [4.0, 0], [4.0, 1], [2.0, 1]], fill:  true, tone:  "accent" }, { points:  [[4.0, 0], [6.0, 0], [6.0, 1], [4.0, 1]], fill:  true, tone:  "accent" }, { points:  [[1.0, 1], [3.0, 1], [3.0, 2], [1.0, 2]], fill:  true, tone:  "accent" }, { points:  [[3.0, 1], [5.0, 1], [5.0, 2], [3.0, 2]], fill:  true, tone:  "accent" }, { points:  [[2.0, 2], [4.0, 2], [4.0, 3], [2.0, 3]], fill:  true, tone:  "accent" }], labels:  [{ x:  1.0, y:  0.5, text:  "2", style:  "bold" }, { x:  3.0, y:  0.5, text:  "5", style:  "bold" }, { x:  5.0, y:  0.5, text:  "4", style:  "bold" }, { x:  2.0, y:  1.5, text:  "7", style:  "bold" }, { x:  4.0, y:  1.5, text:  "9", style:  "bold" }, { x:  3.0, y:  2.5, text:  "16", style:  "bold" }], caption:  "Each brick is the sum of the two below it. The top is $2 + 2 \\times 5 + 4 = 16$: the middle number is counted twice.", alt:  "A number pyramid. Bottom row 2, 5, 4; middle row 7, 9; top 16." },
    },
    {
      title: String.raw`Estimating and comparing big numbers`,
      body: String.raw`- **Estimate** by rounding each number: $7.9 \times 41.3$ is about $8 \times 40 = 320$.
- Two numbers with a **fixed sum**: the closer they are, the bigger the product. $6 \times 6 = 36$, $5 \times 7 = 35$, $4 \times 8 = 32$.
- Compare without working out: $45 \times 46$ and $44 \times 47$ both contain $44 \times 46$; the first has an extra $46$ and the second an extra $44$.
- Count digits using $10$s: $2 \times 5 = 10$, so pair up $2$s and $5$s. $4 \times 25 \times 7 = 700$ has $3$ digits.
- Compare repeated products by making the number of factors the same: $2^{6} = (2 \times 2)^{3} = 4^{3}$, which is less than $5^{3}$. (Here $2^{6}$ means six $2$s multiplied together.)`,
    },
  ],
  archetypes: [
    {
      id: "N5-signs-brackets",
      name: String.raw`Signs, brackets and missing operations`,
      tests: String.raw`Fill in $+$, $-$, $\times$, $\div$ or brackets to make a calculation correct, or count how many ways it can be done. Always follow the order of operations: brackets, then $\times$ and $\div$, then $+$ and $-$.`,
      questions: [
        {
          stem: String.raw`Which sign goes in the box to make the calculation correct? $$36 \div 4 \;\square\; 5 = 45$$`,
          difficulty: 1,
          choices: [String.raw`$+$`, String.raw`$-$`, String.raw`$\times$`, String.raw`$\div$`],
          answer: String.raw`(C) $\times$`,
        },
        {
          stem: String.raw`Work out $48 - 6 \times 7 + 18 \div 3$.`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Put **one** pair of brackets into $$3 + 5 \times 8 - 2 \times 4$$ to make the result as large as possible. What is the largest possible result?`,
          difficulty: 2,
          answer: String.raw`$164$`,
        },
        {
          stem: String.raw`Each box is filled with one of $+$, $-$, $\times$, $\div$ (signs may be used more than once), and the usual order of operations is followed. $$8 \;\square\; 4 \;\square\; 2 \;\square\; 6 = 20$$ In how many different ways can the boxes be filled?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Each box is filled with $+$ or $-$. $$1 \;\square\; 2 \;\square\; 3 \;\square\; 4 \;\square\; 5 \;\square\; 6 \;\square\; 7 \;\square\; 8 = 10$$ In how many different ways can the boxes be filled?`,
          difficulty: 3,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Each of the signs $+$, $-$, $\times$ and $\div$ is used exactly once to fill the boxes, with no brackets. $$8 \;\square\; 2 \;\square\; 6 \;\square\; 3 \;\square\; 4$$ What is the largest possible result?`,
          difficulty: 3,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`Each box is filled with $+$ or $\times$, and the usual order of operations is followed. $$3 \;\square\; 3 \;\square\; 3 \;\square\; 3 \;\square\; 3 \;\square\; 3 \;\square\; 3 \;\square\; 3 \;\square\; 3 = 99$$ In how many different ways can the boxes be filled?`,
          difficulty: 4,
          answer: String.raw`$20$`,
        },
      ],
    },
    {
      id: "N5-clever-calc",
      name: String.raw`Clever grouping and compensation`,
      tests: String.raw`Long-looking calculations that become easy: regroup to make $10$, $100$ or $1000$, round and adjust (compensation), or take out a common factor. If the numbers look nasty, look for a pattern before calculating.`,
      questions: [
        {
          stem: String.raw`Work out $125 \times 43 \times 8$.`,
          difficulty: 1,
          answer: String.raw`$43\,000$`,
        },
        {
          stem: String.raw`Work out $297 + 498 + 699$.`,
          difficulty: 1,
          choices: [String.raw`$1494$`, String.raw`$1484$`, String.raw`$1504$`, String.raw`$1394$`],
          answer: String.raw`(A) $1494$`,
        },
        {
          stem: String.raw`Work out $37 \times 64 + 37 \times 35 + 37$.`,
          difficulty: 2,
          answer: String.raw`$3700$`,
        },
        {
          stem: String.raw`Work out $999 \times 999 + 1999$.`,
          difficulty: 2,
          answer: String.raw`$1\,000\,000$`,
        },
        {
          stem: String.raw`Work out $3.14 \times 47 + 31.4 \times 7.2 - 314 \times 0.19$.`,
          difficulty: 3,
          answer: String.raw`$314$`,
        },
        {
          stem: String.raw`Work out $12345 \times 12345 - 12344 \times 12346$.`,
          difficulty: 3,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`Work out $1 \times 24 + 2 \times 23 + 3 \times 22 + \cdots + 23 \times 2 + 24 \times 1$.`,
          difficulty: 4,
          answer: String.raw`$2600$`,
        },
      ],
    },
    {
      id: "N5-magic-squares",
      name: String.raw`Magic squares`,
      tests: String.raw`Complete a magic square or find its magic sum from a few given numbers. Use magic sum $=$ total $\div 3$ and centre $=$ magic sum $\div 3$, then fill any line with one gap.`,
      questions: [
        {
          stem: String.raw`The diagram shows part of a $3 \times 3$ magic square: every row, column and diagonal has the same total. What number goes in the square marked ?`,
          difficulty: 1,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "7", style:  "bold" }, { x:  1.5, y:  2.5, text:  "12", style:  "bold" }, { x:  2.5, y:  2.5, text:  "5", style:  "bold" }, { x:  1.5, y:  1.5, text:  "8", style:  "bold" }, { x:  0.5, y:  0.5, text:  "?", style:  "bold" }], alt:  "A 3 by 3 grid. Top row 7, 12, 5. The centre is 8. The bottom-left square has a question mark. The other squares are empty." },
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`The nine odd numbers $3, 5, 7, \ldots, 19$ are placed in a $3 \times 3$ magic square. What is the magic sum (the total of each row)?`,
          difficulty: 1,
          choices: [String.raw`$27$`, String.raw`$33$`, String.raw`$36$`, String.raw`$99$`],
          answer: String.raw`(B) $33$`,
        },
        {
          stem: String.raw`The diagram shows three of the numbers in a $3 \times 3$ magic square. What number goes in the centre?`,
          difficulty: 2,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "8", style:  "bold" }, { x:  1.5, y:  2.5, text:  "18", style:  "bold" }, { x:  1.5, y:  1.5, text:  "?", style:  "bold" }, { x:  0.5, y:  0.5, text:  "16", style:  "bold" }], alt:  "A 3 by 3 grid. Top-left 8, top-middle 18, bottom-left 16. The centre has a question mark. The other squares are empty." },
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`In a $3 \times 3$ magic square, the four numbers in the corners add up to $48$. What is the magic sum?`,
          difficulty: 2,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`In the $3 \times 3$ grid shown, the **product** of the three numbers in every row, column and diagonal is the same. What number goes in the square marked ?`,
          difficulty: 3,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "2", style:  "bold" }, { x:  2.5, y:  2.5, text:  "?", style:  "bold" }, { x:  0.5, y:  1.5, text:  "256", style:  "bold" }, { x:  1.5, y:  1.5, text:  "16", style:  "bold" }], alt:  "A 3 by 3 grid. Top-left 2, middle-left 256, centre 16. The top-right square has a question mark. The other squares are empty." },
          answer: String.raw`$32$`,
        },
        {
          stem: String.raw`The diagram shows two of the numbers in a $3 \times 3$ magic square. What number goes in the top-left corner?`,
          difficulty: 3,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "?", style:  "bold" }, { x:  2.5, y:  1.5, text:  "14", style:  "bold" }, { x:  1.5, y:  0.5, text:  "4", style:  "bold" }], alt:  "A 3 by 3 grid. Middle-right 14, bottom-middle 4. The top-left square has a question mark. The other squares are empty." },
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Nine different whole numbers, each at least $1$, are placed in a $3 \times 3$ magic square. The largest of the nine numbers is $20$. What is the smallest possible magic sum?`,
          difficulty: 4,
          answer: String.raw`$33$`,
        },
      ],
    },
    {
      id: "N5-magic-shapes",
      name: String.raw`Magic triangles, wheels and cubes`,
      tests: String.raw`Numbers placed in circles on a triangle, wheel or other shape so that every line has the same total. Add all the lines: numbers on two lines are counted twice, which gives the corner (or centre) sum.`,
      questions: [
        {
          stem: String.raw`The numbers $1$ to $6$ are placed in the circles of the triangle shown, one in each circle, so that the three numbers on each side add up to $12$. What is the sum of the three corner numbers?`,
          difficulty: 1,
          choices: [String.raw`$9$`, String.raw`$12$`, String.raw`$15$`, String.raw`$18$`],
          figure: { type:  "plot", x:  [-2.5, 8.5], y:  [-0.8, 5.9959999999999996], equal:  true, axes:  false, segments:  [{ from:  [0.5, 0.0], to:  [2.5, 0.0], tone:  "muted" }, { from:  [3.5, 0.0], to:  [5.5, 0.0], tone:  "muted" }, { from:  [5.75, 0.433], to:  [4.75, 2.165], tone:  "muted" }, { from:  [4.25, 3.031], to:  [3.25, 4.763], tone:  "muted" }, { from:  [2.75, 4.763], to:  [1.75, 3.031], tone:  "muted" }, { from:  [1.25, 2.165], to:  [0.25, 0.433], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [3.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [6.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [4.5, 2.598], r:  0.5, tone:  "accent" }, { c:  [3.0, 5.196], r:  0.5, tone:  "accent" }, { c:  [1.5, 2.598], r:  0.5, tone:  "accent" }], labels:  [], alt:  "A triangle of six empty circles: one at each corner and one in the middle of each side." },
          answer: String.raw`(C) $15$`,
        },
        {
          stem: String.raw`The numbers $1$ to $6$ are placed in the circles, one in each, so that the three numbers on each side have the same total. $1$, $2$ and $3$ are already in the corners. What number goes in the circle marked ?`,
          difficulty: 1,
          figure: { type:  "plot", x:  [-2.5, 8.5], y:  [-0.8, 5.9959999999999996], equal:  true, axes:  false, segments:  [{ from:  [0.5, 0.0], to:  [2.5, 0.0], tone:  "muted" }, { from:  [3.5, 0.0], to:  [5.5, 0.0], tone:  "muted" }, { from:  [5.75, 0.433], to:  [4.75, 2.165], tone:  "muted" }, { from:  [4.25, 3.031], to:  [3.25, 4.763], tone:  "muted" }, { from:  [2.75, 4.763], to:  [1.75, 3.031], tone:  "muted" }, { from:  [1.25, 2.165], to:  [0.25, 0.433], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [3.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [6.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [4.5, 2.598], r:  0.5, tone:  "accent" }, { c:  [3.0, 5.196], r:  0.5, tone:  "accent" }, { c:  [1.5, 2.598], r:  0.5, tone:  "accent" }], labels:  [{ x:  0.0, y:  0.0, text:  "1", style:  "bold" }, { x:  3.0, y:  0.0, text:  "?", style:  "bold" }, { x:  6.0, y:  0.0, text:  "2", style:  "bold" }, { x:  3.0, y:  5.196, text:  "3", style:  "bold" }], alt:  "A triangle of six circles. The corners hold 1 (bottom left), 2 (bottom right) and 3 (top). The circle between 1 and 2 has a question mark; the other two side circles are empty." },
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`The numbers $1$ to $9$ are placed in the circles of the triangle shown, one in each. The totals of the four numbers on the three sides are $18$, $21$ and $24$. What is the sum of the three corner numbers?`,
          difficulty: 2,
          figure: { type:  "plot", x:  [-2.5, 8.5], y:  [-0.8, 5.9959999999999996], equal:  true, axes:  false, segments:  [{ from:  [0.5, 0.0], to:  [1.5, 0.0], tone:  "muted" }, { from:  [2.5, 0.0], to:  [3.5, 0.0], tone:  "muted" }, { from:  [4.5, 0.0], to:  [5.5, 0.0], tone:  "muted" }, { from:  [5.75, 0.433], to:  [5.25, 1.299], tone:  "muted" }, { from:  [4.75, 2.165], to:  [4.25, 3.031], tone:  "muted" }, { from:  [3.75, 3.897], to:  [3.25, 4.763], tone:  "muted" }, { from:  [2.75, 4.763], to:  [2.25, 3.897], tone:  "muted" }, { from:  [1.75, 3.031], to:  [1.25, 2.165], tone:  "muted" }, { from:  [0.75, 1.299], to:  [0.25, 0.433], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [2.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [4.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [6.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [5.0, 1.732], r:  0.5, tone:  "accent" }, { c:  [4.0, 3.464], r:  0.5, tone:  "accent" }, { c:  [3.0, 5.196], r:  0.5, tone:  "accent" }, { c:  [2.0, 3.464], r:  0.5, tone:  "accent" }, { c:  [1.0, 1.732], r:  0.5, tone:  "accent" }], labels:  [], alt:  "A triangle of nine empty circles: one at each corner and two along each side, so each side has four circles." },
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`The numbers $1$ to $9$ are placed in the nine circles of the wheel, one in each, so that the three numbers on each straight line through the centre have the same total. How many different numbers could go in the centre circle?`,
          difficulty: 2,
          figure: { type:  "plot", x:  [-4.5, 4.5], y:  [-3.2, 3.2], equal:  true, axes:  false, segments:  [{ from:  [0.0, 0.5], to:  [0.0, 1.9], tone:  "muted" }, { from:  [0.354, 0.354], to:  [1.343, 1.343], tone:  "muted" }, { from:  [0.5, 0.0], to:  [1.9, 0.0], tone:  "muted" }, { from:  [0.354, -0.354], to:  [1.343, -1.343], tone:  "muted" }, { from:  [0.0, -0.5], to:  [0.0, -1.9], tone:  "muted" }, { from:  [-0.354, -0.354], to:  [-1.343, -1.343], tone:  "muted" }, { from:  [-0.5, 0.0], to:  [-1.9, 0.0], tone:  "muted" }, { from:  [-0.354, 0.354], to:  [-1.343, 1.343], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [0.0, 2.4], r:  0.5, tone:  "accent" }, { c:  [1.697, 1.697], r:  0.5, tone:  "accent" }, { c:  [2.4, 0.0], r:  0.5, tone:  "accent" }, { c:  [1.697, -1.697], r:  0.5, tone:  "accent" }, { c:  [0.0, -2.4], r:  0.5, tone:  "accent" }, { c:  [-1.697, -1.697], r:  0.5, tone:  "accent" }, { c:  [-2.4, -0.0], r:  0.5, tone:  "accent" }, { c:  [-1.697, 1.697], r:  0.5, tone:  "accent" }], labels:  [], alt:  "A centre circle with eight circles around it. Four straight lines pass through the centre, each joining two opposite outer circles." },
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`The numbers $1$ to $9$ are placed in the circles of the triangle shown, one in each, so that the four numbers on each side add up to $20$. There are many ways to do this, but one of the numbers is at a corner in every one of them. Which number is it?`,
          difficulty: 3,
          figure: { type:  "plot", x:  [-2.5, 8.5], y:  [-0.8, 5.9959999999999996], equal:  true, axes:  false, segments:  [{ from:  [0.5, 0.0], to:  [1.5, 0.0], tone:  "muted" }, { from:  [2.5, 0.0], to:  [3.5, 0.0], tone:  "muted" }, { from:  [4.5, 0.0], to:  [5.5, 0.0], tone:  "muted" }, { from:  [5.75, 0.433], to:  [5.25, 1.299], tone:  "muted" }, { from:  [4.75, 2.165], to:  [4.25, 3.031], tone:  "muted" }, { from:  [3.75, 3.897], to:  [3.25, 4.763], tone:  "muted" }, { from:  [2.75, 4.763], to:  [2.25, 3.897], tone:  "muted" }, { from:  [1.75, 3.031], to:  [1.25, 2.165], tone:  "muted" }, { from:  [0.75, 1.299], to:  [0.25, 0.433], tone:  "muted" }], circles:  [{ c:  [0.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [2.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [4.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [6.0, 0.0], r:  0.5, tone:  "accent" }, { c:  [5.0, 1.732], r:  0.5, tone:  "accent" }, { c:  [4.0, 3.464], r:  0.5, tone:  "accent" }, { c:  [3.0, 5.196], r:  0.5, tone:  "accent" }, { c:  [2.0, 3.464], r:  0.5, tone:  "accent" }, { c:  [1.0, 1.732], r:  0.5, tone:  "accent" }], labels:  [], alt:  "A triangle of nine empty circles: one at each corner and two along each side, so each side has four circles." },
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`The numbers $1$ to $7$ are placed in the seven regions made by three overlapping circles, one in each region, so that the four numbers inside each circle have the same total. What is the largest possible total?`,
          difficulty: 3,
          figure: { type:  "plot", x:  [0, 10], y:  [0.3, 6.6], equal:  true, axes:  false, circles:  [{ c:  [4, 4.3], r:  2, tone:  "accent" }, { c:  [6, 4.3], r:  2, tone:  "good" }, { c:  [5, 2.6], r:  2, tone:  "warn" }, { c:  [3.0, 5.0], r:  0.3, tone:  "ink" }, { c:  [7.0, 5.0], r:  0.3, tone:  "ink" }, { c:  [5, 1.4], r:  0.3, tone:  "ink" }, { c:  [5, 5.3], r:  0.3, tone:  "ink" }, { c:  [3.9, 3.0], r:  0.3, tone:  "ink" }, { c:  [6.1, 3.0], r:  0.3, tone:  "ink" }, { c:  [5, 3.8], r:  0.3, tone:  "ink" }], alt:  "Three overlapping circles making seven regions, with a small empty circle in each region for a number." },
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`The numbers $1$ to $8$ are placed at the eight corners of a cube, one at each corner, so that the four numbers on every face of the cube have the same total. The number $1$ is at the corner shown. Which numbers could be at the corner marked ? (the corner of the cube farthest from the $1$)? Give all the possibilities.`,
          difficulty: 4,
          figure: { type:  "plot", x:  [-2.2, 6.6], y:  [-0.6, 4.7], equal:  true, axes:  false, segments:  [{ from:  [0.34, 0.0], to:  [2.66, 0.0], tone:  "muted" }, { from:  [3.0, 0.34], to:  [3.0, 2.66], tone:  "muted" }, { from:  [2.66, 3.0], to:  [0.34, 3.0], tone:  "muted" }, { from:  [0.0, 2.66], to:  [0.0, 0.34], tone:  "muted" }, { from:  [4.4, 1.44], to:  [4.4, 3.76], tone:  "muted" }, { from:  [4.06, 4.1], to:  [1.74, 4.1], tone:  "muted" }, { from:  [3.267, 0.21], to:  [4.133, 0.89], tone:  "muted" }, { from:  [3.267, 3.21], to:  [4.133, 3.89], tone:  "muted" }, { from:  [0.267, 3.21], to:  [1.133, 3.89], tone:  "muted" }, { from:  [1.74, 1.1], to:  [4.06, 1.1], tone:  "muted", dashed:  true }, { from:  [1.4, 1.44], to:  [1.4, 3.76], tone:  "muted", dashed:  true }, { from:  [0.267, 0.21], to:  [1.133, 0.89], tone:  "muted", dashed:  true }], circles:  [{ c:  [0, 0], r:  0.34, tone:  "accent" }, { c:  [3, 0], r:  0.34, tone:  "accent" }, { c:  [3, 3], r:  0.34, tone:  "accent" }, { c:  [0, 3], r:  0.34, tone:  "accent" }, { c:  [1.4, 1.1], r:  0.34, tone:  "accent" }, { c:  [4.4, 1.1], r:  0.34, tone:  "accent" }, { c:  [4.4, 4.1], r:  0.34, tone:  "accent" }, { c:  [1.4, 4.1], r:  0.34, tone:  "accent" }], labels:  [{ x:  0, y:  0, text:  "1", style:  "bold" }, { x:  4.4, y:  4.1, text:  "?", style:  "bold" }], alt:  "A cube drawn with a small circle at each of its eight corners. The front bottom-left corner holds 1. The back top-right corner, farthest from it, has a question mark. Hidden edges are dashed." },
          answer: String.raw`$2$, $3$ or $5$`,
        },
      ],
    },
    {
      id: "N5-grids-arrows",
      name: String.raw`Number pyramids, grids and arrow chains`,
      tests: String.raw`Number pyramids (each brick is the sum of the two below), shape grids with row totals or products, and chains of operations. Undo steps to work backwards, and notice which numbers count more than once.`,
      questions: [
        {
          stem: String.raw`In the number pyramid, each brick is the sum of the two bricks directly below it. What number goes in the top brick?`,
          difficulty: 1,
          figure: { type:  "plot", x:  [-1.5, 7.5], y:  [-0.4, 3.4], equal:  true, axes:  false, polygons:  [{ points:  [[0.0, 0], [2.0, 0], [2.0, 1], [0.0, 1]], fill:  true, tone:  "accent" }, { points:  [[2.0, 0], [4.0, 0], [4.0, 1], [2.0, 1]], fill:  true, tone:  "accent" }, { points:  [[4.0, 0], [6.0, 0], [6.0, 1], [4.0, 1]], fill:  true, tone:  "accent" }, { points:  [[1.0, 1], [3.0, 1], [3.0, 2], [1.0, 2]], fill:  false, tone:  "muted" }, { points:  [[3.0, 1], [5.0, 1], [5.0, 2], [3.0, 2]], fill:  false, tone:  "muted" }, { points:  [[2.0, 2], [4.0, 2], [4.0, 3], [2.0, 3]], fill:  false, tone:  "muted" }], labels:  [{ x:  1.0, y:  0.5, text:  "7", style:  "bold" }, { x:  3.0, y:  0.5, text:  "4", style:  "bold" }, { x:  5.0, y:  0.5, text:  "9", style:  "bold" }], alt:  "A number pyramid. The bottom row is 7, 4, 9. The two bricks in the middle row and the top brick are empty." },
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`A number goes through this chain: multiply by $4$, then add $6$, then divide by $2$. The result is $25$. What was the starting number?`,
          difficulty: 1,
          choices: [String.raw`$11$`, String.raw`$14$`, String.raw`$16$`, String.raw`$26$`],
          answer: String.raw`(A) $11$`,
        },
        {
          stem: String.raw`In the number pyramid, each brick is the sum of the two bricks directly below it. What number goes in the brick marked ?`,
          difficulty: 2,
          figure: { type:  "plot", x:  [-1.5, 9.5], y:  [-0.4, 4.4], equal:  true, axes:  false, polygons:  [{ points:  [[0.0, 0], [2.0, 0], [2.0, 1], [0.0, 1]], fill:  true, tone:  "accent" }, { points:  [[2.0, 0], [4.0, 0], [4.0, 1], [2.0, 1]], fill:  false, tone:  "muted" }, { points:  [[4.0, 0], [6.0, 0], [6.0, 1], [4.0, 1]], fill:  true, tone:  "accent" }, { points:  [[6.0, 0], [8.0, 0], [8.0, 1], [6.0, 1]], fill:  true, tone:  "accent" }, { points:  [[1.0, 1], [3.0, 1], [3.0, 2], [1.0, 2]], fill:  false, tone:  "muted" }, { points:  [[3.0, 1], [5.0, 1], [5.0, 2], [3.0, 2]], fill:  false, tone:  "muted" }, { points:  [[5.0, 1], [7.0, 1], [7.0, 2], [5.0, 2]], fill:  false, tone:  "muted" }, { points:  [[2.0, 2], [4.0, 2], [4.0, 3], [2.0, 3]], fill:  false, tone:  "muted" }, { points:  [[4.0, 2], [6.0, 2], [6.0, 3], [4.0, 3]], fill:  false, tone:  "muted" }, { points:  [[3.0, 3], [5.0, 3], [5.0, 4], [3.0, 4]], fill:  true, tone:  "accent" }], labels:  [{ x:  1.0, y:  0.5, text:  "5", style:  "bold" }, { x:  3.0, y:  0.5, text:  "?", style:  "bold" }, { x:  5.0, y:  0.5, text:  "3", style:  "bold" }, { x:  7.0, y:  0.5, text:  "8", style:  "bold" }, { x:  4.0, y:  3.5, text:  "61", style:  "bold" }], alt:  "A number pyramid with four bricks in the bottom row: 5, a question mark, 3, 8. The top brick is 61. The other bricks are empty." },
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`In the grid, each shape stands for a whole number, and the same shapes stand for the same number. The total of each row is shown. What number does the diamond stand for?`,
          difficulty: 2,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.25, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }, { points:  [[2.23, 2.28], [2.77, 2.28], [2.5, 2.76]], fill:  true, tone:  "good" }, { points:  [[0.22999999999999998, 1.28], [0.77, 1.28], [0.5, 1.76]], fill:  true, tone:  "good" }, { points:  [[1.23, 1.28], [1.77, 1.28], [1.5, 1.76]], fill:  true, tone:  "good" }, { points:  [[0.5, 0.2], [0.74, 0.5], [0.5, 0.8], [0.26, 0.5]], fill:  true, tone:  "warn" }, { points:  [[1.5, 0.2], [1.74, 0.5], [1.5, 0.8], [1.26, 0.5]], fill:  true, tone:  "warn" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  3, y:  2.5, text:  "= 16", pos:  "e" }, { x:  3, y:  1.5, text:  "= 23", pos:  "e" }, { x:  3, y:  0.5, text:  "= 17", pos:  "e" }], alt:  "A 3 by 3 grid of shapes. Row 1: circle, circle, triangle, total 16. Row 2: triangle, triangle, circle, total 23. Row 3: diamond, diamond, circle, total 17.", circles:  [{ c:  [0.5, 2.5], r:  0.25, fill:  true, tone:  "accent" }, { c:  [1.5, 2.5], r:  0.25, fill:  true, tone:  "accent" }, { c:  [2.5, 1.5], r:  0.25, fill:  true, tone:  "accent" }, { c:  [2.5, 0.5], r:  0.25, fill:  true, tone:  "accent" }] },
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`The numbers $1$, $2$, $3$, $4$, $5$ are placed in the bottom row of the pyramid in some order, one in each brick. Each brick above is the sum of the two bricks directly below it. What is the largest possible number in the top brick?`,
          difficulty: 3,
          figure: { type:  "plot", x:  [-1.5, 11.5], y:  [-0.4, 5.4], equal:  true, axes:  false, polygons:  [{ points:  [[0.0, 0], [2.0, 0], [2.0, 1], [0.0, 1]], fill:  false, tone:  "muted" }, { points:  [[2.0, 0], [4.0, 0], [4.0, 1], [2.0, 1]], fill:  false, tone:  "muted" }, { points:  [[4.0, 0], [6.0, 0], [6.0, 1], [4.0, 1]], fill:  false, tone:  "muted" }, { points:  [[6.0, 0], [8.0, 0], [8.0, 1], [6.0, 1]], fill:  false, tone:  "muted" }, { points:  [[8.0, 0], [10.0, 0], [10.0, 1], [8.0, 1]], fill:  false, tone:  "muted" }, { points:  [[1.0, 1], [3.0, 1], [3.0, 2], [1.0, 2]], fill:  false, tone:  "muted" }, { points:  [[3.0, 1], [5.0, 1], [5.0, 2], [3.0, 2]], fill:  false, tone:  "muted" }, { points:  [[5.0, 1], [7.0, 1], [7.0, 2], [5.0, 2]], fill:  false, tone:  "muted" }, { points:  [[7.0, 1], [9.0, 1], [9.0, 2], [7.0, 2]], fill:  false, tone:  "muted" }, { points:  [[2.0, 2], [4.0, 2], [4.0, 3], [2.0, 3]], fill:  false, tone:  "muted" }, { points:  [[4.0, 2], [6.0, 2], [6.0, 3], [4.0, 3]], fill:  false, tone:  "muted" }, { points:  [[6.0, 2], [8.0, 2], [8.0, 3], [6.0, 3]], fill:  false, tone:  "muted" }, { points:  [[3.0, 3], [5.0, 3], [5.0, 4], [3.0, 4]], fill:  false, tone:  "muted" }, { points:  [[5.0, 3], [7.0, 3], [7.0, 4], [5.0, 4]], fill:  false, tone:  "muted" }, { points:  [[4.0, 4], [6.0, 4], [6.0, 5], [4.0, 5]], fill:  false, tone:  "muted" }], labels:  [], alt:  "A number pyramid with five empty bricks in the bottom row, then four, three, two and one brick above." },
          answer: String.raw`$61$`,
        },
        {
          stem: String.raw`A calculator has two buttons. Button A doubles the number on the screen. Button B adds $3$ to it. The screen starts at $1$. What is the smallest number of button presses needed to make the screen show $100$?`,
          difficulty: 3,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Each of the numbers $1$ to $9$ is placed once in the grid. The number to the right of each row is the **product** of the three numbers in that row, and the number below each column is the **sum** of the three numbers in that column. What number goes in the top-left square?`,
          difficulty: 4,
          figure: { type:  "plot", x:  [-2, 5], y:  [-0.8, 3.25], equal:  true, axes:  false, polygons:  [{ points:  [[0, 0], [3, 0], [3, 3], [0, 3]], tone:  "ink" }], segments:  [{ from:  [1, 0], to:  [1, 3], tone:  "ink" }, { from:  [2, 0], to:  [2, 3], tone:  "ink" }, { from:  [0, 1], to:  [3, 1], tone:  "ink" }, { from:  [0, 2], to:  [3, 2], tone:  "ink" }], labels:  [{ x:  0.5, y:  2.5, text:  "?", style:  "bold" }, { x:  3, y:  2.5, text:  "168", pos:  "e" }, { x:  3, y:  1.5, text:  "90", pos:  "e" }, { x:  3, y:  0.5, text:  "24", pos:  "e" }, { x:  0.5, y:  0, text:  "22", pos:  "s" }, { x:  1.5, y:  0, text:  "11", pos:  "s" }, { x:  2.5, y:  0, text:  "12", pos:  "s" }], alt:  "A 3 by 3 grid. The products of the rows, from top to bottom, are 168, 90 and 24, written to the right. The sums of the columns, from left to right, are 22, 11 and 12, written below. The top-left square has a question mark." },
          answer: String.raw`$7$`,
        },
      ],
    },
    {
      id: "N5-estimate-compare",
      name: String.raw`Estimation and comparing large numbers`,
      tests: String.raw`Estimate a calculation, decide which product or fraction is bigger, or count digits, without working everything out. Round sensibly, keep sums or numbers of factors the same, and pair $2$s with $5$s to make $10$s.`,
      questions: [
        {
          stem: String.raw`Which is closest to $4.9 \times 61.2$?`,
          difficulty: 1,
          choices: [String.raw`$30$`, String.raw`$300$`, String.raw`$3000$`, String.raw`$30\,000$`],
          answer: String.raw`(B) $300$`,
        },
        {
          stem: String.raw`Which of these is the largest?`,
          difficulty: 1,
          choices: [String.raw`$39 \times 41$`, String.raw`$38 \times 42$`, String.raw`$40 \times 40$`, String.raw`$37 \times 43$`],
          answer: String.raw`(C) $40 \times 40$`,
        },
        {
          stem: String.raw`Compare $33333 \times 66666$ and $22222 \times 99999$.`,
          difficulty: 2,
          choices: [String.raw`$33333 \times 66666$ is larger`, String.raw`$22222 \times 99999$ is larger`, String.raw`They are equal`],
          answer: String.raw`(C) They are equal`,
        },
        {
          stem: String.raw`How many digits does the product $8 \times 8 \times 8 \times 8 \times 25 \times 25 \times 25 \times 25 \times 25$ have?`,
          difficulty: 2,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Which of these four numbers is the largest? $$2^{60}, \quad 3^{48}, \quad 5^{36}, \quad 6^{24}$$ ($2^{60}$ means sixty $2$s multiplied together.)`,
          difficulty: 3,
          answer: String.raw`$5^{36}$`,
        },
        {
          stem: String.raw`What is the whole-number part of $$\frac{10}{11} + \frac{11}{12} + \frac{12}{13} + \cdots + \frac{19}{20}\,?$$`,
          difficulty: 3,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Each of the digits $1, 2, 3, \ldots, 9$ is used exactly once to make three three-digit numbers. Their product is as large as possible. What is the smallest of the three numbers?`,
          difficulty: 4,
          answer: String.raw`$763$`,
        },
      ],
    },
  ],
});
