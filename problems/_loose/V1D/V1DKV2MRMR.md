---
tag: V1DKV2MRMR
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
    capture: hf-mathnet/Romania/train/0003.parquet#row=336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $n$ be a positive integer. We say that a $n \times n$ table is *special* if:
* each cell of the table contains a 2-digit odd positive integer;
* the numbers of the table are pairwise distinct;
* the products of the numbers of each line and the products of the numbers of each column are perfect squares.
Prove that the largest value of $n$ for which there exists a $n \times n$ special table is equal to 4.
