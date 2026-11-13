---
tag: 1SVWBEGSBY
kind: problem
type: answer
answer: "4032"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each cell of a chessboard with $2$ rows and $2019$ columns a real number is written so that:
[LIST]

- There are no two numbers written in the first row that are equal to each other.[/*]

- The numbers written in the second row coincide with (in some another order) the numbers written in the first row.[/*]

- The two numbers written in each column are different and they add up to a rational number.[/*]
[/LIST]
Determine the maximum quantity of irrational numbers that can be in the chessboard.
