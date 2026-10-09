H2.addTopic({
  id: "N7",
  title: "Arithmetic Functions and Integer Sequences",
  summary: String.raw`Euler's totient, the divisor functions and multiplicativity, sums over divisors, perfect and abundant numbers, divisibility in sequences such as the Fibonacci numbers, sequences that are always integers, and prime powers dividing sequence terms.`,
  concepts: [
    {
      title: String.raw`Multiplicative functions: $\tau$, $\sigma$, $\varphi$`,
      body: String.raw`For $n = p_{1}^{a_{1}} \cdots p_{k}^{a_{k}}$:
$$\tau(n) = \prod (a_{i} + 1), \quad \sigma(n) = \prod \frac{p_{i}^{a_{i}+1} - 1}{p_{i} - 1}, \quad \varphi(n) = \prod p_{i}^{a_{i}-1}(p_{i} - 1).$$

- All three are **multiplicative**: $f(mn) = f(m)f(n)$ when $\gcd(m, n) = 1$. Example: $45 = 3^{2} \cdot 5$ has $\tau = 3 \cdot 2 = 6$, $\sigma = 13 \cdot 6 = 78$, $\varphi = 6 \cdot 4 = 24$.
- **Equations between arithmetic functions**: divide one side by the other. A ratio such as $\frac{\sigma(n)}{n}$ or $\frac{\varphi(n)\tau(n)}{n}$ is a product of one factor per prime power, so compare the factors: find which prime powers give a factor above or below $1$ and how many of them can occur.
- $\frac{\sigma(n)}{n} = \sum_{d \mid n} \frac{1}{d}$ and $\frac{\varphi(n)}{n} = \prod_{p \mid n}\left(1 - \frac{1}{p}\right)$ depend mainly on the primes, not on $n$'s size.
- **Parity**: $\tau(n)$ is odd iff $n$ is a square (divisors pair up as $d \leftrightarrow n/d$). For the parity of $\sigma(n)$, look at each factor $\sigma(p^{a})$ separately.`,
    },
    {
      title: String.raw`Facts about Euler's $\varphi$`,
      body: String.raw`- $\varphi(n)$ counts $1 \le k \le n$ with $\gcd(k, n) = 1$; it is even for $n \ge 3$.
- Each odd prime factor $p$ of $n$ contributes the even factor $p - 1$, so $2^{r} \mid \varphi(n)$ if $n$ has $r$ odd prime factors. This restricts which numbers can be values of $\varphi$.
- To solve $\varphi(n) = m$: the primes $p \mid n$ must have $p - 1 \mid m$; list them, then try their powers. Example: $\varphi(n) = 10$ allows only $p \in \{2, 3, 11\}$, and the solutions are $n = 11, 22$.
- $\varphi(mn) = \varphi(m)\varphi(n)\frac{d}{\varphi(d)}$ with $d = \gcd(m, n)$; in particular $\varphi(2n) = \varphi(n)$ for odd $n$ and $\varphi(2n) = 2\varphi(n)$ for even $n$.`,
    },
    {
      title: String.raw`Sums over divisors and swapping the order of summation`,
      body: String.raw`- **Gauss**: $\sum_{d \mid n} \varphi(d) = n$. Reduce the fractions $\frac{1}{n}, \frac{2}{n}, \ldots, \frac{n}{n}$: exactly $\varphi(d)$ of them end up with denominator $d$. Example: $1 + 2 + 10 + 20 = 33$ for the divisors $1, 3, 11, 33$.
- **Group by the gcd**: the number of $k \le n$ with $\gcd(k, n) = d$ is $\varphi\!\left(\frac{n}{d}\right)$.
- **Swap the order**: $\displaystyle\sum_{k=1}^{N} \tau(k) = \sum_{d=1}^{N} \left\lfloor \frac{N}{d} \right\rfloor$, because $d$ divides exactly $\lfloor N/d \rfloor$ numbers up to $N$. Example: $\sum_{k \le 10} \tau(k) = 10 + 5 + 3 + 2 + 2 + 1 + 1 + 1 + 1 + 1 = 27$.
- If $f$ is multiplicative, so is $F(n) = \sum_{d \mid n} f(d)$ (and more generally $\sum_{d \mid n} f(d)g(n/d)$ for multiplicative $f, g$). So compute such sums on prime powers and multiply.
- **Counting by complement**: to count objects with no common prime factor, count (or bound) the bad ones prime by prime.`,
    },
    {
      title: String.raw`Perfect, abundant and deficient numbers`,
      body: String.raw`$n$ is **perfect** if $\sigma(n) = 2n$, **abundant** if $\sigma(n) > 2n$, **deficient** if $\sigma(n) < 2n$. Example: $70$ is abundant since $\sigma(70) = 144 > 140$.

- **Euclid–Euler**: an even $n$ is perfect iff $n = 2^{p-1}(2^{p} - 1)$ with $2^{p} - 1$ prime (then $p$ is prime). Example: $28 = 2^{2} \cdot 7$.
- **Euler's form**: an odd perfect number (none is known) must be $q^{a}m^{2}$ with $q$ prime, $q \equiv a \equiv 1 \pmod 4$ and $q \nmid m$. Reason: $\sigma(p^{e})$ is odd iff $e$ is even, and $2n$ contains exactly one factor $2$.
- Every proper multiple of a perfect or abundant number is abundant.
- **Ratio bounds**: $\frac{\sigma(p^{e})}{p^{e}} = 1 + \frac{1}{p} + \cdots + \frac{1}{p^{e}} < \frac{p}{p - 1}$, and this grows with $e$. Lower and upper bounds on $\frac{\sigma(n)}{n}$ rule out many candidates.`,
    },
    {
      title: String.raw`Divisibility sequences`,
      body: String.raw`Fibonacci numbers: $F_{0} = 0$, $F_{1} = F_{2} = 1$, $F_{n+1} = F_{n} + F_{n-1}$.

- **Addition formula**: $F_{m+n} = F_{m}F_{n+1} + F_{m-1}F_{n}$. Hence $m \mid n \Rightarrow F_{m} \mid F_{n}$.
- **Strong divisibility**: $\gcd(F_{m}, F_{n}) = F_{\gcd(m, n)}$. Example: $\gcd(F_{10}, F_{15}) = \gcd(55, 610) = F_{5} = 5$.
- Useful identities: Cassini $F_{n-1}F_{n+1} - F_{n}^{2} = (-1)^{n}$; $F_{2n} = F_{n}L_{n}$ with Lucas numbers $L_{n} = F_{n-1} + F_{n+1}$, and $L_{n}^{2} - 5F_{n}^{2} = 4(-1)^{n}$.
- The same holds for $u_{n} = \frac{a^{n} - b^{n}}{a - b}$ with $\gcd(a, b) = 1$: $\gcd(a^{m} - b^{m}, a^{n} - b^{n}) = a^{\gcd(m,n)} - b^{\gcd(m,n)}$.`,
    },
    {
      title: String.raw`Rank of apparition and valuations of Fibonacci numbers`,
      body: String.raw`For a prime $p$, the **rank** $r(p)$ is the least $n \ge 1$ with $p \mid F_{n}$. It behaves like an order:

- $p \mid F_{n} \iff r(p) \mid n$. Example: $r(11) = 10$ since $F_{10} = 55$ is the first multiple of $11$.
- $r(2) = 3$, $r(5) = 5$, and for other primes $r(p)$ divides $p - 1$ or $p + 1$. So all prime factors of $r(p)$ are smaller than $p$ (for $p \ne 5$), which feeds a smallest-prime-factor argument.
- **Valuations**: for an odd prime $p$ and $r(p) \mid n$, $v_{p}(F_{n}) = v_{p}(F_{r(p)}) + v_{p}\!\left(\frac{n}{r(p)}\right)$; in particular $v_{5}(F_{n}) = v_{5}(n)$. For $p = 2$ work from $F_{3} = 2$, $F_{6} = 8$ and the doubling formula $F_{2n} = F_{n}L_{n}$.`,
    },
    {
      title: String.raw`Sequences that are always integers`,
      body: String.raw`A recursion with a division, like $a_{n+1} = \dfrac{a_{n}^{2} + c}{a_{n-1}}$, often secretly satisfies a **linear** recurrence with integer coefficients.

- From $a_{n+1}a_{n-1} - a_{n}^{2} = c = a_{n}a_{n-2} - a_{n-1}^{2}$ we get $a_{n-1}(a_{n+1} + a_{n-1}) = a_{n}(a_{n} + a_{n-2})$, so $\frac{a_{n+1} + a_{n-1}}{a_{n}}$ is **constant**. Example: $a_{0} = a_{1} = 1$, $a_{n+1} = \frac{a_{n}^{2} + 1}{a_{n-1}}$ gives $1, 1, 2, 5, 13, 34, \ldots$ and $a_{n+1} = 3a_{n} - a_{n-1}$.
- The same trick (subtract consecutive instances of the defining relation, look for a ratio that does not change) works for products of more terms; the invariant may depend on the parity of $n$.
- Then integrality follows by induction from the linear recurrence, and gcds of consecutive terms divide the constant $c$.
- A recurrence $a_{n+1} = k a_{n} - a_{n-1}$ also keeps the quadratic form $a_{n+1}^{2} - k a_{n}a_{n+1} + a_{n}^{2}$ constant. Conversely, integer solutions of $x^{2} - kxy + y^{2} = c$ can be pushed down by **Vieta jumping** $(x, y) \mapsto (kx - y, x)$, since the two roots $y, y'$ of the quadratic in $y$ satisfy $y + y' = kx$ and $yy' = x^{2} - c$.`,
    },
    {
      title: String.raw`Prime powers in binomial coefficients`,
      body: String.raw`- **Kummer**: $v_{p}\binom{m+n}{m}$ equals the number of carries when $m$ and $n$ are added in base $p$. Example: $3 + 3$ in base $2$ is $11_{2} + 11_{2}$ with two carries, and $\binom{6}{3} = 20 = 2^{2} \cdot 5$.
- **Legendre**: $v_{p}(n!) = \sum_{i \ge 1} \lfloor n/p^{i} \rfloor = \frac{n - s_{p}(n)}{p - 1}$, where $s_{p}(n)$ is the base-$p$ digit sum.
- **Valuations of products** add: $v_{p}\big(\prod a_{k}\big) = \sum v_{p}(a_{k})$; combine with lifting the exponent for terms like $a^{n} \pm b^{n}$.`,
    },
  ],
  archetypes: [
    {
      id: "N7-totient",
      name: String.raw`Euler's totient function`,
      tests: String.raw`Computing $\varphi(n)$, solving $\varphi(n) = m$, comparing $\varphi(n)$ with $n$ or with other functions, and showing that a number is (or is never) a value of $\varphi$.`,
      questions: [
        {
          stem: String.raw`Find $\varphi(360)$, the number of integers $k$ with $1 \le k \le 360$ and $\gcd(k, 360) = 1$.`,
          difficulty: 1,
          answer: String.raw`$96$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ with $\varphi(n) = 4$.`,
          difficulty: 1,
          answer: String.raw`$n = 5, 8, 10, 12$`,
        },
        {
          stem: String.raw`How many positive integers $n$ satisfy $\varphi(n) = 12$?`,
          difficulty: 2,
          answer: String.raw`$6$ (namely $13, 21, 26, 28, 36, 42$)`,
        },
        {
          stem: String.raw`Find the smallest positive integer $n$ such that $\varphi(n) < \dfrac{n}{4}$.`,
          difficulty: 2,
          answer: String.raw`$210$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $\varphi(n)\,\tau(n) = 2n$, where $\tau(n)$ is the number of positive divisors of $n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 8, 9, 12, 18$. Key idea: $\frac{\varphi(n)\tau(n)}{n}$ is the product of $(a + 1)\left(1 - \frac{1}{p}\right)$ over $p^{a} \parallel n$; this factor is $1$ for $2^{1}$ and at least $\frac{4}{3}$ for every other prime power, so at most two other prime powers occur, and checking the few cases gives the list.`,
        },
        {
          stem: String.raw`Prove that for every positive integer $k$, there is no positive integer $n$ with $\varphi(n) = 2 \cdot 7^{k}$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $4 \nmid \varphi(n)$ forces $n$ to have at most one odd prime factor, so $n = p^{a}$ or $2p^{a}$ (small cases $n = 1, 2, 4$ fail); $p = 3, 7$ are impossible, so $a = 1$ and $p = 2 \cdot 7^{k} + 1$, which is divisible by $3$.`,
        },
        {
          stem: String.raw`Find all integers $n \ge 2$ such that $n - \varphi(n)$ divides $n$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`Exactly the prime powers $n = p^{a}$ ($p$ prime, $a \ge 1$). Key idea: with $P$ the product of the distinct primes of $n$ and $\Phi = \prod_{p \mid n}(p - 1)$, we have $n - \varphi(n) = \frac{n}{P}(P - \Phi)$, so the condition is $P - \Phi \mid P$; the largest prime $r \mid n$ does not divide $\Phi$, hence $P - \Phi \le \frac{P}{r}$, i.e. $\frac{\Phi}{P} \ge 1 - \frac{1}{r}$, which fails as soon as $n$ has a second prime factor.`,
        },
      ],
    },
    {
      id: "N7-multiplicative",
      name: String.raw`Divisor functions and multiplicativity`,
      tests: String.raw`Computing $\tau(n)$ and $\sigma(n)$, solving $\sigma(n) = m$, parity of $\sigma$, and equations or inequalities linking $\tau$, $\sigma$ and $\varphi$, attacked one prime power at a time.`,
      questions: [
        {
          stem: String.raw`Find $\sigma(72)$, the sum of all positive divisors of $72$.`,
          difficulty: 1,
          answer: String.raw`$195$`,
        },
        {
          stem: String.raw`What is the smallest positive integer with exactly $12$ positive divisors?`,
          difficulty: 1,
          answer: String.raw`$60$`,
        },
        {
          stem: String.raw`For how many integers $n$ with $1 \le n \le 100$ is $\sigma(n)$ odd?`,
          difficulty: 2,
          answer: String.raw`$17$`,
        },
        {
          stem: String.raw`Find all positive integers $n$ with $\sigma(n) = 72$.`,
          difficulty: 2,
          answer: String.raw`$n = 30, 46, 51, 55, 71$`,
        },
        {
          stem: String.raw`Prove that $\sigma(n)\varphi(n) \le n^{2} - 1$ for every integer $n \ge 2$, with equality if and only if $n$ is prime.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $\sigma(p^{a})\varphi(p^{a}) = p^{2a}\left(1 - p^{-(a+1)}\right)$, so $\sigma(n)\varphi(n) = n^{2}\prod\left(1 - p^{-(a+1)}\right) \le n^{2}\left(1 - p_{1}^{-(a_{1}+1)}\right)$, and $p_{1}^{a_{1}+1} < n^{2}$ unless $n$ is prime.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ with $\sigma(n) = 1024$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 651$ and $n = 889$. Key idea: if $\sigma(p^{a})$ is a power of $2$ then $p$ is odd, $a = 1$ and $p + 1$ is a power of $2$; so $n$ is a product of distinct Mersenne primes $2^{k} - 1$ with exponents $k$ adding up to $10$: $3 \cdot 7 \cdot 31$ or $7 \cdot 127$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $\sigma(n) = \varphi(n)\,\tau(n)$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$n = 1, 3, 14, 42$. Key idea: the ratio $\frac{\sigma(n)}{\varphi(n)\tau(n)}$ is a product of factors $f(p^{a})$; only $f(2) = \frac{3}{2}$ and $f(4) = \frac{7}{6}$ exceed $1$, $f(3) = 1$, $f(2^{a}) < 1$ for $a \ge 3$, and $f(p^{a}) \le \frac{3}{4}$ for every other odd prime power; so (apart from $n = 1, 3$) $n$ has $2^{1}$ or $2^{2}$ and exactly one further factor equal to $\frac{2}{3}$ or $\frac{6}{7}$, which happens only for $f(7) = \frac{2}{3}$.`,
        },
      ],
    },
    {
      id: "N7-perfect",
      name: String.raw`Perfect, abundant and deficient numbers`,
      tests: String.raw`Problems about $\sigma(n) = 2n$ or $\sigma(n) = kn$: the Euclid–Euler form of even perfect numbers, abundant numbers, bounds on $\frac{\sigma(n)}{n}$, and divisibility or congruence conditions that odd perfect numbers would have to satisfy.`,
      questions: [
        {
          stem: String.raw`A positive integer $n$ is perfect if the sum of its divisors other than $n$ itself is $n$; the two smallest are $6$ and $28$. What is the next one?`,
          difficulty: 1,
          choices: [String.raw`$120$`, String.raw`$128$`, String.raw`$256$`, String.raw`$496$`, String.raw`$8128$`],
          answer: String.raw`(D) $496$`,
        },
        {
          stem: String.raw`A positive integer $n$ is abundant if $\sigma(n) > 2n$. How many abundant numbers are there among $1, 2, \ldots, 50$?`,
          difficulty: 1,
          answer: String.raw`$9$`,
        },
        {
          stem: String.raw`Find the smallest odd abundant number.`,
          difficulty: 2,
          answer: String.raw`$945$`,
        },
        {
          stem: String.raw`Among the primes $p \le 20$, the number $2^{p} - 1$ is prime exactly for $p = 2, 3, 5, 7, 13, 17, 19$. How many even perfect numbers are less than $10^{10}$?`,
          difficulty: 2,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find all perfect numbers that are the product of two consecutive positive integers, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $6 = 2 \cdot 3$. Key idea: such a number is even, so it is $n = 2^{p-1}(2^{p} - 1)$; $n = k(k + 1)$ iff $4n + 1 = 2^{2p+1} - 2^{p+1} + 1$ is a square, but for odd $p$ this is $\equiv 2 \pmod 3$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ whose only prime factors are among $2$, $3$ and $5$ and which satisfy $\sigma(n) = 3n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`Only $n = 120$. Key idea: with $n = 2^{a}3^{b}5^{c}$, each of $\sigma(2^{a}) = 2^{a+1} - 1$, $\sigma(3^{b})$, $\sigma(5^{c})$ divides $3n$, so may only have prime factors $2, 3, 5$; this leaves $a \in \{0, 1, 3\}$, $b \in \{0, 1, 3\}$, $c \in \{0, 1\}$, and checking these cases gives $2^{3} \cdot 3 \cdot 5$.`,
        },
        {
          stem: String.raw`Let $n$ be an odd perfect number (none is known). Prove that $n \equiv 1 \pmod{12}$ or $n \equiv 9 \pmod{36}$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: Euler's form gives $n \equiv 1 \pmod 4$, and $3 \mid n$ forces $9 \mid n$; if $n \equiv 2 \pmod 3$, then $n$ is not a square and in every pair of divisors $d, \frac{n}{d}$ one is $\equiv 1$ and the other $\equiv 2 \pmod 3$, so $3 \mid \sigma(n) = 2n$, a contradiction.`,
        },
      ],
    },
    {
      id: "N7-divisor-sums",
      name: String.raw`Sums over divisors and counting by gcd`,
      tests: String.raw`Evaluating sums like $\sum_{d \mid n} \varphi(d)$, $\sum_{k \le N} \tau(k)$ or $\sum_{k \le n} \gcd(k, n)$, and counting arguments that group numbers by their gcd with $n$ or swap the order of summation.`,
      questions: [
        {
          stem: String.raw`Find $\displaystyle\sum_{d \mid 36} \varphi(d)$, the sum of $\varphi(d)$ over all positive divisors $d$ of $36$.`,
          difficulty: 1,
          answer: String.raw`$36$`,
        },
        {
          stem: String.raw`Find $\tau(1) + \tau(2) + \tau(3) + \cdots + \tau(20)$, where $\tau(k)$ is the number of positive divisors of $k$.`,
          difficulty: 1,
          answer: String.raw`$66$`,
        },
        {
          stem: String.raw`Find $\displaystyle\sum_{k=1}^{60} \gcd(k, 60)$.`,
          difficulty: 2,
          answer: String.raw`$360$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$,
$$\sum_{k=1}^{n} \varphi(k) \left\lfloor \frac{n}{k} \right\rfloor = \frac{n(n + 1)}{2}.$$`,
          difficulty: 2,
          answer: String.raw`**Proof.** Key idea: $\varphi(k)\lfloor n/k \rfloor$ counts the pairs $(k, m)$ with $m \le n$ and $k \mid m$, weighted by $\varphi(k)$; summing over $m$ first gives $\sum_{m \le n} \sum_{k \mid m} \varphi(k) = \sum_{m \le n} m$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $\varphi(n) + \tau(n) = n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 6, 8, 9$. Key idea: $n - \varphi(n)$ counts the $k \le n$ sharing a factor with $n$; these include the $\tau(n) - 1$ divisors $d > 1$, so exactly one non-divisor shares a factor with $n$. Writing $n = pm$ with $p$ the smallest prime factor, the $m - \tau(m)$ multiples $jp$ with $j \nmid m$ are such non-divisors, forcing $m - \tau(m) \le 1$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $\displaystyle\sum_{k=1}^{n} \gcd(k, n) = 3n$, and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 15, 16, 27$. Key idea: grouping by the gcd, the sum is multiplicative and equals $p^{a}\left(1 + a\left(1 - \frac{1}{p}\right)\right)$ on $p^{a}$; every such factor is at least $\frac{3}{2}$, so at most two prime powers occur, and solving gives $2^{4}$, $3^{3}$ and $3 \cdot 5$.`,
        },
        {
          stem: String.raw`Let $n$ be a positive integer. Prove that more than half of the $n^{2}$ ordered pairs $(a, b)$ with $1 \le a, b \le n$ satisfy $\gcd(a, b) = 1$.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: a non-coprime pair has a common prime factor $p$, so there are at most $\sum_{p} \lfloor n/p \rfloor^{2} \le n^{2} \sum_{p} \frac{1}{p^{2}}$ of them, and $\sum_{p} \frac{1}{p^{2}} < \frac{1}{4} + \sum_{k \ge 1} \frac{1}{(2k)(2k + 2)} = \frac{1}{4} + \frac{1}{4}$ (bound each odd $p = 2k + 1$ by $\frac{1}{p^{2}} < \frac{1}{(p-1)(p+1)}$).`,
        },
      ],
    },
    {
      id: "N7-divisibility-sequences",
      name: String.raw`Divisibility in integer sequences`,
      tests: String.raw`gcds of terms of the Fibonacci sequence or of $a^{n} - b^{n}$, which terms are divisible by a given number, and which terms can be powers of a prime or multiples of $n^{2}$. Use strong divisibility and the rank of apparition.`,
      questions: [
        {
          stem: String.raw`Let $F_{1} = F_{2} = 1$ and $F_{n+1} = F_{n} + F_{n-1}$ be the Fibonacci numbers. What is $\gcd(F_{24}, F_{36})$?`,
          difficulty: 1,
          choices: [String.raw`$144$`, String.raw`$233$`, String.raw`$377$`, String.raw`$46\,368$`, String.raw`$14\,930\,352$`],
          answer: String.raw`(A) $144$`,
        },
        {
          stem: String.raw`How many of the Fibonacci numbers $F_{1}, F_{2}, \ldots, F_{100}$ are even?`,
          difficulty: 1,
          answer: String.raw`$33$`,
        },
        {
          stem: String.raw`For how many integers $n$ with $1 \le n \le 100$ is the Fibonacci number $F_{n}$ divisible by $7$?`,
          difficulty: 2,
          answer: String.raw`$12$`,
        },
        {
          stem: String.raw`Find $\gcd(3^{60} - 2^{60},\ 3^{84} - 2^{84})$.`,
          difficulty: 2,
          answer: String.raw`$3^{12} - 2^{12} = 527\,345$`,
        },
        {
          stem: String.raw`Prove that for every positive integer $n$, the Fibonacci number $F_{n}$ divides $F_{2n}$, and that $F_{n}$ and $\dfrac{F_{2n}}{F_{n}}$ have no common prime factor other than possibly $2$.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: the addition formula gives $F_{2n} = F_{n}(F_{n-1} + F_{n+1}) = F_{n}L_{n}$, and the identity $L_{n}^{2} - 5F_{n}^{2} = 4(-1)^{n}$ shows any common prime factor divides $4$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that the Fibonacci number $F_{n}$ is a power of $2$ (including $2^{0} = 1$), and prove that there are no others.`,
          difficulty: 3,
          answer: String.raw`$n = 1, 2, 3, 6$. Key idea: if $d \mid n$ then $F_{d} \mid F_{n}$; an odd prime $p \mid n$ with $p \ge 5$ gives the odd factor $F_{p} > 1$, while $4 \mid n$ gives the factor $F_{4} = 3$ and $9 \mid n$ gives $F_{9} = 34 = 2 \cdot 17$; so $n \mid 6$.`,
        },
        {
          stem: String.raw`Find all positive integers $n$ such that $n^{2}$ divides the Fibonacci number $F_{n}$, and prove that there are no others.`,
          difficulty: 4,
          answer: String.raw`$n = 1$ and $n = 12$. Key idea: for $n > 1$ the rank of the smallest prime factor $p$ divides $n$ and has only prime factors below $p$, which forces $p = 2$ and $3 \mid n$; then $v_{2}(F_{n}) = v_{2}(n) + 2$ and $v_{3}(F_{n}) = v_{3}(n) + 1$ (needing $4 \mid n$) give $n = 12m$ with $\gcd(m, 6) = 1$, and a smallest prime $q \mid m$ would need $r(q) \mid 12$ (or $q = 5$, where $v_{5}(F_{n}) = v_{5}(n)$ is too small).`,
        },
      ],
    },
    {
      id: "N7-integer-sequences",
      name: String.raw`Integer sequences and prime powers in their terms`,
      tests: String.raw`Showing that a sequence defined with a division is always integral (find a hidden linear recurrence), and finding the exact power of a prime dividing sequence terms such as Fibonacci numbers, $a^{n} + 1$ or $\binom{2n}{n}$.`,
      questions: [
        {
          stem: String.raw`A sequence has $a_{1} = a_{2} = 1$ and $a_{n+1} = \dfrac{a_{n}^{2} + 2}{a_{n-1}}$ for $n \ge 2$. What is $a_{6}$?`,
          difficulty: 1,
          choices: [String.raw`$141$`, String.raw`$153$`, String.raw`$164$`, String.raw`$175$`, String.raw`$a_{6}$ is not an integer`],
          answer: String.raw`(B) $153$`,
        },
        {
          stem: String.raw`Find the largest integer $k$ such that $2^{k}$ divides the Fibonacci number $F_{48}$.`,
          difficulty: 1,
          answer: String.raw`$6$`,
        },
        {
          stem: String.raw`Find the largest integer $k$ such that $2^{k}$ divides
$$(3^{1} + 1)(3^{2} + 1)(3^{3} + 1)\cdots(3^{20} + 1).$$`,
          difficulty: 2,
          answer: String.raw`$30$`,
        },
        {
          stem: String.raw`For how many integers $n$ with $1 \le n \le 100$ is $\dbinom{2n}{n}$ **not** divisible by $4$?`,
          difficulty: 2,
          answer: String.raw`$7$`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$, $a_{1} = 2$ and
$$a_{n+1} = \frac{a_{n}^{2} + 5}{a_{n-1}} \quad (n \ge 1).$$
Prove that every term is an integer and that any two consecutive terms are coprime.`,
          difficulty: 3,
          answer: String.raw`**Proof.** Key idea: $a_{n+1}a_{n-1} - a_{n}^{2} = 5$ for all $n$ makes $\frac{a_{n+1} + a_{n-1}}{a_{n}}$ constant, so $a_{n+1} = 5a_{n} - a_{n-1}$; a common prime of $a_{n}, a_{n+1}$ would divide $5$, but $a_{n+1} \equiv -a_{n-1} \pmod 5$ shows no term is a multiple of $5$.`,
        },
        {
          stem: String.raw`For how many integers $n$ with $1 \le n \le 2026$ is $\dbinom{2n}{n}$ **not** divisible by $3$?`,
          difficulty: 3,
          answer: String.raw`$127$`,
        },
        {
          stem: String.raw`A sequence has $a_{0} = 1$, $a_{1} = 3$ and
$$a_{n+1} = \frac{a_{n}^{2} + 2}{a_{n-1}} \quad (n \ge 1).$$
Prove that a positive integer $m$ is a term of this sequence if and only if $3m^{2} - 2$ is a perfect square.`,
          difficulty: 4,
          answer: String.raw`**Proof.** Key idea: the hidden recurrence $a_{n+1} = 4a_{n} - a_{n-1}$ keeps $a_{n+1}^{2} - 4a_{n}a_{n+1} + a_{n}^{2} = -2$, i.e. $3a_{n}^{2} - 2 = (a_{n+1} - 2a_{n})^{2}$; conversely, if $3m^{2} - 2 = s^{2}$ then $(m, 2m + s)$ solves $x^{2} - 4xy + y^{2} = -2$, and Vieta jumping $(x, y) \mapsto (4x - y, x)$ strictly decreases such solutions with $x < y$ until it reaches $(1, 3) = (a_{0}, a_{1})$.`,
        },
      ],
    },
  ],
});
