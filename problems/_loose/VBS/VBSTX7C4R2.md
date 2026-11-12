---
tag: VBSTX7C4R2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471740
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
An *augmentation* on a graph $G$ is defined as doing the following:

- Take some set $D$ of vertices in $G$ , and duplicate each vertex $v_i \in D$ to create a new vertex $v_i'$ .

- If there's an edge between a pair of vertices $v_i, v_j \in D$ , create an edge between vertices $v_i'$ and $v_j'$ . If there's an edge between a pair of vertices $v_i \in D$ , $v_j \notin D$ , you can choose to create an edge between $v_i'$ and $v_j$ but do not have to.

A graph is called *reachable* from $G$ if it can be created through some sequence of augmentations on $G$ . Some graph $H$ has $n$ vertices and satisfies that both $H$ and the complement of $H$ are reachable from a complete graph of $2021$ vertices. If the maximum and minimum values of $n$ are $M$ and $m$ , find $M+m$ .

*Proposed by Oliver Hayman*
