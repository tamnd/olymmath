---
tag: T9HNW01WXR
kind: problem
type: answer
answer: n = 8
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer with at least $4$ positive divisors. Let $d(n)$ be the number of positive divisors of $n$. Find all values of $n$ for which there exists a sequence of $d(n) - 1$ positive integers $a_1$, $a_2$, $\dots$, $a_{d(n)-1}$ that forms an arithmetic sequence and satisfies the following condition: for any integers $i$ and $j$ with $1 \leq i < j \leq d(n) - 1$, we have $\gcd(a_i , n) \neq \gcd(a_j , n)$.
