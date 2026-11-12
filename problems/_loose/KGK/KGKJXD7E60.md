---
tag: KGKJXD7E60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3528593
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2001
    source: hf-ai-mo-aops
    label: 2001 China Team Selection Test
---
Let the vertex set $ V $ of a graph be partitioned into $ h $ parts $ (V = V_1 \cup V_2 \cup \cdots \cup V_h) $, with $|V_1| = n_1, |V_2| = n_2, \ldots, |V_h| = n_h $. If there is an edge between any two vertices only when they belong to different parts, the graph is called a complete $ h $-partite graph, denoted as $ k(n_1, n_2, \ldots, n_h) $. Let $ n $ and $ r $ be positive integers, $ n \geq 6 $, $ r \leq \frac{2}{3}n $. Consider the complete $ r + 1 $-partite graph $ k\left(\underbrace{1, 1, \ldots, 1}_{r}, n - r\right) $.

Answer the following questions:
1. Find the maximum number of disjoint circles (i.e., circles with no common vertices) in this complete $ r + 1 $-partite graph.
2. Given $ n $, for all $ r \leq \frac{2}{3}n $, find the maximum number of edges in a complete $ r + 1 $-partite graph $ k(1, 1, \ldots, 1, n - r) $ where no more than one circle is disjoint.
