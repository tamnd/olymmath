---
tag: XBDBFBNQJ5
kind: problem
type: answer
answer: "2460"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n=0}^{\infty}$ and $(b_n)_{n=0}^{\infty}$ be sequences of real numbers such that $a_0 = 40$, $b_0 = 41$ and for all $n \ge 0$ we have
$$
a_{n+1} = a_n + \frac{1}{b_n} \text{and} b_{n+1} = b_n + \frac{1}{a_n}
$$
Find the smallest positive integer $k$ such that $a_k > 80$.
