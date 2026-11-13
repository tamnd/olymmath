---
tag: 8Y2TDAKDB6
kind: problem
type: answer
answer: n(n+2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, an $n$-gun is a $2n$-mino that is formed by putting a $1 \times n$ grid and an $n \times 1$ grid side by side so that one of the corner unit squares of the first grid is next to one of the corner unit squares of the second grid. Find the minimum possible $k$ such that it is possible to color the infinite planar grid with $k$ colors such that any $n$-gun cannot cover two different squares with the same color.

*Itf0501*
