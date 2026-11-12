---
tag: MN3PJ1RQ3J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Sophia writes an algorithm to solve the graph isomorphism problem. Given a graph $G=(V,E)$ , her algorithm iterates through all permutations of the set $\{v_1, \dots, v_{|V|}\}$ , each time examining all ordered pairs $(v_i,v_j)\in V\times V$ to see if an edge exists. When $|V|=8$ , her algorithm makes $N$ such examinations. What is the largest power of two that divides $N$ ?
