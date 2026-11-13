---
tag: T8KFJ2HCB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be two positive real numbers, $p > q$, and let $C$ be the set of the continuous real functions defined on the interval $[0, 1]$. Find
$$
\max_{f \in C} \int_{0}^{1} \left(x^{p} |f(x)|^{q} - x^{q} |f(x)|^{p}\right) dx
$$
and the functions which yield this maximum.
