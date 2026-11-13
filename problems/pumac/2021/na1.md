---
tag: EY791KZVGZ
kind: problem
appearances:
  - at: pumac/2021/na1
    primary: true
  - at: pumac/2021/nb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834922
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73319
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the remainder when $2^{3^5}+ 3^{5^2}+ 5^{2^3}$ is divided by $30$ .
