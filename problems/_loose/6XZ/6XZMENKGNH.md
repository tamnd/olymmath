---
tag: 6XZMENKGNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1222030
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Construction Mayhem University has been on a mission to expand and improve its campus! The university has recently adopted a new construction schedule where a new project begins every two days. Each project will take exactly one more day than the previous one to complete (so the first project takes 3, the second takes 4, and so on.)

Suppose the new schedule starts on Day 1. On which day will there first be at least $10$ projects in place at the same time?
