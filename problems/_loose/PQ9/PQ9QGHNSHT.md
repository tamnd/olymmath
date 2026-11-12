---
tag: PQ9QGHNSHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{0}=0$ and $S_{k}=\xi_{1}+\ldots+\xi_{k}, k \geqslant 1$, where $\xi_{1}, \xi_{2}, \ldots$ are independent random variables, $\mathrm{P}\left\{\xi_{k}=1\right\}=p, \mathrm{P}\left\{\xi_{k}=-1\right\}=q, p+q=1$. Show that for $m \leqslant N$ the following equality holds:

$$
\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k} \geqslant N, S_{n}=m\right\}=C_{n}^{u} p^{v} q^{n-v}
$$

where $u=N+(n-m) / 2$ and $v=(n+m) / 2$, and derive from this that in the case $p=q=1 / 2$ the following equality holds:

$$
\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k}=N, S_{n}=m\right\}=\mathrm{P}\left\{S_{n}=2 N-m\right\}-\mathrm{P}\left\{S_{n}=2 N-m+2\right\}
$$
