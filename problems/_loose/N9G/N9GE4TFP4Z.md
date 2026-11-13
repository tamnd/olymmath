---
tag: N9GE4TFP4Z
kind: problem
type: answer
answer: \frac{7}{32}^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the boundary of a square $A B C D$ with a given side length $a$, let $P_{1}, P_{2}, P_{3}$ be the following points: $P_{1}$ lies on $B C$ such that $\overline{B P_{1}}=\overline{P_{1} C}$, $P_{2}$ lies on $C D$ such that $\overline{P_{2} D}=3 \cdot \overline{C P_{2}}$, and $P_{3}$ lies on $D A$ such that $\overline{P_{3} A}=3 \cdot \overline{D P_{3}}$.

A point $X$ moves on the segments $P_{1} B, B A, A P_{3}$ from $P_{1}$ to $P_{3}$. We are looking for all points $X$ on this path (including its starting and ending points) for which the area of the quadrilateral $X P_{1} P_{2} P_{3}$

a) is as small as possible,

b) is as large as possible.

Find all these points and also calculate the area of the quadrilateral $X P_{1} P_{2} P_{3}$ for each of them!
