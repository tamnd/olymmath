---
tag: AEKHYZE830
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ is a graph and $x$ is a vertex of $G$. Define the transformation $\varphi_{x}$ over $G$ as deleting all incident edges with respect of $x$ and drawing the edges $xy$ such that $y\in G$ and $y$ is not connected with $x$ with edge in the beginning of the transformation. A graph $H$ is called $G-$*attainable* if there exists a sequece of such transformations which transforms $G$ in $H.$ Let $n\in\mathbb{N}$ and $4|n.$ Prove that for each graph $G$ with $4n$ vertices and $n$ edges there exists $G-$*attainable* graph with at least $9n^{2}/4$ triangles.
