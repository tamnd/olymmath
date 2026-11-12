---
tag: PXVVHP109Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a maze a chessboard $8 \times 8$, on which some fields are separated by partitions. On the command RIGHT, the rook moves one field to the right or, if there is a board edge or partition to the right, remains in place; similarly, the commands LEFT, UP, and DOWN are executed. The programmer writes a program - a finite sequence of the specified commands, and gives it to the user, after which the user chooses a maze and places the rook on any field. Is it true that the programmer can write such a program that the rook will visit all accessible fields in the maze regardless of the user's choice?
