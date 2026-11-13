---
tag: HGPMJD6CX7
kind: problem
type: answer
answer: S_{n}=(1+\cdots+n)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{n}=1^{3}+\cdots+n^{3}$ and construct the multiplication table:

| $\times$ | 1 | 2 | 3 | 4 | $\cdots$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 2 | 3 | 4 | $\cdots$ |
| 2 | 2 | 4 | 6 | 8 | $\cdots$ |
| 3 | 3 | 6 | 9 | 12 | $\cdots$ |
| 4 | 4 | 8 | 12 | 16 | $\cdots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\ddots$ |

We define $\forall k \in \mathbb{N}^{*} I_{k}=\left\{(i, j) \in \mathbb{N}^{* 2}, \max (i, j)=k\right\}$ and $\forall k \in \mathbb{N}^{*} M_{k}=\sum_{i \in I_{k}} i$

In simpler terms, $M_{k}$ is simply the sum of the elements with indices $I_{k}$, refer to the coloring above.

Example: $M_{1}=1, M_{2}=2+4+2, M_{3}=3+6+9+6+3, M_{4}=4+8+12+16+12+8+4$ etc

1. Find a formula for $M_{k}$ and then prove it by induction.
2. Deduce the value of $S_{n}$.
