---
tag: 66YRQDSZ7X
kind: problem
type: answer
answer: k = n - \lceil \sqrt{n} \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge 2,$ be a positive integer. Numbers $\{1,2,3, ...,n\}$ are written in a row in an arbitrary order. Determine the smalles positive integer $k$ with the property: everytime it is possible to delete $k$ numbers from those written on the table, such that the remained numbers are either in an increasing or decreasing order.
