---
tag: F6AN4DRGB7
kind: problem
appearances:
  - at: pumac/2014/aa8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2014 official paper
    url: https://pumac.princeton.edu/s/PUMaC2014_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
For nonnegative integer $n$, the following are true:

$f(0)=0$

$f(1)=1$

$f(n)=f\left(n-\frac{m(m-1)}{2}\right)-f\left(\frac{m(m+1)}{2}-n\right)$ for integer $m$ satisfying $m\ge 2$ and $\frac{m(m-1)}{2}<n\le\frac{m(m+1)}{2}$.

Find the smallest $n$ such that $f(n)=4$.
