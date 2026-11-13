---
tag: C6P97SR0WV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a (simple) graph $G$ with $n \geq 2$ vertices $v_1, v_2, \dots, v_n$ and $m \geq 1$ edges, Joël and Robert play the following game with $m$ coins:
[list=i]

- Joël first assigns to each vertex $v_i$ a non-negative integer $w_i$ such that $w_1+\cdots+w_n=m$.

- Robert then chooses a (possibly empty) subset of edges, and for each edge chosen he places a coin on exactly one of its two endpoints, and then removes that edge from the graph. When he is done, the amount of coins on each vertex $v_i$ should not be greater than $w_i$.

- Joël then does the same for all the remaining edges.

- Joël wins if the number of coins on each vertex $v_i$ is equal to $w_i$.

Determine all graphs $G$ for which Joël has a winning strategy.
