---
tag: NAHNZZ83NQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, n \geqslant 2$ be integers such that $\operatorname{GCD}(m, n)=\operatorname{GCD}(m, n-1)=1$. We define the sequence $\left(n_{k}\right)_{k \in \mathbb{N}}$ by $n_{0}=m$ and $n_{k+1}=n \cdot n_{k}+1$ for $k \in \mathbb{N}$. Show that the integers $n_{1}, \ldots, n_{m-1}$ cannot all be prime numbers.
