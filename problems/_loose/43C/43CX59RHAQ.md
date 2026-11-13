---
tag: 43CX59RHAQ
kind: problem
type: answer
answer: 2^29 - 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey Turkish Mathematical Olympiad
---
There are two boxes: one contains $29$ distinguishable balls and the other one is empty. In a move applied to a picked box we choose some collection of balls from this box and transfer them to the other box. Starting with the non-empty box we repeatedly apply these moves, picking boxes alternatively. What is the maximal possible number of moves if each ball collection can be selected at most once?
