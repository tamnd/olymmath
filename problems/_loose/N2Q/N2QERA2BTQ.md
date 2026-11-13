---
tag: N2QERA2BTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h84879
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22971
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1997
    source: hf-ai-mo-aops
    label: 1997 IberoAmerican
---
In a triangle $ABC$ , it is drawn a circumference with center in the incenter $I$ and that meet twice each of the sides of the triangle: the segment $BC$ on $D$ and $P$ (where $D$ is nearer two $B$ ); the segment $CA$ on $E$ and $Q$ (where $E$ is nearer to $C$ ); and the segment $AB$ on $F$ and $R$ ( where $F$ is nearer to $A$ ).

Let $S$ be the point of intersection of the diagonals of the quadrilateral $EQFR$ . Let $T$ be the point of intersection of the diagonals of the quadrilateral $FRDP$ . Let $U$ be the point of intersection of the diagonals of the quadrilateral $DPEQ$ .

Show that the circumcircle to the triangle $\triangle{FRT}$ , $\triangle{DPU}$ and $\triangle{EQS}$ have a unique point in common.
