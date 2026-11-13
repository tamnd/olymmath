---
tag: F8RMQRAZZW
kind: problem
type: answer
answer: \pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let denote $C_n$ the figure formed by the inside and perimeter of the circle with center the origin, radius $n$ on the $x$-$y$ plane.

Denote by $N(n)$ the number of a unit square such that all of unit square, whose $x,\ y$ coordinates of 4 vertices are integers, and the vertices are included in $C_n$.

Prove that $\lim_{n\to\infty} \frac{N(n)}{n^2}=\pi$.
