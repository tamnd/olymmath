---
tag: EF80P7PRN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h391143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60052
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2008
    source: hf-ai-mo-aops
    label: 2008 Spain Mathematical Olympiad
---
Let $p\ge 3$ be a prime number. Each side of a triangle is divided into $p$ equal parts, and we draw a line from each division point to the opposite vertex. Find the maximum number of regions, every two of them disjoint, that are formed inside the triangle.
