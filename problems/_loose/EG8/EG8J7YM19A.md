---
tag: EG8J7YM19A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
16 boxes are numbered from 0 to 15. 2020 balls are taken, and on each ball, a natural number from 0 to 15 inclusive is written. Each ball is placed in the box with the same number as on the ball. After this, all the balls from the boxes numbered 1, 2, and 3 are taken out, the initial number on each of these balls is erased, and the number 0 is written in its place, then all these balls are placed in box 0. Similarly, all the balls from the boxes numbered 12, 13, and 14 are taken out, the initial number on each of these balls is erased, and the number 15 is written in its place, then all these balls are placed in box 15. As a result of these changes, the arithmetic mean of all the numbers initially written on the balls has decreased by $\frac{1}{10}$. Show that there are at least two boxes for which the positive difference in the initial number of balls in them was at least 34.
