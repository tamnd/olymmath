---
tag: 9BC9AFXYXB
kind: problem
type: answer
answer: "14"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=67
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A building has seven rooms numbered $1$ through $7$, all on one floor, and any number of doors connecting these rooms. These doors may be one-way, admitting motion in only one of the two directions, or two-way. In addition, there is a two-way door between room $1$ and the outside, and a treasure in room $7$. Your object is to choose the arrangement of the rooms and the locations of the doors in such a way that

a. it is possible to enter room $1$, reach the treasure, and make it back outside,

b. the minimum number of steps required to do this (each step consisting of walking through a door) is as large as possible.
