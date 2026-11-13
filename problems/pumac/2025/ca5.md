---
tag: 1MS7TBDZDX
kind: problem
appearances:
  - at: pumac/2025/ca5
    primary: true
  - at: pumac/2025/cb7
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
Alice wants to send Bob the integer $120$, represented as a binary string of length $7$. However, her computer is being bombarded by cosmic rays, which can flip 00 to 11 and vice versa an arbitrary amount of times! Bob receives a possibly altered binary string, and writes down the integer in decimal. Find the sum of the possible numbers Bob could have written down (including $120$ itself).
