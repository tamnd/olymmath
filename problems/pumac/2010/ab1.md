---
tag: RET0DT7PER
kind: problem
appearances:
  - at: pumac/2010/ab1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_AlgebraB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425807
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5447
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the operation $\bigstar$ be defined by $x\bigstar y=y^x-xy$ . Calculate $(3\bigstar4)-(4\bigstar3)$ .
