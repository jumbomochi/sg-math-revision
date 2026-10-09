H2.addTopic({
  id: "N6",
  title: "Quadratic Residues, Orders and Primitive Roots",
  summary: String.raw`Quadratic residues and the Legendre symbol, Euler's criterion, when $-1$ and $2$ are squares, multiplicative orders and primitive roots, new prime divisors of $a^{n} - 1$, and sums of two squares.`,
  concepts: [
    {
      title: String.raw`Quadratic residues and the Legendre symbol`,
      body: String.raw`Let $p$ be an odd prime. A number $a \not\equiv 0$ is a **quadratic residue** (QR) mod $p$ if $a \equiv x^{2}$ for some $x$, and a **non-residue** (NR) otherwise. The **Legendre symbol** is $\left(\frac{a}{p}\right) = 1$ for a QR, $-1$ for an NR and $0$ if $p \mid a$.

- Since $x^{2} \equiv (-x)^{2}$, exactly $\frac{p-1}{2}$ of $1, 2, \ldots, p-1$ are QRs and $\frac{p-1}{2}$ are NRs. Example: the QRs mod $11$ are $1, 3, 4, 5, 9$.
- The symbol is **multiplicative**: $\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$. So QR $\times$ QR $=$ QR, QR $\times$ NR $=$ NR and NR $\times$ NR $=$ QR.
- **Counting with characters**: writing $\chi(a) = \left(\frac{a}{p}\right)$, the indicator of "$a$ is a QR" is $\frac{1 + \chi(a)}{2}$, and $\sum_{a=1}^{p-1} \chi(a) = 0$. Sums like $\sum \chi(f(a))$ often collapse after a substitution.`,
    },
    {
      title: String.raw`Euler's criterion`,
      body: String.raw`For an odd prime $p$ and $p \nmid a$:
$$a^{\frac{p-1}{2}} \equiv \left(\frac{a}{p}\right) \pmod p.$$

- So $a^{(p-1)/2}$ is always $\equiv 1$ or $-1$, and it tells you whether $a$ is a square. Example: $3^{5} = 243 = 22 \cdot 11 + 1 \equiv 1 \pmod{11}$, so $3$ is a QR mod $11$ (indeed $5^{2} = 25 \equiv 3$).
- Read it backwards to evaluate powers: if you know whether $a$ is a QR, you know $a^{(p-1)/2} \bmod p$ without computing.`,
    },
    {
      title: String.raw`When are $-1$ and $2$ squares?`,
      body: String.raw`For an odd prime $p$:

| Number | Is a QR mod $p$ exactly when |
| $-1$ | $p \equiv 1 \pmod 4$ |
| $2$ | $p \equiv \pm 1 \pmod 8$ |
| $-3$ | $p \equiv 1 \pmod 3$ |

- **Prime divisors of polynomial values**: if an odd prime $p$ divides $x^{2} + 1$ then $x^{2} \equiv -1$, so $p \equiv 1 \pmod 4$. Combine the table with multiplicativity for other constants, e.g. $\left(\frac{-2}{p}\right) = \left(\frac{-1}{p}\right)\left(\frac{2}{p}\right)$.
- Rewrite an expression as "square $+$ constant $\times$ square" in several ways to collect several conditions on $p$.
- Example: $38^{2} = 1444 = 14 \cdot 103 + 2$, so $2$ is a QR mod $103$; consistent with $103 \equiv 7 \pmod 8$.`,
    },
    {
      title: String.raw`Quadratic reciprocity`,
      body: String.raw`For distinct odd primes $p, q$:
$$\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\cdot\frac{q-1}{2}}.$$
So the two symbols are equal unless $p \equiv q \equiv 3 \pmod 4$, in which case they are opposite.

- Use it with multiplicativity to evaluate any symbol by repeatedly flipping and reducing. Example: $\left(\frac{5}{11}\right) = \left(\frac{11}{5}\right) = \left(\frac{1}{5}\right) = 1$ (as $5 \equiv 1 \pmod 4$); check: $4^{2} = 16 \equiv 5 \pmod{11}$.
- For instance $\left(\frac{3}{p}\right) = 1$ exactly when $p \equiv \pm 1 \pmod{12}$.`,
    },
    {
      title: String.raw`Multiplicative order`,
      body: String.raw`If $\gcd(a, n) = 1$, the **order** $\operatorname{ord}_{n}(a)$ is the least $d \ge 1$ with $a^{d} \equiv 1 \pmod n$.

- $a^{k} \equiv 1 \iff d \mid k$. Hence $d \mid \varphi(n)$, and $d \mid p - 1$ when $n = p$ is prime.
- $\operatorname{ord}(a^{k}) = \dfrac{d}{\gcd(d, k)}$.
- If $a^{k} \equiv -1 \pmod p$ ($p$ odd) then $d \mid 2k$ but $d \nmid k$.
- **Smallest prime factor trick**: if $p$ is the smallest prime factor of $n$ and $a^{n} \equiv 1 \pmod p$, then $\operatorname{ord}_{p}(a)$ divides $\gcd(n, p - 1) = 1$.
- The decimal expansion of $\frac{1}{m}$ (with $\gcd(m, 10) = 1$) is purely periodic with period $\operatorname{ord}_{m}(10)$. Example: $\frac{1}{37} = 0.\overline{027}$ and $\operatorname{ord}_{37}(10) = 3$.
- **Lifting**: combine orders with lifting the exponent: for odd $p \mid a - 1$, $v_{p}(a^{k} - 1) = v_{p}(a - 1) + v_{p}(k)$.`,
    },
    {
      title: String.raw`Primitive roots`,
      body: String.raw`Modulo a prime $p$ there is always a **primitive root** $g$: an element of order $p - 1$. Then $g, g^{2}, \ldots, g^{p-1}$ run through all of $1, \ldots, p - 1$.

- There are exactly $\varphi(p - 1)$ primitive roots. In general exactly $\varphi(d)$ residues have order $d$, for each $d \mid p - 1$.
- **Test**: $g$ is a primitive root iff $g^{(p-1)/q} \not\equiv 1$ for every prime $q \mid p - 1$. Example: mod $7$, $3^{3} = 27 \equiv 6$ and $3^{2} = 9 \equiv 2$, so $3$ is a primitive root.
- **Discrete logarithms** turn multiplication into addition mod $p - 1$: writing $x = g^{t}$, the congruence $x^{k} \equiv 1$ becomes $kt \equiv 0 \pmod{p-1}$, so it has exactly $\gcd(k, p - 1)$ solutions. Every primitive root is a quadratic non-residue.
- **Power sums**: $\displaystyle\sum_{x=1}^{p-1} x^{k} \equiv \begin{cases} -1 & (p - 1) \mid k \\ 0 & \text{otherwise} \end{cases} \pmod p.$`,
    },
    {
      title: String.raw`New prime divisors of $a^{n} - 1$`,
      body: String.raw`- $\gcd(a^{m} - 1, a^{n} - 1) = a^{\gcd(m, n)} - 1$. So $a^{d} - 1 \mid a^{n} - 1$ whenever $d \mid n$.
- A prime $p$ that divides $a^{n} - 1$ but no $a^{k} - 1$ with $k < n$ is called **primitive**: then $\operatorname{ord}_{p}(a) = n$, so $p \equiv 1 \pmod n$. Example: $2^{7} - 1 = 127 \equiv 1 \pmod 7$.
- **Zsigmondy's theorem**: for $a > b \ge 1$ coprime and $n \ge 2$, $a^{n} - b^{n}$ has a primitive prime divisor, except $2^{6} - 1 = 63$ and the case $n = 2$, $a + b$ a power of $2$.
- To find a new prime by hand, study $\dfrac{a^{n} - 1}{a^{d} - 1} = 1 + a^{d} + a^{2d} + \cdots$: any prime dividing both it and $a^{d} - 1$ divides $\frac{n}{d}$, and lifting the exponent controls how often.`,
    },
    {
      title: String.raw`Sums of two squares`,
      body: String.raw`- **Fermat**: an odd prime $p$ is a sum of two squares iff $p \equiv 1 \pmod 4$ (e.g. $37 = 1^{2} + 6^{2}$), and then in essentially one way.
- **Product identity**: $(a^{2} + b^{2})(c^{2} + d^{2}) = (ac - bd)^{2} + (ad + bc)^{2} = (ac + bd)^{2} + (ad - bc)^{2}$.
- **Key lemma**: if a prime $q \equiv 3 \pmod 4$ divides $x^{2} + y^{2}$, then $q \mid x$ and $q \mid y$.
- **Characterisation**: $n \ge 1$ is a sum of two squares iff every prime $q \equiv 3 \pmod 4$ occurs to an even power in $n$. Example: $90 = 2 \cdot 3^{2} \cdot 5 = 9^{2} + 3^{2}$, but $42 = 2 \cdot 3 \cdot 7$ is not.
- **Counting**: the number of ordered integer pairs with $x^{2} + y^{2} = n$ is $4(d_{1} - d_{3})$, where $d_{i}$ counts divisors of $n$ that are $\equiv i \pmod 4$. Representations with $\gcd(x, y) = 1$ correspond to factorisations into Gaussian integers $a + bi$ with no rational prime factor.`,
    },
  ],
  archetypes: [
    {
      id: "N6-quadratic-residues",
      name: String.raw`Quadratic residues and Euler's criterion`,
      tests: String.raw`Which numbers are squares modulo a prime, evaluating $a^{(p-1)/2}$ or a Legendre symbol, and counting solutions or patterns of residues. Use Euler's criterion, multiplicativity, reciprocity and character sums.`,
      questions: [
        {
          stem: String.raw`How many different remainders can a perfect square leave when it is divided by $23$?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Find all integers $x$ with $1 \le x \le 18$ such that $x^{2} \equiv 5 \pmod{19}$.`,
          difficulty: 1,
          answer: String.raw`$x = 9$ and $x = 10$`,
        },
        {
          stem: String.raw`Find the remainder when $7^{20}$ is divided by $41$.`,
          difficulty: 2,
          answer: String.raw`$40$`,
        },
        {
          stem: String.raw`How many ordered pairs $(x, y)$ with $x, y \in \{0, 1, 2, \ldots, 16\}$ satisfy $x^{2} - 3y^{2} \equiv 1 \pmod{17}$?`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`Let $p$ be an odd prime. Prove that the sum of the quadratic residues in $\{1, 2, \ldots, p - 1\}$ equals the sum of the quadratic non-residues in this set if and only if $p \equiv 1 \pmod 4$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: if $p \equiv 1 \pmod 4$ then $-1$ is a QR, so $a \mapsto p - a$ maps QRs to QRs and each sum is $\frac{p(p-1)}{4}$; if $p \equiv 3 \pmod 4$, equal sums would each be $\frac{p(p-1)}{4}$, which is not an integer.`,
        },
        {
          stem: String.raw`Let $p \ge 5$ be a prime. Prove that there is an integer $n$ with $1 \le n \le p - 2$ such that $n$ and $n + 1$ are both quadratic non-residues modulo $p$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $1$ is a QR, so the $\frac{p-1}{2}$ non-residues lie among the $p - 2$ numbers $2, \ldots, p - 1$; if no two were adjacent they would have to be exactly the even numbers, but $4 = 2^{2}$ is an even QR.`,
        },
        {
          stem: String.raw`The number $2027$ is prime. How many integers $n$ with $1 \le n \le 2024$ have the property that $n$, $n + 1$ and $n + 2$ are all quadratic residues modulo $2027$?`,
          difficulty: 4,
          answer: String.raw`$253$`,
        },
      ],
    },
    {
      id: "N6-minus-one-and-two",
      name: String.raw`$-1$, $2$ and prime divisors of $x^{2} + c$`,
      tests: String.raw`Which primes can divide $n^{2} + 1$, $n^{2} \pm 2$ or similar expressions, evaluating $2^{(p-1)/2}$, and Euclid-style arguments for primes in residue classes. Use the supplementary laws for $-1$ and $2$ (and reciprocity for $\pm 3$).`,
      questions: [
        {
          stem: String.raw`Which of these primes divides $n^{2} + 1$ for some integer $n$?`,
          difficulty: 1,
          choices: [String.raw`$7$`, String.raw`$11$`, String.raw`$19$`, String.raw`$29$`, String.raw`$43$`],
          answer: String.raw`(D) $29$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that $n^{2} + 1$ is divisible by $61$.`,
          difficulty: 1,
          answer: String.raw`$11$`,
        },
        {
          stem: String.raw`How many primes $p < 100$ divide $n^{2} - 2$ for at least one integer $n$?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`The number $2027$ is prime. Find the remainder when $2^{1013}$ is divided by $2027$.`,
          difficulty: 2,
          answer: String.raw`$2026$`,
        },
        {
          stem: String.raw`Let $n$ be an integer. Prove that every odd prime divisor of $n^{2} + 2$ is congruent to $1$ or $3$ modulo $8$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $p \mid n^{2} + 2$ makes $-2$ a QR mod $p$, and $\left(\frac{-2}{p}\right) = \left(\frac{-1}{p}\right)\left(\frac{2}{p}\right) = 1$ exactly when $p \equiv 1$ or $3 \pmod 8$.`,
        },
        {
          stem: String.raw`Let $n \ge 2$ be an integer. Prove that $2(n!)^{2} - 1$ has a prime factor $p$ with $p > n$ and $p \equiv 7 \pmod 8$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: for every prime $q \mid 2(n!)^{2} - 1$ we have $(2 \cdot n!)^{2} = 2 \cdot 2(n!)^{2} \equiv 2 \pmod q$, so $2$ is a QR and $q \equiv \pm 1 \pmod 8$; since $2(n!)^{2} - 1 \equiv 7 \pmod 8$ not all its prime factors are $\equiv 1$, and none of them divides $n!$.`,
        },
        {
          stem: String.raw`Prove that there are no integers $x$ and $y$ such that $x^{4} - x^{2} + 1 = y^{3} - 1$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: writing $x^{4} - x^{2} + 1 = (x^{2} - 1)^{2} + x^{2} = (x^{2} + 1)^{2} - 3x^{2}$ shows (as it is never divisible by $2$ or $3$) that $-1$ and $3$ are QRs modulo each of its prime factors, so all of them, and hence all its positive divisors, are $\equiv 1 \pmod{12}$; but $y \ge 2$ and $y - 1 \equiv 1 \pmod{12}$ would give $y^{2} + y + 1 \equiv 7 \pmod{12}$.`,
        },
      ],
    },
    {
      id: "N6-orders",
      name: String.raw`Multiplicative order`,
      tests: String.raw`Finding the order of a number modulo $n$ (including decimal period lengths), and divisibility problems such as $p \mid a^{q} + 1$ or $n \mid a^{n} + 1$ solved by comparing the order with $p - 1$ or with the smallest prime factor.`,
      questions: [
        {
          stem: String.raw`What is the order of $3$ modulo $31$, i.e. the smallest positive integer $d$ with $3^{d} \equiv 1 \pmod{31}$?`,
          difficulty: 1,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`The decimal expansion of $\frac{1}{53}$ is purely periodic. How many digits are there in its repeating block?`,
          difficulty: 1,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that $7^{n} - 1$ is divisible by $1000$.`,
          difficulty: 2,
          answer: String.raw`$20$`,
        },
        {
          stem: String.raw`Find all primes $p$ for which the decimal expansion of $\frac{1}{p}$ has a repeating block of length exactly $6$.`,
          difficulty: 2,
          answer: String.raw`$p = 7$ and $p = 13$`,
        },
        {
          stem: String.raw`Find all pairs of primes $(p, q)$ such that $p \mid 3^{q} + 1$ and $q \mid 3^{p} + 1$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(2, 2)$, $(2, 5)$ and $(5, 2)$. Key idea: for odd $p$, $\operatorname{ord}_{p}(3)$ divides $2q$ but not $q$; order $2$ would give $p \mid 8$, so the order is $2q$ and $p \equiv 1 \pmod{2q}$, hence $p > q$. Both primes cannot exceed each other, so one of them is $2$ and the other divides $3^{2} + 1 = 10$.`,
        },
        {
          stem: String.raw`Prove that no odd integer $n > 1$ divides $3^{n} + 1$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: let $p$ be the smallest prime factor of $n$; then $\operatorname{ord}_{p}(3)$ divides $\gcd(2n, p - 1) = 2$, so $p \mid 3^{2} - 1 = 8$, impossible for odd $p$.`,
        },
        {
          stem: String.raw`Let $p \ne 2, 5$ be a prime, let $d$ be the length of the repeating block of $\frac{1}{p}$, and let $p^{e}$ be the highest power of $p$ dividing $10^{d} - 1$. Prove that for every integer $k \ge e$, the repeating block of $\frac{1}{p^{k}}$ has length $d \cdot p^{\,k - e}$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the period is $\operatorname{ord}_{p^{k}}(10)$; any $n$ with $p^{k} \mid 10^{n} - 1$ is a multiple of $d$, and lifting the exponent (with $p \nmid d$) gives $v_{p}(10^{n} - 1) = e + v_{p}(n)$, so the least such $n$ is $d p^{\,k-e}$.`,
        },
      ],
    },
    {
      id: "N6-primitive-roots",
      name: String.raw`Primitive roots and discrete logarithms`,
      tests: String.raw`Counting or finding primitive roots, solving $x^{k} \equiv a \pmod p$, counting solutions of power congruences, power sums modulo $p$, and structural questions about the multiplicative group modulo a prime.`,
      questions: [
        {
          stem: String.raw`How many primitive roots are there modulo $29$ among $1, 2, \ldots, 28$?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`What is the smallest positive integer that is a primitive root modulo $23$?`,
          difficulty: 1,
          answer: String.raw`$5$`,
        },
        {
          stem: String.raw`Find the integer $x$ with $1 \le x \le 22$ such that $x^{5} \equiv 3 \pmod{23}$.`,
          difficulty: 2,
          answer: String.raw`$18$`,
        },
        {
          stem: String.raw`How many integers $x$ with $1 \le x \le 60$ satisfy $x^{10} \equiv -1 \pmod{61}$?`,
          difficulty: 2,
          answer: String.raw`$10$`,
        },
        {
          stem: String.raw`Find the remainder when
$$\sum_{1 \le i < j \le 12} (ij)^{6}$$
is divided by $13$.`,
          difficulty: 3,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`Find all odd primes $p$ such that every quadratic non-residue modulo $p$ is a primitive root modulo $p$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Exactly the primes for which $p - 1$ is a power of $2$ (the Fermat primes $3, 5, 17, 257, 65537, \ldots$). Key idea: every primitive root is a non-residue, and there are $\varphi(p - 1)$ primitive roots versus $\frac{p-1}{2}$ non-residues; $\varphi(p - 1) = \frac{p-1}{2}$ iff $p - 1$ is a power of $2$.`,
        },
        {
          stem: String.raw`Let $p$ be a prime. Call a non-empty set $S \subseteq \{1, 2, \ldots, p - 1\}$ *closed* if for all $a, b \in S$ (not necessarily different) the remainder of $ab$ on division by $p$ is also in $S$. Prove that the number of closed sets equals the number of positive divisors of $p - 1$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: a finite closed set contains $1$ and the inverses of its elements (powers of $a$ cycle back to $1$), so it is a subgroup of the cyclic group generated by a primitive root $g$; such a subgroup is $\{g^{t} : d \mid t\}$ for a unique $d \mid p - 1$.`,
        },
      ],
    },
    {
      id: "N6-new-prime-divisors",
      name: String.raw`New prime divisors of $a^{n} - 1$`,
      tests: String.raw`The gcd of $a^{m} \pm 1$ and $a^{n} \pm 1$, finding prime factors of $a^{n} \pm 1$ using $p \equiv 1 \pmod n$ for primitive divisors, and Zsigmondy-type arguments that a new prime must appear.`,
      questions: [
        {
          stem: String.raw`What is $\gcd(2^{36} - 1,\ 2^{60} - 1)$?`,
          difficulty: 1,
          choices: [String.raw`$3$`, String.raw`$63$`, String.raw`$4095$`, String.raw`$2^{12} + 1$`, String.raw`$2^{24} - 1$`],
          answer: String.raw`(C) $4095$`,
        },
        {
          stem: String.raw`Find all primes $p$ that divide $10^{5} - 1$ but do not divide $10^{k} - 1$ for any $k$ with $1 \le k \le 4$.`,
          difficulty: 1,
          answer: String.raw`$41$ and $271$`,
        },
        {
          stem: String.raw`Find $\gcd(2^{30} + 1,\ 2^{42} + 1)$.`,
          difficulty: 2,
          answer: String.raw`$65$`,
        },
        {
          stem: String.raw`How many different prime factors does $2^{24} - 1$ have?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Let $q > 3$ be a prime. Prove that $\dfrac{2^{q} + 1}{3}$ is an integer greater than $1$ and that each of its prime factors is congruent to $1$ modulo $2q$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: for a prime $p$ dividing it, $\operatorname{ord}_{p}(2)$ divides $2q$ but not $q$, so it is $2$ or $2q$; order $2$ means $p = 3$, which is excluded because $v_{3}(2^{q} + 1) = 1$ for $q \ne 3$; so the order is $2q \mid p - 1$.`,
        },
        {
          stem: String.raw`Find all integers $n \ge 2$ such that every prime factor of $2^{n} - 1$ is less than $20$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 2, 3, 4, 6, 8, 12$. Key idea: for each divisor $d \ne 1, 6$ of $n$, $2^{d} - 1$ has a primitive prime factor, which is $\equiv 1 \pmod d$; checking which $d$ give only primitive primes below $20$ leaves $d \in \{1, 2, 3, 4, 6, 8, 10, 12, 18\}$, and $n$ must have all its divisors in this set.`,
        },
        {
          stem: String.raw`Find all pairs of integers $(a, n)$ with $a \ge 2$ and $n \ge 2$ such that $a^{n} - 1$ has no prime factor other than $2$ and $3$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$(a, n) = (2, 2), (3, 2), (5, 2), (7, 2), (17, 2)$. Key idea: for $n \ge 3$ a primitive prime factor of $a^{n} - 1$ is $\equiv 1 \pmod n$, hence at least $5$ (and the exception $2^{6} - 1 = 63$ contains $7$); for $n = 2$ the factors $a - 1$ and $a + 1$ share at most the prime $2$, which reduces to $2^{u} - 3^{v} = \pm 1$, whose solutions give $a = 2, 3, 5, 7, 17$.`,
        },
      ],
    },
    {
      id: "N6-two-squares",
      name: String.raw`Sums of two squares`,
      tests: String.raw`Deciding whether $n = x^{2} + y^{2}$ is solvable, listing or counting representations (lattice points on a circle), and proofs using Fermat's theorem, the product identity and the lemma on primes $\equiv 3 \pmod 4$.`,
      questions: [
        {
          stem: String.raw`Which of these numbers can **not** be written as $a^{2} + b^{2}$ with $a$ and $b$ integers?`,
          difficulty: 1,
          choices: [String.raw`$245$`, String.raw`$325$`, String.raw`$338$`, String.raw`$378$`, String.raw`$450$`],
          answer: String.raw`(D) $378$`,
        },
        {
          stem: String.raw`Find all pairs of positive integers $(a, b)$ with $a \le b$ such that $a^{2} + b^{2} = 221$.`,
          difficulty: 1,
          answer: String.raw`$(5, 14)$ and $(10, 11)$`,
        },
        {
          stem: String.raw`How many ordered pairs of integers $(x, y)$ satisfy $x^{2} + y^{2} = 2025$?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`How many integers $n$ with $1 \le n \le 100$ can be written as $a^{2} + b^{2}$ with $a$ and $b$ integers?`,
          difficulty: 2,
          answer: String.raw`$43$`,
        },
        {
          stem: String.raw`Let $n$ be a positive integer that can be written as $r^{2} + s^{2}$ with $r$ and $s$ rational numbers. Prove that $n$ can be written as $a^{2} + b^{2}$ with $a$ and $b$ integers.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: clearing denominators gives $m^{2} n = x^{2} + y^{2}$ with integers; by the lemma, each prime $q \equiv 3 \pmod 4$ divides $m^{2}n$ to an even power, hence divides $n$ to an even power, so $n$ is a sum of two integer squares.`,
        },
        {
          stem: String.raw`How many ordered pairs of integers $(a, b)$ with $\gcd(a, b) = 1$ satisfy $a^{2} + b^{2} = 5^{10}$?`,
          difficulty: 3,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Let $p$ be an odd prime and suppose $p = a^{2} + b^{2}$, where $a$ and $b$ are positive integers. Prove that $a + b$ is a quadratic residue modulo $p$ if and only if $a + b \equiv \pm 1 \pmod 8$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: from $2p = (a + b)^{2} + (a - b)^{2}$, each prime $q$ dividing the odd number $a + b$ has $\left(\frac{2p}{q}\right) = 1$, so reciprocity (with $p \equiv 1 \pmod 4$) gives $\left(\frac{q}{p}\right) = \left(\frac{p}{q}\right) = \left(\frac{2}{q}\right)$, and the product of $\left(\frac{2}{q}\right)$ over the prime factors of $a + b$ is $1$ exactly when $a + b \equiv \pm 1 \pmod 8$.`,
        },
      ],
    },
  ],
});
