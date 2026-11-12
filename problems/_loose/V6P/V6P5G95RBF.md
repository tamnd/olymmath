---
tag: V6P5G95RBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2994783
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2015
    source: hf-ai-mo-aops
    label: 2015 Switzerland - Final Round
---
We have an $8\times 8$ board. An *interior* edge is an edge between two $1 \times 1$ cells. we cut the board into $1 \times 2$ dominoes. For an inner edge $k$ , $N(k)$ denotes the number of ways to cut the board so that it cuts along edge $k$ . Calculate the last digit of the sum we get if we add all $N(k)$ , where $k$ is an inner edge.
