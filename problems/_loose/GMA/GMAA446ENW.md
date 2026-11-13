---
tag: GMAA446ENW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A board of size $2015 \times 2015$ is covered with sub-boards of size $2 \times 2$, each of which is painted like chessboard. Each sub-board covers exactly $4$ squares of the board and each square of the board is covered with at least one square of a sub-board (the painted of the sub-boards can be of any shape). Prove that there is a way to cover the board in such a way that there are exactly $2015$ black squares visible. What is the maximum number of visible black squares?
