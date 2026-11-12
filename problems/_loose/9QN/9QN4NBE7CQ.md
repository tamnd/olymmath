---
tag: 9QN4NBE7CQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game. Each player, in turn, crosses out 9 numbers (of their choice) from the sequence $1,2,3, \ldots, 100,101$. After eleven such crossings, two numbers will remain. The second player then awards the first player as many points as the difference between these remaining numbers. Prove that the first player can always score at least 55 points, regardless of how the second player plays.
