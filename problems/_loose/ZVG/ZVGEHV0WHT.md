---
tag: ZVGEHV0WHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210980
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a triangle $ABC,$ incircle touches the sides $BC, CA, AB$ at $D, E, F,$ respectively. A circle $\omega$ passing through $A$ and tangent to line $BC$ at $D$ intersects the line segments $BF$ and $CE$ at $K$ and $L,$ respectively. The line passing through $E$ and parallel to $DL$ intersects the line passing through $F$ and parallel to $DK$ at $P.$ If $R_1, R_2, R_3, R_4$ denotes the circumradius of the triangles $AFD, AED, FPD, EPD,$ respectively, prove that $R_1R_4=R_2R_3.$
