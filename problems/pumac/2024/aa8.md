---
tag: ARJHSM9X40
kind: problem
appearances:
  - at: pumac/2024/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Algebra_A.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450599
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[n]$ denote the set of integers $0, 1, \ldots, n-1.$ Let $\omega_n=e^{2\pi i/n}.$ Let $$ f(n) = \prod_{\overset{i \in [n]}{\gcd(i,n)=1}} \prod_{\overset{j \in [n]}{\gcd(j,n)=1}} (\omega_n^i - \omega_n^j). $$ Then, $f(2024)=2^{e_1} \cdot 11^{e_2} \cdot 23^{e_3}$ for positive integers $e_1, e_2, e_3.$ Find $e_1+e_2+e_3.$
