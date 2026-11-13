---
tag: XASADNX3P4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2820160
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61168
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan TST Round 2
---
A $100 \times100$ chessboard has a non-negative real number in each of its cells. A chessboard is **balanced** if and only if the numbers sum up to one for each column of cells as well as each row of cells. Find the largest positive real number $x$ so that, for any balanced chessboard, we can find $100$ cells of it so that these cells all have number
greater or equal to $x$ , and no two of these cells are on the same column or row.

*Proposed by CSJL.*
