---
tag: 5QV8NPF6C3
kind: problem
type: answer
answer: "206"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an even natural number. We partition the numbers $1,2, \ldots, n^{2}$ into two sets $A$ and $B$ of equal size, such that each of the $n^{2}$ numbers belongs to exactly one of the two sets. Let $S_{A}$ and $S_{B}$ be the sum of all elements in $A$ and $B$ respectively. Determine all $n$ for which there exists a partition such that

$$
\frac{S_{A}}{S_{B}}=\frac{39}{64}
$$
