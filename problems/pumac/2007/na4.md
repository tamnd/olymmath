---
tag: GEJE46WAJ8
kind: problem
appearances:
  - at: pumac/2007/na4
    primary: true
  - at: pumac/2007/nb9
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506074
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73102
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263024
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer is called *squarefree* if its only perfect square factor is $1$ . Call a set of positive integers *squarefreeful* if each product of two of its elements is squarefree, and *squarefreefullest* if no positive integer less than the maximum element of the set can be added while preserving the set's squarefreefulness. What is the minimum number of elements in a squarefreefullest set containing $31$ ?
