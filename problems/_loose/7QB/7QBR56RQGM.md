---
tag: 7QBR56RQGM
kind: problem
type: answer
answer: a_{1}+a_{2}+\cdots+a_{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve in the set of real numbers the equation

$$
\frac{x-a_{1}}{a_{2}+\ldots+a_{n}}+\frac{x-a_{2}}{a_{1}+a_{3}+\ldots+a_{n}}+\ldots+\frac{x-a_{n}}{a_{1}+\ldots+a_{n-1}}=\frac{n x}{a_{1}+\ldots+a_{n}}
$$

where $n \geq 2$ and $a_{i}>0, i \in\{1,2, \cdots, n\}$.
