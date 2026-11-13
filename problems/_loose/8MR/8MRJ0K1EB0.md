---
tag: 8MRJ0K1EB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235832
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Medians $AD, BE$, and $CF$ of triangle $ABC$ intersect at point $M$. Is it possible that the circles with radii $MD, ME$, and $MF$
a) all have areas smaller than the area of triangle $ABC$,
b) all have areas greater than the area of triangle $ABC$,
c) all have areas equal to the area of triangle $ABC$?
