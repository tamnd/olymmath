---
tag: CKJJN2QKP2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2013107
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49527
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2003
    source: hf-ai-mo-aops
    label: 2003 Abels Math Contest (Norwegian MO)
---
Find all pairs $(x, y)$ of integers numbers such that $y^3+5=x(y^2+2)$
