---
tag: 5GKE3RH12B
kind: problem
appearances:
  - at: pumac/2017/cb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15922
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Split a face of a regular tetrahedron into four congruent equilateral triangles. How many different ways can the seven triangles of the tetrahedron be colored using only the colors orange and black? (Two tetrahedra are considered to be colored the same way if you can rotate one so it looks like the other.)
