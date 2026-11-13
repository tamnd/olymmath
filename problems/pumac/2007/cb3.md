---
tag: ADZXE8HE0E
kind: problem
appearances:
  - at: pumac/2007/cb3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_CombinatoricsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506112
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73126
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $80 \times 80$ grid is colored orange and black. A square is black if and only if either the square below it or the square to the left of it is black, but not both (If there is no such square, consider it as if it were orange). The only exception is the bottom left square, which is black. Consider the diagonal from the upper left to the lower right. How many black squares does this diagonal have?
