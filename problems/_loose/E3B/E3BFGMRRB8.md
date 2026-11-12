---
tag: E3BFGMRRB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3689016
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2025
    source: hf-ai-mo-aops
    label: 2025 Indonesia MO
---
Given a board of size $2 \times 25$ . Some labels are put on **some** squares of size $1 \times 1$ on the board with the following criteria:
(a) The labels used are consecutive positive integers starting from $1$ .
(b) Each square gets a maximum of $1$ label and each label is used exactly once.
(c) Squares on the first row and first column is given the label $1$ and the last label is given to a square on the 25th column.
(d) Two squares with consecutive labels share a side.
(e) For each $2 \times 2$ square, there exist a square with no label.
Prove that the number of possible labelings such that the last label is in the first row is equal to the number of possible labelings such that the last label is in the second row.
