---
tag: 3CBWGRDE5H
kind: problem
appearances:
  - at: pumac/2012/aa1
    primary: true
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
    url: https://artofproblemsolving.com/community/c6h1927394
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8570
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the smallest positive integer $a$ for which $$ \sqrt{a +\sqrt{a +...}} - \frac{1}{a +\frac{1}{a+...}}> 7 $$
