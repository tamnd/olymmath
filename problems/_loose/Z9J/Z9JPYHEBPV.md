---
tag: Z9JPYHEBPV
kind: problem
type: answer
answer: "99"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the sequence $1,2, \ldots, 100$, we want to produce the sequence $2,3,4, . ., 99,100,1$ by performing steps in which we swap two | not necessarily adjacent | elements. What is the minimum number of steps required?
