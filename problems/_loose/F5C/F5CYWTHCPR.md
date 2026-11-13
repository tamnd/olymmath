---
tag: F5CYWTHCPR
kind: problem
type: answer
answer: p = \frac{7}{12}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $0 \le p \le 1$ and $0 \le q \le 1$, define $F(p, q)$ by
$$
F(p, q) = -2pq + 3p(1-q) + 3(1-p)q - 4(1-p)(1-q).
$$
Define $G(p)$ to be the maximum of $F(p, q)$ over all $q$ (in the interval $0 \le q \le 1$). What is the value of $p$ (in the interval $0 \le p \le 1$) that minimizes $G(p)$?
