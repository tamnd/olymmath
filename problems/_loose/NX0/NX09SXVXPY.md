---
tag: NX09SXVXPY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59237
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251377
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2016
    source: hf-ai-mo-aops
    label: 2016 Singapore Junior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapur
---
In the triangle $ABC$ , $\angle A=90^\circ$ , the bisector of $\angle B$ meets the altitude $AD$ at the point $E$ , and the bisector of $\angle CAD$ meets the side $CD$ at $F$ . The line through $F$ perpendicular to $BC$ intersects $AC$ at $G$ . Prove that $B,E,G$ are collinear.
