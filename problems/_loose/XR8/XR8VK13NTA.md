---
tag: XR8VK13NTA
kind: problem
type: answer
answer: 222 \text{ and } 2022
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $n$ for which the following $5$ conditions hold:
$(1)$ $n$ is not divisible by any perfect square bigger than $1$.
$(2)$ $n$ has exactly one prime divisor of the form $4k+3$, $k\in \mathbb{N}_0$.
$(3)$ Denote by $S(n)$ the sum of digits of $n$ and $d(n)$ as the number of positive divisors of $n$. Then we have that $S(n)+2=d(n)$.
$(4)$ $n+3$ is a perfect square.
$(5)$ $n$ does not have a prime divisor which has $4$ or more digits.
