---
tag: 84X2K989SK
kind: problem
appearances:
  - at: pumac/2009/ga6
    primary: true
  - at: pumac/2009/gb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2009 official paper
    url: https://pumac.princeton.edu/s/PUMaC2009_GeometryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h428155
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3976
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the solid with 4 triangles and 4 regular hexagons as faces, where each triangle borders 3 hexagons, and all the sides are of length 1. Compute the *square* of the volume of the solid. Express your result in reduced fraction and concatenate the numerator with the denominator (e.g., if you think that the square is $\frac{1734}{274}$ , then you would submit 1734274).
