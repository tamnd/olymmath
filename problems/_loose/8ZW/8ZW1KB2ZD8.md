---
tag: 8ZW1KB2ZD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $8 \times 8$ board, $10$ checkers have been placed, each occupying a square. On each square without a token, a number between $0$ and $8$ is written, which is equal to the number of tokens placed on its neighboring squares. Neighboring cells are those that have a side or a vertex in common. Give a distribution of the tiles that makes the sum of the numbers written on the board the greatest possible.
