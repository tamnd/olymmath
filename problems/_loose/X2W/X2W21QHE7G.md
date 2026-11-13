---
tag: X2W21QHE7G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a chessboard consisting of $16 \times 16$ small squares, these squares are colored in a black and white checkerboard pattern. Now define an operation $A$: change the color of all the squares in the $i$-th row and all the squares in the $j$-th column to the opposite color $(1 \leqslant i, j \leqslant 16)$. We call $A$ an operation on the square at the intersection of the $i$-th row and the $j$-th column.

Can all the squares on the chessboard be changed to the same color after several operations? Prove your conclusion.
