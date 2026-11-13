---
tag: C2T9XR5FKN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Coins are placed in some squares on a $n\times n$ board. Each coin can be moved towards the square symmetrical with respect to either of the two diagonals, as long as that square is empty. The initial coin setup is said to be *good *, if any coin can make the first move.
(a) Determine the maximum number of coins $M$ that can be placed on the $n\times n$ board, such that the configuration is good.
(b) Calculate the total number of good configurations that have exactly $M$ coins.
