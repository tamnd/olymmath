---
tag: CRZPM30PMG
kind: problem
type: answer
answer: "2007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of an $8 \times 8$ chessboard, the number 1 is written. We repeat 2003 times the following operation: choose a $3 \times 3$ square and increase the value of all the cells inside this square by one unit (thus incrementing 9 numbers).

Show that there exists a $4 \times 4$ square such that the sum of the numbers written in its four corners is 2007.
