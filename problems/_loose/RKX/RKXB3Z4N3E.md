---
tag: RKXB3Z4N3E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381483
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54027
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Let $X,Y,Z,T$ be four points in the plane. The segments $[XY]$ and $[ZT]$ are said to be *connected*, if there is some point $O$ in the plane such that the triangles $OXY$ and $OZT$ are right-angled at $O$ and isosceles.
Let $ABCDEF$ be a convex hexagon such that the pairs of segments $[AB],[CE],$ and $[BD],[EF]$ are *connected*. Show that the points $A,C,D$ and $F$ are the vertices of a parallelogram and $[BC]$ and $[AE]$ are *connected*.
