---
tag: 7NWCWCAKQX
kind: problem
appearances:
  - at: pumac/2024/na6
    primary: true
  - at: pumac/2024/nb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2024 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2024_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450689
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73492
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let Pascal's triangle be constructed where each $\tbinom{n}{i}$ is written inside its own cell in row $n.$ Colby colors the cells red for $1 \le n \le 63$ when $\tbinom{n}{i}$ is divisible by $4.$ How many cells does he color red?
