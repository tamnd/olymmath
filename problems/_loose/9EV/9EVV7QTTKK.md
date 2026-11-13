---
tag: 9EVV7QTTKK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71332
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
How many non-isomorphic graphs with $9$ vertices, with each vertex connected to exactly $6$ other vertices, are there? (Two graphs are isomorphic if one can relabel the vertices of one graph to make all edges be exactly the same.)
