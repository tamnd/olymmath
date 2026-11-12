---
tag: 7G46ANS4MB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34166
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f: \mathbb{R}^{d} \rightarrow(0, \infty)$ be smooth up to the second order, and for all $x \in \mathbb{R}^{d}$, the following equality holds:

$$
\nabla^{2} h(x)=\nabla^{\top} \nabla h(x)=\sum_{i=1}^{d} h_{x_{i} x_{i}}^{\prime \prime}(x) \leqslant 0, h=\sqrt{f}
$$

Also,

$$
\mathrm{E}\|\nabla \ln f(\xi)\|^{2}<\infty, \mathrm{E} \frac{1}{f(\xi)} \sum_{i=1}^{d} f_{x_{i} x_{i}}^{\prime \prime}(\xi)<\infty
$$

where $\xi$ is a Gaussian vector in $\mathbb{R}^{d}$ with the identity covariance matrix, and

$$
\nabla=\left(\nabla_{1}, \ldots, \nabla_{d}\right), \nabla_{i}=\frac{\partial}{\partial x_{i}}
$$

Prove that, regardless of $\mathrm{E} \xi$, the following inequality holds:

$$
\mathrm{E}\|\xi+\nabla \ln f(\xi)-\mathrm{E} \xi\|^{2} \leqslant \mathrm{E}\|\xi-\mathrm{E} \xi\|^{2}=d
$$

Also derive that for $d \geqslant 3$, the following equalities hold:

$$
\mathrm{E}\left\|\xi+\frac{A \xi}{\xi^{\top} B \xi}-\mathrm{E} \xi\right\|^{2}=d-\mathrm{E} \frac{\xi^{\top} A^{2} \xi}{\left(\xi^{\top} B \xi\right)^{2}}, B=[(\operatorname{tr} A) I-2 A]^{-1} A^{2}
$$

for any symmetric matrix $A$ such that the matrix $(\operatorname{tr} A) I-2 A$ is positive definite.
