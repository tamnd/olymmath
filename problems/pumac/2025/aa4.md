---
tag: 5XP7P7GKSA
kind: problem
appearances:
  - at: pumac/2025/aa4
    primary: true
  - at: pumac/2025/ab6
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
Let
$$S=\sum_{j=1}^{2025}\binom{4050}{2025+j}\cos(3j).$$
What is the largest positive integer $n$ such that $2^n$ divides $\lfloor S\rfloor$?
