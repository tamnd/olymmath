---
tag: 3EG14TSRX2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A tetrahedron (three-sided pyramid) has a sphere that touches its faces from the inside. The tangent planes of this sphere, parallel to the faces of the tetrahedron with areas $t_{1}, t_{2}, t_{3}, t_{4}$, cut out triangles from the tetrahedron with areas $\tau_{1}, \tau_{2}, \tau_{3}, \tau_{4}$, respectively. Prove that

$$
S=\frac{\tau_{1}}{t_{1}}+\frac{\tau_{2}}{t_{2}}+\frac{\tau_{3}}{t_{3}}+\frac{\tau_{4}}{t_{4}} \geq 1
$$

When does the equality hold?
