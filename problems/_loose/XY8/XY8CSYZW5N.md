---
tag: XY8CSYZW5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game is played on a $n \times n$ chessboard. In the beginning Bars the cat occupies any cell according to his choice. The $d$ sparrows land on certain cells according to their choice (several sparrows may land in the same cell). Bars and the sparrows play in turns. In each turn of Bars, he moves to a cell adjacent by a side or a vertex (like a king in chess). In each turn of the sparrows, precisely one of the sparrows flies from its current cell to any other cell of his choice. The goal of Bars is to get to a cell containing a sparrow. Can Bars achieve his goal
a) if $d=\lfloor \frac{3\cdot n^2}{25}\rfloor$, assuming $n$ is large enough?
b) if $d=\lfloor \frac{3\cdot n^2}{19}\rfloor$, assuming $n$ is large enough?
c) if $d=\lfloor \frac{3\cdot n^2}{14}\rfloor$, assuming $n$ is large enough?
