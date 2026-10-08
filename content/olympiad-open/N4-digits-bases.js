H2.addTopic({
  id: "N4",
  title: "Digits and Number Bases",
  summary: String.raw`Digit sums and the tests for 9 and 11, place-value equations, repunits, numbers in other bases, counting numbers by their digits, last non-zero digits and palindromes.`,
  concepts: [
    {
      title: String.raw`Place value turns digits into algebra`,
      body: String.raw`- Write $\overline{abc} = 100a + 10b + c$, with $0 \le b, c \le 9$ and $1 \le a \le 9$ for the leading digit.
- Reversing: $\overline{abc} - \overline{cba} = 99(a - c)$ and $\overline{ab} + \overline{ba} = 11(a + b)$.
- Blocks: if $m$ has $t$ digits, writing the digit $d$ in front of $m$ gives $d \cdot 10^{t} + m$, and writing it after $m$ gives $10m + d$.
- Turn the word condition into an equation, then use the digit bounds to leave only a few cases.
- Example: $\overline{ab} + \overline{ba} = 11(a + b)$ is a perfect square only when $a + b = 11$ (as $a + b \le 18$), e.g. $29 + 92 = 121$.`,
    },
    {
      title: String.raw`Digit sums and the number modulo 9`,
      body: String.raw`Let $S(n)$ be the sum of the digits of $n$.

- Since $10^{k} \equiv 1 \pmod 9$, we have $n \equiv S(n) \pmod 9$ (and so also modulo $3$). Example: $S(5832) = 18$, so $9 \mid 5832$.
- **Size bound**: a $k$-digit number has $S(n) \le 9k$, which is tiny compared with $n$. In an equation like $n + S(n) = 100$, $n$ must lie between $100 - 18 = 82$ and $99$; checking these gives only $n = 86$.
- Combine the two: the size bound leaves a short range, and working modulo $9$ often cuts it further or rules everything out.`,
    },
    {
      title: String.raw`Divisibility by 11, 7 and 13`,
      body: String.raw`- Since $10 \equiv -1 \pmod{11}$, a number is congruent modulo $11$ to its **alternating digit sum**, taken from the units digit: $918082 \equiv 2 - 8 + 0 - 8 + 1 - 9 = -22 \equiv 0 \pmod{11}$.
- Since $1000 \equiv -1 \pmod{1001}$ and $1001 = 7 \cdot 11 \cdot 13$, split the number into blocks of three digits from the right and take the alternating sum of the blocks. Example: $123456 \equiv 456 - 123 = 333 \pmod{1001}$, and $333$ is not divisible by $7$, $11$ or $13$, so neither is $123456$.`,
    },
    {
      title: String.raw`Repunits`,
      body: String.raw`The **repunit** $R_{n} = \underbrace{11\ldots1}_{n} = \dfrac{10^{n} - 1}{9}$; a repdigit $\overline{dd\ldots d}$ equals $d \cdot R_{n}$.

- $S(R_{n}) = n$, so $3 \mid R_{n} \iff 3 \mid n$ and $9 \mid R_{n} \iff 9 \mid n$.
- $R_{m} \mid R_{n}$ exactly when $m \mid n$, and $\gcd(R_{m}, R_{n}) = R_{\gcd(m, n)}$.
- For a prime $p \ne 2, 3, 5$, Fermat gives $10^{p-1} \equiv 1 \pmod{9p}$, so $p \mid R_{p-1}$.
- Example: $R_{6} = 111111 = 3 \cdot 7 \cdot 11 \cdot 13 \cdot 37$, so $7$, $11$, $13$ and $37$ divide every $R_{6k}$.`,
    },
    {
      title: String.raw`Number bases`,
      body: String.raw`- $(d_{k} d_{k-1} \ldots d_{0})_{b} = d_{k} b^{k} + \cdots + d_{1} b + d_{0}$ with $0 \le d_{i} \le b - 1$ and $d_{k} \ne 0$.
- **To convert** into base $b$, divide by $b$ repeatedly and read the remainders from last to first: $100 = 2 \cdot 49 + 0 \cdot 7 + 2 = 202_{7}$.
- A numeral is a **polynomial in $b$**: $1331_{b} = (b + 1)^{3}$ in every base $b \ge 4$. Divisibility between numerals is divisibility between polynomials evaluated at $b$.
- In base $b$: $n \equiv$ (digit sum) $\pmod{b - 1}$, $n \equiv$ (alternating digit sum) $\pmod{b + 1}$, and $n$ has exactly $k$ digits iff $b^{k-1} \le n < b^{k}$.`,
    },
    {
      title: String.raw`Counting numbers with digit conditions`,
      body: String.raw`- Treat a number as a **string of digits**, fill the positions one at a time, and take care with the leading digit (it cannot be $0$). Allowing leading zeros (e.g. $000$ to $999$) often makes counts cleaner.
- **Digit sums by stars and bars**: $x_{1} + \cdots + x_{k} = s$ has $\binom{s + k - 1}{k - 1}$ solutions in non-negative integers; subtract those where some digit is $\ge 10$ (inclusion–exclusion).
- Example: strings $000$ to $999$ with digit sum $10$: $\binom{12}{2} - 3\binom{2}{2} = 66 - 3 = 63$.
- Count the complement when "at least one" appears.`,
    },
    {
      title: String.raw`Palindromes`,
      body: String.raw`- A palindrome is fixed by its first half, so there are $9 \cdot 10^{\lceil k/2 \rceil - 1}$ palindromes with $k$ digits ($900$ with five digits).
- Group the symmetric digits: $\overline{abcba} = 10001a + 1010b + 100c$. Reduce each coefficient modulo the divisor you care about, then count the digit choices.
- Example: a five-digit palindrome divisible by $5$ must end, and hence begin, with $5$: there are $10 \cdot 10 = 100$ of them.`,
    },
    {
      title: String.raw`Last non-zero digits`,
      body: String.raw`- Write $N = 2^{x} 5^{y} M$ with $\gcd(M, 10) = 1$. If $x \ge y$, then $N$ ends in exactly $y$ zeros and $N / 10^{y} = 2^{x - y} M$, whose last digit you find modulo $10$ (powers of $2$ end in $2, 4, 8, 6, \ldots$).
- For $n!$, Legendre's formula gives $x$ and $y$; multiply the parts left after removing all $2$s and $5$s.
- Example: $15!$ has $y = 3$, $x = 11$; the remaining odd parts multiply to a number ending in $3$, and $2^{8} \cdot 3 \equiv 6 \cdot 3 \equiv 8 \pmod{10}$, so the last non-zero digit of $15!$ is $8$.
- For the last **two** non-zero digits, work modulo $4$ and modulo $25$ separately and combine.`,
    },
  ],
  archetypes: [
    {
      id: "N4-digit-sums",
      name: String.raw`Digit sums modulo 9 and 11`,
      tests: String.raw`Questions about $S(n)$, the sum of the digits, or about divisibility by $9$ or $11$. Use $n \equiv S(n) \pmod 9$, the alternating sum for $11$, and the size bound $S(n) \le 9 \times (\text{number of digits})$.`,
      questions: [
        {
          stem: String.raw`What is the sum of the digits of $10^{25} - 25$?`,
          difficulty: 1,
          answer: String.raw`$219$`,
        },
        {
          stem: String.raw`Let $S(n)$ denote the sum of the digits of the positive integer $n$. Prove that there is no positive integer $n$ such that $n + S(n) + S(S(n)) = 2026$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: modulo $9$ we have $n \equiv S(n) \equiv S(S(n))$, so the left side is $\equiv 3n \equiv 0, 3$ or $6 \pmod 9$, but $2026 \equiv 1 \pmod 9$.`,
        },
        {
          stem: String.raw`Find the smallest positive multiple of $11$ whose digits add up to $100$.`,
          difficulty: 3,
          answer: String.raw`$559\,999\,999\,999$`,
        },
      ],
    },
    {
      id: "N4-place-value",
      name: String.raw`Place-value equations`,
      tests: String.raw`A number is described through its digits (reversed, moved, compared with the digit sum). Write it as $100a + 10b + c$ or $a \cdot 10^{t} + m$, form an equation, and use the bounds on digits.`,
      questions: [
        {
          stem: String.raw`A two-digit number is $7$ times the sum of its digits. When its digits are reversed, the number decreases by $27$. Find the number.`,
          difficulty: 1,
          answer: String.raw`$63$`,
        },
        {
          stem: String.raw`How many three-digit positive integers are equal to $19$ times the sum of their digits?`,
          difficulty: 2,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Moving the first digit of a positive integer to the end means, for example, turning $1234$ into $2341$. For which integers $k$ with $2 \le k \le 9$ does there exist a positive integer $N$ such that moving the first digit of $N$ to the end gives the number $kN$? Prove your answer.`,
          difficulty: 3,
          answer: String.raw`Only $k = 3$ (for example $3 \times 142857 = 428571$). **Proof.** Key idea: with $N = a \cdot 10^{t} + m$, $0 \le m < 10^{t}$, the condition is $(10 - k)m = a(k \cdot 10^{t} - 1)$; the bound $m < 10^{t}$ forces $k(a + 1) \le 10$ (so $k \le 5$), and then divisibility by $10 - k$ fails unless $k = 3$ (for $k = 2$ it needs $8 \mid a$, for $k = 4$ it needs $6 \mid 4 \cdot 10^{t} - 1$, which is odd).`,
        },
      ],
    },
    {
      id: "N4-repunits",
      name: String.raw`Repunits and repdigits`,
      tests: String.raw`Numbers written with one repeated digit, such as $111\ldots1$ or $777\ldots7$. Use $R_{n} = \frac{10^{n} - 1}{9}$, divisibility of repunits, Fermat's little theorem, or the pigeonhole principle on remainders.`,
      questions: [
        {
          stem: String.raw`Let $R_{n}$ denote the number written with $n$ ones, so $R_{3} = 111$. What is the smallest $n$ for which $R_{n}$ is divisible by $41$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$4$`, String.raw`$5$`, String.raw`$6$`, String.raw`$8$`],
          answer: String.raw`(C) $5$`,
        },
        {
          stem: String.raw`Find the remainder when the number written with $2026$ ones, $\underbrace{11\ldots1}_{2026}$, is divided by $2026$. (You may use the fact that $1013$ is prime.)`,
          difficulty: 2,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`Prove that every positive integer has a positive multiple whose decimal digits are all $0$s and $7$s.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: by the pigeonhole principle two of the $n + 1$ numbers $7, 77, \ldots, \underbrace{77\ldots7}_{n+1}$ leave the same remainder modulo $n$, and their difference $77\ldots700\ldots0$ is the required multiple of $n$.`,
        },
      ],
    },
    {
      id: "N4-bases",
      name: String.raw`Number bases`,
      tests: String.raw`Converting between bases, numerals whose base is unknown, and numbers whose digits look related in two different bases. Write each numeral as a polynomial in the base and use the size of the digits.`,
      questions: [
        {
          stem: String.raw`What is $2026$ written in base $7$?`,
          difficulty: 1,
          choices: [String.raw`$3265_{7}$`, String.raw`$5263_{7}$`, String.raw`$5523_{7}$`, String.raw`$5623_{7}$`, String.raw`$5632_{7}$`],
          answer: String.raw`(D) $5623_{7}$`,
        },
        {
          stem: String.raw`Find all bases $b \ge 3$ for which the number $12_{b}$ divides the number $1001_{b}$.`,
          difficulty: 2,
          answer: String.raw`$b = 5$`,
        },
        {
          stem: String.raw`Find all positive integers $N$ that have at least two digits in base $5$ and whose base-$7$ representation is the base-$5$ representation written backwards. (For instance, this would need $N = (d_{2} d_{1} d_{0})_{5} = (d_{0} d_{1} d_{2})_{7}$ for a three-digit $N$.)`,
          difficulty: 3,
          answer: String.raw`$N = 17, 51, 102, 2601$`,
        },
      ],
    },
    {
      id: "N4-digit-counting",
      name: String.raw`Counting numbers by their digits`,
      tests: String.raw`How many numbers in a range have a given digit sum, digit pattern or divisibility property. Fill positions in order, use stars and bars with the cap of $9$, or split by odd and even positions.`,
      questions: [
        {
          stem: String.raw`How many four-digit positive integers have digit sum $9$?`,
          difficulty: 1,
          answer: String.raw`$165$`,
        },
        {
          stem: String.raw`How many positive integers less than $10^{6}$ have digit sum $12$?`,
          difficulty: 2,
          answer: String.raw`$6062$`,
        },
        {
          stem: String.raw`How many six-digit positive integers have all six digits odd and are divisible by $11$?`,
          difficulty: 3,
          answer: String.raw`$1763$`,
        },
      ],
    },
    {
      id: "N4-last-nonzero",
      name: String.raw`Last non-zero digits`,
      tests: String.raw`The last non-zero digit (or digits) of a large product or factorial. Count the factors $2$ and $5$, cancel the pairs that make the zeros, and work with what is left modulo $10$ (or modulo $4$ and $25$).`,
      questions: [
        {
          stem: String.raw`What is the last non-zero digit of $5^{12} \times 8^{5}$?`,
          difficulty: 1,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`What is the last non-zero digit of $30!$?`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Find the last two non-zero digits of $50!$ (as a two-digit number, read from left to right).`,
          difficulty: 3,
          answer: String.raw`$12$`,
        },
      ],
    },
    {
      id: "N4-palindromes",
      name: String.raw`Palindromes`,
      tests: String.raw`Numbers that read the same forwards and backwards. Group the symmetric digits ($\overline{abba} = 1001a + 110b$) and reduce modulo the divisor, or compare the first and last digits.`,
      questions: [
        {
          stem: String.raw`A palindrome reads the same forwards and backwards, such as $4774$. How many four-digit palindromes are divisible by $7$?`,
          difficulty: 1,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Prove that every palindrome with an even number of digits is divisible by $11$. Hence find all prime numbers that are palindromes with an even number of digits.`,
          difficulty: 2,
          answer: String.raw`Only $11$. **Proof.** Key idea: in a $2k$-digit palindrome the digit in place $10^{i}$ is repeated in place $10^{2k-1-i}$, and $10^{i} + 10^{2k-1-i} = 10^{i}\big(1 + 10^{2k-1-2i}\big)$ is divisible by $11$ because an odd power of $10$ is $\equiv -1 \pmod{11}$.`,
        },
        {
          stem: String.raw`Let $R_{n}$ denote the number written with $n$ ones. Find all positive integers $n$ for which $R_{n}^{2}$ is a palindrome, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 1, 2, \ldots, 9$. **Proof.** Key idea: for $n \le 9$ no carries occur and $R_{n}^{2} = 12\ldots n \ldots 21$; for $n \ge 10$ the last nine digits of $R_{n}^{2}$ are $987654321$ (as $R_{n} \equiv R_{9} \pmod{10^{9}}$), while $81R_{n}^{2} = 10^{2n} - 2 \cdot 10^{n} + 1$ shows that its first nine digits are $123456790$.`,
        },
      ],
    },
  ],
});
