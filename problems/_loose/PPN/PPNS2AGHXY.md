---
tag: PPNS2AGHXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, play a game on a square grid with $99 \times 99$ cells: A starts by drawing a star in the center of the grid, and B then chooses one of the 8 surrounding cells to draw a circle. Then A draws a star in an adjacent empty cell to any cell that already has a mark, and continues to do so. If A can successfully place a star in any of the four corner cells of the grid, he wins. Prove that no matter what B does, A can always win.
