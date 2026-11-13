---
tag: Q7AXF1DS31
kind: problem
appearances:
  - at: pumac/2008/nb7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_NumberTheoryB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927074
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, we consider only polynomials with integer coeffients. Call two polynomials $p$ and $q$ *really close* if $p(2k + 1) \equiv q(2k + 1)$ (mod $210$ ) for all $k \in Z^+$ . Call a polynomial $p$ *partial credit* if no polynomial of lesser degree is *really close* to it. What is the maximum possible degree of *partial credit*?
