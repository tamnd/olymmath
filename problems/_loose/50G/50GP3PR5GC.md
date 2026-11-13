---
tag: 50GP3PR5GC
kind: problem
type: answer
answer: n(n-1) - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $n \ge 3$ 為一正整數。一個正整數 $m \ge n+1$ 被稱為 $n$ 色數, 若且唯若我們可以將正 $m$ 邊形的每一個頂點塗成 $n$ 色中的其中一個顏色, 使得這個正 $m$ 邊形的任何連續 $n+1$ 個頂點都包含全部 $n$ 種顏色。
證明對於任何 $n \ge 3$, 非 $n$ 色數只有有限多個, 並求最大的非 $n$ 色數。
