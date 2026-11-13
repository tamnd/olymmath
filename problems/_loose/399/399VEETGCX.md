---
tag: 399VEETGCX
kind: problem
type: answer
answer: \text{The distance between any two marked points is even.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 3$ be an odd integer. On a line, $n$ points are marked in such a way that the distance between any two of them is an integer. It turns out that each marked point has an even sum of distances to the remaining $n-1$ marked points. Prove that the distance between any two marked points is even.
