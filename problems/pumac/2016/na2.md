---
tag: PE8Q3D2GCZ
kind: problem
appearances:
  - at: pumac/2016/na2
    primary: true
  - at: pumac/2016/nb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2016 official paper
    url: https://pumac.princeton.edu/s/PUMaC2016_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
For positive integers $i$ and $j$, define $d_{(i,j)}$ as follows: $d_{(1,j)}=1$, $d_{(i,1)}=1$ for all $i$ and $j$, and for $i,j>1$, $d_{(i,j)}=d_{(i-1,j)}+d_{(i,j-1)}+d_{(i-1,j-1)}$. Compute the remainder when $d_{(3,2016)}$ is divided by $1000$.
