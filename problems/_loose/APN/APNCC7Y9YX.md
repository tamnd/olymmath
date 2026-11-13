---
tag: APNCC7Y9YX
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We can decompose the number 3 into the sum of positive integers in four different ways: $3 ; 2+1 ; 1+2$; and $1+1+1$. In the addition, the order of the terms matters, so $1+2$ and $2+1$ are considered different decompositions. How many different ways can we decompose the natural number $n$?
