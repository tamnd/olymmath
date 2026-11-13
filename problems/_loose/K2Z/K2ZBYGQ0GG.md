---
tag: K2ZBYGQ0GG
kind: problem
type: answer
answer: N \leq 2d(|F|)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245694
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B, C, D, E$ be integers, $B \neq 0$ and $F=AD^{2}-BCD+B^{2}E \neq 0$. Prove that the number $N$ of pairs of integers $(x, y)$ such that $$Ax^{2}+Bxy+Cx+Dy+E=0,$$ satisfies $N \le 2 d( \vert F \vert )$, where $d(n)$ denotes the number of positive divisors of positive integer $n$.
