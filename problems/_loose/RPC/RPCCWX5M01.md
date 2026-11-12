---
tag: RPCCWX5M01
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747883
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2020
    source: hf-ai-mo-aops
    label: 2020 Princeton University Math Competition
---
Katie has a chocolate bar that is a $5$ -by- $5$ grid of square pieces, but she only wants to eat the center piece. To get to it, she performs the following operations:
i. Take a gridline on the chocolate bar, and split the bar along the line.
ii. Remove the piece that doesn't contain the center.
iii. With the remaining bar, repeat steps $1$ and $2$ .
Determine the number of ways that Katie can perform this sequence of operations so that eventually she ends up with just the center piece.
