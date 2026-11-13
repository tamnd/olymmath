---
tag: CA3388T53X
kind: problem
appearances:
  - at: pumac/2024/na3
    primary: true
  - at: pumac/2024/nb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450681
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73489
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\sigma$ be a permutation of the set $S := \{1, 2, \ldots , 100\},$ such that $\sigma(a+b) \equiv \sigma(a)+\sigma(b) \pmod{100}$ whenever $a, b, a + b \in S.$ Denote by $f(s)$ the sum of the distinct values $\sigma(s)$ can take over all possible $\sigma$ s satisfying the given condition. What is the nonnegative difference between the maximum and minimum value $f$ takes on when ranging over all $s \in S$ ?
