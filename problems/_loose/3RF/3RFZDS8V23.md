---
tag: 3RFZDS8V23
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$, a loop of length $k$ in a graph is a list $v_1, e_1, v_2, e_2, \dots, v_k, e_k$, where the $v_i$ are (not necessarily distinct) vertices, the $e_i$ are (not necessarily distinct) edges, and each $e_i$ joins $v_i$ and $v_{i+1}$ (indices are reduced modulo $k$); the loop traces an edge $e$ if $e = e_i$ for some index $i$. Show that a connected graph with vertex set $V$ and edge set $E$ has a loop of length at most $|V| + |E| - 1$ tracing every edge of the graph.
