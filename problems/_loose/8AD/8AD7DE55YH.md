---
tag: 8AD7DE55YH
kind: problem
type: answer
answer: '[(p+1)/2]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of $p$ numbers is written in a row, each of which is equal to +1 or -1. In one operation, it is allowed to change the sign of several consecutive numbers simultaneously. What is the minimum number of such operations required to transform any such sequence into a sequence of all ones?
