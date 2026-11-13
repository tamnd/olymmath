---
tag: 21W1ZEW5XV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A and B are playing a game on an $8 \times 8$ grid paper. A can color two adjacent (i.e., sharing a common edge) small squares black each time, while B can color any small square white (during the game, the same square can be colored multiple times), and they take turns coloring. Initially, all squares are white. If B can ensure that after each of his turns: (1) every $5 \times 5$ square has at least one corner square that is white, B wins; (2) every $5 \times 5$ square has at least two corner squares that are white, B wins. Is it possible for B to win?
