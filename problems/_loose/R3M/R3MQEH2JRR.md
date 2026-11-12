---
tag: R3MQEH2JRR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(X_{1}^{(n)}, \ldots, X_{n}^{(n)}\right)$ be a random vector uniformly distributed on the sphere $S_{n}(\sqrt{n})$ of radius $\sqrt{n}$ centered at the origin $(n \geqslant 1)$. Prove the validity of the following "Poincaré observation":

$$
\left(X_{1}^{(n)}, X_{2}^{(n)}, \ldots, X_{m}^{(n)}\right) \xrightarrow{d}\left(\xi_{1}, \ldots, \xi_{m}\right), n \rightarrow \infty,
$$

where $m \geqslant 1,\left\{\xi_{i}\right\}_{i \geqslant 1}$ are independent standard Gaussian random variables.

Remark. This result provides an intuitive understanding of the distribution of the standard Gaussian sequence $\left(\xi_{1}, \xi_{2}, \ldots\right)$ as a uniform distribution on the "infinite-dimensional sphere of infinite radius $S_{\infty}(\sqrt{\infty})$ " (see $\left.[83]\right)$).
