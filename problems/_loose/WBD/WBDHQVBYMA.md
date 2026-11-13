---
tag: WBDHQVBYMA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620752
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16826
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
In a rectangular $57\times 57$ grid of cells, $k$ of the cells are colored black. What is the smallest positive integer $k$ such that there must exist a rectangle, with sides parallel to the edges of the grid, that has its four vertices at the center of distinct black cells?

*Proposed by James Lin
