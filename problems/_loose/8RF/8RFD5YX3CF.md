---
tag: 8RFD5YX3CF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rules of the game are as follows.

(a) Starting from the house with the number 3 highlighted, you must reach the house TOTAL by moving only along rows or columns and calculating the points.

(b) When we move along a row, we can only add, for example, moving from 3 to -6 next to it, we get $3+(-6)=-3$ points.

(c) When we move along a column, we can only subtract, for example, moving from 3 to 5 below, we get $3-5=-2$ points.

(d) It is only allowed to pass through each house once.

What is the path that gives the highest total?

| $\mathbf{3}$ | -6 | 9 | -9 |
| :---: | :---: | :---: | :---: |
| 5 | 7 | 2 | -1 |
| -8 | -3 | -5 | 4 |
| -4 | 1 | 6 | 8 |
| 0 | -2 | -7 | TOTAL |
