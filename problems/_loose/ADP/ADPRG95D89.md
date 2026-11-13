---
tag: ADPRG95D89
kind: problem
type: answer
answer: '[(-1, -1, -1), (0, 0, 0), (-2, -2, 0), (-2, 0, -2), (0, -2, -2)]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(x, y, z)$ of real numbers that satisfy the system of equations
$$
\begin{cases} xy + x + y = z, \\ yz + y + z = x, \\ zx + z + x = y. \end{cases}
$$
