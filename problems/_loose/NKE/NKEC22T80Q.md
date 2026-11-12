---
tag: NKEC22T80Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1991
    source: hf-ai-mo-aops
    label: 1991 Romania Team Selection Test
---
Let $A_1A_2A_3A_4$ be a tetrahedron. For any permutation $(i, j,k,h)$ of $1,2,3,4$ denote:
- $P_i$ - the orthogonal projection of $A_i$ on $A_jA_kA_h$ ;
- $B_{ij}$ - the midpoint of the edge $A_iAj$ ,
- $C_{ij}$ - the midpoint of segment $P_iP_j$ - $\beta_{ij}$ - the plane $B_{ij}P_hP_k$ - $\delta_{ij}$ - the plane $B_{ij}P_iP_j$ - $\alpha_{ij}$ - the plane through $C_{ij}$ orthogonal to $A_kA_h$ - $\gamma_{ij}$ - the plane through $C_{ij}$ orthogonal to $A_iA_j$ .
Prove that if the points $P_i$ are not in a plane, then the following sets of planes are concurrent:
(a) $\alpha_{ij}$ , (b) $\beta_{ij}$ , (c) $\gamma_{ij}$ , (d) $\delta_{ij}$ .
