---
tag: KDYE7P9Y0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3045634
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2018
    source: hf-ai-mo-aops
    label: 2018 239 Open Mathematical Olympiad
---
In a $9\times 9$ table, all cells contain zeros. The following operations can be performed on the table:

1. Choose an arbitrary row, add one to all the numbers in that row, and shift all these numbers one cell to the right (and place the last number in the first position).

2. Choose an arbitrary column, subtract one from all its numbers, and shift all these numbers one cell down (and place the bottommost number in the top cell).

Is it possible to obtain a table in which all cells, except two, contain zeros, with 1 in the bottom-left cell and -1 in the top-right cell after several such operations?

*Proposed by N. Vlasova*
