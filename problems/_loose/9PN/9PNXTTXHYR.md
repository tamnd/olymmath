---
tag: 9PNXTTXHYR
kind: problem
type: answer
answer: "619737131179"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer is a prime number if it is greater than 1 and has no positive divisors other than 1 and itself. For example, the number 5 is a prime number because its only two positive divisors are 1 and 5 .
The integer 43797 satisfies the following conditions:
- each pair of neighbouring digits (read from left to right) forms a two-digit prime number, and
- all of the prime numbers formed by these pairs are different, because $43,37,79$, and 97 are all different prime numbers. There are many integers with more than five digits that satisfy both of these conditions. What is the largest positive integer that satisfies both of these conditions?
