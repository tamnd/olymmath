---
tag: 3FT745FENB
kind: problem
type: answer
answer: 2^{2^{2013}}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(a_{n}\right)$ be defined by $a_{0}=3$ and $a_{n}=2+a_{0} a_{1} \cdot \ldots \cdot a_{n-1}$ for every $n \geq 1$. Find the term $a_{2013}$.