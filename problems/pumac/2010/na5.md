---
tag: V9BVH5MCCT
kind: problem
appearances:
  - at: pumac/2010/na5
    primary: true
  - at: pumac/2010/nb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h426009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5478
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $x$ , $y$ are positive integers with $x(x+1)|y(y+1)$ , but neither $x$ nor $x+1$ divides either of $y$ or $y+1$ , and $x^2 + y^2$ as small as possible, find $x^2 + y^2$ .
