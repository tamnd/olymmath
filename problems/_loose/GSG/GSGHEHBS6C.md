---
tag: GSGHEHBS6C
kind: problem
type: answer
answer: S_{1}(n)=4^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maximum 15 points

In an equilateral triangle with area $S_{1}$, a circle is inscribed, and in this circle, an equilateral triangle with area $S_{2}$ is inscribed. In the resulting new triangle, another circle is inscribed, and in this circle, another equilateral triangle with area $S_{3}$ is inscribed. The procedure is repeated $n$ times. The area of the triangle $S_{n}$ turned out to be 1. Find the function $S_{1}(n)$.
