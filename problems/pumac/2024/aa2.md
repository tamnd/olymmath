---
tag: P9DXY1FJMW
kind: problem
appearances:
  - at: pumac/2024/aa2
    primary: true
  - at: pumac/2024/ab4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450301
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ and $g$ be two polynomials such that $f(g(x))=g(f(x))$ . If $g(x)$ is linear but not identically equal to $x$ , and $f(x)=x^3+60x^2+1000x+c$ for some $c$ , find the value of $c$ .

*Clarification*: $g$ is not constant.
