H2.addTopic({
  id: "N1",
  title: "Divisibility and Primes",
  summary: String.raw`Divisibility arguments, algebraic factorisation, prime factorisation and divisor functions, primes of special forms, Euclid-style arguments, and the exact power of a prime dividing a number.`,
  concepts: [
    {
      title: String.raw`Divisibility toolkit and the Euclidean algorithm`,
      body: String.raw`- If $d \mid a$ and $d \mid b$, then $d \mid ma + nb$ for all integers $m, n$. Use this to **eliminate the variable**: if $d \mid n + 2$ and $d \mid 3n + 1$, then $d \mid 3(n + 2) - (3n + 1) = 5$.
- $\gcd(a, b) = \gcd(a - kb, b)$ for any integer $k$, so the Euclidean algorithm works on expressions too. Since $n^{2} + 1 = (n + 1)(n - 1) + 2$, we get $\gcd(n^{2} + 1, n + 1) = \gcd(2, n + 1)$, which is $1$ or $2$.
- **Divisor of a polynomial in $n$**: $n - a \mid f(n) - f(a)$. So $n - a \mid f(n)$ exactly when $n - a \mid f(a)$, a fixed number with finitely many divisors.
- If $\gcd(d, k) = 1$, then $d \mid kN \iff d \mid N$. Multiply through by a constant to clear awkward coefficients.
- Size matters: if $a \mid b$ and $b \neq 0$, then $|a| \le |b|$.`,
    },
    {
      title: String.raw`Algebraic factorisations`,
      body: String.raw`- $a - b \mid a^{n} - b^{n}$ for every $n \ge 1$, and $a + b \mid a^{n} + b^{n}$ for odd $n$:
$$a^{n} - b^{n} = (a - b)(a^{n-1} + a^{n-2}b + \cdots + b^{n-1}).$$
- So $2^{m} - 1 \mid 2^{mk} - 1$. Example: $2^{10} - 1 = (2^{5} - 1)(2^{5} + 1) = 31 \times 33$. Consequently $2^{n} - 1$ can only be prime when $n$ is prime, and $2^{n} + 1$ only when $n$ is a power of $2$.
- Difference of squares and sum/difference of cubes: $a^{3} \pm b^{3} = (a \pm b)(a^{2} \mp ab + b^{2})$.
- **Sophie Germain identity**: $a^{4} + 4b^{4} = (a^{2} + 2b^{2} + 2ab)(a^{2} + 2b^{2} - 2ab)$. Example: $3^{4} + 4 \cdot 2^{4} = 145 = 29 \times 5$.
- To show a number is composite, factorise it and check that **both** factors exceed $1$.`,
    },
    {
      title: String.raw`Prime factorisation and divisor functions`,
      body: String.raw`Every integer $n > 1$ is uniquely $n = p_{1}^{a_{1}} p_{2}^{a_{2}} \cdots p_{k}^{a_{k}}$.

- Number of divisors: $\tau(n) = (a_{1} + 1)(a_{2} + 1)\cdots(a_{k} + 1)$.
- Sum of divisors: $\sigma(n) = \prod \dfrac{p_{i}^{a_{i} + 1} - 1}{p_{i} - 1}$.
- Example: $72 = 2^{3} \cdot 3^{2}$, so $\tau(72) = 4 \cdot 3 = 12$ and $\sigma(72) = 15 \cdot 13 = 195$.
- Divisors pair up as $d \leftrightarrow n/d$, so $\tau(n)$ is odd exactly when $n$ is a perfect square, and $\tau(n) \le 2\sqrt{n}$.
- A divisor of $n$ is a square (cube, ...) when every exponent in it is even (a multiple of $3$, ...).`,
    },
    {
      title: String.raw`Legendre's formula: primes in factorials`,
      body: String.raw`Write $v_{p}(n)$ for the exponent of the prime $p$ in $n$. Then
$$v_{p}(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^{2}} \right\rfloor + \left\lfloor \frac{n}{p^{3}} \right\rfloor + \cdots$$

- Example: $v_{3}(20!) = 6 + 2 = 8$.
- For a composite base, find each prime's exponent and take the limiting one: the number of trailing zeros of $n!$ is $v_{5}(n!)$, since $2$s are plentiful.`,
    },
    {
      title: String.raw`Lifting the exponent (LTE)`,
      body: String.raw`- **Odd prime $p$**, with $p \mid a - b$ and $p \nmid ab$: $v_{p}(a^{n} - b^{n}) = v_{p}(a - b) + v_{p}(n)$. For odd $n$ and $p \mid a + b$: $v_{p}(a^{n} + b^{n}) = v_{p}(a + b) + v_{p}(n)$.
- Example: $v_{5}(6^{25} - 1) = v_{5}(5) + v_{5}(25) = 1 + 2 = 3$.
- **$p = 2$**, with $a, b$ odd: for odd $n$, $v_{2}(a^{n} - b^{n}) = v_{2}(a - b)$; for even $n$,
$$v_{2}(a^{n} - b^{n}) = v_{2}(a - b) + v_{2}(a + b) + v_{2}(n) - 1.$$
- Example: $v_{2}(5^{4} - 1) = 2 + 1 + 2 - 1 = 4$, and indeed $624 = 16 \times 39$.`,
    },
    {
      title: String.raw`Primes in special forms`,
      body: String.raw`- Every prime $p > 3$ is of the form $6k \pm 1$. For $p \ge 5$: $p^{2} \equiv 1 \pmod{24}$.
- If several expressions in $p$ must all be prime, look at them **modulo $3$** (or $5$, ...): often one of them is always a multiple of $3$, which forces it to equal $3$. Example: if $p$, $2p + 1$ and $4p + 1$ are all prime, then $p = 3$, since otherwise one of $2p + 1$, $4p + 1$ is a multiple of $3$ greater than $3$.
- If a prime $q$ divides a product, it divides one of the factors. Compare **sizes**: a prime larger than a positive factor cannot divide it.`,
    },
    {
      title: String.raw`Euclid-style arguments`,
      body: String.raw`- **Euclid**: if $p_{1}, \ldots, p_{k}$ were all the primes, $N = p_{1}p_{2}\cdots p_{k} + 1$ would have a prime factor not in the list. Example: $2 \cdot 3 \cdot 5 \cdot 7 + 1 = 211$.
- **Variants** for primes of a given form: build $N$ (often $m \cdot \text{product} \pm 1$) so that it is coprime to every listed prime **and** must have a prime factor of the required form (a product of numbers all $\equiv 1 \pmod{m}$ is $\equiv 1 \pmod{m}$).
- An infinite sequence of pairwise coprime integers greater than $1$ gives infinitely many primes: each term has a prime factor that no other term shares.`,
    },
    {
      title: String.raw`Factorials and consecutive integers`,
      body: String.raw`- The product of any $k$ consecutive integers is divisible by $k!$ (it is $k!$ times a binomial coefficient).
- **Long gaps between primes**: $m! + 2, m! + 3, \ldots, m! + m$ are $m - 1$ consecutive composite numbers, since $j \mid m! + j$. Example: $722, 723, 724, 725, 726$.
- For $n > 1$, every prime factor of $n! + 1$ is larger than $n$.`,
    },
  ],
  archetypes: [
    {
      id: "N1-algebraic-factorisation",
      name: String.raw`Factorising to find prime factors`,
      tests: String.raw`Large numbers built from powers, such as $a^{n} \pm b^{n}$ or $a^{4} + 4b^{4}$, that should be split with an identity rather than divided by brute force.`,
      questions: [
        {
          stem: String.raw`What is the largest prime factor of $3^{8} - 2^{8}$?`,
          difficulty: 1,
          choices: [String.raw`$13$`, String.raw`$19$`, String.raw`$61$`, String.raw`$97$`, String.raw`$101$`],
          answer: String.raw`(D) $97$`,
        },
        {
          stem: String.raw`The number $15^{4} + 4 = 50\,629$ is the product of two primes. Find the larger one.`,
          difficulty: 2,
          answer: String.raw`$257$`,
        },
        {
          stem: String.raw`Prove that for every integer $n \ge 2$, the number $\dfrac{2^{4n+2} + 1}{5}$ is an integer and is composite.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $2^{4n+2} + 1 = 1 + 4(2^{n})^{4}$ factorises by the Sophie Germain identity into two factors that are each at least $25$, and the factor $5$ can be cancelled from one of them leaving both parts greater than $1$.`,
        },
      ],
    },
    {
      id: "N1-divisibility-expressions",
      name: String.raw`Divisibility between expressions in $n$`,
      tests: String.raw`Find all $n$ with $f(n) \mid g(n)$, or the possible values of $\gcd(f(n), g(n))$. Eliminate $n$ by combining the expressions until a constant remains.`,
      questions: [
        {
          stem: String.raw`Find the sum of all positive integers $n$ such that $n + 3$ divides $n^{2} + 15$.`,
          difficulty: 1,
          answer: String.raw`$39$`,
        },
        {
          stem: String.raw`As $n$ runs through the positive integers, what is the largest possible value of $\gcd(n^{2} + 3,\ (n + 1)^{2} + 3)$?`,
          difficulty: 2,
          answer: String.raw`$13$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $2n - 1$ divides $n^{3} + 4$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 1, 2, 6, 17$. **Proof.** Key idea: since $2n - 1$ is odd, it divides $n^{3} + 4$ exactly when it divides $8n^{3} + 32 = (2n - 1)(4n^{2} + 2n + 1) + 33$, i.e. exactly when $2n - 1 \mid 33$.`,
        },
      ],
    },
    {
      id: "N1-divisor-functions",
      name: String.raw`Counting and summing divisors`,
      tests: String.raw`Questions about how many divisors a number has, which divisors have a property (square, odd, multiple of ...), or sums of divisors and their reciprocals. Start from the prime factorisation.`,
      questions: [
        {
          stem: String.raw`How many positive divisors of $7200$ are perfect squares?`,
          difficulty: 1,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Find the sum of the reciprocals of all the positive divisors of $360$. Give your answer as a fraction in lowest terms.`,
          difficulty: 2,
          answer: String.raw`$\dfrac{13}{4}$`,
        },
        {
          stem: String.raw`Let $\tau(n)$ denote the number of positive divisors of $n$. Find all positive integers $n$ such that $n = 8\,\tau(n)$.`,
          difficulty: 3,
          answer: String.raw`$n = 80$ and $n = 96$`,
        },
      ],
    },
    {
      id: "N1-primes-special-forms",
      name: String.raw`Primes in special forms`,
      tests: String.raw`Several expressions in a prime $p$ must be prime, or a prime satisfies an equation. Reduce modulo a small number, factorise, and compare the sizes of the factors.`,
      questions: [
        {
          stem: String.raw`Find all primes $p$ such that $p + 4$ and $p + 14$ are also prime.`,
          difficulty: 1,
          answer: String.raw`$p = 3$`,
        },
        {
          stem: String.raw`What is the largest integer that divides $p^{4} - 1$ for **every** prime $p > 5$?`,
          difficulty: 2,
          answer: String.raw`$240$`,
        },
        {
          stem: String.raw`Find all pairs of primes $(p, q)$ such that $p^{3} - p = q^{2} - q$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$(p, q) = (2, 3)$. **Proof.** Key idea: comparing sizes shows $q > p$, so the prime $q$ cannot divide $p - 1$ or $p$ in $q(q - 1) = (p - 1)p(p + 1)$; hence $q \mid p + 1$, forcing $q = p + 1$.`,
        },
      ],
    },
    {
      id: "N1-euclid-arguments",
      name: String.raw`Euclid-style arguments`,
      tests: String.raw`Proving that there are infinitely many primes of some kind, or that numbers are pairwise coprime, by building a number that no listed prime can divide.`,
      questions: [
        {
          stem: String.raw`The number $N = 2 \times 3 \times 5 \times 7 \times 11 \times 13 + 1 = 30\,031$ is not prime. What is its smallest prime factor?`,
          difficulty: 1,
          answer: String.raw`$59$`,
        },
        {
          stem: String.raw`Prove that there are infinitely many primes of the form $3k + 2$, where $k$ is a non-negative integer.`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: if $p_{1}, \ldots, p_{k}$ were all such primes, then $N = 3p_{1}p_{2}\cdots p_{k} - 1 \equiv 2 \pmod{3}$ must have a prime factor $\equiv 2 \pmod 3$ (a product of primes $\equiv 1$ is $\equiv 1$), yet no $p_{i}$ divides $N$.`,
        },
        {
          stem: String.raw`A sequence is defined by $a_{1} = 7$ and $a_{n+1} = a_{n}^{2} - 2a_{n} + 2$ for $n \ge 1$. Prove that any two terms of the sequence are coprime.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $a_{n+1} - 2 = a_{n}(a_{n} - 2)$, so by induction $a_{n+1} = 5a_{1}a_{2}\cdots a_{n} + 2$; a common divisor of $a_{m}$ and $a_{n}$ ($m < n$) therefore divides $2$, and every term is odd.`,
        },
      ],
    },
    {
      id: "N1-prime-powers",
      name: String.raw`The exact power of a prime`,
      tests: String.raw`Finding the largest $k$ with $p^{k}$ (or $m^{k}$) dividing a factorial or a number like $a^{n} \pm b^{n}$. Use Legendre's formula for factorials and LTE for powers.`,
      questions: [
        {
          stem: String.raw`Find the largest integer $k$ such that $12^{k}$ divides $50!$.`,
          difficulty: 1,
          answer: String.raw`$22$`,
        },
        {
          stem: String.raw`Find the largest integer $k$ such that $2^{k}$ divides $3^{64} - 1$.`,
          difficulty: 2,
          answer: String.raw`$8$`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that $2^{2026}$ divides $3^{n} - 1$.`,
          difficulty: 3,
          answer: String.raw`$n = 2^{2024}$`,
        },
      ],
    },
  ],
});
