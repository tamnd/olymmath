---
tag: PNRV4ENM9B
kind: problem
type: answer
answer: 360+384+360
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a pair of numbers $\{a, b\}$, we say it has a weight of $|a-b|$. In how many ways can the set $\{1,2, \ldots, 12\}$ be divided into six pairs such that the total sum of the weights of these pairs is 30?
