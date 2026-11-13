---
tag: DAEC3J8CJV
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154323
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 18th PMO National Stage Oral Phase
---
In an $n \times n$ checkerboard, the rows are numbered 1 to $n$ from top to bottom, and the columns are numbered 1 to $n$ from left to right. Chips are to be placed on this board so that each square has a number of chips equal to the absolute value of the difference of the row and column numbers. If the total number of chips placed on the board is 2660 , find $n$.
