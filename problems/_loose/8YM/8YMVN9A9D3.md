---
tag: 8YMVN9A9D3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that any skew-symmetric polynomial $f\left(x_{1}, \ldots, x_{n}\right)$ can be represented in the form

$$
\Delta\left(x_{1}, \ldots, x_{n}\right) g\left(x_{1}, \ldots, x_{n}\right)
$$

where $g$ is a symmetric polynomial.

Let $\lambda=\left(\lambda_{1}, \ldots, \lambda_{n}\right)$ be a partition, i.e., an ordered set of non-negative integers $\lambda_{1} \geqslant \lambda_{2} \geqslant \ldots \geqslant \lambda_{n} \geqslant 0$. We set $|\lambda|=\lambda_{1}+\ldots+\lambda_{n}$. We will consider that $\lambda \geqslant \mu$ if $\lambda_{1}+\ldots+\lambda_{k} \geqslant \mu_{1}+\ldots+\mu_{k}$ for $k=1,2, \ldots, n$.

To each set $\lambda$, we can associate a homogeneous symmetric polynomial

$$
M_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\frac{1}{n!} \sum_{\sigma \in S_{n}} x_{1}^{\lambda_{\sigma(1)}} \ldots x_{n}^{\lambda_{\sigma(n)}}
$$

The degree of this polynomial is $|\lambda|$.

For example, if $\lambda=(1, \ldots, 1)$, then $M_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=x_{1} \ldots x_{n}$. Indeed, the sum (1) in this case consists of $n!$ terms $x_{1} \ldots x_{n}$. And if $\lambda=(n, 0, \ldots, 0)$, then $M_{\lambda}\left(x_{1}, \ldots, x_{n}\right)=\left(x_{1}^{n}+\ldots+x_{n}^{n}\right) / n$. Indeed, the sum (1) in this case consists of $(n-1)!$ terms $x_{1}^{n},(n-1)!$ terms $x_{2}^{n}$, and so on.
