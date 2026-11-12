---
tag: JKZ1TWN2QV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [45].) Let $(\xi, \eta)$ be a two-dimensional Gaussian vector with $\mathrm{E} \xi = \mathrm{E} \eta = 0, \mathrm{D} \xi = \mathrm{D} \eta = 1$ and correlation coefficient $\rho$. Establish the equality

$$
\mathrm{P}(\xi > a, \eta > b) - \mathrm{P}(\xi > a) \mathrm{P}(\eta > b) = \int_{0}^{\rho} \phi(a, b, r) d r
$$

where $a, b \in \mathbb{R}, \phi(a, b, r)$ is the density of the bivariate distribution

$$
\mathscr{N}\left(\binom{0}{0},\left(\begin{array}{ll}
1 & r \\
r & 1
\end{array}\right)\right)
$$

Using Hoeffding's formula

$\operatorname{cov}(f(\xi), f(\eta)) = \int_{\mathbb{R}^{2}}[\mathrm{P}(\xi > a, \eta > b) - \mathrm{P}(\xi > a) \mathrm{P}(\eta > b)] f^{\prime}(a) g^{\prime}(b) d a d b$

and the given equality, establish that

$$
\operatorname{cov}(f(\xi), g(\eta)) = \int_{0}^{\rho} \mathrm{E} f^{\prime}\left(\xi_{r}\right) g^{\prime}\left(\eta_{r}\right) d r
$$

for such smooth functions $f$ and $g$ that $\mathrm{E}|f(\xi) g(\eta)| < \infty$, when $\left(\xi_{r}, \eta_{r}\right)$ is a Gaussian vector with density $\phi(a, b, r)$.
