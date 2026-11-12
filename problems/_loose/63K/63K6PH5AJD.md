---
tag: 63K6PH5AJD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2024
    url: https://artofproblemsolving.com/community/c6h3312782
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2024
    source: hf-ai-mo-aops
    label: Kvant 2024
---
A finite set $S{}$ of $n{}$ points is given in the plane. No three points lie on the same line. The number of non-self-intersecting closed $n{}$ -link polylines with vertices at these points will be denoted by $f(S).$ Prove that

- $f(S)>0$ for all sets $S{};$
- $f(S)=1$ if and only if all the points of $S{}$ lie on the convex hull of $S{};$
- if $f(S)>1$ then $f(S)\geqslant n-1$ , with equality if and only if one point of $S$ lies inside the convex hull;

- if exactly two points of $S{}$ lie inside the convex hull, then$$f(S)\geqslant\frac{(n-2)(n-3)}{2}.$$

Let $n\geqslant 3.$ Denote by $F(n)$ the largest possible value of the function $f(S)$ over all admissible sets $S{}$ of $n{}$ points. Prove that $$F(n)\geqslant3\cdot 2^{(n-8)/3}.$$*Proposed by E. Bakaev and D. Magzhanov*
