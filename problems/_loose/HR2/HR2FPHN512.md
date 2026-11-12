---
tag: HR2FPHN512
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h5976
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2004
    source: hf-ai-mo-aops
    label: 2004 Germany Team Selection Test
---
We consider graphs with vertices colored black or white. "Switching" a vertex means: coloring it black if it was formerly white, and coloring it white if it was formerly black.

Consider a finite graph with all vertices colored white. Now, we can do the following operation: Switch a vertex and simultaneously switch all of its neighbours (i. e. all vertices connected to this vertex by an edge). Can we, just by performing this operation several times, obtain a graph with all vertices colored black?

[It is assumed that our graph has no loops (a *loop* means an edge connecting one vertex with itself) and no multiple edges (a *multiple edge* means a pair of vertices connected by more than one edge).]
