---
tag: EX17RAFVWH
kind: problem
type: answer
answer: (mn+mr+2r)(n-r)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$, $n$ and $r$ be positive integers with $n \ge 2$ and $1 \le r \le n-1$. Consider a square table of size $(mn+r) \times (mn+r)$. The table is covered by squares of size $n \times n$ with sides parallel to the sides of the table. Each unit square is covered at least once and some unit squares are covered multiple times. Find the minimum possible number of unit squares covered at least two times.
