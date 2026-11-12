---
tag: 6RHVSRP2MV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33537
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{n}$ be independent Bernoulli random variables such that $\mathrm{P}\left\{\xi_{k}=1\right\}=p_{k}, \mathrm{P}\left\{\xi_{k}=0\right\}=1-p_{k}, 1 \leqslant k \leqslant n$, and $\frac{1}{n} \sum_{k=1}^{n} p_{k}=a$. Show that for a given $a, 0<a<1$, the variance $\mathrm{D} S_{n}$ of the quantity $S_{n}=\xi_{1}+\ldots+\xi_{n}$ reaches its maximum value when $p_{1}=\ldots=p_{n}=a$.
