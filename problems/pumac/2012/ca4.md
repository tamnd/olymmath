---
tag: PZKYHH5AMY
kind: problem
appearances:
  - at: pumac/2012/ca4
    primary: true
  - at: pumac/2012/cb6
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
    url: https://artofproblemsolving.com/community/c6h1927382
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8563
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many (possibly empty) sets of lattice points $\{P_1, P_2, ... , P_M\}$ , where each point $P_i =(x_i, y_i)$ for $x_i
, y_i \in \{0, 1, 2, 3, 4, 5, 6\}$ , satisfy that the slope of the line $P_iP_j$ is positive for each $1 \le i < j \le M$ ? An infinite slope, e.g. $P_i$ is vertically above $P_j$ , does not count as positive.
