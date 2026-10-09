H2.addTopic({
  id: "N2",
  title: "Factors, Multiples and Remainders",
  summary: String.raw`Primes and factors, HCF and LCM puzzles, divisibility rules, remainders, repeating cycles of last digits and days of the week, and perfect squares.`,
  concepts: [
    {
      title: String.raw`Prime numbers`,
      body: String.raw`- A **prime number** has exactly two factors: $1$ and itself. The first few are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.
- $1$ is **not** prime (it has only one factor). $2$ is the **only even prime**.
- **Is it prime?** Divide by $2, 3, 5, 7, 11, \ldots$ and stop once the prime times itself is bigger than the number. Example: $91 = 7 \times 13$, so $91$ is not prime, even though it looks like one.
- Every whole number bigger than $1$ can be split into primes: $60 = 2 \times 2 \times 3 \times 5$.`,
    },
    {
      title: String.raw`Factors come in pairs`,
      body: String.raw`- List factors in **pairs** that multiply to the number. For $36$: $1 \times 36$, $2 \times 18$, $3 \times 12$, $4 \times 9$, $6 \times 6$. Stop when the pairs meet. So $36$ has $9$ factors.
- **Counting shortcut**: split into primes. $12 = 2 \times 2 \times 3$. A factor of $12$ can use the $2$ zero, one or two times ($3$ ways) and the $3$ zero or one time ($2$ ways). So $12$ has $3 \times 2 = 6$ factors: $1, 2, 3, 4, 6, 12$.`,
    },
    {
      title: String.raw`LCM: when do things happen together again?`,
      body: String.raw`The **lowest common multiple** (LCM) is the smallest number that is a multiple of each number.

- Use LCM for "**together again**", "at the same time", "smallest number that can be shared into groups of ... or ...".
- Example: one light flashes every $4$ seconds and another every $6$ seconds. They flash together at the start, then every $\text{LCM}(4, 6) = 12$ seconds.
- To find an LCM, list multiples of the biggest number until one is also a multiple of the others.`,
      figure: {
        type: "plot",
        x: [-1.5, 32],
        y: [-2.6, 6.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 4], to: [25.5, 4], tone: "muted" },
          { from: [0, 0], to: [25.5, 0], tone: "muted" },
          { from: [0, 0], to: [0, 4], tone: "warn", dashed: true },
          { from: [12, 0], to: [12, 4], tone: "warn", dashed: true },
          { from: [24, 0], to: [24, 4], tone: "warn", dashed: true },
        ],
        circles: [
          { c: [0, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [4, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [8, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [12, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [16, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [20, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [24, 4], r: 0.45, fill: true, tone: "accent" },
          { c: [0, 0], r: 0.45, fill: true, tone: "good" },
          { c: [6, 0], r: 0.45, fill: true, tone: "good" },
          { c: [12, 0], r: 0.45, fill: true, tone: "good" },
          { c: [18, 0], r: 0.45, fill: true, tone: "good" },
          { c: [24, 0], r: 0.45, fill: true, tone: "good" },
        ],
        labels: [
          { x: 0, y: 4.3, text: "0", pos: "n", style: "small" },
          { x: 4, y: 4.3, text: "4", pos: "n", style: "small" },
          { x: 8, y: 4.3, text: "8", pos: "n", style: "small" },
          { x: 12, y: 4.3, text: "12", pos: "n", style: "small" },
          { x: 16, y: 4.3, text: "16", pos: "n", style: "small" },
          { x: 20, y: 4.3, text: "20", pos: "n", style: "small" },
          { x: 24, y: 4.3, text: "24", pos: "n", style: "small" },
          { x: 0, y: -0.3, text: "0", pos: "s", style: "small" },
          { x: 6, y: -0.3, text: "6", pos: "s", style: "small" },
          { x: 12, y: -0.3, text: "12", pos: "s", style: "small" },
          { x: 18, y: -0.3, text: "18", pos: "s", style: "small" },
          { x: 24, y: -0.3, text: "24", pos: "s", style: "small" },
          { x: 26.3, y: 4, text: "every 4 s", pos: "e", style: "small", tone: "accent" },
          { x: 26.3, y: 0, text: "every 6 s", pos: "e", style: "small", tone: "good" },
        ],
        caption: String.raw`The two lights flash together at $0$, $12$, $24$, ... seconds: the common multiples of $4$ and $6$.`,
        alt: "Two timelines. The top one has dots at 0, 4, 8, 12, 16, 20, 24; the bottom one has dots at 0, 6, 12, 18, 24. Dashed lines join the dots at 0, 12 and 24, where both flash together.",
      },
    },
    {
      title: String.raw`HCF: the biggest equal pieces or groups`,
      body: String.raw`The **highest common factor** (HCF) is the biggest number that divides into each number exactly.

- Use HCF for "**largest** possible", "cut into the biggest equal pieces", "share equally among as many as possible with nothing left over".
- Example: a $12$ cm by $8$ cm card is cut into equal squares, as large as possible. The side is $\text{HCF}(12, 8) = 4$ cm, giving $3 \times 2 = 6$ squares.
- Handy fact for two numbers: $\text{HCF} \times \text{LCM} = $ the product of the numbers. For $4$ and $6$: $2 \times 12 = 24 = 4 \times 6$.`,
      figure: {
        type: "plot",
        x: [-2.5, 14.5],
        y: [-1.6, 9.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[0, 0], [12, 0], [12, 8], [0, 8]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [4, 0], to: [4, 8], tone: "accent" },
          { from: [8, 0], to: [8, 8], tone: "accent" },
          { from: [0, 4], to: [12, 4], tone: "accent" },
        ],
        labels: [
          { x: 6, y: 0, text: "12 cm", pos: "s", style: "small" },
          { x: 0, y: 4, text: "8 cm", pos: "w", style: "small" },
          { x: 2, y: 2, text: "4 × 4", style: "small" },
        ],
        caption: String.raw`$\text{HCF}(12, 8) = 4$, so the largest squares are $4$ cm by $4$ cm.`,
        alt: "A 12 cm by 8 cm rectangle divided into a 3 by 2 grid of 4 cm squares.",
      },
    },
    {
      title: String.raw`Divisibility rules`,
      body: String.raw`| Divisible by | Check this |
| $2$ | last digit is even |
| $3$ | digit sum is a multiple of $3$ |
| $4$ | last two digits make a multiple of $4$ |
| $5$ | last digit is $0$ or $5$ |
| $8$ | last three digits make a multiple of $8$ |
| $9$ | digit sum is a multiple of $9$ |
| $11$ | add the 1st, 3rd, 5th, ... digits and the 2nd, 4th, ... digits; the two sums differ by $0$ or a multiple of $11$ |

- Example: $2541$: $2 + 4 = 6$ and $5 + 1 = 6$ differ by $0$, so $2541$ is divisible by $11$.
- To test for $6$, check $2$ **and** $3$. For $12$: check $3$ and $4$. For $72$: check $8$ and $9$.`,
    },
    {
      title: String.raw`Remainders: one more or one less than a multiple`,
      body: String.raw`- "Leaves remainder $1$ when divided by $2$ **and** by $3$" means the number is **one more** than a common multiple of $2$ and $3$: $6 + 1 = 7$, then $13, 19, \ldots$
- "Remainder $1$ when divided by $2$, remainder $2$ when divided by $3$": each time the number is **one short** of a full group, so it is **one less** than a multiple of $6$: $5, 11, 17, \ldots$
- If there is no such pattern, **list** the numbers that fit the first rule and test them against the second. Once you find one, the next ones come every LCM.`,
    },
    {
      title: String.raw`Repeating cycles: last digits and days of the week`,
      body: String.raw`- **Last digits of powers repeat.** Multiplying $3$ by itself again and again gives last digits $3, 9, 7, 1, 3, 9, 7, 1, \ldots$, a cycle of $4$. (Here $3^{2}$ means $3 \times 3$, $3^{3}$ means $3 \times 3 \times 3$, and so on.)
- To find the last digit far along, divide by the cycle length and use the **remainder** to find the position in the cycle.
- **Days of the week** repeat every $7$ days. $10$ days after a Friday: $10 = 7 + 3$, so it is $3$ days after Friday, a Monday.
- Months: $31$ days is $4$ weeks and $3$ days, $30$ days is $4$ weeks and $2$ days.`,
      figure: {
        type: "plot",
        x: [-4.5, 4.5],
        y: [-2.6, 2.6],
        equal: true,
        axes: false,
        segments: [
          { from: [0.45, 1.75], to: [1.75, 0.45], arrow: true },
          { from: [1.75, -0.45], to: [0.45, -1.75], arrow: true },
          { from: [-0.45, -1.75], to: [-1.75, -0.45], arrow: true },
          { from: [-1.75, 0.45], to: [-0.45, 1.75], arrow: true },
        ],
        labels: [
          { x: 0, y: 2, text: "3", style: "bold" },
          { x: 2, y: 0, text: "9", style: "bold" },
          { x: 0, y: -2, text: "7", style: "bold" },
          { x: -2, y: 0, text: "1", style: "bold" },
          { x: 1.2, y: 1.2, text: "× 3", pos: "ne", style: "small" },
          { x: 1.2, y: -1.2, text: "× 3", pos: "se", style: "small" },
          { x: -1.2, y: -1.2, text: "× 3", pos: "sw", style: "small" },
          { x: -1.2, y: 1.2, text: "× 3", pos: "nw", style: "small" },
        ],
        caption: String.raw`Last digits of $3, 3^{2}, 3^{3}, 3^{4}, \ldots$ go round a cycle of $4$.`,
        alt: "A loop of four last digits 3, 9, 7, 1 with arrows labelled times 3 going from each to the next and back to 3.",
      },
    },
    {
      title: String.raw`Perfect squares`,
      body: String.raw`A **perfect square** is a whole number times itself: $1, 4, 9, 16, 25, 36, 49, \ldots$

- A perfect square has an **odd** number of factors, because one factor pair is a number with itself ($6 \times 6$ for $36$). Every other number has an even number of factors.
- A perfect square always ends in $0, 1, 4, 5, 6$ or $9$, never in $2, 3, 7$ or $8$.
- When a perfect square is split into primes, **each prime appears an even number of times**: $36 = 2 \times 2 \times 3 \times 3$. To turn $12 = 2 \times 2 \times 3$ into a square, multiply by one more $3$: $12 \times 3 = 36$.`,
    },
    {
      title: String.raw`Remainders of sums and products`,
      body: String.raw`To find a remainder, you only need the **remainders** of the pieces.

- **Sums**: $17 + 23$ divided by $5$: the remainders are $2$ and $3$, and $2 + 3 = 5$ leaves remainder $0$. Check: $40 = 5 \times 8$.
- **Products**: $17 \times 23$ divided by $5$: $2 \times 3 = 6$ leaves remainder $1$. Check: $391 = 5 \times 78 + 1$.
- For dividing by $9$ (or $3$), every number can be swapped for its **digit sum**, because they leave the same remainder.`,
    },
    {
      title: String.raw`Years and leap years`,
      body: String.raw`- A year of $365$ days is $52$ weeks and $1$ day. So a date moves on by **$1$ day of the week** each year: if your birthday is a Monday this year, it is a Tuesday next year.
- A **leap year** has $366$ days (the extra day is 29 February). If a 29 February comes in between, the date moves on by **$2$ days** instead.
- Leap years are the years that are multiples of $4$ (with a few exceptions such as 1900 and 2100, which you will be told about if they matter).`,
    },
  ],
  archetypes: [
    {
      id: "N2-primes-factors",
      name: String.raw`Primes and counting factors`,
      tests: String.raw`Spotting primes, splitting a number into primes, and counting how many factors a number has. Look for "prime", "how many factors" or "exactly ... factors".`,
      questions: [
        {
          stem: String.raw`How many prime numbers are there between $30$ and $60$?`,
          difficulty: 1,
          choices: [String.raw`$5$`, String.raw`$6$`, String.raw`$7$`, String.raw`$8$`],
          answer: String.raw`(C) $7$`,
        },
        {
          stem: String.raw`The product of two prime numbers is $221$. What is their sum?`,
          difficulty: 2,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`What is the smallest whole number that has exactly $10$ factors?`,
          difficulty: 3,
          answer: String.raw`$48$`,
        },
        {
          stem: String.raw`Which of these numbers has exactly $3$ factors?`,
          difficulty: 1,
          choices: [String.raw`$8$`, String.raw`$12$`, String.raw`$25$`, String.raw`$27$`, String.raw`$30$`],
          answer: String.raw`(C) $25$`,
        },
        {
          stem: String.raw`$72$ pupils stand in equal rows for a photo. Each row must have at least $3$ and at most $20$ pupils. How many different numbers of pupils in each row are possible?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A whole number has exactly $8$ factors. Two of its factors are $21$ and $35$. What is the number?`,
          difficulty: 3,
          answer: String.raw`$105$`,
        },
        {
          stem: String.raw`How many whole numbers from $1$ to $100$ have exactly $6$ factors?`,
          difficulty: 4,
          answer: String.raw`$16$`,
        },
      ],
    },
    {
      id: "N2-hcf-lcm",
      name: String.raw`HCF and LCM puzzles`,
      tests: String.raw`Word puzzles about things happening together again (LCM) or cutting and sharing into the largest equal parts (HCF), and puzzles that give the HCF and LCM of two numbers.`,
      questions: [
        {
          stem: String.raw`Three bells ring every $6$ minutes, every $8$ minutes and every $15$ minutes. They all ring together at 9:00 a.m. At what time do they next all ring together?`,
          difficulty: 1,
          answer: String.raw`11:00 a.m.`,
        },
        {
          stem: String.raw`The diagram shows a rectangular piece of paper measuring $84$ cm by $60$ cm. It is cut into identical squares, as large as possible, with no paper left over. How many squares are there?`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-2.2, 10.6],
            y: [-1.4, 6.8],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 0], [8.4, 0], [8.4, 6], [0, 6]], fill: true, tone: "accent" },
            ],
            labels: [
              { x: 4.2, y: 0, text: "84 cm", pos: "s", style: "small" },
              { x: 0, y: 3, text: "60 cm", pos: "w", style: "small" },
            ],
            alt: "A rectangle 84 cm long and 60 cm wide.",
          },
          answer: String.raw`$35$`,
        },
        {
          stem: String.raw`The HCF of two whole numbers is $6$ and their LCM is $72$. Both numbers are greater than $6$. What is the sum of the two numbers?`,
          difficulty: 3,
          answer: String.raw`$42$`,
        },
        {
          stem: String.raw`What is the smallest number of sweets that can be shared equally among $4$ children, or equally among $6$ children, or equally among $9$ children, with none left over each time?`,
          difficulty: 1,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`A rectangular field measures $120$ m by $84$ m. Trees are planted along its edges, with a tree at each corner and the same distance between neighbouring trees all the way round. This distance is a whole number of metres, as large as possible. How many trees are planted?`,
          difficulty: 2,
          answer: String.raw`$34$`,
        },
        {
          stem: String.raw`Two whole numbers have an HCF of $12$ and add up to $96$. What is the largest possible LCM of the two numbers?`,
          difficulty: 3,
          answer: String.raw`$180$`,
        },
        {
          stem: String.raw`How many pairs of different whole numbers have an LCM of $60$? (The pair $4$ and $15$ counts only once: it is the same pair as $15$ and $4$.)`,
          difficulty: 4,
          answer: String.raw`$22$`,
        },
      ],
    },
    {
      id: "N2-divisibility",
      name: String.raw`Divisibility rules and missing digits`,
      tests: String.raw`Deciding whether a number is divisible by 2, 3, 4, 5, 8, 9 or 11 without dividing, or finding hidden digits that make a number divisible. Break a big divisor into two rules (72 = 8 × 9).`,
      questions: [
        {
          stem: String.raw`The four-digit number $52\square8$ is divisible by $9$. What digit is in the box?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`Which of these numbers is divisible by $11$?`,
          difficulty: 2,
          choices: [String.raw`$4352$`, String.raw`$5193$`, String.raw`$3718$`, String.raw`$2817$`, String.raw`$9087$`],
          answer: String.raw`(C) $3718$`,
        },
        {
          stem: String.raw`The five-digit number $7\square36\square$ is divisible by $72$. The two boxes may hide different digits. What is the largest possible value of the number?`,
          difficulty: 3,
          answer: String.raw`$73\,368$`,
        },
        {
          stem: String.raw`Which of these numbers is divisible by $4$ but **not** by $8$?`,
          difficulty: 1,
          choices: [String.raw`$3216$`, String.raw`$5124$`, String.raw`$7320$`, String.raw`$4816$`, String.raw`$6408$`],
          answer: String.raw`(B) $5124$`,
        },
        {
          stem: String.raw`In the four-digit number $2\square\square6$, both boxes hide the same digit. The number is divisible by $12$. What is the number?`,
          difficulty: 2,
          answer: String.raw`$2556$`,
        },
        {
          stem: String.raw`A whole number is written using only the digits $3$ and $4$, and it uses each of them at least once. It is divisible by $36$. What is the smallest such number?`,
          difficulty: 3,
          answer: String.raw`$33\,444$`,
        },
        {
          stem: String.raw`Seven-digit numbers are made using each of the digits $1, 2, 3, 4, 5, 6, 7$ exactly once. How many of these numbers are divisible by $11$?`,
          difficulty: 4,
          answer: String.raw`$576$`,
        },
      ],
    },
    {
      id: "N2-remainders",
      name: String.raw`Remainders: one more or one less than a multiple`,
      tests: String.raw`Finding a number from the remainders it leaves when divided by several numbers. Check whether it is a fixed amount more (or less) than a common multiple; otherwise list and test.`,
      questions: [
        {
          stem: String.raw`Lisa has between $20$ and $30$ marbles. When she puts them into groups of $4$, $1$ marble is left over. When she puts them into groups of $6$, $1$ marble is also left over. How many marbles does she have?`,
          difficulty: 1,
          answer: String.raw`$25$`,
        },
        {
          stem: String.raw`What is the smallest whole number that leaves a remainder of $2$ when divided by $3$, a remainder of $3$ when divided by $4$, and a remainder of $4$ when divided by $5$?`,
          difficulty: 2,
          choices: [String.raw`$23$`, String.raw`$59$`, String.raw`$61$`, String.raw`$119$`],
          answer: String.raw`(B) $59$`,
        },
        {
          stem: String.raw`What is the smallest three-digit number that leaves a remainder of $2$ when divided by $5$ and a remainder of $3$ when divided by $7$?`,
          difficulty: 3,
          answer: String.raw`$122$`,
        },
        {
          stem: String.raw`When a whole number is divided by $9$, the quotient is $15$. What is the largest the number can be?`,
          difficulty: 1,
          answer: String.raw`$143$`,
        },
        {
          stem: String.raw`A whole number leaves a remainder of $4$ when divided by $9$. What is the remainder when $5$ times the number is divided by $9$?`,
          difficulty: 2,
          choices: [String.raw`$0$`, String.raw`$2$`, String.raw`$4$`, String.raw`$5$`, String.raw`$8$`],
          answer: String.raw`(B) $2$`,
        },
        {
          stem: String.raw`When $2026$ is divided by a certain two-digit number, the remainder is $16$. How many two-digit numbers could it be?`,
          difficulty: 3,
          answer: String.raw`$2$`,
        },
        {
          stem: String.raw`The whole numbers from $1$ to $2026$ are written one after another to make one very long number:
$$12345678910111213 \ldots 20252026$$
What is the remainder when this long number is divided by $9$?`,
          difficulty: 4,
          answer: String.raw`$1$`,
        },
      ],
    },
    {
      id: "N2-last-digit",
      name: String.raw`Last digit of powers`,
      tests: String.raw`Finding the last digit of a number multiplied by itself many times. Write out the last digits until they repeat, then use the remainder after dividing by the cycle length.`,
      questions: [
        {
          stem: String.raw`What is the last digit of $2^{20}$? ($2^{20}$ means twenty $2$s multiplied together.)`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`What is the last digit of $7^{2026}$?`,
          difficulty: 2,
          choices: [String.raw`$1$`, String.raw`$3$`, String.raw`$7$`, String.raw`$9$`],
          answer: String.raw`(D) $9$`,
        },
        {
          stem: String.raw`What is the last digit of $1^{1} + 2^{2} + 3^{3} + 4^{4} + \cdots + 10^{10}$?`,
          difficulty: 3,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`What is the last digit of $13 \times 23 \times 33 \times 43 \times 53$?`,
          difficulty: 1,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`What is the last digit of $2^{2026} + 3^{2026}$?`,
          difficulty: 2,
          choices: [String.raw`$1$`, String.raw`$3$`, String.raw`$5$`, String.raw`$7$`, String.raw`$9$`],
          answer: String.raw`(B) $3$`,
        },
        {
          stem: String.raw`What is the last digit of $1 + 2 + 2^{2} + 2^{3} + \cdots + 2^{100}$?`,
          difficulty: 3,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`What is the last digit of $1^{2026} + 2^{2026} + 3^{2026} + \cdots + 2026^{2026}$?`,
          difficulty: 4,
          answer: String.raw`$1$`,
        },
      ],
    },
    {
      id: "N2-calendar",
      name: String.raw`Days of the week`,
      tests: String.raw`Working out the day of the week a number of days later, or across months, using the 7-day cycle. Look for dates, "days from today" or counting Mondays, Tuesdays, ... in a month.`,
      questions: [
        {
          stem: String.raw`Today is Monday. What day of the week will it be $100$ days from today?`,
          difficulty: 1,
          answer: String.raw`Wednesday`,
        },
        {
          stem: String.raw`In a certain year, 1 March is a Thursday. What day of the week is 25 December in the same year?`,
          difficulty: 2,
          answer: String.raw`Tuesday`,
        },
        {
          stem: String.raw`In a certain month, there are more Tuesdays than Mondays, and more Tuesdays than Wednesdays. On what day of the week is the 1st of that month?`,
          difficulty: 3,
          answer: String.raw`Tuesday`,
        },
        {
          stem: String.raw`Today is Wednesday. What day of the week was it $50$ days ago?`,
          difficulty: 1,
          answer: String.raw`Tuesday`,
        },
        {
          stem: String.raw`In a certain month, the dates of all the Thursdays add up to $80$. What is the date of the first Thursday of that month?`,
          difficulty: 2,
          answer: String.raw`The 2nd`,
        },
        {
          stem: String.raw`1 January 2026 is a Thursday. On what day of the week is 1 January 2030? (2028 is a leap year with $366$ days. 2026, 2027 and 2029 each have $365$ days.)`,
          difficulty: 3,
          answer: String.raw`Tuesday`,
        },
        {
          stem: String.raw`The year 2026 has $365$ days and starts on a Thursday. In which year will a 2026 calendar next be correct again, with every date falling on the same day of the week as in 2026? (Between 2026 and 2100, the leap years, with $366$ days, are exactly the years that are multiples of $4$.)`,
          difficulty: 4,
          answer: String.raw`2037`,
        },
      ],
    },
    {
      id: "N2-perfect-squares",
      name: String.raw`Perfect squares`,
      tests: String.raw`Counting or making perfect squares, and puzzles that secretly depend on squares having an odd number of factors (switches pressed by every multiple).`,
      questions: [
        {
          stem: String.raw`How many perfect squares are there between $50$ and $200$?`,
          difficulty: 1,
          choices: [String.raw`$6$`, String.raw`$7$`, String.raw`$8$`, String.raw`$14$`],
          answer: String.raw`(B) $7$`,
        },
        {
          stem: String.raw`What is the smallest whole number that $180$ must be multiplied by to give a perfect square?`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`There are $150$ lights in a row, numbered $1$ to $150$, and all are off. $150$ children take turns. Child $1$ presses the switch of every light. Child $2$ presses the switch of every light whose number is a multiple of $2$. Child $3$ presses the switch of every light whose number is a multiple of $3$, and so on, up to child $150$. Each press turns a light from off to on, or from on to off. How many lights are on at the end?`,
          difficulty: 3,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Exactly one of these numbers is **not** a perfect square. Which one?`,
          difficulty: 1,
          choices: [String.raw`$1369$`, String.raw`$2209$`, String.raw`$3427$`, String.raw`$4624$`, String.raw`$5776$`],
          answer: String.raw`(C) $3427$`,
        },
        {
          stem: String.raw`How many of the factors of $144$ are perfect squares?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Two neighbouring square numbers (like $16$ and $25$) differ by $91$. What is the larger of the two square numbers?`,
          difficulty: 3,
          answer: String.raw`$2116$`,
        },
        {
          stem: String.raw`Some whole numbers have exactly $3$ factors that are perfect squares. For example, the factors of $16$ that are perfect squares are $1$, $4$ and $16$. (Remember that $1 = 1 \times 1$ is a perfect square.) How many whole numbers from $1$ to $200$ have exactly $3$ factors that are perfect squares?`,
          difficulty: 4,
          answer: String.raw`$10$`,
        },
      ],
    },
  ],
});
