---
tag: NXW6RSQ0GZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Omega=\mathbb{Z}_{+}$ and

$$
\mathrm{P}_{\lambda}(\omega=k)=e^{-\lambda} \frac{\lambda^{k}}{k!}, k \geqslant 0,
$$

be the Poisson distribution on $\Omega$ with parameter $\lambda>0$. Show that for the parameter $1 / \lambda$ there does not exist an unbiased estimator $T=T(\omega)$, i.e., such that for all $\lambda>0$ the conditions

$$
\mathrm{E}_{\lambda}|T|<\infty, \mathrm{E}_{\lambda} T=\frac{1}{\lambda}
$$

are satisfied.
