---
tag: B7FGTHEVYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
A point $X$ is chosen inside a convex 100-gon ($X$ does not lie on sides or diagonals of the 100-gon). Initially, the vertices of the polygon are not marked. Pete and Bazil mark the vertices in turn. Pete starts and marks two vertices by his first move; after that, by any move a player marks one vertex. If after someone's move the point $X$ appears to lie inside a polygon whose vertices are all marked, the player who made this move loses the game. Prove that Pete has a winning strategy.
