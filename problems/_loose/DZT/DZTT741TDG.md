---
tag: DZTT741TDG
kind: problem
type: answer
answer: \varphi\geq\pi(1-\frac{2}{n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sphere has a regular $n$-sided polygon inscribed in any of its great circles. At each vertex of this polygon, we draw a tangent plane to the sphere. Let $\varphi$ denote the dihedral angle of the resulting solid angle (each one).

Prove that $\varphi \geq \pi\left(1-\frac{2}{n}\right)$.
