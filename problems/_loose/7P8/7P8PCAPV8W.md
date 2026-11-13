---
tag: 7P8PCAPV8W
kind: problem
type: answer
answer: \geq\frac{2}{7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the side length $a$ of a square $A B C D$ and a length $m$ such that $m \leq a$. Let $M$ be the point on the side $C D$ for which $M D=m$ holds.

We are looking for a point $N$ on the side $A D$ such that the area of triangle $N M D$ is to the area of square $A B C D$ as $1: 7$.

Determine all values of $m$ for which such a point $N$ exists on $A D$, and for each of these values, the length of the segment $D N$.
