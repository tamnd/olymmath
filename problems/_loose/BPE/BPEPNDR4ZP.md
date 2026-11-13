---
tag: BPEPNDR4ZP
kind: problem
type: answer
answer: All positive integers n with n ≡ 1 or 2 (mod 3).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 4$ be a positive integer. Into every square of an $n \times n$ array we inscribe an integer so that the sum of the integers inside any $3 \times 3$ square is negative. Find all positive integers $n$ for which this can be done in such a way that the sum of all the numbers in the array is positive.
