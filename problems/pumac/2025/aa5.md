---
tag: AG49C1EXV2
kind: problem
appearances:
  - at: pumac/2025/aa5
    primary: true
  - at: pumac/2025/ab7
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let $f(x)=2x^2-1$. Find the smallest positive integer $N$ such that the median of the real roots of the polynomial $(\underbrace{f\circ f\circ f\circ\dots f\circ f}_{f\text{ composed }N\text{ times}})(x)-x$ has absolute value at most $2^{-2025}$.
