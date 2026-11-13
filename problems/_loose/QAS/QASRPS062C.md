---
tag: QASRPS062C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a graph $G$. An *empty * subgraph of $G$ is a subgraph of $G$ with no edges between its vertices. An edge of $G$ is called *important * if and only if the removal of this edge will increase the size of the maximal empty subgraph.
Suppose that two important edges in $G$ have a common endpoint. Prove there exists a cycle of odd length in $G$.
