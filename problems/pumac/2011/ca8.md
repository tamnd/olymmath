---
tag: A8BT8D3A8Q
kind: problem
appearances:
  - at: pumac/2011/ca8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920836
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A road company is trying to build a system of highways in a country with $21$ cities. Each highway runs between two cities. A trip is a sequence of distinct cities $C_1,\dots, C_n$ , for which there is a highway between $C_i$ and $C_{i+1}$ . The company wants to fulfill the following two constraints:
(1) for any ordered pair of distinct cities $(C_i, C_j)$ , there is exactly one trip starting at $C_i$ and ending at $C_j$ .
(2) if $N$ is the number of trips including exactly 5 cities, then $N$ is maximized.
What is this maximum value of $N$ ?
