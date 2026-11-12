---
tag: 8KTTVVM8GA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1435901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2017
    source: hf-ai-mo-aops
    label: 2017 Taiwan TST Round 3
---
In an $n\times{n}$ grid, there are some cats living in each cell (the number of cats in a cell must be a non-negative integer). Every midnight, the manager chooses one cell:
(a) The number of cats living in the chosen cell must be greater than or equal to the number of neighboring cells of the chosen cell.
(b) For every neighboring cell of the chosen cell, the manager moves one cat from the chosen cell to the neighboring cell.
(Two cells are called "neighboring" if they share a common side, e.g. there are only $2$ neighboring cells for a cell in the corner of the grid)
Find the minimum number of cats living in the whole grid, such that the manager is able to do infinitely many times of this process.
