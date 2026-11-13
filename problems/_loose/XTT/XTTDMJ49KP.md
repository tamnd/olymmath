---
tag: XTTDMJ49KP
kind: problem
type: answer
answer: \sum_{n=1}^{2018} \frac{1}{x_n} < 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The row $x_1, x_2,…$ is defined by the following recursion

$x_1=1$ and $x_{n+1}=x_n+\sqrt{x_n}$

Prove that

$\sum_{n=1}^{2018}{\frac{1}{x_n}}<3$.
