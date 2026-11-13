---
tag: V2B3VWB81V
kind: problem
appearances:
  - at: pumac/2023/ca8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2023.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3415031
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A spider is walking on the boundary of equilateral triangle $\triangle{ABC}$ (vertices labelled in counterclockwise order), starting at vertex $A$ . Each second, she moves to one of her two adjacent vertices with equal probability. The windiness of a path that starts and ends at $A$ is the net number of counterclockwise revolutions made. For example, the windiness of the path $ABCA$ is $1,$ and the windiness of the path $ABCACBACBA$ is $-1$ . What is the remainder modulo $1000$ of the sum of the squares of the windiness values taken over all possible paths that end back at vertex $A$ after $2025$ seconds?
