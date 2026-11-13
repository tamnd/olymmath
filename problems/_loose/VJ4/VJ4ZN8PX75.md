---
tag: VJ4ZN8PX75
kind: problem
type: answer
answer: \frac{4(1-k)}{\sqrt{k^2 - 2k + 4}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an equilateral triangle of side length $2$. Point $A'$ is chosen on side $BC$ such that the length of $A'B$ is $k<1$. Likewise points $B'$ and $C'$ are chosen on sides $CA$ and $AB$. with $CB'=AC'=k$. Line segments are drawn from points $A',B',C'$ to their corresponding opposite vertices. The intersections of these line segments form a triangle, labeled $PQR$. Prove that $\Delta PQR$ is an equilateral triangle with side length ${4(1-k) \over \sqrt{k^2-2k+4}}$.
