---
tag: 2QSNHMCWR1
kind: problem
type: answer
answer: "25920"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number is called wavy if for every three consecutive digits $a, b, c$ in its decimal representation, $(a-b)(b-c)<0$. Prove that it is possible to construct more than 25000 ten-digit wavy numbers using the digits $0,1, \ldots, 9$ (the digit 0 cannot be in the first position) which contain all the digits from zero to nine.
