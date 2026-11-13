---
tag: T6NCBYP3SQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2022
    url: https://artofproblemsolving.com/community/c6h2845846
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26622
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2022
    source: hf-ai-mo-aops
    label: Kvant 2022
---
A rock travelled through an n x n board, stepping at each turn to the cell neighbouring the previous one by a side, so that each cell was visited once. Bob has put the integer numbers from 1 to n^2 into the cells, corresponding to the order in which the rook has passed them. Let M be the greatest difference of the numbers in neighbouring by side cells. What is the minimal possible value of M?
