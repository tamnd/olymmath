---
tag: ZZ0QBHV1J7
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The ancient Greeks discovered that some natural numbers $n$ have a remarkable property: the sum of the divisors of the number $n$ equals the number $n$ itself (the number itself is not considered a divisor). For example, $n=28$ gives

$$
1+2+4+7+14=28
$$

Such numbers were called "perfect." Using the arithmetic function $\sigma(n)$, which denotes the sum of all positive divisors of the number $n$ (including the number $n$ itself), we can say that a number $n$ is perfect if $\sigma(n)=2 n$. Perfect numbers are very rare. The first five of them are $6,28,496,8128$, 33550336. In 1976, only 24 perfect numbers were known, with the largest being $2^{19936} \cdot\left(2^{19937}-1\right)$, containing about 6000 digits .

In the eighteenth century, Euler proved that every even perfect number $m$ can be represented in the form $m=2^{n-1}\left(2^{n}-1\right)$, where $2^{n}-1$ is a prime number.

Prove the following two not-so-difficult statements independently, which we will need later:

1) $\sigma(n)$ is a multiplicative function, i.e., $\sigma(a \cdot b)=\sigma(a) \cdot \sigma(b)$ provided that $a$ and $b$ are coprime numbers.
2) If $2^{n}-1$ is a prime number, then the number $n$ is also a prime number.

In light of these premises, the task in this problem is to find all perfect numbers $n$ for which $\sigma[\sigma(n)]$ is also a perfect number.
