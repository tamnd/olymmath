---
tag: AXQPJW50AB
kind: problem
type: answer
answer: 31k-11,k\in\mathbb{Z}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find the greatest common divisor (GCD) of the numerator and the denominator. By the properties of GCD:

$$
\begin{aligned}
& \text { GCD }(5 n-7,3 n+2)=\text { GCD }(5 n-7-(3 n+2), 3 n+2)= \\
& =\text { GCD }(2 n-9,3 n+2)=\text { GCD }(2 n-9, n+11)= \\
& =\text { GCD }(n-20, n+11)=\text { GCD }(31, n+11) .
\end{aligned}
$$

Since 31 is a prime number, we get that GCD $(31, n+11)=1$ or GCD $(31, n+11)=31$. The first case does not apply, as it does not lead to the reduction of the fraction. The second case is realized only if $n+11$ is divisible by 31, that is, for $n=31 k-11, k \in \mathbb{Z}$. In this case, the fraction is reduced only by 31. No other common divisors of the numerator and the denominator are possible, since 31 is a prime number.
