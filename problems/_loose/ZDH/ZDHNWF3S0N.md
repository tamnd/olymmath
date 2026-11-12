---
tag: ZDHNWF3S0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3039497
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2023
    source: hf-ai-mo-aops
    label: 2023 Bulgarian Spring Mathematical Competition
---
Given is a set $A$ of $n$ elements and positive integers $k, m$ such that $4 \leq k <n$ and $m \leq \min \{k-3, \frac {n} {2}\}$ . Let $A_1, A_2, \ldots, A_l$ be subsets of $A$ , all with size $k$ , such that $|A_i \cap A_j| \leq m$ for all $i \neq j$ . Prove that there exists a subset $B$ of $A$ with at least $\sqrt[m+1]{n}+m$ elements which doesn't contain entirely any of the subsets $A_1, A_2, \ldots, A_l$ .
