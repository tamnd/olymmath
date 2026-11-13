---
tag: JV1GRYGDXP
kind: problem
type: answer
answer: n^2 - n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Let $n$ be any natural number. Find the least natural number $k$ such that it is possible to write a natural number from $1$ through $k$ into every cell of an $n \times n$ table in such a way that the sum of every two cells with a common side differs from all other such sums. The numbers in different cells do not have to be distinct.
