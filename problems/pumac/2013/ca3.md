---
tag: DKPXZGT64Q
kind: problem
appearances:
  - at: pumac/2013/ca3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563839
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10170
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many tuples of integers $(a_0,a_1,a_2,a_3,a_4)$ are there, with $1\leq a_i\leq 5$ for each $i$ , so that $a_0<a_1>a_2<a_3>a_4$ ?
