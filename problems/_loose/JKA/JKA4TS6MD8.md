---
tag: JKA4TS6MD8
kind: problem
type: answer
answer: 1-(8/9)^n-(5/9)^n+(4/9)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random number selector can only select one of the nine integers 1, 2, ..., 9, and it makes these selections with equal probability. Determine the probability that after $n$ selections ($n>1$), the product of the $n$ numbers selected will be divisible by 10.
