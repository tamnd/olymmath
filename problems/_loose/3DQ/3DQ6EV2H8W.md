---
tag: 3DQ6EV2H8W
kind: problem
type: answer
answer: \binom{n-7}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the permutation $a_{1} a_{2} \cdots a_{n}(n \geqslant 10)$, select 3 elements $a_{i}, a_{j}$, and $a_{k}(1 \leqslant i<j<k \leqslant$ $n)$, such that in this permutation, there are at least 3 elements between $a_{i}$ and $a_{j}$, and at least 4 elements between $a_{j}$ and $a_{k}$. How many different selection methods are there?
