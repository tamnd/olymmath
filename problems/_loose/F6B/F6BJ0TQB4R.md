---
tag: F6BJ0TQB4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $n$ is a prime number, then the AKS algorithm correctly indicates that $n$ is prime.

Conversely, we only need to prove the following result.

Theorem 2.4.6 (AKS Theorem).

Let $n \geqslant 2$ be an integer, $p$ the smallest prime factor of $n$, $r \geq 4 \log _{2}(n)$ modulo $r$, and $H(X)$ an irreducible factor of the cyclotomic polynomial $\phi_{r}(X)$ in $\mathbb{Z} / p \mathbb{Z}$. If $(X+a)^{n} \equiv X^{n}+a(\bmod H(X), p)$ for all $a \leqslant 2 \sqrt{r} \log _{2}(n)$, then $n$ is a power of $p$.

We will proceed by contradiction. We will assume from now on that the integers $n, p$, and $r$ and the polynomial $H(X)$ are fixed such that $n$ is not a power of $p$ but $(X+a)^{n} \equiv X^{n}+a(\bmod H(X), p)$ for all $a \leqslant 2 \sqrt{r} \log _{2}(n)$. We will denote $d$ the degree of $H(X)$ and $\lambda$ the integer $\left\lfloor 2 \sqrt{r} \log _{2}(n)\right\rfloor$.

First, let's show that we can work directly modulo $p$ and $H(X)$ without too many concerns.
