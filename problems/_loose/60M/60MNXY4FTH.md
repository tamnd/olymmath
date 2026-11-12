---
tag: 60MNXY4FTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [105].) Let $\xi$ and $\zeta$ be independent random variables, where $\xi$ has a gamma distribution with parameters $(\gamma, \lambda)$, and $\zeta$ has a beta distribution with parameters $(\alpha, \gamma-\alpha)$ for some $\alpha, \gamma, 0<\alpha<\gamma, \lambda>0$.

Using the fact that the Laplace transform $\phi(s)=\mathrm{E} e^{-s \zeta \xi}$ of the random variable $\zeta \xi$ uniquely determines its distribution, prove that $\zeta \xi$ has a gamma distribution with parameters $(\gamma, \lambda)$.
