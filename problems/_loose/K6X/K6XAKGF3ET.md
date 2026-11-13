---
tag: K6XAKGF3ET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h381104
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44004
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1989
    source: hf-ai-mo-aops
    label: 1989 Iran MO (2nd round)
---
A line $d$ is called *faithful* to triangle $ABC$ if $d$ be in plane of triangle $ABC$ and the reflections of $d$ over the sides of $ABC$ be concurrent. Prove that for any two triangles with acute angles lying in the same plane, either there exists exactly one *faithful* line to both of them, or there exist infinitely *faithful* lines to them.
