---
tag: RKFT7RT68K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420199
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2000
    source: hf-ai-mo-aops
    label: 2000 Cono Sur Olympiad
---
Consider the following transformation of the Cartesian plane: choose a lattice point and rotate the plane $90^\circ$ counterclockwise about that lattice point. Is it possible, through a sequence of such transformations, to take the triangle with vertices $(0,0)$ , $(1,0)$ and $(0,1)$ to the triangle with vertices $(0,0)$ , $(1,0)$ and $(1,1)$ ?
