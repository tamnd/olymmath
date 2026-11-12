---
tag: D06PA3ZNXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3493173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32954
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Bulgaria EGMO TST
---
In each cell of a $2025 \times 2025$ table there is a golden coin. In the beginning we pick a cell and move in any of the four directions, of our choice, to an adjacent by side cell. In each subsequent move, we have to look to the left or to the right and move one cell. (In other words, each vertical move in the table must be followed by a horizontal move, and vice-versa.) At most how many coins can we gather, if it not allowed to visit any cell twice? (The starting cell is treated as visited from the beginning.)
