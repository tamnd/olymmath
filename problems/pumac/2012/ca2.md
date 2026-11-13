---
tag: Y9W7ZHA739
kind: problem
appearances:
  - at: pumac/2012/ca2
    primary: true
  - at: pumac/2012/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927380
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many ways are there to arrange the $6$ permutations of the tuple $(1, 2, 3)$ in a sequence, such that each pair of adjacent permutations contains at least one entry in common?
For example, a valid such sequence is given by $(3, 2, 1) - (2, 3, 1) - (2, 1, 3) - (1, 2, 3) - (1, 3, 2) - (3, 1, 2)$ .
