---
tag: EC2B6AGX0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $a_1, a_2, ... , a_n$.
Prove that it is possible to choose some of the numbers providing $3$ conditions:
a) not a triple of successive members is chosen,
b) at least one of every triple of successive members is chosen,
c) the absolute value of chosen numbers sum is not less that one sixth part of the initial numbers' absolute values sum.
