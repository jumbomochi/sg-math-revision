H2.addTopic({
  id: "N1",
  title: "Whole Numbers and Digits",
  summary: String.raw`Place value, digit sums, making the largest and smallest numbers, missing digits and letter sums, palindromes, counting the digits in page numbers, and reversing digits.`,
  concepts: [
    {
      title: String.raw`Place value: every digit has a job`,
      body: String.raw`A digit is worth more or less depending on where it sits. In $6205$, the $6$ is worth $6000$, the $2$ is worth $200$ and the $5$ is worth $5$.

- **Writing a digit at the end** of a number multiplies the number by $10$, then adds the digit: put $3$ after $41$ and you get $413 = 41 \times 10 + 3$.
- **Writing a digit in front** of a two-digit number adds that digit's hundreds: put $7$ in front of $41$ and you get $741 = 700 + 41$.
- Use these facts to turn "the new number is ... more / ... times" into a simple equation with a box.`,
    },
    {
      title: String.raw`Largest and smallest numbers from given digits`,
      body: String.raw`- **Largest**: put the biggest digits in the highest places. From $0, 5, 2$: largest is $520$.
- **Smallest**: put the smallest **non-zero** digit first (a number cannot start with $0$), then the rest from smallest to biggest. From $0, 5, 2$: smallest is $205$.
- **Extra rules** (must be odd, even, ...): fix the last digit first, then make the rest as big or as small as you can. Try every allowed last digit and compare.
- To make two numbers **close together**, make their first digits differ by just $1$, then make the bigger one's remaining digits as small as possible and the smaller one's as big as possible.`,
    },
    {
      title: String.raw`Digit sums`,
      body: String.raw`The **digit sum** of $472$ is $4 + 7 + 2 = 13$.

- **Smallest number with a given digit sum**: use as few digits as possible, so use lots of $9$s and put the leftover digit at the front. Digit sum $20$: $20 = 2 + 9 + 9$, so the smallest is $299$.
- **Adding up many digit sums**: count by place. For example, in $1$ to $99$ each digit $1$ to $9$ appears $10$ times in the tens place and $10$ times in the ones place.
- **Listing numbers with a digit sum**: fix the first digit, then the rest follows. Two-digit numbers with digit sum $4$: $13, 22, 31, 40$.`,
    },
    {
      title: String.raw`Missing digits: work column by column`,
      body: String.raw`- Start from the **ones column** and move left, writing down each carry.
- When you add **two** numbers, a carry is only ever $0$ or $1$.
- A number never starts with $0$.
- If a column gives two possible digits, try each one and see which works further left.`,
      figure: {
        type: "plot",
        x: [-3, 7],
        y: [-0.75, 3.05],
        equal: true,
        axes: false,
        segments: [
          { from: [0.2, 0.45], to: [3.6, 0.45], tone: "ink" },
        ],
        labels: [
          { x: 1, y: 2.65, text: "1", style: "small", tone: "warn" },
          { x: 2, y: 2.65, text: "1", style: "small", tone: "warn" },
          { x: 1, y: 2, text: "3" },
          { x: 2, y: 2, text: "6" },
          { x: 3, y: 2, text: "8" },
          { x: 0.3, y: 1, text: "+" },
          { x: 1, y: 1, text: "2" },
          { x: 2, y: 1, text: "7" },
          { x: 3, y: 1, text: "5" },
          { x: 1, y: 0, text: "6" },
          { x: 2, y: 0, text: "4" },
          { x: 3, y: 0, text: "3" },
          { x: 2.5, y: 2.65, text: "← carries", pos: "e", style: "small", tone: "warn" },
        ],
        caption: String.raw`Ones: $8 + 5 = 13$, write $3$, carry $1$. Tens: $6 + 7 + 1 = 14$, write $4$, carry $1$. Hundreds: $3 + 2 + 1 = 6$.`,
        alt: "Column addition of 368 and 275 giving 643, with small carry digits 1 written above the tens and hundreds columns.",
      },
    },
    {
      title: String.raw`Letters for digits`,
      body: String.raw`In a letter puzzle, the **same letter is the same digit** and **different letters are different digits**.

- Write a number made of letters using place value: the two-digit number AB is $10 \times \text{A} + \text{B}$.
- Look at the **leftmost** and **rightmost** columns first; they usually give the most information.
- Tiny example: $\text{A} + \text{A} + \text{A} = \text{BA}$. The ones digit of $3 \times \text{A}$ must be A, so $2 \times \text{A}$ ends in $0$. A cannot be $0$ (then B would be $0$ too), so A $= 5$. Then $5 + 5 + 5 = 15$, so B $= 1$.`,
    },
    {
      title: String.raw`Palindromes`,
      body: String.raw`A **palindrome** reads the same forwards and backwards, like $7$, $44$, $909$ or $1221$.

- **To count palindromes**, choose the first half; the second half is then fixed. Four-digit palindromes look like abba: $9$ choices for a (not $0$) and $10$ for b, so there are $9 \times 10 = 90$ of them.
- **The next palindrome**: copy the front half onto the back. If that is too small, increase the middle digit(s) by $1$ and copy again.
- The last digit of a palindrome equals its first digit, so for numbers with two or more digits it can never be $0$.`,
    },
    {
      title: String.raw`Counting the digits in page numbers`,
      body: String.raw`Count the pages in blocks by how many digits each page number has.

| Pages | How many pages | Digits used |
| $1$ to $9$ | $9$ | $9$ |
| $10$ to $99$ | $90$ | $180$ |
| $100$ to $999$ | $900$ | $2700$ |

Example: pages $1$ to $30$ use $9 + 21 \times 2 = 51$ digits.

To count how often **one digit** appears (say the digit $3$), count it in the ones place, then the tens place, then the hundreds place, and add.`,
    },
    {
      title: String.raw`Reversing digits`,
      body: String.raw`Write the two-digit number AB as $10 \times \text{A} + \text{B}$. Then:

- $\text{AB} + \text{BA} = 11 \times (\text{A} + \text{B})$, always a multiple of $11$. Example: $25 + 52 = 77 = 11 \times 7$.
- $\text{AB} - \text{BA} = 9 \times (\text{A} - \text{B})$, always a multiple of $9$. Example: $63 - 36 = 27 = 9 \times 3$.
- For three digits: $\text{ABC} - \text{CBA} = 99 \times (\text{A} - \text{C})$. The middle digit cancels out!`,
    },
  ],
  archetypes: [
    {
      id: "N1-place-value",
      name: String.raw`Place value and building numbers`,
      tests: String.raw`Questions about what a digit is worth, or what happens when a digit is written in front of or after a number. Look for "the value of the digit" or "a digit is written at the end".`,
      questions: [
        {
          stem: String.raw`In the number $58\,347$, how much greater is the value of the digit $8$ than the value of the digit $4$?`,
          difficulty: 1,
          choices: [String.raw`$4$`, String.raw`$796$`, String.raw`$7960$`, String.raw`$7996$`, String.raw`$8040$`],
          answer: String.raw`(C) $7960$`,
        },
        {
          stem: String.raw`When the digit $2$ is written at the right-hand end of a whole number, the new number is $1433$ more than the original number. What is the original number?`,
          difficulty: 2,
          answer: String.raw`$159$`,
        },
        {
          stem: String.raw`The digit $5$ is written in front of a three-digit number to make a four-digit number. The four-digit number is $9$ times the three-digit number. What is the three-digit number?`,
          difficulty: 3,
          answer: String.raw`$625$`,
        },
      ],
    },
    {
      id: "N1-largest-smallest",
      name: String.raw`Largest and smallest numbers from digits`,
      tests: String.raw`Making the biggest or smallest number from a set of digits, sometimes with an extra condition (odd, even) or for a difference between two numbers. Look for "using each digit exactly once".`,
      questions: [
        {
          stem: String.raw`Use each of the digits $0$, $3$, $6$, $8$ and $1$ exactly once to make the largest possible **odd** five-digit number.`,
          difficulty: 1,
          answer: String.raw`$86\,301$`,
        },
        {
          stem: String.raw`Using each of the digits $0$, $2$, $4$, $6$ and $8$ exactly once, Wei Ming makes the largest possible five-digit number and the smallest possible five-digit number. What is the difference between his two numbers?`,
          difficulty: 2,
          answer: String.raw`$65\,952$`,
        },
        {
          stem: String.raw`Each of the digits $1$, $2$, $3$, $4$, $5$, $6$, $7$ and $8$ is used exactly once to make two four-digit numbers. What is the smallest possible difference between the two numbers?`,
          difficulty: 3,
          answer: String.raw`$247$`,
        },
      ],
    },
    {
      id: "N1-digit-sums",
      name: String.raw`Digit sums`,
      tests: String.raw`Finding or counting numbers whose digits add up to a given total, or adding up all the digits in a long list of numbers. Look for "the digits add up to".`,
      questions: [
        {
          stem: String.raw`How many two-digit numbers have digits that add up to $9$?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`What is the smallest whole number whose digits add up to $30$?`,
          difficulty: 2,
          choices: [String.raw`$6888$`, String.raw`$4899$`, String.raw`$3999$`, String.raw`$9993$`, String.raw`$5799$`],
          answer: String.raw`(C) $3999$`,
        },
        {
          stem: String.raw`Mei writes down every whole number from $1$ to $200$. Then she adds up all the digits she has written. What total does she get?`,
          difficulty: 3,
          answer: String.raw`$1902$`,
        },
      ],
    },
    {
      id: "N1-missing-digits",
      name: String.raw`Missing digits and letter puzzles`,
      tests: String.raw`A sum or product with some digits hidden by boxes or replaced by letters. Work column by column from the ones digit, keeping track of carries; different letters stand for different digits.`,
      questions: [
        {
          stem: String.raw`In the addition shown, each box hides one digit. What is the sum of the three missing digits?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-3, 7],
            y: [-0.6, 2.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1.65, 1.65], [2.35, 1.65], [2.35, 2.35], [1.65, 2.35]], tone: "ink" },
              { points: [[0.65, 0.65], [1.35, 0.65], [1.35, 1.35], [0.65, 1.35]], tone: "ink" },
              { points: [[2.65, 0.65], [3.35, 0.65], [3.35, 1.35], [2.65, 1.35]], tone: "ink" },
            ],
            segments: [
              { from: [-0.2, 0.45], to: [3.6, 0.45], tone: "ink" },
            ],
            labels: [
              { x: 1, y: 2, text: "4" },
              { x: 3, y: 2, text: "7" },
              { x: 0, y: 1, text: "+" },
              { x: 2, y: 1, text: "6" },
              { x: 1, y: 0, text: "9" },
              { x: 2, y: 0, text: "1" },
              { x: 3, y: 0, text: "2" },
            ],
            alt: "Column addition: 4, box, 7 plus box, 6, box equals 912.",
          },
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`In the multiplication $\text{AB} \times 3 = \text{CAB}$, different letters stand for different digits. AB is a two-digit number and CAB is a three-digit number. What is the number CAB?`,
          difficulty: 2,
          answer: String.raw`$150$`,
        },
        {
          stem: String.raw`In the multiplication $\text{AB} \times \text{AB} = \text{CAB}$, different letters stand for different digits. AB is a two-digit number and CAB is a three-digit number. What is the number CAB?`,
          difficulty: 3,
          answer: String.raw`$625$`,
        },
      ],
    },
    {
      id: "N1-palindromes",
      name: String.raw`Palindromes`,
      tests: String.raw`Numbers that read the same forwards and backwards: finding the next one, counting them, or finding one with an extra property. Choose the first half of the number and the rest is fixed.`,
      questions: [
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards, such as $3443$. What is the smallest whole number that must be added to $4297$ to make a palindrome?`,
          difficulty: 1,
          choices: [String.raw`$7$`, String.raw`$27$`, String.raw`$37$`, String.raw`$47$`, String.raw`$127$`],
          answer: String.raw`(C) $37$`,
        },
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards, such as $252$. How many three-digit palindromes are even numbers?`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`What is the largest five-digit palindrome that is divisible by $6$?`,
          difficulty: 3,
          answer: String.raw`$89\,898$`,
        },
      ],
    },
    {
      id: "N1-page-digits",
      name: String.raw`Counting digits in page numbers`,
      tests: String.raw`How many digits are used to number the pages of a book, how many pages there are from the number of digits, or how often one digit is written. Split the pages into 1-digit, 2-digit and 3-digit blocks.`,
      questions: [
        {
          stem: String.raw`How many digits are needed to number the pages of a book from page $1$ to page $75$?`,
          difficulty: 1,
          choices: [String.raw`$75$`, String.raw`$132$`, String.raw`$141$`, String.raw`$150$`],
          answer: String.raw`(C) $141$`,
        },
        {
          stem: String.raw`The pages of a book are numbered $1, 2, 3, \ldots$ in order. Altogether $1101$ digits are used. How many pages does the book have?`,
          difficulty: 2,
          answer: String.raw`$403$`,
        },
        {
          stem: String.raw`All the whole numbers from $1$ to $250$ are written down. How many times is the digit $1$ written?`,
          difficulty: 3,
          answer: String.raw`$155$`,
        },
      ],
    },
    {
      id: "N1-reversing-digits",
      name: String.raw`Reversing digits`,
      tests: String.raw`A number is compared with, added to or subtracted from the number with its digits in reverse order. Use AB + BA = 11 × (A + B) and AB − BA = 9 × (A − B).`,
      questions: [
        {
          stem: String.raw`Jun adds a two-digit number to the number formed by reversing its digits. For example, $47 + 74 = 121$. Which of these could **not** be his answer?`,
          difficulty: 1,
          choices: [String.raw`$55$`, String.raw`$99$`, String.raw`$121$`, String.raw`$150$`, String.raw`$165$`],
          answer: String.raw`(D) $150$`,
        },
        {
          stem: String.raw`A two-digit number has no zero digits. When its digits are reversed, the new number is $54$ less than the original number. How many such two-digit numbers are there?`,
          difficulty: 2,
          answer: String.raw`$3$`,
        },
        {
          stem: String.raw`A three-digit number is $495$ more than the number formed by reversing its digits. Its digits add up to $18$, and its middle digit is equal to the sum of the other two digits. What is the number?`,
          difficulty: 3,
          answer: String.raw`$792$`,
        },
      ],
    },
  ],
});
