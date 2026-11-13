---
tag: GAFWZ2E9KE
kind: problem
type: answer
answer: 49 + H_100/101 ≈ 49.05136
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmnt
    source: hf-mathnet
    label: United States HMMT November
---
For integers $2 \leq n \leq 100$, let $f(n)$ denote the unique integer $1 \leq a < n$ such that $101 a \equiv 1 \pmod{n}$. Estimate
$$
\sum_{n=2}^{100} \frac{f(n)}{n}
$$
