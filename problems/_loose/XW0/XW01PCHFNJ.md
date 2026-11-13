---
tag: XW01PCHFNJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $a$ 和 $b$ 為相異正整數。有一個無限大的棋盤, 每格可以被填上一個非負整數。棋盤一開始是空的。我們持續進行以下操作:
(i) 如果棋盤上能找到一對相同的數字, 則我們挑選相同數字的兩格, 把其中一格的數字增加 $a$, 另一格增加 $b$。
(ii) 如果棋盤上找不到一對相同的數字, 則我們在兩個空的格子裡各填上一個 0。
試證: 不論如何, 自某次操作後, 都只能再操作 (i)。
