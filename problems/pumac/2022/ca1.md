---
tag: 5ZTMBRJD70
kind: problem
appearances:
  - at: pumac/2022/ca1
    primary: true
  - at: pumac/2022/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444922
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the country of PUMaC-land, there are $5$ villages and $3$ cities. Vedant is building roads
between the $8$ settlements according to the following rules:
a) There is at most one road between any two settlements;
b) Any city has exactly three roads connected to it;
c) Any village has exactly one road connected to it;
d) Any two settlements are connected by a path of roads.
In how many ways can Vedant build the roads?
