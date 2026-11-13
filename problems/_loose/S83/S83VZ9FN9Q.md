---
tag: S83VZ9FN9Q
kind: problem
type: answer
answer: 1,12,123,1234,12345,123456,1234567,12345678,123456789
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number $A$ has every digit, starting from the second one, 1 greater than the previous digit. If we multiply $A$ by 9 and add the number of its digits, the resulting number will have its last digit as 0, and all other digits will be 1. What could the number $A$ be?
