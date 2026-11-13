---
tag: WS5K7DZ4XR
kind: problem
type: answer
answer: "25920"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We place the integers from 1 to 9 in each of the cells of a $3 \times 3$ grid. For $i=1$, 2 and 3, we denote $\ell_{i}$ as the largest integer present in the $i$-th row and $c_{i}$ as the smallest integer present in the $i^{\text{th}}$ column.

How many grids exist such that $\min \left\{\ell_{1}, \ell_{2}, \ell_{3}\right\}=\max \left\{\mathbf{c}_{1}, \mathrm{c}_{2}, \mathrm{c}_{3}\right\}=4$?
