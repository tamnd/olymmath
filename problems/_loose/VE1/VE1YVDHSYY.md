---
tag: VE1YVDHSYY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players place pawns on a board of dimensions $2001 \times 2001$. A player can place a pawn on an empty space on the board if and only if in the corresponding row and column together, there are more than 1000 free spaces. The player who cannot place a pawn loses. Which player has a winning strategy?
