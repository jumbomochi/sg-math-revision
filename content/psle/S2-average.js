H2.addTopic({
  id: "S2",
  title: "Average",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Average as total ÷ number of data, finding the total or the number of data, and how the average changes when a value is added, removed or changed.`,
  syllabus: {
    include: [
      String.raw`P6: average as "total value ÷ number of data"`,
      String.raw`P6: relationship between average, total value and number of data`,
      String.raw`P6: solving word problems on average, including finding a missing value, combining two groups and the change in average when a value is added, removed or changed`,
      String.raw`P3–P4: reading data from tables and bar graphs (to find an average from given data)`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`What an average is`,
      body: String.raw`The **average** is what each one would get if the total were **shared out equally**.

$$\text{Average} = \text{Total} \div \text{Number of data}$$

*Example.* The numbers 3, 7, 5 and 9 have a total of $24$. There are 4 numbers, so the average is $24 \div 4 = 6$.

- Count **every** piece of data, even a $0$. A day with 0 sales is still a day.
- The average is always between the smallest and the largest value.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 7.6], y: [-1.4, 10.4], height: 190, axes: false,
          polygons: [
            { points: [[0, 0], [1.2, 0], [1.2, 3], [0, 3]], fill: true, tone: "accent" },
            { points: [[1.8, 0], [3, 0], [3, 6], [1.8, 6]], fill: true, tone: "accent" },
            { points: [[1.8, 6], [3, 6], [3, 7], [1.8, 7]], fill: true, tone: "warn" },
            { points: [[3.6, 0], [4.8, 0], [4.8, 5], [3.6, 5]], fill: true, tone: "accent" },
            { points: [[5.4, 0], [6.6, 0], [6.6, 6], [5.4, 6]], fill: true, tone: "accent" },
            { points: [[5.4, 6], [6.6, 6], [6.6, 9], [5.4, 9]], fill: true, tone: "warn" },
          ],
          segments: [{ from: [-0.4, 6], to: [7.4, 6], dashed: true, thin: true, tone: "ink" }],
          labels: [
            { x: 0.6, y: 3, text: "3", pos: "n" },
            { x: 2.4, y: 7, text: "7", pos: "n" },
            { x: 4.2, y: 5, text: "5", pos: "n" },
            { x: 6, y: 9, text: "9", pos: "n" },
            { x: 3.5, y: 0, text: "Total = 24", pos: "s", style: "small" },
          ],
          caption: String.raw`Before: the parts above the dashed line are extra.`,
          alt: "Four bars of heights 3, 7, 5 and 9. A dashed line at height 6. The parts of the 7 and 9 bars above the line are shaded.",
        },
        {
          type: "plot",
          x: [-0.6, 7.6], y: [-1.4, 10.4], height: 190, axes: false,
          polygons: [
            { points: [[0, 0], [1.2, 0], [1.2, 3], [0, 3]], fill: true, tone: "accent" },
            { points: [[0, 3], [1.2, 3], [1.2, 6], [0, 6]], fill: true, tone: "warn" },
            { points: [[1.8, 0], [3, 0], [3, 6], [1.8, 6]], fill: true, tone: "accent" },
            { points: [[3.6, 0], [4.8, 0], [4.8, 5], [3.6, 5]], fill: true, tone: "accent" },
            { points: [[3.6, 5], [4.8, 5], [4.8, 6], [3.6, 6]], fill: true, tone: "warn" },
            { points: [[5.4, 0], [6.6, 0], [6.6, 6], [5.4, 6]], fill: true, tone: "accent" },
          ],
          segments: [{ from: [-0.4, 6], to: [7.4, 6], dashed: true, thin: true, tone: "ink" }],
          labels: [
            { x: 0.6, y: 6, text: "6", pos: "n" },
            { x: 2.4, y: 6, text: "6", pos: "n" },
            { x: 4.2, y: 6, text: "6", pos: "n" },
            { x: 6, y: 6, text: "6", pos: "n" },
            { x: 3.5, y: 0, text: "Total = 24", pos: "s", style: "small" },
          ],
          caption: String.raw`After: the extra fills the gaps. Every bar is 6, the average.`,
          alt: "The same four bars after levelling: the extra parts have moved to fill the gaps, so every bar has height 6.",
        },
      ],
    },
    {
      title: String.raw`Average, total and number of data`,
      body: String.raw`Know any two of the three, and you can find the third.

| You want | Do this |
| --- | --- |
| Average | Total $\div$ Number |
| Total | Average $\times$ Number |
| Number of data | Total $\div$ Average |

*Example.* 5 bags have an average mass of 12 kg, so the total mass is $12 \times 5 = 60$ kg.

**Most average questions are really total questions.** Change every average into a total first, then work with the totals.`,
    },
    {
      title: String.raw`Adding or removing a value`,
      body: String.raw`When a value joins or leaves, **both** the total and the number of data change.

- Value added: new total $=$ old total $+$ new value, and the number goes up by 1.
- Value removed: new total $=$ old total $-$ that value, and the number goes down by 1.
- Value that joined $=$ new total $-$ old total.

*Example.* 4 numbers have an average of 10, so their total is 40. Add the number 15: the new total is 55 and there are 5 numbers, so the new average is $55 \div 5 = 11$.

**Common mistake:** finding $(10 + 15) \div 2$. You cannot average an average with one value.`,
      figure: {
        type: "plot",
        x: [-1.2, 9.4], y: [-1.6, 17.2], height: 210, axes: false,
        polygons: [
          { points: [[0, 0], [1.2, 0], [1.2, 10], [0, 10]], fill: true, tone: "accent" },
          { points: [[1.8, 0], [3, 0], [3, 10], [1.8, 10]], fill: true, tone: "accent" },
          { points: [[3.6, 0], [4.8, 0], [4.8, 10], [3.6, 10]], fill: true, tone: "accent" },
          { points: [[5.4, 0], [6.6, 0], [6.6, 10], [5.4, 10]], fill: true, tone: "accent" },
          { points: [[7.2, 0], [8.4, 0], [8.4, 10], [7.2, 10]], fill: true, tone: "good" },
          { points: [[7.2, 10], [8.4, 10], [8.4, 15], [7.2, 15]], fill: true, tone: "warn" },
          { points: [[0, 10], [1.2, 10], [1.2, 11], [0, 11]], dashed: true, tone: "warn" },
          { points: [[1.8, 10], [3, 10], [3, 11], [1.8, 11]], dashed: true, tone: "warn" },
          { points: [[3.6, 10], [4.8, 10], [4.8, 11], [3.6, 11]], dashed: true, tone: "warn" },
          { points: [[5.4, 10], [6.6, 10], [6.6, 11], [5.4, 11]], dashed: true, tone: "warn" },
        ],
        labels: [
          { x: 3.3, y: 0, text: "4 values, average 10", pos: "s", style: "small" },
          { x: 7.8, y: 12.5, text: "5", pos: "c" },
          { x: 7.8, y: 15, text: "new value 15", pos: "n", style: "small" },
          { x: 3.3, y: 11, text: "+1 each", pos: "n", style: "small", tone: "warn" },
        ],
        caption: String.raw`The extra 5 is shared by all 5 values, so the average goes up by $5 \div 5 = 1$.`,
        alt: "Four bars of height 10 and a fifth bar of height 15. The 5 above 10 on the new bar is shaded, and a dashed strip of 1 is drawn on top of each of the four old bars.",
      },
    },
    {
      title: String.raw`When one value is changed`,
      body: String.raw`If one value goes up or down, the number of data stays the same. Only the total changes.

- The total changes by the **same amount** as the value.
- The average changes by **that amount $\div$ number of data**.

*Example.* 5 numbers have an average of 20. One number is changed from 13 to 23. The total goes up by 10, so the average goes up by $10 \div 5 = 2$. The new average is 22.

This also works for a mark that was **recorded wrongly**, or one person **replaced** by another.`,
    },
    {
      title: String.raw`Combining two groups`,
      body: String.raw`To find the average of two groups together, add the **totals** and divide by the **total number**.

$$\text{Average of all} = \frac{\text{Total of group A} + \text{Total of group B}}{\text{Number in A} + \text{Number in B}}$$

*Example.* 3 boys have an average mass of 40 kg (total 120 kg). 2 girls have an average mass of 35 kg (total 70 kg). The average of all 5 children is $190 \div 5 = 38$ kg.

**Common mistake:** $(40 + 35) \div 2 = 37.5$. This is only right when the two groups are the same size. The answer is always closer to the average of the **bigger** group.`,
      figure: {
        type: "plot",
        x: [-1.6, 10.2], y: [-1.6, 6.2], height: 150, axes: false,
        polygons: [
          { points: [[0, 3.2], [6, 3.2], [6, 5], [0, 5]], fill: true, tone: "accent" },
          { points: [[6, 3.2], [9.5, 3.2], [9.5, 5], [6, 5]], fill: true, tone: "good" },
        ],
        segments: [
          { from: [2, 3.2], to: [2, 5], tone: "accent" },
          { from: [4, 3.2], to: [4, 5], tone: "accent" },
          { from: [7.75, 3.2], to: [7.75, 5], tone: "good" },
          { from: [0, 2], to: [6, 2], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "120 kg", pos: "s", style: "plain" },
          { from: [6, 2], to: [9.5, 2], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "70 kg", pos: "s", style: "plain" },
          { from: [0, 0], to: [9.5, 0], thin: true, arrow: true, arrowStart: true, tone: "ink", label: "190 kg for 5 children", pos: "s", style: "plain" },
        ],
        labels: [
          { x: 3, y: 5, text: "3 boys", pos: "n", style: "small" },
          { x: 7.75, y: 5, text: "2 girls", pos: "n", style: "small" },
        ],
        caption: String.raw`Join the totals, then share among everyone.`,
        alt: "A bar split into 3 equal boy parts (total 120 kg) and 2 smaller girl parts (total 70 kg). The whole bar is 190 kg for 5 children.",
      },
    },
    {
      title: String.raw`Checking your answer`,
      body: String.raw`An average does not have to be one of the data, and it does not have to be a whole number.

- An average of 2.5 children per family is fine. Give money to 2 decimal places, e.g. \$4.35.
- For numbers that go up in equal steps (like 11, 13, 15, 17, 19), the average is the **middle** number, 15.
- Check: is your average between the smallest and largest values? If a target average needs a score above the full mark, it is **impossible** — say so.
- Watch units. Change 750 g and 3 kg to the same unit before adding.`,
    },
  ],
  archetypes: [
    {
      id: "S2-find-average",
      name: String.raw`Finding the average of a set of data`,
      tests: String.raw`Adding up the data (from a list, a table or a bar graph) and dividing by the number of data, often after changing to the same unit.`,
      questions: [
        {
          stem: String.raw`The masses of four parcels are 1.2 kg, 850 g, 2 kg and 1.55 kg. What is the average mass of the parcels?`,
          marks: 1,
          calculator: false,
          choices: [String.raw`1.12 kg`, String.raw`1.4 kg`, String.raw`1.75 kg`, String.raw`5.6 kg`],
        },
        {
          stem: String.raw`The bar graph shows the number of books Pei Ling read each month from January to June. Find the average number of books she read in a month.`,
          marks: 2,
          calculator: false,
          figure: {
            type: "plot",
            x: [0, 6.6], y: [0, 10.8], height: 230,
            axisLabels: ["", "Number of books"], originLabel: false,
            segments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => ({ from: [0, k], to: [6.3, k], thin: true, tone: "muted" })),
            bars: [[0.65, 5], [1.65, 8], [2.65, 3], [3.65, 6], [4.65, 9], [5.65, 5]],
            barWidth: 0.55,
            xTicks: [{ x: 0.65, label: "Jan" }, { x: 1.65, label: "Feb" }, { x: 2.65, label: "Mar" }, { x: 3.65, label: "Apr" }, { x: 4.65, label: "May" }, { x: 5.65, label: "Jun" }],
            yTicks: [{ y: 0, label: "0" }, { y: 2, label: "2" }, { y: 4, label: "4" }, { y: 6, label: "6" }, { y: 8, label: "8" }, { y: 10, label: "10" }],
            alt: "Bar graph of books read each month: January 5, February 8, March 3, April 6, May 9, June 5. Gridlines every 1 book, labelled every 2.",
          },
        },
      ],
    },
    {
      id: "S2-total-or-missing",
      name: String.raw`Finding the total, a missing value or the number of data`,
      tests: String.raw`Using total $=$ average $\times$ number to find a missing value, or number $=$ total $\div$ average. Recognise by "the average is … find the third number" or "how many … did she buy?".`,
      questions: [
        {
          stem: String.raw`The average of three numbers is 24. Two of the numbers are 19 and 31. What is the third number?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Mrs Goh bought some boxes of cookies. She paid \$89.60 altogether. The average cost of a box was \$6.40.`,
          parts: [
            { label: "(a)", text: String.raw`How many boxes of cookies did she buy?`, marks: 1 },
            { label: "(b)", text: String.raw`She then bought 2 more boxes at \$9.60 each. Find the new average cost of a box.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-add-remove",
      name: String.raw`Average after a value is added or removed`,
      tests: String.raw`Comparing the totals before and after someone joins or leaves a group. Recognise by "a new pupil joined", "one number was removed" or "two more … took the test".`,
      questions: [
        {
          stem: String.raw`The average of 6 numbers is 15. When one of the numbers is removed, the average of the remaining numbers is 14. What number was removed?`,
          marks: 2,
          calculator: false,
          choices: [String.raw`1`, String.raw`6`, String.raw`20`, String.raw`70`],
        },
        {
          stem: String.raw`24 pupils in a class took a test. Their average score was 68 marks.`,
          parts: [
            { label: "(a)", text: String.raw`Another pupil then took the test, and the average score of the 25 pupils became 69 marks. What was this pupil's score?`, marks: 2 },
            { label: "(b)", text: String.raw`Later, two more pupils took the test. The average score of all 27 pupils became 70 marks. Find the average score of these two pupils.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S2-value-changed",
      name: String.raw`Average when one value is changed or replaced`,
      tests: String.raw`The number of data stays the same, so the change in total is the number of data $\times$ the change in average. Recognise by "recorded wrongly", "should have been" or "replaced by".`,
      questions: [
        {
          stem: String.raw`The average of 8 marks was 72. Later, the teacher found that one mark had been recorded as 58 when it should have been 82. What is the correct average of the 8 marks?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`The average height of the 5 players in a basketball team is 1.52 m. One player, who is 1.60 m tall, leaves the team and is replaced by a new player. The average height of the 5 players becomes 1.49 m. How tall is the new player? Give your answer in metres.`,
          marks: 3,
        },
      ],
    },
    {
      id: "S2-combined-groups",
      name: String.raw`Average of two groups together`,
      tests: String.raw`Adding the totals of two groups (boys and girls, two classes) and dividing by the total number, or working back from the overall average to the size of a group.`,
      questions: [
        {
          stem: String.raw`12 boys have an average mass of 45 kg. 18 girls have an average mass of 40 kg. Find the average mass of all 30 children.`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`There are 40 pupils in a class. In a test, the average score of the boys was 60 marks and the average score of the girls was 70 marks. The average score of the whole class was 66 marks. How many girls are there in the class?`,
          marks: 4,
        },
      ],
    },
    {
      id: "S2-multi-step",
      name: String.raw`Multi-step average problems`,
      tests: String.raw`Average combined with ratio, fractions or a target to reach, such as the score needed in the next test. The key step is turning each average into a total.`,
      questions: [
        {
          stem: String.raw`The average of three numbers is 40. The numbers are in the ratio $2 : 3 : 5$. What is the largest number?`,
          marks: 2,
          calculator: false,
        },
        {
          stem: String.raw`Sam's average score for his first 4 tests was 78 marks. Each test is marked out of 100.`,
          parts: [
            { label: "(a)", text: String.raw`What must he score in his 5th test so that his average score for the 5 tests is 80 marks?`, marks: 2 },
            { label: "(b)", text: String.raw`Sam says, "If I do very well in my 5th test, my average score for the 5 tests can be 85 marks." Explain why Sam is wrong.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
