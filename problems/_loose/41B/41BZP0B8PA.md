---
tag: 41BZP0B8PA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a 643 square grid, there are only two types of cells: mine cells and number cells. Mine cells do not contain numbers. A number cell contains a number $m$ if and only if there are $m$ mine cells among its 8 surrounding cells (when the number cell is on the edge or corner of the grid, this changes to 5 surrounding cells or 3 surrounding cells).
(1) If a $(2 n+1) \times(2 n+1)$ grid contains $n^{2}+1$ mine cells, find the maximum value of the sum of all numbers in the number cells;
(2) Find the maximum value of $k$ such that in any $n \times n$ grid containing $k$ mine cells, there is at least one number cell with the number 0 (express the result in terms of $n$).
