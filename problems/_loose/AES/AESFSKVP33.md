---
tag: AESFSKVP33
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Istmo Centroamericano MO
    url: https://artofproblemsolving.com/community/c6h2667481
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29509
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: istmo/2019
    source: hf-ai-mo-aops
    label: 2019 Istmo Centroamericano MO
---
Gabriel plays to draw triangles using the vertices of a regular polygon with $2019$ sides, following these rules:
(i) The vertices used by each triangle must not have been previously used.
(ii) The sides of the triangle to be drawn must not intersect with the sides of the triangles previously drawn.
If Gabriel continues to draw triangles until it is no longer possible, determine the minimum number of triangles that he drew.
