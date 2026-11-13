---
tag: VMV2Y4J581
kind: problem
appearances:
  - at: pumac/2008/nb5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_NumberTheoryB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927073
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73187
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many integers $n$ are there such that $0 \le n \le 720$ and $n^2 \equiv 1$ (mod $720$ )?
