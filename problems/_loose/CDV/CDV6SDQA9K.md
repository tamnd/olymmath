---
tag: CDV6SDQA9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1232312
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Taiwan TST Round 3
---
There's a convex $3n$ -polygon on the plane with a robot on each of it's vertices. Each robot fires a laser beam toward another robot. On each of your move,you select a robot to rotate counter clockwise until it's laser point a new robot. Three robots $A$ , $B$ and $C$ form a triangle if $A$ 's laser points at $B$ , $B$ 's laser points at $C$ , and $C$ 's laser points at $A$ . Find the minimum number of moves that can guarantee $n$ triangles on the plane.
