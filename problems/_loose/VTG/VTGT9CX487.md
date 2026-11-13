---
tag: VTGT9CX487
kind: problem
type: answer
answer: (x, y, z) = (n, n+1, n+2) for all positive integers n, and (x, y, z) = (2, 1, 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=86
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Find all triples of positive integers $(x, y, z)$, for which $x \cdot y! + 2y \cdot x! = z!$.
