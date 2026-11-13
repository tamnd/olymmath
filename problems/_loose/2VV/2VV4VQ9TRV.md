---
tag: 2VV4VQ9TRV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=96
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
一個 $3n \times 3n$ 的棋盤, 行與列都依序編號為 1 到 $3n$。方格 $(x, y)$ 依據 $x + y$ 模 3 的餘數為 0, 1 或 2, 分別塗成顏色 A, B 或 C。在每一個方格中擺上一個籌碼, 每個籌碼的顏色為 A, B 或 C。三種顏色的籌碼各有 $3n^2$ 個。
假設我們可以安排下列籌碼的重新排列方式：每個籌碼移動的距離不超過 $d$, 顏色 A 的籌碼取代顏色 B 的籌碼、顏色 B 的籌碼取代顏色 C 的籌碼、且顏色 C 的籌碼取代顏色 A 的籌碼。試證：我們還有另一種籌碼重新排列的方式，使得每個籌碼移動的距離不超過 $d+2$，並且移動後每個方格內都有與該方格顏色相同的籌碼。
