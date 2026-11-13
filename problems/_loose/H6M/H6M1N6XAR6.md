---
tag: H6M1N6XAR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1097774
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32857
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2002
    source: hf-ai-mo-aops
    label: 2002 Olympic Revenge
---
Find all pairs $(m,n)$ of positive integers such that there exists a polyhedron, with all faces being regular polygons, such that each vertex of the polyhedron is the vertex of exactly three faces, two of them having $m$ sides, and the other having $n$ sides.
