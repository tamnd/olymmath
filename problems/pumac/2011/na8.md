---
tag: 5QBHHTT1AH
kind: problem
appearances:
  - at: pumac/2011/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7057
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the sum of the coordinates of all pairs of positive integers $(n, k)$ such that $k\equiv 0, 3\pmod 4$ , $n > k$ , and $ \sum^n_{i = k + 1} i^3 = (96^2\cdot3 - 1) \left(\sum^k_{i = 1} i\right)^2 + 48^2$
