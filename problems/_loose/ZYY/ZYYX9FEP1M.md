---
tag: ZYYX9FEP1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let
$$
\mu(k)=\left\{\begin{array}{ll}
0 & k \text { has a square factor, } \\
(-1)^{r} & k \text { is square-free and has } r \text { distinct prime factors. }
\end{array}\right.
$$

For a positive integer $n$, let $P_{n}(x)=\sum_{k \mid n} \mu(k) x^{\frac{n}{k}}$.
For an $m$-degree monic polynomial $f(x)$ with integer coefficients, let its $m$ roots in the complex field be $z_{1}, z_{2}, \ldots, z_{m}$. Prove that for any positive integer $n$, we have
$$
n \mid P_{n}\left(z_{1}\right)+P_{n}\left(z_{2}\right)+\ldots+P_{n}\left(z_{m}\right)
$$
