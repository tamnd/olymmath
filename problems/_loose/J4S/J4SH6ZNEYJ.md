---
tag: J4SH6ZNEYJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi=\left(\xi_{1}, \ldots, \xi_{n}\right)$ be a random vector in $\mathbb{R}^{n}$ with a non-degenerate covariance matrix $C=\mathrm{E}(\xi-\mathrm{E} \xi)(\xi-\mathrm{E} \xi)^{\top}$. Prove the following analogue of Chebyshev's inequality:

$$
\mathrm{P}\left((\xi-\mathrm{E} \xi)^{\top} C^{-1}(\xi-\mathrm{E} \xi)>\varepsilon\right) \leqslant \frac{n}{\varepsilon}, \varepsilon>0
$$
