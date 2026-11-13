---
tag: 40SDG9XB7T
kind: problem
type: answer
answer: f(n) = 0 for all positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $N$ 與 $Z$ 分別表示所有正整數與整數之集合。試求所有函數 $f: N \to Z$ 滿足:
$n$ 整除 $f(m)$ 的充要條件為 $m$ 能整除 $\sum_{d|n} f(d)$, 對於所有的正整數 $n$ 和 $m$ 皆成立。
