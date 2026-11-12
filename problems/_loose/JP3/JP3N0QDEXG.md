---
tag: JP3N0QDEXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Problem: "Given a part of a spherical surface and a compass; determine the diameter of the sphere using measurements and calculations," is solved as follows: from any point on the spherical surface, a circle is described on this surface with an arbitrary radius $\rho$; on this circle, any three points $\boldsymbol{A}, \boldsymbol{B}, \boldsymbol{C}$ are taken and their mutual distances $a, b, c$ are measured; after some simple calculations, the expression for the desired diameter of the sphere is obtained as

$$
d=\rho^{2}: \sqrt{\rho^{2}-\frac{a^{2} b^{2} c^{2}}{16 p(p-a)(p-b)(p-c)}}
$$

where $2 p=\boldsymbol{a}+\boldsymbol{b}+\boldsymbol{c}$.

Verify the validity of this formula for special values of $\rho, a, b, c$.
