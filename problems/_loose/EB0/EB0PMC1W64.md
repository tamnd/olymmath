---
tag: EB0PMC1W64
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3520905
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 1
---
Alice and Bob are playing game on an $n \times n$ grid. Alice goes first, and they take turns drawing a black point from the coordinate set
$$\{(i, j) \mid i, j \in \mathbb{N}, 1 \leq i, j \leq n\}$$
There is a constraint that the distance between any two black points cannot be an integer. The player who cannot draw a black point loses. Find all integers $n$ such that Alice has a winning strategy.

*Proposed by chengbilly*
