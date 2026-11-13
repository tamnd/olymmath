---
tag: XKYNQM5E13
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=155702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given list of three numbers, the operation "changesum" replaces each number in the list with the sum of the other two. For example, applying "changesum" to $3,11,7$ gives $18,10,14$. Arav starts with the list $20,2,3$ and applies the operation "changesum" 2023 times.
What is the largest difference between two of the three numbers in his final list?
A 17
B 18
C 20
D 2021
E 2023
