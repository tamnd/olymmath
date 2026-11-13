---
tag: DQZASESVR6
kind: problem
appearances:
  - at: pumac/2024/na1
    primary: true
  - at: pumac/2024/nb3
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
    url: https://artofproblemsolving.com/community/c6h3450676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A quadratic polynomial $f(x) = Ax^2 + Bx + C$ is *small* if $A, B, C$ are single-digit positive integers. It is *full* if there are only finitely many positive integers that cannot be expressed as $f(x) + 3y$ for some positive integers $x$ and $y.$ Find the number of quadratic polynomials that are both small and full.
