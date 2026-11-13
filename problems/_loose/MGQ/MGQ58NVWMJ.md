---
tag: MGQ58NVWMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers $a_{1}, a_{2}, \ldots, a_{r}$, greater than 1, let $\left[a_{1}, a_{2}, \ldots, a_{r}\right]$ denote the expression

$$
\frac{1}{a_{1}-\frac{1}{a_{2}-\frac{1}{\ddots-\frac{1}{a_{r}}}}}
$$

Given two finite sequences $a_{1}, a_{2}, \ldots, a_{n}$ and $b_{1}, b_{2}, \ldots, b_{m}$ of natural numbers greater than 1, such that

$$
\left[a_{1}, a_{2}, \ldots, a_{n}\right]+\left[b_{1}, b_{2}, \ldots, b_{m}\right] \geqslant 1
$$

Prove that there exist indices $n_{1}$ and $m_{1}\left(1 \leqslant n_{1} \leqslant n\right.$ and $\left.1 \leqslant m_{1} \leqslant m\right)$ such that

$$
\left[a_{1}, a_{2}, \ldots, a_{n_{1}}\right]+\left[b_{1}, b_{2}, \ldots, b_{m_{1}}\right]=1
$$
