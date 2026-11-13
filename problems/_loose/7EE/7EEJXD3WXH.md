---
tag: 7EEJXD3WXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are distinct points $O, A, B, K_1, . . . , K_n, L_1, . . . , L_n$ on a plane such that no three points are collinear. The open line segments $K_1L_1, . . . , K_nL_n$ are coloured red, other points on the plane are left uncoloured. An allowed path from point $O$ to point $X$ is a polygonal chain with first and last vertices at points $O$ and $X$, containing no red points. For example, for $n = 1$, and $K_1 = (-1, 0)$, $L_1 = (1, 0)$, $O = (0,-1)$, and $X = (0,1)$, $OK_1X$ and $OL_1X$ are examples of allowed paths from $O$ to $X$, there are no shorter allowed paths. Find the least positive integer n such that it is possible that the first vertex that is not $O$ on any shortest possible allowed path from $O$ to $A$ is closer to $B$ than to $A$, and the first vertex that is not $O$ on any shortest possible allowed path from $O$ to $B$ is closer to $A$ than to $B$.
