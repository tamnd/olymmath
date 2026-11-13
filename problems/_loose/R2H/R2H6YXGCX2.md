---
tag: R2H6YXGCX2
kind: problem
type: answer
answer: 16,23,28,32,44,47,48,61,68,74,82,84,86
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a chain of numbers, each number, after the first, is equal to the product of the digits of the previous number, and the chain continues until a single-digit number is reached. For example: $63 \rightarrow 18 \rightarrow 8$.

In the chain, there can be two or more numbers. Determine all two-digit natural numbers that can be at the beginning of a chain that ends with the number 6.
