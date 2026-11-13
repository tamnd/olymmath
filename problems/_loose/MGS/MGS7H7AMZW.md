---
tag: MGS7H7AMZW
kind: problem
type: answer
answer: All pairs (a, b) with |a − b| ≠ 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
Say a pair of natural numbers $(a, b)$ is *interesting* if there exists natural number $n$, such that minimal prime divisor of $a + n$ equals maximal prime divisor of $b + n$. Find all pairs of natural numbers that are interesting.
