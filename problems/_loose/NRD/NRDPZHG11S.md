---
tag: NRDPZHG11S
kind: problem
type: answer
answer: "89"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Richard has an infinite row of empty boxes labeled $1, 2, 3, \ldots$ and an infinite supply of balls. Each minute, Richard finds the smallest positive integer $k$ such that box $k$ is empty. Then, Richard puts a ball into box $k$, and if $k \geq 3$, he removes one ball from each of boxes $1,2,\ldots,k-2$. Find the smallest positive integer $n$ such that after $n$ minutes, both boxes $9$ and $10$ have at least one ball in them.

*Proposed by **vvluo** & **richy***
