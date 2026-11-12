---
tag: DDFWBY7FBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game of "super-chess" is played on a $30 \times 30$ board, and involves 20 different pieces, each of which moves according to its own rules. However, it is known that

1) any piece from any square attacks no more than 20 squares and
2) if a piece is moved several squares, the attacked squares are correspondingly shifted (some may disappear off the board).

Prove that

a) any piece $F$ attacks a given square $X$ from no more than 20 squares;

b) it is possible to place all 20 pieces on the board so that none of them attack each other.
