---
tag: M65NEAR6GM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be two natural numbers and let $d = gcd (m, n)$ their greatest common divisor.
Let $a_1, a_2,...$ and $b_1, b_2, ...$ be two sequences of integers which are periodic with periods $m$ and $n$ respectively (this means that $a_{i + m} = a_i$ and $b_{i + n} = b_i$ for all natural numbers $i \ge 1$, note that there could be smaller periods).
Prove that if the two sequences on the first $m + n - d$ terms match (i.e. $a_i = b_i$ for all $i \in \{1, 2, ..., m + n - d\}$), then they are the same (so $a_i = b_i$ for all natural $i \ge 1$).
