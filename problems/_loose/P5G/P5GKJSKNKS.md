---
tag: P5GKJSKNKS
kind: problem
type: answer
answer: \text{No student can have more than 2 candies at any point in time.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $2019$ students sitting around circular table. Initially each of them have one candy. Teacher is allowed to pick one student, who has at least one can candy, and this student can decide, whether he gives his candy to his neighbour on the right or on the left. Prove that no matter what students teacher picks during the process, students can always ensure that any point of time no student has more than $2$ candies.
