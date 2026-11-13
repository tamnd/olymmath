---
tag: CF8ZGZ6GRX
kind: problem
type: answer
answer: Alina wins when the number of columns is odd; Bogdan wins when the number of columns is even.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=69
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alina and Bogdan play a game on a $2 \times n$ rectangular grid ($n \ge 2$) whose sides of length $2$ are glued together to form a cylinder. Alternating moves, each player cuts out a unit square of the grid. A player loses if his/her move causes the grid to lose circular connection (two unit squares that only touch at a corner are considered to be disconnected). Suppose Alina makes the first move. Which player has a winning strategy?
Estonian Olympiad, 2009
