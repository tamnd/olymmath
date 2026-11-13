---
tag: 7V4XWVEVAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2016319
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4330
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
Suppose that $X$ is an arbitrary point inside a tetrahedron. Through each vertex of the tetrahedron, draw a straight line that is parallel to the line segment connecting $X$ with the intersection point of the medians of the opposite face. Prove that these four lines meet at the same point.
