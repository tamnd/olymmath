---
tag: XH5GB291RY
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a strictly positive integer. Domitille has a rectangular grid divided into unit squares. Inside each unit square is written a strictly positive integer. She can perform the following operations as many times as she wishes:

- Choose a row and multiply each number in the row by $n$.
- Choose a column and subtract $n$ from each integer in the column.

Determine all values of $n$ for which the following property is satisfied:

Regardless of the dimensions of the rectangle and the integers written in the cells, Domitille can end up with a rectangle containing only 0s after a finite number of operations.
