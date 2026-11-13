---
tag: 1Z5DXTHAKZ
kind: problem
appearances:
  - at: pumac/2021/aa1
    primary: true
  - at: pumac/2021/ab3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Algebra_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73309
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the sum of all real numbers x which satisfy the following equation $$ \frac {8^x - 19 \cdot 4^x}{16 - 25 \cdot 2^x}= 2 $$
