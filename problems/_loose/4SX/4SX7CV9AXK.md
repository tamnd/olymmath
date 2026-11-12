---
tag: 4SX7CV9AXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Francophone Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3292312
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: francophone/2024
    source: hf-ai-mo-aops
    label: 2024 Francophone Mathematical Olympiad
---
Given $n \ge 2$ points on a circle, Alice and Bob play the following game. Initially, a tile is placed on one of the points and no segment is drawn.
The players alternate in turns, with Alice to start. In a turn, a player moves the tile from its current position $P$ to one of the $n-1$ other points $Q$ and draws the segment $PQ$ . This move is not allowed if the segment $PQ$ is already drawn. If a player cannot make a move, the game is over and the opponent wins.
Determine, for each $n$ , which of the two players has a winning strategy.
