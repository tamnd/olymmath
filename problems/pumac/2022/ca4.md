---
tag: 3XQFC08XZV
kind: problem
appearances:
  - at: pumac/2022/ca4
    primary: true
  - at: pumac/2022/cb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444933
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C_n$ denote the $n$ -dimensional unit cube, consisting of the $2^n$ points $$ \{(x_1, x_2, \ldots, x_n) \mid x_i \in \{0, 1\} \text{ for all } 1 \le i \le n\}. $$ A tetrahedron is *equilateral* if all six side lengths are equal. Find the smallest positive integer $n$ for which there are four distinct points in $C_n$ that form a non-equilateral tetrahedron with integer side lengths.
