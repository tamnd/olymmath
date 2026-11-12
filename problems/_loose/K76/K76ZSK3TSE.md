---
tag: K76ZSK3TSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi=\left(\xi_{1}, \ldots, \xi_{n}\right)$ be a non-degenerate Gaussian vector with zero means and covariance matrix $R=\left\|\mathrm{E} \xi_{i} \xi_{j}\right\|$. Let $\lambda_{1}, \ldots, \lambda_{n}$ be the eigenvalues of the matrix $R$. Show that the characteristic function $\varphi(t)$ of the random variable $\xi_{1}^{2}+\ldots+\xi_{n}^{2}$ coincides with the characteristic function of the random variable $\lambda_{1} \zeta_{1}^{2}+\ldots+\lambda_{n} \zeta_{n}^{2}$ (here $\zeta_{1}, \ldots, \zeta_{n}$ are i.i.d. random variables, $\left.\zeta_{1} \sim \mathscr{N}(0,1)\right)$ and can be represented in the following form:

$$
\varphi(t)=\prod_{j=1}^{n}\left|1-2 i t \lambda_{j}\right|^{-1 / 2}
$$
