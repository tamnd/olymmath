---
tag: SEM8JS8W12
kind: problem
appearances:
  - at: pumac/2013/ca6
    primary: true
  - at: pumac/2013/cb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10173
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of vertices $v_1,v_2,\ldots,v_k$ in a graph, where $v_i=v_j$ only if $i=j$ and $k$ can be any positive integer, is called a $\textit{cycle}$ if $v_1$ is attached by an edge to $v_2$ , $v_2$ to $v_3$ , and so on to $v_k$ connected to $v_1$ . Rotations and reflections are distinct: $A,B,C$ is distinct from $A,C,B$ and $B,C,A$ . Supposed a simple graph $G$ has $2013$ vertices and $3013$ edges. What is the minimal number of cycles possible in $G$ ?
