---
tag: WYWZGYKEHT
kind: problem
type: answer
answer: floor(n/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \ge 3$. Find the minimal integer $k$ satisfying the following property.
For every $n$ points $A_i = (x_i, y_i)$ on the plane, no three of them being collinear, and for every real numbers $c_i$ ($1 \le i \le n$) there exists a polynomial $P(x, y)$ such that $P(x_i, y_i) = c_i$ for all $i = 1, \dots, n$, and the degree of $P$ is not greater than $k$. (F. Petrov)
