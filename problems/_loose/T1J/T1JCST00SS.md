---
tag: T1JCST00SS
kind: problem
type: answer
answer: \frac{4}{3}SR
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $A B C$, with area $S$, and the radius of the circumscribed circle is $R$. Perpendiculars are erected at vertices $A$, $B$, and $C$ to the plane of the triangle, and points $A_{1}, B_{1}$, and $C_{1}$ are taken on these perpendiculars such that the segments $A A_{1}, B B_{1}, C C_{1}$ are equal in length to the corresponding altitudes of the triangle dropped from vertices $A, B$, and $C$. Find the volume of the pyramid bounded by the planes $A_{1} B_{1} C$, $A_{1} B C_{1}$, $A B_{1} C_{1}$, and $A B C$.
