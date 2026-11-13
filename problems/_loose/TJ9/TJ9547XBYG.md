---
tag: TJ9547XBYG
kind: problem
type: answer
answer: "992"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A knight is placed on a corner square of a $3 \times 3$ chessboard. A move consists of moving the knight to a square reachable by two steps horizontally followed by one step vertically, or two steps vertically followed by one step horizontally. In how many ways can it be moved to the opposite corner square, with exactly 12 moves?

A grid with $m$ rows and $n$ columns has each cell colored either white or black in such a way that the following two conditions are met:

(a) each row contains as many white cells as black cells;

(b) if a row intersects a column in a black cell, then that row and that column have the same number of black cells; similarly, if a row intersects a column in a white cell, then that row and that column have the same number of white cells.

Find all possible pairs $(m, n)$ for which such a coloring can exist.
