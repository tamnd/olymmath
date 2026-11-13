---
tag: CJQM0J2QQQ
kind: problem
appearances:
  - at: pumac/2016/aa5
    primary: true
  - at: pumac/2016/ab7
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
Define a sequence $a_i$ as follows: $a_1=181$ and for $i\ge 2$, $a_i=a_{i-1}^2-1$ if $a_{i-1}$ is odd and $a_i=a_{i-1}/2$ if $a_{i-1}$ is even. Find the least $i$ such that $a_i=0$.
