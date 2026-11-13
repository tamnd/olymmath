---
tag: 4HQJEJ9ET3
kind: problem
type: answer
answer: (2007,2008)\text{}((-1)^{n-1}-2008,(-1)^{n-1}-2009)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n$ greater than 1, find all pairs of integers $a$ and $b$ such that the two equations $x^{n}+a x-2008=0$ and $x^{n}+b x-2009=0$ have at least one common real root.
