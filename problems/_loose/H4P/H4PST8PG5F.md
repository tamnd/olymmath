---
tag: H4PST8PG5F
kind: problem
type: answer
answer: "24710"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXII OBM
---
Let $f: \mathbb{Z}_{+}^{*} \rightarrow \mathbb{Z}_{+}^{*}$ be a function defined as follows: given $n$, we write $n = 2^a \cdot (2b+1)$, with $a$ and $b$ non-negative integers, and define $f(n) = a^2 + a + 1$.

Determine the least positive integer $n$ such that $f(1) + f(2) + \cdots + f(n) \ge 123456$.
