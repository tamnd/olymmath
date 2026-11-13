---
tag: R9S1HYP0SH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On some cells of a $100 \times 100$ board, there are stacks of checkers. In one move, it is allowed to move any stack by as many cells vertically or horizontally as there are checkers in it; if the stack lands on a non-empty cell, it is placed on top of the stack already there and merges with it. Initially, there is one checker on each cell. Is it possible to gather all of them on one cell in 9999 moves?
