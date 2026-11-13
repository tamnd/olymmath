---
tag: SXB603AG8X
kind: problem
type: answer
answer: ⌈log n⌉
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n)$ be the minimal number of colors needed to properly color the directed edges of a tournament on $n$ vertices so that no two edges of the same color form a directed path of length $2$. Determine $f(n)$ for all $n \ge 1$.
