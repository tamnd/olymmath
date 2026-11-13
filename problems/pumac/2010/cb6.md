---
tag: GH8ZJWDE94
kind: problem
appearances:
  - at: pumac/2010/cb6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_CombinatoricsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425834
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5461
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A regular pentagon is drawn in the plane, along with all its diagonals. All its sides and diagonals are extended infinitely in both directions, dividing the plane into regions, some of which are unbounded. An ant starts in the center of the pentagon, and every second, the ant randomly chooses one of the edges of the region it's in, with an equal probability of choosing each edge, and crosses that edge into another region. If the ant enters an unbounded region, it explodes. After first leaving the central region of the pentagon, let $x$ be the expected number of times the ant re-enters the central region before it explodes. Find the closest integer to $100x$ .
