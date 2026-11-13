---
tag: KMDC17XBK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than 1, $a_{1}, a_{2}, \ldots, a_{n}$ be positive numbers, and let

$$
A_{k}=\left(a_{1}^{k}+\ldots+a_{n}^{k}\right)\left(a_{1}^{n-k}+\ldots+a_{n}^{n-k}\right)
$$

Prove that if $k$ and $j$ are integers such that $1 \leq k<j \leq \frac{n}{2}$, then $A_{k} \geq A_{j}$. When does equality hold?
