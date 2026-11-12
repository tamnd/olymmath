---
tag: B67A4SH3AH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3451252
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2024
    source: hf-ai-mo-aops
    label: 2024 Princeton University Math Competition
---
Consider the $100 \times 100$ grid of points with integer coordinates $S=\{(x,y) \in \mathbb{Z}^2\mid$ $1 \le x \le 100,$ $1 \le y$ $\le$ $100\}.$ A set $C$ is formed by selecting each $p \in S$ with probability $\tfrac{1}{2}$ uniformly at random. The *expansion* of $C$ is defined as the set of points $q \in S$ such that $\min_{p \in C} d(q,p) \le 1,$ where $d(q,p)$ denotes the Euclidean distance between $q,p.$ If the expected size of the expansion of $C$ can be written as $\tfrac{A}{B}$ for relatively prime positive integers $A,B,$ find $A+B.$
