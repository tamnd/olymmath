---
tag: K4A0MC11YC
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
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
給定正整數 $n$, 考慮 $n$ 維空間的所有整數點 (即每個座標都是整數的點)。當兩個整數點的直線距離為 $1$ 時, 我們稱它們互相相鄰。試問是否可能將其中一部分的整數點做標記, 使得對於每一個整數點, 在該點本身和它所有相鄰的點這 $(2n + 1)$ 個點中, 總是恰有一個被標記?
