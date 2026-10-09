H2.addTopic({
  id: "W2",
  title: "Working Backwards and the Model Method",
  summary: String.raw`Undo the steps of a story from the end, and draw bar models to handle "more than", "times as many", transfers, ages, averages and quantities that stay the same.`,
  concepts: [
    {
      title: String.raw`Working backwards: undo each step`,
      body: String.raw`When you know the **end** of a story but not the start, go backwards. Undo the **last step first**, and do the opposite each time:

- spent or took away $\to$ add it back
- halved $\to$ double
- took $\frac{1}{3}$ $\to$ what is left is $\frac{2}{3}$, so divide by $2$ and multiply by $3$

*Example.* Ken spent half his money, then \$$3$ more, and had \$$7$ left. Undo the \$$3$: $7 + 3 = 10$. Undo the half: $10 \times 2 = 20$. He had \$$20$.

Always check by running the story forwards.`,
    },
    {
      title: String.raw`Giving until equal: the total stays the same`,
      body: String.raw`When one person gives some to another, the **total does not change**.

To make two people equal, the richer one gives **half of the difference**.

*Example.* Pam has 30 cards and Quek has 18. The difference is $12$. Pam gives $12 \div 2 = 6$, and both have $24$.

If after giving the second person has **more**, draw the "after" bars first and work backwards.`,
      figure: {
        type: "plot",
        x: [-7, 33],
        y: [-0.5, 12],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 6], [18, 6], [18, 9], [0, 9]], fill: true, tone: "accent" },
          { points: [[18, 6], [30, 6], [30, 9], [18, 9]], fill: true, tone: "warn" },
          { points: [[0, 1], [18, 1], [18, 4], [0, 4]], fill: true, tone: "accent" },
          { points: [[18, 1], [24, 1], [24, 4], [18, 4]], dashed: true, tone: "good" },
        ],
        segments: [
          { from: [24, 6], to: [24, 9], tone: "ink", dashed: true },
          { from: [18, 10], to: [30, 10], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "12 more", pos: "n", style: "plain" },
          { from: [27, 5.6], to: [22.5, 4.4], tone: "good", arrow: true, label: "give 6", pos: "se", labelAt: [25.5, 4.6], style: "plain" },
        ],
        labels: [
          { x: -0.5, y: 7.5, text: "Pam", pos: "w" },
          { x: -0.5, y: 2.5, text: "Quek", pos: "w" },
        ],
        caption: String.raw`Pam's extra part is split in half. One half moves to Quek, and then the bars are equal.`,
        alt: "Two bars. Pam's bar is 12 longer than Quek's; the extra part is cut in half by a dashed line and one half moves down to the end of Quek's bar.",
      },
    },
    {
      title: String.raw`More than and fewer than: remove the extra`,
      body: String.raw`Draw one bar for each person. Mark the **extra** part.

- Take the extra away from the total. What is left is shared **equally**.
- Or add the missing part to make all bars the longest length.

*Example.* Two numbers add up to $40$ and differ by $8$. Remove the extra $8$: $40 - 8 = 32$ is two equal bars, so the smaller number is $16$ and the larger is $24$.

For three people, line every bar up against the **same** person's bar.`,
      figure: {
        type: "plot",
        x: [-8, 30],
        y: [-0.5, 11],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 6], [16, 6], [16, 9], [0, 9]], fill: true, tone: "accent" },
          { points: [[16, 6], [24, 6], [24, 9], [16, 9]], fill: true, tone: "warn" },
          { points: [[0, 1], [16, 1], [16, 4], [0, 4]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [26, 1], to: [26, 9], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "40", pos: "e", style: "plain" },
        ],
        labels: [
          { x: -0.5, y: 7.5, text: "Larger", pos: "w" },
          { x: -0.5, y: 2.5, text: "Smaller", pos: "w" },
          { x: 20, y: 7.5, text: "8", pos: "c" },
        ],
        caption: String.raw`Without the extra 8, the two bars are equal.`,
        alt: "Two bars. The larger bar equals the smaller bar plus an extra part of 8. A bracket on the right shows the total 40.",
      },
    },
    {
      title: String.raw`Times as many: use units`,
      body: String.raw`"A has 3 times as many as B" means: if B is **1 unit**, A is **3 units**. Draw equal boxes.

Count the units in the total, then find **1 unit**.

*Example.* A has 3 times as many as B, and together they have $48$. That is $4$ units, so $1$ unit $= 12$. B has $12$ and A has $36$.

If something is also added or taken away, mark it as an extra bit next to the units, just like "more than".`,
      figure: {
        type: "plot",
        x: [-4, 24],
        y: [-0.5, 10],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 6], [6, 6], [6, 9], [0, 9]], fill: true, tone: "accent" },
          { points: [[6, 6], [12, 6], [12, 9], [6, 9]], fill: true, tone: "accent" },
          { points: [[12, 6], [18, 6], [18, 9], [12, 9]], fill: true, tone: "accent" },
          { points: [[0, 1], [6, 1], [6, 4], [0, 4]], fill: true, tone: "good" },
        ],
        segments: [
          { from: [20, 1], to: [20, 9], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "48", pos: "e", style: "plain" },
        ],
        labels: [
          { x: -0.5, y: 7.5, text: "A", pos: "w" },
          { x: -0.5, y: 2.5, text: "B", pos: "w" },
          { x: 3, y: 2.5, text: "1 unit", pos: "c", style: "small" },
        ],
        caption: String.raw`A is 3 units and B is 1 unit, so the total is 4 units.`,
        alt: "Bar A has three equal boxes; bar B has one box of the same size labelled 1 unit. A bracket shows the total 48.",
      },
    },
    {
      title: String.raw`Age problems: the difference never changes`,
      body: String.raw`- Two people always have the **same age difference**, now and in any year.
- Every year **each** person gets 1 year older, so the **sum** of two ages grows by $2$ each year.
- "In how many years …?" and "… years ago" both move everyone by the same number of years.

*Example.* Dad is $36$ years older than Sue. When Dad is $4$ times as old as Sue, the difference is $3$ units, so $3$ units $= 36$ and Sue is $12$ (Dad is $48$).`,
      figure: {
        type: "plot",
        x: [-6, 27],
        y: [-0.5, 12],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 6], [6, 6], [6, 9], [0, 9]], fill: true, tone: "accent" },
          { points: [[6, 6], [24, 6], [24, 9], [6, 9]], fill: true, tone: "warn" },
          { points: [[0, 1], [6, 1], [6, 4], [0, 4]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [12, 6], to: [12, 9], tone: "ink", thin: true },
          { from: [18, 6], to: [18, 9], tone: "ink", thin: true },
          { from: [6, 10], to: [24, 10], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "difference: 36 years", pos: "n", style: "plain" },
        ],
        labels: [
          { x: -0.5, y: 7.5, text: "Dad", pos: "w" },
          { x: -0.5, y: 2.5, text: "Sue", pos: "w" },
        ],
        caption: String.raw`The 3 extra units are the age difference, which is the same in every year.`,
        alt: "Dad's bar has 4 equal units and Sue's bar has 1 unit. The 3 extra units of Dad's bar are marked as the difference of 36 years.",
      },
    },
    {
      title: String.raw`Averages: think about the total`,
      body: String.raw`$$\text{total} = \text{average} \times \text{number of items}$$

When a score is **added** or **removed**, compare the totals before and after. The difference is the score.

*Example.* Three tests have an average of $70$, so the total is $210$. To have an average of $75$ over four tests, the total must be $300$. So the fourth test must be $300 - 210 = 90$.

A new score **above** the average pulls the average up: its extra marks are shared among **everyone**, including itself.`,
    },
    {
      title: String.raw`Find what stays the same`,
      body: String.raw`Before you draw, ask: **what does not change?**

- Giving between people: the **total** stays the same.
- Both get (or spend) the same amount: the **difference** stays the same.
- Only one person spends: the **other person's** amount stays the same.

Make the unchanged quantity the **same number of units** in the "before" and "after" models.

*Example.* A : B $= 2 : 5$. B spends \$$12$ and then A : B $= 2 : 3$. A has not changed, so A is $2$ units both times. B went from $5$ units to $3$ units, so $2$ units $=$ \$$12$. A has \$$12$.`,
    },
    {
      title: String.raw`Working backwards with a choice: draw a tree`,
      body: String.raw`Sometimes a step can be undone in **more than one way**. Then draw a **tree** and follow every branch back.

*Example.* Rule: if the number is even, halve it; if it is odd, add $1$. What could have come just before $6$? Either $12$ (halved to $6$) or $5$ (odd, and $5 + 1 = 6$). What could have come just before $5$? Only $10$: the other choice would be $4$, but $4$ is even, so it would have been halved, not had $1$ added.

Check every branch: an "add" branch only works if the number before it really is odd.`,
    },
  ],
  archetypes: [
    {
      id: "W2-working-backwards",
      name: String.raw`Working backwards from the end`,
      tests: String.raw`A story of spending or taking a fraction "and then some more", where only the amount at the end is known. Recognise it by "… had \$9 left. How much did he have at first?"`,
      questions: [
        {
          stem: String.raw`Mei spent half of her money on a book and then \$$6$ on lunch. She had \$$14$ left. How much money did she have at first?`,
          difficulty: 1,
          answer: String.raw`\$$40$`,
        },
        {
          stem: String.raw`On Monday Raj spent $\frac{1}{3}$ of his money and then \$$4$ more. On Tuesday he spent half of what was left and then \$$3$ more. He then had \$$9$ left. How much money did he have at first?`,
          difficulty: 2,
          answer: String.raw`\$$42$`,
        },
        {
          stem: String.raw`Amy, Ben and Chen share a bag of sweets. Amy takes $\frac{1}{4}$ of the sweets and then $3$ more. Ben takes $\frac{2}{5}$ of the remaining sweets and then $2$ more. Chen takes the last $16$ sweets. How many sweets were in the bag?`,
          difficulty: 3,
          answer: String.raw`44 sweets`,
        },
        {
          stem: String.raw`Tom thinks of a number. He multiplies it by $3$, takes away $7$ and then divides the result by $4$. His answer is $5$. What number did he think of?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`On Monday a library lent out $\frac{1}{4}$ of its storybooks. On Tuesday it lent out $\frac{1}{3}$ of the storybooks that were left. On Wednesday it lent out $\frac{2}{3}$ of the storybooks that were still left. Then $200$ storybooks remained. How many storybooks were lent out on Tuesday?`,
          difficulty: 2,
          answer: String.raw`300 storybooks`,
        },
        {
          stem: String.raw`Jia Hui spent half of her money and then \$$4$ more on a book. Then she spent half of the money she had left and then \$$4$ more on a pen. In the end she had exactly $\frac{1}{8}$ of the money she started with. How much money did she have at first?`,
          difficulty: 3,
          answer: String.raw`\$$48$`,
        },
        {
          stem: String.raw`Siti writes a positive whole number on the board. Then, five times in a row, she changes the number by this rule: if the number is even, she halves it; if the number is odd, she adds $5$ to it. After the five changes, the number on the board is $7$. How many different numbers could she have started with?`,
          difficulty: 4,
          answer: String.raw`8`,
        },
      ],
    },
    {
      id: "W2-transfers",
      name: String.raw`Transfers between people`,
      tests: String.raw`Items are passed from one person to another, to make them equal or to reach a stated difference. Recognise it by "after A gives B …". The total stays the same.`,
      questions: [
        {
          stem: String.raw`Ali has $50$ stamps and Ben has $22$ stamps. How many stamps must Ali give Ben so that they have the same number?`,
          difficulty: 1,
          answer: String.raw`14 stamps`,
        },
        {
          stem: String.raw`Sam and Tina have $140$ cards altogether. After Sam gives Tina $15$ cards, Tina has $8$ more cards than Sam. How many cards did Sam have at first?`,
          difficulty: 2,
          choices: [String.raw`(A) $59$`, String.raw`(B) $66$`, String.raw`(C) $70$`, String.raw`(D) $74$`, String.raw`(E) $81$`],
          answer: String.raw`(E) $81$`,
        },
        {
          stem: String.raw`Xin, Yuri and Zara have some marbles. First, Xin gives Yuri and Zara as many marbles as each of them already has. Next, Yuri gives Xin and Zara as many marbles as each of them now has. Finally, Zara gives Xin and Yuri as many marbles as each of them now has. In the end, each child has $32$ marbles. How many marbles did Xin have at first?`,
          difficulty: 3,
          answer: String.raw`52 marbles`,
        },
        {
          stem: String.raw`Ann has $45$ marbles and Ben has $15$ marbles. How many marbles must Ann give Ben so that Ann then has twice as many marbles as Ben?`,
          difficulty: 1,
          answer: String.raw`5 marbles`,
        },
        {
          stem: String.raw`Kai and Lim have the same number of cards. Kai gives Lim $12$ cards. Now Lim has $3$ times as many cards as Kai. How many cards did each boy have at first?`,
          difficulty: 2,
          choices: [String.raw`(A) $12$`, String.raw`(B) $18$`, String.raw`(C) $24$`, String.raw`(D) $36$`, String.raw`(E) $48$`],
          answer: String.raw`(C) $24$`,
        },
        {
          stem: String.raw`Ali gives $\frac{1}{3}$ of his stamps to Ben. Then Ben gives $\frac{1}{4}$ of the stamps he now has to Ali. In the end, Ali has $30$ stamps and Ben has $36$ stamps. How many stamps did Ben have at first?`,
          difficulty: 3,
          answer: String.raw`39 stamps`,
        },
        {
          stem: String.raw`Pam, Qi and Ravi have some sweets. First, Pam gives away half of her sweets, sharing them equally between Qi and Ravi. Next, Qi gives away half of the sweets she now has, sharing them equally between Pam and Ravi. Finally, Ravi gives away half of the sweets he now has, sharing them equally between Pam and Qi. In the end, all three of them have the same number of sweets. At first, Ravi had $45$ more sweets than Pam. How many sweets did Ravi have at first?`,
          difficulty: 4,
          answer: String.raw`65 sweets`,
        },
      ],
    },
    {
      id: "W2-age-problems",
      name: String.raw`Age problems`,
      tests: String.raw`Ages now, in the past or in the future, often with "times as old as" or a sum of ages. Recognise it by "in how many years …" or "… years ago". The age difference never changes.`,
      questions: [
        {
          stem: String.raw`Mrs Lim is $38$ years old and her son is $10$ years old. In how many years will Mrs Lim be $3$ times as old as her son?`,
          difficulty: 1,
          answer: String.raw`4 years`,
        },
        {
          stem: String.raw`The sum of the ages of a father and his daughter is $56$ years now. $4$ years ago, the father was $5$ times as old as his daughter. How old is the father now?`,
          difficulty: 2,
          choices: [String.raw`(A) $40$`, String.raw`(B) $44$`, String.raw`(C) $46$`, String.raw`(D) $48$`, String.raw`(E) $52$`],
          answer: String.raw`(B) $44$`,
        },
        {
          stem: String.raw`Uncle Tan says to Ken: "When I was as old as you are now, you were $4$ years old. When you are as old as I am now, I will be $61$ years old." How old is Ken now?`,
          difficulty: 3,
          answer: String.raw`23 years old`,
        },
        {
          stem: String.raw`Ann is $9$ years old and her brother is $5$ years old. In how many years will the sum of their ages be $30$?`,
          difficulty: 1,
          choices: [String.raw`(A) $4$`, String.raw`(B) $8$`, String.raw`(C) $16$`, String.raw`(D) $21$`],
          answer: String.raw`(B) $8$`,
        },
        {
          stem: String.raw`Mr Lee is $40$ years old. His three children are $6$, $8$ and $10$ years old. In how many years will Mr Lee's age be equal to the sum of his three children's ages?`,
          difficulty: 2,
          answer: String.raw`8 years`,
        },
        {
          stem: String.raw`All ages in this problem are whole numbers of years. Mr and Mrs Tan married $12$ years ago. After that they had two children, Kai and his younger sister Lin, and nobody else has ever joined or left the family. Today the ages of the four family members add up to $84$. Three years ago, the ages of the family members at that time added up to $73$. Six years ago, they added up to $65$. How old is Kai today?`,
          difficulty: 3,
          answer: String.raw`5 years old`,
        },
        {
          stem: String.raw`Ann is older than Ben, and Ben is older than Cai. When Ann was as old as Ben is now, Ben was as old as Cai is now. When Cai is as old as Ben is now, Ann will be $40$. Today their three ages add up to $72$. How old is Cai now?`,
          difficulty: 4,
          answer: String.raw`16 years old`,
        },
      ],
    },
    {
      id: "W2-more-than-fewer-than",
      name: String.raw`More than and fewer than`,
      tests: String.raw`Two or three amounts with a known total and known differences between them. Recognise it by "A has \$20 more than B" or "B has 36 fewer than C", or by totals of pairs.`,
      questions: [
        {
          stem: String.raw`Two numbers add up to $95$. One number is $17$ more than the other. What is the larger number?`,
          difficulty: 1,
          answer: String.raw`$56$`,
        },
        {
          stem: String.raw`Ann, Bob and Cai have \$$260$ altogether. Ann has \$$20$ more than Bob. Bob has \$$36$ less than Cai. How much money does Cai have?`,
          difficulty: 2,
          choices: [String.raw`(A) \$$104$`, String.raw`(B) \$$88$`, String.raw`(C) \$$68$`, String.raw`(D) \$$124$`],
          answer: String.raw`(A) \$$104$`,
        },
        {
          stem: String.raw`Three boxes $A$, $B$ and $C$ are weighed in pairs. $A$ and $B$ together weigh $31$ kg, $B$ and $C$ together weigh $37$ kg, and $A$ and $C$ together weigh $40$ kg. What is the mass of the heaviest box?`,
          difficulty: 3,
          answer: String.raw`23 kg`,
        },
        {
          stem: String.raw`There are three numbers. The first number is $7$ more than the second, and the third number is $7$ more than the first. The three numbers add up to $81$. What is the largest of the three numbers?`,
          difficulty: 1,
          answer: String.raw`$34$`,
        },
        {
          stem: String.raw`A bag of rice and a bag of flour weigh $30$ kg together. $3$ bags of rice and $2$ bags of flour weigh $74$ kg together. All the bags of rice weigh the same, and all the bags of flour weigh the same. How heavy is one bag of rice?`,
          difficulty: 2,
          answer: String.raw`14 kg`,
        },
        {
          stem: String.raw`Ann, Bea and Cal have \$$93$ altogether. If Ann spends \$$5$, Bea is given \$$7$ and Cal's money is doubled, then all three of them will have the same amount. How much money does Ann have?`,
          difficulty: 3,
          answer: String.raw`\$$43$`,
        },
        {
          stem: String.raw`There are three numbers $A$, $B$ and $C$. $A + B$ is $3$ times $C$. $B + C$ is twice $A$. $A + C$ is $40$ more than $B$. What is the largest of the three numbers?`,
          difficulty: 4,
          answer: String.raw`$100$`,
        },
      ],
    },
    {
      id: "W2-times-as-many",
      name: String.raw`Times as many`,
      tests: String.raw`One amount is a multiple of another, sometimes with an extra amount added or taken away. Recognise it by "4 times as many as" or "twice as many as", and solve with equal units.`,
      questions: [
        {
          stem: String.raw`Jon has $4$ times as many stickers as Kim. They have $125$ stickers altogether. How many stickers does Jon have?`,
          difficulty: 1,
          answer: String.raw`100 stickers`,
        },
        {
          stem: String.raw`A bag has red, blue and green beads, $200$ beads altogether. There are $3$ times as many blue beads as red beads. There are $10$ fewer green beads than blue beads. How many green beads are there?`,
          difficulty: 2,
          choices: [String.raw`(A) $30$`, String.raw`(B) $70$`, String.raw`(C) $80$`, String.raw`(D) $90$`],
          answer: String.raw`(C) $80$`,
        },
        {
          stem: String.raw`A shop had $3$ times as many apples as pears. After $45$ apples and $5$ pears were sold, the shop had twice as many apples as pears. How many pears did the shop have at first?`,
          difficulty: 3,
          answer: String.raw`35 pears`,
        },
        {
          stem: String.raw`Jon has $3$ times as many stickers as Kim. Jon has $24$ more stickers than Kim. How many stickers does Kim have?`,
          difficulty: 1,
          answer: String.raw`12 stickers`,
        },
        {
          stem: String.raw`Ali has twice as many marbles as Bob, and Bob has $3$ times as many marbles as Cai. Ali has $40$ more marbles than Cai. How many marbles do the three boys have altogether?`,
          difficulty: 2,
          answer: String.raw`80 marbles`,
        },
        {
          stem: String.raw`When a larger whole number is divided by a smaller whole number, the quotient is $6$ and the remainder is $4$. The larger number, the smaller number, the quotient and the remainder add up to $98$. What is the larger number?`,
          difficulty: 3,
          answer: String.raw`$76$`,
        },
        {
          stem: String.raw`If Dev gives Eli $10$ stickers, Dev will have twice as many stickers as Eli. If instead Eli gives Dev $10$ stickers, Dev will have $5$ times as many stickers as Eli. How many stickers do they have altogether?`,
          difficulty: 4,
          answer: String.raw`120 stickers`,
        },
      ],
    },
    {
      id: "W2-averages",
      name: String.raw`Averages`,
      tests: String.raw`An average changes when a score is added, removed or corrected. Recognise it by "the average of … is …" followed by a change. Work with totals.`,
      questions: [
        {
          stem: String.raw`Siti's average mark for $4$ tests is $78$. What must she score in her fifth test so that her average for all $5$ tests is $80$?`,
          difficulty: 1,
          answer: String.raw`$88$`,
        },
        {
          stem: String.raw`The average of $6$ numbers is $15$. When one of the numbers is removed, the average of the other $5$ numbers is $13$. Which number was removed?`,
          difficulty: 2,
          choices: [String.raw`(A) $2$`, String.raw`(B) $13$`, String.raw`(C) $15$`, String.raw`(D) $25$`],
          answer: String.raw`(D) $25$`,
        },
        {
          stem: String.raw`The average mark of a class in a test was $72$. A new pupil joined the class and scored $96$ in the same test. The average mark of the class then went up to $73$. How many pupils are in the class now?`,
          difficulty: 3,
          answer: String.raw`24 pupils`,
        },
        {
          stem: String.raw`The average of five numbers is $12$. Four of the numbers are $10$, $8$, $15$ and $11$. What is the fifth number?`,
          difficulty: 1,
          choices: [String.raw`(A) $11$`, String.raw`(B) $12$`, String.raw`(C) $14$`, String.raw`(D) $16$`],
          answer: String.raw`(D) $16$`,
        },
        {
          stem: String.raw`The average of $10$ numbers was worked out as $45$. Then it was found that one of the numbers had been copied wrongly as $72$ when it should have been $27$. What is the correct average of the $10$ numbers?`,
          difficulty: 2,
          answer: String.raw`$40.5$`,
        },
        {
          stem: String.raw`The average of $A$, $B$ and $C$ is $30$. The average of $B$, $C$ and $D$ is $35$. The average of all four numbers $A$, $B$, $C$ and $D$ is $32$. What is $D$?`,
          difficulty: 3,
          answer: String.raw`$38$`,
        },
        {
          stem: String.raw`In a test, the average mark of a class was $70$. If the highest mark is left out, the average of the other marks is $68$. If instead the lowest mark is left out, the average of the other marks is $72$. The highest mark is $52$ more than the lowest mark. What is the highest mark?`,
          difficulty: 4,
          answer: String.raw`$96$`,
        },
      ],
    },
    {
      id: "W2-unchanged-quantity",
      name: String.raw`Unchanged quantity`,
      tests: String.raw`A before-and-after problem where one thing stays the same: the difference (both spend the same), one person's amount (only the other spends), or the total (a transfer). Recognise it by a ratio or "times as much" that changes.`,
      questions: [
        {
          stem: String.raw`Ann has \$$80$ and Bea has \$$50$. They each spend the same amount of money. Then Ann has twice as much money as Bea. How much did each of them spend?`,
          difficulty: 1,
          answer: String.raw`\$$20$`,
        },
        {
          stem: String.raw`The ratio of Chen's money to Dan's money is $3 : 5$. After Dan spends \$$40$, the ratio becomes $3 : 4$. How much money did Dan have at first?`,
          difficulty: 2,
          answer: String.raw`\$$200$`,
        },
        {
          stem: String.raw`Box $A$ has $5$ times as many marbles as Box $B$. After $36$ marbles are moved from Box $A$ to Box $B$, Box $A$ has twice as many marbles as Box $B$. How many marbles were in Box $A$ at first?`,
          difficulty: 3,
          answer: String.raw`180 marbles`,
        },
        {
          stem: String.raw`Box $A$ has $3$ times as many beads as Box $B$. After $20$ more beads are put into Box $B$, the two boxes have the same number of beads. How many beads are in Box $A$?`,
          difficulty: 1,
          answer: String.raw`30 beads`,
        },
        {
          stem: String.raw`On a bus, the ratio of the number of boys to the number of girls is $3 : 2$. At a bus stop, $6$ boys get off and $6$ girls get on. Now there are as many boys as girls on the bus. How many children are on the bus?`,
          difficulty: 2,
          answer: String.raw`60 children`,
        },
        {
          stem: String.raw`The ratio of Mary's money to Nina's money is $4 : 5$. Mary spends $\frac{1}{4}$ of her money and Nina spends \$$60$. Now the ratio of Mary's money to Nina's money is $3 : 2$. How much money did Nina have at first?`,
          difficulty: 3,
          answer: String.raw`\$$100$`,
        },
        {
          stem: String.raw`The numbers of books on Shelf $A$ and Shelf $B$ are in the ratio $4 : 3$. After $6$ books are moved from Shelf $A$ to Shelf $B$, the ratio becomes $6 : 5$. Then some books are moved from Shelf $B$ back to Shelf $A$, and now Shelf $A$ has twice as many books as Shelf $B$. How many books were moved from Shelf $B$ to Shelf $A$?`,
          difficulty: 4,
          answer: String.raw`28 books`,
        },
      ],
    },
  ],
});
