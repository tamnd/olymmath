---
tag: RX4CSEH949
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In every unit square of an $n \times n$ board a positive integer is written. A move consists of choosing a $2 \times 2$ square and adding 1 to exactly three of the four numbers written in the chosen square. We call a positive integer *good* if starting from any initial numbers, there is a sequence of moves that makes all the numbers from the board equal.

a) Prove that $n = 6$ is not good.

b) Prove that $n = 4$, and $n = 1024$ are good.
