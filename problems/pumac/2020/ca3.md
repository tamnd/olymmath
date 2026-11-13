---
tag: RPCCWX5M01
kind: problem
appearances:
  - at: pumac/2020/ca3
    primary: true
  - at: pumac/2020/cb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_A-2.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
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
---
Katie has a chocolate bar that is a $5$ -by- $5$ grid of square pieces, but she only wants to eat the center piece. To get to it, she performs the following operations:
i. Take a gridline on the chocolate bar, and split the bar along the line.
ii. Remove the piece that doesn't contain the center.
iii. With the remaining bar, repeat steps $1$ and $2$ .
Determine the number of ways that Katie can perform this sequence of operations so that eventually she ends up with just the center piece.
