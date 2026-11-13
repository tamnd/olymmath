---
tag: 7MSJKNTT1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmnt
    source: hf-mathnet
    label: United States Harvard-MIT November Tournament
---
Write down a pair of integers $(a, b)$, where $-100000 < a < b < 100000$. You will get $\max (25, k)$ points, where $k$ is the number of other teams' pairs that you interleave. (Two pairs $(a, b)$ and $(c, d)$ of integers interleave each other if $a < c < b < d$ or $c < a < d < b$.)
