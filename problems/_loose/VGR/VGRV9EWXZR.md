---
tag: VGRV9EWXZR
kind: problem
type: answer
answer: "37"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many ordered pairs $(x, y)$ of positive integers less than or equal to 2019 are there such that $x+y$ and $xy+1$ are powers of 2?

There are 4037 light bulbs arranged in a row and numbered from 1 to 4037. Initially, each light bulb can be on or off. A move consists of choosing two light bulbs numbered $a, b$ such that $a / b$ or $b / a$ is a prime number and changing the state of both. Prove that in a finite number of moves, the light bulbs from 1 to 2019 can all be turned on, regardless of the initial configuration.
