---
tag: 5MRBK46AY8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Malaysia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2596373
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=46995
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: my-omk/2018
    source: hf-ai-mo-aops
    label: 2018 Malaysia National Olympiad
---
Given two triangles with the same perimeter. Both triangles have integer side lengths. The first triangle is an equilateral triangle. The second triangle has a side with length 1 and a side with length $d$ . Prove that when $d$ is divided by 3, the remainder is 1.
