---
tag: 8KAWHQ60CF
kind: problem
type: answer
answer: floor((n^2 - 1)/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
Each cell of an $n \times n$ table is filled with one of the two signs: "+" and "-". For each $k$ from $1$ to $n$ the amount of pluses in the first $k$ rows is greater than the amount of minuses in the first $k$ columns.
Find the maximal possible number of minuses in the table.
