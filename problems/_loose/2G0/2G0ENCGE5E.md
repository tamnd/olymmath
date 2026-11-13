---
tag: 2G0ENCGE5E
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a regular tetrahedron $ABCD$, planes parallel to the faces of the tetrahedron are constructed such that each edge is divided into 6 congruent segments. These planes determine a set of 80 intersection points on the faces, edges, and inside the tetrahedron, denoted by $V$.

Determine the maximum number of elements of a subset $W$ of the set $V \cup \{A, B, C, D\}$ which has the property:

any three distinct points in $W$ are non-collinear, and the plane determined by them is not parallel to any of the faces of the tetrahedron $ABCD$.
