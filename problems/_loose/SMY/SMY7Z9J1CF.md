---
tag: SMY7Z9J1CF
kind: problem
type: answer
answer: No, they cannot all be positive.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the $2001$ boys chooses an integer and makes a list by writing the names of some of the boys other than himself. For each boy, one computes the sum of the numbers which the boys whose names are included in this boy's list chose, as well as the sum of the numbers which the boys who included the name of this boy in their lists chose. The latter sum is subtracted from the former one, and the resulting number is assigned to the boy in question. Determine whether or not these new numbers assigned to the $2001$ boys can all be positive.
