---
tag: 29EWP1RGZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
遊戲開始時有 $2^m$ 張紙，每張上寫有一個 $1$。考慮以下操作：每次我們選兩張紙，假設其上的數字分別為 $a$ 與 $b$。將兩張紙上的數字都擦掉，並在兩張紙上都寫上 $a+b$。
試證：經過 $m2^{m-1}$ 步後，所有紙上的數字總和至少為 $4^m$。
