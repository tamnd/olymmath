---
tag: CEMXM3FXP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2021
    url: https://artofproblemsolving.com/community/c6h3036790
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57243
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2021
    source: hf-ai-mo-aops
    label: Russian TST 2021
---
Given a natural number $n\geqslant 2$ , find the smallest possible number of edges in a graph that has the following property: for any coloring of the vertices of the graph in $n{}$ colors, there is a vertex that has at least two neighbors of the same color as itself.
