---
tag: 3B5MAJV7K6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1} A_{2} \ldots A_{n}$ be a polygon with perimeter $2 p$, circumscribed around a circle of radius $r$, and let $B_{1}, B_{2}, \ldots, B_{n}$ be the points of tangency of the sides $A_{1} A_{2}, A_{2} A_{3}, \ldots, A_{n} A_{1}$ with the circle. Let $M$ be a point at a distance $d$ from the center of the circle. Prove that

$$
\begin{array}{r}
\left|M B_{1}\right|^{2} \cdot\left|A_{1} A_{2}\right|+\left|M B_{2}\right|^{2} \cdot\left|A_{2} A_{3}\right|+\ldots+\left|M B_{n}\right|^{2} \cdot\left|A_{n} A_{1}\right|= \\
\\
=2 p\left(r^{2}+d^{2}\right) .
\end{array}
$$
