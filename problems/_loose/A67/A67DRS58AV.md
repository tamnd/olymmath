---
tag: A67DRS58AV
kind: problem
type: answer
answer: 5^{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have 500 ball slots numbered from 1 to 500 from left to right. Balls numbered from 1 to 500 are placed in these slots in a random order: their numbers do not necessarily coincide with the numbers of the slots. (In each slot, there is exactly one ball.) We say that the order of the balls is rather increasing if the longest decreasing subsequence of the ball numbers that can be extracted from this order does not exceed 5 elements. Show that there are at most $5^{1000}$ rather increasing orders.
