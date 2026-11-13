---
tag: 23HKFN1NC1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208911
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=53
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A regular tetrahedron of height $h$ has a tetrahedron of height $xh$ cut off by a plane parallel to the base. When the remaining frustrum is placed on one of its slant faces on a horizontal plane, it is just on the point of falling over. (In other words, when the remaining frustrum is placed on one of its slant faces on a horizontal plane, the projection of the center of gravity G of the frustrum is a point of the minor base of this slant face.)
Show that $x$ is a root of the equation $x^3 + x^2 + x = 2$.
