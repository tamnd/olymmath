---
tag: Y1DWE75EYM
kind: problem
type: answer
answer: n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the plane of Camelot, King Arthur built a maze $\mathscr{L}$ consisting of $n$ walls, each wall being a straight line (infinitely extended), with no two walls parallel and no three walls having a common point. The wizard Merlin painted one side of each wall entirely red and the other side entirely blue.

At the intersection of two walls, there are four corners: two opposite angles are formed by one red edge and one blue edge, one angle is formed by two red edges, and one angle is formed by two blue edges. At each such intersection, there is a two-way door leading to the two opposite angles formed by edges of different colors.

After Merlin has painted each wall, the witch Morgana arranges some knights in the maze $\mathscr{B}$, who can pass through the doors but not over the walls.

Let $k(\mathscr{D})$ be the maximum value of the positive integer $k$ such that, regardless of how Merlin colors the walls of the maze $\mathscr{L}$, Morgana can always arrange at least $k$ knights so that no two knights ever meet. For each positive integer $n$, find all possible values of $k(\mathscr{D})$, where the maze $\mathscr{E}$ has $n$ walls.
