---
tag: 5V2Z4YZTA5
kind: problem
type: answer
answer: \frac{C_{2n}^{n}}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A particle starts at the origin $A(0,0)$ and ends at $B(n, n)$, making non-decreasing moves. The entire path lies below the "diagonal" and touches it at most. Try to find the number of such paths.
