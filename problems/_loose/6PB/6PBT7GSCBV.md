---
tag: 6PBT7GSCBV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real-coefficient polynomials $p_{0}(x), p_{1}(x), \cdots, p_{n}(x)$ and real numbers $a_{1}, \cdots, a_{n}$. Prove: If the function
$$
f(x)=p_{0}(x)+\sum_{K=1}^{n} a_{k}\left|p_{k}(x)\right|
$$

takes different values at different points in $R$, then its range is $R$.
