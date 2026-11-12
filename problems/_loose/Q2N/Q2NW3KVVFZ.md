---
tag: Q2NW3KVVFZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11137
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2009
    source: hf-ai-mo-aops
    label: 2009 JBMO Shortlist
  - at: jbmo-sl/2009
    source: hf-numina-olympiads
    label: JBMO-SL
---
Find all pairs $(x,y)$ of integers which satisfy the equation $(x + y)^2(x^2 + y^2) = 2009^2$
