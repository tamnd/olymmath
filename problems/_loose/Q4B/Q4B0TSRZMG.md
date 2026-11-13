---
tag: Q4B0TSRZMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247126
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and let $G_n$ be the set of all simple graphs on $n$ vertices. For each vertex $v$ of a graph in $G_n$, let $k(v)$ be the maximal cardinality of an independent set of neighbours of $v$. Determine $max_{G \in G_n} \Sigma_{v\in V (G)}k(v)$ and the graphs in $G_n$ that achieve this value.
