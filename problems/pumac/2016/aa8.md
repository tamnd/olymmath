---
tag: 1KB8QHQV03
kind: problem
appearances:
  - at: pumac/2016/aa8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Define the function $f:\mathbb{R}\backslash\{-1,1\}\to\mathbb{R}$ to be
$$f(x)=\sum_{a,b=0}^{\infty}\frac{x^{2^a3^b}}{1-x^{2^{a+1}3^{b+1}}}.$$
Suppose that $f(y)-f(\frac{1}{y})=2016$. Then $y$ can be written in simplest form as $\frac{p}{q}$. Find $p+q$. ($\mathbb{R}\backslash\{-1,1\}$ refers to the set of all real numbers excluding $-1$ and $1$.)
