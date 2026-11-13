---
tag: STVB3YRMMZ
kind: problem
type: answer
answer: 2n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n \ge 2$ 為一正整數。有一個 $n \times n$ 的棋盤狀地區, 每一小格都是一座公園。每座公園裡都有若干隻貓 (貓的數量是非負整數)。為了管理貓咪, 管理處會對公園進行操作。每次操作, 管理處會選擇一座公園:
(1) 所選的公園, 其貓咪數量必須大於或等於該公園的相鄰公園數。
(2) 選定公園 $A$ 後, 對於該公園的每座相鄰公園 $B$, 管理處都從 $A$ 赶一隻貓到 $B$ (我們稱兩座公園相鄰, 若且唯若它們有公共邊。)
令 $m$ 為所有公園內的貓咪數量。試求最小的 $m$, 使得存在一種起始的貓咪分布, 讓管理處可以藉由適當的選擇每次操作的公園來進行無限次操作。
