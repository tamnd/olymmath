---
tag: R1S5G4Z4QZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play a game with a finite number of positions, and for any position, the sum of the number of positions that can be moved to from it and the number of positions that can move to it is the same. A player loses if they have no move. Prove that the number of positions in which the first player loses when the second plays correctly is no more than half the total number of positions.
