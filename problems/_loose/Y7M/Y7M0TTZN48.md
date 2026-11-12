---
tag: Y7M0TTZN48
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h227121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Iran MO (3rd Round)
---
a) Suppose that $ RBR'B'$ is a convex quadrilateral such that vertices $ R$ and $ R'$ have red color and vertices $ B$ and $ B'$ have blue color. We put $ k$ arbitrary points of colors blue and red in the quadrilateral such that no four of these $ k+4$ point (except probably $ RBR'B'$ ) lie one a circle. Prove that exactly one of the following cases occur?
1. There is a path from $ R$ to $ R'$ such that distance of every point on this path from one of red points is less than its distance from all blue points.
2. There is a path from $ B$ to $ B'$ such that distance of every point on this path from one of blue points is less than its distance from all red points.
We call these two paths the blue path and the red path respectively.

Let $ n$ be a natural number. Two people play the following game. At each step one player puts a point in quadrilateral satisfying the above conditions. First player only puts red point and second player only puts blue points. Game finishes when every player has put $ n$ points on the plane. First player's goal is to make a red path from $ R$ to $ R'$ and the second player's goal is to make a blue path from $ B$ to $ B'$ .
b) Prove that if $ RBR'B'$ is rectangle then for each $ n$ the second player wins.
c) Try to specify the winner for other quadrilaterals.
