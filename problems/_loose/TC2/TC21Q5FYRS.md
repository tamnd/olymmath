---
tag: TC21Q5FYRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, play a game on a $6 \times 6$ grid. Each turn, a player writes a real number in an empty cell, ensuring that the number is different from all numbers already written in the grid. A starts, and then they take turns. Once every cell is filled, the cell containing the largest number in each row is colored black. A wins if they can draw a straight line from the top to the bottom of the grid such that every point on the line is within a black cell (including the boundaries of the black cells). Otherwise, B wins. Who has a winning strategy? ? ${ }^{[6]}$
