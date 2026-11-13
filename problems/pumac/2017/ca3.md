---
tag: ZD1KYGKFJQ
kind: problem
appearances:
  - at: pumac/2017/ca3
    primary: true
  - at: pumac/2017/cb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15915
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a box containing $100$ balls, each of which is either orange or black. The box is equally likely to contain any number of black balls between $0$ and $100$ , inclusive. A random black ball rolls out of the box. The probability that the next ball to roll out of the box is also black can be written in the form $\tfrac{p}{q}$ where $p$ and $q$ are relatively prime positive integers. Find $p + q$ .
