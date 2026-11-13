---
tag: FPWQJ5CKG6
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two types of pieces, bishops and rooks, are to be placed on a $10\times 10$ chessboard (without necessarily filling it) such that each piece occupies exactly one square of the board. A bishop $B$ is said to *attack* a piece $P$ if $B$ and $P$ are on the same diagonal and there are no pieces between $B$ and $P$ on that diagonal; a rook $R$ is said to attack a piece $P$ if $R$ and $P$ are on the same row or column and there are no pieces between $R$ and $P$ on that row or column.
A piece $P$ is *chocolate* if no other piece $Q$ attacks $P$.
What is the maximum number of chocolate pieces there may be, after placing some pieces on the chessboard?

*Proposed by José Alejandro Reyes González*
