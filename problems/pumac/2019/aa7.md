---
tag: W925SJFJC8
kind: problem
appearances:
  - at: pumac/2019/aa7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
A doubly-indexed sequence $a_{m,n}$, for $m$ and $n$ nonnegative integers, is defined as follows.

(a) $a_{m,0}=0$ for all $m>0$ and $a_{0,0}=1$.

(b) $a_{m,1}=0$ for all $m>1$, and $a_{1,1}=1$, $a_{0,1}=0$.

(c) $a_{0,n}=a_{0,n-1}+a_{0,n-2}$ for all $n\ge 2$

(d) $a_{m,n}=a_{m,n-1}+a_{m,n-2}+a_{m-1,n-1}-a_{m-1,n-2}$ for all $m>0$, $n\ge 2$.

Then there exists a unique value of $x$ so $\displaystyle\sum_{m=0}^{\infty}\sum_{n=0}^{\infty}\frac{a_{m,n}x^m}{3^{n-m}}=1$. Find $\lfloor 1000x^2\rfloor$.
