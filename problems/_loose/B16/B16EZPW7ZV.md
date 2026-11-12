---
tag: B16EZPW7ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2009
    source: hf-numinamath-1-5
    label: LX OM - I - Task 9
---
Given is a $2008 \times 2008$ board. Two players take turns
making moves, each of which consists of choosing a white or
black pawn and placing it on a selected free field. The player wins
whose move results in a sequence of 5 consecutive
pawns of the same color in a vertical, horizontal, or diagonal line.
Determine whether there exists a strategy for the player starting the game
that guarantees him a win.
