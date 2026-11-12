---
tag: 5F7V5HB5WF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the random variable $X$ be distributed according to the binomial law with parameters $n \in \mathbb{N}$ and $p \in [0,1]$, i.e.,

$$
\mathrm{P}(X \leqslant m)=\sum_{k=0}^{m} C_{n}^{k} p^{k} q^{n-k}, 0 \leqslant k \leqslant n, q=1-p,
$$

Prove that $\mathrm{P}(X \leqslant m)$ can be expressed in terms of the incomplete beta function

$$
\mathrm{P}(X \leqslant m)=\frac{1}{\mathrm{~B}(m+1, n-m)} \int_{p}^{1} x^{m}(1-x)^{n-m-1} d x,
$$

where

$$
\mathrm{B}(a, b)=\int_{0}^{1} x^{a-1}(1-x)^{b-1} d x
$$
