---
tag: M426R8GQKH
kind: problem
appearances:
  - at: pumac/2023/fa1
    primary: true
  - at: pumac/2023/fb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3234683
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let p>3 be a prime and k>0 an integer. Find the multiplicity of X-1 in the factorization of $ f(X)= X^{p^k-1}+X^{p^k-2}+\cdots+X+1$ modulo p;
in other words, find the unique non-negative integer r such that $ (X - 1)^r $ divides f(X)
\modulo p, but $ (X - 1)^{r+1} $ does not divide f(X) \modulo p.
