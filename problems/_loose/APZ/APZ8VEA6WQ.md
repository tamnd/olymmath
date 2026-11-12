---
tag: APZ8VEA6WQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players take turns writing one natural number each (repetitions are allowed) on their half of the board so that the sum of all numbers on the board does not exceed 10000. Once the sum of all numbers on the board becomes equal to 10000, the game ends with the calculation of the sum of all digits on each half. The player with the smaller sum of digits on their half wins (if the sums are equal, it's a draw). Can any of the players win, regardless of how the opponent plays?
