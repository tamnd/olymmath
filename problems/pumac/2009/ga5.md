---
tag: Z3AQBMNWRH
kind: problem
appearances:
  - at: pumac/2009/ga5
    primary: true
  - at: pumac/2009/gb7
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
    url: https://artofproblemsolving.com/community/c6h428154
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3975
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206160
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lines $l$ and $m$ are perpendicular. Line $l$ partitions a convex polygon into two parts of equal area, and partitions the projection of the polygon onto $m$ into two line segments of length $a$ and $b$ respectively. Determine the maximum value of $\left\lfloor \frac{1000a}{b} \right\rfloor$ . (The floor notation $\lfloor x \rfloor$ denotes largest integer not exceeding $x$ )
