---
tag: JAGFXDQ96N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1406297
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
Every cell of a $2017\times 2017$ grid is colored either black or white, such that every cell has at least one side in common with another cell of the same color. Let $V_1$ be the set of all black cells, $V_2$ be the set of all white cells. For set $V_i (i=1,2)$ , if two cells share a common side, draw an edge with the centers of the two cells as endpoints, obtaining graphs $G_i$ . If both $G_1$ and $G_2$ are connected paths (no cycles, no splits), prove that the center of the grid is one of the endpoints of $G_1$ or $G_2$ .
