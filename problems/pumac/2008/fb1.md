---
tag: TDHZ7443X4
kind: problem
appearances:
  - at: pumac/2008/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927076
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73189
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive real numbers $(a,b)$ such that $\frac{n-2}{a} \leq \left\lfloor bn \right\rfloor < \frac{n-1}{a}$ for all positive integes $n$ .
