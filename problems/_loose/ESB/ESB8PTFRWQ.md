---
tag: ESB8PTFRWQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537988
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35749
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
Let $k$ be a given integer, $3 < k \leq n$ . Consider a graph $G$ with $n$ vertices satisfying the condition: for any two non-adjacent vertices $x$ and $y$ in graph $G$ , the sum of their degrees must satisfy $d(x) + d(y) \geq k$ . Please answer the following questions and prove your conclusions.

(1) Suppose the length of the longest path in graph $G$ is $l$ satisfying the inequality $3 \leq l < k$ , does graph $G$ necessarily contain a cycle of length $l+1$ ? (The length of a path or cycle refers to the number of edges that make up the path or cycle.)

(2) For the case where $3 < k \leq n-1$ and graph $G$ is connected, can we determine that the length of the longest path in graph $G$ , $l \geq k$ ?

(3) For the case where $3 < k = n-1$ , is it necessary for graph $G$ to have a path of length $n-1$ (i.e., a Hamiltonian path)?
