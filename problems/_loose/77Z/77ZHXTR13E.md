---
tag: 77ZHXTR13E
kind: problem
type: answer
answer: \frac{S_{AXYC}}{S_{ABC}}\leq\frac{AX^{2}+XY^{2}+YC^{2}}{AC^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=60973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the sides $A B$ and $B C$ of triangle $A B C$, points $X$ and $Y$ are chosen such that $\angle A X Y=2 \angle C, \angle C Y X=$ $2 \angle A$.

Prove the inequality $\frac{S_{A X Y C}}{S_{A B C}} \leq \frac{A X^{2}+X Y^{2}+Y C^{2}}{A C^{2}}$.
