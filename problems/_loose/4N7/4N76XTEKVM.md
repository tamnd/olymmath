---
tag: 4N76XTEKVM
kind: problem
type: answer
answer: The\\player\wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game: a chip is placed on the central node of a $10 \times 10$ grid. On each turn, each player has the right to move it to any other node of the grid, but the length of their move (i.e., the distance by which they moved the chip) must be greater than the length of the previous move made by their partner. The player who cannot make a move loses. Who wins with correct play?
