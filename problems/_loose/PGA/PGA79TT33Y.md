---
tag: PGA79TT33Y
kind: problem
type: answer
answer: (m, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(m,n)$ of positive integers numbers with $m>1$ such that:
For any positive integer $b \le m$ that is not coprime with $m$, its posible choose positive integers $a_1, a_2, \cdots, a_n$ all coprimes with $m$ such that:
$$m+a_1b+a_2b^2+\cdots+a_nb^n$$
Is a perfect power.
Note: A perfect power is a positive integer represented by $a^k$, where $a$ and $k$ are positive integers with $k>1$
