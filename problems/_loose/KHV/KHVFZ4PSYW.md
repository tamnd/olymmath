---
tag: KHVFZ4PSYW
kind: problem
type: answer
answer: 2^{50}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, are playing a game on a $2^{100} \times 100$ grid. They take turns filling in symbols in the empty cells of the first row, with A starting first. In each turn, A selects an empty cell in the first row and fills it with "$\times$", then B selects an empty cell in the first row and fills it with "○". Once all cells in the first row are filled, they start filling in the empty cells of the second row, and so on, until all cells are filled.

A's goal is to maximize the number of distinct rows in the grid, while B's goal is to minimize the number of distinct rows. If both players use their best strategies, how many distinct rows will there be in the grid?
