---
tag: RPWEB208R1
kind: problem
appearances:
  - at: pumac/2023/ca4
    primary: true
  - at: pumac/2023/cb6
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
A sequence of integers $a_1,a_2,\ldots,a_n$ is said to be sub-Fibonacci if $a_1=a_2=1$ and $a_i\le a_{i-1}+a_{i-2}$ for all $3\le i\le n$. How many sub-Fibonacci sequences are there with 10 terms such that the last two terms are both 20?
