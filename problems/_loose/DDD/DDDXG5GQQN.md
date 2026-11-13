---
tag: DDDXG5GQQN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75669
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=77
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
---
In any triangle $ABC$, where the median $z$ from vertex $C$ is not perpendicular to side $CA$ or side $CB$, let $X$ and $Y$ be the intersections of the perpendicular bisector of this median with the lines $CA$ and $CB$. Find all such triangles $ABC$ for which the points $A, B, X, Y$ lie on the same circle.

(Ján Mazák)
