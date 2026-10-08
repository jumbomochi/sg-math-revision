H2.addTopic({
  id: "N2",
  title: "Modular Arithmetic",
  summary: String.raw`Congruences, last digits, Fermat's little theorem and Euler's theorem, orders, inverses, the Chinese remainder theorem, Wilson's theorem, and residues of squares and cubes used to rule out equations.`,
  concepts: [
    {
      title: String.raw`Working with congruences`,
      body: String.raw`$a \equiv b \pmod{m}$ means $m \mid a - b$.

- Congruences can be added, subtracted, multiplied and raised to powers. Replace numbers by small (or negative) representatives: $99 \equiv -1 \pmod{100}$, so $99^{51} \equiv -1 \equiv 99 \pmod{100}$.
- You may **divide** only by a number coprime to the modulus: $2 \cdot 4 \equiv 2 \cdot 9 \pmod{10}$ but $4 \not\equiv 9$. If $\gcd(c, m) = 1$ then $ca \equiv cb \Rightarrow a \equiv b \pmod m$.
- Last digit = remainder mod $10$; last two digits = remainder mod $100$; last three digits = remainder mod $1000$.`,
    },
    {
      title: String.raw`Fermat's little theorem`,
      body: String.raw`If $p$ is prime and $p \nmid a$, then $a^{p-1} \equiv 1 \pmod{p}$. For every integer $a$, $a^{p} \equiv a \pmod{p}$.

- To reduce $a^{N} \bmod p$, reduce the exponent $N$ modulo $p - 1$. Example: $5^{10} \equiv 1 \pmod{11}$, so $5^{103} \equiv 5^{3} = 125 \equiv 4 \pmod{11}$.
- The form $a^{p} \equiv a$ needs no coprimality condition, which is handy for statements about **every** integer $a$: for instance $a^{5} - a$ is always a multiple of $5$.`,
    },
    {
      title: String.raw`Euler's theorem and orders`,
      body: String.raw`- **Euler's totient** $\varphi(n)$ counts $1 \le k \le n$ with $\gcd(k, n) = 1$: $\varphi(n) = n \prod_{p \mid n}\left(1 - \frac{1}{p}\right)$. Example: $\varphi(36) = 36 \cdot \frac{1}{2} \cdot \frac{2}{3} = 12$.
- **Euler**: if $\gcd(a, n) = 1$ then $a^{\varphi(n)} \equiv 1 \pmod{n}$.
- The **order** of $a$ modulo $n$ is the smallest $d \ge 1$ with $a^{d} \equiv 1$. Then $a^{k} \equiv 1 \iff d \mid k$, and $d \mid \varphi(n)$ (so $d \mid p - 1$ for a prime $p$).
- **Towers**: reduce the exponent modulo the order. Since $2^{3} \equiv 1 \pmod 7$ and $10^{10} \equiv 1 \pmod 3$, we get $2^{10^{10}} \equiv 2^{1} = 2 \pmod 7$.`,
    },
    {
      title: String.raw`Inverses and linear congruences`,
      body: String.raw`- $a$ has an **inverse** modulo $m$ (a number $a^{-1}$ with $a a^{-1} \equiv 1$) exactly when $\gcd(a, m) = 1$. Find it by trial or by running the Euclidean algorithm backwards.
- $ax \equiv b \pmod{m}$ has solutions iff $d = \gcd(a, m)$ divides $b$; then divide everything by $d$ and there is exactly one solution modulo $m/d$, i.e. $d$ solutions modulo $m$.
- Example: $5x \equiv 3 \pmod{12}$. Since $5 \cdot 5 = 25 \equiv 1$, $x \equiv 5 \cdot 3 = 15 \equiv 3 \pmod{12}$.
- Modulo a prime $p$, as $k$ runs through $1, 2, \ldots, p - 1$, so does $k^{-1}$ (in some order). Fractions with denominators coprime to $p$ can be treated as residues.`,
    },
    {
      title: String.raw`The Chinese remainder theorem`,
      body: String.raw`If $m_{1}, \ldots, m_{k}$ are pairwise coprime, the system $x \equiv r_{i} \pmod{m_{i}}$ has exactly one solution modulo $m_{1}m_{2}\cdots m_{k}$.

- Example: $x \equiv 2 \pmod 3$ and $x \equiv 3 \pmod 5$ give $x \equiv 8 \pmod{15}$. Solve by listing $3, 8, 13, \ldots$ (numbers $\equiv 3 \pmod 5$) until one is $\equiv 2 \pmod 3$.
- **Split a hard modulus**: to find $N \bmod 100$, find $N \bmod 4$ and $N \bmod 25$ and combine. Similarly $1000 = 8 \times 125$.
- **Existence tool**: CRT lets you choose $n$ so that $n + 1, n + 2, \ldots$ are each divisible by prescribed coprime numbers.`,
    },
    {
      title: String.raw`Squares and cubes modulo small numbers`,
      body: String.raw`| Modulus | Possible residues |
| squares mod $3$ | $0, 1$ |
| squares mod $4$ | $0, 1$ |
| squares mod $5$ | $0, 1, 4$ |
| squares mod $8$ | $0, 1, 4$ (odd squares are $\equiv 1$) |
| cubes mod $7$ | $0, 1, 6$ |
| cubes mod $9$ | $0, 1, 8$ |
| fourth powers mod $16$ | $0, 1$ |

- To show an equation has **no** integer solutions, find a modulus where the two sides can never agree. Example: $x^{2} + y^{2} \equiv 0, 1, 2 \pmod 4$, so $x^{2} + y^{2} = 4k + 3$ is impossible.
- Choose the modulus to make the powers involved take few values: squares → $4, 8$; cubes → $7, 9$; fourth powers → $16$.`,
    },
    {
      title: String.raw`Wilson's theorem`,
      body: String.raw`For a prime $p$: $(p - 1)! \equiv -1 \pmod{p}$. (Pair each $k$ with its inverse; only $1$ and $p - 1$ are their own inverses.)

- Example: $6! = 720 = 721 - 1 \equiv -1 \pmod 7$.
- When a factorial stops short of $p - 1$, multiply up to $(p - 1)!$ and replace the missing top factors $p - 1, p - 2, \ldots$ by $-1, -2, \ldots$ modulo $p$.`,
    },
  ],
  archetypes: [
    {
      id: "N2-last-digits",
      name: String.raw`Last digits of huge numbers`,
      tests: String.raw`Finding the last one, two or three digits of a power or a tower of powers. Work mod $100$ or $1000$, splitting into $4 \times 25$ or $8 \times 125$ if needed, and reduce exponents using a cycle length.`,
      questions: [
        {
          stem: String.raw`What are the last two digits of $7^{2026}$?`,
          difficulty: 1,
          choices: [String.raw`$01$`, String.raw`$07$`, String.raw`$43$`, String.raw`$49$`, String.raw`$93$`],
          answer: String.raw`(D) $49$`,
        },
        {
          stem: String.raw`What are the last two digits of $2^{2026}$?`,
          difficulty: 2,
          answer: String.raw`$64$`,
        },
        {
          stem: String.raw`What are the last three digits of $3^{3^{2026}}$? (The exponent is $3^{2026}$.)`,
          difficulty: 3,
          answer: String.raw`$883$`,
        },
      ],
    },
    {
      id: "N2-fermat-euler",
      name: String.raw`Remainders of large powers`,
      tests: String.raw`Remainders of large powers modulo a prime or a small composite, and divisibility statements true for every $n$. Fermat's little theorem, Euler's theorem or the order of the base cut the exponent down.`,
      questions: [
        {
          stem: String.raw`Find the remainder when $3^{2026} + 5^{2026}$ is divided by $7$.`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find the remainder when $2^{3^{2026}}$ is divided by $13$.`,
          difficulty: 2,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`What is the largest positive integer that divides $n^{21} - n$ for every integer $n$?`,
          difficulty: 3,
          answer: String.raw`$330$`,
        },
      ],
    },
    {
      id: "N2-inverses-linear",
      name: String.raw`Inverses and linear congruences`,
      tests: String.raw`Solving $ax \equiv b \pmod m$, counting its solutions in a range, or working with fractions modulo a prime by treating $1/k$ as the inverse of $k$.`,
      questions: [
        {
          stem: String.raw`Find the smallest positive integer $x$ such that $7x \equiv 3 \pmod{19}$.`,
          difficulty: 1,
          answer: String.raw`$14$`,
        },
        {
          stem: String.raw`How many integers $x$ with $1 \le x \le 100$ satisfy $12x \equiv 18 \pmod{30}$?`,
          difficulty: 2,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`Let $p > 3$ be a prime, and write
$$1 + \frac{1}{2^{2}} + \frac{1}{3^{2}} + \cdots + \frac{1}{(p - 1)^{2}} = \frac{a}{b}$$
in lowest terms. Prove that $p$ divides $a$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: modulo $p$ the sum equals $\sum k^{-2}$, and since $k \mapsto k^{-1}$ permutes the nonzero residues this is $\sum_{k=1}^{p-1} k^{2} = \frac{(p-1)p(2p-1)}{6} \equiv 0 \pmod p$ (as $p > 3$); $b$ is coprime to $p$, so $p \mid a$.`,
        },
      ],
    },
    {
      id: "N2-crt",
      name: String.raw`Chinese remainder theorem`,
      tests: String.raw`Finding a number from its remainders modulo coprime numbers, consecutive integers with prescribed divisors, or existence proofs where several divisibility conditions must hold at once.`,
      questions: [
        {
          stem: String.raw`Find the smallest positive integer that leaves remainder $2$ when divided by $5$, remainder $3$ when divided by $7$, and remainder $4$ when divided by $9$.`,
          difficulty: 1,
          answer: String.raw`$157$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that $4 \mid n$, $9 \mid n + 1$ and $25 \mid n + 2$.`,
          difficulty: 2,
          answer: String.raw`$548$`,
        },
        {
          stem: String.raw`Prove that there exist $2026$ consecutive positive integers, each of which has at least two different prime factors.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: take $4052$ distinct primes $q_{1}, \ldots, q_{4052}$ and use the Chinese remainder theorem to choose $n$ with $n \equiv -i \pmod{q_{2i-1}q_{2i}}$ for $i = 1, \ldots, 2026$; then $q_{2i-1}q_{2i} \mid n + i$.`,
        },
      ],
    },
    {
      id: "N2-ruling-out",
      name: String.raw`Ruling out with residues`,
      tests: String.raw`Showing a number is never a perfect square (cube, ...) or an equation has no solutions, by checking the possible residues of squares or cubes modulo a well-chosen number.`,
      questions: [
        {
          stem: String.raw`How many of the numbers $11, 111, 1111, \ldots, \underbrace{11\ldots1}_{2026 \text{ ones}}$ are perfect squares?`,
          difficulty: 1,
          choices: [String.raw`$0$`, String.raw`$1$`, String.raw`$2$`, String.raw`$3$`, String.raw`$1013$`],
          answer: String.raw`(A) $0$`,
        },
        {
          stem: String.raw`Prove that there are no integers $x, y, z$ with $x^{3} + y^{3} + z^{3} = 2030$.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: work modulo $9$: every cube is $\equiv 0, 1$ or $8$, so a sum of three cubes is never $\equiv 4$ or $5 \pmod 9$, but $2030 \equiv 5 \pmod 9$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $3^{n} + 55$ is a perfect square.`,
          difficulty: 3,
          answer: String.raw`$n = 2$ and $n = 6$`,
        },
      ],
    },
    {
      id: "N2-orders-wilson",
      name: String.raw`Orders and Wilson's theorem`,
      tests: String.raw`Factorials modulo a prime, for which $n$ a power is $\equiv \pm 1$, and restrictions on the prime factors of numbers like $a^{k} + 1$. Think about the order of the base and Wilson's theorem.`,
      questions: [
        {
          stem: String.raw`Find the remainder when $15!$ is divided by $17$.`,
          difficulty: 1,
          answer: String.raw`$1$`,
        },
        {
          stem: String.raw`For how many positive integers $n \le 2026$ is $2^{n} + 1$ divisible by $11$?`,
          difficulty: 2,
          answer: String.raw`$203$`,
        },
        {
          stem: String.raw`Let $p$ be an odd prime that divides $a^{8} + 1$ for some integer $a$. Prove that $p \equiv 1 \pmod{16}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $a^{8} \equiv -1$ and $a^{16} \equiv 1 \pmod p$, so the order of $a$ modulo $p$ divides $16$ but not $8$, hence equals $16$; the order divides $p - 1$ by Fermat's little theorem.`,
        },
      ],
    },
  ],
});
