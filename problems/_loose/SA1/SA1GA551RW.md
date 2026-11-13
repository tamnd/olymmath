---
tag: SA1GA551RW
kind: problem
type: answer
answer: \frac{r_{1}r_{2}r_{3}}{r_{1}(r_{2}+r_{3})-r_{2}r_{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The circles $k_{1}, k_{2}, k_{3}$ are placed externally to each other, their radii are $r_{1}, r_{2}, r_{3}$ respectively, and it holds that $r_{1}>r_{2}, r_{1}>r_{3}$. We draw the tangents to $k_{i}$ $(i=2,3)$ from the intersection point of the common external tangents of $k_{1}$ and $k_{j}(j=3,2)$. Prove that there is a circle that touches all 4 of these tangents. What is the radius of this circle?
