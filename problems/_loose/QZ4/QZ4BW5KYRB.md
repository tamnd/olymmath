---
tag: QZ4BW5KYRB
kind: problem
type: answer
answer: \frac{F_{2021}}{2F_{2019}F_{2020}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence is defined recursively by $F_{n+2}=F_{n+1}+F_{n}$ for $n \in \mathbb{Z}$ and $F_{1}=F_{2}=1$. Determine the value of:

$$
\left(1-\frac{F_{2}^{2}}{F_{3}^{2}}\right)\left(1-\frac{F_{3}^{2}}{F_{4}^{2}}\right) \cdot \ldots \cdot\left(1-\frac{F_{2019}^{2}}{F_{2020}^{2}}\right)
$$
