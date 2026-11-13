---
tag: ESGY99E0XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the polynomial $P(x)=x^{n}+a_{n-1} x^{n-1}+\ldots+a_{1} x+a_{0}$ have roots $x_{1}, x_{2}, \ldots, x_{n}$, such that $\left|x_{1}\right|>\left|x_{2}\right|>\ldots>\left|x_{n}\right|$. In problem 60965, a method was presented for constructing a polynomial $Q(x)$ of degree $n$ whose roots are the numbers $x_{1}^{2}, x_{2}^{2}, \ldots, x_{n}^{2}$. Based on this reasoning, Lobachevsky devised a method for the approximate search for the roots of the polynomial $P(x)$. It consists of the following. A sequence of polynomials $P_{0}(x), P_{1}(x)$, $P_{2}(x), \ldots$ is constructed such that $P_{0}(x)=P(x)$ and the polynomial $P_{k}(x)$ has roots $x_{1}^{2^{k}}, \ldots, x_{n}^{2^{k}}$. Let

$P_{k}(x)=x^{n}+a_{n-1}^{(k)} x^{n-1}+\ldots+a_{1}^{(k)} x+a_{0}^{(k)}$. Prove that

a) $\lim _{k \rightarrow \infty}\left(-a_{n-1}^{(k)}\right)^{2^{-k}}=\left|x_{1}\right|$

b) $\lim _{k \rightarrow \infty}\left(-\frac{a_{n-l}^{(k)}}{a_{n-l+1}^{(k)}}\right)^{2^{-k}}=\left|x_{l}\right|(1<l \leq n)$.
