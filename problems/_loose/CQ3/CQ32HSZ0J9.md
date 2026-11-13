---
tag: CQ32HSZ0J9
kind: problem
type: answer
answer: \frac{\pi}{6^{2}}n(n+1)(2n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the parabola equation $y=a x^{2}+b x+c(a \neq 0)$, construct a circle $\odot C_{1}$ with radius $\frac{1}{|a|}$ that is internally tangent to the parabola. Construct $\odot C_{2}$ that is externally tangent to $\odot C_{1}$ and internally tangent to the parabola. Construct $\odot C_{3}$ that is externally tangent to $\odot C_{2}$ and internally tangent to the parabola, and so on, resulting in a sequence of circles $C_{1}, C_{2}, C_{3}, \cdots$. Find the sum of the areas of the first $n$ circles.
