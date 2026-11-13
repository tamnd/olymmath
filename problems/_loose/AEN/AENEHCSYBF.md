---
tag: AENEHCSYBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2020
    url: https://artofproblemsolving.com/community/c6h3036799
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57232
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2020
    source: hf-ai-mo-aops
    label: Russian TST 2020
---
There are 10,000 vertices in a graph, with at least one edge coming out of each vertex. Call a set $S{}$ of vertices *delightful* if no two of its vertices are connected by an edge, but any vertex not from $S{}$ is connected to at least one vertex from $S{}$ . For which smallest $m$ is there necessarily a delightful set of at most $m$ vertices?
