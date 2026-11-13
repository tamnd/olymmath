---
tag: D80J1S8VG5
kind: problem
appearances:
  - at: pumac/2025/na7
    primary: true
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
For a positive integer $n$, let $\operatorname{rad}(n)$ denote the product of the unique prime divisors of $n$, where $\operatorname{rad}(1)=1$. For example, $\operatorname{rad}(12)=2\cdot 3=6$. Find the sum of all integers $n$ satisfying
$$\sum_{d\mid n}\operatorname{rad}(d)=n.$$
(The sum is over all positive integer divisors $d$ of $n$.)
