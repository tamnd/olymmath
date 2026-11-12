---
tag: YHE3ANXW83
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \ldots, \xi_{2 n}$ be independent Bernoulli random variables, $\mathrm{P}\left\{\xi_{k}=1\right\}=\mathrm{P}\left\{\xi_{k}=-1\right\}=1 / 2, k \leqslant 2 n$. Set $S_{0}=0$, $S_{k}=\xi_{1}+\ldots+\xi_{k}$, and let

$$
g_{2 n}=\max \left\{0<2 k \leqslant 2 n: S_{2 k}=0\right\}
$$

- the moment of the last zero in the sequence ( $S_{2}, S_{4}, \ldots, S_{2 n}$ ); if such a moment does not exist, then set $g_{2 n}=0$.

Show that

$$
\mathrm{P}\left\{g_{2 n}=2 k\right\}=u_{2 n} u_{2(n-k)}, 1 \leqslant k \leqslant n
$$

where $u_{2 k}=\mathrm{P}\left\{S_{2 k}=0\right\}=2^{-2 k} C_{2 k}^{k}$.

Remark. By comparing the distribution of $g_{2 n}$ with the probability $P_{2 k, 2 n}$ that a "particle" spends $2 k$ units of time on the positive axis over the interval $[0,2 n]$ (see formula (12) in V1.I.10), we see that, as in formula (15) from V1.I.10, for $0<x<1$ the following relation holds:

$$
\sum_{\left\{k: 0<\frac{k}{n} \leqslant x\right\}} \mathrm{P}\left\{g_{2 n}=2 k\right\} \rightarrow \frac{2}{\pi} \arcsin \sqrt{x}, n \rightarrow \infty,
$$

i.e., the probability distribution of the position of the last zero asymptotically satisfies the arcsine law.
