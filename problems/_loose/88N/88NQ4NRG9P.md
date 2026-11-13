---
tag: 88NQ4NRG9P
kind: problem
type: answer
answer: "151"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
We say that a circular arrangement of positive integers is alternating if every number is either smaller, or larger than both of its neighbours. We call a pair of adjacent numbers good if, upon its removal, the remaining numbers form an alternating arrangement.

The numbers $1$ to $300$ are placed on a circle in an alternating arrangement. Determine the least possible number of good pairs of adjacent numbers in such arrangement.
