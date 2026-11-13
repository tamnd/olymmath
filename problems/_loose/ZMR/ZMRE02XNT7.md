---
tag: ZMRE02XNT7
kind: problem
type: answer
answer: 2^{n+1}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be an integer. We color all the squares of an $n \times n$ chessboard in red or blue such that every $2 \times 2$ square contained in the chessboard has exactly two red and two blue squares.

How many possible colorings are there?

NOTE: Two colorings that can be obtained from each other by a rotation or reflection of the chessboard are considered distinct.
