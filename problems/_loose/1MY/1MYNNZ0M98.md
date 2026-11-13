---
tag: 1MYNNZ0M98
kind: problem
type: answer
answer: a + 1 + \left\lfloor k - a \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k\geqslant 2$ be an integer. Consider the sequence $(x_n)_{n\geqslant 1}$ defined by $x_1=a>0$ and $x_{n+1}=x_n+\lfloor k/x_n\rfloor$ for $n\geqslant 1.$ Prove that the sequence is convergent and determine its limit.
