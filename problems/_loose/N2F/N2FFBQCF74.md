---
tag: N2FFBQCF74
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751570
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69835
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2014
    source: hf-ai-mo-aops
    label: 2014 BMT Spring
---
Let a simple polygon be defined as a polygon in which no consecutive sides are parallel and no two non-consecutive sides share a common point. Given that all vertices of a simple polygon $P$ are lattice points (in a Cartesian coordinate system, each vertex has integer coordinates), and each side of $P$ has integer length, prove that the perimeter must be even.
