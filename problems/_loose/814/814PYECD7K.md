---
tag: 814PYECD7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
William writes the number $1$ on a blackboard. Every turn, he erases the number $N$ currently on the blackboard and replaces it with either $4N + 1$ or $8N + 1$ until it exceeds $1000$, after which no more moves are made. If the minimum possible value of the final number on the blackboard is $M$, find the remainder when $M$ is divided by $1000$.
