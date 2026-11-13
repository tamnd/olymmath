---
tag: F9RTYW2V94
kind: problem
type: answer
answer: <0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$ such that the equation

$$
a x^{2}-(a+3) x+2=0
$$

admits two real roots of opposite signs.

Proposition 3.36 (Viète's Relations in the General Case). Let $P(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{1} x+a_{0} \in \mathbb{K}[X]$ with $a_{n} \neq 0$. If $\alpha_{1}, \ldots, \alpha_{n}$ are the roots of $P$, then, for $1 \leqslant k \leqslant n$,

$$
\sigma_{k}=\sum_{1 \leqslant i_{1}<\cdots<i_{k} \leqslant n} \alpha_{i_{1}} \cdots \alpha_{i_{k}}
$$

we have:

$$
\sigma_{k}=(-1)^{k} \frac{a_{n-k}}{a_{n}}
$$

For example:

$$
\sum_{i=1}^{n} \alpha_{i}=-\frac{a_{n-1}}{a_{n}}, \sum_{1 \leqslant i<j \leqslant n} \alpha_{i} \alpha_{j}=-\frac{a_{n-2}}{a_{n}}, \ldots, \prod_{i=1}^{n} \alpha_{i}=(-1)^{n} \frac{a_{0}}{a_{n}}
$$

Remark 3.37. The $\sigma_{1}, \ldots, \sigma_{n}$ are called the elementary symmetric functions of the $\alpha_{i}$. Symmetric, because a permutation of the $\alpha_{i}$ leaves the $\sigma_{k}$ invariant. Elementary, because it can be shown that any symmetric expression in $n$ variables can be expressed polynomially using these elementary symmetric functions. More precisely, if $P\left(x_{1}, \ldots, x_{n}\right)$ is a polynomial in $n$ variables (the reader is left to imagine what this is) such that for any permutation $\sigma$ of $\{1, \ldots, n\}$ we have $P\left(x_{1}, \ldots, x_{n}\right)=P\left(x_{\sigma(1)}, \ldots, x_{\sigma(n)}\right)$, then there exists a polynomial in $n$ variables $R$ such that $P\left(x_{1}, \ldots, x_{n}\right)=R\left(\alpha_{1}, \ldots, \alpha_{n}\right)$.

Example 3.38. Noting $\alpha_{1}=x_{1}+x_{2}+x_{3}, \alpha_{2}=x_{1} x_{2}+x_{1} x_{3}+x_{2} x_{3}$ and $\alpha_{3}=x_{1} x_{2} x_{3}$, we have:

$$
x_{1}^{3}+x_{2}^{3}+x_{3}^{3}=\alpha_{1}^{3}-3 \alpha_{1} \alpha_{2}+3 \alpha_{3}
$$

In short, when dealing with symmetric quantities, it can sometimes be judicious to involve the associated elementary symmetric functions.
