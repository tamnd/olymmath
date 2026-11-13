---
tag: S3GEHETG21
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h616243
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39293
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1982
    source: hf-ai-mo-aops
    label: 1982 Bundeswettbewerb Mathematik
---
Suppose $P$ is a point inside a convex $2n$ -gon, such that $P$ does not lie on any diagonal. Show that $P$ lies inside an even number of triangles whose vertices are vertices of the polygon.
