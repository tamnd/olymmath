---
tag: 4YEH6D7C0T
kind: problem
type: answer
answer: 2^{2n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, we consider an $n \times n$ board and tiles with dimensions $1 \times 1, 1 \times 2, \ldots, 1 \times n$. In how many ways can exactly $\frac{1}{2} n(n+1)$ squares of the board be colored red, such that the red squares can all be covered by the $n$ tiles placed horizontally, and also by the $n$ tiles placed vertically? Two colorings that are not identical but can be transformed into each other by rotating or reflecting the board are counted as different.
