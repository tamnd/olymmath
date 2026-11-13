---
tag: R6JA53P3PG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 3
---
Each cell $(i, j)$ of a $2n \times 2n$ grid is filled with the number $2n(i-1)+j$.
A total of $2n^2$ cells are selected such that exactly $n$ cells are chosen from each row and exactly $n$ cells from each column. Prove that the sum of the numbers in the selected cells is equal to the sum of the numbers in the unselected cells.
(Nursoltan Khavalbolot)
