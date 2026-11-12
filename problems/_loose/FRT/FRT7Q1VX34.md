---
tag: FRT7Q1VX34
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random vector in $\mathbb{R}^{n}$ with a non-degenerate covariance matrix $\mathrm{D} X$. Consider the following extremal problem:

$$
\mathrm{E} \ln f(X ; a, \Sigma) \rightarrow \sup _{a, \Sigma}
$$

where the supremum is taken over all vectors $a$ from some set $A \subseteq \mathbb{R}^{n}$ and all positive definite symmetric $(n \times n)$-matrices $\Sigma$, and $f=f(x ; a, \Sigma)$ is the density of the normal distribution $\mathscr{N}(a, \Sigma)$.

Establish that with respect to $a$, this problem is equivalent to the following:

$$
\operatorname{det}\left[\mathrm{E}(X-a)(X-a)^{\top}\right] \rightarrow \inf _{a}
$$

In particular, for $n=1$, we obtain the least squares problem

$$
\mathrm{E}(X-a)^{2} \rightarrow \inf _{a}
$$
