---
tag: RZX8MD3NA8
kind: problem
type: answer
answer: 1009 * 4041
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
A field is a $2020 \times 2021$ grid with a positive integer written into each cell, such that no number repeats in any row or column. An onion consists of $4$ consecutive cells in a row or column, whose numbers add up to exactly $4 \cdot 2021$. Find the largest possible number of onions on the field.
