---
tag: GSG7DYSXZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d\leq n$ be positive integers and $A$ a real $d\times n$ matrix. Let $\sigma(A)$ be the supremum of $\inf_{v\in W,|v|=1}|Av|$ over all subspaces $W$ of $R^n$ with dimension $d$.

For each $j \leq d$, let $r(j) \in \mathbb{R}^n$ be the $j$th row vector of $A$. Show that:

$$\sigma(A) \leq \min_{i\leq d} d(r(i), \langle r(j), j\ne i\rangle) \leq \sqrt{n}\sigma(A)$$

In which all are euclidian norms and $d(r(i), \langle r(j), j\ne i\rangle)$ denotes the distance between $r(i)$ and the span of $r(j), 1 \leq j \leq d, j\ne i$.
