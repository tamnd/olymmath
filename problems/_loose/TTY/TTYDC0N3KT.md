---
tag: TTYDC0N3KT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 38th Iranian Mathematical Olympiad
---
An $n \times n$ Latin square is given. We are allowed to do the following operation on an $n \times n$ table. We can choose a cell in the square and add the same integer to the number of all the cells in the union of the row and the column of the chosen cell. Prove that one can do a finite number of such operations to reach every Latin square. (Note that the square after some initial steps need not to be a Latin square, and we can do the operation on each cell more than once.)
