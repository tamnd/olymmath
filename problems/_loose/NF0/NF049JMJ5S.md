---
tag: NF049JMJ5S
kind: problem
type: answer
answer: "180"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each vertex of a regular 50-gon, either the number 1 or the number 2 is inscribed. No three consecutive vertices have the same number inscribed, and the number 1 is inscribed twenty times, while the number 2 is inscribed thirty times. For each vertex, we calculate the product of the number in that vertex with the numbers in the two adjacent vertices, and then sum all such products.

Prove that the result does not depend on the arrangement of the numbers 1 and 2, and determine that result.
