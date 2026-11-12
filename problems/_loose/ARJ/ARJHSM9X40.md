---
tag: ARJHSM9X40
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2024
    source: hf-ai-mo-aops
    label: 2024 Princeton University Math Competition
---
Let $[n]$ denote the set of integers $0, 1, \ldots, n-1.$ Let $\omega_n=e^{2\pi i/n}.$ Let $$ f(n) = \prod_{\overset{i \in [n]}{\gcd(i,n)=1}} \prod_{\overset{j \in [n]}{\gcd(j,n)=1}} (\omega_n^i - \omega_n^j). $$ Then, $f(2024)=2^{e_1} \cdot 11^{e_2} \cdot 23^{e_3}$ for positive integers $e_1, e_2, e_3.$ Find $e_1+e_2+e_3.$
