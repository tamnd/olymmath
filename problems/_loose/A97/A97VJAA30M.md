---
tag: A97VJAA30M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252876
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing a game on a graph with $n\ge3$ vertices. At each moment, Alice needs to choose two vertices so that the graph is connected even if one of them (along with the edges incident to it) is removed. Each turn, Bob removes one edge in the graph, and upon the removal, Alice needs to re-select the two vertices if necessary. However, Bob has to guarantee that after each removal, any two vertices in the graph are still connected via at most $k$ intermediate vertices. Here $0\le k\le n-2$ is some given integer. Suppose that Bob always knows which two vertices Alice chooses, and that initially, the graph is a complete graph. Alice's objective is to change her choice of the two vertices as few times as possible, and Bob's objective is to make Alive re-select as many times as possible. If both Alice and Bob are sufficiently smart, how many times will Alice change her choice of the two vertices?
(usjl)
