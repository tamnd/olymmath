---
tag: JRSKTS2E6H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h357587
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2010
    source: hf-ai-mo-aops
    label: 2010 Tuymaada Olympiad
---
(I'll skip over the whole "dressing" of the graph in cities and flights [Mod edit: Shu has posted the "dressed-up" version below])

For an ordinary directed graph, show that there is a subset A of vertices such that: $1.$ There are no edges between the vertices of A. $2.$ For any vertex $v$ , there is either a direct way from $v$ to a vertex in A, or a way passing through only one vertex and ending in A (like $v$ -> $v'$ -> $a$ , where $a$ is a vertex in A)
