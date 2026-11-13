---
tag: DE3C08MT0V
kind: problem
appearances:
  - at: pumac/2025/ca1
    primary: true
  - at: pumac/2025/cb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Combinatorics_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
A string of 0s, 1s, and 2s is called *nice* if it doesn't contain "01" or "12", doesn't begin with a "2", and doesn't end with a "0". For example, there are $5$ nice strings of length $3$, namely "002", "021", "022", "102", and "111". Find the number of nice strings of length $7$.
