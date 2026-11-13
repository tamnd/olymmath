---
tag: 8B1T5CBE0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611767
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11679
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $ABC$ be a triangle with area $5$ and $BC = 10.$ Let $E$ and $F$ be the midpoints of sides $AC$ and $AB$ respectively, and let $BE$ and $CF$ intersect at $G.$ Suppose that quadrilateral $AEGF$ can be inscribed in a circle. Determine the value of $AB^2+AC^2.$ *Proposed by Ray Li*
