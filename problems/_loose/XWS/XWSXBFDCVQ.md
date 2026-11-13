---
tag: XWSXBFDCVQ
kind: problem
type: answer
answer: 2n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n$ 為一正整數。求最小的正整數 $k$, 滿足: 存在一個將 $2n \times 2n$ 白色棋盤上的 $k$ 格塗黑的方法, 使得我們只有唯一一種用 $1 \times 2$ 和 $2 \times 1$ 格骨牌覆蓋棋盤的方法, 使得:
(1) 所有骨牌都貼齊棋盤格線且不超出棋盤;
(2) 任兩個骨牌都不重疊;
(3) 任一骨牌最多都只蓋到 1 格黑色格子。
