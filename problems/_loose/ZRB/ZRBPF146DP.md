---
tag: ZRBPF146DP
kind: problem
type: answer
answer: 744,1160,2024,1566,5750,11662,13310
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers that can be represented as the product of five factors for which the following conditions hold:

- each factor is a prime number
- at least three factors are equal
- the sum of all five factors is 40.

For each such number, determine the number of its natural divisors.
