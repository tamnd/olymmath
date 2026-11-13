---
tag: KSH84W47RH
kind: problem
appearances:
  - at: pumac/2025/aa8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Algebra_A.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $S$ be the set of ordered triples of positive integers $(x,y,z)$ such that $y(x+y+z)=zx$ and
$$x^2+y^2+z^2+xy+yz+zx=2\frac{(x+y)(y+z)(z+x)}{x+y+z}+145.$$
Find the sum of $100x+10y+z$ over all $(x,y,z)\in S$.
