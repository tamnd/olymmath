---
tag: EDPT9PKDJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given points $x_{0}, x_{1}, \ldots, x_{n}$. Prove that the polynomial $f(x)$ of degree $n$, taking values $f\left(x_{0}\right), \ldots, f\left(x_{n}\right)$ at these points, can be represented in the form

$$
\begin{aligned}
& f(x)=f\left(x_{0}\right)+\left(x-x_{0}\right) f\left(x_{0} ; x_{1}\right)+ \\
& +\left(x-x_{0}\right)\left(x-x_{1}\right) f\left(x_{0} ; x_{1} ; x_{2}\right)+\ldots \\
& \ldots+\left(x-x_{0}\right) \ldots\left(x-x_{n-1}\right) f\left(x_{0} ; \ldots ; x_{n}\right)
\end{aligned}
$$

where $f\left(x_{0} ; \ldots ; x_{k}\right)$ depends only on the points $x_{0}, \ldots, x_{k}$ and the values of the polynomial at these points (Newton's interpolation polynomial).

Remark. Newton's interpolation polynomial is convenient in that when adding one point $x_{n+1}$ to $x_{0}, x_{1}, \ldots, x_{n}$, only $f\left(x_{0} ; \ldots ; x_{n+1}\right)$ needs to be computed; the other coefficients, unlike in the Lagrange interpolation polynomial, do not need to be recalculated.
