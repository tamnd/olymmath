---
tag: T7JHVAY9J2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers $M$ and $N$ are given. We observe $N^2$ light bulbs arranged in a table with $N$ rows and $N$ columns. Each light bulb can be either on or off, and at the beginning, all light bulbs are off.

A move consists of selecting any $M$ consecutive light bulbs in a row or column and changing their state, so that each of the selected $M$ light bulbs that was previously off will be on after the move, and vice versa.

If it is possible to achieve that all light bulbs are on with a finite number of moves, prove that the number $M$ is a divisor of the number $N$.
