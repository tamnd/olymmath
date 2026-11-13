---
tag: VD62HE1EXJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374862
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25872
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2000
    source: hf-ai-mo-aops
    label: 2000 JBMO ShortLists
---
Let $ABC$ be a triangle. Find all the triangles $XYZ$ with vertices inside triangle $ABC$ such that $XY,YZ,ZX$ and six non-intersecting segments from the following $AX, AY, AZ, BX, BY, BZ, CX, CY, CZ$ divide the triangle $ABC$ into seven regions with equal areas.
