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
    {
      title: String.raw`Carries`,
      body: String.raw`- If adding $a$ and $b$ in columns produces $c$ carries, then $S(a + b) = S(a) + S(b) - 9c$: each carry turns $10$ units in one column into $1$ in the next.
- Example: in $47 + 47$ the units column $7 + 7 = 14$ carries and the tens column $4 + 4 + 1 = 9$ does not, so $S(94) = 11 + 11 - 9 = 13$.
- With no carries, digit sums just add and multiply: if the digits of $n$ are spread out so that long multiplication never carries, then $S(n^{2}) = S(n)^{2}$, as in $1011^{2} = 1022121$.`,
    },
  ],
  archetypes: [
    {
      id: "N4-digit-sums",
      name: String.raw`Digit sums modulo 9 and 11`,
      tests: String.raw`Questions about $S(n)$, the sum of the digits, or about divisibility by $9$ or $11$. Use $n \equiv S(n) \pmod 9$, the alternating sum for $11$, and the size bound $S(n) \le 9 \times (\text{number of digits})$; harder versions count carries.`,
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
        {
          stem: String.raw`What is the smallest even positive integer whose digits add up to $40$?`,
          difficulty: 1,
          answer: String.raw`$59\,998$`,
        },
        {
          stem: String.raw`A positive integer $n$ has digit sum $100$, and the digit sum of $2n$ is $110$. How many digits of $n$ are $5$ or more?`,
          difficulty: 2,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Prove that no positive integer whose digits are strictly increasing from left to right (such as $1358$) is divisible by $11$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: take the alternating digit sum from the units digit and group it as $(d_{1} - d_{2}) + (d_{3} - d_{4}) + \cdots$, where $d_{1} > d_{2} > \cdots$ are the digits from the right; every bracket (and a possible last single digit) is positive, and the sum is at most $d_{1} \le 9$, so it lies between $1$ and $9$ and is never a multiple of $11$.`,
        },
        {
          stem: String.raw`Let $S(n)$ denote the sum of the digits of $n$. Find all pairs $(m, j)$ of positive integers for which there is a positive integer $n$ with $S(n) = m$ and $S(n^{j}) = m^{j}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`All pairs with $j \le 3$, all pairs with $m = 1$, and the pair $(2, 4)$. **Proof.** Key idea: expanding $n^{j}$ for $n = \sum d_{i} 10^{e_{i}}$ gives coefficients adding up to $m^{j}$, and $S(n^{j}) = m^{j}$ exactly when no combined coefficient exceeds $9$ — true for $n = \sum_{i=1}^{m} 10^{4^{i}}$ when $j \le 3$ (coefficients $1, 2$ or $1, 3, 6$, all in different places), while for $j \ge 4$ the coefficient $j(j - 1)d_{1}^{j-2}d_{2}d_{3}$ (three non-zero digits), $\binom{j}{2}d_{1}^{j-2}d_{2}^{2}$ (two) or $d_{1}^{j}$ (one) is at least $10$ unless $m = 1$, or $j = 4$ and the non-zero digits of $n$ are two $1$s.`,
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
        {
          stem: String.raw`A three-digit number $\overline{abc}$ is divisible by $4$, its digits add up to $15$, and $\overline{abc} - \overline{cba} = 495$. Find $\overline{abc}$.`,
          difficulty: 1,
          answer: String.raw`$924$`,
        },
        {
          stem: String.raw`Deleting the middle digit of a three-digit number leaves a two-digit number (for example, $385$ gives $35$). How many three-digit numbers are divisible by the two-digit number obtained in this way?`,
          difficulty: 2,
          answer: String.raw`$76$`,
        },
        {
          stem: String.raw`Writing the digits of $n^{2}$ directly after the digits of $n$ gives a new number; for example, $n = 12$ gives $12144$. Find all positive integers $n$ for which this new number is divisible by $n^{3}$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 1$ and $n = 2$. **Proof.** Key idea: if $n^{2}$ has $k$ digits, the new number is $n \cdot 10^{k} + n^{2}$, so $n^{2} \mid 10^{k} + n$; hence $n \mid 10^{k}$ and $\frac{10^{k}}{n} \equiv -1 \pmod n$, which forces $n = 1$, $n = 2^{k}$ or $n = 5^{k}$, and $2^{k} \mid 5^{k} + 1$ or $5^{k} \mid 2^{k} + 1$ then leaves only $n = 2$.`,
        },
        {
          stem: String.raw`For positive integers $A$ and $B$, let $A \| B$ be the number obtained by writing the digits of $B$ directly after those of $A$ (so $12 \| 345 = 12345$). Find all positive integers $k$ for which there are positive integers $A$ and $B$ with $A \| B = k \cdot A \cdot B$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$k = 2, 3, 5, 6, 7, 9, 11$ (for example $3 \| 6 = 2 \cdot 3 \cdot 6$ and $1 \| 1 = 11 \cdot 1 \cdot 1$). **Proof.** Key idea: if $B$ has $t$ digits then $B(kA - 1) = A \cdot 10^{t}$ with $\gcd(A, kA - 1) = 1$, so $kA - 1 = 2^{x}5^{y}$ divides $10^{t}$ and $B = \frac{A \cdot 10^{t}}{kA - 1}$; the digit count $10^{t-1} \le B < 10^{t}$ forces $2 \le k \le 11$, and $2^{x}5^{y}$ can never be $\equiv 3 \pmod 4$, $\equiv 7 \pmod 8$ or $\equiv 9 \pmod{10}$, which rules out $k = 4, 8, 10$.`,
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
        {
          stem: String.raw`What is the remainder when $R_{100} = \underbrace{11\ldots1}_{100}$ is divided by $99$?`,
          difficulty: 1,
          answer: String.raw`$55$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ for which the number $\underbrace{11\ldots1}_{n}$ is divisible by $27$.`,
          difficulty: 2,
          answer: String.raw`$27$`,
        },
        {
          stem: String.raw`Let $R_{n} = \underbrace{11\ldots1}_{n}$. Prove that $R_{m}^{2}$ divides $R_{n}$ if and only if $m R_{m}$ divides $n$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $R_{m} \mid R_{n}$ forces $m \mid n$, and for $n = mk$ we have $\frac{R_{n}}{R_{m}} = 1 + 10^{m} + 10^{2m} + \cdots + 10^{(k-1)m} \equiv k \pmod{R_{m}}$ because $10^{m} \equiv 1 \pmod{R_{m}}$; so $R_{m}^{2} \mid R_{n}$ exactly when $R_{m} \mid k$.`,
        },
        {
          stem: String.raw`Let $R_{n} = \underbrace{11\ldots1}_{n}$. Find all positive integers $n < 1000$ such that $n$ divides $R_{n}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$n = 1, 3, 9, 27, 81, 243, 729$ and $n = 111, 333, 999$. **Proof.** Key idea: the exponent of $3$ in $R_{n}$ equals the exponent of $3$ in $n$ (lifting the exponent on $10^{n} - 1$), so powers of $3$ always work; for the smallest prime $p \ne 3$ dividing $n$, the order of $10$ modulo $p$ divides $n$ and is less than $p$, so it is a power of $3$, and the only such prime that fits below $1000$ is $p = 37$ (where $10^{3} \equiv 1$).`,
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
        {
          stem: String.raw`In base $b$, the multiplication $23_{b} \times 14_{b} = 355_{b}$ is correct. What is $b$?`,
          difficulty: 1,
          choices: [String.raw`$6$`, String.raw`$7$`, String.raw`$8$`, String.raw`$9$`, String.raw`$11$`],
          answer: String.raw`(B) $7$`,
        },
        {
          stem: String.raw`For how many integers $b \ge 2$ does $2026$, written in base $b$, have exactly three digits with last digit $1$?`,
          difficulty: 2,
          answer: String.raw`$4$`,
        },
        {
          stem: String.raw`For how many integers $b \ge 2$ is the sum of the base-$b$ digits of $2026$ equal to $26$?`,
          difficulty: 3,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`For an integer $b \ge 3$, let $N_{b}$ be the number whose base-$b$ representation is $123\ldots(b-1)$, the digits $1, 2, \ldots, b - 1$ in increasing order (so $N_{10} = 123456789$). Find all $b$ for which $N_{b}$ is divisible by $(b - 1)^{2}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Only $b = 4$ ($N_{4} = 123_{4} = 27$). **Proof.** Key idea: with $t = b - 1$, summing the digits' place values gives $t^{2}N_{b} = b^{b} - b^{2} + b - 1 = \sum_{k \ge 2}\binom{b}{k}t^{k}$ (expand $b^{b} = (1 + t)^{b}$), so $6N_{b} \equiv 6\binom{b}{2} = 3t(t + 1) \pmod{t^{2}}$, and $t^{2} \mid N_{b}$ forces $t \mid 3$.`,
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
        {
          stem: String.raw`How many positive integers less than $1000$ contain at least one digit $7$?`,
          difficulty: 1,
          answer: String.raw`$271$`,
        },
        {
          stem: String.raw`How many five-digit positive integers have the product of their digits equal to $36$?`,
          difficulty: 2,
          answer: String.raw`$180$`,
        },
        {
          stem: String.raw`Let $S(m)$ denote the sum of the digits of $m$. How many positive integers $n < 10^{6}$ satisfy $S(n + 1008) = S(n)$?`,
          difficulty: 3,
          answer: String.raw`$666\,000$`,
        },
        {
          stem: String.raw`Let $S(m)$ denote the sum of the digits of $m$, and let $k$ be a positive integer. Prove that among $1, 2, \ldots, 10^{k} - 1$ there are exactly as many integers $n$ with $S(5n) > S(n)$ as integers $n$ with $S(5n) < S(n)$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: since $5d = 10\lfloor d/2 \rfloor + 5(d \bmod 2)$, multiplying by $5$ never carries, so $S(5n) - S(n)$ is the sum of $h(d) = \lfloor d/2 \rfloor + 5(d \bmod 2) - d$ over the digits $d$ of $n$; as $h(9 - d) = -h(d)$, the map $n \mapsto 10^{k} - 1 - n$ (replace each of the $k$ digits $d$ by $9 - d$) changes the sign of $S(5n) - S(n)$ and so swaps the two sets.`,
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
        {
          stem: String.raw`What is the last non-zero digit of $25^{10} \times 12^{8}$?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`What is the last non-zero digit of the product of the first $25$ positive even numbers, $2 \times 4 \times 6 \times \cdots \times 50$?`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`What is the last non-zero digit of the product $1 \times 4 \times 7 \times 10 \times \cdots \times 298$ of the first $100$ terms of the arithmetic progression $1, 4, 7, \ldots$?`,
          difficulty: 3,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Let $L(m)$ denote the last non-zero digit of the positive integer $m$. Find $L\big((5^{2026})!\big)$, and prove your answer.`,
          difficulty: 4,
          answer: String.raw`$4$. **Proof.** Key idea: $L\big((5n)!\big) = L\big(2^{n} \cdot n!\big)$, because $(5n)! = 2^{n} n! \cdot 10^{n} \cdot \frac{P}{4^{n}}$, where $P$ is the product of the numbers up to $5n$ not divisible by $5$, and $P \equiv 24^{n} \equiv 4^{n} \pmod 5$, so after removing trailing zeros the two numbers are both even and differ by a factor $\equiv 1 \pmod 5$; iterating with $2^{5^{j}} \equiv 2 \pmod{10}$ gives $L\big((5^{k})!\big) \equiv 2^{k} \pmod{10}$.`,
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
        {
          stem: String.raw`How many five-digit palindromes are divisible by $4$?`,
          difficulty: 1,
          answer: String.raw`$200$`,
        },
        {
          stem: String.raw`How many five-digit palindromes are divisible by $101$?`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`Find all palindromes $n$ for which $2n$ is also a palindrome, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly the palindromes all of whose digits are at most $4$. **Proof.** Key idea: $2n$ cannot have more digits than $n$ (it would begin with $1$ and end with an even digit), and comparing each digit $2d_{i} + c_{i} - 10c_{i+1}$ of $2n$ (with $c_{i}$ the carry into place $i$) with its mirror image gives $c_{i} = c_{k-i}$ and $c_{i+1} = c_{k+1-i}$, hence $c_{i+1} = c_{i-1}$, and $c_{0} = c_{1} = 0$ then rules out every carry.`,
        },
        {
          stem: String.raw`Find all positive integers $k$ for which some multiple of $k$ is a palindrome all of whose digits are odd, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Exactly the odd $k$. **Proof.** Key idea: an even number ends in an even digit; for odd $k = 5^{b}m$ with $\gcd(m, 10) = 1$, build a $b$-digit $Y$ with odd digits and $5^{b} \mid Y$ one digit at a time (the digits $1, 3, 5, 7, 9$ cover every residue modulo $5$), let $T$ be $Y$ reversed followed by $Y$ (a palindrome of length $\ell$ divisible by $5^{b}$), and write $T$ out $j$ times in a row, where $10^{j\ell} \equiv 1 \pmod{m(10^{\ell} - 1)}$ makes the result divisible by $m$.`,
        },
      ],
    },
  ],
});
