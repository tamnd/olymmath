---
tag: BK5ZW908AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a chessboard with $6$ rows and $9$ columns, the Slow Rook is placed in the bottom-left corner and the Blind King is placed on the top-left corner. Then, $8$ Sleeping Pawns are placed such that no two Sleeping Pawns are in the same column, no Sleeping Pawn shares a row with the Slow Rook or the Blind King, and no Sleeping Pawn is in the rightmost column. The Slow Rook can move vertically or horizontally $1$ tile at a time, the Slow Rook cannot move into any tile containing a Sleeping Pawn, and the Slow Rook takes the shortest path to reach the Blind King. How many ways are there to place the Sleeping Pawns such that the Slow Rook moves exactly $15$ tiles to get to the space containing the Blind King?

Proposed by Harry Chen (Extile)
