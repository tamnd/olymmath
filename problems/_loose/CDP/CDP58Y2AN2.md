---
tag: CDP58Y2AN2
kind: problem
type: answer
answer: 3,4,5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural $n$ for which all natural numbers from 1 to $n$ inclusive can be arranged in a row in such an order that the sum of the first $k$ numbers from the left will either divide the sum of all $n-k$ remaining numbers or be divisible by it for any $k$ from 1 to $n-1$.
