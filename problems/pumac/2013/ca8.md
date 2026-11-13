---
tag: CCXEMASVXQ
kind: problem
appearances:
  - at: pumac/2013/ca8
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
    url: https://artofproblemsolving.com/community/c6h563846
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10177
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eight all different sushis are placed evenly on the edge of a round table, whose surface can rotate around the center. Eight people also evenly sit around the table, each with one sushi in front. Each person has one favorite sushi among these eight, and they are all distinct. They find that no matter how they rotate the table, there are never more than three people who have their favorite sushis in front of them simultaneously. By this requirement, how many different possible arrangements of the eight sushis are there? Two arrangements that differ by a rotation are considered the same.
