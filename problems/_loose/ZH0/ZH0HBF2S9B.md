---
tag: ZH0HBF2S9B
kind: problem
type: answer
answer: c_{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A chess rook moves from the bottom-left corner of an $n \times n$ board to the top-right corner. In doing so, it only makes moves to the right and upwards. Prove that the number of different paths on which the rook never lands on the main diagonal, except for the starting and ending positions, is $c_{n-2}$.
