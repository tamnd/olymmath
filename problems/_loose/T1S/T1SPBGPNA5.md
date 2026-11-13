---
tag: T1SPBGPNA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A (not necessarily regular) tetrahedron $A_1A_2A_3A_4$ is given in space. For each pair of indices $1\leq i<j\leq 4$, an ellipsoid with foci $A_i,A_j$ and string length $\ell_{ij}$, for positive numbers $\ell_{ij}$, is given (in all 6 ellipsoids were built).

For each $i=1,2$, a pair of points $X_i\neq X'_i$ was chosen so that $X_i, X'_i$ both belong to all three ellipsoids with $A_i$ as one of their foci. Prove that the lines $X_1X'_1, X_2X'_2$ share a point in space if and only if
$$\ell_{13}+\ell_{24}=\ell_{14}+\ell_{23}$$
*Remark: An ellipsoid with foci $P,Q$ and string length $\ell>|PQ|$ is defined here as the set of points $X$ in space for which $|XQ|+|XP|=\ell$.*
