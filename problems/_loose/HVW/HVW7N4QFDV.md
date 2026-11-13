---
tag: HVW7N4QFDV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h2260357
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31193
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Belarusian National Olympiad
---
Given an $n \times n$ ( $n \ge 3$ ) square table with one of the following unit vectors $\uparrow, \downarrow, \leftarrow, \rightarrow$ in any its cell (the vectors are parallel to the sides and the middles of them coincide with the centers of the cells). Per move a beetle creeps from one cell to another in accordance with the vector's direction. If the beetle starts from any cell, then it comes back to this cell after some number of moves. The vectors are directed so that they do not allow the beetle to leave the table.
Is it possible that the sum of all vectors at any row (except for the first one and the last one) is equal to the vector that is parallel to this row, and the sum of all vectors at any column (except for the first one and the last one) is equal to the vector that is parallel to this column ?

(D. Dudko)
