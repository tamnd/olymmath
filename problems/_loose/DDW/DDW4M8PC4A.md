---
tag: DDW4M8PC4A
kind: problem
type: answer
answer: "27"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider two-digit numbers (so the first digit cannot be 0). Such a number is called vain if the sum of the two digits is at least as large as the product of the two digits. The number 36, for example, is not vain, because $3+6$ is smaller than $3 \cdot 6$.

How many two-digit numbers are vain?
A) 17
B) 18
C) 26
D) 27
E) 37
