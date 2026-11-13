---
tag: NAYKAWN52Q
kind: problem
type: answer
answer: (0, 4]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
平面上給定一個半徑為 $1$ 的圓 $\omega$。對於一組三角形所成的集合 $T$, 如果滿足下列兩條件:
(i) $T$ 中的每一個三角形都內接於 $\omega$,
(ii) $T$ 中任兩個三角形都沒有共同內部點,
就說 $T$ 是好棒棒。
試決定所有的正實數 $t$, 使得對於每一個正整數 $n$, 都可以找到一組由 $n$ 個三角形所組成的好棒棒集合 $T$, 其中的每一個三角形的周長都大於 $t$。
