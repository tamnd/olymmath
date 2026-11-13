---
tag: 73MV0QYPW8
kind: problem
appearances:
  - at: pumac/2025/aa2
    primary: true
  - at: pumac/2025/ab4
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
Let $\star$ be an associative operation on the set of positive real numbers that satisfies
$$\underbrace{x\star x\star\cdots\star x}_{x\text{ appears }k\text{ times}}=\frac{x}{\sqrt{k}}$$
for any positive real number $x$ and positive integer $k$. Let $s_n$ denote the $n$th smallest positive integer with no prime factor greater than $5$. Compute $s_1\star s_2\star s_3\star\cdots$.
