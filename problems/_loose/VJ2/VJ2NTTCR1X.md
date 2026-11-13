---
tag: VJ2NTTCR1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1957 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2496106
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56855
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1957
    source: hf-ai-mo-aops
    label: 1957 Moscow Mathematical Olympiad
---
Two rectangles on a plane intersect at eight points. Consider every other intersection point, they are connected with line segments, these segments form a quadrilateral. Prove that the area of this quadrilateral does not vary under translations of one of the rectangles.
