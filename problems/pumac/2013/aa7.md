---
tag: R8DX8ZJ8CW
kind: problem
appearances:
  - at: pumac/2013/aa7
    primary: true
  - at: pumac/2013/ab7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563692
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10148
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate $$\sqrt{2013+276\sqrt{2027+278\sqrt{2041+280\sqrt{2055+\ldots}}}}$$
