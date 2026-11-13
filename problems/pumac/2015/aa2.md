---
tag: 405281JSGW
kind: problem
appearances:
  - at: pumac/2015/aa2
    primary: true
  - at: pumac/2015/ab4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165940
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12954
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are real numbers $a, b, c, d$ such that for all $(x, y)$ satisfying $6y^2 = 2x^3 + 3x^2 + x$ , if $x_1 = ax + b$ and $y_1 = cy + d$ , then $y_1^2 = x_1^3 - 36x_1$ . What is $a + b + c + d$ ?
