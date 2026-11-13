---
tag: VPHQ8GW2W5
kind: problem
appearances:
  - at: pumac/2008/na8
    primary: true
  - at: pumac/2008/nb9
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927062
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73183
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sets of three primes $p, q$ , and $r$ such that $p + q = r$ and $(r -p)(q - p) - 27p$ is a perfect square.
