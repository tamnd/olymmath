---
tag: SC81GSB6ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h1666271
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16298
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/2018
    source: hf-ai-mo-aops
    label: 2018 Bundeswettbewerb Mathematik
---
We are given six points in space with distinct distances, no three of them collinear. Consider all triangles with vertices among these points.

Show that among these triangles there is one such that its longest side is the shortest side in one of the other triangles.
