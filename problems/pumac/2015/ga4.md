---
tag: 5KTSFHAC30
kind: problem
appearances:
  - at: pumac/2015/ga4
    primary: true
  - at: pumac/2015/gb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1600574
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest $r$ such that $4$ balls each of radius $r$ can be packed into a regular tetrahedron with side length $1$ . In a packing, each ball lies outside every other ball, and every ball lies inside the boundaries of the tetrahedron. If $r$ can be expressed in the form $\frac{\sqrt{a}+b}{c}$ where $a, b, c$ are integers such that $\gcd(b, c) = 1$ , what is $a + b + c$ ?
