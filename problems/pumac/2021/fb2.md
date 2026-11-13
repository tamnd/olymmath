---
tag: GZZEDJWCBC
kind: problem
appearances:
  - at: pumac/2021/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834949
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73333
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime. Prove that for every integer $k$ , there exist integers $a, b$ such that $p|a^2 + b^2 - k$ .
