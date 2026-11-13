---
tag: 4XJ65E5QKG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3289156
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2024
    source: hf-ai-mo-aops
    label: 2024 Bulgarian Spring Mathematical Competition
  - at: bg-spring
    source: hf-mathnet
    label: Bulgaria Bulgarian Spring Tournament
---
A graph $G$ is called $\textit{divisibility graph}$ if the vertices can be assigned distinct positive integers such that between two vertices assigned $u, v$ there is an edge iff $\frac{u} {v}$ or $\frac{v} {u}$ is a positive integer. Show that for any positive integer $n$ and $0 \leq e \leq \frac{n(n-1)}{2}$ , there is a $\textit{divisibility graph}$ with $n$ vertices and $e$ edges.
