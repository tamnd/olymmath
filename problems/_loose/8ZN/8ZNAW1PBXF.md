---
tag: 8ZNAW1PBXF
kind: problem
type: answer
answer: x = -1/2 and x = 1/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ be the greatest integer that is not greater than the real number $x$, and let $[[x]] = x - [x]$. Solve the equation
$$
3[[x]] = x[x] + 1.
$$
