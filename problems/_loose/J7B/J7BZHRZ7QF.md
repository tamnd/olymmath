---
tag: J7BZHRZ7QF
kind: problem
type: answer
answer: "512"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85849
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a square $A B C D$. You start at vertex $A$. On each turn, you may walk along a side from one vertex to another.

How many walks of 10 turns are there such that you are back at vertex $A$ after the 10 turns? During a walk, you may pass through $A$ on the way.
