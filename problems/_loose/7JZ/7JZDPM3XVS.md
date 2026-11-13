---
tag: 7JZDPM3XVS
kind: problem
type: answer
answer: n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=95
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設 $n$ 是一個給定的正整數。某甲和某乙進行一個遊戲：甲決定一個不超過 $n$ 次的整係數多項式 $P(x)$，但是不告訴乙；乙的目標是決定是否存在一個整數 $k$ 使得 $P(x) = k$ 沒有整數解。乙可以進行下述的詢問：乙給甲一個常數 $c$，甲就會告訴乙有幾個整數 $t$ 滿足 $P(t) = c$；每次詢問需要花一塊錢。試問乙至少要付多少錢，才能保證達成他的目標？
