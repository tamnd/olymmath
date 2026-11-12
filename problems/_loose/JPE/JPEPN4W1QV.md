---
tag: JPEPN4W1QV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K=K(s, t)$ be a continuous real covariance function on $[a, b]^{2} \subset \mathbb{R}^{2}$. Verify the continuity and self-adjointness in $L^{2}[a, b]$ of the operator

$$
A f(s)=\int_{a}^{b} K(s, t) f(t) d t
$$

By applying the Hilbert-Schmidt theorem and considering the compactness of the operator $A$, prove Mercer's theorem: the equation

$$
\int_{a}^{b} K(s, t) \phi(t) d t=\lambda \phi(s), a \leqslant s \leqslant b
$$

for an infinite number of values $\lambda=\lambda_{n} \geqslant 0, n \geqslant 1$, has corresponding real solutions $\phi_{n}=\phi_{n}(s), n \geqslant 1$, forming a complete orthonormal system in $L^{2}=L^{2}[a, b]$, such that $\phi_{n}$ is continuous when $\lambda_{n}>0$, and

$$
K(s, t)=\sum_{n=1}^{\infty} \lambda_{n} \phi_{n}(s) \phi_{n}(t)
$$

where the series converges absolutely and uniformly on $[a, b] \times[a, b]$.

From this, derive that a centered Gaussian process $X=\left(X_{t}, t \in[a, b]\right)$ with covariance function $K(s, t)$ can be constructively defined as:

$$
X_{t}=\sum_{n=1}^{\infty} \xi_{n} \sqrt{\lambda_{n}} \phi_{n}(t)
$$

where $\xi_{1}, \xi_{2}, \ldots$ are independent $\mathscr{N}(0,1)$-variables, and the convergence of this series holds almost surely and in $L^{2}$.
