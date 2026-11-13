---
tag: 7WVJZ6EZ45
kind: problem
appearances:
  - at: pumac/2025/na6
    primary: true
  - at: pumac/2025/nb8
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Number_Theory_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Suppose that complex numbers $t_j$ for $0\le j\le 2025$ satisfy
$$\prod_{\substack{0\le a<2025\\ \gcd(a,2025)=1}}\left(x-e^{2\pi ia/2025}\right)=\sum_{j=0}^{2025}t_jx^j.$$
Find the sum of all $j$ such that $t_j\ne 0$.
