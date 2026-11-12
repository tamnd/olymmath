---
tag: GB666KGTZ9
kind: problem
type: answer
answer: second
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a 4x2017 board. Two players take turns placing rooks on it. The first player must place a rook so that it attacks an even number of already placed rooks, while the second player must place a rook so that it attacks an odd number of already placed rooks. The player who cannot make a move loses. Who can ensure their victory regardless of the opponent's actions? A rook attacks any distance along the same row or column, but it cannot jump over other pieces. For example, if three rooks are placed in the same row, the left rook attacks only the central one, and the central rook attacks both the right and left ones.
