---
tag: Y9RPHMPTCX
kind: problem
type: answer
answer: "111"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If we form the cross sum of a natural number and then (if possible) the cross sum of this number again, etc., we finally obtain a single-digit number, which we will call the "final cross sum." By definition, the cross sum of a single-digit number is set to be the number itself.

Calculate how many natural numbers from 1 to 1000 have the "final cross sum" 9!
