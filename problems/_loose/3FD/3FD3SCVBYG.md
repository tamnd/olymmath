---
tag: 3FD3SCVBYG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1997
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
Let $o(n)$ be the number of $2 n$-tuples $\left(a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}\right)$ such that each $a_{i}, b_{j}=0$ or 1 and $a_{1} b_{1}+a_{2} b_{2}+\ldots+a_{n} b_{n}$ is odd. Similarly, let e(n) be the number for which the sum is even. Show that $o(n) / e(n)=\left(2^{n}-1\right) /\left(2^{n}+1\right)$.
