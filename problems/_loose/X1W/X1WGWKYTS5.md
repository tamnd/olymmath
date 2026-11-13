---
tag: X1WGWKYTS5
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=19
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設 $n$ 為大於 3 的正整數。房間中有 $n$ 個人，其中有些人之間存在敵對關係（敵對關係是雙向的）。假設我們知道這群人同時滿足以下兩個性質：

a. 任意的 4 個人中，必存在兩人不互相敵對。

b. 對於任何正整數 $m \ge 1$，如果我們能找到其中 $m$ 個人，他們之間互相都不敵對，則在剩下的 $n-m$ 個人當中，必存在 3 個人，他們之間任兩人都互相敵對（註：自己不會敵對自己。）

試求 $n$ 的最小可能值。
