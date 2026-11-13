---
tag: RS56RXXZ7G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the triangle $ABC$, we construct a right trapezoid $ABB'A''$ over the side $AB$ as the leg, where $AA''$ and $BB'$ are perpendicular to $AB$ and $AA'' = BC$, $BB' = CA$. The perpendicular bisector of the leg $A''B'$ intersects the line of the leg $AB$ at point $C^*$. Similarly, from the trapezoid $BCC'B''$ (where $BB'' \| CC' \perp BC$, $BB'' = CA$, $CC' = AB$), we obtain the point $A^*$ on the line $BC$, and from the trapezoid $CAA'C''$ (where $CC'' \| AA' \perp CA$, $CC'' = AB$, $AA' = BC$), we obtain the point $B^*$ on the line $CA$.

It is to be proven that erecting perpendiculars to $AB$ at $C^*$, to $BC$ at $A^*$, and to $CA$ at $B^*$, these perpendiculars intersect at a single point.
