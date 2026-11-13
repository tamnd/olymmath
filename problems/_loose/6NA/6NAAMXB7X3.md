---
tag: 6NAAMXB7X3
kind: problem
type: answer
answer: (x, y) = (1, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
設數列 $\{a_n\}$ 滿足：
$$
a_1 = a_2 = 1,\ a_{n+2} = a_{n+1} + a_n\ (n \in \mathbb{N}).
$$
當 $n$ 為奇數時，試求出滿足下列方程組的所有實數解 $(x, y)$。
$$
\begin{cases} x + 2^x a_n + 2^y a_{n+1} = 1 + 2a_{n+2}, \\ y + 2^x a_{n+1} + 2^y a_{n+2} = 1 + 2a_{n+3}. \end{cases}
$$
