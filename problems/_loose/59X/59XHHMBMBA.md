---
tag: 59XHHMBMBA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81358
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
This game is played on a $6 \times 6$ board. Players take turns writing a number (real) in one of the cells, different from all other numbers already on the board, until the entire board is filled. Then, the largest number in each row is shaded. The player who starts wins if the 6 shaded cells are connected (two cells are considered connected if they touch, even diagonally). Otherwise, the second player wins.
