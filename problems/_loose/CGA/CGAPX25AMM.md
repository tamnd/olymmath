---
tag: CGAPX25AMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33770
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a polynomial $P=P(x, y)$ of degree $n$ admissible if it has non-zero coefficients for $x^n$ and $y^n$. Let $X$ and $Y$ be such independent random variables that some admissible polynomials $P(X, Y)$ and $Q(X, Y)$ of degrees $n$ and $m$ respectively define independent variables.

It is somewhat surprising that, as established by Zinger, in this case $X$ and $Y$ necessarily have moments of all orders.

(a) Prove this, assuming that $\mathrm{E}|X|^{p}, \mathrm{E}|Y|^{p} < \infty$ for all $p > 0$.

(b) Without assuming the existence of any moments for $X$ and $Y$, establish this statement using II.6.41, assuming for simplicity that the variables $X$ and $Y$ are continuously distributed and unbounded on the entire real line.
