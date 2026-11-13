---
tag: 2GWEZAKZCY
kind: problem
appearances:
  - at: pumac/2019/aa3
    primary: true
  - at: pumac/2019/ab5
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
Let $Q$ be a quadratic polynomial. If the sum of the roots of $Q^{100}(x)$ (where $Q^i(x)$ is defined by $Q^1(x)=Q(x)$, $Q^i(x)=Q(Q^{i-1}(x))$ for integers $i\ge 2$) is $8$ and the sum of the roots of $Q$ is $S$, compute $|\log_2(S)|$.
