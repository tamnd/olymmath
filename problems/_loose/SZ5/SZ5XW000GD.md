---
tag: SZ5XW000GD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2000 National Training Team Selection Test Question)(1) Let $a, b$ be positive real numbers, and the sequences $\left\{x_{k}\right\}$ and $\left\{y_{k}\right\}$ satisfy $x_{0}=1, y_{0}=0$, and
$$
\left\{\begin{array}{l}
x_{k+1}=a x_{k}-b y_{k}, \\
y_{k-1}=x_{k}+a y_{k},
\end{array} k=0,1,2, \cdots\right.
$$

Prove: $x_{k}=\sum_{l=0}^{\left[\frac{k}{2}\right]}(-1)^{l} a^{t-2 l}\left(a^{2}+b^{2}\right)^{t} \lambda_{k-l}$, where $\lambda_{k, l}=\sum_{l=0}^{\left[\frac{k}{2}\right]} C_{k}^{2 m} C_{m}^{l}$.
(2) Let $u_{k}=\sum_{l=1}^{\left[\frac{1}{2}\right]} \lambda_{k . l}$, for any given positive integer $m$, the remainder of $u_{k}$ divided by $2 m$ is denoted as $z_{m, k}$, prove: $\left\{z_{m, k}\right\} k=0,1,2, \cdots$ is a purely periodic sequence, and find the smallest positive period.
