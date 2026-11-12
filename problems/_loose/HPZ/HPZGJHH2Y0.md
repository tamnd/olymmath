---
tag: HPZGJHH2Y0
kind: problem
type: answer
answer: "610"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following algorithm.

Step 0. Set $n=m$.

Step 1. If $n$ is even, divide $n$ by two. If $n$ is odd, increase $n$ by one.

Step 2. If $n>1$, go to Step 1. If $n=1$, terminate the algorithm. How many natural numbers $m$ exist for which Step 1 of this algorithm will be executed exactly 15 times?
