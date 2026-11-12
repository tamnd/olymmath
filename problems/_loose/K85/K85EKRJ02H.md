---
tag: K85EKRJ02H
kind: problem
type: answer
answer: "250"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=22691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of numbers $x_{1}, x_{2}, \ldots$, such that $x_{1}=79$ and $x_{n}=\frac{n}{x_{n-1}}$ for all $n>1$. How many zeros does the number equal to the product $x_{1} x_{2} \ldots x_{2018}$ end with?
