---
tag: CVTGGDYXY3
kind: problem
type: answer
answer: "165"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya and Vasya are playing the following game. Petya writes a number from 1 to 64 in each cell of an $8 \times 8$ table, using each number exactly once. After this, Vasya chooses one of the cells and places a rook on this cell. Then he chooses a second cell, to which the rook can move in one move from the first cell, and moves the rook to this cell. Next, he chooses a third cell, to which the rook can move in one move from the second cell, and moves the rook to this cell. Selecting previously visited cells is prohibited. After this, Vasya adds up all three numbers written in the cells where the rook stood. What is the maximum sum that Vasya can guarantee to obtain regardless of how Petya fills the table? (The rook can move any number of cells horizontally or vertically) (20 points)
