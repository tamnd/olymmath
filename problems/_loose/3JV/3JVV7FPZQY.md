---
tag: 3JVV7FPZQY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236223
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=31
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2010
    source: hf-mathnet
    label: Estonia Estonija 2010
---
In an acute triangle $ABC$ the angle $C$ is greater than the angle $A$. Let $AE$ be a diameter of the circumcircle of the triangle. Let the intersection point of the ray $AC$ and the tangent of the circumcircle through the vertex $B$ be $K$. The perpendicular to $AE$ through $K$ intersects the circumcircle of the triangle $BCK$ for the second time at point $D$. Prove that $CE$ bisects the angle $BCD$.
