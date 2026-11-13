---
tag: 4CQKT78FJA
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A fraction is said to be irreducible when its numerator and denominator do not have common factors, that is, when the greatest common divisor between the two numbers is 1. For example, the fraction $\frac{3}{7}$ is irreducible, but the fraction $\frac{10}{14}$ is not, since 2 is a common factor of 10 and 14. For which values of $n$ is the fraction $\frac{5 n+6}{6 n+5}$ irreducible? Let's study this problem in parts:

a) Let $d=\text{gcd}(5 n+6,6 n+5)$ be the greatest common divisor of $5 n+6$ and $6 n+5$. Verify that $d$ is a divisor of $n-1$.

b) Knowing that $d$ is a divisor of $n-1$, conclude that $d$ is also a divisor of 11.

c) Verify that if 11 divides $5 n+6$, then 11 divides $6 n+5$.

d) For how many positive integers $n$, less than 50, is the fraction $\frac{5 n+6}{6 n+5}$ irreducible?
