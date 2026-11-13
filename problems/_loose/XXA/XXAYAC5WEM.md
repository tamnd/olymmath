---
tag: XXAYAC5WEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Danube Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1536291
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15308
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2017
    source: hf-ai-mo-aops
    label: 2017 Danube Mathematical Olympiad
---
Find all polynomials $P(x)$ with integer coefficients such that $a^2+b^2-c^2$ divides $P(a)+P(b)-P(c)$ , for all integers $a,b,c$ .
