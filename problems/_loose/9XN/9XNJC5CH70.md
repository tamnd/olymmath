---
tag: 9XNJC5CH70
kind: problem
type: answer
answer: binom(1000 - k, k) + binom(999 - k, k - 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=11
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Mathematical Olympiad Rioplatense
---
There are given $1000$ distinct points on a circle. We have to select $k$ of them so that no two chosen points are adjacent. In how many ways can this be done?
