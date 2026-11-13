---
tag: ECNKM5PE49
kind: problem
type: answer
answer: (x, y) = (11t^2, 11t) for any positive integer t; and (7, 1), (121, 1), (10, 2).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Determine all pairs $(x, y)$ of positive integers such that $\frac{x^2y + x + y}{xy^2 + y + 11}$ are integers.
