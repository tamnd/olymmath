---
tag: ZDP6K0EKEF
kind: problem
appearances:
  - at: pumac/2008/ga4
    primary: true
  - at: pumac/2008/gb7
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
    url: https://artofproblemsolving.com/community/c6h506295
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73206
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many ordered pairs of real numbers $(x, y)$ are there such that $x^2+y^2 = 200$ and
$$\sqrt{(x-5)^2+(y-5)^2}+\sqrt{(x+5)^2+(y+5)^2}$$
is an integer?
