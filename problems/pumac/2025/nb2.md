---
tag: 4V8D33SH2F
kind: problem
appearances:
  - at: pumac/2025/nb2
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Number_Theory_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
For a prime $p$, let $\nu_p(n)$ denote the largest nonnegative integer $k$ such that $p^k$ divides $n$. For example, $\nu_3(9)=2$, $\nu_2(12)=2$, and $\nu_5(12)=0$. Find the number of odd primes $p$ less than $100$ such that $\nu_p(2^p-1)=\nu_p(2^{2^p}-1)-\nu_p(2)$.
