---
tag: WYKTW0QYZ3
kind: problem
type: answer
answer: all integers k ≥ 10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Call a positive integer $n$ interesting if both the sum of digits of $n$ and the sum of digits of $n+1$ are perfect squares, whereas $n$ and $n+1$ have the same number of digits. Find all positive integers $k$ for which there exists an interesting $k$-digit number.
