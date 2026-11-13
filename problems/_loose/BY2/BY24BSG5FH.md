---
tag: BY24BSG5FH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Billiam is distributing his ample supply of balls among an ample supply of boxes. He distributes the balls as follows: he places a ball in the first empty box, and then for the greatest positive integer n such that all $n$ boxes from box $1$ to box $n$ have at least one ball, he takes all of the balls in those $n$ boxes and puts them into box $n +1$. He then repeats this process indefinitely. Find the number of repetitions of this process it takes for one box to have at least $2022$ balls.
