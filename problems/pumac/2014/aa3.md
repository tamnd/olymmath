---
tag: F44TRPYY3M
kind: problem
appearances:
  - at: pumac/2014/aa3
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
A function $f$ has its domain equal to the set of integers $0,1,\ldots,11$, and $f(n)\ge 0$ for all such $n$, and $f$ satisfies

$f(0)=0$

$f(6)=1$

If $x\ge 0$, $y\ge 0$, and $x+y\le 11$, then $f(x+y)=\frac{f(x)+f(y)}{1-f(x)f(y)}$

Find $f(2)^2+f(10)^2$.
