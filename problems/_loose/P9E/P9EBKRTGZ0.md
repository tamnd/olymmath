---
tag: P9EBKRTGZ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n,k)$ with $n,k\in\mathbb Z_{\geq 2}$ be defined such that $\frac{(kn)!}{(n!)^{f(n,k)}}\in\mathbb Z$ and $\frac{(kn)!}{(n!)^{f(n,k)+1}}\not\in\mathbb Z$
Define $m(k)$ such that for all $k$, $n\geq m(k)\implies f(n,k)=k$. Show that $m(k)$ exists and furthermore that $m(k)\leq \mathcal{O}\left(k^2\right)$
