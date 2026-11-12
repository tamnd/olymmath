---
tag: MFENJG50S5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2021
    url: https://artofproblemsolving.com/community/c6h3028805
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2021
    source: hf-ai-mo-aops
    label: Kvant 2021
---
A table with three rows and 100 columns is given. Initially, in the left cell of each row there are $400\cdot 3^{100}$ chips. At one move, Petya marks some (but at least one) chips on the table, and then Vasya chooses one of the three rows. After that, all marked chips in the selected row are shifted to the right by a cell, and all marked chips in the other rows are removed from the table. Petya wins if one of the chips goes beyond the right edge of the table; Vasya wins if all the chips are removed. Who has a winning strategy?

*Proposed by P. Svyatokum, A. Khuzieva and D. Shabanov*
