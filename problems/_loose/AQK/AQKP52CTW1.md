---
tag: AQKP52CTW1
kind: problem
type: answer
answer: n^2(2n+1)(2n-1)/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
給定正整數 $n$。設 $S$ 為坐標平面上 $x$ 坐標及 $y$ 坐標皆小於 $2n$ 的非負整數的點所成的集合 (所以 $S$ 共包含 $4n^2$ 個點)。假設 $\mathcal{F}$ 為 $n^2$ 個四邊形所成的集合, 其中每個四邊形的所有頂點都在 $S$ 內, 並且 $S$ 裡的每個點皆是 $\mathcal{F}$ 中其中一個四邊形的頂點。試求 $\mathcal{F}$ 內所有 $n^2$ 個四邊形的面積總和的最大可能值。
