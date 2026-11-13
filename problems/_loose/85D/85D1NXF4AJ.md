---
tag: 85D1NXF4AJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h285854
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44736
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1994
    source: hf-ai-mo-aops
    label: 1994 Irish Math Olympiad
---
Find all real polynomials $ f(x)$ satisfying $ f(x^2)=f(x)f(x-1)$ for all $ x$ .
