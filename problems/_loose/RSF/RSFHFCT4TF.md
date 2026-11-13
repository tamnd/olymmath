---
tag: RSFHFCT4TF
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
一個獵人和一隻隱形的兔子在整點座標平面 $\mathbb{Z}^2 := \{(x, y) : x, y \in \mathbb{Z}\}$ 上玩遊戲 ($\mathbb{Z}$ 為所有整數所成的集合)。遊戲開始前, 獵人先用有限多種顏色, 將 $\mathbb{Z}^2$ 中的每個點各塗上恰一個顏色, 然後兔子在看到獵人的塗色方式後, 秘密地選擇一個點作為起點。在接下來的每分鐘, 兔子都會先告訴獵人牠所在點的顏色, 接著從牠上下左右的相鄰四點中, 秘密地選擇一個牠從未去過的點, 並移動到該點上。
若在有限時間內, 兔子無法再移動, 或是獵人可以確知兔子在遊戲開始時所選的起點, 則獵人獲勝。試問: 是否存在在有限時間內讓獵人獲勝的必勝法?
