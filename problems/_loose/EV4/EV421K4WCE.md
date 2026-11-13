---
tag: EV421K4WCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest positive integer $n$ with the following property: on a board $n \times n$, whose squares are painted in checkerboard pattern (that is, for any two squares with a common edge, one of them is black and the other is white), it is possible to place the numbers $1,2,3 , ... , n^2$, a number in each square, so if $B$ is the sum of the numbers written in the white squares and $P$ is the sum of the numbers written in the black squares, then $\frac {B}{P} = \frac{2021}{4321}$.
