---
tag: AM7GB5231P
kind: problem
appearances:
  - at: pumac/2023/ga4
    primary: true
  - at: pumac/2023/gb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Geometry_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3275736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73417
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\vartriangle ABC$ be a triangle with $AB = 4$ , $BC = 6$ , and $CA = 5$ . Let the angle bisector of $\angle BAC$ intersect $BC$ at the point $D$ and the circumcircle of $\vartriangle ABC$ again at the point $M\ne A$ . The perpendicular bisector of segment $DM$ intersects the circle centered at $M$ passing through $B$ at two points, $X$ and $Y$ . Compute $AX \cdot AY$ .
