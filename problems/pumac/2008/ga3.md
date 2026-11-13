---
tag: 1P70NTPWYF
kind: problem
appearances:
  - at: pumac/2008/ga3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506294
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73205
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a $12$ -sided regular polygon. If the vertices going clockwise are $A$ , $B$ , $C$ , $D$ , $E$ , $F$ , etc, draw a line between $A$ and $F$ , $B$ and $G$ , $C$ and $H$ , etc. This will form a smaller $12$ -sided regular polygon in the center of the larger one. What is the area of the smaller one divided by the area of the larger one?
