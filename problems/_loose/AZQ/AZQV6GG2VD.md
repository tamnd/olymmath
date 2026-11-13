---
tag: AZQV6GG2VD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer, and let $\left(a_{1}, a_{2}, \ldots, a_{2 k}\right)$ and $\left(b_{1}, b_{2}, \ldots, b_{2 k}\right)$ be two sequences of real numbers such that $1 / 2 \leq$ $a_{1} \leq \cdots \leq a_{2 k}$ and $1 / 2 \leq b_{1} \leq \cdots \leq b_{2 k}$. Let $M$ and $m$ be the maximum and minimum respectively of

$$
\left(a_{1}+c_{1}\right)\left(a_{2}+c_{2}\right) \cdots\left(a_{2 k}+c_{2 k}\right)
$$

as $\left(c_{1}, \ldots, c_{2 k}\right)$ ranges through all possible permutations of $\left(b_{1}, \ldots, b_{k}\right)$. Prove that

$$
M-m \geq k\left(a_{k}-a_{k+1}\right)\left(b_{k}-b_{k+1}\right) .
$$
