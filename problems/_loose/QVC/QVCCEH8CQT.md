---
tag: QVCCEH8CQT
kind: problem
type: answer
answer: m(m+1)(m+2)n(n+1)(n+2)/36
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way Baltic Way
---
A rectangle of size $m \times n$ consisting of $m \cdot n$ squares of size $1 \times 1$ is given. Compute the sum of areas of all subrectangles consisting of some of the $m \cdot n$ squares.
