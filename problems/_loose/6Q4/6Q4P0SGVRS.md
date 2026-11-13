---
tag: 6Q4P0SGVRS
kind: problem
type: answer
answer: 0<x_{n}-x_{n+1}<\frac{4}{n(n+2)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{n}=\frac{1}{n^{2}}+\frac{1}{n^{2}+1}+\cdots+\frac{1}{(n+1)^{2}-1}$, prove: for all positive integers $n$ we have $0< x_{n}-x_{n+1}<\frac{4}{n(n+2)}$.
