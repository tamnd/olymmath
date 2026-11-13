---
tag: GWS1NHVWSD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 2$ be an integer. There is an $n \times n$ grid, and zero or more cells may be filled with circles. A and B play a game using this grid. In the game, the following operation is repeated $n-1$ times:

A chooses one row that has not been selected before and colors all the cells in that row black. After that, B chooses one column that has not been selected before and colors all the cells in that column black.

When all operations are completed, if there are cells not colored black but containing circles, B wins; otherwise, A wins. How many ways can circles be arranged such that B can win, regardless of A's actions? Note that configurations that match through rotation or reflection are considered distinct.
