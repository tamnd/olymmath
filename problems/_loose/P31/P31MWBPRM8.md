---
tag: P31MWBPRM8
kind: problem
type: answer
answer: n^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $n$ be a positive integer. Two players are playing a game in a field of a shape of a $2n \times 2n$ grid. Initially, the first player is on the top right point and second player is on the bottom left point. Each player, in his turn, moves to an adjacent point, by passing on an edge, such that none of the players have reached it previously. The first player wants to get back to his start position finally and make a non-self-intersecting closed polygon with maximum possible area. On the other hand, the second player wants to minimize this area. Without considering second's player moves, what would be the maximum possible area that first player can always achieve?
