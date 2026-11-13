---
tag: M7RJSPAYXQ
kind: problem
appearances:
  - at: pumac/2010/ca2
    primary: true
  - at: pumac/2010/cb3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425824
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5452
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207600
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\underline{xyz}$ represent the three-digit number with hundreds digit $x$ , tens digit $y$ , and units digit $z$ , and similarly let $\underline{yz}$ represent the two-digit number with tens digit $y$ and units digit $z$ . How many three-digit numbers $\underline{abc}$ , none of whose digits are 0, are there such that $\underline{ab}>\underline{bc}>\underline{ca}$ ?
