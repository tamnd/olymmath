---
tag: HPMYMHVVN9
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ x_1, x_2, \ldots, x_n$ be positive real numbers with sum $ 1$. Find the integer part of:
$ E=x_1+\dfrac{x_2}{\sqrt{1-x_1^2}}+\dfrac{x_3}{\sqrt{1-(x_1+x_2)^2}}+\cdots+\dfrac{x_n}{\sqrt{1-(x_1+x_2+\cdots+x_{n-1})^2}}$
