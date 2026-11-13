---
tag: 4W8FA2KMZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1954 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1895116
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56760
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1954
    source: hf-ai-mo-aops
    label: 1954 Moscow Mathematical Olympiad
---
Given a piece of graph paper with a letter assigned to each vertex of every square such that on every segment connecting two vertices that have the same letter and are on the same line of the mesh, there is at least one vertex with another letter. What is the least number of distinct letters needed to plot such a picture, along the sides of the cells?
