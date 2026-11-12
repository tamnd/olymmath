---
tag: CTFDFNDM5R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25822
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the corner of a chessboard of size $n \times n$ fields, a rook is placed. For which $n$, alternating between horizontal and vertical moves, can it visit all the fields of the board and return to its starting position in $n^{2}$ moves? (Only the fields where the rook stops are considered, not those it flies over during a move. After each horizontal move, a vertical move must follow, and after each vertical move, a horizontal move must follow.)
