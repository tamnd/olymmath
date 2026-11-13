---
tag: VH8X6N1MDT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h480346
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8201
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Kazakhstan National Olympiad
---
Do there exist a infinite sequence of positive integers $(a_{n})$ ,such that for any $n\ge 1$ the relation $ a_{n+2}=\sqrt{a_{n+1}}+a_{n} $ ?
