---
tag: TC9E6ABN6J
kind: problem
type: answer
answer: "21"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place $r(n)$ chess pieces on an $n \times n$ chessboard such that no four pieces form a rectangle with sides parallel to the grid lines. Prove: $r(n) \leqslant \frac{n+n \sqrt{4 n-3}}{2}$, and find the maximum value of $r(7)$.
