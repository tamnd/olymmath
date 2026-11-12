---
tag: 6WCP3J1QZT
kind: problem
type: answer
answer: Danilwins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a cube, each face of which is a grid of 2015 by 2015

cells. In the center of one of the faces stands a pawn. Danil and Maxim move the pawn across the cells of the cube. Danil can only move to an adjacent cell (it is allowed to move to another face if the cells are adjacent), while Maxim can place the pawn in any cell. The pawn colors the cells it moves over. It is not allowed to move the pawn to a colored cell. The initial cell (the center of the face) is colored. Danil moves first. The player who cannot make a move loses. Who will win with correct play from both?
