---
tag: 7C55SBCTF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Draw a triangle $A B C$ and the midpoint $D$ of side $A B$! Choose a point $P$ on segment $D C$ between $D$ and $C$! Then draw the segments $A P$ and $B P$!

Investigate for any triangle $A B C$ (with $D$ as the midpoint of side $A B$) and for any (point $P$ on $D C$), whether one of the two triangles $A C P, B C P$ has a larger area than the other or whether they have the same area!

b) For any triangle $A B C$, there is exactly one point $Q$ inside it such that the areas of the triangles $A C Q, B C Q$, and $A B Q$ are in the ratio $1: 2: 3$. (This may be used in the following without proof.)

Describe how to find a point $Q$ for any triangle $A B C$, and prove that the stated condition is always satisfied with this - point $Q$ found according to your description!
