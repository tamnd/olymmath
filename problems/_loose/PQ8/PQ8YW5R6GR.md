---
tag: PQ8YW5R6GR
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Twelve balls are numbered with the numbers $1,2,3, \ldots, 12$. Each ball is painted either red or green such that the following conditions are met:

(a) if the balls labeled with different numbers $a$ and $b$ are painted red and $a+b<13$, then the ball labeled with the number $a+b$ is also painted red;

(b) if the balls labeled with different numbers $a$ and $b$ are painted green and $a+b<13$, then the ball labeled with the number $a+b$ is also painted green.

In how many ways can the balls be painted?
