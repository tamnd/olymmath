---
tag: Q60MYKRX97
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the tetrahedron $ABCD$, the point $E$ is the projection of the point $D$ on the plane $(ABC)$. Prove that the following statements are equivalent:
a) $C = E$ or $CE \parallel AB$
b) For each point M belonging to the segment $CD$, the following equation is satisfied
$$S^2_{\vartriangle ABM}= \frac{CM^2}{CD^2}\cdot S^2_{\vartriangle ABD}+\left(1- \frac{CM^2}{CD^2} \right)S^2_{\vartriangle ABC}$$
where $S_{\vartriangle XYZ}$ means the area of triangle $XYZ$.
