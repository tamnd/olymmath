---
tag: 1V2RM17TXT
kind: problem
type: answer
answer: (n,k)wherekisnotdivisorofn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(n, k)$ for which it is possible to write numbers in the cells of an $n \times n$ chessboard such that the sum of the written numbers is positive, but the sum of the numbers in any $k \times k$ connected submatrix is negative.
