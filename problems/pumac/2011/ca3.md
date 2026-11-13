---
tag: WRM0630AP0
kind: problem
appearances:
  - at: pumac/2011/ca3
    primary: true
  - at: pumac/2011/cb5
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
    url: https://artofproblemsolving.com/community/c6h1920830
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7030
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two points are chosen uniformly at random on the sides of a square with side length 1. If $p$ is the probability that the distance between them is greater than $1$ , what is $\lfloor 100p \rfloor$ ? (Note: $\lfloor x \rfloor$ denotes the greatest integer less than or equal to $x$ .)
