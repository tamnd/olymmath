---
tag: AGKA3GF41H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the fact that the function

$$
R_{1}(s, t)=\frac{|t|+|s|}{2}-\frac{|s-t|}{2}=s \wedge t, s, t \in \mathbb{R}
$$

is non-negatively defined, prove the non-negative definiteness of the function

$$
R_{n}(s, t)=\frac{|t|+|s|}{2}-\frac{|s-t|}{2}, s, t \in \mathbb{R}^{n}
$$

Establish a similar result for

$$
R_{n}(s, t ; \alpha)=\frac{|t|_{\alpha}+|s|_{\alpha}}{2}-\frac{|s-t|_{\alpha}}{2}, s, t \in \mathbb{R}^{n}
$$

where $1<\alpha<2$ and $\left|\left(t_{1}, \ldots, t_{n}\right)\right|_{\alpha}=\left(\left|t_{1}\right|^{\alpha}+\ldots+\left|t_{n}\right|^{\alpha}\right)^{1 / \alpha}$.

Remark. Let $(T, \rho)$ be a metric space with some fixed point $\theta$. The Lévy Brownian function is a Gaussian process $\left(L_{t}\right)_{t \in T}$ with zero mean and covariance function

$$
R(s, t)=\frac{\rho(t, \theta)+\rho(s, \theta)}{2}-\frac{\rho(s, t)}{2}, s, t \in T
$$
