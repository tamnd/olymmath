---
tag: T7HP1DKS6G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3132926
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57500
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2023
    source: hf-ai-mo-aops
    label: 2023 Saint Petersburg Mathematical Olympiad
---
Let $G$ be a connected graph and let $X, Y$ be two disjoint subsets of its vertices, such that there are no edges between them. Given that $G/X$ has $m$ connected components and $G/Y$ has $n$ connected components, what is the minimal number of connected components of the graph $G/(X \cup Y)$ ?
