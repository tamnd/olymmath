---
tag: NNE195G0PY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have an $n \times n$ board, and in every square there is an integer. The sum of all integers on the board is $0$. We define an action on a square where the integer in the square is decreased by the number of neighbouring squares, and the number inside each of the neighbouring squares is increased by 1. Determine if there exists $n\geq 2$ such that we can turn all the integers into zeros in a finite number of actions.
