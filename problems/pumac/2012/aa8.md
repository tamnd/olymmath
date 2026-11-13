---
tag: J99BWP2EQ5
kind: problem
appearances:
  - at: pumac/2012/aa8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n$ is an integer such that $n \ge 2^k$ and $n < 2^{k+1}$ , where $k = 1000$ , compute the following: $$ n - \left( \lfloor \frac{n -2^0}{2^1} \rfloor + \lfloor \frac{n -2^1}{2^2} \rfloor + ...+ \lfloor \frac{n -2^{k-1}}{2^k} \rfloor \right) $$
