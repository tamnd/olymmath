---
tag: 2QZ9GGE9AK
kind: problem
type: answer
answer: "9801"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K(x)$ be the number of irreducible fractions $a / b$ such that $a<x$ and $b<x$ (where $a$ and $b$ are natural numbers).

For example, $K(5 / 2)=3$ (fractions $1, 2, 1 / 2$).

Calculate the sum $K(100)+K\left(100 / 2\right)+K\left(100 / 3\right)+\ldots+K\left(100 / 99\right)+K\left(100 / 100\right)$.
