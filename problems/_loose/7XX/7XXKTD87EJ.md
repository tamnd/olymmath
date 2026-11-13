---
tag: 7XXKTD87EJ
kind: problem
type: answer
answer: 0+18+1+81=100\quad;\quad12+20+4+64=100\quad;\quad24+26+25+25=100
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Decompose the number 100 in all possible ways into a sum of four natural numbers such that the following condition is satisfied:

If a natural number is added to the first summand, the same number is subtracted from the second summand, the third summand is multiplied by this number, and the fourth summand is divided by it, then all the results are equal.
