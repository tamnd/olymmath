---
tag: ZKGBZSTNF2
kind: problem
type: answer
answer: 3^{n}+\frac{n(n+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n(n \geqslant 2)$. For a $2 n$-tuple ordered array $T=\left(a_{1}, b_{1}, a_{2}, b_{2}, \cdots, a_{n}, b_{n}\right)$, if each component of $T$ is 0 or 1, and for any $p, q(1 \leqslant p<q \leqslant n)$, we have $\left(a_{p}, b_{p}, b_{q}\right) \neq (1,0,1),\left(a_{q}, b_{q}, a_{p}\right) \neq(1,0,0)$, then $T$ is called a "fun array". Find the number of fun arrays.
