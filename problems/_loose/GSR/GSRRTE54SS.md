---
tag: GSRRTE54SS
kind: problem
type: answer
answer: P(x)=x^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer, find all polynomials $P(x)=a_{n}+a_{n-1} x+\cdots+a_{0} x^{n}$, where $a_{i}$ are real numbers, that satisfy the equation $P(P(x))=(P(x))^{k}$.
