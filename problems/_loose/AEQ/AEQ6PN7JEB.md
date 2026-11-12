---
tag: AEQ6PN7JEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h3369534
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Romania EGMO TST
---
In a park there are 23 trees $t_0,t_1,\dots,t_{22}$ in a circle and 22 birds $b_1,n_2,\dots,b_{22}.$ Initially, each bird is in a tree. Every minute, the bird $b_i, 1\leqslant i\leqslant 22$ flies from the tree $t_j{}$ to the tree $t_{i+j}$ in clockwise order, indices taken modulo 23. Prove that there exists a moment when at least 6 trees are empty.
