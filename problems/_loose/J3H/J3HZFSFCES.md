---
tag: J3HZFSFCES
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Find the maximum possible value of integer $k$ for which there exist distinct real numbers $x_1, x_2, \dots, x_k$ greater than $1$ such that
$$
\forall\ 1 \le i,j \le k : x_i^{[x_j]} = x_j^{[x_i]}
$$
(By $[x]$ we mean the greatest integer less than or equal to $x$.)
