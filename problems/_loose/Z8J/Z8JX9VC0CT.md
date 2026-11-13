---
tag: Z8JX9VC0CT
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange the natural numbers 1 to 7 in a row, such that each number is either greater than all the numbers before it or less than all the numbers before it (for example: 4356271 satisfies the condition, starting from the second position, 3 is less than the first 4; 5 is greater than the first two 4, 3; 6 is greater than the first three 4, 3, 5; 2 is less than the first four 4, 3, 5, 6; 7 is greater than the first five 4, 3, 5, 6, 2; 1 is less than the first six 4, 3, 5, 6, 2, 7). Then, among the arrangements that satisfy the condition, the number of arrangements where 7 is not in the fourth position is kinds.
