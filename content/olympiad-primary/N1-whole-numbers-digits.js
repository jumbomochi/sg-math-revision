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
    {
      title: String.raw`Digit sums and the number 9`,
      body: String.raw`A number and its digit sum leave the **same remainder** when divided by $9$.

- Example: $4721$ has digit sum $14$, and $14 \div 9$ leaves remainder $5$. Check: $4721 = 9 \times 524 + 5$.
- This works for totals too. When you add several numbers, the total leaves the same remainder (when divided by $9$) as **all their digits added together**. Example: $25 + 31 = 56$. The digits $2 + 5 + 3 + 1 = 11$ leave remainder $2$, and so does $56 = 9 \times 6 + 2$.
- So if you know which digits are used, you already know the remainder of the total, however the digits are arranged. Use this to rule answers out quickly.`,
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
        {
          stem: String.raw`A number is made of $3$ thousands, $15$ hundreds, $4$ tens and $27$ ones. What is the number?`,
          difficulty: 1,
          answer: String.raw`$4567$`,
        },
        {
          stem: String.raw`Ravi crosses out the last digit of a four-digit number, which leaves a three-digit number. He adds this three-digit number to the original four-digit number and gets $2026$. What was the four-digit number?`,
          difficulty: 2,
          answer: String.raw`$1842$`,
        },
        {
          stem: String.raw`Mei writes a $0$ between the first and second digits of a three-digit number, making a four-digit number. (For example, $347$ would become $3047$.) Her four-digit number is exactly $6$ times her three-digit number. What was the three-digit number?`,
          difficulty: 3,
          answer: String.raw`$180$`,
        },
        {
          stem: String.raw`A digit $3$ is written in front of a two-digit number and another $3$ is written at its end, making a four-digit number. (For example, $45$ becomes $3453$.) For how many two-digit numbers is the four-digit number a multiple of the original two-digit number?`,
          difficulty: 4,
          answer: String.raw`$7$`,
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
        {
          stem: String.raw`Using each of the digits $4$, $0$, $7$, $2$ and $9$ exactly once, what is the smallest **even** five-digit number that can be made?`,
          difficulty: 1,
          choices: [String.raw`$20\,479$`, String.raw`$20\,794$`, String.raw`$20\,974$`, String.raw`$24\,790$`, String.raw`$40\,792$`],
          answer: String.raw`(B) $20\,794$`,
        },
        {
          stem: String.raw`Using each of the digits $3$, $0$, $8$, $1$ and $6$ exactly once, make the five-digit number that is as close as possible to $50\,000$. What is the number?`,
          difficulty: 2,
          answer: String.raw`$60\,138$`,
        },
        {
          stem: String.raw`What is the largest whole number whose digits are all different and add up to $10$?`,
          difficulty: 3,
          answer: String.raw`$43\,210$`,
        },
        {
          stem: String.raw`Lina uses each of the digits $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$ and $9$ exactly once to make three three-digit numbers. Then she adds the three numbers. What is the closest total to $2026$ that she can get?`,
          difficulty: 4,
          answer: String.raw`$2025$`,
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
        {
          stem: String.raw`How many three-digit numbers have digits that add up to $3$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`, String.raw`$10$`],
          answer: String.raw`(D) $6$`,
        },
        {
          stem: String.raw`How many whole numbers from $1$ to $300$ have digits that add up to $10$?`,
          difficulty: 2,
          answer: String.raw`$28$`,
        },
        {
          stem: String.raw`A whole number is added to the sum of its own digits, and the total is $2026$. What is the number?`,
          difficulty: 3,
          answer: String.raw`$2021$`,
        },
        {
          stem: String.raw`For how many whole numbers from $1$ to $999$ is the sum of the digits of the number equal to the sum of the digits of **twice** the number? (For example, $45$ works: $45 \times 2 = 90$, and $4 + 5 = 9 + 0$.)`,
          difficulty: 4,
          answer: String.raw`$91$`,
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
        {
          stem: String.raw`In the subtraction shown, each box hides one digit. What is the sum of the three missing digits?`,
          difficulty: 1,
          figure: {
            type: "plot",
            x: [-3, 7],
            y: [-0.6, 2.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[1.65, 1.65], [2.35, 1.65], [2.35, 2.35], [1.65, 2.35]], tone: "ink" },
              { points: [[2.65, 0.65], [3.35, 0.65], [3.35, 1.35], [2.65, 1.35]], tone: "ink" },
              { points: [[0.65, -0.35], [1.35, -0.35], [1.35, 0.35], [0.65, 0.35]], tone: "ink" },
            ],
            segments: [
              { from: [-0.2, 0.45], to: [3.6, 0.45], tone: "ink" },
            ],
            labels: [
              { x: 1, y: 2, text: "8" },
              { x: 3, y: 2, text: "2" },
              { x: 0, y: 1, text: "−" },
              { x: 1, y: 1, text: "3" },
              { x: 2, y: 1, text: "7" },
              { x: 2, y: 0, text: "6" },
              { x: 3, y: 0, text: "5" },
            ],
            alt: "Column subtraction: 8, box, 2 minus 3, 7, box equals box, 6, 5.",
          },
          answer: String.raw`$15$`,
        },
        {
          stem: String.raw`In the sum $\text{A} + \text{AB} + \text{ABC} = 300$, different letters stand for different digits. AB is a two-digit number and ABC is a three-digit number. What is the number ABC?`,
          difficulty: 2,
          answer: String.raw`$271$`,
        },
        {
          stem: String.raw`In the long multiplication shown, each box hides one digit. What is the four-digit answer?`,
          difficulty: 3,
          figure: {
            type: "plot",
            x: [-2, 7],
            y: [-0.6, 4.6],
            equal: true,
            axes: false,
            polygons: [
              { points: [[2.65, 3.65], [3.35, 3.65], [3.35, 4.35], [2.65, 4.35]], tone: "ink" },
              { points: [[3.65, 2.65], [4.35, 2.65], [4.35, 3.35], [3.65, 3.35]], tone: "ink" },
              { points: [[2.65, 1.65], [3.35, 1.65], [3.35, 2.35], [2.65, 2.35]], tone: "ink" },
              { points: [[0.65, 0.65], [1.35, 0.65], [1.35, 1.35], [0.65, 1.35]], tone: "ink" },
              { points: [[1.65, 0.65], [2.35, 0.65], [2.35, 1.35], [1.65, 1.35]], tone: "ink" },
              { points: [[2.65, 0.65], [3.35, 0.65], [3.35, 1.35], [2.65, 1.35]], tone: "ink" },
              { points: [[0.65, -0.35], [1.35, -0.35], [1.35, 0.35], [0.65, 0.35]], tone: "ink" },
              { points: [[1.65, -0.35], [2.35, -0.35], [2.35, 0.35], [1.65, 0.35]], tone: "ink" },
              { points: [[3.65, -0.35], [4.35, -0.35], [4.35, 0.35], [3.65, 0.35]], tone: "ink" },
            ],
            segments: [
              { from: [1.5, 2.45], to: [4.6, 2.45], tone: "ink" },
              { from: [0.4, 0.45], to: [4.6, 0.45], tone: "ink" },
            ],
            labels: [
              { x: 4, y: 4, text: "7" },
              { x: 2, y: 3, text: "×" },
              { x: 3, y: 3, text: "3" },
              { x: 2, y: 2, text: "3" },
              { x: 4, y: 2, text: "6" },
              { x: 0, y: 1, text: "+" },
              { x: 3, y: 0, text: "8" },
            ],
            alt: "Long multiplication: box 7 times 3 box. The first line of working is 3, box, 6. The second line of working is three boxes, moved one place to the left. The answer is box, box, 8, box.",
          },
          answer: String.raw`$1786$`,
        },
        {
          stem: String.raw`In the multiplication $\text{ABC} \times 9 = \text{DDDB}$, different letters stand for different digits. ABC is a three-digit number and DDDB is a four-digit number. What is the number ABC?`,
          difficulty: 4,
          answer: String.raw`$864$`,
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
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards, such as $3883$. How many four-digit palindromes are there between $3000$ and $5000$?`,
          difficulty: 1,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards, such as $2552$ or $7007$. Every four-digit palindrome is a multiple of one of these numbers. Which one?`,
          difficulty: 2,
          choices: [String.raw`$3$`, String.raw`$7$`, String.raw`$9$`, String.raw`$11$`, String.raw`$13$`],
          answer: String.raw`(D) $11$`,
        },
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards. What is the sum of all the four-digit palindromes?`,
          difficulty: 3,
          answer: String.raw`$495\,000$`,
        },
        {
          stem: String.raw`A palindrome is a number that reads the same forwards and backwards. Some five-digit palindromes can be written as the sum of two different four-digit palindromes. What is the largest such five-digit palindrome?`,
          difficulty: 4,
          answer: String.raw`$12\,221$`,
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
        {
          stem: String.raw`All the whole numbers from $1$ to $100$ are written down. How many times is the digit $0$ written?`,
          difficulty: 1,
          choices: [String.raw`$9$`, String.raw`$10$`, String.raw`$11$`, String.raw`$12$`, String.raw`$20$`],
          answer: String.raw`(C) $11$`,
        },
        {
          stem: String.raw`A chapter of a book starts on page $58$ and ends on page $132$. How many digits are used to print the page numbers of this chapter?`,
          difficulty: 2,
          answer: String.raw`$183$`,
        },
        {
          stem: String.raw`The pages of a book are numbered $1, 2, 3, \ldots$ in order. The number of digits used is exactly twice the number of pages. How many pages does the book have?`,
          difficulty: 3,
          answer: String.raw`$108$`,
        },
        {
          stem: String.raw`The whole numbers from $1$ to $999$ are written one after another to make one long string of digits:
$$123456789101112 \ldots 998999$$
How many times does the block "$12$" (a $1$ followed straight away by a $2$) appear in the string?`,
          difficulty: 4,
          answer: String.raw`$32$`,
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
        {
          stem: String.raw`A two-digit number is $63$ more than the number formed by reversing its digits. Its digits add up to $11$. What is the number?`,
          difficulty: 1,
          answer: String.raw`$92$`,
        },
        {
          stem: String.raw`A three-digit number is added to the number formed by reversing its digits, and the total is $1251$. What is the middle digit of the number?`,
          difficulty: 2,
          choices: [String.raw`$2$`, String.raw`$5$`, String.raw`$6$`, String.raw`$7$`, String.raw`$9$`],
          answer: String.raw`(D) $7$`,
        },
        {
          stem: String.raw`A two-digit number is multiplied by the number formed by reversing its digits, and the product is $2296$. What is the larger of these two numbers?`,
          difficulty: 3,
          answer: String.raw`$82$`,
        },
        {
          stem: String.raw`Take a three-digit number whose last digit is not $0$, and add it to the number formed by reversing its digits. For example, $152 + 251 = 403$. For how many three-digit numbers is the total a palindrome (a number that reads the same forwards and backwards)?`,
          difficulty: 4,
          answer: String.raw`$188$`,
        },
      ],
    },
  ],
});
