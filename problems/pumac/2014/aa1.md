---
tag: Y3NQDB4M7F
kind: problem
appearances:
  - at: pumac/2014/aa1
    primary: true
  - at: pumac/2014/ab3
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
On the number line, consider the point $x$ that corresponds to the value $10$. Consider $24$ distinct integer points $y_1,y_2,\ldots,y_{24}$ on the number line such that for all $k$ such that $1\le k\le 12$, we have that $y_{2k-1}$ is the reflection of $y_{2k}$ across $x$. Find the minimum possible value of
$$\sum_{n=1}^{24}(|y_n-1|+|y_n+1|)$$
