---
tag: ATSZKZGH16
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call functions $f=f(x)$ and $g=g(x), x \in \mathbb{R}^{d}$, one-monotonic if

$$
[f(y)-f(x)][g(y)-g(x)] \geqslant 0
$$

for all $x, y \in \mathbb{R}^{d}$. Suppose that the distribution of the random vector $(\xi, \zeta)$ coincides with the distribution of the pair $(\zeta, \xi)$, where $\xi, \zeta$ are random vectors in $\mathbb{R}^{d}$. Prove the following variant of Chebyshev's inequality:

$$
\mathrm{E} f(\xi) g(\xi) \geqslant \mathrm{E} f(\xi) g(\zeta)
$$

In particular, if $\zeta$ is an independent copy of the vector $\xi$, then Chebyshev's inequality can be rewritten as

$$
\operatorname{cov}(f(\xi), g(\xi)) \geqslant 0
$$
