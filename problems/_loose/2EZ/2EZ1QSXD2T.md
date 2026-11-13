---
tag: 2EZ1QSXD2T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a point inside a convex 100-gon that does not lie on any diagonal. Initially, none of the vertices of the polygon are colored. Two players, A and B, take turns coloring the vertices, starting with A. On the first turn, A colors two vertices, and on subsequent turns, each player colors one uncolored vertex. If after a player's turn, $X$ is inside a polygon whose vertices are all colored, that player loses the game. Prove that A has a winning strategy.
