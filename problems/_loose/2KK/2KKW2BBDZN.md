---
tag: 2KKW2BBDZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3524518
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Given an odd integer $n \geq 3$ . Let $V$ be the set of vertices of a regular $n$ -gon, and $P$ be the set of all regular polygons formed by points in $V$ . For instance, when $n=15$ , $P$ consists of $1$ regular $15$ -gon, $3$ regular pentagons, and $5$ regular triangles.

Initially, all points in $V$ are uncolored. Two players, $A$ and $B$ , play a game where they take turns coloring an uncolored point, with player $A$ starting and coloring points red, and player $B$ coloring points blue. The game ends when all points are colored. A regular polygon in $P$ is called $\textit{good}$ if it has more red points than blue points.

Find the largest positive integer $k$ such that no matter how player $B$ plays, player $A$ can ensure that there are at least $k$ $\textit{good}$ polygons.
