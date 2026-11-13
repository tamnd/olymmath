---
tag: 7AER7F3AAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h365233
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5084
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2010
    source: hf-ai-mo-aops
    label: 2010 International Zhautykov Olympiad
---
In every vertex of a regular $n$ -gon exactly one chip is placed. At each $step$ one can exchange any two neighbouring chips. Find the least number of steps necessary to reach the arrangement where every chip is moved by $[\frac{n}{2}]$ positions clockwise from its initial position.
