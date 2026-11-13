---
tag: 7J01JYGMZ8
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alex and Bobette are playing on a $20 \times 20$ grid where the cells are square and have a side length of 1. The distance between two cells is the distance between their centers. They take turns playing as follows: Alex places a red stone on a cell, ensuring that the distance between any two cells with red stones is never $\sqrt{5}$, then Bobette places a blue stone on the grid without any restrictions. The game stops when one of them can no longer place a stone. Find the largest $K$ such that Alex can always place at least $K$ stones, regardless of Bobette's responses.
