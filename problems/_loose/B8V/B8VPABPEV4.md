---
tag: B8VPABPEV4
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Initially, all the cells of a $10 \times 10$ table contain the number $-1$. The following operation is allowed: select two consecutive rows and two consecutive columns, take the four numbers at their intersections, and reverse the sign of all other numbers in the selected rows and columns. Is it possible to transform all the numbers in the table to be $1$?
