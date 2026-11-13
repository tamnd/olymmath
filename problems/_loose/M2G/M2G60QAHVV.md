---
tag: M2G60QAHVV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game board is divided into two parts. In each part, there are some squares, and some segments connect the squares, with each segment connecting two squares from different parts. From any square, it is possible to reach any other square by following the segments. At the start, a purple checkers piece is placed in one of the squares on the left part, and a cyan checkers piece is placed in one of the squares on the right part. Liao Sha and Ba Sha take turns, with Ba Sha starting first. Each turn, the player moves their piece (Ba Sha has the purple piece, Liao Sha has the cyan piece) along a segment to an empty square. It is not allowed to recreate a previously seen scenario (i.e., the same scenario means the purple piece is in the same square, and the cyan piece is in the same square). The player who cannot continue their move loses. Question: Does there exist a game board and initial piece placement such that Ba Sha has a winning strategy?
