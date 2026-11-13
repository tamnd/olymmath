---
tag: XRJNYF9DFA
kind: problem
appearances:
  - at: pumac/2008/fa2
    primary: true
  - at: pumac/2008/fb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927077
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73190
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *hypergraph* consists of a set of vertices $V$ and a set of subsets of those vertices, each of which is called an edge. (Intuitively, it's a graph in which each edge can contain multiple vertices). Suppose that in some hypergraph, no two edges have exactly one vertex in common. Prove that one can color this hypergraph's vertices such that every edge contains both colors of vertices.
