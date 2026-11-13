---
tag: P0V9VYARFM
kind: problem
type: answer
answer: <\frac{2}{\sqrt{n}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \ldots, A_{n}$ be points on a line such that the largest of the distances $A_{i} A_{j}(i \neq j)$ is equal to 1, and the smallest is $d$. Prove that $d<\frac{2}{\sqrt{n}-1}$.
