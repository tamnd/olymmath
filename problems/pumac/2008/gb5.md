---
tag: ZMA4KPB9NE
kind: problem
appearances:
  - at: pumac/2008/gb5
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_GeometryB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two externally tangent circles have radius 2 and radius 3. Two lines are drawn, each tangent to both circles, but not at the point where the circles are tangent to each other. What is the area of the quadrilateral whose vertices are the four points of tangency between the circles and the lines?
