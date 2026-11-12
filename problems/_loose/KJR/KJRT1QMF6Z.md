---
tag: KJRT1QMF6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, in the lower left and lower right corners of a $2018 \times 2018$ board, there are two knights - a red one and a blue one, respectively. Kolya and Sasha take turns; Kolya starts. On a turn, a player moves their knight (Kolya - the red one, and Sasha - the blue one), shifting it simultaneously 20 cells along one coordinate and 17 along the other; the knight cannot land on a cell occupied by the other knight. It is forbidden to create a position that has already occurred in the game (positions are considered the same if the red knight is on the same cell and the blue knight is on the same cell). The player who cannot make a move loses. Who will win with correct play?

(I. Bogdanov, M. Didin)
