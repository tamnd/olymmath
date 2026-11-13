---
tag: B0APAQBH0E
kind: problem
type: answer
answer: P(x)=(x+1)(x+2)\cdots(x+99)+\frac{1}{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ such that $(x+100) P(x)-x P(x+1)=1$ for every real number $x$.
