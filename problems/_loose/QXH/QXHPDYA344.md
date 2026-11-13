---
tag: QXHPDYA344
kind: problem
type: answer
answer: (2k+1, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $ (m, n)$ of positive integers that have the following property:
For every polynomial $P (x)$ of real coefficients and degree $m$, there exists a polynomial $Q (x)$ of real coefficients and degree $n$ such that $Q (P (x))$ is divisible by $Q (x)$.
