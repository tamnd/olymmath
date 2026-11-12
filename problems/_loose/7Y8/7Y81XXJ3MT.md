---
tag: 7Y81XXJ3MT
kind: problem
type: answer
answer: \frac{\sqrt{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given numbers $x_{1}, \ldots, x_{n} \in(0,1)$. Find the maximum value of the expression

$$
A=\frac{\sqrt[4]{1-x_{1}}+\ldots+\sqrt[4]{1-x_{n}}}{\frac{1}{\sqrt[4]{x_{1}}}+\ldots+\frac{1}{\sqrt[4]{x_{n}}}}
$$
