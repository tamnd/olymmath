---
tag: PDDG0YDMYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3389452
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2024
    source: hf-ai-mo-aops
    label: 2024 Indonesia MO
---
Suppose $A_1 A_2 \ldots A_n$ is an $n$ -sided polygon with $n \geq 3$ and $\angle A_j \leq 180^{\circ}$ for each $j$ (in other words, the polygon is convex or has fewer than $n$ distinct sides).

For each $i \leq n$ , suppose $\alpha_i$ is the smallest possible value of $\angle{A_i A_j A_{i+1}}$ where $j$ is neither $i$ nor $i+1$ . (Here, we define $A_{n+1} = A_1$ .) Prove that
$$ \alpha_1 + \alpha_2 + \cdots + \alpha_n \leq 180^{\circ} $$ and determine all equality cases.
