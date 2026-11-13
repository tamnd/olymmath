---
tag: XBHYT279CK
kind: problem
appearances:
  - at: pumac/2012/na3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let the sequence $\{x_n\}$ be defined by $x_1\in\{5,7\}$ and, for $k\ge 1$, $x_{k+1}\in\{5^{x_k},7^{x_k}\}$. For example, the possible values of $x_3$ are $5^{5^5}$, $5^{5^7}$, $5^{7^5}$, $5^{7^7}$, $7^{5^5}$, $7^{5^7}$, $7^{7^5}$, and $7^{7^7}$. Determine the sum of all possible values for the last two digits of $x_{2012}$.
