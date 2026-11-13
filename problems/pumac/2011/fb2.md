---
tag: CMFN27YNDA
kind: problem
appearances:
  - at: pumac/2011/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920880
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7064
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove for irrational number $\alpha$ and positive integer $n$ that $$ \left( \alpha + \sqrt{\alpha^2 - 1} \right)^{1/n} + \left(\alpha - \sqrt{\alpha^2 - 1} \right)^{1/n} $$ is irrational.
