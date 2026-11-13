---
tag: 33CMD58CEM
kind: problem
appearances:
  - at: pumac/2013/na4
    primary: true
  - at: pumac/2013/nb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563954
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10183
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d$ be the greatest common divisor of $2^{30^{10}}-2$ and $2^{30^{45}}-2$ . Find the remainder when $d$ is divided by $2013$ .
