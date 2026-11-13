---
tag: RR2VG4V93D
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
對於整數數對 $(a,b)$, 令 $P(x) = ax^3 + bx$。若對於某個正整數 $m$, 以下命題成立：
若整數 $x, y$ 滿足 $m$ 能整除 $P(x) - P(y)$，則 $m$ 能整除 $x - y$。
則稱數對 $(a,b)$ 為「$m$-充分」。若存在無限多個正整數 $k$ 使得 $(a,b)$ 為「$k$-充分」，則稱數對 $(a,b)$ 為「非常充分」。
試問：是否存在數對 $(a,b)$ 使得 $(a,b)$ 是「1110-充分」，但不是「非常充分」？
