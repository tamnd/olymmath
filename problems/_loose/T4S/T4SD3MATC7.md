---
tag: T4SD3MATC7
kind: problem
type: answer
answer: "N"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $N$. There are three squirrels that each have an integer. It is known that the largest integer and the least one differ by exactly $N$. Each time, the squirrel with the second largest integer looks at the squirrel with the largest integer. If the integers they have are different, then the squirrel with the second largest integer would be unhappy and attack the squirrel with the largest one, making its integer decrease by two times the difference between the two integers. If the second largest integer is the same as the least integer, only of the squirrels would attack the squirrel with the largest integer. The attack continues until the largest integer becomes the same as the second largest integer. What is the maximum total number of attacks these squirrels make?

Proposed by USJL, ST.
