---
tag: F7WTMTD6PR
kind: problem
type: answer
answer: '|\alpha-20|<21'''''
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
G. Cesaro in 1925 provided the following procedure for the approximate construction of the central angle (20°) corresponding to one side of a regular 18-sided polygon. Using a 7-digit function table, it was determined that the error of the angle is less than 4". Our task is to determine the error bound for the angle if only a school (4-digit) function table is available. (We note that the square root of a rational number can, of course, be determined to any desired accuracy without using a table.)

The construction: the two perpendicular radii $O A, O C$ of the circle $k$ with center $O$, the midpoint $B$ of the smaller arc $A C$, the intersection point $D$ of the lines $O B$ and $A C$, and $E$ is the point on the ray $B C$ such that $B E = B C + B D$. Furthermore, the perpendicular to $B C$ at $E$ intersects $k$ first at $F$, then the angle in question is the angle $C O F$.
