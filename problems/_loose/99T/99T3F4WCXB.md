---
tag: 99T3F4WCXB
kind: problem
type: answer
answer: '{2, 3, 5, 7}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sets $S$ of 3 or more primes with the following property: The elements of $S$ can be written around a circle such that if you compute the largest prime factor of the sum of each consecutive pair, you again obtain all elements of $S$ (in some order). (Michal Janík)
