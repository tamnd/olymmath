---
tag: EFP9JHRYFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2916289
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34405
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Chile National Olympiad
---
Given a right triangle $T$ , where the coordinates of its vertices are integers, let $E$ be the number of points of integer coordinates that belong to the edge of the triangle $T$ , $I$ the number of points of integer coordinates that belong to the interior of the triangle $T$ . Show that the area $A(T)$ of triangle $T$ is given by: $A(T) = \frac{E}{2}+I -1$ .
