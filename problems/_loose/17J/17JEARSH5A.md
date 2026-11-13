---
tag: 17JEARSH5A
kind: problem
type: answer
answer: n = 4k, \forall k \in \mathbb{Z}^+
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a board consists of $n \times n$ unit squares ($n \ge 3$). Each unit square is colored black and white, resembling a chessboard. In each step, TOMI can choose any $2 \times 2$ square and change the color of every unit square chosen with the other color (white becomes black and black becomes white). Find every $n$ such that after a finite number of moves, every unit square on the board has a same color.
