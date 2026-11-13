---
tag: XT3MBQYXK3
kind: problem
type: answer
answer: min{m, (n+1)/2} + min{n, (m+1)/2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=19
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m > 1$ and $n > 1$ be odd integers. Distinct real numbers are written in the cells of a table of $m$ rows and $n$ columns. A number is called *good* if:
1. it is the largest in its row (column);
2. it is the middle number of its column (row).
What is the maximal number of good numbers?
