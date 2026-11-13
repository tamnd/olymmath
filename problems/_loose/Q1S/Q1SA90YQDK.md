---
tag: Q1SA90YQDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Oral Moscow Geometry Olympiad
    url: https://artofproblemsolving.com/community/c6h1921482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8496
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-oral-geometry/2012
    source: hf-ai-mo-aops
    label: 2012 Oral Moscow Geometry Olympiad
---
Inside the convex polyhedron, the point $P$ and several lines $\ell_1,\ell_2, ..., \ell_n$ passing through $P$ and not lying in the same plane. To each face of the polyhedron we associate one of the lines $l_1, l_2, ..., l_n$ that forms the largest angle with the plane of this face (if there are there are several direct ones, we will choose any of them). Prove that there is a face that intersects with its corresponding line.
