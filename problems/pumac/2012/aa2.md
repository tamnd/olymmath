---
tag: 79XNDW0ZQN
kind: problem
appearances:
  - at: pumac/2012/aa2
    primary: true
  - at: pumac/2012/ab4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8571
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $x, y$ , and $z$ are real numbers with $\frac{x - y}{z}+\frac{y - z}{x}+\frac{z - x}{y}= 36$ , find $2012 +\frac{x - y}{z}\cdot \frac{y - z}{x}\cdot\frac{z - x}{y}$ .
