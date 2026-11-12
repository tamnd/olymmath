---
tag: 55QBSKMG1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [52].) Let $X_{1}, \ldots, X_{n} (n \geqslant 1)$ be i.i.d. non-negative random variables with density $f=f(x)$,

$$
S_{n}=X_{1}+\ldots+X_{n} \text { and } M_{n}=\max \left\{X_{1}, \ldots, X_{n}\right\}
$$

Prove that the Laplace transform $\phi_{n}=\phi_{n}(\lambda), \lambda \geqslant 0$, of the ratio $S_{n} / M_{n}$ is given by

$$
\phi_{n}(\lambda)=n e^{-\lambda} \int_{0}^{\infty}\left(\int_{0}^{x} e^{-\lambda y / x} f(y) d y\right)^{n-1} f(x) d x
$$
