---
tag: 8AAH8GT1J6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a row of 2018 cells, numbered consecutively from 0 to 2017. Initially, there is a token placed on cell 0. Two players

A and $B$ take turns, starting with $A$, in the following way: On their turn, each player can either move the token forward 53 cells, or move it backward 2 cells, without ever exceeding cells 0 or 2017. The player who places the token on cell 2017 wins. Which of them has a winning strategy, and how should they play to ensure a win?
