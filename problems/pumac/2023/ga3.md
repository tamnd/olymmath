---
tag: EY3D1GT3M0
kind: problem
appearances:
  - at: pumac/2023/ga3
    primary: true
  - at: pumac/2023/gb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Geometry_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3275733
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\vartriangle ABC$ be a triangle with $AB = 13$ , $BC = 14$ , and $CA = 15$ . Let $D$ , $E$ , and $F$ be the midpoints of $AB$ , $BC$ , and $CA$ respectively. Imagine cutting $\vartriangle ABC$ out of paper and then folding $\vartriangle AFD$ up along $FD$ , folding $\vartriangle BED$ up along $DE$ , and folding $\vartriangle CEF$ up along $EF$ until $A$ , $B$ , and $C$ coincide at a point $G$ . The volume of the tetrahedron formed by vertices $D$ , $E$ , $F$ , and $G$ can be expressed as $\frac{p\sqrt{q}}{r}$ , where $p$ , $q$ , and $r$ are positive integers, $p$ and $r$ are relatively prime, and $q$ is square-free. Find $p + q + r$ .
