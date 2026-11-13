---
tag: JTHX1DH5FC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ and $n$ be integers, with $n \geq k \geq 3$. Consider $n+1$ points in the plane, no three of which are collinear. Each segment connecting two of these points is assigned a color from $k$ given colors.

An angle is said to be bichromatic if it has one of the $n+1$ points as its vertex, and its sides are two of the aforementioned segments of different colors.

Prove that there exists a coloring such that the number of bichromatic angles is strictly greater than

$$
n\left\lfloor\frac{n}{k}\right\rfloor^{2}\left(\begin{array}{l}
k \\
2
\end{array}\right)
$$

OBSERVATION: We denote by $\lfloor t\rfloor$ the integer part of the real number $t$; that is, the largest integer $n \leq t$.
