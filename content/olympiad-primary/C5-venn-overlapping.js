H2.addTopic({
  id: "C5",
  title: "Venn Diagrams and Overlapping Groups",
  summary: String.raw`Sort people or numbers into two or three overlapping groups with Venn diagrams, find the greatest and least possible overlaps, count multiples of 2 or 3, and work with overlapping lengths and times.`,
  concepts: [
    {
      title: String.raw`Draw the circles and fill the overlap first`,
      body: String.raw`A **Venn diagram** has one circle for each group, inside a box for everyone.

- People in **both** groups go in the overlap. People in **neither** group go outside the circles but inside the box.
- Always fill the **overlap first**, then the "only" parts, then the outside.
- Example: $20$ children; $12$ like tea, $9$ like coffee and $4$ like both. Tea only $= 12 - 4 = 8$, coffee only $= 9 - 4 = 5$, neither $= 20 - 8 - 4 - 5 = 3$.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 6],
        equal: true,
        axes: false,
        polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" }],
        circles: [
          { c: [3.9, 3], r: 2.2, fill: true, label: "Tea", labelAt: [1.9, 5.1], pos: "c" },
          { c: [6.1, 3], r: 2.2, fill: true, tone: "good", label: "Coffee", labelAt: [8.3, 5.1], pos: "c" },
        ],
        labels: [
          { x: 2.7, y: 3, text: "8" },
          { x: 5, y: 3, text: "4" },
          { x: 7.3, y: 3, text: "5" },
          { x: 9, y: 1, text: "3" },
        ],
        caption: String.raw`Overlap $4$ first, then tea only $8$, coffee only $5$, and $3$ outside: $8 + 4 + 5 + 3 = 20$.`,
        alt: "A box containing two overlapping circles labelled Tea and Coffee. Tea only holds 8, the overlap holds 4, coffee only holds 5 and 3 are outside both circles.",
      },
    },
    {
      title: String.raw`Add the groups, then take away the double count`,
      body: String.raw`- If you add the two group sizes, everyone in the overlap is counted **twice**.
- In **at least one** group $=$ first group $+$ second group $-$ both.
- **Neither** $=$ total $-$ (in at least one group).
- **Both** $=$ first group $+$ second group $-$ (in at least one group).
- Example: $15$ pupils, $9$ have a brother, $8$ have a sister, and every pupil has at least one. Both $= 9 + 8 - 15 = 2$.`,
    },
    {
      title: String.raw`Three circles: work from the middle outwards`,
      body: String.raw`Three circles make $7$ regions inside the box.

- Fill the centre (in all three) first. Next fill each "two groups only" part: (in both groups) $-$ (centre). Last, fill each "one group only" part.
- Careful: "$5$ like A and B" usually includes the people who like all three.
- Example: $6$ are in A and B, and $2$ are in all three, so $6 - 2 = 4$ are in A and B **only**.`,
      figure: {
        type: "plot",
        x: [0, 10],
        y: [0, 7.2],
        equal: true,
        axes: false,
        polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 6.9], [0.3, 6.9]], tone: "ink" }],
        circles: [
          { c: [4, 4.3], r: 2, fill: true, label: "A", labelAt: [1.7, 6.1], pos: "c" },
          { c: [6, 4.3], r: 2, fill: true, tone: "good", label: "B", labelAt: [8.3, 6.1], pos: "c" },
          { c: [5, 2.6], r: 2, fill: true, tone: "warn", label: "C", labelAt: [7.6, 1.2], pos: "c" },
        ],
        labels: [
          { x: 3.0, y: 5.0, text: "A only", style: "small" },
          { x: 7.0, y: 5.0, text: "B only", style: "small" },
          { x: 5, y: 1.4, text: "C only", style: "small" },
          { x: 5, y: 3.75, text: "all 3", style: "small" },
        ],
        caption: String.raw`Seven regions. Fill "all 3" first, then the three "two only" parts, then the "only" parts.`,
        alt: "A box with three overlapping circles A, B and C making seven regions. The regions A only, B only, C only and the centre region all three are labelled.",
      },
    },
    {
      title: String.raw`Count each person by how many groups they are in`,
      body: String.raw`When you add the sizes of three groups:

- a person in **exactly one** group is counted once,
- a person in **exactly two** groups is counted twice,
- a person in **all three** groups is counted three times.

So (sum of the group sizes) $=$ (exactly one) $+ \; 2 \times$ (exactly two) $+ \; 3 \times$ (all three).

Example: $3$ people, each in exactly two of the clubs X, Y, Z. The club sizes add up to $3 \times 2 = 6$.`,
    },
    {
      title: String.raw`Greatest and least possible overlap`,
      body: String.raw`- **Greatest** overlap: put the smaller group completely inside the bigger one. The overlap is the size of the smaller group.
- **Least** overlap: spread the two groups apart as much as possible. If they cannot fit side by side in the total, the overlap is at least (first $+$ second $-$ total).
- Example: $10$ pupils; $7$ like art and $6$ like music. Both is at most $6$ and at least $7 + 6 - 10 = 3$.
- Picture it as two strips on a line as long as the total: push one strip to the left end and the other to the right end.`,
      figure: {
        type: "plot",
        x: [-0.6, 10.8],
        y: [-0.9, 3.4],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 1.7], [7, 1.7], [7, 2.5], [0, 2.5]], fill: true, tone: "accent" },
          { points: [[4, 0.5], [10, 0.5], [10, 1.3], [4, 1.3]], fill: true, tone: "good" },
          { points: [[4, 0.5], [7, 0.5], [7, 2.5], [4, 2.5]], tone: "warn", dashed: true },
        ],
        segments: [
          { from: [0, 0], to: [10, 0], tone: "ink" },
          { from: [0, -0.15], to: [0, 0.15], tone: "ink" },
          { from: [10, -0.15], to: [10, 0.15], tone: "ink" },
        ],
        labels: [
          { x: 3.5, y: 2.5, text: "art 7", pos: "n", style: "small" },
          { x: 8.5, y: 0.9, text: "music 6", style: "small" },
          { x: 5.5, y: 2.5, text: "both 3", pos: "n", style: "small", tone: "warn" },
          { x: 5, y: 0, text: "10 pupils", pos: "s", style: "small" },
        ],
        caption: String.raw`Pushed to opposite ends, the strips still overlap by $7 + 6 - 10 = 3$.`,
        alt: "A line 10 units long. A strip of length 7 starts at the left end and a strip of length 6 ends at the right end. They overlap by 3 units, marked by a dashed box.",
      },
    },
    {
      title: String.raw`Counting multiples of 2 or 3`,
      body: String.raw`- From $1$ to $n$, the number of multiples of $k$ is the whole-number part of $n \div k$. From $1$ to $50$ there are $50 \div 7 = 7$ remainder $1$, so $7$ multiples of $7$.
- Numbers that are multiples of **both** $a$ and $b$ are the multiples of the **LCM** of $a$ and $b$ (not always $a \times b$!).
- Multiples of $a$ **or** $b$ $=$ (multiples of $a$) $+$ (multiples of $b$) $-$ (multiples of both).
- Example: from $1$ to $28$, multiples of $2$ or $7$: $14 + 4 - 2 = 16$.
- "Neither" $=$ how many numbers there are $-$ (multiples of $a$ or $b$).`,
    },
    {
      title: String.raw`Overlapping lengths and times`,
      body: String.raw`- Strips laid with overlaps: **total length $=$ sum of the lengths $-$ the overlaps**. Two $10$ cm strips overlapping by $4$ cm cover $16$ cm.
- $n$ strips in a line have $n - 1$ overlaps.
- For times, draw a **time line** and mark when each thing starts and stops. The overlap starts at the later start and ends at the earlier end.
- Example: one shop is open 9 a.m. to 5 p.m. and another 11 a.m. to 8 p.m. Both are open from 11 a.m. to 5 p.m., which is $6$ hours.`,
      figure: {
        type: "plot",
        x: [-0.6, 17.6],
        y: [-1.2, 3.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0.6], [10, 0.6], [10, 1.6], [0, 1.6]], fill: true, tone: "accent" },
          { points: [[6, 0.6], [16, 0.6], [16, 1.6], [6, 1.6]], fill: true, tone: "good" },
        ],
        segments: [
          { from: [0, 2.2], to: [10, 2.2], tone: "accent", arrow: true, arrowStart: true, label: "10 cm", style: "small" },
          { from: [6, 0], to: [16, 0], tone: "good", arrow: true, arrowStart: true, label: "10 cm", pos: "s", style: "small" },
        ],
        labels: [{ x: 8, y: 1.1, text: "4 cm", style: "small" }],
        caption: String.raw`The $4$ cm overlap is counted in both strips: $10 + 10 - 4 = 16$ cm.`,
        alt: "Two 10 cm strips side by side overlapping by 4 cm.",
      },
    },
    {
      title: String.raw`Fractions and percentages of groups`,
      body: String.raw`- With percentages, take the whole group as $100\%$ and use the same rules: at least one $= A\% + B\% -$ both$\%$.
- "$\tfrac{1}{6}$ of the A group are also in B" means **both** $= \tfrac16$ of A. Draw A as $6$ units, with $1$ unit in the overlap.
- If the overlap is a fraction of **each** group, let the overlap be the units. Example: both is $\tfrac12$ of A and $\tfrac15$ of B. Then A $= 2$ units, B $= 5$ units and at least one $= 2 + 5 - 1 = 6$ units.`,
    },
  ],
  archetypes: [
    {
      id: "C5-two-sets",
      name: String.raw`Two groups: both, either or neither`,
      tests: String.raw`Two overlapping groups in a class or survey. Find "both", "only" or "neither" with a two-circle Venn diagram; harder ones add a ratio or a hidden condition linking the regions.`,
      questions: [
        {
          stem: String.raw`In a class of $40$ pupils, $25$ like apples, $18$ like bananas and $8$ like both. How many pupils like neither apples nor bananas?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 6],
            equal: true,
            axes: false,
            polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 5.7], [0.3, 5.7]], tone: "ink" }],
            circles: [
              { c: [3.9, 3], r: 2.2, fill: true, label: "Apples", labelAt: [1.7, 5.1], pos: "c" },
              { c: [6.1, 3], r: 2.2, fill: true, tone: "good", label: "Bananas", labelAt: [8.3, 5.1], pos: "c" },
            ],
            alt: "A box containing two overlapping circles labelled Apples and Bananas. No numbers are filled in.",
          },
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Each of the $30$ pupils in a class can swim or cycle, or both. $17$ can swim and $20$ can cycle. How many pupils can do both?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$7$`, String.raw`$10$`, String.raw`$13$`],
          answer: String.raw`(B) $7$`,
        },
        {
          stem: String.raw`Of $50$ children, $32$ have a cat or a dog or both. $20$ have a dog and $7$ have both a cat and a dog. How many children have a cat?`,
          difficulty: 2,
          answer: String.raw`$19$`,
        },
        {
          stem: String.raw`$48$ people were asked whether they like durians and whether they like mangosteens. $12$ like both and $4$ like neither. Three times as many like only durians as like only mangosteens. How many people like durians?`,
          difficulty: 2,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`All $40$ pupils of a class took a Maths test and a Science test. $30$ passed Maths and $28$ passed Science. The number of pupils who failed both tests is a quarter of the number who passed both. How many pupils passed both tests?`,
          difficulty: 3,
          answer: String.raw`$24$`,
        },
        {
          stem: String.raw`Some children were asked about two TV shows. $23$ watched Show A, $32$ watched Show B and $9$ watched neither. The number who watched exactly one of the shows is $3$ times the number who watched both. How many children were asked?`,
          difficulty: 3,
          answer: String.raw`$53$`,
        },
        {
          stem: String.raw`Each child in a group has a cat, a dog, both or neither. The number of children who have a cat is $13$ more than the number who have only a dog. The number of children who have a dog is $5$ more than the number who have only a cat. How many children have both a cat and a dog?`,
          difficulty: 4,
          answer: String.raw`$9$`,
        },
      ],
    },
    {
      id: "C5-three-sets",
      name: String.raw`Three overlapping groups`,
      tests: String.raw`Three groups (three sports, three subjects) drawn as three circles. Read regions from a diagram, fill the seven regions from the centre outwards, or use "sum of group sizes $=$ exactly one $+ \, 2 \times$ exactly two $+ \, 3 \times$ all three".`,
      questions: [
        {
          stem: String.raw`The Venn diagram shows how many pupils in a class like apples (A), bananas (B) and cherries (C). How many pupils like exactly two of the three fruits?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 7.2],
            equal: true,
            axes: false,
            polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 6.9], [0.3, 6.9]], tone: "ink" }],
            circles: [
              { c: [4, 4.3], r: 2, fill: true, label: "A", labelAt: [1.7, 6.1], pos: "c" },
              { c: [6, 4.3], r: 2, fill: true, tone: "good", label: "B", labelAt: [8.3, 6.1], pos: "c" },
              { c: [5, 2.6], r: 2, fill: true, tone: "warn", label: "C", labelAt: [7.6, 1.2], pos: "c" },
            ],
            labels: [
              { x: 3.0, y: 5.0, text: "7" },
              { x: 7.0, y: 5.0, text: "5" },
              { x: 5, y: 1.4, text: "6" },
              { x: 5, y: 5.3, text: "3" },
              { x: 3.9, y: 3.0, text: "4" },
              { x: 6.1, y: 3.0, text: "2" },
              { x: 5, y: 3.8, text: "1" },
              { x: 9, y: 0.9, text: "2" },
            ],
            alt: "Three overlapping circles A, B, C in a box. A only 7, B only 5, C only 6, A and B only 3, A and C only 4, B and C only 2, all three 1, outside 2.",
          },
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`The Venn diagram shows how many children in a club play football (F), swim (S) and play chess (C). How many children play football but do not play chess?`,
          difficulty: 1,
          choices: [String.raw`$8$`, String.raw`$11$`, String.raw`$13$`, String.raw`$16$`],
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 7.2],
            equal: true,
            axes: false,
            polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 6.9], [0.3, 6.9]], tone: "ink" }],
            circles: [
              { c: [4, 4.3], r: 2, fill: true, label: "F", labelAt: [1.7, 6.1], pos: "c" },
              { c: [6, 4.3], r: 2, fill: true, tone: "good", label: "S", labelAt: [8.3, 6.1], pos: "c" },
              { c: [5, 2.6], r: 2, fill: true, tone: "warn", label: "C", labelAt: [7.6, 1.2], pos: "c" },
            ],
            labels: [
              { x: 3.0, y: 5.0, text: "8" },
              { x: 7.0, y: 5.0, text: "6" },
              { x: 5, y: 1.4, text: "4" },
              { x: 5, y: 5.3, text: "5" },
              { x: 3.9, y: 3.0, text: "2" },
              { x: 6.1, y: 3.0, text: "3" },
              { x: 5, y: 3.8, text: "1" },
              { x: 9, y: 0.9, text: "3" },
            ],
            alt: "Three overlapping circles F, S, C in a box. F only 8, S only 6, C only 4, F and S only 5, F and C only 2, S and C only 3, all three 1, outside 3.",
          },
          answer: String.raw`(C) $13$`,
        },
        {
          stem: String.raw`In a class of $50$ pupils, $25$ play football, $20$ play badminton and $18$ play tennis. $8$ play football and badminton, $7$ play football and tennis, and $6$ play badminton and tennis. $3$ play all three. How many pupils play none of the three sports?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Each of $60$ children likes at least one of three fruits. $30$ children like exactly one of the fruits and $22$ like exactly two. How many like all three?`,
          difficulty: 2,
          choices: [String.raw`$4$`, String.raw`$8$`, String.raw`$22$`, String.raw`$30$`],
          answer: String.raw`(B) $8$`,
        },
        {
          stem: String.raw`$50$ people each belong to at least one of three clubs. When the numbers of members of the three clubs are added, the total is $80$. Exactly $12$ people belong to exactly two clubs. How many people belong to all three clubs?`,
          difficulty: 3,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`In a group of $40$ people, $22$ read newspaper A, $19$ read newspaper B and $16$ read newspaper C. $9$ read both A and B, $8$ read both B and C, and $7$ read both A and C. $4$ people read none of the three newspapers. How many people read exactly one of the newspapers?`,
          difficulty: 3,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`$50$ pupils each belong to at least one of three clubs, A, B and C. Each club has exactly $25$ members. Nobody belongs to clubs B and C only. The number of pupils in exactly two clubs is $3$ times the number in all three clubs. How many pupils belong to club A only?`,
          difficulty: 4,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0, 7.2],
            equal: true,
            axes: false,
            polygons: [{ points: [[0.3, 0.3], [9.7, 0.3], [9.7, 6.9], [0.3, 6.9]], tone: "ink" }],
            circles: [
              { c: [4, 4.3], r: 2, fill: true, label: "A", labelAt: [1.7, 6.1], pos: "c" },
              { c: [6, 4.3], r: 2, fill: true, tone: "good", label: "B", labelAt: [8.3, 6.1], pos: "c" },
              { c: [5, 2.6], r: 2, fill: true, tone: "warn", label: "C", labelAt: [7.6, 1.2], pos: "c" },
            ],
            labels: [{ x: 6.1, y: 3.0, text: "0" }],
            alt: "Three overlapping circles A, B, C in a box. The region for B and C only contains 0; the other regions are empty.",
          },
          answer: String.raw`$5$`,
        },
      ],
    },
    {
      id: "C5-greatest-least",
      name: String.raw`Greatest and least possible overlap`,
      tests: String.raw`The overlap is not given, only the group sizes: "what is the greatest (least) number who could like both / neither / all three?" Push the groups together for the most overlap, and apart for the least.`,
      questions: [
        {
          stem: String.raw`In a class of $35$ pupils, $25$ like art and $18$ like music. What is the greatest possible number of pupils who like both?`,
          difficulty: 1,
          choices: [String.raw`$8$`, String.raw`$10$`, String.raw`$18$`, String.raw`$25$`],
          answer: String.raw`(C) $18$`,
        },
        {
          stem: String.raw`In a class of $30$ pupils, $21$ brought a pen and $17$ brought a ruler. What is the least possible number of pupils who brought both?`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`In a group of $40$ adults, $28$ wear glasses and $25$ wear a watch. What is the greatest possible number of adults who wear neither glasses nor a watch?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`In a survey, $70\%$ of the people like rice and $80\%$ like noodles. What is the least possible percentage of people who like both?`,
          difficulty: 2,
          choices: [String.raw`$10\%$`, String.raw`$30\%$`, String.raw`$50\%$`, String.raw`$70\%$`],
          answer: String.raw`(C) $50\%$`,
        },
        {
          stem: String.raw`In a school, $90\%$ of the pupils like ice cream, $80\%$ like cake and $75\%$ like jelly. What is the least possible percentage of pupils who like all three?`,
          difficulty: 3,
          answer: String.raw`$45\%$`,
        },
        {
          stem: String.raw`$37$ pupils each belong to at least one of three clubs. Each club has exactly $20$ members. What is the greatest possible number of pupils who belong to all three clubs?`,
          difficulty: 3,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Each of the $30$ pupils in a class likes at least one of apples, bananas and cherries. $20$ like apples, $18$ like bananas and $16$ like cherries. What is the least possible number of pupils who like exactly one of the three fruits?`,
          difficulty: 4,
          answer: String.raw`$6$`,
        },
      ],
    },
    {
      id: "C5-multiples",
      name: String.raw`Counting multiples of 2 or 3`,
      tests: String.raw`"How many numbers from 1 to $n$ are multiples of 2 or 3 / neither / both?" Count each set of multiples, then take away the overlap (multiples of the LCM). With three numbers, add back the multiples of all three.`,
      questions: [
        {
          stem: String.raw`How many of the whole numbers from $1$ to $30$ are multiples of $2$ or of $3$ (or of both)?`,
          difficulty: 1,
          choices: [String.raw`$15$`, String.raw`$20$`, String.raw`$25$`, String.raw`$10$`],
          answer: String.raw`(B) $20$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $1$ to $60$ are multiples of both $4$ and $6$?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $1$ to $100$ are multiples of neither $2$ nor $5$?`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $1$ to $200$ are multiples of $4$ or of $6$ (or of both)?`,
          difficulty: 2,
          choices: [String.raw`$58$`, String.raw`$75$`, String.raw`$67$`, String.raw`$83$`],
          answer: String.raw`(C) $67$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $1$ to $300$ are not multiples of $2$, not multiples of $3$ and not multiples of $5$?`,
          difficulty: 3,
          answer: String.raw`$80$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $100$ to $200$ (including $100$ and $200$) are multiples of $6$ or of $8$, but not of both?`,
          difficulty: 3,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`How many of the whole numbers from $1$ to $600$ are multiples of exactly one of the numbers $3$, $4$ and $5$?`,
          difficulty: 4,
          answer: String.raw`$260$`,
        },
      ],
    },
    {
      id: "C5-lengths-times",
      name: String.raw`Overlapping lengths and times`,
      tests: String.raw`Strips, planks or posters that overlap, and times when two things happen together. Use total $=$ sum $-$ overlaps, and draw a line or time line to see where things overlap.`,
      questions: [
        {
          stem: String.raw`Two paper strips, $30$ cm and $25$ cm long, are laid in a straight line with an overlap of $6$ cm, as shown. How long is the joined strip from end to end?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-0.6, 17.2],
            y: [-1.3, 3.3],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0.6], [10, 0.6], [10, 1.6], [0, 1.6]], fill: true, tone: "accent" },
              { points: [[8, 0.6], [16.33, 0.6], [16.33, 1.6], [8, 1.6]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [0, 2.2], to: [10, 2.2], tone: "accent", arrow: true, arrowStart: true, label: "30 cm", style: "small" },
              { from: [8, 0], to: [16.33, 0], tone: "good", arrow: true, arrowStart: true, label: "25 cm", pos: "s", style: "small" },
            ],
            labels: [{ x: 9, y: 1.1, text: "6 cm", style: "small" }],
            alt: "A 30 cm strip and a 25 cm strip in a line, overlapping by 6 cm.",
          },
          answer: String.raw`$49$ cm`,
        },
        {
          stem: String.raw`Five paper strips, each $20$ cm long, are joined in a straight line. Each joint is an overlap of $3$ cm. How long is the joined strip?`,
          difficulty: 1,
          choices: [String.raw`$85$ cm`, String.raw`$88$ cm`, String.raw`$91$ cm`, String.raw`$100$ cm`],
          answer: String.raw`(B) $88$ cm`,
        },
        {
          stem: String.raw`Three coloured strips are stuck on a metre ruler, as shown: red from $0$ cm to $45$ cm, blue from $30$ cm to $80$ cm, and green from $60$ cm to $100$ cm. What length of the ruler is covered by exactly two strips?`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-0.6, 11.4],
            y: [-1, 3.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 2.5], [4.5, 2.5], [4.5, 3.1], [0, 3.1]], fill: true, tone: "warn" },
              { points: [[3, 1.6], [8, 1.6], [8, 2.2], [3, 2.2]], fill: true, tone: "accent" },
              { points: [[6, 0.7], [10, 0.7], [10, 1.3], [6, 1.3]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [0, 0], to: [10, 0], tone: "ink" },
              { from: [0, -0.12], to: [0, 0.12], tone: "ink" },
              { from: [3, -0.12], to: [3, 0.12], tone: "ink" },
              { from: [4.5, -0.12], to: [4.5, 0.12], tone: "ink" },
              { from: [6, -0.12], to: [6, 0.12], tone: "ink" },
              { from: [8, -0.12], to: [8, 0.12], tone: "ink" },
              { from: [10, -0.12], to: [10, 0.12], tone: "ink" },
            ],
            labels: [
              { x: 0, y: 0, text: "0", pos: "s", style: "small" },
              { x: 3, y: 0, text: "30", pos: "s", style: "small" },
              { x: 4.5, y: 0, text: "45", pos: "s", style: "small" },
              { x: 6, y: 0, text: "60", pos: "s", style: "small" },
              { x: 8, y: 0, text: "80", pos: "s", style: "small" },
              { x: 10, y: 0, text: "100", pos: "s", style: "small" },
              { x: 4.5, y: 2.8, text: "red", pos: "e", style: "small" },
              { x: 8, y: 1.9, text: "blue", pos: "e", style: "small" },
              { x: 10, y: 1.0, text: "green", pos: "e", style: "small" },
            ],
            alt: "A metre ruler with marks at 0, 30, 45, 60, 80 and 100 cm. A red strip runs from 0 to 45, a blue strip from 30 to 80 and a green strip from 60 to 100.",
          },
          answer: String.raw`$35$ cm`,
        },
        {
          stem: String.raw`Some strips of paper, each $12$ cm long, are joined in a straight line. Each joint is an overlap of $2$ cm. The joined strip is $102$ cm long. How many strips were used?`,
          difficulty: 2,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Two guards start work at midnight. Guard A works for $3$ hours, rests for $1$ hour, works for $3$ hours, rests for $1$ hour, and so on. Guard B works for $2$ hours, rests for $1$ hour, works for $2$ hours, rests for $1$ hour, and so on. In the $24$ hours from midnight, for how many hours are both guards working at the same time?`,
          difficulty: 3,
          answer: String.raw`$12$ hours`,
        },
        {
          stem: String.raw`Three planks, each $2.4$ m long, are laid in a straight line so that the first overlaps the second and the second overlaps the third. The overlap between the first and second planks is twice the overlap between the second and third planks. From end to end, the planks measure $6$ m. How long is the overlap between the first and second planks?`,
          difficulty: 3,
          answer: String.raw`$0.8$ m`,
        },
        {
          stem: String.raw`A wall is $10$ m long. Seven posters, each $2$ m wide, are stuck along it so that every part of the wall's length is covered and no poster goes past either end of the wall. Posters may overlap. What is the greatest possible length of the wall that is covered by more than one poster?`,
          difficulty: 4,
          answer: String.raw`$4$ m`,
        },
      ],
    },
    {
      id: "C5-fractions",
      name: String.raw`Fractions and percentages in Venn diagrams`,
      tests: String.raw`The group sizes or the overlap are given as fractions or percentages, often "a fraction of one group is also in the other". Use $100\%$ for the whole, or let the overlap be the units.`,
      questions: [
        {
          stem: String.raw`In a survey, $60\%$ of the pupils like football, $50\%$ like basketball and $20\%$ like both. What percentage of the pupils like neither?`,
          difficulty: 1,
          choices: [String.raw`$0\%$`, String.raw`$10\%$`, String.raw`$20\%$`, String.raw`$30\%$`],
          answer: String.raw`(B) $10\%$`,
        },
        {
          stem: String.raw`In a class, $\tfrac34$ of the pupils like reading and $\tfrac23$ like drawing. Every pupil likes at least one of the two. What fraction of the class likes both?`,
          difficulty: 1,
          answer: String.raw`$\tfrac{5}{12}$`,
        },
        {
          stem: String.raw`In a class of $42$ pupils, $6$ like neither art nor music. The number of pupils who like both is $\tfrac13$ of the number who like art, and also $\tfrac14$ of the number who like music. How many pupils like both?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`In a class, $\tfrac35$ of the pupils are girls. Half of the girls and a quarter of the boys wear glasses. $16$ pupils wear glasses. How many pupils are there in the class?`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`In a club, $40\%$ of the members play chess. A quarter of the chess players also play go, and these members are $\tfrac13$ of all the go players. What percentage of the members play neither chess nor go?`,
          difficulty: 3,
          answer: String.raw`$40\%$`,
        },
        {
          stem: String.raw`Every pupil in a group likes apples or pears or both. $\tfrac25$ of the pupils who like apples also like pears. $\tfrac34$ of the pupils who like pears also like apples. $33$ pupils like exactly one of the two fruits. How many pupils are in the group?`,
          difficulty: 3,
          answer: String.raw`$51$`,
        },
        {
          stem: String.raw`A sports club has fewer than $100$ members. Exactly $\tfrac38$ of the members swim and exactly $\tfrac47$ of the members run. Exactly $\tfrac13$ of the swimmers also run. How many members neither swim nor run?`,
          difficulty: 4,
          answer: String.raw`$10$`,
        },
      ],
    },
  ],
});
