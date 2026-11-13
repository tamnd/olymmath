---
tag: 5JHD7VMF3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Turkey MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h564742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Turkey MO (2nd round)
---
Let $G$ be a simple, undirected, connected graph with $100$ vertices and $2013$ edges. It is given that there exist two vertices $A$ and $B$ such that it is not possible to reach $A$ from $B$ using one or two edges. We color all edges using $n$ colors, such that for all pairs of vertices, there exists a way connecting them with a single color. Find the maximum value of $n$ .
