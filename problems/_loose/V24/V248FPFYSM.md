---
tag: V248FPFYSM
kind: problem
type: answer
answer: 'For n = 20: yes; for n = 19: no.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Given positive integer $n$. Several cells of a $n \times n$ board were coloured green in a way that no two green cells share a common segment. Is it always true (i.e. no matter which cells were coloured green) that it is possible to place exactly $n$ rooks in some not green cells of board such that no rook captures any other rook if:
1. $n=20$
2. $n=19$ ?
