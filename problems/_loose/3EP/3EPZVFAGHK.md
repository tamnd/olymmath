---
tag: 3EPZVFAGHK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a segment of length $f$, we perform the following construction.

We construct an equilateral triangle with side length $2f$, draw a circle around it, and take the midpoints of two of its sides, which are $A$ and $B$.

The intersection point of the ray $AB$ with the circle is $M$, in the triangle $ABD$, $AD = BD = AM$, and finally, in the triangles $BDC$ and $ADE$ constructed outward over the sides $BD$ and $AD$ as bases, $BC = CD = DE = EA = f$.

a) Prove that the pentagon $ABCDE$ is regular.

b) Based on the proof, can any step of the described construction be omitted?

c) Is it advisable to use this procedure instead of the known Ptolemy-Dürer construction if the side of the regular pentagon is given and not the radius of the circumscribed circle? Find a direct procedure for constructing the pentagon based on the described construction if the length of the diagonal is given.
