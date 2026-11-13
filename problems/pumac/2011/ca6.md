---
tag: GA7TW966JM
kind: problem
appearances:
  - at: pumac/2011/ca6
    primary: true
  - at: pumac/2011/cb7
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
    url: https://artofproblemsolving.com/community/c6h1920833
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7033
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every integer $n$ from $0$ to $6$ , we have $3$ identical weights with weight $2^n$ . How many ways are there to form a total weight of 263 grams using only these given weights?
