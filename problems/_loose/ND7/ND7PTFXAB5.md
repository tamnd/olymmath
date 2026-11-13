---
tag: ND7PTFXAB5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle and $k < 1$ a positive real number. Let $A_1$, $B_1$, $C_1$ be points on the sides $BC$, $AC$, $AB$ such that $$\frac{A_1B}{BC} = \frac{B_1C}{AC} = \frac{C_1A}{AB} = k.$$

**(a)** Compute, in terms of $k$, the ratio between the areas of the triangles $A_1B_1C_1$ and $ABC$.

**(b)** Generally, for each $n \ge 1$, the triangle $A_{n+1}B_{n+1}C_{n+1}$ is built such that $A_{n+1}$, $B_{n+1}$, $C_{n+1}$ are points on the sides $B_nC_n$, $A_nC_n$ e $A_nB_n$ satisfying $$\frac{A_{n+1}B_n}{B_nC_n} = \frac{B_{n+1}C_n}{A_nC_n} = \frac{C_{n+1}A_n}{A_nB_n} = k.$$
Compute the values of $k$ such that the sum of the areas of every triangle $A_nB_nC_n$, for $n = 1, 2, 3, \dots$ is equal to $\dfrac{1}{3}$ of the area of $ABC$.
