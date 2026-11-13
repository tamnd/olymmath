---
tag: JJS5W97TCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rows $x_n$ and $y_n$ of positive real numbers are such that:

$x_{n+1}=x_n+\frac{1}{2y_n}$ and $y_{n+1}=y_n+\frac{1}{2x_n}$

for each positive integer $n$.

Prove that at least one of the numbers $x_{2018}$ and $y_{2018}$ is bigger than 44,9
