---
tag: FY84SJQ91H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n \ge 1$ 為一整數。在 $n \times n$ 的表格中, 每個格子填入一個整數。假設下列兩條件成立:
(i) 方格上的整數, 除以 $n$ 的餘數都是 $1$。
(ii) 每一列的總和, 以及每一行的總和, 除以 $n^2$ 的餘數都是 $n$。
設 $R_i$ 為第 $i$ 列所有數字的乘積, 而 $C_j$ 為第 $j$ 行所有數字的乘積。
試證 $n^4$ 整除 $\sum_{i=1}^n R_i - \sum_{j=1}^n C_j$。
