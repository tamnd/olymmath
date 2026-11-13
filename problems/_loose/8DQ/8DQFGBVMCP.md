---
tag: 8DQFGBVMCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $2015$ marbles in a box, where each marble has one color from red, green or blue.
At each step, we are allowed to take $2$ different colored marbles, then replace it with $2$ marbles with the third color. For example, we take one blue marble and one green marble, and we fill with $2$ red marbles.
Prove that we can always do a series of steps so that all marbles in the box have the same color.
