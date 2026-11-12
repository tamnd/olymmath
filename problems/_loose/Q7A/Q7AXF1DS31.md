---
tag: Q7AXF1DS31
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2008
    source: hf-ai-mo-aops
    label: 2008 Princeton University Math Competition
---
In this problem, we consider only polynomials with integer coeffients. Call two polynomials $p$ and $q$ *really close* if $p(2k + 1) \equiv q(2k + 1)$ (mod $210$ ) for all $k \in Z^+$ . Call a polynomial $p$ *partial credit* if no polynomial of lesser degree is *really close* to it. What is the maximum possible degree of *partial credit*?
