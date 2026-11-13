---
tag: DQTMCQQH79
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1941 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877839
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56568
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1941
    source: hf-ai-mo-aops
    label: 1941 Moscow Mathematical Olympiad
---
Consider $\vartriangle ABC$ and a point $M$ inside it. We move $M$ parallel to $BC$ until $M$ meets $CA$ , then parallel to $AB$ until it meets $BC$ , then parallel to $CA$ , and so on. Prove that $M$ traverses a self-intersecting closed broken line and find the number of its straight segments.
