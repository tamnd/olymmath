---
tag: XS3CAJTRBH
kind: problem
type: answer
answer: \frac{L^2 - 1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite triangular lattice is given, such that the distance between any two adjacent points is always equal to $1$.
Points $A$, $B$, and $C$ are chosen on the lattice such that they are the vertices of an equilateral triangle of side length $L$, and the sides of $ABC$ contain no points from the lattice. Prove that, inside triangle $ABC$, there are exactly $\frac{L^2-1}{2}$ points from the lattice.
