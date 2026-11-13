---
tag: YDVWYCBWZ9
kind: problem
appearances:
  - at: pumac/2008/ga7
    primary: true
  - at: pumac/2008/gb9
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
    url: https://artofproblemsolving.com/community/c6h506299
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73209
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{H}$ be the region of points $(x, y)$ , such that $(1, 0), (x, y), (-x, y)$ , and $(-1,0)$ form an isosceles trapezoid whose legs are shorter than the base between $(x, y)$ and $(-x,y)$ . Find the least possible positive slope that a line could have without intersecting $\mathcal{H}$ .
