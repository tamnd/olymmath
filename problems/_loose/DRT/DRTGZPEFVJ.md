---
tag: DRTGZPEFVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
4 Place eight rooks on a standard $8 \times 8$ chessboard so that no two are in the same row or column. With the standard rules of chess, this means that no two rooks are attacking each other. Now paint 27 of the remaining squares (not currently occupied by rooks) red.
Prove that no matter how the rooks are arranged and which set of 27 squares are painted, it is always possible to move some or all of the rooks so that:
- All the rooks are still on unpainted squares.
- The rooks are still not attacking each other (no two are in the same row or same column).
- At least one formerly empty square now has a rook on it; that is, the rooks are not on the same 8 squares as before.
